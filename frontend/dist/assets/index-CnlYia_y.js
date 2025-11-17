function Nd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tu = { exports: {} },
  Wl = {},
  Ou = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = Symbol.for("react.element"),
  jd = Symbol.for("react.portal"),
  Pd = Symbol.for("react.fragment"),
  Rd = Symbol.for("react.strict_mode"),
  _d = Symbol.for("react.profiler"),
  Td = Symbol.for("react.provider"),
  Od = Symbol.for("react.context"),
  Ld = Symbol.for("react.forward_ref"),
  zd = Symbol.for("react.suspense"),
  Dd = Symbol.for("react.memo"),
  Fd = Symbol.for("react.lazy"),
  Ks = Symbol.iterator;
function Id(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zu = Object.assign,
  Du = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Du),
    (this.updater = n || Lu);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fu() {}
Fu.prototype = Ln.prototype;
function Ho(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Du),
    (this.updater = n || Lu);
}
var Vo = (Ho.prototype = new Fu());
Vo.constructor = Ho;
zu(Vo, Ln.prototype);
Vo.isPureReactComponent = !0;
var qs = Array.isArray,
  Iu = Object.prototype.hasOwnProperty,
  Wo = { current: null },
  Au = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Iu.call(t, r) && !Au.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Pr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Wo.current,
  };
}
function Ad(e, t) {
  return {
    $$typeof: Pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function Ud(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Js = /\/+/g;
function di(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ud("" + e.key)
    : t.toString(36);
}
function rl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pr:
          case jd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + di(o, 0) : r),
      qs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Js, "$&/") + "/"),
          rl(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Qo(l) &&
            (l = Ad(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Js, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), qs(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + di(i, s);
      o += rl(i, t, n, a, l);
    }
  else if (((a = Id(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + di(i, s++)), (o += rl(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    rl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Md(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  ll = { transition: null },
  Bd = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: ll,
    ReactCurrentOwner: Wo,
  };
function Mu() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Ln;
F.Fragment = Pd;
F.Profiler = _d;
F.PureComponent = Ho;
F.StrictMode = Rd;
F.Suspense = zd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bd;
F.act = Mu;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Wo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Iu.call(t, a) &&
        !Au.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Pr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Od,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Td, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Uu;
F.createFactory = function (e) {
  var t = Uu.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Ld, render: e };
};
F.isValidElement = Qo;
F.lazy = function (e) {
  return { $$typeof: Fd, _payload: { _status: -1, _result: e }, _init: Md };
};
F.memo = function (e, t) {
  return { $$typeof: Dd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
F.unstable_act = Mu;
F.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
F.useId = function () {
  return pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return pe.current.useRef(e);
};
F.useState = function (e) {
  return pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return pe.current.useTransition();
};
F.version = "18.3.1";
Ou.exports = F;
var k = Ou.exports;
const Bu = Cd(k),
  $d = Nd({ __proto__: null, default: Bu }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd = k,
  Vd = Symbol.for("react.element"),
  Wd = Symbol.for("react.fragment"),
  Qd = Object.prototype.hasOwnProperty,
  Kd = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function $u(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Qd.call(t, r) && !qd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Vd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Kd.current,
  };
}
Wl.Fragment = Wd;
Wl.jsx = $u;
Wl.jsxs = $u;
Tu.exports = Wl;
var p = Tu.exports,
  Hu = { exports: {} },
  Re = {},
  Vu = { exports: {} },
  Wu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, O) {
    var z = j.length;
    j.push(O);
    e: for (; 0 < z; ) {
      var A = (z - 1) >>> 1,
        $ = j[A];
      if (0 < l($, O)) (j[A] = O), (j[z] = $), (z = A);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var O = j[0],
      z = j.pop();
    if (z !== O) {
      j[0] = z;
      e: for (var A = 0, $ = j.length, pt = $ >>> 1; A < pt; ) {
        var Te = 2 * (A + 1) - 1,
          rn = j[Te],
          Ut = Te + 1,
          Ur = j[Ut];
        if (0 > l(rn, z))
          Ut < $ && 0 > l(Ur, rn)
            ? ((j[A] = Ur), (j[Ut] = z), (A = Ut))
            : ((j[A] = rn), (j[Te] = z), (A = Te));
        else if (Ut < $ && 0 > l(Ur, z)) (j[A] = Ur), (j[Ut] = z), (A = Ut);
        else break e;
      }
    }
    return O;
  }
  function l(j, O) {
    var z = j.sortIndex - O.sortIndex;
    return z !== 0 ? z : j.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    g = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(j) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= j)
        r(u), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(u);
    }
  }
  function E(j) {
    if (((x = !1), y(j), !g))
      if (n(a) !== null) (g = !0), ye(C);
      else {
        var O = n(u);
        O !== null && nn(E, O.startTime - j);
      }
  }
  function C(j, O) {
    (g = !1), x && ((x = !1), h(T), (T = -1)), (v = !0);
    var z = f;
    try {
      for (
        y(O), d = n(a);
        d !== null && (!(d.expirationTime > O) || (j && !he()));

      ) {
        var A = d.callback;
        if (typeof A == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var $ = A(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof $ == "function" ? (d.callback = $) : d === n(a) && r(a),
            y(O);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var pt = !0;
      else {
        var Te = n(u);
        Te !== null && nn(E, Te.startTime - O), (pt = !1);
      }
      return pt;
    } finally {
      (d = null), (f = z), (v = !1);
    }
  }
  var _ = !1,
    P = null,
    T = -1,
    M = 5,
    D = -1;
  function he() {
    return !(e.unstable_now() - D < M);
  }
  function qe() {
    if (P !== null) {
      var j = e.unstable_now();
      D = j;
      var O = !0;
      try {
        O = P(!0, j);
      } finally {
        O ? Ue() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var Ue;
  if (typeof m == "function")
    Ue = function () {
      m(qe);
    };
  else if (typeof MessageChannel < "u") {
    var Je = new MessageChannel(),
      Ar = Je.port2;
    (Je.port1.onmessage = qe),
      (Ue = function () {
        Ar.postMessage(null);
      });
  } else
    Ue = function () {
      w(qe, 0);
    };
  function ye(j) {
    (P = j), _ || ((_ = !0), Ue());
  }
  function nn(j, O) {
    T = w(function () {
      j(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), ye(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var z = f;
      f = O;
      try {
        return j();
      } finally {
        f = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, O) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var z = f;
      f = j;
      try {
        return O();
      } finally {
        f = z;
      }
    }),
    (e.unstable_scheduleCallback = function (j, O, z) {
      var A = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? A + z : A))
          : (z = A),
        j)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = z + $),
        (j = {
          id: c++,
          callback: O,
          priorityLevel: j,
          startTime: z,
          expirationTime: $,
          sortIndex: -1,
        }),
        z > A
          ? ((j.sortIndex = z),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (x ? (h(T), (T = -1)) : (x = !0), nn(E, z - A)))
          : ((j.sortIndex = $), t(a, j), g || v || ((g = !0), ye(C))),
        j
      );
    }),
    (e.unstable_shouldYield = he),
    (e.unstable_wrapCallback = function (j) {
      var O = f;
      return function () {
        var z = f;
        f = O;
        try {
          return j.apply(this, arguments);
        } finally {
          f = z;
        }
      };
    });
})(Wu);
Vu.exports = Wu;
var Jd = Vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd = k,
  Pe = Jd;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qu = new Set(),
  ar = {};
function en(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (ar[e] = t, e = 0; e < t.length; e++) Qu.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hi = Object.prototype.hasOwnProperty,
  Yd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xs = {},
  Ys = {};
function Gd(e) {
  return Hi.call(Ys, e)
    ? !0
    : Hi.call(Xs, e)
    ? !1
    : Yd.test(e)
    ? (Ys[e] = !0)
    : ((Xs[e] = !0), !1);
}
function Zd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bd(e, t, n, r) {
  if (t === null || typeof t > "u" || Zd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ko, qo);
    ie[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ko, qo);
    ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ko, qo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (bd(t, n, l, r) && (n = null),
    r || l === null
      ? Gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Br = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  sn = Symbol.for("react.fragment"),
  Xo = Symbol.for("react.strict_mode"),
  Vi = Symbol.for("react.profiler"),
  Ku = Symbol.for("react.provider"),
  qu = Symbol.for("react.context"),
  Yo = Symbol.for("react.forward_ref"),
  Wi = Symbol.for("react.suspense"),
  Qi = Symbol.for("react.suspense_list"),
  Go = Symbol.for("react.memo"),
  ht = Symbol.for("react.lazy"),
  Ju = Symbol.for("react.offscreen"),
  Gs = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gs && e[Gs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  pi;
function Xn(e) {
  if (pi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pi = (t && t[1]) || "";
    }
  return (
    `
` +
    pi +
    e
  );
}
var mi = !1;
function hi(e, t) {
  if (!e || mi) return "";
  mi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (mi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function ep(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = hi(e.type, !1)), e;
    case 11:
      return (e = hi(e.type.render, !1)), e;
    case 1:
      return (e = hi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sn:
      return "Fragment";
    case on:
      return "Portal";
    case Vi:
      return "Profiler";
    case Xo:
      return "StrictMode";
    case Wi:
      return "Suspense";
    case Qi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qu:
        return (e.displayName || "Context") + ".Consumer";
      case Ku:
        return (e._context.displayName || "Context") + ".Provider";
      case Yo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Go:
        return (
          (t = e.displayName || null), t !== null ? t : Ki(e.type) || "Memo"
        );
      case ht:
        (t = e._payload), (e = e._init);
        try {
          return Ki(e(t));
        } catch {}
    }
  return null;
}
function tp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ki(t);
    case 8:
      return t === Xo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function np(e) {
  var t = Xu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $r(e) {
  e._valueTracker || (e._valueTracker = np(e));
}
function Yu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Xu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qi(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gu(e, t) {
  (t = t.checked), t != null && Jo(e, "checked", t, !1);
}
function Ji(e, t) {
  Gu(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xi(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xi(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function Zu(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Hr,
  ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Hr = Hr || document.createElement("div"),
          Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  rp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
  });
});
function tc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bn.hasOwnProperty(e) && bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = tc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var lp = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Zi(e, t) {
  if (t) {
    if (lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function bi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var eo = null;
function Zo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var to = null,
  xn = null,
  wn = null;
function na(e) {
  if ((e = Tr(e))) {
    if (typeof to != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Xl(t)), to(e.stateNode, e.type, t));
  }
}
function rc(e) {
  xn ? (wn ? wn.push(e) : (wn = [e])) : (xn = e);
}
function lc() {
  if (xn) {
    var e = xn,
      t = wn;
    if (((wn = xn = null), na(e), t)) for (e = 0; e < t.length; e++) na(t[e]);
  }
}
function ic(e, t) {
  return e(t);
}
function oc() {}
var yi = !1;
function sc(e, t, n) {
  if (yi) return e(t, n);
  yi = !0;
  try {
    return ic(e, t, n);
  } finally {
    (yi = !1), (xn !== null || wn !== null) && (oc(), lc());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var no = !1;
if (st)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        no = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    no = !1;
  }
function ip(e, t, n, r, l, i, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var er = !1,
  xl = null,
  wl = !1,
  ro = null,
  op = {
    onError: function (e) {
      (er = !0), (xl = e);
    },
  };
function sp(e, t, n, r, l, i, o, s, a) {
  (er = !1), (xl = null), ip.apply(op, arguments);
}
function ap(e, t, n, r, l, i, o, s, a) {
  if ((sp.apply(this, arguments), er)) {
    if (er) {
      var u = xl;
      (er = !1), (xl = null);
    } else throw Error(N(198));
    wl || ((wl = !0), (ro = u));
  }
}
function tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ac(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ra(e) {
  if (tn(e) !== e) throw Error(N(188));
}
function up(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ra(l), e;
        if (i === r) return ra(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function uc(e) {
  return (e = up(e)), e !== null ? cc(e) : null;
}
function cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fc = Pe.unstable_scheduleCallback,
  la = Pe.unstable_cancelCallback,
  cp = Pe.unstable_shouldYield,
  fp = Pe.unstable_requestPaint,
  X = Pe.unstable_now,
  dp = Pe.unstable_getCurrentPriorityLevel,
  bo = Pe.unstable_ImmediatePriority,
  dc = Pe.unstable_UserBlockingPriority,
  Sl = Pe.unstable_NormalPriority,
  pp = Pe.unstable_LowPriority,
  pc = Pe.unstable_IdlePriority,
  Ql = null,
  be = null;
function mp(e) {
  if (be && typeof be.onCommitFiberRoot == "function")
    try {
      be.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : gp,
  hp = Math.log,
  yp = Math.LN2;
function gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hp(e) / yp) | 0)) | 0;
}
var Vr = 64,
  Wr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function El(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Gn(s)) : ((i &= o), i !== 0 && (r = Gn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Gn(o)) : i !== 0 && (r = Gn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function vp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ve(i),
      s = 1 << o,
      a = l[o];
    a === -1
      ? (!(s & n) || s & r) && (l[o] = vp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function lo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mc() {
  var e = Vr;
  return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e;
}
function gi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function wp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ve(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function hc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yc,
  ts,
  gc,
  vc,
  xc,
  io = !1,
  Qr = [],
  Et = null,
  kt = null,
  Nt = null,
  fr = new Map(),
  dr = new Map(),
  gt = [],
  Sp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ia(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Tr(t)), t !== null && ts(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ep(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = Hn(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (kt = Hn(kt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Nt = Hn(Nt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return fr.set(i, Hn(fr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), dr.set(i, Hn(dr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function wc(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ac(n)), t !== null)) {
          (e.blockedOn = t),
            xc(e.priority, function () {
              gc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function il(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (eo = r), n.target.dispatchEvent(r), (eo = null);
    } else return (t = Tr(n)), t !== null && ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function oa(e, t, n) {
  il(e) && n.delete(t);
}
function kp() {
  (io = !1),
    Et !== null && il(Et) && (Et = null),
    kt !== null && il(kt) && (kt = null),
    Nt !== null && il(Nt) && (Nt = null),
    fr.forEach(oa),
    dr.forEach(oa);
}
function Vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    io ||
      ((io = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, kp)));
}
function pr(e) {
  function t(l) {
    return Vn(l, e);
  }
  if (0 < Qr.length) {
    Vn(Qr[0], e);
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Vn(Et, e),
      kt !== null && Vn(kt, e),
      Nt !== null && Vn(Nt, e),
      fr.forEach(t),
      dr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    wc(n), n.blockedOn === null && gt.shift();
}
var Sn = ft.ReactCurrentBatchConfig,
  kl = !0;
function Np(e, t, n, r) {
  var l = U,
    i = Sn.transition;
  Sn.transition = null;
  try {
    (U = 1), ns(e, t, n, r);
  } finally {
    (U = l), (Sn.transition = i);
  }
}
function Cp(e, t, n, r) {
  var l = U,
    i = Sn.transition;
  Sn.transition = null;
  try {
    (U = 4), ns(e, t, n, r);
  } finally {
    (U = l), (Sn.transition = i);
  }
}
function ns(e, t, n, r) {
  if (kl) {
    var l = oo(e, t, n, r);
    if (l === null) Pi(e, t, r, Nl, n), ia(e, r);
    else if (Ep(l, e, t, n, r)) r.stopPropagation();
    else if ((ia(e, r), t & 4 && -1 < Sp.indexOf(e))) {
      for (; l !== null; ) {
        var i = Tr(l);
        if (
          (i !== null && yc(i),
          (i = oo(e, t, n, r)),
          i === null && Pi(e, t, r, Nl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Pi(e, t, r, null, n);
  }
}
var Nl = null;
function oo(e, t, n, r) {
  if (((Nl = null), (e = Zo(r)), (e = $t(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ac(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Nl = e), null;
}
function Sc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dp()) {
        case bo:
          return 1;
        case dc:
          return 4;
        case Sl:
        case pp:
          return 16;
        case pc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null,
  rs = null,
  ol = null;
function Ec() {
  if (ol) return ol;
  var e,
    t = rs,
    n = t.length,
    r,
    l = "value" in xt ? xt.value : xt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ol = l.slice(e, 1 < r ? 1 - r : void 0));
}
function sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kr() {
  return !0;
}
function sa() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Kr
        : sa),
      (this.isPropagationStopped = sa),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr));
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ls = _e(zn),
  _r = q({}, zn, { view: 0, detail: 0 }),
  jp = _e(_r),
  vi,
  xi,
  Wn,
  Kl = q({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: is,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wn &&
            (Wn && e.type === "mousemove"
              ? ((vi = e.screenX - Wn.screenX), (xi = e.screenY - Wn.screenY))
              : (xi = vi = 0),
            (Wn = e)),
          vi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xi;
    },
  }),
  aa = _e(Kl),
  Pp = q({}, Kl, { dataTransfer: 0 }),
  Rp = _e(Pp),
  _p = q({}, _r, { relatedTarget: 0 }),
  wi = _e(_p),
  Tp = q({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Op = _e(Tp),
  Lp = q({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zp = _e(Lp),
  Dp = q({}, zn, { data: 0 }),
  ua = _e(Dp),
  Fp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ap[e]) ? !!t[e] : !1;
}
function is() {
  return Up;
}
var Mp = q({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = Fp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ip[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: is,
    charCode: function (e) {
      return e.type === "keypress" ? sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bp = _e(Mp),
  $p = q({}, Kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ca = _e($p),
  Hp = q({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: is,
  }),
  Vp = _e(Hp),
  Wp = q({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = _e(Wp),
  Kp = q({}, Kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qp = _e(Kp),
  Jp = [9, 13, 27, 32],
  os = st && "CompositionEvent" in window,
  tr = null;
st && "documentMode" in document && (tr = document.documentMode);
var Xp = st && "TextEvent" in window && !tr,
  kc = st && (!os || (tr && 8 < tr && 11 >= tr)),
  fa = " ",
  da = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return Jp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Yp(e, t) {
  switch (e) {
    case "compositionend":
      return Cc(t);
    case "keypress":
      return t.which !== 32 ? null : ((da = !0), fa);
    case "textInput":
      return (e = t.data), e === fa && da ? null : e;
    default:
      return null;
  }
}
function Gp(e, t) {
  if (an)
    return e === "compositionend" || (!os && Nc(e, t))
      ? ((e = Ec()), (ol = rs = xt = null), (an = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function jc(e, t, n, r) {
  rc(r),
    (t = Cl(t, "onChange")),
    0 < t.length &&
      ((n = new ls("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  mr = null;
function bp(e) {
  Ac(e, 0);
}
function ql(e) {
  var t = fn(e);
  if (Yu(t)) return e;
}
function em(e, t) {
  if (e === "change") return t;
}
var Pc = !1;
if (st) {
  var Si;
  if (st) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var ma = document.createElement("div");
      ma.setAttribute("oninput", "return;"),
        (Ei = typeof ma.oninput == "function");
    }
    Si = Ei;
  } else Si = !1;
  Pc = Si && (!document.documentMode || 9 < document.documentMode);
}
function ha() {
  nr && (nr.detachEvent("onpropertychange", Rc), (mr = nr = null));
}
function Rc(e) {
  if (e.propertyName === "value" && ql(mr)) {
    var t = [];
    jc(t, mr, e, Zo(e)), sc(bp, t);
  }
}
function tm(e, t, n) {
  e === "focusin"
    ? (ha(), (nr = t), (mr = n), nr.attachEvent("onpropertychange", Rc))
    : e === "focusout" && ha();
}
function nm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ql(mr);
}
function rm(e, t) {
  if (e === "click") return ql(t);
}
function lm(e, t) {
  if (e === "input" || e === "change") return ql(t);
}
function im(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : im;
function hr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Hi.call(t, l) || !Qe(e[l], t[l])) return !1;
  }
  return !0;
}
function ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ga(e, t) {
  var n = ya(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ya(n);
  }
}
function _c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _c(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tc() {
  for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vl(e.document);
  }
  return t;
}
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function om(e) {
  var t = Tc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ss(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ga(n, i));
        var o = ga(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var sm = st && "documentMode" in document && 11 >= document.documentMode,
  un = null,
  so = null,
  rr = null,
  ao = !1;
function va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ao ||
    un == null ||
    un !== vl(r) ||
    ((r = un),
    "selectionStart" in r && ss(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && hr(rr, r)) ||
      ((rr = r),
      (r = Cl(so, "onSelect")),
      0 < r.length &&
        ((t = new ls("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
function qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cn = {
    animationend: qr("Animation", "AnimationEnd"),
    animationiteration: qr("Animation", "AnimationIteration"),
    animationstart: qr("Animation", "AnimationStart"),
    transitionend: qr("Transition", "TransitionEnd"),
  },
  ki = {},
  Oc = {};
st &&
  ((Oc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  "TransitionEvent" in window || delete cn.transitionend.transition);
function Jl(e) {
  if (ki[e]) return ki[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oc) return (ki[e] = t[n]);
  return e;
}
var Lc = Jl("animationend"),
  zc = Jl("animationiteration"),
  Dc = Jl("animationstart"),
  Fc = Jl("transitionend"),
  Ic = new Map(),
  xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dt(e, t) {
  Ic.set(e, t), en(t, [e]);
}
for (var Ni = 0; Ni < xa.length; Ni++) {
  var Ci = xa[Ni],
    am = Ci.toLowerCase(),
    um = Ci[0].toUpperCase() + Ci.slice(1);
  Dt(am, "on" + um);
}
Dt(Lc, "onAnimationEnd");
Dt(zc, "onAnimationIteration");
Dt(Dc, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(Fc, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
en(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
en(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
en(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function wa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ap(r, t, void 0, e), (e.currentTarget = null);
}
function Ac(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          wa(l, s, u), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          wa(l, s, u), (i = a);
        }
    }
  }
  if (wl) throw ((e = ro), (wl = !1), (ro = null), e);
}
function H(e, t) {
  var n = t[mo];
  n === void 0 && (n = t[mo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Uc(t, e, 2, !1), n.add(r));
}
function ji(e, t, n) {
  var r = 0;
  t && (r |= 4), Uc(n, e, r, t);
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      Qu.forEach(function (n) {
        n !== "selectionchange" && (cm.has(n) || ji(n, !1, e), ji(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), ji("selectionchange", !1, t));
  }
}
function Uc(e, t, n, r) {
  switch (Sc(t)) {
    case 1:
      var l = Np;
      break;
    case 4:
      l = Cp;
      break;
    default:
      l = ns;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !no ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Pi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = $t(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  sc(function () {
    var u = i,
      c = Zo(n),
      d = [];
    e: {
      var f = Ic.get(e);
      if (f !== void 0) {
        var v = ls,
          g = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Bp;
            break;
          case "focusin":
            (g = "focus"), (v = wi);
            break;
          case "focusout":
            (g = "blur"), (v = wi);
            break;
          case "beforeblur":
          case "afterblur":
            v = wi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Rp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Vp;
            break;
          case Lc:
          case zc:
          case Dc:
            v = Op;
            break;
          case Fc:
            v = Qp;
            break;
          case "scroll":
            v = jp;
            break;
          case "wheel":
            v = qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ca;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          h = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              h !== null && ((E = cr(m, h)), E != null && x.push(gr(m, E, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((f = new v(f, g, null, n, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== eo &&
            (g = n.relatedTarget || n.fromElement) &&
            ($t(g) || g[at]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? $t(g) : null),
              g !== null &&
                ((w = tn(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((x = aa),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ca),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (w = v == null ? f : fn(v)),
            (y = g == null ? f : fn(g)),
            (f = new x(E, m + "leave", v, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (E = null),
            $t(c) === u &&
              ((x = new x(h, m + "enter", g, n, c)),
              (x.target = y),
              (x.relatedTarget = w),
              (E = x)),
            (w = E),
            v && g)
          )
            t: {
              for (x = v, h = g, m = 0, y = x; y; y = ln(y)) m++;
              for (y = 0, E = h; E; E = ln(E)) y++;
              for (; 0 < m - y; ) (x = ln(x)), m--;
              for (; 0 < y - m; ) (h = ln(h)), y--;
              for (; m--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = ln(x)), (h = ln(h));
              }
              x = null;
            }
          else x = null;
          v !== null && Sa(d, f, v, x, !1),
            g !== null && w !== null && Sa(d, w, g, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? fn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var C = em;
        else if (pa(f))
          if (Pc) C = lm;
          else {
            C = nm;
            var _ = tm;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = rm);
        if (C && (C = C(e, u))) {
          jc(d, C, n, c);
          break e;
        }
        _ && _(e, f, u),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            Xi(f, "number", f.value);
      }
      switch (((_ = u ? fn(u) : window), e)) {
        case "focusin":
          (pa(_) || _.contentEditable === "true") &&
            ((un = _), (so = u), (rr = null));
          break;
        case "focusout":
          rr = so = un = null;
          break;
        case "mousedown":
          ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ao = !1), va(d, n, c);
          break;
        case "selectionchange":
          if (sm) break;
        case "keydown":
        case "keyup":
          va(d, n, c);
      }
      var P;
      if (os)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        an
          ? Nc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (kc &&
          n.locale !== "ko" &&
          (an || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && an && (P = Ec())
            : ((xt = c),
              (rs = "value" in xt ? xt.value : xt.textContent),
              (an = !0))),
        (_ = Cl(u, T)),
        0 < _.length &&
          ((T = new ua(T, e, null, n, c)),
          d.push({ event: T, listeners: _ }),
          P ? (T.data = P) : ((P = Cc(n)), P !== null && (T.data = P)))),
        (P = Xp ? Yp(e, n) : Gp(e, n)) &&
          ((u = Cl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ua("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Ac(d, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = cr(e, n)),
      i != null && r.unshift(gr(e, i, l)),
      (i = cr(e, t)),
      i != null && r.push(gr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      l
        ? ((a = cr(n, i)), a != null && o.unshift(gr(n, a, s)))
        : l || ((a = cr(n, i)), a != null && o.push(gr(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var fm = /\r\n?/g,
  dm = /\u0000|\uFFFD/g;
function Ea(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fm,
      `
`
    )
    .replace(dm, "");
}
function Xr(e, t, n) {
  if (((t = Ea(t)), Ea(e) !== t && n)) throw Error(N(425));
}
function jl() {}
var uo = null,
  co = null;
function fo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var po = typeof setTimeout == "function" ? setTimeout : void 0,
  pm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ka = typeof Promise == "function" ? Promise : void 0,
  mm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ka < "u"
      ? function (e) {
          return ka.resolve(null).then(e).catch(hm);
        }
      : po;
function hm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ri(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  pr(t);
}
function Ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Na(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Dn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + Dn,
  vr = "__reactProps$" + Dn,
  at = "__reactContainer$" + Dn,
  mo = "__reactEvents$" + Dn,
  ym = "__reactListeners$" + Dn,
  gm = "__reactHandles$" + Dn;
function $t(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Na(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = Na(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Tr(e) {
  return (
    (e = e[Ze] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Xl(e) {
  return e[vr] || null;
}
var ho = [],
  dn = -1;
function Ft(e) {
  return { current: e };
}
function V(e) {
  0 > dn || ((e.current = ho[dn]), (ho[dn] = null), dn--);
}
function B(e, t) {
  dn++, (ho[dn] = e.current), (e.current = t);
}
var zt = {},
  ce = Ft(zt),
  xe = Ft(!1),
  Jt = zt;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Pl() {
  V(xe), V(ce);
}
function Ca(e, t, n) {
  if (ce.current !== zt) throw Error(N(168));
  B(ce, t), B(xe, n);
}
function Mc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, tp(e) || "Unknown", l));
  return q({}, n, r);
}
function Rl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (Jt = ce.current),
    B(ce, e),
    B(xe, xe.current),
    !0
  );
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Mc(e, t, Jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(xe),
      V(ce),
      B(ce, e))
    : V(xe),
    B(xe, n);
}
var rt = null,
  Yl = !1,
  _i = !1;
function Bc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function vm(e) {
  (Yl = !0), Bc(e);
}
function It() {
  if (!_i && rt !== null) {
    _i = !0;
    var e = 0,
      t = U;
    try {
      var n = rt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (Yl = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), fc(bo, It), l);
    } finally {
      (U = t), (_i = !1);
    }
  }
  return null;
}
var pn = [],
  mn = 0,
  _l = null,
  Tl = 0,
  Oe = [],
  Le = 0,
  Xt = null,
  lt = 1,
  it = "";
function Mt(e, t) {
  (pn[mn++] = Tl), (pn[mn++] = _l), (_l = e), (Tl = t);
}
function $c(e, t, n) {
  (Oe[Le++] = lt), (Oe[Le++] = it), (Oe[Le++] = Xt), (Xt = e);
  var r = lt;
  e = it;
  var l = 32 - Ve(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ve(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (lt = (1 << (32 - Ve(t) + l)) | (n << l) | r),
      (it = i + e);
  } else (lt = (1 << i) | (n << l) | r), (it = e);
}
function as(e) {
  e.return !== null && (Mt(e, 1), $c(e, 1, 0));
}
function us(e) {
  for (; e === _l; )
    (_l = pn[--mn]), (pn[mn] = null), (Tl = pn[--mn]), (pn[mn] = null);
  for (; e === Xt; )
    (Xt = Oe[--Le]),
      (Oe[Le] = null),
      (it = Oe[--Le]),
      (Oe[Le] = null),
      (lt = Oe[--Le]),
      (Oe[Le] = null);
}
var je = null,
  Ce = null,
  W = !1,
  He = null;
function Hc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ce = Ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: lt, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function go(e) {
  if (W) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Pa(e, t)) {
        if (yo(e)) throw Error(N(418));
        t = Ct(n.nextSibling);
        var r = je;
        t && Pa(e, t)
          ? Hc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (je = e));
      }
    } else {
      if (yo(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (je = e);
    }
  }
}
function Ra(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Yr(e) {
  if (e !== je) return !1;
  if (!W) return Ra(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fo(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (yo(e)) throw (Vc(), Error(N(418)));
    for (; t; ) Hc(e, t), (t = Ct(t.nextSibling));
  }
  if ((Ra(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = Ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = je ? Ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Vc() {
  for (var e = Ce; e; ) e = Ct(e.nextSibling);
}
function jn() {
  (Ce = je = null), (W = !1);
}
function cs(e) {
  He === null ? (He = [e]) : He.push(e);
}
var xm = ft.ReactCurrentBatchConfig;
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Gr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _a(e) {
  var t = e._init;
  return t(e._payload);
}
function Wc(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function l(h, m) {
    return (h = _t(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, y, E) {
    return m === null || m.tag !== 6
      ? ((m = Ii(y, h.mode, E)), (m.return = h), m)
      : ((m = l(m, y)), (m.return = h), m);
  }
  function a(h, m, y, E) {
    var C = y.type;
    return C === sn
      ? c(h, m, y.props.children, E, y.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ht &&
            _a(C) === m.type))
      ? ((E = l(m, y.props)), (E.ref = Qn(h, m, y)), (E.return = h), E)
      : ((E = ml(y.type, y.key, y.props, null, h.mode, E)),
        (E.ref = Qn(h, m, y)),
        (E.return = h),
        E);
  }
  function u(h, m, y, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Ai(y, h.mode, E)), (m.return = h), m)
      : ((m = l(m, y.children || [])), (m.return = h), m);
  }
  function c(h, m, y, E, C) {
    return m === null || m.tag !== 7
      ? ((m = Kt(y, h.mode, E, C)), (m.return = h), m)
      : ((m = l(m, y)), (m.return = h), m);
  }
  function d(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Ii("" + m, h.mode, y)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Br:
          return (
            (y = ml(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = Qn(h, null, m)),
            (y.return = h),
            y
          );
        case on:
          return (m = Ai(m, h.mode, y)), (m.return = h), m;
        case ht:
          var E = m._init;
          return d(h, E(m._payload), y);
      }
      if (Yn(m) || Bn(m))
        return (m = Kt(m, h.mode, y, null)), (m.return = h), m;
      Gr(h, m);
    }
    return null;
  }
  function f(h, m, y, E) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : s(h, m, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Br:
          return y.key === C ? a(h, m, y, E) : null;
        case on:
          return y.key === C ? u(h, m, y, E) : null;
        case ht:
          return (C = y._init), f(h, m, C(y._payload), E);
      }
      if (Yn(y) || Bn(y)) return C !== null ? null : c(h, m, y, E, null);
      Gr(h, y);
    }
    return null;
  }
  function v(h, m, y, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(y) || null), s(m, h, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Br:
          return (h = h.get(E.key === null ? y : E.key) || null), a(m, h, E, C);
        case on:
          return (h = h.get(E.key === null ? y : E.key) || null), u(m, h, E, C);
        case ht:
          var _ = E._init;
          return v(h, m, y, _(E._payload), C);
      }
      if (Yn(E) || Bn(E)) return (h = h.get(y) || null), c(m, h, E, C, null);
      Gr(m, E);
    }
    return null;
  }
  function g(h, m, y, E) {
    for (
      var C = null, _ = null, P = m, T = (m = 0), M = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var D = f(h, P, y[T], E);
      if (D === null) {
        P === null && (P = M);
        break;
      }
      e && P && D.alternate === null && t(h, P),
        (m = i(D, m, T)),
        _ === null ? (C = D) : (_.sibling = D),
        (_ = D),
        (P = M);
    }
    if (T === y.length) return n(h, P), W && Mt(h, T), C;
    if (P === null) {
      for (; T < y.length; T++)
        (P = d(h, y[T], E)),
          P !== null &&
            ((m = i(P, m, T)), _ === null ? (C = P) : (_.sibling = P), (_ = P));
      return W && Mt(h, T), C;
    }
    for (P = r(h, P); T < y.length; T++)
      (M = v(P, h, T, y[T], E)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (m = i(M, m, T)),
          _ === null ? (C = M) : (_.sibling = M),
          (_ = M));
    return (
      e &&
        P.forEach(function (he) {
          return t(h, he);
        }),
      W && Mt(h, T),
      C
    );
  }
  function x(h, m, y, E) {
    var C = Bn(y);
    if (typeof C != "function") throw Error(N(150));
    if (((y = C.call(y)), y == null)) throw Error(N(151));
    for (
      var _ = (C = null), P = m, T = (m = 0), M = null, D = y.next();
      P !== null && !D.done;
      T++, D = y.next()
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var he = f(h, P, D.value, E);
      if (he === null) {
        P === null && (P = M);
        break;
      }
      e && P && he.alternate === null && t(h, P),
        (m = i(he, m, T)),
        _ === null ? (C = he) : (_.sibling = he),
        (_ = he),
        (P = M);
    }
    if (D.done) return n(h, P), W && Mt(h, T), C;
    if (P === null) {
      for (; !D.done; T++, D = y.next())
        (D = d(h, D.value, E)),
          D !== null &&
            ((m = i(D, m, T)), _ === null ? (C = D) : (_.sibling = D), (_ = D));
      return W && Mt(h, T), C;
    }
    for (P = r(h, P); !D.done; T++, D = y.next())
      (D = v(P, h, T, D.value, E)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? T : D.key),
          (m = i(D, m, T)),
          _ === null ? (C = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        P.forEach(function (qe) {
          return t(h, qe);
        }),
      W && Mt(h, T),
      C
    );
  }
  function w(h, m, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === sn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Br:
          e: {
            for (var C = y.key, _ = m; _ !== null; ) {
              if (_.key === C) {
                if (((C = y.type), C === sn)) {
                  if (_.tag === 7) {
                    n(h, _.sibling),
                      (m = l(_, y.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ht &&
                    _a(C) === _.type)
                ) {
                  n(h, _.sibling),
                    (m = l(_, y.props)),
                    (m.ref = Qn(h, _, y)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            y.type === sn
              ? ((m = Kt(y.props.children, h.mode, E, y.key)),
                (m.return = h),
                (h = m))
              : ((E = ml(y.type, y.key, y.props, null, h.mode, E)),
                (E.ref = Qn(h, m, y)),
                (E.return = h),
                (h = E));
          }
          return o(h);
        case on:
          e: {
            for (_ = y.key; m !== null; ) {
              if (m.key === _)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(h, m.sibling),
                    (m = l(m, y.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = Ai(y, h.mode, E)), (m.return = h), (h = m);
          }
          return o(h);
        case ht:
          return (_ = y._init), w(h, m, _(y._payload), E);
      }
      if (Yn(y)) return g(h, m, y, E);
      if (Bn(y)) return x(h, m, y, E);
      Gr(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = l(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = Ii(y, h.mode, E)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return w;
}
var Pn = Wc(!0),
  Qc = Wc(!1),
  Ol = Ft(null),
  Ll = null,
  hn = null,
  fs = null;
function ds() {
  fs = hn = Ll = null;
}
function ps(e) {
  var t = Ol.current;
  V(Ol), (e._currentValue = t);
}
function vo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function En(e, t) {
  (Ll = e),
    (fs = hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (fs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hn === null)) {
      if (Ll === null) throw Error(N(308));
      (hn = e), (Ll.dependencies = { lanes: 0, firstContext: e });
    } else hn = hn.next = e;
  return t;
}
var Ht = null;
function ms(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function Kc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ms(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function hs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ms(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function al(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
function Ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zl(e, t, n, r) {
  var l = e.updateQueue;
  yt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), o === null ? (i = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (c = u = a = null), (s = i);
    do {
      var f = s.lane,
        v = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            x = s;
          switch (((f = t), (v = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                d = g.call(v, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (f = typeof g == "function" ? g.call(v, d, f) : g),
                f == null)
              )
                break e;
              d = q({}, d, f);
              break e;
            case 2:
              yt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [s]) : f.push(s));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (o |= f);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (l.baseState = a),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Gt |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Oa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Or = {},
  et = Ft(Or),
  xr = Ft(Or),
  wr = Ft(Or);
function Vt(e) {
  if (e === Or) throw Error(N(174));
  return e;
}
function ys(e, t) {
  switch ((B(wr, t), B(xr, e), B(et, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gi(t, e));
  }
  V(et), B(et, t);
}
function Rn() {
  V(et), V(xr), V(wr);
}
function Jc(e) {
  Vt(wr.current);
  var t = Vt(et.current),
    n = Gi(t, e.type);
  t !== n && (B(xr, e), B(et, n));
}
function gs(e) {
  xr.current === e && (V(et), V(xr));
}
var Q = Ft(0);
function Dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ti = [];
function vs() {
  for (var e = 0; e < Ti.length; e++)
    Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var ul = ft.ReactCurrentDispatcher,
  Oi = ft.ReactCurrentBatchConfig,
  Yt = 0,
  K = null,
  b = null,
  te = null,
  Fl = !1,
  lr = !1,
  Sr = 0,
  wm = 0;
function oe() {
  throw Error(N(321));
}
function xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function ws(e, t, n, r, l, i) {
  if (
    ((Yt = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ul.current = e === null || e.memoizedState === null ? Nm : Cm),
    (e = n(r, l)),
    lr)
  ) {
    i = 0;
    do {
      if (((lr = !1), (Sr = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (te = b = null),
        (t.updateQueue = null),
        (ul.current = jm),
        (e = n(r, l));
    } while (lr);
  }
  if (
    ((ul.current = Il),
    (t = b !== null && b.next !== null),
    (Yt = 0),
    (te = b = K = null),
    (Fl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ss() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (K.memoizedState = te = e) : (te = te.next = e), te;
}
function Ie() {
  if (b === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = te === null ? K.memoizedState : te.next;
  if (t !== null) (te = t), (b = e);
  else {
    if (e === null) throw Error(N(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      te === null ? (K.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Li(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = b,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((Yt & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = d), (o = r)) : (a = a.next = d),
          (K.lanes |= c),
          (Gt |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (o = r) : (a.next = s),
      Qe(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (K.lanes |= i), (Gt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zi(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Qe(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xc() {}
function Yc(e, t) {
  var n = K,
    r = Ie(),
    l = t(),
    i = !Qe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Es(bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      kr(9, Zc.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(N(349));
    Yt & 30 || Gc(n, t, l);
  }
  return l;
}
function Gc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ef(t) && tf(e);
}
function bc(e, t, n) {
  return n(function () {
    ef(t) && tf(e);
  });
}
function ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function tf(e) {
  var t = ut(e, 1);
  t !== null && We(t, e, 1, -1);
}
function La(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = km.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nf() {
  return Ie().memoizedState;
}
function cl(e, t, n, r) {
  var l = Ge();
  (K.flags |= e),
    (l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gl(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (b !== null) {
    var o = b.memoizedState;
    if (((i = o.destroy), r !== null && xs(r, o.deps))) {
      l.memoizedState = kr(t, n, i, r);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = kr(1 | t, n, i, r));
}
function za(e, t) {
  return cl(8390656, 8, e, t);
}
function Es(e, t) {
  return Gl(2048, 8, e, t);
}
function rf(e, t) {
  return Gl(4, 2, e, t);
}
function lf(e, t) {
  return Gl(4, 4, e, t);
}
function of(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gl(4, 4, of.bind(null, t, e), n)
  );
}
function ks() {}
function af(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uf(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cf(e, t, n) {
  return Yt & 21
    ? (Qe(n, t) || ((n = mc()), (K.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Sm(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oi.transition;
  Oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Oi.transition = r);
  }
}
function ff() {
  return Ie().memoizedState;
}
function Em(e, t, n) {
  var r = Rt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    df(e))
  )
    pf(t, n);
  else if (((n = Kc(e, t, n, r)), n !== null)) {
    var l = de();
    We(n, e, r, l), mf(n, t, r);
  }
}
function km(e, t, n) {
  var r = Rt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (df(e)) pf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Qe(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ms(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kc(e, t, l, r)),
      n !== null && ((l = de()), We(n, e, r, l), mf(n, t, r));
  }
}
function df(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function pf(e, t) {
  lr = Fl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
var Il = {
    readContext: Fe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cl(4194308, 4, of.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Em.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: La,
    useDebugValue: ks,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = La(!1),
        t = e[0];
      return (e = Sm.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        l = Ge();
      if (W) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(N(349));
        Yt & 30 || Gc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        za(bc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        kr(9, Zc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ne.identifierPrefix;
      if (W) {
        var n = it,
          r = lt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: Fe,
    useCallback: af,
    useContext: Fe,
    useEffect: Es,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: lf,
    useMemo: uf,
    useReducer: Li,
    useRef: nf,
    useState: function () {
      return Li(Er);
    },
    useDebugValue: ks,
    useDeferredValue: function (e) {
      var t = Ie();
      return cf(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = Li(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Fe,
    useCallback: af,
    useContext: Fe,
    useEffect: Es,
    useImperativeHandle: sf,
    useInsertionEffect: rf,
    useLayoutEffect: lf,
    useMemo: uf,
    useReducer: zi,
    useRef: nf,
    useState: function () {
      return zi(Er);
    },
    useDebugValue: ks,
    useDeferredValue: function (e) {
      var t = Ie();
      return b === null ? (t.memoizedState = e) : cf(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = zi(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Rt(e),
      i = ot(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = jt(e, i, l)),
      t !== null && (We(t, e, l, r), al(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Rt(e),
      i = ot(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = jt(e, i, l)),
      t !== null && (We(t, e, l, r), al(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Rt(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = jt(e, l, r)),
      t !== null && (We(t, e, r, n), al(t, e, r));
  },
};
function Da(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hr(n, r) || !hr(l, i)
      : !0
  );
}
function hf(e, t, n) {
  var r = !1,
    l = zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Fe(i))
      : ((l = we(t) ? Jt : ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Cn(e, l) : zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Fa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function wo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), hs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Fe(i))
    : ((i = we(t) ? Jt : ce.current), (l.context = Cn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (xo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Zl.enqueueReplaceState(l, l.state, null),
      zl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ep(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function So(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pm = typeof WeakMap == "function" ? WeakMap : Map;
function yf(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ul || ((Ul = !0), (Oo = r)), So(e, t);
    }),
    n
  );
}
function gf(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        So(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        So(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function Aa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ua(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rm = ft.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Qc(t, null, n, r) : Pn(t, e.child, n, r);
}
function Ma(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    En(t, l),
    (r = ws(e, t, n, r, i, l)),
    (n = Ss()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (W && n && as(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function Ba(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Os(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vf(e, t, i, r, l))
      : ((e = ml(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hr), n(o, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hr(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Eo(e, t, n, r, l);
}
function xf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(gn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(gn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        B(gn, Ne),
        (Ne |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(gn, Ne),
      (Ne |= r);
  return fe(e, t, l, n), t.child;
}
function wf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Eo(e, t, n, r, l) {
  var i = we(n) ? Jt : ce.current;
  return (
    (i = Cn(t, i)),
    En(t, l),
    (n = ws(e, t, n, r, i, l)),
    (r = Ss()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (W && r && as(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function $a(e, t, n, r, l) {
  if (we(n)) {
    var i = !0;
    Rl(t);
  } else i = !1;
  if ((En(t, l), t.stateNode === null))
    fl(e, t), hf(t, n, r), wo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Fe(u))
      : ((u = we(n) ? Jt : ce.current), (u = Cn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Fa(t, o, r, u)),
      (yt = !1);
    var f = t.memoizedState;
    (o.state = f),
      zl(t, r, o, l),
      (a = t.memoizedState),
      s !== r || f !== a || xe.current || yt
        ? (typeof c == "function" && (xo(t, n, c, r), (a = t.memoizedState)),
          (s = yt || Da(t, n, s, r, f, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      qc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Be(t.type, s)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Fe(a))
        : ((a = we(n) ? Jt : ce.current), (a = Cn(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== d || f !== a) && Fa(t, o, r, a)),
      (yt = !1),
      (f = t.memoizedState),
      (o.state = f),
      zl(t, r, o, l);
    var g = t.memoizedState;
    s !== d || f !== g || xe.current || yt
      ? (typeof v == "function" && (xo(t, n, v, r), (g = t.memoizedState)),
        (u = yt || Da(t, n, u, r, f, g, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ko(e, t, n, r, i, l);
}
function ko(e, t, n, r, l, i) {
  wf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ja(t, n, !1), ct(e, t, i);
  (r = t.stateNode), (Rm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Pn(t, e.child, null, i)), (t.child = Pn(t, null, s, i)))
      : fe(e, t, s, i),
    (t.memoizedState = r.state),
    l && ja(t, n, !0),
    t.child
  );
}
function Sf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ca(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ca(e, t.context, !1),
    ys(e, t.containerInfo);
}
function Ha(e, t, n, r, l) {
  return jn(), cs(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var No = { dehydrated: null, treeContext: null, retryLane: 0 };
function Co(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(Q, l & 1),
    e === null)
  )
    return (
      go(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ti(o, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Co(n)),
              (t.memoizedState = No),
              e)
            : Ns(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return _m(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _t(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = _t(s, i)) : ((i = Kt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Co(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = No),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _t(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ns(e, t) {
  return (
    (t = ti({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zr(e, t, n, r) {
  return (
    r !== null && cs(r),
    Pn(t, e.child, null, n),
    (e = Ns(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _m(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Di(Error(N(422)))), Zr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ti({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Kt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Pn(t, e.child, null, o),
        (t.child.memoizedState = Co(o)),
        (t.memoizedState = No),
        i);
  if (!(t.mode & 1)) return Zr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(N(419))), (r = Di(i, r, void 0)), Zr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), ve || s)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), ut(e, l), We(r, e, l, -1));
    }
    return Ts(), (r = Di(Error(N(421)))), Zr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ce = Ct(l.nextSibling)),
      (je = t),
      (W = !0),
      (He = null),
      e !== null &&
        ((Oe[Le++] = lt),
        (Oe[Le++] = it),
        (Oe[Le++] = Xt),
        (lt = e.id),
        (it = e.overflow),
        (Xt = t)),
      (t = Ns(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vo(e.return, t, n);
}
function Fi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function kf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((fe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Va(e, n, t);
        else if (e.tag === 19) Va(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Dl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Fi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Dl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Fi(t, !0, n, null, i);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tm(e, t, n) {
  switch (t.tag) {
    case 3:
      Sf(t), jn();
      break;
    case 5:
      Jc(t);
      break;
    case 1:
      we(t.type) && Rl(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      B(Ol, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ef(e, t, n)
          : (B(Q, Q.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      B(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        B(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xf(e, t, n);
  }
  return ct(e, t, n);
}
var Nf, jo, Cf, jf;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jo = function () {};
Cf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(et.current);
    var i = null;
    switch (n) {
      case "input":
        (l = qi(e, l)), (r = qi(e, r)), (i = []);
        break;
      case "select":
        (l = q({}, l, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Yi(e, l)), (r = Yi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = jl);
    }
    Zi(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var s = l[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ar.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ar.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && H("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Om(e, t, n) {
  var r = t.pendingProps;
  switch ((us(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return we(t.type) && Pl(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rn(),
        V(xe),
        V(ce),
        vs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (Do(He), (He = null)))),
        jo(e, t),
        se(t),
        null
      );
    case 5:
      gs(t);
      var l = Vt(wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return se(t), null;
        }
        if (((e = Vt(et.current)), Yr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ze] = t), (r[vr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++) H(Zn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Zs(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              ea(r, i), H("invalid", r);
          }
          Zi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : ar.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              $r(r), bs(r, i, !0);
              break;
            case "textarea":
              $r(r), ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = jl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ze] = t),
            (e[vr] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = bi(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++) H(Zn[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                Zs(e, r), (l = qi(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = q({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                ea(e, r), (l = Yi(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            Zi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? nc(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ec(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ur(e, a)
                    : typeof a == "number" && ur(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ar.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && H("scroll", e)
                      : a != null && Jo(e, i, a, o));
              }
            switch (n) {
              case "input":
                $r(e), bs(e, r, !1);
                break;
              case "textarea":
                $r(e), ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? vn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = jl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) jf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Vt(wr.current)), Vt(et.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (V(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Vc(), jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[Ze] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (i = !1);
        } else He !== null && (Do(He), (He = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : Ts())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        Rn(), jo(e, t), e === null && yr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return ps(t.type._context), se(t), null;
    case 17:
      return we(t.type) && Pl(), se(t), null;
    case 19:
      if ((V(Q), (i = t.memoizedState), i === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Kn(i, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Dl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Kn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            X() > Tn &&
            ((t.flags |= 128), (r = !0), Kn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Dl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !W)
            )
              return se(t), null;
          } else
            2 * X() - i.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = X()),
          (t.sibling = null),
          (n = Q.current),
          B(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        _s(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Lm(e, t) {
  switch ((us(t), t.tag)) {
    case 1:
      return (
        we(t.type) && Pl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rn(),
        V(xe),
        V(ce),
        vs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gs(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return Rn(), null;
    case 10:
      return ps(t.type._context), null;
    case 22:
    case 23:
      return _s(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1,
  ae = !1,
  zm = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function Po(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Wa = !1;
function Dm(e, t) {
  if (((uo = kl), (e = Tc()), ss(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (l !== 0 && d.nodeType !== 3) || (s = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === l && (s = o),
                f === i && ++c === r && (a = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (co = { focusedElem: e, selectionRange: n }, kl = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    w = g.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Be(t.type, x),
                      w
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (E) {
          J(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = Wa), (Wa = !1), g;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Po(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ro(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Pf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[vr], delete t[mo], delete t[ym], delete t[gm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = jl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_o(e, t, n), e = e.sibling; e !== null; ) _o(e, t, n), (e = e.sibling);
}
function To(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (To(e, t, n), e = e.sibling; e !== null; ) To(e, t, n), (e = e.sibling);
}
var re = null,
  $e = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) _f(e, t, n), (n = n.sibling);
}
function _f(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == "function")
    try {
      be.onCommitFiberUnmount(Ql, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || yn(n, t);
    case 6:
      var r = re,
        l = $e;
      (re = null),
        mt(e, t, n),
        (re = r),
        ($e = l),
        re !== null &&
          ($e
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        ($e
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ri(e.parentNode, n)
              : e.nodeType === 1 && Ri(e, n),
            pr(e))
          : Ri(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = $e),
        (re = n.stateNode.containerInfo),
        ($e = !0),
        mt(e, t, n),
        (re = r),
        ($e = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Po(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          J(n, t, s);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), mt(e, t, n), (ae = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function Ka(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zm()),
      t.forEach(function (r) {
        var l = Vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), ($e = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), ($e = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(N(160));
        _f(i, o, l), (re = null), ($e = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (u) {
        J(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tf(t, e), (t = t.sibling);
}
function Tf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Xe(e), r & 4)) {
        try {
          ir(3, e, e.return), bl(3, e);
        } catch (x) {
          J(e, e.return, x);
        }
        try {
          ir(5, e, e.return);
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 1:
      Me(t, e), Xe(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        Xe(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (x) {
          J(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Gu(l, i),
              bi(s, o);
            var u = bi(s, i);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? nc(l, d)
                : c === "dangerouslySetInnerHTML"
                ? ec(l, d)
                : c === "children"
                ? ur(l, d)
                : Jo(l, c, d, u);
            }
            switch (s) {
              case "input":
                Ji(l, i);
                break;
              case "textarea":
                Zu(l, i);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? vn(l, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? vn(l, !!i.multiple, i.defaultValue, !0)
                      : vn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[vr] = i;
          } catch (x) {
            J(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (x) {
          J(e, e.return, x);
        }
      break;
    case 4:
      Me(t, e), Xe(e);
      break;
    case 13:
      Me(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ps = X())),
        r & 4 && Ka(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || c), Me(t, e), (ae = u)) : Me(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, f, f.return);
                  break;
                case 1:
                  yn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (x) {
                      J(r, n, x);
                    }
                  }
                  break;
                case 5:
                  yn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ja(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : Ja(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (l = d.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = tc("display", o)));
              } catch (x) {
                J(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                J(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Xe(e), r & 4 && Ka(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ur(l, ""), (r.flags &= -33));
          var i = Qa(e);
          To(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Qa(e);
          _o(e, s, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fm(e, t, n) {
  (R = e), Of(e);
}
function Of(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || br;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || ae;
        s = br;
        var u = ae;
        if (((br = o), (ae = a) && !u))
          for (R = l; R !== null; )
            (o = R),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xa(l)
                : a !== null
                ? ((a.return = o), (R = a))
                : Xa(l);
        for (; i !== null; ) (R = i), Of(i), (i = i.sibling);
        (R = l), (br = s), (ae = u);
      }
      qa(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (R = i)) : qa(e);
  }
}
function qa(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Oa(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Oa(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && pr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ae || (t.flags & 512 && Ro(t));
      } catch (f) {
        J(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Ja(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Xa(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ro(t);
          } catch (a) {
            J(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ro(t);
          } catch (a) {
            J(t, o, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var Im = Math.ceil,
  Al = ft.ReactCurrentDispatcher,
  Cs = ft.ReactCurrentOwner,
  De = ft.ReactCurrentBatchConfig,
  I = 0,
  ne = null,
  Z = null,
  le = 0,
  Ne = 0,
  gn = Ft(0),
  ee = 0,
  Nr = null,
  Gt = 0,
  ei = 0,
  js = 0,
  or = null,
  ge = null,
  Ps = 0,
  Tn = 1 / 0,
  nt = null,
  Ul = !1,
  Oo = null,
  Pt = null,
  el = !1,
  wt = null,
  Ml = 0,
  sr = 0,
  Lo = null,
  dl = -1,
  pl = 0;
function de() {
  return I & 6 ? X() : dl !== -1 ? dl : (dl = X());
}
function Rt(e) {
  return e.mode & 1
    ? I & 2 && le !== 0
      ? le & -le
      : xm.transition !== null
      ? (pl === 0 && (pl = mc()), pl)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sc(e.type))),
        e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (Lo = null), Error(N(185)));
  Rr(e, n, r),
    (!(I & 2) || e !== ne) &&
      (e === ne && (!(I & 2) && (ei |= n), ee === 4 && vt(e, le)),
      Se(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Tn = X() + 500), Yl && It()));
}
function Se(e, t) {
  var n = e.callbackNode;
  xp(e, t);
  var r = El(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && la(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && la(n), t === 1))
      e.tag === 0 ? vm(Ya.bind(null, e)) : Bc(Ya.bind(null, e)),
        mm(function () {
          !(I & 6) && It();
        }),
        (n = null);
    else {
      switch (hc(r)) {
        case 1:
          n = bo;
          break;
        case 4:
          n = dc;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = pc;
          break;
        default:
          n = Sl;
      }
      n = Mf(n, Lf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lf(e, t) {
  if (((dl = -1), (pl = 0), I & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = El(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Df();
    (ne !== e || le !== t) && ((nt = null), (Tn = X() + 500), Qt(e, t));
    do
      try {
        Mm();
        break;
      } catch (s) {
        zf(e, s);
      }
    while (!0);
    ds(),
      (Al.current = i),
      (I = l),
      Z !== null ? (t = 0) : ((ne = null), (le = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = lo(e)), l !== 0 && ((r = l), (t = zo(e, l)))), t === 1)
    )
      throw ((n = Nr), Qt(e, 0), vt(e, r), Se(e, X()), n);
    if (t === 6) vt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Am(l) &&
          ((t = Bl(e, r)),
          t === 2 && ((i = lo(e)), i !== 0 && ((r = i), (t = zo(e, i)))),
          t === 1))
      )
        throw ((n = Nr), Qt(e, 0), vt(e, r), Se(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Bt(e, ge, nt);
          break;
        case 3:
          if (
            (vt(e, r), (r & 130023424) === r && ((t = Ps + 500 - X()), 10 < t))
          ) {
            if (El(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = po(Bt.bind(null, e, ge, nt), t);
            break;
          }
          Bt(e, ge, nt);
          break;
        case 4:
          if ((vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ve(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = po(Bt.bind(null, e, ge, nt), r);
            break;
          }
          Bt(e, ge, nt);
          break;
        case 5:
          Bt(e, ge, nt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Se(e, X()), e.callbackNode === n ? Lf.bind(null, e) : null;
}
function zo(e, t) {
  var n = or;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = Bl(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Do(t)),
    e
  );
}
function Do(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function Am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Qe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vt(e, t) {
  for (
    t &= ~js,
      t &= ~ei,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ya(e) {
  if (I & 6) throw Error(N(327));
  kn();
  var t = El(e, 0);
  if (!(t & 1)) return Se(e, X()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lo(e);
    r !== 0 && ((t = r), (n = zo(e, r)));
  }
  if (n === 1) throw ((n = Nr), Qt(e, 0), vt(e, t), Se(e, X()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, ge, nt),
    Se(e, X()),
    null
  );
}
function Rs(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Tn = X() + 500), Yl && It());
  }
}
function Zt(e) {
  wt !== null && wt.tag === 0 && !(I & 6) && kn();
  var t = I;
  I |= 1;
  var n = De.transition,
    r = U;
  try {
    if (((De.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (De.transition = n), (I = t), !(I & 6) && It();
  }
}
function _s() {
  (Ne = gn.current), V(gn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pm(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((us(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Pl();
          break;
        case 3:
          Rn(), V(xe), V(ce), vs();
          break;
        case 5:
          gs(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          ps(r.type._context);
          break;
        case 22:
        case 23:
          _s();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Z = e = _t(e.current, null)),
    (le = Ne = t),
    (ee = 0),
    (Nr = null),
    (js = ei = Gt = 0),
    (ge = or = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ht = null;
  }
  return e;
}
function zf(e, t) {
  do {
    var n = Z;
    try {
      if ((ds(), (ul.current = Il), Fl)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Fl = !1;
      }
      if (
        ((Yt = 0),
        (te = b = K = null),
        (lr = !1),
        (Sr = 0),
        (Cs.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Nr = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Aa(o);
          if (v !== null) {
            (v.flags &= -257),
              Ua(v, o, s, i, t),
              v.mode & 1 && Ia(i, u, t),
              (t = v),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ia(i, u, t), Ts();
              break e;
            }
            a = Error(N(426));
          }
        } else if (W && s.mode & 1) {
          var w = Aa(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Ua(w, o, s, i, t),
              cs(_n(a, s));
            break e;
          }
        }
        (i = a = _n(a, s)),
          ee !== 4 && (ee = 2),
          or === null ? (or = [i]) : or.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = yf(i, a, t);
              Ta(i, h);
              break e;
            case 1:
              s = a;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = gf(i, s, t);
                Ta(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      If(n);
    } catch (C) {
      (t = C), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Df() {
  var e = Al.current;
  return (Al.current = Il), e === null ? Il : e;
}
function Ts() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ne === null || (!(Gt & 268435455) && !(ei & 268435455)) || vt(ne, le);
}
function Bl(e, t) {
  var n = I;
  I |= 2;
  var r = Df();
  (ne !== e || le !== t) && ((nt = null), Qt(e, t));
  do
    try {
      Um();
      break;
    } catch (l) {
      zf(e, l);
    }
  while (!0);
  if ((ds(), (I = n), (Al.current = r), Z !== null)) throw Error(N(261));
  return (ne = null), (le = 0), ee;
}
function Um() {
  for (; Z !== null; ) Ff(Z);
}
function Mm() {
  for (; Z !== null && !cp(); ) Ff(Z);
}
function Ff(e) {
  var t = Uf(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? If(e) : (Z = t),
    (Cs.current = null);
}
function If(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lm(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (Z = null);
        return;
      }
    } else if (((n = Om(n, t, Ne)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Bt(e, t, n) {
  var r = U,
    l = De.transition;
  try {
    (De.transition = null), (U = 1), Bm(e, t, n, r);
  } finally {
    (De.transition = l), (U = r);
  }
  return null;
}
function Bm(e, t, n, r) {
  do kn();
  while (wt !== null);
  if (I & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (wp(e, i),
    e === ne && ((Z = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      el ||
      ((el = !0),
      Mf(Sl, function () {
        return kn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = De.transition), (De.transition = null);
    var o = U;
    U = 1;
    var s = I;
    (I |= 4),
      (Cs.current = null),
      Dm(e, n),
      Tf(n, e),
      om(co),
      (kl = !!uo),
      (co = uo = null),
      (e.current = n),
      Fm(n),
      fp(),
      (I = s),
      (U = o),
      (De.transition = i);
  } else e.current = n;
  if (
    (el && ((el = !1), (wt = e), (Ml = l)),
    (i = e.pendingLanes),
    i === 0 && (Pt = null),
    mp(n.stateNode),
    Se(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ul) throw ((Ul = !1), (e = Oo), (Oo = null), e);
  return (
    Ml & 1 && e.tag !== 0 && kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Lo ? sr++ : ((sr = 0), (Lo = e))) : (sr = 0),
    It(),
    null
  );
}
function kn() {
  if (wt !== null) {
    var e = hc(Ml),
      t = De.transition,
      n = U;
    try {
      if (((De.transition = null), (U = 16 > e ? 16 : e), wt === null))
        var r = !1;
      else {
        if (((e = wt), (wt = null), (Ml = 0), I & 6)) throw Error(N(331));
        var l = I;
        for (I |= 4, R = e.current; R !== null; ) {
          var i = R,
            o = i.child;
          if (R.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        v = c.return;
                      if ((Pf(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (R = f);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (R = o);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (R = h);
                break e;
              }
              R = i.return;
            }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          o = R;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (R = y);
          else
            e: for (o = m; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bl(9, s);
                  }
                } catch (C) {
                  J(s, s.return, C);
                }
              if (s === o) {
                R = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (R = E);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((I = l), It(), be && typeof be.onPostCommitFiberRoot == "function")
        )
          try {
            be.onPostCommitFiberRoot(Ql, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (De.transition = t);
    }
  }
  return !1;
}
function Ga(e, t, n) {
  (t = _n(n, t)),
    (t = yf(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = de()),
    e !== null && (Rr(e, 1, t), Se(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = _n(n, e)),
            (e = gf(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = de()),
            t !== null && (Rr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $m(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > X() - Ps)
        ? Qt(e, 0)
        : (js |= n)),
    Se(e, t);
}
function Af(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
      : (t = 1));
  var n = de();
  (e = ut(e, t)), e !== null && (Rr(e, t, n), Se(e, n));
}
function Hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Af(e, n);
}
function Vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Af(e, n);
}
var Uf;
Uf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Tm(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), W && t.flags & 1048576 && $c(t, Tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fl(e, t), (e = t.pendingProps);
      var l = Cn(t, ce.current);
      En(t, n), (l = ws(null, t, r, e, l, n));
      var i = Ss();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((i = !0), Rl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            hs(t),
            (l.updater = Zl),
            (t.stateNode = l),
            (l._reactInternals = t),
            wo(t, r, e, n),
            (t = ko(null, t, r, !0, i, n)))
          : ((t.tag = 0), W && i && as(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Qm(r)),
          (e = Be(r, e)),
          l)
        ) {
          case 0:
            t = Eo(null, t, r, e, n);
            break e;
          case 1:
            t = $a(null, t, r, e, n);
            break e;
          case 11:
            t = Ma(null, t, r, e, n);
            break e;
          case 14:
            t = Ba(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        $a(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sf(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          qc(e, t),
          zl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = _n(Error(N(423)), t)), (t = Ha(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = _n(Error(N(424)), t)), (t = Ha(e, t, r, n, l));
            break e;
          } else
            for (
              Ce = Ct(t.stateNode.containerInfo.firstChild),
                je = t,
                W = !0,
                He = null,
                n = Qc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jc(t),
        e === null && go(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        fo(r, l) ? (o = null) : i !== null && fo(r, i) && (t.flags |= 32),
        wf(e, t),
        fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && go(t), null;
    case 13:
      return Ef(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Ma(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          B(Ol, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Qe(i.value, o)) {
            if (i.children === l.children && !xe.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ot(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      vo(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  vo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        En(t, n),
        (l = Fe(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Be(r, t.pendingProps)),
        (l = Be(r.type, l)),
        Ba(e, t, r, l, n)
      );
    case 15:
      return vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        fl(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), Rl(t)) : (e = !1),
        En(t, n),
        hf(t, r, l),
        wo(t, r, l, n),
        ko(null, t, r, !0, e, n)
      );
    case 19:
      return kf(e, t, n);
    case 22:
      return xf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Mf(e, t) {
  return fc(e, t);
}
function Wm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Wm(e, t, n, r);
}
function Os(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qm(e) {
  if (typeof e == "function") return Os(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yo)) return 11;
    if (e === Go) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ml(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Os(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case sn:
        return Kt(n.children, l, i, t);
      case Xo:
        (o = 8), (l |= 8);
        break;
      case Vi:
        return (
          (e = ze(12, n, t, l | 2)), (e.elementType = Vi), (e.lanes = i), e
        );
      case Wi:
        return (e = ze(13, n, t, l)), (e.elementType = Wi), (e.lanes = i), e;
      case Qi:
        return (e = ze(19, n, t, l)), (e.elementType = Qi), (e.lanes = i), e;
      case Ju:
        return ti(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ku:
              o = 10;
              break e;
            case qu:
              o = 9;
              break e;
            case Yo:
              o = 11;
              break e;
            case Go:
              o = 14;
              break e;
            case ht:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function ti(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Ju),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ii(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Ai(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Km(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gi(0)),
    (this.expirationTimes = gi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ls(e, t, n, r, l, i, o, s, a) {
  return (
    (e = new Km(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    hs(i),
    e
  );
}
function qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bf(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return Mc(e, n, t);
  }
  return t;
}
function $f(e, t, n, r, l, i, o, s, a) {
  return (
    (e = Ls(n, r, !0, e, l, i, o, s, a)),
    (e.context = Bf(null)),
    (n = e.current),
    (r = de()),
    (l = Rt(n)),
    (i = ot(r, l)),
    (i.callback = t ?? null),
    jt(n, i, l),
    (e.current.lanes = l),
    Rr(e, l, r),
    Se(e, r),
    e
  );
}
function ni(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = Rt(l);
  return (
    (n = Bf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(l, t, o)),
    e !== null && (We(e, l, o, i), al(e, l, o)),
    o
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zs(e, t) {
  Za(e, t), (e = e.alternate) && Za(e, t);
}
function Jm() {
  return null;
}
var Hf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ds(e) {
  this._internalRoot = e;
}
ri.prototype.render = Ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ni(e, t, null, null);
};
ri.prototype.unmount = Ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      ni(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function ri(e) {
  this._internalRoot = e;
}
ri.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && wc(e);
  }
};
function Fs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function li(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ba() {}
function Xm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $l(o);
        i.call(u);
      };
    }
    var o = $f(t, r, e, 0, null, !1, !1, "", ba);
    return (
      (e._reactRootContainer = o),
      (e[at] = o.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = $l(a);
      s.call(u);
    };
  }
  var a = Ls(e, 0, !1, null, null, !1, !1, "", ba);
  return (
    (e._reactRootContainer = a),
    (e[at] = a.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      ni(t, a, n, r);
    }),
    a
  );
}
function ii(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = $l(o);
        s.call(a);
      };
    }
    ni(t, o, e, l);
  } else o = Xm(n, t, e, l, r);
  return $l(o);
}
yc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (es(t, n | 1), Se(t, X()), !(I & 6) && ((Tn = X() + 500), It()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = de();
          We(r, e, 1, l);
        }
      }),
        zs(e, 1);
  }
};
ts = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = de();
      We(t, e, 134217728, n);
    }
    zs(e, 134217728);
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = de();
      We(n, e, t, r);
    }
    zs(e, t);
  }
};
vc = function () {
  return U;
};
xc = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
to = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ji(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xl(r);
            if (!l) throw Error(N(90));
            Yu(r), Ji(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zu(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
ic = Rs;
oc = Zt;
var Ym = { usingClientEntryPoint: !1, Events: [Tr, fn, Xl, rc, lc, Rs] },
  qn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Gm = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || Jm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      (Ql = tl.inject(Gm)), (be = tl);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fs(t)) throw Error(N(200));
  return qm(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!Fs(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = Hf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ls(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new Ds(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = uc(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return Zt(e);
};
Re.hydrate = function (e, t, n) {
  if (!li(t)) throw Error(N(200));
  return ii(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!Fs(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Hf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = $f(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[at] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ri(t);
};
Re.render = function (e, t, n) {
  if (!li(t)) throw Error(N(200));
  return ii(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!li(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Zt(function () {
        ii(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = Rs;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!li(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ii(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function Vf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf);
    } catch (e) {
      console.error(e);
    }
}
Vf(), (Hu.exports = Re);
var Zm = Hu.exports,
  Wf,
  eu = Zm;
(Wf = eu.createRoot), eu.hydrateRoot;
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cr.apply(this, arguments)
  );
}
var St;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(St || (St = {}));
const tu = "popstate";
function bm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: s } = r.location;
    return Fo(
      "",
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Hl(l);
  }
  return th(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Is(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function eh() {
  return Math.random().toString(36).substr(2, 8);
}
function nu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Cr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Fn(t) : t,
      { state: n, key: (t && t.key) || r || eh() }
    )
  );
}
function Hl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Fn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function th(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = St.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Cr({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = St.Pop;
    let w = c(),
      h = w == null ? null : w - u;
    (u = w), a && a({ action: s, location: x.location, delta: h });
  }
  function f(w, h) {
    s = St.Push;
    let m = Fo(x.location, w, h);
    u = c() + 1;
    let y = nu(m, u),
      E = x.createHref(m);
    try {
      o.pushState(y, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(E);
    }
    i && a && a({ action: s, location: x.location, delta: 1 });
  }
  function v(w, h) {
    s = St.Replace;
    let m = Fo(x.location, w, h);
    u = c();
    let y = nu(m, u),
      E = x.createHref(m);
    o.replaceState(y, "", E),
      i && a && a({ action: s, location: x.location, delta: 0 });
  }
  function g(w) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      m = typeof w == "string" ? w : Hl(w);
    return (
      (m = m.replace(/ $/, "%20")),
      Y(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, h)
    );
  }
  let x = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(tu, d),
        (a = w),
        () => {
          l.removeEventListener(tu, d), (a = null);
        }
      );
    },
    createHref(w) {
      return t(l, w);
    },
    createURL: g,
    encodeLocation(w) {
      let h = g(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: v,
    go(w) {
      return o.go(w);
    },
  };
  return x;
}
var ru;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ru || (ru = {}));
function nh(e, t, n) {
  return n === void 0 && (n = "/"), rh(e, t, n);
}
function rh(e, t, n, r) {
  let l = typeof t == "string" ? Fn(t) : t,
    i = As(l.pathname || "/", n);
  if (i == null) return null;
  let o = Qf(e);
  lh(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let u = yh(i);
    s = ph(o[a], u);
  }
  return s;
}
function Qf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Y(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Tt([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Qf(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: fh(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let a of Kf(i.path)) l(i, o, a);
    }),
    t
  );
}
function Kf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Kf(r.join("/")),
    s = [];
  return (
    s.push(...o.map((a) => (a === "" ? i : [i, a].join("/")))),
    l && s.push(...o),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function lh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : dh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ih = /^:[\w-]+$/,
  oh = 3,
  sh = 2,
  ah = 1,
  uh = 10,
  ch = -2,
  lu = (e) => e === "*";
function fh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(lu) && (r += ch),
    t && (r += sh),
    n
      .filter((l) => !lu(l))
      .reduce((l, i) => l + (ih.test(i) ? oh : i === "" ? ah : uh), r)
  );
}
function dh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ph(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = mh(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      f = a.route;
    if (!d) return null;
    Object.assign(l, d.params),
      o.push({
        params: l,
        pathname: Tt([i, d.pathname]),
        pathnameBase: Sh(Tt([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = Tt([i, d.pathnameBase]));
  }
  return o;
}
function mh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = hh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: v } = c;
      if (f === "*") {
        let x = s[d] || "";
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[d];
      return (
        v && !g ? (u[f] = void 0) : (u[f] = (g || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function hh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Is(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function yh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Is(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function As(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const gh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vh = (e) => gh.test(e);
function xh(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: l = "",
    } = typeof e == "string" ? Fn(e) : e,
    i;
  if (n)
    if (vh(n)) i = n;
    else {
      if (n.includes("//")) {
        let o = n;
        (n = n.replace(/\/\/+/g, "/")),
          Is(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n)
          );
      }
      n.startsWith("/") ? (i = iu(n.substring(1), "/")) : (i = iu(n, t));
    }
  else i = t;
  return { pathname: i, search: Eh(r), hash: kh(l) };
}
function iu(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ui(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Us(e, t) {
  let n = wh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ms(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Fn(e))
    : ((l = Cr({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        Ui("?", "pathname", "search", l)
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        Ui("#", "pathname", "hash", l)
      ),
      Y(!l.search || !l.search.includes("#"), Ui("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      l.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = xh(l, s),
    u = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Tt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Sh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Eh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Nh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qf = ["post", "put", "patch", "delete"];
new Set(qf);
const Ch = ["get", ...qf];
new Set(Ch);
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jr() {
  return (
    (jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jr.apply(this, arguments)
  );
}
const Bs = k.createContext(null),
  jh = k.createContext(null),
  At = k.createContext(null),
  oi = k.createContext(null),
  dt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jf = k.createContext(null);
function Ph(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  In() || Y(!1);
  let { basename: r, navigator: l } = k.useContext(At),
    { hash: i, pathname: o, search: s } = Yf(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Tt([r, o])),
    l.createHref({ pathname: a, search: s, hash: i })
  );
}
function In() {
  return k.useContext(oi) != null;
}
function Lr() {
  return In() || Y(!1), k.useContext(oi).location;
}
function Xf(e) {
  k.useContext(At).static || k.useLayoutEffect(e);
}
function An() {
  let { isDataRoute: e } = k.useContext(dt);
  return e ? Hh() : Rh();
}
function Rh() {
  In() || Y(!1);
  let e = k.useContext(Bs),
    { basename: t, future: n, navigator: r } = k.useContext(At),
    { matches: l } = k.useContext(dt),
    { pathname: i } = Lr(),
    o = JSON.stringify(Us(l, n.v7_relativeSplatPath)),
    s = k.useRef(!1);
  return (
    Xf(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Ms(u, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Tt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, i, e]
    )
  );
}
const _h = k.createContext(null);
function Th(e) {
  let t = k.useContext(dt).outlet;
  return t && k.createElement(_h.Provider, { value: e }, t);
}
function Yf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(At),
    { matches: l } = k.useContext(dt),
    { pathname: i } = Lr(),
    o = JSON.stringify(Us(l, r.v7_relativeSplatPath));
  return k.useMemo(() => Ms(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Oh(e, t) {
  return Lh(e, t);
}
function Lh(e, t, n, r) {
  In() || Y(!1);
  let { navigator: l } = k.useContext(At),
    { matches: i } = k.useContext(dt),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Lr(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? Fn(t) : t;
    a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || Y(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || "/",
    v = f;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    v = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let g = nh(e, { pathname: v }),
    x = Ah(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Tt([
              a,
              l.encodeLocation
                ? l.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Tt([
                    a,
                    l.encodeLocation
                      ? l.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? k.createElement(
        oi.Provider,
        {
          value: {
            location: jr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: St.Pop,
          },
        },
        x
      )
    : x;
}
function zh() {
  let e = $h(),
    t = Nh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Dh = k.createElement(zh, null);
class Fh extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          dt.Provider,
          { value: this.props.routeContext },
          k.createElement(Jf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ih(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(Bs);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(dt.Provider, { value: t }, r)
  );
}
function Ah(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let c = o.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0
    );
    c >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          g =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let v,
      g = !1,
      x = null,
      w = null;
    n &&
      ((v = s && d.route.id ? s[d.route.id] : void 0),
      (x = d.route.errorElement || Dh),
      a &&
        (u < 0 && f === 0
          ? (Vh("route-fallback"), (g = !0), (w = null))
          : u === f &&
            ((g = !0), (w = d.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          v
            ? (y = x)
            : g
            ? (y = w)
            : d.route.Component
            ? (y = k.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          k.createElement(Ih, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? k.createElement(Fh, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: v,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Gf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Gf || {}),
  Zf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Zf || {});
function Uh(e) {
  let t = k.useContext(Bs);
  return t || Y(!1), t;
}
function Mh(e) {
  let t = k.useContext(jh);
  return t || Y(!1), t;
}
function Bh(e) {
  let t = k.useContext(dt);
  return t || Y(!1), t;
}
function bf(e) {
  let t = Bh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function $h() {
  var e;
  let t = k.useContext(Jf),
    n = Mh(),
    r = bf();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Hh() {
  let { router: e } = Uh(Gf.UseNavigateStable),
    t = bf(Zf.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Xf(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, jr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const ou = {};
function Vh(e, t, n) {
  ou[e] || (ou[e] = !0);
}
function Wh(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function $s(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  In() || Y(!1);
  let { future: i, static: o } = k.useContext(At),
    { matches: s } = k.useContext(dt),
    { pathname: a } = Lr(),
    u = An(),
    c = Ms(t, Us(s, i.v7_relativeSplatPath), a, l === "path"),
    d = JSON.stringify(c);
  return (
    k.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: l }),
      [u, d, l, n, r]
    ),
    null
  );
}
function Qh(e) {
  return Th(e.context);
}
function tt(e) {
  Y(!1);
}
function Kh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = St.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  In() && Y(!1);
  let a = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: o,
        future: jr({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, o]
    );
  typeof r == "string" && (r = Fn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: v = null,
      key: g = "default",
    } = r,
    x = k.useMemo(() => {
      let w = As(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: v, key: g },
            navigationType: l,
          };
    }, [a, c, d, f, v, g, l]);
  return x == null
    ? null
    : k.createElement(
        At.Provider,
        { value: u },
        k.createElement(oi.Provider, { children: n, value: x })
      );
}
function qh(e) {
  let { children: t, location: n } = e;
  return Oh(Io(t), n);
}
new Promise(() => {});
function Io(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, Io(r.props.children, i));
        return;
      }
      r.type !== tt && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Io(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
function Jh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Xh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Xh(e);
}
const Gh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Zh = "6";
try {
  window.__reactRouterVersion = Zh;
} catch {}
const bh = "startTransition",
  su = $d[bh];
function ey(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = bm({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, a] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (d) => {
        u && su ? su(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    k.useLayoutEffect(() => o.listen(c), [o, c]),
    k.useEffect(() => Wh(r), [r]),
    k.createElement(Kh, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
const ty =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ny = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ot = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      f = Jh(t, Gh),
      { basename: v } = k.useContext(At),
      g,
      x = !1;
    if (typeof u == "string" && ny.test(u) && ((g = u), ty))
      try {
        let y = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = As(E.pathname, v);
        E.origin === y.origin && C != null
          ? (u = C + E.search + E.hash)
          : (x = !0);
      } catch {}
    let w = Ph(u, { relative: l }),
      h = ry(u, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: l,
        viewTransition: d,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || h(y);
    }
    return k.createElement(
      "a",
      Ao({}, f, { href: g || w, onClick: x || i ? r : m, ref: n, target: a })
    );
  });
var au;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(au || (au = {}));
var uu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(uu || (uu = {}));
function ry(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    a = An(),
    u = Lr(),
    c = Yf(e, { relative: o });
  return k.useCallback(
    (d) => {
      if (Yh(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Hl(u) === Hl(c);
        a(e, {
          replace: f,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [u, a, c, r, l, n, e, i, o, s]
  );
}
function ly({ onLogout: e, user: t }) {
  var r;
  const n =
    ((r = t == null ? void 0 : t.name) == null
      ? void 0
      : r
          .split(" ")
          .map((l) => l[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()) || "ST";
  return p.jsx("header", {
    className:
      "bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-white/60",
    children: p.jsxs("div", {
      className:
        "container mx-auto px-4 py-4 flex items-center justify-between gap-4",
      children: [
        p.jsxs(Ot, {
          to: "/",
          className: "header-brand flex items-center gap-3",
          children: [
            p.jsx("div", {
              className:
                "w-10 h-10 rounded-xl bg-gradient-to-br from-matte-sky to-navy-dark flex items-center justify-center text-white font-semibold shadow",
              children: n,
            }),
            p.jsxs("div", {
              children: [
                p.jsx("span", {
                  className:
                    "text-sm uppercase tracking-wide text-gray-500 block",
                  children: "Nimbus",
                }),
                p.jsx("span", {
                  className: "font-semibold text-lg text-navy-dark",
                  children: "Subscription HQ",
                }),
              ],
            }),
          ],
        }),
        p.jsxs("nav", {
          className: "flex items-center gap-4 text-sm text-gray-700",
          children: [
            p.jsx(Ot, {
              to: "/subscriptions",
              className: "nav-link",
              children: "Subscriptions",
            }),
            p.jsx(Ot, {
              to: "/profile",
              className: "nav-link hidden sm:inline-flex",
              children: "Profile",
            }),
            t &&
              p.jsxs("div", {
                className: "hidden md:flex flex-col text-right mr-2",
                children: [
                  p.jsx("span", {
                    className: "text-xs uppercase tracking-wide text-gray-500",
                    children: "Logged in as",
                  }),
                  p.jsx("span", {
                    className: "text-sm font-medium text-navy-dark",
                    children: t.name,
                  }),
                ],
              }),
            p.jsx("button", {
              onClick: e,
              className: "btn-primary",
              children: "Logout",
            }),
          ],
        }),
      ],
    }),
  });
}
function ed(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: iy } = Object.prototype,
  { getPrototypeOf: Hs } = Object,
  { iterator: si, toStringTag: td } = Symbol,
  ai = ((e) => (t) => {
    const n = iy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ke = (e) => ((e = e.toLowerCase()), (t) => ai(t) === e),
  ui = (e) => (t) => typeof t === e,
  { isArray: Un } = Array,
  On = ui("undefined");
function zr(e) {
  return (
    e !== null &&
    !On(e) &&
    e.constructor !== null &&
    !On(e.constructor) &&
    Ee(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const nd = Ke("ArrayBuffer");
function oy(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && nd(e.buffer)),
    t
  );
}
const sy = ui("string"),
  Ee = ui("function"),
  rd = ui("number"),
  Dr = (e) => e !== null && typeof e == "object",
  ay = (e) => e === !0 || e === !1,
  hl = (e) => {
    if (ai(e) !== "object") return !1;
    const t = Hs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(td in e) &&
      !(si in e)
    );
  },
  uy = (e) => {
    if (!Dr(e) || zr(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  cy = Ke("Date"),
  fy = Ke("File"),
  dy = Ke("Blob"),
  py = Ke("FileList"),
  my = (e) => Dr(e) && Ee(e.pipe),
  hy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ee(e.append) &&
          ((t = ai(e)) === "formdata" ||
            (t === "object" &&
              Ee(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  yy = Ke("URLSearchParams"),
  [gy, vy, xy, wy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ke
  ),
  Sy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Un(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    if (zr(e)) return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let s;
    for (r = 0; r < o; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function ld(e, t) {
  if (zr(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const Wt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  id = (e) => !On(e) && e !== Wt;
function Uo() {
  const { caseless: e, skipUndefined: t } = (id(this) && this) || {},
    n = {},
    r = (l, i) => {
      const o = (e && ld(n, i)) || i;
      hl(n[o]) && hl(l)
        ? (n[o] = Uo(n[o], l))
        : hl(l)
        ? (n[o] = Uo({}, l))
        : Un(l)
        ? (n[o] = l.slice())
        : (!t || !On(l)) && (n[o] = l);
    };
  for (let l = 0, i = arguments.length; l < i; l++)
    arguments[l] && Fr(arguments[l], r);
  return n;
}
const Ey = (e, t, n, { allOwnKeys: r } = {}) => (
    Fr(
      t,
      (l, i) => {
        n && Ee(l) ? (e[i] = ed(l, n)) : (e[i] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ky = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ny = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Cy = (e, t, n, r) => {
    let l, i, o;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (o = l[i]), (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
      e = n !== !1 && Hs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  jy = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Py = (e) => {
    if (!e) return null;
    if (Un(e)) return e;
    let t = e.length;
    if (!rd(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ry = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Hs(Uint8Array)),
  _y = (e, t) => {
    const r = (e && e[si]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  Ty = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Oy = Ke("HTMLFormElement"),
  Ly = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  cu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  zy = Ke("RegExp"),
  od = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Fr(n, (l, i) => {
      let o;
      (o = t(l, i, e)) !== !1 && (r[i] = o || l);
    }),
      Object.defineProperties(e, r);
  },
  Dy = (e) => {
    od(e, (t, n) => {
      if (Ee(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ee(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Fy = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return Un(e) ? r(e) : r(String(e).split(t)), n;
  },
  Iy = () => {},
  Ay = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Uy(e) {
  return !!(e && Ee(e.append) && e[td] === "FormData" && e[si]);
}
const My = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Dr(r)) {
          if (t.indexOf(r) >= 0) return;
          if (zr(r)) return r;
          if (!("toJSON" in r)) {
            t[l] = r;
            const i = Un(r) ? [] : {};
            return (
              Fr(r, (o, s) => {
                const a = n(o, l + 1);
                !On(a) && (i[s] = a);
              }),
              (t[l] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  By = Ke("AsyncFunction"),
  $y = (e) => e && (Dr(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  sd = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Wt.addEventListener(
            "message",
            ({ source: l, data: i }) => {
              l === Wt && i === n && r.length && r.shift()();
            },
            !1
          ),
          (l) => {
            r.push(l), Wt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ee(Wt.postMessage)
  ),
  Hy =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Wt)
      : (typeof process < "u" && process.nextTick) || sd,
  Vy = (e) => e != null && Ee(e[si]),
  S = {
    isArray: Un,
    isArrayBuffer: nd,
    isBuffer: zr,
    isFormData: hy,
    isArrayBufferView: oy,
    isString: sy,
    isNumber: rd,
    isBoolean: ay,
    isObject: Dr,
    isPlainObject: hl,
    isEmptyObject: uy,
    isReadableStream: gy,
    isRequest: vy,
    isResponse: xy,
    isHeaders: wy,
    isUndefined: On,
    isDate: cy,
    isFile: fy,
    isBlob: dy,
    isRegExp: zy,
    isFunction: Ee,
    isStream: my,
    isURLSearchParams: yy,
    isTypedArray: Ry,
    isFileList: py,
    forEach: Fr,
    merge: Uo,
    extend: Ey,
    trim: Sy,
    stripBOM: ky,
    inherits: Ny,
    toFlatObject: Cy,
    kindOf: ai,
    kindOfTest: Ke,
    endsWith: jy,
    toArray: Py,
    forEachEntry: _y,
    matchAll: Ty,
    isHTMLForm: Oy,
    hasOwnProperty: cu,
    hasOwnProp: cu,
    reduceDescriptors: od,
    freezeMethods: Dy,
    toObjectSet: Fy,
    toCamelCase: Ly,
    noop: Iy,
    toFiniteNumber: Ay,
    findKey: ld,
    global: Wt,
    isContextDefined: id,
    isSpecCompliantForm: Uy,
    toJSONObject: My,
    isAsyncFn: By,
    isThenable: $y,
    setImmediate: sd,
    asap: Hy,
    isIterable: Vy,
  };
function L(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
S.inherits(L, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ad = L.prototype,
  ud = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ud[e] = { value: e };
});
Object.defineProperties(L, ud);
Object.defineProperty(ad, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, l, i) => {
  const o = Object.create(ad);
  S.toFlatObject(
    e,
    o,
    function (c) {
      return c !== Error.prototype;
    },
    (u) => u !== "isAxiosError"
  );
  const s = e && e.message ? e.message : "Error",
    a = t == null && e ? e.code : t;
  return (
    L.call(o, s, a, n, r, l),
    e &&
      o.cause == null &&
      Object.defineProperty(o, "cause", { value: e, configurable: !0 }),
    (o.name = (e && e.name) || "Error"),
    i && Object.assign(o, i),
    o
  );
};
const Wy = null;
function Mo(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function cd(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = cd(l)), !n && i ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function Qy(e) {
  return S.isArray(e) && !e.some(Mo);
}
const Ky = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ci(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, w) {
        return !S.isUndefined(w[x]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || c,
    i = n.dots,
    o = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(l)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (S.isDate(g)) return g.toISOString();
    if (S.isBoolean(g)) return g.toString();
    if (!a && S.isBlob(g))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(g) || S.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, x, w) {
    let h = g;
    if (g && !w && typeof g == "object") {
      if (S.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (S.isArray(g) && Qy(g)) ||
        ((S.isFileList(g) || S.endsWith(x, "[]")) && (h = S.toArray(g)))
      )
        return (
          (x = cd(x)),
          h.forEach(function (y, E) {
            !(S.isUndefined(y) || y === null) &&
              t.append(
                o === !0 ? fu([x], E, i) : o === null ? x : x + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return Mo(g) ? !0 : (t.append(fu(w, x, i), u(g)), !1);
  }
  const d = [],
    f = Object.assign(Ky, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Mo,
    });
  function v(g, x) {
    if (!S.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(g),
        S.forEach(g, function (h, m) {
          (!(S.isUndefined(h) || h === null) &&
            l.call(t, h, S.isString(m) ? m.trim() : m, x, f)) === !0 &&
            v(h, x ? x.concat(m) : [m]);
        }),
        d.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function du(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Vs(e, t) {
  (this._pairs = []), e && ci(e, this, t);
}
const fd = Vs.prototype;
fd.append = function (t, n) {
  this._pairs.push([t, n]);
};
fd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, du);
      }
    : du;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function qy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function dd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || qy;
  S.isFunction(n) && (n = { serialize: n });
  const l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = S.isURLSearchParams(t) ? t.toString() : new Vs(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class pu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const pd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jy = typeof URLSearchParams < "u" ? URLSearchParams : Vs,
  Xy = typeof FormData < "u" ? FormData : null,
  Yy = typeof Blob < "u" ? Blob : null,
  Gy = {
    isBrowser: !0,
    classes: { URLSearchParams: Jy, FormData: Xy, Blob: Yy },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ws = typeof window < "u" && typeof document < "u",
  Bo = (typeof navigator == "object" && navigator) || void 0,
  Zy =
    Ws &&
    (!Bo || ["ReactNative", "NativeScript", "NS"].indexOf(Bo.product) < 0),
  by =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  eg = (Ws && window.location.href) || "http://localhost",
  tg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ws,
        hasStandardBrowserEnv: Zy,
        hasStandardBrowserWebWorkerEnv: by,
        navigator: Bo,
        origin: eg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ue = { ...tg, ...Gy };
function ng(e, t) {
  return ci(e, new ue.classes.URLSearchParams(), {
    visitor: function (n, r, l, i) {
      return ue.isNode && S.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : i.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function rg(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function lg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let i;
  for (r = 0; r < l; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function md(e) {
  function t(n, r, l, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o),
      a = i >= n.length;
    return (
      (o = !o && S.isArray(l) ? l.length : o),
      a
        ? (S.hasOwnProp(l, o) ? (l[o] = [l[o], r]) : (l[o] = r), !s)
        : ((!l[o] || !S.isObject(l[o])) && (l[o] = []),
          t(n, r, l[o], i) && S.isArray(l[o]) && (l[o] = lg(l[o])),
          !s)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, l) => {
        t(rg(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function ig(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ir = {
  transitional: pd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        i = S.isObject(t);
      if ((i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return l ? JSON.stringify(md(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ng(t, this.formSerializer).toString();
        if ((s = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ci(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return i || l ? (n.setContentType("application/json", !1), ig(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ir.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || l)) {
        const o = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError"
              ? L.from(s, L.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ue.classes.FormData, Blob: ue.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ir.headers[e] = {};
});
const og = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  sg = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (l = o.indexOf(":")),
              (n = o.substring(0, l).trim().toLowerCase()),
              (r = o.substring(l + 1).trim()),
              !(!n || (t[n] && og[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  mu = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function yl(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(yl) : String(e);
}
function ag(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ug = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mi(e, t, n, r, l) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function cg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fg(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, i, o) {
        return this[r].call(this, t, l, i, o);
      },
      configurable: !0,
    });
  });
}
let ke = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function i(s, a, u) {
      const c = Jn(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = S.findKey(l, c);
      (!d || l[d] === void 0 || u === !0 || (u === void 0 && l[d] !== !1)) &&
        (l[d || a] = yl(s));
    }
    const o = (s, a) => S.forEach(s, (u, c) => i(u, c, a));
    if (S.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (S.isString(t) && (t = t.trim()) && !ug(t)) o(sg(t), n);
    else if (S.isObject(t) && S.isIterable(t)) {
      let s = {},
        a,
        u;
      for (const c of t) {
        if (!S.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        s[(u = c[0])] = (a = s[u])
          ? S.isArray(a)
            ? [...a, c[1]]
            : [a, c[1]]
          : c[1];
      }
      o(s, n);
    } else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Jn(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return ag(l);
        if (S.isFunction(n)) return n.call(this, l, r);
        if (S.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Jn(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Mi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function i(o) {
      if (((o = Jn(o)), o)) {
        const s = S.findKey(r, o);
        s && (!n || Mi(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Mi(this, this[i], i, t, !0)) && (delete this[i], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (l, i) => {
        const o = S.findKey(r, i);
        if (o) {
          (n[o] = yl(l)), delete n[i];
          return;
        }
        const s = t ? cg(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = yl(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[mu] = this[mu] = { accessors: {} }).accessors,
      l = this.prototype;
    function i(o) {
      const s = Jn(o);
      r[s] || (fg(l, o), (r[s] = !0));
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
ke.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(ke);
function Bi(e, t) {
  const n = this || Ir,
    r = t || n,
    l = ke.from(r.headers);
  let i = r.data;
  return (
    S.forEach(e, function (s) {
      i = s.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function hd(e) {
  return !!(e && e.__CANCEL__);
}
function Mn(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(Mn, L, { __CANCEL__: !0 });
function yd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new L(
          "Request failed with status code " + n.status,
          [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function dg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function pg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[i];
      o || (o = u), (n[l] = a), (r[l] = u);
      let d = i,
        f = 0;
      for (; d !== l; ) (f += n[d++]), (d = d % e);
      if (((l = (l + 1) % e), l === i && (i = (i + 1) % e), u - o < t)) return;
      const v = c && u - c;
      return v ? Math.round((f * 1e3) / v) : void 0;
    }
  );
}
function mg(e, t) {
  let n = 0,
    r = 1e3 / t,
    l,
    i;
  const o = (u, c = Date.now()) => {
    (n = c), (l = null), i && (clearTimeout(i), (i = null)), e(...u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? o(u, c)
        : ((l = u),
          i ||
            (i = setTimeout(() => {
              (i = null), o(l);
            }, r - d)));
    },
    () => l && o(l),
  ];
}
const Vl = (e, t, n = 3) => {
    let r = 0;
    const l = pg(50, 250);
    return mg((i) => {
      const o = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        a = o - r,
        u = l(a),
        c = o <= s;
      r = o;
      const d = {
        loaded: o,
        total: s,
        progress: s ? o / s : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && s && c ? (s - o) / u : void 0,
        event: i,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  hu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  yu =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  hg = ue.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ue.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ue.origin),
        ue.navigator && /(msie|trident)/i.test(ue.navigator.userAgent)
      )
    : () => !0,
  yg = ue.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, l, i, o) {
          if (typeof document > "u") return;
          const s = [`${e}=${encodeURIComponent(t)}`];
          S.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            S.isString(r) && s.push(`path=${r}`),
            S.isString(l) && s.push(`domain=${l}`),
            i === !0 && s.push("secure"),
            S.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join("; "));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)")
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function gg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function vg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gd(e, t, n) {
  let r = !gg(t);
  return e && (r || n == !1) ? vg(e, t) : t;
}
const gu = (e) => (e instanceof ke ? { ...e } : e);
function bt(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d, f) {
    return S.isPlainObject(u) && S.isPlainObject(c)
      ? S.merge.call({ caseless: f }, u, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function l(u, c, d, f) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(u)) return r(void 0, u, d, f);
    } else return r(u, c, d, f);
  }
  function i(u, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (u, c, d) => l(gu(u), gu(c), d, !0),
  };
  return (
    S.forEach(Object.keys({ ...e, ...t }), function (c) {
      const d = a[c] || l,
        f = d(e[c], t[c], c);
      (S.isUndefined(f) && d !== s) || (n[c] = f);
    }),
    n
  );
}
const vd = (e) => {
    const t = bt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: l,
      xsrfCookieName: i,
      headers: o,
      auth: s,
    } = t;
    if (
      ((t.headers = o = ke.from(o)),
      (t.url = dd(
        gd(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      s &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        ),
      S.isFormData(n))
    ) {
      if (ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if (S.isFunction(n.getHeaders)) {
        const a = n.getHeaders(),
          u = ["content-type", "content-length"];
        Object.entries(a).forEach(([c, d]) => {
          u.includes(c.toLowerCase()) && o.set(c, d);
        });
      }
    }
    if (
      ue.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && hg(t.url)))
    ) {
      const a = l && i && yg.read(i);
      a && o.set(l, a);
    }
    return t;
  },
  xg = typeof XMLHttpRequest < "u",
  wg =
    xg &&
    function (e) {
      return new Promise(function (n, r) {
        const l = vd(e);
        let i = l.data;
        const o = ke.from(l.headers).normalize();
        let { responseType: s, onUploadProgress: a, onDownloadProgress: u } = l,
          c,
          d,
          f,
          v,
          g;
        function x() {
          v && v(),
            g && g(),
            l.cancelToken && l.cancelToken.unsubscribe(c),
            l.signal && l.signal.removeEventListener("abort", c);
        }
        let w = new XMLHttpRequest();
        w.open(l.method.toUpperCase(), l.url, !0), (w.timeout = l.timeout);
        function h() {
          if (!w) return;
          const y = ke.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            C = {
              data:
                !s || s === "text" || s === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: y,
              config: e,
              request: w,
            };
          yd(
            function (P) {
              n(P), x();
            },
            function (P) {
              r(P), x();
            },
            C
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = h)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (w.onabort = function () {
            w &&
              (r(new L("Request aborted", L.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function (E) {
            const C = E && E.message ? E.message : "Network Error",
              _ = new L(C, L.ERR_NETWORK, e, w);
            (_.event = E || null), r(_), (w = null);
          }),
          (w.ontimeout = function () {
            let E = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = l.transitional || pd;
            l.timeoutErrorMessage && (E = l.timeoutErrorMessage),
              r(
                new L(
                  E,
                  C.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            S.forEach(o.toJSON(), function (E, C) {
              w.setRequestHeader(C, E);
            }),
          S.isUndefined(l.withCredentials) ||
            (w.withCredentials = !!l.withCredentials),
          s && s !== "json" && (w.responseType = l.responseType),
          u && (([f, g] = Vl(u, !0)), w.addEventListener("progress", f)),
          a &&
            w.upload &&
            (([d, v] = Vl(a)),
            w.upload.addEventListener("progress", d),
            w.upload.addEventListener("loadend", v)),
          (l.cancelToken || l.signal) &&
            ((c = (y) => {
              w &&
                (r(!y || y.type ? new Mn(null, e, w) : y),
                w.abort(),
                (w = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(c),
            l.signal &&
              (l.signal.aborted ? c() : l.signal.addEventListener("abort", c)));
        const m = dg(l.url);
        if (m && ue.protocols.indexOf(m) === -1) {
          r(new L("Unsupported protocol " + m + ":", L.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  Sg = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        l;
      const i = function (u) {
        if (!l) {
          (l = !0), s();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof L ? c : new Mn(c instanceof Error ? c.message : c)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: a } = r;
      return (a.unsubscribe = () => S.asap(s)), a;
    }
  },
  Eg = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      l;
    for (; r < n; ) (l = r + t), yield e.slice(r, l), (r = l);
  },
  kg = async function* (e, t) {
    for await (const n of Ng(e)) yield* Eg(n, t);
  },
  Ng = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  vu = (e, t, n, r) => {
    const l = kg(e, t);
    let i = 0,
      o,
      s = (a) => {
        o || ((o = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await l.next();
            if (u) {
              s(), a.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (s(u), u);
          }
        },
        cancel(a) {
          return s(a), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  xu = 64 * 1024,
  { isFunction: nl } = S,
  Cg = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    S.global
  ),
  { ReadableStream: wu, TextEncoder: Su } = S.global,
  Eu = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  jg = (e) => {
    e = S.merge.call({ skipUndefined: !0 }, Cg, e);
    const { fetch: t, Request: n, Response: r } = e,
      l = t ? nl(t) : typeof fetch == "function",
      i = nl(n),
      o = nl(r);
    if (!l) return !1;
    const s = l && nl(wu),
      a =
        l &&
        (typeof Su == "function"
          ? (
              (g) => (x) =>
                g.encode(x)
            )(new Su())
          : async (g) => new Uint8Array(await new n(g).arrayBuffer())),
      u =
        i &&
        s &&
        Eu(() => {
          let g = !1;
          const x = new n(ue.origin, {
            body: new wu(),
            method: "POST",
            get duplex() {
              return (g = !0), "half";
            },
          }).headers.has("Content-Type");
          return g && !x;
        }),
      c = o && s && Eu(() => S.isReadableStream(new r("").body)),
      d = { stream: c && ((g) => g.body) };
    l &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
        !d[g] &&
          (d[g] = (x, w) => {
            let h = x && x[g];
            if (h) return h.call(x);
            throw new L(
              `Response type '${g}' is not supported`,
              L.ERR_NOT_SUPPORT,
              w
            );
          });
      });
    const f = async (g) => {
        if (g == null) return 0;
        if (S.isBlob(g)) return g.size;
        if (S.isSpecCompliantForm(g))
          return (
            await new n(ue.origin, { method: "POST", body: g }).arrayBuffer()
          ).byteLength;
        if (S.isArrayBufferView(g) || S.isArrayBuffer(g)) return g.byteLength;
        if ((S.isURLSearchParams(g) && (g = g + ""), S.isString(g)))
          return (await a(g)).byteLength;
      },
      v = async (g, x) => {
        const w = S.toFiniteNumber(g.getContentLength());
        return w ?? f(x);
      };
    return async (g) => {
      let {
          url: x,
          method: w,
          data: h,
          signal: m,
          cancelToken: y,
          timeout: E,
          onDownloadProgress: C,
          onUploadProgress: _,
          responseType: P,
          headers: T,
          withCredentials: M = "same-origin",
          fetchOptions: D,
        } = vd(g),
        he = t || fetch;
      P = P ? (P + "").toLowerCase() : "text";
      let qe = Sg([m, y && y.toAbortSignal()], E),
        Ue = null;
      const Je =
        qe &&
        qe.unsubscribe &&
        (() => {
          qe.unsubscribe();
        });
      let Ar;
      try {
        if (
          _ &&
          u &&
          w !== "get" &&
          w !== "head" &&
          (Ar = await v(T, h)) !== 0
        ) {
          let A = new n(x, { method: "POST", body: h, duplex: "half" }),
            $;
          if (
            (S.isFormData(h) &&
              ($ = A.headers.get("content-type")) &&
              T.setContentType($),
            A.body)
          ) {
            const [pt, Te] = hu(Ar, Vl(yu(_)));
            h = vu(A.body, xu, pt, Te);
          }
        }
        S.isString(M) || (M = M ? "include" : "omit");
        const ye = i && "credentials" in n.prototype,
          nn = {
            ...D,
            signal: qe,
            method: w.toUpperCase(),
            headers: T.normalize().toJSON(),
            body: h,
            duplex: "half",
            credentials: ye ? M : void 0,
          };
        Ue = i && new n(x, nn);
        let j = await (i ? he(Ue, D) : he(x, nn));
        const O = c && (P === "stream" || P === "response");
        if (c && (C || (O && Je))) {
          const A = {};
          ["status", "statusText", "headers"].forEach((rn) => {
            A[rn] = j[rn];
          });
          const $ = S.toFiniteNumber(j.headers.get("content-length")),
            [pt, Te] = (C && hu($, Vl(yu(C), !0))) || [];
          j = new r(
            vu(j.body, xu, pt, () => {
              Te && Te(), Je && Je();
            }),
            A
          );
        }
        P = P || "text";
        let z = await d[S.findKey(d, P) || "text"](j, g);
        return (
          !O && Je && Je(),
          await new Promise((A, $) => {
            yd(A, $, {
              data: z,
              headers: ke.from(j.headers),
              status: j.status,
              statusText: j.statusText,
              config: g,
              request: Ue,
            });
          })
        );
      } catch (ye) {
        throw (
          (Je && Je(),
          ye && ye.name === "TypeError" && /Load failed|fetch/i.test(ye.message)
            ? Object.assign(new L("Network Error", L.ERR_NETWORK, g, Ue), {
                cause: ye.cause || ye,
              })
            : L.from(ye, ye && ye.code, g, Ue))
        );
      }
    };
  },
  Pg = new Map(),
  xd = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: l } = t,
      i = [r, l, n];
    let o = i.length,
      s = o,
      a,
      u,
      c = Pg;
    for (; s--; )
      (a = i[s]),
        (u = c.get(a)),
        u === void 0 && c.set(a, (u = s ? new Map() : jg(t))),
        (c = u);
    return u;
  };
xd();
const Qs = { http: Wy, xhr: wg, fetch: { get: xd } };
S.forEach(Qs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ku = (e) => `- ${e}`,
  Rg = (e) => S.isFunction(e) || e === null || e === !1;
function _g(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, l;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let s;
    if (
      ((l = r),
      !Rg(r) && ((l = Qs[(s = String(r)).toLowerCase()]), l === void 0))
    )
      throw new L(`Unknown adapter '${s}'`);
    if (l && (S.isFunction(l) || (l = l.get(t)))) break;
    i[s || "#" + o] = l;
  }
  if (!l) {
    const o = Object.entries(i).map(
      ([a, u]) =>
        `adapter ${a} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build")
    );
    let s = n
      ? o.length > 1
        ? `since :
` +
          o.map(ku).join(`
`)
        : " " + ku(o[0])
      : "as no adapter specified";
    throw new L(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return l;
}
const wd = { getAdapter: _g, adapters: Qs };
function $i(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Mn(null, e);
}
function Nu(e) {
  return (
    $i(e),
    (e.headers = ke.from(e.headers)),
    (e.data = Bi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    wd
      .getAdapter(
        e.adapter || Ir.adapter,
        e
      )(e)
      .then(
        function (r) {
          return (
            $i(e),
            (r.data = Bi.call(e, e.transformResponse, r)),
            (r.headers = ke.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            hd(r) ||
              ($i(e),
              r &&
                r.response &&
                ((r.response.data = Bi.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ke.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Sd = "1.13.2",
  fi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    fi[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Cu = {};
fi.transitional = function (t, n, r) {
  function l(i, o) {
    return (
      "[Axios v" +
      Sd +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, s) => {
    if (t === !1)
      throw new L(
        l(o, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return (
      n &&
        !Cu[o] &&
        ((Cu[o] = !0),
        console.warn(
          l(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, s) : !0
    );
  };
};
fi.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Tg(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const i = r[l],
      o = t[i];
    if (o) {
      const s = e[i],
        a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new L("option " + i + " must be " + a, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new L("Unknown option " + i, L.ERR_BAD_OPTION);
  }
}
const gl = { assertOptions: Tg, validators: fi },
  Ye = gl.validators;
let qt = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new pu(), response: new pu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const i = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = bt(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: i } = n;
    r !== void 0 &&
      gl.assertOptions(
        r,
        {
          silentJSONParsing: Ye.transitional(Ye.boolean),
          forcedJSONParsing: Ye.transitional(Ye.boolean),
          clarifyTimeoutError: Ye.transitional(Ye.boolean),
        },
        !1
      ),
      l != null &&
        (S.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : gl.assertOptions(
              l,
              { encode: Ye.function, serialize: Ye.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      gl.assertOptions(
        n,
        {
          baseUrl: Ye.spelling("baseURL"),
          withXsrfToken: Ye.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && S.merge(i.common, i[n.method]);
    i &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        }
      ),
      (n.headers = ke.concat(o, i));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((a = a && x.synchronous), s.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let c,
      d = 0,
      f;
    if (!a) {
      const g = [Nu.bind(this), void 0];
      for (
        g.unshift(...s), g.push(...u), f = g.length, c = Promise.resolve(n);
        d < f;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    f = s.length;
    let v = n;
    for (; d < f; ) {
      const g = s[d++],
        x = s[d++];
      try {
        v = g(v);
      } catch (w) {
        x.call(this, w);
        break;
      }
    }
    try {
      c = Nu.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = bt(this.defaults, t);
    const n = gd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return dd(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function (t) {
  qt.prototype[t] = function (n, r) {
    return this.request(
      bt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, s) {
      return this.request(
        bt(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (qt.prototype[t] = n()), (qt.prototype[t + "Form"] = n(!0));
});
let Og = class Ed {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let i;
        const o = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(l);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, s) {
        r.reason || ((r.reason = new Mn(i, o, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ed(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
};
function Lg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function zg(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const $o = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries($o).forEach(([e, t]) => {
  $o[t] = e;
});
function kd(e) {
  const t = new qt(e),
    n = ed(qt.prototype.request, t);
  return (
    S.extend(n, qt.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return kd(bt(e, l));
    }),
    n
  );
}
const G = kd(Ir);
G.Axios = qt;
G.CanceledError = Mn;
G.CancelToken = Og;
G.isCancel = hd;
G.VERSION = Sd;
G.toFormData = ci;
G.AxiosError = L;
G.Cancel = G.CanceledError;
G.all = function (t) {
  return Promise.all(t);
};
G.spread = Lg;
G.isAxiosError = zg;
G.mergeConfig = bt;
G.AxiosHeaders = ke;
G.formToJSON = (e) => md(S.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = wd.getAdapter;
G.HttpStatusCode = $o;
G.default = G;
const {
  Axios: Zg,
  AxiosError: bg,
  CanceledError: ev,
  isCancel: tv,
  CancelToken: nv,
  VERSION: rv,
  all: lv,
  Cancel: iv,
  isAxiosError: ov,
  spread: sv,
  toFormData: av,
  AxiosHeaders: uv,
  HttpStatusCode: cv,
  formToJSON: fv,
  getAdapter: dv,
  mergeConfig: pv,
} = G;
var Ru, _u;
const Dg =
    ((_u = (Ru = import.meta) == null ? void 0 : Ru.env) == null
      ? void 0
      : _u.VITE_API_URL) || "http://localhost:5500/api/v1",
  Ae = G.create({
    baseURL: Dg,
    headers: { "Content-Type": "application/json" },
    timeout: 15e3,
  });
Ae.interceptors.request.use((e) => {
  const t = localStorage.getItem("token");
  return t && (e.headers.Authorization = `Bearer ${t}`), e;
});
Ae.interceptors.response.use(
  (e) => e,
  (e) => {
    var n, r, l, i, o;
    ((n = e.response) == null ? void 0 : n.status) === 401 &&
      (localStorage.removeItem("token"), localStorage.removeItem("user"));
    const t =
      ((l = (r = e.response) == null ? void 0 : r.data) == null
        ? void 0
        : l.message) ||
      ((o = (i = e.response) == null ? void 0 : i.data) == null
        ? void 0
        : o.error) ||
      e.message ||
      "Request failed";
    return Promise.reject({ ...e, message: t });
  }
);
function Fg() {
  const e = An(),
    [t, n] = k.useState(() => {
      try {
        const a = localStorage.getItem("user");
        return a ? JSON.parse(a) : null;
      } catch (a) {
        return console.error("Failed to parse stored user", a), null;
      }
    }),
    [r, l] = k.useState(!0),
    [i, o] = k.useState(null);
  k.useEffect(() => {
    let a = !1;
    async function u() {
      var c, d;
      try {
        const v =
          (c = (await Ae.get("/auth/me")).data) == null ? void 0 : c.data;
        !a && v && (n(v), localStorage.setItem("user", JSON.stringify(v)));
      } catch (f) {
        ((d = f == null ? void 0 : f.response) == null ? void 0 : d.status) ===
        401
          ? await s({ redirect: !0, silent: !0 })
          : a || o(f.message || "Unable to load session");
      } finally {
        a || l(!1);
      }
    }
    return (
      u(),
      () => {
        a = !0;
      }
    );
  }, []);
  async function s({ redirect: a = !0, silent: u = !1 } = {}) {
    try {
      u || (await Ae.post("/auth/sign-out"));
    } catch {
    } finally {
      localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        n(null),
        a && e("/login", { replace: !0 });
    }
  }
  return r
    ? p.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-app",
        children: p.jsxs("div", {
          className: "text-center",
          children: [
            p.jsx("div", { className: "loader mx-auto mb-3" }),
            p.jsx("p", {
              className: "text-sm text-gray-600",
              children: "Warming up your workspace...",
            }),
          ],
        }),
      })
    : i
    ? p.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-app p-4",
        children: p.jsxs("div", {
          className: "card max-w-md text-center space-y-4",
          children: [
            p.jsx("h2", {
              className: "text-xl font-semibold text-navy-dark",
              children: "Hold tight",
            }),
            p.jsx("p", { className: "text-sm text-gray-600", children: i }),
            p.jsx("button", {
              className: "btn-primary w-full",
              onClick: () => s(),
              children: "Back to login",
            }),
          ],
        }),
      })
    : p.jsxs("div", {
        className: "min-h-screen flex flex-col bg-app",
        children: [
          p.jsx(ly, { onLogout: s, user: t }),
          p.jsx("main", {
            className: "container mx-auto px-4 py-8 flex-1 w-full",
            children: p.jsx(Qh, { context: { user: t } }),
          }),
        ],
      });
}
const ju = {
  totalSubscriptions: 0,
  activeSubscriptions: 0,
  monthlySpend: 0,
  upcomingRenewals: [],
};
function Ig() {
  const [e, t] = k.useState(ju),
    [n, r] = k.useState([]),
    [l, i] = k.useState(!0),
    [o, s] = k.useState(null);
  k.useEffect(() => {
    let u = !1;
    async function c() {
      var d, f;
      i(!0);
      try {
        const [v, g] = await Promise.all([
          Ae.get("/subscription/summary"),
          Ae.get("/subscription/upcoming-renewals?days=30"),
        ]);
        u ||
          (t(((d = v.data) == null ? void 0 : d.data) ?? ju),
          r(((f = g.data) == null ? void 0 : f.data) ?? []));
      } catch (v) {
        u || s(v.message || "Unable to load dashboard");
      } finally {
        u || i(!1);
      }
    }
    return (
      c(),
      () => {
        u = !0;
      }
    );
  }, []);
  const a = k.useMemo(() => {
    var c;
    const u = Number(e.monthlySpend || 0);
    return [
      {
        label: "Active services",
        value: e.activeSubscriptions ?? 0,
        helper: `${e.totalSubscriptions ?? 0} total tracked`,
      },
      {
        label: "Monthly burn",
        value: `$${u.toLocaleString(void 0, { minimumFractionDigits: 2 })}`,
        helper: "Normalized across billing cycles",
      },
      {
        label: "Upcoming renewals",
        value: ((c = e.upcomingRenewals) == null ? void 0 : c.length) ?? 0,
        helper: "Next 14 days",
      },
    ];
  }, [e]);
  return p.jsxs("div", {
    className: "space-y-6",
    children: [
      p.jsxs("div", {
        className:
          "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        children: [
          p.jsxs("div", {
            children: [
              p.jsx("p", {
                className: "text-sm uppercase tracking-[0.25em] text-gray-500",
                children: "Command Center",
              }),
              p.jsx("h1", {
                className: "text-3xl font-semibold text-navy-dark",
                children: "Your subscription runway",
              }),
            ],
          }),
          p.jsx(Ot, {
            to: "/subscriptions/new",
            className: "btn-primary w-full md:w-auto",
            children: "+ Add subscription",
          }),
        ],
      }),
      o &&
        p.jsx("div", {
          className: "text-sm text-red-600 bg-red-50 rounded-lg p-4",
          children: o,
        }),
      p.jsx("div", {
        className: "grid gap-4 md:grid-cols-3",
        children: a.map((u) =>
          p.jsxs(
            "div",
            {
              className: "stat-card",
              children: [
                p.jsx("p", {
                  className: "text-xs uppercase tracking-widest text-gray-500",
                  children: u.label,
                }),
                p.jsx("p", {
                  className: "text-3xl font-semibold text-navy-dark",
                  children: l ? "—" : u.value,
                }),
                p.jsx("p", {
                  className: "text-xs text-gray-500",
                  children: u.helper,
                }),
              ],
            },
            u.label
          )
        ),
      }),
      p.jsxs("div", {
        className: "grid gap-6 md:grid-cols-3",
        children: [
          p.jsxs("div", {
            className: "card md:col-span-2",
            children: [
              p.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  p.jsx("h2", {
                    className: "text-lg font-semibold",
                    children: "Renewal radar",
                  }),
                  p.jsx("span", {
                    className: "pill",
                    children: "Next 30 days",
                  }),
                ],
              }),
              l &&
                p.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "Loading...",
                }),
              !l &&
                n.length === 0 &&
                p.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "No renewals in the next month. Enjoy the calm.",
                }),
              p.jsx("div", {
                className: "space-y-3",
                children: n
                  .slice(0, 5)
                  .map((u) =>
                    p.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 bg-white/70",
                        children: [
                          p.jsxs("div", {
                            children: [
                              p.jsx("p", {
                                className:
                                  "font-medium text-navy-dark capitalize",
                                children: u.name,
                              }),
                              p.jsx("p", {
                                className:
                                  "text-xs uppercase tracking-wide text-gray-500",
                                children: u.category,
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "text-right",
                            children: [
                              p.jsxs("p", {
                                className:
                                  "text-sm font-semibold text-navy-dark",
                                children: [
                                  u.currency,
                                  " ",
                                  Number(u.price).toFixed(2),
                                ],
                              }),
                              p.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: new Date(
                                  u.renewalDate
                                ).toLocaleDateString(),
                              }),
                            ],
                          }),
                        ],
                      },
                      u._id
                    )
                  ),
              }),
            ],
          }),
          p.jsxs("div", {
            className: "card space-y-3",
            children: [
              p.jsx("h3", {
                className: "font-semibold text-lg",
                children: "Next actions",
              }),
              p.jsxs("ul", {
                className: "space-y-2 text-sm text-gray-600",
                children: [
                  p.jsx("li", {
                    children: "• Review upcoming renewals and tag risky ones",
                  }),
                  p.jsx("li", {
                    children: "• Shift annual contracts to corporate cards",
                  }),
                  p.jsx("li", {
                    children: "• Invite finance to co-own the renewal queue",
                  }),
                ],
              }),
              p.jsx(Ot, {
                to: "/subscriptions",
                className: "btn-primary text-center",
                children: "View all subscriptions",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ag() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0),
    [l, i] = k.useState(null),
    [o, s] = k.useState({ query: "", status: "all" }),
    [a, u] = k.useState(null);
  k.useEffect(() => {
    let f = !0;
    return (
      r(!0),
      Ae.get("/subscription")
        .then((v) => {
          var x;
          const g = ((x = v.data) == null ? void 0 : x.data) ?? v.data;
          f && t(Array.isArray(g) ? g : g || []);
        })
        .catch((v) => f && i(v.message || "Unable to load data"))
        .finally(() => f && r(!1)),
      () => {
        f = !1;
      }
    );
  }, []);
  const c = k.useMemo(
      () =>
        e
          .filter((f) => {
            var x, w, h;
            const v =
                o.status === "all" ||
                ((x = f.status) == null ? void 0 : x.toLowerCase()) ===
                  o.status,
              g =
                !o.query ||
                ((w = f.name) == null
                  ? void 0
                  : w.toLowerCase().includes(o.query.toLowerCase())) ||
                ((h = f.category) == null
                  ? void 0
                  : h.toLowerCase().includes(o.query.toLowerCase()));
            return v && g;
          })
          .sort((f, v) => {
            const g = new Date(f.renewalDate || f.createdAt),
              x = new Date(v.renewalDate || v.createdAt);
            return g - x;
          }),
      [e, o]
    ),
    d = async (f) => {
      if (window.confirm("Pause renewal reminders for this subscription?")) {
        u(f);
        try {
          const v = await Ae.put(`/subscription/${f}/cancel`);
          t((g) =>
            g.map((x) => {
              var w;
              return x._id === f
                ? ((w = v.data) == null ? void 0 : w.data) ?? x
                : x;
            })
          );
        } catch (v) {
          alert(v.message || "Unable to cancel subscription");
        } finally {
          u(null);
        }
      }
    };
  return p.jsxs("div", {
    className: "space-y-6",
    children: [
      p.jsxs("div", {
        className:
          "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
        children: [
          p.jsxs("div", {
            children: [
              p.jsx("h1", {
                className: "text-2xl font-semibold text-navy-dark",
                children: "Subscriptions",
              }),
              p.jsxs("p", {
                className: "text-sm text-gray-500",
                children: [e.length, " services under watch"],
              }),
            ],
          }),
          p.jsx(Ot, {
            to: "/subscriptions/new",
            className: "btn-primary w-full md:w-auto",
            children: "+ New subscription",
          }),
        ],
      }),
      p.jsxs("div", {
        className: "card flex flex-col gap-4 md:flex-row md:items-center",
        children: [
          p.jsx("input", {
            className: "input-field md:flex-1",
            placeholder: "Search by name or category",
            value: o.query,
            onChange: (f) => s((v) => ({ ...v, query: f.target.value })),
          }),
          p.jsxs("select", {
            className: "input-field md:w-48",
            value: o.status,
            onChange: (f) => s((v) => ({ ...v, status: f.target.value })),
            children: [
              p.jsx("option", { value: "all", children: "All statuses" }),
              p.jsx("option", { value: "active", children: "Active" }),
              p.jsx("option", { value: "cancelled", children: "Cancelled" }),
              p.jsx("option", { value: "expired", children: "Expired" }),
            ],
          }),
        ],
      }),
      l &&
        p.jsx("div", {
          className: "text-sm text-red-600 bg-red-50 rounded-lg p-3",
          children: l,
        }),
      p.jsxs("div", {
        className: "space-y-3",
        children: [
          n &&
            p.jsx("div", {
              className: "text-gray-500",
              children: "Loading...",
            }),
          !n &&
            c.length === 0 &&
            p.jsx("div", {
              className: "text-gray-500",
              children:
                "Nothing to show yet. Start by adding your first subscription.",
            }),
          c.map((f) =>
            p.jsxs(
              "div",
              {
                className:
                  "card flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          p.jsx("div", {
                            className:
                              "font-semibold text-navy-dark capitalize",
                            children: f.name,
                          }),
                          p.jsx("span", {
                            className: "pill capitalize",
                            children: f.category,
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "text-sm text-gray-600",
                        children: [
                          f.frequency,
                          " • ",
                          f.currency,
                          " ",
                          Number(f.price || 0).toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex flex-col md:items-end gap-2",
                    children: [
                      p.jsxs("div", {
                        className: "text-sm font-medium text-navy-dark",
                        children: [
                          "Next:",
                          " ",
                          f.renewalDate
                            ? new Date(f.renewalDate).toLocaleDateString()
                            : "Not set",
                        ],
                      }),
                      f.status === "active"
                        ? p.jsx("button", {
                            className: "text-sm text-red-600",
                            disabled: a === f._id,
                            onClick: () => d(f._id),
                            children:
                              a === f._id ? "Updating..." : "Cancel renewal",
                          })
                        : p.jsx("span", {
                            className:
                              "text-xs uppercase tracking-wide text-gray-500",
                            children: f.status,
                          }),
                    ],
                  }),
                ],
              },
              f._id || f.id
            )
          ),
        ],
      }),
    ],
  });
}
const Ug = {
    name: "",
    price: "",
    currency: "USD",
    frequency: "monthly",
    category: "productivity",
    paymentMethod: "Card",
    startDate: new Date().toISOString().split("T")[0],
    renewalDate: "",
    notes: "",
  },
  Mg = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" },
  ],
  Bg = [
    "productivity",
    "entertainment",
    "technology",
    "finance",
    "news",
    "lifestyle",
    "gaming",
    "education",
    "health",
    "sports",
    "other",
  ],
  $g = ["USD", "EUR", "GBP", "INR", "CAD", "AUD"];
function Hg() {
  const [e, t] = k.useState(Ug),
    [n, r] = k.useState({}),
    [l, i] = k.useState(null),
    [o, s] = k.useState(!1),
    a = An(),
    u = k.useMemo(() => {
      const v = Number(e.price);
      if (!v) return "$0.00";
      const x =
        {
          daily: v * 30,
          weekly: v * 4,
          monthly: v,
          quarterly: v / 3,
          yearly: v / 12,
        }[e.frequency] ?? v;
      return `${e.currency} ${x.toFixed(2)}`;
    }, [e.price, e.frequency, e.currency]),
    c = (v) => {
      const { name: g, value: x } = v.target;
      t((w) => ({ ...w, [g]: x })), r((w) => ({ ...w, [g]: null })), i(null);
    },
    d = () => {
      const v = {};
      return (
        e.name.trim() || (v.name = "Name is required"),
        (!e.price || Number(e.price) <= 0) && (v.price = "Enter a valid price"),
        e.startDate || (v.startDate = "Start date is required"),
        e.renewalDate &&
          e.renewalDate <= e.startDate &&
          (v.renewalDate = "Renewal must be after the start date"),
        v
      );
    };
  async function f(v) {
    v.preventDefault();
    const g = d();
    if (Object.keys(g).length) {
      r(g);
      return;
    }
    s(!0);
    try {
      await Ae.post("/subscription", {
        name: e.name.trim(),
        price: parseFloat(e.price),
        currency: e.currency,
        frequency: e.frequency,
        category: e.category,
        paymentMethod: e.paymentMethod,
        startDate: e.startDate,
        renewalDate: e.renewalDate || void 0,
        notes: e.notes.trim(),
      }),
        a("/subscriptions");
    } catch (x) {
      i(x.message || "Could not create subscription");
    } finally {
      s(!1);
    }
  }
  return p.jsxs("div", {
    className: "max-w-4xl mx-auto space-y-6",
    children: [
      p.jsxs("div", {
        children: [
          p.jsx("p", {
            className: "text-sm uppercase tracking-[0.25em] text-gray-500",
            children: "Intake form",
          }),
          p.jsx("h1", {
            className: "text-3xl font-semibold text-navy-dark",
            children: "Add subscription",
          }),
        ],
      }),
      p.jsxs("div", {
        className: "card",
        children: [
          l &&
            p.jsx("div", {
              className: "text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4",
              children: l,
            }),
          p.jsxs("form", {
            onSubmit: f,
            className: "space-y-6",
            children: [
              p.jsxs("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Service name",
                      }),
                      p.jsx("input", {
                        className: "input-field",
                        placeholder: "Netflix Premium",
                        name: "name",
                        value: e.name,
                        onChange: c,
                        "aria-invalid": !!n.name,
                      }),
                      n.name &&
                        p.jsx("p", {
                          className: "text-xs text-red-600 mt-1",
                          children: n.name,
                        }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Amount",
                      }),
                      p.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          p.jsx("select", {
                            className: "input-field w-28",
                            name: "currency",
                            value: e.currency,
                            onChange: c,
                            children: $g.map((v) =>
                              p.jsx("option", { value: v, children: v }, v)
                            ),
                          }),
                          p.jsx("input", {
                            className: "input-field flex-1",
                            placeholder: "19.99",
                            name: "price",
                            type: "number",
                            step: "0.01",
                            min: "0",
                            value: e.price,
                            onChange: c,
                            "aria-invalid": !!n.price,
                          }),
                        ],
                      }),
                      n.price &&
                        p.jsx("p", {
                          className: "text-xs text-red-600 mt-1",
                          children: n.price,
                        }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Frequency",
                      }),
                      p.jsx("select", {
                        className: "input-field",
                        name: "frequency",
                        value: e.frequency,
                        onChange: c,
                        children: Mg.map((v) =>
                          p.jsx(
                            "option",
                            { value: v.value, children: v.label },
                            v.value
                          )
                        ),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Category",
                      }),
                      p.jsx("select", {
                        className: "input-field capitalize",
                        name: "category",
                        value: e.category,
                        onChange: c,
                        children: Bg.map((v) =>
                          p.jsx("option", { value: v, children: v }, v)
                        ),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Payment method",
                      }),
                      p.jsx("input", {
                        className: "input-field",
                        placeholder: "Corporate Amex",
                        name: "paymentMethod",
                        value: e.paymentMethod,
                        onChange: c,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Start date",
                      }),
                      p.jsx("input", {
                        className: "input-field",
                        type: "date",
                        name: "startDate",
                        value: e.startDate,
                        onChange: c,
                        "aria-invalid": !!n.startDate,
                      }),
                      n.startDate &&
                        p.jsx("p", {
                          className: "text-xs text-red-600 mt-1",
                          children: n.startDate,
                        }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Renewal date (optional)",
                      }),
                      p.jsx("input", {
                        className: "input-field",
                        type: "date",
                        name: "renewalDate",
                        value: e.renewalDate,
                        onChange: c,
                        "aria-invalid": !!n.renewalDate,
                      }),
                      n.renewalDate &&
                        p.jsx("p", {
                          className: "text-xs text-red-600 mt-1",
                          children: n.renewalDate,
                        }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Notes",
                  }),
                  p.jsx("textarea", {
                    className: "input-field h-24",
                    placeholder:
                      "Who owns this contract? What success metric matters?",
                    name: "notes",
                    value: e.notes,
                    onChange: c,
                    maxLength: 280,
                  }),
                  p.jsxs("p", {
                    className: "text-xs text-gray-500 text-right",
                    children: [e.notes.length, "/280"],
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
                children: [
                  p.jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                      "Normalized monthly impact:",
                      " ",
                      p.jsx("span", {
                        className: "font-semibold text-navy-dark",
                        children: u,
                      }),
                    ],
                  }),
                  p.jsx("button", {
                    type: "submit",
                    className: "btn-primary w-full md:w-auto",
                    disabled: o,
                    children: o ? "Saving..." : "Save subscription",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vg() {
  var o;
  const [e, t] = k.useState(() => {
      try {
        const s = localStorage.getItem("user");
        return s ? JSON.parse(s) : null;
      } catch {
        return null;
      }
    }),
    [n, r] = k.useState(!e),
    [l, i] = k.useState(null);
  return (
    k.useEffect(() => {
      let s = !1;
      async function a() {
        var u, c;
        r(!0);
        try {
          const d = await Ae.get("/auth/me");
          s ||
            (t(((u = d.data) == null ? void 0 : u.data) ?? null),
            localStorage.setItem(
              "user",
              JSON.stringify((c = d.data) == null ? void 0 : c.data)
            ));
        } catch (d) {
          s || i(d.message || "Unable to load profile");
        } finally {
          s || r(!1);
        }
      }
      return (
        a(),
        () => {
          s = !0;
        }
      );
    }, []),
    n
      ? p.jsx("p", {
          className: "text-sm text-gray-500",
          children: "Loading profile...",
        })
      : e
      ? p.jsxs("div", {
          className: "max-w-3xl mx-auto space-y-6",
          children: [
            l &&
              p.jsx("div", {
                className: "text-sm text-red-600 bg-red-50 rounded-lg p-3",
                children: l,
              }),
            p.jsx("div", {
              className: "card",
              children: p.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  p.jsx("div", {
                    className:
                      "w-16 h-16 rounded-2xl bg-gradient-to-br from-matte-sky to-navy-dark flex items-center justify-center text-white text-2xl font-semibold",
                    children:
                      (o = e.name) == null
                        ? void 0
                        : o
                            .split(" ")
                            .map((s) => s[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase(),
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("h2", {
                        className: "text-2xl font-semibold",
                        children: e.name,
                      }),
                      p.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: e.email,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            p.jsxs("div", {
              className: "card space-y-4",
              children: [
                p.jsx("h3", {
                  className: "font-semibold text-lg",
                  children: "Workspace preferences",
                }),
                p.jsxs("div", {
                  className: "grid gap-4 md:grid-cols-2",
                  children: [
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", {
                          className:
                            "text-xs uppercase tracking-wide text-gray-500",
                          children: "Notifications",
                        }),
                        p.jsx("p", {
                          className: "text-sm text-gray-700",
                          children: "Renewal alerts + weekly report",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", {
                          className:
                            "text-xs uppercase tracking-wide text-gray-500",
                          children: "Account created",
                        }),
                        p.jsx("p", {
                          className: "text-sm text-gray-700",
                          children: new Date(
                            e.createdAt || Date.now()
                          ).toLocaleDateString(),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : p.jsx("div", {
          className: "text-gray-500",
          children: "No profile available. Sign in to see profile.",
        })
  );
}
const Wg = { email: "", password: "" };
function Qg() {
  const [e, t] = k.useState(Wg),
    [n, r] = k.useState({}),
    [l, i] = k.useState(null),
    [o, s] = k.useState(!1),
    a = An(),
    u = () => {
      const f = {};
      return (
        e.email
          ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(e.email) ||
            (f.email = "Enter a valid email address")
          : (f.email = "Email is required"),
        e.password
          ? e.password.length < 6 &&
            (f.password = "Password must be at least 6 characters")
          : (f.password = "Password is required"),
        f
      );
    },
    c = (f) => {
      t((v) => ({ ...v, [f.target.name]: f.target.value })),
        r((v) => ({ ...v, [f.target.name]: null })),
        i(null);
    };
  async function d(f) {
    var g, x, w, h;
    f.preventDefault();
    const v = u();
    if (Object.keys(v).length) {
      r(v);
      return;
    }
    s(!0);
    try {
      const m = await Ae.post("/auth/sign-in", e),
        y =
          (x = (g = m.data) == null ? void 0 : g.data) == null
            ? void 0
            : x.token,
        E =
          (h = (w = m.data) == null ? void 0 : w.data) == null
            ? void 0
            : h.user;
      y && localStorage.setItem("token", y),
        E && localStorage.setItem("user", JSON.stringify(E)),
        a("/", { replace: !0 });
    } catch (m) {
      i(m.message || "Login failed");
    } finally {
      s(!1);
    }
  }
  return p.jsx("div", {
    className: "min-h-screen flex flex-col justify-center px-4 bg-app",
    children: p.jsxs("div", {
      className: "max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center",
      children: [
        p.jsxs("div", {
          className: "space-y-4",
          children: [
            p.jsx("p", {
              className: "text-sm uppercase tracking-[0.2em] text-gray-500",
              children: "Subscription Mission Control",
            }),
            p.jsx("h1", {
              className: "text-3xl md:text-4xl font-semibold text-navy-dark",
              children:
                "Log in and get a pulse on every recurring cost in seconds.",
            }),
            p.jsxs("ul", {
              className: "space-y-2 text-gray-700 text-sm",
              children: [
                p.jsx("li", {
                  children:
                    "• Smart renewal radar keeps you ahead of auto-charges",
                }),
                p.jsx("li", {
                  children:
                    "• Beautiful reports ready for your next leadership review",
                }),
                p.jsx("li", {
                  children:
                    "• Secure by design, backed by enterprise-grade guardrails",
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "card shadow-xl",
          children: [
            p.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsx("h2", {
                      className: "text-2xl font-semibold",
                      children: "Welcome back",
                    }),
                    p.jsx("p", {
                      className: "text-sm text-gray-500",
                      children: "Sign in with your workspace credentials.",
                    }),
                  ],
                }),
                p.jsx("span", { className: "pill", children: "MVP Access" }),
              ],
            }),
            l &&
              p.jsx("div", {
                className: "text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4",
                children: l,
              }),
            p.jsxs("form", {
              onSubmit: d,
              className: "space-y-4",
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Email",
                    }),
                    p.jsx("input", {
                      className: "input-field",
                      name: "email",
                      type: "email",
                      placeholder: "you@studio.com",
                      value: e.email,
                      onChange: c,
                      "aria-invalid": !!n.email,
                    }),
                    n.email &&
                      p.jsx("p", {
                        className: "text-xs text-red-600 mt-1",
                        children: n.email,
                      }),
                  ],
                }),
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Password",
                    }),
                    p.jsx("input", {
                      type: "password",
                      className: "input-field",
                      placeholder: "••••••••",
                      name: "password",
                      value: e.password,
                      onChange: c,
                      "aria-invalid": !!n.password,
                    }),
                    n.password &&
                      p.jsx("p", {
                        className: "text-xs text-red-600 mt-1",
                        children: n.password,
                      }),
                  ],
                }),
                p.jsx("button", {
                  type: "submit",
                  className: "btn-primary w-full",
                  disabled: o,
                  children: o ? "Signing you in..." : "Sign in",
                }),
              ],
            }),
            p.jsxs("p", {
              className: "text-sm text-center text-gray-600 mt-6",
              children: [
                "Need credentials?",
                " ",
                p.jsx(Ot, {
                  to: "/register",
                  className: "text-navy-dark font-medium",
                  children: "Create an account",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Kg = { name: "", email: "", password: "" };
function qg() {
  const [e, t] = k.useState(Kg),
    [n, r] = k.useState({}),
    [l, i] = k.useState(null),
    [o, s] = k.useState(!1),
    a = An(),
    u = () => {
      const f = {};
      return (
        e.name.trim() || (f.name = "Full name is required"),
        e.email
          ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(e.email) ||
            (f.email = "Enter a valid email address")
          : (f.email = "Email is required"),
        e.password
          ? e.password.length < 6 &&
            (f.password = "Password must be at least 6 characters")
          : (f.password = "Password is required"),
        f
      );
    },
    c = (f) => {
      t((v) => ({ ...v, [f.target.name]: f.target.value })),
        r((v) => ({ ...v, [f.target.name]: null })),
        i(null);
    };
  async function d(f) {
    var g, x, w, h;
    f.preventDefault();
    const v = u();
    if (Object.keys(v).length) {
      r(v);
      return;
    }
    s(!0);
    try {
      const m = await Ae.post("/auth/sign-up", e),
        y =
          (x = (g = m.data) == null ? void 0 : g.data) == null
            ? void 0
            : x.token,
        E =
          (h = (w = m.data) == null ? void 0 : w.data) == null
            ? void 0
            : h.user;
      y && localStorage.setItem("token", y),
        E && localStorage.setItem("user", JSON.stringify(E)),
        a("/", { replace: !0 });
    } catch (m) {
      i(m.message || "Registration failed");
    } finally {
      s(!1);
    }
  }
  return p.jsx("div", {
    className: "min-h-screen flex flex-col justify-center px-4 bg-app",
    children: p.jsxs("div", {
      className: "max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center",
      children: [
        p.jsxs("div", {
          className: "space-y-4 order-2 md:order-1",
          children: [
            p.jsx("p", {
              className: "text-sm uppercase tracking-[0.2em] text-gray-500",
              children: "Build a smarter subscription playbook",
            }),
            p.jsx("h1", {
              className: "text-3xl md:text-4xl font-semibold text-navy-dark",
              children:
                "Launch your Subscription HQ workspace in under a minute.",
            }),
            p.jsxs("div", {
              className: "grid gap-3 text-sm text-gray-700",
              children: [
                p.jsx("div", {
                  className: "pill w-max",
                  children: "Early Access",
                }),
                p.jsx("p", {
                  children:
                    "Invite teammates, centralize billing, and end renewal chaos.",
                }),
                p.jsx("p", {
                  children:
                    "Zero-config email alerts, AI insights, and live workflows included in this MVP build.",
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "card order-1 md:order-2 shadow-xl",
          children: [
            p.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsx("h2", {
                      className: "text-2xl font-semibold",
                      children: "Create account",
                    }),
                    p.jsx("p", {
                      className: "text-sm text-gray-500",
                      children:
                        "Join teams already tracking millions in recurring spend.",
                    }),
                  ],
                }),
                p.jsx("span", {
                  className: "text-xs font-semibold uppercase text-matte-sky",
                  children: "Secure by design",
                }),
              ],
            }),
            l &&
              p.jsx("div", {
                className: "text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4",
                children: l,
              }),
            p.jsxs("form", {
              onSubmit: d,
              className: "space-y-4",
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Full name",
                    }),
                    p.jsx("input", {
                      className: "input-field",
                      placeholder: "Alex Rivera",
                      name: "name",
                      value: e.name,
                      onChange: c,
                      "aria-invalid": !!n.name,
                    }),
                    n.name &&
                      p.jsx("p", {
                        className: "text-xs text-red-600 mt-1",
                        children: n.name,
                      }),
                  ],
                }),
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Work email",
                    }),
                    p.jsx("input", {
                      className: "input-field",
                      placeholder: "you@studio.com",
                      name: "email",
                      type: "email",
                      value: e.email,
                      onChange: c,
                      "aria-invalid": !!n.email,
                    }),
                    n.email &&
                      p.jsx("p", {
                        className: "text-xs text-red-600 mt-1",
                        children: n.email,
                      }),
                  ],
                }),
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Password",
                    }),
                    p.jsx("input", {
                      type: "password",
                      className: "input-field",
                      placeholder: "Min. 6 characters",
                      name: "password",
                      value: e.password,
                      onChange: c,
                      "aria-invalid": !!n.password,
                    }),
                    n.password &&
                      p.jsx("p", {
                        className: "text-xs text-red-600 mt-1",
                        children: n.password,
                      }),
                  ],
                }),
                p.jsx("button", {
                  type: "submit",
                  className: "btn-primary w-full",
                  disabled: o,
                  children: o ? "Creating workspace..." : "Create account",
                }),
              ],
            }),
            p.jsxs("p", {
              className: "text-sm text-center text-gray-600 mt-6",
              children: [
                "Already onboard?",
                " ",
                p.jsx(Ot, {
                  to: "/login",
                  className: "text-navy-dark font-medium",
                  children: "Sign in",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Jg = ({ children: e }) =>
    localStorage.getItem("token")
      ? e
      : p.jsx($s, { to: "/login", replace: !0 }),
  Pu = ({ children: e }) =>
    localStorage.getItem("token") ? p.jsx($s, { to: "/", replace: !0 }) : e;
function Xg() {
  return p.jsxs(qh, {
    children: [
      p.jsxs(tt, {
        element: p.jsx(Jg, { children: p.jsx(Fg, {}) }),
        children: [
          p.jsx(tt, { index: !0, element: p.jsx(Ig, {}) }),
          p.jsx(tt, { path: "subscriptions", element: p.jsx(Ag, {}) }),
          p.jsx(tt, { path: "subscriptions/new", element: p.jsx(Hg, {}) }),
          p.jsx(tt, { path: "profile", element: p.jsx(Vg, {}) }),
        ],
      }),
      p.jsx(tt, {
        path: "/login",
        element: p.jsx(Pu, { children: p.jsx(Qg, {}) }),
      }),
      p.jsx(tt, {
        path: "/register",
        element: p.jsx(Pu, { children: p.jsx(qg, {}) }),
      }),
      p.jsx(tt, { path: "*", element: p.jsx($s, { to: "/", replace: !0 }) }),
    ],
  });
}
Wf(document.getElementById("root")).render(
  p.jsx(Bu.StrictMode, { children: p.jsx(ey, { children: p.jsx(Xg, {}) }) })
);
