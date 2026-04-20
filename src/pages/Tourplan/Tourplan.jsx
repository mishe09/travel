import "./Tourplan.css";
import { Link } from "react-router-dom";

export default function Tourplan() {
  return (
    <>
      <div className="honeymoon-first-container">
        <div className="honeymoon-hero-p">
          <p>EXPLORE</p>
          <h1>Landscapes</h1>
        </div>
      </div>

      <div className="main-container">
        <div className="sort-navbar navbar navbar-expand-lg navbar-light bg-light mb-4 rounded-0">
          <div className="w-100">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sortNav"
              aria-controls="sortNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="sortNav">
              <ul className="navbar-nav w-100 justify-content-evenly">
                <li className="nav-item">
                  <Link to="/honeymoon" className="nav-link">
                    <i className="fa-solid fa-circle-info"></i> Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Tourplan" className="nav-link tourplan-link">
                    <i className="fa-regular fa-calendar tourplan-icon"></i> Tour Plan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Location" className="nav-link">
                    <i className="fa-solid fa-location-dot"></i> Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Gallery" className="nav-link">
                    <i className="fa-solid fa-inbox"></i> Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="up-body-container">
          <div className="grid-container">
            {/* Left side: cards */}

            <div className="tour-header-main">
              <h2 className=" mt-4 mb-4">Tour Plan</h2>
              <div className="tourplan-div-2">
                <img src="/tourplan-assets/one.png" alt="one" />

                <div className="destination-p">
                  <h5>Day 1: Departure</h5>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem.{" "}
                  </p>
                  <ul>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                  </ul>
                </div>
              </div>

               <div className="tourplan-div-2">
                <img src="/tourplan-assets/two.png" alt="one" />

                <div className="destination-p">
                  <h5>Day 1: Departure</h5>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem.{" "}
                  </p>
                  <ul>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                  </ul>
                </div>
              </div>

               <div className="tourplan-div-2">
                <img src="/tourplan-assets/three.png" alt="one" />

                <div className="destination-p">
                  <h5>Day 1: Departure</h5>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem.{" "}
                  </p>
                  <ul>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                  </ul>
                </div>
              </div>

               <div className="tourplan-div-2">
                <img src="/tourplan-assets/four.png" alt="one" />

                <div className="destination-p">
                  <h5>Day 1: Departure</h5>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem.{" "}
                  </p>
                  <ul>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                  </ul>
                </div>
              </div>

               <div className="tourplan-div-2">
                <img src="/tourplan-assets/five.png" alt="one" />

                <div className="destination-p">
                  <h5>Day 1: Departure</h5>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem.{" "}
                  </p>
                  <ul>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side: form */}
            
            <div className="right-side-section mt-4">
              <div className="sidebar p-4 bg-light shadow-sm rounded side">
                <h4 className="fw-bold text-center">Plan Your Trip</h4>
                <p className="text-muted small text-center">
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>

                <form>
                  <div className="mb-3 input-icon">
                    <i class="fa-regular fa-user"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-regular fa-envelope"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-regular fa-envelope"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Comfirm Email"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-solid fa-phone"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-solid fa-calendar-days"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="dd-mm-yy"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-solid fa-tags"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number of ticket"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-solid fa-comment"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="message"
                    />
                  </div>

                  <div className="btn-flex">
                    <button type="submit" className="btn btn-color text-center">
                      Check Avaliability
                    </button>
                    <button type="submit" className="btn btn-color">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
              <div className="image">
                <img
                  src="/UpcomingPackages-asset/iphone.png"
                  alt="Travel Box"
                  className="img-fluid image-style"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
