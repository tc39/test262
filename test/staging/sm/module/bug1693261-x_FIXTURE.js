// |reftest| skip -- support file
import "./bug1693261-c1_FIXTURE.js";
if (globalThis.testArray === undefined) {
  globalThis.testArray = [];
}
globalThis.testArray.push("x");
