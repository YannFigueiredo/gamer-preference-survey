import styled from 'styled-components';

export const Container = styled.div `
    padding: 10px var(--padding-standard);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    form{
        width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #btn-submit{
        border: none;
        background-color: var(--color-light-green);
        height: 44px;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        border-radius: 8px;
        text-transform: uppercase;
        color: var(--color-dark-green-secondary);
        transition: all linear .4s;
        width: 272px;
        margin-top: 80px;
    }

    #btn-submit:hover{
        background-color: var(--color-light-green-hover);
    }

    select{
        background-color: white;
        color: rgba(11, 59, 23, .6);
        width: 50%;
    }

    input, select{
        margin-right: 0;
    }

    @media screen and (max-width: 768px){
        height: auto;
        margin-top: 25px;
        margin-bottom: 15px;

        select{
            width: 65%;
        }

        #btn-submit{
            width: 200px;
        }
    }
`

export const PessoalInfos = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: auto;
    grid-column-gap: 2%;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            width: 65%;
        }

        input:first-child{
            margin-bottom: 20px;
        }
    }
`

export const PlatformsCards = styled.div `
    display: grid;
    width: 480px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 8px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        width: 370px;
    }
`

export const Card = styled.div `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: white;
    border-radius: 8px;
    transition: all linear .4s;

    &.active{
        background-color: var(--color-light-green-hover);
    }

    &.active div svg path{
        fill: var(--color-dark-green-primary); 
    }

    &.active span{
        color: var(--color-dark-green-primary); 
    }

    div{
        margin-bottom: 50px;
        height: 40px;
    }

    div svg{
        width: 100%;
        transition: all linear .4s;
    }

    span{
        display: inline-block;
        font-weight: 700;
        color: var(--color-gray-light);
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px){
        height: 150px;
        
        span{
            font-size: 0.8em;
        }
    }
`