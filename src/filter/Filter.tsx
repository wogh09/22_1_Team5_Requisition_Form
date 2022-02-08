import * as S from './Filter_style';
import { filterData, filterData2 } from './filterData';
import { FilterPropsType2 } from './Types';
import Toggle from '../toggle';

export function Filter(props: FilterPropsType2) {
  const {
    changeSelectState,
    changeFirestFilterState,
    changeSecondFilterState,
    resetFilter,
    selectState,
    firestFilterState,
    secondFilterState,
    firestFilterValue,
    secondFilterValue,
    changeCounseling,
    toggleState,
  } = props;

  const viewFilterText = () => {
    if (secondFilterValue.length >= 3) {
      return `재료${secondFilterValue.length - 1}`;
    }
    if (secondFilterValue.length === 2) {
      return secondFilterValue[1];
    }
    if (secondFilterValue.length === 1 && secondFilterValue[0] === '재료') {
      return '재료';
    }
  };

  return (
    <S.FilterConianier>
      <S.TitleContainer>
        <S.Title>들어온 요청</S.Title>
        <S.SubText>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.SubText>
      </S.TitleContainer>
      <S.Section>
        <S.SelectContainer>
          <S.FirstFilter>
            <S.Button onClick={changeSelectState} id="selectButton1">
              {firestFilterValue}
              <img
                src="/image/arrow_drop_down_24px.png"
                alt="img"
                style={{ width: 10, height: 5, marginLeft: 12 }}
              />
            </S.Button>
            {selectState[0] && (
              <S.Ul>
                {filterData.map((list, index) => {
                  const { id, name } = list;
                  return (
                    <S.Li key={index}>
                      <input
                        id={id}
                        type="checkbox"
                        className={name}
                        key={index}
                        onChange={changeFirestFilterState}
                        checked={firestFilterState[index]}
                      />
                      <label htmlFor={id}>{name}</label>
                    </S.Li>
                  );
                })}
              </S.Ul>
            )}
          </S.FirstFilter>

          <S.SecondFilter>
            <S.Button onClick={changeSelectState} id="selectButton2">
              {viewFilterText()}
              <img
                src="/image/arrow_drop_down_24px.png"
                alt="img"
                style={{ width: 10, height: 5, marginLeft: 12 }}
              />
            </S.Button>
            {selectState[1] && (
              <S.Ul>
                {filterData2.map((list, index) => {
                  const { id, name } = list;
                  return (
                    <S.Li key={index}>
                      <input
                        id={id}
                        type="checkbox"
                        className={name}
                        key={index}
                        onClick={e => {
                          changeSecondFilterState(e);
                          viewFilterText();
                        }}
                        defaultChecked={secondFilterState[index]}
                      />
                      <label htmlFor={id}>{name}</label>
                    </S.Li>
                  );
                })}
              </S.Ul>
            )}
          </S.SecondFilter>
          {secondFilterValue.length >= 2 ||
          firestFilterValue === '밀링' ||
          firestFilterValue === '선반' ? (
            <S.ResetButton onClick={resetFilter}>
              <S.ResetImg src="/image/refresh_24px.svg" alt="reset" />
              <S.Reset>필터링 리셋</S.Reset>
            </S.ResetButton>
          ) : null}
        </S.SelectContainer>

        <S.ToggleContainer>
          <Toggle
            changeCounseling={changeCounseling}
            toggleState={toggleState}
          />
          <S.ToggleText>상담 중인 요청만 보기</S.ToggleText>
        </S.ToggleContainer>
      </S.Section>
    </S.FilterConianier>
  );
}
