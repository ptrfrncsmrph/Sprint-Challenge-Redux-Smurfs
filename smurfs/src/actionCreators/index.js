import Axios from "axios"
import {
  SMURFS_FETCHING,
  SMURFS_FETCHED_SUCCESS,
  SMURFS_FETCHED_FAILURE
} from "../actions"

export const fetchSmurfsFrom = url => dispatch => {
  dispatch({ type: SMURFS_FETCHING })
  Axios.get(url)
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
