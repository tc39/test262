
import os
import yaml

# The convention in this file is to use 'single quoted strings' for JavaScript code,
# and "double quoted strings" for everything else. Some exceptions may be made to avoid
# backslash escape sequences.

frontmatter_field_order = [
    "description", "esid", "info", "flags", "includes", "features"
]
allowed_frontmatter_fields = set(frontmatter_field_order)
allowed_frontmatter_fields.remove("flags")
generate_tests_required_args = set([
    "path_prefix", "output_root", "input_path", "frontmatter", "conversion", "templates"
])
generate_tests_optional_args = set([
    "preamble", "nominal_value_cases"
])

def generate_tests(**kwargs):
    """
    See CONTRIBUTING.md section "Type coercion tests"
    """
    for arg in generate_tests_required_args - set(kwargs.keys()): assert False, "Missing required argument: " + arg
    for arg in set(kwargs.keys()) - (generate_tests_required_args | generate_tests_optional_args): assert False, "Unrecognized argument: " + arg
    path_prefix = kwargs["path_prefix"]
    assert not path_prefix.endswith(".js"), "Leave file extension off of path_prefix"
    output_root = kwargs["output_root"]
    input_path = kwargs["input_path"]

    ##############################################
    # ATTENTION: If you modify this API, also update the corresponding documentation in CONTRIBUTING.md.
    ##############################################

    frontmatter_args = kwargs["frontmatter"]
    assert type(frontmatter_args) == dict
    for arg in set(frontmatter_args.keys()) - allowed_frontmatter_fields: assert False, "Unrecognized frontmatter field: " + arg
    assert "description" in frontmatter_args
    assert type(frontmatter_args["description"]) == str
    assert type(frontmatter_args.get("esid", "")) == str
    assert type(frontmatter_args.get("info", "")) == str
    assert type(frontmatter_args.get("includes", [])) == list
    assert all(type(inc) == str for inc in frontmatter_args.get("includes", []))
    assert type(frontmatter_args.get("features", [])) == list
    assert all(type(feature) == str for feature in frontmatter_args.get("features", []))

    global_features = frontmatter_args.get("features", [])
    conversion_str = kwargs["conversion"]
    conversion = conversions[conversion_str]
    templates = kwargs["templates"]
    assert type(templates) == dict
    assert all(type(template) == str for template in templates.values())
    if conversion.from_nominal_value != None:
        assert "nominal_value_cases" in kwargs, "Missing required argument: nominal_value_cases"
        nominal_value_cases = kwargs["nominal_value_cases"]
        assert type(nominal_value_cases) == list
        assert all(type(pair) == tuple and type(pair[1]) == str for pair in nominal_value_cases)
    else:
        assert "nominal_value_cases" not in kwargs, "Nominal_value_cases not allowed for this conversion"
        nominal_value_cases = None
    preamble = kwargs.get("preamble", "")
    assert type(preamble) == str

    if conversion_str == "ToBigInt":
        assert "BigInt" in frontmatter_args["features"]

    # Done with initial parameter validation.

    test_files = {}
    def get_test_file(category_tag):
        try:
            return test_files[category_tag]
        except KeyError:
            test_file = test_files[category_tag] = TestFile(output_root, input_path, conversion_str, category_tag, frontmatter_args, preamble)
            return test_file
    def add_test_case(test_case, templates, category_tag):
        get_test_file(category_tag).append_test_case(test_case, templates)

    toprimitive_case = None
    inserted_nominal_values = False
    wrap_cases_count = 0
    for test_case in conversion.tests:
        category_tag = ""

        if test_case == nominal_value_tests_go_here:
            assert inserted_nominal_values == False, "Conversion includes multiple nominal_value_tests_go_here"
            inserted_nominal_values = True
            for (nominal_value, template) in nominal_value_cases:
                for test_case in conversion.from_nominal_value(nominal_value):
                    get_test_file(category_tag).append_test_line(format_test_line(template, value=test_case.input_str, message=test_case.message))
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
            wrap_cases_count += 1
        if "toprimitive" in test_case.flags:
            assert toprimitive_case == None, "Conversion includes multiple toprimitive cases"
            toprimitive_case = test_case
    if conversion.primitive_hint != None:
        assert toprimitive_case != None, "Conversion missing toprimitive case"
        category_tag = "-toprimitive"
        for wrapped_case in advanced_primitive_wrappers(toprimitive_case, conversion.primitive_hint):
            add_test_case(wrapped_case, templates, category_tag)
        assert wrap_cases_count >= 2, "Conversion must have at least 2 wrap cases"
    else:
        assert toprimitive_case == None, "toprimitive not allowed in Conversion without primitive_hint"
        assert wrap_cases_count == 0, "wrap not allowed in Conversion without primitive_hint"
    if conversion.from_nominal_value != None:
        assert inserted_nominal_values, "Conversion is missing nominal_value_tests_go_here"

    for key in set(templates.keys()) - set().union(*[test_file.used_template_keys for test_file in test_files.values()]):
        assert False, "Unused template key: " + repr(key)

    for test_file in test_files.values():
        test_file.write(path_prefix)

def int2str(n, base=10):
    "This function strips the 'L' suffix that shows up sometimes"
    assert type(n) in (int, long)
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
def js_repr(string):
  string = string.replace("\\", "\\\\")
  string = string.replace("\n", "\\n")
  if '"' in string and "'" not in string:
    return "'" + string + "'"
  else:
    string = string.replace("\"", "\\\"")
    return "\"" + string + "\""


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
        for flag in set(flags) - TestCase.allowed_flags:
            assert False, "Unrecognized flag: " + flag
        self.flags = flags
        self.message = message
class Conversion:
    def __init__(self, **kwargs):
        assert set(kwargs.keys()) == set(["tests", "from_nominal_value", "primitive_hint"])
        self.tests = kwargs["tests"]
        self.from_nominal_value = kwargs["from_nominal_value"]
        self.primitive_hint = kwargs["primitive_hint"]

class TestFile:
    def __init__(self, output_root, input_path, conversion_str, category_tag, frontmatter_args, preamble):
        self.output_root = output_root
        self.input_path = input_path
        self.conversion_str = conversion_str
        self.file_name_suffix = category_tag + ".js"
        self.frontmatter_args = frontmatter_args
        self.preamble = preamble
        self.features = set()
        self.declarations = []
        self.test_lines = []
        self.used_template_keys = set()

    def add_declaration(self, declaration):
        if declaration not in self.declarations:
            self.declarations.append(declaration)

    def append_test_line(self, test_line):
        self.test_lines.append(test_line)
    def append_test_case(self, test_case, templates):
        self.features.update(set(test_case.flags) & allowed_features)
        if "err" in test_case.flags:
            self.add_declaration(
                'function err() {\n'
                '  throw new Test262Error();\n'
                '}'
            )
        if "MyError" in test_case.flags:
            self.add_declaration('function MyError() {}')

        # These special cases are documented in CONTRIBUTING.md
        if "throws" in test_case.flags:
            test_line = format_test_line(templates["throws"],
                error=test_case.expected_str,
                value=test_case.input_str,
                message=test_case.message,
            )
            self.used_template_keys.add("throws")
        elif self.conversion_str == "ToString":
            # Ensure naively surrounding the string in quotes will work.
            # If we get no backslash or quotes in python's repr, then it should be good to go.
            assert all(c not in repr(test_case.expected_str)[1:-1] for c in "\\'\"")

            try:
                template = templates[test_case.expected_str]
            except KeyError:
                test_line = format_test_line(templates[str],
                    expected_string_contents=test_case.expected_str,
                    value=test_case.input_str,
                    message=test_case.message,
                )
                self.used_template_keys.add(str)
            else:
                self.used_template_keys.add(test_case.expected_str)
                test_line = format_test_line(template,
                    value=test_case.input_str,
                    message=test_case.message,
                )
        else:
            test_line = format_test_line(templates[test_case.expected_str],
                value=test_case.input_str,
                message=test_case.message,
            )
            self.used_template_keys.add(test_case.expected_str)
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
                    # Don't emit empty lists
                    del frontmatter[field_name]
                else:
                    # single-line [a, b, c] format
                    result_lines.append(field_name + ": [" + ", ".join(field_value) + "]")
                continue
            # scalar (i.e. string) value
            field_value = field_value.rstrip().replace("\r\n", "\n").replace("\r", "\n")
            if "\n" in field_value:
                # Emit multiline strings in | format
                field_lines = field_value.split("\n")
                while len(field_lines[0].strip()) == 0:
                    del field_lines[0]
                first_line = field_lines[0]
                result_lines.append(field_name + ": |")
                indentation = first_line[:len(first_line) - len(first_line.lstrip())]
                canonical_lines = []
                for field_line in field_lines:
                    if len(field_line.strip()) > 0:
                        assert field_line.startswith(indentation), "Multiline frontmatter field has inconsistent indentation"
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

        # This might throw
        reparsed_frontmatter = yaml.safe_load(frontmatter_str)
        assert reparsed_frontmatter == frontmatter, "Something caused malformed frontmatter!"

        return frontmatter_str

    def get_contents(self):
        contents = (
            '// This file was procedurally generated from the following source file:\n' +
            '// - {}\n'.format(self.input_path) +
            '// For more information, see CONTRIBUTING.md section "Type coercion tests".\n' +
            '/*---\n' +
            self.get_frontmatter_str() + '\n' +
            '---*/\n' +
            '\n'
        )
        if len(self.preamble) > 0:
            contents += self.preamble.rstrip() + '\n\n'
        if len(self.declarations) > 0:
            contents += (
                '\n'.join(self.declarations) + '\n' +
                '\n'
            )
        contents += '\n'.join(self.test_lines) + '\n'
        return contents
    def write(self, path_prefix):
        contents = self.get_contents()
        with open(os.path.join(self.output_root, path_prefix + self.file_name_suffix), "w") as f:
            f.write(contents)

def format_test_line(template, **kwargs):
    message = kwargs.get("message", None)
    if message == None:
        # Remove the message parameter and the comma before it
        template = template.replace(", %(message)s", "")
        # Make sure the removal worked
        try: del kwargs["message"]
        except KeyError: pass
    else:
        kwargs["message"] = js_repr(message)
    return template % kwargs


def make_from_nominal_truncator(conversion_str):
    def from_nominal_value(n):
        assert type(n) in (int, long)
        yield TestCase(None, repr(n))
        yield TestCase(None, '"{}"'.format(n), message=conversion_str + ": parse Number")
        offsets = []
        if n >= 0: offsets.append(0.9)
        if n <= 0: offsets.append(-0.9)
        for offset in offsets:
            yield TestCase(None, repr(n + offset), message=conversion_str + ": truncate towards 0")
            yield TestCase(None, '"{}"'.format(n + offset), message=conversion_str + ": parse Number => truncate towards 0")
    return from_nominal_value

nominal_value_tests_go_here = "nominal value tests go here"
conversions = {
    ##############################################
    # ATTENTION: If you make contributions here, also update the corresponding documentation in CONTRIBUTING.md.
    ##############################################
    "ToBoolean": Conversion(
        tests=[
            TestCase('false', 'false'),
            TestCase('true', 'true'),
            TestCase('false', '0', message="ToBoolean: 0 => false"),
            TestCase('false', '-0', message="ToBoolean: -0 => false"),
            TestCase('true', '1', message="ToBoolean: Number != 0 => true"),
            TestCase('true', '-1', message="ToBoolean: Number != 0 => true"),
            TestCase('true', '0.1', message="ToBoolean: Number != 0 => true"),
            TestCase('true', 'Infinity', message="ToBoolean: Number != 0 => true"),
            TestCase('false', 'NaN', message="ToBoolean: NaN => false"),
            TestCase('false', 'undefined', message="ToBoolean: undefined => false"),
            TestCase('false', 'null', message="ToBoolean: null => false"),
            TestCase('false', '""', message="ToBoolean: String .length == 0 => false"),
            TestCase('true', '"string"', message="ToBoolean: String .length > 0 => true"),
            TestCase('true', '"false"', message="ToBoolean: String .length > 0 => true"),
            TestCase('true', '" "', message="ToBoolean: String .length > 0 => true"),
            TestCase('true', 'Symbol("1")', flags=["Symbol"], message="ToBoolean: Symbol => true"),
            TestCase('false', '0n', flags=["BigInt"], message="ToBoolean: 0n => false"),
            TestCase('true', '1n', flags=["BigInt"], message="ToBoolean: BigInt != 0n => true"),
            TestCase('true', '[]', message="ToBoolean: any object => true"),
            TestCase('true', '{}', message="ToBoolean: any object => true"),
            TestCase('true', 'Object(false)', message="ToBoolean: any object => true; no ToPrimitive"),
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
            TestCase('NaN', 'undefined', flags=["wrap"], message="ToNumber: undefined => NaN"),
            TestCase('0', 'null', flags=["wrap"], message="ToNumber: null => 0"),
            TestCase('0', 'false', message="ToNumber: false => 0"),
            TestCase('1', 'true', flags=["wrap"], message="ToNumber: true => 1"),
            TestCase('0', '"0"', message="ToNumber: parse Number"),
            TestCase('1', '"1"', flags=["wrap"], message="ToNumber: parse Number"),
            TestCase('Infinity', '"Infinity"', message="ToNumber: parse Number"),
            TestCase('-Infinity', '"-Infinity"', message="ToNumber: parse Number"),
            TestCase('NaN', '""', message="ToNumber: unparseable string => NaN"),
            TestCase('NaN', '"foo"', message="ToNumber: unparseable string => NaN"),
            TestCase('NaN', '"true"', message="ToNumber: unparseable string => NaN"),
            nominal_value_tests_go_here,
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"], message="ToNumber: BigInt => TypeError"),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"], message="ToNumber: Symbol => TypeError"),
            TestCase('0', '[0]', message='ToNumber: [0].toString() => "0" => 0'),
            TestCase('1', '["1"]', message='ToNumber: ["1"].toString() => "1" => 1'),
            TestCase('NaN', '{}', message='ToNumber: ({}).toString() => "[object Object]" => NaN'),
            TestCase('NaN', '[]', message='ToNumber: [].toString() => "" => NaN'),
        ],
        from_nominal_value=lambda n: [
            TestCase(None, template.format(n), message=message)
            for template, message in [
                ('{}', None),
                ('"{}"', "ToNumber: parse Number"),
            ]
        ],
        primitive_hint="number",
    ),
    "ToInteger": Conversion(
        tests=[
            TestCase('0', '0', flags=["wrap"]),
            TestCase('1', '1', flags=["toprimitive"]),
            TestCase('0', '-0.9', message="ToInteger: truncate towards 0"),
            TestCase('0', '0.9', message="ToInteger: truncate towards 0"),
            TestCase('1', '1.9', message="ToInteger: truncate towards 0"),
            TestCase('0', 'NaN', flags=["wrap"], message="ToInteger: NaN => 0"),
            TestCase('Infinity', 'Infinity'),
            TestCase('0', 'undefined', flags=["wrap"], message="ToInteger: undefined => NaN => 0"),
            TestCase('0', 'null', flags=["wrap"], message="ToInteger: null => 0"),
            TestCase('0', 'false', message="ToInteger: false => 0"),
            TestCase('1', 'true', flags=["wrap"], message="ToInteger: true => 1"),
            TestCase('0', '"0"', message="ToInteger: parse Number"),
            TestCase('1', '"1.9"', flags=["wrap"], message="ToInteger: parse Number => 1.9 => 1"),
            TestCase('Infinity', '"Infinity"', message="ToInteger: parse Number"),
            TestCase('0', '""', message="ToInteger: unparseable string => NaN => 0"),
            TestCase('0', '"foo"', message="ToInteger: unparseable string => NaN => 0"),
            TestCase('0', '"true"', message="ToInteger: unparseable string => NaN => 0"),
            nominal_value_tests_go_here,
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"], message="ToInteger: BigInt => TypeError"),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"], message="ToInteger: Symbol => TypeError"),
            TestCase('0', '[0]', message='ToInteger: [0].toString() => "0" => 0'),
            TestCase('1', '["1"]', message='ToInteger: ["1"].toString() => "1" => 1'),
            TestCase('0', '{}', message='ToInteger: ({}).toString() => "[object Object]" => NaN => 0'),
            TestCase('0', '[]', message='ToInteger: [].toString() => "" => NaN => 0'),
        ],
        from_nominal_value=make_from_nominal_truncator("ToInteger"),
        primitive_hint="number",
    ),
    "ToIndex": Conversion(
        tests=[
            TestCase('0', '0', flags=["wrap"]),
            TestCase('1', '1', flags=["toprimitive"]),
            TestCase('0', '-0.9', message="ToIndex: truncate towards 0"),
            TestCase('0', '0.9', message="ToIndex: truncate towards 0"),
            TestCase('0', 'NaN', flags=["wrap"], message="ToIndex: NaN => 0"),
            TestCase('0', 'undefined', flags=["wrap"], message="ToIndex: undefined => NaN => 0"),
            TestCase('0', 'null', flags=["wrap"], message="ToIndex: null => 0"),
            TestCase('0', 'false', message="ToIndex: false => 0"),
            TestCase('1', 'true', flags=["wrap"], message="ToIndex: true => 1"),
            TestCase('0', '"0"', message="ToIndex: parse Number"),
            TestCase('1', '"1"', flags=["wrap"], message="ToIndex: parse Number"),
            TestCase('0', '""', message="ToIndex: parse Number => NaN => 0"),
            TestCase('0', '"foo"', message="ToIndex: parse Number => NaN => 0"),
            TestCase('0', '"true"', message="ToIndex: parse Number => NaN => 0"),
            nominal_value_tests_go_here,
            TestCase('RangeError', '-1', flags=["throws"], message="ToIndex: throw when integerIndex < 0"),
            TestCase('RangeError', '-2.5', flags=["throws"], message="ToIndex: throw when integerIndex < 0"),
            TestCase('RangeError', '"-2.5"', flags=["throws"], message="ToIndex: parse Number => throw when integerIndex < 0"),
            TestCase('RangeError', '-Infinity', flags=["throws"], message="ToIndex: throw when integerIndex < 0"),
            TestCase('RangeError', int2str(2**53), flags=["throws"], message="ToIndex: throw when integerIndex > 2**53-1"),
            TestCase('RangeError', 'Infinity', flags=["throws"], message="ToIndex: throw when integerIndex > 2**53-1"),
            TestCase('TypeError', '0n', flags=["throws", "wrap", "BigInt"], message="ToIndex: BigInt => TypeError"),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"], message="ToIndex: Symbol => TypeError"),
            TestCase('0', '[0]', message='ToIndex: [0].toString() => "0" => 0'),
            TestCase('1', '["1"]', message='ToIndex: ["1"].toString() => "1" => 1'),
            TestCase('0', '{}', message='ToIndex: ({}).toString() => "[object Object]" => NaN => 0'),
            TestCase('0', '[]', message='ToIndex: [].toString() => "" => NaN => 0'),
        ],
        from_nominal_value=make_from_nominal_truncator("toIndex"),
        primitive_hint="number",
    ),
    "ToBigInt": Conversion(
        tests=[
            TestCase('0n', '0n', flags=["wrap"]),
            TestCase('0n', '-0n'),
            TestCase('0n', 'false', message="ToBigInt: false => 0n"),
            TestCase('1n', 'true', flags=["wrap"], message="ToBigInt: true => 1n"),
            TestCase('1n', '"1"', flags=["wrap", "toprimitive"], message="ToBigInt: parse BigInt"),
            TestCase('0n', '"-0"', message="ToBigInt: parse BigInt"),
            TestCase('0n', '""', message="ToBigInt: empty String => 0n"),
            TestCase('0n', '"     "', message="ToBigInt: String with only whitespace => 0n"),
            TestCase('0n', '[]', message="ToBigInt: .toString() => empty String => 0n"),
            TestCase('1n', '[1]', message="ToBigInt: .toString() => parse BigInt"),
            nominal_value_tests_go_here,
            TestCase('TypeError', 'undefined', flags=["throws", "wrap"], message="ToBigInt: undefined => TypeError"),
            TestCase('TypeError', 'null', flags=["throws", "wrap"], message="ToBigInt: null => TypeError"),
            TestCase('TypeError', '0', flags=["throws", "wrap"], message="ToBigInt: Number => TypeError"),
            TestCase('TypeError', 'NaN', flags=["throws"], message="ToBigInt: Number => TypeError"),
            TestCase('TypeError', 'Infinity', flags=["throws"], message="ToBigInt: Number => TypeError"),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"], message="ToBigInt: Symbol => TypeError"),
            TestCase('SyntaxError', '"a"', flags=["throws"], message="ToBigInt: unparseable BigInt"),
            TestCase('SyntaxError', '"0b2"', flags=["throws", "wrap"], message="ToBigInt: unparseable BigInt binary"),
            TestCase('SyntaxError', '"   0b2   "', flags=["throws"], message="ToBigInt: unparseable BigInt with leading/trailing whitespace"),
            TestCase('SyntaxError', '"0o8"', flags=["throws"], message="ToBigInt: unparseable BigInt octal"),
            TestCase('SyntaxError', '"0xg"', flags=["throws"], message="ToBigInt: unparseable BigInt hex"),
            TestCase('SyntaxError', '"1n"', flags=["throws"], message="ToBigInt: unparseable BigInt due to literal suffix"),
        ],
        from_nominal_value=lambda n: [
            TestCase(None, '{}n'.format(int2str(n))),
            TestCase(None, '"{}"'.format(int2str(n)), message="ToBigInt: parse BigInt"),
            TestCase(None, '"0b{}"'.format(int2str(n, 2)), message="ToBigInt: parse BigInt binary"),
            TestCase(None, '"0o{}"'.format(int2str(n, 8)), message="ToBigInt: parse BigInt octal"),
            TestCase(None, '"0x{}"'.format(int2str(n, 16)), message="ToBigInt: parse BigInt hex"),
            TestCase(None, '"    0x{}    "'.format(int2str(n, 16)), message="ToBigInt: parse BigInt ignore leading/trailing whitespace"),
            TestCase(None, '"     {}     "'.format(int2str(n)), message="ToBigInt: parse BigInt ignore leading/trailing whitespace"),
            TestCase(None, '[{}n]'.format(int2str(n)), message="ToBigInt: .toString() => parse BigInt"),
            TestCase(None, '["{}"]'.format(int2str(n)), message="ToBigInt: .toString() => parse BigInt"),
        ],
        primitive_hint="number",
    ),
    "ToString": Conversion(
        tests=[
            TestCase('', '""'),
            TestCase('foo', '"foo"', flags=["wrap", "toprimitive"]),
            TestCase('undefined', 'undefined', flags=["wrap"], message='ToString: undefined => "undefined"'),
            TestCase('null', 'null', flags=["wrap"], message='ToString: null => "null"'),
            TestCase('true', 'true', message='ToString: true => "true"'),
            TestCase('false', 'false', flags=["wrap"], message='ToString: false => "false"'),
            TestCase('0', '0', flags=["wrap"], message='ToString: Number to String'),
            TestCase('0', '-0', message='ToString: -0 => "0"'),
            TestCase('Infinity', 'Infinity', message='ToString: Infinity => "Infinity"'),
            TestCase('-Infinity', '-Infinity', message='ToString: -Infinity => "-Infinity"'),
            TestCase('NaN', 'NaN', message='ToString: NaN => "NaN"'),
            TestCase('123.456', '123.456', message='ToString: Number to String'),
            TestCase('-123.456', '-123.456', message='ToString: Number to String'),
            TestCase('0', '0n', flags=["wrap", "BigInt"], message='ToString: BigInt to String'),
            TestCase('', '[]', message='ToString: .toString()'),
            TestCase('foo,bar', '["foo", "bar"]', message='ToString: .toString()'),
            TestCase('[object Object]', '{}', message='ToString: .toString()'),
            TestCase('TypeError', 'Symbol("1")', flags=["throws", "wrap", "Symbol"], message='ToString: Symbol => TypeError'),
        ],
        from_nominal_value=None,
        primitive_hint="string",
    ),
    ##############################################
    # ATTENTION: If you make contributions here, also update the corresponding documentation in CONTRIBUTING.md.
    ##############################################
}

def basic_primitive_wrappers(test_case, hint):
    def test(input_str, flags=None, message=None):
        if flags == None: flags = []
        flags += test_case.flags
        if '[Symbol.toPrimitive]:' in input_str:
            flags += ["Symbol.toPrimitive", "computed-property-names"]
        if test_case.message != None:
            conversion_str, message_2 = test_case.message.split(": ", 1)
            message = conversion_str + ": " + message + " => " + message_2
        else:
            message = "ToPrimitive: " + message
        return TestCase(test_case.expected_str, input_str, flags=flags, message=message)

    if test_case.input_str not in ('null', 'undefined'):
        # null and undefined result in {} rather than a proper wrapper,
        # so skip this case for those values.
        yield test('Object(%s)' % test_case.input_str, message="unbox object with internal slot")

    method = 'function() { return %s; }' % test_case.input_str

    yield test('{[Symbol.toPrimitive]: %s}' % method, flags=["Symbol.toPrimitive", "computed-property-names"], message="@@toPrimitive")
    if hint == "number":
        yield test('{valueOf: %s}' % method, message="valueOf")
    else:
        # Have to make toString get skipped to hit valueOf
        yield test('{valueOf: %s, toString: null}' % method, message="valueOf")
    yield test('{toString: %s}' % method, message="toString")

def advanced_primitive_wrappers(test_case, hint):
    def test(input_str, flags=None, message=None):
        if flags == None: flags = []
        flags += test_case.flags
        if '[Symbol.toPrimitive]:' in input_str:
            flags += ["Symbol.toPrimitive", "computed-property-names"]
        assert message != None
        return TestCase(test_case.expected_str, input_str, flags=flags, message="ToPrimitive: " + message)

    method_names = {
        "number": ['valueOf', 'toString'],
        "string": ['toString', 'valueOf'],
    }[hint]

    template_args = {
        "method": 'function() { return %s; }' % test_case.input_str,
        "method_name_0": method_names[0],
        "method_name_1": method_names[1],
    }

    # Precedence order
    yield test(
        '{[Symbol.toPrimitive]: %(method)s, %(method_name_0)s: err, %(method_name_1)s: err}' % template_args,
        flags=["err"],
        message="@@toPrimitive takes precedence",
    )
    yield test(
        '{%(method_name_0)s: %(method)s, %(method_name_1)s: err}' % template_args,
        flags=["err"],
        message="%(method_name_0)s takes precedence over %(method_name_1)s" % template_args,
    )
    if hint == "number":
        # The default valueOf returns an object, which is unsuitable.
        # The default toString returns a String, which is suitable.
        # Therefore, a single overrided method will only be called if it's toString.
        yield test(
            '{toString: %(method)s}' % template_args,
            message="toString with no valueOf",
        )

    # GetMethod: if func is undefined or null, return undefined.
    yield test(
        '{[Symbol.toPrimitive]: undefined, %(method_name_0)s: %(method)s}' % template_args,
        message="skip @@toPrimitive when it's undefined",
    )
    yield test(
        '{[Symbol.toPrimitive]: null, %(method_name_0)s: %(method)s}' % template_args,
        message="skip @@toPrimitive when it's null",
    )

    # If method_names[0] is not callable, fallback to method_names[1]
    yield test(
        '{%(method_name_0)s: null, %(method_name_1)s: %(method)s}' % template_args,
        message="skip %(method_name_0)s when it's not callable" % template_args,
    )
    yield test(
        '{%(method_name_0)s: 1, %(method_name_1)s: %(method)s}' % template_args,
        message="skip %(method_name_0)s when it's not callable" % template_args,
    )
    yield test(
        '{%(method_name_0)s: {}, %(method_name_1)s: %(method)s}' % template_args,
        message="skip %(method_name_0)s when it's not callable" % template_args,
    )

    # If method_names[0] returns an object, fallback to method_names[1]
    yield test(
        '{%(method_name_0)s: function() { return {}; }, %(method_name_1)s: %(method)s}' % template_args,
        message="skip %(method_name_0)s when it returns an object" % template_args,
    )
    yield test(
        '{%(method_name_0)s: function() { return Object(12345); }, %(method_name_1)s: %(method)s}' % template_args,
        message="skip %(method_name_0)s when it returns an object" % template_args,
    )

    def throws_test(expected_err, input_str, flags=[], message=None):
        return TestCase(expected_err, input_str, flags=flags + ["throws"], message="ToPrimitive: " + message)
    # ToPrimitive: input[@@toPrimitive] is not callable (and non-null)
    yield throws_test('TypeError',
        '{[Symbol.toPrimitive]: 1}',
        flags=["Symbol.toPrimitive", "computed-property-names"],
        message="throw when @@toPrimitive is not callable",
    )
    yield throws_test('TypeError',
        '{[Symbol.toPrimitive]: {}}',
        flags=["Symbol.toPrimitive", "computed-property-names"],
        message="throw when @@toPrimitive is not callable",
    )

    # ToPrimitive: input[@@toPrimitive] returns object
    yield throws_test('TypeError',
        '{[Symbol.toPrimitive]: function() { return Object(1); }}',
        flags=["Symbol.toPrimitive", "computed-property-names"],
        message="throw when @@toPrimitive returns an object",
    )
    yield throws_test('TypeError',
        '{[Symbol.toPrimitive]: function() { return {}; }}',
        flags=["Symbol.toPrimitive", "computed-property-names"],
        message="throw when @@toPrimitive returns an object",
    )

    # ToPrimitive: input[@@toPrimitive] throws
    yield throws_test('MyError',
        '{[Symbol.toPrimitive]: function() { throw new MyError(); }}',
        flags=["MyError", "Symbol.toPrimitive", "computed-property-names"],
        message="propagate errors from @@toPrimitive",
    )

    # OrdinaryToPrimitive: method throws
    if hint == "number":
        yield throws_test('MyError',
            '{valueOf: function() { throw new MyError(); }}',
            flags=["MyError"],
            message="propagate errors from valueOf",
        )
    else:
        # Have to make toString get skipped to hit valueOf
        yield throws_test('MyError',
            '{valueOf: function() { throw new MyError(); }, toString: null}',
            flags=["MyError"],
            message="propagate errors from valueOf",
        )
    yield throws_test('MyError',
        '{toString: function() { throw new MyError(); }}',
        flags=["MyError"],
        message="propagate errors from toString",
    )

    # OrdinaryToPrimitive: both methods are unsuitable
    def unsuitable_method_test(method_str):
        return throws_test('TypeError',
            '{valueOf: %(method)s, toString: %(method)s}' % {"method": method_str},
            message="throw when skipping both valueOf and toString",
        )
    for value in ['null', '1', '{}', 'function() { return Object(1); }', 'function() { return {}; }']:
        yield throws_test('TypeError',
            '{valueOf: %(method)s, toString: %(method)s}' % {"method": value},
            message="throw when skipping both valueOf and toString",
        )

