import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import Elements from './views/Elements/Elements';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

function App() {
  const [displayed, setDisplayed] = useState([]);
  const [rtsNQurs, setRtsNQurs] = useState('api/v1/characters/random?count=10');
  const [individual, setIndividual] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/${rtsNQurs}`
      );
      const data = await response.json();
      if (rtsNQurs.includes('random')) {
        setDisplayed(data);
      } else {
        setIndividual(data);
      }
    };
    fetchData();
  }, [rtsNQurs]);

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
              displayed={displayed}
              setRtsNQurs={setRtsNQurs}
            />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;
