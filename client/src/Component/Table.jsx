import axios from 'axios';
import  { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Table({ Deletuser, UpdatedUser ,loadData,setLoadData }) {
    const [data, setData] = useState([])

const  FeatchData=async()=> {
    try {
        const user = await axios.get('http://localhost:4000/api/get')
        const response = user.data
        setLoadData(false)
        setData(response)
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
       
        FeatchData();
        

    }, [loadData])


    return (
        <>
        
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Employees</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">add</i> <span>Add New Employee</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>salary</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.user?.map((elem, index) => {
                                return (
                                    <tr key={elem._id}>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.salary}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal"  onClick={() => Deletuser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}