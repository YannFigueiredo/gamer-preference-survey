import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px var(--padding-standard) 10px var(--padding-standard);
    width: 100%;
    margin: auto;

    button{
        border: none;
        background: none;
        width: 272px;
        height: 44px;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        border-radius: 8px;
        text-transform: uppercase;
        color: var(--color-dark-green-secondary);
    }
`