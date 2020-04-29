import * as React from 'react';
/* import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Districtwise from '../districtwise/districtwise' */
import {TreeTable} from 'primereact/treetable'
import { Column } from "primereact/column";
/* import treeTab from '../sample.json'
import sampleModel from '../Model/sample-model' */

class Statewise extends React.Component<any, any>  {

  public render() {
    return (
      <TreeTable value={this.props.states} >
        <Column field="name" header="State" sortable filter={true} 
                filterPlaceholder={'State/District Name ...'} expander></Column>
        <Column field="confirmed" header="Confirmed" sortable></Column>
        <Column field="active" header="Active" sortable></Column>
        <Column field="recovered" header="Recovered" sortable></Column>
        <Column field="deaths" header="Deceased" sortable></Column>
      </TreeTable>
    );
  }

  public filterMethod(value: any, filter:any) {
    console.log('value: '+ value + 'filter: ' + filter)
  }
}

export default Statewise;
  