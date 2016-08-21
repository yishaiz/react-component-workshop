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
                this.setState({
                    recipes: this.state.recipes.concat("Shakshuka")
                })
            }, 1500
        );

    }


    addRecipe(event) {

        event.preventDefault();

        const value = this.refs.recipeNameInput.value;

        console.log('new value', value);

        this.setState({
            recipes: this.state.recipes.concat(value)
        });

        this.refs.recipeNameInput.value = '';
    }

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes}/>

                <form onSubmit={this.addRecipe.bind(this)}>
                    <input type="text" ref="recipeNameInput"/>
                    <button>Add Recipe</button>
                </form>

            </div>
        )
    }
}

ReactDOM.render(
    // React.createElement(App),
    <App/>,
    document.getElementById('root')
);