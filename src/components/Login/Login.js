import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <form>
        <div>
          <label for='email'>Email address</label>
          <input type='email' id='email' placeholder='Enter email' />
        </div>
        <div>
          <label for='password'>Password</label>
          <input type='password' id='password' placeholder='Password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default App
