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
    console.log(e.target.value);
  }

  return ( 
		<Fragment>
      <h2>Create Appointment</h2>
      <form>
        <label>Pet's Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's Name"
          onChange={handleChange}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner's Name"
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Check In Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          placeholder="Describe The Symptoms"
          onChange={handleChange}
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