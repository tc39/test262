// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padstart
description: String#padStart should perform observable operations in the correct order
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

var result = String.prototype.padStart.call(receiver, fillString, maxLength);

assert.sameValue(result, 'defdefdeabc');

assert.sameValue(log, "|toString:receiver|valueOf:maxLength|toString:fillString", log);
