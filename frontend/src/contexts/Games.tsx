import { createContext, useState, useEffect } from 'react';
import recordsApi from '../services/records-api';
import { GameItem, GameContextType, GameContextProps } from './types';

const initialValue = {
    games: [],
    setGames: () => {}
}

export const GameContext = createContext<GameContextType>(initialValue);

export default function GameProvider({children}: GameContextProps){
    const [ games, setGames ] = useState<GameItem[]>(initialValue.games);

    useEffect(() => {
        async function loadApi(){
            await recordsApi.get('/games')
            .then(response => {
                setGames(response.data);
            })
            .catch((error) => {console.error("Erro tes: " + error)});
        }

        loadApi();
    }, []);

    return(
        <GameContext.Provider value={{games, setGames}}>
            { children }
        </GameContext.Provider>
    );
}  