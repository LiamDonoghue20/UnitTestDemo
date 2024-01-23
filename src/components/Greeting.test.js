import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World!', () => {
        //Arrange
        render(<Greeting/>)
    
        //Act
    
        //Assert
        const helloWorldElement = screen.getByText('Hello world!');
        expect(helloWorldElement).toBeInTheDocument();
    })
    test('renders Its good to see you', () => {
        //Arrange
        render(<Greeting/>)
    
        //Act
    
        //Assert
        const paragraphElement = screen.getByText("It's good to see you!");
        expect(paragraphElement).toBeInTheDocument();
    })
    test('renders text change on button click', () => {
        //Arrange
        render(<Greeting/>)
    
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const helloWorldElement = screen.getByText("Changed!");
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders text removed on button click', () => {
        render(<Greeting/>)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const paragraphElement = screen.queryByText("It's good to see you!");

        expect(paragraphElement).not.toBeInTheDocument();

    })

})
