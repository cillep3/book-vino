import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Home from './pages/Home';
import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';
import Winerys from './pages/Winerys';

function App() {
  return (
    <div id="appContainer">
      <BrowserRouter>
        <Navigation />
        <section>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/winery">
            <Winerys />
          </Route>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
