import React from 'react'
import styled from 'styled-components'
export default function Login() {

    const handleClick = () =>
    {
       alert('The button is pressed!!') 
    }
  return (
    <Container>
       <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify image" /> 
       <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img{
        height: 20vh;
    }
    button
    {
      padding: 1rem 5rem;
      border-radius: 5rem;  
      border: none;
      color: white;
      background-color: black;
      font-size: 1.4rem;
      cursor: pointer;
    }
`;
