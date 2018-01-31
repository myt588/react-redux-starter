import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    if (!event.target.id) return
    this.setState({ [event.target.id]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginWithPassword(this.state.email, this.state.password)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Name: {this.props.userName}</p>
        <p>id: {this.props.userId}</p>
        <p>email: {this.state.email}</p>
        <p>password: {this.state.password}</p>
        <div>
          <label htmlFor='email'>Email address</label>
          <input type='email' id='email' placeholder='Enter email' onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Password' onChange={this.onChange} />
        </div>
        <button type='submit' onClick={this.onClick}>Submit</button>
      </form>
    )
  }
}

export default Login
