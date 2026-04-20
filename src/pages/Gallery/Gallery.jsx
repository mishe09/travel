import "./Gallery.css";
import { Link } from "react-router-dom";

export default function Gallery() {
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
                  <Link to="/Tourplan" className="nav-link">
                    <i className="fa-regular fa-calendar"></i> Tour Plan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Location" className="nav-link">
                    <i className="fa-solid fa-location-dot"></i> Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Gallery" className="nav-link gallery-link">
                    <i className="fa-solid fa-inbox gallery-icon"></i> Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="up-body-container">
          <div className="grid-container">
            {/* Left side: cards */}
            <div className="header-main">

              <div className="bento-grid">
                <div className="imagee-1"></div>

                <div className="imagee-2"></div>

                <div className="imagee-3"></div>

                <div className="imagee-4"></div>

                <div className="imagee-5"></div>

                <div className="imagee-6"></div>

                <div className="imagee-7"></div>
              </div>

              <img
                src="/location-assets/palm.png"
                alt="palm"
                className="img-fluid palm"
              />
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

