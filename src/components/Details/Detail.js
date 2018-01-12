import React from 'react'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'

import { changeMinutesToString } from 'helpers'

import './Detail.css'

export class Details extends React.Component{
  render() {
    return (
      <div>
        <Popover className="detail-popover" placement="bottom" isOpen={this.props.open} target={`Popover${this.props.ind}`} toggle={this.props.toggle}>
          <PopoverHeader>{this.props.date}</PopoverHeader>
          <PopoverBody>
            <span className="details-name">{this.props.user}</span>
            {this.props.issues.map((issue, index) => (
              <p key={index}>
                <a href={`https://evojam.atlassian.net/browse/${issue.key}`} target="_blank">{issue.key}</a>
                <span> Time: {changeMinutesToString(issue.time)}</span>
              </p>
            ))}
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}
