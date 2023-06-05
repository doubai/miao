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
  const set2 = new Set(args.flat());
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
 * 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
 * @param {*} array1
 * @param {*} array2
 * @param {*} comparator
 * @returns (Array): 返回一个过滤值后的新数组。
 */
differenceWith: (array1, array2, comparator) => {
  return array1.filter(a => !array2.some(b => comparator(a, b)))
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
},
/**
 * 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
 * @param {*} array
 * @param {*} predicate
 * @returns (Array): 返回array剩余切片。
 */
dropRightWhile: (array, predicate = identity) => {
  if (array.length == 0) {
    return []
  }
  while (array.length && predicate(array[array.length - 1])) {
    array.pop()
  }
  return array
},
/**
 * 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
 * @param {*} array
 * @param {*} predicate
 * @returns (Array): 返回array剩余切片。
 */
dropWhile: (array, predicate = identity) => {
  if (array.length == 0) {
    return []
  }
  let idx = 0;
  while (idx < array.length && predicate(array[idx], idx, array)) {
    idx++;
  }
  return array.slice(idx);
},

/**
 * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
 * @param {*} array
 * @param {*} val
 * @param {*} start
 * @param {*} end
 * 返回array
 */
fill: (array, val, start = 0, end = array.length) => {
 for (let i = start; i < end; i++) {
 array[i] = val
 }
 return array
},

/**
 * 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
 * @param {*} array
 * @param {*} predicate
 * @param {*} fromIndex
 * @returns (number): 返回找到元素的 索引值（index），否则返回 -1。
 */
findIndex: (array, predicate = identity => (identify), fromIndex = 0) => {
for (let i = formIndex; i <array.length; i++) {
  if (this.baseIteratee(predicate)(array[i])) return i
}
return -1
},

/**
 * 这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
 * @param {*} array
 * @param {*} predicate
 * @param {*} fromIndex
 * @returns (number): 返回找到元素的 索引值（index），否则返回 -1。
 */
findLastIndex: (array, predicate = identity => (identify), fromIndex = array.length-1) => {
  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i]) == true) {
      return i
    }
  }
  return -1
},

/**
 * 减少一级array嵌套深度。
 * @param {*} array
 * @returns (Array): 返回减少嵌套层级后的新数组。
 */
flatten: array => array.flat(),

/**
 * 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
 * @param {*} pairs
 * @returns (Object): 返回一个新对象。
 */
fromPairs: (pairs) => {
  var res = {}
  for (let i = 0; i < pairs.length; i++) {
    res[pairs[i][0]] = pairs[i][1]
  }
    return res
},

/**
 * 获取数组 array 的第一个元素。
 * @param {*} array
 * @returns (*): 返回数组 array的第一个元素。
 */
head: (array) => array[0],

/**
 * 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
 * @param {*} array
 * @param {*} val
 * @param {*} fromIndex
 * @returns (number): 返回 值value在数组中的索引位置, 没有找到为返回-1。
 */
indexOf: (array, val, fromIndex = 0) => {
  for (let i = fromIndex; i < array.length; i++) {
  if (array[i] == val) {
  return i
  }
  }
  return -1
},

/**
 * 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
 * @param {*} array
 * @returns (Array): 返回截取后的数组array。
 */
initial: (array) => {
  array.pop()
  return array
},

/**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
 * @param  {...any} arrays
 * @returns (Array): 返回一个包含所有传入数组交集元素的新数组。
 */
intersection:(...arrays) => {
  let res = arrays[0]
  for (let i = 0; i < arrays.length; i++) {
      let set = new Set(arrays[i])
      res = res.filter((item) => set.has(item))
  }
  return res
  },

  /**
   * 将 array 中的所有元素转换为由 separator 分隔的字符串。
   * @param {*} array
   * @param {*} separator
   * @returns (string): 返回连接字符串。
   */
  join: (array, separator = ',') => array.reduce((pre, next) =>pre + next + separator, '').slice(0, -1),

  /**
   * 获取array中的最后一个元素。
   * @param {*} array
   * @returns (*): 返回array中的最后一个元素
   */
  last:(array) => array.at(-1),

  /**
   * 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
   * @param {*} array
   * @param {*} val
   * @param {*} fromIndex
   * @returns (number): 返回匹配值的索引值，否则返回 -1。
   */
  lastIndexOf:(array, val, fromIndex=array.length-1) => {
    for (let i = array.length - 1; i >= fromIndex; i--) {
      if (array[i] == val) {
      return i
      }
      }
      return -1
  }
}
