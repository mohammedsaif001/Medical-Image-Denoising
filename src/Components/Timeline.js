import React from 'react'

function Timeline() {
    return (
        <div className="container">
            <h1 className="page-title">Reasearch Paper</h1>

            <div className='timelineBody'>
                <div className="timeline">
                    <div className="container4 left">
                        <div className="date">15 Dec</div>
                        <i className="icon fa fa-hourglass"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="container4 right">
                        <div className="date">22 Oct</div>
                        <i className="icon fa fa-hourglass-start"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="container4 left">
                        <div className="date">10 Jul</div>
                        <i className="icon fa fa-hourglass-half"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="container4 right">
                        <div className="date">18 May</div>
                        <i className="icon fa fa-hourglass-end"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="container4 left">
                        <div className="date">10 Feb</div>
                        <i className="icon fa fa-hourglass-o"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    {/* <div className="container4 right">
                        <div className="date">01 Jan</div>
                        <i className="icon fa fa-certificate"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Timeline