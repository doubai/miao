//doubai-lodash.js

var doubai = {
  /**
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
   * @param {*} array
   * @param {*} size
   * @returns (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
   */
  chunk: function(array, size) {
    var res = []
    for (var i = 0; i < array.length; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  },

  /**
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
   * @param {*} array
   * @param {*} n
   * @returns (Array): 返回过滤掉假值的新数组。
   */
  compact: function(array) {
    var res = []
    for (let i of array) {
      if (i) {
        res.push(i)
      }
    }
    return res
  },

 /**
  * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
  * @param {*} array
  * @param {*} val
  * @returns (Array): 返回一个过滤值后的新数组。
  */
  difference: (array, ...args) => {
  const set2 = new Set(...args);
  return array.filter(item => !set2.has(item));
},
/**
 * 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
 * @param {*} array1
 * @param {*} array2
 * @param {*} iteratee
 * @returns (Array): 返回一个过滤值后的新数组。
 */
differenceBy: (array1, array2, iteratee = identify => identify) => {
  const set2 = new Set(array2.map(iteratee));
  return array1.filter(item => !set2.has(iteratee(item)));
},

/**
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * @param {*} array
 * @param {*} n
 * @returns (Array): 返回array剩余切片。
 */
drop: (array, n = 1) => array.slice(n),

/**
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 * @param {*} array
 * @param {*} n
 * @returns (Array): 返回array剩余切片。
 */
dropRight: (array, n = 1) => {
const l = array.length - n
if (array.length <= n) {
  return []
} else {
  return array.slice(0, l)
}
}
}
