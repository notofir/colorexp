"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var s = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) {
      return e[t];
    }.bind(null, s));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "07d6": function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  1: function (e, t) {},
  1212: function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this,
              n = c();
          t.next = function () {
            var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
            return t.s0 = t.s1, t.s1 = t.s2, t.s2 = e - (t.c = 0 | e);
          }, t.c = 1, t.s0 = n(" "), t.s1 = n(" "), t.s2 = n(" "), t.s0 -= n(e), t.s0 < 0 && (t.s0 += 1), t.s1 -= n(e), t.s1 < 0 && (t.s1 += 1), t.s2 -= n(e), t.s2 < 0 && (t.s2 += 1), n = null;
        }

        function a(e, t) {
          return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t;
        }

        function l(e, t) {
          var n = new r(e),
              i = t && t.state,
              s = n.next;
          return s.int32 = function () {
            return 4294967296 * n.next() | 0;
          }, s.double = function () {
            return s() + 11102230246251565e-32 * (2097152 * s() | 0);
          }, s.quick = s, i && ("object" == typeof i && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        function c() {
          var e = 4022871197,
              t = function (t) {
            t = String(t);

            for (var n = 0; n < t.length; n++) {
              e += t.charCodeAt(n);
              var i = .02519603282416938 * e;
              e = i >>> 0, i -= e, i *= e, e = i >>> 0, i -= e, e += 4294967296 * i;
            }

            return 2.3283064365386963e-10 * (e >>> 0);
          };

          return t;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.alea = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  "24fb": function (e, t, n) {
    "use strict";

    function i(e, t) {
      var n = e[1] || "",
          i = e[3];
      if (!i) return n;

      if (t && "function" === typeof btoa) {
        var o = s(i),
            r = i.sources.map(function (e) {
          return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */");
        });
        return [n].concat(r).concat([o]).join("\n");
      }

      return [n].join("\n");
    }

    function s(e) {
      var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
          n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
      return "/*# ".concat(n, " */");
    }

    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = i(t, e);
          return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
        }).join("");
      }, t.i = function (e, n, i) {
        "string" === typeof e && (e = [[null, e, ""]]);
        var s = {};
        if (i) for (var o = 0; o < this.length; o++) {
          var r = this[o][0];
          null != r && (s[r] = !0);
        }

        for (var a = 0; a < e.length; a++) {
          var l = [].concat(e[a]);
          i && s[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
        }
      }, t;
    };
  },
  "3c35": function (e, t) {
    (function (t) {
      e.exports = t;
    }).call(this, {});
  },
  "3f7c": function (e, t, n) {
    var i = n("24fb");
    t = i(!1), t.push([e.i, ".instruction[data-v-42bbfbec]{max-width:95%;text-align:center;margin:auto}", ""]), e.exports = t;
  },
  "499e": function (e, t, n) {
    "use strict";

    function i(e, t) {
      for (var n = [], i = {}, s = 0; s < t.length; s++) {
        var o = t[s],
            r = o[0],
            a = o[1],
            l = o[2],
            c = o[3],
            u = {
          id: e + ":" + s,
          css: a,
          media: l,
          sourceMap: c
        };
        i[r] ? i[r].parts.push(u) : n.push(i[r] = {
          id: r,
          parts: [u]
        });
      }

      return n;
    }

    n.r(t), n.d(t, "default", function () {
      return p;
    });
    var s = "undefined" !== typeof document;
    if ("undefined" !== typeof DEBUG && DEBUG && !s) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

    var o = {},
        r = s && (document.head || document.getElementsByTagName("head")[0]),
        a = null,
        l = 0,
        c = !1,
        u = function () {},
        d = null,
        h = "data-vue-ssr-id",
        f = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function p(e, t, n, s) {
      c = n, d = s || {};
      var r = i(e, t);
      return m(r), function (t) {
        for (var n = [], s = 0; s < r.length; s++) {
          var a = r[s],
              l = o[a.id];
          l.refs--, n.push(l);
        }

        t ? (r = i(e, t), m(r)) : r = [];

        for (s = 0; s < n.length; s++) {
          l = n[s];

          if (0 === l.refs) {
            for (var c = 0; c < l.parts.length; c++) l.parts[c]();

            delete o[l.id];
          }
        }
      };
    }

    function m(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t],
            i = o[n.id];

        if (i) {
          i.refs++;

          for (var s = 0; s < i.parts.length; s++) i.parts[s](n.parts[s]);

          for (; s < n.parts.length; s++) i.parts.push(b(n.parts[s]));

          i.parts.length > n.parts.length && (i.parts.length = n.parts.length);
        } else {
          var r = [];

          for (s = 0; s < n.parts.length; s++) r.push(b(n.parts[s]));

          o[n.id] = {
            id: n.id,
            refs: 1,
            parts: r
          };
        }
      }
    }

    function g() {
      var e = document.createElement("style");
      return e.type = "text/css", r.appendChild(e), e;
    }

    function b(e) {
      var t,
          n,
          i = document.querySelector("style[" + h + '~="' + e.id + '"]');

      if (i) {
        if (c) return u;
        i.parentNode.removeChild(i);
      }

      if (f) {
        var s = l++;
        i = a || (a = g()), t = _.bind(null, i, s, !1), n = _.bind(null, i, s, !0);
      } else i = g(), t = y.bind(null, i), n = function () {
        i.parentNode.removeChild(i);
      };

      return t(e), function (i) {
        if (i) {
          if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) return;
          t(e = i);
        } else n();
      };
    }

    var v = function () {
      var e = [];
      return function (t, n) {
        return e[t] = n, e.filter(Boolean).join("\n");
      };
    }();

    function _(e, t, n, i) {
      var s = n ? "" : i.css;
      if (e.styleSheet) e.styleSheet.cssText = v(t, s);else {
        var o = document.createTextNode(s),
            r = e.childNodes;
        r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
      }
    }

    function y(e, t) {
      var n = t.css,
          i = t.media,
          s = t.sourceMap;
      if (i && e.setAttribute("media", i), d.ssrId && e.setAttribute(h, t.id), s && (n += "\n/*# sourceURL=" + s.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
        while (e.firstChild) e.removeChild(e.firstChild);

        e.appendChild(document.createTextNode(n));
      }
    }
  },
  "4a58": function (e, t, n) {
    var i = n("24fb");
    t = i(!1), t.push([e.i, ".square[data-v-7859b75f]{height:55px;width:55px}", ""]), e.exports = t;
  },
  "56d7": function (e, t, n) {
    "use strict";

    n.r(t);
    var i = {};
    n.r(i), n.d(i, "top", function () {
      return Ua;
    }), n.d(i, "bottom", function () {
      return Va;
    }), n.d(i, "right", function () {
      return Ka;
    }), n.d(i, "left", function () {
      return Ga;
    }), n.d(i, "auto", function () {
      return Xa;
    }), n.d(i, "basePlacements", function () {
      return Ya;
    }), n.d(i, "start", function () {
      return Qa;
    }), n.d(i, "end", function () {
      return Ja;
    }), n.d(i, "clippingParents", function () {
      return Za;
    }), n.d(i, "viewport", function () {
      return el;
    }), n.d(i, "popper", function () {
      return tl;
    }), n.d(i, "reference", function () {
      return nl;
    }), n.d(i, "variationPlacements", function () {
      return il;
    }), n.d(i, "placements", function () {
      return sl;
    }), n.d(i, "beforeRead", function () {
      return ol;
    }), n.d(i, "read", function () {
      return rl;
    }), n.d(i, "afterRead", function () {
      return al;
    }), n.d(i, "beforeMain", function () {
      return ll;
    }), n.d(i, "main", function () {
      return cl;
    }), n.d(i, "afterMain", function () {
      return ul;
    }), n.d(i, "beforeWrite", function () {
      return dl;
    }), n.d(i, "write", function () {
      return hl;
    }), n.d(i, "afterWrite", function () {
      return fl;
    }), n.d(i, "modifierPhases", function () {
      return pl;
    }), n.d(i, "applyStyles", function () {
      return Ol;
    }), n.d(i, "arrow", function () {
      return Ul;
    }), n.d(i, "computeStyles", function () {
      return Ql;
    }), n.d(i, "eventListeners", function () {
      return ec;
    }), n.d(i, "flip", function () {
      return Oc;
    }), n.d(i, "hide", function () {
      return kc;
    }), n.d(i, "offset", function () {
      return Sc;
    }), n.d(i, "popperOffsets", function () {
      return Ic;
    }), n.d(i, "preventOverflow", function () {
      return Pc;
    }), n.d(i, "popperGenerator", function () {
      return Uc;
    }), n.d(i, "detectOverflow", function () {
      return vc;
    }), n.d(i, "createPopperBase", function () {
      return Vc;
    }), n.d(i, "createPopper", function () {
      return Gc;
    }), n.d(i, "createPopperLite", function () {
      return Yc;
    });
    var s = n("9ff4");
    let o;
    const r = [];

    class a {
      constructor(e = !1) {
        this.active = !0, this.effects = [], this.cleanups = [], !e && o && (this.parent = o, this.index = (o.scopes || (o.scopes = [])).push(this) - 1);
      }

      run(e) {
        if (this.active) try {
          return this.on(), e();
        } finally {
          this.off();
        } else 0;
      }

      on() {
        this.active && (r.push(this), o = this);
      }

      off() {
        this.active && (r.pop(), o = r[r.length - 1]);
      }

      stop(e) {
        if (this.active) {
          if (this.effects.forEach(e => e.stop()), this.cleanups.forEach(e => e()), this.scopes && this.scopes.forEach(e => e.stop(!0)), this.parent && !e) {
            const e = this.parent.scopes.pop();
            e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
          }

          this.active = !1;
        }
      }

    }

    function l(e, t) {
      t = t || o, t && t.active && t.effects.push(e);
    }

    const c = e => {
      const t = new Set(e);
      return t.w = 0, t.n = 0, t;
    },
          u = e => (e.w & g) > 0,
          d = e => (e.n & g) > 0,
          h = ({
      deps: e
    }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= g;
    },
          f = e => {
      const {
        deps: t
      } = e;

      if (t.length) {
        let n = 0;

        for (let i = 0; i < t.length; i++) {
          const s = t[i];
          u(s) && !d(s) ? s.delete(e) : t[n++] = s, s.w &= ~g, s.n &= ~g;
        }

        t.length = n;
      }
    },
          p = new WeakMap();

    let m = 0,
        g = 1;
    const b = 30,
          v = [];

    let _;

    const y = Symbol(""),
          w = Symbol("");

    class O {
      constructor(e, t = null, n) {
        this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], l(this, n);
      }

      run() {
        if (!this.active) return this.fn();
        if (!v.includes(this)) try {
          return v.push(_ = this), j(), g = 1 << ++m, m <= b ? h(this) : x(this), this.fn();
        } finally {
          m <= b && f(this), g = 1 << --m, T(), v.pop();
          const e = v.length;
          _ = e > 0 ? v[e - 1] : void 0;
        }
      }

      stop() {
        this.active && (x(this), this.onStop && this.onStop(), this.active = !1);
      }

    }

    function x(e) {
      const {
        deps: t
      } = e;

      if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);

        t.length = 0;
      }
    }

    let C = !0;
    const E = [];

    function k() {
      E.push(C), C = !1;
    }

    function j() {
      E.push(C), C = !0;
    }

    function T() {
      const e = E.pop();
      C = void 0 === e || e;
    }

    function S(e, t, n) {
      if (!A()) return;
      let i = p.get(e);
      i || p.set(e, i = new Map());
      let s = i.get(n);
      s || i.set(n, s = c());
      const o = void 0;
      I(s, o);
    }

    function A() {
      return C && void 0 !== _;
    }

    function I(e, t) {
      let n = !1;
      m <= b ? d(e) || (e.n |= g, n = !u(e)) : n = !e.has(_), n && (e.add(_), _.deps.push(e));
    }

    function L(e, t, n, i, o, r) {
      const a = p.get(e);
      if (!a) return;
      let l = [];
      if ("clear" === t) l = [...a.values()];else if ("length" === n && Object(s["o"])(e)) a.forEach((e, t) => {
        ("length" === t || t >= i) && l.push(e);
      });else switch (void 0 !== n && l.push(a.get(n)), t) {
        case "add":
          Object(s["o"])(e) ? Object(s["s"])(n) && l.push(a.get("length")) : (l.push(a.get(y)), Object(s["t"])(e) && l.push(a.get(w)));
          break;

        case "delete":
          Object(s["o"])(e) || (l.push(a.get(y)), Object(s["t"])(e) && l.push(a.get(w)));
          break;

        case "set":
          Object(s["t"])(e) && l.push(a.get(y));
          break;
      }
      if (1 === l.length) l[0] && D(l[0]);else {
        const e = [];

        for (const t of l) t && e.push(...t);

        D(c(e));
      }
    }

    function D(e, t) {
      for (const n of Object(s["o"])(e) ? e : [...e]) (n !== _ || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
    }

    const P = Object(s["H"])("__proto__,__v_isRef,__isVue"),
          M = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(s["E"])),
          N = z(),
          H = z(!1, !0),
          R = z(!0),
          B = F();

    function F() {
      const e = {};
      return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...e) {
          const n = Ie(this);

          for (let t = 0, s = this.length; t < s; t++) S(n, "get", t + "");

          const i = n[t](...e);
          return -1 === i || !1 === i ? n[t](...e.map(Ie)) : i;
        };
      }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...e) {
          k();
          const n = Ie(this)[t].apply(this, e);
          return T(), n;
        };
      }), e;
    }

    function z(e = !1, t = !1) {
      return function (n, i, o) {
        if ("__v_isReactive" === i) return !e;
        if ("__v_isReadonly" === i) return e;
        if ("__v_raw" === i && o === (e ? t ? we : ye : t ? _e : ve).get(n)) return n;
        const r = Object(s["o"])(n);
        if (!e && r && Object(s["k"])(B, i)) return Reflect.get(B, i, o);
        const a = Reflect.get(n, i, o);
        if (Object(s["E"])(i) ? M.has(i) : P(i)) return a;
        if (e || S(n, "get", i), t) return a;

        if (He(a)) {
          const e = !r || !Object(s["s"])(i);
          return e ? a.value : a;
        }

        return Object(s["v"])(a) ? e ? ke(a) : Ce(a) : a;
      };
    }

    const $ = q(),
          W = q(!0);

    function q(e = !1) {
      return function (t, n, i, o) {
        let r = t[n];
        if (!e && (i = Ie(i), r = Ie(r), !Object(s["o"])(t) && He(r) && !He(i))) return r.value = i, !0;
        const a = Object(s["o"])(t) && Object(s["s"])(n) ? Number(n) < t.length : Object(s["k"])(t, n),
              l = Reflect.set(t, n, i, o);
        return t === Ie(o) && (a ? Object(s["j"])(i, r) && L(t, "set", n, i, r) : L(t, "add", n, i)), l;
      };
    }

    function U(e, t) {
      const n = Object(s["k"])(e, t),
            i = e[t],
            o = Reflect.deleteProperty(e, t);
      return o && n && L(e, "delete", t, void 0, i), o;
    }

    function V(e, t) {
      const n = Reflect.has(e, t);
      return Object(s["E"])(t) && M.has(t) || S(e, "has", t), n;
    }

    function K(e) {
      return S(e, "iterate", Object(s["o"])(e) ? "length" : y), Reflect.ownKeys(e);
    }

    const G = {
      get: N,
      set: $,
      deleteProperty: U,
      has: V,
      ownKeys: K
    },
          X = {
      get: R,

      set(e, t) {
        return !0;
      },

      deleteProperty(e, t) {
        return !0;
      }

    },
          Y = Object(s["h"])({}, G, {
      get: H,
      set: W
    }),
          Q = e => e,
          J = e => Reflect.getPrototypeOf(e);

    function Z(e, t, n = !1, i = !1) {
      e = e["__v_raw"];
      const s = Ie(e),
            o = Ie(t);
      t !== o && !n && S(s, "get", t), !n && S(s, "get", o);
      const {
        has: r
      } = J(s),
            a = i ? Q : n ? Pe : De;
      return r.call(s, t) ? a(e.get(t)) : r.call(s, o) ? a(e.get(o)) : void (e !== s && e.get(t));
    }

    function ee(e, t = !1) {
      const n = this["__v_raw"],
            i = Ie(n),
            s = Ie(e);
      return e !== s && !t && S(i, "has", e), !t && S(i, "has", s), e === s ? n.has(e) : n.has(e) || n.has(s);
    }

    function te(e, t = !1) {
      return e = e["__v_raw"], !t && S(Ie(e), "iterate", y), Reflect.get(e, "size", e);
    }

    function ne(e) {
      e = Ie(e);
      const t = Ie(this),
            n = J(t),
            i = n.has.call(t, e);
      return i || (t.add(e), L(t, "add", e, e)), this;
    }

    function ie(e, t) {
      t = Ie(t);
      const n = Ie(this),
            {
        has: i,
        get: o
      } = J(n);
      let r = i.call(n, e);
      r || (e = Ie(e), r = i.call(n, e));
      const a = o.call(n, e);
      return n.set(e, t), r ? Object(s["j"])(t, a) && L(n, "set", e, t, a) : L(n, "add", e, t), this;
    }

    function se(e) {
      const t = Ie(this),
            {
        has: n,
        get: i
      } = J(t);
      let s = n.call(t, e);
      s || (e = Ie(e), s = n.call(t, e));
      const o = i ? i.call(t, e) : void 0,
            r = t.delete(e);
      return s && L(t, "delete", e, void 0, o), r;
    }

    function oe() {
      const e = Ie(this),
            t = 0 !== e.size,
            n = void 0,
            i = e.clear();
      return t && L(e, "clear", void 0, void 0, n), i;
    }

    function re(e, t) {
      return function (n, i) {
        const s = this,
              o = s["__v_raw"],
              r = Ie(o),
              a = t ? Q : e ? Pe : De;
        return !e && S(r, "iterate", y), o.forEach((e, t) => n.call(i, a(e), a(t), s));
      };
    }

    function ae(e, t, n) {
      return function (...i) {
        const o = this["__v_raw"],
              r = Ie(o),
              a = Object(s["t"])(r),
              l = "entries" === e || e === Symbol.iterator && a,
              c = "keys" === e && a,
              u = o[e](...i),
              d = n ? Q : t ? Pe : De;
        return !t && S(r, "iterate", c ? w : y), {
          next() {
            const {
              value: e,
              done: t
            } = u.next();
            return t ? {
              value: e,
              done: t
            } : {
              value: l ? [d(e[0]), d(e[1])] : d(e),
              done: t
            };
          },

          [Symbol.iterator]() {
            return this;
          }

        };
      };
    }

    function le(e) {
      return function (...t) {
        return "delete" !== e && this;
      };
    }

    function ce() {
      const e = {
        get(e) {
          return Z(this, e);
        },

        get size() {
          return te(this);
        },

        has: ee,
        add: ne,
        set: ie,
        delete: se,
        clear: oe,
        forEach: re(!1, !1)
      },
            t = {
        get(e) {
          return Z(this, e, !1, !0);
        },

        get size() {
          return te(this);
        },

        has: ee,
        add: ne,
        set: ie,
        delete: se,
        clear: oe,
        forEach: re(!1, !0)
      },
            n = {
        get(e) {
          return Z(this, e, !0);
        },

        get size() {
          return te(this, !0);
        },

        has(e) {
          return ee.call(this, e, !0);
        },

        add: le("add"),
        set: le("set"),
        delete: le("delete"),
        clear: le("clear"),
        forEach: re(!0, !1)
      },
            i = {
        get(e) {
          return Z(this, e, !0, !0);
        },

        get size() {
          return te(this, !0);
        },

        has(e) {
          return ee.call(this, e, !0);
        },

        add: le("add"),
        set: le("set"),
        delete: le("delete"),
        clear: le("clear"),
        forEach: re(!0, !0)
      },
            s = ["keys", "values", "entries", Symbol.iterator];
      return s.forEach(s => {
        e[s] = ae(s, !1, !1), n[s] = ae(s, !0, !1), t[s] = ae(s, !1, !0), i[s] = ae(s, !0, !0);
      }), [e, n, t, i];
    }

    const [ue, de, he, fe] = ce();

    function pe(e, t) {
      const n = t ? e ? fe : he : e ? de : ue;
      return (t, i, o) => "__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? t : Reflect.get(Object(s["k"])(n, i) && i in t ? n : t, i, o);
    }

    const me = {
      get: pe(!1, !1)
    },
          ge = {
      get: pe(!1, !0)
    },
          be = {
      get: pe(!0, !1)
    };

    const ve = new WeakMap(),
          _e = new WeakMap(),
          ye = new WeakMap(),
          we = new WeakMap();

    function Oe(e) {
      switch (e) {
        case "Object":
        case "Array":
          return 1;

        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;

        default:
          return 0;
      }
    }

    function xe(e) {
      return e["__v_skip"] || !Object.isExtensible(e) ? 0 : Oe(Object(s["O"])(e));
    }

    function Ce(e) {
      return e && e["__v_isReadonly"] ? e : je(e, !1, G, me, ve);
    }

    function Ee(e) {
      return je(e, !1, Y, ge, _e);
    }

    function ke(e) {
      return je(e, !0, X, be, ye);
    }

    function je(e, t, n, i, o) {
      if (!Object(s["v"])(e)) return e;
      if (e["__v_raw"] && (!t || !e["__v_isReactive"])) return e;
      const r = o.get(e);
      if (r) return r;
      const a = xe(e);
      if (0 === a) return e;
      const l = new Proxy(e, 2 === a ? i : n);
      return o.set(e, l), l;
    }

    function Te(e) {
      return Se(e) ? Te(e["__v_raw"]) : !(!e || !e["__v_isReactive"]);
    }

    function Se(e) {
      return !(!e || !e["__v_isReadonly"]);
    }

    function Ae(e) {
      return Te(e) || Se(e);
    }

    function Ie(e) {
      const t = e && e["__v_raw"];
      return t ? Ie(t) : e;
    }

    function Le(e) {
      return Object(s["g"])(e, "__v_skip", !0), e;
    }

    const De = e => Object(s["v"])(e) ? Ce(e) : e,
          Pe = e => Object(s["v"])(e) ? ke(e) : e;

    function Me(e) {
      A() && (e = Ie(e), e.dep || (e.dep = c()), I(e.dep));
    }

    function Ne(e, t) {
      e = Ie(e), e.dep && D(e.dep);
    }

    function He(e) {
      return Boolean(e && !0 === e.__v_isRef);
    }

    function Re(e) {
      return He(e) ? e.value : e;
    }

    const Be = {
      get: (e, t, n) => Re(Reflect.get(e, t, n)),
      set: (e, t, n, i) => {
        const s = e[t];
        return He(s) && !He(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
      }
    };

    function Fe(e) {
      return Te(e) ? e : new Proxy(e, Be);
    }

    class ze {
      constructor(e, t, n) {
        this._setter = t, this.dep = void 0, this._dirty = !0, this.__v_isRef = !0, this.effect = new O(e, () => {
          this._dirty || (this._dirty = !0, Ne(this));
        }), this["__v_isReadonly"] = n;
      }

      get value() {
        const e = Ie(this);
        return Me(e), e._dirty && (e._dirty = !1, e._value = e.effect.run()), e._value;
      }

      set value(e) {
        this._setter(e);
      }

    }

    function $e(e, t) {
      let n, i;
      const o = Object(s["p"])(e);
      o ? (n = e, i = s["d"]) : (n = e.get, i = e.set);
      const r = new ze(n, i, o || !i);
      return r;
    }

    Promise.resolve();
    new Set();
    new Map();

    function We(e, t, ...n) {
      const i = e.vnode.props || s["b"];
      let o = n;
      const r = t.startsWith("update:"),
            a = r && t.slice(7);

      if (a && a in i) {
        const e = ("modelValue" === a ? "model" : a) + "Modifiers",
              {
          number: t,
          trim: r
        } = i[e] || s["b"];
        r ? o = n.map(e => e.trim()) : t && (o = n.map(s["N"]));
      }

      let l;
      let c = i[l = Object(s["M"])(t)] || i[l = Object(s["M"])(Object(s["e"])(t))];
      !c && r && (c = i[l = Object(s["M"])(Object(s["l"])(t))]), c && Mi(c, e, 6, o);
      const u = i[l + "Once"];

      if (u) {
        if (e.emitted) {
          if (e.emitted[l]) return;
        } else e.emitted = {};

        e.emitted[l] = !0, Mi(u, e, 6, o);
      }
    }

    function qe(e, t, n = !1) {
      const i = t.emitsCache,
            o = i.get(e);
      if (void 0 !== o) return o;
      const r = e.emits;
      let a = {},
          l = !1;

      if (!Object(s["p"])(e)) {
        const i = e => {
          const n = qe(e, t, !0);
          n && (l = !0, Object(s["h"])(a, n));
        };

        !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
      }

      return r || l ? (Object(s["o"])(r) ? r.forEach(e => a[e] = null) : Object(s["h"])(a, r), i.set(e, a), a) : (i.set(e, null), null);
    }

    function Ue(e, t) {
      return !(!e || !Object(s["w"])(t)) && (t = t.slice(2).replace(/Once$/, ""), Object(s["k"])(e, t[0].toLowerCase() + t.slice(1)) || Object(s["k"])(e, Object(s["l"])(t)) || Object(s["k"])(e, t));
    }

    let Ve = null,
        Ke = null;

    function Ge(e) {
      const t = Ve;
      return Ve = e, Ke = e && e.type.__scopeId || null, t;
    }

    function Xe(e, t = Ve, n) {
      if (!t) return e;
      if (e._n) return e;

      const i = (...n) => {
        i._d && Wn(-1);
        const s = Ge(t),
              o = e(...n);
        return Ge(s), i._d && Wn(1), o;
      };

      return i._n = !0, i._c = !0, i._d = !0, i;
    }

    function Ye(e) {
      const {
        type: t,
        vnode: n,
        proxy: i,
        withProxy: o,
        props: r,
        propsOptions: [a],
        slots: l,
        attrs: c,
        emit: u,
        render: d,
        renderCache: h,
        data: f,
        setupState: p,
        ctx: m,
        inheritAttrs: g
      } = e;
      let b, v;

      const _ = Ge(e);

      try {
        if (4 & n.shapeFlag) {
          const e = o || i;
          b = ri(d.call(e, e, h, r, p, f, m)), v = c;
        } else {
          const e = t;
          0, b = ri(e.length > 1 ? e(r, {
            attrs: c,
            slots: l,
            emit: u
          }) : e(r, null)), v = t.props ? c : Qe(c);
        }
      } catch (w) {
        Rn.length = 0, Ni(w, e, 1), b = Zn(Nn);
      }

      let y = b;

      if (v && !1 !== g) {
        const e = Object.keys(v),
              {
          shapeFlag: t
        } = y;
        e.length && 7 & t && (a && e.some(s["u"]) && (v = Je(v, a)), y = ni(y, v));
      }

      return n.dirs && (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), b = y, Ge(_), b;
    }

    const Qe = e => {
      let t;

      for (const n in e) ("class" === n || "style" === n || Object(s["w"])(n)) && ((t || (t = {}))[n] = e[n]);

      return t;
    },
          Je = (e, t) => {
      const n = {};

      for (const i in e) Object(s["u"])(i) && i.slice(9) in t || (n[i] = e[i]);

      return n;
    };

    function Ze(e, t, n) {
      const {
        props: i,
        children: s,
        component: o
      } = e,
            {
        props: r,
        children: a,
        patchFlag: l
      } = t,
            c = o.emitsOptions;
      if (t.dirs || t.transition) return !0;
      if (!(n && l >= 0)) return !(!s && !a || a && a.$stable) || i !== r && (i ? !r || et(i, r, c) : !!r);
      if (1024 & l) return !0;
      if (16 & l) return i ? et(i, r, c) : !!r;

      if (8 & l) {
        const e = t.dynamicProps;

        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (r[n] !== i[n] && !Ue(c, n)) return !0;
        }
      }

      return !1;
    }

    function et(e, t, n) {
      const i = Object.keys(t);
      if (i.length !== Object.keys(e).length) return !0;

      for (let s = 0; s < i.length; s++) {
        const o = i[s];
        if (t[o] !== e[o] && !Ue(n, o)) return !0;
      }

      return !1;
    }

    function tt({
      vnode: e,
      parent: t
    }, n) {
      while (t && t.subTree === e) (e = t.vnode).el = n, t = t.parent;
    }

    const nt = e => e.__isSuspense;

    function it(e, t) {
      t && t.pendingBranch ? Object(s["o"])(e) ? t.effects.push(...e) : t.effects.push(e) : ss(e);
    }

    function st(e, t) {
      if (bi) {
        let n = bi.provides;
        const i = bi.parent && bi.parent.provides;
        i === n && (n = bi.provides = Object.create(i)), n[e] = t;
      } else 0;
    }

    function ot(e, t, n = !1) {
      const i = bi || Ve;

      if (i) {
        const o = null == i.parent ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && Object(s["p"])(t) ? t.call(i.proxy) : t;
      } else 0;
    }

    function rt() {
      const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map()
      };
      return Tt(() => {
        e.isMounted = !0;
      }), It(() => {
        e.isUnmounting = !0;
      }), e;
    }

    const at = [Function, Array],
          lt = {
      name: "BaseTransition",
      props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: at,
        onEnter: at,
        onAfterEnter: at,
        onEnterCancelled: at,
        onBeforeLeave: at,
        onLeave: at,
        onAfterLeave: at,
        onLeaveCancelled: at,
        onBeforeAppear: at,
        onAppear: at,
        onAfterAppear: at,
        onAppearCancelled: at
      },

      setup(e, {
        slots: t
      }) {
        const n = vi(),
              i = rt();
        let s;
        return () => {
          const o = t.default && mt(t.default(), !0);
          if (!o || !o.length) return;
          const r = Ie(e),
                {
            mode: a
          } = r;
          const l = o[0];
          if (i.isLeaving) return ht(l);
          const c = ft(l);
          if (!c) return ht(l);
          const u = dt(c, r, i, n);
          pt(c, u);
          const d = n.subTree,
                h = d && ft(d);
          let f = !1;
          const {
            getTransitionKey: p
          } = c.type;

          if (p) {
            const e = p();
            void 0 === s ? s = e : e !== s && (s = e, f = !0);
          }

          if (h && h.type !== Nn && (!Gn(c, h) || f)) {
            const e = dt(h, r, i, n);
            if (pt(h, e), "out-in" === a) return i.isLeaving = !0, e.afterLeave = () => {
              i.isLeaving = !1, n.update();
            }, ht(l);
            "in-out" === a && c.type !== Nn && (e.delayLeave = (e, t, n) => {
              const s = ut(i, h);
              s[String(h.key)] = h, e._leaveCb = () => {
                t(), e._leaveCb = void 0, delete u.delayedLeave;
              }, u.delayedLeave = n;
            });
          }

          return l;
        };
      }

    },
          ct = lt;

    function ut(e, t) {
      const {
        leavingVNodes: n
      } = e;
      let i = n.get(t.type);
      return i || (i = Object.create(null), n.set(t.type, i)), i;
    }

    function dt(e, t, n, i) {
      const {
        appear: s,
        mode: o,
        persisted: r = !1,
        onBeforeEnter: a,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: f,
        onLeaveCancelled: p,
        onBeforeAppear: m,
        onAppear: g,
        onAfterAppear: b,
        onAppearCancelled: v
      } = t,
            _ = String(e.key),
            y = ut(n, e),
            w = (e, t) => {
        e && Mi(e, i, 9, t);
      },
            O = {
        mode: o,
        persisted: r,

        beforeEnter(t) {
          let i = a;

          if (!n.isMounted) {
            if (!s) return;
            i = m || a;
          }

          t._leaveCb && t._leaveCb(!0);
          const o = y[_];
          o && Gn(e, o) && o.el._leaveCb && o.el._leaveCb(), w(i, [t]);
        },

        enter(e) {
          let t = l,
              i = c,
              o = u;

          if (!n.isMounted) {
            if (!s) return;
            t = g || l, i = b || c, o = v || u;
          }

          let r = !1;

          const a = e._enterCb = t => {
            r || (r = !0, w(t ? o : i, [e]), O.delayedLeave && O.delayedLeave(), e._enterCb = void 0);
          };

          t ? (t(e, a), t.length <= 1 && a()) : a();
        },

        leave(t, i) {
          const s = String(e.key);
          if (t._enterCb && t._enterCb(!0), n.isUnmounting) return i();
          w(d, [t]);
          let o = !1;

          const r = t._leaveCb = n => {
            o || (o = !0, i(), w(n ? p : f, [t]), t._leaveCb = void 0, y[s] === e && delete y[s]);
          };

          y[s] = e, h ? (h(t, r), h.length <= 1 && r()) : r();
        },

        clone(e) {
          return dt(e, t, n, i);
        }

      };

      return O;
    }

    function ht(e) {
      if (bt(e)) return e = ni(e), e.children = null, e;
    }

    function ft(e) {
      return bt(e) ? e.children ? e.children[0] : void 0 : e;
    }

    function pt(e, t) {
      6 & e.shapeFlag && e.component ? pt(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
    }

    function mt(e, t = !1) {
      let n = [],
          i = 0;

      for (let s = 0; s < e.length; s++) {
        const o = e[s];
        o.type === Pn ? (128 & o.patchFlag && i++, n = n.concat(mt(o.children, t))) : (t || o.type !== Nn) && n.push(o);
      }

      if (i > 1) for (let s = 0; s < n.length; s++) n[s].patchFlag = -2;
      return n;
    }

    const gt = e => !!e.type.__asyncLoader;

    const bt = e => e.type.__isKeepAlive;

    RegExp, RegExp;

    function vt(e, t) {
      return Object(s["o"])(e) ? e.some(e => vt(e, t)) : Object(s["D"])(e) ? e.split(",").indexOf(t) > -1 : !!e.test && e.test(t);
    }

    function _t(e, t) {
      wt(e, "a", t);
    }

    function yt(e, t) {
      wt(e, "da", t);
    }

    function wt(e, t, n = bi) {
      const i = e.__wdc || (e.__wdc = () => {
        let t = n;

        while (t) {
          if (t.isDeactivated) return;
          t = t.parent;
        }

        e();
      });

      if (Et(t, i, n), n) {
        let e = n.parent;

        while (e && e.parent) bt(e.parent.vnode) && Ot(i, t, n, e), e = e.parent;
      }
    }

    function Ot(e, t, n, i) {
      const o = Et(t, e, i, !0);
      Lt(() => {
        Object(s["K"])(i[t], o);
      }, n);
    }

    function xt(e) {
      let t = e.shapeFlag;
      256 & t && (t -= 256), 512 & t && (t -= 512), e.shapeFlag = t;
    }

    function Ct(e) {
      return 128 & e.shapeFlag ? e.ssContent : e;
    }

    function Et(e, t, n = bi, i = !1) {
      if (n) {
        const s = n[e] || (n[e] = []),
              o = t.__weh || (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          k(), _i(n);
          const s = Mi(t, n, e, i);
          return yi(), T(), s;
        });

        return i ? s.unshift(o) : s.push(o), o;
      }
    }

    const kt = e => (t, n = bi) => (!Ci || "sp" === e) && Et(e, t, n),
          jt = kt("bm"),
          Tt = kt("m"),
          St = kt("bu"),
          At = kt("u"),
          It = kt("bum"),
          Lt = kt("um"),
          Dt = kt("sp"),
          Pt = kt("rtg"),
          Mt = kt("rtc");

    function Nt(e, t = bi) {
      Et("ec", e, t);
    }

    let Ht = !0;

    function Rt(e) {
      const t = $t(e),
            n = e.proxy,
            i = e.ctx;
      Ht = !1, t.beforeCreate && Ft(t.beforeCreate, e, "bc");
      const {
        data: o,
        computed: r,
        methods: a,
        watch: l,
        provide: c,
        inject: u,
        created: d,
        beforeMount: h,
        mounted: f,
        beforeUpdate: p,
        updated: m,
        activated: g,
        deactivated: b,
        beforeDestroy: v,
        beforeUnmount: _,
        destroyed: y,
        unmounted: w,
        render: O,
        renderTracked: x,
        renderTriggered: C,
        errorCaptured: E,
        serverPrefetch: k,
        expose: j,
        inheritAttrs: T,
        components: S,
        directives: A,
        filters: I
      } = t,
            L = null;
      if (u && Bt(u, i, L, e.appContext.config.unwrapInjectedRef), a) for (const P in a) {
        const e = a[P];
        Object(s["p"])(e) && (i[P] = e.bind(n));
      }

      if (o) {
        0;
        const t = o.call(n, n);
        0, Object(s["v"])(t) && (e.data = Ce(t));
      }

      if (Ht = !0, r) for (const P in r) {
        const e = r[P],
              t = Object(s["p"])(e) ? e.bind(n, n) : Object(s["p"])(e.get) ? e.get.bind(n, n) : s["d"];
        0;
        const o = !Object(s["p"])(e) && Object(s["p"])(e.set) ? e.set.bind(n) : s["d"],
              a = $e({
          get: t,
          set: o
        });
        Object.defineProperty(i, P, {
          enumerable: !0,
          configurable: !0,
          get: () => a.value,
          set: e => a.value = e
        });
      }
      if (l) for (const s in l) zt(l[s], i, n, s);

      if (c) {
        const e = Object(s["p"])(c) ? c.call(n) : c;
        Reflect.ownKeys(e).forEach(t => {
          st(t, e[t]);
        });
      }

      function D(e, t) {
        Object(s["o"])(t) ? t.forEach(t => e(t.bind(n))) : t && e(t.bind(n));
      }

      if (d && Ft(d, e, "c"), D(jt, h), D(Tt, f), D(St, p), D(At, m), D(_t, g), D(yt, b), D(Nt, E), D(Mt, x), D(Pt, C), D(It, _), D(Lt, w), D(Dt, k), Object(s["o"])(j)) if (j.length) {
        const t = e.exposed || (e.exposed = {});
        j.forEach(e => {
          Object.defineProperty(t, e, {
            get: () => n[e],
            set: t => n[e] = t
          });
        });
      } else e.exposed || (e.exposed = {});
      O && e.render === s["d"] && (e.render = O), null != T && (e.inheritAttrs = T), S && (e.components = S), A && (e.directives = A);
    }

    function Bt(e, t, n = s["d"], i = !1) {
      Object(s["o"])(e) && (e = Kt(e));

      for (const o in e) {
        const n = e[o];
        let r;
        r = Object(s["v"])(n) ? "default" in n ? ot(n.from || o, n.default, !0) : ot(n.from || o) : ot(n), He(r) && i ? Object.defineProperty(t, o, {
          enumerable: !0,
          configurable: !0,
          get: () => r.value,
          set: e => r.value = e
        }) : t[o] = r;
      }
    }

    function Ft(e, t, n) {
      Mi(Object(s["o"])(e) ? e.map(e => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
    }

    function zt(e, t, n, i) {
      const o = i.includes(".") ? fs(n, i) : () => n[i];

      if (Object(s["D"])(e)) {
        const n = t[e];
        Object(s["p"])(n) && us(o, n);
      } else if (Object(s["p"])(e)) us(o, e.bind(n));else if (Object(s["v"])(e)) {
        if (Object(s["o"])(e)) e.forEach(e => zt(e, t, n, i));else {
          const i = Object(s["p"])(e.handler) ? e.handler.bind(n) : t[e.handler];
          Object(s["p"])(i) && us(o, i, e);
        }
      } else 0;
    }

    function $t(e) {
      const t = e.type,
            {
        mixins: n,
        extends: i
      } = t,
            {
        mixins: s,
        optionsCache: o,
        config: {
          optionMergeStrategies: r
        }
      } = e.appContext,
            a = o.get(t);
      let l;
      return a ? l = a : s.length || n || i ? (l = {}, s.length && s.forEach(e => Wt(l, e, r, !0)), Wt(l, t, r)) : l = t, o.set(t, l), l;
    }

    function Wt(e, t, n, i = !1) {
      const {
        mixins: s,
        extends: o
      } = t;
      o && Wt(e, o, n, !0), s && s.forEach(t => Wt(e, t, n, !0));

      for (const r in t) if (i && "expose" === r) ;else {
        const i = qt[r] || n && n[r];
        e[r] = i ? i(e[r], t[r]) : t[r];
      }

      return e;
    }

    const qt = {
      data: Ut,
      props: Xt,
      emits: Xt,
      methods: Xt,
      computed: Xt,
      beforeCreate: Gt,
      created: Gt,
      beforeMount: Gt,
      mounted: Gt,
      beforeUpdate: Gt,
      updated: Gt,
      beforeDestroy: Gt,
      beforeUnmount: Gt,
      destroyed: Gt,
      unmounted: Gt,
      activated: Gt,
      deactivated: Gt,
      errorCaptured: Gt,
      serverPrefetch: Gt,
      components: Xt,
      directives: Xt,
      watch: Yt,
      provide: Ut,
      inject: Vt
    };

    function Ut(e, t) {
      return t ? e ? function () {
        return Object(s["h"])(Object(s["p"])(e) ? e.call(this, this) : e, Object(s["p"])(t) ? t.call(this, this) : t);
      } : t : e;
    }

    function Vt(e, t) {
      return Xt(Kt(e), Kt(t));
    }

    function Kt(e) {
      if (Object(s["o"])(e)) {
        const t = {};

        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];

        return t;
      }

      return e;
    }

    function Gt(e, t) {
      return e ? [...new Set([].concat(e, t))] : t;
    }

    function Xt(e, t) {
      return e ? Object(s["h"])(Object(s["h"])(Object.create(null), e), t) : t;
    }

    function Yt(e, t) {
      if (!e) return t;
      if (!t) return e;
      const n = Object(s["h"])(Object.create(null), e);

      for (const i in t) n[i] = Gt(e[i], t[i]);

      return n;
    }

    function Qt(e, t, n, i = !1) {
      const o = {},
            r = {};
      Object(s["g"])(r, Xn, 1), e.propsDefaults = Object.create(null), Zt(e, t, o, r);

      for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);

      n ? e.props = i ? o : Ee(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
    }

    function Jt(e, t, n, i) {
      const {
        props: o,
        attrs: r,
        vnode: {
          patchFlag: a
        }
      } = e,
            l = Ie(o),
            [c] = e.propsOptions;
      let u = !1;

      if (!(i || a > 0) || 16 & a) {
        let i;
        Zt(e, t, o, r) && (u = !0);

        for (const r in l) t && (Object(s["k"])(t, r) || (i = Object(s["l"])(r)) !== r && Object(s["k"])(t, i)) || (c ? !n || void 0 === n[r] && void 0 === n[i] || (o[r] = en(c, l, r, void 0, e, !0)) : delete o[r]);

        if (r !== l) for (const e in r) t && Object(s["k"])(t, e) || (delete r[e], u = !0);
      } else if (8 & a) {
        const n = e.vnode.dynamicProps;

        for (let i = 0; i < n.length; i++) {
          let a = n[i];
          const d = t[a];
          if (c) {
            if (Object(s["k"])(r, a)) d !== r[a] && (r[a] = d, u = !0);else {
              const t = Object(s["e"])(a);
              o[t] = en(c, l, t, d, e, !1);
            }
          } else d !== r[a] && (r[a] = d, u = !0);
        }
      }

      u && L(e, "set", "$attrs");
    }

    function Zt(e, t, n, i) {
      const [o, r] = e.propsOptions;
      let a,
          l = !1;
      if (t) for (let c in t) {
        if (Object(s["z"])(c)) continue;
        const u = t[c];
        let d;
        o && Object(s["k"])(o, d = Object(s["e"])(c)) ? r && r.includes(d) ? (a || (a = {}))[d] = u : n[d] = u : Ue(e.emitsOptions, c) || u !== i[c] && (i[c] = u, l = !0);
      }

      if (r) {
        const t = Ie(n),
              i = a || s["b"];

        for (let a = 0; a < r.length; a++) {
          const l = r[a];
          n[l] = en(o, t, l, i[l], e, !Object(s["k"])(i, l));
        }
      }

      return l;
    }

    function en(e, t, n, i, o, r) {
      const a = e[n];

      if (null != a) {
        const e = Object(s["k"])(a, "default");

        if (e && void 0 === i) {
          const e = a.default;

          if (a.type !== Function && Object(s["p"])(e)) {
            const {
              propsDefaults: s
            } = o;
            n in s ? i = s[n] : (_i(o), i = s[n] = e.call(null, t), yi());
          } else i = e;
        }

        a[0] && (r && !e ? i = !1 : !a[1] || "" !== i && i !== Object(s["l"])(n) || (i = !0));
      }

      return i;
    }

    function tn(e, t, n = !1) {
      const i = t.propsCache,
            o = i.get(e);
      if (o) return o;
      const r = e.props,
            a = {},
            l = [];
      let c = !1;

      if (!Object(s["p"])(e)) {
        const i = e => {
          c = !0;
          const [n, i] = tn(e, t, !0);
          Object(s["h"])(a, n), i && l.push(...i);
        };

        !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
      }

      if (!r && !c) return i.set(e, s["a"]), s["a"];
      if (Object(s["o"])(r)) for (let d = 0; d < r.length; d++) {
        0;
        const e = Object(s["e"])(r[d]);
        nn(e) && (a[e] = s["b"]);
      } else if (r) {
        0;

        for (const e in r) {
          const t = Object(s["e"])(e);

          if (nn(t)) {
            const n = r[e],
                  i = a[t] = Object(s["o"])(n) || Object(s["p"])(n) ? {
              type: n
            } : n;

            if (i) {
              const e = rn(Boolean, i.type),
                    n = rn(String, i.type);
              i[0] = e > -1, i[1] = n < 0 || e < n, (e > -1 || Object(s["k"])(i, "default")) && l.push(t);
            }
          }
        }
      }
      const u = [a, l];
      return i.set(e, u), u;
    }

    function nn(e) {
      return "$" !== e[0];
    }

    function sn(e) {
      const t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : null === e ? "null" : "";
    }

    function on(e, t) {
      return sn(e) === sn(t);
    }

    function rn(e, t) {
      return Object(s["o"])(t) ? t.findIndex(t => on(t, e)) : Object(s["p"])(t) && on(t, e) ? 0 : -1;
    }

    const an = e => "_" === e[0] || "$stable" === e,
          ln = e => Object(s["o"])(e) ? e.map(ri) : [ri(e)],
          cn = (e, t, n) => {
      const i = Xe((...e) => ln(t(...e)), n);
      return i._c = !1, i;
    },
          un = (e, t, n) => {
      const i = e._ctx;

      for (const o in e) {
        if (an(o)) continue;
        const n = e[o];
        if (Object(s["p"])(n)) t[o] = cn(o, n, i);else if (null != n) {
          0;
          const e = ln(n);

          t[o] = () => e;
        }
      }
    },
          dn = (e, t) => {
      const n = ln(t);

      e.slots.default = () => n;
    },
          hn = (e, t) => {
      if (32 & e.vnode.shapeFlag) {
        const n = t._;
        n ? (e.slots = Ie(t), Object(s["g"])(t, "_", n)) : un(t, e.slots = {});
      } else e.slots = {}, t && dn(e, t);

      Object(s["g"])(e.slots, Xn, 1);
    },
          fn = (e, t, n) => {
      const {
        vnode: i,
        slots: o
      } = e;
      let r = !0,
          a = s["b"];

      if (32 & i.shapeFlag) {
        const e = t._;
        e ? n && 1 === e ? r = !1 : (Object(s["h"])(o, t), n || 1 !== e || delete o._) : (r = !t.$stable, un(t, o)), a = t;
      } else t && (dn(e, t), a = {
        default: 1
      });

      if (r) for (const s in o) an(s) || s in a || delete o[s];
    };

    function pn(e, t) {
      const n = Ve;
      if (null === n) return e;
      const i = n.proxy,
            o = e.dirs || (e.dirs = []);

      for (let r = 0; r < t.length; r++) {
        let [e, n, a, l = s["b"]] = t[r];
        Object(s["p"])(e) && (e = {
          mounted: e,
          updated: e
        }), e.deep && ps(n), o.push({
          dir: e,
          instance: i,
          value: n,
          oldValue: void 0,
          arg: a,
          modifiers: l
        });
      }

      return e;
    }

    function mn(e, t, n, i) {
      const s = e.dirs,
            o = t && t.dirs;

      for (let r = 0; r < s.length; r++) {
        const a = s[r];
        o && (a.oldValue = o[r].value);
        let l = a.dir[i];
        l && (k(), Mi(l, n, 8, [e.el, a, e, t]), T());
      }
    }

    function gn() {
      return {
        app: null,
        config: {
          isNativeTag: s["c"],
          performance: !1,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
      };
    }

    let bn = 0;

    function vn(e, t) {
      return function (n, i = null) {
        null == i || Object(s["v"])(i) || (i = null);
        const o = gn(),
              r = new Set();
        let a = !1;
        const l = o.app = {
          _uid: bn++,
          _component: n,
          _props: i,
          _container: null,
          _context: o,
          _instance: null,
          version: gs,

          get config() {
            return o.config;
          },

          set config(e) {
            0;
          },

          use(e, ...t) {
            return r.has(e) || (e && Object(s["p"])(e.install) ? (r.add(e), e.install(l, ...t)) : Object(s["p"])(e) && (r.add(e), e(l, ...t))), l;
          },

          mixin(e) {
            return o.mixins.includes(e) || o.mixins.push(e), l;
          },

          component(e, t) {
            return t ? (o.components[e] = t, l) : o.components[e];
          },

          directive(e, t) {
            return t ? (o.directives[e] = t, l) : o.directives[e];
          },

          mount(s, r, c) {
            if (!a) {
              const u = Zn(n, i);
              return u.appContext = o, r && t ? t(u, s) : e(u, s, c), a = !0, l._container = s, s.__vue_app__ = l, Ii(u.component) || u.component.proxy;
            }
          },

          unmount() {
            a && (e(null, l._container), delete l._container.__vue_app__);
          },

          provide(e, t) {
            return o.provides[e] = t, l;
          }

        };
        return l;
      };
    }

    function _n() {}

    const yn = it;

    function wn(e) {
      return On(e);
    }

    function On(e, t) {
      _n();

      const n = Object(s["i"])();
      n.__VUE__ = !0;

      const {
        insert: i,
        remove: o,
        patchProp: r,
        createElement: a,
        createText: l,
        createComment: c,
        setText: u,
        setElementText: d,
        parentNode: h,
        nextSibling: f,
        setScopeId: p = s["d"],
        cloneNode: m,
        insertStaticContent: g
      } = e,
            b = (e, t, n, i = null, s = null, o = null, r = !1, a = null, l = !!t.dynamicChildren) => {
        if (e === t) return;
        e && !Gn(e, t) && (i = G(e), W(e, s, o, !0), e = null), -2 === t.patchFlag && (l = !1, t.dynamicChildren = null);
        const {
          type: c,
          ref: u,
          shapeFlag: d
        } = t;

        switch (c) {
          case Mn:
            v(e, t, n, i);
            break;

          case Nn:
            _(e, t, n, i);

            break;

          case Hn:
            null == e && y(t, n, i, r);
            break;

          case Pn:
            D(e, t, n, i, s, o, r, a, l);
            break;

          default:
            1 & d ? C(e, t, n, i, s, o, r, a, l) : 6 & d ? P(e, t, n, i, s, o, r, a, l) : (64 & d || 128 & d) && c.process(e, t, n, i, s, o, r, a, l, Y);
        }

        null != u && s && xn(u, e && e.ref, o, t || e, !t);
      },
            v = (e, t, n, s) => {
        if (null == e) i(t.el = l(t.children), n, s);else {
          const n = t.el = e.el;
          t.children !== e.children && u(n, t.children);
        }
      },
            _ = (e, t, n, s) => {
        null == e ? i(t.el = c(t.children || ""), n, s) : t.el = e.el;
      },
            y = (e, t, n, i) => {
        [e.el, e.anchor] = g(e.children, t, n, i);
      },
            w = ({
        el: e,
        anchor: t
      }, n, s) => {
        let o;

        while (e && e !== t) o = f(e), i(e, n, s), e = o;

        i(t, n, s);
      },
            x = ({
        el: e,
        anchor: t
      }) => {
        let n;

        while (e && e !== t) n = f(e), o(e), e = n;

        o(t);
      },
            C = (e, t, n, i, s, o, r, a, l) => {
        r = r || "svg" === t.type, null == e ? E(t, n, i, s, o, r, a, l) : A(e, t, s, o, r, a, l);
      },
            E = (e, t, n, o, l, c, u, h) => {
        let f, p;
        const {
          type: g,
          props: b,
          shapeFlag: v,
          transition: _,
          patchFlag: y,
          dirs: w
        } = e;
        if (e.el && void 0 !== m && -1 === y) f = e.el = m(e.el);else {
          if (f = e.el = a(e.type, c, b && b.is, b), 8 & v ? d(f, e.children) : 16 & v && S(e.children, f, null, o, l, c && "foreignObject" !== g, u, h), w && mn(e, null, o, "created"), b) {
            for (const t in b) "value" === t || Object(s["z"])(t) || r(f, t, null, b[t], c, e.children, o, l, K);

            "value" in b && r(f, "value", null, b.value), (p = b.onVnodeBeforeMount) && Cn(p, o, e);
          }

          j(f, e, e.scopeId, u, o);
        }
        w && mn(e, null, o, "beforeMount");
        const O = (!l || l && !l.pendingBranch) && _ && !_.persisted;
        O && _.beforeEnter(f), i(f, t, n), ((p = b && b.onVnodeMounted) || O || w) && yn(() => {
          p && Cn(p, o, e), O && _.enter(f), w && mn(e, null, o, "mounted");
        }, l);
      },
            j = (e, t, n, i, s) => {
        if (n && p(e, n), i) for (let o = 0; o < i.length; o++) p(e, i[o]);

        if (s) {
          let n = s.subTree;

          if (t === n) {
            const t = s.vnode;
            j(e, t, t.scopeId, t.slotScopeIds, s.parent);
          }
        }
      },
            S = (e, t, n, i, s, o, r, a, l = 0) => {
        for (let c = l; c < e.length; c++) {
          const l = e[c] = a ? ai(e[c]) : ri(e[c]);
          b(null, l, t, n, i, s, o, r, a);
        }
      },
            A = (e, t, n, i, o, a, l) => {
        const c = t.el = e.el;
        let {
          patchFlag: u,
          dynamicChildren: h,
          dirs: f
        } = t;
        u |= 16 & e.patchFlag;
        const p = e.props || s["b"],
              m = t.props || s["b"];
        let g;
        (g = m.onVnodeBeforeUpdate) && Cn(g, n, t, e), f && mn(t, e, n, "beforeUpdate");
        const b = o && "foreignObject" !== t.type;

        if (h ? I(e.dynamicChildren, h, c, n, i, b, a) : l || B(e, t, c, null, n, i, b, a, !1), u > 0) {
          if (16 & u) L(c, t, p, m, n, i, o);else if (2 & u && p.class !== m.class && r(c, "class", null, m.class, o), 4 & u && r(c, "style", p.style, m.style, o), 8 & u) {
            const s = t.dynamicProps;

            for (let t = 0; t < s.length; t++) {
              const a = s[t],
                    l = p[a],
                    u = m[a];
              u === l && "value" !== a || r(c, a, l, u, o, e.children, n, i, K);
            }
          }
          1 & u && e.children !== t.children && d(c, t.children);
        } else l || null != h || L(c, t, p, m, n, i, o);

        ((g = m.onVnodeUpdated) || f) && yn(() => {
          g && Cn(g, n, t, e), f && mn(t, e, n, "updated");
        }, i);
      },
            I = (e, t, n, i, s, o, r) => {
        for (let a = 0; a < t.length; a++) {
          const l = e[a],
                c = t[a],
                u = l.el && (l.type === Pn || !Gn(l, c) || 70 & l.shapeFlag) ? h(l.el) : n;
          b(l, c, u, null, i, s, o, r, !0);
        }
      },
            L = (e, t, n, i, o, a, l) => {
        if (n !== i) {
          for (const c in i) {
            if (Object(s["z"])(c)) continue;
            const u = i[c],
                  d = n[c];
            u !== d && "value" !== c && r(e, c, d, u, l, t.children, o, a, K);
          }

          if (n !== s["b"]) for (const c in n) Object(s["z"])(c) || c in i || r(e, c, n[c], null, l, t.children, o, a, K);
          "value" in i && r(e, "value", n.value, i.value);
        }
      },
            D = (e, t, n, s, o, r, a, c, u) => {
        const d = t.el = e ? e.el : l(""),
              h = t.anchor = e ? e.anchor : l("");
        let {
          patchFlag: f,
          dynamicChildren: p,
          slotScopeIds: m
        } = t;
        m && (c = c ? c.concat(m) : m), null == e ? (i(d, n, s), i(h, n, s), S(t.children, n, h, o, r, a, c, u)) : f > 0 && 64 & f && p && e.dynamicChildren ? (I(e.dynamicChildren, p, n, o, r, a, c), (null != t.key || o && t === o.subTree) && En(e, t, !0)) : B(e, t, n, h, o, r, a, c, u);
      },
            P = (e, t, n, i, s, o, r, a, l) => {
        t.slotScopeIds = a, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, n, i, r, l) : M(t, n, i, s, o, r, l) : N(e, t, l);
      },
            M = (e, t, n, i, s, o, r) => {
        const a = e.component = gi(e, i, s);

        if (bt(e) && (a.ctx.renderer = Y), Ei(a), a.asyncDep) {
          if (s && s.registerDep(a, H), !e.el) {
            const e = a.subTree = Zn(Nn);

            _(null, e, t, n);
          }
        } else H(a, e, t, n, s, o, r);
      },
            N = (e, t, n) => {
        const i = t.component = e.component;

        if (Ze(e, t, n)) {
          if (i.asyncDep && !i.asyncResolved) return void R(i, t, n);
          i.next = t, ts(i.update), i.update();
        } else t.component = e.component, t.el = e.el, i.vnode = t;
      },
            H = (e, t, n, i, o, r, a) => {
        const l = () => {
          if (e.isMounted) {
            let t,
                {
              next: n,
              bu: i,
              u: l,
              parent: u,
              vnode: d
            } = e,
                f = n;
            0, c.allowRecurse = !1, n ? (n.el = d.el, R(e, n, a)) : n = d, i && Object(s["n"])(i), (t = n.props && n.props.onVnodeBeforeUpdate) && Cn(t, u, n, d), c.allowRecurse = !0;
            const p = Ye(e);
            0;
            const m = e.subTree;
            e.subTree = p, b(m, p, h(m.el), G(m), e, o, r), n.el = p.el, null === f && tt(e, p.el), l && yn(l, o), (t = n.props && n.props.onVnodeUpdated) && yn(() => Cn(t, u, n, d), o);
          } else {
            let a;
            const {
              el: l,
              props: u
            } = t,
                  {
              bm: d,
              m: h,
              parent: f
            } = e,
                  p = gt(t);

            if (c.allowRecurse = !1, d && Object(s["n"])(d), !p && (a = u && u.onVnodeBeforeMount) && Cn(a, f, t), c.allowRecurse = !0, l && J) {
              const n = () => {
                e.subTree = Ye(e), J(l, e.subTree, e, o, null);
              };

              p ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
            } else {
              0;
              const s = e.subTree = Ye(e);
              0, b(null, s, n, i, e, o, r), t.el = s.el;
            }

            if (h && yn(h, o), !p && (a = u && u.onVnodeMounted)) {
              const e = t;
              yn(() => Cn(a, f, e), o);
            }

            256 & t.shapeFlag && e.a && yn(e.a, o), e.isMounted = !0, t = n = i = null;
          }
        },
              c = new O(l, () => Zi(e.update), e.scope),
              u = e.update = c.run.bind(c);

        u.id = e.uid, c.allowRecurse = u.allowRecurse = !0, u();
      },
            R = (e, t, n) => {
        t.component = e;
        const i = e.vnode.props;
        e.vnode = t, e.next = null, Jt(e, t.props, i, n), fn(e, t.children, n), k(), os(void 0, e.update), T();
      },
            B = (e, t, n, i, s, o, r, a, l = !1) => {
        const c = e && e.children,
              u = e ? e.shapeFlag : 0,
              h = t.children,
              {
          patchFlag: f,
          shapeFlag: p
        } = t;

        if (f > 0) {
          if (128 & f) return void z(c, h, n, i, s, o, r, a, l);
          if (256 & f) return void F(c, h, n, i, s, o, r, a, l);
        }

        8 & p ? (16 & u && K(c, s, o), h !== c && d(n, h)) : 16 & u ? 16 & p ? z(c, h, n, i, s, o, r, a, l) : K(c, s, o, !0) : (8 & u && d(n, ""), 16 & p && S(h, n, i, s, o, r, a, l));
      },
            F = (e, t, n, i, o, r, a, l, c) => {
        e = e || s["a"], t = t || s["a"];
        const u = e.length,
              d = t.length,
              h = Math.min(u, d);
        let f;

        for (f = 0; f < h; f++) {
          const i = t[f] = c ? ai(t[f]) : ri(t[f]);
          b(e[f], i, n, null, o, r, a, l, c);
        }

        u > d ? K(e, o, r, !0, !1, h) : S(t, n, i, o, r, a, l, c, h);
      },
            z = (e, t, n, i, o, r, a, l, c) => {
        let u = 0;
        const d = t.length;
        let h = e.length - 1,
            f = d - 1;

        while (u <= h && u <= f) {
          const i = e[u],
                s = t[u] = c ? ai(t[u]) : ri(t[u]);
          if (!Gn(i, s)) break;
          b(i, s, n, null, o, r, a, l, c), u++;
        }

        while (u <= h && u <= f) {
          const i = e[h],
                s = t[f] = c ? ai(t[f]) : ri(t[f]);
          if (!Gn(i, s)) break;
          b(i, s, n, null, o, r, a, l, c), h--, f--;
        }

        if (u > h) {
          if (u <= f) {
            const e = f + 1,
                  s = e < d ? t[e].el : i;

            while (u <= f) b(null, t[u] = c ? ai(t[u]) : ri(t[u]), n, s, o, r, a, l, c), u++;
          }
        } else if (u > f) while (u <= h) W(e[u], o, r, !0), u++;else {
          const p = u,
                m = u,
                g = new Map();

          for (u = m; u <= f; u++) {
            const e = t[u] = c ? ai(t[u]) : ri(t[u]);
            null != e.key && g.set(e.key, u);
          }

          let v,
              _ = 0;
          const y = f - m + 1;
          let w = !1,
              O = 0;
          const x = new Array(y);

          for (u = 0; u < y; u++) x[u] = 0;

          for (u = p; u <= h; u++) {
            const i = e[u];

            if (_ >= y) {
              W(i, o, r, !0);
              continue;
            }

            let s;
            if (null != i.key) s = g.get(i.key);else for (v = m; v <= f; v++) if (0 === x[v - m] && Gn(i, t[v])) {
              s = v;
              break;
            }
            void 0 === s ? W(i, o, r, !0) : (x[s - m] = u + 1, s >= O ? O = s : w = !0, b(i, t[s], n, null, o, r, a, l, c), _++);
          }

          const C = w ? kn(x) : s["a"];

          for (v = C.length - 1, u = y - 1; u >= 0; u--) {
            const e = m + u,
                  s = t[e],
                  h = e + 1 < d ? t[e + 1].el : i;
            0 === x[u] ? b(null, s, n, h, o, r, a, l, c) : w && (v < 0 || u !== C[v] ? $(s, n, h, 2) : v--);
          }
        }
      },
            $ = (e, t, n, s, o = null) => {
        const {
          el: r,
          type: a,
          transition: l,
          children: c,
          shapeFlag: u
        } = e;
        if (6 & u) return void $(e.component.subTree, t, n, s);
        if (128 & u) return void e.suspense.move(t, n, s);
        if (64 & u) return void a.move(e, t, n, Y);

        if (a === Pn) {
          i(r, t, n);

          for (let e = 0; e < c.length; e++) $(c[e], t, n, s);

          return void i(e.anchor, t, n);
        }

        if (a === Hn) return void w(e, t, n);
        const d = 2 !== s && 1 & u && l;
        if (d) {
          if (0 === s) l.beforeEnter(r), i(r, t, n), yn(() => l.enter(r), o);else {
            const {
              leave: e,
              delayLeave: s,
              afterLeave: o
            } = l,
                  a = () => i(r, t, n),
                  c = () => {
              e(r, () => {
                a(), o && o();
              });
            };

            s ? s(r, a, c) : c();
          }
        } else i(r, t, n);
      },
            W = (e, t, n, i = !1, s = !1) => {
        const {
          type: o,
          props: r,
          ref: a,
          children: l,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: d,
          dirs: h
        } = e;
        if (null != a && xn(a, null, n, e, !0), 256 & u) return void t.ctx.deactivate(e);
        const f = 1 & u && h,
              p = !gt(e);
        let m;
        if (p && (m = r && r.onVnodeBeforeUnmount) && Cn(m, t, e), 6 & u) V(e.component, n, i);else {
          if (128 & u) return void e.suspense.unmount(n, i);
          f && mn(e, null, t, "beforeUnmount"), 64 & u ? e.type.remove(e, t, n, s, Y, i) : c && (o !== Pn || d > 0 && 64 & d) ? K(c, t, n, !1, !0) : (o === Pn && 384 & d || !s && 16 & u) && K(l, t, n), i && q(e);
        }
        (p && (m = r && r.onVnodeUnmounted) || f) && yn(() => {
          m && Cn(m, t, e), f && mn(e, null, t, "unmounted");
        }, n);
      },
            q = e => {
        const {
          type: t,
          el: n,
          anchor: i,
          transition: s
        } = e;
        if (t === Pn) return void U(n, i);
        if (t === Hn) return void x(e);

        const r = () => {
          o(n), s && !s.persisted && s.afterLeave && s.afterLeave();
        };

        if (1 & e.shapeFlag && s && !s.persisted) {
          const {
            leave: t,
            delayLeave: i
          } = s,
                o = () => t(n, r);

          i ? i(e.el, r, o) : o();
        } else r();
      },
            U = (e, t) => {
        let n;

        while (e !== t) n = f(e), o(e), e = n;

        o(t);
      },
            V = (e, t, n) => {
        const {
          bum: i,
          scope: o,
          update: r,
          subTree: a,
          um: l
        } = e;
        i && Object(s["n"])(i), o.stop(), r && (r.active = !1, W(a, e, t, n)), l && yn(l, t), yn(() => {
          e.isUnmounted = !0;
        }, t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve());
      },
            K = (e, t, n, i = !1, s = !1, o = 0) => {
        for (let r = o; r < e.length; r++) W(e[r], t, n, i, s);
      },
            G = e => 6 & e.shapeFlag ? G(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : f(e.anchor || e.el),
            X = (e, t, n) => {
        null == e ? t._vnode && W(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, n), rs(), t._vnode = e;
      },
            Y = {
        p: b,
        um: W,
        m: $,
        r: q,
        mt: M,
        mc: S,
        pc: B,
        pbc: I,
        n: G,
        o: e
      };

      let Q, J;
      return t && ([Q, J] = t(Y)), {
        render: X,
        hydrate: Q,
        createApp: vn(X, Q)
      };
    }

    function xn(e, t, n, i, o = !1) {
      if (Object(s["o"])(e)) return void e.forEach((e, r) => xn(e, t && (Object(s["o"])(t) ? t[r] : t), n, i, o));
      if (gt(i) && !o) return;
      const r = 4 & i.shapeFlag ? Ii(i.component) || i.component.proxy : i.el,
            a = o ? null : r,
            {
        i: l,
        r: c
      } = e;
      const u = t && t.r,
            d = l.refs === s["b"] ? l.refs = {} : l.refs,
            h = l.setupState;

      if (null != u && u !== c && (Object(s["D"])(u) ? (d[u] = null, Object(s["k"])(h, u) && (h[u] = null)) : He(u) && (u.value = null)), Object(s["D"])(c)) {
        const e = () => {
          d[c] = a, Object(s["k"])(h, c) && (h[c] = a);
        };

        a ? (e.id = -1, yn(e, n)) : e();
      } else if (He(c)) {
        const e = () => {
          c.value = a;
        };

        a ? (e.id = -1, yn(e, n)) : e();
      } else Object(s["p"])(c) && Pi(c, l, 12, [a, d]);
    }

    function Cn(e, t, n, i = null) {
      Mi(e, t, 7, [n, i]);
    }

    function En(e, t, n = !1) {
      const i = e.children,
            o = t.children;
      if (Object(s["o"])(i) && Object(s["o"])(o)) for (let s = 0; s < i.length; s++) {
        const e = i[s];
        let t = o[s];
        1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = o[s] = ai(o[s]), t.el = e.el), n || En(e, t));
      }
    }

    function kn(e) {
      const t = e.slice(),
            n = [0];
      let i, s, o, r, a;
      const l = e.length;

      for (i = 0; i < l; i++) {
        const l = e[i];

        if (0 !== l) {
          if (s = n[n.length - 1], e[s] < l) {
            t[i] = s, n.push(i);
            continue;
          }

          o = 0, r = n.length - 1;

          while (o < r) a = o + r >> 1, e[n[a]] < l ? o = a + 1 : r = a;

          l < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), n[o] = i);
        }
      }

      o = n.length, r = n[o - 1];

      while (o-- > 0) n[o] = r, r = t[r];

      return n;
    }

    const jn = e => e.__isTeleport;

    const Tn = "components";

    function Sn(e, t) {
      return Ln(Tn, e, !0, t) || e;
    }

    const An = Symbol();

    function In(e) {
      return Object(s["D"])(e) ? Ln(Tn, e, !1) || e : e || An;
    }

    function Ln(e, t, n = !0, i = !1) {
      const o = Ve || bi;

      if (o) {
        const n = o.type;

        if (e === Tn) {
          const e = Li(n);
          if (e && (e === t || e === Object(s["e"])(t) || e === Object(s["f"])(Object(s["e"])(t)))) return n;
        }

        const r = Dn(o[e] || n[e], t) || Dn(o.appContext[e], t);
        return !r && i ? n : r;
      }
    }

    function Dn(e, t) {
      return e && (e[t] || e[Object(s["e"])(t)] || e[Object(s["f"])(Object(s["e"])(t))]);
    }

    const Pn = Symbol(void 0),
          Mn = Symbol(void 0),
          Nn = Symbol(void 0),
          Hn = Symbol(void 0),
          Rn = [];
    let Bn = null;

    function Fn(e = !1) {
      Rn.push(Bn = e ? null : []);
    }

    function zn() {
      Rn.pop(), Bn = Rn[Rn.length - 1] || null;
    }

    let $n = 1;

    function Wn(e) {
      $n += e;
    }

    function qn(e) {
      return e.dynamicChildren = $n > 0 ? Bn || s["a"] : null, zn(), $n > 0 && Bn && Bn.push(e), e;
    }

    function Un(e, t, n, i, s, o) {
      return qn(Jn(e, t, n, i, s, o, !0));
    }

    function Vn(e, t, n, i, s) {
      return qn(Zn(e, t, n, i, s, !0));
    }

    function Kn(e) {
      return !!e && !0 === e.__v_isVNode;
    }

    function Gn(e, t) {
      return e.type === t.type && e.key === t.key;
    }

    const Xn = "__vInternal",
          Yn = ({
      key: e
    }) => null != e ? e : null,
          Qn = ({
      ref: e
    }) => null != e ? Object(s["D"])(e) || He(e) || Object(s["p"])(e) ? {
      i: Ve,
      r: e
    } : e : null;

    function Jn(e, t = null, n = null, i = 0, o = null, r = e === Pn ? 0 : 1, a = !1, l = !1) {
      const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Yn(t),
        ref: t && Qn(t),
        scopeId: Ke,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: i,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null
      };
      return l ? (li(c, n), 128 & r && e.normalize(c)) : n && (c.shapeFlag |= Object(s["D"])(n) ? 8 : 16), $n > 0 && !a && Bn && (c.patchFlag > 0 || 6 & r) && 32 !== c.patchFlag && Bn.push(c), c;
    }

    const Zn = ei;

    function ei(e, t = null, n = null, i = 0, o = null, r = !1) {
      if (e && e !== An || (e = Nn), Kn(e)) {
        const i = ni(e, t, !0);
        return n && li(i, n), i;
      }

      if (Di(e) && (e = e.__vccOpts), t) {
        t = ti(t);
        let {
          class: e,
          style: n
        } = t;
        e && !Object(s["D"])(e) && (t.class = Object(s["I"])(e)), Object(s["v"])(n) && (Ae(n) && !Object(s["o"])(n) && (n = Object(s["h"])({}, n)), t.style = Object(s["J"])(n));
      }

      const a = Object(s["D"])(e) ? 1 : nt(e) ? 128 : jn(e) ? 64 : Object(s["v"])(e) ? 4 : Object(s["p"])(e) ? 2 : 0;
      return Jn(e, t, n, i, o, a, r, !0);
    }

    function ti(e) {
      return e ? Ae(e) || Xn in e ? Object(s["h"])({}, e) : e : null;
    }

    function ni(e, t, n = !1) {
      const {
        props: i,
        ref: o,
        patchFlag: r,
        children: a
      } = e,
            l = t ? ci(i || {}, t) : i,
            c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Yn(l),
        ref: t && t.ref ? n && o ? Object(s["o"])(o) ? o.concat(Qn(t)) : [o, Qn(t)] : Qn(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Pn ? -1 === r ? 16 : 16 | r : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ni(e.ssContent),
        ssFallback: e.ssFallback && ni(e.ssFallback),
        el: e.el,
        anchor: e.anchor
      };
      return c;
    }

    function ii(e = " ", t = 0) {
      return Zn(Mn, null, e, t);
    }

    function si(e, t) {
      const n = Zn(Hn, null, e);
      return n.staticCount = t, n;
    }

    function oi(e = "", t = !1) {
      return t ? (Fn(), Vn(Nn, null, e)) : Zn(Nn, null, e);
    }

    function ri(e) {
      return null == e || "boolean" === typeof e ? Zn(Nn) : Object(s["o"])(e) ? Zn(Pn, null, e.slice()) : "object" === typeof e ? ai(e) : Zn(Mn, null, String(e));
    }

    function ai(e) {
      return null === e.el || e.memo ? e : ni(e);
    }

    function li(e, t) {
      let n = 0;
      const {
        shapeFlag: i
      } = e;
      if (null == t) t = null;else if (Object(s["o"])(t)) n = 16;else if ("object" === typeof t) {
        if (65 & i) {
          const n = t.default;
          return void (n && (n._c && (n._d = !1), li(e, n()), n._c && (n._d = !0)));
        }

        {
          n = 32;
          const i = t._;
          i || Xn in t ? 3 === i && Ve && (1 === Ve.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = Ve;
        }
      } else Object(s["p"])(t) ? (t = {
        default: t,
        _ctx: Ve
      }, n = 32) : (t = String(t), 64 & i ? (n = 16, t = [ii(t)]) : n = 8);
      e.children = t, e.shapeFlag |= n;
    }

    function ci(...e) {
      const t = {};

      for (let n = 0; n < e.length; n++) {
        const i = e[n];

        for (const e in i) if ("class" === e) t.class !== i.class && (t.class = Object(s["I"])([t.class, i.class]));else if ("style" === e) t.style = Object(s["J"])([t.style, i.style]);else if (Object(s["w"])(e)) {
          const n = t[e],
                s = i[e];
          n !== s && (t[e] = n ? [].concat(n, s) : s);
        } else "" !== e && (t[e] = i[e]);
      }

      return t;
    }

    function ui(e, t, n, i) {
      let o;
      const r = n && n[i];

      if (Object(s["o"])(e) || Object(s["D"])(e)) {
        o = new Array(e.length);

        for (let n = 0, i = e.length; n < i; n++) o[n] = t(e[n], n, void 0, r && r[n]);
      } else if ("number" === typeof e) {
        0, o = new Array(e);

        for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, r && r[n]);
      } else if (Object(s["v"])(e)) {
        if (e[Symbol.iterator]) o = Array.from(e, (e, n) => t(e, n, void 0, r && r[n]));else {
          const n = Object.keys(e);
          o = new Array(n.length);

          for (let i = 0, s = n.length; i < s; i++) {
            const s = n[i];
            o[i] = t(e[s], s, i, r && r[i]);
          }
        }
      } else o = [];

      return n && (n[i] = o), o;
    }

    const di = e => e ? wi(e) ? Ii(e) || e.proxy : di(e.parent) : null,
          hi = Object(s["h"])(Object.create(null), {
      $: e => e,
      $el: e => e.vnode.el,
      $data: e => e.data,
      $props: e => e.props,
      $attrs: e => e.attrs,
      $slots: e => e.slots,
      $refs: e => e.refs,
      $parent: e => di(e.parent),
      $root: e => di(e.root),
      $emit: e => e.emit,
      $options: e => $t(e),
      $forceUpdate: e => () => Zi(e.update),
      $nextTick: e => Qi.bind(e.proxy),
      $watch: e => hs.bind(e)
    }),
          fi = {
      get({
        _: e
      }, t) {
        const {
          ctx: n,
          setupState: i,
          data: o,
          props: r,
          accessCache: a,
          type: l,
          appContext: c
        } = e;
        let u;

        if ("$" !== t[0]) {
          const l = a[t];
          if (void 0 !== l) switch (l) {
            case 0:
              return i[t];

            case 1:
              return o[t];

            case 3:
              return n[t];

            case 2:
              return r[t];
          } else {
            if (i !== s["b"] && Object(s["k"])(i, t)) return a[t] = 0, i[t];
            if (o !== s["b"] && Object(s["k"])(o, t)) return a[t] = 1, o[t];
            if ((u = e.propsOptions[0]) && Object(s["k"])(u, t)) return a[t] = 2, r[t];
            if (n !== s["b"] && Object(s["k"])(n, t)) return a[t] = 3, n[t];
            Ht && (a[t] = 4);
          }
        }

        const d = hi[t];
        let h, f;
        return d ? ("$attrs" === t && S(e, "get", t), d(e)) : (h = l.__cssModules) && (h = h[t]) ? h : n !== s["b"] && Object(s["k"])(n, t) ? (a[t] = 3, n[t]) : (f = c.config.globalProperties, Object(s["k"])(f, t) ? f[t] : void 0);
      },

      set({
        _: e
      }, t, n) {
        const {
          data: i,
          setupState: o,
          ctx: r
        } = e;
        if (o !== s["b"] && Object(s["k"])(o, t)) o[t] = n;else if (i !== s["b"] && Object(s["k"])(i, t)) i[t] = n;else if (Object(s["k"])(e.props, t)) return !1;
        return ("$" !== t[0] || !(t.slice(1) in e)) && (r[t] = n, !0);
      },

      has({
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: o,
          propsOptions: r
        }
      }, a) {
        let l;
        return void 0 !== n[a] || e !== s["b"] && Object(s["k"])(e, a) || t !== s["b"] && Object(s["k"])(t, a) || (l = r[0]) && Object(s["k"])(l, a) || Object(s["k"])(i, a) || Object(s["k"])(hi, a) || Object(s["k"])(o.config.globalProperties, a);
      }

    };

    const pi = gn();
    let mi = 0;

    function gi(e, t, n) {
      const i = e.type,
            o = (t ? t.appContext : e.appContext) || pi,
            r = {
        uid: mi++,
        vnode: e,
        type: i,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        update: null,
        scope: new a(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: tn(i, o),
        emitsOptions: qe(i, o),
        emit: null,
        emitted: null,
        propsDefaults: s["b"],
        inheritAttrs: i.inheritAttrs,
        ctx: s["b"],
        data: s["b"],
        props: s["b"],
        attrs: s["b"],
        slots: s["b"],
        refs: s["b"],
        setupState: s["b"],
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
      };
      return r.ctx = {
        _: r
      }, r.root = t ? t.root : r, r.emit = We.bind(null, r), e.ce && e.ce(r), r;
    }

    let bi = null;

    const vi = () => bi || Ve,
          _i = e => {
      bi = e, e.scope.on();
    },
          yi = () => {
      bi && bi.scope.off(), bi = null;
    };

    function wi(e) {
      return 4 & e.vnode.shapeFlag;
    }

    let Oi,
        xi,
        Ci = !1;

    function Ei(e, t = !1) {
      Ci = t;
      const {
        props: n,
        children: i
      } = e.vnode,
            s = wi(e);
      Qt(e, n, s, t), hn(e, i);
      const o = s ? ki(e, t) : void 0;
      return Ci = !1, o;
    }

    function ki(e, t) {
      const n = e.type;
      e.accessCache = Object.create(null), e.proxy = Le(new Proxy(e.ctx, fi));
      const {
        setup: i
      } = n;

      if (i) {
        const n = e.setupContext = i.length > 1 ? Ai(e) : null;
        _i(e), k();
        const o = Pi(i, e, 0, [e.props, n]);

        if (T(), yi(), Object(s["y"])(o)) {
          if (o.then(yi, yi), t) return o.then(n => {
            ji(e, n, t);
          }).catch(t => {
            Ni(t, e, 0);
          });
          e.asyncDep = o;
        } else ji(e, o, t);
      } else Ti(e, t);
    }

    function ji(e, t, n) {
      Object(s["p"])(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Object(s["v"])(t) && (e.setupState = Fe(t)), Ti(e, n);
    }

    function Ti(e, t, n) {
      const i = e.type;

      if (!e.render) {
        if (!t && Oi && !i.render) {
          const t = i.template;

          if (t) {
            0;
            const {
              isCustomElement: n,
              compilerOptions: o
            } = e.appContext.config,
                  {
              delimiters: r,
              compilerOptions: a
            } = i,
                  l = Object(s["h"])(Object(s["h"])({
              isCustomElement: n,
              delimiters: r
            }, o), a);
            i.render = Oi(t, l);
          }
        }

        e.render = i.render || s["d"], xi && xi(e);
      }

      _i(e), k(), Rt(e), T(), yi();
    }

    function Si(e) {
      return new Proxy(e.attrs, {
        get(t, n) {
          return S(e, "get", "$attrs"), t[n];
        }

      });
    }

    function Ai(e) {
      const t = t => {
        e.exposed = t || {};
      };

      let n;
      return {
        get attrs() {
          return n || (n = Si(e));
        },

        slots: e.slots,
        emit: e.emit,
        expose: t
      };
    }

    function Ii(e) {
      if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Fe(Le(e.exposed)), {
        get(t, n) {
          return n in t ? t[n] : n in hi ? hi[n](e) : void 0;
        }

      }));
    }

    function Li(e) {
      return Object(s["p"])(e) && e.displayName || e.name;
    }

    function Di(e) {
      return Object(s["p"])(e) && "__vccOpts" in e;
    }

    function Pi(e, t, n, i) {
      let s;

      try {
        s = i ? e(...i) : e();
      } catch (o) {
        Ni(o, t, n);
      }

      return s;
    }

    function Mi(e, t, n, i) {
      if (Object(s["p"])(e)) {
        const o = Pi(e, t, n, i);
        return o && Object(s["y"])(o) && o.catch(e => {
          Ni(e, t, n);
        }), o;
      }

      const o = [];

      for (let s = 0; s < e.length; s++) o.push(Mi(e[s], t, n, i));

      return o;
    }

    function Ni(e, t, n, i = !0) {
      const s = t ? t.vnode : null;

      if (t) {
        let i = t.parent;
        const s = t.proxy,
              o = n;

        while (i) {
          const t = i.ec;
          if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, s, o)) return;
          i = i.parent;
        }

        const r = t.appContext.config.errorHandler;
        if (r) return void Pi(r, null, 10, [e, s, o]);
      }

      Hi(e, n, s, i);
    }

    function Hi(e, t, n, i = !0) {
      console.error(e);
    }

    let Ri = !1,
        Bi = !1;
    const Fi = [];
    let zi = 0;
    const $i = [];
    let Wi = null,
        qi = 0;
    const Ui = [];
    let Vi = null,
        Ki = 0;
    const Gi = Promise.resolve();
    let Xi = null,
        Yi = null;

    function Qi(e) {
      const t = Xi || Gi;
      return e ? t.then(this ? e.bind(this) : e) : t;
    }

    function Ji(e) {
      let t = zi + 1,
          n = Fi.length;

      while (t < n) {
        const i = t + n >>> 1,
              s = as(Fi[i]);
        s < e ? t = i + 1 : n = i;
      }

      return t;
    }

    function Zi(e) {
      Fi.length && Fi.includes(e, Ri && e.allowRecurse ? zi + 1 : zi) || e === Yi || (null == e.id ? Fi.push(e) : Fi.splice(Ji(e.id), 0, e), es());
    }

    function es() {
      Ri || Bi || (Bi = !0, Xi = Gi.then(ls));
    }

    function ts(e) {
      const t = Fi.indexOf(e);
      t > zi && Fi.splice(t, 1);
    }

    function ns(e, t, n, i) {
      Object(s["o"])(e) ? n.push(...e) : t && t.includes(e, e.allowRecurse ? i + 1 : i) || n.push(e), es();
    }

    function is(e) {
      ns(e, Wi, $i, qi);
    }

    function ss(e) {
      ns(e, Vi, Ui, Ki);
    }

    function os(e, t = null) {
      if ($i.length) {
        for (Yi = t, Wi = [...new Set($i)], $i.length = 0, qi = 0; qi < Wi.length; qi++) Wi[qi]();

        Wi = null, qi = 0, Yi = null, os(e, t);
      }
    }

    function rs(e) {
      if (Ui.length) {
        const e = [...new Set(Ui)];
        if (Ui.length = 0, Vi) return void Vi.push(...e);

        for (Vi = e, Vi.sort((e, t) => as(e) - as(t)), Ki = 0; Ki < Vi.length; Ki++) Vi[Ki]();

        Vi = null, Ki = 0;
      }
    }

    const as = e => null == e.id ? 1 / 0 : e.id;

    function ls(e) {
      Bi = !1, Ri = !0, os(e), Fi.sort((e, t) => as(e) - as(t));
      s["d"];

      try {
        for (zi = 0; zi < Fi.length; zi++) {
          const e = Fi[zi];
          e && !1 !== e.active && Pi(e, null, 14);
        }
      } finally {
        zi = 0, Fi.length = 0, rs(e), Ri = !1, Xi = null, (Fi.length || $i.length || Ui.length) && ls(e);
      }
    }

    const cs = {};

    function us(e, t, n) {
      return ds(e, t, n);
    }

    function ds(e, t, {
      immediate: n,
      deep: i,
      flush: o,
      onTrack: r,
      onTrigger: a
    } = s["b"]) {
      const l = bi;
      let c,
          u,
          d = !1,
          h = !1;

      if (He(e) ? (c = () => e.value, d = !!e._shallow) : Te(e) ? (c = () => e, i = !0) : Object(s["o"])(e) ? (h = !0, d = e.some(Te), c = () => e.map(e => He(e) ? e.value : Te(e) ? ps(e) : Object(s["p"])(e) ? Pi(e, l, 2) : void 0)) : c = Object(s["p"])(e) ? t ? () => Pi(e, l, 2) : () => {
        if (!l || !l.isUnmounted) return u && u(), Mi(e, l, 3, [f]);
      } : s["d"], t && i) {
        const e = c;

        c = () => ps(e());
      }

      let f = e => {
        u = b.onStop = () => {
          Pi(e, l, 4);
        };
      };

      if (Ci) return f = s["d"], t ? n && Mi(t, l, 3, [c(), h ? [] : void 0, f]) : c(), s["d"];
      let p = h ? [] : cs;

      const m = () => {
        if (b.active) if (t) {
          const e = b.run();
          (i || d || (h ? e.some((e, t) => Object(s["j"])(e, p[t])) : Object(s["j"])(e, p))) && (u && u(), Mi(t, l, 3, [e, p === cs ? void 0 : p, f]), p = e);
        } else b.run();
      };

      let g;
      m.allowRecurse = !!t, g = "sync" === o ? m : "post" === o ? () => yn(m, l && l.suspense) : () => {
        !l || l.isMounted ? is(m) : m();
      };
      const b = new O(c, g);
      return t ? n ? m() : p = b.run() : "post" === o ? yn(b.run.bind(b), l && l.suspense) : b.run(), () => {
        b.stop(), l && l.scope && Object(s["K"])(l.scope.effects, b);
      };
    }

    function hs(e, t, n) {
      const i = this.proxy,
            o = Object(s["D"])(e) ? e.includes(".") ? fs(i, e) : () => i[e] : e.bind(i, i);
      let r;
      Object(s["p"])(t) ? r = t : (r = t.handler, n = t);
      const a = bi;

      _i(this);

      const l = ds(o, r.bind(i), n);
      return a ? _i(a) : yi(), l;
    }

    function fs(e, t) {
      const n = t.split(".");
      return () => {
        let t = e;

        for (let e = 0; e < n.length && t; e++) t = t[n[e]];

        return t;
      };
    }

    function ps(e, t) {
      if (!Object(s["v"])(e) || e["__v_skip"]) return e;
      if (t = t || new Set(), t.has(e)) return e;
      if (t.add(e), He(e)) ps(e.value, t);else if (Object(s["o"])(e)) for (let n = 0; n < e.length; n++) ps(e[n], t);else if (Object(s["B"])(e) || Object(s["t"])(e)) e.forEach(e => {
        ps(e, t);
      });else if (Object(s["x"])(e)) for (const n in e) ps(e[n], t);
      return e;
    }

    function ms(e, t, n) {
      const i = arguments.length;
      return 2 === i ? Object(s["v"])(t) && !Object(s["o"])(t) ? Kn(t) ? Zn(e, null, [t]) : Zn(e, t) : Zn(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === i && Kn(n) && (n = [n]), Zn(e, t, n));
    }

    Symbol("");

    const gs = "3.2.20",
          bs = "http://www.w3.org/2000/svg",
          vs = "undefined" !== typeof document ? document : null,
          _s = new Map(),
          ys = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      },
      remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, n, i) => {
        const s = t ? vs.createElementNS(bs, e) : vs.createElement(e, n ? {
          is: n
        } : void 0);
        return "select" === e && i && null != i.multiple && s.setAttribute("multiple", i.multiple), s;
      },
      createText: e => vs.createTextNode(e),
      createComment: e => vs.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: e => e.parentNode,
      nextSibling: e => e.nextSibling,
      querySelector: e => vs.querySelector(e),

      setScopeId(e, t) {
        e.setAttribute(t, "");
      },

      cloneNode(e) {
        const t = e.cloneNode(!0);
        return "_value" in e && (t._value = e._value), t;
      },

      insertStaticContent(e, t, n, i) {
        const s = n ? n.previousSibling : t.lastChild;

        let o = _s.get(e);

        if (!o) {
          const t = vs.createElement("template");

          if (t.innerHTML = i ? `<svg>${e}</svg>` : e, o = t.content, i) {
            const e = o.firstChild;

            while (e.firstChild) o.appendChild(e.firstChild);

            o.removeChild(e);
          }

          _s.set(e, o);
        }

        return t.insertBefore(o.cloneNode(!0), n), [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
      }

    };

    function ws(e, t, n) {
      const i = e._vtc;
      i && (t = (t ? [t, ...i] : [...i]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
    }

    function Os(e, t, n) {
      const i = e.style,
            o = i.display;
      if (n) {
        if (Object(s["D"])(n)) t !== n && (i.cssText = n);else {
          for (const e in n) Cs(i, e, n[e]);

          if (t && !Object(s["D"])(t)) for (const e in t) null == n[e] && Cs(i, e, "");
        }
      } else e.removeAttribute("style");
      "_vod" in e && (i.display = o);
    }

    const xs = /\s*!important$/;

    function Cs(e, t, n) {
      if (Object(s["o"])(n)) n.forEach(n => Cs(e, t, n));else if (t.startsWith("--")) e.setProperty(t, n);else {
        const i = js(e, t);
        xs.test(n) ? e.setProperty(Object(s["l"])(i), n.replace(xs, ""), "important") : e[i] = n;
      }
    }

    const Es = ["Webkit", "Moz", "ms"],
          ks = {};

    function js(e, t) {
      const n = ks[t];
      if (n) return n;
      let i = Object(s["e"])(t);
      if ("filter" !== i && i in e) return ks[t] = i;
      i = Object(s["f"])(i);

      for (let s = 0; s < Es.length; s++) {
        const n = Es[s] + i;
        if (n in e) return ks[t] = n;
      }

      return t;
    }

    const Ts = "http://www.w3.org/1999/xlink";

    function Ss(e, t, n, i, o) {
      if (i && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(Ts, t.slice(6, t.length)) : e.setAttributeNS(Ts, t, n);else {
        const i = Object(s["C"])(t);
        null == n || i && !Object(s["m"])(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
      }
    }

    function As(e, t, n, i, o, r, a) {
      if ("innerHTML" === t || "textContent" === t) return i && a(i, o, r), void (e[t] = null == n ? "" : n);

      if ("value" === t && "PROGRESS" !== e.tagName) {
        e._value = n;
        const i = null == n ? "" : n;
        return e.value !== i && (e.value = i), void (null == n && e.removeAttribute(t));
      }

      if ("" === n || null == n) {
        const i = typeof e[t];
        if ("boolean" === i) return void (e[t] = Object(s["m"])(n));
        if (null == n && "string" === i) return e[t] = "", void e.removeAttribute(t);

        if ("number" === i) {
          try {
            e[t] = 0;
          } catch (l) {}

          return void e.removeAttribute(t);
        }
      }

      try {
        e[t] = n;
      } catch (c) {
        0;
      }
    }

    let Is = Date.now,
        Ls = !1;

    if ("undefined" !== typeof window) {
      Is() > document.createEvent("Event").timeStamp && (Is = () => performance.now());
      const e = navigator.userAgent.match(/firefox\/(\d+)/i);
      Ls = !!(e && Number(e[1]) <= 53);
    }

    let Ds = 0;

    const Ps = Promise.resolve(),
          Ms = () => {
      Ds = 0;
    },
          Ns = () => Ds || (Ps.then(Ms), Ds = Is());

    function Hs(e, t, n, i) {
      e.addEventListener(t, n, i);
    }

    function Rs(e, t, n, i) {
      e.removeEventListener(t, n, i);
    }

    function Bs(e, t, n, i, s = null) {
      const o = e._vei || (e._vei = {}),
            r = o[t];
      if (i && r) r.value = i;else {
        const [n, a] = zs(t);

        if (i) {
          const r = o[t] = $s(i, s);
          Hs(e, n, r, a);
        } else r && (Rs(e, n, r, a), o[t] = void 0);
      }
    }

    const Fs = /(?:Once|Passive|Capture)$/;

    function zs(e) {
      let t;

      if (Fs.test(e)) {
        let n;
        t = {};

        while (n = e.match(Fs)) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
      }

      return [Object(s["l"])(e.slice(2)), t];
    }

    function $s(e, t) {
      const n = e => {
        const i = e.timeStamp || Is();
        (Ls || i >= n.attached - 1) && Mi(Ws(e, n.value), t, 5, [e]);
      };

      return n.value = e, n.attached = Ns(), n;
    }

    function Ws(e, t) {
      if (Object(s["o"])(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
          n.call(e), e._stopped = !0;
        }, t.map(e => t => !t._stopped && e(t));
      }

      return t;
    }

    const qs = /^on[a-z]/,
          Us = (e, t, n, i, o = !1, r, a, l, c) => {
      "class" === t ? ws(e, i, o) : "style" === t ? Os(e, n, i) : Object(s["w"])(t) ? Object(s["u"])(t) || Bs(e, t, n, i, a) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : Vs(e, t, i, o)) ? As(e, t, i, r, a, l, c) : ("true-value" === t ? e._trueValue = i : "false-value" === t && (e._falseValue = i), Ss(e, t, i, o));
    };

    function Vs(e, t, n, i) {
      return i ? "innerHTML" === t || "textContent" === t || !!(t in e && qs.test(t) && Object(s["p"])(n)) : "spellcheck" !== t && "draggable" !== t && "form" !== t && ("list" !== t || "INPUT" !== e.tagName) && ("type" !== t || "TEXTAREA" !== e.tagName) && (!qs.test(t) || !Object(s["D"])(n)) && t in e;
    }

    "undefined" !== typeof HTMLElement && HTMLElement;

    const Ks = "transition",
          Gs = "animation",
          Xs = (e, {
      slots: t
    }) => ms(ct, Zs(e), t);

    Xs.displayName = "Transition";

    const Ys = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: !0
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String
    },
          Qs = (Xs.props = Object(s["h"])({}, ct.props, Ys), (e, t = []) => {
      Object(s["o"])(e) ? e.forEach(e => e(...t)) : e && e(...t);
    }),
          Js = e => !!e && (Object(s["o"])(e) ? e.some(e => e.length > 1) : e.length > 1);

    function Zs(e) {
      const t = {};

      for (const s in e) s in Ys || (t[s] = e[s]);

      if (!1 === e.css) return t;

      const {
        name: n = "v",
        type: i,
        duration: o,
        enterFromClass: r = n + "-enter-from",
        enterActiveClass: a = n + "-enter-active",
        enterToClass: l = n + "-enter-to",
        appearFromClass: c = r,
        appearActiveClass: u = a,
        appearToClass: d = l,
        leaveFromClass: h = n + "-leave-from",
        leaveActiveClass: f = n + "-leave-active",
        leaveToClass: p = n + "-leave-to"
      } = e,
            m = eo(o),
            g = m && m[0],
            b = m && m[1],
            {
        onBeforeEnter: v,
        onEnter: _,
        onEnterCancelled: y,
        onLeave: w,
        onLeaveCancelled: O,
        onBeforeAppear: x = v,
        onAppear: C = _,
        onAppearCancelled: E = y
      } = t,
            k = (e, t, n) => {
        io(e, t ? d : l), io(e, t ? u : a), n && n();
      },
            j = (e, t) => {
        io(e, p), io(e, f), t && t();
      },
            T = e => (t, n) => {
        const s = e ? C : _,
              o = () => k(t, e, n);

        Qs(s, [t, o]), so(() => {
          io(t, e ? c : r), no(t, e ? d : l), Js(s) || ro(t, i, g, o);
        });
      };

      return Object(s["h"])(t, {
        onBeforeEnter(e) {
          Qs(v, [e]), no(e, r), no(e, a);
        },

        onBeforeAppear(e) {
          Qs(x, [e]), no(e, c), no(e, u);
        },

        onEnter: T(!1),
        onAppear: T(!0),

        onLeave(e, t) {
          const n = () => j(e, t);

          no(e, h), uo(), no(e, f), so(() => {
            io(e, h), no(e, p), Js(w) || ro(e, i, b, n);
          }), Qs(w, [e, n]);
        },

        onEnterCancelled(e) {
          k(e, !1), Qs(y, [e]);
        },

        onAppearCancelled(e) {
          k(e, !0), Qs(E, [e]);
        },

        onLeaveCancelled(e) {
          j(e), Qs(O, [e]);
        }

      });
    }

    function eo(e) {
      if (null == e) return null;
      if (Object(s["v"])(e)) return [to(e.enter), to(e.leave)];
      {
        const t = to(e);
        return [t, t];
      }
    }

    function to(e) {
      const t = Object(s["N"])(e);
      return t;
    }

    function no(e, t) {
      t.split(/\s+/).forEach(t => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t);
    }

    function io(e, t) {
      t.split(/\s+/).forEach(t => t && e.classList.remove(t));
      const {
        _vtc: n
      } = e;
      n && (n.delete(t), n.size || (e._vtc = void 0));
    }

    function so(e) {
      requestAnimationFrame(() => {
        requestAnimationFrame(e);
      });
    }

    let oo = 0;

    function ro(e, t, n, i) {
      const s = e._endId = ++oo,
            o = () => {
        s === e._endId && i();
      };

      if (n) return setTimeout(o, n);
      const {
        type: r,
        timeout: a,
        propCount: l
      } = ao(e, t);
      if (!r) return i();
      const c = r + "end";
      let u = 0;

      const d = () => {
        e.removeEventListener(c, h), o();
      },
            h = t => {
        t.target === e && ++u >= l && d();
      };

      setTimeout(() => {
        u < l && d();
      }, a + 1), e.addEventListener(c, h);
    }

    function ao(e, t) {
      const n = window.getComputedStyle(e),
            i = e => (n[e] || "").split(", "),
            s = i(Ks + "Delay"),
            o = i(Ks + "Duration"),
            r = lo(s, o),
            a = i(Gs + "Delay"),
            l = i(Gs + "Duration"),
            c = lo(a, l);

      let u = null,
          d = 0,
          h = 0;
      t === Ks ? r > 0 && (u = Ks, d = r, h = o.length) : t === Gs ? c > 0 && (u = Gs, d = c, h = l.length) : (d = Math.max(r, c), u = d > 0 ? r > c ? Ks : Gs : null, h = u ? u === Ks ? o.length : l.length : 0);
      const f = u === Ks && /\b(transform|all)(,|$)/.test(n[Ks + "Property"]);
      return {
        type: u,
        timeout: d,
        propCount: h,
        hasTransform: f
      };
    }

    function lo(e, t) {
      while (e.length < t.length) e = e.concat(e);

      return Math.max(...t.map((t, n) => co(t) + co(e[n])));
    }

    function co(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function uo() {
      return document.body.offsetHeight;
    }

    new WeakMap(), new WeakMap();
    const ho = {
      beforeMount(e, {
        value: t
      }, {
        transition: n
      }) {
        e._vod = "none" === e.style.display ? "" : e.style.display, n && t ? n.beforeEnter(e) : fo(e, t);
      },

      mounted(e, {
        value: t
      }, {
        transition: n
      }) {
        n && t && n.enter(e);
      },

      updated(e, {
        value: t,
        oldValue: n
      }, {
        transition: i
      }) {
        !t !== !n && (i ? t ? (i.beforeEnter(e), fo(e, !0), i.enter(e)) : i.leave(e, () => {
          fo(e, !1);
        }) : fo(e, t));
      },

      beforeUnmount(e, {
        value: t
      }) {
        fo(e, t);
      }

    };

    function fo(e, t) {
      e.style.display = t ? e._vod : "none";
    }

    const po = Object(s["h"])({
      patchProp: Us
    }, ys);
    let mo;

    function go() {
      return mo || (mo = wn(po));
    }

    const bo = (...e) => {
      const t = go().createApp(...e);
      const {
        mount: n
      } = t;
      return t.mount = e => {
        const i = vo(e);
        if (!i) return;
        const o = t._component;
        Object(s["p"])(o) || o.render || o.template || (o.template = i.innerHTML), i.innerHTML = "";
        const r = n(i, !1, i instanceof SVGElement);
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
      }, t;
    };

    function vo(e) {
      if (Object(s["D"])(e)) {
        const t = document.querySelector(e);
        return t;
      }

      return e;
    }

    const _o = {
      class: "container text-center main-container"
    },
          yo = {
      class: "form-check form-switch position-absolute top-0 start-0"
    },
          wo = {
      class: "form-check-label",
      for: "flexSwitchCheckDefault"
    },
          Oo = {
      class: "row align-items-center justify-content-center",
      style: {
        height: "100%"
      }
    },
          xo = {
      class: "col p-0",
      style: {
        height: "100%"
      }
    };

    function Co(e, t, n, i, o, r) {
      return Fn(), Un("div", _o, [Jn("div", yo, [Jn("input", {
        onClick: t[0] || (t[0] = e => o.isConditionA = !o.isConditionA),
        class: "form-check-input",
        type: "checkbox",
        id: "flexSwitchCheckDefault"
      }), Jn("label", wo, "Condition " + Object(s["L"])(o.isConditionA ? "A" : "B"), 1)]), Jn("div", Oo, [Jn("div", xo, [(Fn(), Vn(In(r.currentComponent), ci({
        onInstructionsFinish: r.instructionsFinish,
        onScatterFinish: r.scatterFinish,
        onColorsFinish: r.colorsFinish,
        onSurveyFinish: r.surveyFinish,
        key: this.trialIndex
      }, r.currentProps), null, 16, ["onInstructionsFinish", "onScatterFinish", "onColorsFinish", "onSurveyFinish"]))])])]);
    }

    const Eo = {
      class: "container",
      style: {
        height: "100%"
      }
    },
          ko = {
      class: "row",
      style: {
        height: "10%"
      }
    },
          jo = {
      class: "col mt-auto"
    },
          To = {
      class: "h1 instruction display-text"
    },
          So = {
      class: "row",
      style: {
        height: "80%"
      }
    },
          Ao = {
      class: "col pt-2"
    },
          Io = {
      class: "instruction display-text"
    },
          Lo = {
      class: "row",
      style: {
        height: "10%"
      }
    },
          Do = {
      class: "col"
    },
          Po = {
      key: 0,
      class: "btn-group",
      role: "group"
    };

    function Mo(e, t, n, i, o, r) {
      const a = Sn("Button");
      return Fn(), Un("div", Eo, [Jn("div", ko, [Jn("div", jo, [Jn("p", To, Object(s["L"])(o.pages[o.currentPage].title), 1)])]), Jn("div", So, [Jn("div", Ao, [Jn("p", Io, Object(s["L"])(o.pages[o.currentPage].text), 1)])]), Jn("div", Lo, [Jn("div", Do, [n.isDone ? oi("", !0) : (Fn(), Un("div", Po, [Zn(a, {
        onBtnClick: t[0] || (t[0] = e => r.onClickPrev()),
        disabled: 0 == o.currentPage,
        content: "< prev"
      }, null, 8, ["disabled"]), Zn(a, {
        onBtnClick: t[1] || (t[1] = e => r.onClickNext()),
        content: o.currentPage == this.pages.length - 1 ? "start" : "next >"
      }, null, 8, ["content"])]))])])]);
    }

    const No = ["disabled"],
          Ho = ["innerHTML"];

    function Ro(e, t, n, i, s, o) {
      return Fn(), Un("button", {
        onClick: t[0] || (t[0] = e => o.onClick()),
        class: "btn btn-primary",
        disabled: n.disabled
      }, [Jn("div", {
        class: "display-text",
        innerHTML: n.content
      }, null, 8, Ho)], 8, No);
    }

    var Bo = {
      name: "Button",
      props: {
        content: String,
        disabled: Boolean,
        emit: String
      },
      methods: {
        onClick() {
          this.$emit("btn-click");
        }

      },
      emits: ["btn-click"]
    },
        Fo = n("6b0d"),
        zo = n.n(Fo);
    const $o = zo()(Bo, [["render", Ro]]);
    var Wo = $o;

    function qo({
      groups: e = [{
        size: 0,
        certainty: 0
      }],
      delay: t = 0,
      autoHintClicks: n = {
        min: -1,
        max: -1
      }
    }) {
      return {
        groups: e,
        delay: t,
        autoHintClicks: n
      };
    }

    function Uo({
      taskName: e = "ColorsTrial",
      instructions: t,
      numberOfTrials: n,
      hintCreator: i = function () {
        return qo({});
      },
      isPractice: s = !1,
      isTutorial: o = !1,
      shouldDisplayFeedback: r = !1,
      alertnessTestIndex: a = -1
    }) {
      return {
        taskName: e,
        instructions: t,
        isPractice: s,
        isTutorial: o,
        numberOfTrials: n,
        shouldDisplayFeedback: r,
        hintCreator: i,
        alertnessTestIndex: a
      };
    }

    const Vo = [Uo({
      instructions: [{
        title: "Welcome to the Color Judgement Experiment!",
        text: "\n  In this game you will be asked to judge the brightness of different colors.\n  On every step, you will be presented with three colorful squares, like this:\n  TODO: add png\n  \n  The upper two squares will remain static and will not change during a trial. They represent two ends of a brightness continuum of a specific hue.\n  The upper right square represents the darkest point on this spectrum, and the left one represents the brightest point.\n  In the beginning of every trial, the square in the middle (hereafter: the game square) will present a color at a specific point along the continuum, picked at random so that sometimes it will be closer in brightness-level to that\n  of the bright end and sometimes to the dark end.\n  You can change the brightness level of the game square by pressing the arrow keys on your keyboard:\n  - Pressing the right arrow key will turn the color in the game square darker.\n  - Pressing the left arrow key will turn the color in the game square lighter.\n  "
      }, {
        title: "Your Goal",
        text: "\n  Your goal in this task is to pin-point the most accurate middle brightness level between the two upper squares.\n  How to achieve this goal? In every trial, you can press the arrow-keys as many times as you like, thus modifying the game square’s brightness. When you feel that the color you’ve settled on represents the exact mid-point, you should press the “submit” button appearing under it.\n  Option B:\n  When you have settled on a color that you judge to be the exact mid-point of the brightness continuum, press the “submit” button appearing under it.\n  "
      }, {
        title: "The Practice Phase",
        text: "\n  The following practice will allow you to familiarize yourself with the interface of this task and practice its operation.\n  Notice that your performance in the training phase will not be counted towards your final results. You will be notified when the actual experiment begins.\n  \n  Press “start” to start the practice phase.\n  "
      }],
      isPractice: !0,
      isTutorial: !0,
      numberOfTrials: 5
    }), Uo({
      instructions: [{
        title: "Task has ended",
        text: "Thank you for participating. Bye."
      }]
    })];
    var Ko = Vo,
        Go = {
      name: "Instructions",
      props: {
        phaseIndex: Number,
        isDone: Boolean
      },

      data() {
        return {
          currentPage: 0,
          pages: Ko[this.phaseIndex].instructions
        };
      },

      components: {
        Button: Wo
      },
      emits: ["instructions-finish"],
      methods: {
        onClickNext() {
          this.currentPage < this.pages.length - 1 ? this.currentPage += 1 : this.$emit("instructions-finish");
        },

        onClickPrev() {
          this.currentPage > 0 && (this.currentPage -= 1);
        }

      },

      mounted() {
        this.isDone && qthis.showNextButton();
      }

    };
    n("ae8f");
    const Xo = zo()(Go, [["render", Mo], ["__scopeId", "data-v-42bbfbec"]]);
    var Yo = Xo;
    const Qo = {
      class: "container-fluid"
    },
          Jo = {
      class: "row"
    },
          Zo = Jn("div", {
      class: "col"
    }, null, -1),
          er = {
      class: "col"
    },
          tr = Jn("div", {
      class: "col"
    }, null, -1),
          nr = {
      class: "row"
    },
          ir = {
      class: "col"
    },
          sr = {
      class: "col"
    },
          or = {
      class: "btn-group",
      role: "group"
    },
          rr = {
      class: "col"
    };

    function ar(e, t, n, i, s, o) {
      const r = Sn("Hint"),
            a = Sn("DisplayedHint"),
            l = Sn("Button");
      return Fn(), Un("div", Qo, [Jn("div", Jo, [Zo, Jn("div", er, [Zn(r, {
        onHintClick: o.onHint,
        phaseIndex: n.phaseIndex,
        trialIndex: n.trialIndex
      }, null, 8, ["onHintClick", "phaseIndex", "trialIndex"])]), tr]), Jn("div", nr, [Jn("div", ir, ["left" === s.hint.side ? (Fn(), Vn(a, {
        key: 0,
        hint: s.hint
      }, null, 8, ["hint"])) : oi("", !0)]), Jn("div", sr, [Jn("div", or, [Zn(l, {
        onBtnClick: t[0] || (t[0] = e => o.onChoose("left")),
        content: "שמאל"
      }), Zn(l, {
        onBtnClick: t[1] || (t[1] = e => o.onChoose("right")),
        content: "ימין"
      })])]), Jn("div", rr, ["right" === s.hint.side ? (Fn(), Vn(a, {
        key: 0,
        hint: s.hint
      }, null, 8, ["hint"])) : oi("", !0)])])]);
    }

    function lr(e, t, n, i, s, o) {
      const r = Sn("Button");
      return Fn(), Vn(r, {
        onBtnClick: o.onClick,
        content: s.hintContent,
        disabled: s.isClicked || n.isDisabled
      }, null, 8, ["onBtnClick", "content", "disabled"]);
    }

    var cr = {
      name: "Hint",
      components: {
        Button: Wo
      },
      props: {
        hintGroupSize: Number,
        isDisabled: {
          type: Boolean,
          default: !1
        }
      },

      data() {
        return {
          isClicked: !1,
          hintContent: `\n          <p class="h5">\n              Press for hint <i class='bi bi-lightbulb-fill'></i>\n          </p>\n          <p class="h5 m-0">\n            <i class='h4 bi bi-people-fill'></i>\n            <br />\n            ${this.hintGroupSize}\n        </p>`
        };
      },

      emits: ["hint-click"],
      methods: {
        onClick() {
          this.isClicked = !0, this.$emit("hint-click");
        }

      }
    };
    const ur = zo()(cr, [["render", lr]]);
    var dr = ur;
    const hr = {
      key: 0
    },
          fr = Jn("i", {
      class: "fs-1 bi bi-check-circle"
    }, null, -1),
          pr = [fr],
          mr = {
      key: 1,
      class: "row"
    },
          gr = Jn("i", {
      class: "fs-1 bi bi-people-fill"
    }, null, -1),
          br = Jn("br", null, null, -1);

    function vr(e, t, n, i, o, r) {
      return "correct" === n.side ? (Fn(), Un("div", hr, pr)) : (Fn(), Un("div", mr, [Jn("div", {
        class: Object(s["I"])("col my-auto p-0 order-" + ("left" === n.side ? "last" : "first ms-4"))
      }, [gr, br, Jn("h2", null, Object(s["L"])(n.size), 1)], 2), Jn("div", {
        class: Object(s["I"])("col my-auto p-0 order-" + ("left" === n.side ? "first ms-4" : "last"))
      }, [Jn("i", {
        class: Object(s["I"])("fs-2 bi bi-arrow-" + n.side)
      }, null, 2)], 2)]));
    }

    var _r = {
      name: "DisplayedHint",
      props: {
        side: String,
        size: Number
      }
    };
    const yr = zo()(_r, [["render", vr]]);
    var wr = yr,
        Or = {
      name: "ScatterSurvey",
      components: {
        Hint: dr,
        Button: Wo,
        DisplayedHint: wr
      },
      props: {
        phaseIndex: Number,
        trialIndex: Number
      },

      data() {
        return {
          hint: {
            side: "",
            size: 0
          }
        };
      },

      emits: ["survey-finish"],
      methods: {
        onHint(e) {
          this.hint = e;
        },

        onChoose(e) {
          this.$emit("survey-finish", "" === this.hint.side, e, this.hint.side === e, this.hint.size);
        }

      }
    };
    const xr = zo()(Or, [["render", ar]]);
    var Cr = xr;
    const Er = {
      class: "row"
    },
          kr = {
      class: "col"
    },
          jr = ["viewBox"],
          Tr = ["cx", "cy", "r", "stroke-width"],
          Sr = ["cx", "cy", "r"];

    function Ar(e, t, n, i, s, o) {
      return Fn(), Un("div", Er, [Jn("div", kr, [pn((Fn(), Un("svg", {
        class: "hideElement",
        viewBox: "0 0 " + (4 * (s.containerR + s.containerStrokeWidth)).toString() + " " + (2 * (s.containerR + s.containerStrokeWidth)).toString(),
        xmlns: "http://www.w3.org/2000/svg"
      }, [(Fn(!0), Un(Pn, null, ui([0, s.gap], (e, t) => (Fn(), Un("circle", {
        key: t,
        cx: e + s.containerR + (1 + 2 * t) * s.containerStrokeWidth,
        cy: s.containerR + s.containerStrokeWidth,
        r: s.containerR + s.containerStrokeWidth,
        "stroke-width": s.containerStrokeWidth,
        stroke: "white",
        fill: "black"
      }, null, 8, Tr))), 128)), (Fn(!0), Un(Pn, null, ui(o.getCircles(), (e, t) => (Fn(), Un("circle", {
        key: t,
        cx: e.x,
        cy: e.y,
        r: e.r,
        fill: "blue"
      }, null, 8, Sr))), 128))], 8, jr)), [[ho, s.elementVisible]])])]);
    }

    const Ir = n("6125");

    function Lr(e, t, n) {
      const i = Ir([e, t.toString(), n.toString()].join("-"));
      return {
        getInt: function (e) {
          return Math.floor(i() * e);
        },
        getElement: function (e) {
          return e[this.getInt(e.length)];
        },
        getBool: function (e = .5) {
          return i() >= 1 - e;
        }
      };
    }

    var Dr = Lr;
    const Pr = window.innerWidth,
          Mr = window.innerHeight;

    function Nr(e, t) {
      var n = e.x - t.x,
          i = e.y - t.y;
      return Math.sqrt(n * n + i * i);
    }

    function Hr(e, t, n) {
      const i = e.getInt(t + 1 - n),
            s = e.getInt(360);
      return {
        x: i * Math.cos(s),
        y: i * Math.sin(s),
        r: n
      };
    }

    var Rr = {
      name: "ScatterTrial",
      props: {
        phaseIndex: Number,
        trialIndex: Number
      },

      data() {
        const e = 25,
              t = Dr("scatter", this.phaseIndex, this.trialIndex);
        let n = 50,
            i = 50,
            s = 1 + t.getInt(25);
        return t.getBool() && (s *= -1), t.getBool() ? n += s : i += s, {
          rng: t,
          containerStrokeWidth: 1,
          containerR: e,
          innerR: 2,
          gap: 2 * e,
          elementVisible: !0,
          stageSize: {
            width: Pr,
            height: Mr
          },
          leftSize: n,
          rightSize: i
        };
      },

      created() {
        setTimeout(() => {
          this.elementVisible = !1, this.$emit("scatter-finish", this.leftSize, this.rightSize);
        }, 700);
      },

      emits: ["scatter-finish"],
      methods: {
        getCirclesWithRelativeCoordinates(e) {
          var t = [];

          while (t.length < e) {
            let e = !1,
                s = Hr(this.rng, this.containerR, this.innerR);

            for (var n = 0; n < t.length; n++) {
              var i = Nr(s, t[n]);

              if (i < 2 * this.innerR) {
                e = !0;
                break;
              }
            }

            e || t.push(s);
          }

          return t;
        },

        getCircles() {
          let e = this.getCirclesWithRelativeCoordinates(this.leftSize),
              t = this.getCirclesWithRelativeCoordinates(this.rightSize),
              n = [e, t];

          for (let i = 0; i < n.length; i++) for (let e = 0; e < n[i].length; e++) n[i][e].x += 1 + 2 * i * this.containerStrokeWidth + i * this.gap + this.containerR, n[i][e].y += this.containerStrokeWidth + this.containerR;

          return e.concat(t);
        }

      }
    };
    const Br = zo()(Rr, [["render", Ar]]);
    var Fr = Br;

    const zr = {
      class: "container p-0",
      style: {
        height: "100%"
      }
    },
          $r = {
      class: "row",
      style: {
        height: "20%"
      }
    },
          Wr = {
      class: "col mt-auto"
    },
          qr = Jn("div", {
      class: "row",
      style: {
        height: "10%"
      }
    }, [Jn("div", {
      class: "col my-auto"
    }, [Jn("h2", {
      id: "hint-timer",
      class: "m-0"
    }, " ")])], -1),
          Ur = {
      class: "row",
      style: {
        height: "40%"
      }
    },
          Vr = {
      class: "col my-auto"
    },
          Kr = {
      class: "col-7 my-auto"
    },
          Gr = {
      class: "container"
    },
          Xr = {
      class: "row mb-5",
      style: {
        height: "50%"
      }
    },
          Yr = {
      class: "col p-0 pt-1"
    },
          Qr = {
      class: "col p-0"
    },
          Jr = {
      class: "col p-0 pt-1"
    },
          Zr = {
      class: "row mb-4",
      style: {
        height: "50%"
      }
    },
          ea = {
      class: "col"
    },
          ta = {
      class: "col my-auto"
    },
          na = {
      class: "row",
      style: {
        height: "30%"
      }
    },
          ia = Jn("div", {
      class: "col"
    }, null, -1),
          sa = {
      class: "col-6"
    },
          oa = {
      class: "row"
    },
          ra = {
      class: "col"
    },
          aa = Jn("div", {
      class: "col"
    }, null, -1),
          la = {
      class: "col"
    },
          ca = {
      class: "row"
    },
          ua = {
      class: "col my-auto"
    },
          da = ["id"],
          ha = Jn("div", {
      class: "col"
    }, null, -1),
          fa = {
      id: "hint-ack-modal",
      class: "modal fade",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      tabindex: "-1",
      "aria-hidden": "true"
    },
          pa = {
      class: "modal-dialog"
    },
          ma = {
      class: "modal-content"
    },
          ga = Jn("div", {
      class: "modal-body"
    }, [Jn("h3", null, "Please confirm that you've seen the displayed hint.")], -1),
          ba = {
      class: "modal-footer"
    },
          va = ii(" ok "),
          _a = Jn("i", {
      class: "bi bi-check"
    }, null, -1),
          ya = [va, _a],
          wa = {
      id: "score-modal",
      class: "modal fade",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      tabindex: "-1",
      "aria-labelledby": "score-modal-label",
      "aria-hidden": "true"
    },
          Oa = {
      class: "modal-dialog"
    },
          xa = {
      class: "modal-content"
    },
          Ca = si('<div class="modal-header"><h5 class="modal-title" id="score-modal-label"></h5></div><div class="modal-body"><div class="container-fluid"><div class="row align-items-end"><div class="col p-0"><p class="text-start mb-0">0</p></div><div class="col p-0"><p class="text-center mb-0">50</p></div><div class="col p-0"><p class="text-end mb-0">100</p></div></div><div class="row"><input id="score-range" type="range" class="form-range" min="0" max="100" disabled></div></div></div>', 2),
          Ea = {
      class: "modal-footer"
    },
          ka = ii(" ok "),
          ja = Jn("i", {
      class: "bi bi-check"
    }, null, -1),
          Ta = [ka, ja];

    function Sa(e, t, n, i, o, r) {
      const a = Sn("Hint"),
            l = Sn("DisplayedHint"),
            c = Sn("Square"),
            u = Sn("ArrowKey"),
            d = Sn("Button");
      return Fn(), Un("div", zr, [Jn("div", $r, [Jn("div", Wr, [pn(Zn(a, {
        onHintClick: r.onHint,
        hintGroupSize: o.hintGroup.size,
        isDisabled: "" != o.hintSide
      }, null, 8, ["onHintClick", "hintGroupSize", "isDisabled"]), [[ho, o.trialHint.autoHintClicks.min <= 0 && 0 != o.hintGroup.size]])])]), qr, Jn("div", Ur, [Jn("div", Vr, ["left" === o.displayedHintSide ? (Fn(), Vn(l, {
        key: 0,
        side: o.hintSide,
        size: o.hintGroup.size
      }, null, 8, ["side", "size"])) : oi("", !0)]), Jn("div", Kr, [Jn("div", Gr, [Jn("div", Xr, [Jn("div", Yr, [Zn(c, {
        alignment: "s",
        color: o.displayedLeftColor
      }, null, 8, ["color"])]), Jn("div", Qr, ["correct" === o.displayedHintSide ? (Fn(), Vn(l, {
        key: 0,
        side: o.hintSide,
        size: o.hintGroup.size
      }, null, 8, ["side", "size"])) : oi("", !0)]), Jn("div", Jr, [Zn(c, {
        alignment: "e",
        color: o.displayeRightColor,
        size: o.hintGroup.size
      }, null, 8, ["color", "size"])])]), Jn("div", Zr, [Jn("div", ea, [Zn(c, {
        alignment: "x",
        color: r.midColor
      }, null, 8, ["color"])])])])]), Jn("div", ta, ["right" === o.displayedHintSide ? (Fn(), Vn(l, {
        key: 0,
        side: o.hintSide,
        size: o.hintGroup.size
      }, null, 8, ["side", "size"])) : oi("", !0)])]), Jn("div", na, [ia, Jn("div", sa, [Jn("div", oa, [Jn("div", ra, [Zn(u, {
        side: "left",
        isInvisible: o.isTutorial,
        initPresses: o.tutorialPresses,
        isPressed: "left" == o.pressedKey,
        isDisabled: r.isArrowKeyDisabled(o.maxMid)
      }, null, 8, ["isInvisible", "initPresses", "isPressed", "isDisabled"])]), aa, Jn("div", la, [Zn(u, {
        side: "right",
        isInvisible: !1,
        initPresses: o.tutorialPresses,
        isPressed: "right" == o.pressedKey,
        isDisabled: r.isArrowKeyDisabled(o.minMid)
      }, null, 8, ["initPresses", "isPressed", "isDisabled"])])]), Jn("div", ca, [Jn("div", ua, [Jn("span", {
        id: "btn-" + o.submitID,
        class: Object(s["I"])("d-inline-block " + (o.isTutorial ? "invisible" : "")),
        "data-bs-trigger": "manual",
        "data-bs-placement": "bottom",
        "data-bs-content": "Press the submit button when you believe you're done"
      }, [Zn(d, {
        onBtnClick: r.onSubmit,
        content: o.submitID,
        disabled: o.shouldWitholdInput
      }, null, 8, ["onBtnClick", "content", "disabled"])], 10, da)])])]), ha]), Jn("div", fa, [Jn("div", pa, [Jn("div", ma, [ga, Jn("div", ba, [Jn("button", {
        type: "button",
        class: "btn btn-primary",
        onClick: t[0] || (t[0] = e => this.shouldWitholdInput = !1),
        "data-bs-dismiss": "modal"
      }, ya)])])])]), Jn("div", wa, [Jn("div", Oa, [Jn("div", xa, [Ca, Jn("div", Ea, [Jn("button", {
        type: "button",
        class: "btn btn-primary",
        onClick: t[1] || (t[1] = (...e) => r.onSubmit && r.onSubmit(...e)),
        "data-bs-dismiss": "modal"
      }, Ta)])])])])]);
    }

    function Aa(e) {
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
          n = parseInt(t[1], 16),
          i = parseInt(t[2], 16),
          s = parseInt(t[3], 16);
      n /= 255, i /= 255, s /= 255;
      var o,
          r,
          a = Math.max(n, i, s),
          l = Math.min(n, i, s),
          c = (a + l) / 2;
      if (a == l) o = r = 0;else {
        var u = a - l;

        switch (r = c > .5 ? u / (2 - a - l) : u / (a + l), a) {
          case n:
            o = (i - s) / u + (i < s ? 6 : 0);
            break;

          case i:
            o = (s - n) / u + 2;
            break;

          case s:
            o = (n - i) / u + 4;
            break;
        }

        o /= 6;
      }
      const d = new Object();
      return d["h"] = 100 * o, d["s"] = 100 * r, d["l"] = 100 * c, d;
    }

    function Ia(e, t, n) {
      t /= 100, n /= 100;
      let i = (1 - Math.abs(2 * n - 1)) * t,
          s = i * (1 - Math.abs(e / 60 % 2 - 1)),
          o = n - i / 2,
          r = 0,
          a = 0,
          l = 0;
      return 0 <= e && e < 60 ? (r = i, a = s, l = 0) : 60 <= e && e < 120 ? (r = s, a = i, l = 0) : 120 <= e && e < 180 ? (r = 0, a = i, l = s) : 180 <= e && e < 240 ? (r = 0, a = s, l = i) : 240 <= e && e < 300 ? (r = s, a = 0, l = i) : 300 <= e && e < 360 && (r = i, a = 0, l = s), r = Math.round(255 * (r + o)).toString(16), a = Math.round(255 * (a + o)).toString(16), l = Math.round(255 * (l + o)).toString(16), 1 == r.length && (r = "0" + r), 1 == a.length && (a = "0" + a), 1 == l.length && (l = "0" + l), "#" + r + a + l;
    }

    function La(e, t) {
      const n = Aa(e);
      return n["l"] = t, Ia(n["h"], n["s"], n["l"]);
    }

    var Da = La;

    function Pa({
      phaseIndex: e,
      trialIndex: t,
      isTutorial: n,
      isPractice: i,
      isAlertTest: s,
      leftValue: o,
      rightValue: r,
      pickedValue: a,
      didGiveHint: l,
      displayedHintSide: c,
      isDisplayedHintTrue: u,
      didFollowHint: d,
      hintGroupSize: h,
      trialTimeMs: f,
      keyPresses: p
    }) {
      return {
        phaseIndex: e,
        trialIndex: t,
        isTutorial: n,
        isPractice: i,
        isAlertTest: s,
        leftValue: o,
        rightValue: r,
        pickedValue: a,
        didGiveHint: l,
        displayedHintSide: c,
        isDisplayedHintTrue: u,
        didFollowHint: d,
        hintGroupSize: h,
        trialTimeMs: f,
        keyPresses: p
      };
    }

    var Ma = Pa;

    function Na(e, t, n, i, o, r) {
      return Fn(), Un("div", {
        class: Object(s["I"])("m" + n.alignment + "-auto square"),
        style: Object(s["J"])("background-color: " + n.color)
      }, null, 6);
    }

    var Ha = {
      name: "Square",
      props: {
        color: String,
        alignment: String
      }
    };
    n("a448");
    const Ra = zo()(Ha, [["render", Na], ["__scopeId", "data-v-7859b75f"]]);
    var Ba = Ra;
    const Fa = ["id", "data-bs-placement", "data-bs-content"];

    function za(e, t, n, i, o, r) {
      return Fn(), Un("div", {
        class: Object(s["I"])("text-" + ("right" === n.side ? "end" : "start"))
      }, [Jn("span", {
        id: "btn-" + n.side,
        class: Object(s["I"])("d-inline-block" + (n.isInvisible ? " invisible" : "")),
        "data-bs-trigger": "manual",
        "data-bs-placement": n.side,
        "data-bs-content": "Press " + n.side + " key on your keyboard " + n.initPresses.toString() + " times"
      }, [Jn("i", {
        class: Object(s["I"])("fs-1 bi bi-arrow-" + n.side + "-square" + (n.isPressed ? "-fill" : "")),
        style: Object(s["J"])(n.isDisabled ? "color: grey" : "")
      }, null, 6)], 10, Fa)], 2);
    }

    var $a = {
      props: {
        side: String,
        initPresses: Number,
        isDisabled: Boolean,
        isInvisible: Boolean,
        isPressed: Boolean
      }
    };
    const Wa = zo()($a, [["render", za]]);
    var qa = Wa,
        Ua = "top",
        Va = "bottom",
        Ka = "right",
        Ga = "left",
        Xa = "auto",
        Ya = [Ua, Va, Ka, Ga],
        Qa = "start",
        Ja = "end",
        Za = "clippingParents",
        el = "viewport",
        tl = "popper",
        nl = "reference",
        il = Ya.reduce(function (e, t) {
      return e.concat([t + "-" + Qa, t + "-" + Ja]);
    }, []),
        sl = [].concat(Ya, [Xa]).reduce(function (e, t) {
      return e.concat([t, t + "-" + Qa, t + "-" + Ja]);
    }, []),
        ol = "beforeRead",
        rl = "read",
        al = "afterRead",
        ll = "beforeMain",
        cl = "main",
        ul = "afterMain",
        dl = "beforeWrite",
        hl = "write",
        fl = "afterWrite",
        pl = [ol, rl, al, ll, cl, ul, dl, hl, fl];

    function ml(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }

    function gl(e) {
      if (null == e) return window;

      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return t && t.defaultView || window;
      }

      return e;
    }

    function bl(e) {
      var t = gl(e).Element;
      return e instanceof t || e instanceof Element;
    }

    function vl(e) {
      var t = gl(e).HTMLElement;
      return e instanceof t || e instanceof HTMLElement;
    }

    function _l(e) {
      if ("undefined" === typeof ShadowRoot) return !1;
      var t = gl(e).ShadowRoot;
      return e instanceof t || e instanceof ShadowRoot;
    }

    function yl(e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
            i = t.attributes[e] || {},
            s = t.elements[e];
        vl(s) && ml(s) && (Object.assign(s.style, n), Object.keys(i).forEach(function (e) {
          var t = i[e];
          !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    }

    function wl(e) {
      var t = e.state,
          n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var i = t.elements[e],
              s = t.attributes[e] || {},
              o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]),
              r = o.reduce(function (e, t) {
            return e[t] = "", e;
          }, {});
          vl(i) && ml(i) && (Object.assign(i.style, r), Object.keys(s).forEach(function (e) {
            i.removeAttribute(e);
          }));
        });
      };
    }

    var Ol = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: yl,
      effect: wl,
      requires: ["computeStyles"]
    };

    function xl(e) {
      return e.split("-")[0];
    }

    function Cl(e, t) {
      void 0 === t && (t = !1);
      var n = e.getBoundingClientRect(),
          i = 1,
          s = 1;
      return {
        width: n.width / i,
        height: n.height / s,
        top: n.top / s,
        right: n.right / i,
        bottom: n.bottom / s,
        left: n.left / i,
        x: n.left / i,
        y: n.top / s
      };
    }

    function El(e) {
      var t = Cl(e),
          n = e.offsetWidth,
          i = e.offsetHeight;
      return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: i
      };
    }

    function kl(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;

      if (n && _l(n)) {
        var i = t;

        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }

      return !1;
    }

    function jl(e) {
      return gl(e).getComputedStyle(e);
    }

    function Tl(e) {
      return ["table", "td", "th"].indexOf(ml(e)) >= 0;
    }

    function Sl(e) {
      return ((bl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }

    function Al(e) {
      return "html" === ml(e) ? e : e.assignedSlot || e.parentNode || (_l(e) ? e.host : null) || Sl(e);
    }

    function Il(e) {
      return vl(e) && "fixed" !== jl(e).position ? e.offsetParent : null;
    }

    function Ll(e) {
      var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
          n = -1 !== navigator.userAgent.indexOf("Trident");

      if (n && vl(e)) {
        var i = jl(e);
        if ("fixed" === i.position) return null;
      }

      var s = Al(e);

      while (vl(s) && ["html", "body"].indexOf(ml(s)) < 0) {
        var o = jl(s);
        if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || t && "filter" === o.willChange || t && o.filter && "none" !== o.filter) return s;
        s = s.parentNode;
      }

      return null;
    }

    function Dl(e) {
      var t = gl(e),
          n = Il(e);

      while (n && Tl(n) && "static" === jl(n).position) n = Il(n);

      return n && ("html" === ml(n) || "body" === ml(n) && "static" === jl(n).position) ? t : n || Ll(e) || t;
    }

    function Pl(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }

    var Ml = Math.max,
        Nl = Math.min,
        Hl = Math.round;

    function Rl(e, t, n) {
      return Ml(e, Nl(t, n));
    }

    function Bl() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    function Fl(e) {
      return Object.assign({}, Bl(), e);
    }

    function zl(e, t) {
      return t.reduce(function (t, n) {
        return t[n] = e, t;
      }, {});
    }

    var $l = function (e, t) {
      return e = "function" === typeof e ? e(Object.assign({}, t.rects, {
        placement: t.placement
      })) : e, Fl("number" !== typeof e ? e : zl(e, Ya));
    };

    function Wl(e) {
      var t,
          n = e.state,
          i = e.name,
          s = e.options,
          o = n.elements.arrow,
          r = n.modifiersData.popperOffsets,
          a = xl(n.placement),
          l = Pl(a),
          c = [Ga, Ka].indexOf(a) >= 0,
          u = c ? "height" : "width";

      if (o && r) {
        var d = $l(s.padding, n),
            h = El(o),
            f = "y" === l ? Ua : Ga,
            p = "y" === l ? Va : Ka,
            m = n.rects.reference[u] + n.rects.reference[l] - r[l] - n.rects.popper[u],
            g = r[l] - n.rects.reference[l],
            b = Dl(o),
            v = b ? "y" === l ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
            _ = m / 2 - g / 2,
            y = d[f],
            w = v - h[u] - d[p],
            O = v / 2 - h[u] / 2 + _,
            x = Rl(y, O, w),
            C = l;

        n.modifiersData[i] = (t = {}, t[C] = x, t.centerOffset = x - O, t);
      }
    }

    function ql(e) {
      var t = e.state,
          n = e.options,
          i = n.element,
          s = void 0 === i ? "[data-popper-arrow]" : i;
      null != s && ("string" !== typeof s || (s = t.elements.popper.querySelector(s), s)) && kl(t.elements.popper, s) && (t.elements.arrow = s);
    }

    var Ul = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: Wl,
      effect: ql,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };

    function Vl(e) {
      return e.split("-")[1];
    }

    var Kl = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };

    function Gl(e) {
      var t = e.x,
          n = e.y,
          i = window,
          s = i.devicePixelRatio || 1;
      return {
        x: Hl(Hl(t * s) / s) || 0,
        y: Hl(Hl(n * s) / s) || 0
      };
    }

    function Xl(e) {
      var t,
          n = e.popper,
          i = e.popperRect,
          s = e.placement,
          o = e.variation,
          r = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = !0 === u ? Gl(r) : "function" === typeof u ? u(r) : r,
          h = d.x,
          f = void 0 === h ? 0 : h,
          p = d.y,
          m = void 0 === p ? 0 : p,
          g = r.hasOwnProperty("x"),
          b = r.hasOwnProperty("y"),
          v = Ga,
          _ = Ua,
          y = window;

      if (c) {
        var w = Dl(n),
            O = "clientHeight",
            x = "clientWidth";
        w === gl(n) && (w = Sl(n), "static" !== jl(w).position && "absolute" === a && (O = "scrollHeight", x = "scrollWidth")), w = w, s !== Ua && (s !== Ga && s !== Ka || o !== Ja) || (_ = Va, m -= w[O] - i.height, m *= l ? 1 : -1), s !== Ga && (s !== Ua && s !== Va || o !== Ja) || (v = Ka, f -= w[x] - i.width, f *= l ? 1 : -1);
      }

      var C,
          E = Object.assign({
        position: a
      }, c && Kl);
      return l ? Object.assign({}, E, (C = {}, C[_] = b ? "0" : "", C[v] = g ? "0" : "", C.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, E, (t = {}, t[_] = b ? m + "px" : "", t[v] = g ? f + "px" : "", t.transform = "", t));
    }

    function Yl(e) {
      var t = e.state,
          n = e.options,
          i = n.gpuAcceleration,
          s = void 0 === i || i,
          o = n.adaptive,
          r = void 0 === o || o,
          a = n.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: xl(t.placement),
        variation: Vl(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: s
      };
      null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Xl(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xl(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      });
    }

    var Ql = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: Yl,
      data: {}
    },
        Jl = {
      passive: !0
    };

    function Zl(e) {
      var t = e.state,
          n = e.instance,
          i = e.options,
          s = i.scroll,
          o = void 0 === s || s,
          r = i.resize,
          a = void 0 === r || r,
          l = gl(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return o && c.forEach(function (e) {
        e.addEventListener("scroll", n.update, Jl);
      }), a && l.addEventListener("resize", n.update, Jl), function () {
        o && c.forEach(function (e) {
          e.removeEventListener("scroll", n.update, Jl);
        }), a && l.removeEventListener("resize", n.update, Jl);
      };
    }

    var ec = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: Zl,
      data: {}
    },
        tc = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };

    function nc(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return tc[e];
      });
    }

    var ic = {
      start: "end",
      end: "start"
    };

    function sc(e) {
      return e.replace(/start|end/g, function (e) {
        return ic[e];
      });
    }

    function oc(e) {
      var t = gl(e),
          n = t.pageXOffset,
          i = t.pageYOffset;
      return {
        scrollLeft: n,
        scrollTop: i
      };
    }

    function rc(e) {
      return Cl(Sl(e)).left + oc(e).scrollLeft;
    }

    function ac(e) {
      var t = gl(e),
          n = Sl(e),
          i = t.visualViewport,
          s = n.clientWidth,
          o = n.clientHeight,
          r = 0,
          a = 0;
      return i && (s = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft, a = i.offsetTop)), {
        width: s,
        height: o,
        x: r + rc(e),
        y: a
      };
    }

    function lc(e) {
      var t,
          n = Sl(e),
          i = oc(e),
          s = null == (t = e.ownerDocument) ? void 0 : t.body,
          o = Ml(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Ml(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -i.scrollLeft + rc(e),
          l = -i.scrollTop;
      return "rtl" === jl(s || n).direction && (a += Ml(n.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }

    function cc(e) {
      var t = jl(e),
          n = t.overflow,
          i = t.overflowX,
          s = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + s + i);
    }

    function uc(e) {
      return ["html", "body", "#document"].indexOf(ml(e)) >= 0 ? e.ownerDocument.body : vl(e) && cc(e) ? e : uc(Al(e));
    }

    function dc(e, t) {
      var n;
      void 0 === t && (t = []);
      var i = uc(e),
          s = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = gl(i),
          r = s ? [o].concat(o.visualViewport || [], cc(i) ? i : []) : i,
          a = t.concat(r);
      return s ? a : a.concat(dc(Al(r)));
    }

    function hc(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
      });
    }

    function fc(e) {
      var t = Cl(e);
      return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
    }

    function pc(e, t) {
      return t === el ? hc(ac(e)) : vl(t) ? fc(t) : hc(lc(Sl(e)));
    }

    function mc(e) {
      var t = dc(Al(e)),
          n = ["absolute", "fixed"].indexOf(jl(e).position) >= 0,
          i = n && vl(e) ? Dl(e) : e;
      return bl(i) ? t.filter(function (e) {
        return bl(e) && kl(e, i) && "body" !== ml(e);
      }) : [];
    }

    function gc(e, t, n) {
      var i = "clippingParents" === t ? mc(e) : [].concat(t),
          s = [].concat(i, [n]),
          o = s[0],
          r = s.reduce(function (t, n) {
        var i = pc(e, n);
        return t.top = Ml(i.top, t.top), t.right = Nl(i.right, t.right), t.bottom = Nl(i.bottom, t.bottom), t.left = Ml(i.left, t.left), t;
      }, pc(e, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }

    function bc(e) {
      var t,
          n = e.reference,
          i = e.element,
          s = e.placement,
          o = s ? xl(s) : null,
          r = s ? Vl(s) : null,
          a = n.x + n.width / 2 - i.width / 2,
          l = n.y + n.height / 2 - i.height / 2;

      switch (o) {
        case Ua:
          t = {
            x: a,
            y: n.y - i.height
          };
          break;

        case Va:
          t = {
            x: a,
            y: n.y + n.height
          };
          break;

        case Ka:
          t = {
            x: n.x + n.width,
            y: l
          };
          break;

        case Ga:
          t = {
            x: n.x - i.width,
            y: l
          };
          break;

        default:
          t = {
            x: n.x,
            y: n.y
          };
      }

      var c = o ? Pl(o) : null;

      if (null != c) {
        var u = "y" === c ? "height" : "width";

        switch (r) {
          case Qa:
            t[c] = t[c] - (n[u] / 2 - i[u] / 2);
            break;

          case Ja:
            t[c] = t[c] + (n[u] / 2 - i[u] / 2);
            break;

          default:
        }
      }

      return t;
    }

    function vc(e, t) {
      void 0 === t && (t = {});

      var n = t,
          i = n.placement,
          s = void 0 === i ? e.placement : i,
          o = n.boundary,
          r = void 0 === o ? Za : o,
          a = n.rootBoundary,
          l = void 0 === a ? el : a,
          c = n.elementContext,
          u = void 0 === c ? tl : c,
          d = n.altBoundary,
          h = void 0 !== d && d,
          f = n.padding,
          p = void 0 === f ? 0 : f,
          m = Fl("number" !== typeof p ? p : zl(p, Ya)),
          g = u === tl ? nl : tl,
          b = e.rects.popper,
          v = e.elements[h ? g : u],
          _ = gc(bl(v) ? v : v.contextElement || Sl(e.elements.popper), r, l),
          y = Cl(e.elements.reference),
          w = bc({
        reference: y,
        element: b,
        strategy: "absolute",
        placement: s
      }),
          O = hc(Object.assign({}, b, w)),
          x = u === tl ? O : y,
          C = {
        top: _.top - x.top + m.top,
        bottom: x.bottom - _.bottom + m.bottom,
        left: _.left - x.left + m.left,
        right: x.right - _.right + m.right
      },
          E = e.modifiersData.offset;

      if (u === tl && E) {
        var k = E[s];
        Object.keys(C).forEach(function (e) {
          var t = [Ka, Va].indexOf(e) >= 0 ? 1 : -1,
              n = [Ua, Va].indexOf(e) >= 0 ? "y" : "x";
          C[e] += k[n] * t;
        });
      }

      return C;
    }

    function _c(e, t) {
      void 0 === t && (t = {});
      var n = t,
          i = n.placement,
          s = n.boundary,
          o = n.rootBoundary,
          r = n.padding,
          a = n.flipVariations,
          l = n.allowedAutoPlacements,
          c = void 0 === l ? sl : l,
          u = Vl(i),
          d = u ? a ? il : il.filter(function (e) {
        return Vl(e) === u;
      }) : Ya,
          h = d.filter(function (e) {
        return c.indexOf(e) >= 0;
      });
      0 === h.length && (h = d);
      var f = h.reduce(function (t, n) {
        return t[n] = vc(e, {
          placement: n,
          boundary: s,
          rootBoundary: o,
          padding: r
        })[xl(n)], t;
      }, {});
      return Object.keys(f).sort(function (e, t) {
        return f[e] - f[t];
      });
    }

    function yc(e) {
      if (xl(e) === Xa) return [];
      var t = nc(e);
      return [sc(e), t, sc(t)];
    }

    function wc(e) {
      var t = e.state,
          n = e.options,
          i = e.name;

      if (!t.modifiersData[i]._skip) {
        for (var s = n.mainAxis, o = void 0 === s || s, r = n.altAxis, a = void 0 === r || r, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, h = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, m = n.allowedAutoPlacements, g = t.options.placement, b = xl(g), v = b === g, _ = l || (v || !p ? [nc(g)] : yc(g)), y = [g].concat(_).reduce(function (e, n) {
          return e.concat(xl(n) === Xa ? _c(t, {
            placement: n,
            boundary: u,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : n);
        }, []), w = t.rects.reference, O = t.rects.popper, x = new Map(), C = !0, E = y[0], k = 0; k < y.length; k++) {
          var j = y[k],
              T = xl(j),
              S = Vl(j) === Qa,
              A = [Ua, Va].indexOf(T) >= 0,
              I = A ? "width" : "height",
              L = vc(t, {
            placement: j,
            boundary: u,
            rootBoundary: d,
            altBoundary: h,
            padding: c
          }),
              D = A ? S ? Ka : Ga : S ? Va : Ua;
          w[I] > O[I] && (D = nc(D));
          var P = nc(D),
              M = [];

          if (o && M.push(L[T] <= 0), a && M.push(L[D] <= 0, L[P] <= 0), M.every(function (e) {
            return e;
          })) {
            E = j, C = !1;
            break;
          }

          x.set(j, M);
        }

        if (C) for (var N = p ? 3 : 1, H = function (e) {
          var t = y.find(function (t) {
            var n = x.get(t);
            if (n) return n.slice(0, e).every(function (e) {
              return e;
            });
          });
          if (t) return E = t, "break";
        }, R = N; R > 0; R--) {
          var B = H(R);
          if ("break" === B) break;
        }
        t.placement !== E && (t.modifiersData[i]._skip = !0, t.placement = E, t.reset = !0);
      }
    }

    var Oc = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: wc,
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    };

    function xc(e, t, n) {
      return void 0 === n && (n = {
        x: 0,
        y: 0
      }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
      };
    }

    function Cc(e) {
      return [Ua, Ka, Va, Ga].some(function (t) {
        return e[t] >= 0;
      });
    }

    function Ec(e) {
      var t = e.state,
          n = e.name,
          i = t.rects.reference,
          s = t.rects.popper,
          o = t.modifiersData.preventOverflow,
          r = vc(t, {
        elementContext: "reference"
      }),
          a = vc(t, {
        altBoundary: !0
      }),
          l = xc(r, i),
          c = xc(a, s, o),
          u = Cc(l),
          d = Cc(c);
      t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: u,
        hasPopperEscaped: d
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": u,
        "data-popper-escaped": d
      });
    }

    var kc = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: Ec
    };

    function jc(e, t, n) {
      var i = xl(e),
          s = [Ga, Ua].indexOf(i) >= 0 ? -1 : 1,
          o = "function" === typeof n ? n(Object.assign({}, t, {
        placement: e
      })) : n,
          r = o[0],
          a = o[1];
      return r = r || 0, a = (a || 0) * s, [Ga, Ka].indexOf(i) >= 0 ? {
        x: a,
        y: r
      } : {
        x: r,
        y: a
      };
    }

    function Tc(e) {
      var t = e.state,
          n = e.options,
          i = e.name,
          s = n.offset,
          o = void 0 === s ? [0, 0] : s,
          r = sl.reduce(function (e, n) {
        return e[n] = jc(n, t.rects, o), e;
      }, {}),
          a = r[t.placement],
          l = a.x,
          c = a.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = r;
    }

    var Sc = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: Tc
    };

    function Ac(e) {
      var t = e.state,
          n = e.name;
      t.modifiersData[n] = bc({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    }

    var Ic = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: Ac,
      data: {}
    };

    function Lc(e) {
      return "x" === e ? "y" : "x";
    }

    function Dc(e) {
      var t = e.state,
          n = e.options,
          i = e.name,
          s = n.mainAxis,
          o = void 0 === s || s,
          r = n.altAxis,
          a = void 0 !== r && r,
          l = n.boundary,
          c = n.rootBoundary,
          u = n.altBoundary,
          d = n.padding,
          h = n.tether,
          f = void 0 === h || h,
          p = n.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = vc(t, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: u
      }),
          b = xl(t.placement),
          v = Vl(t.placement),
          _ = !v,
          y = Pl(b),
          w = Lc(y),
          O = t.modifiersData.popperOffsets,
          x = t.rects.reference,
          C = t.rects.popper,
          E = "function" === typeof m ? m(Object.assign({}, t.rects, {
        placement: t.placement
      })) : m,
          k = {
        x: 0,
        y: 0
      };

      if (O) {
        if (o || a) {
          var j = "y" === y ? Ua : Ga,
              T = "y" === y ? Va : Ka,
              S = "y" === y ? "height" : "width",
              A = O[y],
              I = O[y] + g[j],
              L = O[y] - g[T],
              D = f ? -C[S] / 2 : 0,
              P = v === Qa ? x[S] : C[S],
              M = v === Qa ? -C[S] : -x[S],
              N = t.elements.arrow,
              H = f && N ? El(N) : {
            width: 0,
            height: 0
          },
              R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Bl(),
              B = R[j],
              F = R[T],
              z = Rl(0, x[S], H[S]),
              $ = _ ? x[S] / 2 - D - z - B - E : P - z - B - E,
              W = _ ? -x[S] / 2 + D + z + F + E : M + z + F + E,
              q = t.elements.arrow && Dl(t.elements.arrow),
              U = q ? "y" === y ? q.clientTop || 0 : q.clientLeft || 0 : 0,
              V = t.modifiersData.offset ? t.modifiersData.offset[t.placement][y] : 0,
              K = O[y] + $ - V - U,
              G = O[y] + W - V;

          if (o) {
            var X = Rl(f ? Nl(I, K) : I, A, f ? Ml(L, G) : L);
            O[y] = X, k[y] = X - A;
          }

          if (a) {
            var Y = "x" === y ? Ua : Ga,
                Q = "x" === y ? Va : Ka,
                J = O[w],
                Z = J + g[Y],
                ee = J - g[Q],
                te = Rl(f ? Nl(Z, K) : Z, J, f ? Ml(ee, G) : ee);
            O[w] = te, k[w] = te - J;
          }
        }

        t.modifiersData[i] = k;
      }
    }

    var Pc = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: Dc,
      requiresIfExists: ["offset"]
    };

    function Mc(e) {
      return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      };
    }

    function Nc(e) {
      return e !== gl(e) && vl(e) ? Mc(e) : oc(e);
    }

    function Hc(e) {
      var t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          i = t.height / e.offsetHeight || 1;
      return 1 !== n || 1 !== i;
    }

    function Rc(e, t, n) {
      void 0 === n && (n = !1);
      var i = vl(t),
          s = vl(t) && Hc(t),
          o = Sl(t),
          r = Cl(e, s),
          a = {
        scrollLeft: 0,
        scrollTop: 0
      },
          l = {
        x: 0,
        y: 0
      };
      return (i || !i && !n) && (("body" !== ml(t) || cc(o)) && (a = Nc(t)), vl(t) ? (l = Cl(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = rc(o))), {
        x: r.left + a.scrollLeft - l.x,
        y: r.top + a.scrollTop - l.y,
        width: r.width,
        height: r.height
      };
    }

    function Bc(e) {
      var t = new Map(),
          n = new Set(),
          i = [];

      function s(e) {
        n.add(e.name);
        var o = [].concat(e.requires || [], e.requiresIfExists || []);
        o.forEach(function (e) {
          if (!n.has(e)) {
            var i = t.get(e);
            i && s(i);
          }
        }), i.push(e);
      }

      return e.forEach(function (e) {
        t.set(e.name, e);
      }), e.forEach(function (e) {
        n.has(e.name) || s(e);
      }), i;
    }

    function Fc(e) {
      var t = Bc(e);
      return pl.reduce(function (e, n) {
        return e.concat(t.filter(function (e) {
          return e.phase === n;
        }));
      }, []);
    }

    function zc(e) {
      var t;
      return function () {
        return t || (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            t = void 0, n(e());
          });
        })), t;
      };
    }

    function $c(e) {
      var t = e.reduce(function (e, t) {
        var n = e[t.name];
        return e[t.name] = n ? Object.assign({}, n, t, {
          options: Object.assign({}, n.options, t.options),
          data: Object.assign({}, n.data, t.data)
        }) : t, e;
      }, {});
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    }

    var Wc = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };

    function qc() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

      return !t.some(function (e) {
        return !(e && "function" === typeof e.getBoundingClientRect);
      });
    }

    function Uc(e) {
      void 0 === e && (e = {});
      var t = e,
          n = t.defaultModifiers,
          i = void 0 === n ? [] : n,
          s = t.defaultOptions,
          o = void 0 === s ? Wc : s;
      return function (e, t, n) {
        void 0 === n && (n = o);
        var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Wc, o),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
            r = [],
            a = !1,
            l = {
          state: s,
          setOptions: function (n) {
            var r = "function" === typeof n ? n(s.options) : n;
            u(), s.options = Object.assign({}, o, s.options, r), s.scrollParents = {
              reference: bl(e) ? dc(e) : e.contextElement ? dc(e.contextElement) : [],
              popper: dc(t)
            };
            var a = Fc($c([].concat(i, s.options.modifiers)));
            return s.orderedModifiers = a.filter(function (e) {
              return e.enabled;
            }), c(), l.update();
          },
          forceUpdate: function () {
            if (!a) {
              var e = s.elements,
                  t = e.reference,
                  n = e.popper;

              if (qc(t, n)) {
                s.rects = {
                  reference: Rc(t, Dl(n), "fixed" === s.options.strategy),
                  popper: El(n)
                }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (e) {
                  return s.modifiersData[e.name] = Object.assign({}, e.data);
                });

                for (var i = 0; i < s.orderedModifiers.length; i++) if (!0 !== s.reset) {
                  var o = s.orderedModifiers[i],
                      r = o.fn,
                      c = o.options,
                      u = void 0 === c ? {} : c,
                      d = o.name;
                  "function" === typeof r && (s = r({
                    state: s,
                    options: u,
                    name: d,
                    instance: l
                  }) || s);
                } else s.reset = !1, i = -1;
              }
            }
          },
          update: zc(function () {
            return new Promise(function (e) {
              l.forceUpdate(), e(s);
            });
          }),
          destroy: function () {
            u(), a = !0;
          }
        };
        if (!qc(e, t)) return l;

        function c() {
          s.orderedModifiers.forEach(function (e) {
            var t = e.name,
                n = e.options,
                i = void 0 === n ? {} : n,
                o = e.effect;

            if ("function" === typeof o) {
              var a = o({
                state: s,
                name: t,
                instance: l,
                options: i
              }),
                  c = function () {};

              r.push(a || c);
            }
          });
        }

        function u() {
          r.forEach(function (e) {
            return e();
          }), r = [];
        }

        return l.setOptions(n).then(function (e) {
          !a && n.onFirstUpdate && n.onFirstUpdate(e);
        }), l;
      };
    }

    var Vc = Uc(),
        Kc = [ec, Ic, Ql, Ol, Sc, Oc, Pc, Ul, kc],
        Gc = Uc({
      defaultModifiers: Kc
    }),
        Xc = [ec, Ic, Ql, Ol],
        Yc = Uc({
      defaultModifiers: Xc
    });
    /*!
      * Bootstrap v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */

    const Qc = 1e6,
          Jc = 1e3,
          Zc = "transitionend",
          eu = e => null === e || void 0 === e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),
          tu = e => {
      do {
        e += Math.floor(Math.random() * Qc);
      } while (document.getElementById(e));

      return e;
    },
          nu = e => {
      let t = e.getAttribute("data-bs-target");

      if (!t || "#" === t) {
        let n = e.getAttribute("href");
        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
        n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null;
      }

      return t;
    },
          iu = e => {
      const t = nu(e);
      return t && document.querySelector(t) ? t : null;
    },
          su = e => {
      const t = nu(e);
      return t ? document.querySelector(t) : null;
    },
          ou = e => {
      if (!e) return 0;
      let {
        transitionDuration: t,
        transitionDelay: n
      } = window.getComputedStyle(e);
      const i = Number.parseFloat(t),
            s = Number.parseFloat(n);
      return i || s ? (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * Jc) : 0;
    },
          ru = e => {
      e.dispatchEvent(new Event(Zc));
    },
          au = e => !(!e || "object" !== typeof e) && ("undefined" !== typeof e.jquery && (e = e[0]), "undefined" !== typeof e.nodeType),
          lu = e => au(e) ? e.jquery ? e[0] : e : "string" === typeof e && e.length > 0 ? document.querySelector(e) : null,
          cu = (e, t, n) => {
      Object.keys(n).forEach(i => {
        const s = n[i],
              o = t[i],
              r = o && au(o) ? "element" : eu(o);
        if (!new RegExp(s).test(r)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`);
      });
    },
          uu = e => !(!au(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
          du = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || ("undefined" !== typeof e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
          hu = e => {
      if (!document.documentElement.attachShadow) return null;

      if ("function" === typeof e.getRootNode) {
        const t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }

      return e instanceof ShadowRoot ? e : e.parentNode ? hu(e.parentNode) : null;
    },
          fu = () => {},
          pu = e => {
      e.offsetHeight;
    },
          mu = () => {
      const {
        jQuery: e
      } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
          gu = [],
          bu = e => {
      "loading" === document.readyState ? (gu.length || document.addEventListener("DOMContentLoaded", () => {
        gu.forEach(e => e());
      }), gu.push(e)) : e();
    },
          vu = () => "rtl" === document.documentElement.dir,
          _u = e => {
      bu(() => {
        const t = mu();

        if (t) {
          const n = e.NAME,
                i = t.fn[n];
          t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface);
        }
      });
    },
          yu = e => {
      "function" === typeof e && e();
    },
          wu = (e, t, n = !0) => {
      if (!n) return void yu(e);
      const i = 5,
            s = ou(t) + i;
      let o = !1;

      const r = ({
        target: n
      }) => {
        n === t && (o = !0, t.removeEventListener(Zc, r), yu(e));
      };

      t.addEventListener(Zc, r), setTimeout(() => {
        o || ru(t);
      }, s);
    },
          Ou = (e, t, n, i) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!n && i ? e.length - 1 : 0];
      const o = e.length;
      return s += n ? 1 : -1, i && (s = (s + o) % o), e[Math.max(0, Math.min(s, o - 1))];
    },
          xu = /[^.]*(?=\..*)\.|.*/,
          Cu = /\..*/,
          Eu = /::\d+$/,
          ku = {};

    let ju = 1;
    const Tu = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
          Su = /^(mouseenter|mouseleave)/i,
          Au = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function Iu(e, t) {
      return t && `${t}::${ju++}` || e.uidEvent || ju++;
    }

    function Lu(e) {
      const t = Iu(e);
      return e.uidEvent = t, ku[t] = ku[t] || {}, ku[t];
    }

    function Du(e, t) {
      return function n(i) {
        return i.delegateTarget = e, n.oneOff && zu.off(e, i.type, t), t.apply(e, [i]);
      };
    }

    function Pu(e, t, n) {
      return function i(s) {
        const o = e.querySelectorAll(t);

        for (let {
          target: r
        } = s; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return s.delegateTarget = r, i.oneOff && zu.off(e, s.type, t, n), n.apply(r, [s]);

        return null;
      };
    }

    function Mu(e, t, n = null) {
      const i = Object.keys(e);

      for (let s = 0, o = i.length; s < o; s++) {
        const o = e[i[s]];
        if (o.originalHandler === t && o.delegationSelector === n) return o;
      }

      return null;
    }

    function Nu(e, t, n) {
      const i = "string" === typeof t,
            s = i ? n : t;
      let o = Fu(e);
      const r = Au.has(o);
      return r || (o = e), [i, s, o];
    }

    function Hu(e, t, n, i, s) {
      if ("string" !== typeof t || !e) return;

      if (n || (n = i, i = null), Su.test(t)) {
        const e = e => function (t) {
          if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
        };

        i ? i = e(i) : n = e(n);
      }

      const [o, r, a] = Nu(t, n, i),
            l = Lu(e),
            c = l[a] || (l[a] = {}),
            u = Mu(c, r, o ? n : null);
      if (u) return void (u.oneOff = u.oneOff && s);
      const d = Iu(r, t.replace(xu, "")),
            h = o ? Pu(e, n, i) : Du(e, n);
      h.delegationSelector = o ? n : null, h.originalHandler = r, h.oneOff = s, h.uidEvent = d, c[d] = h, e.addEventListener(a, h, o);
    }

    function Ru(e, t, n, i, s) {
      const o = Mu(t[n], i, s);
      o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent]);
    }

    function Bu(e, t, n, i) {
      const s = t[n] || {};
      Object.keys(s).forEach(o => {
        if (o.includes(i)) {
          const i = s[o];
          Ru(e, t, n, i.originalHandler, i.delegationSelector);
        }
      });
    }

    function Fu(e) {
      return e = e.replace(Cu, ""), Tu[e] || e;
    }

    const zu = {
      on(e, t, n, i) {
        Hu(e, t, n, i, !1);
      },

      one(e, t, n, i) {
        Hu(e, t, n, i, !0);
      },

      off(e, t, n, i) {
        if ("string" !== typeof t || !e) return;
        const [s, o, r] = Nu(t, n, i),
              a = r !== t,
              l = Lu(e),
              c = t.startsWith(".");

        if ("undefined" !== typeof o) {
          if (!l || !l[r]) return;
          return void Ru(e, l, r, o, s ? n : null);
        }

        c && Object.keys(l).forEach(n => {
          Bu(e, l, n, t.slice(1));
        });
        const u = l[r] || {};
        Object.keys(u).forEach(n => {
          const i = n.replace(Eu, "");

          if (!a || t.includes(i)) {
            const t = u[n];
            Ru(e, l, r, t.originalHandler, t.delegationSelector);
          }
        });
      },

      trigger(e, t, n) {
        if ("string" !== typeof t || !e) return null;
        const i = mu(),
              s = Fu(t),
              o = t !== s,
              r = Au.has(s);
        let a,
            l = !0,
            c = !0,
            u = !1,
            d = null;
        return o && i && (a = i.Event(t, n), i(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(t, {
          bubbles: l,
          cancelable: !0
        }), "undefined" !== typeof n && Object.keys(n).forEach(e => {
          Object.defineProperty(d, e, {
            get() {
              return n[e];
            }

          });
        }), u && d.preventDefault(), c && e.dispatchEvent(d), d.defaultPrevented && "undefined" !== typeof a && a.preventDefault(), d;
      }

    },
          $u = new Map(),
          Wu = {
      set(e, t, n) {
        $u.has(e) || $u.set(e, new Map());
        const i = $u.get(e);
        i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
      },

      get(e, t) {
        return $u.has(e) && $u.get(e).get(t) || null;
      },

      remove(e, t) {
        if (!$u.has(e)) return;
        const n = $u.get(e);
        n.delete(t), 0 === n.size && $u.delete(e);
      }

    },
          qu = "5.1.3";

    class Uu {
      constructor(e) {
        e = lu(e), e && (this._element = e, Wu.set(this._element, this.constructor.DATA_KEY, this));
      }

      dispose() {
        Wu.remove(this._element, this.constructor.DATA_KEY), zu.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(e => {
          this[e] = null;
        });
      }

      _queueCallback(e, t, n = !0) {
        wu(e, t, n);
      }

      static getInstance(e) {
        return Wu.get(lu(e), this.DATA_KEY);
      }

      static getOrCreateInstance(e, t = {}) {
        return this.getInstance(e) || new this(e, "object" === typeof t ? t : null);
      }

      static get VERSION() {
        return qu;
      }

      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }

      static get DATA_KEY() {
        return "bs." + this.NAME;
      }

      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }

    }

    const Vu = (e, t = "hide") => {
      const n = "click.dismiss" + e.EVENT_KEY,
            i = e.NAME;
      zu.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), du(this)) return;
        const s = su(this) || this.closest("." + i),
              o = e.getOrCreateInstance(s);
        o[t]();
      });
    },
          Ku = "alert",
          Gu = "bs.alert",
          Xu = "." + Gu,
          Yu = "close" + Xu,
          Qu = "closed" + Xu,
          Ju = "fade",
          Zu = "show";

    class ed extends Uu {
      static get NAME() {
        return Ku;
      }

      close() {
        const e = zu.trigger(this._element, Yu);
        if (e.defaultPrevented) return;

        this._element.classList.remove(Zu);

        const t = this._element.classList.contains(Ju);

        this._queueCallback(() => this._destroyElement(), this._element, t);
      }

      _destroyElement() {
        this._element.remove(), zu.trigger(this._element, Qu), this.dispose();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = ed.getOrCreateInstance(this);

          if ("string" === typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }

    }

    Vu(ed, "close"), _u(ed);
    const td = "button",
          nd = "bs.button",
          id = "." + nd,
          sd = ".data-api",
          od = "active",
          rd = '[data-bs-toggle="button"]',
          ad = `click${id}${sd}`;

    class ld extends Uu {
      static get NAME() {
        return td;
      }

      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(od));
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = ld.getOrCreateInstance(this);
          "toggle" === e && t[e]();
        });
      }

    }

    function cd(e) {
      return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
    }

    function ud(e) {
      return e.replace(/[A-Z]/g, e => "-" + e.toLowerCase());
    }

    zu.on(document, ad, rd, e => {
      e.preventDefault();
      const t = e.target.closest(rd),
            n = ld.getOrCreateInstance(t);
      n.toggle();
    }), _u(ld);
    const dd = {
      setDataAttribute(e, t, n) {
        e.setAttribute("data-bs-" + ud(t), n);
      },

      removeDataAttribute(e, t) {
        e.removeAttribute("data-bs-" + ud(t));
      },

      getDataAttributes(e) {
        if (!e) return {};
        const t = {};
        return Object.keys(e.dataset).filter(e => e.startsWith("bs")).forEach(n => {
          let i = n.replace(/^bs/, "");
          i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = cd(e.dataset[n]);
        }), t;
      },

      getDataAttribute(e, t) {
        return cd(e.getAttribute("data-bs-" + ud(t)));
      },

      offset(e) {
        const t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset
        };
      },

      position(e) {
        return {
          top: e.offsetTop,
          left: e.offsetLeft
        };
      }

    },
          hd = 3,
          fd = {
      find(e, t = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, e));
      },

      findOne(e, t = document.documentElement) {
        return Element.prototype.querySelector.call(t, e);
      },

      children(e, t) {
        return [].concat(...e.children).filter(e => e.matches(t));
      },

      parents(e, t) {
        const n = [];
        let i = e.parentNode;

        while (i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== hd) i.matches(t) && n.push(i), i = i.parentNode;

        return n;
      },

      prev(e, t) {
        let n = e.previousElementSibling;

        while (n) {
          if (n.matches(t)) return [n];
          n = n.previousElementSibling;
        }

        return [];
      },

      next(e, t) {
        let n = e.nextElementSibling;

        while (n) {
          if (n.matches(t)) return [n];
          n = n.nextElementSibling;
        }

        return [];
      },

      focusableChildren(e) {
        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => e + ':not([tabindex^="-"])').join(", ");
        return this.find(t, e).filter(e => !du(e) && uu(e));
      }

    },
          pd = "carousel",
          md = "bs.carousel",
          gd = "." + md,
          bd = ".data-api",
          vd = "ArrowLeft",
          _d = "ArrowRight",
          yd = 500,
          wd = 40,
          Od = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
          xd = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
          Cd = "next",
          Ed = "prev",
          kd = "left",
          jd = "right",
          Td = {
      [vd]: jd,
      [_d]: kd
    },
          Sd = "slide" + gd,
          Ad = "slid" + gd,
          Id = "keydown" + gd,
          Ld = "mouseenter" + gd,
          Dd = "mouseleave" + gd,
          Pd = "touchstart" + gd,
          Md = "touchmove" + gd,
          Nd = "touchend" + gd,
          Hd = "pointerdown" + gd,
          Rd = "pointerup" + gd,
          Bd = "dragstart" + gd,
          Fd = `load${gd}${bd}`,
          zd = `click${gd}${bd}`,
          $d = "carousel",
          Wd = "active",
          qd = "slide",
          Ud = "carousel-item-end",
          Vd = "carousel-item-start",
          Kd = "carousel-item-next",
          Gd = "carousel-item-prev",
          Xd = "pointer-event",
          Yd = ".active",
          Qd = ".active.carousel-item",
          Jd = ".carousel-item",
          Zd = ".carousel-item img",
          eh = ".carousel-item-next, .carousel-item-prev",
          th = ".carousel-indicators",
          nh = "[data-bs-target]",
          ih = "[data-bs-slide], [data-bs-slide-to]",
          sh = '[data-bs-ride="carousel"]',
          oh = "touch",
          rh = "pen";

    class ah extends Uu {
      constructor(e, t) {
        super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = fd.findOne(th, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
      }

      static get Default() {
        return Od;
      }

      static get NAME() {
        return pd;
      }

      next() {
        this._slide(Cd);
      }

      nextWhenVisible() {
        !document.hidden && uu(this._element) && this.next();
      }

      prev() {
        this._slide(Ed);
      }

      pause(e) {
        e || (this._isPaused = !0), fd.findOne(eh, this._element) && (ru(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }

      cycle(e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }

      to(e) {
        this._activeElement = fd.findOne(Qd, this._element);

        const t = this._getItemIndex(this._activeElement);

        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void zu.one(this._element, Ad, () => this.to(e));
        if (t === e) return this.pause(), void this.cycle();
        const n = e > t ? Cd : Ed;

        this._slide(n, this._items[e]);
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, Od), dd.getDataAttributes(this._element)), "object" === typeof e ? e : {}), cu(pd, e, xd), e;
      }

      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= wd) return;
        const t = e / this.touchDeltaX;
        this.touchDeltaX = 0, t && this._slide(t > 0 ? jd : kd);
      }

      _addEventListeners() {
        this._config.keyboard && zu.on(this._element, Id, e => this._keydown(e)), "hover" === this._config.pause && (zu.on(this._element, Ld, e => this.pause(e)), zu.on(this._element, Dd, e => this.cycle(e))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }

      _addTouchEventListeners() {
        const e = e => this._pointerEvent && (e.pointerType === rh || e.pointerType === oh),
              t = t => {
          e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
              n = e => {
          this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
        },
              i = t => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(e => this.cycle(e), yd + this._config.interval));
        };

        fd.find(Zd, this._element).forEach(e => {
          zu.on(e, Bd, e => e.preventDefault());
        }), this._pointerEvent ? (zu.on(this._element, Hd, e => t(e)), zu.on(this._element, Rd, e => i(e)), this._element.classList.add(Xd)) : (zu.on(this._element, Pd, e => t(e)), zu.on(this._element, Md, e => n(e)), zu.on(this._element, Nd, e => i(e)));
      }

      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Td[e.key];
        t && (e.preventDefault(), this._slide(t));
      }

      _getItemIndex(e) {
        return this._items = e && e.parentNode ? fd.find(Jd, e.parentNode) : [], this._items.indexOf(e);
      }

      _getItemByOrder(e, t) {
        const n = e === Cd;
        return Ou(this._items, t, n, this._config.wrap);
      }

      _triggerSlideEvent(e, t) {
        const n = this._getItemIndex(e),
              i = this._getItemIndex(fd.findOne(Qd, this._element));

        return zu.trigger(this._element, Sd, {
          relatedTarget: e,
          direction: t,
          from: i,
          to: n
        });
      }

      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = fd.findOne(Yd, this._indicatorsElement);
          t.classList.remove(Wd), t.removeAttribute("aria-current");
          const n = fd.find(nh, this._indicatorsElement);

          for (let i = 0; i < n.length; i++) if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            n[i].classList.add(Wd), n[i].setAttribute("aria-current", "true");
            break;
          }
        }
      }

      _updateInterval() {
        const e = this._activeElement || fd.findOne(Qd, this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }

      _slide(e, t) {
        const n = this._directionToOrder(e),
              i = fd.findOne(Qd, this._element),
              s = this._getItemIndex(i),
              o = t || this._getItemByOrder(n, i),
              r = this._getItemIndex(o),
              a = Boolean(this._interval),
              l = n === Cd,
              c = l ? Vd : Ud,
              u = l ? Kd : Gd,
              d = this._orderToDirection(n);

        if (o && o.classList.contains(Wd)) return void (this._isSliding = !1);
        if (this._isSliding) return;

        const h = this._triggerSlideEvent(o, d);

        if (h.defaultPrevented) return;
        if (!i || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        const f = () => {
          zu.trigger(this._element, Ad, {
            relatedTarget: o,
            direction: d,
            from: s,
            to: r
          });
        };

        if (this._element.classList.contains(qd)) {
          o.classList.add(u), pu(o), i.classList.add(c), o.classList.add(c);

          const e = () => {
            o.classList.remove(c, u), o.classList.add(Wd), i.classList.remove(Wd, u, c), this._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(e, i, !0);
        } else i.classList.remove(Wd), o.classList.add(Wd), this._isSliding = !1, f();

        a && this.cycle();
      }

      _directionToOrder(e) {
        return [jd, kd].includes(e) ? vu() ? e === kd ? Ed : Cd : e === kd ? Cd : Ed : e;
      }

      _orderToDirection(e) {
        return [Cd, Ed].includes(e) ? vu() ? e === Ed ? kd : jd : e === Ed ? jd : kd : e;
      }

      static carouselInterface(e, t) {
        const n = ah.getOrCreateInstance(e, t);
        let {
          _config: i
        } = n;
        "object" === typeof t && (i = _objectSpread(_objectSpread({}, i), t));
        const s = "string" === typeof t ? t : i.slide;
        if ("number" === typeof t) n.to(t);else if ("string" === typeof s) {
          if ("undefined" === typeof n[s]) throw new TypeError(`No method named "${s}"`);
          n[s]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }

      static jQueryInterface(e) {
        return this.each(function () {
          ah.carouselInterface(this, e);
        });
      }

      static dataApiClickHandler(e) {
        const t = su(this);
        if (!t || !t.classList.contains($d)) return;

        const n = _objectSpread(_objectSpread({}, dd.getDataAttributes(t)), dd.getDataAttributes(this)),
              i = this.getAttribute("data-bs-slide-to");

        i && (n.interval = !1), ah.carouselInterface(t, n), i && ah.getInstance(t).to(i), e.preventDefault();
      }

    }

    zu.on(document, zd, ih, ah.dataApiClickHandler), zu.on(window, Fd, () => {
      const e = fd.find(sh);

      for (let t = 0, n = e.length; t < n; t++) ah.carouselInterface(e[t], ah.getInstance(e[t]));
    }), _u(ah);
    const lh = "collapse",
          ch = "bs.collapse",
          uh = "." + ch,
          dh = ".data-api",
          hh = {
      toggle: !0,
      parent: null
    },
          fh = {
      toggle: "boolean",
      parent: "(null|element)"
    },
          ph = "show" + uh,
          mh = "shown" + uh,
          gh = "hide" + uh,
          bh = "hidden" + uh,
          vh = `click${uh}${dh}`,
          _h = "show",
          yh = "collapse",
          wh = "collapsing",
          Oh = "collapsed",
          xh = `:scope .${yh} .${yh}`,
          Ch = "collapse-horizontal",
          Eh = "width",
          kh = "height",
          jh = ".collapse.show, .collapse.collapsing",
          Th = '[data-bs-toggle="collapse"]';

    class Sh extends Uu {
      constructor(e, t) {
        super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
        const n = fd.find(Th);

        for (let i = 0, s = n.length; i < s; i++) {
          const e = n[i],
                t = iu(e),
                s = fd.find(t).filter(e => e === this._element);
          null !== t && s.length && (this._selector = t, this._triggerArray.push(e));
        }

        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }

      static get Default() {
        return hh;
      }

      static get NAME() {
        return lh;
      }

      toggle() {
        this._isShown() ? this.hide() : this.show();
      }

      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e,
            t = [];

        if (this._config.parent) {
          const e = fd.find(xh, this._config.parent);
          t = fd.find(jh, this._config.parent).filter(t => !e.includes(t));
        }

        const n = fd.findOne(this._selector);

        if (t.length) {
          const i = t.find(e => n !== e);
          if (e = i ? Sh.getInstance(i) : null, e && e._isTransitioning) return;
        }

        const i = zu.trigger(this._element, ph);
        if (i.defaultPrevented) return;
        t.forEach(t => {
          n !== t && Sh.getOrCreateInstance(t, {
            toggle: !1
          }).hide(), e || Wu.set(t, ch, null);
        });

        const s = this._getDimension();

        this._element.classList.remove(yh), this._element.classList.add(wh), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;

        const o = () => {
          this._isTransitioning = !1, this._element.classList.remove(wh), this._element.classList.add(yh, _h), this._element.style[s] = "", zu.trigger(this._element, mh);
        },
              r = s[0].toUpperCase() + s.slice(1),
              a = "scroll" + r;

        this._queueCallback(o, this._element, !0), this._element.style[s] = this._element[a] + "px";
      }

      hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const e = zu.trigger(this._element, gh);
        if (e.defaultPrevented) return;

        const t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", pu(this._element), this._element.classList.add(wh), this._element.classList.remove(yh, _h);
        const n = this._triggerArray.length;

        for (let s = 0; s < n; s++) {
          const e = this._triggerArray[s],
                t = su(e);
          t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
        }

        this._isTransitioning = !0;

        const i = () => {
          this._isTransitioning = !1, this._element.classList.remove(wh), this._element.classList.add(yh), zu.trigger(this._element, bh);
        };

        this._element.style[t] = "", this._queueCallback(i, this._element, !0);
      }

      _isShown(e = this._element) {
        return e.classList.contains(_h);
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, hh), dd.getDataAttributes(this._element)), e), e.toggle = Boolean(e.toggle), e.parent = lu(e.parent), cu(lh, e, fh), e;
      }

      _getDimension() {
        return this._element.classList.contains(Ch) ? Eh : kh;
      }

      _initializeChildren() {
        if (!this._config.parent) return;
        const e = fd.find(xh, this._config.parent);
        fd.find(Th, this._config.parent).filter(t => !e.includes(t)).forEach(e => {
          const t = su(e);
          t && this._addAriaAndCollapsedClass([e], this._isShown(t));
        });
      }

      _addAriaAndCollapsedClass(e, t) {
        e.length && e.forEach(e => {
          t ? e.classList.remove(Oh) : e.classList.add(Oh), e.setAttribute("aria-expanded", t);
        });
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = {};
          "string" === typeof e && /show|hide/.test(e) && (t.toggle = !1);
          const n = Sh.getOrCreateInstance(this, t);

          if ("string" === typeof e) {
            if ("undefined" === typeof n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        });
      }

    }

    zu.on(document, vh, Th, function (e) {
      ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
      const t = iu(this),
            n = fd.find(t);
      n.forEach(e => {
        Sh.getOrCreateInstance(e, {
          toggle: !1
        }).toggle();
      });
    }), _u(Sh);
    const Ah = "dropdown",
          Ih = "bs.dropdown",
          Lh = "." + Ih,
          Dh = ".data-api",
          Ph = "Escape",
          Mh = "Space",
          Nh = "Tab",
          Hh = "ArrowUp",
          Rh = "ArrowDown",
          Bh = 2,
          Fh = new RegExp(`${Hh}|${Rh}|${Ph}`),
          zh = "hide" + Lh,
          $h = "hidden" + Lh,
          Wh = "show" + Lh,
          qh = "shown" + Lh,
          Uh = `click${Lh}${Dh}`,
          Vh = `keydown${Lh}${Dh}`,
          Kh = `keyup${Lh}${Dh}`,
          Gh = "show",
          Xh = "dropup",
          Yh = "dropend",
          Qh = "dropstart",
          Jh = "navbar",
          Zh = '[data-bs-toggle="dropdown"]',
          ef = ".dropdown-menu",
          tf = ".navbar-nav",
          nf = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          sf = vu() ? "top-end" : "top-start",
          of = vu() ? "top-start" : "top-end",
          rf = vu() ? "bottom-end" : "bottom-start",
          af = vu() ? "bottom-start" : "bottom-end",
          lf = vu() ? "left-start" : "right-start",
          cf = vu() ? "right-start" : "left-start",
          uf = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    },
          df = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };

    class hf extends Uu {
      constructor(e, t) {
        super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
      }

      static get Default() {
        return uf;
      }

      static get DefaultType() {
        return df;
      }

      static get NAME() {
        return Ah;
      }

      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }

      show() {
        if (du(this._element) || this._isShown(this._menu)) return;
        const e = {
          relatedTarget: this._element
        },
              t = zu.trigger(this._element, Wh, e);
        if (t.defaultPrevented) return;
        const n = hf.getParentFromElement(this._element);
        this._inNavbar ? dd.setDataAttribute(this._menu, "popper", "none") : this._createPopper(n), "ontouchstart" in document.documentElement && !n.closest(tf) && [].concat(...document.body.children).forEach(e => zu.on(e, "mouseover", fu)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Gh), this._element.classList.add(Gh), zu.trigger(this._element, qh, e);
      }

      hide() {
        if (du(this._element) || !this._isShown(this._menu)) return;
        const e = {
          relatedTarget: this._element
        };

        this._completeHide(e);
      }

      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }

      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }

      _completeHide(e) {
        const t = zu.trigger(this._element, zh, e);
        t.defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => zu.off(e, "mouseover", fu)), this._popper && this._popper.destroy(), this._menu.classList.remove(Gh), this._element.classList.remove(Gh), this._element.setAttribute("aria-expanded", "false"), dd.removeDataAttribute(this._menu, "popper"), zu.trigger(this._element, $h, e));
      }

      _getConfig(e) {
        if (e = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dd.getDataAttributes(this._element)), e), cu(Ah, e, this.constructor.DefaultType), "object" === typeof e.reference && !au(e.reference) && "function" !== typeof e.reference.getBoundingClientRect) throw new TypeError(Ah.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return e;
      }

      _createPopper(e) {
        if ("undefined" === typeof i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let t = this._element;
        "parent" === this._config.reference ? t = e : au(this._config.reference) ? t = lu(this._config.reference) : "object" === typeof this._config.reference && (t = this._config.reference);

        const n = this._getPopperConfig(),
              s = n.modifiers.find(e => "applyStyles" === e.name && !1 === e.enabled);

        this._popper = Gc(t, this._menu, n), s && dd.setDataAttribute(this._menu, "popper", "static");
      }

      _isShown(e = this._element) {
        return e.classList.contains(Gh);
      }

      _getMenuElement() {
        return fd.next(this._element, ef)[0];
      }

      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains(Yh)) return lf;
        if (e.classList.contains(Qh)) return cf;
        const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains(Xh) ? t ? of : sf : t ? af : rf;
      }

      _detectNavbar() {
        return null !== this._element.closest("." + Jh);
      }

      _getOffset() {
        const {
          offset: e
        } = this._config;
        return "string" === typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" === typeof e ? t => e(t, this._element) : e;
      }

      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (e.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, e), "function" === typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }

      _selectMenuItem({
        key: e,
        target: t
      }) {
        const n = fd.find(nf, this._menu).filter(uu);
        n.length && Ou(n, t, e === Rh, !n.includes(t)).focus();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = hf.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }

      static clearMenus(e) {
        if (e && (e.button === Bh || "keyup" === e.type && e.key !== Nh)) return;
        const t = fd.find(Zh);

        for (let n = 0, i = t.length; n < i; n++) {
          const i = hf.getInstance(t[n]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._isShown()) continue;
          const s = {
            relatedTarget: i._element
          };

          if (e) {
            const t = e.composedPath(),
                  n = t.includes(i._menu);
            if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
            if (i._menu.contains(e.target) && ("keyup" === e.type && e.key === Nh || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (s.clickEvent = e);
          }

          i._completeHide(s);
        }
      }

      static getParentFromElement(e) {
        return su(e) || e.parentNode;
      }

      static dataApiKeydownHandler(e) {
        if (/input|textarea/i.test(e.target.tagName) ? e.key === Mh || e.key !== Ph && (e.key !== Rh && e.key !== Hh || e.target.closest(ef)) : !Fh.test(e.key)) return;
        const t = this.classList.contains(Gh);
        if (!t && e.key === Ph) return;
        if (e.preventDefault(), e.stopPropagation(), du(this)) return;
        const n = this.matches(Zh) ? this : fd.prev(this, Zh)[0],
              i = hf.getOrCreateInstance(n);
        if (e.key !== Ph) return e.key === Hh || e.key === Rh ? (t || i.show(), void i._selectMenuItem(e)) : void (t && e.key !== Mh || hf.clearMenus());
        i.hide();
      }

    }

    zu.on(document, Vh, Zh, hf.dataApiKeydownHandler), zu.on(document, Vh, ef, hf.dataApiKeydownHandler), zu.on(document, Uh, hf.clearMenus), zu.on(document, Kh, hf.clearMenus), zu.on(document, Uh, Zh, function (e) {
      e.preventDefault(), hf.getOrCreateInstance(this).toggle();
    }), _u(hf);
    const ff = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          pf = ".sticky-top";

    class mf {
      constructor() {
        this._element = document.body;
      }

      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }

      hide() {
        const e = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", t => t + e), this._setElementAttributes(ff, "paddingRight", t => t + e), this._setElementAttributes(pf, "marginRight", t => t - e);
      }

      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }

      _setElementAttributes(e, t, n) {
        const i = this.getWidth(),
              s = e => {
          if (e !== this._element && window.innerWidth > e.clientWidth + i) return;

          this._saveInitialAttribute(e, t);

          const s = window.getComputedStyle(e)[t];
          e.style[t] = n(Number.parseFloat(s)) + "px";
        };

        this._applyManipulationCallback(e, s);
      }

      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ff, "paddingRight"), this._resetElementAttributes(pf, "marginRight");
      }

      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && dd.setDataAttribute(e, t, n);
      }

      _resetElementAttributes(e, t) {
        const n = e => {
          const n = dd.getDataAttribute(e, t);
          "undefined" === typeof n ? e.style.removeProperty(t) : (dd.removeDataAttribute(e, t), e.style[t] = n);
        };

        this._applyManipulationCallback(e, n);
      }

      _applyManipulationCallback(e, t) {
        au(e) ? t(e) : fd.find(e, this._element).forEach(t);
      }

      isOverflowing() {
        return this.getWidth() > 0;
      }

    }

    const gf = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null
    },
          bf = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)"
    },
          vf = "backdrop",
          _f = "fade",
          yf = "show",
          wf = "mousedown.bs." + vf;

    class Of {
      constructor(e) {
        this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
      }

      show(e) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && pu(this._getElement()), this._getElement().classList.add(yf), this._emulateAnimation(() => {
          yu(e);
        })) : yu(e);
      }

      hide(e) {
        this._config.isVisible ? (this._getElement().classList.remove(yf), this._emulateAnimation(() => {
          this.dispose(), yu(e);
        })) : yu(e);
      }

      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          e.className = this._config.className, this._config.isAnimated && e.classList.add(_f), this._element = e;
        }

        return this._element;
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread({}, gf), "object" === typeof e ? e : {}), e.rootElement = lu(e.rootElement), cu(vf, e, bf), e;
      }

      _append() {
        this._isAppended || (this._config.rootElement.append(this._getElement()), zu.on(this._getElement(), wf, () => {
          yu(this._config.clickCallback);
        }), this._isAppended = !0);
      }

      dispose() {
        this._isAppended && (zu.off(this._element, wf), this._element.remove(), this._isAppended = !1);
      }

      _emulateAnimation(e) {
        wu(e, this._getElement(), this._config.isAnimated);
      }

    }

    const xf = {
      trapElement: null,
      autofocus: !0
    },
          Cf = {
      trapElement: "element",
      autofocus: "boolean"
    },
          Ef = "focustrap",
          kf = "bs.focustrap",
          jf = "." + kf,
          Tf = "focusin" + jf,
          Sf = "keydown.tab" + jf,
          Af = "Tab",
          If = "forward",
          Lf = "backward";

    class Df {
      constructor(e) {
        this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
      }

      activate() {
        const {
          trapElement: e,
          autofocus: t
        } = this._config;
        this._isActive || (t && e.focus(), zu.off(document, jf), zu.on(document, Tf, e => this._handleFocusin(e)), zu.on(document, Sf, e => this._handleKeydown(e)), this._isActive = !0);
      }

      deactivate() {
        this._isActive && (this._isActive = !1, zu.off(document, jf));
      }

      _handleFocusin(e) {
        const {
          target: t
        } = e,
              {
          trapElement: n
        } = this._config;
        if (t === document || t === n || n.contains(t)) return;
        const i = fd.focusableChildren(n);
        0 === i.length ? n.focus() : this._lastTabNavDirection === Lf ? i[i.length - 1].focus() : i[0].focus();
      }

      _handleKeydown(e) {
        e.key === Af && (this._lastTabNavDirection = e.shiftKey ? Lf : If);
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread({}, xf), "object" === typeof e ? e : {}), cu(Ef, e, Cf), e;
      }

    }

    const Pf = "modal",
          Mf = "bs.modal",
          Nf = "." + Mf,
          Hf = ".data-api",
          Rf = "Escape",
          Bf = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
          Ff = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
          zf = "hide" + Nf,
          $f = "hidePrevented" + Nf,
          Wf = "hidden" + Nf,
          qf = "show" + Nf,
          Uf = "shown" + Nf,
          Vf = "resize" + Nf,
          Kf = "click.dismiss" + Nf,
          Gf = "keydown.dismiss" + Nf,
          Xf = "mouseup.dismiss" + Nf,
          Yf = "mousedown.dismiss" + Nf,
          Qf = `click${Nf}${Hf}`,
          Jf = "modal-open",
          Zf = "fade",
          ep = "show",
          tp = "modal-static",
          np = ".modal.show",
          ip = ".modal-dialog",
          sp = ".modal-body",
          op = '[data-bs-toggle="modal"]';

    class rp extends Uu {
      constructor(e, t) {
        super(e), this._config = this._getConfig(t), this._dialog = fd.findOne(ip, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new mf();
      }

      static get Default() {
        return Bf;
      }

      static get NAME() {
        return Pf;
      }

      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }

      show(e) {
        if (this._isShown || this._isTransitioning) return;
        const t = zu.trigger(this._element, qf, {
          relatedTarget: e
        });
        t.defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Jf), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), zu.on(this._dialog, Yf, () => {
          zu.one(this._element, Xf, e => {
            e.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(() => this._showElement(e)));
      }

      hide() {
        if (!this._isShown || this._isTransitioning) return;
        const e = zu.trigger(this._element, zf);
        if (e.defaultPrevented) return;
        this._isShown = !1;

        const t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ep), zu.off(this._element, Kf), zu.off(this._dialog, Yf), this._queueCallback(() => this._hideModal(), this._element, t);
      }

      dispose() {
        [window, this._dialog].forEach(e => zu.off(e, Nf)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }

      handleUpdate() {
        this._adjustDialog();
      }

      _initializeBackDrop() {
        return new Of({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }

      _initializeFocusTrap() {
        return new Df({
          trapElement: this._element
        });
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, Bf), dd.getDataAttributes(this._element)), "object" === typeof e ? e : {}), cu(Pf, e, Ff), e;
      }

      _showElement(e) {
        const t = this._isAnimated(),
              n = fd.findOne(sp, this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && pu(this._element), this._element.classList.add(ep);

        const i = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, zu.trigger(this._element, Uf, {
            relatedTarget: e
          });
        };

        this._queueCallback(i, this._dialog, t);
      }

      _setEscapeEvent() {
        this._isShown ? zu.on(this._element, Gf, e => {
          this._config.keyboard && e.key === Rf ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== Rf || this._triggerBackdropTransition();
        }) : zu.off(this._element, Gf);
      }

      _setResizeEvent() {
        this._isShown ? zu.on(window, Vf, () => this._adjustDialog()) : zu.off(window, Vf);
      }

      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(Jf), this._resetAdjustments(), this._scrollBar.reset(), zu.trigger(this._element, Wf);
        });
      }

      _showBackdrop(e) {
        zu.on(this._element, Kf, e => {
          this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
        }), this._backdrop.show(e);
      }

      _isAnimated() {
        return this._element.classList.contains(Zf);
      }

      _triggerBackdropTransition() {
        const e = zu.trigger(this._element, $f);
        if (e.defaultPrevented) return;
        const {
          classList: t,
          scrollHeight: n,
          style: i
        } = this._element,
              s = n > document.documentElement.clientHeight;
        !s && "hidden" === i.overflowY || t.contains(tp) || (s || (i.overflowY = "hidden"), t.add(tp), this._queueCallback(() => {
          t.remove(tp), s || this._queueCallback(() => {
            i.overflowY = "";
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }

      _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight,
              t = this._scrollBar.getWidth(),
              n = t > 0;

        (!n && e && !vu() || n && !e && vu()) && (this._element.style.paddingLeft = t + "px"), (n && !e && !vu() || !n && e && vu()) && (this._element.style.paddingRight = t + "px");
      }

      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }

      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = rp.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof n[e]) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }

    }

    zu.on(document, Qf, op, function (e) {
      const t = su(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), zu.one(t, qf, e => {
        e.defaultPrevented || zu.one(t, Wf, () => {
          uu(this) && this.focus();
        });
      });
      const n = fd.findOne(np);
      n && rp.getInstance(n).hide();
      const i = rp.getOrCreateInstance(t);
      i.toggle(this);
    }), Vu(rp), _u(rp);

    const ap = "offcanvas",
          lp = "bs.offcanvas",
          cp = "." + lp,
          up = ".data-api",
          dp = `load${cp}${up}`,
          hp = "Escape",
          fp = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
          pp = {
      backdrop: "boolean",
      keyboard: "boolean",
      scroll: "boolean"
    },
          mp = "show",
          gp = "offcanvas-backdrop",
          bp = ".offcanvas.show",
          vp = "show" + cp,
          _p = "shown" + cp,
          yp = "hide" + cp,
          wp = "hidden" + cp,
          Op = `click${cp}${up}`,
          xp = "keydown.dismiss" + cp,
          Cp = '[data-bs-toggle="offcanvas"]';

    class Ep extends Uu {
      constructor(e, t) {
        super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }

      static get NAME() {
        return ap;
      }

      static get Default() {
        return fp;
      }

      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }

      show(e) {
        if (this._isShown) return;
        const t = zu.trigger(this._element, vp, {
          relatedTarget: e
        });
        if (t.defaultPrevented) return;
        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new mf().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(mp);

        const n = () => {
          this._config.scroll || this._focustrap.activate(), zu.trigger(this._element, _p, {
            relatedTarget: e
          });
        };

        this._queueCallback(n, this._element, !0);
      }

      hide() {
        if (!this._isShown) return;
        const e = zu.trigger(this._element, yp);
        if (e.defaultPrevented) return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(mp), this._backdrop.hide();

        const t = () => {
          this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new mf().reset(), zu.trigger(this._element, wp);
        };

        this._queueCallback(t, this._element, !0);
      }

      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, fp), dd.getDataAttributes(this._element)), "object" === typeof e ? e : {}), cu(ap, e, pp), e;
      }

      _initializeBackDrop() {
        return new Of({
          className: gp,
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide()
        });
      }

      _initializeFocusTrap() {
        return new Df({
          trapElement: this._element
        });
      }

      _addEventListeners() {
        zu.on(this._element, xp, e => {
          this._config.keyboard && e.key === hp && this.hide();
        });
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ep.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }

    }

    zu.on(document, Op, Cp, function (e) {
      const t = su(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), du(this)) return;
      zu.one(t, wp, () => {
        uu(this) && this.focus();
      });
      const n = fd.findOne(bp);
      n && n !== t && Ep.getInstance(n).hide();
      const i = Ep.getOrCreateInstance(t);
      i.toggle(this);
    }), zu.on(window, dp, () => fd.find(bp).forEach(e => Ep.getOrCreateInstance(e).show())), Vu(Ep), _u(Ep);

    const kp = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          jp = /^aria-[\w-]*$/i,
          Tp = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
          Sp = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          Ap = (e, t) => {
      const n = e.nodeName.toLowerCase();
      if (t.includes(n)) return !kp.has(n) || Boolean(Tp.test(e.nodeValue) || Sp.test(e.nodeValue));
      const i = t.filter(e => e instanceof RegExp);

      for (let s = 0, o = i.length; s < o; s++) if (i[s].test(n)) return !0;

      return !1;
    },
          Ip = {
      "*": ["class", "dir", "id", "lang", "role", jp],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };

    function Lp(e, t, n) {
      if (!e.length) return e;
      if (n && "function" === typeof n) return n(e);
      const i = new window.DOMParser(),
            s = i.parseFromString(e, "text/html"),
            o = [].concat(...s.body.querySelectorAll("*"));

      for (let r = 0, a = o.length; r < a; r++) {
        const e = o[r],
              n = e.nodeName.toLowerCase();

        if (!Object.keys(t).includes(n)) {
          e.remove();
          continue;
        }

        const i = [].concat(...e.attributes),
              s = [].concat(t["*"] || [], t[n] || []);
        i.forEach(t => {
          Ap(t, s) || e.removeAttribute(t.nodeName);
        });
      }

      return s.body.innerHTML;
    }

    const Dp = "tooltip",
          Pp = "bs.tooltip",
          Mp = "." + Pp,
          Np = "bs-tooltip",
          Hp = new Set(["sanitize", "allowList", "sanitizeFn"]),
          Rp = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
          Bp = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: vu() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: vu() ? "right" : "left"
    },
          Fp = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: Ip,
      popperConfig: null
    },
          zp = {
      HIDE: "hide" + Mp,
      HIDDEN: "hidden" + Mp,
      SHOW: "show" + Mp,
      SHOWN: "shown" + Mp,
      INSERTED: "inserted" + Mp,
      CLICK: "click" + Mp,
      FOCUSIN: "focusin" + Mp,
      FOCUSOUT: "focusout" + Mp,
      MOUSEENTER: "mouseenter" + Mp,
      MOUSELEAVE: "mouseleave" + Mp
    },
          $p = "fade",
          Wp = "modal",
          qp = "show",
          Up = "show",
          Vp = "out",
          Kp = ".tooltip-inner",
          Gp = "." + Wp,
          Xp = "hide.bs.modal",
          Yp = "hover",
          Qp = "focus",
          Jp = "click",
          Zp = "manual";

    class em extends Uu {
      constructor(e, t) {
        if ("undefined" === typeof i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners();
      }

      static get Default() {
        return Fp;
      }

      static get NAME() {
        return Dp;
      }

      static get Event() {
        return zp;
      }

      static get DefaultType() {
        return Rp;
      }

      enable() {
        this._isEnabled = !0;
      }

      disable() {
        this._isEnabled = !1;
      }

      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }

      toggle(e) {
        if (this._isEnabled) if (e) {
          const t = this._initializeOnDelegatedTarget(e);

          t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
        } else {
          if (this.getTipElement().classList.contains(qp)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }

      dispose() {
        clearTimeout(this._timeout), zu.off(this._element.closest(Gp), Xp, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
      }

      show() {
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = zu.trigger(this._element, this.constructor.Event.SHOW),
              t = hu(this._element),
              n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
        if (e.defaultPrevented || !n) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Kp).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
        const i = this.getTipElement(),
              s = tu(this.constructor.NAME);
        i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && i.classList.add($p);

        const o = "function" === typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
              r = this._getAttachment(o);

        this._addAttachmentClass(r);

        const {
          container: a
        } = this._config;
        Wu.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), zu.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Gc(this._element, i, this._getPopperConfig(r)), i.classList.add(qp);

        const l = this._resolvePossibleFunction(this._config.customClass);

        l && i.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => {
          zu.on(e, "mouseover", fu);
        });

        const c = () => {
          const e = this._hoverState;
          this._hoverState = null, zu.trigger(this._element, this.constructor.Event.SHOWN), e === Vp && this._leave(null, this);
        },
              u = this.tip.classList.contains($p);

        this._queueCallback(c, this.tip, u);
      }

      hide() {
        if (!this._popper) return;

        const e = this.getTipElement(),
              t = () => {
          this._isWithActiveTrigger() || (this._hoverState !== Up && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), zu.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
        },
              n = zu.trigger(this._element, this.constructor.Event.HIDE);

        if (n.defaultPrevented) return;
        e.classList.remove(qp), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => zu.off(e, "mouseover", fu)), this._activeTrigger[Jp] = !1, this._activeTrigger[Qp] = !1, this._activeTrigger[Yp] = !1;
        const i = this.tip.classList.contains($p);
        this._queueCallback(t, this.tip, i), this._hoverState = "";
      }

      update() {
        null !== this._popper && this._popper.update();
      }

      isWithContent() {
        return Boolean(this.getTitle());
      }

      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement("div");
        e.innerHTML = this._config.template;
        const t = e.children[0];
        return this.setContent(t), t.classList.remove($p, qp), this.tip = t, this.tip;
      }

      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), Kp);
      }

      _sanitizeAndSetContent(e, t, n) {
        const i = fd.findOne(n, e);
        t || !i ? this.setElementContent(i, t) : i.remove();
      }

      setElementContent(e, t) {
        if (null !== e) return au(t) ? (t = lu(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = Lp(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
      }

      getTitle() {
        const e = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(e);
      }

      updateAttachment(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e;
      }

      _initializeOnDelegatedTarget(e, t) {
        return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
      }

      _getOffset() {
        const {
          offset: e
        } = this._config;
        return "string" === typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" === typeof e ? t => e(t, this._element) : e;
      }

      _resolvePossibleFunction(e) {
        return "function" === typeof e ? e.call(this._element) : e;
      }

      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: e => this._handlePopperPlacementChange(e)
          }],
          onFirstUpdate: e => {
            e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
          }
        };
        return _objectSpread(_objectSpread({}, t), "function" === typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }

      _addAttachmentClass(e) {
        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`);
      }

      _getAttachment(e) {
        return Bp[e.toUpperCase()];
      }

      _setListeners() {
        const e = this._config.trigger.split(" ");

        e.forEach(e => {
          if ("click" === e) zu.on(this._element, this.constructor.Event.CLICK, this._config.selector, e => this.toggle(e));else if (e !== Zp) {
            const t = e === Yp ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                  n = e === Yp ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
            zu.on(this._element, t, this._config.selector, e => this._enter(e)), zu.on(this._element, n, this._config.selector, e => this._leave(e));
          }
        }), this._hideModalHandler = () => {
          this._element && this.hide();
        }, zu.on(this._element.closest(Gp), Xp, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }

      _fixTitle() {
        const e = this._element.getAttribute("title"),
              t = typeof this._element.getAttribute("data-bs-original-title");

        (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
      }

      _enter(e, t) {
        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? Qp : Yp] = !0), t.getTipElement().classList.contains(qp) || t._hoverState === Up ? t._hoverState = Up : (clearTimeout(t._timeout), t._hoverState = Up, t._config.delay && t._config.delay.show ? t._timeout = setTimeout(() => {
          t._hoverState === Up && t.show();
        }, t._config.delay.show) : t.show());
      }

      _leave(e, t) {
        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? Qp : Yp] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Vp, t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(() => {
          t._hoverState === Vp && t.hide();
        }, t._config.delay.hide) : t.hide());
      }

      _isWithActiveTrigger() {
        for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;

        return !1;
      }

      _getConfig(e) {
        const t = dd.getDataAttributes(this._element);
        return Object.keys(t).forEach(e => {
          Hp.has(e) && delete t[e];
        }), e = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), t), "object" === typeof e && e ? e : {}), e.container = !1 === e.container ? document.body : lu(e.container), "number" === typeof e.delay && (e.delay = {
          show: e.delay,
          hide: e.delay
        }), "number" === typeof e.title && (e.title = e.title.toString()), "number" === typeof e.content && (e.content = e.content.toString()), cu(Dp, e, this.constructor.DefaultType), e.sanitize && (e.template = Lp(e.template, e.allowList, e.sanitizeFn)), e;
      }

      _getDelegateConfig() {
        const e = {};

        for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);

        return e;
      }

      _cleanTipClass() {
        const e = this.getTipElement(),
              t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
              n = e.getAttribute("class").match(t);
        null !== n && n.length > 0 && n.map(e => e.trim()).forEach(t => e.classList.remove(t));
      }

      _getBasicClassPrefix() {
        return Np;
      }

      _handlePopperPlacementChange(e) {
        const {
          state: t
        } = e;
        t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
      }

      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = em.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }

    }

    _u(em);

    const tm = "popover",
          nm = "bs.popover",
          im = "." + nm,
          sm = "bs-popover",
          om = _objectSpread(_objectSpread({}, em.Default), {}, {
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
          rm = _objectSpread(_objectSpread({}, em.DefaultType), {}, {
      content: "(string|element|function)"
    }),
          am = {
      HIDE: "hide" + im,
      HIDDEN: "hidden" + im,
      SHOW: "show" + im,
      SHOWN: "shown" + im,
      INSERTED: "inserted" + im,
      CLICK: "click" + im,
      FOCUSIN: "focusin" + im,
      FOCUSOUT: "focusout" + im,
      MOUSEENTER: "mouseenter" + im,
      MOUSELEAVE: "mouseleave" + im
    },
          lm = ".popover-header",
          cm = ".popover-body";

    class um extends em {
      static get Default() {
        return om;
      }

      static get NAME() {
        return tm;
      }

      static get Event() {
        return am;
      }

      static get DefaultType() {
        return rm;
      }

      isWithContent() {
        return this.getTitle() || this._getContent();
      }

      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), lm), this._sanitizeAndSetContent(e, this._getContent(), cm);
      }

      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }

      _getBasicClassPrefix() {
        return sm;
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = um.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }

    }

    _u(um);

    const dm = "scrollspy",
          hm = "bs.scrollspy",
          fm = "." + hm,
          pm = ".data-api",
          mm = {
      offset: 10,
      method: "auto",
      target: ""
    },
          gm = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
          bm = "activate" + fm,
          vm = "scroll" + fm,
          _m = `load${fm}${pm}`,
          ym = "dropdown-item",
          wm = "active",
          Om = '[data-bs-spy="scroll"]',
          xm = ".nav, .list-group",
          Cm = ".nav-link",
          Em = ".nav-item",
          km = ".list-group-item",
          jm = `${Cm}, ${km}, .${ym}`,
          Tm = ".dropdown",
          Sm = ".dropdown-toggle",
          Am = "offset",
          Im = "position";

    class Lm extends Uu {
      constructor(e, t) {
        super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, zu.on(this._scrollElement, vm, () => this._process()), this.refresh(), this._process();
      }

      static get Default() {
        return mm;
      }

      static get NAME() {
        return dm;
      }

      refresh() {
        const e = this._scrollElement === this._scrollElement.window ? Am : Im,
              t = "auto" === this._config.method ? e : this._config.method,
              n = t === Im ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        const i = fd.find(jm, this._config.target);
        i.map(e => {
          const i = iu(e),
                s = i ? fd.findOne(i) : null;

          if (s) {
            const e = s.getBoundingClientRect();
            if (e.width || e.height) return [dd[t](s).top + n, i];
          }

          return null;
        }).filter(e => e).sort((e, t) => e[0] - t[0]).forEach(e => {
          this._offsets.push(e[0]), this._targets.push(e[1]);
        });
      }

      dispose() {
        zu.off(this._scrollElement, fm), super.dispose();
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, mm), dd.getDataAttributes(this._element)), "object" === typeof e && e ? e : {}), e.target = lu(e.target) || document.documentElement, cu(dm, e, gm), e;
      }

      _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }

      _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }

      _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }

      _process() {
        const e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();

        if (this._scrollHeight !== t && this.refresh(), e >= n) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (let t = this._offsets.length; t--;) {
            const n = this._activeTarget !== this._targets[t] && e >= this._offsets[t] && ("undefined" === typeof this._offsets[t + 1] || e < this._offsets[t + 1]);
            n && this._activate(this._targets[t]);
          }
        }
      }

      _activate(e) {
        this._activeTarget = e, this._clear();
        const t = jm.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
              n = fd.findOne(t.join(","), this._config.target);
        n.classList.add(wm), n.classList.contains(ym) ? fd.findOne(Sm, n.closest(Tm)).classList.add(wm) : fd.parents(n, xm).forEach(e => {
          fd.prev(e, `${Cm}, ${km}`).forEach(e => e.classList.add(wm)), fd.prev(e, Em).forEach(e => {
            fd.children(e, Cm).forEach(e => e.classList.add(wm));
          });
        }), zu.trigger(this._scrollElement, bm, {
          relatedTarget: e
        });
      }

      _clear() {
        fd.find(jm, this._config.target).filter(e => e.classList.contains(wm)).forEach(e => e.classList.remove(wm));
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Lm.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }

    }

    zu.on(window, _m, () => {
      fd.find(Om).forEach(e => new Lm(e));
    }), _u(Lm);
    const Dm = "tab",
          Pm = "bs.tab",
          Mm = "." + Pm,
          Nm = ".data-api",
          Hm = "hide" + Mm,
          Rm = "hidden" + Mm,
          Bm = "show" + Mm,
          Fm = "shown" + Mm,
          zm = `click${Mm}${Nm}`,
          $m = "dropdown-menu",
          Wm = "active",
          qm = "fade",
          Um = "show",
          Vm = ".dropdown",
          Km = ".nav, .list-group",
          Gm = ".active",
          Xm = ":scope > li > .active",
          Ym = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          Qm = ".dropdown-toggle",
          Jm = ":scope > .dropdown-menu .active";

    class Zm extends Uu {
      static get NAME() {
        return Dm;
      }

      show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Wm)) return;
        let e;

        const t = su(this._element),
              n = this._element.closest(Km);

        if (n) {
          const t = "UL" === n.nodeName || "OL" === n.nodeName ? Xm : Gm;
          e = fd.find(t, n), e = e[e.length - 1];
        }

        const i = e ? zu.trigger(e, Hm, {
          relatedTarget: this._element
        }) : null,
              s = zu.trigger(this._element, Bm, {
          relatedTarget: e
        });
        if (s.defaultPrevented || null !== i && i.defaultPrevented) return;

        this._activate(this._element, n);

        const o = () => {
          zu.trigger(e, Rm, {
            relatedTarget: this._element
          }), zu.trigger(this._element, Fm, {
            relatedTarget: e
          });
        };

        t ? this._activate(t, t.parentNode, o) : o();
      }

      _activate(e, t, n) {
        const i = !t || "UL" !== t.nodeName && "OL" !== t.nodeName ? fd.children(t, Gm) : fd.find(Xm, t),
              s = i[0],
              o = n && s && s.classList.contains(qm),
              r = () => this._transitionComplete(e, s, n);

        s && o ? (s.classList.remove(Um), this._queueCallback(r, e, !0)) : r();
      }

      _transitionComplete(e, t, n) {
        if (t) {
          t.classList.remove(Wm);
          const e = fd.findOne(Jm, t.parentNode);
          e && e.classList.remove(Wm), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
        }

        e.classList.add(Wm), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), pu(e), e.classList.contains(qm) && e.classList.add(Um);
        let i = e.parentNode;

        if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains($m)) {
          const t = e.closest(Vm);
          t && fd.find(Qm, t).forEach(e => e.classList.add(Wm)), e.setAttribute("aria-expanded", !0);
        }

        n && n();
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = Zm.getOrCreateInstance(this);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }

    }

    zu.on(document, zm, Ym, function (e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), du(this)) return;
      const t = Zm.getOrCreateInstance(this);
      t.show();
    }), _u(Zm);
    const eg = "toast",
          tg = "bs.toast",
          ng = "." + tg,
          ig = "mouseover" + ng,
          sg = "mouseout" + ng,
          og = "focusin" + ng,
          rg = "focusout" + ng,
          ag = "hide" + ng,
          lg = "hidden" + ng,
          cg = "show" + ng,
          ug = "shown" + ng,
          dg = "fade",
          hg = "hide",
          fg = "show",
          pg = "showing",
          mg = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
          gg = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };

    class bg extends Uu {
      constructor(e, t) {
        super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }

      static get DefaultType() {
        return mg;
      }

      static get Default() {
        return gg;
      }

      static get NAME() {
        return eg;
      }

      show() {
        const e = zu.trigger(this._element, cg);
        if (e.defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(dg);

        const t = () => {
          this._element.classList.remove(pg), zu.trigger(this._element, ug), this._maybeScheduleHide();
        };

        this._element.classList.remove(hg), pu(this._element), this._element.classList.add(fg), this._element.classList.add(pg), this._queueCallback(t, this._element, this._config.animation);
      }

      hide() {
        if (!this._element.classList.contains(fg)) return;
        const e = zu.trigger(this._element, ag);
        if (e.defaultPrevented) return;

        const t = () => {
          this._element.classList.add(hg), this._element.classList.remove(pg), this._element.classList.remove(fg), zu.trigger(this._element, lg);
        };

        this._element.classList.add(pg), this._queueCallback(t, this._element, this._config.animation);
      }

      dispose() {
        this._clearTimeout(), this._element.classList.contains(fg) && this._element.classList.remove(fg), super.dispose();
      }

      _getConfig(e) {
        return e = _objectSpread(_objectSpread(_objectSpread({}, gg), dd.getDataAttributes(this._element)), "object" === typeof e && e ? e : {}), cu(eg, e, this.constructor.DefaultType), e;
      }

      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }

      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
            break;
        }

        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n || this._element.contains(n) || this._maybeScheduleHide();
      }

      _setListeners() {
        zu.on(this._element, ig, e => this._onInteraction(e, !0)), zu.on(this._element, sg, e => this._onInteraction(e, !1)), zu.on(this._element, og, e => this._onInteraction(e, !0)), zu.on(this._element, rg, e => this._onInteraction(e, !1));
      }

      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }

      static jQueryInterface(e) {
        return this.each(function () {
          const t = bg.getOrCreateInstance(this, e);

          if ("string" === typeof e) {
            if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }

    }

    Vu(bg), _u(bg);
    const vg = 70,
          _g = 20,
          yg = 15;

    function wg(e) {
      const t = "0123456789ABCDEF";
      let n = "#";

      for (let i = 0; i < 6; i++) n += e.getElement(t);

      return n;
    }

    function Og(e, t, n, i, s) {
      if (.5 == e) return ["correct", !0];
      let o, r;
      return e < .5 ? (r = "left", o = "right") : (r = "right", o = "left"), t <= n || t >= i ? [o, !0] : (console.log(s, o, r), [s ? o : r, s]);
    }

    var xg = {
      components: {
        Button: Wo,
        Hint: dr,
        DisplayedHint: wr,
        Square: Ba,
        ArrowKey: qa
      },
      name: "ColorsTrial",
      props: {
        phaseIndex: Number,
        trialIndex: Number,
        isConditionA: Boolean
      },

      data() {
        const e = Dr("colors", this.phaseIndex, this.trialIndex),
              t = wg(e),
              n = 5,
              i = Ko[this.phaseIndex],
              s = i.isTutorial && 0 == this.trialIndex,
              o = "submit";
        let r;
        const a = 10,
              l = vg - (n + e.getInt(yg - n));

        let c = _g + (n + e.getInt(yg - n));

        (l - c) % 2 != 0 && (c -= 1), r = s ? a + e.getInt(l - c - a) : e.getInt(l - c);
        const u = c + r,
              d = i.hintCreator(this.isConditionA),
              h = e.getElement(d.groups),
              f = Da(t, vg),
              p = Da(t, _g);
        return {
          rng: e,
          isDisplayedHintTrue: !1,
          hintCountDown: d.delay,
          currentPopover: null,
          isTutorial: s,
          currentPhase: i,
          pressedKey: "",
          minMid: c,
          maxMid: l,
          hintSide: "",
          hintGroup: h,
          trialHint: d,
          autoHintCounter: d.autoHintClicks.min + e.getInt(d.autoHintClicks.max + 1 - d.autoHintClicks.min),
          didGiveHint: !1,
          tutorialPresses: a,
          tutorialPressesCounter: a,
          currentTutorialID: "",
          currentTutorialIndex: 0,
          shouldWitholdInput: !1,
          currentTutorialElement: null,
          didFollowHint: !1,
          keyPresses: 0,
          displayedHintSide: "",
          didDisplayFeedback: !i.shouldDisplayFeedback,
          color: t,
          submitID: o,
          tutorialIDs: ["right", "left", o],
          midLight: u,
          displayedLeftColor: f,
          displayeRightColor: p,
          overrideMidColor: null,
          trialStartTime: null,
          leftColor: f,
          rightColor: p
        };
      },

      emits: ["colors-finish"],
      methods: {
        getRelativePos() {
          const e = 1 - (this.midLight - _g) / (vg - _g),
                t = Math.round(100 * e);
          return Number("0." + t);
        },

        onHint() {
          if (this.hintCountDown > 0) return this.displayedLeftColor = "black", this.displayeRightColor = "black", this.overrideMidColor = "black", this.shouldWitholdInput = !0, void this.hintCountDownTimer();
          this.trialHint.delay > 0 && (this.displayedLeftColor = this.leftColor, this.displayeRightColor = this.rightColor, this.overrideMidColor = null, this.shouldWitholdInput = !1), [this.hintSide, this.isDisplayedHintTrue] = Og(this.getRelativePos(), this.midLight, _g + yg, vg - yg, this.rng.getBool(this.hintGroup.certainty)), this.displayedHintSide = this.hintSide, this.didGiveHint = !0;
        },

        toggleAlertnessTester() {
          this.currentPhase.alertnessTestIndex <= 0 || this.currentPhase.alertnessTestIndex == this.trialIndex && null == this.currentPopover && (this.currentPopover = new um(document.querySelector("#btn-" + this.submitID)), this.currentPopover.show(), document.getElementsByClassName("popover-body")[0].innerHTML = "ALERTNESS TEST: for this trial, select the darkest shade");
        },

        toggleTutorial() {
          if (this.isTutorial) {
            if (this.tutorialPressesCounter = this.tutorialPresses, null != this.currentPopover) if (this.currentTutorialIndex += 1, this.currentPopover.dispose(), this.currentTutorialIndex == this.tutorialIDs.length - 1) for (let e = 0; e < this.currentTutorialIndex; e++) document.querySelector("#btn-" + this.tutorialIDs[e]).classList.remove("invisible");else this.currentTutorialElement.classList.add("invisible");
            this.currentTutorialIndex >= this.tutorialIDs.length || (this.currentTutorialID = this.tutorialIDs[this.currentTutorialIndex], this.currentTutorialElement = document.querySelector("#btn-" + this.currentTutorialID), this.currentTutorialElement.classList.remove("invisible"), this.currentPopover = new um(this.currentTutorialElement), this.currentPopover.show());
          }
        },

        onSubmit() {
          this.didDisplayFeedback ? this.$emit("colors-finish", Ma({
            phaseIndex: this.phaseIndex,
            trialIndex: this.trialIndex,
            isTutorial: this.isTutorial,
            isPractice: this.currentPhase.isPractice,
            isAlertTest: this.currentPhase.alertnessTestIndex == this.trialIndex,
            leftValue: 0,
            rightValue: 1,
            pickedValue: this.getRelativePos(),
            didGiveHint: this.didGiveHint,
            displayedHintSide: this.hintSide,
            isDisplayedHintTrue: this.isDisplayedHintTrue,
            didFollowHint: this.didFollowHint,
            hintGroupSize: this.hintGroup.size,
            trialTimeMs: new Date() - this.trialStartTime - 1e3 * this.trialHint.delay,
            keyPresses: this.keyPresses
          })) : this.showFeedbackModal();
        },

        showHintAckModal() {
          new rp(document.getElementById("hint-ack-modal")).show();
        },

        showFeedbackModal() {
          this.didDisplayFeedback = !0;
          let e = (100 * this.getRelativePos()).toString();
          e.indexOf(".") > 0 && (e = e.substr(0, e.indexOf("."))), document.getElementById("score-range").value = e, document.getElementById("score-modal-label").innerHTML = "Score: " + e + "%", new rp(document.getElementById("score-modal")).show();
        },

        hintCountDownTimer() {
          this.hintCountDown > 0 ? (document.getElementById("hint-timer").innerHTML = this.hintCountDown.toString() + "s", setTimeout(() => {
            this.hintCountDown -= 1, this.hintCountDownTimer();
          }, 1e3)) : (document.getElementById("hint-timer").innerHTML = "&nbsp;", this.onHint());
        },

        keyboardListener(e) {
          if (!e.repeat && !this.shouldWitholdInput) {
            if ("ArrowLeft" === e.key) {
              if (!this.handlePressedKey("left", this.midLight < this.maxMid, 1)) return;
            } else {
              if ("ArrowRight" !== e.key) return;
              if (!this.handlePressedKey("right", this.midLight > this.minMid, -1)) return;
            }

            this.isTutorial && this.currentTutorialID != this.submitID && (this.tutorialPressesCounter -= 1, 0 == this.tutorialPressesCounter ? this.toggleTutorial() : document.getElementsByClassName("popover-body")[0].innerHTML = "Press the " + this.currentTutorialID.substr(0, this.currentTutorialID.indexOf("-")) + " arrow key " + this.tutorialPressesCounter.toString() + " more times"), "correct" === this.displayedHintSide && (this.didFollowHint = !1), this.displayedHintSide = "", console.log(this.midLight, this.minMid, this.maxMid, this.getRelativePos()), setTimeout(() => {
              this.pressedKey = "";
            }, 100), 0 == this.autoHintCounter && (this.shouldWitholdInput = !0, this.onHint(), this.showHintAckModal());
          }
        },

        handlePressedKey(e, t, n) {
          return (!this.isTutorial || this.currentTutorialID == this.submitID || this.currentTutorialID == e) && (this.displayedHintSide === e && (this.didFollowHint = !0), !!t && (this.pressedKey = e, this.midLight += n, this.keyPresses += 1, this.autoHintCounter -= 1, !0));
        },

        isArrowKeyDisabled(e) {
          return this.midLight == e || this.shouldWitholdInput;
        }

      },
      computed: {
        midColor() {
          return null != this.overrideMidColor ? this.overrideMidColor : Da(this.color, this.midLight);
        }

      },

      created() {
        window.addEventListener("keydown", this.keyboardListener);
      },

      unmounted() {
        window.removeEventListener("keydown", this.keyboardListener), null != this.currentPopover && this.currentPopover.dispose();
      },

      mounted() {
        this.trialStartTime = new Date(), this.toggleTutorial(), this.toggleAlertnessTester();
      }

    };
    const Cg = zo()(xg, [["render", Sa]]);
    var Eg = Cg;

    function kg(e) {
      const t = (e, t) => null === t ? "" : t,
            n = Object.keys(e[0]);

      return [n.join(","), ...e.map(e => n.map(n => JSON.stringify(e[n], t)).join(","))].join("\r\n");
    }

    function jg(e, t) {
      const n = new XMLHttpRequest();
      n.open("POST", "https://us-central1-ofirarias-com.cloudfunctions.net/colortask", !0), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify({
        participantId: e,
        records: t
      }));
      const i = kg(t);
      console.log(i), console.log("finished task");
    }

    var Tg = jg,
        Sg = {
      name: "App",
      components: {
        Instructions: Yo,
        ScatterTrial: Fr,
        ColorsTrial: Eg,
        ScatterSurvey: Cr
      },

      data() {
        let e = new Array(Ko.length);

        for (let t = 0; t < e.length; t++) {
          e[t] = new Array(Ko[t].numberOfTrials);

          for (let n = 0; n < e[t].length; n++) e[t][n] = new Object();
        }

        return {
          currentComponentName: Yo.name,
          isConditionA: !1,
          phaseIndex: 0,
          trialIndex: 0,
          records: e
        };
      },

      computed: {
        currentComponent() {
          return this.currentComponentName;
        },

        currentProps() {
          switch (this.currentComponentName) {
            case Yo.name:
              return {
                phaseIndex: this.phaseIndex,
                isDone: this.isDone()
              };

            case Eg.name:
              return {
                phaseIndex: this.phaseIndex,
                trialIndex: this.trialIndex,
                isConditionA: this.isConditionA
              };

            case Fr.name:
              return {
                phaseIndex: this.phaseIndex,
                trialIndex: this.trialIndex
              };

            case Cr.name:
              return {
                phaseIndex: this.phaseIndex,
                trialIndex: this.trialIndex
              };

            default:
              return {};
          }
        }

      },
      methods: {
        instructionsFinish() {
          this.currentComponentName = Ko[this.phaseIndex].taskName;
        },

        colorsFinish(e) {
          this.records[this.phaseIndex][this.trialIndex] = e, this.advance(Eg);
        },

        scatterFinish(e, t) {
          const n = this.records[this.phaseIndex][this.trialIndex];
          n.leftValue = e, n.rightValue = t, this.currentComponentName = Cr.name;
        },

        surveyFinish(e) {
          this.records[this.phaseIndex][this.trialIndex] = e, this.advance(Fr);
        },

        advance(e) {
          Tg("PARTICIPANT ID PLACEHOLDER FOR QUALTRICS", [this.records[this.phaseIndex][this.trialIndex]]), this.trialIndex + 1 == Ko[this.phaseIndex].numberOfTrials ? (this.trialIndex = 0, this.phaseIndex += 1, this.isDone && Tg("PARTICIPANT ID PLACEHOLDER FOR QUALTRICS", this.records), this.currentComponentName = Yo.name) : (this.trialIndex += 1, this.currentComponentName = e.name);
        },

        isDone() {
          return this.phaseIndex == Ko.length - 1;
        }

      }
    };
    n("f604");
    const Ag = zo()(Sg, [["render", Co]]);
    var Ig = Ag;
    const Lg = bo(Ig);
    Lg.mount("#app");
  },
  "5e10": function (e, t, n) {
    var i = n("3f7c");
    i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
    var s = n("499e").default;
    s("0ec12c8a", i, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  6125: function (e, t, n) {
    var i = n("1212"),
        s = n("b838"),
        o = n("a49e"),
        r = n("cae0"),
        a = n("7aec"),
        l = n("89ed"),
        c = n("a49d");
    c.alea = i, c.xor128 = s, c.xorwow = o, c.xorshift7 = r, c.xor4096 = a, c.tychei = l, e.exports = c;
  },
  "62e4": function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  },
  "6b0d": function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = (e, t) => {
      for (const [n, i] of t) e[n] = i;

      return e;
    };
  },
  "7aec": function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this;

          function n(e, t) {
            var n,
                i,
                s,
                o,
                r,
                a = [],
                l = 128;

            for (t === (0 | t) ? (i = t, t = null) : (t += "\0", i = 0, l = Math.max(l, t.length)), s = 0, o = -32; o < l; ++o) t && (i ^= t.charCodeAt((o + 32) % t.length)), 0 === o && (r = i), i ^= i << 10, i ^= i >>> 15, i ^= i << 4, i ^= i >>> 13, o >= 0 && (r = r + 1640531527 | 0, n = a[127 & o] ^= i + r, s = 0 == n ? s + 1 : 0);

            for (s >= 128 && (a[127 & (t && t.length || 0)] = -1), s = 127, o = 512; o > 0; --o) i = a[s + 34 & 127], n = a[s = s + 1 & 127], i ^= i << 13, n ^= n << 17, i ^= i >>> 15, n ^= n >>> 12, a[s] = i ^ n;

            e.w = r, e.X = a, e.i = s;
          }

          t.next = function () {
            var e,
                n,
                i = t.w,
                s = t.X,
                o = t.i;
            return t.w = i = i + 1640531527 | 0, n = s[o + 34 & 127], e = s[o = o + 1 & 127], n ^= n << 13, e ^= e << 17, n ^= n >>> 15, e ^= e >>> 12, n = s[o] = n ^ e, t.i = o, n + (i ^ i >>> 16) | 0;
          }, n(t, e);
        }

        function a(e, t) {
          return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t;
        }

        function l(e, t) {
          null == e && (e = +new Date());

          var n = new r(e),
              i = t && t.state,
              s = function () {
            return (n.next() >>> 0) / 4294967296;
          };

          return s.double = function () {
            do {
              var e = n.next() >>> 11,
                  t = (n.next() >>> 0) / 4294967296,
                  i = (e + t) / (1 << 21);
            } while (0 === i);

            return i;
          }, s.int32 = n.next, s.quick = s, i && (i.X && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.xor4096 = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  "89ed": function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this,
              n = "";
          t.next = function () {
            var e = t.b,
                n = t.c,
                i = t.d,
                s = t.a;
            return e = e << 25 ^ e >>> 7 ^ n, n = n - i | 0, i = i << 24 ^ i >>> 8 ^ s, s = s - e | 0, t.b = e = e << 20 ^ e >>> 12 ^ n, t.c = n = n - i | 0, t.d = i << 16 ^ n >>> 16 ^ s, t.a = s - e | 0;
          }, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math.floor(e) ? (t.a = e / 4294967296 | 0, t.b = 0 | e) : n += e;

          for (var i = 0; i < n.length + 20; i++) t.b ^= 0 | n.charCodeAt(i), t.next();
        }

        function a(e, t) {
          return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t;
        }

        function l(e, t) {
          var n = new r(e),
              i = t && t.state,
              s = function () {
            return (n.next() >>> 0) / 4294967296;
          };

          return s.double = function () {
            do {
              var e = n.next() >>> 11,
                  t = (n.next() >>> 0) / 4294967296,
                  i = (e + t) / (1 << 21);
            } while (0 === i);

            return i;
          }, s.int32 = n.next, s.quick = s, i && ("object" == typeof i && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.tychei = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  "9ff4": function (e, t, n) {
    "use strict";

    (function (e) {
      function i(e, t) {
        const n = Object.create(null),
              i = e.split(",");

        for (let s = 0; s < i.length; s++) n[i[s]] = !0;

        return t ? e => !!n[e.toLowerCase()] : e => !!n[e];
      }

      n.d(t, "a", function () {
        return C;
      }), n.d(t, "b", function () {
        return x;
      }), n.d(t, "c", function () {
        return k;
      }), n.d(t, "d", function () {
        return E;
      }), n.d(t, "e", function () {
        return Q;
      }), n.d(t, "f", function () {
        return ee;
      }), n.d(t, "g", function () {
        return se;
      }), n.d(t, "h", function () {
        return A;
      }), n.d(t, "i", function () {
        return ae;
      }), n.d(t, "j", function () {
        return ne;
      }), n.d(t, "k", function () {
        return D;
      }), n.d(t, "l", function () {
        return Z;
      }), n.d(t, "m", function () {
        return l;
      }), n.d(t, "n", function () {
        return ie;
      }), n.d(t, "o", function () {
        return P;
      }), n.d(t, "p", function () {
        return R;
      }), n.d(t, "q", function () {
        return o;
      }), n.d(t, "r", function () {
        return g;
      }), n.d(t, "s", function () {
        return K;
      }), n.d(t, "t", function () {
        return M;
      }), n.d(t, "u", function () {
        return S;
      }), n.d(t, "v", function () {
        return z;
      }), n.d(t, "w", function () {
        return T;
      }), n.d(t, "x", function () {
        return V;
      }), n.d(t, "y", function () {
        return $;
      }), n.d(t, "z", function () {
        return G;
      }), n.d(t, "A", function () {
        return b;
      }), n.d(t, "B", function () {
        return N;
      }), n.d(t, "C", function () {
        return a;
      }), n.d(t, "D", function () {
        return B;
      }), n.d(t, "E", function () {
        return F;
      }), n.d(t, "F", function () {
        return _;
      }), n.d(t, "G", function () {
        return y;
      }), n.d(t, "H", function () {
        return i;
      }), n.d(t, "I", function () {
        return f;
      }), n.d(t, "J", function () {
        return c;
      }), n.d(t, "K", function () {
        return I;
      }), n.d(t, "L", function () {
        return w;
      }), n.d(t, "M", function () {
        return te;
      }), n.d(t, "N", function () {
        return oe;
      }), n.d(t, "O", function () {
        return U;
      });
      const s = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",
            o = i(s);
      const r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
            a = i(r);

      function l(e) {
        return !!e || "" === e;
      }

      function c(e) {
        if (P(e)) {
          const t = {};

          for (let n = 0; n < e.length; n++) {
            const i = e[n],
                  s = B(i) ? h(i) : c(i);
            if (s) for (const e in s) t[e] = s[e];
          }

          return t;
        }

        return B(e) || z(e) ? e : void 0;
      }

      const u = /;(?![^(]*\))/g,
            d = /:(.+)/;

      function h(e) {
        const t = {};
        return e.split(u).forEach(e => {
          if (e) {
            const n = e.split(d);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
          }
        }), t;
      }

      function f(e) {
        let t = "";
        if (B(e)) t = e;else if (P(e)) for (let n = 0; n < e.length; n++) {
          const i = f(e[n]);
          i && (t += i + " ");
        } else if (z(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
      }

      const p = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
            m = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
            g = i(p),
            b = i(m);

      function v(e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;

        for (let i = 0; n && i < e.length; i++) n = _(e[i], t[i]);

        return n;
      }

      function _(e, t) {
        if (e === t) return !0;
        let n = H(e),
            i = H(t);
        if (n || i) return !(!n || !i) && e.getTime() === t.getTime();
        if (n = P(e), i = P(t), n || i) return !(!n || !i) && v(e, t);

        if (n = z(e), i = z(t), n || i) {
          if (!n || !i) return !1;
          const s = Object.keys(e).length,
                o = Object.keys(t).length;
          if (s !== o) return !1;

          for (const n in e) {
            const i = e.hasOwnProperty(n),
                  s = t.hasOwnProperty(n);
            if (i && !s || !i && s || !_(e[n], t[n])) return !1;
          }
        }

        return String(e) === String(t);
      }

      function y(e, t) {
        return e.findIndex(e => _(e, t));
      }

      const w = e => null == e ? "" : P(e) || z(e) && (e.toString === W || !R(e.toString)) ? JSON.stringify(e, O, 2) : String(e),
            O = (e, t) => t && t.__v_isRef ? O(e, t.value) : M(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => (e[t + " =>"] = n, e), {})
      } : N(t) ? {
        [`Set(${t.size})`]: [...t.values()]
      } : !z(t) || P(t) || V(t) ? t : String(t),
            x = {},
            C = [],
            E = () => {},
            k = () => !1,
            j = /^on[^a-z]/,
            T = e => j.test(e),
            S = e => e.startsWith("onUpdate:"),
            A = Object.assign,
            I = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      },
            L = Object.prototype.hasOwnProperty,
            D = (e, t) => L.call(e, t),
            P = Array.isArray,
            M = e => "[object Map]" === q(e),
            N = e => "[object Set]" === q(e),
            H = e => e instanceof Date,
            R = e => "function" === typeof e,
            B = e => "string" === typeof e,
            F = e => "symbol" === typeof e,
            z = e => null !== e && "object" === typeof e,
            $ = e => z(e) && R(e.then) && R(e.catch),
            W = Object.prototype.toString,
            q = e => W.call(e),
            U = e => q(e).slice(8, -1),
            V = e => "[object Object]" === q(e),
            K = e => B(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
            G = i(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
            X = e => {
        const t = Object.create(null);
        return n => {
          const i = t[n];
          return i || (t[n] = e(n));
        };
      },
            Y = /-(\w)/g,
            Q = X(e => e.replace(Y, (e, t) => t ? t.toUpperCase() : "")),
            J = /\B([A-Z])/g,
            Z = X(e => e.replace(J, "-$1").toLowerCase()),
            ee = X(e => e.charAt(0).toUpperCase() + e.slice(1)),
            te = X(e => e ? "on" + ee(e) : ""),
            ne = (e, t) => !Object.is(e, t),
            ie = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
      },
            se = (e, t, n) => {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          value: n
        });
      },
            oe = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };

      let re;

      const ae = () => re || (re = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : {});
    }).call(this, n("c8ba"));
  },
  a448: function (e, t, n) {
    "use strict";

    n("ed51");
  },
  a49d: function (e, t, n) {
    var i;

    (function (s, o, r) {
      var a,
          l = 256,
          c = 6,
          u = 52,
          d = "random",
          h = r.pow(l, c),
          f = r.pow(2, u),
          p = 2 * f,
          m = l - 1;

      function g(e, t, n) {
        var i = [];
        t = 1 == t ? {
          entropy: !0
        } : t || {};

        var s = y(_(t.entropy ? [e, O(o)] : null == e ? w() : e, 3), i),
            a = new b(i),
            u = function () {
          var e = a.g(c),
              t = h,
              n = 0;

          while (e < f) e = (e + n) * l, t *= l, n = a.g(1);

          while (e >= p) e /= 2, t /= 2, n >>>= 1;

          return (e + n) / t;
        };

        return u.int32 = function () {
          return 0 | a.g(4);
        }, u.quick = function () {
          return a.g(4) / 4294967296;
        }, u.double = u, y(O(a.S), o), (t.pass || n || function (e, t, n, i) {
          return i && (i.S && v(i, a), e.state = function () {
            return v(a, {});
          }), n ? (r[d] = e, t) : e;
        })(u, s, "global" in t ? t.global : this == r, t.state);
      }

      function b(e) {
        var t,
            n = e.length,
            i = this,
            s = 0,
            o = i.i = i.j = 0,
            r = i.S = [];
        n || (e = [n++]);

        while (s < l) r[s] = s++;

        for (s = 0; s < l; s++) r[s] = r[o = m & o + e[s % n] + (t = r[s])], r[o] = t;

        (i.g = function (e) {
          var t,
              n = 0,
              s = i.i,
              o = i.j,
              r = i.S;

          while (e--) t = r[s = m & s + 1], n = n * l + r[m & (r[s] = r[o = m & o + t]) + (r[o] = t)];

          return i.i = s, i.j = o, n;
        })(l);
      }

      function v(e, t) {
        return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t;
      }

      function _(e, t) {
        var n,
            i = [],
            s = typeof e;
        if (t && "object" == s) for (n in e) try {
          i.push(_(e[n], t - 1));
        } catch (o) {}
        return i.length ? i : "string" == s ? e : e + "\0";
      }

      function y(e, t) {
        var n,
            i = e + "",
            s = 0;

        while (s < i.length) t[m & s] = m & (n ^= 19 * t[m & s]) + i.charCodeAt(s++);

        return O(t);
      }

      function w() {
        try {
          var e;
          return a && (e = a.randomBytes) ? e = e(l) : (e = new Uint8Array(l), (s.crypto || s.msCrypto).getRandomValues(e)), O(e);
        } catch (i) {
          var t = s.navigator,
              n = t && t.plugins;
          return [+new Date(), s, n, s.screen, O(o)];
        }
      }

      function O(e) {
        return String.fromCharCode.apply(0, e);
      }

      if (y(r.random(), o), e.exports) {
        e.exports = g;

        try {
          a = n(1);
        } catch (x) {}
      } else i = function () {
        return g;
      }.call(t, n, t, e), void 0 === i || (e.exports = i);
    })("undefined" !== typeof self ? self : this, [], Math);
  },
  a49e: function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this,
              n = "";
          t.next = function () {
            var e = t.x ^ t.x >>> 2;
            return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0;
          }, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (0 | e) ? t.x = e : n += e;

          for (var i = 0; i < n.length + 64; i++) t.x ^= 0 | n.charCodeAt(i), i == n.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next();
        }

        function a(e, t) {
          return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t;
        }

        function l(e, t) {
          var n = new r(e),
              i = t && t.state,
              s = function () {
            return (n.next() >>> 0) / 4294967296;
          };

          return s.double = function () {
            do {
              var e = n.next() >>> 11,
                  t = (n.next() >>> 0) / 4294967296,
                  i = (e + t) / (1 << 21);
            } while (0 === i);

            return i;
          }, s.int32 = n.next, s.quick = s, i && ("object" == typeof i && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.xorwow = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  aa22: function (e, t, n) {
    var i = n("c255");
    i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
    var s = n("499e").default;
    s("0cd86214", i, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  ae8f: function (e, t, n) {
    "use strict";

    n("5e10");
  },
  b838: function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this,
              n = "";
          t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function () {
            var e = t.x ^ t.x << 11;
            return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^ e >>> 8;
          }, e === (0 | e) ? t.x = e : n += e;

          for (var i = 0; i < n.length + 64; i++) t.x ^= 0 | n.charCodeAt(i), t.next();
        }

        function a(e, t) {
          return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t;
        }

        function l(e, t) {
          var n = new r(e),
              i = t && t.state,
              s = function () {
            return (n.next() >>> 0) / 4294967296;
          };

          return s.double = function () {
            do {
              var e = n.next() >>> 11,
                  t = (n.next() >>> 0) / 4294967296,
                  i = (e + t) / (1 << 21);
            } while (0 === i);

            return i;
          }, s.int32 = n.next, s.quick = s, i && ("object" == typeof i && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.xor128 = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  c255: function (e, t, n) {
    var i = n("24fb");
    t = i(!1), t.push([e.i, "@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css);"]), t.push([e.i, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css);"]), t.push([e.i, "body,html{height:100%}body{margin:0}.display-text{direction:ltr}.main-container{width:700px;height:100%}#app{height:100%}", ""]), e.exports = t;
  },
  c8ba: function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (i) {
      "object" === typeof window && (n = window);
    }

    e.exports = n;
  },
  cae0: function (e, t, n) {
    (function (e) {
      var i;

      (function (e, s, o) {
        function r(e) {
          var t = this;

          function n(e, t) {
            var n,
                i = [];
            if (t === (0 | t)) i[0] = t;else for (t = "" + t, n = 0; n < t.length; ++n) i[7 & n] = i[7 & n] << 15 ^ t.charCodeAt(n) + i[n + 1 & 7] << 13;

            while (i.length < 8) i.push(0);

            for (n = 0; n < 8 && 0 === i[n]; ++n);

            for (8 == n ? i[7] = -1 : i[n], e.x = i, e.i = 0, n = 256; n > 0; --n) e.next();
          }

          t.next = function () {
            var e,
                n,
                i = t.x,
                s = t.i;
            return e = i[s], e ^= e >>> 7, n = e ^ e << 24, e = i[s + 1 & 7], n ^= e ^ e >>> 10, e = i[s + 3 & 7], n ^= e ^ e >>> 3, e = i[s + 4 & 7], n ^= e ^ e << 7, e = i[s + 7 & 7], e ^= e << 13, n ^= e ^ e << 9, i[s] = n, t.i = s + 1 & 7, n;
          }, n(t, e);
        }

        function a(e, t) {
          return t.x = e.x.slice(), t.i = e.i, t;
        }

        function l(e, t) {
          null == e && (e = +new Date());

          var n = new r(e),
              i = t && t.state,
              s = function () {
            return (n.next() >>> 0) / 4294967296;
          };

          return s.double = function () {
            do {
              var e = n.next() >>> 11,
                  t = (n.next() >>> 0) / 4294967296,
                  i = (e + t) / (1 << 21);
            } while (0 === i);

            return i;
          }, s.int32 = n.next, s.quick = s, i && (i.x && a(i, n), s.state = function () {
            return a(n, {});
          }), s;
        }

        s && s.exports ? s.exports = l : n("07d6") && n("3c35") ? (i = function () {
          return l;
        }.call(t, n, t, s), void 0 === i || (s.exports = i)) : this.xorshift7 = l;
      })(0, e, n("07d6"));
    }).call(this, n("62e4")(e));
  },
  ed51: function (e, t, n) {
    var i = n("4a58");
    i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
    var s = n("499e").default;
    s("850fd70a", i, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  f604: function (e, t, n) {
    "use strict";

    n("aa22");
  }
});
