import "./Footer.css";

export default function Footer() {
    return (
        <>

            <div className="secton-9">
                <div className="container">
                    <div className="row">

                        <div className="footer-flex">

                            <div className="footer-content">
                                <a href="#"><img src="/footer-logo.png" className="logo" alt="Logo" /></a>
                                <div>
                                    <p className="fs-6" style={{ marginBottom: "0.2rem" }}>Travel helps companies </p>
                                    <p className="fs-6" style={{ marginTop: "0.2rem" }}>manage payments easily.</p>
                                </div>
                                <div className="icon-flex">
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>

                            {/* <div className="flex-footer-content"> */}
                                <div className="footer-content">
                                    <h4 className="ps-0">Company</h4>
                                    <ul className="fs-6 list-unstyled ps-0 mt-4">
                                        <li>About us</li>
                                        <br />
                                        <li>Careers</li>
                                        <br />
                                        <li>Blog</li>
                                        <br />
                                        <li>Pircing</li>
                                    </ul>
                                </div>

                                <div className="footer-content">
                                    <h4 className="ps-0">Destination</h4>
                                    <ul className="fs-6 list-unstyled ps-0 mt-4">
                                        <li>Maldives</li>
                                        <br />
                                        <li>Los Angelas</li>
                                        <br />
                                        <li>Las Vintage</li>
                                        <br />
                                        <li>Torronto</li>
                                    </ul>
                                </div>
                            {/* </div> */}

                            <div className="footer-content">
                                <h3>Join Our Newsletter</h3>
                                <div className="newsletter-input mt-4">
                                    <input className="news-input" type="text" placeholder="Your email address"></input>
                                    <button className="footer-honeymoon-btn">Subscribe</button>
                                </div>
                                <p className="mt-3" style={{ color: "rgba(206, 206, 206, 1)" }}>* Will send you weekly unpdates  for your better <br /> tour package</p>
                            </div>
                        </div>
                    </div>

                    <hr className="footer-line" />

                    <div className="container">
                        <p className="fs-6 text-center">© Copyright @ Xpro 2022. All Rights Reserved</p>
                    </div>
                </div>
            </div>

        </>
    );
}
