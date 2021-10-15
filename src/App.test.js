import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

it('renders site name message', () => {
  render(<App />);
  expect(screen.getByText('Inventive Bakes')).toBeInTheDocument();
});


it('renders copyright footer message', () => {
  render(<App />);
  expect(screen.getByText(/Copyright/)).toBeInTheDocument();
});
