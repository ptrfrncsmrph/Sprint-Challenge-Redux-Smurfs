import React, { useEffect } from "react"
import { connect } from "react-redux"

import SmurfsList from "./SmurfsList"
import SmurfForm from "./SmurfForm"
import { fetchSmurfsFrom } from "../actionCreators"

import "./App.css"

const API_ENDPOINT = "http://10.0.0.53:3333/smurfs/"

const App = ({ fetchSmurfsFrom }) => {
  useEffect(() => {
    fetchSmurfsFrom(API_ENDPOINT)
  }, [])
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
  { fetchSmurfsFrom }
)(App)
