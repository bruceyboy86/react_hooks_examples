import React,{useState} from 'react';
import './App.css';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>useState()</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +1 )}>
        click me
      </button>
    </div>
  );
}


