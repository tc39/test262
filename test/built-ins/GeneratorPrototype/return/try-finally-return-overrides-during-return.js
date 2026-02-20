// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() triggers a finally block that contains its own
    return statement, the finally's return value overrides the original.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    If a finally block contains a return statement, that return value
    replaces the original return value from generator.return().
features: [generators]
---*/

function* genWithOverride() {
  try {
    yield "work";
  } finally {
    return "cleanup-override";
  }
}

var gen = genWithOverride();
gen.next();

var result = gen.return("cancelled");

assert.sameValue(
  result.value,
  "cleanup-override",
  "Finally return overrides generator.return() value",
);
assert.sameValue(result.done, true, "Generator is done");
