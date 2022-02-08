import useAxios from 'hooks/useAxios';
import Cardbox from 'cardbox/Cardbox';
import { Data } from '../interfaces';
import * as S from './CardList_Style';

export default function CardList() {
  const { data }: any = useAxios('http://localhost:9000/requests');

  console.log('test>>', data);

  return (
    <S.Container>
      {data?.map((data: Data, i: number) => {
        return <Cardbox key={i} data={data} />;
      })}
    </S.Container>
  );
}
