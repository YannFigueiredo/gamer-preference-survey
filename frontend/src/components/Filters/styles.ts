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

    input, button{
        width: 272px;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center !important;
    }

    @media screen and (max-width: 992px){
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        input, #btn-reset-filter{
            margin: 0 auto 5px auto;
        }
    }

    @media screen and (max-width: 1200px){
        input, button{
            width: 220px;
        }
    }
`