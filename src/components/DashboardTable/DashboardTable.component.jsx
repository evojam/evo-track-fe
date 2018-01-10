import React, { Component } from "react"
import { AgGridColumn, AgGridReact } from "ag-grid-react"

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-bootstrap.css'

export class DashboardTable extends Component {
  constructor() {
    super()
    
    this.state = {
      rowData: [
        {user: 'lolaaa', something: 'sthsth'},
        {user: 'lol', something: 'sthsth'},
        {user: 'lol', something: 'sthsth'},
      ]
    }
  }
  
  onCellClicked = (event) => {
    console.log('onCellClicked: ' + event.data.name + ', col ' + event.colIndex);
  };
  
  onRowSelected = (event) => {
    console.log('onRowSelected: ' + event.node.data.name);
  };
  
  render() {
    return (
      <div style={{height: 525}} className="ag-theme-bootstrap">
        <AgGridReact
          rowData={this.state.rowData}
          enableSorting
        >
          <AgGridColumn field="user" width={150} filter="text"></AgGridColumn>
          <AgGridColumn field="something" width={150} filter="text"></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}
