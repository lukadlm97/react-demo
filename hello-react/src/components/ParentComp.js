import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:'Luka'
        }
    }
    

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Luka'
            })
        },2000)
    }

    render() {
        console.log('******** Parent Componente Rander ********')
        return (
            <div>
                Parent Component

                <MemoComponent name={this.state.name} />
              {/* 
                <RegComponent name={this.state.name}></RegComponent>
                <PureComp name={this.state.name}></PureComp>
            */}
            </div>   
        )
    }
}

export default ParentComp
