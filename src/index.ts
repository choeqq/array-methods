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

function reduce<T>(array: T[], cb: Function, initialValue: any) {
  let currentValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (initialValue === null && i === 0) {
      currentValue = element;
    } else {
      currentValue = cb(currentValue, element, i, array);
    }
  }
  return currentValue;
}

function some<T>(array: T[], cb: Function) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) return true;
  }

  return false;
}

function every<T>(array: T[], cb: Function) {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) return false;
  }

  return true;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
};
