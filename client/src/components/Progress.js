import React from 'react'
import { FaReact ,FaNodeJs , FaStripe , FaBootstrap , FaCss3Alt} from 'react-icons/fa';
import { SiMongodb , SiExpress , SiFirebase , SiJavascript , SiRedux , SiHtml5 , SiChakraui } from 'react-icons/si'



import './skill.css'

function Progress(props) {
    return (
        <div className="container">
            <div className='progress-top-padding'></div>
            <div className="d-flex py-2  px-5">
                <div className="d-flex align-items-center align-self-end progress-circle rounded-circle">
                    
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

        
                   
                </div>
                <div className='d-flex justify-content-start flex-column'>
                    <div className="progress-skill text-left">{props.skill}</div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${props.percentage}%`}} aria-valuenow={`${props.percentage}`} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Progress
