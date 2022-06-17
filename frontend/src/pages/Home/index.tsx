import { Container, Info, Art, ButtonHome } from './styles';
import { Link } from 'react-router-dom';
import art from '../../assets/home-art.png'; 
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export default function Home(){
    return(
        <Container>
            <Info>
                <div>
                    <h1>
                        Quais jogos a comunidade está jogando mais?
                    </h1>
                    <span>
                        Clique no botão abaixo e descubra a preferência dos gamers!
                    </span>
                </div>
                <Link to='/reacords'>
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