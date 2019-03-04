import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Nikita", age: 28 },
      { name: "Olesya", age: 27 },
      { name: "Vitya", age: 27 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Olesya", age: 27 },
        { name: "Vitya", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hello React!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Laletik')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'NICK')}
        >
          My hobbies: Knitting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
