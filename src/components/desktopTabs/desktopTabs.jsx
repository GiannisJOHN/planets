
import { Link, useParams } from "react-router-dom"
import  { dynamicHtmlClasses } from '../../utils/utils.js'

import './desktopTabs.css'

function DesktopTabs(props) {
    let tabName = useParams().tab
    let planetName = useParams().planet
    
    if (tabName === undefined) {
        planetName = 'mercury'
        tabName = 'overview'
    } else {
        planetName.toLowerCase()
    }
    let htmlClasses = {
        active : `planet-desktop-tab theme-border planet-desktop-tab-is-active ${planetName}`,
        inactive : 'planet-desktop-tab theme-border'
    }

    return (
        <ol>
            {
                props.tabs.map((eachItem, index) => {
                    return (
                        <li className={
                            dynamicHtmlClasses(tabName, eachItem.parameter, htmlClasses.active, htmlClasses.inactive)
                        }>
                            <Link to={`/${planetName}/${eachItem.parameter}`}>
                                <span>0{index + 1}</span>{eachItem.text}
                            </Link>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default DesktopTabs