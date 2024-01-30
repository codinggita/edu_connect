import React from 'react';
import '../css/Table.css'

function Table() {
    return (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abc</td>
              <td>12747747</td>
              <td>10-12</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>12765747</td>
              <td>9-10</td>
            </tr>
            <tr>
              <td>pqr</td>
              <td>12767653</td>
              <td>9-12</td>
            </tr>
          </tbody>
        </table>
    
      )
}

export default Table;