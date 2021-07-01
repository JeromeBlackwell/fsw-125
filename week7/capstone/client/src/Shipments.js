import React, { useState } from 'react';
import './index.css';

const Shipment = (props) => {
    const initInputs = {
        company: props.company || "",
        goods: props.goods ||  "",
        type: props.type || "",
        date: props.date || "",
        status: props.status || ""
    }
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = ((e) => {
        e.preventDefault();
        if (inputs.type === "Yes") {
          inputs.type = true;
        } else {
          inputs.type = false;
        }
        props.submit(inputs, props._id);
        setInputs(initInputs);
      });

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name='company'
                value={inputs.company}
                onChange={handleChange}
                placeholder='Company Name'
            />
            <input
                type='text'
                name='goods'
                value={inputs.goods}
                onChange={handleChange}
                placeholder=' Goods'
            />
            <br /> <br />
            <label>Applied:</label> 
            <br />
            Yes: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "Yes"};
            })} value={inputs.type} checked={inputs.type === "Yes" ? true : false} /> 
            No: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "No"};
            })} value={inputs.type} checked={inputs.type === "No" ? true : false}/> 
            <br /> <br />
            <input
                type='number'
                name='date'
                value={inputs.date}
                onChange={handleChange}
                placeholder='Date Applied MMDDYY'
            />
            <input
                type='text'
                name='status'
                value={inputs.status}
                onChange={handleChange}
                placeholder='Status'
            />
            <br />
            <button className='submitB'>{props.buttonText}</button>
        </form>
    );
}

export default Shipment