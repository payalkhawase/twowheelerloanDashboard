import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './template/Header'
import Home from './template/Home'
import AboutUs from './template/AboutUs'
import ContactUs from './template/ContactUs'
import EmiCheck from './template/EmiCheck'
import Enquiry from './template/Enquiry'
import Login from './template/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div className="container-fluid p-0">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 bg-primary text-white py-3 px-4 shadow">
            <Header />
          </div>
        </div>
      <Routes>
             <Route path="/home" element={<Home/>} />
              &nbsp;
              <Route path="/aboutus" element={<AboutUs />} />
              &nbsp;
              <Route path="/contactus" element={<ContactUs/>} />
              &nbsp;
              <Route path="/emicheck" element={<EmiCheck />} />
              &nbsp;
              <Route path="/enquiry" element={<Enquiry />} />
              &nbsp;
              <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
