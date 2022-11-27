import { dynamicHtmlClasses } from "./dynamic-html-classes"


test('it returns inactive class', () => {
    const inActiveClass = dynamicHtmlClasses('mars', 'venus', 'active', 'inactive')

    expect(inActiveClass).toBe('inactive')
})

test('it returns active class', () => {
    const inActiveClass = dynamicHtmlClasses('mars', 'mars', 'active', 'inactive')

    expect(inActiveClass).toBe('active')
})