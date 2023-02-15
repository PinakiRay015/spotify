import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Spotify() {
  const mystyle1 = {
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows:'85vh 15vh'
  };

  const mystyle2 = {
    display: 'grid',
    gridTemplateColumns: '15vw 85vw',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(transparent , rgba(0,0,0,1))',
    backgroundColor: 'rgb(32 , 87 , 100)'
  };

  const mystyle3 = {
    height: '100%',
    width: '100%',
    overflow: 'auto'
  };
  return (
    <>
      <div style={mystyle1}>
        <div style={mystyle2} className="spotify_body">
            <Sidebar/>
          <div style={mystyle3} className="body">
            <Navbar/>
            <div className="body_contents">
                <Body/>
            </div>
          </div>
        </div>
        <div className="spotify_footer">
            <Footer/>
        </div>
      </div>
    </>
  );
}
