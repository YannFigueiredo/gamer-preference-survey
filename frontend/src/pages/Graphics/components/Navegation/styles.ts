import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 100%;
    background-color: var(--color-gray);
    padding: 12px;
    border-radius: 8px;

    #btn-tabela{
        background-color: var(--color-light-green);
        transition: all linear .4s;
    }

    #btn-tabela:hover{
        background-color: var(--color-light-green-hover);
    }
`