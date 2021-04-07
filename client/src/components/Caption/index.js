import React, {Component} from 'react';
import "./style.css";

class getDogName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          caption: ''
        };
      
      }
    
      render() {
        return (
          <div className="caption">
             
            <h1>{this.state.caption} </h1>
            <input type="text" onChange={(event) => this.setState({ caption: event.target.value })}></input>
           
             
           
          </div>
        );
      }
    }
    export default getDogName;