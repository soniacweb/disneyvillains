import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import VillainForm from './VillainForm'

// Very similar to register again. A form with some data that we track
// with state, and then post to the right endpoint at the end.
// This time we navigate to the wine we just created (we get the id)
// back in the response from the API
class NewVillains extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: '',
        movie: '',
        year: '',
        image: '',
        summary: ''
        // dangerRating: ''
      },
      errors: {}
    }
  }



  handleChange(e) {
    // Keep all the previous data, except the field we just modified
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // Keep all the previous errors, but remove the one for the field we just updated
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/villains', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => this.props.history.push(`/villains/${resp.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return <section className="section">
      <div className="container">
        < VillainForm
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={e => this.handleChange(e)}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    </section>
  }
}

export default NewVillains