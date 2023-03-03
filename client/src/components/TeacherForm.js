import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


const TeacherForm = () => {
    let navigate = useNavigate()

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [dept, setDept] = useState("");

    const addTeacher = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:3001/create/teacher", {
            name: name,
            pass: pass,
            dept: dept
        }).then((response) => {
            const t_id = response.data.insertId
            navigate("/")
            window.alert(`NOTE: Your ID is: ${t_id}. Remember it, as it is required for login!!`)
        });
    };

    return (
        <>
            <div className="container mt-4">
                <h2 style={{ color: "aqua" }}>Teacher's Registration</h2>
                <form onSubmit={(e) => {addTeacher(e)}}>
                <div className="form-group text-light">
                    <label><h4>Name</h4></label>
                    <input required={true} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
                <div className="form-group text-light">
                    <label><h4>Password</h4></label>
                    <input required={true} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" onChange={(event) => {
                        setPass(event.target.value);
                    }} />
                    <div className="form-group text-light">
                        <label><h4>Department</h4></label>
                        <input required={true} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Department" onChange={(event) => {
                            setDept(event.target.value);
                        }} />
                    </div>
                </div>

                <button className="btn btn-info" type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}

export default TeacherForm