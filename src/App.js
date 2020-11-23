import React from 'react';

//API Object
const api = {
  key: '25aaa2ff435ae383091541beb4b0dbb1',
  baseURL: 'api.openweathermap.org/data/2.5/'
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='search...'
            />
        </div>
      </main>
    </div>
  );
}

export default App;
