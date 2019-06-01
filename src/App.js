import React from 'react';
import './App.css';
import Chart from './components/Chart';
import AverageRate from './components/AverageRate';

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <Chart
          label="Sell"
          type="sell"
        />
        <Chart
          label="Buy"
          type="buy"
        />
        <AverageRate
          currencyFrom='EUR'
          currencyTo='RUB'
        />
        <AverageRate
          currencyFrom='USD'
          currencyTo='RUB'
        />
      </header>
    </div>
  );
}

export default App;
