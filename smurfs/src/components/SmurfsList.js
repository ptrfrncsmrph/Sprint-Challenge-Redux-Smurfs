import React from "react"
import { connect } from "react-redux"
import { maybe, either } from "../lib"

import Smurf from "./Smurf"

const onLoading = <h3>Loading...</h3>

const onFailure = err => (
  <>
    <h3>Error</h3>
    <pre>{JSON.stringify(err, null, 2)}</pre>{" "}
  </>
)

const SmurfsList = ({ smurfs }) =>
  maybe(
    onLoading,
    either(onFailure, smurfs => (
      <ul>
        {smurfs.map(smurf => (
          <Smurf {...smurf} />
        ))}
      </ul>
    ))
  )(smurfs)

export default connect(({ smurfs }) => ({ smurfs }))(SmurfsList)
