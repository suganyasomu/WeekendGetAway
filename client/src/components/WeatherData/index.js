import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "../Row";
import SearchContext from "../../utils/SearchContext";
import SubmitBtnContext from "../../utils/SubmitBtnContext";
import "./style.css";

function WeatherData(props) {
  //   console.log(props);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);

  // console.log(submitted); 

  return (
    <div style={{ padding: '0 10px 30px 10px' }}>
      {/* If filter is select && search is submitted */}
      {props.filter && submitted ? (
        <div> 
          <h3>Weather Forecast For: {search}</h3>
          <div className="weatherContainer container">
            <Row>
                {props.weatherCondition.map((res, index) => {
                  let id = index + 1;
                  return (
                      <Card key={id} className="weatherCard" >
                        <Card.Body>
                            <ul>
                              <li style={{ fontWeight: 'bold' }}> {res.date} </li>
                              <li> Temp: {res.temp} </li>
                              <li> Humidity: {res.humidity} </li>
                              <li> Wind: {res.wind} </li>
                              <li> Conditions: {res.weather} </li>
                            </ul>
                        </Card.Body>
                      </Card>
                  );                
                })}
                
            </Row>
        </div>

        </div>
      ) : (
        <span> </span>
      )}
    </div>
    
  );
}

export default WeatherData;
