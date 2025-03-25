import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AboutUs from './AboutUs';
import BookingPage from './BookingPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import BookingForm from './BookingForm';

test('Renders the AboutUs heading', () => {
  render(<AboutUs />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingPage heading', () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
    );
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
})

test('Tests the selection of time dropdown list', () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
    );
  const selectElement = document.getElementById('res-time');
  const optionText = '20:30';

  fireEvent.change(selectElement, { target: { text: optionText } }); 
  expect(selectElement.text).toBe('20:30'); // Assert that the correct option is selected
})

describe('Verify Confirmation Page renders on form submission', () => {
  it('should render the new page content when the button is clicked', async () => {
    const mockSubmitForm = jest.fn();
    const mockDateSelection = jest.fn();

    render(
      <MemoryRouter>
      <Routes>
        <Route path="/" element={<BookingPage submitForm={mockSubmitForm} onChange={mockDateSelection}/>} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      </MemoryRouter>
      );
  
    // Get the button element
    const button = screen.getByText('Make your reservation');
    const nameField = document.getElementById('name')
    const emailField = document.getElementById('email');

    expect(button).toBeDisabled();
    const name = 'Hugh Mongus';
    const email = 'hugh.mongus@test.com'
  
    fireEvent.change(nameField, {target: {text: name}});
    fireEvent.change(nameField, {target: {value: name}});
    expect(nameField.text).toBe(name);
    expect(nameField.value).toBe(name);
    expect(button).toBeDisabled();

    fireEvent.change(emailField, {target: {text: email}});
    fireEvent.change(emailField, {target: {value: email}});
    expect(emailField.text).toBe(email);
    expect(emailField.value).toBe(email);
    expect(button).toBeEnabled();

    // Simulate a click event
    fireEvent.click(button);
    expect(mockSubmitForm).toHaveBeenCalled();

    
    // Wait for the new content to appear
    await waitFor(() => {
      // Assert that the new content is rendered
      expect(screen.getByText('Booking confirmed!')).toBeInTheDocument(); // Adjust the text as needed
    });
  });
})

test("Displays validation error message for invalid email", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText("Email");

  // Enter an invalid email
  fireEvent.change(input, { target: { value: "invalid-email" } });

  // Check for validation error message
  expect(screen.getByText("Invalid email address")).toBeInTheDocument();
});

test("Displays validation error message for invalid name", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText("Enter your name");

  // Enter an invalid email
  fireEvent.change(input, { target: { value: "123213213 werwerew" } });

  // Check for validation error message
  expect(screen.getByText("Invalid name string. Alphanumeric characters only.")).toBeInTheDocument();
});

test("Email error message does not show a message initially", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  // Ensure no validation message is shown at first
  expect(screen.queryByText(/Invalid email address/)).toBeNull();
});

test("Name error message does not show a message initially", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  // Ensure no validation message is shown at first
  expect(screen.queryByText(/Invalid name string. Alphanumeric characters only./)).toBeNull();
});
