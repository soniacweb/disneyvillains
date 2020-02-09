import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Auth from './lib/auth'

import 'bulma'
import './styles/style.scss'
// import styled from 'styled-components'

import Home from './components/Home'
import Villains from './components/Villains'
import Navbar from './components/Navbar'
import SingleVillain from './components/SingleVillain'
import Register from './components/Register'
import Login from './components/Login'
import NewVillains from './components/NewVillains'
import VillainForm from './components/VillainForm'

// function useFetch(url, initialState = []) {
//   const [data, setData] = useState(initialState)

//   useEffect(() => {
//     fetch(url)
//       .then(resp => resp.json())
//       .then(resp => setData(resp))
//     return () => console.log('Route changed')
//   }, [])
//   return data
// }  


// const VillainsApp = (props) => {
//   const data = useFetch(`/api/villains/${props.match.params.id}`, {})
//   return <div>{data.name}</div>
// }
 
const App = () => {
  return <BrowserRouter>
    <Navbar />

    <Switch>
   
      <Route path="/villains/new" component={NewVillains} />
      {/* <Route path="/vilains/new" component={VillainForm} /> */}
      <Route path="/villains/edit/:id" component={EditVillain} />
      <Route  path="/villains/:id" component={SingleVillain} />
      <Route exact path="/villains" component={Villains} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
     
    </Switch>
  </BrowserRouter>
}

class EditVillain extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: '',
        movie: '',
        year: '',
        image: '',
        summary: ''
      },
      errors: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/villains/${id}`)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
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
    const id = this.props.match.params.id
    axios.put(`api/villains/${id}`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => this.props.history.push(`/villains/${resp.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return <section className="section">
      <div className="container">
        <VillainForm
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={e => this.handleChange(e)}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    </section>
  }
}

ReactDOM.render(
  <App />,

  document.getElementById('root')
)
