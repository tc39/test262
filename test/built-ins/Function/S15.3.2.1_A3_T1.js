// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The abstract operation CreateDynamicFunction ... performs the following steps when called:
    ...
    7. Let bodyString be ? ToString(bodyArg).
    8. Let parameterStrings be a new empty List.
    9. For each element arg of parameterArgs, do
        a. Append ? ToString(arg) to parameterStrings.
    ...
es5id: 15.3.2.1_A3_T1
description: >
    Values of the function constructor arguments are
    "{toString:function(){throw "a";}}" and
    "{toString:function(){throw 1;}}"
---*/

var p = {
  toString: function() {
    throw "a";
  }
};
var body = {
  toString: function() {
    throw 1;
  }
};

try {
  var f = new Function(p, body);
  throw new Test262Error('#1: test failed');
} catch (e) {
  assert.sameValue(e, 1, 'The value of e is expected to be 1');
}
