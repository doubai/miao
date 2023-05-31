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
var a = new MyMap()
a.set('foo', 1)
a.set('bar', 2)
a.set('foo', 3)
a.delete("foo")

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
var a = new Vector(1,2)
var b = new Vector(2,2)
var c = a.plus(b)
var d = a.minus(b)

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
var a = new Complex(1,2)
var b = new Complex(2,4)
var c = a.div(b)


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
      this.node = head
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
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.count++
  }
  pop() {
    if (!this.head) return
    if (this.head == this.tail) {
      let res = this.head.val
      this.head = this.tail = null
      return res
    }
    this.count++
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
    var top = this.head
    var count = 0
    while (count < index) {
      count++
      top = top.next
    }
    return top.next.val
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




