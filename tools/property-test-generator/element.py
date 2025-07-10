# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import logging

logger = logging.getLogger("test262." + __name__)


class Element:
    """HTML element node."""

    def __init__(self, parent, tag, attrs, pos):
        self.parent = parent
        self.tag = tag
        self.attrs = attrs
        self.nodes = []
        self.elems = []
        self.text = ""
        self.pos = pos
        if parent:
            parent.nodes.append(self)
            parent.elems.append(self)

    def find_elements(self, tag):
        """Return an iterator over all children with tag |tag|."""
        return (e for e in self.elems if e.tag == tag)

    def has_attribute(self, key):
        """Return true if this element has an attribute named |key|."""
        return next((True for k, _ in self.attrs if k == key), False)

    def find_attribute(self, key):
        """Return the value of the attribute named |key|. Or None if not found."""
        return next((v for k, v in self.attrs if k == key), None)

    def text_content(self):
        """Return the text nodes of this elements and its descendants."""
        text = ""
        for n in self.nodes:
            if type(n) is str:
                text += n
            else:
                text += n.text_content()
        return text

    def normalized_text_content(self):
        """Return the normalized text content with line breaks removed."""
        return " ".join(
            line.strip() for line in self.text_content().splitlines()
        ).strip()

    def __repr__(self):
        text = self.text.strip()
        if text:
            return f"<{self.tag}>{text}</{self.tag}>@{self.pos}"
        return f"<{self.tag}/>@{self.pos}"

    def __eq__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos == other.pos

    def __ne__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos != other.pos

    def __lt__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos < other.pos

    def __le__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos <= other.pos

    def __gt__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos > other.pos

    def __ge__(self, other):
        if not isinstance(other, Element):
            raise TypeError()
        return self.pos >= other.pos
