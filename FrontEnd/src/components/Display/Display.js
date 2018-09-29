import React from "react"
import c from "classnames"
import "./Display.css"
import Term from "../Term/Term";

export default class Display extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mandatoryCourses: null
    }
  }

  componentWillMount() {
    fetch("http://localhost:5000/courses", {
      method: "GET",
      mode: "no-cors"
    }).then((courses) => {
      console.log(courses)
    })
  }

  render() {
    const {mandatoryCourses} = this.state
    if(!mandatoryCourses) return null

    return (
      <div className={c("display-container")}>
        <Term term={"1A"} mandatoryCourses={mandatoryCourses[0]}/>
        <Term term={"1B"}/>
        <Term term={"2A"}/>
        <Term term={"2B"}/>
        <Term term={"3A"}/>
        <Term term={"3B"}/>
        <Term term={"4A"}/>
        <Term term={"4B"}/>
      </div>
    )
  }
}
