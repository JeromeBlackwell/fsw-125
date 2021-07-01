import React, { useState } from 'react'
import Shipments from './Shipments';
import './index.css'

const Shipment = (props) => {
    const { 
        company, 
        goods, 
        type, 
        date, 
        status, 
        _id,
        deleteShipment,
        editShipment
    } = props;

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className="ShipmentCard">
            { 
                !editToggle ?
                <>
                    <h3>{company}</h3>
                    <h4>{goods} </h4>
                    <h4>Applied: {type ? "Yes" : "No"}</h4>
                    <h4>Date Applied: {date}</h4>
                    <h4>Status: {status}</h4>
                    <button className='deleteB' onClick={() => deleteShipment(_id)}>Remove</button>
                    <button className='editB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Edit</button>
                </>
                :
                <>
                    <AddShipment
                        toggle={setEditToggle} submit={editShipment} {...props}buttonText="Submit"/> 
                
                    <button className='cancelEditB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Shipment