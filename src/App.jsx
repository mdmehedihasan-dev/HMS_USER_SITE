/* eslint-disable react-hooks/exhaustive-deps */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./layout/Main";
import { Context } from "./main";
import { useContext, useEffect } from "react";
import axios from "axios";
import About from "./pages/About";

const App = () => {

  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context)

  useEffect(()=>{
    const featchUSer = async()=>{
      try {
        const response = await axios.get('https://hospital-management-backend-287f.onrender.com/api/v1/user/patient/me',{
          withCredentials:true
        })
        setIsAuthenticated(true)
        setUser(response.data.user)
      } catch (error) {
        setIsAuthenticated(false)
        setUser({})
      }
    }
    featchUSer()
  },[isAuthenticated])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>}>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
