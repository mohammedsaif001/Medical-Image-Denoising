import React from "react";

function Footer() {
  return (
    <div
      style={{ color: "white", background: "black", backgroundColor: "black" }}
    >
      <div className=" ">
        <div className=" container-fluid-footer  footerbody ">
          {" "}
          <output className="">
            <footer className=" mt-5">
              <div className="container-fluid">
                <section className=" padding-y">
                  <div className="row">
                    <aside className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                      <article className="mr-3">
                        {" "}
                        <img
                          src="images/logo2.png"
                          className="logo-footer"
                          style={{
                            maxWidth: "150px",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <p className="mt-3 description">
                          This Application &amp; Model is created by Presidency
                          University students of batch 2018 - 2022 for our Final
                          Year Project. To know more or to get a clear picture
                          about this work, please access our project report from
                          the link given below. You can also go through the
                          article published about the same &amp; find the link
                          for the code in the Github Repository mentioned below.
                        </p>
                        <div className="text-center ">
                          {" "}
                          <span className="mx-2">
                            <a target="_blank" href="#" data-abc="true">
                              {" "}
                              <i
                                className="fa fa-book btn btn-icon btn-dark linkHover"
                                aria-hidden="true"
                              >
                                {" "}
                                <span className="changeFont"> Report</span>
                              </i>
                            </a>
                          </span>
                          <span className="mx-2 ">
                            <a target="_blank" href="#" data-abc="true">
                              <i
                                className="fa fa-newspaper-o btn btn-icon btn-dark linkHover "
                                aria-hidden="true"
                              >
                                {" "}
                                <span className="changeFont">
                                  {" "}
                                  Published Article
                                </span>
                              </i>
                            </a>
                          </span>
                          <span className="mx-2 ">
                            <a
                              target="_blank"
                              href="https://github.com/abdullah7795/Medical-Image-Denoising"
                              data-abc="true"
                            >
                              <i
                                className="fa fa-github btn btn-icon btn-dark linkHover my-3 mb-3"
                                aria-hidden="true"
                              >
                                {" "}
                                <span className="changeFont ">
                                  {" "}
                                  GitHub Repository
                                </span>
                              </i>
                            </a>
                          </span>
                        </div>
                      </article>
                    </aside>
                    <aside className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ">
                      <h6 className="title title-footer">About</h6>
                      <ul className="list-unstyled">
                        <li>
                          {" "}
                          <a href="#research" data-abc="true">
                            Research Papers
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#algo" data-abc="true">
                            Algorithm
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#working" data-abc="true">
                            Working Model
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#tools" data-abc="true">
                            Tools Used
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#aboutus" data-abc="true">
                            Team Members
                          </a>
                        </li>
                        <li className="mb-3">
                          {" "}
                          <a href="#faq" data-abc="true">
                            FAQ's
                          </a>
                        </li>
                      </ul>
                    </aside>
                    <aside className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ">
                      <h6 className="title title-footer">
                        Download Android App
                      </h6>{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=in.presidencyuniversity.imagedenoiseapp"
                        className="d-block mb-2"
                        data-abc="true"
                      >
                        <img
                          className="img-responsive"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                          height="40"
                        />
                      </a>{" "}
                      <img
                        className="img-responsive"
                        src="images/QR.png"
                        style={{
                          maxWidth: "200px",
                          width: "100%",
                          height: "auto",
                          border: "2px solid",
                        }}
                      />
                    </aside>
                  </div>
                </section>
                <section className="footer-copyright border-top ">
                  <p className="float-left text-muted">
                    {" "}
                    &copy; 2022 Team 52 Presidency University{" "}
                  </p>
                </section>
              </div>
            </footer>
          </output>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
