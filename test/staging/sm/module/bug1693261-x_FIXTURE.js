// |reftest| skip -- support file
// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
import "./bug1693261-c1_FIXTURE.js";
if (globalThis.testArray === undefined) {
  globalThis.testArray = [];
}
globalThis.testArray.push("x");
