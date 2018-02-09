// This file was procedurally generated from the following sources:
// - src/TypedArrays/Float64Array-ctor.case
// - src/TypedArrays/ctors/buffer-arg-toindex-byteoffset.template
/*---
description: Float64Array Constructor (ToIndex(byteOffset) operations)
esid: sec-typedarray-buffer-byteoffset-length
features: [TypedArray]
flags: [generated]
info: |
    22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

    This description applies only if the TypedArray function is called with at
    least one argument and the Type of the first argument is Object and that
    object has an [[ArrayBufferData]] internal slot.

    ...
    7. Let offset be ? ToIndex(byteOffset).
    8. If offset modulo elementSize != 0, throw a RangeError exception.
    ...

---*/


var buffer = new ArrayBuffer(16);

var obj1 = {
  valueOf: function() {
    return 8;
  }
};

var obj2 = {
  toString: function() {
    return 8;
  }
};

var items = [
  [-0, 0, "-0"],
  [obj1, 8, "object's valueOf"],
  [obj2, 8, "object's toString"],
  ["", 0, "the Empty string"],
  ["0", 0, "string '0'"],
  ["8", 8, "string '8'"],
  [false, 0, "false"],
  [NaN, 0, "NaN"],
  [null, 0, "null"],
  [undefined, 0, "undefined"],
  [0.1, 0, "0.1"],
  [0.9, 0, "0.9"],
  [8.1, 8, "8.1"],
  [8.9, 8, "8.9"],
  [-0.1, 0, "-0.1"],
  [-0.99999, 0, "-0.99999"]
];

var TA = Float64Array;
items.forEach(function(item) {
  var offset = item[0];
  var expected = item[1];
  var name = item[2];

  var typedArray = new TA(buffer, offset);
  assert.sameValue(typedArray.byteOffset, expected, name + " byteOffset");
  assert.sameValue(typedArray.constructor, TA, name + " constructor");
  assert.sameValue(
    Object.getPrototypeOf(typedArray),
    TA.prototype,
    name + " prototype"
  );
});

// Testing 'true'. See step 8
if (TA.BYTES_PER_ELEMENT === 1) {
  var typedArray = new TA(buffer, true);
  assert.sameValue(typedArray.byteOffset, 1, "true => 1 byteOffset");
  assert.sameValue(typedArray.constructor, TA, "true => 1 constructor");
  assert.sameValue(
    Object.getPrototypeOf(typedArray),
    TA.prototype,
    "true => 1 prototype"
  );
} else {
  assert.throws(RangeError, function() {
    new TA(buffer, true);
  }, "1 modulo elementSize != 0, throws a RangeError");
}
