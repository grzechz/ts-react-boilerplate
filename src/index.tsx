import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "components/App/App";

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

if (module.hot) {
  module.hot.accept("components/App/App", () => {
    render();
  });
}
