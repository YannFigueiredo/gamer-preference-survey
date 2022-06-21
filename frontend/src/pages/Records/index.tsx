import { Container } from './styles';
import Filters from '../../components/Filters';
import Table from './components/Table';

export default function Records(){
    return(
        <Container>
            <Filters link='/graphics' textButton='Ver gráficos' justifyContent='space-between'/>
            <Table/>
        </Container>
    );
}