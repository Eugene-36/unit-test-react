import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createReduxStore } from '../../store/store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

describe('Counter test', () => {
  test('Test router', async () => {
    const { getByTestId } = renderWithRedux(<Counter />, {
      counter: { value: 10 },
    });
    const incrementBtn = getByTestId('increment-btn');
    expect(getByTestId('value-title')).toHaveTextContent('10');
    userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('11');
  });
});
