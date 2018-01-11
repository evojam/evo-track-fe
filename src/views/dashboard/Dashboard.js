import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { DashboardHeader, DashboardTable, Loader } from 'components'
import { sumAllUsersTime } from 'helpers'

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
} from 'lib/users/actions'

const mapStateToProps = state => ({
  users: state.users,
  dates: state.dates,
})

const dispatchToProps = {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
}

class Dashboard extends React.Component {
  componentDidMount = () => {
    const { fetchUsers, fetchUsersSuccess, fetchUsersError } = this.props
    fetchUsers(fetchUsersSuccess, fetchUsersError)
  }

  render() {
    const { users: { loading, data }, dates } = this.props
    return loading
      ? <Loader />
      : (
        <Fragment>
          <DashboardHeader dates={dates} sum={sumAllUsersTime(data)} />
          <DashboardTable data={data} />
        </Fragment>
      )
  }
}

export const ConnectedDashboard = connect(mapStateToProps, dispatchToProps)(Dashboard)
