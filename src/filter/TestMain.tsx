import { useState, useEffect } from 'react';
import DataList from './DataList';
import Filter from './Filter';
import { Data, DataProps } from '../interfaces';

export default function TestMain({ dataList }: DataProps) {
  // const [methodList, setMethodList] = useState([]);
  // const [materialList, setMaterialList] = useState([]);
  const [requestsList, setRequestsList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(json => {
        setRequestsList(json.requests);
      });
  }, []);

  console.log(dataList);

  return (
    <div>
      <Filter />

      {/* {dataList.map(Idata => {
        return <DataList Idata={Idata} />;
      })} */}
    </div>
  );
}
