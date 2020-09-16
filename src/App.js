import React from "react";
import "./assets/Header.css";
import "./assets/Body.css";
import Card from "./assets/Card";
import "./assets/Card.css";

//Flexbox //Semantic-ui-react //useState //Material-UI

function App() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://censys.io/api/v1/view/websites/facebook.com",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Username: "a0ea8deb-d536-4b02-82e5-61b5621d1284",
      Password: "R9rS2mbKCHqJP5FbyoToz2vyY1oaYPW9",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="app">
      <div className="header">
        <div className="header_icon">
          <img
            className="header_img"
            src="https://censys.io/static/img/censys.png"
            alt=""
          />
        </div>
      </div>
      <div className="card">
        <Card />
      </div>
    </div>
  );
}

export default App;
