import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('its good to see u', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText(/changed/i);
    expect(outputElement).toBeInTheDocument();
  })
  
  test('hiding its good to see u if button clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const greetingText = screen.queryByText('its good to see u', { exact: false });
    expect(greetingText).toBeNull();
  })
  
  
  
  
  })