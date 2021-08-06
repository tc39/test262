// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.1.1_1
description: Tests that the this-value is ignored in DateTimeFormat.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var obj, newObj;

    if (Constructor === Intl.DateTimeFormat) {
      obj = new Constructor();
      newObj = Intl.DateTimeFormat.call(obj);
      if (obj !== newObj) {
        throw new Test262Error("Should have modified existing object.");
      }
      var key = Object.getOwnPropertySymbols(newObj)[0];
      if (!(newObj[key] instanceof Intl.DateTimeFormat)) {
        throw new Test262Error("Should have installed a DateTimeFormat instance.");
      }
      return true;
    }

    // variant 1: use constructor in a "new" expression
    obj = new Constructor();
    newObj = Intl.DateTimeFormat.call(obj);
    if (obj === newObj) {
      throw new Test262Error("DateTimeFormat object created with \"new\" was not ignored as this-value.");
    }

    return true;
});
