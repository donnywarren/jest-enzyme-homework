import React, { Component } from 'react';


class PasswordValidator extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      passwordConfirm: "",
      valid: true
    };
  }
  handleUserChange = (event) => {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    })
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handlePasswordConfirm = (event) => {
    this.setState({
      passwordConfirm: event.target.value
    })
  }
  validSubmit = () => {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({
        valid: true
      })
      console.log(true)

    }
    else {
      this.setState({
        valid: false
      })
      console.log(false)
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input className="user-name" onChange={this.handleUserChange} type="text" placeholder="username" />
        <input className="password" onChange={this.handlePasswordChange} type="password" placeholder="password" />
        <input className="confirm-password" onChange={this.handlePasswordConfirm} type="password" placeholder="confirm password" />
        <button onClick={this.validSubmit}>Submit</button>
        <p>Your passwords are: {this.state.valid}</p>
      </div>
    );
  }
}
export default PasswordValidator;