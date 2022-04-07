import './App.css';
import Customer from "./Customer";
import React from "react";
import Person from "./Person";
import Sites from "./Sites";
import Planets from "./Planets";
import HelloWorld from "./HelloWorld";
import Link from "./Link";
import OneData from "./OneData";
import AllData from "./AllData";
import Welcome from "./Welcome";
import Alert from "./Alert";

function App() {
    const data = {
        image: "https://i.ytimg.com/vi/kHjzuqq3b44/maxresdefault.jpg",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
            url: "https://en.wikipedia.org/wiki/Bob_Dylan",
            label: "Go to wikipedia"
        }
    };
    const sites = [
        {
            link: "https://google.com",
            description: "Link to google.com"
        },
        {
            link: "https://facebook.com",
            description: "Link to facebook.com"
        },
        {
            link: "https://amazon.com",
            description: "Link to amazon.com"
        }
    ];
    const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
    const link = {
        link: "https://google.com",
        description: "Link to google.com"
    }
    const oneData = {
        image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
            url: "https://en.wikipedia.org/wiki/Bob_Dylan",
            label: "Go to wikipedia"
        }
    };
    
    const allData = [
        {
        image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
            url: "https://en.wikipedia.org/wiki/Bob_Dylan",
            label: "Go to wikipedia"
        }},
        {
            image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
            cardTitle: "Bob Dylan2",
            cardDescription: "opis 2",
            button: {
                url: "https://en.wikipedia.org/wiki/Bob_Dylan",
                label: "Go to wikipedia2"
            }},
        {
            image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
            cardTitle: "Bob Dylan3",
            cardDescription: "Opis 3",
            button: {
                url: "https://en.wikipedia.org/wiki/Bob_Dylan",
                label: "Go to wikipedia3"
            }}
    ];
    
    const description = 'OMG! Something really bad has happended!';
    
  return (
      <div>
        <Customer />
        <Person person={data}/>
        <Sites sites={sites} />
        <Planets planets={planets} />
          <HelloWorld />
          <Link link={link} />
          <OneData oneData={oneData} />
          <AllData allData={allData} />
          <Welcome />
          <Alert description={description} />
      </div>
  );
}

export default App;
