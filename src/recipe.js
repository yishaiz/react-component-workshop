/*
 import React from "react";

 const Recipe = ({name}) => (
 <li>{name}</li>
 );

 export default Recipe;
 */


import React from "react";

class Recipe extends React.Component {

    constructor(props) {
        super();

        console.log('constructor', props);
    }

    render() {
        console.log('render', this.props);

        return (
            <li>{this.props.name}</li>
        )
    }

    componentWillMount() {
        console.log('I will mount - Recipe')
    }

    componentDidMount() {
        console.log('I am mounted ! - Recipe')
    }

    componentWillUnmount() {
        console.log('I am unmounted !')
    }


    shouldComponentUpdate(newProps, newState) {
        // return false;
        console.log('should component update',this.props == newProps);

        return this.props == newProps;
    }

}

export default Recipe;