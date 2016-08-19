import React from "react";
import ReactDOM from "react-dom";



let App = () => {
    return(
        <div>
            <h1>I am a title</h1>
            <h2>I am a subtitle</h2>
        </div>
    );
}
/*
function App3() {
    return(
        <div>
            <h1>I am a title</h1>
            <h2>I am a subtitle</h2>
        </div>
    );
}


function App2() {
  return React.createElement('div', null,
      React.createElement    ('h1',null ,'I am a title'),
      React.createElement    ('h2',null ,'I am a sub title')
  );
}

function App1() {
  return React.createElement('div', null, 'I am a component' );
}

*/


ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);