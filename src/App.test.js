// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import App from './App';

// describe('TEST APP', () => {
//   test('renders learn react link', () => {
//     render(<App />);
//     const unitTestElement = screen.getByText(/UNIT TEST/i);
//     const btn = screen.getByRole('button');
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(unitTestElement).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//   });
//   test('null test', async () => {
//     render(<App />);
//     // const unitTestElement = screen.queryByText(/UNIT TEST test/i);
//     // expect(unitTestElement).toBeNull();

//     const unitTestElement = await screen.findByText(/data/i);
//     expect(unitTestElement).toBeInTheDocument();
//     expect(unitTestElement).toHaveStyle({ color: 'red' });
//   });

//   test('CLICK EVENT', async () => {
//     render(<App />);
//     const btn = screen.getByTestId('toggle-btn');

//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//   });
//   test('INPUT EVENT', async () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(screen.queryByTestId('value-elem')).toContainHTML('');
//     //Искуственное событие
//     //подходит для события инпут и клик
//     // fireEvent.input(input, {
//     //   target: { value: '123123' },
//     // });
//     // userEvent - воспроизводит полное взаимодействие с пользователем
//     // с интерфесом
//     userEvent.type(input, '123123');
//     expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
//   });
// });
