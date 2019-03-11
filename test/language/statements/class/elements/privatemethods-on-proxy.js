// Copyright (C) 2019 Caio Lima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Successfully access private method on Proxy objects
esid: sec-privatefieldget
info: |
  PrivateFieldGet(P, O)
    ...
    4. Perform ? PrivateBrandCheck(O, P).
    5. If P.[[Kind]] is "method",
      a. Return P.[[Value]].
      ...
includes: [compareArray.js]
features: [class, class-fields-private, Proxy]
---*/

function assertArray(l, r) {
  assert(compareArray(l, r), r);
}

let arr = [];
	
class ProxyBase {
  constructor() {
    return new Proxy(this, {
      get: function (obj, prop) {
        arr.push(prop);
        return obj[prop];
      }
    });
  }
}

class Test extends ProxyBase {
  #f() {
    return 3;
  }
  method() {
    return this.#f();
  }
}

let t = new Test();
let r = t.method();
assert.sameValue(r, 3);

assertArray(arr, ['method']);

