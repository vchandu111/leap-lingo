import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hiImage from "../assets/images/banner.webp";
import owlImage from "../assets/images/owl.svg";
import lingoImage from "../assets/images/lingo.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiKey = "AIzaSyAl3XZsqfq5H0w03B_wzGb0WBmG5Mln56I";

  const handleSignup = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    };

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        requestOptions
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.idToken);

        toast.success("Signup successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        console.error(result.error.message);
        toast.error("Error: " + result.error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Signup error", error);
      toast.error("Signup failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <ToastContainer />

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-12">
          <div className="flex items-center mb-8">
            <img src={owlImage} alt="Owl" className="h-12 w-12 mr-4" />
            <img src={lingoImage} alt="Lingo" className="h-8" />
          </div>
          
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome!</h2>
          <p className="text-gray-600 mb-8">Create your account to get started</p>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-400 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-400 transition duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-red-500 hover:text-red-600 transition duration-200"
            >
              Log In
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-red-600/30 mix-blend-multiply"></div>
          <img
            src={hiImage}
            alt="Shopping Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
