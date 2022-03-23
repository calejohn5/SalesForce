// retrieve records without using apex, using getRecord Lightning Data Service
import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Set Bear object fields
const NAME_FIELD = 'Bear__c.Name';
const LOCATION_LATITUDE_FIELD = 'Bear__c.Location__Latitude__s';
const LOCATION_LONGITUDE_FIELD = 'Bear__c.Location__Longitude__s';
const bearFields = [
	NAME_FIELD,
	LOCATION_LATITUDE_FIELD,
	LOCATION_LONGITUDE_FIELD
];
export default class BearLocation extends LightningElement {
// automatically receive current record id
  @api recordId;
  name;
  mapMarkers = [];
// use @wire to fetch data & errors then pass to the function. @wire calls getRecord with record id and list of fields as parameters.
// loadBear is updated automatically when component loads or id changes
  @wire(getRecord, { recordId: '$recordId', fields: bearFields })
  loadBear({ error, data }) {
    if (error) {
      // TODO: handle error
// no errors so we build markers w/ bears coordinates
    } else if (data) {
      // Get Bear data
      this.name =  getFieldValue(data, NAME_FIELD);
      const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
      const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
      // Transform bear data into map markers
      this.mapMarkers = [{
        location: { Latitude, Longitude },
        title: this.name,
        description: `Coords: ${Latitude}, ${Longitude}`
      }];
    }
  }
  get cardTitle() {
    return (this.name) ? `${this.name}'s location` : 'Bear location';
  }
}