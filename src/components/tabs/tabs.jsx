
import { Link, useParams } from "react-router-dom"
import  { dynamicHtmlClasses } from '../../utils/dynamic-html-classes/dynamic-html-classes.js'

import './tabs.css'

function Tabs(props) {
    
    return (
        <ol className={props.class.view}>
            {
                props.tabsText.map((eachItem) => {
                    return (
                        <li className={
                            dynamicHtmlClasses(props.urlTabName, eachItem.parameter, props.class.active, props.class.inactive)
                        } planet={props.urlPlanetName}>
                            <Link to={`/${props.urlPlanetName}/${eachItem.parameter}`}>
                                {eachItem.text}
                            </Link>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default Tabs