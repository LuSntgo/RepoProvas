import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/header';
import * as S from './style';

export default function Search() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <S.Container>
        <Header />
        <S.Content>
          <S.LeftBox>
            <S.Description>
                
            </S.Description>
          </S.LeftBox>
          <S.RightBox>

          </S.RightBox>
        </S.Content>
      </S.Container>
    </>
  );
}
