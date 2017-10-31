
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

class Generator:
    def __init__(self, file_path):
        self.file_path = file_path
        self.declarations = []
        self.test_lines = []

    def __enter__(self):
        return self
    def __exit__(self, *args):
        if args[0] != None:
            # if we're raising an error, do nothing
            return
        self.write()
        # make this object unusable after being disposed
        del self.file_path
        del self.declarations
        del self.test_lines

    def get_contents(self):
        return (
            "\n".join(self.declarations) +
            "\n" +
            "\n" +
            "\n".join(self.test_lines)
        )
    def write(self):
        with open(self.file_path, "w") as f:
            f.write(self.get_contents())

    def generate_ToIndex_zero(self, template):
        self.generate_ToInteger_zero(template)

    def generate_ToIndex_one(self, template):
        self.generate_ToInteger_one(template)

    def generate_ToIndex_from_int(self, nominal_int, template):
        assert type(nominal_int) == int
        assert 0 <= nominal_int <= 2**53 - 1
        self.generate_ToInteger_from_int(nominal_int, template)

    def generate_ToInteger_zero(self, template):
        self.generate_ToNumber_zero(template)
        self.generate_ToInteger_from_int(0, template)

        # NaN -> +0
        self.generate_ToNumber_NaN(template)

        # When toString() returns a string that parses to NaN:
        self.append(template, value='{}')
        self.append(template, value='[]')

    def generate_ToInteger_one(self, template):
        self.generate_ToNumber_one(template)

        self.generate_ToInteger_from_int(1, template)

        # When toString() returns "1"
        self.append(template, value='[1]')
        self.append(template, value='["1"]')

    def generate_ToNumber_zero(self, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        generate_from_primitive('null')
        generate_from_primitive('false')
        generate_from_primitive('0')
        generate_from_primitive('"0"')

    def generate_ToNumber_NaN(self, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        generate_from_primitive('undefined')
        generate_from_primitive('NaN')
        generate_from_primitive('""')
        generate_from_primitive('"foo"')
        generate_from_primitive('"true"')

    def generate_ToNumber_one(self, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        generate_from_primitive('true')
        generate_from_primitive('1')
        generate_from_primitive('"1"')

    def generate_ToInteger_from_int(self, nominal_int, template):
        assert type(nominal_int) == int

        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

            # Non-primitive values that coerce to the nominal integer:
            # toString() returns a string that parsers to a primitive value.
            self.append(template, value='[{}]'.format(value_str))

        def generate_from_number(value_number):
            generate_from_primitive('{}'.format(value_number))
            # ToNumber: String -> Number
            generate_from_primitive('"{}"'.format(value_number))

        generate_from_number(nominal_int)

        # ToInteger: floor(abs(number))
        if (nominal_int >= 0):
            generate_from_number(nominal_int + 0.9)
        if (nominal_int <= 0):
            generate_from_number(nominal_int - 0.9)

    def testPrimitiveWrappers(self, primitive_value_str, hint, template, **kwargs):
        if primitive_value_str not in ('null', 'undefined'):
            # null and undefined result in {} rather than a proper wrapper,
            # so skip this case for those values.
            self.append(template, value='Object(%s)' % primitive_value_str, **kwargs)

        self.generate_ToPrimitiveWithMethod(hint, 'function() { return %s; }' % primitive_value_str, template, **kwargs)

    def generate_ToPrimitiveWithMethod(self, hint, method_str, template, **kwargs):
        if hint == "number":
            methodNames = ['valueOf', 'toString']
        elif hint == "string":
            methodNames = ['toString', 'valueOf']
        else:
            assert False

        template_args = {
            "method": method_str,
            "err_fn": self.generate_err_fn(),
            "method_name_0": methodNames[0],
            "method_name_1": methodNames[1],
        }

        # precedence order
        self.append(template, value=
            '{[Symbol.toPrimitive]: %(method)s, %(method_name_0)s: %(err_fn)s, %(method_name_1)s: %(err_fn)s}' % template_args,
            **kwargs
        )
        self.append(template, value=
            '{%(method_name_0)s: %(method)s, %(method_name_1)s: %(err_fn)s}' % template_args,
            **kwargs
        )
        if hint == "number":
            # The default valueOf returns an object, which is unsuitable.
            # The default toString returns a String, which is suitable.
            # Therefore this test only works for valueOf falling back to toString.
            self.append(template, value=
                '{toString: %(method)s}' % template_args,
                **kwargs
            )

        # GetMethod: if func is undefined or null, return undefined.
        self.append(template, value=
            '{[Symbol.toPrimitive]: undefined, %(method_name_0)s: %(method)s}' % template_args,
            **kwargs
        )
        self.append(template, value=
            '{[Symbol.toPrimitive]: null, %(method_name_0)s: %(method)s}' % template_args,
            **kwargs
        )

        # if methodNames[0] is not callable, fallback to methodNames[1]
        self.append(template, value=
            '{%(method_name_0)s: null, %(method_name_1)s: %(method)s}' % template_args,
            **kwargs
        )
        self.append(template, value=
            '{%(method_name_0)s: 1, %(method_name_1)s: %(method)s}' % template_args,
            **kwargs
        )
        self.append(template, value=
            '{%(method_name_0)s: {}, %(method_name_1)s: %(method)s}' % template_args,
            **kwargs
        )

        # if methodNames[0] returns an object, fallback to methodNames[1]
        self.append(template, value=
            '{%(method_name_0)s: function() { return {}; }, %(method_name_1)s: %(method)s}' % template_args,
            **kwargs
        )
        self.append(template, value=
            '{%(method_name_0)s: function() { return Object(1); }, %(method_name_1)s: %(method)s}' % template_args,
            **kwargs
        )

    def generate_ToIndex_errors(self, template):
        def generate_from_primitive(value_str):
            self.append(template, error='RangeError', value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template, error='RangeError')

        # Let integerIndex be ? ToInteger(value).
        self.generate_ToInteger_errors(template)

        # If integerIndex < 0, throw a RangeError exception.
        generate_from_primitive('-1')
        generate_from_primitive('-2.5')
        generate_from_primitive('"-2.5"')
        generate_from_primitive('-Infinity')

        # Let index be ! ToLength(integerIndex).
        # If SameValueZero(integerIndex, index) is false, throw a RangeError exception.
        generate_from_primitive(int2str(2**53))
        generate_from_primitive('Infinity')

    def generate_ToInteger_errors(self, template):
        # ToInteger only throws from ToNumber.
        self.generate_ToNumber_errors(template)

    def generate_ToNumber_errors(self, template):
        def generate_from_primitive(value_str):
            self.append(template, error='TypeError', value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template, error='TypeError')

        # ToNumber: Symbol -> TypeError
        generate_from_primitive('Symbol("1")')

        # ToNumber: BigInt -> TypeError
        generate_from_primitive('0n')

        # ToPrimitive
        self.generate_ToPrimitive_errors("number", template)

    def generate_ToPrimitive_errors(self, hint, template):
        my_error = self.generate_my_error()

        # ToPrimitive: input[@@toPrimitive] is not callable (and non-null)
        self.append(template, error='TypeError', value='{[Symbol.toPrimitive]: 1}')
        self.append(template, error='TypeError', value='{[Symbol.toPrimitive]: {}}')

        # ToPrimitive: input[@@toPrimitive] returns object
        self.append(template, error='TypeError', value='{[Symbol.toPrimitive]: function() { return Object(1); }}')
        self.append(template, error='TypeError', value='{[Symbol.toPrimitive]: function() { return {}; }}')

        # ToPrimitive: input[@@toPrimitive] throws
        self.append(template, error=my_error, value=
            '{[Symbol.toPrimitive]: function() { throw new %(my_error)s(); }}'
            % {"my_error": my_error},
        )

        # OrdinaryToPrimitive: method throws
        self.generate_ToPrimitiveWithMethod(hint,
            'function() { throw new %(my_error)s(); }'
            % {"my_error": my_error},
            template,
            error=my_error,
        )

        # OrdinaryToPrimitive: both methods are unsuitable
        def testUnsuitableMethod(method_str):
            self.append(template, error='TypeError', value=
                '{valueOf:%(method)s, toString:%(method)s}'
                % {"method": method_str},
            )
        # not callable:
        testUnsuitableMethod('null')
        testUnsuitableMethod('1')
        testUnsuitableMethod('{}')
        # returns object:
        testUnsuitableMethod('function() { return Object(1); }')
        testUnsuitableMethod('function() { return {}; }')

    def generate_ToString_empty(self, template):
        def generate_from_primitive(value_str, expected_contents):
            self.append(template, value=value_str, expected_string_contents=expected_contents)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "string", template, expected_string_contents=expected_contents)

        generate_from_primitive('""', '')
        self.append(template, value='[]', expected_string_contents='')

    def generate_ToString_non_empty(self, template):
        def generate_from_primitive(value_str, expected_contents):
            self.append(template, value=value_str, expected_string_contents=expected_contents)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "string", template, expected_string_contents=expected_contents)

        generate_from_primitive('undefined', 'undefined')
        generate_from_primitive('null', 'null')
        generate_from_primitive('true', 'true')
        generate_from_primitive('false', 'false')
        generate_from_primitive('0', '0')
        generate_from_primitive('-0', '0')
        generate_from_primitive('Infinity', 'Infinity')
        generate_from_primitive('-Infinity', '-Infinity')
        generate_from_primitive('123.456', '123.456')
        generate_from_primitive('-123.456', '-123.456')
        generate_from_primitive('"foo"', 'foo')

        # BigInt -> TypeError
        generate_from_primitive('0n', '0')

        # toString of a few objects
        self.append(template, value='["foo", "bar"]', expected_string_contents='foo,bar')
        self.append(template, value='{}', expected_string_contents='[object Object]')

    def generate_ToString_errors(self, template):
        def generate_from_primitive(value_str):
            self.append(template, error='TypeError', value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "string", template, error='TypeError')

        # Symbol -> TypeError
        generate_from_primitive('Symbol("1")')

        # ToPrimitive
        self.generate_ToPrimitive_errors("string", template)

    def generate_ToBoolean_true(self, template):
        self.append(template, value='true')
        self.append(template, value='1')
        self.append(template, value='"string"')
        self.append(template, value='Symbol("1")')
        self.append(template, value='{}')

    def generate_ToBoolean_false(self, template):
        self.append(template, value='undefined')
        self.append(template, value='null')
        self.append(template, value='false')
        self.append(template, value='0')
        self.append(template, value='-0')
        self.append(template, value='NaN')
        self.append(template, value='""')

    def generate_ToBigInt_zero(self, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        self.generate_ToBigInt_from_int(0, template)
        generate_from_primitive('-0n')
        generate_from_primitive('"-0"')
        generate_from_primitive('false')
        generate_from_primitive('""')
        generate_from_primitive('"     "')

        # toString() returns ""
        self.append(template, value='[]')

        # toString() returns "0"
        self.append(template, value='[0]')

    def generate_ToBigInt_one(self, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        self.generate_ToBigInt_from_int(1, template)
        generate_from_primitive('true')

        # toString() returns "1"
        self.append(template, value='[1]')

    def generate_ToBigInt_from_int(self, nominal_int, template):
        def generate_from_primitive(value_str):
            self.append(template, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template)

        generate_from_primitive('{}n'.format(int2str(nominal_int)))
        generate_from_primitive('"{}"'.format(int2str(nominal_int)))
        generate_from_primitive('"0b{}"'.format(int2str(nominal_int, 2)))
        generate_from_primitive('"0o{}"'.format(int2str(nominal_int, 8)))
        generate_from_primitive('"0x{}"'.format(int2str(nominal_int, 16)))
        generate_from_primitive('"     {}     "'.format(int2str(nominal_int)))

        # toString() returns the decimal string representation
        self.append(template, value='[{}n]'.format(int2str(nominal_int)))
        self.append(template, value='["{}"]'.format(int2str(nominal_int)))

    def generate_ToBigInt_errors(self, template):
        def generate_from_primitive(error, value_str):
            self.append(template, error=error, value=value_str)
            # ToPrimitive
            self.testPrimitiveWrappers(value_str, "number", template, error=error)

        # Undefined, Null, Number, Symbol -> TypeError
        generate_from_primitive('TypeError', 'undefined')
        generate_from_primitive('TypeError', 'null')
        generate_from_primitive('TypeError', '0')
        generate_from_primitive('TypeError', 'NaN')
        generate_from_primitive('TypeError', 'Infinity')
        generate_from_primitive('TypeError', 'Symbol("1")')

        # when a String parses to NaN -> SyntaxError
        def testStringValue(string_contents):
            generate_from_primitive('SyntaxError', '"{}"'.format(string_contents))
            generate_from_primitive('SyntaxError', '"     {}"'.format(string_contents))
            generate_from_primitive('SyntaxError', '"{}     "'.format(string_contents))
            generate_from_primitive('SyntaxError', '"     {}     "'.format(string_contents))
        testStringValue("a")
        testStringValue("0b2")
        testStringValue("0o8")
        testStringValue("0xg")
        testStringValue("1n")

    def add_declaration(self, declaration):
        if declaration not in self.declarations:
            self.declarations.append(declaration)
    def generate_my_error(self):
        self.add_declaration('function MyError() {}')
        return 'MyError'
    def generate_err_fn(self):
        self.add_declaration(
            'function err() {\n'
            '  throw new Test262Error();\n'
            '}'
        )
        return 'err'

    def append(self, template, **kwargs):
        if "expected_string_contents" in kwargs:
            # some chars are guaranteed to never appear in expected strings
            for c in '\\_"':
                assert c not in kwargs["expected_string_contents"]
        self.test_lines.append(template % kwargs)

