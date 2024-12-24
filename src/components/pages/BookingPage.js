import BookingForm from "../BookingForm";

const BookingPage = ({
    data,
    setData,
    availableTimesDispatch
}) => {
    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm
                data={data}
                setData={setData}
            />
        </div>
    );
};

export default BookingPage;