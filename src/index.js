import React from "react";
import ReactDOM from "react-dom";

const Recipe = () => (
    <h3>A Recipe</h3>
);

const App = () =>
    (
        <div>
            <Recipe/>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);