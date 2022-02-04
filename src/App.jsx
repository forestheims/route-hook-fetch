import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

function App() {
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=10`
      );
      const data = await response.json();
      setDisplayed(data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Composition>
        <Switch>
          <Route exact path="/">
            <Home displayed={displayed} />
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
