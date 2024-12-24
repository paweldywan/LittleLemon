import { useState } from 'react';

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];

const BookingForm = () => {
    const [data, setData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    }

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onChange={handleChange} />
        </form>
    );
};

export default BookingForm;