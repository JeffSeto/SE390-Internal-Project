import React from "react"
import _ from "lodash"
import c from "classnames"
import "./Term.css"

export default class Term extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {term, mandatoryCourses} = this.props

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

    const easiness = 100
    const usefulness = 100

    return (
      <div className={c("term-container")}>
        <div className={c("term-title")}>
          {`Term: ${term}`}
        </div>

        {mandatoryCourseDisplay}



        <div className={c("term-stats-container")}>
          <p className={c("term-stats-text")}><b>Easiness: </b> {easiness}%</p>
          <p className={c("term-stats-text")}><b>Usefulness: </b> {usefulness}%</p>
        </div>
      </div>
    )
  }
}
