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
                </section>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Index
