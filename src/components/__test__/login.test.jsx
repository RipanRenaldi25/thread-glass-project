import React from 'react';
import '@testing-library/jest-dom';
import { screen, act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';

/**
 * Test case scenario
 * Shold Show email input field correctly
 * Should show password input correctly
 * shouuld show button that containts Login text correctly
 */

describe('Login Component Testing', () => {
  it('Should Show Email Input Correctly', async () => {
    // arrange
    // render
    await act(async () => render(<Login />));
    // get email input
    const emailInput = await screen.getByPlaceholderText('Email');

    // action
    await act(async () => userEvent.type(emailInput, 'ripan@gmail.com'));

    // assert
    expect(emailInput).toHaveValue('ripan@gmail.com');
  });
});
