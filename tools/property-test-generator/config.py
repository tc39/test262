# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import fnmatch
import logging
import os
import re

import yaml

logger = logging.getLogger("test262." + __name__)


def load_test262parser(test262_dir):
    """
    Loads the test262 test record parser.
    """
    import importlib.machinery
    import importlib.util

    packaging_dir = os.path.join(test262_dir, "tools", "packaging")
    module_name = "parseTestRecord"

    # Create a FileFinder to load Python source files.
    loader_details = (
        importlib.machinery.SourceFileLoader,
        importlib.machinery.SOURCE_SUFFIXES,
    )
    finder = importlib.machinery.FileFinder(packaging_dir, loader_details)

    # Find the module spec.
    spec = finder.find_spec(module_name)
    if spec is None:
        raise RuntimeError("Can't find parseTestRecord module")

    # Create and execute the module.
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)

    # Return the executed module
    return module


def load_harness_features(test262_dir):
    """
    Load the "harness/features.yml" file.
    """
    with open(
        os.path.join(test262_dir, "harness", "features.yml"),
        encoding="utf-8",
    ) as f:
        return yaml.safe_load(f)


class Config:
    def __init__(self):
        self.re_include_matchers = None
        self.re_exclude_matchers = None

        dir_path = os.path.dirname(__file__)
        assert dir_path.split(os.sep)[-2:] == ["tools", "property-test-generator"]

        self.test262_dir = os.path.normpath(os.path.join(dir_path, "..", ".."))
        assert os.path.isdir(self.test262_dir)

        self.test262parser = load_test262parser(self.test262_dir)
        self.harness_features = load_harness_features(self.test262_dir)

    def include_matchers(self):
        if self.include is not None and self.re_include_matchers is None:
            self.re_include_matchers = [
                re.compile(fnmatch.translate(s)) for s in self.include.split(",")
            ]
        return self.re_include_matchers

    def exclude_matchers(self):
        if self.exclude is not None and self.re_exclude_matchers is None:
            self.re_exclude_matchers = [
                re.compile(fnmatch.translate(s)) for s in self.exclude.split(",")
            ]
        return self.re_exclude_matchers

    def is_included(self, test):
        if matchers := self.include_matchers():
            k = test.idref.to_get()
            return any(m.fullmatch(k) for m in matchers)
        return True

    def is_excluded(self, test):
        if matchers := self.exclude_matchers():
            k = test.idref.to_get()
            return any(m.fullmatch(k) for m in matchers)
        return False


cfg = Config()
