import React from 'react'
import './Team.css'
import teamDetails from './TeamDetails'
import TeamCard from './TeamCard'

function Team() {
    // const teamDetails = [
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Mohammed Saif',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam! .'
    //     },
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Nishita Palani',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam!.'
    //     },
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Prof Yamanappa',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam! .'
    //     },
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Syed Yunus',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam!.'
    //     },
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Mohammed Abdullah',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam! .'
    //     },
    //     {
    //         image: 'https://media-exp1.licdn.com/dms/image/D4D03AQGGRqg7IOg_cg/profile-displayphoto-shrink_800_800/0/1637682265645?e=1654128000&v=beta&t=1qm2V282di62Rlh7-SixUC__bLS8QDiL7s0SP6gzZ-I',
    //         personName: 'Mohammed Uvais',
    //         title: '20181CSE0433',
    //         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit magni quas consequuntur neque ex quisquam!.'
    //     }
    // ]
    return (
        <div className='team' id='aboutUs'>
            <div className='container mx-auto mt-5 col-md-10 mt-65'>
                <div className="header">
                    <div className="title">Our Expert Team</div>
                    <p><small className="text-muted">Lorem Ipsum dolor samet </small></p>
                </div>
                <div className="row justify-content-center pb-5">
                    {teamDetails.length > 0 && teamDetails.map((element) => (

                        <TeamCard image={element.image} personName={element.personName} title={element.title} content={element.content} linkedin={element.linkedin} email={element.email} github={element.github} instagram={element.instagram} />

                    ))}

                </div>
            </div>

        </div>
    )
}

export default Team