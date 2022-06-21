import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Navigation(){
    return(
        <Container>
            <Link to='/records'>
                <button id='btn-tabela'>Ver tabela</button>
            </Link>
        </Container>
    );
}