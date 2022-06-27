import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px var(--padding-standard) 30px var(--padding-standard);
`
export const Stats = styled.div `
    display: flex;
    margin-top: 25px;
    width: 100%;

    h1, h2{
        color: white;
        font-weight: 700;
    }

    h1{
        font-size: 26px;
    }

    h2{
        font-size: 20px;
    }

    @media screen and (max-width: 1200px){
        flex-direction: column;
    }
`
export const GamesStats = styled.section `
    background-color: var(--color-gray);
    border-radius: 8px;
    padding: 12px;
    width: 70%;
    margin-right: 15px;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`

export const OthersStats = styled.section `
    border-radius: 8px;
    width: 30%;

    div{
        min-height: 200px;
    }

    @media screen and (max-width: 1200px){
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
            min-height: auto;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const PlatformsStats = styled.div `
    background-color: var(--color-gray);
    padding: 12px;
    border-radius: 8px;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`

export const GenresStats = styled.div `
    background-color: var(--color-gray);
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;

    @media screen and (max-width: 1200px){
        margin-left: 20px;
        margin-top: 0px;
        width: 100%;
    }

    @media screen and (max-width: 768px){
        margin-top: 20px;
        margin-left: 0px;
    }
`