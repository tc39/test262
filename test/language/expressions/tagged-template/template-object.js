// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.3.7
description: Properties of the template object
info: |
    The first argument to a tagged template should be a template object as
    defined by the GetTemplateObject abstract operation.
includes: [propertyHelper.js]
---*/
var templateObject, sameObject;

function sameSite() {
  tag`${Math.random()}`;
}

function tag(parameter) {
  templateObject = parameter;
}

tag`${1}`;

assert(Array.isArray(templateObject.raw), 'The template object is an array');

assert(templateObject.hasOwnProperty('raw'));
verifyNotEnumerable(templateObject, 'raw');
verifyNotWritable(templateObject, 'raw')
verifyNotConfigurable(templateObject, 'raw');

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

sameSite();
sameObject = templateObject;
sameSite();

assert(
  templateObject === sameObject,
  'Normative: Cache templates per site, rather than by contents'
  // https://github.com/tc39/ecma262/pull/890
);
