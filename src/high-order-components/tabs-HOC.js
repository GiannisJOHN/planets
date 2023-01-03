

function tabsHOC (Component, view, planetName) {

    let tabsText = [
        {
            parameter: 'overview',
            text: view === 'desktop' ? '01. OVERVIEW' : 'OVERVIEW'
        },
        {
            parameter: 'structure',
            text: view === 'desktop' ? '02. INTERNAL STRUCTURE' : 'STRUCTURE'
        },
        {
            parameter: 'geology',
            text: view === 'desktop' ? '03. SURFACE GEOLOGY' : 'SURFACE'
        }
    ]

    let desktopClasses = {
        view: 'planet-desktop-tabs',
        active : `planet-desktop-tabs-item theme-border planet-desktop-tabs-item-is-active ${planetName}`,
        inactive : 'planet-desktop-tabs-item theme-border'
    }

    let mobileClasses = {
        view: 'planet-mobile-tabs',
        active : `planet-mobile-tabs-item is-active planet-mobile-tabs-active-link`,
        inactive : 'planet-mobile-tabs-item'
    }


    return  <Component 
    tabsText={tabsText} 
    class={view === 'desktop' ? desktopClasses : mobileClasses}
    />
}

export default tabsHOC