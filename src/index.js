import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement('div', null,
      React.createElement    ('h1',null ,'I am a title'),
      React.createElement    ('h2',null ,'I am a sub title')
  );
}

function App1() {
  return React.createElement('div', null, 'I am a component' );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);