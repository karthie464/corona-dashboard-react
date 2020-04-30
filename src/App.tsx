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
  overallDetails: any;
  stateDetails: any;
  districtDetails: any;

componentDidMount() {
  // fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
  fetch('https://api.covid19india.org/data.json', 
      /* {
        headers: {
          'x-rapidapi-host' : 'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key' : 'eee03be7famsh0a4c97bce963450p17deacjsnf3979d5d6296'
        }
      } */)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    this.stateDetails = Object.values(data.statewise);
/*     const finalData = this.dataFormatterForTreeTable(Object.values(data.statewise));
    this.setState({ states: finalData.root }) */
    fetch('https://api.covid19india.org/state_district_wise.json')
    .then( res => res.json())
    .then((data) => {
      this.districtDetails = Object.values(data);
    const finalData = this.dataFormatterForTreeTable(this.stateDetails, this.districtDetails);
    this.setState({ states: finalData.root }) 
    })
  })
  .catch(console.log)
// this.getTreeTableNodes().then((data: any) => this.setState({states: data}));;
}

/* getTreeTableNodes() {
  return axios.get('/tree-table.json')
          .then((res: any) => res.data.root);
} */

dataFormatterForTreeTable(stateDetails: any, districtDetails: any) {

let stateCount = 0;
let stateArr = [{}];
stateDetails.forEach((stateObj: any) => {
  let districtCount = 0;
  let districtArr = [{}];  
  districtDetails.forEach((value: any) => {
    if (value.statecode === stateObj.statecode) {
    Object.entries(value.districtData).forEach((districtDtls: any) => {
      const districtObj = new districtModel(districtDtls[0], districtDtls[1].active, districtDtls[1].confirmed, districtDtls[1].recovered, districtDtls[1].deceased,
        districtDtls[1].delta.confirmed, districtDtls[1].delta.recovered, districtDtls[1].delta.deceased);
      const tempObj = {
        'key' : stateCount+'-'+districtCount,
        'data' : districtObj
      }
      districtArr.push(tempObj);
      districtCount++;
    })
  }
})
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
this.overallDetails = finalData.root.shift();
finalData.root.push(this.overallDetails);
return finalData;

}

render() {
  return (
    <Statewise states={this.state.states}/>
    );
  }
}


  

export default App;
