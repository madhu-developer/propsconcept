import React from 'react';

export const Info = (props) => {
    const { details } = props;
    const { brand,category,description, id} = details;

    return (
        <div>
            <h3>Info Component</h3>
           <ul>
                <li key={id}>
                    <h3>{brand}</h3>
                    <h5>{category}</h5>
                    <p>{description}</p>
                </li>
            </ul> 
        </div>
    );
};
