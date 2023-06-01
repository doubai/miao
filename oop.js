class MyMap {
  constructor () {
    this.map = {}
    this.count = 0
  }
  set(key, val) {
  this.map[key] = val
  this.count++
  }
  get(key) {
    return this.map[key]
  }
  has(key) {
    return key in this.map
  }
  delete(key) {
    return delete this.map[key]
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

  class PriorityQueue {
    constructor (initials = [], predicate = it => it) {
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function, got:' + predicate)
      }
      this.elements = []
      this.predicate = predicate
      for (var item of initials) {
        this.push(item)
      }
    }
    swap(i, j) {
      var t = this.elements[i]
      this.elements[i] = this.elements[j]
      this.elements[j] = t
    }
    heapUp(pos) {
      if (pos == 0) return
      var predicate = this.predicate
      var parentPos = (pos - 1) >> 1
      if (predicate(this.elements[pos]) > predicate(this.elements[parentPos])) {
        this.swap(pos, parentPos)
        this.heapUp(parentPos)
      }
    }
    heapDown(pos) {
      var leftPos = 2 * pos + 1
      var rightPos = 2 * pos + 2
      var maxIdx = pos
      var predicate = this.predicate
      if (leftPos < this.elements.length && predicate(this.elements[leftPos]) > predicate(this.elements[maxIdx])) {
        maxIdx = leftPos
      }
      if (rightPos < this.elements.length && predicate(this.elements[rightPos]) > predicate(this.elements[maxIdx])) {
        maxIdx = rightPos
      }
      if (maxIdx !== pos) {
        this.swap(maxIdx, pos)
        this.heapDown(maxIdx)
      }
    }
    push(val) {
      this.elements.push(val)
      this.heapUp(this.elements.length - 1)
      return this
    }
    pop() {
      if (this.elements.length == 0) return
      if (this.elements.length == 1) {
        return this.elements.pop()
      }
      var res = this.elements[0]
      var last = this.elements.pop()
      this.elements[0] = last
      this.heapDown(0)
      return res
    }
    heapify(ary) {
      var start = (ary.length - 1) >> 1
      for (var i = start; i >= 0; i--) {
        heapDown(ary, i)
      }
      return ary
    }
     heapSort(ary) {
      heapify(ary)
      for (var i = ary.length - 1; i > 0; i--) {
        swap(ary, i, 0)
        heapDown(ary, 0, i)
      }
      return ary
    }
    peek() {
      return this.elements[0]
    }
    get size() {
      return this.elements.length

    }
  }

