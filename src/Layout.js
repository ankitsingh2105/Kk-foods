import React from 'react'
import { AboutUs, Header, SpecialMenu, Chef } from './container';
import { Navbar } from './components';
import { useState, useEffect } from 'react';
import './App.css';
import { images } from './constants';
export default function Layout(props) {
    const [showVideo, setShowVideo] = useState(true);
    useEffect(
        () => {
            let timer1 = setTimeout(() => setShowVideo(false), 2500);
            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );
    return (
        <>
            {showVideo ? (
                <>
                    <div className="align_image_logo">
                        <img className="logo_video2" src={images.gif} alt="..loading" />
                        <div></div>
                    </div>
                </>
            ) : (
                <>
                    <Navbar />
                    <Header />
                    <AboutUs />
                    <SpecialMenu />
                    <Chef />
                </>
            )}
        </>
    )
}

