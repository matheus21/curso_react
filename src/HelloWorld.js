import React, { Component } from 'react'

import StateInput from './StateInput'

class HelloWorld extends Component {

    constructor(props) {
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Matheus Oliveira',
            txt: ''
        }
    }

    render() {
        const result = 4
        const style = {
            color: '#ff0000',
            fontSize: 50,
            backgroundColor: '#000000'
        }

        return (
            <div className="my-class-from-react">
                {/** This is my first component */}
                <StateInput />
                <h1 style={style}>Hello World from component React.js by School of net</h1>
                <h4>{result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div>}</h4>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWorld