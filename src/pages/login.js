import React, { useState } from "react";
import { Button, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseconfig";// Importing Firebase auth

function Login() {
    // States for email, password, and error
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset error before new attempt

        // console.log("Email:", email);  // Log email for debugging
        // console.log("Password:", password);  // Log password for debugging

        try {
            // Firebase Authentication for sign-in
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            navigate("/studentform"); // Navigate to student form after successful login
        } catch (err) {
            console.error(err);  // Log the error to the console for debugging
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-orange-300">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-white mb-8">
                Welcome To <span className="text-orange-400">Learning Management System</span>
            </h1>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Login</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Error Message */}

                <form onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <Button
                        onClick={handleLogin}
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </Button>
                    </div>

                    {/* Forgot Password */}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Forgot your password?{" "}
                        <Link to="#" className="text-blue-500 hover:underline">
                            Reset here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
