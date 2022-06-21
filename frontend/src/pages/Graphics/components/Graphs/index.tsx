import { Container, GamesStats, OthersStats, PlatformsStats, GenresStats } from './styles';

export default function Graphs(){
    return(
        <Container>
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
        </Container>
    );
}