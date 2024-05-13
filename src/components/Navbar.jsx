import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { GiHamburgerMenu } from "react-icons/gi"
import { Context } from "../main"


const Navbar = () => {
    const [show, setShow] = useState(false)
    const {isAuthenticated,setIsAuthenticated} = useContext(Context)
    const navigate = useNavigate()
    const hanldeLogOut =async ()=>{
        await axios.get('https://hospital-management-backend-287f.onrender.com/api/v1/user/patient/logout' ,{
            withCredentials:true
        }).then((res)=>{
            toast.success(res.data.message)
            setIsAuthenticated(false)
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

    const handleLogin = () =>{
        navigate('/login')
    }
  
    return (
    <>
      <nav className={"container"}>
          
        <div style={{cursor:"pointer"}} className="logo">
                <h1>HCH❤️‍🩹</h1> 
        </div>
           
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link  to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link  to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link   to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button style={{cursor:"pointer"}} className="logoutBtn btn" onClick={hanldeLogOut}>
              LOGOUT
            </button>
          ) : (
            <button style={{cursor:"pointer"}} className="loginBtn btn" onClick={handleLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  )
}

export default Navbar