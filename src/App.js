import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(null);

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div className='App'>
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>UNIT TEST</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        click me
      </button>
      <input type='text' name='' id='' placeholder='input value' />
    </div>
  );
}

export default App;
