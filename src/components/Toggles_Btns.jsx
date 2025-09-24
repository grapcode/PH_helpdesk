import React from 'react';
import Container from './Container';

const Toggles_Btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ['All', 'Pending', 'Submitted', 'Reviewed'];

  return (
    <Container>
      <div className="text-right my-10">
        {btns.map((btn, ind) => {
          //   console.log(ind);
          return (
            <button
              key={ind}
              className={`toggle-btn ${ind == 0 && 'rounded-l-lg'} ${
                ind == btns.length - 1 && 'rounded-r-md'
              }  ${toggleStatus == btn && '!bg-purple-500 !text-white'}`}
              onClick={() => setToggleStatus(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default Toggles_Btns;
