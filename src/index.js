import React from "react";
import ReactDOM from "react-dom";

const Recipe = ({name}) => (
    <li>{name}</li>
);

const recipes = ["Waffel", "Omellete", "use an array"];

const Recipes = ({recipes}) => (
    <ul>
        {
            recipes.map(recipe => <Recipe name={recipe}
                                          key={recipe} />
            )
        }
    </ul>
);

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