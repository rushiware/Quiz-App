import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  let navigate = useNavigate()

  const [prn, setPrn] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [branch, setBranch] = useState("");

  const addStudent = (e) => {
    e.preventDefault()

    Axios.post("http://localhost:3001/create/student", {
      prn: prn,
      name: name,
      branch: branch,
      pass: pass
    }).then(() => {
      navigate("/")
      window.alert(`Congratulations!! You have successfully registered!`)
    });
  };

  return (
    <>
      <div className="container mt-4">
        <form onSubmit={(e) => {addStudent(e)}}>
        <h2 className='text-warning'>Student's Registration</h2>
        <div className="form-group text-light">
          <label><h4>PRN</h4></label>
          <input required={true} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PRN" onChange={(event) => {
            setPrn(event.target.value);
          }} />
        </div>
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
            <label><h4>Branch</h4></label>
            <input required={true} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Branch" onChange={(event) => {
              setBranch(event.target.value);
            }} />
          </div>
        </div>

        <button className="btn btn-warning" type='submit'>Register</button>
        </form>
      </div>
    </>
  )
}

export default StudentForm