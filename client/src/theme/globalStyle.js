import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  header: 'rgb(50, 78, 89)',
  otherText: '#000',
}
export const darkTheme = {
  body: 'rgb(35,36,37)',
  text: 'rgb(169, 169, 169)',
  toggleBorder: '#6B8096',
  header: '#fff',
  otherText: 'rgb(169, 169, 169)',
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  h1, h2, h3, h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.header};
  }

  & p, th, td, span, div, textarea {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.otherText};
  }
`;

export const WidgetsContainer = styled.div`
  max-width: 80%;
  position: relative;
  margin: auto;
  padding-bottom: 50px;
`;