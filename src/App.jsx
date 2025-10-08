import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/Login"
import { DashBoard } from "./pages/DashBoard"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/dashboard" element={<DashBoard />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
