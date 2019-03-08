import React, { useState } from "react"
import { connect } from "react-redux"
import { addSmurf } from "../actionCreators"

const emptySmurf = {
  name: "",
  age: "",
  height: ""
}

const SmurfForm = ({ addSmurf }) => {
  const [{ name, age, height }, setSmurf] = useState(emptySmurf)
  const handleChange = ({ target: { name, value } }) => {
    setSmurf(smurf => ({ ...smurf, [name]: value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    addSmurf({ name, age: Number(age), height })
    setSmurf(emptySmurf)
  }
  return (
    <>
      <h3>Add a smurf</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter smurf name"
        />
        <input
          name="age"
          type="text"
          value={age}
          onChange={handleChange}
          placeholder="Enter smurf age"
        />
        <input
          name="height"
          type="text"
          value={height}
          onChange={handleChange}
          placeholder="Enter smurf height"
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm)
