import Axios from "axios"
import {
  SMURFS_FETCHING,
  SMURFS_FETCHED_SUCCESS,
  SMURFS_FETCHED_FAILURE
} from "../actions"

const API_ENDPOINT = "http://10.0.0.53:3333/smurfs/"

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_FETCHING })
  Axios.get(API_ENDPOINT)
    .then(({ data }) =>
      dispatch({
        type: SMURFS_FETCHED_SUCCESS,
        payload: data
      })
    )
    .catch(err =>
      dispatch({
        type: SMURFS_FETCHED_FAILURE,
        payload: err
      })
    )
}

export const addSmurf = smurf => dispatch => {
  // Leaving this as SMURFS_FETCHING until I add more action types
  // (might not even need to change, depending on desired UX)
  dispatch({ type: SMURFS_FETCHING })
  Axios.post(API_ENDPOINT, smurf)
    .then(({ data }) =>
      dispatch({
        type: SMURFS_FETCHED_SUCCESS,
        payload: data
      })
    )
    .catch(err =>
      dispatch({
        type: SMURFS_FETCHED_FAILURE,
        payload: err
      })
    )
}
