import axios from "axios";
import React from "react";

import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

const Employee=(  {employee, update })=>{

    const deleteEmployee=(employeeNo) => {
      axios.delete(`${base_url}/employee/${employeeNo}`).then(
        (response)=>{
            toast.success("Employee Deleted");
            update(employeeNo);
        },
        (error) => {
            console.log(error);
            console.log("error");
            toast.error("Employee not deleted ! Server problem");
        }
    );


    }
  
    return (
        <div>
          <Card className="text-center">
            <CardBody>
              <CardTitle>{employee.employeeNo}</CardTitle>
              <CardSubtitle tag="h6" className="font-weight-bold">{employee.employeeName}</CardSubtitle>
              <CardText>{employee.department}</CardText>
              <Container className="text-center">
                <Button color="danger" onClick={()=> {
                  deleteEmployee(employee.employeeNo);
                }
                }>Delete</Button>&nbsp;&nbsp;
                {/* <Button color="warning ml-3">update</Button> */}
              </Container>
            </CardBody>
          </Card>
        </div>
      );
    };


export default Employee;