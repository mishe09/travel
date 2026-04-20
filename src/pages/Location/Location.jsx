import "./Location.css";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <>
      <div className="honeymoon-first-container">
        <div className="honeymoon-hero-p">
          <p>EXPLORE</p>
          <h1>Landscapes</h1>
        </div>
      </div>

      <div className="location-main-container">
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
                  <Link to="/Location" className="nav-link location-link">
                    <i className="fa-solid fa-location-dot location-icon"></i> Location
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
            <div className="header-main">
              <div className="header-flex">
                <h2>Tour Plan</h2>
              </div>

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

              <img
                src="/location-assets/map.png"
                alt="Map"
                className="img-fluid map-style mb-3"
              />

              <p>
                Sit quasi soluta non temporibus voluptas non necessitatibus
                tempore sit deleniti praesentium aut velit nostrum ut itaque
                atque ad expedita veniam. Hic deleniti officiis est sapiente
                explicabo non eaque corporis aut voluptatum iusto At facere enim
                id voluptas reprehenderit. Ut voluptas laudantium et molestias
                voluptatem ex doloremque omnis est ipsum nihil.
              </p>

              <br />

              <p className="location-p">
                Quo facere eveniet 33 sint rerum est internos impedit sed
                dignissimos quia. Et rerum deleniti et voluptates saepe qui
                labore quisquam non accusantium temporibus. Quo velit numquam
                hic excepturi sequi sed dicta doloribus! In quos possimus quo
                quibusdam aliquid est culpa porro sed molestiae libero At
                blanditiis minima a reiciendis fugiat.
              </p>

              <img
                src="/location-assets/palm.png"
                alt="palm"
                className="img-fluid palm"
              />
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
