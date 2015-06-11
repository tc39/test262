// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Assigning properties from a single source
includes: [propertyHelper.js]
---*/

var target = { attr1: 'initial', attr2: 'initial' };
var source = { attr2: 'source', attr3: 'source' };
var result;

result = Object.assign(target, source);

assert.sameValue(result, target);

assert.sameValue(
  target.attr1,
  'initial',
  'properties not defined by the source are unmodified'
);
verifyEnumerable(target, 'attr1');
verifyWritable(target, 'attr1');
verifyConfigurable(target, 'attr1');

assert.sameValue(
  target.attr2, 'source', 'source may modify an existing property'
);
verifyEnumerable(target, 'attr2');
verifyWritable(target, 'attr2');
verifyConfigurable(target, 'attr2');

assert.sameValue(target.attr3, 'source', 'source may define a new property');
verifyEnumerable(target, 'attr3');
verifyWritable(target, 'attr3');
verifyConfigurable(target, 'attr3');
