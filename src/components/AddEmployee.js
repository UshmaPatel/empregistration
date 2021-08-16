import { findAllByDisplayValue } from "@testing-library/react";
import axios from "axios";
import React, { Fragment,useEffect,useState} from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from '../api/bootapi';


const AddEmployee= () =>{

    useEffect( () => {
        document.title="Add Employee";
    },[]);
    
    const [employee,setEmployee] = React.useState({});
    const [employeeNo, setEmployeeNo]= React.useState('');
    const [employeeNm, setEmployeeNm]= React.useState('');
    const [employeeDOJ, setEmployeeDOJ]= React.useState('');
    const [employeeDept, setEmployeeDept]= React.useState('');
    const [employeeSalary, setEmployeeSalary]= React.useState('');

    const [infoErr, setInfoErr] =React.useState('');
    const [employeeNoErr, setEmployeeNoErr]= React.useState('');
    const [employeeSalaryErr, setEmployeeSalaryErr]= React.useState('');

    //form handler function
    const handleForm=(e)=> {
        console.log(employee);
        const re = /^[0-9\b]+$/; //rules
        if( !employeeNo || !employeeNm || !employeeDOJ || !employeeDept || !employeeSalary)
        {
            setInfoErr('All fields are mandatory')
        }
        else if( !re.test(employeeNo))
        {
            setEmployeeNoErr('Employee Number must contain Numbers Only')
        }
        else if( !re.test(employeeSalary) )
        {
            setEmployeeSalaryErr('Employee Salary must contain Numbers Only')
        }
        else
        {
            postDatatoServer(employee);
        }
        e.preventDefault();
    };

    const cleanErrMssg = () =>
    {
        setInfoErr('')
        setEmployeeNoErr('')
        setEmployeeSalaryErr('')
    }

    //creating function to post data on server
    const postDatatoServer = (data)=>{
        axios.post(`/employee`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Employee has been added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong");
            }
        );
    };

   

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill the Employee Details</h1>
            <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="employeeNo"><b>Employee No</b></label>
                        <Input type="text"   name="employeeNo" placeholder="Employee No" maxLength="10"
                         onChange = { 
                            (e) => {  cleanErrMssg()
                                      setEmployee({...employee, employeeNo : e.target.value})
                                      setEmployeeNo(e.target.value)
                                    }
                         }
                        />
                         <div style={{color:"red"}}>{employeeNoErr}</div>
                </FormGroup>
                <FormGroup>
                    <label for="employeeName"><b>Employee Name</b></label>
                        <Input type="text" maxLength="100" name="employeeName" placeholder="Employee Name" maxLength="100" 
                        onChange = {
                            (e)=>{ cleanErrMssg()
                                   setEmployee({...employee, employeeName : e.target.value})
                                   setEmployeeNm(e.target.value)
                                }
                        }
                        />
                </FormGroup>
                <FormGroup>
                    <label for="dateOfJoining"><b>Date of Joining</b></label>
                        <Input type="date" maxLength="10" name="dateOfJoining" placeholder="Date Of Joining" maxLength="10"
                         onChange = {
                            (e)=>{  cleanErrMssg()
                                    setEmployee({...employee, dateOfJoining : e.target.value}) 
                                    setEmployeeDOJ(e.target.value)
                                }
                        }
                        />
                </FormGroup>
                <FormGroup>
                    <label for="department"><b>Department</b></label>
                        <Input type="select" name="department" maxLength="2" maxLength="2"
                         onChange = {
                            (e)=>{ cleanErrMssg()
                                   setEmployee({...employee, department : e.target.value})
                                   setEmployeeDept(e.target.value)
                                }
                        }>
                            <option value="AD">Administration</option>
                            <option value="IT">Inforamtion Technology</option>
                            <option value="HD">Help Desk</option>
                            <option value="HR">Human Resource</option>
                            <option value="OP">Operation</option>
                        </Input>
                </FormGroup>
                <FormGroup>
                    <label for="salary"><b>Salary</b></label>
                        <Input type="numer" name="salary" placeholder="salary" maxLength="10"
                         onChange = {
                            (e)=>{ cleanErrMssg()
                                   setEmployee({...employee, salary : e.target.value})
                                   setEmployeeSalary(e.target.value)
                                }
                        }
                        />
                    <div style={{color:"red"}}>{employeeSalaryErr}</div>

                </FormGroup>
                <div style={{color:"red"}}>{infoErr}</div>
                <Container className="text-center my-5">
                    <Button type="submit" color="success mr-3">save</Button>&nbsp;
                    <Button type="reset" color="warning ml-10">clear</Button>

                </Container>
            </Form>
        </Fragment>
    );
};



export default AddEmployee;