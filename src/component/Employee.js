import React from 'react';
const Employee = (props) => {
return (
        <div>
                <input type='text' onChange={props.changeName}/>
                <h2>Employee Name: {props.name}</h2>
        </div>
    )
}
export default Employee;