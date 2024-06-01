import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link , useNavigate} from "react-router-dom";
import { LOGIN_URL } from "../constants/apis.js";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios"
import {loginSuccess, loginFailure, loginStart} from '../Redux/Slices/userSlices.js'


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, "=====>>>>> email");
  console.log(password, "=====>>>>> password");

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const loginHandlerWithMongoDb = async (e) => {
    e.preventDefault();
    if ( email === "" ||  password === "" ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing Fields!",
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters long!",
      });     
    } else {
      dispatch(loginStart());
      const userCredential = {
        email,
        password,
      };

      console.log(userCredential);

      try {
        const response = await axios.post(`/api/${LOGIN_URL}`, userCredential);
        console.log(response?.data);
        // dispatch(loginSuccess(response?.data));
        if(response.data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${response.data.message}`,
          });
          
        } else {
          dispatch(loginSuccess(response?.data?.data));
          navigate("/app");
        }
        
      } catch (error) {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.response.data.message}`,
          }); 
        }
        console.log(error);
        dispatch(loginFailure(error.message));
      }
    }
  };
  return (
    <div className="bg-login-bg-image w-[60%] flex justify-center">
      <div className="flex justify-center w-full items-center gap-[4rem] bg-[#22222280] px-12 py-20">
        <div className="w-[50%] p-10 shadow-lg bg-white rounded-lg">
          <h1 className="text-4xl block  font-bold text-theme-red text-center">
            LOG IN
            <br />
          </h1>
          <div className="mt-4 relative">
            <label
              className="  text-xl text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              required
              onChange={(email) => setEmail(email.target.value)}
              className=" w-full text-xl border mt-4 px-4  py-6 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              placeholder=""
            />
          </div>
          <div className="mt-5 relative">
            <label
              className="absolute text-xl text-theme-red top:[-1] left-1 bg-white px-3 py-1   "
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              required
              onChange={(pass) => setPassword(pass.target.value)}
              className=" w-full text-xl border  mt-4  py-6 px-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder=""
            />
          </div>

          <div className="mt-8 mb-8">
            <button
              onClick={loginHandlerWithMongoDb}
              type="submit"
              className='border-2 text-3xl overflow-hidden  w-full   font-semibold className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all  before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300"'
            >
              LOG IN
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-theme-red text-2xl mb-2">Forget Password?</p>
            <p className="text-2xl">
              Don't have an Account?{" "}
              <Link to={"/register"} className="text-theme-red">
                SignUp
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[50%] text-center">
          <img src={logo} alt="" />
          <p className="text-center text-xl text-white font-400">
            Make a CV to define yourself The right away. Meet thousands of job
            announcements and employers by the help of your profile with a
            private extension, which you can share at all social media
            environments.
          </p>
          <Link to={"/register"}>
            <button className='bg-white  overflow-hidden w-1/3 p-4 text-2xl rounded-2xl mt-10 className="text-[1.6rem] leading-[1.6rem] relative z-10  px-[2rem] py-[1.2rem]  text-theme-red hover:text-white transition-all  before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-red before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300"'>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
