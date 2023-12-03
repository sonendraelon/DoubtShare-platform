import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link to="/">Home</Link>
            <Link to="/student_login">Student</Link>
            <Link to="/tutor_login">Tutor</Link>
            <Link to="/login">Login</Link>
            
        </div>
    );
};

export default Navbar;