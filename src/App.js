import React, { useState } from "react";
import { Fragment } from "react";
import Form from "./components/Form";


function App() {

  // Appointment array  
  const [appointments, storeAppointment] = useState([]);
  
  // Function to store new appointment keeping track of previous ones
  const createAppointment = appointment => {
    storeAppointment([
      ...appointments,
      appointment
    ])
  }

  
  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
            createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
