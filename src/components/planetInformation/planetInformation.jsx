import DesktopTabs from '../desktopTabs/desktopTabs'
import tabsHOC from '../../high order components/tabsHOC'

import './planetInformation.css'

function PlanetInformation(props) {

    return (
        <main className="planet-container">
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='planet-title'>{props.name}</h1>
                    <p className='planet-content-text'>{props.info}</p>
                    <p>Source: <b><a href={props.source} target='_blank'>Wikipedia</a></b></p><img src="" alt="" />
                </div>
                {tabsHOC(DesktopTabs)}
            </div>
        </main>
    )
}

export default PlanetInformation