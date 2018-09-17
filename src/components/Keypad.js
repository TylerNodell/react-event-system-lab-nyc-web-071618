// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  enteringPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enteringPassword}/>
      </div>
    );
  }
}

export default Keypad;
