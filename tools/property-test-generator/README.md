# Property Test Generator

This tool generates standard property tests for built-in functions and objects.

Supported options:

- `--dry-run`: Don't write any output files.
- `--include`: Comma separated list of globs to filter which built-ins are included.
- `--exclude`: Comma separated list of globs to filter which built-ins are excluded.
- `--features`: Comma separated list of features from "features.txt". If not specified features are guessed based on files in the same directory.
- `--globals`: Spec files or directories defining additional global properties. Needed when generating tests for ECMA-402 or for proposals.

Run with `--help` to show all available command line arguments:

```sh
$ python tools/property-test-generator/main.py --help
```

Examples:

- Generate property tests for all built-ins defined in "$ECMA262/spec.html":
```sh
$ python tools/property-test-generator/main.py $ECMA262/spec.html
```

- Generate property tests for the `Number` constructor, but not the `Number` prototype object:
```sh
$ python tools/property-test-generator/main.py --include=Number* --exclude=Number.prototype* $ECMA262/spec.html
```

- Generate property tests for all built-ins defined in "$ECMA402/spec":
```sh
python tools/property-test-generator/main.py --global=$ECMA262/spec.html $ECMA402/spec/
```

The `--global` argument is necessary to correctly pick up global definitions from ECMA-262.

- Generate property tests for all built-ins defined in the `Temporal` proposal:
```sh
python tools/property-test-generator/main.py --globals=$ECMA262/spec.html --globals=$ECMA402/spec/ --features=Temporal $PROPOSALS/proposal-temporal/spec/
```

The `--features` argument adds `features: [Temporal]` to test metadata section.
