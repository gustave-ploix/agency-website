import { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import './style.scss'


export default function App() {

    const [deployMenu, setdeployMenu] = useState(false);


    return (
        <>
            <Navbar toggle={setdeployMenu} state={deployMenu}  />
            <Header menuState={deployMenu} />
            <Featured />
            <About />
            <Gallery />
            <Footer />
        </>
    )
}