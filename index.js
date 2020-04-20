const parseFunc = keys => {
  if (typeof keys === 'function') {
    return keys;
  }

  if (Array.isArray(keys)) {
    return (a, b) => keys.every(key => a[key] === b[key]);
  }

  if (keys === undefined) {
    return (a, b) => a === b;
  }

  return (a, b) => a[keys] === b[keys];
};

const pushDefault = (array, i, element) => {
  if (i in array) {
    array[i].push(element);
  } else {
    array.push([element]);
  }
};

module.exports = {
  unique(array, keys) {
    const comp = parseFunc(keys);
    return array.filter((a, i) => array.findIndex(b => comp(a, b)) === i);
  },
  group(array, keys) {
    const comp = parseFunc(keys);
    const result = [];
    array.forEach(a => pushDefault(result, array.findIndex(b => comp(a, b)), a));
    return result;
  }
};
