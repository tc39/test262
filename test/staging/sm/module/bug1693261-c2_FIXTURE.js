// |reftest| skip -- support file
import "./bug1693261-async_FIXTURE.js";
if (globalThis.testArray === undefined) {
  globalThis.testArray = [];
}
globalThis.testArray.push("c2");
