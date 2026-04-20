import "./Packages.css";

export default function Packages() {
  return (
    <>
      {/* Blurred content */}
      <div className="blur-wrapper">
        <div className="home-first-container">
          <div className="home-body-container">
            <div>
              <img src="/wavy.png" className="home-wavy"></img>
              <h1 className="home-h1-hero">
                No matter where <br /> you're going to, we'll <br /> take you
                there
              </h1>
            </div>

            <div className="home-travel-info">
              <p>Where to?</p>
              <p>
                Travel type <i className="fa-solid fa-chevron-down"></i>
              </p>
              <p>
                Duration <i className="fa-solid fa-chevron-down"></i>
              </p>
              <button className="home-sec-btn">Submit</button>
            </div>
            <div className="home-client-div">
              <img src="/group-pic.png" className="home-clients" />
              <p>2,500 people booked Tomrrowland Event in the last 24 hours</p>
            </div>
          </div>
        </div>
        <div className="home-logoFlex">
          <img src="/logo-1.png" className="home-logo-size" />
          <img src="/logo-2.png" className="home-logo-size" />
          <img src="/logo-5.png" className="home-logo-size" />
          <img src="/logo-2.png" className="home-logo-size" />
          <img src="/logo-1.png" className="home-logo-size" />
        </div>
      </div>

      <div className="form-overlay">
        <div className="d-flex justify-content-center align-items-center">
          <div className="card p-4 shadow-lg for-card">
            {/* Header */}
            <button className="btn-close position-absolute top-0 end-0 me-2 mt-2"
  onClick={() => window.location.href = '/'}></button>
            <h3 className="fw-bold text-center mt-3 mb-4">
              Build Your Own Package
            </h3>

            {/* Destination Inputs */}
            <div className="mb-3">
              <div className="form-floating mb-2 position-relative">
                <input
                  type="text"
                  className="form-control fw-bold fs-5 pe-5 custom-input"
                  id="destination1"
                  placeholder="Enter destination (country, region or city)"
                  defaultValue="Switzerland"
                />
                {/* icon inside input */}
                <i
                  className="fa-solid fa-circle-info position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ pointerEvents: "none" }}
                ></i>

                <label htmlFor="destination1" className="text-muted">
                  Enter destination (country, region or city)
                </label>
              </div>

              <div className="form-floating mb-2 position-relative">
                <input
                  type="text"
                  className="form-control fw-bold fs-5 pe-5 custom-input"
                  id="destination1"
                  placeholder="Enter destination (country, region or city)"
                  defaultValue="Lauterbrunnen"
                />
                {/* icon inside input */}
                <i
                  className="fa-solid fa-circle-info position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ pointerEvents: "none" }}
                ></i>

                <label htmlFor="destination1" className="text-muted">
                  Enter destination (country, region or city)
                </label>
              </div>

              <a
                href="#"
                className="small text-danger d-block mt-1 text-decoration-none"
              >
                + Add destination
              </a>
            </div>

            {/* Date & Guests */}
            <div className="date-flex mb-3">
              <div className="col-6">
                <div className="form-floating mb-2 position-relative">
                  <input
                    type="text"
                    className="form-control fw-bold fs-5 pe-5 custom-input"
                    id="dateRange"
                    defaultValue="Start Date → End Date"
                  />
                  <label htmlFor="dateRange" className="text-muted">
                    Date range
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="form-floating mb-2">
                  <select
                    className="form-select custom-select"
                    id="guestSelect"
                    aria-label="Guests"
                  >
                    <option value="2">2 adults</option>
                    <option value="1">1 adult</option>
                    <option value="3">3 adults</option>
                    <option value="family">Family</option>
                  </select>
                  <label htmlFor="guestSelect" className="text-muted">
                    Guests
                  </label>
                </div>
              </div>
            </div>
            {/* Activities */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Activities preferences (optional)
              </label>
              <div className="row roww-grid">
                {[
                  "Culture",
                  "Outdoors",
                  "Relaxing",
                  "Wildlife",
                  "Romantic",
                  "Religious",
                  "Hiking",
                  "Music",
                  "Shopping",
                  "Sports",
                  "Museums",
                  "Party",
                  "Tradition",
                  "Snow",
                  "Fishing",
                  "Cruise",
                  "Guide",
                  "Food",
                  "Accommodation",
                ].map((activity, i) => (
                  <div key={i} className="col-6 col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={activity + i}
                      />
                      <label
                        className="form-check-label small"
                        htmlFor={activity + i}
                      >
                        {activity}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-danger w-100">Build Package</button>
          </div>
        </div>
      </div>
    </>
  );
}
