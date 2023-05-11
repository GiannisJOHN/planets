
import { Link } from "react-router-dom"
import  { dynamicHtmlClasses } from '../../utils/dynamic-html-classes/dynamic-html-classes.js'
import { useState } from "react"
import useCheckParams from "../../reusable-logic/custom-hooks/use-check-params.js"
//css
import './navbar.css'

global.matchMedia = global.matchMedia || function() {
    return {
        matches : false,
        addEventListener : function() {},
        removeEventListener: function() {}
    }
}

function Navbar() {
    const [mobileMenuOnScreen, setmobileMenuOnScreen] = useState(window.matchMedia('(max-width: 740px)').matches)
    const [mobileMenuClosed, setmobileMenuClosed] = useState(true)
    let planetName = useCheckParams()[0]

    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    
    
    window.matchMedia('(max-width: 740px)').addEventListener('change', (e) => {
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
    
    function closeMobileMenuOnClick() {
        if (mobileMenuOnScreen) {
            mobileMenuClosed ? setmobileMenuClosed(false) : setmobileMenuClosed(true)
        }
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
                        <li className={dynamicHtmlClasses(planetName, eachItem, htmlClasses.active, htmlClasses.inactive)} mobile='true' planet={eachItem} 
                        
                        onClick={closeMobileMenuOnClick}>

                            <Link className='navbar-list-item-link' to={`/${eachItem}/overview`} >{eachItem}</Link>

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