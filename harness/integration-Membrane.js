/**
 * @fileoverview This tests how multiple features of ECMAScript work together.
 * Specifically, Proxy, WeakMap, Reflect, and Map.  Membranes, the primary
 * motivation behind both Proxy and WeakMap, require plenty of overhead to work.
 *
 * For an introduction to Membranes, read https://tvcutsem.github.io/js-membranes .
 */

const ORIGIN_GRAPH = Symbol("Origin graph");

/**
 * @constructor
 */
function Membrane() {
  /**
   * @private
   */
  this.graphs = new Map(/*
    name: new ObjectGraph(name, this)
  */);

  /**
   * @private
   */
  this.mappings = new WeakMap(/*
    object: new Map(
      string or symbol: { proxy, revoke }
    )
  */);
}

/**
 * Get a named object graph.  Create it if necessary.
 *
 * @param name       {String|Symbol} The name to use.
 * @param mustCreate {Boolean}       True if we should create the graph.
 *
 * @returns {ObjectGraph}
 */
Membrane.prototype.getObjectGraph = function(name, mustCreate = false) {
  if (!this.graphs.has(name) && mustCreate)
    this.graphs.set(name, new ObjectGraph(name, this));
  return this.graphs.get(name);
};

/**
 * Get the object graph for the original value a shadow target reflects.
 *
 * @param shadowTarget {Object} The shadow target.
 *
 * @returns {ObjectGraph}
 */
Membrane.prototype.originGraph = function(shadowTarget) {
  const map = this.mappings.get(shadowTarget);
  if (!map)
    throw new Error("originGraph called with unknown shadowTarget");
  return map.get(ORIGIN_GRAPH);
};

/**
 * Get a Proxy (or original value).
 *
 * @param value       {Object}      The value to convert.
 * @param targetGraph {ObjectGraph} The destination object graph.
 * @param isOrigin    {Boolean}     True if we're simply registering the value in the membrane.
 *
 * @return {Object} The proxy or original value.
 */
Membrane.prototype.convertToProxy = function(value, targetGraph, isOrigin = false) {
  {
    const t = typeof value;
    if ((t !== "object") && (t !== "function"))
      return value;
  }
  if (value === null)
    return value;

  if (!this.mappings.has(value)) {
    this.mappings.set(value, new Map());
  }

  const map = this.mappings.get(value);
  if (!map.has(targetGraph.name)) {
    let payload;
    if (isOrigin) {
      payload = { proxy: value };
      map.set(targetGraph.name, payload);
      map.set(ORIGIN_GRAPH, targetGraph);
    }

    else {
      if (!map.has(ORIGIN_GRAPH))
        throw new Error("You must set an origin graph for the value first");

      /* The shadow is for bookkeeping of properties, prototype.  In particular,
       * it stores proxies as properties, in the same object graph.  This
       * forces a lot of complications, yes, but they're necessary.
       */
      let shadow; 
      if (Array.isArray(value))
        shadow = [];
      else if (typeof value == "object")
        shadow = {};
      else if (typeof value == "function")
        shadow = function() {};

      /* This Membrane implementation started with using Proxy.revocable, but
       * none of the tests exercise that, and a revocation for the origin graph
       * would be a "distortion" which isn't really an integration test of more
       * than one feature... so I dropped the Proxy.revocable call.
       */
      payload = {
        proxy: new Proxy(shadow, targetGraph)
      };
      map.set(targetGraph.name, payload);

      this.mappings.set(shadow, map); // necessary so we can look up the original value
      this.mappings.set(payload.proxy, map);
    }
  }

  return map.get(targetGraph.name).proxy;
};

/**
 * Convert a property descriptor from one object graph to another.
 *
 * @param desc {Object}             The starting property descriptor.
 * @param sourceGraph {ObjectGraph} The object graph the descriptor came from.
 * @param targetGraph {ObjectGraph} The object graph we're sending the descriptor to.
 *
 * @returns {Object} The replacement property descriptor.
 */
Membrane.prototype.wrapDescriptor = function(desc, sourceGraph, targetGraph) {
  if (desc === undefined)
    return desc;

  var keys = Object.keys(desc);

  var wrappedDesc = {
    configurable: Boolean(desc.configurable)
  };
  if ("enumerable" in desc)
    wrappedDesc.enumerable = Boolean(desc.enumerable);
  if (keys.includes("writable"))
    wrappedDesc.writable = Boolean(desc.writable);

  ["value", "get", "set"].forEach(function(descProp) {
    if (!keys.includes(descProp))
      return;
    this.convertToProxy(desc[descProp], sourceGraph, true);
    wrappedDesc[descProp] = this.convertToProxy(desc[descProp], targetGraph);
  }, this);

  return wrappedDesc;
};

/**
 * @param name     {String|Symbol} The name of the object graph.
 * @param membrane {Membrane}      The membrane owning this graph.
 *
 * @constructor
 * @extends ProxyHandler
 */
function ObjectGraph(name, membrane) {
  this.name = name;
  this.membrane = membrane;
}

Reflect.ownKeys(Reflect).forEach(function(keyName) {
  Reflect.defineProperty(
    ObjectGraph.prototype,
    keyName,
    {
      value: function(shadowTarget, ...args) {
        const originGraph = this.membrane.originGraph(shadowTarget);
        args.unshift(this.membrane.convertToProxy(shadowTarget, originGraph));

        // Argument conversions.
        switch (keyName) {
          case "get":
            this.membrane.convertToProxy(args[2], this, true);
            args[2] = this.membrane.convertToProxy(args[2], originGraph);
            break;

          case "defineProperty":
            args[2] = this.membrane.wrapDescriptor(args[2], this, originGraph);
            break;

          case "set":
            this.membrane.convertToProxy(args[2], this, true);
            args[2] = this.membrane.convertToProxy(args[2], originGraph);
            this.membrane.convertToProxy(args[3], this, true);
            args[3] = this.membrane.convertToProxy(args[3], originGraph);
            break;

          case "setPrototypeOf":
            this.membrane.convertToProxy(args[1], this, true);
            args[1] = this.membrane.convertToProxy(args[1], originGraph);
            break;

          case "apply":
            this.membrane.convertToProxy(args[1], this, true);
            args[1] = this.membrane.convertToProxy(args[1], originGraph);

            args[2] = args[2].map((arg) => {
              this.membrane.convertToProxy(arg, this, true);
              return this.membrane.convertToProxy(arg, originGraph);
            });
            break;

          case "construct":
            args[1] = args[1].map((arg) => {
              this.membrane.convertToProxy(arg, this, true);
              return this.membrane.convertToProxy(arg, originGraph);
            });

            this.membrane.convertToProxy(args[2], this);
            args[2] = this.membrane.convertToProxy(args[2], originGraph);
            break;
        }

        // Run the command.  Exception handling and wrapping is not supported.
        let rv = Reflect[keyName].apply(Reflect, args);

        // Return value conversions.
        switch (keyName) {
          case "getOwnPropertyDescriptor":
            rv = this.membrane.wrapDescriptor(rv, originGraph, this);
            break;

          case "ownKeys":
            this.membrane.convertToProxy(rv, originGraph, true);
            rv = this.membrane.convertToProxy(rv, this);
            break;

          default:
            this.membrane.convertToProxy(rv, originGraph, true);
            rv = this.membrane.convertToProxy(rv, this);
            break;
        }

        // Book-keeping: Update the shadow proxy.
        switch (keyName) {
          case "ownKeys":
            /* Don't create proxies for all the properties.  We're not testing
             * sealed objects at this time, which causes headaches for proxies
             * under construction.
             */
            rv.forEach((property) => {
              if (!Reflect.getOwnPropertyDescriptor(shadowTarget, property)) {
                shadowTarget[property] = undefined;
              }
            });
            break;
    
          case "getOwnPropertyDescriptor":
            if (rv)
              Reflect.defineProperty(shadowTarget, args[1], rv);
            break;

          case "preventExtensions":
            if (rv)
              rv = Reflect.preventExtensions(shadowTarget);
        }
        return rv;
      },
      enumerable: true,
      writable: false,
      configurable: false,
    }
  );
});
