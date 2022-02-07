import { useState, useEffect } from 'react';
import DataList from './DataList';
import Filter from './Filter';

export default function TestMain() {
  // const [methodList, setMethodList] = useState([]);
  // const [materialList, setMaterialList] = useState([]);
  const [requestsList, setRequestsLust] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(json => {
        setRequestsLust(json.requests);
      });
  }, []);

  console.log(requestsList);

  return (
    <div>
      <Filter />

      {/* {requestsList.map((data: any) => {
        return <DataList data={data} />;
      })} */}
    </div>
  );
}
