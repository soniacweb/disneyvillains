import React from 'react'
import { Link } from 'react-router-dom'

const VillainCard = ({ villain }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image villain-images image is-3by4">
        <Link to={`/villains/${villain._id}`}> <img src={villain.image} alt="Placeholder image" /> </Link>
        {/* <figure className="villain-images image"> */}
        {/* <Link to={`/villains/${villain._id}`}> <img src={villain.image} alt="Placeholder image" /> </Link> */}
        {/* </figure> */}
      </div>
      {/* <div className="card-content"> */}
      {/* <Link className="subtitle" to={`/villains/${villain._id}`}>{villain.name}</Link> */}
      {/* <p className="has-text-grey-darker">{villain.year}</p>
        <p className="has-text-grey-darker">{villain.movie}</p> */}
    </div>
  </div>
  // </div>
)

export default VillainCard

