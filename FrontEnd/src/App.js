import React from 'react';
import c from "classnames"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header"
import Display from "./components/Display";

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const alert = (
      <div className={"alert alert-danger"}>You do not meet your program's course requirements.</div>
    )

    return (
      <div className="app-container">
        <Header name={"Jeffrey"}/>
        {alert}
        <Display/>
      </div>
    )
  }
}
