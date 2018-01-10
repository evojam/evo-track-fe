import React from 'react'
import { connect } from 'react-redux'

import { DashboardHeader, DashboardTable, Loader } from 'components'

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
} from 'lib/users/actions'

const mapStateToProps = state => ({
  users: state.users
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
    const { users: {loading, data} } = this.props
    return loading
      ? <Loader />
      : (
        <div className="dashboard">
          <DashboardHeader />
          <DashboardTable data={data}/>
        </div>
      )
  }
}

export const ConnectedDashboard = connect(mapStateToProps, dispatchToProps)(Dashboard)
