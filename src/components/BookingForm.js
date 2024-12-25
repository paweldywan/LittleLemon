const BookingForm = ({
    data,
    setData,
    availableTimes,
    availableTimesDispatch,
    submitForm
}) => {
    const handleChange = (e, callback) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });

        if (callback) {
            callback(e.target.value);
        }
    };

    return (
        <>
            <h1>Book Now</h1>
            <form
                style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                onSubmit={e => {
                    e.preventDefault();

                    submitForm(data);
                }}
            >
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required onChange={e => handleChange(e, availableTimesDispatch)} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    {availableTimes?.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" required onChange={handleChange}>
                    <option value="">Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
};

export default BookingForm;