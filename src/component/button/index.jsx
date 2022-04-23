import * as S from './style';

export default function Button() {
  return (
    <div>
      <S.Container>
        <S.CourseButton secondary label="Buscar prova"/>
        <S.CourseButton secondary label="Adicionar prova"/>
      </S.Container>
    </div>
  );
}
