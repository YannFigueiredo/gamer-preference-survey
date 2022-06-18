import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Options(){
    return(
        <Container>
            <div>
                <input type='text' placeholder='Data inicial' id='min-date'/>
                <input type='text' placeholder='Data final' id='max-date'/>
                <button id='btn-reset-filter'>Limpar pesquisa</button>
            </div>
            <Link to='/graphics'>
                <button id='btn-graphs'>Ver gráfico</button>
            </Link>
        </Container>
    );
}