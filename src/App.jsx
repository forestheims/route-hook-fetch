import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

function App() {
  const [displayed, setDisplayed] = useState([]);
  const [routesAndQueries, setRoutesAndQueries] = useState(
    'api/v1/characters/random?count=10'
  );
  const [individual, setIndividual] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/${routesAndQueries}`
      );
      const data = await response.json();
      if (routesAndQueries.includes('random')) {
        setDisplayed(data);
      } else {
        setIndividual(data);
      }
    };
    fetchData();
  }, [routesAndQueries]);

  return (
    <BrowserRouter>
      <Composition>
        <Switch>
          <Route exact path="/">
            <Home displayed={displayed} />
          </Route>
          <Route path="/character/:_id">
            <CharacterDetail
              individual={individual}
              setRoutesAndQueries={setRoutesAndQueries}
            />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;
