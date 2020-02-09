import React from 'react'


const VillainForm = ({ data, handleSubmit, handleChange, errors }) => (
  
  <form action="" className="section-form hero is-fullheight" onSubmit={handleSubmit}>
    {/* We use bulma field, label and control classes for nice forms */}
    <div className="container"> 
      <div className="field">
        <div className="title">Submit Your Villain</div>
        <label htmlFor="" className="label">
        Name
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="input"
            value={data.name}
          />
        </div>
        {errors.name && <small className="help is-danger">
          {errors.name}
        </small>}
      </div>
   
      <div className="villainform field">
        <label htmlFor="" className="label">
        Image
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="image"
            className="input"
            value={data.image}
          />
        </div>
        {errors.image && <small className="help is-danger">
          {errors.image}
        </small>}
      </div>

      <div className="field">
        <label htmlFor="" className="label">
        Movie
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="movie"
            className="input"
            value={data.movie}
          />
        </div>
        {errors.movie && <small className="help is-danger">
          {errors.movie}
        </small>}
      </div>

      <div className="field">
        <label htmlFor="" className="label">
        Who are they? 
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="summary"
            className="input"
            value={data.summary}
          />
        </div>
        {errors.summary && <small className="help is-danger">
          {errors.summary}
        </small>}
      </div>


      <button className="button is-black">
      Create Villain
      </button>
    </div>
  </form>
)

export default VillainForm