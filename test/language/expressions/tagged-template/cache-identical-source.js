// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: Template caching using identical expressions
info: >
    Templates are cached by source location; different locations will
    have different template objects.
---*/
function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;

tag`head${a}tail`;
firstObject = previousObject;
assert(firstObject !== null);
previousObject = null;

tag`head${a}tail`;
assert.notSameValue(
  previousObject,
  firstObject,
  'The realm\'s template cache is by site, not string contents'
);
