import React, { lazy, Suspense } from 'react'
import { Navbar } from './components';
import './App.css';
import SyncLoader from "react-spinners/SyncLoader";
const AboutUs = lazy(() => import("./container/AboutUs/AboutUs"));
const Header = lazy(() => import("./container/Header/Header"));
const SpecialMenu = lazy(() => import("./container/Menu/SpecialMenu"));
const Chef = lazy(() => import("./container/Chef/Chef"));
export default function Layout() {
    return (
        <>
            <Suspense className='App' fallback={<div className='align' style={{ margin: "250px 0px" }} >
                <SyncLoader size={'20px'} color='black' className='loader App' /></div>}>
                <Navbar />
                <Header />
                <AboutUs />
                <SpecialMenu />
                <Chef />
            </Suspense>
        </>
    )
}

