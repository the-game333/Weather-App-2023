import React from 'react'

function GetIcons(props) {
    // console.log(props);
    const {data} = props;
    // console.log(data);
    
    // const icons = "http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png";
    return (
        <div>
            <img src={data? "http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png" : null} alt=""/>
        </div>
    )
}

export default GetIcons
