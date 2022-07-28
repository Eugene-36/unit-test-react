// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(null);
//   const [value, setValue] = useState('');

//   const onClick = () => setToggle((prev) => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);

//   return (
//     <div className='App'>
//       <h1 data-testid='value-elem'>{value}</h1>
//       {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{ color: 'red' }}>data</div>}
//       <h1>UNIT TEST</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>
//         click me
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         type='text'
//         name=''
//         id=''
//         placeholder='input value'
//       />
//     </div>
//   );
// }

// export default App;

//======================================
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import UserDetailsPage from './pages/UserDetailsPage';
import User from './users/User';

const App = () => {
  return (
    <div>
      <Link to='/' data-testid='main-link'>
        main
      </Link>
      <Link to='/about' data-testid='about-link'>
        about
      </Link>
      <Link to='/users' data-testid='users-link'>
        users
      </Link>

      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/users' element={<User />}></Route>
        <Route path='/users/:id' element={<UserDetailsPage />}></Route>

        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
