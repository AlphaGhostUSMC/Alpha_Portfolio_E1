import './index.scss'
import LogoS from '../../../assets/images/Logo-Y.png'
import { useRef } from 'react';

const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container">
      <img className='solid-logo' src={LogoS} alt="Y" />
    </div>
  )
}

export default Logo