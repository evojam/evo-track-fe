import React, { Fragment } from 'react'
import { Popover, PopoverBody } from 'reactstrap'

import { changeMinutesToString } from 'helpers'

import './Detail.css'

export class Details extends React.Component{
  render() {
    const { date, user, issues } = this.props
    const mappedIssues = issues.map((issue, index) => (
      <tr key={index}>
        <td><a href={`https://evojam.atlassian.net/browse/${issue.key}`} target="_blank">{issue.key}</a></td>
        <td>{changeMinutesToString(issue.time)}</td>
      </tr>
    ))

    return (
      <Fragment>
        <Popover className="detail-popover" placement="bottom" isOpen={this.props.open} target={`Popover${this.props.ind}`} toggle={this.props.toggle}>
          <PopoverBody>
            <span className="details-user"><img src={user.avatar} class="avatar" alt="avatar" /><span className="details-name">{user.name}</span></span>
            <span className="details-date">{date}</span>
            <table className="table">
              <thead>
                <th>Issue</th>
                <th>Worked</th>
              </thead>

              <tbody>
                {mappedIssues}
              </tbody>
            </table>
          </PopoverBody>
        </Popover>
      </Fragment>
    )
  }
}
