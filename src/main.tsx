import Nav from './nav/Nav';
import CardList from 'cardList/CardList';
import * as S from 'Main_Style';

export default function Main() {
  return (
    <>
      <Nav />
      <S.Container>
        <CardList />
      </S.Container>
    </>
  );
}
