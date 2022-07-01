import { createContext, useState, useEffect } from 'react';
import recordsApi from '../services/records-api';
import { RecordResponse, RecordContextType, RecordContextProps } from './types';

const initialValue = {
    records: {content: [], totalPages: 0},
    setRecords: () => {},
    page: '0',
    setPage: () => {},
    filter: '',
    setFilter: () => {}
}

export const RecordContext = createContext<RecordContextType>(initialValue);

export default function RecordProvider({children}: RecordContextProps){
    const [ records, setRecords ] = useState<RecordResponse>(initialValue.records);
    const [ page, setPage ] = useState<string>(initialValue.page);
    const [ filter, setFilter ] = useState<string>(initialValue.filter);

    async function loadApi(){
        await recordsApi.get(`/votes?linesPerPage=12&page=${page}${filter}`)
        .then(response => {
            setRecords(response.data);
        })
        .catch((error) => {console.error("Erro: " + error)});
    }

    useEffect(() => {
        loadApi();
    }, [page, filter]);

    return(
        <RecordContext.Provider value={{records, setRecords, page, setPage, filter, setFilter}}>
            {children}
        </RecordContext.Provider>
    );
}