import { Container, Info, Intro, Art, ButtonHome } from './styles';
import { Link } from 'react-router-dom';
import art from '../../assets/home-art.png'; 
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export default function Home(){
    return(
        <Container>
            <Info>
                <Intro>
                    <h1>
                        Quais jogos a comunidade está jogando mais?
                    </h1>
                    <span>
                        Vote no seu jogo favorito e confira os mais populares!
                    </span>
                </Intro>
                <Link to='/registration'>
                    <ButtonHome>
                        <div>
                            <span>Votar em um jogo</span>
                        </div>
                        <div>
                            <Arrow/>
                        </div>
                    </ButtonHome>
                </Link>
                <Link to='/records'>
                    <ButtonHome>
                        <div>
                            <span>Ver jogos populares</span>
                        </div>
                        <div>
                            <Arrow/>
                        </div>
                    </ButtonHome>
                </Link>
            </Info>
            <Art>
                <img src={art} alt='Home art'></img>
            </Art>
        </Container>
    );
}