import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/Logo-Y.png";
import './index.scss';

const Home = () => {


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi,<br /> I'm
        <img src={LogoTitle} alt="SysAdmin"/>
        ogesh Kumar
        <br />
        IT Team Lead
        </h1>
        <h2>Senior System Engineer & IT Team Lead | Powershell Wizard | Python Programmer | Cloud Admin | AI Engineer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home