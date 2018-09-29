import React from "react"
import c from "classnames"
import "./Display.css"
import Term from "../Term/Term";

export default class Display extends React.Component {

  render() {

    const mandatoryCourses = [
      ["SE 101", "MATH 117"],
      [""]
    ]

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
