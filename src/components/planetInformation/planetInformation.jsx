
function PlanetInformation(props) {

    return (
        <main>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.info}</p>
                <p>Source: <b><a href={props.source} target='_blank'>Wikipedia</a></b></p><img src="" alt="" />
            </div>
        </main>
    )
}

export default PlanetInformation