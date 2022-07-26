import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(null);
  const [value, setValue] = useState('');

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div className='App'>
      <h1 data-testid='value-elem'>{value}</h1>
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>UNIT TEST</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type='text'
        name=''
        id=''
        placeholder='input value'
      />
    </div>
  );
}

export default App;
