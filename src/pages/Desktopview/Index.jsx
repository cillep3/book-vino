import '../../App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Home from './Home';
import Navigation from '../../layouts/Desktopview/Navigation';
import Footer from '../../layouts/Footer';
import Winerys from './Winerys';
import CreateWinery from './CreateWinery'
import AdminWinery from "./AdminWinery";
import EditWineries from './EditWineries';

const Index = () => {
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
