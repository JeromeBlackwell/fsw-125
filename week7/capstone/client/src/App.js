import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Shippers from './Shippers'
import Shipment from './Shipments'
import './index.css'

function App() {
  const [shipper, setShipper] = useState([]);

  const getShipper = () => {
    axios.get('/Shippers')
    .then(res => {
      setShipper(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  const addShipper = newShipper => {
    axios.post('/Shippers', newShipper)
      .then(res => setShipper(prevShipper => [...prevShipper, res.data]))
      .catch(err => console.log(err))
  }
  
  const deleteJob = ShipperId => {
    axios.delete(`/Shippers/${ShipperId}`)
      .then(res => {
        setShipper(prevShipper => prevShipper.filter(shipper => shipper._id !== shipperId))
      })
      .catch(err => console.log(err))
  }

  const editShipper = (updates, shipperId) => {
    axios.put(`/Shippers/${shipperId}`, updates)
      .then(res => {
        setJob(prevShipper => prevShipper.map(shipper => shipper._id !== shipperId ? shipper : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getShipper();
  }, []);

  return (
    <div>
      <h1>Shipment Application Tracker</h1>
      <img className='img1' src='https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naXN0aWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='logo' />
      <h2>Job Submission Form</h2>
      <AddJob
        submit={addShipper}
        buttonText={"Post Shipment"}
      />
      <h2>List of Potential Shipment</h2>
      {shipper.map(shipper =>
        <shipper {...shipper}
        deleteShipper={deleteShipper}
        editShipper={editShipper}
        key={shipper._id}
        />)}
    </div>
  );
}

export default App;