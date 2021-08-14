import React ,{useEffect}from 'react';

import { Jumbotron } from 'reactstrap';

const Home=()=>{

    useEffect( () => {
        document.title="Home";
    },[]);
    

    return (
        <div>
            <Jumbotron>
                <h1 className="text-center my-5">Welcome</h1>
            </Jumbotron>
        </div>
    )
};

export default Home;