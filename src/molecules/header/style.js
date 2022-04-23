import { Heading, Image, Box, Menu } from 'grommet';
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
    rgba(192, 136, 106, 1) 48.2%,
    rgba(248, 247, 242, 1) 48.2%,
    rgba(248, 247, 242, 1) 100%
  );
  margin: 0;
  position: relative;

`;

export const Img = styled(Image)`
  height: 80px;
  width: 100%;

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
    display: none;
  }
`;

export const Account = styled(Menu)`
    color: #f8f7f2;
`;
