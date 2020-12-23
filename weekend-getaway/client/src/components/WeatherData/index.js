import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function WeatherData(props) {
  // console.log(props);

  return (
    <div>
      {props.filter ? (
        <section style={{ width: "100%" }}>
          <h3>Weather Forecast For: {props.searched}</h3>
          {props.weatherCondition.map((res, index) => {
            let id = index + 1;
            return (
              <CardDeck
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  width: "13rem",
                }}
              >
                <Card
                  key={id}
                  className="weatherCard"
                  // style={{marginTop: 20, marginBottom: 20, width: "10rem"}}
                >
                  <Card.Body>
                    <Card.Text> Date: {res.date} </Card.Text>
                    <Card.Text> Temp: {res.temp} </Card.Text>
                    <Card.Text> Humidity: {res.humidity} </Card.Text>
                    <Card.Text> Wind: {res.wind} </Card.Text>
                    <Card.Text> Condition: {res.weather} </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            );
          })}
        </section>
      ) : (
        <span> </span>
      )}
    </div>
  );
}

export default WeatherData;
