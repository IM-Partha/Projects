import React, { useState } from 'react';
import Data from './Data';

const Accordion = () => {
  const [clickid, setClickid] = useState([]);

  function handleClick(gateID) {
    if (clickid.includes(gateID)) {
      setClickid(clickid.filter(id => id !== gateID));
    } else {
      setClickid([...clickid, gateID]);
    }
  }

  return (
    <div className='w-500px text-center'>
      {Data.map((data, i) => (
        <div className='mx-[300px]' key={data.id}>
          <div className='flex justify-between mx-[50px] border p-3'>
            <h2 className='text-xl'>{data.question}</h2>
            <p className='text-xl' onClick={() => handleClick(data.id)}>+</p>
          </div>
          {clickid.includes(data.id) && (
            <div className='mx-5 mt-5 p-4'>
              {data.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
