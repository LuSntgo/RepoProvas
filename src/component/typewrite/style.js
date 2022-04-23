import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .typewriter h5 {
    font-size: 18px;
    overflow: hidden;
    color: #f8f7f2;
    border-right: 0.15em solid #c0886a;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 5.5s steps(40, end), blink-caret 0.75s step-end infinite;

    @media (max-width: 908px) {
      font-size: 15px;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #c0886a;
    }
  }
`;
