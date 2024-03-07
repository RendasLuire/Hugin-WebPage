import { NavLink } from "react-router-dom"
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand "><RemoveRedEyeOutlinedIcon className="d-inline-block align-text-top " fontSize="large"/> HUGIN</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link " aria-current="page"><SpaceDashboardOutlinedIcon className="d-inline-block align-text-top "/> Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/finances"} className="nav-link "><MonetizationOnOutlinedIcon className="d-inline-block align-text-top "/> Finances</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/cars"} className="nav-link "><DirectionsCarFilledOutlinedIcon className="d-inline-block align-text-top "/> Cars</NavLink>
              </li>
            </ul>
            <div className="nav-item dropdown px-5">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><AccountCircleOutlinedIcon className="d-inline-block align-text-top " fontSize="large"/></a>
              <ul className="dropdown-menu">
                <li><NavLink to={"/settings"} className="dropdown-item "><SettingsOutlinedIcon className="d-inline-block align-text-top "/> Settings</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li><NavLink to={"/LogOut"} className="dropdown-item "><LogoutOutlinedIcon className="d-inline-block align-text-top "/> LogOut</NavLink> </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar
