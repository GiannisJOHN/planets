import PlanetInformation from "../planetInformation/planetInformation"
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'



function PlanetContainer() {

    let params = useParams()
    
    let planetInformation = data.filter((eachItem) => {
        if (eachItem.name.toLowerCase() === params.planet) {
            return eachItem
        }
    })
    
    let name, info, source, img

    if (params.planet === undefined) {
        name = data[0].name
        info = data[0].overview.content
        source = data[0].overview.source
        img = require(`../../assets/planet-${name.toLowerCase()}.svg`)
    } else {
        name = planetInformation[0].name
        info = planetInformation[0][params.tab].content
        source = planetInformation[0][params.tab].source

        let images = {
            overview : require(`../../assets/planet-${name.toLowerCase()}.svg`),
            structure : require(`../../assets/planet-${name.toLowerCase()}-internal.svg`),
            geology : require(`../../assets/geology-${name.toLowerCase()}.png`)
        }
        img = images[params.tab]
    }

    return <PlanetInformation name={name} info={info} source={source} image={img}/>
}

export default PlanetContainer