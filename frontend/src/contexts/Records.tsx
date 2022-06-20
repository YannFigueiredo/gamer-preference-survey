import { createContext, useState, useEffect } from 'react';
import recordsApi from '../services/records-api';
import { RecordResponse, RecordContextType, RecordContextProps } from './types';

const initialValue = {
    records: {content: [], totalPages: 0},
    setRecords: () => {}
}

export const RecordContext = createContext<RecordContextType>(initialValue);

export default function RecordProvider({children}: RecordContextProps){
    const [ records, setRecords ] = useState<RecordResponse>(initialValue.records);

    useEffect(() =>{
        async function loadApi(){
            await recordsApi.get('/votes?linesPerPage=12')
            .then(response => {
                console.log(response);
                setRecords(response.data);
            })
            .catch((error) => {console.error("Erro: " + error)});
        }

        loadApi();
    }, []);

    return(
        <RecordContext.Provider value={{records, setRecords}}>
            {children}
        </RecordContext.Provider>
    );
}