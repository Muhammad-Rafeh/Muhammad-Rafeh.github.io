import React from 'react'
import { FaReact ,FaNodeJs , FaStripe , FaBootstrap , FaCss3Alt} from 'react-icons/fa';
import { SiMongodb , SiExpress , SiFirebase , SiJavascript , SiRedux , SiHtml5 , SiChakraui } from 'react-icons/si'
import './skill.css'

function Progress(props) {
    return (
        <div className="progress-container">
            <div className="d-flex align-items-center justify-content-start p-3 pt-4">
                {    props.num==1 ?  <FaReact className="progress-icon "/> : "" }
                {    props.num==2 ?  <FaNodeJs className="progress-icon "/> : "" }
                {    props.num==3 ?  <SiMongodb className="progress-icon "/> : "" }
                {    props.num==4 ?  <SiExpress className="progress-icon "/> : "" }
                {    props.num==5 ?  <SiFirebase className="progress-icon "/> : "" }
                {    props.num==6 ?  <SiJavascript className="progress-icon "/> : "" }
                {    props.num==7 ?  <FaStripe className="progress-icon "/> : "" }
                {    props.num==8 ?  <FaBootstrap className="progress-icon "/> : "" }
                {    props.num==9 ?  <SiRedux className="progress-icon "/> : "" }
                {    props.num==10 ?  <SiHtml5 className="progress-icon "/> : "" }
                {    props.num==11 ?  <FaCss3Alt className="progress-icon "/> : "" }
                {    props.num==12 ?  <SiChakraui className="progress-icon "/> : "" }
                <div className='align-self-start ps-2'>
                    <div className="progress-skill">{props.skill}</div>
                </div>
            </div>
        </div>
    )
}

export default Progress
