import React, { Component } from 'react'

export default class Landing extends Component {

  // For the state we have:
  /* 
    1. When a property of the state changes, then the component re-renders
    2. All the properties from the state are constant to the current even after the component re-renders
    3. After changin a property from state, it will keep the value through all the re-renders.
  */
  state = {
    userName: "John",
    email: "john@mail.com"
  }

  // For any other property
  /* 
    1. If we change the property the component will NOT re-render
  */
  notState = {
    userName2: "Carlo"
  }

  onClickButton = () => {
    this.setState({
      userName: "Robin"
    })
  }

  onClickButton2 = () => {
    console.log("This is before changing",this.notState.userName2);
    this.notState.userName2 = "Martin";
    console.log("This is after changing",this.notState.userName2);
  }

  render() {
    return (
      <div>
        <h1>Landing</h1>
        {this.state.userName}
        <br/>
        {this.notState.userName2}
        <br/>
        <button onClick={this.onClickButton} >Click me to change the state</button>
        <br/>
        <button onClick={this.onClickButton2} >Click me to change the noState</button>
      </div>
    )
  }
}

