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
    var down = Complex.mul(helper) // down的虚部应该是0
    var real = up.real / down.real
    var imaginary = up.imaginary / down.real
    return new Complex(real, imaginary)
  }
}


