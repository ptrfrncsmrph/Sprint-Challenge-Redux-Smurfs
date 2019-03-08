import smurfs from "./smurfs"

const combineReducers = obj => (initialState = {}, action) =>
  Object.entries(obj).reduce(
    (state, [key, reducerFn]) => ({
      ...state,
      [key]: reducerFn(state[key], action)
    }),
    initialState
  )

export default combineReducers({
  smurfs
})
