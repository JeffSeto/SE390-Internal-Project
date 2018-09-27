import React from 'react';
import c from "classnames"
import styles from './App.css'
import Header from "./components/Header"
import Display from "./components/Display";

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <Header name={"Jeffrey"}/>

        <Display/>
      </div>
    )
  }
}
