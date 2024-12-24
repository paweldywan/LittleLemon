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
    expect(initializeTimes()).toEqual([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);
});

test('The updateTimes function returns the same value that is provided in the state', () => {
    expect(updateTimes()).toEqual([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);
});

test('The BookingsForm component can be submitted by the user', () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeInTheDocument();
});