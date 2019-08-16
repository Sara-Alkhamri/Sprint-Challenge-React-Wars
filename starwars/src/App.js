import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PeopleCards from "./components/PeopleCards"
import styled from 'styled-components';

//styling
const AppCont =styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [stpeople, setstPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        //console.log(response)
        const info = response.data.results;
        setstPeople(info);
      })
      .catch(err => {
        //console.log(err)
      })
  }, [])
  //console.log(stpeople);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <AppCont>
      {stpeople.map((people, index) => {
        return <PeopleCards name={people.name} key={index} height={people.height} birthday={people.birth_year} eye={people.eye_color} />;
      })}
      </AppCont>
    </div>
  );
}

export default App;
