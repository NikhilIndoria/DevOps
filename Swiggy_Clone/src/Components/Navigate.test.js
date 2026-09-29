import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navigate from './Navigate'

test('renders the brand and selected delivery location', () => {
    render(<Navigate />)

    expect(screen.getByRole('img', { name: 'Swiggy' })).toBeInTheDocument()
    expect(screen.getByText('Kakkanad')).toBeInTheDocument()
    expect(screen.getByText('288R+8PX, Echamuku, Kakkanad...')).toBeInTheDocument()
})