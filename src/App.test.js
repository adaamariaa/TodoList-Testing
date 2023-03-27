import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('app todo', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText(/Description/i);
  const date = screen.getByPlaceholderText(/date/i)

  fireEvent.change(desc, { target: { value: "Go to coffee"}});
  fireEvent.change(date, { target: { value: "24.03.2023"}});

  const addButton = screen.getByText(/add/i);
  fireEvent.click(addButton);


  const addingTablecell = screen.getByText(/go to coffee/i)
  expect(addingTablecell).toBeInTheDocument();

});

test('clear todos', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText(/Description/i);
  const date = screen.getByPlaceholderText(/date/i)

  fireEvent.change(desc, { target: { value: "Go to coffee"}});
  fireEvent.change(date, { target: { value: "24.03.2023"}});

  const addButton = screen.getByText(/add/i);
  fireEvent.click(addButton);


  const addingTablecell = screen.getByText(/go to coffee/i)
  expect(addingTablecell).toBeInTheDocument();

  const clearButton= screen.getByText(/clear/i);
  fireEvent.click(clearButton);


  expect(desc).toHaveValue("");
});