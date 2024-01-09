// Display.jsx
import React from 'react';

const Display = ({ displayData }) => {
  return (
    <div>
      {displayData && displayData.fact && <p className='catstyles'>{displayData.fact}</p>}
      {displayData && displayData.message && (
        <img  className='dogstyles' src={displayData.message} alt="Random Dog" />
      )}
    </div>
  );
};

export default Display;
