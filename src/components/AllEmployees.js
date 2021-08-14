import React, { useState,useEffect } from 'react'
import Employee from './Employee';

import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllEmployees = () => {

    useEffect( () => {
        document.title="All Employees";
    },[]);

    //function to get employees
    const getAllEmployees = () =>{
        axios.get(`https://github.com/UshmaPatel/springboot.git/employees`).then(
            (response) =>{
                //success
                console.log(response.data);
                toast.success("Employees has been loaded",{position : "bottom-center"}
                );
                setEmployees(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    const updateEmployees= (employeeNo) => {
        setEmployees(employees.filter((c) => c.employeeNo != employeeNo));
    };


    //calling loading employee function
    useEffect( () => {
        getAllEmployees();
    },[]);

    const [employees,setEmployees]=useState(
        [
            {employeeNo:"123",employeeName:"abc"},
            {employeeNo:"456",employeeName:"abcwe"}
        ]);

return(
<div>
    <h1>All Employees</h1>
    <p>List of employees are as follows</p>
    {
        employees.length > 0 ? employees.map((item)=>(
            <Employee key={item.employeeNo}  employee={item} update={
                updateEmployees
            }  />) 
    ):"No Employees"
    }
</div>
);

};

export default AllEmployees;
