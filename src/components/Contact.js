import React ,{useEffect}from 'react';

import { Jumbotron } from 'reactstrap';

const About=()=>{

    useEffect( () => {
        document.title="About";
    },[]);
    

    return (
        <div>
            <Jumbotron>
                <ul className="my-5">
                    <li><b>Ushma Joshi : +971 509074803</b></li>
                    <li><b>I really enjoyed while developing this Web Application</b></li>
                    <li><b>I liked to learn new technolgies</b></li>
                </ul>

            </Jumbotron>
        </div>
    )
};

export default About;
