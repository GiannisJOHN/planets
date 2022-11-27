import App from './App.js'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'



test('renders app', () => {
   
    render(<App />, {wrapper: BrowserRouter})
    expect(screen.getAllByText('Mercury')).toBeInTheDocument
}) 

test('change page to Venus', () => {
   
    render(<App />, {wrapper: BrowserRouter})

    fireEvent(screen.getByText('venus'),  new MouseEvent('click', { bubbles: true }))

    expect(screen.getAllByText('Venus')).toBeInTheDocument
}) 