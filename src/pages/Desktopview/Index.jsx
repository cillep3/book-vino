import '../../App.scss';
import './Desktop.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Home from './desktop_pages/Home';
import Navigation from '../../layouts/Desktopview/Navigation';
import Footer from '../../layouts/Footer';
import Winerys from './desktop_pages/Winerys';
import CreateWinery from './desktop_pages/CreateWinery'
import AdminWinery from "./desktop_pages/AdminWinery";
import EditWineries from './desktop_pages/EditWineries';
import Listelement from '../../components/Listelement';

// Import of single wineries components
import Corte from './desktop_pages/single_wineries/Corte_Archi'
import Marognole from './desktop_pages/single_wineries/Le_Marognole'
import Marchesini from './desktop_pages/single_wineries/Marchesini_Marcello'
import Marco from './desktop_pages/single_wineries/Marco_Reggio'
import Montalto from './desktop_pages/single_wineries/Sol_de_Montalto'

const Index = () => {
    return (
        <div id="desktopContainer">
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
                </section>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Index
