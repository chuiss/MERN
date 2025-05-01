//9. create SuccessStory as another component, pass this as props in SuccessChild from Success component

import React from 'react';

const SuccessStory = ({}) => {
    return (
        <div>
            <h2>Success Story</h2>
            <p> John started with a dream and faced many challenges. Through persistence and hard work,
            he built a company that now inspires thousands around the world.</p>
        </div>
    );

}
export default SuccessStory;
