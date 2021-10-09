import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 80%;
  margin: 1.4rem auto;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SearchInput = styled.div`
  background: #1c4655;
  border-radius: 9999px;
  width: 100%;
  max-width: 30rem;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  input {
    border: 0;
    outline: 0;
    background-color: transparent;
    height: 2rem;
    width: 100%;

    &::placeholder {
      color: #ccc;
    }
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.4rem 1rem;
`;

export const LoadingMessage = styled.div`
  color: #fff;
  font-size: 2rem;
`;

export const LoadMoreButton = styled.button`
  margin-left: 7.7rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-radius: 9999px;
  border: 0;
  background: #1c4655;
  color: #fff;

  border: 1px solid #fff;
  cursor: pointer;
`;
