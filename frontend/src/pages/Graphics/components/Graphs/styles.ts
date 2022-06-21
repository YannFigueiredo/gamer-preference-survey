import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    margin-top: 25px;
    width: 100%;

    h1{
        color: white;
        font-size: 26px;
        font-weight: 700;
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
`

export const GenresStats = styled.div `
    background-color: var(--color-gray);
    margin-top: 15px;
    padding: 12px;
`