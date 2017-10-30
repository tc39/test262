// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: ASI test in field declarations -- field with PropertyName "in" interpreted as index
esid: sec-automatic-semicolon-insertion
features: [class-fields]
---*/

var x = 1
var y = 2
var z = [42]

class C {
  a = x
  in
  z
  b = y
  in
  z
}

var c = new C();
assert.sameValue(c.a, true, 'a = x in z')
assert.sameValue(c.a, false, 'a = y in z')
assert.sameValue(Object.hasOwnProperty.call(c, "in"), false, "'in' interpreted as index");
assert.sameValue(Object.hasOwnProperty.call(c, "z"), false, "'z' interpreted as variable");
