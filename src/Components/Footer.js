import React from 'react'

function Footer() {
    return (
        <div style={{ color: 'white', background: 'black', backgroundColor: 'black', }}>
            <div className=' ' >
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
                                                        height: "auto"
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
                                                <div className='text-center '>
                                                    {" "}
                                                    <span className='mx-2'>
                                                        <i className="fa fa-book btn btn-icon btn-dark linkHover" aria-hidden="true">  <span className='changeFont'> Report</span>
                                                            <a
                                                                target="_blank"
                                                                href="#"
                                                                data-abc="true"
                                                            >

                                                            </a></i>
                                                    </span>
                                                    <span className='mx-2 '>
                                                        <i className="fa fa-newspaper-o btn btn-icon btn-dark linkHover" aria-hidden="true">  <span className='changeFont'> Published Article</span>

                                                            <a
                                                                target="_blank"
                                                                href="#"
                                                                data-abc="true"
                                                            >
                                                            </a></i>
                                                    </span>
                                                    <span className='mx-2 '>
                                                        <i className="fa fa-github btn btn-icon btn-dark linkHover my-3 mb-3" aria-hidden="true"> <span className='changeFont '> GitHub Repository</span>
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
                                                <li className='mb-3'>
                                                    {" "}
                                                    <a href="#faq" data-abc="true">
                                                        FAQ's
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>
                                        <aside className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ">
                                            <h6 className="title title-footer">Download Android App</h6>{" "}
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
        </div>
    )
}

export default Footer