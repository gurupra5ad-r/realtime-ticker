import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders title', () => {
    render(<App />);
    expect(screen.getByText(/Realtime Ticker/)).toBeTruthy();
  });
});
