// This file was procedurally generated from the following source file:
// - src/type-coercion/String.prototype.indexOf.py
// For more information, see CONTRIBUTING.md section "Type coercion tests".
/*---
description: String.prototype.indexOf type coercion for position parameter
esid: sec-string.prototype.indexof
info: |
  String.prototype.indexOf ( searchString [ , position ] )

  4. Let pos be ? ToInteger(position).
flags: [generated]
features: [Symbol, Symbol.toPrimitive, computed-property-names]
---*/

assert.throws(TypeError, function() { "".indexOf("", Symbol("1")); }, "ToInteger: Symbol => TypeError");
assert.throws(TypeError, function() { "".indexOf("", Object(Symbol("1"))); }, "ToInteger: unbox object with internal slot => Symbol => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {[Symbol.toPrimitive]: function() { return Symbol("1"); }}); }, "ToInteger: @@toPrimitive => Symbol => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {valueOf: function() { return Symbol("1"); }}); }, "ToInteger: valueOf => Symbol => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {toString: function() { return Symbol("1"); }}); }, "ToInteger: toString => Symbol => TypeError");
