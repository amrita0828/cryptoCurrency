import React from 'react';
import './css/App.css';
import ApiList from './js/ApiList.js';


function App() {
  return (
    <div className="App">
      <div className="headerStyles">
          <h1>Crypto Wiki</h1>
          <ApiList/>
        </div>
    </div>
  );
}

export default App;