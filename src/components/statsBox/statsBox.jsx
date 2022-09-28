
import './statsBox.css'

function StatsBox(props) {

    return (
        <div className="stats-box theme-border">
            <h4 className='stats-box-subtitle'>{props.title}</h4>
            <h2 className='stats-box-title'>{props.stats}</h2>
        </div>
    )
}

export default StatsBox