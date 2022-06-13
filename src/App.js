// ui components
import Nav from './components/Nav';

// page components
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';

// component libraries
import { Route } from 'react-router-dom';

// styles
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('hello')
  }, [])
  return (
    <div className="App">
     <Nav />
     <Route exact path="/">
       <Main />
     </Route>
     <Route path="/currencies">
       <Currencies />
     </Route>
     <Route path="/price/:symbol" render={(renderProps) => {
       return <Price {...renderProps} />
     }} />
    </div>
  );
}

export default App;


   /*
        {
          history: {},
          match: {
            params: {
              symbol: "DASH"
            }
          },
          location: {}
        }
       */