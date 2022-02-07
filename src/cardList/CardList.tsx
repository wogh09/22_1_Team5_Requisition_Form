import { useState, useEffect } from 'react';
import axios from 'axios';
import Cardbox from 'cardbox/Cardbox';
import { Data } from '../interfaces';
import * as S from './CardList_Style';

export default function CardList() {
  const [requestsList, setRequestsList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get('http://localhost:9000/requests')
      .then(res => {
        setRequestsList(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <S.Container>
      {requestsList.map((requestsList: Data, i: number) => {
        return <Cardbox key={i} requestsList={requestsList} />;
      })}
    </S.Container>
  );
}
