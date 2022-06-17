import { Container, ContainerLogo } from './styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header(){
    return(
        <Container>
            <ContainerLogo>
                <div>
                    <Link to='/'>   
                        <Logo/>
                    </Link>
                </div>
                <Link to='/'><span>Gamer Preference</span> Survey</Link>
            </ContainerLogo>
        </Container>
    );
}