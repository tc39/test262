// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: If Type(value) is Object, evaluate ToPrimitive(value, String)
---*/

//CHECK#1
var object = {
  valueOf: function() {
    return 1
  }
};
assert.sameValue(parseInt(object), NaN, "{valueOf: function() {return 1}}");

//CHECK#2
var object = {
  valueOf: function() {
    return 1
  },
  toString: function() {
    return 0
  }
};
if (parseInt(object) !== 0) {
  throw new Test262Error('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; parseInt(object) === 0. Actual: ' + (parseInt(object)));
}

//CHECK#3
var object = {
  valueOf: function() {
    return 1
  },
  toString: function() {
    return {}
  }
};
if (parseInt(object) !== 1) {
  throw new Test262Error('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#4
try {
  var object = {
    valueOf: function() {
      throw "error"
    },
    toString: function() {
      return 1
    }
  };
  if (parseInt(object) !== 1) {
    throw new Test262Error('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
  }
}
catch (e) {
  if (e === "error") {
    throw new Test262Error('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) not throw "error"');
  } else {
    throw new Test262Error('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) not throw Error. Actual: ' + (e));
  }
}

//CHECK#5
var object = {
  toString: function() {
    return 1
  }
};
if (parseInt(object) !== 1) {
  throw new Test262Error('#5: var object = {toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#6
var object = {
  valueOf: function() {
    return {}
  },
  toString: function() {
    return 1
  }
}
if (parseInt(object) !== 1) {
  throw new Test262Error('#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#7
try {
  var object = {
    valueOf: function() {
      return 1
    },
    toString: function() {
      throw "error"
    }
  };
  parseInt(object);
  throw new Test262Error('#7.1: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; parseInt(object) throw "error". Actual: ' + (parseInt(object)));
}
catch (e) {
  if (e !== "error") {
    throw new Test262Error('#7.2: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; parseInt(object) throw "error". Actual: ' + (e));
  }
}

//CHECK#8
try {
  var object = {
    valueOf: function() {
      return {}
    },
    toString: function() {
      return {}
    }
  };
  parseInt(object);
  throw new Test262Error('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt(object) throw TypeError. Actual: ' + (parseInt(object)));
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt(object) throw TypeError. Actual: ' + (e));
  }
}
