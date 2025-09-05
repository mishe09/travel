function Header() {
  return (
    <>
    <div className="first-conatiner">
      <nav>
        <div className="travel-logo">
          <img src="/logo.png" className="logo"></img>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
            <i className="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <a href="/packages">Upcoming Packages</a>
          </li>
        </ul>

        <button className="nav-btn">Get in Touch</button>
      </nav>

      <div className="body-container">
        <div>
          <img src="/wavy.png" className="wavy"></img>
          <h1 className="h1-hero">
            No matter where <br /> you're going to, we'll <br /> take you there
          </h1>
        </div>

        <div className="travel-info">
          <p>Where to?</p>
          <p>
            Travel type <i className="fa-solid fa-chevron-down"></i>
          </p>
          <p>
            Duration <i className="fa-solid fa-chevron-down"></i>
          </p>
          <button className="sec-btn">Submit</button>
        </div>
        <img src="/Clients.png" className="clients" />
        </div>
    </div><div className="logoFlex">
        <img src="/logo-1.png" className="logo-size" />
        <img src="/logo-2.png" className="logo-size" />
        <img src="/logo-5.png" className="logo-size" />
        <img src="/logo-2.png" className="logo-size" />
        <img src="/logo-1.png" className="logo-size" />
    </div>

    <div className="category">
      <div className="Heading">
        <p className="heading-p">CATEGORY</p>
      <h1 className="heading-h1">We Offer Best Services</h1>
      </div>

      <div className="cards">
        <div className="card-wrapper">
          <div className="card-1">
          <div className="img-div">
            <img src="/Rectangle 157.png" className="card-decor"></img>
           <img src="/tour-guide 1.png" className="card-img"></img>
          </div>
          <div className="p-div">
            <h3>Guided Tours</h3>
          <p>sunt qui repellat saepe<br/>qou velit aperiam id <br/> aliquam placeat</p>
          </div>
        </div>
        <img src="/hoover-rec.png" className="card-hoover-1"></img>
        </div>

        <div className="card-wrapper">
        <div className="card-2">
          <div className="img-div">
            <img src="/Rectangle 157.png" className="card-decor-2"></img>
           <img src="/travelling 1.png" className="card-img"></img>
          </div>
          <div className="p-div">
            <h3>Best Flights Options</h3>
          <p>sunt qui repellat saepe<br/>qou velit aperiam id <br/> aliquam placeat</p>
          </div>
        </div>
         <img src="/hoover-rec.png" className="card-hoover-1"></img>
        </div>

        <div className="card-wrapper">
        <div className="card-3">
          <div className="img-div">
            <img src="/hands 1.png" className="card-img"></img>
            <img src="/Rectangle 157.png" className="card-decor-3"></img>
          </div>
          <h3>Religious Tours</h3>
          <p>sunt qui repellat saepe<br/>qou velit aperiam id <br/> aliquam placeat</p>
        </div>
         <img src="/hoover-rec.png" className="card-hoover-1"></img>
        </div>

        <div className="card-wrapper">
        <div className="card-4">
           <div className="img-div">
            <img src="/medical-team 1.png" className="card-img"></img>
            <img src="/Rectangle 157.png" className="card-decor-3"></img>
          </div>
          <h3>Medical Insurance</h3>
          <p>sunt qui repellat saepe<br/>qou velit aperiam id <br/> aliquam placeat</p>
        </div>
         <img src="/hoover-rec.png" className="card-hoover-1"></img>
        </div>

      </div>
    </div>

    <div className="honeymoon-div">
      <img src="/honeymoon.png" className="honeymoon-img"></img>
      <div className="honeymoon-p">
      <p className="heading-p">HONEYMOON SPECIALS</p>
      <h1 className="heading-h1">Our Romatic Tropical <br/> Destinations</h1>
      <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis <br /> praesentium a laudantium internos. Non quis eius quo eligendi corrupti <br />  et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum <br /> aut optio quibusdam!</p>
      <button className="honey-btn">View package</button>
    </div>  
      </div>


      <div className="resort-div">
        
        <div className="resort-div-1">
              <p className="heading-p">FAST & EASY</p>
              <h1 className="heading-h1">Get Your Favourite <br/> Restort Bookings</h1>

               <div className="destination-div-2">
                  <img src="/resort 1-img.png"></img>
                  
                  <div className="destination-p">
                  <h3>Choose Destination</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                     adipiscing elit. Urna, tortor tempus. </p>
                  </div>
              </div>


         <div className="destination-div-2">
                  <img src="/resort 1-img.png"></img>
               <div className="destination-p">
                  <h3>Choose Destination</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                     adipiscing elit. Urna, tortor tempus. </p>
               </div>
          </div>

          <div className="destination-div-2"> 
                    <img src="/resort 1-img.png"></img>
                    <div className="destination-p">
                        <h3>Choose Destination</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/>
                           adipiscing elit. Urna, tortor tempus. </p>
                    </div>
          </div>
          </div>
        </div>

        <img src="/plane.png" className="plane-img"></img>
     
    </>
  );
}

export default Header;
