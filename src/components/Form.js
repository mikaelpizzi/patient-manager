import React, { Fragment } from "react";

const Form = (props) => {
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
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner's Name"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
        />

        <label>Check In Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
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