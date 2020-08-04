import styled from "styled-components";

export const Container = styled.div`
  background: #19e68c;
  width: 335px;
  padding: 3rem;
  height: 260px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
  }

  a {
    text-decoration: none;
    margin-top: auto;
    color: #fff;
    font-weight: 700;
  }

  .new-playlist {
    margin-top: auto;
  }

  button {
    background: none;
    border: 0;
    font-weight: 700;
    color: #fff;
    text-align: start;
  }
`;
