// Copyright 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: `\A`, `\z`, and `\Z` cannot be quantified in v-mode
esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

var assertions = ["\\A", "\\z", "\\Z"];
var quantifiers = ["*", "+", "?", "{1}", "{1,}", "{1,2}", "*?", "+?", "??", "{1}?", "{1,}?", "{1,2}?"];

for (var i = 0; i < assertions.length; i++) {
  for (var j = 0; j < quantifiers.length; j++) {
    var source = assertions[i] + quantifiers[j];
    assert.throws(SyntaxError, function() {
      new RegExp(source, "v");
    }, "Expected " + source + " to be a SyntaxError in v-mode RegExp");
  }
}
