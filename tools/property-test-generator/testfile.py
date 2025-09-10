# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import logging
import os

from template import NativeErrors, TypedArrayConstructors

logger = logging.getLogger("test262." + __name__)


class TestFile:
    def __init__(self, clause, idref, info, content, from_template=False):
        self.clause = clause
        self.idref = idref
        self.info = info
        self.content = content
        self.from_template = from_template

    def file_path(self):
        # Select the correct test262 directory for this test.
        if self.idref.parts[0].startswith("Intl") or self.clause.is_override():
            file_path = "intl402"
        elif self.clause.is_annex_b():
            file_path = os.path.join("annexB", "built-ins")
        else:
            file_path = "built-ins"

        # NativeErrors and TypedArrayConstructors aren't placed into the
        # top-level directory when generated from the template definition. Also
        # write any top-level tests in the alternative directory.
        if self.from_template or len(self.idref.parts) == 1:
            if self.idref.parts[0] in NativeErrors.keys():
                file_path = os.path.join(file_path, "NativeErrors")
            elif self.idref.parts[0] in TypedArrayConstructors.keys():
                file_path = os.path.join(file_path, "TypedArrayConstructors")

        idref_file_path = self.idref.file_path()

        # Remove leading "Intl" for intl402 tests, unless testing the "Intl"
        # object itself.
        if self.idref.parts[0] == "Intl":
            # Write tests for constructors like "Intl.Collator" into "intl402/Collator".
            if len(self.idref.parts) > 1 and self.idref.parts[1][0].isupper():
                assert idref_file_path.startswith("Intl" + os.path.sep)
                idref_file_path = idref_file_path[len("Intl" + os.path.sep) :]
        elif self.idref.parts[0].startswith("Intl"):
            # Write tests for intrinsics like "IntlSegmentsPrototype" into "intl402/SegmentsPrototype".
            idref_file_path = idref_file_path[len("Intl") :]

        if self.clause.is_constructor():
            file_name = "ctor.js"
        elif self.clause.is_prototype():
            file_name = "proto.js"
        elif self.clause.is_object():
            file_name = "object.js"
        else:
            file_name = "prop-desc.js"

        # Don't create sub-directories for these properties to match the
        # current style.
        if self.idref.property_key() in (
            "constructor",
            "Symbol.toStringTag",
            "BYTES_PER_ELEMENT",
        ):
            (idref_file_path, file_name) = os.path.split(idref_file_path)
            file_name += ".js"

        return os.path.join(file_path, idref_file_path, file_name)
