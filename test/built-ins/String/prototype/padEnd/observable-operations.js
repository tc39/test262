// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padend
description: String#padEnd should perform observable operations in the correct order
author: Jordan Harband
---*/

function createPrimitiveObserver(name, string, value) {
  return {
    toString: function () {
      log += '|toString:' + name;
      return string;
    },
    valueOf: function () {
      log += '|valueOf:' + name;
      return value;
    }
  };
};

var log = "";
var receiver = createPrimitiveObserver('receiver', 'abc');

var fillString = createPrimitiveObserver('fillString', 'def');

var maxLength = createPrimitiveObserver('maxLength', {}, 11);

var result = String.prototype.padEnd.call(receiver, fillString, maxLength);

assert.sameValue(result, 'abcdefdefde');

assert.sameValue(log, "|toString:receiver|valueOf:maxLength|toString:fillString", log);
