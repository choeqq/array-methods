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

function filter<T>(array: T[], cb: Function) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (cb(element, i, array)) newArray.push(element);
  }

  return newArray;
}

module.exports = {
  forEach,
  map,
  filter,
};
