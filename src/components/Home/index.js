import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/Logo-Y.png";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState ('text-animate')
  const nameArray = ['o','g','e','s','h',' ','K','u','m','a','r']
  const jobArray = ['D','a','t','a','c','e','n','t','e','r',' ','A','r','c','h','i','t','e','c','t','.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i</span>
        <span className={`${letterClass} _13`}>,</span>
        <br />
        <span className={`${letterClass} _14`}>I</span>
        <span className={`${letterClass} _15`}>'</span>
        <span className={`${letterClass} _16`}>m</span>
        <img src={LogoTitle} alt="name" />
        <AnimatedLetters letterClass={letterClass} 
        strArray={nameArray} 
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        </h1>
        <h2>Senior System Engineer & IT Team Lead | Powershell Wizard | Python Programmer | Cloud Admin | AI Engineer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home