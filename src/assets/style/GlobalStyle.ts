import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
    // General reset
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
    a, button, input {
        font-family: 'Montserrat', sans-serif;
        border: none;
    }
    *::-webkit-scrollbar {
        width: 7px;
    }
    *::-webkit-scrollbar-track {
        background: transparent; 
    }
 
    *::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.darkColor}; 
        border-radius: 20px;
    }
    *::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.colors.darkGrey};
    }
`;