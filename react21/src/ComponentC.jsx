import ComponentD from './ComponentD.jsx'
import React, {useContext} from 'react';
import { UserContext } from './ComponentA.jsx';
function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    )

}

export default ComponentC