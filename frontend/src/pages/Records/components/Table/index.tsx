import { Container, ContainerTable, Pages } from './styles';
import { useContext } from 'react';
import { RecordContext } from '../../../../contexts/Records';
import { formatDate } from '../../helpers';

export default function Table(){
    const { records, page, setPage } = useContext(RecordContext);
    const paginationItems = Array.from(Array(records.totalPages).keys());
        
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
                                <td>{formatDate(record.date)}</td>
                                <td>{record.voter}</td>
                                <td>{record.age}</td>
                                <td>{record.gamePlatform}</td>
                                <td>{record.gameGenre}</td>
                                <td>{record.gameName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContainerTable>
            <Pages>
                {
                    paginationItems.map(item => (
                        <button key={item} className={page === item.toString() ? 'active' : ''} onClick={() => {setPage(item.toString());}}>{item + 1}</button>
                    ))
                }
            </Pages>
        </Container>
    );
}