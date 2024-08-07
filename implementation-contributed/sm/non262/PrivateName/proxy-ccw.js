// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-PrivateName-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/
// Validate CCWs and proxies
class Base {
  constructor(o) {
    return o;
  }
}

class A extends Base {
  x1 = 12;
  #x = 10;
  static gx(o) {
    return o.#x;
  }
  static sx(o, x) {
    o.#x = x;
  }
  static hasx(o) {
    try {
      o.#x;
      return true;
    } catch {
      return false;
    }
  }
}


var g = newGlobal({newCompartment: true});
g.A = A;

// cross_compartment_target is a cross compartment wrapper to an empty object.
var cross_compartment_target = g.eval('this.x = {}; this.x');

// #x gets stamped into the target of the CCW.
new A(cross_compartment_target);
assert.sameValue(A.hasx(cross_compartment_target), true);

// Can we update and read from this compartment?
assert.sameValue(A.gx(cross_compartment_target), 10);
var o = {test: 12};
A.sx(cross_compartment_target, o);
assert.sameValue(A.gx(cross_compartment_target), o);

// Can we read and update from the other compartment?
assert.sameValue(g.eval('this.A.gx(this.x)'), o);
var y = g.eval('this.y = {test: 13}; this.A.sx(this.x, this.y); this.y');
assert.sameValue(g.eval('this.A.gx(this.x)'), y);
assert.sameValue(A.gx(cross_compartment_target), y);


if (typeof nukeCCW === 'function') {
  // Nuke the CCW. Now things should throw.
  nukeCCW(cross_compartment_target);
  var threw = true;
  try {
    A.gx(cross_compartment_target);
    threw = false;
  } catch (e) {
  }
  assert.sameValue(threw, true);
}


