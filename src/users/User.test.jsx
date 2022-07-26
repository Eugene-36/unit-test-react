import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import User from './User';
import axios from 'axios';

jest.mock('axios');

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<User />);
  });
});
