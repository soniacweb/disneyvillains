import React from 'react'
import axios from 'axios'

import VillainCard from './VillainCard'

class Villains extends React.Component {

  constructor() {
    super()
    this.state = {
      villains: []
    }
  }

  componentDidMount() {
    axios.get('/api/villains')
      .then(res => this.setState({ villains: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.villains)
    return ( <div className="section"> 
      <h1 className="titleOne">Disney's Villains..</h1>
      <div className="parent">
        <div className="VillainsYo"> 
          <div className="section">
            <div className="container">
              <div className="columns is-mobile is-multiline">
                {this.state.villains.map((villain, i) => {
                  return <VillainCard key={i} villain={villain}/>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Villains
