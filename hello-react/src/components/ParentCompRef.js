import React, { Component } from 'react'
import ChildCompRef from './ChildCompRef'

export default class ParentCompRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName :'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildCompRef greetHandler={this.greetParent} />
            </div>
        )
    }
}
