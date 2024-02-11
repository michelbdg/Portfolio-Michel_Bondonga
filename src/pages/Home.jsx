import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/about";
import Service from "../components/Service";
import Portfolio from "./Portfolio";
import File from "../components/File";
export default function Home(){

    return(
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Service/>
            <Portfolio/>
            <File/>
            <Footer/>
        </>
    )
}