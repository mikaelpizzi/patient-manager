import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ createAppointment }) => {
  // Create appointments' state

  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  })

  // Error showing state

  const [ error, updateError ] = useState(false);

  const handleChange = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
    // console.log(e.target);
  }

  // Extract the values
  const { pet, owner, date, time, symptoms } = appointment;

  // When user submits the form
  const submitAppointment = e => {
    e.preventDefault();

    // Validate
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      updateError(true);
      return;
    }

    // Delete previous message
    updateError(false);

    // Assign ID
    appointment.id = uuid();

    // Create appointment
    createAppointment(appointment)

    // Reset form
    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })
  }

  return ( 
		<Fragment>
      <h2>Create Appointment</h2>

      {error
      ? <p className="alerta-error">All fields are required</p>
      : null}

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
          value={pet}
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

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
 
export default Form;