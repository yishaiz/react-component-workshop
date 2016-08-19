import React from "react";
import ReactDOM from "react-dom";



const App = () =>
    (
        <div>
            <h1>I am a title</h1>
            <h2>I am a subtitle</h2>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);