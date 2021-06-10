import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Home from './pages/Home';
import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';
import Winerys from './pages/Winerys';
import AdminWinery from "./pages/AdminWinery";

function App() {
  return (
    <div id="appContainer">
      <BrowserRouter>
        <Navigation />
        <section>
          <Route exact path="/">
            <Home />
            <Winerys />
          </Route>
          <Route path="/winery">
            <Route />
          </Route>
          <Route path="/adminWinery">
            <AdminWinery />
          </Route>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
