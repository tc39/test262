// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.3.7
description: >
    The first argument to a tagged template should be a template object as
    defined by the GetTemplateObject abstract operation.
includes: [propertyHelper.js]
---*/
var templateObject;

(function(parameter) {
  templateObject = parameter;
})`${1}`;

templateObject.test262Prop = true;
assert.sameValue(
  templateObject.test262Prop, undefined, 'The template object is frozen'
);
assert(Array.isArray(templateObject.raw), 'The template object is an array');

assert(templateObject.hasOwnProperty('raw'));
verifyNotEnumerable(templateObject, 'raw');
verifyNotWritable(templateObject, 'raw')
verifyNotConfigurable(templateObject, 'raw');

templateObject.raw.test262Prop = true;
assert.sameValue(
  templateObject.raw.test262Prop, undefined, 'The "raw" object is frozen'
);
assert(Array.isArray(templateObject), 'The "raw" object is an array');

verifyEnumerable(templateObject, '0');
verifyNotWritable(templateObject, '0')
verifyNotConfigurable(templateObject, '0');

verifyNotEnumerable(templateObject, 'length');
verifyNotWritable(templateObject, 'length')
verifyNotConfigurable(templateObject, 'length');

verifyEnumerable(templateObject.raw, '0');
verifyNotWritable(templateObject.raw, '0')
verifyNotConfigurable(templateObject.raw, '0');

verifyNotEnumerable(templateObject.raw, 'length');
verifyNotWritable(templateObject.raw, 'length')
verifyNotConfigurable(templateObject.raw, 'length');
