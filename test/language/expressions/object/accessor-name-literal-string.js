// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
description: String literals as accessor property names
info: |
  12.2.6.7 Runtime Semantics: Evaluation

  [...]

  LiteralPropertyName : StringLiteral

  1. Return a String value whose code units are the SV of the StringLiteral.
---*/

var singleSet, doubleSet, emptySet, ltSet, characterSet, hexSet, unicodeSet;
var obj = {
  get 'singleQuote'() { return 'get single quote'; },
  set 'singleQuote'(param) { singleSet = param; },
  get "doubleQuote"() { return 'get double quote'; },
  set "doubleQuote"(param) { doubleSet = param; },
  get ''() { return 'get empty'; },
  set ''(param) { emptySet = param; },
  get 'line\
Terminator'() { return 'get line terminator'; },
  set 'line\
Terminator'(param) { ltSet = param; },
  get 'character\tescape'() { return 'get character escape'; },
  set 'character\tescape'(param) { characterSet = param; },
  get 'hex\x45scape'() { return 'get hex escape'; },
  set 'hex\x45scape'(param) { hexSet = param; },
  get 'unicod\u{000065}Escape'() { return 'get unicode escape'; },
  set 'unicod\u{000065}Escape'(param) { unicodeSet = param; }
};

assert.sameValue(obj.singleQuote, 'get single quote');
assert.sameValue(obj.doubleQuote, 'get double quote');
assert.sameValue(obj[''], 'get empty');
assert.sameValue(obj.lineTerminator, 'get line terminator');
assert.sameValue(obj['character	escape'], 'get character escape');
assert.sameValue(obj.hexEscape, 'get hex escape');
assert.sameValue(obj.unicodeEscape, 'get unicode escape');

obj.singleQuote = 'set single quote';
assert.sameValue(singleSet, 'set single quote');

obj.doubleQuote = 'set double quote';
assert.sameValue(doubleSet, 'set double quote');

obj[''] = 'set empty';
assert.sameValue(emptySet, 'set empty');

obj.lineTerminator = 'set line terminator';
assert.sameValue(ltSet, 'set line terminator');

obj['character	escape'] = 'set character escape';
assert.sameValue(characterSet, 'set character escape');

obj.hexEscape = 'set hex escape';
assert.sameValue(hexSet, 'set hex escape');

obj.unicodeEscape = 'set unicode escape';
assert.sameValue(unicodeSet, 'set unicode escape');
