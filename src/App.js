import Navbar from "./components/navbar/navbar.jsx"
import PlanetContainer from "./components/planetContainer/planetContainer.jsx"
import StatsContainer from "./components/statsContainer/statsContainer.jsx"

function App() {
  
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
