import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Button } from '@/components/Button/Button'

describe('Button component with asChild prop', () => {
  function AuxLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a data-testid='aux-link' {...props}>
        Link Child
      </a>
    )
  }

  it('renders the child as a link element and passes props correctly', () => {
    const handleClick = jest.fn()
    render(
      <Button asChild onClick={handleClick}>
        <AuxLink href='/test' />
      </Button>
    )
    const link = screen.getByTestId('aux-link')
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('triggers onClick handler when the child link is clicked', () => {
    const handleClick = jest.fn()
    render(
      <Button asChild onClick={handleClick}>
        <AuxLink href='/test' />
      </Button>
    )
    const link = screen.getByTestId('aux-link')
    fireEvent.click(link)
    expect(handleClick).toHaveBeenCalled()
  })
})
