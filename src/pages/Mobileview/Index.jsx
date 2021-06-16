import '../../App.scss';
import "../../pages/Mobileview/Mobile.scss"
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Navigation from "../../layouts/Mobileview/Navigation"
import Footer from "../../layouts/Footer"
import AllWinerys from "../../pages/Mobileview/mobile_pages/AllWinerys"
import Liste from '../../components/Listelement'
import About from '../Mobileview/mobile_pages/About'
import Admin from './mobile_pages/AdminWinery'
import Edit from './mobile_pages/EditWinery'
import Home from './mobile_pages/Home'

// Import of single wineries components
import Corte from './mobile_pages/single_wineries/Corte_Archi'
import Marognole from './mobile_pages/single_wineries/Le_Marognole'
import Marchesini from './mobile_pages/single_wineries/Marchesini_Marcello'
import Marco from './mobile_pages/single_wineries/Marco_Reggio'
import Montalto from './mobile_pages/single_wineries/Sol_de_Montalto'

const Index = () => {
    return (
        <div id="mobileContainer">
        <BrowserRouter>
            <Navigation />

            <section>
                <Route exact-path="/">
                    <Home />
                </Route>
                <Route path="/allWinerys">
                    <AllWinerys />
                </Route>
                <Route path="/listelement">
                    <Liste />
                </Route>
                <Route path="/aboutus">
                    <About/>
                </Route>
                <Route path="/adminWinery">
                    <Admin />
                </Route>
                <Route path="/editWineries/:id" component={Edit} />
                <Route path="/corte-archi">
                    <Corte/>
                </Route>
                <Route path="/le-marognole">
                    <Marognole/>
                </Route>
                <Route path="/marchesini-marcello">
                    <Marchesini/>
                </Route>
                <Route path="/marco-reggio">
                    <Marco/>
                </Route>
                <Route path="/sol-de-montalto">
                    <Montalto/>
                </Route>
                    
            </section>

            <Footer />
        </BrowserRouter>
    </div>
    )
}

export default Index
