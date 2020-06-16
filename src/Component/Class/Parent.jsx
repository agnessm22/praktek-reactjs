import React, { Component } from 'react'
import Child1 from './Child1'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock:15
        }
    }

    render() {
        return (
            <Child1 stock={this.state.stock}/>
        )
    }
}

export default Parent