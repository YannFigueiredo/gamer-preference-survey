import { ReactNode } from "react";

export type RecordResponse = {
    content: RecordItem[];
    totalPages: number;
};

export type RecordItem = {
    id: number;
    createdAt: string;
    voter: string;
    age: number;
    GameId: number;
    gamePlatform?: string;
    gameGenre?: string;
    gameName?: string;
}

export type Platform = 'Playstation' | 'PC' | 'Xbox';

export type RecordContextType = {
    records: RecordResponse;
    setRecords: (newRecord: RecordResponse) => void;
    page: string;
    setPage: (newPage: string) => void;
    filter: string;
    setFilter: (newFilter: string) => void;
}

export type RecordContextProps = {
    children: ReactNode;
}

export type GameItem = {
    id: number;
    title: string;
    platform: Platform;
    GenreId: number;
};

export type GameContextType = {
    games: GameItem[];
    setGames: (newGame: GameItem[]) => void;
}

export type GameContextProps = {
    children: ReactNode;
}