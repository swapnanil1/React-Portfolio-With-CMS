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
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-md space-y-6 rounded-lg bg-gray-800 p-8 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-white">
                    Dashboard Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-bold text-gray-200"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-bold text-gray-200"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>

                    {/* show error */}
                    {error && (
                        <p className="text-center text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-purple-600 py-3 font-bold text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
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
