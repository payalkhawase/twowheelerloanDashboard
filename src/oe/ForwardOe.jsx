import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidenav from '../layout/Sidenav'

function ForwardOe() {


  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const [oe, setOe] = useState([])
    const [visibleCibil, setVisibleCibil] = useState({}) // State to track visible CIBIL info


    function getList() {
        axios.get("http://localhost:9191/enq/enquiry/getForwordOE")
        .then(res => {
            setOe(res.data)
        })
        .catch(err => {
            console.log("Error fetching data:", err)
        })
    }

    function checkCibil(customerId) {
        axios.put(`http://localhost:9193/oe/updateOeEnquiryStatus/${customerId}`)
        .then(res => {
            const updatedCibil = res.data.cibil;
            
            // Update the visibleCibil state with the new CIBIL data
            setVisibleCibil(prev => ({
                ...prev,
                [customerId]: updatedCibil
            }));
        })
        .catch(err => {
            console.log("Error fetching data: ", err)
        })
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div style={{display: 'flex'}}>
            <Sidenav/>
            <div className='container mt-4'>
                <table className='table table-bordered table-hover mt-3'>
                    <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Mobile no.</th>
                            <th>Alternate MobileNo.</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Pan no.</th>
                            <th>Adhaar no.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {oe.map((item, index) => {
                            return (
                                <React.Fragment key={item.id || index}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileNo}</td>
                                        <td>{item.alternateMobno}</td>
                                        <td>{item.city}</td>
                                        <td>{item.address}</td>
                                        <td>{item.pancardNo}</td>
                                        <td>{item.adharcardNo}</td>
                                        <td>
                                            <button className='btn btn-sm btn-primary me-2'>Edit</button>
                                            {item.enquiryStatus === "ForwardOe" && (
                                                <button 
                                                    onClick={() => checkCibil(item.customerId)} 
                                                    className="btn btn-sm btn-info me-2"
                                                >
                                                    Check Cibil
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                    {/* CIBIL Information Row */}
                                    {visibleCibil[item.customerId] && (
                                        <tr className="table-info">
                                            <td colSpan="12">
                                                <strong>CIBIL Score:</strong> {visibleCibil[item.customerId].cibilScore} | 
                                                <strong> Status:</strong> {visibleCibil[item.customerId].status} | 
                                                <strong> Remark:</strong> {visibleCibil[item.customerId].cibilRemark}
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default ForwardOe;
