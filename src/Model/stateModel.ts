class stateModel {
    name: any;
    active: any;
    confirmed: any;
    recovered: any;
    deaths: any;

    constructor(name: any, active: any, confirmed: any, recovered: any, deaths: any) {
        this.name = name;
        this.active = active;
        this.confirmed = confirmed;
        this.recovered = recovered;
        this.deaths = deaths;
        
    }
}
export default stateModel;