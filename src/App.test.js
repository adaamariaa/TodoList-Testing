import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('app todo', () => {
render(<App />);
const desc = screen.getByPlaceholderText(/Description/i);
const date = screen.getByPlaceholderText(/date/i)

fireEvent.change(desc, { target: { value: "Go to coffee"}});
fireEvent.change(date, { target: { value: "24.03.2023"}});

const button = screen.getByText(/add/i);
fireEvent.click(button);


const tablecell = screen.getByText(/go to coffee/i)
expect(tablecell).toBeInTheDocument();

});