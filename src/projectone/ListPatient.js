import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import Patient from '../projectone/Patient'

const ListPatient = () => {

    const [employees, setEmployees] = useState([])

    // useEffect(() => {

    //     getAllEmployees();
    // }, [])

    // const getAllEmployees = () => {
    //     // EmployeeService.getAllEmployees().then((response) => {
    //         setEmployees(response.data)
    //         console.log(response.data);
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    // }

    // const deleteEmployee = (employeeId) => {
    //    EmployeeService.deleteEmployee(employeeId).then((response) =>{
    //     getAllEmployees();

    //    }).catch(error =>{
    //        console.log(error);
    //     })
        
    // }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Patient </h2>
            <button to = "/add-employee" className = "btn btn-primary mb-2" > Add Patient </button>
            <table className="table table-bordered table-striped">
            {/* <table className="navbar navbar-expand-md navbar-dark bg-dark"> */}

                <thead>
                    <th> Patient Id </th>
                    <th> Title</th>
                    <th> Patient First Name </th>
                    <th> Patient Last Name </th>
                    <th> Patient Address </th>
                    <th> Patient Email Id </th>
                    <th> Patient MobileNo </th>
                    <th> Patient Date Of Birth</th>
                    <th> Gender</th>
                    <th> Actions </th>
                </thead>
                <tbody>
                {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstname} </td>
                                <td>{employee.lastname}</td>
                                <td>{employee.emailid}</td>
                                <td>
                                    <button className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</button>
                                    <button className = "btn btn-danger" 
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPatient