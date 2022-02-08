import React from 'react';
import Cardbox from 'cardbox/Cardbox';
import * as S from './CardList_Style';

interface CardListPropsType {
  counselingState: {}[];
  counselingStateFilter: {}[];
  toggleState: boolean;
  firestFilterValue: string;
  secondFilterValue: string[];
}

export default function CardList(props: CardListPropsType) {
  const {
    counselingState,
    counselingStateFilter,
    toggleState,
    // firestFilterValue,
    // secondFilterValue,
  } = props;

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
