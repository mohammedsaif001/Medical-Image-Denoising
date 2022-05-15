import React from 'react'
import researchInfo from './TimelineContent.js'
import TimelineResearch from './TimelineResearch.js'

function Timeline() {
    return (
        <div className="container" id='research'>
            <h1 className="page-title">Research Papers</h1>

            <div className='timelineBody'>
                <div className="timeline">
                    {researchInfo.length > 0 && researchInfo.map((ele) => (
                        <TimelineResearch key={ele.slNo} cssClass={ele.cssClass} date={ele.date} title={ele.title
                        } summary={ele.summary} number={ele.slNo} link={ele.link} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Timeline