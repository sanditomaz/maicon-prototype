import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        cursor: default;
            
        a {
            text-decoration: none;
            cursor: pointer;
        }
    }
    html,body{
        height: 100vh;
        background-color: #ffffff;
        touch-action: pan-x pan-y;
        scroll-behavior: smooth;
    }
    .root{
        height: 100vh;     
    }
`;

export default GlobalStyle;