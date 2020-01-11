import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleUsername= (e) => {
   
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })

  }
  handlePassword = (e) => {
    
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  handleDefault = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form  onSubmit= {this.handleDefault}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange = {this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value= {this.state.password} onChange = {this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
