// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import User from './User';
// import axios from 'axios';

// jest.mock('axios');

// describe('TEST APP', () => {
//   let response;
//   beforeEach(() => {
//     response = {
//       data: [
//         {
//           id: 1,
//           name: 'Leanne Graham',
//         },
//         {
//           id: 2,
//           name: 'Ervin Howell',
//         },
//       ],
//     };
//   });
//   test('async request', async () => {
//     axios.get.mockReturnValue(response);
//     render(<User />);
//     const users = await screen.findAllByTestId('user-item');
//     expect(users.length).toBe(2);
//     expect(axios.get).toBeCalledTimes(1);
//     screen.debug();
//   });
// });
