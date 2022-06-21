import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: var(--color-gray);
    padding: 12px;
    border-radius: 8px;

    #btn-reset-filter{
        background-color: var(--color-gold-yellow);
        transition: all linear .4s;
    }

    #btn-reset-filter:hover{
        background-color: var(--color-gold-yellow-hover);
    }

    #btn-link{
        background-color: var(--color-light-green);
        transition: all linear .4s;
    }

    #btn-link:hover{
        background-color: var(--color-light-green-hover);
    }

    input{
        width: 272px;
        height: 44px;
        margin-right: 8px;
        border-radius: 8px;
        padding: 5px;
    }
`