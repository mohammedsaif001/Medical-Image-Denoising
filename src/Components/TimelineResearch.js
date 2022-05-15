import React from 'react'

function TimelineResearch(props) {
    return (
        <div>
            <div className={props.cssClass}>
                <div className="date">{props.date}</div>
                <i className={props.icon}></i>
                <div className="content">
                    <h2 className='timelineHeading'>{props.title}</h2>
                    <p>{props.summary}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimelineResearch