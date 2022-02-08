import Cardbox from 'cardbox/Cardbox';
import * as S from './CardList_Style';

interface CardListPropsType {
  counselingState: {}[];
  counselingStateFilter: {}[];
  toggleState: boolean;
}

export default function CardList(props: CardListPropsType) {
  const { counselingState, counselingStateFilter, toggleState } = props;

  return (
    <div>
      {toggleState ? (
        <S.Container>
          {counselingStateFilter.map((List, index) => {
            return <Cardbox key={index} List={List} />;
          })}
        </S.Container>
      ) : (
        <S.Container>
          {counselingState?.map((List, index) => {
            return <Cardbox key={index} List={List} />;
          })}
        </S.Container>
      )}
    </div>
  );
}
