import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #fff;

  max-height: 20rem;
  max-width: 14rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
    box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12),
      0px 5px 6px rgba(0, 0, 0, 0.2);
  }

  padding: 1rem;
  border-radius: 0.3rem;
  background-color: #1c4655;
  margin: 0 auto;
`;

export const CardTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`;

export const CardDescription = styled.span``;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem 0;

  > div {
    display: flex;
    gap: 0.8rem;
  }

  button {
    background-color: transparent;
    color: #fff;
    border: 0;
    cursor: pointer;
  }
`;
