import React from 'react';
import Main from '../components/Main'
import requests from '../Requests';
import Row from '../components/Row';
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
        <Main/>
        <Row title='top 10' fetchURL={requests.requestTrending}/>
    </>
  )
}

export default Home