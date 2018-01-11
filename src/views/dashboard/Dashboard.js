import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { DashboardHeader, DashboardTable, Loader } from 'components'
import { sumAllUsersTime } from 'helpers'

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
} from 'lib/users/actions'

import {
  changeDates,
} from 'lib/dates/actions'

const mapStateToProps = state => ({
  users: state.users,
  dates: state.dates,
})

const dispatchToProps = {
  changeDates,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
}

class Dashboard extends React.Component {
  componentDidMount = () => {
    const {
      fetchUsers,
      fetchUsersSuccess,
      fetchUsersError,
      dates: {
        startDate,
        endDate,
      }
    } = this.props
    fetchUsers(fetchUsersSuccess, fetchUsersError, startDate, endDate )
  }

  componentWillReceiveProps = nextProps => {
    const {startDate, endDate} = nextProps.dates
    if (startDate !== this.props.dates.startDate
      || endDate !== this.props.dates.endDate) {
      fetchUsers(fetchUsersSuccess, fetchUsersError, startDate, endDate)
    }
  }

  render() {
    const { users: { loading, data }, dates, changeDates } = this.props
    return loading
      ? <Loader />
      : (
        <Fragment>
          <DashboardHeader dates={dates} sum={sumAllUsersTime(data)} changeDates={changeDates} />
          <DashboardTable data={data} />
        </Fragment>
      )
  }
}

export const ConnectedDashboard = connect(mapStateToProps, dispatchToProps)(Dashboard)
