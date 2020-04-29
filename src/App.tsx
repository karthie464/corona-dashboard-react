import React, { Component } from 'react'
import './App.css';
import Statewise from './statewise/statewise';
import districtModel from './Model/districtModel';
import stateModel from './Model/stateModel';
/* import axios from 'axios';
import stateModel from './Model/stateModel'; */

class App extends Component {

  state = {
    states: []
  }

componentDidMount() {
  // fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
  fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india', 
      {
        headers: {
          'x-rapidapi-host' : 'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key' : 'eee03be7famsh0a4c97bce963450p17deacjsnf3979d5d6296'
        }
      })
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    const finalData = this.dataFormatterForTreeTable(Object.values(data.state_wise));
    this.setState({ states: finalData.root })
  })
  .catch(console.log)
// this.getTreeTableNodes().then((data: any) => this.setState({states: data}));;
}

/* getTreeTableNodes() {
  return axios.get('/tree-table.json')
          .then((res: any) => res.data.root);
} */

dataFormatterForTreeTable(stateDetails: any) {

let stateCount = 0;
let stateArr = [{}];
stateDetails.forEach((stateObj: any) => {
  let districtCount = 0;
  let districtArr = [{}];
if (stateObj.district !== undefined) {  
  Object.entries(stateObj.district).forEach((value: any) => {
    const districtObj = new districtModel(value[0], value[1].active, value[1].confirmed, value[1].recovered, value[1].deceased,
      value[1].delta.confirmed, value[1].delta.recovered, value[1].delta.deceased);
    const tempObj = {
      'key' : stateCount+'-'+districtCount,
      'data' : districtObj
    }
    districtArr.push(tempObj);
    districtCount++;
  })
}
const stateData = new stateModel(stateObj.state, stateObj.active, stateObj.confirmed, stateObj.recovered, stateObj.deaths,
            stateObj.deltaconfirmed, stateObj.deltarecovered, stateObj.deltadeaths);
districtArr.splice(0,1);
const tempStateObj = {
  'key' : stateCount,
  'data' : stateData,
  'children' : districtArr
}
stateArr.push(tempStateObj);
stateCount++;
})
stateArr.splice(0,1);
const finalData = {
  'root' : stateArr
};

return finalData;

}

render() {
  return (
    <Statewise states={this.state.states}/>
    );
  }
}


  

export default App;
