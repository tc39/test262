def generate_type_coercion(generate_tests):
    generate_tests(
        path_prefix="built-ins/String/prototype/indexOf/position-tointeger",
        conversion="ToInteger",
        frontmatter={
            "esid": "sec-string.prototype.indexof",
            "description": "String.prototype.indexOf type coercion for position parameter",
            "info": """
                String.prototype.indexOf ( searchString [ , position ] )

                4. Let pos be ? ToInteger(position).
            """,
        },
        templates={
            '0': 'assert.sameValue("aaaa".indexOf("aa", %(value)s), 0, %(message)s);',
            '1': 'assert.sameValue("aaaa".indexOf("aa", %(value)s), 1, %(message)s);',
            'Infinity': 'assert.sameValue("aaaa".indexOf("aa", %(value)s), -1, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { "".indexOf("", %(value)s); }, %(message)s);',
        },
        nominal_value_cases=[
            (2, 'assert.sameValue("aaaa".indexOf("aa", %(value)s), 2, %(message)s);'),
        ],
    )

    generate_tests(
        path_prefix="built-ins/String/prototype/indexOf/searchstring-tostring",
        conversion="ToString",
        frontmatter={
            "esid": "sec-string.prototype.indexof",
            "description": "String.prototype.indexOf type coercion for searchString parameter",
            "info": """
                String.prototype.indexOf ( searchString [ , position ] )

                3. Let searchStr be ? ToString(searchString).
            """,
        },
        templates={
            '': 'assert.sameValue("foo".indexOf(%(value)s), 0, %(message)s);',
            str: 'assert.sameValue("__%(expected_string_contents)s__".indexOf(%(value)s), 2, %(message)s);',
            "throws": 'assert.throws(%(error)s, function() { "".indexOf(%(value)s); }, %(message)s);',
        },
    )
