import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-first-container">
        <div className="about-hero-p">
          <p>READ</p>
          <h1>about us</h1>
        </div>
      </div>

      <div className="about-honeymoon-div">
        <div className="about-honeymoon-p">
          <p className="about-heading-p">PROMOTION</p>
          <h1 className="about-heading-h1">
            We Provide You Best <br /> European Siteseeing Tours
          </h1>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis{" "}
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="about-honeymoon-btn">View package</button>
        </div>

        <div className="about-image-wrapper">
          <img
            src="/About-assets/Ellipse.png"
            alt="Ring Frame"
            className="about-ring-frame"
          />
          <img src="/About-assets/image1.png" className="about-honeymoon-img" />
        </div>
      </div>

      <div className="about-liberty-div">
        <div className="about-h1-div">
          <h1 className="about-liberty-h1">waterlust</h1>
          <img src="/About-assets/playwater.png" className="about-z-line"></img>
        </div>
      </div>

      <div className="about-trendy-div">
        <img src="/About-assets/photo2.png" className="about-honeymoon-img" />

        <div className="about-honeymoon-p">
          <p className="about-heading-p">TREND</p>
          <h1 className="about-heading-h1">Our Popular Tour Plans</h1>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium.
          </p>
          <div className="about-trend-chart">
            <div className="about-chart-1">
              <img src="/About-assets/v-img.png" className="about-chart-img" />
              <img src="/About-assets/honey-1.png" className="about-chart-img" />
              <img src="/About-assets/music-1.png" className="about-chart-img-3" />
            </div>
          </div>
        </div>
        <img src="/About-assets/shell.png" className="about-shell-img" />
      </div>

      <div className="about-trend-div">
        <div className="about-trendy-heading">
          <p className="about-heading-p">EXPLORE MORE</p>
          <h1 className="about-heading-h1">Our International Packages</h1>
        </div>

        <div className="about-bento-grid">
          <div className="barca-1">
            <div className="bento-p">
              <p>Barcalona</p>
              <p>$840</p>
            </div>
          </div>

          <div className="swizz">
            <div className="bento-p">
              <p>Switzerland</p>
              <p>$840</p>
            </div>
          </div>

          <div className="rio">
            <div className="bento-p">
              <p>Rio de Jenero</p>
              <p>$840</p>
            </div>
          </div>

          <div className="barca-2">
            <div className="bento-p">
              <p>Barcalona</p>
              <p>$840</p>
            </div>
          </div>

          <div className="tland">
            <div className="bento-p">
              <p>Tomorrow land</p>
              <p>$840</p>
            </div>
          </div>

          <div className="la">
            <div className="bento-p">
              <p>Los Angelas</p>
              <p>$840</p>
            </div>
          </div>

          <div className="india">
            <div className="bento-p">
              <p>India</p>
              <p>$840</p>
            </div>
          </div>

          <div className="barca-3">
            <div className="bento-p">
              <p>Barcalona</p>
              <p>$840</p>
            </div>
          </div>

          <div className="maldives">
            <div className="bento-p">
              <p>Maladives</p>
              <p>$840</p>
            </div>
          </div>

          <div className="barca-4">
            <div className="bento-p">
              <p>Barcalona</p>
              <p>$840</p>
            </div>
          </div>

          <div className="pakistan">
            <div className="bento-p">
              <p>Pakistan</p>
              <p>$840</p>
            </div>
          </div>
        </div>
      </div>


      <div className="about-client">
        <div className="about-client-heading">
          <p className="about-heading-p">PROMOTION</p>
          <h1 className="about-heading-h1">
            See What Our Client Say <br /> About Us
          </h1>
        </div>

        <div className="carosel-div">

          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

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
                  <img src="/photo.png" alt="User 1" className="rounded-circle mb-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                  <div className="apos-p">
                    <img src="/apostrophe.png" className="apo-img"></img>
                    <p>
                      Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                    </p>
                  </div>

                  <h5>Christine Beckam - Designer</h5>
                </div>
              </div>

              <div className="carousel-item active">
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <img src="/photo.png" alt="User 1" className="rounded-circle mb-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                  <div className="apos-p">
                    <img src="/apostrophe.png" className="apo-img"></img>
                    <p>
                      Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
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
              data-bs-slide="prev">

              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button
              className="carousel-control-next custom-arrow-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next" >

              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
