import React from "react";


class ClassElement extends React.Component{
    constructor(){
        super()
        this.PasteJoke = this.PasteJoke.bind(this);
        this.state ={
            output: null
        }
    }

    nr =1;
    getData;

    async PasteJoke(){
        this.getData = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.nr}`);
        this.output = await this.getData.json();
        this.output = this.output.title;
        this.setState({output:this.output.title})
        this.nr = this.nr +1
    }
    render(){
        return(
            <>
                <h2>Elements</h2>
                <div>
                    <button onClick={this.PasteJoke}>Show Output</button>
                    <p>{this.output}</p>
                </div>
            </>
        )
    }
}
export default ClassElement;
