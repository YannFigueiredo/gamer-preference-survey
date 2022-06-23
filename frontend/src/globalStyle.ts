import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    :root{
        //Colors
        --color-dark-green-primary: #0B3B17;
        --color-dark-green-secondary: #0A2A12;
        --color-light-green: #01DF01;
        --color-light-green-hover: #5ff15f;
        --color-gold-yellow: #D7DF01;
        --color-gold-yellow-hover: #f8fd64;;
        --color-gray: #37474F;
        --color-gray-light: #767879;
        
        //Spacing
        --padding-standard: 25px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;
    }

    body{
        background-color: var(--color-dark-green-primary);
    }

    button{
        border: none;
        background: none;
        height: 44px;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        border-radius: 8px;
        text-transform: uppercase;
        color: var(--color-dark-green-secondary);
    }

    input, select{
        height: 44px;
        margin-right: 8px;
        border-radius: 8px;
        padding: 5px;
        color: var(--color-dark-green-primary);
    }

    div img{
        max-width: 100%;
    }
`

export default GlobalStyle;
