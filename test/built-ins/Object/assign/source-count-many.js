// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Assigning properties from multiple sources
includes: [propertyHelper.js]
---*/

var target = {
  attr1: 'initial',
  attr2: 'initial',
  attr4: 'initial'
};
var source2 = {
  attr2: 'source2',
  attr3: 'source2',
  attr5: 'source2'
};
var source4 = {
  attr4: 'source4',
  attr5: 'source4',
  attr6: 'source4'
};
var result;

result = Object.assign(target, undefined, source2, null, source4);

assert.sameValue(result, target);

assert.sameValue(target.attr1, 'initial', 'initial property unmodified');
verifyEnumerable(target, 'attr1');
verifyWritable(target, 'attr1');
verifyConfigurable(target, 'attr1');

assert.sameValue(
  target.attr2, 'source2', 'second source may modify an existing property'
);
verifyEnumerable(target, 'attr2');
verifyWritable(target, 'attr2');
verifyConfigurable(target, 'attr2');

assert.sameValue(
  target.attr3, 'source2', 'second source may define a new property'
);
verifyEnumerable(target, 'attr3');
verifyWritable(target, 'attr3');
verifyConfigurable(target, 'attr3');

assert.sameValue(
  target.attr4, 'source4', 'fourth source may modify an existing property'
);
verifyEnumerable(target, 'attr4');
verifyWritable(target, 'attr4');
verifyConfigurable(target, 'attr4');

assert.sameValue(target.attr5,
  'source4',
  'fourth source may modify a property defined by the second source'
);
verifyEnumerable(target, 'attr5');
verifyWritable(target, 'attr5');
verifyConfigurable(target, 'attr5');

assert.sameValue(
  target.attr6, 'source4', 'fourth source may define a new property'
);
verifyEnumerable(target, 'attr6');
verifyWritable(target, 'attr6');
verifyConfigurable(target, 'attr6');
