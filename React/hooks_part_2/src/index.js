import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        {/*<HooksCounter value={value} />*/}
        {/*<ClassCounter value={value} />*/}
        <Notification />
      </div>
    );
  }
  return <button onClick={() => setVisible(true)}>Show</button>;
};

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return <div>{visible && <p>hello </p>}</div>;
};

const HooksCounter = ({ value }) => {
  useEffect(() => {
    console.log("Using Effect");
  });

  return <p>{value}</p>;
};

export class ClassCounter extends Component {
  componentDidMount() {
    console.log("class mounted");
  }

  componentWillUnmount() {
    console.log("class unmounted");
  }

  componentDidUpdated() {
    console.log("class updated");
  }

  render() {
    return <p>{this.props.value} </p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
