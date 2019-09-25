import React, { Component } from "react";


class DogList extends Component {
  render(){
    return (
      <div>
        {this.props.dogData.map(dog => {
          return (
            // add key
            <div key={dog.name}>
              <img src={dog.src} alt="cute dog"/>
              <h1>{dog.name}</h1>
              <p>Age: {dog.age}</p>
              <h2>Doggie Facts:</h2>
              <ul>
                {dog.facts.map((item, idx) => {
                  // add key
                  return <li>{item}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DogList;