// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter operates on the receiver's [[ErrorData]] internal slot directly.
  When the receiver is a Proxy, the proxy's traps are not consulted: a Proxy
  has no [[ErrorData]] internal slot regardless of its target, so the getter
  returns undefined.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.
features: [error-stack-accessor, Proxy, Reflect]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

function noTraps(label) {
  return new Proxy(new Error('inner'), {
    get: function () { throw new Test262Error(label + ': get trap should not fire'); },
    getOwnPropertyDescriptor: function () { throw new Test262Error(label + ': getOwnPropertyDescriptor trap should not fire'); },
    has: function () { throw new Test262Error(label + ': has trap should not fire'); },
    getPrototypeOf: function () { throw new Test262Error(label + ': getPrototypeOf trap should not fire'); },
    ownKeys: function () { throw new Test262Error(label + ': ownKeys trap should not fire'); },
  });
}

// (a) Proxy wrapping an Error instance: the Proxy itself has no [[ErrorData]],
// so the getter returns undefined without consulting the wrapped target.
assert.sameValue(get.call(noTraps('a')), undefined, 'Proxy wrapping Error returns undefined');

// (b) Same for property access through the Proxy: the [[Get]] forwards the
// access to the proxy's get trap (which would throw), but the receiver passed
// through to the inherited accessor on Error.prototype is the proxy itself.
// Since the proxy lacks [[ErrorData]], the getter returns undefined; however,
// because [[Get]] on the proxy first invokes the get trap, this exercises a
// different code path. Use a separate proxy whose get trap forwards to the
// target so the inherited accessor still receives the proxy as `this`.
var stackTrapCalls = 0;
var pB = new Proxy(new Error('inner'), {
  get: function (t, key, receiver) {
    if (key === 'stack') {
      stackTrapCalls += 1;
    }
    return Reflect.get(t, key, receiver);
  },
});
assert.sameValue(pB.stack, undefined, 'property access on proxy: receiver is proxy, no [[ErrorData]]');
assert.sameValue(stackTrapCalls, 1, 'get trap fired once for the property access');

// (c) Proxy wrapping a non-Error: still undefined.
assert.sameValue(
  get.call(new Proxy({}, {})),
  undefined,
  'Proxy wrapping plain object returns undefined'
);
