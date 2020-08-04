import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 60px;

  width: 100vw;
  height: 100vh;

  .title-container {
    width: 90%;
    max-width: 1890px;
    margin-top: 90px;

    h1 {
      font-size: min(9.5vw, 96px);
      font-weight: 700;
      color: #222326;
      letter-spacing: 0.3;
    }

    p {
      margin-top: 40px;
      width: 90%;
      max-width: 700px;
      font-weight: 100;
      font-size: min(3.4vw, 22px);
    }
  }

  .content {
    margin-top: 36px;
    width: 90%;
    max-width: 1890px;

    display: flex;

    .generate {
      margin-left: 50px;

      .fa-spin {
        animation: fa-spin 2s infinite linear;
      }
      @keyframes fa-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(359deg);
        }
      }
    }

    .prymary-btn {
      color: #fff;
      border: 0;
      cursor: pointer;
      background: #1db954;
      height: 50px;
      width: 100%;
      max-width: 330px;
      border-radius: 80px;
      margin-top: 46px;
      font-weight: 700;

      &:active {
        background: #199a46;
      }
    }
  }

  @media (max-width: 760px) {
    .title-container {
      margin-top: 25px;
    }

    .content {
      flex-direction: column;

      .generate {
        margin-bottom: 46px;
        margin-left: 0;
      }
    }
  }
`;
