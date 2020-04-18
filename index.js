module.exports = (arr, keys) => {
  let comp
  if (typeof keys === 'function') {
    comp = keys
  } else if (Array.isArray(keys)) {
    comp = (a, b) => keys.every(key => a[key] === b[key])
  } else if (keys === undefined) {
    comp = (a, b) => a === b
  } else {
    comp = (a, b) => a[keys] === b[keys]
  }
  return arr.filter((a, i) => arr.findIndex(b => comp(a, b)) === i)
}
