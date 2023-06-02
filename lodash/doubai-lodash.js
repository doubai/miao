//doubai-lodash.js

var doubai = {
  chunk: function(array, size) {
    var res = []
    for (var i = 0; i < array.length; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  },

  compact: function(array, n) {
    var res = []
    for (let i of array) {
      if (i) {
        res.push(i)
      }
    }
    return res
  }
}
