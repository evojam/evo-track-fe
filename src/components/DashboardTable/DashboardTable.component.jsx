import React, { Component } from "react"
import PropTypes from 'prop-types'
import moment from 'moment'

import { DATE_FORMAT } from 'const'

import {
  changeMinutesToString,
  changeMinutesToHours,
  sumUserTime,
} from 'helpers'

import './DashboardTable.css'

export class DashboardTable extends Component {
  constructor(props) {
    super(props)

    this.renderBodyRows = this.renderBodyRows.bind(this)
    this.renderHeaderCells = this.renderHeaderCells.bind(this)
  }

  componentDidMount() {
    const table = document.getElementsByClassName('dashboard-table')[0]
    const clonedTable = table.cloneNode(true)
    clonedTable.className += " table-cloned"
    document.getElementsByClassName('table-scroll')[0].appendChild(clonedTable)
  }

  render() {
    return (
      <div className="table-scroll">
        <div className="table-responsive">
          <table className="table table-bordered dashboard-table">
            <thead className="thead-inverse">
              <tr>
                <th className="name-th visible">Name</th>
                <th className="sigma-th visible">∑</th>
                {this.renderHeaderCells()}
              </tr>
            </thead>
            <tbody>
              {this.renderBodyRows()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderHeaderCells() {
    const { data } = this.props

    if (data[0] !== undefined) {
      return data[0].data.map(day => (
        <th className="day-th" key={day.date}>
          <span className="day-in-numbers">{moment(day.date, DATE_FORMAT).format('DD')}</span>
          <span className="day-in-words">{moment(day.date, DATE_FORMAT).format('ddd')}</span>
        </th>
      ))
    }
  }

  renderBodyRows() {
    const { data } = this.props

    return data.map(user => {
      const renderDaysCells = days =>
        days.map(day => {
          const dayString = moment(day.date, DATE_FORMAT).format('ddd')
          const warningClass = day.minutes > 0 && day.minutes < 480
            && dayString !== 'Sat' && dayString !== 'Sun'
            ? 'warning' : ''
          const errorClass = (day.minutes === 0 || day.minutes >= 1440)
            && dayString !== 'Sat' && dayString !== 'Sun'
            ? 'error' : ''
          const dayClass = dayString === 'Sat' || dayString === 'Sun' ? 'free-day' : ''
          const hours = changeMinutesToHours(day.minutes)
          return (
            <td className={`day-td ${warningClass} ${dayClass} ${errorClass}`} key={day.id}>
              {hours === '0.0' ? '' : hours}
            </td>
          )
        })

      return (
        <tr key={user.name} className={sumUserTime(user.data) < 9600 ? 'warning' : ''}>
          <td className="name-td visible">{user.name}</td>
          <td className="sigma-td visible">{changeMinutesToString(sumUserTime(user.data))}</td>
          {renderDaysCells(user.data)}
        </tr>
      )
    })
  }
}

DashboardTable.propTypes = {
  data: PropTypes.array,
}
