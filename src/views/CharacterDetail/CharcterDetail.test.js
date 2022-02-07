import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const individual = {
  allies: ['Jinora'],
  enemies: [],
  _id: '5cf5679a915ecad153ab6a09',
  photoUrl:
    'https://vignette.wikia.nocookie.net/avatar/images/5/50/Pepper.png/revision/latest?cb=20150408121311',
  name: 'Pepper',
  skin: 'Fur',
  weapon: 'Air, body bulk',
  position: "Jinora's ",
  affiliation: 'Air Nation',
  first: '"',
};

// Chacter Details View
test('the ', async () => {
  const setRtsNQurs = jest.fn();

  render(
    <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab6a09']}>
      <Route path="/character/:_id">
        <CharacterDetail individual={individual} setRtsNQurs={setRtsNQurs} />
      </Route>
    </MemoryRouter>
  );

  waitForElementToBeRemoved(screen.getByText(/loading/i));

  expect(await screen.findAllByRole('img')).toHaveLength(1);
  expect(screen.getAllByRole('heading')).toHaveLength(2);

  expect(screen.getByRole('heading', { name: /pepper/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /air/i })).toBeInTheDocument();
});
