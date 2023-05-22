import { useState } from 'react';
import './App.css';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function App() {
  const [number, setNumber] = useState('');
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleClear = () => {
    setSelectedNumbers([]);
    setNumber('');
    setResult('');
  };

  const handleNumber = (num) => {
    setNumber((prevNumber) => prevNumber + num);
    setResult('');
  };

  const handleOperation = (op) => {
    setOperation(op);
    setSelectedNumbers([...selectedNumbers, Number(number)]);
    setNumber('');
    setResult('');
  };

  const calculateResult = () => {
    const currentNumber = Number(number);
    let calculatedResult = '';

    switch (operation) {
      case '/':
        calculatedResult = selectedNumbers.reduce((acc, num) => acc / num, currentNumber);
        break;
      case '*':
        calculatedResult = selectedNumbers.reduce((acc, num) => acc * num, currentNumber);
        break;
      case '+':
        calculatedResult = selectedNumbers.reduce((acc, num) => acc + num, currentNumber);
        break;
      case '-':
        calculatedResult = selectedNumbers.reduce((acc, num) => acc - num, currentNumber);
        break;
      default:
        break;
    }

    setResult(calculatedResult.toString());
    setSelectedNumbers([]);
    setNumber(calculatedResult.toString());
  };



  return (
    <div className="App">
      <div className="container">
        <div className='result'>
          <input type='text' value={number || result} readOnly className='result_view' />
        </div>

        <div className='operators'>
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleOperation('/')}>÷</button>
          <button onClick={() => handleOperation('*')}>×</button>
          <button onClick={() => handleOperation('-')}>–</button>
          <button onClick={() => handleOperation('+')}>+</button>
          {/* <button onClick={() => handleNumber(number)}>.</button> */}
        </div>

        <div className='numbers'>
          {numbers.map((number) => (
            <button onClick={() => handleNumber(number)} key={number} className="">
              {number}
            </button>
          ))}
        </div>

        <div className='cero__point'>
          <button onClick={() => handleNumber('0')} className='cero'>0</button>
          <button onClick={() => handleNumber('.')} className='point'>.</button>
          <button className='equal' onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;