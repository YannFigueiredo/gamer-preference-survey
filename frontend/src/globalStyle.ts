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
`

export default GlobalStyle;
