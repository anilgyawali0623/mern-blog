import { Alert, Button, Label, Spinner, TextInput, Popover } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInSuccess, signInStart } from "../user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
import { FiEyeOff ,FiEye } from "react-icons/fi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("please fill abkjbolv,cmll the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto p-3 flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r
             from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
            >
              News
            </span>
            Website
          </Link>
          <p className="text-sm mt-5 ">
             welcome to the page
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your Email " />
              <TextInput
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <Label value="Your Password " />
                  <div className="icons"style={{
                    position:"relative",
                     height:"100%"
                  }}>

              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                onChange={handleChange}
                // rightIcon={FiEye}
                
                />
                 <div className="icon" style={{position:"absolute",top:"12px", right:"5px", cursor:"pointer"}}    onClick={togglePasswordVisibility}> {showPassword ? <FiEyeOff /> : <FiEye />}</div>
                </div>
               
            </div>
            
          
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span>loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="mt-5 flex gap-2 text-sm">
            <span> dont have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
