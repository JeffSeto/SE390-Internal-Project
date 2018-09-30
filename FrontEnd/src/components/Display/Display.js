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
      numElectives: null,
      electives: Array(8).fill([]),
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
        electives.push(courseList.electives)
        return courseList.courses.split(",")
      })
      this.setState({mandatoryCourses: mandatoryCourses, numElectives: electives})
    })

    fetch("http://localhost:5000/courses", {
      method: "GET"
    }).then((response) => {
      return response.json()
    }).then((courses) => {
      this.setState({courses: courses.value})
    })
  }

  updateElectives(e, i) {
    const {electives} = this.state;
    const {onChange} = this.props
    electives[i] = e
    onChange(_.flatten(electives))
    this.setState(electives[i]);
  }

  render() {
    const {mandatoryCourses, numElectives, courses, electives} = this.state
    if(!mandatoryCourses) return null

    return (
      <div className={c("display-container")}>
        <Term term={"1A"} mandatoryCourses={mandatoryCourses[0]} numElectives={numElectives[0]} courses={courses} onChange={(electives) => this.updateElectives(electives, 0)}/>
        <Term term={"1B"} mandatoryCourses={mandatoryCourses[1]} numElectives={numElectives[1]} courses={courses} onChange={(electives) => this.updateElectives(electives, 1)}/>
        <Term term={"2A"} mandatoryCourses={mandatoryCourses[2]} numElectives={numElectives[2]} courses={courses} onChange={(electives) => this.updateElectives(electives, 2)}/>
        <Term term={"2B"} mandatoryCourses={mandatoryCourses[3]} numElectives={numElectives[3]} courses={courses} onChange={(electives) => this.updateElectives(electives, 3)}/>
        <Term term={"3A"} mandatoryCourses={mandatoryCourses[4]} numElectives={numElectives[4]} courses={courses} onChange={(electives) => this.updateElectives(electives, 4)}/>
        <Term term={"3B"} mandatoryCourses={mandatoryCourses[5]} numElectives={numElectives[5]} courses={courses} onChange={(electives) => this.updateElectives(electives, 5)}/>
        <Term term={"4A"} mandatoryCourses={mandatoryCourses[6]} numElectives={numElectives[6]} courses={courses} onChange={(electives) => this.updateElectives(electives, 6)}/>
        <Term term={"4B"} mandatoryCourses={mandatoryCourses[7]} numElectives={numElectives[7]} courses={courses} onChange={(electives) => this.updateElectives(electives, 7)}/>
      </div>
    )
  }
}
