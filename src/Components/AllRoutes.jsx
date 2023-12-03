import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";
import StudentSignup from "./StudentSignup";
import TutorSignup from "./TutorSignup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student_login" element={<StudentSignup />} />
        <Route path="/tutor_login" element={<TutorSignup />} />
      </Routes>
    </>
  );
};
export default AllRoutes;