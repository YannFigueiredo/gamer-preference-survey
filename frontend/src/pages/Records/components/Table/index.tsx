import { Container, ContainerTable, Pages } from './styles';
import { useContext, useEffect, useState } from 'react';
import { RecordContext } from '../../../../contexts/Records';
import { GameContext } from '../../../../contexts/Games';
import recordsApi from '../../../../services/records-api';
import { formatDate } from '../../helpers';

type GenreItem = {
  id: number;
  name: string;
}

export default function Table(){
    const { records, page, setPage } = useContext(RecordContext);
    const { games } = useContext(GameContext);
    const [ genres, setGenres ] = useState<GenreItem[]>([]);
    const paginationItems = Array.from(Array(records.totalPages).keys());

    const getPlatform = (gameId: number) => {
      const game =  games.filter(game => game.id === gameId)[0];

      return game ? game.platform : "";
    };

    const getName = (gameId: number) => {
      const game =  games.filter(game => game.id === gameId)[0];

      return game ? game.title : "";
    };

    const getGenre = (gameId: number) => {
      const game =  games.filter(game => game.id === gameId)[0];
      let genre: string = "";

      if(game) genre = genres.filter(genre => game.GenreId === genre.id)[0].name;

      return genre ? genre : "";
    }

    useEffect(() => {
      const loadGenres = async () => {
        setGenres(await recordsApi.get('/genres')
        .then(response => {return response.data})
        .catch(error => {
          console.error("Erro ao listar ps gêneros: ", error);
          throw error;
        }));
      };

      loadGenres();
    }, []);

    useEffect(() => {
      console.log(games);
      console.log(genres);
    }, [games, records]);
        
    return(
        <Container>
            <ContainerTable>
                <table>
                    <thead>
                        <tr>
                            <th>Instante</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Plataforma</th>
                            <th>Gênero</th>
                            <th>Título do game</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.content.map(record => (
                            <tr key={record.id}>
                                <td>{formatDate(record.createdAt)}</td>
                                <td>{record.voter}</td>
                                <td>{record.age}</td>
                                <td>{getPlatform(record.GameId)}</td>
                                <td>{getGenre(record.GameId)}</td>
                                <td>{getName(record.GameId)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContainerTable>
            <Pages>
                {
                    paginationItems.map(item => (
                        <button 
                          key={item} 
                          className={(parseInt(page) - 1).toString() === item.toString() ? 'active' : ''} 
                          onClick={
                            () => {
                              const pageItem = item + 1;
                              setPage(pageItem.toString());
                            }
                          }
                        >
                          {item + 1}
                        </button>
                    ))
                }
            </Pages>
        </Container>
    );
}