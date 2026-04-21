// MusicPackage.jsx
import React from "react";
import "./Musicpackage.css";

export default function MusicPackage() {
  return (
    <>
      <div className="music-first-container">
        <div className="music-up-hero-p">
          <p>MUSIC EVENTS</p>
          <h1>Party With Us</h1>
        </div>
      </div>

      <div className="music-package">
        <h2 className="title">🎵 Music Package</h2>
        <p className="description">
         Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
         Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
        </p>
        <button className="subscribe-btn">more Information</button>
      </div>

      <div className="trendy-heading">
          <p className="heading-p">TRENDY</p>
          <h1 className="heading-h1">
            Our Trending Tour <br /> Package
          </h1>
        </div>

      <div className="container">
        <div className="music-trend-div">
          <div className="trend-one">
            <div className="trend-img-div">
              <img src="/assets-music/rock.jpg" className="trendy-image"></img>
            </div>

            <div className="div-1">
              <p>
                <i class="fa-regular fa-calendar"></i> 8 days to go{" "}
              </p>
              <p>
                <i class="fa-regular fa-user"></i> Tickets Available: 120
              </p>
            </div>
            <div className="div-2a">
              <h5>Rock Nation Live</h5>
              <img src="/starss.png" className="star"></img>
            </div>
            <div className="location-div">
              <img src="/location.png" className="location-img"></img>
              <p>London</p>
            </div>
            <div className="moni-div">
              <h6 style={{ color: "rgb(255, 120, 71)" }}>1,000 $</h6>
              <h6
                style={{
                  textDecoration: "line-through",
                  color: "rgb(177, 177, 177)",
                }}
              >
                1,200 $
              </h6>
            </div>
            <p>
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </p>
            <button className="home-honey-btn">Book Now</button>
          </div>

          <div className="trend-two">
            <div className="trend-img-div">
              <img src="/assets-music/jazz.jpg" className="trendy-image"></img>
            </div>

            <div className="div-1">
              <p>
                <i class="fa-regular fa-calendar"></i> 12 days to go{" "}
              </p>
              <p>
                <i class="fa-regular fa-user"></i> Tickets Available: 80
              </p>
            </div>
            <div className="div-2b">
              <h5>Jazz Night</h5>
              <img src="/starss.png" className="star"></img>
            </div>
            <div className="location-div">
              <img src="/location.png" className="location-img"></img>
              <p>New Orleans</p>
            </div>
            <div className="moni-div">
              <h6 style={{ color: "rgb(255, 120, 71)" }}>1,223 $</h6>
              <h6
                style={{
                  textDecoration: "line-through",
                  color: "rgb(177, 177, 177)",
                }}
              >
                1,200 $
              </h6>
            </div>
            <p>
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </p>
            <button className="home-honey-btn">Book Now</button>
          </div>

          <div className="trend-three">
            <div className="trend-img-div">
              <img src="/assets-music/edm.jpg" className="trendy-image"></img>
            </div>
            <div className="div-1">
              <p>
                <i class="fa-regular fa-calendar"></i> 4 days to go{" "}
              </p>
              <p>
                <i class="fa-regular fa-user"></i> Tickets Available: 200
              </p>
            </div>
            <div className="div-2c">
              <h5>EDM rave</h5>
              <img src="/starss.png" className="star"></img>
            </div>
            <div className="location-div">
              <img src="/location.png" className="location-img"></img>
              <p>Ibiza</p>
            </div>
            <div className="moni-div">
              <h6 style={{ color: "rgb(255, 120, 71)" }}>1,100 $</h6>
              <h6
                style={{
                  textDecoration: "line-through",
                  color: "rgb(177, 177, 177)",
                }}
              >
                1,200 $
              </h6>
            </div>
            <p>
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </p>
            <button className="home-honey-btn">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
