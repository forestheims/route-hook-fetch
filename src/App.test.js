import { screen, render } from '@testing-library/react';
import App from './App';

test('Should render 10 random images', async () => {
  render(<App />);

  expect(await screen.findAllByRole('img')).toHaveLength(10);
});
