
import { Link } from "react-router-dom";

//css
import './navbar.css'

function Navbar() {

    return(
        <>
        <nav className="mainNav">
            <div className="logo">THE PLANETS</div>
            <ul className='planetsLinks'>
                <li><Link to='/mercury/overview' >mercury</Link></li>
                <li><Link to='/venus/overview' >venus</Link></li>
                <li><Link to='/earth/overview' >earth</Link></li>
                <li><Link to='/mars/overview' >mars</Link></li>
                <li><Link to='/jupiter/overview' >jupiter</Link></li>
                <li><Link to='/saturn/overview' >saturn</Link></li>
                <li><Link to='/uranus/overview' >uranus</Link></li>
                <li><Link to='/neptune/overview' >neptune</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar