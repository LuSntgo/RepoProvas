import Header from '../../component/header';
import * as S from './style';
import { LABELS } from './labels';
import Typewrite from '../../component/typewrite/index';
import gif from './assets/gif.gif';
import study from './assets/study.svg';
import Button from '../../component/button';

export default function Homepage() {
  return (
    <>
      <S.Container>
        <Header/>
        <S.Content>
          <S.LeftBox>
            <Typewrite/>
            <S.Description>
              <span>{LABELS.DESCRIPTION}</span>
            </S.Description>
            <S.Img src={gif} alt='spinner' />
          </S.LeftBox>
          <S.RightBox>
            <Button/>
            <S.Img src={study} alt='woman-study' />
          </S.RightBox>
        </S.Content>
      </S.Container>
    </>
  );
}

