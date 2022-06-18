import { Container } from './styles';
import Options from './components/Options';
import Table from './components/Table';

export default function Records(){
    return(
        <Container>
            <Options/>
            <Table/>
        </Container>
    );
}