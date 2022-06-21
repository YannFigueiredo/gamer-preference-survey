import Filters from '../../components/Filters';
import { Container, Stats, GamesStats, OthersStats, PlatformsStats, GenresStats } from './styles';

export default function Graphics(){
    return(
        <Container>
            <Filters link='/records' textButton='Ver tabela' justifyContent='right'/>
            <Stats>
                <GamesStats>
                    <h1>Jogos mais votados</h1>
                </GamesStats>
                <OthersStats>
                    <PlatformsStats>
                        <h1>Plataformas</h1>
                    </PlatformsStats>
                    <GenresStats>
                        <h1>Gêneros</h1>
                    </GenresStats>
                </OthersStats>
            </Stats>
        </Container>
    );
}