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
    firestFilterValue,
    // secondFilterValue,
  } = props;

  const firestFilteringCounselingState = counselingState.filter(it =>
    new RegExp(firestFilterValue, 'i').test(it.method)
  );
  const firestFilteringCounselingStateFilter = counselingStateFilter.filter(
    it => new RegExp(firestFilterValue, 'i').test(it.method)
  );

  // for (let i = 0; secondFilterValue.length >= i; i++) {
  //   console.log(
  //     res.filter(list =>
  //       new RegExp(secondFilterValue[i], 'i').test(list.method)
  //     )
  //   );
  // }

  return (
    <div>
      {toggleState ? (
        <S.Container>
          {firestFilterValue === '가공방식' ? (
            <div>
              {counselingStateFilter.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </div>
          ) : (
            <div>
              {firestFilteringCounselingStateFilter.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </div>
          )}
        </S.Container>
      ) : (
        <S.Container>
          {firestFilterValue === '가공방식' ? (
            <div>
              {counselingState?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </div>
          ) : (
            <div>
              {firestFilteringCounselingState?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </div>
          )}
        </S.Container>
      )}
    </div>
  );
}
