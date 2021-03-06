import { Heading, Image, Box, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import styled from 'styled-components';

export const Header = styled(Heading)`
  height: 80px;
  max-width: 100%;
  display: flex;
  align-items: center;
  background: rgb(192, 136, 106);
  background: linear-gradient(
    90deg,
    rgba(192, 136, 106, 1) 0%,
    rgba(192, 136, 106, 1) 50.1%,
    rgba(248, 247, 242, 1) 50.1%,
    rgba(248, 247, 242, 1) 100%
  );
  margin: 0;
  position: relative;

  @media (max-width: 738px) {
    background: #f8f7f2;
  }
`;

export const Logo = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled(Image)`
  height: 90px;
  @media (max-width: 858px) {
    height: 55%;
    width: 55%;
  }
  @media (max-width: 738px) {
    height: 55%;
    width: 55%;
    padding-right: 65px;
  }
  @media (max-width: 608px) {
    height: 60%;
    width: 60%;
  }
  @media (max-width: 538px) {
    height: 70%;
    width: 70%;
  }
  @media (max-width: 438px) {
    height: 75%;
    width: 75%;
  }
`;

export const Icon = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 2%;
  top: 25%;
  gap: 15px;

  @media (max-width: 538px) {
    display: none;
  }
`;
export const AccountIcon = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 3%;
  top: 25%;
  gap: 15px;

  @media (max-width: 538px) {
    color: #c0886a;
  }
`;

export const Account = styled(Menu)`
color: #c0886a;
`;

export const IconMenu = styled(MenuIcon)`
  stroke: #f8f7f2;
@media (max-width: 738px) {

  stroke: #c0886a;
  }
`;

export const HeaderClean = styled(Box)`
  width: 100vw;
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

export const Content = styled(Heading)`
  height: 80px;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;

  @media (max-width: 738px) {
    background: #f8f7f2;
  }
`;

export const LogoClean = styled(Image)`
  width: 100%;
  height: 100%;

  @media (max-width: 738px) {
    height: 85%;
    width: 85%;
    padding-right: 65px;
  }

  @media (max-width: 438px) {
    height: 85%;
    width: 85%;
    padding-right: 40px;
  }
`;
