import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useContext, useState, useEffect } from 'react';
import { RecordContext } from '../../contexts/Records';
import apiRecords from '../../services/records-api';

type Props = {
    link: string,
    textButton: string,
    justifyContent: string
}

export default function Filters({link, textButton, justifyContent}: Props){
    const { setRecords, page, setPage } = useContext(RecordContext);
    const [ minDate, setMinDate ] = useState<string>('');
    const [ maxDate, setMaxDate ] = useState<string>('');

    useEffect(() => {
        async function loadApi(){
            await apiRecords.get(`/votes`, {
                params: {
                    page: page,
                    linesPerPage: 12,
                    orderBy: 'date',
                    direction: 'DESC',
                    min: minDate,
                    max: maxDate
                }
            })
            .then(response => {
                setRecords(response.data);
            })
            .catch(error => {
                console.log("Erro: " + error);
            });
        }

        if(minDate !== '' && maxDate !== ''){
            setPage('0');

            loadApi();
        }
    }, [minDate, maxDate]);

    return(
        <Container style={{justifyContent: justifyContent}}>
            {
                link === '/graphics' &&
                <div>
                    <input type='date' placeholder='Data inicial' id='min-date' onChange={(e) => {
                        setMinDate(e.target.value+'T00:00:00Z');
                    }}/>
                    <input type='date' placeholder='Data final' id='max-date' onChange={(e) => {
                        setMaxDate(e.target.value+'T23:59:59Z');
                    }}/>
                    <button id='btn-reset-filter'>Limpar pesquisa</button>
                </div>
            }
            <Link to={link}>
                <button id='btn-link'>{textButton}</button>
            </Link>
        </Container>
    );
}