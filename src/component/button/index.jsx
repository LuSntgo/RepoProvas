import { useNavigate } from 'react-router-dom';
import * as S from './style';

export default function Button() {
  const navigate = useNavigate();
  return (
    <div>
      <S.Container>
        <S.CourseButton secondary label="Buscar prova" onClick={() => { navigate('/search'); }}/>
        <S.CourseButton secondary label="Adicionar prova"/>
      </S.Container>
    </div>
  );
}
