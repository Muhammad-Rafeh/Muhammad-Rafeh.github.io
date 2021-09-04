import logo from './logo.svg';
import Home from './components/Home'
import './App.css';
import { motion } from 'framer-motion';
import MyImg from './images/MyImg.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay : 3,
      delayChildren: 0.5
    }
  }
}

const name={
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay : 3.5,
      delayChildren: 0.5
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div 
           animate={{x :[-600 , -50] , y:[0 , -600] } }
           transition={{x:{duration:2}},{y : {delay : 2}}}
           
        >
          <img src={MyImg} className="img-entry"/>
        </motion.div>
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
       >
          <div className="nav-wrapper">
              <h2 className="logo-h2" ><span>Full</span> Stack Developer</h2>
              <motion.h3 
                variants={name}
                initial="hidden"
                animate="show"
                
              className="name"> Muhammad Rafeh</motion.h3>
            </div>
            <hr className="hr" />
          <Home />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
