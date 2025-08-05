// src/pages/SignupPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { AUTH_API_URL } from "../../utils/constant";
import {
  authRequestFailure,
  authRequestSuccess,
} from "../../store/slices/authSlice";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "customer",
  });
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${AUTH_API_URL}/register`, formData, {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(authRequestSuccess(response.data));
        toast.success("Account created successfully!");
        if (user.role === "provider") {
          navigate("/provider-setup");
        } else {
          navigate("/dashboard");
        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "customer",
        });
      } else {
        dispatch(authRequestFailure(response.data.message));
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthLayout>
      <div className="w-full max-w-xl shadow-lg rounded-xl shadow-gray-400 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Create an Account
          </h1>
          <p className="mt-2 text-gray-500">Join our community in Lucknow</p>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Custom Radio Button for Role */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              I am a:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center p-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 has-[:checked]:bg-teal-50 has-[:checked]:border-teal-500">
                <input
                  type="radio"
                  name="role"
                  value="customer"
                  checked={formData.role === "customer"}
                  onChange={handleChange}
                  className="mr-2 accent-teal-600"
                />
                Customer
              </label>
              <label className="flex items-center p-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 has-[:checked]:bg-teal-50 has-[:checked]:border-teal-500">
                <input
                  type="radio"
                  name="role"
                  value="provider"
                  checked={formData.role === "provider"}
                  onChange={handleChange}
                  className="mr-2 accent-teal-600"
                />
                Service Provider
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-bold text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer rounded-lg text-sm px-5 py-3 text-center transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-teal-600 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
