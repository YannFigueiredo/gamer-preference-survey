import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    h1{
        font-weight: 700;
        font-size: 3em;
        color: var(--color-gold-yellow);
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        h1{
            font-size: 2em;
        }
    }
`