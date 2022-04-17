import Greeting from './Greeting';
import {render, screen} from '@testing-library/react'

test('checks if hello world text is present', () => {
    //arrange
    render(<Greeting/>);

    //act
    //in this example nothing

    //assert
    const helloWorldElement = screen.getByText(/hello world/i,{exact: false});
    expect(helloWorldElement).toBeInTheDocument();

})