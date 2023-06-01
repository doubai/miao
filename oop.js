class MyMap {
  constructor () {
    this._map = {}
    this.count = 0
  }
  set(key, val) {
  this._map[key] = val
  this._count++
  }
  get(key) {
    return this._map[key]
  }
  has(key) {
    return key in this._map
  }
  delete(key) {
    return delete this._map[key]
  }
  get size() {
    return this.count
  }
}

class MySet {
  constructor () {
    this.set = []
  }
  add(val) {
    if (!this.has(val)) {
      return this.set.push(val)
    }
  }
  delete(val) {
  if (this.has(val)) {
    var index = this.set.indexOf(val)
    this.set.splice(index, 1)
  }
  }
  has(val) {
  return this.set.includes(val)
  }
  get size() {
    return this.set.length
  }
}

class Vector {
constructor(x, y) {
  this.x = x
  this.y = y
}
plus(vector) {
  var x = this.x + vector.x
  var y = this.y + vector.y
  return new Vector(x, y)
}
minus(vector) {
  var x = this.x - vector.x
  var y = this.y - vector.y
  return new Vector(x, y)
}
get length() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}
}


class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
    }
  add(complex) {
    var real = this.real + complex.real
    var imaginary = this.imaginary + complex.imaginary
    return new Complex(real, imaginary)
  }
  subtract(complex) {
    var real = this.real - complex.real
    var imaginary = this.imaginary - complex.imaginary
    return new Complex(real, imaginary)
  }
  multiply(complex) {
    var real = this.real * complex.real
    var imaginary = this.imaginary * complex.imaginary
    return new Complex(real, imaginary)
  }
  div(complex) {
    var helper = new Complex(this.real, -this.imaginary)
    var up = this.multiply(helper)
    var down = complex.multiply(helper)
    var real = up.real / down.real
    var imaginary = up.imaginary / down.real
    return new Complex(real, imaginary)
  }
}



class Stack {
  constructor() {
  this.head = null
  this.nodeCount = 0
  }
  push (val) {
    var node = {
      val, next: null
    }

    if (!this.head) {
    this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.nodeCount++
  }
  pop() {
    if (!this.head) return
    else {
      const res = this.head.val
      this.head = this.head.next
      this.nodeCount--
      return res
    }
  }
  get size() {
    return this.nodeCount
  }
}

class Queue {
  constructor (head, next) {
  this.head = null
  this.tail = null
  this.count = 0
  }
  add (val) {
    var node = {
      val, next: null
    }
    if (!this.head) {
      this.head = this.tail = node
    }
    this.tail.next = node
    this.tail = node
    this.count++
  }
  pop() {
    if (!this.head) return
    if (this.head == this.tail) {
      let res = this.head.val
      this.head = this.tail = null
      return res
    }
    this.count--
    let res = this.head.val
    this.head = this.head.next
    return res
  }
  get size() {
    return this.count
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(val) {
    var node = {
      val, next: null
    }
    if (!this.head) {
      this.head = this.tail = node
      return
    } else {
      this.tail.next = node
      this.tail = node
      return
    }
  }
  prepend(val) {
    var node = {
      val, next: null
    }
    if (!this.head) {
      this.head = this.tail = node
      return
    } else {
      node.next = this.head
        this.head = node
        return
    }
  }
  at(index) {
    if (this.head == this.tail == null) return
    var top = this.head
    var count = 0
    while (count < index) {
      count++
      top = top.next
    }
    return top.val
  }
  get size() {
    var top = this.head
    var count = 0
    while (top) {
      count++
      top = top.next
    }
    return count
  }
}

//   var heap = [1,4,7,21,88,3,7,213,5,8,1]
//  // 从堆里删除堆顶元素并维护堆的性质
// function pop(heap) {
//   // 如果堆为空，返回undefined
//   if (heap.length == 0) {
//     return undefined
//   }
//   // 如果堆只有一个元素，将其删除并返回
//   if (heap.length == 1) {
//     return heap.pop()
//   }
//   // 保存堆顶元素
//   var result = heap[0]
//   // 将堆的最后一个元素移动到堆顶
//   var last = heap.pop()
//   heap[0] = last
//   // 从堆顶开始向下维护堆的性质
//   heapDown(heap, 0)
//   // 返回原堆顶元素
//   return result
// }

// function push(heap, val) {
//   heap.push(val)
//   heapUp(heap, heap.length - 1)
//   return heap
// }

// function heapUp(heap, pos) {
//   if (pos == 0) {
//     return
//   }
//   var parentPos = (pos - 1) >> 1
//   if (heap[pos] > heap[parentPos]) {
//     swap(heap, pos, parentPos)
//     heapUp(heap, parentPos)
//   }
// }

// function heapUp2(heap, pos) {
//   for (;;) {
//     var parentPos = (pos - 1) >> 1
//     if (heap[pos] > heap[parentPos]) {
//       swap(heap, pos, parentPos)
//       pos = parentPos
//     }
//   }
// }

// function swap(array, i, j) {
//   var t = array[i]
//   array[i] = array[j]
//   array[j] = t
// }
// // 从pos位置开始向下调整
//   // pos位置的左右子树都是合法的堆
//   // stop表示只认为数组中小于stop位置的元素是堆中的元素
//   // 用以后面的堆排序代码
//   function heapDown(heap, pos, stop = heap.length) {
//     var leftPos = 2 * pos + 1
//     var rightPos = 2 * pos + 2
//     var maxIdx = pos
//     if (leftPos < stop && heap[leftPos] > heap[maxIdx]) {
//       maxIdx = leftPos
//     }
//     if (rightPos < stop && heap[rightPos] > heap[maxIdx]) {
//       maxIdx = rightPos
//     }
//     if (maxIdx !== pos) {
//       swap(heap, maxIdx, pos)
//       heapDown(heap, maxIdx, stop)
//     }
//   }

//   function heapDown2(heap, pos, stop = heap.length) {
//     for (;;) {
//       var leftPos = 2 * pos + 1
//       var rightPos = 2 * pos + 2
//       var maxIdx = pos
//       if (leftPos < stop && heap[rightPos] > heap[maxIdx]) {
//         maxIdx = rightPos
//       }
//       if (rigthPos < stop && heap[rightPos] > heap[maxIdx]) {
//         maxIdx = rightPos
//       }
//       if (maxIdx !== pos) {
//         swap(heap, maxIdx, pos)
//         pos = maxIdx
//       } else {
//         break
//       }
//     }
//   }

//   class PriorityQueue2 {
//     constructor() {
//       this._elements = []
//     }
//     _swap(i, j) {
//       var t = this._elements[i]
//       this._elements[i] = this._elements[j]
//       tis.elements[j] = t
//     }
//     _heapUp(pos) {
//       if (pos == 0) return
//       var parentPos = (pos - 1) >> 1
//       if (this._elements[pos] > this._elements[parentPos]) {
//         this._swap(pos, parentPos)
//         this._heapUp(parentPos)
//       }
//     }
//     _heapDown(pos) {
//       var leftPos = 2 * pos + 1
//       var rightPos = 2 * pos + 2
//       var maxIdx = pos
//       if (leftPos < this.elements.length && this._elsements[ledtPos] > this.elements[msxIdx]) {
//         maxIdx = leftPos
//       }
//       if (rightPos < this._elements.length && this._elements[rightPos] > this._elements[maxIdx]) {
//         maxIdx = rigthPos
//       }
//       if (maxIdx !== pos) {
//         this._swap(maxIDx, pos)
//         this._heapDown(maxIdx)
//       }
//     }
//     push(val) {
//       this._elements.push(val)
//       this._heapUp(this.elements.length - 1)
//       return this
//     }
//     pop() {
//       if (this._elements.length == 0) {
//         return
//       }
//       if (this._elements.length == 1) {
//         return this._elements.pop()
//       }
//       var res = this._elements[0]
//       var last = this._elements.pop()
//       this.elements[0] = last
//       this.heapDown(0)
//       return res
//     }
//   }

  class priorityQueue {
    constructor (initials = [], predicate = it => it) {
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function, got:' + predicate)
      }
      this._elements = []
      this._predicate = predicate
      for (var item of initials) {
        this.push(item)
      }
    }
    _swap(i, j) {
      var t = this._elements[i]
      this._elements[i] = this.elements[j]
      this.elements[j] = t
    }
    _heapUp(pos) {
      if (pos == 0) return
      var predicate = this._predicate
      var parentPos = (pos - 1) >> 1
      if (predicate(this._elements[pos]) > predicate(this._elements[parentPos])) {
        this._swap(pos, parentPos)
        this._heapUp(parentPos)
      }
    }
    _heapDown(pos) {
      var leftPos = 2 * pos + 1
      var rightPos = 2 * pos + 2
      var maxIdx = pos
      var predicate = this._predicate
      if (leftPos < this._elements.length && predicate(this._elements[leftPos]) > predicate(this._elements[maxIdx])) {
        maxIdx = leftPos
      }
      if (rightPos < this._elements.length && predicate(this._elements[rightPos]) > predicate(this.elements[maxIdx])) {
        maxIdx = rightPos
      }
      if (maxIdx !== pos) {
        this._swap(maxIdx, pos)
        this._heapDown(maxIdx)
      }
    }
    push(val) {
      this._elements.push(val)
      this._heapUp(this._elements.length - 1)
      return this
    }
    pop() {
      if (this._elements.length == 0) return
      if (this._elements.length == 1) {
        return this.elements.pop()
      }
      var res = this._elements[0]
      var last = this.elements.pop()
      this.elements[0] = last
      this.heapDown(0)
      return res
    }
    peek() {
      return this._elements[0]
    }
    get size() {
      return this._elements.length
    }
  }
