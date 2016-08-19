import React from "react";
import ReactDOM from "react-dom";
import Recipes from './recipes';

const recipes = ["Waffel", "Omellete", "use render (class)"];


class App extends React.Component{
    render(){
        return(
            <div>
                <Recipes recipes={recipes}/>
            </div>
        )
    }
}

const App1 = () =>
    (
        <div>
            <Recipes recipes={recipes}/>
        </div>
    );

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);