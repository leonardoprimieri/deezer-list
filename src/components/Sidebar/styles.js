import styled from "styled-components";

export const Container = styled.aside`
  background-color: var(--main-color);
  width: 100%;
  max-width: 20rem;
  color: var(--sidebar-text);
  padding: 1rem;

  h1 {
    font-weight: 400;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  position: sticky;
  top: 20px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    margin-top: 1rem;
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    gap: 0.3rem;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
`;
