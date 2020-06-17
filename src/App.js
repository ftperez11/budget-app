
import React from "react";

import UserForm from './components/UserForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }


  render() {
    return (
      <div className='main'>
        <UserForm />
      </div>
    )
  }
}

export default App;
