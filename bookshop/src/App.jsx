import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home'; // Import your Home component
import Products from './Pages/Products'; // Import your Products component
import AboutUs from './Pages/AboutUs'; // Import your AboutUs component
import ContactUs from './Pages/ContactUs'; // Import your ContactUs component
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { CartProvider } from './Pages/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Router>
        </CartProvider>
    );
}

export default App;
