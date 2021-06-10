import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Imports of components
import Home from './pages/Home';
import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';

function App() {
  return (
    <div id="appContainer">
      <BrowserRouter>
        <Navigation />
        <section>
          <Route exact path="/">
            <Home />
          </Route>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
