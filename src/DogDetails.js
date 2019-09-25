import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DogDetails extends Component {

  render(){
    let findDog = this.props.dogData.filter(dog => {
      return dog.name.toLowerCase() === this.props.match.params.name;
    })

    return (
      findDog[0] ?
      <div>
        <img src={findDog[0].src} alt="cute dog"/>
        <h1>{findDog[0].name}</h1>
        <p>Age: {findDog[0].age}</p>
        <h2>Doggie Facts:</h2>
        <ul>
          {findDog[0].facts.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}
        </ul>
      </div> :
      <Redirect to="/dogs" />
    )
  }
}

export default DogDetails;