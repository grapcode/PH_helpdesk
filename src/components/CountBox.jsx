import React from 'react';
import Container from './Container';

const CountBox = ({ data }) => {
  const pendingData = data.filter((element) => element.status == 'Pending');
  const submittedData = data.filter((element) => element.status == 'Submitted');
  const reviewedData = data.filter((element) => element.status == 'Reviewed');

  //   console.log({ pendingData, submittedData, reviewedData });

  return (
    <div>
      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-5 my-10 ">
          <div className="bg-gray-500  h-35 rounded-md text-white flex flex-col justify-center text-center p-8">
            <h2 className="text-lg font-bold ">Pending</h2>
            <p className="font-semibold text-xl">{pendingData.length}</p>
          </div>
          <div className="bg-purple-500  h-35 rounded-md text-white flex flex-col justify-center text-center p-8">
            <h2 className="text-lg font-bold ">Submitted</h2>
            <p className="font-semibold text-xl">{submittedData.length}</p>
          </div>
          <div className="bg-teal-500  h-35 rounded-md text-white flex flex-col justify-center text-center p-8">
            <h2 className="text-lg font-bold ">Reviewed</h2>
            <p className="font-semibold text-xl">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
