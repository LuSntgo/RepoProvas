import styled from 'styled-components';
import { Box, Image, FormField } from 'grommet';
import { Link } from 'react-router-dom';

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(192, 136, 106, 1) 0%,
    rgba(192, 136, 106, 1) 50.1%,
    rgba(248, 247, 242, 1) 50.1%,
    rgba(248, 247, 242, 1) 100%
  );
  margin: 0;

  @media (max-width: 738px) {
    background: #c0886a;
  }
`;

export const Img = styled(Image)`
  width: 50%;
  height: 50%;

  @media (max-width: 738px) {
    width: 60%;
    height: 60%;
  }
  @media (max-width: 468px) {
    width: 80%;
    height: 80%;
  }
`;

export const Content = styled(Box)`
  margin: 0;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 468px) {
    height: 60vh;
  }

`;

export const LeftBox = styled(Box)`
  width: 50%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 738px) {
    display: none;
  }
`;
export const RightBox = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 30px;

  @media (max-width: 738px) {
    width: 70%;
  }
`;
export const StyledLink = styled(Link)`

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #c0886a;
  text-decoration-line: underline;
  :hover {
    color: #883100;
  }

  @media (max-width: 738px) {
    color: #f8f7f2;
  }
`;

export const formField = styled(FormField)`
  color: #c0886a;
  font-weight: 700;
  @media (max-width: 738px) {
  color: #f8f7f2;
  font-weight: 700;
  }
`;

export const Button = styled.button`
  border: 4px solid #c0886a;
  border-radius: 20px;
  font-family: "Roboto Mono";
  font-size:16px;
  display: flex;
  color: #883100;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 50px;
  z-index: 10;
  word-break: break-word;
  :hover {
    background-color: #c0886a;
  }
  @media (max-width: 838px) {
    width: 100%;
    height: 50px;
  }

  @media (max-width: 738px) {
    width: 100%;
    height: 60px;

    border: 2px solid #f8f7f2;
    :hover {
      background-color: #f8f7f2;
    }
  }
`;
