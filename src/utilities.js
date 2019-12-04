const convertUSD = (amount) => {
  return `$${(amount * .01).toFixed(2)}`;
}

const wattHourConverter = (watt_hours)=>{
 let cloverlykilos= ((watt_hours*1.2)/ 2.25)
 console.log(cloverlykilos)
 return cloverlykilos
}

export {
  convertUSD,
  wattHourConverter,
}
