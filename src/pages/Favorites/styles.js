import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 80%;
  margin: 1.4rem auto;
  gap: 1rem;
`;
