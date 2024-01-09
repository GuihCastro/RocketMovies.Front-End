import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";
import { Review } from "../pages/Review";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/new" element={ <New /> } />
            <Route path="/review/:id" element={ <Review /> } />
        </Routes>
    );
};