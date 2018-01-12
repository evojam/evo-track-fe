import React from 'react'

import { Details } from '../Details'
import {
  changeMinutesToHours,
} from 'helpers'

export class DashBoardCell extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    const {classes, ind, minutes, issues, user, date} = this.props
    const hours = changeMinutesToHours(minutes)
    return (
      <td
        className={classes}
        id={`Popover${ind}`}
        onClick={this.toggle}
      >
        {hours === '0.0' ? '' : hours}
        {minutes % 30 !== 0 && ' !!!'}
        {this.props.issues.length > 0 && (
          <Details
            ind={ind}
            toggle={this.toggle}
            open={this.state.popoverOpen}
            issues={issues}
            user={user}
            date={date}
          />
        )}
      </td>
    )
  }
}