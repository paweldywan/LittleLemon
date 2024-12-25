import { Routes, Route, useNavigate } from "react-router";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import DesksPage from "../pages/DesksPage";
import { useState, useReducer } from 'react';
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { fetchAPI, submitAPI } from "../../api";

export const updateTimes = (_state, date) => {
    return fetchAPI(new Date(date));
};

export const initializeTimes = () => {
    return fetchAPI(new Date());
};

const Main = () => {
    const [booking, setBooking] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    const submitForm = formData => {
        const result = submitAPI(formData);

        if (result) {
            navigate('/confirmed-booking');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={
                    <BookingPage
                        data={booking}
                        setData={setBooking}
                        availableTimes={availableTimes}
                        availableTimesDispatch={availableTimesDispatch}
                        submitForm={submitForm}
                    />
                }></Route>
                <Route path="/desks" element={<DesksPage />}></Route>
                <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
};

export default Main;