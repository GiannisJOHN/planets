
import { Link, useParams } from "react-router-dom";
import  { dynamicHtmlClasses } from '../../utils/utils.js'
import { useState } from "react";
//css
import './navbar.css'

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(window.matchMedia('(max-width: 730px)').matches)
    let planetName = useParams().planet

    

    window.matchMedia('(max-width: 730px)').addEventListener('change', (e) => {
        e.matches === true ? setMobileMenu(true) : setMobileMenu(false)
    })



    if (planetName === undefined) {
        planetName = 'mercury'
    } else {
        planetName.toLowerCase()
    }
    let htmlClasses = {
        active : `navbar-list-item is-active ${planetName}`,
        inactive : 'navbar-list-item'
    }
    return (
        <>
        <nav className="navbar-container">
            <div className="logo">THE PLANETS</div>
            <ul className='navbar-list' style={mobileMenu ? {display: 'none'} : {display: 'flex'} }>
                <li className={dynamicHtmlClasses(planetName, 'mercury', htmlClasses.active, htmlClasses.inactive)} mobile='true' planet='mercury'>
                    <Link to='/mercury/overview' >mercury</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'venus', htmlClasses.active, htmlClasses.inactive)}mobile='true' planet='venus'>
                    <Link to='/venus/overview' >venus</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'earth', htmlClasses.active, htmlClasses.inactive)}mobile='true' planet='earth'>
                    <Link to='/earth/overview' >earth</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'mars', htmlClasses.active, htmlClasses.inactive)}
                mobile='true' planet='mars'>
                    <Link to='/mars/overview' >mars</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'jupiter', htmlClasses.active, htmlClasses.inactive)} mobile='true' planet='jupiter'>
                    <Link to='/jupiter/overview' >jupiter</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'saturn', htmlClasses.active, htmlClasses.inactive)} mobile='true' planet='saturn'>
                    <Link to='/saturn/overview' >saturn</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'uranus', htmlClasses.active, htmlClasses.inactive)} mobile='true' planet='uranus'>
                    <Link to='/uranus/overview' >uranus</Link>
                </li>
                <li className={dynamicHtmlClasses(planetName, 'neptune', htmlClasses.active, htmlClasses.inactive)} mobile='true' planet='neptune'>
                    <Link to='/neptune/overview' >neptune</Link>
                </li>
            </ul>
            <button aria-label='menu' className="burger" onClick={
                () => {mobileMenu ? setMobileMenu(false) : setMobileMenu(true)} 
            }>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>
        </>
    )
}

export default Navbar