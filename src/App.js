import './App.css';
import Customer from "./Customer";
import React from "react";
import Person from "./Person";
import Sites from "./Sites";
import Planets from "./Planets";

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
  return (
      <div>
        <Customer />
        <Person person={data}/>
        <Sites sites={sites} />
        <Planets planets={planets} />
      </div>
  );
}

export default App;
