//doubai-lodash.js

var doubai = {
  /**
   *
   * @param {*} array
   * @param {*} size
   * @returns (Array): 返回过滤掉假值的新数组
   */
  chunk: function(array, size) {
    var res = []
    for (var i = 0; i < array.length - 1; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  }
}
