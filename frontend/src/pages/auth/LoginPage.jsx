// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
        // Add your login logic here
    };

    return (
        <AuthLayout>
            <div className="w-full max-w-xl shadow-lg rounded-xl shadow-gray-400 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
                    <p className="mt-2 text-gray-500">Log in to continue with LocalTrust</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-sm font-medium text-teal-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="w-full font-bold text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center transition-all duration-300">
                        Log In
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-teal-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;