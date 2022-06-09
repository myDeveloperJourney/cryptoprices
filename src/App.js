import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
     <Route path="/">
       <Main />
     </Route>
     <Route path="/currencies">
       <Currencies />
     </Route>
     <Route path="/price/:symbol">
       <Price />
     </Route>
    </div>
  );
}

export default App;
