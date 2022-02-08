import Nav from './nav/Nav';
import CardList from 'cardList/CardList';
import * as S from 'Main_Style';
import { Filter } from './filter';

export default function Main() {
  return (
    <>
      <Nav />
      <Filter />
      <S.Container>
        <CardList />
      </S.Container>
    </>
  );
}
