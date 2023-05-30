class MyMap {
  constructor () {
    this._map = {}
    this.count = 0
  }
  set(key, val) {
  this._map[key] = val
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

class MaySet {
  constructor () {
    this._set = {}
    this.count = 0
  }
  add(val) {
    return this._set.add(val)
  }
  delete(val) {
  return this._set.delete(val)
  }
  has(val) {
    return this._set.has(val)
  }
  get size() {
    return this._set.count
  }
}

class Vector {
constructor(x, y) {
  this.x = x
  this.y = y
}
add(Vector) {
  var x = this.x + Vector.x
  var y = this.y + Vector.y
  return new Vector(x, y)
}
subtract(Vector) {
  var x = this.x - Vector.x
  var y = this.y - Vector.y
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
  add(Complex) {
    var real = this.real + Complex.real
    var imaginary = this.imaginary + Complex.imaginary
    return new Complex(real, imaginary)
  }
  subtract(Complex) {
    var real = this.real - Complex.real
    var imaginary = this.imaginary - Complex.imaginary
    return new Complex(real, imaginary)
  }
  multiply(Complex) {
    var real = this.real * Complex.real
    var imaginary = this.imaginary * Complex.imaginary
    return new Complex(real, imaginary)
  }
  div(Complex) {
    var helper = new Complex(Complex.real, -Complex.imaginary)
    var up = this.mul(helper)
    var down = Complex.mul(helper)
    var real = up.real / down.real
    var imaginary = up.imaginary / down.real
    return new Complex(real, imaginary)
  }
}

class Stack {
  constructor (head) {
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
    let res = this.head.val
    this.head = this.head.next
    return res
    this.count++
  }
  get size() {
    return this.count
  }
}

class LinkedList {
  constructor (head, tail) {
    this.head = null
    this.tail = null
  }
  append(val) {
    var node = {
      val, next: null
    }
    if (!head) {
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




