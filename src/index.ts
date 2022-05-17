function forEach<T>(array: T[], cb: Function) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

function map<T>(array: T[], cb: Function) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

module.exports = {
  forEach,
  map,
};
