import React, { Component } from "react"
import PropTypes from 'prop-types'
import moment from 'moment'

import { DATE_FORMAT } from 'const'

import { changeMinutesToString, sumUserTime } from 'helpers'

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
            <tr>
              <th>Name</th>
              <th>∑</th>
              {this.renderHeaderCells()}
            </tr>
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
        <th className="day-th" key={day.date}>
          {moment(day.date, DATE_FORMAT).format('DD-MM')}
          <div>{moment(day.date, DATE_FORMAT).format('ddd')}</div>
        </th>
      ))
    }
  }

  renderBodyRows() {
    const { data } = this.props

    return data.map(user => {
      const renderDaysCells = days =>
        days.map(day => {
          const timeClass = day.minutes > 0 && day.minutes < 480 ? 'warning' : null
          const dayClass = moment(day.date, DATE_FORMAT).format('ddd') === 'Sat'
            || moment(day.date, DATE_FORMAT).format('ddd') === 'Sun' ? 'free-day' : null
          return (
            <td className={`day-td ${timeClass} ${dayClass}`} key={day.date}>
              {changeMinutesToString(day.minutes)}
            </td>
          )
        })

      return (
        <tr key={user.name} className={sumUserTime(user.data) < 9600 ? 'warning' : null}>
          <td>{user.name}</td>
          <td>{changeMinutesToString(sumUserTime(user.data))}</td>
          {renderDaysCells(user.data)}
        </tr>
      )
    })
  }
}

DashboardTable.propTypes = {
  data: PropTypes.object,
}
