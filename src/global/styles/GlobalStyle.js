import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --main-color: #111727;
    --sidebar-text: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--main-color)
    
  }

  ::-webkit-scrollbar-thumb {
    background: #1B4453;
    border-radius: .3rem;

  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`;

export const AppContainer = styled.section`
  display: flex;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    198deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(17, 23, 39, 1) 58%,
    rgba(37, 111, 126, 1) 100%
  );
  min-height: 100vh;
`;
