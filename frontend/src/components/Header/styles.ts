import styled from 'styled-components';

export const Container = styled.header `
    background-color: var(--color-gray);
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        font-size: 1em;
        font-weight: 700;
    }

    a span{
        color: var(--color-gold-yellow);
    }
`