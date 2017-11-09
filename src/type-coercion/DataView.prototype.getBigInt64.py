def generate_type_coercion(generate_tests, **kwargs):
    generate_tests(
        path_prefix="built-ins/DataView/prototype/getBigInt64/to-boolean-littleendian",
        conversion="ToBoolean",
        frontmatter={
            "esid": "sec-dataview.prototype.getbigint64",
            "description": "Boolean littleEndian argument coerced in ToBoolean",
            "info": """
                DataView.prototype.getBigInt64 ( byteOffset [ , littleEndian ] )

                1. Let v be the this value.
                2. If littleEndian is not present, let littleEndian be undefined.
                3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int64").

                24.3.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

                ...
                5. Set isLittleEndian to ToBoolean(isLittleEndian).
                ...
                12. Let bufferIndex be getIndex + viewOffset.
                13. Return GetValueFromBuffer(buffer, bufferIndex, type, false,
                "Unordered", isLittleEndian).

                24.1.1.6 GetValueFromBuffer ( arrayBuffer, byteIndex, type,
                isTypedArray, order [ , isLittleEndian ] )

                ...
                9. Return RawBytesToNumber(type, rawValue, isLittleEndian).

                24.1.1.5 RawBytesToNumber( type, rawBytes, isLittleEndian )

                ...
                2. If isLittleEndian is false, reverse the order of the elements of rawBytes.
                ...
            """,
            "features": ["DataView", "ArrayBuffer", "DataView.prototype.setUint8", "BigInt"],
        },
        preamble=(
            'var buffer = new ArrayBuffer(8);\n'
            'var sample = new DataView(buffer, 0);\n'
            'sample.setUint8(7, 0xff);\n'
            'assert.sameValue(sample.getBigInt64(0), 0xffn, "no argument");\n'
        ),
        templates={
            'false': 'assert.sameValue(sample.getBigInt64(0, %(value)s), 0xffn, %(message)s);',
            'true': 'assert.sameValue(sample.getBigInt64(0, %(value)s), -0x100000000000000n, %(message)s);',
        },
    )

    generate_tests(
        path_prefix="built-ins/DataView/prototype/getBigInt64/toindex-byteoffset",
        conversion="ToIndex",
        frontmatter={
            "esid": "sec-dataview.prototype.getbigint64",
            "description": "ToIndex conversions on byteOffset",
            "info": """
                DataView.prototype.getBigInt64 ( byteOffset [ , littleEndian ] )

                1. Let v be the this value.
                2. If littleEndian is not present, let littleEndian be undefined.
                3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int64").

                24.3.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

                ...
                4. Let getIndex be ? ToIndex(requestIndex).
                ...
            """,
            "features": ["DataView", "ArrayBuffer", "DataView.prototype.setUint8", "BigInt"],
        },
        preamble=(
            'var buffer = new ArrayBuffer(12);\n'
            'var sample = new DataView(buffer, 0);\n'
            'sample.setUint8(0, 0x27);\n'
            'sample.setUint8(1, 0x02);\n'
            'sample.setUint8(2, 0x06);\n'
            'sample.setUint8(3, 0x02);\n'
            'sample.setUint8(4, 0x80);\n'
            'sample.setUint8(5, 0x00);\n'
            'sample.setUint8(6, 0x80);\n'
            'sample.setUint8(7, 0x01);\n'
            'sample.setUint8(8, 0x7f);\n'
            'sample.setUint8(9, 0x00);\n'
            'sample.setUint8(10, 0x01);\n'
            'sample.setUint8(11, 0x02);\n'
        ),
        templates={
            '0': 'assert.sameValue(sample.getBigInt64(%(value)s), 0x2702060280008001n, %(message)s);',
            '1': 'assert.sameValue(sample.getBigInt64(%(value)s), 0x20602800080017fn, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { sample.getBigInt64(%(value)s); }, %(message)s);',
        },
        nominal_value_cases=[
            (2, 'assert.sameValue(sample.getBigInt64(%(value)s), 0x602800080017F00n, %(message)s);'),
            (3, 'assert.sameValue(sample.getBigInt64(%(value)s), 0x2800080017F0001n, %(message)s);'),
        ],
    )
