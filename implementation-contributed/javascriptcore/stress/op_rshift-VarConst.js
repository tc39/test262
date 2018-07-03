//@ runFTLNoCJIT

// If all goes well, this test module will terminate silently. If not, it will print
// errors. See binary-op-test.js for debugging options if needed.

load("./resources/binary-op-test.js");

//============================================================================
// Test configuration data:

var opName = "rshift";
var op = ">>";

load("./resources/binary-op-values.js");

tests = [];
generateBinaryTests(tests, opName, op, "VarConst", values, values);

run();
