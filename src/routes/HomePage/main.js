import React from "react";
import Navbar from './Header';
import Banner from "./Header/Banner";
import Contents from './Contents'
import '../style.css';


const Main = () => (
    <>
        <Navbar />
        {/* <Banner />         */}
        <Contents />
    </>    
);

export default Main;