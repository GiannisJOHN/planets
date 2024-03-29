import data from '../../../data/data.json'
import {useParams} from 'react-router-dom'
import StatsBox from '../stats-box/stats-box'
import './stats-container.css'

function StatsContainer() {

    let params = useParams()

    let planetInformation = data.filter((eachItem) => {
        if (eachItem.name.toLowerCase() === params.planet) {
            return eachItem
        }
    })

    let stats = [
        {
            title: 'rotation time',
            value: params.planet === undefined ?
            data[0].rotation :
            planetInformation[0].rotation
        }, 
        {
            title: 'revolution time',
            value: params.planet === undefined ?
            data[0].revolution :
            planetInformation[0].revolution
        }, 
        {
            title: 'radius',
            value: params.planet === undefined ?
            data[0].radius :
            planetInformation[0].radius
        }, 
        {
            title: 'average temp.',
            value: params.planet === undefined ?
            data[0].temperature :
            planetInformation[0].temperature
        }
    ]

    function renderStatsContent() {
            return stats.map((eachItem) => {
                return <StatsBox title={eachItem.title} stats={eachItem.value}/>
            })
    }

    return (
        <>
        <div className='stats-container'>
            {renderStatsContent()}
        </div>
        </>
    )
}

export default StatsContainer