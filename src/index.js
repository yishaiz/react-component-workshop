import React from "react";
import ReactDOM from "react-dom";
import Recipes from './recipes';

const recipes = ["Waffel", "Omellete", "use import from other file (2)"];

const App = () =>
    (
        <div>
            <Recipes recipes={recipes}/>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);