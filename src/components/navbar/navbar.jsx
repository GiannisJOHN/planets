
import { Link, useParams } from "react-router-dom"
import  { dynamicHtmlClasses } from '../../utils/dynamic-html-classes/dynamic-html-classes.js'
import { useState } from "react"
//css
import './navbar.css'

function Navbar() {
    const [mobileMenuOnScreen, setmobileMenuOnScreen] = useState(window.matchMedia('(max-width: 730px)').matches)
    const [mobileMenuClosed, setmobileMenuClosed] = useState(true)
    
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    let planetName = useParams().planet

    
    window.matchMedia('(max-width: 730px)').addEventListener('change', (e) => {
        e.matches === true ? setmobileMenuOnScreen(true) : setmobileMenuOnScreen(false)
    })

    function displayMenu() {
        if (mobileMenuOnScreen) {
           if (mobileMenuClosed) {
                return {display: 'none'}
           } else {
                return {display: 'flex'}
           }
        } else {
            return {display: 'flex'}
        }
    }

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
            <ul className='navbar-list' style={displayMenu()}>
                {
                    planets.map((eachItem) => {
                        return (
                        <li className={dynamicHtmlClasses(planetName, eachItem, htmlClasses.active, htmlClasses.inactive)} mobile='true' planet={eachItem} onClick={
                            () => {mobileMenuClosed ? setmobileMenuClosed(false) : setmobileMenuClosed(true)}
                        }>
                        <Link to={`/${eachItem}/overview`} >{eachItem}</Link>
                        </li>
                        )
                    })
                }
            </ul>
            <button aria-label='menu' className="burger" onClick={
                () => {mobileMenuClosed ? setmobileMenuClosed(false) : setmobileMenuClosed(true)} 
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