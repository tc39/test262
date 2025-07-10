# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import logging
from html.parser import HTMLParser

from element import Element

logger = logging.getLogger("test262." + __name__)


class SpecParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root_element = Element(None, None, [], None)
        self.current_element = self.root_element

    @staticmethod
    def ignorable_tag(tag):
        """Tuple of tags which are ignored."""
        return tag in ("br", "img", "link", "html", "body", "meta", "input")

    def handle_starttag(self, tag, attrs):
        if SpecParser.ignorable_tag(tag):
            return
        self.current_element = Element(self.current_element, tag, attrs, self.getpos())

    def handle_endtag(self, tag):
        if SpecParser.ignorable_tag(tag):
            return

        if self.current_element.tag != tag:
            logger.warn(
                f"{self.current_element.tag} closed by {tag} at {self.getpos()}"
            )

        assert self.current_element.tag == tag
        assert self.current_element.parent is not None

        # Remove leading and trailing whitespace from text elements.
        self.current_element.text = self.current_element.text.strip()

        self.current_element = self.current_element.parent

    def handle_data(self, data):
        self.current_element.nodes.append(data)
        self.current_element.text += data

    def unknown_decl(self, data):
        logger.warn(f"unknown declaration: {data}")
