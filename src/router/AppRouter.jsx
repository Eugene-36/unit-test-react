import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import User from '../users/User';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/users' element={<User />}></Route>
      <Route path='/users/:id' element={<UserDetailsPage />}></Route>

      <Route path='/*' element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
