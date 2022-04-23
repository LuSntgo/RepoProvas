import { Box, Button } from 'grommet';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  gap: 60px;
`;
export const CourseButton = styled(Button)`
  border: 4px solid #c0886a;
  display: flex;
  color: #883100;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  z-index: 10;
  word-break: break-word;
  :hover {
        background-color: #c0886a
    }
  @media (max-width: 738px) {
      width: 100%;
      height: 80px;

    border: 2px solid #f8f7f2;
    :hover {
        background-color: #f8f7f2
    }
  }
`;
