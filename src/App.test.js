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

test('The BookingForm component has the correct attributes for the date input field', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText('Choose date');
    expect(input).toBeRequired();
});

test('The BookingForm component has the correct attributes for the time input field', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText('Choose time');
    expect(input).toBeRequired();
});

test('The BookingForm component has the correct attributes for the number of guests input field', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText('Number of guests');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
});

test('The BookingForm component has the correct attributes for the occasion input field', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText('Occasion');
    expect(input).toBeRequired();
});