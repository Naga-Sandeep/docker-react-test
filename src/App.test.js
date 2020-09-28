import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react-with-docker text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React with Docker APP/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CI/CD text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('For CI/CD setup');
  expect(linkElement).toBeInTheDocument();
});
