import React from 'react'

function TimelineResearch(props) {
    return (
        <div>
            <div className={props.cssClass}>
                <div className="date">{props.date}</div>
                <div className="icon  pt-0" >
                    <div className='text-center' style={{ fontSize: '21px', margin: '3px 0', fontWeight: 'bold' }}>{props.number}</div>
                </div>
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