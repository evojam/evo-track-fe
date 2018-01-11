import React, { Component } from "react"
import PropTypes from 'prop-types'

import './DashboardTable.css'

export class DashboardTable extends Component {
  constructor(props) {
    super(props)

    this.renderBodyRows = this.renderBodyRows.bind(this)
    this.renderHeaderCells = this.renderHeaderCells.bind(this)
  }

  render() {
    const { data } = this.props

    return (
      <div className="table-responsive">
        <table className="table table-bordered dashboard-table">
          <thead className="thead-inverse">
            <th>Name</th>
            <th>∑</th>
            {this.renderHeaderCells()}
          </thead>
          <tbody>
            {this.renderBodyRows()}
          </tbody>
        </table>
      </div>
    )
  }

  renderHeaderCells() {
    const { data } = this.props

    if (data[0] !== undefined) {
      return data[0].data.map(day => (
        <th className="day-th">{day.date}</th>
      ))
    }
  }

  renderBodyRows() {
    const { data } = this.props

    return data.map(user => {
      const renderDaysCells = days =>
        days.map(day => (
          <td className="day-td">{day.minutes}</td>
        ))

      return (
        <tr>
          <td>{user.name}</td>
          <td></td>
          {renderDaysCells(user.data)}
        </tr>
      )
    })
  }
}

DashboardTable.propTypes = {
  data: PropTypes.object,
}
