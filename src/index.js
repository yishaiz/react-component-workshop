import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement('div', null, 'I am a component' );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);