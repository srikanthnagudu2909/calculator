import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const onclear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clearhistory = () => {
    setHistory([]);
  };

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        setHistory([...history, `${a} + ${b} = ${a + b}`]);
        break;
      case '-':
        setResult(a - b);
        setHistory([...history, `${a} - ${b} = ${a - b}`]);
        break;
      case '*':
        setResult(a * b);
        setHistory([...history, `${a} * ${b} = ${a * b}`]);
        break;
      case '/':
        if (b !== 0) {
          setResult(a / b);
          setHistory([...history, `${a} / ${b} = ${a / b}`]);
        } else {
          setResult('Cannot divide by zero');
        }
        break;
      case '%':
        setResult(a % b);
        setHistory([...history, `${a} % ${b} = ${a % b}`]);
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <h1>Simple Calculator</h1>
      <button type="button" onClick={toggleDarkMode} className="toggle-dark">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>−</button>
        <button onClick={() => calculate('*')}>×</button>
        <button onClick={() => calculate('/')}>÷</button>
        <button onClick={() => calculate('%')}>%</button>
      </div>

      <div className="clear">
        <button type="button" onClick={onclear}>Clear</button>
      </div>

      {result !== null && <h2>Result: {result}</h2>}

      {history.length > 0 && (
        <div className="history">
          <h1>History</h1>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button type="button" onClick={clearhistory}>Clear History</button>
        </div>
      )}
    </div>
  );
}

export default App;
