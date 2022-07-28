import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import User from './User';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetailsPage from '../pages/UserDetailsPage';

jest.mock('axios');

describe('TEST APP', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('async request', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <User />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');

    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
    // screen.debug();
  });

  test('redirect to details page', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path='/users' element={<User />} />
          <Route path='/users/:id' element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');

    expect(users.length).toBe(2);
    userEvent.click(users[0]);

    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
