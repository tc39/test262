// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1202134;
var summary = "Return value should not be overwritten by finally block with normal execution.";

print(BUGNUMBER + ": " + summary);

// ==== single ====

var f;
f = function() {
  // F.[[type]] is normal
  // B.[[type]] is return
  try {
    return 42;
  } finally {
  }
};
assert.sameValue(f(), 42);

f = function() {
  // F.[[type]] is return
  try {
    return 42;
  } finally {
    return 43;
  }
};
assert.sameValue(f(), 43);

f = function() {
  // F.[[type]] is throw
  try {
    return 42;
  } finally {
    throw 43;
  }
};
var caught = false;
try {
  f();
} catch (e) {
  assert.sameValue(e, 43);
  caught = true;
}
assert.sameValue(caught, true);

f = function() {
  // F.[[type]] is break
  do try {
    return 42;
  } finally {
    break;
  } while (false);
  return 43;
};
assert.sameValue(f(), 43);

f = function() {
  // F.[[type]] is break
  L: try {
    return 42;
  } finally {
    break L;
  }
  return 43;
};
assert.sameValue(f(), 43);

f = function() {
  // F.[[type]] is continue
  do try {
    return 42;
  } finally {
    continue;
  } while (false);
  return 43;
};
assert.sameValue(f(), 43);

// ==== nested ====

f = function() {
  // F.[[type]] is normal
  // B.[[type]] is return
  try {
    return 42;
  } finally {
    // F.[[type]] is break
    do try {
      return 43;
    } finally {
      break;
    } while (0);
  }
};
assert.sameValue(f(), 42);

f = function() {
  // F.[[type]] is normal
  // B.[[type]] is return
  try {
    return 42;
  } finally {
    // F.[[type]] is break
    L: try {
      return 43;
    } finally {
      break L;
    }
  }
}
assert.sameValue(f(), 42);

f = function() {
  // F.[[type]] is normal
  // B.[[type]] is return
  try {
    return 42;
  } finally {
    // F.[[type]] is continue
    do try {
      return 43;
    } finally {
      continue;
    } while (0);
  }
};
assert.sameValue(f(), 42);

f = function() {
  // F.[[type]] is normal
  // B.[[type]] is return
  try {
    return 42;
  } finally {
    // F.[[type]] is normal
    // B.[[type]] is normal
    try {
      // F.[[type]] is throw
      try {
        return 43;
      } finally {
        throw 9;
      }
    } catch (e) {
    }
  }
};
assert.sameValue(f(), 42);

f = function() {
  // F.[[type]] is return
  try {
    return 41;
  } finally {
    // F.[[type]] is normal
    // B.[[type]] is return
    try {
      return 42;
    } finally {
      // F.[[type]] is break
      do try {
        return 43;
      } finally {
        break;
      } while (0);
    }
  }
};
assert.sameValue(f(), 42);

