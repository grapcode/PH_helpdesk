import React from 'react';

const Card = ({ issue, data, setData }) => {
  //   console.log(issue.ticketId);
  const handleClick = () => {
    const currentData = data.find((elem) => elem.ticketId == issue.ticketId);

    if (currentData.status == 'Pending') {
      currentData.status = 'Submitted';
    } else if (currentData.status == 'Submitted') {
      currentData.status = 'Reviewed';
    }

    const restData = data.filter((elem) => elem.ticketId != issue.ticketId);
    console.log({ currentData, restData });
    setData([currentData, ...restData]);
  };
  //   data map for cards
  return (
    <div
      className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4"
      onClick={handleClick}
    >
      <div>
        <img
          src={issue.userImg}
          title={issue.requestedBy}
          alt={issue.requestedBy}
          className="h-20 w-20 rounded-full"
        />
        <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
      </div>
      <div className="flex justify-between my-2">
        <h2 className="font-bold text-2xl">{issue.subject} </h2>
        <div>
          <span
            className={`font-semibold py-1 px-2 shadow rounded-md mr-2  ${
              issue.priority == 'High'
                ? 'text-red-500 bg-red-100'
                : issue.priority == 'Medium'
                ? 'text-yellow-500 bg-yellow-100'
                : 'text-green-500 bg-green-100'
            }`}
          >
            {issue.priority}
          </span>
          <span
            className={`font-semibold py-1 px-2 shadow rounded-md mr-2  ${
              issue.priority == 'Pending'
                ? 'text-red-500 bg-red-100'
                : issue.priority == 'Submitted'
                ? 'text-yellow-500 bg-yellow-100'
                : 'text-green-500 bg-green-100'
            }`}
          >
            {issue.status}
          </span>
        </div>
      </div>
      <p className="text-slate-700 ">{issue.description} </p>
    </div>
  );
};

export default Card;
