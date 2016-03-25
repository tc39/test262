// Do not optimize this pattern
function a() {
    b.c('d');
}

{
    function a() {
        b.c('d');
    }
    a();
    function a() {
        b.c('e');
    }
}

a();

function a() {
    b.c('e');
}
