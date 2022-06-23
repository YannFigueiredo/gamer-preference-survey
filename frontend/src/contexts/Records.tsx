import { createContext, useState, useEffect } from 'react';
import recordsApi from '../services/records-api';
import { RecordResponse, RecordContextType, RecordContextProps } from './types';

const initialValue = {
    records: {content: [], totalPages: 0},
    setRecords: () => {},
    page: '0',
    setPage: () => {}
}

export const RecordContext = createContext<RecordContextType>(initialValue);

export default function RecordProvider({children}: RecordContextProps){
    const [ records, setRecords ] = useState<RecordResponse>(initialValue.records);
    const [ page, setPage ] = useState(initialValue.page);

    async function loadApi(){
        await recordsApi.get(`/votes?linesPerPage=12&page=${page}`)
        .then(response => {
            setRecords(response.data);
        })
        .catch((error) => {console.error("Erro: " + error)});
    }

    useEffect(() => {loadApi();}, [page]);

    return(
        <RecordContext.Provider value={{records, setRecords, page, setPage}}>
            {children}
        </RecordContext.Provider>
    );
}