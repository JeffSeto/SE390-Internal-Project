import React from "react"
import c from "classnames"
import _ from "lodash"
import "./Dropdown.css"

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showOptions: false
    }
  }

  toggleShowOptions(e) {
    const {showOptions} = this.state

    e.preventDefault()
    if(!showOptions) {
      this.input.focus()
    } else {
      this.input.blur()
    }
    this.setState({showOptions: !showOptions})
  }


  render() {
    const {className, placeholder, disabled, options, value} = this.props;
    const {showOptions} = this.state

    const optionDisplay = showOptions ? (
      <div className={c("dropdown-option-panel")}>
        {
          _.map(options, (option) => {
            return (
              <div className={c("dropdown-option")}>
                {option}
              </div>
            )
          })
        }
      </div>
    ) : null;

    return (
      <div className={c(className, "dropdown-container", "dropdown-show-display")}>
        <input ref={(input) => {this.input = input}}
               value={value}
               readOnly={true}
               className={c("dropdown-input", showOptions ? "dropdown-show-display" : null)}
               placeholder={placeholder}
               disabled={disabled}
               onBlur={() => this.setState({showOptions: false})}
               onMouseDown={(e) => this.toggleShowOptions(e)}
        />
        {optionDisplay}
      </div>



    )
  }
}
