import { useParams } from "react-router-dom"


function useCheckParams() {
    let tabName = useParams().tab

    let planetName = useParams().planet
    
    if (tabName === undefined) {
        planetName = 'mercury'
        tabName = 'overview'
    } else {
        planetName.toLowerCase()
    }

    return [planetName, tabName]
}

export default useCheckParams