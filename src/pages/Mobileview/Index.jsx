import '../../App.scss';
import "../../pages/Mobileview/Mobile.scss"
import { BrowserRouter, Route } from 'react-router-dom';

// Import of components
import Navigation from "../../layouts/Mobileview/Navigation"
import Footer from "../../layouts/Footer"
import AllWinerys from "../../pages/Mobileview/AllWinerys"


const Index = () => {
    return (
        <div id="mobileContainer">
        <BrowserRouter>
            <Navigation />

            <section>
            
            <Route path="/allWinerys">
                <AllWinerys />
            </Route>
                
            </section>

            <Footer />
        </BrowserRouter>
    </div>
    )
}

export default Index
