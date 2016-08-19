import React from "react";
import ReactDOM from "react-dom";

const Recipe = ({name}) => (
    <li>{name}</li>
);

const recipes = ["Waffel", "Omellete", "use an array"];

const App = () =>
    (
        <div>
            <ul>
                {
                    recipes.map(recipe => <Recipe name={recipe}
                                                  key={recipe} />

                    )
                }


            </ul>
        </div>
    );

//recipes.map((recipe) => <Recipe name={recipe} />

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);