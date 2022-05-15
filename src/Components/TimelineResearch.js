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
                    <a href={props.link} target='_blank'><h2 className='timelineHeading link'>{props.title}</h2></a>
                    <p>{props.summary}
                    </p>
                </div>
            </div>
            <a href=""></a>
        </div>
    )
}

export default TimelineResearch