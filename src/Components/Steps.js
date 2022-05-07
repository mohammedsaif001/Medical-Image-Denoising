import React, { useState, useEffect } from "react";

function Steps(props) {
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 576);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 576);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        // Ternary Operator to display arrows and preventing it to display at last 
        <>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-12" >
                <center>  <div className="v3_24 mt-0">
                    <p className="v3_28 ">{props.number}</p>
                </div></center>
                {/* Ternary Operator to check Screen size if less tham 576 add another arrow at last */}
                {isDesktop ?
                    // Ternary Operator to display arrows except the last one
                    props.value < 7 ?
                        // 2nd Ternary True Condition
                        <center><div style={{ fontSize: '9vh', fontWeight: 'bold', color: 'black' }} className='mb-0'> &#x2193;</div></center> :
                        // 2nd Ternary False Condition
                        <div></div> :
                    // 1st Ternary False Condition -> Display arrows to all
                    <center><div style={{ fontSize: '9vh', fontWeight: 'bold', color: 'black' }} className='mb-0'> &#x2193;</div></center>
                }





            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-12 mt-3">
                <h4 className='ml-0'>{props.heading}</h4>
                <p > {props.description}</p>
            </div>
        </>
    )
}

export default Steps