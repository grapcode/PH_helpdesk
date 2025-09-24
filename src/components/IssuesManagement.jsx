import React, { use, useState } from 'react';
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';
import Container from './Container';
import Card from './Card';

const IssuesManagement = ({ fetchPromise }) => {
  // data sending --> card & countBox
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  //   console.log(data);

  // toggle work
  const [toggleStatus, setToggleStatus] = useState('All');

  //   console.log(toggleStatus, data);

  const filteredData =
    toggleStatus == 'All'
      ? data
      : data.filter((elem) => elem.status == toggleStatus);
  console.log(filteredData);

  return (
    <div>
      {/* Box */}
      <CountBox data={data} />

      {/* Toggle buttons */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />

      {/* cards */}
      <Container>
        {filteredData.length == 0 ? (
          <h2 className="font-bold text-xl text-center mb-9 text-purple-500 text-shadow-2xs">
            No Data
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-5 mb-6">
            {filteredData.map((issue, ind) => {
              // console.log(issue);
              return (
                <Card
                  key={ind}
                  issue={issue}
                  data={data}
                  setData={setData}
                ></Card>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default IssuesManagement;
