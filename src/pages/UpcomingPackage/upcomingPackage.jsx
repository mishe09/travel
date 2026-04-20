import "./UpcomingPackage.css";

export default function UpcomingPackage() {
  return (
    <>
      <div className="first-container">
        <div className="up-hero-p">
          <p>SEARCH TOUR</p>
          <h1>Travel With Us</h1>
        </div>
      </div>

       <img
                  src="/UpcomingPackages-asset/up-snail.png"
                  alt="Travel Box"
                  className="img-fluid snail-style"
                />

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
                  <a href="#" className="nav-link">
                    <i className="fa fa-calendar"></i> Date
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fa fa-arrow-down"></i> Price Low To High
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fa fa-arrow-up"></i> Price High To Low
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fa fa-pen"></i> Name (A–Z)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="up-body-container">
          <div className="grid-container">
            {/* Left side: cards */}
            <div className="cards">
              <div className="card card-style">
                <img
                  src="/UpcomingPackages-asset/swizz-img.png"
                  className="card-img-top"
                  alt="switzerland"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Switzerland</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">1,100 $ ⭐ 5.0</p>
                </div>
              </div>
              <div className="card">
                <img
                  src="/UpcomingPackages-asset/berlin-img.png"
                  className="card-img-top"
                  alt="berlin"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Berlin</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">1,200 $ ⭐ 4.9</p>
                </div>
              </div>
              <div className="card">
                {" "}
                <img
                  src="/UpcomingPackages-asset/maldives-img.png"
                  className="card-img-top"
                  alt="switzerland"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Maldives</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">3,000 $ ⭐ 5.0</p>
                </div>
              </div>
              <div className="card">
                {" "}
                <img
                  src="/UpcomingPackages-asset/toronto-img.png"
                  className="card-img-top"
                  alt="switzerland"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Toronto</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">2000 $ ⭐ 4.0</p>
                </div>
              </div>
              <div className="card">
                {" "}
                <img
                  src="/UpcomingPackages-asset/baku-img.png"
                  className="card-img-top"
                  alt="baku"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Baku</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">1,440 $ ⭐ 5.0</p>
                </div>
              </div>
              <div className="card">
                {" "}
                <img
                  src="/UpcomingPackages-asset/china-img.png"
                  className="card-img-top"
                  alt="china"
                />
                <div className="img-banner">
                  <div className="date-div">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12, September 2022</p>
                  </div>

                  <div className="user-div">
                    <i class="fa-solid fa-user"></i>
                    <p>120+ people</p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Chinese</h5>
                  <p className="card-text">
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et
                  </p>
                  <p className="fw-bold">1,210 $ ⭐ 4.0</p>
                </div>
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
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Tour"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where To?"
                    />
                  </div>

                  <div className="mb-3 input-icon">
                    <i class="fa-solid fa-calendar-days"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date"
                    />
                  </div>

                  <label className="form-label filter-heading">
                    Filter By Price
                  </label>
                  <div className="input-wrapper">
                    <input type="number" />
                  </div>
                  <p className="small">Price: $12 - $3800</p>

                  <button type="submit" className="btn btn-color w-100">
                    Book Now
                  </button>
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
