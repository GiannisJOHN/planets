import Navbar from "./components/navbar/navbar.jsx"
import PlanetContainer from "./components/planet-container/planet-container.jsx"
import StatsContainer from "./components/stats-container/stats-container.jsx"
import Tabs from './components/tabs/tabs.jsx'
import tabsHOC from './high-order-components/tabs-HOC.js'

function App () {
  
  return (
    <>
      <Navbar />
      {tabsHOC(Tabs, 'mobile')}
      <div className="planet-main-wrapper">
        <PlanetContainer />
        <StatsContainer />
      </div>
    </>
  )
}

export default App
