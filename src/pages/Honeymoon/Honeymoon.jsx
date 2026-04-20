import "./Honeymoon.css";
import { NavLink } from "react-router-dom";

export default function Honeymoon() {
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
                  <NavLink to="/honeymoon" className="nav-link info-link">
                    <i className="fa-solid fa-circle-info info-icon"></i> Information
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/tourplan" className="nav-link">
                    <i className="fa-regular fa-calendar"></i> Tour Plan
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/location" className="nav-link">
                    <i className="fa-solid fa-location-dot"></i> Location
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gallery"  className="nav-link">
                    <i className="fa-solid fa-inbox"></i> Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="up-body-container">
          <div className="grid-container">
            {/* Left side: cards */}
            <div className="header-main">
              <div className="header-flex">
                <h2>Switzerland</h2>
                <h5 className="hfive">
                  1,000 $ / <span className="span-hfive">per couple</span>
                </h5>
              </div>
              <p>⭐⭐⭐⭐⭐ (2.3k reviews)</p>

              <p className="intro-p">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
                aut provident aliquam. Aut aspernatur consequuntur eum quaerat
                distinctio ut inventore aliquid et quasi alias ut rerum suscipit
                et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
                labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste
                expedita est dolor similique ut quasi maxime ut deserunt autem
                At praesentium voluptatem aut libero nisi. Et eligendi sint ab
                cumque veritatis aut provident aliquam. Aut aspernatur
                consequuntur eum quaerat distinctio ut inventore aliquid et
                quasi alias ut rerum suscipit et nihil deleniti.
              </p>

              <br />

              <div className="info-div">
                <div className="flex-div-1">
                  <h6>Destination</h6>
                  <p>: Zurich, Switzerland</p>
                </div>

                <div className="flex-div-2">
                  <h6>Depature</h6>
                  <p>: Main sqaure, New York</p>
                </div>

                <div className="flex-div-3">
                  <h6>Depature Time</h6>
                  <p>: Approximately 08 : 10 AM</p>
                </div>

                <div className="flex-div-4">
                  <h6>Reurn Time</h6>
                  <p>: Approximately 07 : 20 AM</p>
                </div>

                <div className="flex-div-5">
                  <h6>Dress Code</h6>
                  <p>: Casual, Comfortable and light</p>
                </div>

                <div className="flex-div-6">
                  <h6>Not Included</h6>
                  <div className="flex2a-div">
                    <p>
                      <i class="fa-regular fa-circle-xmark"></i> Gallery Ticket
                    </p>
                    <p>
                      <i class="fa-regular fa-circle-xmark"></i> Lunch
                    </p>
                  </div>
                </div>

                <div className="flex-div-7">
                  <h6>Included</h6>
                  <div className="flex2-div">
                    <p>
                      <i class="fa-regular fa-circle-check"></i> 5 Star
                      Accomodation
                    </p>
                    <p>
                      <i class="fa-regular fa-circle-check"></i> Airport
                      Transfer
                    </p>
                  </div>
                </div>

                <div className="flex-div-8">
                  <h6></h6>
                  <div className="flex2b-div">
                    <p>
                      <i class="fa-regular fa-circle-check"></i> Breakfast
                    </p>
                    <p>
                      <i class="fa-regular fa-circle-check"></i> Personal Guide
                    </p>
                  </div>
                </div>
              </div>

              <div className="pictures">
                <h2>From our Gallery</h2>

                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolor similique ut quasi maxime ut deserunt autem At
                  praesentium voluptatem aut libero nisi.{" "}
                </p>
              </div>

              <div className="honeymoon-bento-grid">
                <div className="image-1"></div>

                <div className="image-2"></div>

                <div className="image-3"></div>

                <div className="image-4"></div>

                <div className="image-5"></div>

                <div className="image-6"></div>
              </div>
            </div>

            {/* Right side: form */}
            <div className="right-side-section">
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
