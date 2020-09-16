import React from "react";
import "./assets/Header.css";
import "./assets/Body.css";
import Card from "./assets/Card";
import "./assets/Card.css";

//Flexbox //Semantic-ui-react //useState //Material-UI

function App() {
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
