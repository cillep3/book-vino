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

const Index = () => {
    return (
        <div id="mobileContainer">
        <BrowserRouter>
            <Navigation />

            <section>
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
                    
            </section>

            <Footer />
        </BrowserRouter>
    </div>
    )
}

export default Index
