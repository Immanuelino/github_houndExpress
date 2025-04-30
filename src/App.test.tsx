// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import  App from './App';

test('renders Guide Registration title', () => {
  render(<App />);
  expect(screen.getByText(/Guide Registration/i)).toBeInTheDocument();
});
