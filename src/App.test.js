import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

// Home Page Load
test('Should render 10 random images', async () => {
  render(<App />);

  expect(await screen.findAllByRole('img')).toHaveLength(10);
});

// Navigation
test('when user clicks on a link, the characters details (route/component) should render', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findAllByRole('img')).toHaveLength(10);
  expect(screen.getAllByRole('heading')).toHaveLength(22);
  expect(screen.getAllByRole('link')).toHaveLength(12);

  const link = screen.getAllByRole('link');
  userEvent.click(link[9]);

  expect(await screen.findAllByRole('img')).toHaveLength(1);
  expect(screen.getAllByRole('heading')).toHaveLength(2);
  expect(screen.getAllByRole('link')).toHaveLength(2);
});
