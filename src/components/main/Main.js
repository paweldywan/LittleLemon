import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import DesksPage from "../pages/DesksPage";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/desks" element={<DesksPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;