//class - store, lifecycle, this
//state - internal data store, update(mutable), set

import React,{Component} from "react";

class Classcom extends Component{
    constructor(props, bags){
        super()
        this.count={
            name:"Naresh",
            grade:"A"
        }

        this.setCount={
            grade:"B"
        }
    }
    render(){
        return(
            <>
            <h1>class component</h1>
            {/* <p>{this.props.data}</p>
            <h2>{this.bags.data1}</h2> */}
            <h1>{this.count.name} {this.setCount.grade}</h1>
            </>
        )
    }
}
export default Classcom