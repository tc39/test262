// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Instance reuses the toString from Error.prototype
esid: sec-aggregate-error
info: |
  Ref https://github.com/tc39/proposal-promise-any/pull/49

  Properties of the AggregateError Constructor

  - has a [[Prototype]] internal slot whose value is the intrinsic object %Error%.
features: [AggregateError]
---*/

assert.sameValue(
  AggregateError.prototype.toString,
  Error.prototype.toString,
  'AggregateError inherits the toString method from Error.prototype'
);

var sample = new AggregateError([], '');

assert.sameValue(
  sample.toString,
  Error.prototype.toString,
  'toString is inherited from Error.prototype'
);
