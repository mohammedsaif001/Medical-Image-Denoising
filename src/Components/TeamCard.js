import React from 'react'
import './Team.css'
function TeamCard(props) {
    return (
        <>
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="profile"> <img src={props.image} /> </div>
                        <div className="card-title mt-4"> {props.personName}<br /> <small>{props.title}</small> </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted"> {props.content} </small> </p>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href={`mailto:${props.email}`} className="social-link"><i className="fa fa-envelope"></i></a></li>
                                <li className="list-inline-item"><a href={props.github} className="social-link"><i className="fa fa-github"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg" /> </div>
                        <div className="card-title mt-4"> Noel Flantier<br /> <small>CEO of Redbull</small> </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing </small> </p>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg" /> </div>
                        <div className="card-title mt-4"> David Gregory<br /> <small>Resident Dj at ibdc</small> </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted"> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! </small> </p>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default TeamCard