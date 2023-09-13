import React, {Component, useState } from "react";


class VanR extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
      }
    
      setshow=()=> {
            console.log("hhahah");
            this.setState({
               show: true
            });
          }
    
      render() {
        return (
          <div id="main">
            <button id="click" onClick={this.setshow}>
              Show Para
            </button>
            {this.state.show &&  <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
             
            }
            {/* Do not remove this main div!! */}
          </div>
        );
      }
  }
export default VanR;