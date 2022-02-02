import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import Elements from './views/Elements/Elements';

function App() {
  const [displayed, setDisplayed] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://last-airbender-api.herokuapp.com//api/v1/characters/random?count=10'
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
          <Route path="/elements">
            <Elements displayed={displayed} setDisplayed={setDisplayed} />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;
