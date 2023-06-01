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
  function heapify(ary) {
    var start = (ary.length - 1) >> 1
    for (var i = start; i >= 0; i--) {
      heapDown2(ary, i)
    }
    return ary
  }

  function heapDown(heap, pos, stop = heap.length) {
    var leftPos = 2 * pos + 1
    var rightPos = 2 * pos + 2
    var maxIdx = pos
    if (leftPos < stop && heap[leftPos] > heap[maxIdx]) {
      maxIdx = leftPos
    }
    if (rightPos < stop && heap[rightPos] > heap[maxIdx]) {
      maxIdx = rightPos
    }
    if (maxIdx !== pos) {
      swap(heap, maxIdx, pos)
      heapDown(heap, maxIdx, stop)
    }
  }

  function swap(array, i, j) {
    var t = array[i]
    array[i] = array[j]
    array[j] = t
  }

  function heapSort(ary) {
    heapify(ary)

    for (var i = ary.length - 1; i > 0; i--) {
      swap(ary, i, 0)
      heapDown2(ary, 0, i)
    }
    return ary
  }

