import React from 'react'

import teamDetails from './TeamDetails'
import TeamCard from './TeamCard'

function Team() {
    return (
        <div className='team' id='aboutUs'>
            <div className='container1 mx-auto mt-5 col-md-10 mt-100'>
                <div className="header">
                    <div className="title">Our Expert Team</div>
                    <p><small className="text-muted">Lorem Ipsum dolor samet </small></p>
                </div>
                <div className="row justify-content-center pb-5 individualCard" >
                    {teamDetails.length > 0 && teamDetails.map((element) => (

                        <TeamCard image={element.image} personName={element.personName} title={element.title} content={element.content} linkedin={element.linkedin} email={element.email} github={element.github} instagram={element.instagram} key={element.personName} />

                    ))}

                </div>
            </div>

        </div>
    )
}

export default Team