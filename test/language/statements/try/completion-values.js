// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Direct eval try/catch/finally for completion value
esid: sec-performeval
---*/

assert.sameValue(
  eval('99; do { -99; try { 42 } catch (e) { -1 } finally { -2; break; -3 }; } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { [].x.x } catch (e) { 42; } finally { -2; break; -3 }; } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { 42 } catch (e) { -1 } finally { -2; break; -3 }; -77 } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { [].x.x } catch (e) { 42; } finally { -2; break; -3 }; -77 } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { 42 } catch (e) { -1 } finally { -2; continue; -3 }; } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { [].x.x } catch (e) { 42; } finally { -2; continue; -3 }; } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { 42 } catch (e) { -1 } finally { -2; continue; -3 }; -77 } while (false);'),
  42
);
assert.sameValue(
  eval('99; do { -99; try { [].x.x } catch (e) { 42; } finally { -2; continue; -3 }; -77 } while (false);'),
  42
);
