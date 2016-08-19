import React from "react";
import ReactDOM from "react-dom";

const Recipe = (props) => (
    <li>{props.name}</li>
);

const App = () =>
    (
        <div>
            <ul>
                <Recipe name="Waffle"/>
                <Recipe name="Omelette"/>
                <Recipe name="Bread"/>
            </ul>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);