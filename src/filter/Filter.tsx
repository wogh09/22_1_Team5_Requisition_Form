import React from 'react';
import * as S from './Filter_style';
import { filterData, filterData2 } from './filterData';
import { PointPropType } from './Types';

export function Filter(props: PointPropType) {
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
    // changevalue,
  } = props;
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
                        onClick={changeFirestFilterState}
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
              {secondFilterValue}
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
                        onClick={changeSecondFilterState}
                        defaultChecked={secondFilterState[index]}
                      />
                      <label htmlFor={id}>{name}</label>
                    </S.Li>
                  );
                })}
              </S.Ul>
            )}
          </S.SecondFilter>

          <S.ResetButton onClick={resetFilter}>
            <S.ResetImg src="/image/refresh_24px.svg" alt="reset" />
            <S.Reset>필터링 리셋</S.Reset>
          </S.ResetButton>
        </S.SelectContainer>

        <S.ToggleContainer>
          <button>상담 중인 요청만 보기</button>
        </S.ToggleContainer>
      </S.Section>
    </S.FilterConianier>
  );
}
/* <S.Select>
    <S.Option value="none" hidden>
      가공방식
    </S.Option>
    <S.Option value="밀링">밀링</S.Option>
    <S.Option value="선반">선반</S.Option>
  </S.Select>
  <S.Select>
    <S.Option value="none" selected hidden>
      재료
    </S.Option>
    <S.Option value="알루미늄">알루미늄</S.Option>
    <S.Option value="탄소강">탄소강</S.Option>
    <S.Option value="구리">구리</S.Option>
    <S.Option value="합금강">합금강</S.Option>
    <S.Option value="강철">강철</S.Option>
  </S.Select> */
