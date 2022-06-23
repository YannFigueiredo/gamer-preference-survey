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
`
export const GamesStats = styled.section `
    background-color: var(--color-gray);
    border-radius: 8px;
    padding: 12px;
    width: 70%;
    margin-right: 15px;
`

export const OthersStats = styled.section `
    border-radius: 8px;
    width: 30%;

    div{
        min-height: 200px;
    }
`

export const PlatformsStats = styled.div `
    background-color: var(--color-gray);
    padding: 12px;
    border-radius: 8px;
`

export const GenresStats = styled.div `
    background-color: var(--color-gray);
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;
`