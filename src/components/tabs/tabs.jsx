
import { Link } from "react-router-dom"
import useCheckParams from "../../custom-hooks/use-check-params.js"
import  { dynamicHtmlClasses } from '../../utils/dynamic-html-classes/dynamic-html-classes.js'

import './tabs.css'

function Tabs(props) {
    let [planetName, tabName] = useCheckParams()

    return (
        <ol className={props.class.view}>
            {
                props.tabsText.map((eachItem) => {
                    return (
                        <li className={
                            dynamicHtmlClasses(tabName, eachItem.parameter, props.class.active, props.class.inactive)
                        } planet={planetName}>
                            <Link to={`/${planetName}/${eachItem.parameter}`}>
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