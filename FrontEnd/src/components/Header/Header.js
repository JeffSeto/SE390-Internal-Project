import React from "react"
import c from "classnames"
import './Header.css'
import Dropdown from "../Dropdown";

export default class Header extends React.Component {

  render() {
    const {name, program} = this.props




    const programs = [
      "Software Engineering",
      "Electrical Engineering",
      "Computer Science"
    ]

    return (
      <div className={c("header-container")}>
        <div className={c("header-name")}>
          UW Planner
        </div>

        <Dropdown value={program}
                  options={programs}
                  className={"header-program-dropdown"}
                  placeholder={"Select Program..."}
        />
      </div>
    )
  }
}
