import React from 'react';
import './skill.css';
import Progress from './Progress'
import cogImg from '../images/cogImg.png'
function Skill() {
    return (
        <div className="skill-container">
            <div className="skill-text-wrapper">
                <p className="skill-p">Skill Set</p>
            </div>
            <div className='d-flex'>
                <div>
                    <Progress skill="React" percentage="95" num="1"/>
                    <Progress skill="Node" percentage="80" num="2"/>
                    <Progress skill="MongoDB" percentage="80" num="3" />
                    <Progress skill="Express" percentage="90" num="4" />
                    <Progress skill="Firebase" percentage="75" num="5" />
                    <Progress skill="Javscript" percentage="90" num="6" />
                </div>
                <div>
                    <Progress skill="Stripe" percentage="75" num="7" />
                    <Progress skill="BootStrap" percentage="90" num="8" />
                    <Progress skill="ChakraUI" percentage="75" num="12" />
                    <Progress skill="Redux" percentage="90" num="9" />
                    <Progress skill="HTML" percentage="90" num="10" />
                    <Progress skill="CSS" percentage="90" num="11" />
                </div>
            </div>
            

            

            <div className='py-5'></div>
        </div>
    )
}

export default Skill
