const convertUSD = (amount) => {
  return `$${(amount * .01).toFixed(2)}`;
}

export {
  convertUSD,
}
