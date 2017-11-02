#!/usr/bin/env python
# Copyright (C) 2017 Josh Wolfe. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from lib.type_coercion import Generator

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Test262 tool for generating type coercion tests")
    args = parser.parse_args()


    with Generator("built-ins/String/prototype/indexOf/position-tointeger",
        esid="sec-string.prototype.indexof",
        description="String.prototype.indexOf type coercion for position parameter",
        info="""
            String.prototype.indexOf ( searchString [ , position ] )

            4. Let pos be ? ToInteger(position).
        """,
    ) as g:
        g.generate_ToInteger_zero('assert.sameValue("aaaa".indexOf("aa", %(value)s), 0);')
        g.generate_ToInteger_one('assert.sameValue("aaaa".indexOf("aa", %(value)s), 1);')
        g.generate_ToInteger_from_int(2, 'assert.sameValue("aaaa".indexOf("aa", %(value)s), 2);')
        g.generate_ToInteger_errors('assert.throws(%(error)s, function() { "".indexOf("", %(value)s); });')


    with Generator("built-ins/String/prototype/indexOf/searchstring-tostring",
        esid="sec-string.prototype.indexof",
        description="String.prototype.indexOf type coercion for searchString parameter",
        info="""
            String.prototype.indexOf ( searchString [ , position ] )

            3. Let searchStr be ? ToString(searchString).
        """,
    ) as g:
        g.generate_ToString_empty('assert.sameValue("foo".indexOf(%(value)s), 0);')
        g.generate_ToString_non_empty('assert.sameValue("__%(expected_string_contents)s__".indexOf(%(value)s), 2);')
        g.generate_ToString_errors('assert.throws(%(error)s, function() { "".indexOf(%(value)s); });')


    with Generator("built-ins/BigInt/asIntN/bits-toindex",
        esid="pending",
        description="BigInt.asIntN type coercion for bits parameter",
        info="""
            BigInt.asIntN ( bits, bigint )

            1. Let bits be ? ToIndex(bits).
        """,
        features=["BigInt"],
    ) as g:
        g.generate_ToIndex_zero('assert.sameValue(BigInt.asIntN(%(value)s, 1n), 0n);')
        g.generate_ToIndex_one('assert.sameValue(BigInt.asIntN(%(value)s, 1n), -1n);')
        g.generate_ToIndex_from_int(3, 'assert.sameValue(BigInt.asIntN(%(value)s, 10n), 2n);')
        g.generate_ToIndex_errors('assert.throws(%(error)s, function() { BigInt.asIntN(%(value)s, 0n); });')


    with Generator("built-ins/BigInt/asUintN/bits-toindex",
        esid="pending",
        description="BigInt.asUintN type coercion for bits parameter",
        info="""
            BigInt.asUintN ( bits, bigint )

            1. Let bits be ? ToIndex(bits).
        """,
        features=["BigInt"],
    ) as g:
        g.generate_ToIndex_zero('assert.sameValue(BigInt.asUintN(%(value)s, 1n), 0n);')
        g.generate_ToIndex_one('assert.sameValue(BigInt.asUintN(%(value)s, 1n), 1n);')
        g.generate_ToIndex_from_int(3, 'assert.sameValue(BigInt.asUintN(%(value)s, 10n), 2n);')
        g.generate_ToIndex_errors('assert.throws(%(error)s, function() { BigInt.asUintN(%(value)s, 0n); });')


    with Generator("built-ins/BigInt/asIntN/bigint-tobigint",
        esid="pending",
        description="BigInt.asIntN type coercion for bigint parameter",
        info="""
            BigInt.asIntN ( bits, bigint )

            2. Let bigint ? ToBigInt(bigint).
        """,
        features=["BigInt"],
    ) as g:
        g.generate_ToBigInt_zero('assert.sameValue(BigInt.asIntN(2, %(value)s), 0n);')
        g.generate_ToBigInt_one('assert.sameValue(BigInt.asIntN(2, %(value)s), 1n);')
        g.generate_ToBigInt_from_int(10, 'assert.sameValue(BigInt.asIntN(3, %(value)s), 2n);')
        g.generate_ToBigInt_from_int(12345678901234567890003, 'assert.sameValue(BigInt.asIntN(4, %(value)s), 3n);')
        g.generate_ToBigInt_errors('assert.throws(%(error)s, function() { BigInt.asIntN(0, %(value)s); });')


    with Generator("built-ins/BigInt/asUintN/bigint-tobigint",
        esid="pending",
        description="BigInt.asUintN type coercion for bigint parameter",
        info="""
            BigInt.asUintN ( bits, bigint )

            2. Let bigint ? ToBigInt(bigint).
        """,
        features=["BigInt"],
    ) as g:
        g.generate_ToBigInt_zero('assert.sameValue(BigInt.asUintN(2, %(value)s), 0n);')
        g.generate_ToBigInt_one('assert.sameValue(BigInt.asUintN(2, %(value)s), 1n);')
        g.generate_ToBigInt_from_int(10, 'assert.sameValue(BigInt.asUintN(3, %(value)s), 2n);')
        g.generate_ToBigInt_from_int(12345678901234567890003, 'assert.sameValue(BigInt.asUintN(4, %(value)s), 3n);')
        g.generate_ToBigInt_errors('assert.throws(%(error)s, function() { BigInt.asUintN(0, %(value)s); });')


    with Generator("built-ins/DataView/prototype/getBigInt64/to-boolean-littleendian",
        esid="sec-dataview.prototype.getbigint64",
        description="Boolean littleEndian argument coerced in ToBoolean",
        info="""
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
        features=["DataView", "ArrayBuffer", "DataView.prototype.setUint8", "BigInt"],
    ) as g:
        g.add_declaration(
            'var buffer = new ArrayBuffer(8);\n'
            'var sample = new DataView(buffer, 0);\n'
            'sample.setUint8(7, 0xff);'
        )
        g.test_lines.append('assert.sameValue(sample.getBigInt64(0), 0xffn, "no argument");')
        g.generate_ToBoolean_false('assert.sameValue(sample.getBigInt64(0, %(value)s), 0xffn);')
        g.generate_ToBoolean_true('assert.sameValue(sample.getBigInt64(0, %(value)s), -0x100000000000000n);')


    with Generator("built-ins/DataView/prototype/getBigInt64/toindex-byteoffset",
        esid="sec-dataview.prototype.getbigint64",
        description="ToIndex conversions on byteOffset",
        info="""
            DataView.prototype.getBigInt64 ( byteOffset [ , littleEndian ] )

            1. Let v be the this value.
            2. If littleEndian is not present, let littleEndian be undefined.
            3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int64").

            24.3.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

            ...
            4. Let getIndex be ? ToIndex(requestIndex).
            ...
        """,
        features=["DataView", "ArrayBuffer", "DataView.prototype.setUint8", "BigInt"],
    ) as g:
        g.add_declaration(
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
            'sample.setUint8(11, 0x02);'
        )
        g.generate_ToIndex_zero('assert.sameValue(sample.getBigInt64(%(value)s), 0x2702060280008001n);')
        g.generate_ToIndex_one('assert.sameValue(sample.getBigInt64(%(value)s), 0x20602800080017fn);')
        g.generate_ToIndex_from_int(2, 'assert.sameValue(sample.getBigInt64(%(value)s), 0x602800080017F00n);')
        g.generate_ToIndex_from_int(3, 'assert.sameValue(sample.getBigInt64(%(value)s), 0x2800080017F0001n);')

if __name__ == "__main__":
    main()
