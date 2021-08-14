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
                    <li><b>Frontend : REACT JS</b></li>
                    <li><b>Backend : Spring Boot </b></li>
                    <li><b>Database integration : Hibernate/JPA </b></li>
                    <li><b>Open source database : MySQL</b></li>
                </ul>
            </Jumbotron>
        </div>
    )
};

export default About;
