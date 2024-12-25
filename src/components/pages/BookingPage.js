import BookingForm from "../BookingForm";

const BookingPage = ({
    data,
    setData,
    availableTimes,
    availableTimesDispatch,
    submitForm
}) => {
    return (
        <div>
            <h1>Book Page</h1>
            <BookingForm
                data={data}
                setData={setData}
                availableTimes={availableTimes}
                availableTimesDispatch={availableTimesDispatch}
                submitForm={submitForm}
            />
        </div>
    );
};

export default BookingPage;