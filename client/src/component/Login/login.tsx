import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login form data:', {
            email,
            password,
          });
          window.open("/home");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email:</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            type="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                        Login
                    </button>
                </form>
                <div
                >
                    <Link to="/signup" >
                        <button className='w-full my-2 flex justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                            Sign Up
                        </button></Link>

                </div>
            </div>
        </div>
    );
};

export default Login;
