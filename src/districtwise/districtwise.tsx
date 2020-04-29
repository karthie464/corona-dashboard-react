import * as React from 'react';
import Table from 'react-bootstrap/Table'

class Districtwise extends React.Component<any, any>  {
  public render() {
    const districtDetails = this.props.districts;
    return (
        <Table bordered>
        <thead>
        <tr>
          <th>#</th>
          <th>District Name</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deceased</th>
        </tr>
        </thead>
        <tbody>
          {districtDetails.map((detail: any, index: any) =>
            <tr className="accordion-toggle">
              <td>{index}</td>
              <td>{detail.state}</td>
              <td>{detail.confirmed}</td>
              <td>{detail.active}</td>
              <td>{detail.recovered}</td>
              <td>{detail.deaths}</td>
          </tr>
          )}
        </tbody>
        </Table>
    );
  }
}

export default Districtwise;
  