// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-createjsonparserecord
description: Codepaths involving CreateJSONParseRecord behave as expected

includes: [deepEqual.js]
features: [json-parse-with-source]
---*/

function GenerateParseReviverFunction(texts) {
  let i = 0;
  return function (key, value, context) {
    assert(typeof context === 'object');
    assert.sameValue(Object.prototype, Object.getPrototypeOf(context));
    // The json value is a primitive value, it's context only has a source property.
    if (texts[i] !== undefined) {
      const descriptor = Object.getOwnPropertyDescriptor(context, 'source');
      assert(descriptor.configurable);
      assert(descriptor.enumerable);
      assert(descriptor.writable);
      assert.sameValue(undefined, descriptor.get);
      assert.sameValue(undefined, descriptor.set);
      assert.sameValue(texts[i++], descriptor.value);

      assert.deepEqual(['source'], Object.getOwnPropertyNames(context));
      assert.deepEqual([], Object.getOwnPropertySymbols(context));
    } else {
      // The json value is JSArray or JSObject, it's context has no property.
      assert(!Object.hasOwn(context, 'source'));
      assert.deepEqual([], Object.getOwnPropertyNames(context));
      assert.deepEqual([], Object.getOwnPropertySymbols(context));
      i++;
    }
    return value;
  };
}

// Test NumericLiteral
assert.sameValue(1, JSON.parse('1', GenerateParseReviverFunction(['1'])));
assert.sameValue(1.1, JSON.parse('1.1', GenerateParseReviverFunction(['1.1'])));
assert.sameValue(-1, JSON.parse('-1', GenerateParseReviverFunction(['-1'])));
assert.sameValue(
  -1.1,
  JSON.parse('-1.1', GenerateParseReviverFunction(['-1.1']))
);
assert.sameValue(
  11,
  JSON.parse('1.1e1', GenerateParseReviverFunction(['1.1e1']))
);
assert.sameValue(
  11,
  JSON.parse('1.1e+1', GenerateParseReviverFunction(['1.1e+1']))
);
assert.sameValue(
  0.11,
  JSON.parse('1.1e-1', GenerateParseReviverFunction(['1.1e-1']))
);
assert.sameValue(
  11,
  JSON.parse('1.1E1', GenerateParseReviverFunction(['1.1E1']))
);
assert.sameValue(
  11,
  JSON.parse('1.1E+1', GenerateParseReviverFunction(['1.1E+1']))
);
assert.sameValue(
  0.11,
  JSON.parse('1.1E-1', GenerateParseReviverFunction(['1.1E-1']))
);

assert.sameValue('1', JSON.stringify(JSON.rawJSON(1)));
assert.sameValue('1.1', JSON.stringify(JSON.rawJSON(1.1)));
assert.sameValue('-1', JSON.stringify(JSON.rawJSON(-1)));
assert.sameValue('-1.1', JSON.stringify(JSON.rawJSON(-1.1)));
assert.sameValue('11', JSON.stringify(JSON.rawJSON(1.1e1)));
assert.sameValue('0.11', JSON.stringify(JSON.rawJSON(1.1e-1)));

// Test NullLiteral, BoolLiteral, StringLiteral
assert.sameValue(
  null,
  JSON.parse('null', GenerateParseReviverFunction(['null']))
);
assert.sameValue(
  true,
  JSON.parse('true', GenerateParseReviverFunction(['true']))
);
assert.sameValue(
  false,
  JSON.parse('false', GenerateParseReviverFunction(['false']))
);
assert.sameValue(
  'foo',
  JSON.parse('"foo"', GenerateParseReviverFunction(['"foo"']))
);

assert.sameValue('null', JSON.stringify(JSON.rawJSON(null)));
assert.sameValue('true', JSON.stringify(JSON.rawJSON(true)));
assert.sameValue('false', JSON.stringify(JSON.rawJSON(false)));
assert.sameValue('"foo"', JSON.stringify(JSON.rawJSON('"foo"')));

// Test ObjectLiteral
assert.deepEqual(
  {},
  JSON.parse('{}', GenerateParseReviverFunction([]))
);
assert.deepEqual(
  { 42: 37 },
  JSON.parse('{"42":37}', GenerateParseReviverFunction(['37']))
);
assert.deepEqual(
  { x: 1, y: 2 },
  JSON.parse('{"x": 1, "y": 2}', GenerateParseReviverFunction(['1', '2']))
);
// undefined means the json value is JSObject or JSArray and the passed
// context to the reviver function has no source property.
assert.deepEqual(
  { x: [1, 2], y: [2, 3] },
  JSON.parse(
    '{"x": [1,2], "y": [2,3]}',
    GenerateParseReviverFunction(['1', '2', undefined, '2', '3', undefined])
  )
);
assert.deepEqual(
  { x: { x: 1, y: 2 } },
  JSON.parse(
    '{"x": {"x": 1, "y": 2}}',
    GenerateParseReviverFunction(['1', '2', undefined, undefined])
  )
);

assert.sameValue('{"42":37}', JSON.stringify({ 42: JSON.rawJSON(37) }));
assert.sameValue(
  '{"x":1,"y":2}',
  JSON.stringify({ x: JSON.rawJSON(1), y: JSON.rawJSON(2) })
);
assert.sameValue(
  '{"x":{"x":1,"y":2}}',
  JSON.stringify({ x: { x: JSON.rawJSON(1), y: JSON.rawJSON(2) } })
);

// Test ArrayLiteral
assert.deepEqual([1], JSON.parse('[1.0]', GenerateParseReviverFunction(['1.0'])));
assert.deepEqual(
  [1.1],
  JSON.parse('[1.1]', GenerateParseReviverFunction(['1.1']))
);
assert.deepEqual([], JSON.parse('[]', GenerateParseReviverFunction([])));
assert.deepEqual(
  [1, '2', true, null, { x: 1, y: 1 }],
  JSON.parse(
    '[1, "2", true, null, {"x": 1, "y": 1}]',
    GenerateParseReviverFunction(['1', '"2"', 'true', 'null', '1', '1'])
  )
);

assert.sameValue('[1,1.1]', JSON.stringify([JSON.rawJSON(1), JSON.rawJSON(1.1)]));
assert.sameValue(
  '["1",true,null,false]',
  JSON.stringify([
    JSON.rawJSON('"1"'),
    JSON.rawJSON(true),
    JSON.rawJSON(null),
    JSON.rawJSON(false),
  ])
);
assert.sameValue(
  '[{"x":1,"y":1}]',
  JSON.stringify([{ x: JSON.rawJSON(1), y: JSON.rawJSON(1) }])
);

// Test combinations of possible JSON input

{
  let reviverCallIndex = 0;
  const expectedKeys = ['a', 'b', 'c', ''];
  const reviver = function(key, value, {source}) {
    assert.sameValue(expectedKeys[reviverCallIndex++], key);
    if (key == 'a') {
      this.b = 2;
      assert.sameValue('0', source);
    } else if (key == 'b') {
      this.c = 3;
      assert.sameValue(2, value);
      assert.sameValue(undefined, source);
    } else if (key == 'c') {
      assert.sameValue(3, value);
      assert.sameValue(undefined, source);
    }
    return value;
  }
  assert.deepEqual({a: 0, b: 2, c: 3}, JSON.parse('{"a": 0, "b": 1, "c": [1, 2]}', reviver));
}

{
  let reviverCallIndex = 0;
  const expectedKeys = ['0', '1', '2', '3', ''];
  const reviver = function(key, value, {source}) {
    assert.sameValue(expectedKeys[reviverCallIndex++], key);
    if (key == '0') {
      this[1] = 3;
      assert.sameValue(1, value);
      assert.sameValue('1', source);
    } else if (key == '1') {
      this[2] = 4;
      assert.sameValue(3, value);
      assert.sameValue(undefined, source);
    } else if(key == '2') {
      this[3] = 5;
      assert.sameValue(4, value);
      assert.sameValue(undefined, source);
    } else if(key == '5'){
      assert.sameValue(5, value);
      assert.sameValue(undefined, source);
    }
    return value;
  }
  assert.deepEqual([1, 3, 4, 5], JSON.parse('[1, 2, 3, {"a": 1}]', reviver));
}
