import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Appointment from "./components/Appointment";
import Form from "./components/Form";


function App() {

  // Store appointments in Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  
  if (!initialAppointments) {
    initialAppointments = [];
  }
  
  // Appointment array  
  const [appointments, updateAppointments] = useState(initialAppointments);

  // Store when useEffect is triggered
  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem("appointments"));

    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments] )
  
  
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

  // Conditional message
  const title = appointments.length === 0 ? "There Are No appointments" : "Manage Your Appointments"
  
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
            <h2>{title}</h2>

            {appointments.map(appointment => (
              <Appointment
                key={appointment.id} 
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
