import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  /* static getDrivedStateFromProps(props, state) {
    console.log("PersonS.js getDrivedStateFromProps");
    return state;
  } */

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log("PersonS.js shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
      return true;
    } else {
      return false;
    }
  } */

  /* getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("PersonS.js getSnapshotBeforeUpdate");
  } */

  componentDidUpdate() {
    console.log("PersonS.js componentDidUpdate");
  }

  componentWillUnmount() {
    console.log('PersonS.js componentWillUnmount');
  }

  render() {
    console.log("PersonS.js rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;