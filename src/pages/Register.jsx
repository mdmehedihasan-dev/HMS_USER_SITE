import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Register = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context)



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nid, setNid] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSingup = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://hospital-management-backend-287f.onrender.com/api/v1/user/patient/register",
          { firstName, lastName, email, phone, password, nid, dob, gender },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true)
          navigate("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNid("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }



  return (
    <>
      <div className="container form-component register-form">
        <h2>Sing-Up</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          suscipit accusamus cumque adipisci dolorum distinctio nulla facere
          explicabo sapiente quas.
        </p>

        <form onSubmit={handleSingup}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NID"
              value={nid}
              onChange={(e) => setNid(e.target.value)}
            />
            <input
              type="date"
              placeholder="date of brith"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option>Gender</option>
              <option value="male" >Male</option>
              <option value="female" >Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button style={{ cursor: "pointer" }} type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
