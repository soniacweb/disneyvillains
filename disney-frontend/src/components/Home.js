import React from 'react'

const Home = () => (
  <div className="parent">
    <section className="gif hero is-medium is-one-quarter-desktop is-one-third-tablet is-half-mobile"><img src='/images/Disney_Villains.gif'/> 
      {/* <div className="hero-body"> */}
      <div className="container">
        <div className="image">
        </div>
      </div>
      {/* </div> */}

      <body>
        <section className="section dark">
          <div className="container">
            <h1 className="title has-text-white">About Us</h1>
            <h2 className="subtitle has-text-white">
        Welcome to Disney Villains, a carefuly curated site where you can read all about some of Disney's more infamous bad guys! Read up on where their stories first began. <strong className="has-text-white">Register with us, and you get to share your thoughts and add to our Villains list! </strong>
            </h2>
          </div>
        </section>
      </body>
    </section>

  

    <section className="image hero is-fullheight is-one-quarter-desktop is-one-third-tablet is-half-mobile"><img src='/images/villians-2.jpg'/> 
      {/* <div className="hero-body"> */}
      <div className="container has-background-black has-text-white has-text-centered is center"> 
        {/* <h1 class="title"> */}
        {/* Fullheight title */}
        {/* </h1>
    <h2 class="subtitle"> */}
        {/* Fullheight subtitle */}
        {/* </h2> */}
    
      </div>
      {/* </div> */}
    </section>      
  </div>
  
)

export default Home