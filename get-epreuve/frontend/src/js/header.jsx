
import '../css/header.css'

import logoSystem from '/vite.svg'


import '../css/header.css';



function Button(attrs={}){
  return (
    <button className={attrs.className}>attrs.text</button>
  )
}

function Nav() {


  return (
    <nav className='navBarre'>
      <div className="containerNav">
        <div className="left">
          <img src={logoSystem} alt="logoApp" className="logo" />
          <span className="systemName">cmEpreuve</span>
        </div>
        <div className="right">
          <ul className="ulNav">
            <li className="liNav"><a href="#">Home</a></li>
            <li className="liNav"><a href="#">Services</a></li>
            <li className="liNav"><a href="#"><Button className='btn' /></a></li>
            <li className="liNav"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export function Header() {

  return (
    <header>
      <Nav />
    </header>
  )
}

