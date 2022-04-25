import styled from 'styled-components';
import { Box, Image, Menu } from 'grommet';

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: rgb(192, 136, 106);
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
export const Content = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`;
export const LeftBox = styled(Box)`
  width: 48.2%;
  height: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 738px) {
    display: none;
  }
`;
export const SelectBox = styled(Box)`
  height: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;


`;
export const SelectMenu = styled(Menu)`
  height: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;


`;

export const RightBox = styled(Box)`
  width: 51.8%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 60px;
`;
export const Description = styled(Box)`
  width: 51.8%;
  height: auto;
  margin: 0;
  text-align: justify;
  line-height: 1.5em;
  color: #f8f7f2;
`;
export const Img = styled(Image)`
  width: 200px;
  height: 200px;

  @media (max-width: 738px) {
  width: 60%;
  height: 60%;
  }
  @media (max-width: 468px) {
  width: 80%;
  height: 80%;
  }
`;
