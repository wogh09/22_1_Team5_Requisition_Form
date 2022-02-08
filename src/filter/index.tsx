import React from 'react';
import { Filter as Presenter } from './Filter';

interface PointContainerPropType extends React.HTMLProps<HTMLDivElement> {}

export function Filter(props: PointContainerPropType) {
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
  // =================================================================

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

  const changeFirestFilterState = (e: React.MouseEvent<HTMLElement>) => {
    const defaultState = Array(2).fill(false);
    const index = Number(e.currentTarget.id);
    defaultState[index - 1] = true;
    setFirestFilterState(defaultState);
    const value = e.currentTarget.className;
    setFirestFilterValue(value);
  };

  const changeSecondFilterState = e => {
    const defaultState = [...secondFilterState];
    const index = Number(e.currentTarget.id) - 3;
    defaultState[index] = !defaultState[index];
    setSecondFilterState(defaultState);

    console.log(index);
    console.log(defaultState[index]);

    if (defaultState[index] === true) {
      setSecondFilterValue([...secondFilterValue, e.currentTarget.className]);
    } else if (defaultState[index] === false) {
      // setSecondFilterValue(secondFilterValue.slice(index, index + 1));
    }
  };

  // =================================================================

  // =======================reset 로직=================================
  const resetFilter = () => {
    setFirestFilterState([false, false]);
    setSecondFilterState([false, false, false, false, false]);
    setSelectState([false, false]);
  };
  // =================================================================
  // =======================filter value 저장==========================
  const [firestFilterValue, setFirestFilterValue] = React.useState('가공방식');
  const [secondFilterValue, setSecondFilterValue] = React.useState(['재료']);
  console.log(secondFilterValue);
  console.log(secondFilterState);
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
