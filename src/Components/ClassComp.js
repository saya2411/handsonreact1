import { Component } from "react";
import './Class.css'

class ClassComp extends Component{
    render(){
        return(
            <div className="classdiv">
                <h1 style={{wordSpacing:'6px'}}>This is using Class Component</h1>
                <p>This is done using external CSS</p>
                <p style={{color:'blue'}}>This is done using inline CSS</p>
          </div>
        )
    }
}

export default ClassComp;