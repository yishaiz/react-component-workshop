import React from "react";
import ReactDOM from "react-dom";
import Recipes from './recipes';

let recipes = ["Waffel", "Omellete", "use state"];


class App extends React.Component{
    constructor(){
        super();

        this.state = {recipes};

        setTimeout(() => {
            // recipes.push('Shakshuka')
            recipes: this.state.recipes.concat('Shakshuka')
        },1500);

    }

    render(){
        return(
            <div>
                {/*<Recipes recipes={recipes}/>*/}
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}



ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);