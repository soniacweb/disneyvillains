import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import Auth from '../lib/auth'

const SingleVillain = (props) => {
  const [data, setData] = useState( { comments: [] })

  useEffect(() => {
    fetch(`/api/villains/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
  },[])

  function handleDelete(e) {
    axios.delete(`/api/villains/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }

  // render() {
  //   console.log(this.state.villain)
  //   // If there's a 404 error, return a 404 page
  //   if (this.state.err === 404) {
  //     return <div className="404">
  //       <h1>404</h1>
  //       <img src={'./images/maleficent.png'} />
  //       <h3>Oops.. the page cannot be found, please try the menu again.</h3>
  //     </div>
  //   }
  return <> 
  <div className="section has-background-black hero is-fullheight">
    {/* <div className="container"> */}
    <div className="columns is-multiline">
      <div className="column is-half-tablet has-text-light">
        <p className="title has-text-light">
          {data.name}
        </p>
        <p className="subtitle has-text-light">
          {data.movie}
        </p>
        <p className="subtitle year has-text-light">
          {data.year}
        </p>
        <p className="summary has-text-light">
          {data.summary}
        </p>
        {/* <button className="button is-normal is-light" id="button">Video</button>
        <div className="modal" id="page-modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div> */}

        <CommentForm 
          url={`/api/villains/${props.match.params.id}/comments`}
          updateData={setData}
          data={data}
        />
        <div className='columns'>
          <div className='column'>
            {data.comments.map((comment) => 
              <div className="is-half" 
                key={comment._id} > 
                <div className="commentmessage">{comment.content}</div>
                <br />
                <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
              </div>
            )} 
            <div className='column'>
            </div>
          </div>
        </div>
      </div> 

      <div className="column is-half-tablet">
        <img src={data.image} />
      </div>
    </div>
  </div>
    
    {/* </div> */}
</>
}  

export default SingleVillain