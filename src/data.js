import {wattHourConverter} from './utilities'
const data = [
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Parsippany,NJ",
    year: 2019,
    month: "January 2019",
    watt_hours: 100800,
    pue: 1.65,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(100800) 
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Sunnyvale,CA",
    year: 2019,
    month: "February 2019",
    watt_hours: 104904,
    pue: 1.75,
    carbon_offset: "Positive",
    carbon_emissions: Math.floor(wattHourConverter(104904)) 
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Dallas,TX",
    year: 2019,
    month: "March 2019",
    watt_hours: 102960,
    pue: 1.5,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(102960) 
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Parsippany,NJ",
    year: 2019,
    month: "April 2019",
    watt_hours: 110856,
    pue: 1.65,
    carbon_offset: "Positive",
    carbon_emissions: Math.floor(wattHourConverter(110856))
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Dallas,TX",
    year: 2019,
    month: "May 2019",
    watt_hours: 97920,
    pue: 1.5,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(97920)
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Dallas,TX",
    year: 2019,
    month: "June 2019",
    watt_hours: 105648,
    pue: 1.5,
    carbon_offset: "Positive",
    carbon_emissions: Math.floor(wattHourConverter(105648))
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Sunnyvale,CA",
    year: 2019,
    month: "July 2019",
    watt_hours: 104160,
    pue: 1.75,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(104160) 
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Sunnyvale,CA",
    year: 2019,
    month: "August 2019",
    watt_hours: 105840,
    pue: 1.75,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(105840) 
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Sunnyvale,CA",
    year: 2019,
    month: "September 2019",
    watt_hours: 102672,
    pue: 1.75,
    carbon_offset: "Positive",
    carbon_emissions: Math.floor(wattHourConverter(102672))
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Parsippany,NJ",
    year: 2019,
    month: "October 2019",
    watt_hours: 97920,
    pue: 1.65,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(97920)
  },
  {
    server_id: "ea0977e7-67af-424f-b661-710dd2beb79e",
    location: "Parsippany,NJ",
    year: 2019,
    month: "November 2019",
    watt_hours: 48240,
    pue: 1.65,
    carbon_offset: "Positive",
    carbon_emissions: wattHourConverter(48240) 
  }
];

export default data;
