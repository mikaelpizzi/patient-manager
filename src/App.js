import React, { useState } from "react";
import { Fragment } from "react";
import Appointment from "./components/Appointment";
import Form from "./components/Form";


function App() {

  // Appointment array  
  const [appointments, updateAppointments] = useState([]);
  
  // Function to store new appointment keeping track of previous ones
  const createAppointment = appointment => {
    updateAppointments([
      ...appointments,
      appointment
    ])
  }

  // Delete appointment by id
  const deleteAppointment = id => {
    const afterDelete = appointments.filter(appointment => appointment.id !== id);
    updateAppointments(afterDelete);
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
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
