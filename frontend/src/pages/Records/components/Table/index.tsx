import { Container, Pages } from './styles';
import { useContext, useState, useEffect } from 'react';
import { RecordContext } from '../../../../contexts/Records';
import { formatDate } from '../../helpers';

export default function Table(){
    const { records, page, setPage } = useContext(RecordContext);
    const [ totalPages, setTotalPages ] = useState<number[]>([]);

    useEffect(() => {
        let qtdePages = [];

        for(var i = 0; i < records.totalPages; i++){
            qtdePages.push(i);
        }

        setTotalPages(qtdePages);
    }, [records]);
        
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
            <Pages>
                {
                    totalPages.map(btnPage => (
                        <div key={btnPage} className={page === btnPage.toString() ? 'active' : ''} onClick={() => {setPage(btnPage.toString());}}>{btnPage+1}</div>
                    ))
                }
            </Pages>
        </Container>
    );
}