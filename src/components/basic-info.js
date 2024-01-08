import React, { Component } from "react";

class BasicInfo extends Component {
  render() {
    return (
      <div class="grid__item">
        <h1>Basic Information</h1>
        <p>First Name: {this.props.person.firstName}</p>
        <p>Last Name: {this.props.person.lastName}</p>
        <p>City: {this.props.person.city}</p>
        <p>State: {this.props.person.state}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          firstName: "Reggie",
          lastName: "Cheston",
          city: "Charlotte",
          state: "NC",
        },
        {
          firstName: "John",
          lastName: "Doe",
          city: "Greensboro",
          state: "NC",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          city: "Raleigh",
          state: "NC",
        },
        {
          firstName: "James",
          lastName: "Newton",
          city: "Winston-Salem",
          state: "NC",
        },
        {
          firstName: "Reggie",
          lastName: "Cheston",
          city: "Charlotte",
          state: "NC",
        },
        {
          firstName: "John",
          lastName: "Doe",
          city: "Greensboro",
          state: "NC",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          city: "Raleigh",
          state: "NC",
        },
        {
          firstName: "James",
          lastName: "Newton",
          city: "Winston-Salem",
          state: "NC",
        },
        {
          firstName: "Reggie",
          lastName: "Cheston",
          city: "Charlotte",
          state: "NC",
        },
        {
          firstName: "John",
          lastName: "Doe",
          city: "Greensboro",
          state: "NC",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          city: "Raleigh",
          state: "NC",
        },
        {
          firstName: "James",
          lastName: "Newton",
          city: "Winston-Salem",
          state: "NC",
        },
      ],
    };
  }

  render() {
    return (
      <div class="grid__items">
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
