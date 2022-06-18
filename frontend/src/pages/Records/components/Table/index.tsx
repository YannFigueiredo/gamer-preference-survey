import { Container } from './styles';
import { useState } from 'react';

export default function Table(){
    const [ records, setRecords ] = useState([
        {id: 0, instant: '17/06/2022 20:10', name: 'Yann Figueiredo', age: 27, platform: 'Playstation', genre: 'Ação', game: 'God of War'},
        {id: 1, instant: '17/06/2022 20:10', name: 'Max Figueiredo', age: 3, platform: 'Xbox', genre: 'Ação', game: 'Halo'},
        {id: 2, instant: '17/06/2022 20:10', name: 'Kratos Soares', age: 33, platform: 'Playstation', genre: 'Horror', game: 'The Last of US'},
        {id: 3, instant: '17/06/2022 20:10', name: 'Lucas Fidalgo', age: 28, platform: 'PC', genre: 'RPG', game: 'Final fantasy'},
        {id: 4, instant: '17/06/2022 20:10', name: 'Bruto Hernandez', age: 15, platform: 'PC', genre: 'Ação', game: 'Fall guys'}
    ]);

    return(
        <Container>
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
                    {records.map(record => (
                        <tr key={record.id}>
                            <td>{record.instant}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td>{record.platform}</td>
                            <td>{record.genre}</td>
                            <td>{record.game}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}