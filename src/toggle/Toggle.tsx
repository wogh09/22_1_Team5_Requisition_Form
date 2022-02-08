import { useState, useEffect } from 'react';
import * as S from './Toggle_style';
import axios from 'axios';

interface dataType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: 100;
  method: string[];
  material: string[];
  status: string;
}

export default function ToggleButton() {
  const [counselingState, setCounselingState] = useState([]);
  const [counselingState1, setCounselingState1] = useState([{}]);
  const [toggleState, setToggleState] = useState(false);

  const changeCounseling = () => {
    setToggleState(!toggleState);
    const data: dataType[] = [...counselingState];

    if (toggleState === true) {
      setCounselingState1([
        data[data.map(list => list.status).indexOf('상담중')],
      ]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get('http://localhost:9000/requests')
      .then(res => {
        setCounselingState(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <S.CheckBoxWrapper>
      <S.CheckBox
        id="filterToggle"
        type="checkbox"
        onChange={changeCounseling}
        checked={toggleState}
      />
      <S.CheckBoxLabel htmlFor="filterToggle" />
    </S.CheckBoxWrapper>
  );
}
