import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.40s linear;
  }
  .navbar {
    background: ${({ theme }) => theme.navbar_color};
  }
  .nav-home {
    color: ${({ theme }) => theme.navbar_text};
  }
  .nav-text a {
    color: ${({ theme }) => theme.navbar_text};
  }
  `