import * as React from 'react';
import {TreeTable} from 'primereact/treetable'
import { Column } from "primereact/column";
import * as Icon from 'react-feather';
import './statewise.css';

class Statewise extends React.Component<any, any>  {

  public render() {
    const stateDetails = this.props.states;
    return (
      <TreeTable value={stateDetails} >
        <Column field="name" header="State" sortable filter={true} 
                filterPlaceholder={'State/District Name ...'} expander></Column>
        <Column  header="C" sortable body={this.confirmedBodyTemplate}>
        </Column>
        <Column field="active" header="A" sortable></Column>
        <Column field="recovered" header="R" sortable body={this.recoveredBodyTemplate}></Column>
        <Column field="deaths" header="D" sortable body={this.deceasedBodyTemplate}></Column>
      </TreeTable>
    );
  }

public confirmedBodyTemplate(node: any) {
return (
<div className="overallDiv">
  <div className="deltaChangesDiv">
    <span className="iconConfirmed">
    {parseInt(node.data.deltaConfirmed) > 0 && <Icon.ArrowUp/>}
    </span>
    <span className="confirmed">
    {parseInt(node.data.deltaConfirmed) > 0 ? `${node.data.deltaConfirmed}` : ''}
    </span>
  </div>
  <span>{node.data.confirmed}</span>
</div>);
}

public recoveredBodyTemplate(node: any) {
  return (
  <div className="overallDiv">
    <div className="deltaChangesDiv">
      <span className="iconRecovered">
      {parseInt(node.data.deltaRecovered) > 0 && <Icon.ArrowUp/>}
      </span>
      <span className="recovered">
      {parseInt(node.data.deltaRecovered) > 0 ? `${node.data.deltaRecovered}` : ''}
      </span>
    </div>
    <span>{node.data.recovered}</span>
  </div>);
  }

public deceasedBodyTemplate(node: any) {
  return (
  <div className="overallDiv">
    <div className="deltaChangesDiv">
      <span className="iconDeceased">
      {parseInt(node.data.deltaDeaths) > 0 && <Icon.ArrowUp/>}
      </span>
      <span className="deceased">
      {parseInt(node.data.deltaDeaths) > 0 ? `${node.data.deltaDeaths}` : ''}
      </span>
    </div>
    <span>{node.data.deaths}</span>
  </div>);
  }

  public filterMethod(value: any, filter:any) {
    console.log('value: '+ value + 'filter: ' + filter)
  }
}

export default Statewise;
  