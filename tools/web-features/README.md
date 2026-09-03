# Web Features in Test262

The `WEB_FEATURES.yml` file in the root of this repository represents a
collaboration with [the WebDX W3C Communuity
Group](https://www.w3.org/community/webdx/) to make Test262 more legible to web
developers.

The file defines a mapping between Test262 tests and "features" as perceived by
web developers and as defined in the
[web-features](https://github.com/web-platform-dx/web-features) project by the
[WebDX Community Group](https://www.w3.org/community/webdx/).

For more on the motivation, please see [GitHub issue
#4567](https://github.com/tc39/test262/issues/4567).

## File Structure

[CDDL](https://datatracker.ietf.org/doc/html/rfc8610) schema:

```cddl
WebFeatures = {
  features: [*WebFeature],
}

WebFeature = {
  name: text,
  files: [*FilePattern],
  ?tags: [*TagPattern],
)

FilePattern = text .regexp "!?[A-Za-z0-9_*./-]+"
TagPattern = text .regexp "!?[A-Za-z0-9_.-]+"
```

`FilePattern` entries describe test files and directories that should be
included in a given web feature. Then they match a directory name, then every
file in that directory and its subdirectories should be included. When the
asterisk character (`*`) appears in these entires, it will be interpreted as a
"wildcard" (or "glob") that can be satisfied by zero or more characters of any
kind.

`TagPattern` entries describe [`features` metadata tags as defined in the
frontmatter of Test262 test
files](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#features).
They are applied as the conjunction of test files matched with `FilePattern`,
serving as a means to refine expansive file patterns.

In both types of pattern, a leading exclamation mark character (`!`) denotes
negation. Any file that would be included according to the patterns that
precede a negated pattern should be omitted from the web feature.

A few practical examples:

```yaml
features:

  # Every test in the `test/built-ins/Promise` directory and in any of seven of
  # the named sub-directories.
  - name: promise
    files:
      - test/built-ins/Promise/*
      - test/built-ins/Promise/Symbol.species
      - test/built-ins/Promise/all
      - test/built-ins/Promise/prototype/catch
      - test/built-ins/Promise/prototype/then
      - test/built-ins/Promise/race
      - test/built-ins/Promise/reject
      - test/built-ins/Promise/resolve

  # Any test in the `test/language/expressions/object/method-definition`
  # directory (and its subdirectories) which bear the frontmatter tag
  # `async-functions` and which do NOT bear the frontmatter tag
  # `class-methods-private`
  - name: async-functions
    files:
    - test/language/expressions/object/method-definition
    tags:
    - async-functions
    - "!class-methods-private"
```

For details on the design considerations, please see [GitHub issue
#4571](https://github.com/tc39/test262/issues/4571).

## Tooling

This directory defines two command-line utilities in the form of executable
Python scripts. Their dependencies can be installed with the following command
(executed from the root of this repository):

    pip install -r tools/web-features/requirements.txt

### `lint.py`

This script validates basic expectations about the contents of the
`WEB_FEATURES.yml` (e.g. that the file conforms to the schema and that every
pattern impacts the set of matched test files). If invoked with the argument
`--manifest`, this utility will write a "manifest" of all web-features and
their associated test file names.

### `check-coverage.py`

This script compares two web-features manifests to identify changes that likely
indicate an unintentional regression. Specifically, any reduction in the number
of tests associated with a web-feature will produce an error.
