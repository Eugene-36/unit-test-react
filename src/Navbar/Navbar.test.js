import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

describe('NAVBAR TEST', () => {
  test('mainLink test link', () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');

    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('aboutLink test link', () => {
    renderWithRouter(<Navbar />);

    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('usersLink test link', () => {
    renderWithRouter(<Navbar />);

    const usersLink = screen.getByTestId('users-link');

    userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
