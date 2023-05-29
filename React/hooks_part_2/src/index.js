import React, { Component, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <>
        <button
          onClick={() => {
            setValue((v) => v + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          Hide
        </button>
        <PlanetInfo id={value} />
      </>
    );
  } else {
    return (
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Show
      </button>
    );
  }
};

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then((res) => res.json())
    .then((data) => data);
};

const useRequest = (request) => {
  const [dataState, setDataState] = useState(null);
  useEffect(() => {
    let cancelled = false;
    request.then((data) => !cancelled && setDataState(data));
    return () => (cancelled = true);
  }, [request]);
  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const data = usePlanetInfo(id);

  return (
    <div>
      {id} - {data && data.name}
    </div>
  );
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class mount");
  }

  componentDidUpdate() {
    console.log("class update");
  }

  componentWillUnmount() {
    console.log("class unmount");
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
