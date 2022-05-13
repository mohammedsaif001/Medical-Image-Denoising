import React from 'react'

function Footer() {
    return (
        <div className=''>
            <div className=" container-fluid-footer  footerbody">
                {" "}
                <output className="">
                    <footer className=" ">
                        <div className="container-fluid">
                            <section className=" padding-y">
                                <div className="row">
                                    <aside className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 text-center">
                                        <article className="mr-3">
                                            {" "}
                                            <img
                                                src="images/logo.png"
                                                className="logo-footer"
                                                style={{
                                                    maxWidth: "150px",
                                                    width: "100%",
                                                    height: "auto",
                                                    // justifyContent: 'center',
                                                    // textAlign: 'center',
                                                    // display: 'block',
                                                    // marginLeft: 'auto',
                                                    // marginRight: 'auto'
                                                }}
                                            />
                                            <p className="mt-3 description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Totam nemo aspernatur incidunt aut ab ut aliquid
                                                molestiae alias unde possimus provident nulla rem
                                                suscipit, quia nesciunt doloribus debitis impedit optio,
                                                iusto eligendi recusandae error soluta quidem. Animi
                                                numquam veniam itaque dolorem quae voluptatem
                                                blanditiis?.
                                            </p>
                                            <div className='text-center'>
                                                {" "}
                                                <span >
                                                    <i className="fa fa-book btn btn-icon btn-light linkHover" aria-hidden="true">  <span className='changeFont'> Report</span>
                                                        <a
                                                            target="_blank"
                                                            href="#"
                                                            data-abc="true"
                                                        >

                                                        </a></i>
                                                </span>
                                                <span >
                                                    <i className="fa fa-newspaper-o btn btn-icon btn-light linkHover" aria-hidden="true">  <span className='changeFont'> Published Article</span>

                                                        <a
                                                            target="_blank"
                                                            href="#"
                                                            data-abc="true"
                                                        >
                                                        </a></i>
                                                </span>
                                                <span >
                                                    <i className="fa fa-github btn btn-icon btn-light linkHover" aria-hidden="true"> <span className='changeFont'> GitHub Repository</span>
                                                        <a
                                                            target="_blank"
                                                            href="#"
                                                            data-abc="true"
                                                        >
                                                        </a></i>
                                                </span>
                                            </div>
                                        </article>
                                    </aside>
                                    <aside className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 text-center">
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
                                            <li>
                                                {" "}
                                                <a href="#faq" data-abc="true">
                                                    FAQ's
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 text-center">
                                        <h6 className="title title-footer">Our app</h6>{" "}
                                        <a href="#" className="d-block mb-2" data-abc="true">
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
                                {/* <p target="_blank" className="float-right text-muted"> <a href="#" data-abc="true">Privacy &amp; Cookies</a> &nbsp; &nbsp; <a href="#" data-abc="true">Accessibility</a> </p> */}
                            </section>
                        </div>
                    </footer>
                </output>{" "}
            </div>
        </div>
    )
}

export default Footer