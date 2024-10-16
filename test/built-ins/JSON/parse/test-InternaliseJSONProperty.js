// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-internalizejsonproperty
description: Codepaths involving InternaliseJSONProperty behave as expected

includes: [deepEqual.js]
features: [json-parse-with-source]
---*/

const replacements = [42,
                      ['foo'],
                      {foo:'bar'},
                      'foo'];

// Test Array forward modify
for (const replacement of replacements) {
  let alreadyReplaced = false;
  let expectedKeys = ['0','1',''];
  // lol who designed reviver semantics
  if (typeof replacement === 'object') {
    expectedKeys.splice(1, 0, ...Object.keys(replacement));
  }
  const o = JSON.parse('[1, 2]', function (k, v, { source }) {
    assert.sameValue(expectedKeys.shift(), k);
    if (k === '0') {
      if (!alreadyReplaced) {
        this[1] = replacement;
        alreadyReplaced = true;
      }
    } else if (k !== '') {
      assert.sameValue(undefined, source);
    }
    return this[k];
  });
  assert.sameValue(0, expectedKeys.length);
  assert.deepEqual([1, replacement], o);
}

// Test Object forward modify
for (const replacement of replacements) {
  let alreadyReplaced = false;
  let expectedKeys = ['p','q',''];
  if (typeof replacement === 'object') {
    expectedKeys.splice(1, 0, ...Object.keys(replacement));
  }
  const o = JSON.parse('{"p":1, "q":2}', function (k, v, { source }) {
    assert.sameValue(expectedKeys.shift(), k);
    if (k === 'p') {
      if (!alreadyReplaced) {
        this.q = replacement;
        alreadyReplaced = true;
      }
    } else if (k !== '') {
      assert.sameValue(undefined, source);
    }
    return this[k];
  });
  assert.sameValue(0, expectedKeys.length);
  assert.deepEqual({p:1, q:replacement}, o);
}


// Test Array append
{
  let log = [];
  const o = JSON.parse('[1,[]]', function (k, v, { source }) {
    log.push([k, v, source]);
    if (v === 1) {
      this[1].push('barf');
    }
    return this[k];
  });
  assert.deepEqual([['0', 1, '1'],
                    ['0', 'barf', undefined],
                    ['1', ['barf'], undefined],
                    ['', [1, ['barf']], undefined]],
                   log);
}

// Test Object add property
{
  let log = [];
  const o = JSON.parse('{"p":1,"q":{}}', function (k, v, { source }) {
    log.push([k, v, source]);
    if (v === 1) {
      this.q.added = 'barf';
    }
  return this[k];
  });
  assert.deepEqual([['p', 1, '1'],
                    ['added', 'barf', undefined],
                    ['q', {added:'barf'}, undefined],
                    ['', {p:1, q:{added:'barf'}}, undefined]],
                   log);
}
