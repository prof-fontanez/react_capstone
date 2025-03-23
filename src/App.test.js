import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AboutUs from './AboutUs';
import BookingPage from './BookingPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

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
    render(
      <MemoryRouter>
      <Routes>
        <Route path="/" element={<BookingPage submitForm={mockSubmitForm} />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      </MemoryRouter>
      );
  
    // Get the button element
    const button = screen.getByText('Make your reservation')

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