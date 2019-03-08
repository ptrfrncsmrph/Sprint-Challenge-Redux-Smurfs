import React, { useState } from "react"

const emptySmurf = {
  name: "",
  age: "",
  height: ""
}

const SmurfForm = () => {
  const [{ name, age, height }, setSmurf] = useState(emptySmurf)
  const handleChange = ({ target: { name, value } }) => {
    setSmurf(smurf => ({ ...smurf, [name]: value }))
  }
  return (
    <>
      <h3>Add a smurf</h3>
      <form>
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
      </form>
    </>
  )
}

export default SmurfForm
