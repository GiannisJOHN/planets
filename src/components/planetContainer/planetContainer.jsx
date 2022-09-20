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
    
    let planetName = params.planet
    let images = {
        overview : require(`../../assets/planet-${planetName}.svg`),
        structure : require(`../../assets/planet-${planetName}-internal.svg`),
        geology : require(`../../assets/geology-${planetName}.png`)
    }
    //import(`../../assets/${n}.svg`).then(image => console.log(image, 200))

    let name, info, source, img

    if (params.planet === undefined) {
        name = data[0].name
        info = data[0].overview.content
        source = data[0].overview.source
        img = require(`../../assets/planet-${name}.svg`)
    } else {
        name = planetInformation[0].name
        info = planetInformation[0][params.tab].content
        source = planetInformation[0][params.tab].source
        img = images[params.tab]
    }

    return <PlanetInformation name={name} info={info} source={source} image={img}/>
}

export default PlanetContainer