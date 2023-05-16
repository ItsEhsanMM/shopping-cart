const shorten = (name) => {
  let shorted = name.split(" ");
  shorted = `${shorted[0]} ${shorted[1]}`;

  return shorted;
};

export { shorten };
