export function dynamicHtmlClasses(urlParameter, text, activeClass, inactiveClass) {
    let htmlClass
    if (urlParameter === text) {
        htmlClass = activeClass
    } else {
        htmlClass = inactiveClass
    }
    return htmlClass
}