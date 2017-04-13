/// Copyright (c) 2012 Ecma International.  All rights reserved.
/// This code is governed by the BSD license found in the LICENSE file.

function Test262Error(message) {
  this.message = message || "";
}

Test262Error.prototype.toString = function () {
  return "Test262Error: " + this.message;
};

var $ERROR;
$ERROR = function $ERROR(message) {
  throw new Test262Error(message);
};
