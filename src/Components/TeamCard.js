import React from "react";
// import "./Team.css";
function TeamCard(props) {
    return (
        <>
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="profile">
                            {" "}
                            <img src={props.image} />{" "}
                        </div>
                        <div className="card-title mt-4">
                            {" "}
                            {props.personName}
                            <br /> <small>{props.title}</small>{" "}
                        </div>
                        <div className="card-subtitle">
                            <p>
                                {" "}
                                <small className="text-muted"> {props.content} </small>{" "}
                            </p>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item">
                                    <a href={props.linkedin} className="social-link">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={`mailto:${props.email}`} className="social-link">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={props.github} className="social-link">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={props.instagram} className="social-link">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamCard;
