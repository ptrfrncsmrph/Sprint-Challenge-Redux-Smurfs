import React, { useEffect } from "react"
import { connect } from "react-redux"

import SmurfsList from "./SmurfsList"
import SmurfForm from "./SmurfForm"
import { fetchSmurfs } from "../actionCreators"

import "./App.css"

const App = ({ fetchSmurfs }) => {
  useEffect(fetchSmurfs, [])
  return (
    <main className="App">
      <header>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </header>
      <nav />
      <SmurfsList />
      <SmurfForm />
    </main>
  )
}

export default connect(
  null,
  { fetchSmurfs }
)(App)
