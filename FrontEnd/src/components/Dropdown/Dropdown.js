import React from "react"
import c from "classnames"
import _ from "lodash"
import "./Dropdown.css"

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
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
    const {className, placeholder, disabled, options, value, onChange} = this.props;
    const {showOptions} = this.state

    const optionDisplay = showOptions ? (
      <div className={c("dropdown-option-panel")}>
        {

          _.compact(_.map(options, (option) => {
            console.log("value", value)
            if(value != null && !option.includes(value)) return null
            return (
              <div className={c("dropdown-option")}>
                {option}
              </div>
            )
          }))
        }
      </div>
    ) : null;

    return (
      <div className={c(className, "dropdown-container", "dropdown-show-display")}>
        <input ref={(input) => {this.input = input}}
               value={value}
               className={c("dropdown-input", showOptions ? "dropdown-show-display" : null)}
               placeholder={placeholder}
               disabled={disabled}
               onBlur={() => this.setState({showOptions: false})}
               onMouseDown={(e) => this.toggleShowOptions(e)}
               onChange={(e) => onChange(e.target.value)}
        />
        {optionDisplay}
      </div>



    )
  }
}
