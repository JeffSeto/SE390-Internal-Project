import React from 'react';
import _ from "lodash"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header"
import Display from "./components/Display";

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showAlert: true,
      duplicateElective: false,
    }
  }

  onChange(electives) {
    const e = _.uniq(electives)
    this.setState({duplicateElective: e.length !== electives.length})

    fetch("http://localhost:5000/validate" , {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({courses: electives})

    }).then((res) => {
      return res.json();
    }).then((response) => {
      this.setState({showAlert: !response.is_valid})
    })
  }

  render() {
    const {showAlert, duplicateElective} = this.state

    const alert = (
      <div className={"alert alert-danger"}>You do not meet your program's science course requirements.</div>
    )

    const duplicateElectiveAlert = (
      <div className={"alert alert-danger"}>You have the same elective in two terms.</div>
    )

    return (
      <div className="app-container">
        <Header name={"Jeffrey"}/>
        {duplicateElective ? duplicateElectiveAlert : null}
        {showAlert && !duplicateElective ? alert : null}
        <Display onChange={(electives) => this.onChange(electives)}/>
      </div>
    )
  }
}
