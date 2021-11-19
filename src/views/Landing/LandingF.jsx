import React, {useState} from 'react'

export default function LandingF() {

  const [state,setState] = useState({
    userName: "John",
    email: "john@mail.com"
  })

  let notState = {
    userName2: "Carlo"
  }

  const onClickButton = () => {
    setState({
      ...state,
      userName: "Robin"
    })
  }

  const onClickButton2 = () => {
    console.log("This is before changing",notState.userName2);
    notState.userName2 = "Martin";
    console.log("This is after changing",notState.userName2);
  }


  return (
    <div>
      <h1>Landing of functional component</h1>
      {state.userName}
      <br />
      {notState.userName2}
      <br />
      <button onClick={onClickButton} >Click me to change the state</button>
      <br />
      <button onClick={onClickButton2} >Click me to change the notState</button>
    </div>
  )
}
