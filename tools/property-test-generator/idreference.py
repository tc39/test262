# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import copy
import logging
import os
import re

logger = logging.getLogger("test262." + __name__)


class IdReference:
    re_idname_part = re.compile(r"\w+")

    def __init__(self, name):
        self.parts = IdReference.into_parts(name)

    def __eq__(self, other):
        if not isinstance(other, IdReference):
            raise TypeError()
        return self.parts == other.parts

    def __ne__(self, other):
        if not isinstance(other, IdReference):
            raise TypeError()
        return self.parts != other.parts

    @staticmethod
    def try_from(name):
        """Return a new reference or None if the input can't be parsed."""
        try:
            return IdReference(name)
        except ValueError:
            return None

    @staticmethod
    def into_parts(name):
        """Parse |name| into a list of parts. Raise ValueError if not parsable."""

        # Remove leading and trailing whitespace and intrinsic notation
        name = name.strip().replace("%", "")

        if len(name) == 0:
            raise ValueError("empty string")

        stack = []
        parts = []
        while len(name):
            m = IdReference.re_idname_part.match(name)
            if m is None:
                raise ValueError(f"{name} doesn't start with a word")

            parts.append(m.group(0))

            if m.end() == len(name):
                break

            name = name[m.end() :].lstrip()

            if name[0] not in (".", "[", "]"):
                raise ValueError(f"unexpected character: {name[0]} in {name}")

            if name[0] == "[":
                stack.append(parts)
                parts = []
            elif name[0] == "]":
                if len(stack) == 0:
                    raise ValueError("unmatched ']'")
                if len(parts) == 0:
                    raise ValueError("empty []")
                p = parts
                parts = stack.pop()
                parts.append(p)
            elif name[0] == "." and len(name[1:].lstrip()) == 0:
                raise ValueError("unexpected trailing '.'")

            # Remove leading whitespace from next part
            name = name[1:].lstrip()

        if len(stack) > 0:
            raise ValueError("unmatched '['")

        assert len(parts) > 0
        return parts

    @staticmethod
    def parts_to_id(parts, global_props=None):
        """Return a source string to access |parts|."""
        assert len(parts) > 0
        result = parts[0]

        if global_props is not None and result not in global_props:
            result = f'getWellKnownIntrinsicObject("%{result}%")'

        for p in parts[1:]:
            if type(p) is str:
                result += f".{p}"
            else:
                result += f"[{IdReference.parts_to_id(p, global_props)}]"
        return result

    def is_symbol_property_key(self):
        """Return true if the last part is a symbol property key."""
        return type(self.parts[-1]) is not str

    def property_key(self):
        """Return the last part as a property key."""
        last = self.parts[-1]
        if type(last) is str:
            return last
        return IdReference.parts_to_id(last)

    def to_function_name(self):
        """Return a string for the default function name."""
        last = self.parts[-1]
        if type(last) is str:
            return last
        return f"[{IdReference.parts_to_id(last)}]"

    def to_get(self, global_props=None):
        """Return a string for a direct script access to this reference."""
        return IdReference.parts_to_id(self.parts, global_props)

    def to_get_own(self, global_props=None):
        """Return a tuple suitable for a Object.getOwnPropertyDescriptor call."""
        last = self.parts[-1]
        if type(last) is str:
            last = f'"{last}"'
        else:
            last = IdReference.parts_to_id(last, global_props)
        if len(self.parts) > 1:
            return (IdReference.parts_to_id(self.parts[:-1], global_props), last)
        return ("this", last)

    def has_intrinsic(self, global_props):
        """Return true if an intrinsic is referenced."""
        return "getWellKnownIntrinsicObject" in self.to_get(global_props)

    def is_template(self):
        """Return true if this is a template reference."""
        return self.parts[0].startswith("_")

    def template_name(self):
        """Return the name of a template reference."""
        assert self.is_template()
        return self.parts[0]

    def instantiate(self, name):
        """Instantiate this template reference for |name|."""
        assert self.is_template()
        assert type(name) is str

        result = copy.deepcopy(self)
        result.parts[0] = name
        return result

    def file_path(self):
        """Return the file path for this reference."""
        path = []
        for p in self.parts:
            if type(p) is str:
                path.append(p)
            else:
                path.append(".".join(p))
        return os.path.join(*path)
