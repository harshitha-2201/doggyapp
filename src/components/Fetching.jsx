// Fetching.js
import React, { useState } from 'react';

const Fetching = ({ setDisplayData }) => {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedAnimal(e.target.value);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = '';

    if (selectedAnimal === 'cat') {
      apiUrl = 'https://catfact.ninja/fact';
    } else if (selectedAnimal === 'dog') {
      apiUrl = 'https://dog.ceo/api/breeds/image/random';
    }

    if (apiUrl) {
      try {
        setLoading(true); // Set loading to true when fetching starts
        const response = await fetch(apiUrl);
        const data = await response.json();
        setDisplayData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when fetching is done (success or error)
      }
    }
  };

  return (
    <div className='selectedanimal'>
      <form onSubmit={handleSubmit}>
        <label>
          Select an animal:
          <select value={selectedAnimal} onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </label>
        <button type="submit">Get Info</button>
        {loading && <p>Loading...</p>} {/* Display loading indicator when loading is true */}
      </form>
    </div>
  );
};

export default Fetching;

