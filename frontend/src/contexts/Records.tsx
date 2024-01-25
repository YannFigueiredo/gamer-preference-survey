import { createContext, useState, useEffect } from 'react';
import recordsApi from '../services/records-api';
import { RecordResponse, RecordContextType, RecordContextProps, GameItem } from './types';

const initialValue = {
    records: {content: [], totalPages: 0},
    setRecords: () => {},
    page: '1',
    setPage: () => {},
    filter: '',
    setFilter: () => {}
}

type GenreItem = {
  id: number,
  name: string
};

export const RecordContext = createContext<RecordContextType>(initialValue);

export default function RecordProvider({children}: RecordContextProps){
    const [ records, setRecords ] = useState<RecordResponse>(initialValue.records);
    const [ page, setPage ] = useState<string>(initialValue.page);
    const [ filter, setFilter ] = useState<string>(initialValue.filter);
    const [ games, setGames ] = useState<GameItem[]>([]);
    const [ genres, setGenres ] = useState<GenreItem[]>([]);

    async function loadApi(){
        await recordsApi.get(`/votes?linesPerPage=2&page=${page}${filter}`)
        .then(response => {
            setRecords(response.data);
        })
        .catch((error) => {console.error("Erro: " + error)});
    }

    useEffect(() => {
      const loadGameInfos = async () => {
        setGames(
          await recordsApi.get("/games").
          then(response => {
            return response.data
          }).catch(error => {
            console.error("Erro ao listar os jogos: ", error)
          })
        );

        setGenres(
          await recordsApi.get("/genres").
          then(response => {
            return response.data
          }).catch(error => {
            console.error("Erro ao listar os gêneros: ", error)
          })
        );
      };

      loadGameInfos();
    }, []);

    useEffect(() => {
      loadApi();
    }, [page, filter]);

    /*useEffect(() => {
      setRecords(
        ...records,
        content: records.content.map(record => ({...record, gamePlatform: 'valor'}))
      );
    }, [records]);*/

    return(
        <RecordContext.Provider value={{records, setRecords, page, setPage, filter, setFilter}}>
            {children}
        </RecordContext.Provider>
    );
}