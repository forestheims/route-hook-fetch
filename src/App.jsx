import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Composition>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;
