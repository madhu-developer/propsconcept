import React from "react";


const Props = (props) => {
  const { data } = props;
  console.log(data);
  

  return (
    <div>
    <h3>Props Component</h3>
      <ul style={{ listStyleType: "none" }}>
      {data.map((eachUser)=>{
        const {name,mailid,id} = eachUser
        return(
          <li key={id}>
            <h1>{name}</h1>
            <p>{mailid}</p>
        </li>
        )
      })}
      </ul>
    </div>
  );
};

export default Props;
