import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate() // nav hook

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('') // clear old error

        try {
            const response = await fetch(
                'http://localhost:5000/api/auth/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                // bad response
                throw new Error(data.message || 'Login failed')
            }

            // success
            localStorage.setItem('token', data.token) // save token
            navigate('/dashboard') // go dashboard
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
                <h1 className="text-center text-3xl font-bold text-gray-800">
                    Admin Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-bold text-gray-600"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 w-full rounded-md border bg-gray-50 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-bold text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full rounded-md border bg-gray-50 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* show error */}
                    {error && (
                        <p className="text-center text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
