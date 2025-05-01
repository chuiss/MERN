//8. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

import React from 'react';

const SuccessChild = ({name, address, story} )=> {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Address: {address}</h3>

            <div>{story}</div>
        </div>
    );
}

export default SuccessChild;