import "../../App.scss";
import "../../pages/Desktopview/Desktop.scss";
import { BrowserRouter, Route } from "react-router-dom";

// Import of components
import Home from "./desktop_pages/Home";
import Navigation from "../../layouts/Desktopview/Navigation";
import Footer from "../../layouts/Desktopview/Footer";
import Winerys from "./desktop_pages/Winerys";
import CreateWinery from "./desktop_pages/CreateWinery";
import AdminWinery from "./desktop_pages/AdminWinery";
import EditWineries from "./desktop_pages/EditWineries";
import Listelement from "../../components/Listelement";
import Login from "../../layouts/Login";
import ScrollToTop from "../../components/ToTop";
import About from "./desktop_pages/About";
import Faq from "./desktop_pages/Faq";

// Import of single wineries components
import Corte from "./desktop_pages/single_wineries/Corte_Archi";
import Marognole from "./desktop_pages/single_wineries/Le_Marognole";
import Marchesini from "./desktop_pages/single_wineries/Marchesini_Marcello";
import Marco from "./desktop_pages/single_wineries/Marco_Reggio";
import Montalto from "./desktop_pages/single_wineries/Sol_de_Montalto";
import Bel from "./desktop_pages/single_wineries/Bel_Amino";

const Index = () => {
  return (
    <div id="desktopContainer">
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <section>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allWinerys">
            <Winerys />
          </Route>
          <Route path="/adminWinery">
            <AdminWinery />
          </Route>
          <Route path="/createWinery">
            <CreateWinery />
          </Route>
          <Route path="/editWineries/:id" component={EditWineries} />
          <Route path="/listelement">
            <Listelement />
          </Route>
          <Route path="/corte-archi">
            <Corte />
          </Route>
          <Route path="/le-marognole">
            <Marognole />
          </Route>
          <Route path="/marchesini-marcello">
            <Marchesini />
          </Route>
          <Route path="/marco-reggio">
            <Marco />
          </Route>
          <Route path="/sol-de-montalto">
            <Montalto />
          </Route>
          <Route path="/bel-amino">
            <Bel />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create">
            <CreateWinery />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
};

export default Index;
