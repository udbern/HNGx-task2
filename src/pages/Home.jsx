// Import necessary modules and components
import React from 'react'; 
import requests from '../Requests';
import Main from '../components/Main'; 
import Row from '../components/Row';
import Navbar from "../components/Navbar"; 


function Home() {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Render the Main component */}
      <Main />
      {/* Render the Row component with the title 'top 10' and a fetchURL from the 'requests' object */}
      <Row title='top 10' fetchURL={requests.requestTrending} />
    </>
  );
}


export default Home;
