import React, { Component } from "react"
import PropTypes from 'prop-types'
import moment from 'moment'

import { DATE_FORMAT } from 'const'

import {
  changeMinutesToString,
  changeMinutesToHours,
  sumUserTime,
  sumOfHoursFromWorkDays,
  isHoliday,
  sumAllUsersTime,
  sumAllByDay,
} from 'helpers'

import { DashBoardCell } from '../DashBoardCell'

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
    const { dates: { startDate, endDate }} = this.props
    return (
        <div className="table-scroll">
          <div className="table-responsive">
            <table className="table table-bordered dashboard-table">
              <thead className="thead-inverse">
                <tr>
                  <th className="name-th visible">Name</th>
                  <th className="sigma-th visible">
                    ∑ (Total: {sumOfHoursFromWorkDays(startDate,
                    moment(endDate, DATE_FORMAT).isAfter(moment()) ? moment().format(DATE_FORMAT) : endDate)})
                  </th>
                  {this.renderHeaderCells()}
                </tr>
              </thead>
              <tbody>
                {this.renderBodyRows()}
                {this.renderFooter()}
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
    const { data, dates: {startDate, endDate} } = this.props

    return data.map(user => {
      const renderDaysCells = days =>
        days.map(day => {
          const dayString = moment(day.date, DATE_FORMAT).format('ddd')
          const warningClass = day.minutes > 0 && day.minutes < 480
            && dayString !== 'Sat' && dayString !== 'Sun'
            ? 'warning' : ''
          const errorClass = (day.minutes >= 1440)
            && dayString !== 'Sat' && dayString !== 'Sun'
            ? 'error' : ''
          const noLogsClass = day.minutes === 0 && 'no-logs'
          const dayClass = dayString === 'Sat'
            || dayString === 'Sun'
            ? 'free-day' : ''
          const holidayClass = isHoliday(moment(day.date, DATE_FORMAT))
            ? 'holiday'
            : ''
          const minutes = day.minutes
          const activeClass = minutes > 0 ? 'active-cell' : ''
          return (
            <DashBoardCell
              ind={day.id}
              classes={`day-td ${warningClass} ${dayClass} ${errorClass} ${activeClass} ${noLogsClass} ${holidayClass}`}
              minutes={minutes}
              key={day.id}
              issues={day.issues}
              user={user}
              date={day.date}
            />
          )
        })

      const totalPeriodHours = sumOfHoursFromWorkDays(startDate,
        moment(endDate, DATE_FORMAT).isAfter(moment()) ? moment().format(DATE_FORMAT) : endDate)

      const periodTimeClass = Math.abs(sumUserTime(user.data) / 60 - totalPeriodHours) > 8
        ? 'warning' : null

      return (
        <tr key={user.name}>
          <td className="name-td visible"><img src={user.avatar} className="avatar" alt="avatar" />{user.name}</td>
          <td className={`sigma-td visible ${periodTimeClass}`}>
            {changeMinutesToString(sumUserTime(user.data))}
          </td>
          {renderDaysCells(user.data)}
        </tr>
      )
    })
  }

  renderFooter() {
    const { data } = this.props

    const sums = sumAllByDay(data)

    return (
      <tr className="footer">
        <td className="name-td visible">Sum:</td>
        <td className={`sigma-td visible`}>
          {changeMinutesToString(sumAllUsersTime(data))}
        </td>
        {sums.map((sum, index) => <td key={index}>{changeMinutesToHours(sum)}</td>)}
      </tr>
    )
  }
}

DashboardTable.propTypes = {
  data: PropTypes.array,
}
