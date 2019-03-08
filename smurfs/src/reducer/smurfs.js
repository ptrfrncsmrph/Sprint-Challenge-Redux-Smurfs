import { Nothing, Just, Left, Right } from "../lib"
import {
  SMURFS_FETCHING,
  SMURFS_FETCHED_SUCCESS,
  SMURFS_FETCHED_FAILURE
} from "../actions"

export default (state = Nothing, action) => {
  switch (action.type) {
    case SMURFS_FETCHING:
      return Nothing
    case SMURFS_FETCHED_SUCCESS:
      return Just.of(Right.of(action.payload))
    case SMURFS_FETCHED_FAILURE:
      return Just.of(Left.of(action.payload))
    default:
      return state
  }
}
