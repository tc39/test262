# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import logging
import re

from idreference import IdReference as IdRef

logger = logging.getLogger("test262." + __name__)


class Value:
    def __init__(self, kind, value):
        self.kind = kind
        self.value = value
        pass

    def __repr__(self):
        return str((self.kind, self.value))

    re_number_value = re.compile(
        r"(?P<base>-?\d+(?:\.\d+)?)(?:\s*×\s*10(?P<exp>-?\d+))?"
    )

    @staticmethod
    def intrinsic(value):
        return Value("intrinsic", value)

    @staticmethod
    def null():
        return Value("null", "")

    def to_script_value(self, global_props=None):
        """Return the script source representation for |value|."""
        if self.kind == "string":
            return f'"{self.value}"'
        if self.kind == "number":
            if self.value == "NaN":
                return "0/0"
            if self.value == "-∞":
                return "-1/0"
            if self.value in ("∞", "+∞"):
                return "1/0"
            m = Value.re_number_value.fullmatch(self.value)
            assert m

            base = m.group("base")
            exp = m.group("exp")

            if exp is None:
                return base
            return f"{base}e{exp}"
        if self.kind == "undefined":
            return "undefined"
        if self.kind == "null":
            return "null"
        if self.kind == "intrinsic":
            return IdRef(self.value).to_get(global_props)
        if self.kind in ("prototype", "symbol", "note"):
            return None
        logger.warn(f"Unhandled value kind: {self.kind}")
        return None
