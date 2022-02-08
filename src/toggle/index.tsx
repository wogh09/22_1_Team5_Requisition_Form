import { useState, useEffect } from 'react';
import { ToggleButton } from './Toggle';
import axios from 'axios';
import { dataType } from './type';
import { FilterPropsType } from '../filter/Types';

export default function Toggle(props: FilterPropsType) {
  const { changeCounseling, toggleState } = props;
  // const [counselingState, setCounselingState] = useState([]);
  // const [counselingState1, setCounselingState1] = useState([{}]);
  // const [toggleState, setToggleState] = useState(false);
  // console.log(counselingState1);

  // const changeCounseling = () => {
  //   setToggleState(!toggleState);
  //   const data: dataType[] = [...counselingState];

  //   if (toggleState === true) {
  //     setCounselingState1([
  //       data[data.map(list => list.status).indexOf('상담중')],
  //     ]);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   axios
  //     .get('http://localhost:9000/requests')
  //     .then(res => {
  //       setCounselingState(res.data);
  //     })
  //     .catch(error => console.log(error));
  // };

  return (
    <ToggleButton
      changeCounseling={changeCounseling}
      toggleState={toggleState}
    />
  );
}
