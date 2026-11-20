// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  A method with the computed name "constructor" is not the class constructor,
  so it can have decorators
esid: sec-class-definitions-static-semantics-early-errors
features: [decorators]
---*/

var kinds = [];
function dec(value, context) {
  kinds.push(context.kind + ':' + context.name);
}

class C {
  @dec ['constructor']() {
    return 'method';
  }
}

assert.sameValue(kinds.join(), 'method:constructor');
assert.sameValue(C.prototype.constructor(), 'method', 'the decorated method replaces the constructor property');
