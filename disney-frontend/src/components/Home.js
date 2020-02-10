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
            <h2 className="subtitle has-text-white disney">Welcome to Disney Villains, a carefuly curated site where you can read all about some of Disney's more infamous bad guys! Read up on where their stories first began. 
              <strong className="has-text-white">Register with us, and you get to share your thoughts and add to our Villains list! </strong>
              <a href="/villains">  Dare to read..</a>
            </h2>
          </div>
        </section>
      </body>
    </section>
    
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title light">One</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
        <div className="tile is-child box">
          <p className="title light">Two</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title light">Three</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </div>

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
    <footer className="footer">
      <div className="content has-text-centered">
        <p> Created for personal purposes, no affiliation to Disney. Made with a real curisoty for MERN by <a href="https://soniacweb.github.io/soniachoudhury.github.io/">Sonia Choudhury</a>.
 

        </p>
      </div>
    </footer>   
  </div>
)

export default Home