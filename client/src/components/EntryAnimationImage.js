import React from 'react';
import { motion } from 'framer-motion';

import MyImg from '../images/tireLogo.png';
import './entryAnimationImg.css';


function EntryAnimationImage() {
    return (
        <div>
            {/* <motion.div 
            animate={{x :[-600 , -50] , y:[0 , 600] , rotateZ: 600, originY : 0.5, originX : 0.5}}
            transition={{x:{duration:2}},{y : {delay : 2}} ,{rotateZ : {duration : 2}} }
            
            >
                 <img src={MyImg} className="img-entry1"/>
           </motion.div> */}
           <motion.div
            animate={{x :["-200vw" , "-1vw"] , y:["40vh" , "110vh"]}}
            transition={{x:{duration:2}},{y : {delay : 2}}}
            >

                <motion.div
                    animate={{rotateZ : 360 }}
                    transition={{duration: 2}}
                >
                     <img src={MyImg} className="img-entry1"/>
                    </motion.div>

            </motion.div>

        </div>
    )
}

export default EntryAnimationImage
