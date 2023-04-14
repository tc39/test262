// This file was procedurally generated from the following sources:
// - tools/generation/test/fixtures/regexp.case
// - tools/generation/test/fixtures/regexp/escaping.template
/*---
description: test (RegExp template)
esid: sec-regexp
flags: [generated]
info: |
    template info

    case info
---*/

// This should be expanded, and not treat the // as a comment:

/foo/g;

// This escaped slash should not confuse the parser:

/foo\/bar/g;

// Multiple escaped slashes should not confuse the parser:

/^https?:\/\/(.+?)\./g;

// A star just before the ending slash should not confuse the parser:

/foo*/g;
