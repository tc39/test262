def generate_type_coercion(generate_tests):
    generate_tests(
        path_prefix="built-ins/BigInt/asIntN/bits-toindex",
        conversion="ToIndex",
        frontmatter={
            "esid": "pending",
            "description": "BigInt.asIntN type coercion for bits parameter",
            "info": """
                BigInt.asIntN ( bits, bigint )

                1. Let bits be ? ToIndex(bits).
            """,
            "features": ["BigInt"],
        },
        templates={
            '0': 'assert.sameValue(BigInt.asIntN(%(value)s, 1n), 0n, %(message)s);',
            '1': 'assert.sameValue(BigInt.asIntN(%(value)s, 1n), -1n, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { BigInt.asIntN(%(value)s, 0n); }, %(message)s);',
        },
        nominal_value_cases=[
            (3, 'assert.sameValue(BigInt.asIntN(%(value)s, 10n), 2n, %(message)s);'),
        ],
    )

    generate_tests(
        path_prefix="built-ins/BigInt/asUintN/bits-toindex",
        conversion="ToIndex",
        frontmatter={
            "esid": "pending",
            "description": "BigInt.asUintN type coercion for bits parameter",
            "info": """
                BigInt.asUintN ( bits, bigint )

                1. Let bits be ? ToIndex(bits).
            """,
            "features": ["BigInt"],
        },
        templates={
            '0': 'assert.sameValue(BigInt.asUintN(%(value)s, 1n), 0n, %(message)s);',
            '1': 'assert.sameValue(BigInt.asUintN(%(value)s, 1n), 1n, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { BigInt.asUintN(%(value)s, 0n); }, %(message)s);',
        },
        nominal_value_cases=[
            (3, 'assert.sameValue(BigInt.asUintN(%(value)s, 10n), 2n, %(message)s);'),
        ],
    )

    generate_tests(
        path_prefix="built-ins/BigInt/asIntN/bigint-tobigint",
        conversion="ToBigInt",
        frontmatter={
            "esid": "pending",
            "description": "BigInt.asIntN type coercion for bigint parameter",
            "info": """
                BigInt.asIntN ( bits, bigint )

                2. Let bigint ? ToBigInt(bigint).
            """,
            "features": ["BigInt"],
        },
        templates={
            '0n': 'assert.sameValue(BigInt.asIntN(2, %(value)s), 0n, %(message)s);',
            '1n': 'assert.sameValue(BigInt.asIntN(2, %(value)s), 1n, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { BigInt.asIntN(0, %(value)s); }, %(message)s);',
        },
        nominal_value_cases=[
            (10, 'assert.sameValue(BigInt.asIntN(3, %(value)s), 2n, %(message)s);'),
            (12345678901234567890003, 'assert.sameValue(BigInt.asIntN(4, %(value)s), 3n, %(message)s);'),
        ],
    )

    generate_tests(
        path_prefix="built-ins/BigInt/asUintN/bigint-tobigint",
        conversion="ToBigInt",
        frontmatter={
            "esid": "pending",
            "description": "BigInt.asUintN type coercion for bigint parameter",
            "info": """
                BigInt.asUintN ( bits, bigint )

                2. Let bigint ? ToBigInt(bigint).
            """,
            "features": ["BigInt"],
        },
        templates={
            '0n': 'assert.sameValue(BigInt.asUintN(2, %(value)s), 0n, %(message)s);',
            '1n': 'assert.sameValue(BigInt.asUintN(2, %(value)s), 1n, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { BigInt.asUintN(0, %(value)s); }, %(message)s);',
        },
        nominal_value_cases=[
            (10, 'assert.sameValue(BigInt.asUintN(3, %(value)s), 2n, %(message)s);'),
            (12345678901234567890003, 'assert.sameValue(BigInt.asUintN(4, %(value)s), 3n, %(message)s);'),
        ],
    )
