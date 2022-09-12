import React, { Fragment, useState } from "react";

const Form = (props) => {
  // Create appointments' state

  const [appointment, updateAppointment] = useState({
    name: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  })

  const handleChange = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
    // console.log(e.target);
  }

  // Extract the values
  const { name, owner, date, time, symptoms } = appointment;

  // When user submits the form
  const submitAppointment = e => {
    e.preventDefault();

    // Validate

    // Assign ID

    // Create appointment

    // Reset form
  }

  return ( 
		<Fragment>
      <h2>Create Appointment</h2>

      <form
        onSubmit={submitAppointment}
      >
        <label>Pet's Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's Name"
          onChange={handleChange}
          value={name}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner's Name"
          onChange={handleChange}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Check In Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          placeholder="Describe The Symptoms"
          onChange={handleChange}
          value={symptoms}
        >
        </textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Add Appointment
        </button>
      </form>
		</Fragment>
	);
}
 
export default Form;