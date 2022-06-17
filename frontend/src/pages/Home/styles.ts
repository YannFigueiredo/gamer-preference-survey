import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px var(--padding-standard);
`

export const Info = styled.div `
    width: 550px;

    a{
        text-decoration: none;
    }

    div{
        display: flex;
        flex-direction: column;
    }
    
    div h1{
        color: var(--color-light-green);
        font-size: 2.7em;
        font-weight: 700;
        display: inline-block;
        margin-bottom: 8px;
    }

    div span{
        color: var(--color-gold-yellow);
        font-size: 1.2em;
        font-weight: 700;
    }
`

export const ButtonHome = styled.div `
    margin-top: 75px;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: flex-start;
    color: black;
    height: 50px;

    div{
        padding: 12px;
        height: 100%;
    }

    div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-light-green);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 100%;
        transition: all linear .7s;
    }

    div:nth-child(1) span{
        text-transform: uppercase;
        color: black;
    }

    div:nth-child(1):hover{
        background-color: var(--color-light-green-hover);
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-gold-yellow);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        height: 100%;
    }

    div:nth-child(2) svg{
        width: 10px;
        height: 20px;
        max-width: 100%;
        max-height: 100%;
    }

    div:nth-child(2) svg path{
        stroke: var(--color-dark-green-secondary);
    }
`

export const Art = styled.div `
    width: 420px;
    margin-left: 40px;
    
    img{
        width: 100%;
    }
`