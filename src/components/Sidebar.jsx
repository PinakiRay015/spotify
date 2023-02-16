import React from 'react';
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled , MdSearch} from 'react-icons/md'
import Playlist from './Playlist';
export default function Sidebar() {

    const mystyle1 = {
        backgroundColor: 'black',
        color: '#b3b3b3',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    }

    const mystyle2 = {
      display : 'flex',
      flexDirection: 'column',
    }

    const mystyle3 = {
      textAlignment: 'center',
      margin: '1rem 0rem',
    }

    const mystyle4 = {
      maxInlineSize : '80%',
      blockSize: 'auto'
    }

    const mystyle5 = {
      listStyleType : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem'
    }

    const mystyle6 = {
      display:  'flex',
      gap: '1rem',
      cursor: 'pointer',
      transition: '0.3s ease-in-out'
    }
  return (
    <div style={mystyle1}>
      <div style={mystyle2} className="topinks">
        <div style={mystyle3} className="logo">
        <img style={mystyle4}
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="spotify image"
      />
        </div>
        <ul style={mystyle5}>
          <li style={mystyle6}><MdHomeFilled/><span>Home</span></li>
          <li style={mystyle6}><MdSearch/><span>Search</span></li>
          <li style={mystyle6}><span><IoLibrary/>Your Library</span></li>
        </ul>
      </div>
      <Playlist/>
    </div>
  )
}
