function assertOrderOfOps(act, exp) {
    exp.forEach(function(e, i) {
        if(act[i][0] !== exp[i][0] || act[i][1] !== exp[i][1]) {
            throw new Error('Expected operation ' + i + ' to be ' + exp[i] + ' but was ' + act[i]);
        }
    });
 
    if(act.length > exp.length) {
        throw new Error('More operations than expected: ' +
            act.slice(exp.length).map(function(e) { return e[0] })
        );
    }
}
 
function createLoggerProxy(obj) {
    var ops = [];
    var proxy = new Proxy(obj, new Proxy({}, {
        get: function(o, v, r) {
            return function() {
                ops.push([v, arguments[1]]);
 
                return Reflect[v].apply(this, arguments);
            }
        }
    }))
 
    return {
        log: ops,
        proxy: proxy
    }
}