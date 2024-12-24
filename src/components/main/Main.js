import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import DesksPage from "../pages/DesksPage";
import { useState, useReducer } from 'react';

export const updateTimes = date => {
    return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
};

export const initializeTimes = () => {
    return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
};

const Main = () => {
    const [booking, setBooking] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes);

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
                    />
                }></Route>
                <Route path="/desks" element={<DesksPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;