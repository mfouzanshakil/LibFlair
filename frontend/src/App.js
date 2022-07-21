import React from "react";
import "./components/Styling.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/U_Profile";
import HomePage from "./components/HomePage";
import MyLoans from "./components/U_MyLoans";
import NewReservation from "./components/U_NewReservation";
import DeleteReservation from "./components/U_DeleteReservation";
import Create from "./components/A_Create";
import View from "./components/A_View";
import Update from "./components/A_Update";
import Delete from "./components/A_Delete";
import AdminLogin from "./components/AdminLogin";
import Login from "./components/UserLogin";
import Signup from "./components/UserSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* User Routes */}
          <Route path="/loans" element={<MyLoans />} />
          <Route path="/newReservation" element={<NewReservation />} />
          <Route path="/deleteReservation" element={<DeleteReservation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* Admin Routes */}
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          {/* Redirect */}
          {/* <Route path="/notfound" element={<NotFound/>}/> */}
          {/* <Redirect to "/notfound" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
