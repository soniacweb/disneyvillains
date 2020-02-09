import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }
  }

  handleChange(e) {
   
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
  
    axios.post('/api/register', this.state.data)

      .then(() => this.props.history.push('/login'))

      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return <section className="section-form hero is-fullheight">
      <div className="container">
        <div className="title">Register</div>
        {/* Form to complete registration */}
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          {/* We use bulma field, label and control classes for nice forms */}
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
            {/* Show errors if we recieve them from the API. The API is going
            to return an errors object with all the errors as key-value pairs,
            that we can just use to grab the right message for the right field */}
            {this.state.errors.email && <emall className="help is-danger">
              {this.state.errors.email}
            </emall>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Username
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="username"
                className="input"
              />
            </div>
            {this.state.errors.username && <small className="help is-danger">
              {this.state.errors.username}
            </small>}
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
            {this.state.errors.password && <small className="help is-danger">
              {this.state.errors.password}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Confirm password
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="passwordConfirmation"
                className="input"
              />
            </div>
            {this.state.errors.passwordConfirmation && <small className="help is-danger">
              {this.state.errors.passwordConfirmation}
            </small>}
          </div>
          <button className="button is-black">
            Complete registration
          </button>
        </form>
      </div>
    </section>
  }
}

export default Register