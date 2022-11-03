// Copyright 2022 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Matching behavior with duplicate named capture groups
esid: prod-GroupSpecifier
features: [regexp-duplicate-named-groups]
includes: [compareArray.js]
---*/

assert.compareArray(["b", undefined, "b"], "bab".match(/(?<x>a)|(?<x>b)/));
assert.compareArray(["b", "b", undefined], "bab".match(/(?<x>b)|(?<x>a)/));

assert.compareArray(["aa", "a", undefined], "aa".match(/(?:(?<x>a)|(?<x>b))\k<x>/));
assert.compareArray(["bb", undefined, "b"], "bb".match(/(?:(?<x>a)|(?<x>b))\k<x>/));

let matchResult = "aabb".match(/(?:(?:(?<x>a)|(?<x>b))\k<x>){2}/);
assert.compareArray(["aabb", undefined, "b"], matchResult);
assert.sameValue(matchResult.groups.x, "b");

let notMatched = "abab".match(/(?:(?:(?<x>a)|(?<x>b))\k<x>){2}/);
assert.sameValue(notMatched, null);
