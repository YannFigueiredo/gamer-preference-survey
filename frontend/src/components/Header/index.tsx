import { Container, ContainerLogo, Menu } from './styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header(){
    const [ activePage, setActivePage ] = useState<string>(document.location.pathname);
    const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);
    const verifyWidth = () => {
        if(window.innerWidth > 768){
            setMenuIsOpen(true);
        }else{
            setMenuIsOpen(false);
        }
    };

    useEffect(() => {
        verifyWidth();

        window.addEventListener('resize', () => {
            verifyWidth();
        });
    }, []);

    useEffect(() => {setMenuIsOpen(false)}, [activePage]);

    return(
        <Container>
            <ContainerLogo>
                <div>
                    <Link to='/' onClick={() => {setActivePage('/')}}>   
                        <Logo/>
                    </Link>
                </div>
                <Link to='/' onClick={() => {setActivePage('/')}}><span>Gamer Preference</span> Survey</Link>
            </ContainerLogo>
            <Menu>
                {menuIsOpen === false &&
                <GiHamburgerMenu id='btn-menu' size={25} onClick={() => {setMenuIsOpen(true)}}/>
                }
                {menuIsOpen &&
                <AiOutlineClose id='btn-menu-close' size={25} onClick={() => {setMenuIsOpen(false)}}/> 
                }
                <ul className={menuIsOpen ? 'menu-opened' : 'menu-closed'}>
                    <Link to='/' className={activePage === '/' ? 'active' : ''} onClick={() => {setActivePage('/')}}>
                        <li>Home</li>
                    </Link>
                    <Link to='/registration' className={activePage === '/registration' ? 'active' : ''} onClick={() => {setActivePage('/registration')}}>
                        <li>Votar</li>
                    </Link>
                    <Link to='/records' className={activePage === '/records' ? 'active' : ''} onClick={() => {setActivePage('/records')}}>
                        <li>Votos</li>
                    </Link>
                    <Link to='/graphics' className={activePage === '/graphics' ? 'active' : ''} onClick={() => {setActivePage('/graphics')}}>
                        <li>Gráficos</li>
                    </Link>
                </ul>
            </Menu>
        </Container>
    );
}