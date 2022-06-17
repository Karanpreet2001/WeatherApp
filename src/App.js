
import { useState } from "react";

const api={
  key:"70059e902dfc063f6751d7a39157e6ea",
  base:"https://api.openweathermap.org/data/2.5/"

}

function App() {


  const dateBuilder= (d)=>{
    let months =["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = d.getDate();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];

    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

  }


  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."/>

        </div>

        <div className="location-box">
            <div className="location">New York City, US</div>
            <div className="date">{dateBuilder(new Date)}</div>

            <div className="weather-box">
              <div className="temp">
                15*c
              </div>
              <div className="weather">
                Sunny
              </div>
            </div>

        </div>
      </main>
    </div>
  );
}

export default App;
