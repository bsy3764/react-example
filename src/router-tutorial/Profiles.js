import React from "react";
import { Link } from "../../node_modules/react-router-dom/index";
import { Route, Routes, Outlet } from "react-router";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to='/profiles/velopert'>velopert</Link>
                </li>
                <li>
                    <Link to='/profiles/gildong'>gildong</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Profiles;