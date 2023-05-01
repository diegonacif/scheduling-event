import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    // Color palette
    --gray-100: #F2F2F2;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #718096;
    --gray-700: #374151;
    --gray-800: #2C2C2C;
    --gray-900: #191919;
    --blue-300: #00BFFF;
    --blue-600: #0073B7;
    --blue-700: #003E64;
    --green-400: #77DD77;
    --green-600: #00703C;
    --orange-500: #FFA07A;


    // Media Variables
    --tablet-size: "min-width: 510px";
    --notebook-size: "min-width: 768px";
    --desktop-size: "min-width: 1024px";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 

    -webkit-tap-highlight-color: transparent; // remove color highlight on tap
    
    a {
      text-decoration: none;
      color: inherit;
      &:focus-visible, &:focus-within, &:focus, &:active, &:target {
        border: 0;
        outline: 0;
        background-color: transparent;
      }
    }
  }
`