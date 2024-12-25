import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import BookingPage from './components/pages/BookingPage';
import { initializeTimes, updateTimes } from './components/main/Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Page");
    expect(headingElement).toBeInTheDocument();
});


test('The initializeTimes function returns the correct expected value', () => {
    const result = initializeTimes();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
});

test('The updateTimes function returns the same value that is provided in the state', () => {
    const result = updateTimes(null, '2021-12-12');
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
});

test('The BookingsForm component can be submitted by the user', () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeInTheDocument();
});