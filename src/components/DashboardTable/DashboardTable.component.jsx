import React, { Component } from "react"
import { AgGridReact } from "ag-grid-react"

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-fresh.css'

export class DashboardTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columnDefs: this.generateColumnDefs(),
      rowData: this.parseDataToRows(),
    }

    this.parseDataToRows = this.parseDataToRows.bind(this)
    this.generateColumnDefs = this.generateColumnDefs.bind(this)
  }
  
  render() {
    const { columnDefs, rowData } = this.state

    return (
      <div style={{height: 1000}} className="ag-theme-fresh">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
        >
        </AgGridReact>
      </div>
    )
  }

  generateColumnDefs() {
    const { data } = this.props

    if (data[0] !== undefined) {
      const leftColumns = [
        { headerName: 'Name', field: 'name' },
        { headerName: '∑', field: 'sigma' },
      ]

      const rightColumns = data[0].data
        .map(cell => ({
          headerName: cell.date,
          field: cell.date,
        }))

      return [
        ...leftColumns,
        ...rightColumns,
      ]
    }
    return []
  }

  parseDataToRows() {
    const { data } = this.props

    const generateDays = user => user.data
      .reduce((acc, day) => {
        return {
          ...acc,
          [day.date]: day.minutes,
        }
      }, {})

    return data.map(user => ({
      name: user.name,
      sigma: 'worked hours',
      ...generateDays(user),
    }))
  }
}
