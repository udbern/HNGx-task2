import React from 'react';
import Main from '../components/Main'
import requests from '../Requests';
import Row from '../components/Row'

function Home() {
  return (
    <>
        <Main/>
        <Row title='top 10' fetchURL={requests.requestTrending}/>
    </>
  )
}

export default Home