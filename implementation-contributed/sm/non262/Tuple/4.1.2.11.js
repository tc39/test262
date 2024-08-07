// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
/*
2. If ! IsValidTupleIndex(numericIndex) is false, return empty.
*/

var t = #[1,2,3,4,5];
assert.sameValue(t[true], undefined);
assert.sameValue(t[false], undefined);
assert.sameValue(t[-2], undefined);
/* TODO: This should be undefined as per section 4.1.2.10, step 1,
 * but it's currently treated the same as t[0].
 */
// assert.sameValue(t[-0], undefined);
assert.sameValue(t[10], undefined);
assert.sameValue(t[NaN], undefined);
assert.sameValue(t[Number.POSITIVE_INFINITY], undefined);
assert.sameValue(t[Number.NEGATIVE_INFINITY], undefined);
assert.sameValue(t["abc"], undefined);
assert.sameValue(t["3"], t[3]);
assert.sameValue(t[new String("3")], t[3]);
assert.sameValue(t["0"], t[0]);
assert.sameValue(t[new String("0")], t[0]);
assert.sameValue(t[new Number(0)], t[0]);
assert.sameValue(t[new Number(3)], t[3]);
assert.sameValue(t[1.1], undefined);
assert.sameValue(t[null], undefined);
assert.sameValue(t[undefined], undefined);

var object = {
  valueOf: function() {
    return 1
  }
};
assert.sameValue(t[object], undefined);

var object = {
  valueOf: function() {
    return 1
  },
  toString: function() {
    return 0
  }
};
assert.sameValue(t[object], t[0]);

var object = {
  valueOf: function() {
    return 1
  },
  toString: function() {
    return {}
  }
};
assert.sameValue(t[object], t[1]);

//CHECK#4
try {
  x = [];
  var object = {
    valueOf: function() {
      throw "error"
    },
    toString: function() {
      return 1
    }
  };
  assert.sameValue(tup[object], tup[1]);
}
catch (e) {
  assert.sameValue(e === "error", false);
}

//CHECK#5
var object = {
  toString: function() {
    return 1
  }
};
assert.sameValue(t[object], t[1]);

//CHECK#6
x = [];
var object = {
  valueOf: function() {
    return {}
  },
  toString: function() {
    return 1
  }
}
assert.sameValue(t[object], t[1]);

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
  t[object];
  throw new SyntaxError();
}
catch (e) {
  assert.sameValue(e, "error", 'The value of e is expected to be "error"');
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
  t[object];
  throw new SyntaxError();
}
catch (e) {
  assert.sameValue(e instanceof TypeError, true);
}

