import { ReactNode } from "react";

export type RecordResponse = {
    content: RecordItem[];
    totalPages: number;
};

export type RecordItem = {
    id: number;
    date: string;
    voter: string;
    age: number;
    gamePlatform: Platform;
    gameGenre: string;
    gameName: string;
}

export type Platform = 'Playstation' | 'PC' | 'Xbox';

export type RecordContextType = {
    records: RecordResponse;
    setRecords: (newRecord: RecordResponse) => void;
}

export type RecordContextProps = {
    children: ReactNode;
}