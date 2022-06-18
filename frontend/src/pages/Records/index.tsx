import { Container } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Options from './components/Options';
import Table from './components/Table';

export default function Records(){
    const [ records, setRecords ] = useState([
        {id: 0, instant: '17/06/2022 20:10', name: 'Yann Figueiredo', platform: 'Playstation', genre: 'Ação', game: 'God of War'},
        {id: 1, instant: '17/06/2022 20:10', name: 'Max Figueiredo', platform: 'Xbox', genre: 'Ação', game: 'Halo'},
        {id: 2, instant: '17/06/2022 20:10', name: 'Kratos Soares', platform: 'Playstation', genre: 'Horror', game: 'The Last of US'},
        {id: 3, instant: '17/06/2022 20:10', name: 'Lucas Fidalgo', platform: 'PC', genre: 'RPG', game: 'Final fantasy'},
        {id: 4, instant: '17/06/2022 20:10', name: 'Bruto Hernandez', platform: 'PC', genre: 'Ação', game: 'Fall guys'}
    ]);

    return(
        <Container>
            <Options/>
            <Table/>
        </Container>
    );
}