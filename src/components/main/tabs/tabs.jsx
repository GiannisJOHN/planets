
import { Link } from "react-router-dom"
import useCheckParams from "../../../reusable-logic/custom-hooks/use-check-params.js"
import  { dynamicHtmlClasses } from '../../../utils/dynamic-html-classes/dynamic-html-classes.js'

import './tabs.css'

function Tabs(props) {
    let [planetName, tabName] = useCheckParams()
 
    function renderListItems() {
        return props.tabsText.map((eachItem) => {
            return (
                <li className={
                    dynamicHtmlClasses(
                        tabName, 
                        eachItem.parameter, 
                        props.class.active, 
                        props.class.inactive)
                } planet={planetName}>

                    <Link to={`/${planetName}/${eachItem.parameter}`}>
                        {eachItem.text}
                    </Link>
                    
                </li>
            )
        })
    }
    
    return (
        <ol className={props.class.view}>
            {renderListItems()}
        </ol>
    )
}

export default Tabs