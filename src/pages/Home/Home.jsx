import "./Home.css";

function Home() {
  return (
    <>
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

      <div className="home-category">
        <div className="home-Heading">
          <p className="home-heading-p">CATEGORY</p>
          <h1 className="home-heading-h1">We Offer Best Services</h1>
        </div>

        <div className="row row-cols-12 home-cards">
          <div className="col home-card-wrapper">
            <div className="home-card-1">
              <div className="home-img-div">
                <img src="/Rectangle 157.png" className="card-decor"></img>
                <img src="/tour-guide 1.png" className="home-card-img"></img>
              </div>
              <div className="p-div">
                <h4>Guided Tours</h4>
                <p>
                  sunt qui repellat saepe
                  <br />
                  qou velit aperiam id <br /> aliquam placeat
                </p>
              </div>
            </div>
            <img src="/hoover-rec.png" className="card-hoover-1"></img>
          </div>

          <div className="col home-card-wrapper">
            <div className="home-card-2">
              <div className="home-img-div">
                <img src="/Rectangle 157.png" className="card-decor-2"></img>
                <img src="/travelling 1.png" className="home-card-img"></img>
              </div>
              <div className="p-div">
                <h5>Best Flights Options</h5>
                <p>
                  sunt qui repellat saepe
                  <br />
                  qou velit aperiam id <br /> aliquam placeat
                </p>
              </div>
            </div>
            <img src="/hoover-rec.png" className="card-hoover-1"></img>
          </div>

          <div className="col home-card-wrapper">
            <div className="home-card-3 h-100">
              <div className="home-img-div">
                <img src="/hands 1.png" className="home-card-img"></img>
                <img src="/Rectangle 157.png" className="card-decor-3"></img>
              </div>
              <h4>Religious Tours</h4>
              <p>
                sunt qui repellat saepe
                <br />
                qou velit aperiam id <br /> aliquam placeat
              </p>
            </div>
            <img src="/hoover-rec.png" className="card-hoover-1"></img>
          </div>

          <div className="col home-card-wrapper">
            <div className="home-card-4 h-100">
              <div className="home-img-div">
                <img src="/medical-team 1.png" className="home-card-img"></img>
                <img src="/Rectangle 157.png" className="card-decor-3"></img>
              </div>
              <h4>Medical Insurance</h4>
              <p>
                sunt qui repellat saepe
                <br />
                qou velit aperiam id <br /> aliquam placeat
              </p>
            </div>
            <img src="/hoover-rec.png" className="card-hoover-1"></img>
          </div>
        </div>
      </div>

      <div className="home-honeymoon-div">

        <img src="/honeymoon.png" className="home-honeymoon-img"></img>

        <div className="home-honeymoon-p">
          <p className="home-heading-p">HONEYMOON SPECIALS</p>
          <h1 className="home-heading-h1">
            Our Romatic Tropical <br /> Destinations
          </h1>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis{" "}
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="home-honeymoon-btn">View package</button>
        </div>
      </div>

      <div className="home-resort-div">
        <div className="home-resort-div-1">
          <div className="home-restort-header">
            <p className="home-heading-p">FAST & EASY</p>
            <h2 className="home-heading-h1">
              Get Your Favourite <br /> Restort Bookings
            </h2>
          </div>

          <div className="col-flex">
            <div className="destination-div-2">
              <img src="/resort 1-img.png"></img>

              <div className="destination-p">
                <h3>Choose Destination</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>

            <div className="destination-div-2">
              <img src="/resort 2-img.png"></img>
              <div className="destination-p">
                <h3>Check Availability</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>

            <div className="destination-div-2">
              <img src="/resort 3-img.png"></img>
              <div className="destination-p">
                <h3>Let's Go</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/plane.png" className="plane-img"></img>
      </div>

      <div className="liberty-div">
        <div className="h1-div">
          <h1 className="home-liberty-h1">
            Lets Make Your <br /> Next Holiday Amazing
          </h1>
          <img src="/Line.png" className="home-z-line"></img>
        </div>
      </div>

      <div className="home-promotion">
        <div className="home-promotion-firstdiv">
          <div className="home-promo-p-div">
            <p className="home-heading-p">PROMOTION</p>
            <h1 className="home-heading-h1">
              Get Your Favourite <br /> Restort Bookings
            </h1>
            <p>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis{" "}
              <br /> praesentium a laudantium internos. Non quis eius quo
              eligendi corrupti <br /> et fugiat nulla qui soluta recusandae in
              maxime quasi aut ducimus <br /> illum aut optio quibusdam!
            </p>
            <button className="home-honey-btn">View package</button>
          </div>

          <div className="p-promtion mt-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2 promo-card-1">
                  <a href="#" className="btn">
                    $700
                  </a>
                </div>

                <div className="col-sm-2 promo-card-2">
                  <a href="#" class="btn">
                    $800
                  </a>
                </div>

                <div className="col-sm-2 promo-card-3">
                  <a href="#" class="btn">
                    $500
                  </a>
                </div>

                <div class="col-sm-2 promo-card-4">
                  <a href="#" className="btn">
                    $400
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/promo-img.png" className="promo-img"></img>
      </div>

      <div className="img-div">
        <div className="nature">
          <div className="home-nature-content align-items-center text-center text-white">
            <p>PROMOTION</p>
            <div className="line-div">
              <h1>Explore Nature</h1>
              <img src="/Line-3.png" className="linee"></img>
            </div>
            <button className="home-trans-btn">View package</button>
          </div>
        </div>
        <div className="cities">
          <div className="home-nature-content align-items-center text-center text-white">
            <p>PROMOTION</p>
            <div className="line-div">
              <h1>Explore Cities</h1>
              <img src="/Line-8.png" className="linee"></img>
            </div>
            <button className="home-trans-btn">View package</button>
          </div>
        </div>
      </div>

      <div className="trendy-div">
        <div className="trendy-heading">
          <p className="heading-p">TRENDY</p>
          <h1 className="heading-h1">
            Our Trending Tour <br /> Package
          </h1>
        </div>

        <div className="container">
          <div className="trend-div">
            <div className="trend-one">
              <div className="trend-img-div">
                <img src="/trend-1.png" className="trendy-image"></img>
                <img src="/swizz.png" className="swizz-image"></img>
              </div>

              <div className="div-1">
                <p>
                  <i class="fa-regular fa-calendar"></i> 8 days{" "}
                </p>
                <p>
                  <i class="fa-regular fa-user"></i> 25 People Going
                </p>
              </div>
              <div className="div-2a">
                <h3>Swizerland</h3>
                <img src="/starss.png" className="star"></img>
              </div>
              <div className="location-div">
                <img src="/location.png" className="location-img"></img>
                <p>Europe</p>
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
              <button className="home-honey-btn">Explore New</button>
            </div>

            <div className="trend-two">
              <div className="trend-img-div">
                <img src="/trend-2.png" className="trendy-image"></img>
                <img src="/brazil.png" className="swizz-image"></img>
              </div>

              <div className="div-1">
                <p>
                  <i class="fa-regular fa-calendar"></i> 8 days{" "}
                </p>
                <p>
                  <i class="fa-regular fa-user"></i> 30 People Going
                </p>
              </div>
              <div className="div-2b">
                <h3>Amazon</h3>
                <img src="/starss.png" className="star"></img>
              </div>
              <div className="location-div">
                <img src="/location.png" className="location-img"></img>
                <p>Brazil</p>
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
              <button className="home-honey-btn">Explore New</button>
            </div>

            <div className="trend-three">
              <div className="trend-img-div">
                <img src="/trend-3.png" className="trendy-image"></img>
                <img src="/gaza.png" className="swizz-image"></img>
              </div>
              <div className="div-1">
                <p>
                  <i class="fa-regular fa-calendar"></i> 8 days{" "}
                </p>
                <p>
                  <i class="fa-regular fa-user"></i> 155 People Going
                </p>
              </div>
              <div className="div-2c">
                <h3>Gaza</h3>
                <img src="/starss.png" className="star"></img>
              </div>
              <div className="location-div">
                <img src="/location.png" className="location-img"></img>
                <p>Egypt</p>
              </div>
              <div className="moni-div">
                <h6 style={{ color: "rgb(255, 120, 71)" }}>1,200 $</h6>
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
              <button className="home-honey-btn">Explore New</button>
            </div>
          </div>
        </div>
      </div>

      <div className="client">
        <div className="client-heading">
          <p className="heading-p">PROMOTION</p>
          <h1 className="heading-h1">
            See What Our Client Say <br /> About Us
          </h1>
        </div>

        <div className="carosel-div">
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <img
                    src="/photo.png"
                    alt="User 1"
                    className="rounded-circle mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="apos-p">
                    <img src="/apostrophe.png" className="apo-img"></img>
                    <p>
                      Vel officiis dolor ea illo aut eligendi ullam non
                      laudantium magnam et recusandae molestiae sit iure unde
                      aut voluptate quaerat. Id sunt provident quo possimus
                      impedit vel doloremque obcaecati qui ullam consectetur et
                      ipsum omnis.
                    </p>
                  </div>

                  <h5>Christine Beckam - Designer</h5>
                </div>
              </div>

              <div className="carousel-item active">
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <img
                    src="/photo.png"
                    alt="User 1"
                    className="rounded-circle mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="apos-p">
                    <img src="/apostrophe.png" className="apo-img"></img>
                    <p>
                      Vel officiis dolor ea illo aut eligendi ullam non
                      laudantium magnam et recusandae molestiae sit iure unde
                      aut voluptate quaerat. Id sunt provident quo possimus
                      impedit vel doloremque obcaecati qui ullam consectetur et
                      ipsum omnis.
                    </p>
                  </div>

                  <h5>Christine Beckam - Designer</h5>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev custom-arrow-1"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button
              className="carousel-control-next custom-arrow-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
