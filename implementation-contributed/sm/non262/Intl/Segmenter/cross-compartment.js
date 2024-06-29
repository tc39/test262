// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- non262-Intl-Segmenter-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
var g = newGlobal({});

var segmenter = new Intl.Segmenter();
var ccwSegmenter = new g.Intl.Segmenter();

const SegmentsPrototype = Object.getPrototypeOf(segmenter.segment(""));
const SegmentIteratorPrototype = Object.getPrototypeOf(segmenter.segment("")[Symbol.iterator]());

// Intl.Segmenter.prototype.resolvedOptions ()
var resolved1 = Intl.Segmenter.prototype.resolvedOptions.call(segmenter);
var resolved2 = Intl.Segmenter.prototype.resolvedOptions.call(ccwSegmenter);
assert.deepEqual(resolved1, resolved2);

// Intl.Segmenter.prototype.segment
var seg1 = Intl.Segmenter.prototype.segment.call(segmenter, "This is a test.");
var seg2 = Intl.Segmenter.prototype.segment.call(ccwSegmenter, "This is a test.");

// %Segments.prototype%.containing ( index )
var data1 = SegmentsPrototype.containing.call(seg1, 10);
var data2 = SegmentsPrototype.containing.call(seg2, 10);
assert.deepEqual(data1, data2);

// %Segments.prototype% [ @@iterator ] ()
var iter1 = SegmentsPrototype[Symbol.iterator].call(seg1);
var iter2 = SegmentsPrototype[Symbol.iterator].call(seg2);

// %SegmentIterator.prototype%.next ()
var result1 = SegmentIteratorPrototype.next.call(iter1);
var result2 = SegmentIteratorPrototype.next.call(iter2);
assert.deepEqual(result1, result2);

