import { Navigate, Route, Routes } from "react-router-dom"
import "./styles/general.css"
import NavBar from "./Components/NavBar"
import FinancesPage from "./pages/FinancesPage"
import CarsPage from "./pages/CarsPage"
import SettingsPage from "./pages/SettingsPage"
import DashboardPage from "./pages/DashboardPage"

const HuginApp = () => {
  return (
    <div className="grafito">
        <NavBar/>
        <div className="container grafito">
          <Routes>
              <Route path="/" element={<DashboardPage /> } />
              <Route path="/finances" element={<FinancesPage /> } />
              <Route path="/cars" element={<CarsPage /> } />
              <Route path="/settings" element={<SettingsPage /> } />
              <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
    </div>
  )
}

export default HuginApp
