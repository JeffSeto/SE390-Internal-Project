import React from "react"
import c from "classnames"
import _ from "lodash"
import "./Display.css"
import Term from "../Term/Term";

export default class Display extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mandatoryCourses: null,
      electives: null,
      courses: null
    }
  }

  componentWillMount() {
    fetch("http://localhost:5000/requirements", {
      method: "GET",
    }).then((response) => {
      return response.json();
    }).then((courses) => {
      const electives = []
      const mandatoryCourses = _.map(courses.value, (courseList) => {
        electives.push(1)
        return courseList.courses.split(",")
      })
      this.setState({mandatoryCourses: mandatoryCourses, electives: electives})
    })

    fetch("http://localhost:5000/courses", {
      method: "GET"
    }).then((response) => {
      return response.json()
    }).then((courses) => {
      this.setState({courses: courses.value})
    })
  }

  render() {
    const {mandatoryCourses, electives, courses} = this.state
    if(!mandatoryCourses) return null

    return (
      <div className={c("display-container")}>
        <Term term={"1A"} mandatoryCourses={mandatoryCourses[0]} numElectives={electives[0]} courses={courses}/>
        <Term term={"1B"} mandatoryCourses={mandatoryCourses[1]} numElectives={electives[1]} courses={courses}/>
        <Term term={"2A"} mandatoryCourses={mandatoryCourses[2]} numElectives={electives[2]} courses={courses}/>
        <Term term={"2B"} mandatoryCourses={mandatoryCourses[3]} numElectives={electives[3]} courses={courses}/>
        <Term term={"3A"} />
        <Term term={"3B"}/>
        <Term term={"4A"}/>
        <Term term={"4B"}/>
      </div>
    )
  }
}
