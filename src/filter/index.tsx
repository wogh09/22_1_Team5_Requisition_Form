import React from 'react';
import { Filter as Presenter } from './Filter';

interface PointContainerPropType extends React.HTMLProps<HTMLDivElement> {}

export function Filter(props: PointContainerPropType) {
  // =======================filter value 저장==========================
  const [firestFilterValue, setFirestFilterValue] = React.useState('가공방식');
  const [secondFilterValue, setSecondFilterValue] = React.useState(['재료']);

  // =======================select on & off 로직=======================
  const [selectState, setSelectState] = React.useState([false, false]);

  const changeSelectState = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === 'selectButton1') {
      const defaultState = [...selectState];
      defaultState[0] = !defaultState[0];
      defaultState[1] = false;
      setSelectState(defaultState);
    } else if (e.currentTarget.id === 'selectButton2') {
      const defaultState2 = [...selectState];
      defaultState2[0] = false;
      defaultState2[1] = !defaultState2[1];
      setSelectState(defaultState2);
    }
  };

  // =======================checkbox 상태값 저장 로직=====================
  const [firestFilterState, setFirestFilterState] = React.useState([
    false,
    false,
  ]);
  const [secondFilterState, setSecondFilterState] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const changeFirestFilterState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.id);
    const defaultState = [...firestFilterState];
    defaultState[index - 1] = !defaultState[index - 1];

    if (index - 1 === 0) {
      defaultState[1] = false;
    } else if (index - 1 === 1) {
      defaultState[0] = false;
    }

    setFirestFilterState(defaultState);
    const value = e.currentTarget.className;
    setFirestFilterValue(value);
  };

  const changeSecondFilterState = (e: React.MouseEvent<HTMLElement>) => {
    const defaultState = [...secondFilterState];
    const index = Number(e.currentTarget.id) - 3;
    const name = e.currentTarget.className;

    defaultState[index] = !defaultState[index];
    setSecondFilterState(defaultState);

    if (defaultState[index] === true) {
      setSecondFilterValue([...secondFilterValue, name]);
    } else if (defaultState[index] === false) {
      setSecondFilterValue(secondFilterValue.filter(list => list !== name));
    }
  };

  // =======================reset 로직=================================
  const resetFilter = () => {
    setFirestFilterState([false, false]);
    setSecondFilterState([false, false, false, false, false]);
    setSelectState([false, false]);
    setSecondFilterValue(['재료']);
    setFirestFilterValue('가공방식');
  };
  // =================================================================

  return (
    <Presenter
      changeSelectState={changeSelectState}
      changeFirestFilterState={changeFirestFilterState}
      changeSecondFilterState={changeSecondFilterState}
      resetFilter={resetFilter}
      selectState={selectState}
      firestFilterState={firestFilterState}
      secondFilterState={secondFilterState}
      firestFilterValue={firestFilterValue}
      secondFilterValue={secondFilterValue}
      {...props}
    />
  );
}
