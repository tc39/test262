// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of number conversion from object value is the result
    of conversion from primitive value
es5id: 9.3_A5_T1
description: >
    new Number(), new Number(0), new Number(Number.NaN), new
    Number(null),  new Number(void 0) and others convert to Number by
    explicit transformation
---*/

// CHECK#1
if (Number(new Number()) !== 0) {
  $ERROR('#1: Number(new Number()) === 0. Actual: ' + (Number(new Number())));
}

// CHECK#2
if (Number(new Number(0)) !== 0) {
  $ERROR('#2: Number(new Number(0)) === 0. Actual: ' + (Number(new Number(0))));
}

// CHECK#3
assert.sameValue(Number(new Number(NaN)), NaN, "Number(new Number(NaN)");

// CHECK#4
if (Number(new Number(null)) !== 0) {
  $ERROR('#4.1: Number(new Number(null)) === 0. Actual: ' + (Number(new Number(null))));
} else {
  if (1 / Number(new Number(null)) !== Number.POSITIVE_INFINITY) {
    $ERROR('#4.2: Number(new Number(null)) === +0. Actual: -0');
  }
}

// CHECK#5
assert.sameValue(Number(new Number(void 0)), NaN, "Number(new Number(void 0)");

// CHECK#6
if (Number(new Number(true)) !== 1) {
  $ERROR('#6: Number(new Number(true)) === 1. Actual: ' + (Number(new Number(true))));
}

// CHECK#7
if (Number(new Number(false)) !== +0) {
  $ERROR('#7.1: Number(new Number(false)) === 0. Actual: ' + (Number(new Number(false))));
} else {
  if (1 / Number(new Number(false)) !== Number.POSITIVE_INFINITY) {
    $ERROR('#7.2: Number(new Number(false)) === +0. Actual: -0');
  }
}

// CHECK#8
if (Number(new Boolean(true)) !== 1) {
  $ERROR('#8: Number(new Boolean(true)) === 1. Actual: ' + (Number(new Boolean(true))));
}

// CHECK#9
if (Number(new Boolean(false)) !== +0) {
  $ERROR('#9.1: Number(new Boolean(false)) === 0. Actual: ' + (Number(new Boolean(false))));
} else {
  if (1 / Number(new Boolean(false)) !== Number.POSITIVE_INFINITY) {
    $ERROR('#9.2: Number(new Boolean(false)) === +0. Actual: -0');
  }
}

// CHECK#10
assert.sameValue(Number(new Array(2, 4, 8, 16, 32)), NaN, "Number(new Array(2,4,8,16,32))");

// CHECK#11
var myobj1 = {
  ToNumber: function() {
    return 12345;
  },
  toString: function() {
    return "67890";
  },
  valueOf: function() {
    return "[object MyObj]";
  }
};

assert.sameValue(Number(myobj1), NaN, "Number(myobj1)");

// CHECK#12
var myobj2 = {
  ToNumber: function() {
    return 12345;
  },
  toString: function() {
    return "67890";
  },
  valueOf: function() {
    return "9876543210";
  }
};

if (Number(myobj2) !== 9876543210) {
  $ERROR("#12: Number(myobj2) calls ToPrimitive with hint Number. Exptected: 9876543210. Actual: " + (Number(myobj2)));
}


// CHECK#13
var myobj3 = {
  ToNumber: function() {
    return 12345;
  },
  toString: function() {
    return "[object MyObj]";
  }
};

assert.sameValue(Number(myobj3), NaN, "Number(myobj3)");

// CHECK#14
var myobj4 = {
  ToNumber: function() {
    return 12345;
  },
  toString: function() {
    return "67890";
  }
};

if (Number(myobj4) !== 67890) {
  $ERROR("#14: Number(myobj4) calls ToPrimitive with hint Number. Exptected: 67890.  Actual: " + (Number(myobj4)));
}

// CHECK#15
var myobj5 = {
  ToNumber: function() {
    return 12345;
  }
};

assert.sameValue(Number(myobj5), NaN, "Number(myobj5)");
