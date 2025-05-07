import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import Dashboard from "./template/Dashboard";
import AboutUs from "./template/AboutUs";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import Dashboard from "./templa/Dashboard";
//import Users from "./pages/Users";
//import Settings from "./pages/Settings";

function App() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
          <h4>Admin</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Dashboard</Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link text-white text-start w-100"
                onClick={() => setOpenMenu(!openMenu)}
                aria-controls="submenu"
                aria-expanded={openMenu}
              >
                Users ▾
              </button>
              <Collapse in={openMenu}>
                <ul id="submenu" className="nav flex-column ms-3">
                  <li className="nav-item">
                    <Link to="/users" className="nav-link text-white">All Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/users/settings" className="nav-link text-white">User Settings</Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link text-white">Settings</Link>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<AboutUs />} />
            <Route path="/" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
