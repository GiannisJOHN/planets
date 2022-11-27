

function tabsHOC    (Component) {
    let tabs = [
        {
            parameter: 'overview',
            text: 'OVERVIEW'
        },
        {
            parameter: 'structure',
            text: 'INTERNAL STRUCTURE'
        },
        {
            parameter: 'geology',
            text: 'SURFACE GEOLOGY'
        }
    ]

    return  <Component tabs={tabs}/>
}

export default tabsHOC