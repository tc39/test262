// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 822041;
var summary = "Live generators should not cache Gecko Profiler state";

print(BUGNUMBER + ": " + summary);

function* gen() {
  var x = yield turnoff();
  yield x;
  yield 'bye';
}

function turnoff() {
  print("Turning off profiler\n");
  disableGeckoProfiling();
  return 'hi';
}

for (var slowAsserts of [ true, false ]) {
  // The slowAssertions setting is not expected to matter
  if (slowAsserts)
    enableGeckoProfilingWithSlowAssertions();
  else
    enableGeckoProfiling();

  g = gen();
  assert.sameValue(g.next().value, 'hi');
  assert.sameValue(g.next('gurgitating...').value, 'gurgitating...');
  for (var x of g)
    assert.sameValue(x, 'bye');
}

// This is really a crashtest
