import Nav from './nav/Nav';
import CardList from 'cardList/CardList';
import * as S from 'Main_Style';
import { Filter } from './filter';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { dataType } from './toggle/type';

export default function Main() {
  const [counselingState, setCounselingState] = useState([]);
  const [counselingStateFilter, setCounselingStateFilter] = useState([{}]);
  const [toggleState, setToggleState] = useState(false);

  const changeCounseling = () => {
    setToggleState(!toggleState);
    const data: dataType[] = [...counselingState];

    setCounselingStateFilter([
      data[data.map(list => list.status).indexOf('상담중')],
    ]);
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
    <>
      <Nav />
      <Filter changeCounseling={changeCounseling} toggleState={toggleState} />
      <S.Container>
        <CardList
          counselingState={counselingState}
          counselingStateFilter={counselingStateFilter}
          toggleState={toggleState}
        />
      </S.Container>
    </>
  );
}
