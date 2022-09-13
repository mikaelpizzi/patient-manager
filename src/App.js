import React, { useState } from "react";
import { Fragment } from "react";
import Appointment from "./components/Appointment";
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
            <h2>Manage Your Appointments</h2>

            {appointments.map(appointment => (
              <Appointment
                id={appointment.id} 
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
