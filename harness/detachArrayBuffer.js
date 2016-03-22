function $DETACHBUFFER(buffer) {
  if (ArrayBuffer.transfer) {
    ArrayBuffer.transfer(buffer);
  } else {
    try {
      eval("%ArrayBufferNeuter(buffer)");
    } catch (e) {
      throw new Test262Error("No method available to detach an ArrayBuffer");
    }
  }
}
