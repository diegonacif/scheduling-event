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

    --rose: #FFDAC6;
    --orange: #F46036;
    --red: #D7263D;
    --green-400: #8DAA91;
    --green-600: #788475;

    // Fonts
    font-family: 'Georama', sans-serif;

    // Font sizes
    --text-3xs: 0.5rem; /* 8px */
    --text-2xs: 0.625rem; /* 10px */
    --text-xs: 0.75rem; /* 12px */
    --text-sm: 0.875rem; /* 14px */
    --text-md: 1rem; /* 16px */
    --text-lg: 1.125rem; /* 18px */
    --text-xl: 1.25rem; /* 20px */
    --text-2xl: 1.375rem; /* 22px */
    --text-2xl: 1.5rem; /* 24px */
    --text-3xl: 1.625rem; /* 26px */

    // Media Variables
    --tablet-size: "min-width: 510px";
    --notebook-size: "min-width: 768px";
    --desktop-size: "min-width: 1024px";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Georama', sans-serif;
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

  body {
	background-color: var(--gray-100);;
	-webkit-font-smoothing:antialiased;
}

 
`