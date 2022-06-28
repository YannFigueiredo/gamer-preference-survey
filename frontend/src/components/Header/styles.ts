import styled from 'styled-components';

export const Container = styled.header `
    background-color: var(--color-gray);
    padding: 10px var(--padding-standard);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`

export const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    
    div{
        width: 30px;
        margin-right: 8px;
    }

    div svg path{
        width: 100%;
        fill: var(--color-light-green);
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        font-weight: 700;
    }

    a span{
        color: var(--color-gold-yellow);
    }
`

export const Menu = styled.nav `
    ul{
        justify-content: space-between;
        align-items: center;
    }

    ul.menu-opened{
        display: flex;
    } 

    ul.menu-closed{
        display: none;
    }
    
    ul a{
        text-decoration: none;
        color: var(--color-gold-yellow);
        font-size: 1em;
        display: inline-block;
        margin-right: 15px;
        transition: all linear .4s;
    }

    ul a:hover{
        color: var(--color-light-green);
    }

    ul a.active{
        color: var(--color-light-green);
    }

    ul li{
        list-style: none;
    }

    #btn-menu{
        display: none;
        color: var(--color-gold-yellow);
        cursor: pointer;
    }

    #btn-menu-close{
        display: none;
    }

    @media screen and (max-width: 768px) {
        #btn-menu, #btn-menu-close{
            display: inline-block;
        }

        ul{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: var(--color-dark-green-primary);
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 998;
            padding: 25px 0 0 var(--padding-standard);
        }

        ul a{
            font-weight: 700;
            font-size: 1.6em;
            margin-right: 0;
            margin-bottom: 15px;
        }

        #btn-menu-close{
            color: var(--color-light-green);
            cursor: pointer;
            z-index: 999;
            position: fixed;
            top: 0;
            right: 0;
            font-weight: 700;
            margin: 25px var(--padding-standard) 0 0;
        }
    }
`