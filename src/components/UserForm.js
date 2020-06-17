import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      zip: 0,
      income: 0,
      annualSpending: 0,
      familySize: 0,
    };
  }

  render() {
    return (
      <div className="form-fields">
        <form>
          <input id="name" placeholder="Enter your name..." />
        </form>
        <submit
          className='submit-user'
          onClick={() => {
            console.log(
              "1) store data on APP state 2) render the next form 3) check valid submissions"
            );
          }}
        >
          NEXT
        </submit>
      </div>
    );
  }
}

//TODO: Create rest of fields, build change state function, submit handler -> goes to next form

export default UserForm;
