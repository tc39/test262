# Feature Flags

Current, post-ES2015, flags used to identify new features:

- `async-functions`: Async Functions
- `async-iteration`: [Async Iteration and Generators](https://github.com/tc39/proposal-async-iteration)
- `object-rest`: [Object rest/spread properties](https://github.com/tc39/proposal-object-rest-spread)
- `object-spread`: [Object rest/spread properties](https://github.com/tc39/proposal-object-rest-spread)
- `regexp-dotall`: [RegExp s (dotAll) flag](https://github.com/tc39/proposal-regexp-dotall-flag)
- `regexp-lookbehind`: [RegExp lookBehind](https://github.com/tc39/proposal-regexp-lookbehind)
- `regexp-named-groups`: [RegExp named groups capturing]()
- `regexp-unicode-property-escapes`: [RegExp Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
- `SharedArrayBuffer`
- `Symbol.asyncIterator`

While it's mostly optional when already in a current released specification, it's highly recommended to reuse the features flags for any matching case in new tests.
