import React, { useState, useEffect } from 'react';

import About from '../Pages/About/About';
import Details from '../Pages/Details/Details';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Nav from '../Pages/Nav/Nav';
import Navbar from '../Pages/Navbar/Navbar';
import Cards from '../Pages/Card/Cards';
import Sidebar from '../Sidebar/';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Nav />
            <Sidebar />
            <About />
            <Cards />
            <Details />
            <Footer />
        </div>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    return (
        <div>
            {loading ? "" : <HomePage />}
        </div>
    )
}
export default Home;