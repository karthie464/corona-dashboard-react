class stateModel {
    name: any;
    active: any;
    confirmed: any;
    recovered: any;
    deaths: any;
    deltaConfirmed: any;
    deltaRecovered: any;
    deltaDeaths: any;

    constructor(name: any, active: any, confirmed: any, recovered: any,
        deaths: any, deltaConfirmed: any,  deltaRecovered: any,  deltaDeaths: any) {
        this.name = name;
        this.active = active;
        this.confirmed = confirmed;
        this.recovered = recovered;
        this.deaths = deaths;
        this.deltaConfirmed = deltaConfirmed;
        this.deltaRecovered = deltaRecovered;
        this.deltaDeaths = deltaDeaths; 
    }
}
export default stateModel;