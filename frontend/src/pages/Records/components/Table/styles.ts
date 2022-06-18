import styled from 'styled-components';

export const Container = styled.section `
    width: 100%;
    margin-top: 25px;

    table{
        width: 100%;
        border-spacing: 0;
        border-bottom: 6px solid var(--color-light-green);
        border-radius: 8px;
    }

    table tr{
        display: grid;
        grid-template-columns: 2fr 3fr 1fr 1.5fr 2fr 4fr;
        grid-template-rows: auto;
    }

    table tr th, table tr td{
        padding: 10px;
        text-align: left;
    }

    table thead tr th{
        background-color: var(--color-light-green);
        color: var(--color-dark-green-secondary);
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 700;
    }

    table tr th:first-child{
        border-top-left-radius: 8px;
    }

    table tr th:last-child{
        border-top-right-radius: 8px;
    }

    table tbody tr td{
        font-size: 18px;
        font-weight: 400;
        color: white;
    }

    table tbody tr td:nth-child(4){
        font-weight: 700;
        color: var(--color-light-green);
    }

    table tbody tr td:nth-child(6){
        font-weight: 700;
        color: var(--color-gold-yellow);
    }

    table tbody tr:nth-child(odd) td{
        background-color: var(--color-gray);
    }

    table tbody tr:nth-child(even) td{
        background-color: var(--color-gray-light);
    }
`