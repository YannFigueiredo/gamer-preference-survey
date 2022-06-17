import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    :root{
        --color-dark-green-primary: #0B3B17;
        --color-dark-green-secondary: #0A2A12;
        --color-light-green: #01DF01;
        --color-gold-yellow: #D7DF01;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle;
