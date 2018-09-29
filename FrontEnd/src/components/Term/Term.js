import React from "react"
import _ from "lodash"
import c from "classnames"
import "./Term.css"
import Dropdown from "../Dropdown/Dropdown";

export default class Term extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      electives: null,
      courses: null
    }
  }


  render() {
    const {term, mandatoryCourses, numElectives, courses} = this.props
    const {electives} = this.state

    const mandatoryCourseDisplay = (
      <div className={c("term-mandatory-course-container")}>
        Mandatory Courses:

        {
          _.map(mandatoryCourses, (course, i) => {
            return <div key={`man-course-${i}`} className={c("term-mandatory-course")}>{course}</div>
          })
        }
      </div>
    )

    let electivesDisplay = null

    if(numElectives) {
      const dropdowns = []

      if(!electives) {
        this.setState({electives: Array(numElectives).fill("")})
      }
      console.log("ON CHANGE", electives)
      const courseStrings = _.map(courses, (course) => {
        return `${course.faculty} ${course.course_code}, ${course.name}`
      })
      for(let i = 0; i < numElectives; i++) {
        dropdowns.push(
          <Dropdown className={c("term-dropdown")}
                    placeholder={"Select Course..."}
                    options={courseStrings}
                    value={electives && electives[i] ? electives[i] : null}
                    onChange={(v) => {
                      electives[i] = v
                      this.setState({electives: electives})
                    }}
          />
        )
      }

      electivesDisplay = (
        <div className={c("term-electives-container")}>
          Electives:

          {dropdowns.length && dropdowns}
        </div>
      )
    }

    return (
      <span className={c("term-container")}>
        <div className={c("term-title")}>
          {`Term: ${term}`}
        </div>

        {electivesDisplay}

        {mandatoryCourseDisplay}

      </span>
    )
  }
}
