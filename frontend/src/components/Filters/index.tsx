import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useContext, useState, useEffect } from 'react';
import { RecordContext } from '../../contexts/Records';

type Props = {
    link: string,
    textButton: string,
    justifyContent: string
}

export default function Filters({link, textButton, justifyContent}: Props){
    const { setPage, setFilter } = useContext(RecordContext);
    const [ minDate, setMinDate ] = useState<string>('');
    const [ maxDate, setMaxDate ] = useState<string>('');

    const cleanFilter = () => {
        let inputMinDate = document.getElementById('min-date') as HTMLInputElement;
        let inputMaxDate = document.getElementById('max-date') as HTMLInputElement;
        
        setMinDate('');
        setMaxDate('');
        setPage('0');
        
        inputMinDate.value = '';
        inputMaxDate.value = '';

        setFilter('');
    };

    useEffect(() => {
        if(minDate !== '' && maxDate !== '' && (maxDate > minDate)){
            setPage('0');
            
            setFilter(`&min=${minDate}&max=${maxDate}`)
        }

        if(minDate !== '' && maxDate !== '' && (maxDate < minDate))
            alert('A data inicial precisa ser antes da final!');
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
                    <button id='btn-reset-filter' onClick={() => {cleanFilter()}}>Limpar pesquisa</button>
                </div>
            }
            <Link to={link}>
                <button id='btn-link'>{textButton}</button>
            </Link>
        </Container>
    );
}