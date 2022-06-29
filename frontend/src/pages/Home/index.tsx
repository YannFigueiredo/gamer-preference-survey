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
                <ButtonHome>
                    <Link to='/registration'>
                        <div>
                            <span>Votar em um jogo</span>
                        </div>
                        <div>
                            <Arrow/>
                        </div>
                    </Link>
                </ButtonHome>
                <ButtonHome>
                    <Link to='/records'>
                        <div>
                            <span>Ver jogos populares</span>
                        </div>
                        <div>
                            <Arrow/>
                        </div>
                    </Link>
                </ButtonHome>
            </Info>
            <Art>
                <img src={art} alt='Home art'></img>
            </Art>
        </Container>
    );
}