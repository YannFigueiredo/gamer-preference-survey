import { Container } from './styles';
import { useContext } from 'react';
import { RecordContext } from '../../../../contexts/Records';

export default function Table(){
    const { records } = useContext(RecordContext);
        
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
                    {records.content.map(record => (
                        <tr key={record.id}>
                            <td>{record.date}</td>
                            <td>{record.voter}</td>
                            <td>{record.age}</td>
                            <td>{record.gamePlatform}</td>
                            <td>{record.gameGenre}</td>
                            <td>{record.gameName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}