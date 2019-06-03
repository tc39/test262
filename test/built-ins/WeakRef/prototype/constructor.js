// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-weak-ref-prototype-object
description: WeakRef.prototype.constructor is not defined
info: |
  Ref https://github.com/tc39/proposal-weakrefs/issues/55#issuecomment-444534867
features: [WeakRef]
---*/

var actual = WeakRef.prototype.hasOwnProperty('constructor');
assert.sameValue(actual, false);
