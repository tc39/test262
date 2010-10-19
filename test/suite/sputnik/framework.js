// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function SputnikError(message) {
  this.message = message;
}

SputnikError.prototype.toString = function () {
  return "SputnikError: " + this.message;
};

function testFailed(message) {
  throw new SputnikError(message);
}

function testPrint(message) {

}
