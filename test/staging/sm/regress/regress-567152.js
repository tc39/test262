/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function c(a) {
    this.f = function () { a; };
}
c(0);  // set both BRANDED and GENERIC bits in global scope
Object.defineProperty(this, "f", {configurable: true, enumerable: true, value: 3});

