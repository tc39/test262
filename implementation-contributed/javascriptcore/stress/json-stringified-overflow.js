//@ skip if $memoryLimited

try {
    const s = "123".padStart(1073741823);
    JSON.stringify(s);
} catch(e) {
    if (e != "Error: Out of memory")
        throw e;
}
