
import yaml

def int2str(n, base=10):
    "This function strips the 'L' suffix that shows up sometimes"
    if base == 2:
        s = bin(n)[2:]
    elif base == 8:
        s = oct(n)[1:]
    elif base == 10:
        s = str(n)
    elif base == 16:
        s = hex(n)[2:]
    else:
        assert False
    if s[-1:] == "L":
        s = s[:-1]
    return s

allowed_frontmatter_fields = frozenset([
    "description", "esid", "info", "features", "includes"
])
frontmatter_field_order = [
    "description", "esid", "info", "flags", "includes", "features"
]
assert all(_k in frontmatter_field_order for _k in allowed_frontmatter_fields)


allowed_features = set([
    "BigInt", "Symbol", "Symbol.toPrimitive", "computed-property-names",
])
class TestCase:
    allowed_flags = set([
        "wrap", "toprimitive", "throws", "err", "MyError",
    ]) | allowed_features
    def __init__(self, expected_str, input_str, flags=None, message=None):
        self.expected_str = expected_str
        self.input_str = input_str
        if flags == None: flags = []
        assert all(f in TestCase.allowed_flags for f in flags)
        self.flags = flags
        self.message = message
class Conversion:
    def __init__(self, **kwargs):
        assert set(kwargs.keys()) == set(["tests", "from_nominal_value", "primitive_hint"])
        self.tests = kwargs["tests"]
        self.from_nominal_value = kwargs["from_nominal_value"]
        self.primitive_hint = kwargs["primitive_hint"]

class TestFile:
    def __init__(self, conversion_str, category_tag, frontmatter_args, preamble):
        self.conversion_str = conversion_str
        self.file_name_suffix = category_tag + ".js"
        self.frontmatter_args = frontmatter_args
        self.preamble = preamble
        self.features = set()
        self.declarations = []
        self.test_lines = []

    def add_declaration(self, declaration):
        if declaration not in self.declarations:
            self.declarations.append(declaration)

    def append_test_line(self, test_line):
        self.test_lines.append(test_line)
    def append(self, test_case, templates):
        self.features.update(set(test_case.flags) & allowed_features)
        if "err" in test_case.flags:
            self.add_declaration(
                'function err() {\n'
                '  throw new Test262Error();\n'
                '}'
            )
        if "MyError" in test_case.flags:
            self.add_declaration('function MyError() {}')

        if "throws" in test_case.flags:
            test_line = templates["throws"] % {
                "error": test_case.expected_str,
                "value": test_case.input_str,
                "message": test_case.message,
            }
        elif self.conversion_str == "ToString":
            # some chars are guaranteed to never appear in expected strings
            for c in '\\_"':
                assert c not in test_case.expected_str

            try:
                template = templates[test_case.expected_str]
            except KeyError:
                test_line = templates[str] % {
                    "expected_string_contents": test_case.expected_str,
                    "value": test_case.input_str,
                    "message": test_case.message,
                }
            else:
                test_line = template % {
                    "value": test_case.input_str,
                    "message": test_case.message,
                }
        else:
            test_line = templates[test_case.expected_str] % {
                "value": test_case.input_str,
                "message": test_case.message,
            }
        self.append_test_line(test_line)


    def get_frontmatter_str(self):
        frontmatter = {}
        for k, v in self.frontmatter_args.items():
            frontmatter[k] = v
        frontmatter["flags"] = ["generated"]
        frontmatter["features"] = sorted(set(frontmatter.get("features", [])) | self.features)

        result_lines = []
        for field_name in frontmatter_field_order:
            try: field_value = frontmatter[field_name]
            except KeyError: continue
            if type(field_value) == list:
                # a list of scalars
                if len(field_value) == 0:
                    # don't emit empty lists
                    del frontmatter[field_name]
                else:
                    # single-line [a, b, c] format
                    result_lines.append(field_name + ": [" + ", ".join(field_value) + "]")
                continue
            # scalar (i.e. string) value
            field_value = field_value.rstrip().replace("\r\n", "\n").replace("\r", "\n")
            if "\n" in field_value:
                # emit multiline strings in | format
                field_lines = field_value.split("\n")
                while len(field_lines[0].strip()) == 0:
                    del field_lines[0]
                first_line = field_lines[0]
                result_lines.append(field_name + ": |")
                indentation = first_line[:len(first_line) - len(first_line.lstrip())]
                canonical_lines = []
                for field_line in field_lines:
                    if len(field_line.strip()) > 0:
                        assert field_line.startswith(indentation), "info has inconsistent indentation"
                        canonical_line = field_line[len(indentation):].rstrip()
                        canonical_lines.append(canonical_line)
                        result_lines.append("  " + canonical_line)
                    else:
                        canonical_lines.append("")
                        result_lines.append("")
                field_value = "\n".join(canonical_lines) + "\n"
                frontmatter[field_name] = field_value
            else:
                # simple string
                result_lines.append(field_name + ": " + field_value)
        frontmatter_str = "\n".join(result_lines)

        # this might throw
        reparsed_frontmatter = yaml.safe_load(frontmatter_str)
        assert reparsed_frontmatter == frontmatter, "something caused malformed frontmatter"

        return frontmatter_str

    def get_contents(self):
        contents = (
            '// This file was procedurally generated.\n' +
            '/*---\n' +
            self.get_frontmatter_str() + '\n' +
            '---*/\n' +
            '\n' +
            self.preamble
        )
        if len(self.declarations) > 0:
            contents += (
                '\n'.join(self.declarations) + '\n' +
                '\n'
            )
        contents += '\n'.join(self.test_lines) + '\n'
        return contents
    def write(self, path_prefix):
        contents = self.get_contents()
        with open("test/" + path_prefix + self.file_name_suffix, "w") as f:
            f.write(contents)


def generate_tests(path_prefix, **kwargs):
    assert (
        set(["frontmatter", "conversion", "templates"])
        <= set(kwargs.keys()) <=
        set(["frontmatter", "conversion", "templates", "preamble", "nominal_value_cases"])
    )
    frontmatter_args = kwargs["frontmatter"]
    assert all(k in allowed_frontmatter_fields for k in frontmatter_args)
    assert "description" in frontmatter_args
    global_features = frontmatter_args.get("features", [])
    conversion_str = kwargs["conversion"]
    conversion = conversions[conversion_str]
    templates = kwargs["templates"]
    assert (conversion.from_nominal_value != None) == ("nominal_value_cases" in kwargs)
    nominal_value_cases = kwargs.get("nominal_value_cases", None)
    preamble = kwargs.get("preamble", "")

    test_files = {}
    def get_test_file(category_tag):
        try:
            return test_files[category_tag]
        except KeyError:
            test_file = test_files[category_tag] = TestFile(conversion_str, category_tag, frontmatter_args, preamble)
            return test_file
    def add_test_case(test_case, templates, category_tag):
        get_test_file(category_tag).append(test_case, templates)

    toprimitive_case = None
    inserted_nominal_values = False
    for test_case in conversion.tests:
        category_tag = ""

        if test_case == nominal_value_tests_go_here:
            assert inserted_nominal_values == False
            inserted_nominal_values = True
            for (nominal_value, template) in nominal_value_cases:
                for value in conversion.from_nominal_value(nominal_value):
                    get_test_file(category_tag).append_test_line(template % {"value": value})
            continue

        if "BigInt" not in global_features and "BigInt" in test_case.flags:
            category_tag = "-bigint"
        elif "throws" in test_case.flags:
            category_tag = "-errors"
        add_test_case(test_case, templates, category_tag)

        if "wrap" in test_case.flags:
            if "BigInt" not in global_features and "BigInt" in test_case.flags:
                category_tag = "-bigint"
            elif category_tag != "-errors":
                category_tag = "-wrapped-values"
            for wrapped_case in basic_primitive_wrappers(test_case, conversion.primitive_hint):
                add_test_case(wrapped_case, templates, category_tag)
        if "toprimitive" in test_case.flags:
            assert toprimitive_case == None
            toprimitive_case = test_case
    if test_case.primitive_hint != None:
        assert toprimitive_case != None
        category_tag = "-toprimitive"
        for wrapped_case in advanced_primitive_wrappers(toprimitive_case, conversion.primitive_hint):
            add_test_case(wrapped_case, templates, category_tag)
    else:
        assert toprimitive_case == None

    for test_file in test_files.values():
        test_file.write(path_prefix)

nominal_value_tests_go_here = "nominal value tests go here"
conversions = {
    "ToBoolean": Conversion(
        tests=[
            TestCase('false', 'false'),
            TestCase('true', 'true'),
            TestCase('false', '0'),
            TestCase('false', '-0'),
            TestCase('true', '1'),
            TestCase('true', '-1'),
            TestCase('true', '0.1'),
            TestCase('true', 'Infinity'),
            TestCase('false', 'NaN'),
            TestCase('false', 'undefined'),
            TestCase('false', 'null'),
            TestCase('false', '""'),
            TestCase('true', '"string"'),
            TestCase('true', '"false"'),
            TestCase('true', '" "'),
            TestCase('true', 'Symbol("1")', flags=["Symbol"]),
            TestCase('false', '0n', flags=["BigInt"]),
            TestCase('true', '1n', flags=["BigInt"]),
            TestCase('true', '[]'),
            TestCase('true', '{}'),
            TestCase('true', 'Object(false)'),
        ],
        # ToBoolean doesn't go through ToPrimitive, and can't throw.
        from_nominal_value=None,
        primitive_hint=None,
    ),
    "ToNumber": Conversion(
        tests=[
            TestCase('0', '0', flags=["wrap"]),
            TestCase('1', '1', flags=["toprimitive"]),
            TestCase('NaN', 'NaN', flags=["wrap"]),
            TestCase('Infinity', 'Infinity', flags=["wrap"]),
            TestCase('-Infinity', '-Infinity'),
            TestCase('NaN', 'undefined', flags=["wrap"]),
            TestCase('0', 'null', flags=["wrap"]),
            TestCase('0', 'false'),
            TestCase('1', 'true', flags=["wrap"]),
            TestCase('1', '"1"', flags=["wrap"]),
            TestCase('0', '"0"'),
            TestCase('NaN', '""'),
            TestCase('NaN', '"foo"'),
            TestCase('NaN', '"true"'),
            nominal_value_tests_go_here,
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"]),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"]),
            TestCase('0', '[0]'),
            TestCase('1', '["1"]'),
            TestCase('NaN', '{}'),
            TestCase('NaN', '[]'),
        ],
        from_nominal_value=lambda n: [template.format(n) for template in ['{}', '"{}"']],
        primitive_hint="number",
    ),
    "ToInteger": Conversion(
        tests=[
            TestCase('0', '0', flags=["wrap"]),
            TestCase('1', '1', flags=["toprimitive"]),
            TestCase('0', '-0.9'),
            TestCase('0', '0.9'),
            TestCase('0', 'NaN', flags=["wrap"]),
            TestCase('0', 'undefined', flags=["wrap"]),
            TestCase('0', 'null', flags=["wrap"]),
            TestCase('1', 'true', flags=["wrap"]),
            TestCase('0', 'false'),
            TestCase('0', '"0"'),
            TestCase('1', '"1"', flags=["wrap"]),
            TestCase('0', '""'),
            TestCase('0', '"foo"'),
            TestCase('0', '"true"'),
            nominal_value_tests_go_here,
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"]),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"]),
            TestCase('0', '[0]'),
            TestCase('1', '["1"]'),
            TestCase('0', '{}'),
            TestCase('0', '[]'),
        ],
        from_nominal_value=lambda n:
            [template.format(n) for template in ['{}', '"{}"']] +
            [template.format(n + 0.9) for template in ['{}', '"{}"'] if n >= 0] +
            [template.format(n - 0.9) for template in ['{}', '"{}"'] if n <= 0] +
        [],
        primitive_hint="number",
    ),
    "ToIndex": Conversion(
        tests=[
            TestCase('0', '0', flags=["wrap"]),
            TestCase('1', '1', flags=["toprimitive"]),
            TestCase('0', '-0.9'),
            TestCase('0', '0.9'),
            TestCase('0', 'NaN', flags=["wrap"]),
            TestCase('0', 'undefined', flags=["wrap"]),
            TestCase('0', 'null', flags=["wrap"]),
            TestCase('0', 'false'),
            TestCase('1', 'true', flags=["wrap"]),
            TestCase('0', '"0"'),
            TestCase('1', '"1"', flags=["wrap"]),
            TestCase('0', '""'),
            TestCase('0', '"foo"'),
            TestCase('0', '"true"'),
            nominal_value_tests_go_here,
            TestCase('RangeError', '-1', flags=["throws"]),
            TestCase('RangeError', '-2.5', flags=["throws"]),
            TestCase('RangeError', '"-2.5"', flags=["throws"]),
            TestCase('RangeError', '-Infinity', flags=["throws"]),
            TestCase('RangeError', int2str(2**53), flags=["throws"]),
            TestCase('RangeError', 'Infinity', flags=["throws"]),
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"]),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"]),
            TestCase('0', '[0]'),
            TestCase('1', '["1"]'),
            TestCase('0', '{}'),
            TestCase('0', '[]'),
        ],
        from_nominal_value=lambda n:
            [template.format(n) for template in ['{}', '"{}"']] +
            [template.format(n + 0.9) for template in ['{}', '"{}"'] if n >= 0] +
            [template.format(n - 0.9) for template in ['{}', '"{}"'] if n <= 0] +
        [],
        primitive_hint="number",
    ),
    "ToBigInt": Conversion(
        tests=[
            TestCase('0n', '0n', flags=["wrap"]),
            TestCase('1n', 'true', flags=["wrap"]),
            TestCase('1n', '"1"', flags=["wrap", "toprimitive"]),
            TestCase('0n', '-0n'),
            TestCase('0n', '"-0"'),
            TestCase('0n', 'false'),
            TestCase('0n', '""'),
            TestCase('0n', '"     "'),
            TestCase('0n', '[]'),
            TestCase('1n', '[1]'),
            nominal_value_tests_go_here,
            TestCase('TypeError', 'undefined', flags=["throws", "wrap"]),
            TestCase('TypeError', 'null', flags=["throws", "wrap"]),
            TestCase('TypeError', '0', flags=["throws", "wrap"]),
            TestCase('TypeError', 'NaN', flags=["throws"]),
            TestCase('TypeError', 'Infinity', flags=["throws"]),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"]),
            TestCase('SyntaxError', '"a"', flags=["throws"]),
            TestCase('SyntaxError', '"0b2"', flags=["throws", "wrap"]),
            TestCase('SyntaxError', '"   0b2   "', flags=["throws"]),
            TestCase('SyntaxError', '"0o8"', flags=["throws"]),
            TestCase('SyntaxError', '"0xg"', flags=["throws"]),
            TestCase('SyntaxError', '"1n"', flags=["throws"]),
        ],
        from_nominal_value=lambda n: [
            '{}n'.format(int2str(n)),
            '"{}"'.format(int2str(n)),
            '"0b{}"'.format(int2str(n, 2)),
            '"0o{}"'.format(int2str(n, 8)),
            '"0x{}"'.format(int2str(n, 16)),
            '"    0x{}    "'.format(int2str(n, 16)),
            '"     {}     "'.format(int2str(n)),
            '[{}n]'.format(int2str(n)),
            '["{}"]'.format(int2str(n)),
        ],
        primitive_hint="number",
    ),
    "ToString": Conversion(
        tests=[
            TestCase('', '""'),
            TestCase('', '[]'),
            TestCase('undefined', 'undefined', flags=["wrap"]),
            TestCase('null', 'null', flags=["wrap"]),
            TestCase('true', 'true'),
            TestCase('false', 'false', flags=["wrap"]),
            TestCase('0', '0', flags=["wrap"]),
            TestCase('0', '-0'),
            TestCase('Infinity', 'Infinity'),
            TestCase('-Infinity', '-Infinity'),
            TestCase('NaN', 'NaN'),
            TestCase('123.456', '123.456'),
            TestCase('-123.456', '-123.456'),
            TestCase('foo', '"foo"', flags=["wrap", "toprimitive"]),
            TestCase('0', '0n', flags=["wrap", "BigInt"]),
            TestCase('foo,bar', '["foo", "bar"]'),
            TestCase('[object Object]', '{}'),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"]),
        ],
        from_nominal_value=None,
        primitive_hint="string",
    ),
}

def basic_primitive_wrappers(test_case, hint):
    def test(input_str, flags=None):
        if flags == None: flags = []
        flags += test_case.flags
        if '[Symbol.toPrimitive]:' in input_str:
            flags += ["Symbol.toPrimitive", "computed-property-names"]
        return TestCase(test_case.expected_str, input_str, flags=flags, message=test_case.message)

    if test_case.input_str not in ('null', 'undefined'):
        # null and undefined result in {} rather than a proper wrapper,
        # so skip this case for those values.
        yield test('Object(%s)' % test_case.input_str)

    method = 'function() { return %s; }' % test_case.input_str

    yield test('{[Symbol.toPrimitive]: %s}' % method, flags=["Symbol.toPrimitive", "computed-property-names"])
    if hint == "number":
        yield test('{valueOf: %s}' % method)
    else:
        # have to make toString get skipped to hit valueOf
        yield test('{valueOf: %s, toString: null}' % method)
    yield test('{toString: %s}' % method)

def advanced_primitive_wrappers(test_case, hint):
    def test(input_str, flags=None):
        if flags == None: flags = []
        flags += test_case.flags
        if '[Symbol.toPrimitive]:' in input_str:
            flags += ["Symbol.toPrimitive", "computed-property-names"]
        return TestCase(test_case.expected_str, input_str, flags=flags, message=test_case.message)

    method_names = {
        "number": ['valueOf', 'toString'],
        "string": ['toString', 'valueOf'],
    }[hint]

    template_args = {
        "method": 'function() { return %s; }' % test_case.input_str,
        "method_name_0": method_names[0],
        "method_name_1": method_names[1],
    }

    # precedence order
    yield test(
        '{[Symbol.toPrimitive]: %(method)s, %(method_name_0)s: err, %(method_name_1)s: err}' % template_args,
        flags=["err"],
    )
    yield test(
        '{%(method_name_0)s: %(method)s, %(method_name_1)s: err}' % template_args,
        flags=["err"],
    )
    if hint == "number":
        # The default valueOf returns an object, which is unsuitable.
        # The default toString returns a String, which is suitable.
        # Therefore, a single overrided method will only be called if it's toString.
        yield test('{toString: %(method)s}' % template_args)

    # GetMethod: if func is undefined or null, return undefined.
    yield test('{[Symbol.toPrimitive]: undefined, %(method_name_0)s: %(method)s}' % template_args)
    yield test('{[Symbol.toPrimitive]: null, %(method_name_0)s: %(method)s}' % template_args)

    # if method_names[0] is not callable, fallback to method_names[1]
    yield test('{%(method_name_0)s: null, %(method_name_1)s: %(method)s}' % template_args)
    yield test('{%(method_name_0)s: 1, %(method_name_1)s: %(method)s}' % template_args)
    yield test('{%(method_name_0)s: {}, %(method_name_1)s: %(method)s}' % template_args)

    # if method_names[0] returns an object, fallback to method_names[1]
    yield test('{%(method_name_0)s: function() { return {}; }, %(method_name_1)s: %(method)s}' % template_args)
    yield test('{%(method_name_0)s: function() { return Object(12345); }, %(method_name_1)s: %(method)s}' % template_args)

    # ToPrimitive: input[@@toPrimitive] is not callable (and non-null)
    yield TestCase('TypeError',
        '{[Symbol.toPrimitive]: 1}',
        flags=["throws", "Symbol.toPrimitive", "computed-property-names"],
    )
    yield TestCase('TypeError',
        '{[Symbol.toPrimitive]: {}}',
        flags=["throws", "Symbol.toPrimitive", "computed-property-names"],
    )

    # ToPrimitive: input[@@toPrimitive] returns object
    yield TestCase('TypeError',
        '{[Symbol.toPrimitive]: function() { return Object(1); }}',
        flags=["throws", "Symbol.toPrimitive", "computed-property-names"],
    )
    yield TestCase('TypeError',
        '{[Symbol.toPrimitive]: function() { return {}; }}',
        flags=["throws", "Symbol.toPrimitive", "computed-property-names"],
    )

    # ToPrimitive: input[@@toPrimitive] throws
    yield TestCase('MyError',
        '{[Symbol.toPrimitive]: function() { throw new MyError(); }}',
        flags=["MyError", "throws", "Symbol.toPrimitive", "computed-property-names"],
    )

    # OrdinaryToPrimitive: method throws
    if hint == "number":
        yield TestCase('MyError',
            '{valueOf: function() { throw new MyError(); }}',
            flags=["MyError", "throws"],
        )
    else:
        # have to make toString get skipped to hit valueOf
        yield TestCase('MyError',
            '{valueOf: function() { throw new MyError(); }, toString: null}',
            flags=["MyError", "throws"],
        )
    yield TestCase('MyError',
        '{toString: function() { throw new MyError(); }}',
        flags=["MyError", "throws"],
    )

    # OrdinaryToPrimitive: both methods are unsuitable
    def testUnsuitableMethod(method_str):
        return TestCase('TypeError',
            '{valueOf: %(method)s, toString: %(method)s}' % {"method": method_str},
            flags=["throws"],
        )
    # not callable:
    yield testUnsuitableMethod('null')
    yield testUnsuitableMethod('1')
    yield testUnsuitableMethod('{}')
    # returns object:
    yield testUnsuitableMethod('function() { return Object(1); }')
    yield testUnsuitableMethod('function() { return {}; }')

