import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
    // axios.post('/api/login', this.state.data)
      .then(resp => {
        Auth.setToken(resp.data.token)
        Auth.setToken(resp.data.user)
        this.props.history.push('/villains')
      })
     
      .catch(() => this.setState({ error: 'Woops! Incorrect credentials' }))
  }

  render() {
    return <section className="section-form hero is-fullheight">
      <div className="container">
        <div className="title">Login</div>
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="email"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="password"
                className="input"
              />
            </div>
            
            {this.state.error && <small className="help is-danger">
              {this.state.error}
            </small>}
          </div>
          <button className="button is-black">
            Login
          </button>
        </form>
      </div>
    </section>
  }
}

export default Login