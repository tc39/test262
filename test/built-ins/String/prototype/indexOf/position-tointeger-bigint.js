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
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/

assert.throws(TypeError, function() { "".indexOf("", 0n); }, "ToInteger: BigInt => TypeError");
assert.throws(TypeError, function() { "".indexOf("", Object(0n)); }, "ToInteger: unbox object with internal slot => BigInt => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {[Symbol.toPrimitive]: function() { return 0n; }}); }, "ToInteger: @@toPrimitive => BigInt => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {valueOf: function() { return 0n; }}); }, "ToInteger: valueOf => BigInt => TypeError");
assert.throws(TypeError, function() { "".indexOf("", {toString: function() { return 0n; }}); }, "ToInteger: toString => BigInt => TypeError");
