import StatsBox from "./stats-box"
import { render, screen } from '@testing-library/react'



describe('title', () => {
    
    test('title renders properly', () => {
        render(<StatsBox />)
        let headings = screen.getAllByRole('heading')
        expect(headings[1]).toBeInTheDocument()
    })
    test('title is empty', () => {
        render(<StatsBox />)
        let headings = screen.getAllByRole('heading')
        expect(headings[1]).toBeEmptyDOMElement()
    })
    test('title has string', () => {
        render(<StatsBox stats='17 hours' />)
        let headings = screen.getAllByRole('heading')
        expect(headings[1]).toHaveTextContent('17 hours')
    })
})

describe('subtitle', () => {

    test('subtitle renders properly', () => { 
        render(<StatsBox />)
        let headings = screen.getAllByRole('heading')
        expect(headings[0]).toBeInTheDocument()
    })
    test('subtitle is empty', () => {
        render(<StatsBox />)
        let headings = screen.getAllByRole('heading')
        expect(headings[0]).toBeEmptyDOMElement() 
    })
    test('subtitle has string', () => {
        render(<StatsBox title='rotation time' />)
        let headings = screen.getAllByRole('heading')
        expect(headings[0]).toHaveTextContent('rotation time')
    })
})   
