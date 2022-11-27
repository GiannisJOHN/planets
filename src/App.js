import Navbar from "./components/navbar/navbar.jsx"
import PlanetContainer from "./components/planet-container/planet-container.jsx"
import StatsContainer from "./components/stats-container/stats-container.jsx"

function App () {
  
  return (
    <>
      <Navbar />
      <div className="planet-main-wrapper">
        <PlanetContainer />
        <StatsContainer /> 
      </div>
    </>
  )
}

export default App
