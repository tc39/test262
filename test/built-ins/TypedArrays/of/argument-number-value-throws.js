// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.from
description: >
  Return abrupt from object value
info: >
  22.2.2.2 %TypedArray%.of ( ...items )

  ...
  7. Repeat, while k < len
    ...
    c. Perform ? Set(newObj, Pk, kValue, true).
  ...
includes: [testTypedArray.js]
---*/

var obj1 = {
  valueOf() {
    return 42;
  }
};
var obj2 = {
  valueOf() {
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    TA.of(obj1, obj2);
  });
});
