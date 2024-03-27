import Menu from "./Menu";
import Cards from "./Cards";
import "./styles/app.css";
import banner from './images/Rectangle.png'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <motion.div
        initial={{ opacity: 0 }} // Opacidad inicial (invisible)
        animate={{ opacity: 1 }} // Opacidad final (visible)
        transition={{ duration: 0.9 }} // Duración de la animación

      className="Banner">
        <motion.div 
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}

        className="offer">
          <img src={banner}></img>
        </motion.div>
      </motion.div>
      <motion.div 
      transition={{duration : 0.4}}
      animate={{y : 100}} 
      
      className="container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </motion.div>
      
      
      
    </div>
  );
}

export default App;
