import React from "react";
import ReactDOM from "react-dom";
import Recipes from './recipes';

const recipes = ["Waffel", "Omellete", "use state"];

class App extends React.Component {
    constructor() {
        super();

        this.state = {recipes};

        /*
         this.state = {
         recipes : recipes
         };
         */

        setTimeout(
            ()=> {
                // recipes.push("Shakshuka")
                this.setState ({
                    recipes: this.state.recipes.concat("Shakshuka")
                })
            }, 1500
        );


    }

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);