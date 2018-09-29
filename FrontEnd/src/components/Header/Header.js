import React from "react"
import c from "classnames"
import './Header.css'

export default class Header extends React.Component {

  render() {

    return (
      <div className={c("header-container")}>
        <div className={c("header-name")}>
          UW Software Engineering Planner
        </div>
      </div>
    )
  }
}
