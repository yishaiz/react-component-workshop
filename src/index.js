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
                    recipes.map((recipe) => <Recipe name={recipe} />
                    )
                }

                {/*
                <Recipe name="Waffle"/>
                <Recipe name="Omelette"/>
                <Recipe name="Bread"/>
                */}
            </ul>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);