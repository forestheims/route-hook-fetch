import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import Elements from './views/Elements/Elements';
import CharacterDetail from './views/CharacterDetail/CharatcerDetail';

function App() {
  const [displayed, setDisplayed] = useState([]);
  const [rtsNQurs, setRtsNQurs] = useState('api/v1/characters/random?count=10');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/${rtsNQurs}`
      );
      const data = await response.json();
      setDisplayed(data);
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
          <Route path="/elements">
            <Elements displayed={displayed} setDisplayed={setDisplayed} />
          </Route>
          <Route path="/character/:_id">
            <CharacterDetail />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;
