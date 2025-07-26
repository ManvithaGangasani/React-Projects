import React from 'react';
import Factorial from './factorial';
import Interest from './interest';
import "./index.css";

function App() {
  return (
    <div className='main'>
      <div className='main1'>
        <Factorial />
      </div>
      <div className='main2'>
        <Interest />
      </div>
    </div>
  );
}

export default App;
