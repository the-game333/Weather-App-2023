import React, { useEffect, useState } from 'react';
import "./css/style.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setsearch] = useState("Nigeria");
  const [bg, setBg] = useState("#00E5EE");
  const [weather, setWeather] = useState({});

  //  Box background change
  const bgChange = () => {
    setBg("#ffb6cd");
  }
  const bgBack = () => {
    setBg("#00E5EE");
  }


  // When search renders useEffect works in
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec95667ef545cb054ebd779e272fa5f4`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
      console.log(resJson);
      setWeather(resJson);
    }
    fetchApi();
  }, [search])


  return (
    <>
      <Tippy placement="bottom" content="follow on Twitter">
        <a href="https://twitter.com/openweathermap?lang=en" className="secondA"><i className="fab fa-twitter fa-2x second"></i></a>
      </Tippy>
      <Tippy placement="top" content="follow on Facebook">
        <a href="https://www.facebook.com/openweathermap" className="firstA"><i className="fab fa-facebook fa-2x first"></i></a>
      </Tippy>
      <div className="box p-3" style={{ backgroundColor: bg }}>

        {/* Navbar Starts */}

        <div className="container">

          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand text-white" href="#" ><i className="fas fa-cloud-sun fa-2x"></i> MyWeather</a>
            <div className="inputData">
              <input type="search" className="inputField" placeholder=" Search Weather..." defaultValue=""
                onChange={(event) => { setsearch(event.target.value) }} />
              <a href="#" class="srchbtn">
                <i class="fas fa-search fa-2x"></i>
              </a>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white only" href="https://openweathermap.org/">Source</a>
                </li>
                <li className="nav-item">

                  <a className="nav-link only1" href="#" onClick={bgChange} onDoubleClick={bgBack}>Change Theme</a>

                </li>

              </ul>
            </div>
          </nav>
        </div>
        {!city ? (
          // If no city then display this
          <div>
            <div className="spinner-border text-light error1" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="error text-white">No City Available</p>
          </div>
        ) : (
          // Else display this
        
          <div>
            <div className="info text-center">
              <h2 className=" onlyy m-2 text-dark">{search}</h2>
              <h1 className=" text-muted">  Temp : {city.temp} °C</h1>

              <p className=" text-muted">Humidity : {city.humidity}  | Pressure : {city.pressure}</p>
              <p className=" text-dark">Feels Like : {city.feels_like}°C</p>
            </div>
          </div>
        )}

        {/* for displaying icon */}
        {weather.main && (
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="iconss" alt="" />
        )}

        {/* WAVES */}
        <div className="wave wave1"> </div>
        <div className="wave wave2"> </div>
        <div className="wave wave3"> </div>

      </div>
    </>
  )
}
export default TempApp;
