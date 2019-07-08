import React, {useEffect} from "react";

const cockpit = props => {
  useEffect(() => {
    console.log('UseEffect [Cockpit.js]');
    const timer = setTimeout(() => {
      //alert('Save to Server!');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('Cockpit.js cleanup work in UseEffect');
    }
  }, []);

  useEffect(() => {
    console.log('2nd UseEffect [Cockpit.js]');
    return () => {
      console.log('Cockpit.js cleanup work in 2nd UseEffect');
    }
  })

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
