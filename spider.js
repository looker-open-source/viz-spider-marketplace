!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.spider = e())
    : (t.spider = e());
})(self, () =>
  (() => {
    "use strict";
    function t(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var e,
      n,
      r =
        (1 === (e = t).length &&
          ((n = e),
          (e = function (e, r) {
            return t(n(e), r);
          })),
        {
          left: function (t, n, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var a = (r + i) >>> 1;
              e(t[a], n) < 0 ? (r = a + 1) : (i = a);
            }
            return r;
          },
          right: function (t, n, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var a = (r + i) >>> 1;
              e(t[a], n) > 0 ? (i = a) : (r = a + 1);
            }
            return r;
          },
        });
    const i = r.right;
    var a = Array.prototype,
      o = (a.slice, a.map, Math.sqrt(50)),
      u = Math.sqrt(10),
      l = Math.sqrt(2);
    function s(t, e, n) {
      var r = (e - t) / Math.max(0, n),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
      return i >= 0
        ? (a >= o ? 10 : a >= u ? 5 : a >= l ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (a >= o ? 10 : a >= u ? 5 : a >= l ? 2 : 1);
    }
    function c(t, e) {
      var n,
        r,
        i = t.length,
        a = -1;
      if (null == e) {
        for (; ++a < i; )
          if (null != (n = t[a]) && n >= n)
            for (r = n; ++a < i; ) null != (n = t[a]) && n > r && (r = n);
      } else
        for (; ++a < i; )
          if (null != (n = e(t[a], a, t)) && n >= n)
            for (r = n; ++a < i; )
              null != (n = e(t[a], a, t)) && n > r && (r = n);
      return r;
    }
    function f(t, e, n) {
      (t = +t),
        (e = +e),
        (n =
          (i = arguments.length) < 2 ? ((e = t), (t = 0), 1) : i < 3 ? 1 : +n);
      for (
        var r = -1,
          i = 0 | Math.max(0, Math.ceil((e - t) / n)),
          a = new Array(i);
        ++r < i;

      )
        a[r] = t + r * n;
      return a;
    }
    Array.prototype.slice;
    function h() {}
    function d(t) {
      return null == t
        ? h
        : function () {
            return this.querySelector(t);
          };
    }
    function p() {
      return [];
    }
    function v(t) {
      return null == t
        ? p
        : function () {
            return this.querySelectorAll(t);
          };
    }
    function g(t) {
      return function () {
        return this.matches(t);
      };
    }
    function y(t) {
      return new Array(t.length);
    }
    function m(t, e) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
    }
    m.prototype = {
      constructor: m,
      appendChild: function (t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function (t, e) {
        return this._parent.insertBefore(t, e);
      },
      querySelector: function (t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t);
      },
    };
    function b(t, e, n, r, i, a) {
      for (var o, u = 0, l = e.length, s = a.length; u < s; ++u)
        (o = e[u])
          ? ((o.__data__ = a[u]), (r[u] = o))
          : (n[u] = new m(t, a[u]));
      for (; u < l; ++u) (o = e[u]) && (i[u] = o);
    }
    function _(t, e, n, r, i, a, o) {
      var u,
        l,
        s,
        c = {},
        f = e.length,
        h = a.length,
        d = new Array(f);
      for (u = 0; u < f; ++u)
        (l = e[u]) &&
          ((d[u] = s = "$" + o.call(l, l.__data__, u, e)),
          s in c ? (i[u] = l) : (c[s] = l));
      for (u = 0; u < h; ++u)
        (l = c[(s = "$" + o.call(t, a[u], u, a))])
          ? ((r[u] = l), (l.__data__ = a[u]), (c[s] = null))
          : (n[u] = new m(t, a[u]));
      for (u = 0; u < f; ++u) (l = e[u]) && c[d[u]] === l && (i[u] = l);
    }
    function w(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var x = "http://www.w3.org/1999/xhtml";
    const M = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: x,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
    function A(t) {
      var e = (t += ""),
        n = e.indexOf(":");
      return (
        n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        M.hasOwnProperty(e) ? { space: M[e], local: t } : t
      );
    }
    function k(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function N(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function C(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }
    function S(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }
    function E(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }
    function P(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, n);
      };
    }
    function L(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    }
    function R(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function T(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n);
      };
    }
    function q(t, e, n) {
      return function () {
        var r = e.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, n);
      };
    }
    function z(t, e) {
      return (
        t.style.getPropertyValue(e) ||
        L(t).getComputedStyle(t, null).getPropertyValue(e)
      );
    }
    function I(t) {
      return function () {
        delete this[t];
      };
    }
    function D(t, e) {
      return function () {
        this[t] = e;
      };
    }
    function O(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : (this[t] = n);
      };
    }
    function F(t) {
      return t.trim().split(/^|\s+/);
    }
    function j(t) {
      return t.classList || new U(t);
    }
    function U(t) {
      (this._node = t), (this._names = F(t.getAttribute("class") || ""));
    }
    function B(t, e) {
      for (var n = j(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
    }
    function X(t, e) {
      for (var n = j(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
    }
    function W(t) {
      return function () {
        B(this, t);
      };
    }
    function $(t) {
      return function () {
        X(this, t);
      };
    }
    function H(t, e) {
      return function () {
        (e.apply(this, arguments) ? B : X)(this, t);
      };
    }
    function V() {
      this.textContent = "";
    }
    function Y(t) {
      return function () {
        this.textContent = t;
      };
    }
    function Z(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
      };
    }
    function G() {
      this.innerHTML = "";
    }
    function J(t) {
      return function () {
        this.innerHTML = t;
      };
    }
    function K(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.innerHTML = e ?? "";
      };
    }
    function Q() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function tt() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function et(t) {
      return function () {
        var e = this.ownerDocument,
          n = this.namespaceURI;
        return n === x && e.documentElement.namespaceURI === x
          ? e.createElement(t)
          : e.createElementNS(n, t);
      };
    }
    function nt(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    }
    function rt(t) {
      var e = A(t);
      return (e.local ? nt : et)(e);
    }
    function it() {
      return null;
    }
    function at() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function ot() {
      var t = this.cloneNode(!1),
        e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function ut() {
      var t = this.cloneNode(!0),
        e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    U.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var e = this._names.indexOf(t);
        e >= 0 &&
          (this._names.splice(e, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    var lt = {},
      st = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement ||
        (lt = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function ct(t, e, n) {
      return (
        (t = ft(t, e, n)),
        function (e) {
          var n = e.relatedTarget;
          (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
            t.call(this, e);
        }
      );
    }
    function ft(t, e, n) {
      return function (r) {
        var i = st;
        st = r;
        try {
          t.call(this, this.__data__, e, n);
        } finally {
          st = i;
        }
      };
    }
    function ht(t) {
      return function () {
        var e = this.__on;
        if (e) {
          for (var n, r = 0, i = -1, a = e.length; r < a; ++r)
            (n = e[r]),
              (t.type && n.type !== t.type) || n.name !== t.name
                ? (e[++i] = n)
                : this.removeEventListener(n.type, n.listener, n.capture);
          ++i ? (e.length = i) : delete this.__on;
        }
      };
    }
    function dt(t, e, n) {
      var r = lt.hasOwnProperty(t.type) ? ct : ft;
      return function (i, a, o) {
        var u,
          l = this.__on,
          s = r(e, a, o);
        if (l)
          for (var c = 0, f = l.length; c < f; ++c)
            if ((u = l[c]).type === t.type && u.name === t.name)
              return (
                this.removeEventListener(u.type, u.listener, u.capture),
                this.addEventListener(
                  u.type,
                  (u.listener = s),
                  (u.capture = n)
                ),
                void (u.value = e)
              );
        this.addEventListener(t.type, s, n),
          (u = {
            type: t.type,
            name: t.name,
            value: e,
            listener: s,
            capture: n,
          }),
          l ? l.push(u) : (this.__on = [u]);
      };
    }
    function pt(t, e, n) {
      var r = L(t),
        i = r.CustomEvent;
      "function" == typeof i
        ? (i = new i(e, n))
        : ((i = r.document.createEvent("Event")),
          n
            ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
            : i.initEvent(e, !1, !1)),
        t.dispatchEvent(i);
    }
    function vt(t, e) {
      return function () {
        return pt(this, t, e);
      };
    }
    function gt(t, e) {
      return function () {
        return pt(this, t, e.apply(this, arguments));
      };
    }
    var yt = [null];
    function mt(t, e) {
      (this._groups = t), (this._parents = e);
    }
    function bt() {
      return new mt([[document.documentElement]], yt);
    }
    mt.prototype = bt.prototype = {
      constructor: mt,
      select: function (t) {
        "function" != typeof t && (t = d(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o, u = e[i], l = u.length, s = (r[i] = new Array(l)), c = 0;
            c < l;
            ++c
          )
            (a = u[c]) &&
              (o = t.call(a, a.__data__, c, u)) &&
              ("__data__" in a && (o.__data__ = a.__data__), (s[c] = o));
        return new mt(r, this._parents);
      },
      selectAll: function (t) {
        "function" != typeof t && (t = v(t));
        for (
          var e = this._groups, n = e.length, r = [], i = [], a = 0;
          a < n;
          ++a
        )
          for (var o, u = e[a], l = u.length, s = 0; s < l; ++s)
            (o = u[s]) && (r.push(t.call(o, o.__data__, s, u)), i.push(o));
        return new mt(r, i);
      },
      filter: function (t) {
        "function" != typeof t && (t = g(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], u = o.length, l = (r[i] = []), s = 0;
            s < u;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
        return new mt(r, this._parents);
      },
      data: function (t, e) {
        if (!t)
          return (
            (d = new Array(this.size())),
            (s = -1),
            this.each(function (t) {
              d[++s] = t;
            }),
            d
          );
        var n = e ? _ : b,
          r = this._parents,
          i = this._groups;
        "function" != typeof t &&
          (t = (function (t) {
            return function () {
              return t;
            };
          })(t));
        for (
          var a = i.length,
            o = new Array(a),
            u = new Array(a),
            l = new Array(a),
            s = 0;
          s < a;
          ++s
        ) {
          var c = r[s],
            f = i[s],
            h = f.length,
            d = t.call(c, c && c.__data__, s, r),
            p = d.length,
            v = (u[s] = new Array(p)),
            g = (o[s] = new Array(p));
          n(c, f, v, g, (l[s] = new Array(h)), d, e);
          for (var y, m, w = 0, x = 0; w < p; ++w)
            if ((y = v[w])) {
              for (w >= x && (x = w + 1); !(m = g[x]) && ++x < p; );
              y._next = m || null;
            }
        }
        return ((o = new mt(o, r))._enter = u), (o._exit = l), o;
      },
      enter: function () {
        return new mt(this._enter || this._groups.map(y), this._parents);
      },
      exit: function () {
        return new mt(this._exit || this._groups.map(y), this._parents);
      },
      join: function (t, e, n) {
        var r = this.enter(),
          i = this,
          a = this.exit();
        return (
          (r = "function" == typeof t ? t(r) : r.append(t + "")),
          null != e && (i = e(i)),
          null == n ? a.remove() : n(a),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function (t) {
        for (
          var e = this._groups,
            n = t._groups,
            r = e.length,
            i = n.length,
            a = Math.min(r, i),
            o = new Array(r),
            u = 0;
          u < a;
          ++u
        )
          for (
            var l,
              s = e[u],
              c = n[u],
              f = s.length,
              h = (o[u] = new Array(f)),
              d = 0;
            d < f;
            ++d
          )
            (l = s[d] || c[d]) && (h[d] = l);
        for (; u < r; ++u) o[u] = e[u];
        return new mt(o, this._parents);
      },
      order: function () {
        for (var t = this._groups, e = -1, n = t.length; ++e < n; )
          for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0; )
            (r = i[a]) &&
              (o &&
                4 ^ r.compareDocumentPosition(o) &&
                o.parentNode.insertBefore(r, o),
              (o = r));
        return this;
      },
      sort: function (t) {
        function e(e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n;
        }
        t || (t = w);
        for (
          var n = this._groups, r = n.length, i = new Array(r), a = 0;
          a < r;
          ++a
        ) {
          for (
            var o, u = n[a], l = u.length, s = (i[a] = new Array(l)), c = 0;
            c < l;
            ++c
          )
            (o = u[c]) && (s[c] = o);
          s.sort(e);
        }
        return new mt(i, this._parents).order();
      },
      call: function () {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function () {
        var t = new Array(this.size()),
          e = -1;
        return (
          this.each(function () {
            t[++e] = this;
          }),
          t
        );
      },
      node: function () {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
          for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
            var o = r[i];
            if (o) return o;
          }
        return null;
      },
      size: function () {
        var t = 0;
        return (
          this.each(function () {
            ++t;
          }),
          t
        );
      },
      empty: function () {
        return !this.node();
      },
      each: function (t) {
        for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
          for (var i, a = e[n], o = 0, u = a.length; o < u; ++o)
            (i = a[o]) && t.call(i, i.__data__, o, a);
        return this;
      },
      attr: function (t, e) {
        var n = A(t);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local
            ? r.getAttributeNS(n.space, n.local)
            : r.getAttribute(n);
        }
        return this.each(
          (null == e
            ? n.local
              ? N
              : k
            : "function" == typeof e
            ? n.local
              ? P
              : E
            : n.local
            ? S
            : C)(n, e)
        );
      },
      style: function (t, e, n) {
        return arguments.length > 1
          ? this.each(
              (null == e ? R : "function" == typeof e ? q : T)(t, e, n ?? "")
            )
          : z(this.node(), t);
      },
      property: function (t, e) {
        return arguments.length > 1
          ? this.each((null == e ? I : "function" == typeof e ? O : D)(t, e))
          : this.node()[t];
      },
      classed: function (t, e) {
        var n = F(t + "");
        if (arguments.length < 2) {
          for (var r = j(this.node()), i = -1, a = n.length; ++i < a; )
            if (!r.contains(n[i])) return !1;
          return !0;
        }
        return this.each(("function" == typeof e ? H : e ? W : $)(n, e));
      },
      text: function (t) {
        return arguments.length
          ? this.each(null == t ? V : ("function" == typeof t ? Z : Y)(t))
          : this.node().textContent;
      },
      html: function (t) {
        return arguments.length
          ? this.each(null == t ? G : ("function" == typeof t ? K : J)(t))
          : this.node().innerHTML;
      },
      raise: function () {
        return this.each(Q);
      },
      lower: function () {
        return this.each(tt);
      },
      append: function (t) {
        var e = "function" == typeof t ? t : rt(t);
        return this.select(function () {
          return this.appendChild(e.apply(this, arguments));
        });
      },
      insert: function (t, e) {
        var n = "function" == typeof t ? t : rt(t),
          r = null == e ? it : "function" == typeof e ? e : d(e);
        return this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function () {
        return this.each(at);
      },
      clone: function (t) {
        return this.select(t ? ut : ot);
      },
      datum: function (t) {
        return arguments.length
          ? this.property("__data__", t)
          : this.node().__data__;
      },
      on: function (t, e, n) {
        var r,
          i,
          a = (function (t) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var e = "",
                  n = t.indexOf(".");
                return (
                  n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  { type: t, name: e }
                );
              });
          })(t + ""),
          o = a.length;
        if (!(arguments.length < 2)) {
          for (u = e ? dt : ht, null == n && (n = !1), r = 0; r < o; ++r)
            this.each(u(a[r], e, n));
          return this;
        }
        var u = this.node().__on;
        if (u)
          for (var l, s = 0, c = u.length; s < c; ++s)
            for (r = 0, l = u[s]; r < o; ++r)
              if ((i = a[r]).type === l.type && i.name === l.name)
                return l.value;
      },
      dispatch: function (t, e) {
        return this.each(("function" == typeof e ? gt : vt)(t, e));
      },
    };
    const _t = bt;
    var wt = { value: function () {} };
    function xt() {
      for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new Mt(r);
    }
    function Mt(t) {
      this._ = t;
    }
    function At(t, e) {
      for (var n, r = 0, i = t.length; r < i; ++r)
        if ((n = t[r]).name === e) return n.value;
    }
    function kt(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === e) {
          (t[r] = wt), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != n && t.push({ name: e, value: n }), t;
    }
    Mt.prototype = xt.prototype = {
      constructor: Mt,
      on: function (t, e) {
        var n,
          r,
          i = this._,
          a =
            ((r = i),
            (t + "")
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var e = "",
                  n = t.indexOf(".");
                if (
                  (n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  t && !r.hasOwnProperty(t))
                )
                  throw new Error("unknown type: " + t);
                return { type: t, name: e };
              })),
          o = -1,
          u = a.length;
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e)
            throw new Error("invalid callback: " + e);
          for (; ++o < u; )
            if ((n = (t = a[o]).type)) i[n] = kt(i[n], t.name, e);
            else if (null == e) for (n in i) i[n] = kt(i[n], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((n = (t = a[o]).type) && (n = At(i[n], t.name))) return n;
      },
      copy: function () {
        var t = {},
          e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new Mt(t);
      },
      call: function (t, e) {
        if ((n = arguments.length - 2) > 0)
          for (var n, r, i = new Array(n), a = 0; a < n; ++a)
            i[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (a = 0, n = (r = this._[t]).length; a < n; ++a)
          r[a].value.apply(e, i);
      },
      apply: function (t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
          r[i].value.apply(e, n);
      },
    };
    const Nt = xt;
    var Ct,
      St,
      Et = 0,
      Pt = 0,
      Lt = 0,
      Rt = 0,
      Tt = 0,
      qt = 0,
      zt =
        "object" == typeof performance && performance.now ? performance : Date,
      It =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
    function Dt() {
      return Tt || (It(Ot), (Tt = zt.now() + qt));
    }
    function Ot() {
      Tt = 0;
    }
    function Ft() {
      this._call = this._time = this._next = null;
    }
    function jt(t, e, n) {
      var r = new Ft();
      return r.restart(t, e, n), r;
    }
    function Ut() {
      (Tt = (Rt = zt.now()) + qt), (Et = Pt = 0);
      try {
        !(function () {
          Dt(), ++Et;
          for (var t, e = Ct; e; )
            (t = Tt - e._time) >= 0 && e._call.call(null, t), (e = e._next);
          --Et;
        })();
      } finally {
        (Et = 0),
          (function () {
            var t,
              e,
              n = Ct,
              r = 1 / 0;
            for (; n; )
              n._call
                ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                : ((e = n._next),
                  (n._next = null),
                  (n = t ? (t._next = e) : (Ct = e)));
            (St = t), Xt(r);
          })(),
          (Tt = 0);
      }
    }
    function Bt() {
      var t = zt.now(),
        e = t - Rt;
      e > 1e3 && ((qt -= e), (Rt = t));
    }
    function Xt(t) {
      Et ||
        (Pt && (Pt = clearTimeout(Pt)),
        t - Tt > 24
          ? (t < 1 / 0 && (Pt = setTimeout(Ut, t - zt.now() - qt)),
            Lt && (Lt = clearInterval(Lt)))
          : (Lt || ((Rt = zt.now()), (Lt = setInterval(Bt, 1e3))),
            (Et = 1),
            It(Ut)));
    }
    function Wt(t, e, n) {
      var r = new Ft();
      return (
        (e = null == e ? 0 : +e),
        r.restart(
          function (n) {
            r.stop(), t(n + e);
          },
          e,
          n
        ),
        r
      );
    }
    Ft.prototype = jt.prototype = {
      constructor: Ft,
      restart: function (t, e, n) {
        if ("function" != typeof t)
          throw new TypeError("callback is not a function");
        (n = (null == n ? Dt() : +n) + (null == e ? 0 : +e)),
          this._next ||
            St === this ||
            (St ? (St._next = this) : (Ct = this), (St = this)),
          (this._call = t),
          (this._time = n),
          Xt();
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), Xt());
      },
    };
    var $t = Nt("start", "end", "cancel", "interrupt"),
      Ht = [];
    function Vt(t, e, n, r, i, a) {
      var o = t.__transition;
      if (o) {
        if (n in o) return;
      } else t.__transition = {};
      !(function (t, e, n) {
        var r,
          i = t.__transition;
        function a(t) {
          (n.state = 1),
            n.timer.restart(o, n.delay, n.time),
            n.delay <= t && o(t - n.delay);
        }
        function o(a) {
          var s, c, f, h;
          if (1 !== n.state) return l();
          for (s in i)
            if ((h = i[s]).name === n.name) {
              if (3 === h.state) return Wt(o);
              4 === h.state
                ? ((h.state = 6),
                  h.timer.stop(),
                  h.on.call("interrupt", t, t.__data__, h.index, h.group),
                  delete i[s])
                : +s < e &&
                  ((h.state = 6),
                  h.timer.stop(),
                  h.on.call("cancel", t, t.__data__, h.index, h.group),
                  delete i[s]);
            }
          if (
            (Wt(function () {
              3 === n.state &&
                ((n.state = 4), n.timer.restart(u, n.delay, n.time), u(a));
            }),
            (n.state = 2),
            n.on.call("start", t, t.__data__, n.index, n.group),
            2 === n.state)
          ) {
            for (
              n.state = 3, r = new Array((f = n.tween.length)), s = 0, c = -1;
              s < f;
              ++s
            )
              (h = n.tween[s].value.call(t, t.__data__, n.index, n.group)) &&
                (r[++c] = h);
            r.length = c + 1;
          }
        }
        function u(e) {
          for (
            var i =
                e < n.duration
                  ? n.ease.call(null, e / n.duration)
                  : (n.timer.restart(l), (n.state = 5), 1),
              a = -1,
              o = r.length;
            ++a < o;

          )
            r[a].call(t, i);
          5 === n.state &&
            (n.on.call("end", t, t.__data__, n.index, n.group), l());
        }
        function l() {
          for (var r in ((n.state = 6), n.timer.stop(), delete i[e], i)) return;
          delete t.__transition;
        }
        (i[e] = n), (n.timer = jt(a, 0, n.time));
      })(t, n, {
        name: e,
        index: r,
        group: i,
        on: $t,
        tween: Ht,
        time: a.time,
        delay: a.delay,
        duration: a.duration,
        ease: a.ease,
        timer: null,
        state: 0,
      });
    }
    function Yt(t, e) {
      var n = Gt(t, e);
      if (n.state > 0) throw new Error("too late; already scheduled");
      return n;
    }
    function Zt(t, e) {
      var n = Gt(t, e);
      if (n.state > 3) throw new Error("too late; already running");
      return n;
    }
    function Gt(t, e) {
      var n = t.__transition;
      if (!n || !(n = n[e])) throw new Error("transition not found");
      return n;
    }
    function Jt(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return t * (1 - n) + e * n;
        }
      );
    }
    var Kt,
      Qt,
      te,
      ee,
      ne = 180 / Math.PI,
      re = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      };
    function ie(t, e, n, r, i, a) {
      var o, u, l;
      return (
        (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
        (l = t * n + e * r) && ((n -= t * l), (r -= e * l)),
        (u = Math.sqrt(n * n + r * r)) && ((n /= u), (r /= u), (l /= u)),
        t * r < e * n && ((t = -t), (e = -e), (l = -l), (o = -o)),
        {
          translateX: i,
          translateY: a,
          rotate: Math.atan2(e, t) * ne,
          skewX: Math.atan(l) * ne,
          scaleX: o,
          scaleY: u,
        }
      );
    }
    function ae(t, e, n, r) {
      function i(t) {
        return t.length ? t.pop() + " " : "";
      }
      return function (a, o) {
        var u = [],
          l = [];
        return (
          (a = t(a)),
          (o = t(o)),
          (function (t, r, i, a, o, u) {
            if (t !== i || r !== a) {
              var l = o.push("translate(", null, e, null, n);
              u.push({ i: l - 4, x: Jt(t, i) }, { i: l - 2, x: Jt(r, a) });
            } else (i || a) && o.push("translate(" + i + e + a + n);
          })(a.translateX, a.translateY, o.translateX, o.translateY, u, l),
          (function (t, e, n, a) {
            t !== e
              ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                a.push({
                  i: n.push(i(n) + "rotate(", null, r) - 2,
                  x: Jt(t, e),
                }))
              : e && n.push(i(n) + "rotate(" + e + r);
          })(a.rotate, o.rotate, u, l),
          (function (t, e, n, a) {
            t !== e
              ? a.push({ i: n.push(i(n) + "skewX(", null, r) - 2, x: Jt(t, e) })
              : e && n.push(i(n) + "skewX(" + e + r);
          })(a.skewX, o.skewX, u, l),
          (function (t, e, n, r, a, o) {
            if (t !== n || e !== r) {
              var u = a.push(i(a) + "scale(", null, ",", null, ")");
              o.push({ i: u - 4, x: Jt(t, n) }, { i: u - 2, x: Jt(e, r) });
            } else
              (1 === n && 1 === r) ||
                a.push(i(a) + "scale(" + n + "," + r + ")");
          })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, u, l),
          (a = o = null),
          function (t) {
            for (var e, n = -1, r = l.length; ++n < r; )
              u[(e = l[n]).i] = e.x(t);
            return u.join("");
          }
        );
      };
    }
    var oe = ae(
        function (t) {
          return "none" === t
            ? re
            : (Kt ||
                ((Kt = document.createElement("DIV")),
                (Qt = document.documentElement),
                (te = document.defaultView)),
              (Kt.style.transform = t),
              (t = te
                .getComputedStyle(Qt.appendChild(Kt), null)
                .getPropertyValue("transform")),
              Qt.removeChild(Kt),
              ie(
                +(t = t.slice(7, -1).split(","))[0],
                +t[1],
                +t[2],
                +t[3],
                +t[4],
                +t[5]
              ));
        },
        "px, ",
        "px)",
        "deg)"
      ),
      ue = ae(
        function (t) {
          return null == t
            ? re
            : (ee ||
                (ee = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )),
              ee.setAttribute("transform", t),
              (t = ee.transform.baseVal.consolidate())
                ? ie((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                : re);
        },
        ", ",
        ")",
        ")"
      );
    function le(t, e) {
      var n, r;
      return function () {
        var i = Zt(this, t),
          a = i.tween;
        if (a !== n)
          for (var o = 0, u = (r = n = a).length; o < u; ++o)
            if (r[o].name === e) {
              (r = r.slice()).splice(o, 1);
              break;
            }
        i.tween = r;
      };
    }
    function se(t, e, n) {
      var r, i;
      if ("function" != typeof n) throw new Error();
      return function () {
        var a = Zt(this, t),
          o = a.tween;
        if (o !== r) {
          i = (r = o).slice();
          for (var u = { name: e, value: n }, l = 0, s = i.length; l < s; ++l)
            if (i[l].name === e) {
              i[l] = u;
              break;
            }
          l === s && i.push(u);
        }
        a.tween = i;
      };
    }
    function ce(t, e, n) {
      var r = t._id;
      return (
        t.each(function () {
          var t = Zt(this, r);
          (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }),
        function (t) {
          return Gt(t, r).value[e];
        }
      );
    }
    function fe(t, e, n) {
      (t.prototype = e.prototype = n), (n.constructor = t);
    }
    function he(t, e) {
      var n = Object.create(t.prototype);
      for (var r in e) n[r] = e[r];
      return n;
    }
    function de() {}
    var pe = 0.7,
      ve = 1 / pe,
      ge = "\\s*([+-]?\\d+)\\s*",
      ye = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      me = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      be = /^#([0-9a-f]{3,8})$/,
      _e = new RegExp("^rgb\\(" + [ge, ge, ge] + "\\)$"),
      we = new RegExp("^rgb\\(" + [me, me, me] + "\\)$"),
      xe = new RegExp("^rgba\\(" + [ge, ge, ge, ye] + "\\)$"),
      Me = new RegExp("^rgba\\(" + [me, me, me, ye] + "\\)$"),
      Ae = new RegExp("^hsl\\(" + [ye, me, me] + "\\)$"),
      ke = new RegExp("^hsla\\(" + [ye, me, me, ye] + "\\)$"),
      Ne = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function Ce() {
      return this.rgb().formatHex();
    }
    function Se() {
      return this.rgb().formatRgb();
    }
    function Ee(t) {
      var e, n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = be.exec(t))
          ? ((n = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === n
              ? Pe(e)
              : 3 === n
              ? new qe(
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  ((15 & e) << 4) | (15 & e),
                  1
                )
              : 8 === n
              ? Le(
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  (255 & e) / 255
                )
              : 4 === n
              ? Le(
                  ((e >> 12) & 15) | ((e >> 8) & 240),
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  (((15 & e) << 4) | (15 & e)) / 255
                )
              : null)
          : (e = _e.exec(t))
          ? new qe(e[1], e[2], e[3], 1)
          : (e = we.exec(t))
          ? new qe(
              (255 * e[1]) / 100,
              (255 * e[2]) / 100,
              (255 * e[3]) / 100,
              1
            )
          : (e = xe.exec(t))
          ? Le(e[1], e[2], e[3], e[4])
          : (e = Me.exec(t))
          ? Le((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
          : (e = Ae.exec(t))
          ? Oe(e[1], e[2] / 100, e[3] / 100, 1)
          : (e = ke.exec(t))
          ? Oe(e[1], e[2] / 100, e[3] / 100, e[4])
          : Ne.hasOwnProperty(t)
          ? Pe(Ne[t])
          : "transparent" === t
          ? new qe(NaN, NaN, NaN, 0)
          : null
      );
    }
    function Pe(t) {
      return new qe((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function Le(t, e, n, r) {
      return r <= 0 && (t = e = n = NaN), new qe(t, e, n, r);
    }
    function Re(t) {
      return (
        t instanceof de || (t = Ee(t)),
        t ? new qe((t = t.rgb()).r, t.g, t.b, t.opacity) : new qe()
      );
    }
    function Te(t, e, n, r) {
      return 1 === arguments.length ? Re(t) : new qe(t, e, n, r ?? 1);
    }
    function qe(t, e, n, r) {
      (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
    }
    function ze() {
      return "#" + De(this.r) + De(this.g) + De(this.b);
    }
    function Ie() {
      var t = this.opacity;
      return (
        (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
          ? "rgb("
          : "rgba(") +
        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
        (1 === t ? ")" : ", " + t + ")")
      );
    }
    function De(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
        t.toString(16)
      );
    }
    function Oe(t, e, n, r) {
      return (
        r <= 0
          ? (t = e = n = NaN)
          : n <= 0 || n >= 1
          ? (t = e = NaN)
          : e <= 0 && (t = NaN),
        new je(t, e, n, r)
      );
    }
    function Fe(t) {
      if (t instanceof je) return new je(t.h, t.s, t.l, t.opacity);
      if ((t instanceof de || (t = Ee(t)), !t)) return new je();
      if (t instanceof je) return t;
      var e = (t = t.rgb()).r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = Math.min(e, n, r),
        a = Math.max(e, n, r),
        o = NaN,
        u = a - i,
        l = (a + i) / 2;
      return (
        u
          ? ((o =
              e === a
                ? (n - r) / u + 6 * (n < r)
                : n === a
                ? (r - e) / u + 2
                : (e - n) / u + 4),
            (u /= l < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (u = l > 0 && l < 1 ? 0 : o),
        new je(o, u, l, t.opacity)
      );
    }
    function je(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function Ue(t, e, n) {
      return (
        255 *
        (t < 60
          ? e + ((n - e) * t) / 60
          : t < 180
          ? n
          : t < 240
          ? e + ((n - e) * (240 - t)) / 60
          : e)
      );
    }
    function Be(t, e, n, r, i) {
      var a = t * t,
        o = a * t;
      return (
        ((1 - 3 * t + 3 * a - o) * e +
          (4 - 6 * a + 3 * o) * n +
          (1 + 3 * t + 3 * a - 3 * o) * r +
          o * i) /
        6
      );
    }
    function Xe(t) {
      return function () {
        return t;
      };
    }
    function We(t, e) {
      return function (n) {
        return t + n * e;
      };
    }
    function $e(t) {
      return 1 === (t = +t)
        ? He
        : function (e, n) {
            return n - e
              ? (function (t, e, n) {
                  return (
                    (t = Math.pow(t, n)),
                    (e = Math.pow(e, n) - t),
                    (n = 1 / n),
                    function (r) {
                      return Math.pow(t + r * e, n);
                    }
                  );
                })(e, n, t)
              : Xe(isNaN(e) ? n : e);
          };
    }
    function He(t, e) {
      var n = e - t;
      return n ? We(t, n) : Xe(isNaN(t) ? e : t);
    }
    fe(de, Ee, {
      copy: function (t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable: function () {
        return this.rgb().displayable();
      },
      hex: Ce,
      formatHex: Ce,
      formatHsl: function () {
        return Fe(this).formatHsl();
      },
      formatRgb: Se,
      toString: Se,
    }),
      fe(
        qe,
        Te,
        he(de, {
          brighter: function (t) {
            return (
              (t = null == t ? ve : Math.pow(ve, t)),
              new qe(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? pe : Math.pow(pe, t)),
              new qe(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function () {
            return this;
          },
          displayable: function () {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: ze,
          formatHex: ze,
          formatRgb: Ie,
          toString: Ie,
        })
      ),
      fe(
        je,
        function (t, e, n, r) {
          return 1 === arguments.length ? Fe(t) : new je(t, e, n, r ?? 1);
        },
        he(de, {
          brighter: function (t) {
            return (
              (t = null == t ? ve : Math.pow(ve, t)),
              new je(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? pe : Math.pow(pe, t)),
              new je(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * e,
              i = 2 * n - r;
            return new qe(
              Ue(t >= 240 ? t - 240 : t + 120, i, r),
              Ue(t, i, r),
              Ue(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          displayable: function () {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl: function () {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? "hsl("
                : "hsla(") +
              (this.h || 0) +
              ", " +
              100 * (this.s || 0) +
              "%, " +
              100 * (this.l || 0) +
              "%" +
              (1 === t ? ")" : ", " + t + ")")
            );
          },
        })
      );
    const Ve = (function t(e) {
      var n = $e(e);
      function r(t, e) {
        var r = n((t = Te(t)).r, (e = Te(e)).r),
          i = n(t.g, e.g),
          a = n(t.b, e.b),
          o = He(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)), (t.g = i(e)), (t.b = a(e)), (t.opacity = o(e)), t + ""
          );
        };
      }
      return (r.gamma = t), r;
    })(1);
    function Ye(t) {
      return function (e) {
        var n,
          r,
          i = e.length,
          a = new Array(i),
          o = new Array(i),
          u = new Array(i);
        for (n = 0; n < i; ++n)
          (r = Te(e[n])),
            (a[n] = r.r || 0),
            (o[n] = r.g || 0),
            (u[n] = r.b || 0);
        return (
          (a = t(a)),
          (o = t(o)),
          (u = t(u)),
          (r.opacity = 1),
          function (t) {
            return (r.r = a(t)), (r.g = o(t)), (r.b = u(t)), r + "";
          }
        );
      };
    }
    Ye(function (t) {
      var e = t.length - 1;
      return function (n) {
        var r =
            n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
          i = t[r],
          a = t[r + 1],
          o = r > 0 ? t[r - 1] : 2 * i - a,
          u = r < e - 1 ? t[r + 2] : 2 * a - i;
        return Be((n - r / e) * e, o, i, a, u);
      };
    }),
      Ye(function (t) {
        var e = t.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
            i = t[(r + e - 1) % e],
            a = t[r % e],
            o = t[(r + 1) % e],
            u = t[(r + 2) % e];
          return Be((n - r / e) * e, i, a, o, u);
        };
      });
    var Ze = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Ge = new RegExp(Ze.source, "g");
    function Je(t, e) {
      var n,
        r,
        i,
        a = (Ze.lastIndex = Ge.lastIndex = 0),
        o = -1,
        u = [],
        l = [];
      for (t += "", e += ""; (n = Ze.exec(t)) && (r = Ge.exec(e)); )
        (i = r.index) > a &&
          ((i = e.slice(a, i)), u[o] ? (u[o] += i) : (u[++o] = i)),
          (n = n[0]) === (r = r[0])
            ? u[o]
              ? (u[o] += r)
              : (u[++o] = r)
            : ((u[++o] = null), l.push({ i: o, x: Jt(n, r) })),
          (a = Ge.lastIndex);
      return (
        a < e.length && ((i = e.slice(a)), u[o] ? (u[o] += i) : (u[++o] = i)),
        u.length < 2
          ? l[0]
            ? (function (t) {
                return function (e) {
                  return t(e) + "";
                };
              })(l[0].x)
            : (function (t) {
                return function () {
                  return t;
                };
              })(e)
          : ((e = l.length),
            function (t) {
              for (var n, r = 0; r < e; ++r) u[(n = l[r]).i] = n.x(t);
              return u.join("");
            })
      );
    }
    function Ke(t, e) {
      var n;
      return (
        "number" == typeof e
          ? Jt
          : e instanceof Ee
          ? Ve
          : (n = Ee(e))
          ? ((e = n), Ve)
          : Je
      )(t, e);
    }
    function Qe(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function tn(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function en(t, e, n) {
      var r,
        i,
        a = n + "";
      return function () {
        var o = this.getAttribute(t);
        return o === a ? null : o === r ? i : (i = e((r = o), n));
      };
    }
    function nn(t, e, n) {
      var r,
        i,
        a = n + "";
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === a ? null : o === r ? i : (i = e((r = o), n));
      };
    }
    function rn(t, e, n) {
      var r, i, a;
      return function () {
        var o,
          u,
          l = n(this);
        if (null != l)
          return (o = this.getAttribute(t)) === (u = l + "")
            ? null
            : o === r && u === i
            ? a
            : ((i = u), (a = e((r = o), l)));
        this.removeAttribute(t);
      };
    }
    function an(t, e, n) {
      var r, i, a;
      return function () {
        var o,
          u,
          l = n(this);
        if (null != l)
          return (o = this.getAttributeNS(t.space, t.local)) === (u = l + "")
            ? null
            : o === r && u === i
            ? a
            : ((i = u), (a = e((r = o), l)));
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function on(t, e) {
      var n, r;
      function i() {
        var i = e.apply(this, arguments);
        return (
          i !== r &&
            (n =
              (r = i) &&
              (function (t, e) {
                return function (n) {
                  this.setAttributeNS(t.space, t.local, e.call(this, n));
                };
              })(t, i)),
          n
        );
      }
      return (i._value = e), i;
    }
    function un(t, e) {
      var n, r;
      function i() {
        var i = e.apply(this, arguments);
        return (
          i !== r &&
            (n =
              (r = i) &&
              (function (t, e) {
                return function (n) {
                  this.setAttribute(t, e.call(this, n));
                };
              })(t, i)),
          n
        );
      }
      return (i._value = e), i;
    }
    function ln(t, e) {
      return function () {
        Yt(this, t).delay = +e.apply(this, arguments);
      };
    }
    function sn(t, e) {
      return (
        (e = +e),
        function () {
          Yt(this, t).delay = e;
        }
      );
    }
    function cn(t, e) {
      return function () {
        Zt(this, t).duration = +e.apply(this, arguments);
      };
    }
    function fn(t, e) {
      return (
        (e = +e),
        function () {
          Zt(this, t).duration = e;
        }
      );
    }
    var hn = _t.prototype.constructor;
    function dn(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    var pn = 0;
    function vn(t, e, n, r) {
      (this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
    }
    function gn() {
      return ++pn;
    }
    var yn = _t.prototype;
    vn.prototype = function (t) {
      return _t().transition(t);
    }.prototype = {
      constructor: vn,
      select: function (t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = d(t));
        for (
          var r = this._groups, i = r.length, a = new Array(i), o = 0;
          o < i;
          ++o
        )
          for (
            var u, l, s = r[o], c = s.length, f = (a[o] = new Array(c)), h = 0;
            h < c;
            ++h
          )
            (u = s[h]) &&
              (l = t.call(u, u.__data__, h, s)) &&
              ("__data__" in u && (l.__data__ = u.__data__),
              (f[h] = l),
              Vt(f[h], e, n, h, f, Gt(u, n)));
        return new vn(a, this._parents, e, n);
      },
      selectAll: function (t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = v(t));
        for (
          var r = this._groups, i = r.length, a = [], o = [], u = 0;
          u < i;
          ++u
        )
          for (var l, s = r[u], c = s.length, f = 0; f < c; ++f)
            if ((l = s[f])) {
              for (
                var h,
                  d = t.call(l, l.__data__, f, s),
                  p = Gt(l, n),
                  g = 0,
                  y = d.length;
                g < y;
                ++g
              )
                (h = d[g]) && Vt(h, e, n, g, d, p);
              a.push(d), o.push(l);
            }
        return new vn(a, o, e, n);
      },
      filter: function (t) {
        "function" != typeof t && (t = g(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], u = o.length, l = (r[i] = []), s = 0;
            s < u;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
        return new vn(r, this._parents, this._name, this._id);
      },
      merge: function (t) {
        if (t._id !== this._id) throw new Error();
        for (
          var e = this._groups,
            n = t._groups,
            r = e.length,
            i = n.length,
            a = Math.min(r, i),
            o = new Array(r),
            u = 0;
          u < a;
          ++u
        )
          for (
            var l,
              s = e[u],
              c = n[u],
              f = s.length,
              h = (o[u] = new Array(f)),
              d = 0;
            d < f;
            ++d
          )
            (l = s[d] || c[d]) && (h[d] = l);
        for (; u < r; ++u) o[u] = e[u];
        return new vn(o, this._parents, this._name, this._id);
      },
      selection: function () {
        return new hn(this._groups, this._parents);
      },
      transition: function () {
        for (
          var t = this._name,
            e = this._id,
            n = gn(),
            r = this._groups,
            i = r.length,
            a = 0;
          a < i;
          ++a
        )
          for (var o, u = r[a], l = u.length, s = 0; s < l; ++s)
            if ((o = u[s])) {
              var c = Gt(o, e);
              Vt(o, t, n, s, u, {
                time: c.time + c.delay + c.duration,
                delay: 0,
                duration: c.duration,
                ease: c.ease,
              });
            }
        return new vn(r, this._parents, t, n);
      },
      call: yn.call,
      nodes: yn.nodes,
      node: yn.node,
      size: yn.size,
      empty: yn.empty,
      each: yn.each,
      on: function (t, e) {
        var n = this._id;
        return arguments.length < 2
          ? Gt(this.node(), n).on.on(t)
          : this.each(
              (function (t, e, n) {
                var r,
                  i,
                  a = (function (t) {
                    return (t + "")
                      .trim()
                      .split(/^|\s+/)
                      .every(function (t) {
                        var e = t.indexOf(".");
                        return (
                          e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                        );
                      });
                  })(e)
                    ? Yt
                    : Zt;
                return function () {
                  var o = a(this, t),
                    u = o.on;
                  u !== r && (i = (r = u).copy()).on(e, n), (o.on = i);
                };
              })(n, t, e)
            );
      },
      attr: function (t, e) {
        var n = A(t),
          r = "transform" === n ? ue : Ke;
        return this.attrTween(
          t,
          "function" == typeof e
            ? (n.local ? an : rn)(n, r, ce(this, "attr." + t, e))
            : null == e
            ? (n.local ? tn : Qe)(n)
            : (n.local ? nn : en)(n, r, e)
        );
      },
      attrTween: function (t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error();
        var r = A(t);
        return this.tween(n, (r.local ? on : un)(r, e));
      },
      style: function (t, e, n) {
        var r = "transform" == (t += "") ? oe : Ke;
        return null == e
          ? this.styleTween(
              t,
              (function (t, e) {
                var n, r, i;
                return function () {
                  var a = z(this, t),
                    o = (this.style.removeProperty(t), z(this, t));
                  return a === o
                    ? null
                    : a === n && o === r
                    ? i
                    : (i = e((n = a), (r = o)));
                };
              })(t, r)
            ).on("end.style." + t, dn(t))
          : "function" == typeof e
          ? this.styleTween(
              t,
              (function (t, e, n) {
                var r, i, a;
                return function () {
                  var o = z(this, t),
                    u = n(this),
                    l = u + "";
                  return (
                    null == u &&
                      (this.style.removeProperty(t), (l = u = z(this, t))),
                    o === l
                      ? null
                      : o === r && l === i
                      ? a
                      : ((i = l), (a = e((r = o), u)))
                  );
                };
              })(t, r, ce(this, "style." + t, e))
            ).each(
              (function (t, e) {
                var n,
                  r,
                  i,
                  a,
                  o = "style." + e,
                  u = "end." + o;
                return function () {
                  var l = Zt(this, t),
                    s = l.on,
                    c = null == l.value[o] ? a || (a = dn(e)) : void 0;
                  (s === n && i === c) || (r = (n = s).copy()).on(u, (i = c)),
                    (l.on = r);
                };
              })(this._id, t)
            )
          : this.styleTween(
              t,
              (function (t, e, n) {
                var r,
                  i,
                  a = n + "";
                return function () {
                  var o = z(this, t);
                  return o === a ? null : o === r ? i : (i = e((r = o), n));
                };
              })(t, r, e),
              n
            ).on("end.style." + t, null);
      },
      styleTween: function (t, e, n) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == e) return this.tween(r, null);
        if ("function" != typeof e) throw new Error();
        return this.tween(
          r,
          (function (t, e, n) {
            var r, i;
            function a() {
              var a = e.apply(this, arguments);
              return (
                a !== i &&
                  (r =
                    (i = a) &&
                    (function (t, e, n) {
                      return function (r) {
                        this.style.setProperty(t, e.call(this, r), n);
                      };
                    })(t, a, n)),
                r
              );
            }
            return (a._value = e), a;
          })(t, e, n ?? "")
        );
      },
      text: function (t) {
        return this.tween(
          "text",
          "function" == typeof t
            ? (function (t) {
                return function () {
                  var e = t(this);
                  this.textContent = e ?? "";
                };
              })(ce(this, "text", t))
            : (function (t) {
                return function () {
                  this.textContent = t;
                };
              })(null == t ? "" : t + "")
        );
      },
      textTween: function (t) {
        var e = "text";
        if (arguments.length < 1) return (e = this.tween(e)) && e._value;
        if (null == t) return this.tween(e, null);
        if ("function" != typeof t) throw new Error();
        return this.tween(
          e,
          (function (t) {
            var e, n;
            function r() {
              var r = t.apply(this, arguments);
              return (
                r !== n &&
                  (e =
                    (n = r) &&
                    (function (t) {
                      return function (e) {
                        this.textContent = t.call(this, e);
                      };
                    })(r)),
                e
              );
            }
            return (r._value = t), r;
          })(t)
        );
      },
      remove: function () {
        return this.on(
          "end.remove",
          (function (t) {
            return function () {
              var e = this.parentNode;
              for (var n in this.__transition) if (+n !== t) return;
              e && e.removeChild(this);
            };
          })(this._id)
        );
      },
      tween: function (t, e) {
        var n = this._id;
        if (((t += ""), arguments.length < 2)) {
          for (
            var r, i = Gt(this.node(), n).tween, a = 0, o = i.length;
            a < o;
            ++a
          )
            if ((r = i[a]).name === t) return r.value;
          return null;
        }
        return this.each((null == e ? le : se)(n, t, e));
      },
      delay: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" == typeof t ? ln : sn)(e, t))
          : Gt(this.node(), e).delay;
      },
      duration: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" == typeof t ? cn : fn)(e, t))
          : Gt(this.node(), e).duration;
      },
      ease: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(
              (function (t, e) {
                if ("function" != typeof e) throw new Error();
                return function () {
                  Zt(this, t).ease = e;
                };
              })(e, t)
            )
          : Gt(this.node(), e).ease;
      },
      end: function () {
        var t,
          e,
          n = this,
          r = n._id,
          i = n.size();
        return new Promise(function (a, o) {
          var u = { value: o },
            l = {
              value: function () {
                0 === --i && a();
              },
            };
          n.each(function () {
            var n = Zt(this, r),
              i = n.on;
            i !== t &&
              ((e = (t = i).copy())._.cancel.push(u),
              e._.interrupt.push(u),
              e._.end.push(l)),
              (n.on = e);
          });
        });
      },
    };
    var mn = {
      time: null,
      delay: 0,
      duration: 250,
      ease: function (t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      },
    };
    function bn(t, e) {
      for (var n; !(n = t.__transition) || !(n = n[e]); )
        if (!(t = t.parentNode)) return (mn.time = Dt()), mn;
      return n;
    }
    (_t.prototype.interrupt = function (t) {
      return this.each(function () {
        !(function (t, e) {
          var n,
            r,
            i,
            a = t.__transition,
            o = !0;
          if (a) {
            for (i in ((e = null == e ? null : e + ""), a))
              (n = a[i]).name === e
                ? ((r = n.state > 2 && n.state < 5),
                  (n.state = 6),
                  n.timer.stop(),
                  n.on.call(
                    r ? "interrupt" : "cancel",
                    t,
                    t.__data__,
                    n.index,
                    n.group
                  ),
                  delete a[i])
                : (o = !1);
            o && delete t.__transition;
          }
        })(this, t);
      });
    }),
      (_t.prototype.transition = function (t) {
        var e, n;
        t instanceof vn
          ? ((e = t._id), (t = t._name))
          : ((e = gn()),
            ((n = mn).time = Dt()),
            (t = null == t ? null : t + ""));
        for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
          for (var o, u = r[a], l = u.length, s = 0; s < l; ++s)
            (o = u[s]) && Vt(o, t, e, s, u, n || bn(o, e));
        return new vn(r, this._parents, t, e);
      });
    function _n(t) {
      return [+t[0], +t[1]];
    }
    function wn(t) {
      return [_n(t[0]), _n(t[1])];
    }
    ["w", "e"].map(xn),
      ["n", "s"].map(xn),
      ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(xn);
    function xn(t) {
      return { type: t };
    }
    Math.cos, Math.sin, Math.PI, Math.max;
    Array.prototype.slice;
    var Mn = "$";
    function An() {}
    function kn(t, e) {
      var n = new An();
      if (t instanceof An)
        t.each(function (t, e) {
          n.set(e, t);
        });
      else if (Array.isArray(t)) {
        var r,
          i = -1,
          a = t.length;
        if (null == e) for (; ++i < a; ) n.set(i, t[i]);
        else for (; ++i < a; ) n.set(e((r = t[i]), i, t), r);
      } else if (t) for (var o in t) n.set(o, t[o]);
      return n;
    }
    An.prototype = kn.prototype = {
      constructor: An,
      has: function (t) {
        return Mn + t in this;
      },
      get: function (t) {
        return this[Mn + t];
      },
      set: function (t, e) {
        return (this[Mn + t] = e), this;
      },
      remove: function (t) {
        var e = Mn + t;
        return e in this && delete this[e];
      },
      clear: function () {
        for (var t in this) t[0] === Mn && delete this[t];
      },
      keys: function () {
        var t = [];
        for (var e in this) e[0] === Mn && t.push(e.slice(1));
        return t;
      },
      values: function () {
        var t = [];
        for (var e in this) e[0] === Mn && t.push(this[e]);
        return t;
      },
      entries: function () {
        var t = [];
        for (var e in this)
          e[0] === Mn && t.push({ key: e.slice(1), value: this[e] });
        return t;
      },
      size: function () {
        var t = 0;
        for (var e in this) e[0] === Mn && ++t;
        return t;
      },
      empty: function () {
        for (var t in this) if (t[0] === Mn) return !1;
        return !0;
      },
      each: function (t) {
        for (var e in this) e[0] === Mn && t(this[e], e.slice(1), this);
      },
    };
    const Nn = kn;
    function Cn() {}
    var Sn = Nn.prototype;
    function En(t, e) {
      var n = new Cn();
      if (t instanceof Cn)
        t.each(function (t) {
          n.add(t);
        });
      else if (t) {
        var r = -1,
          i = t.length;
        if (null == e) for (; ++r < i; ) n.add(t[r]);
        else for (; ++r < i; ) n.add(e(t[r], r, t));
      }
      return n;
    }
    Cn.prototype = En.prototype = {
      constructor: Cn,
      has: Sn.has,
      add: function (t) {
        return (this[Mn + (t += "")] = t), this;
      },
      remove: Sn.remove,
      clear: Sn.clear,
      values: Sn.keys,
      size: Sn.size,
      empty: Sn.empty,
      each: Sn.each,
    };
    Array.prototype.slice;
    Math.PI, Math.sqrt(5);
    function Pn(t, e) {
      if (
        (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
          "e"
        )) < 0
      )
        return null;
      var n,
        r = t.slice(0, n);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
    }
    function Ln(t) {
      return (t = Pn(Math.abs(t))) ? t[1] : NaN;
    }
    var Rn,
      Tn =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function qn(t) {
      if (!(e = Tn.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new zn({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10],
      });
    }
    function zn(t) {
      (this.fill = void 0 === t.fill ? " " : t.fill + ""),
        (this.align = void 0 === t.align ? ">" : t.align + ""),
        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
        (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? "" : t.type + "");
    }
    function In(t, e) {
      var n = Pn(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    }
    (qn.prototype = zn.prototype),
      (zn.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    const Dn = {
      "%": function (t, e) {
        return (100 * t).toFixed(e);
      },
      b: function (t) {
        return Math.round(t).toString(2);
      },
      c: function (t) {
        return t + "";
      },
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString("en").replace(/,/g, "")
          : t.toString(10);
      },
      e: function (t, e) {
        return t.toExponential(e);
      },
      f: function (t, e) {
        return t.toFixed(e);
      },
      g: function (t, e) {
        return t.toPrecision(e);
      },
      o: function (t) {
        return Math.round(t).toString(8);
      },
      p: function (t, e) {
        return In(100 * t, e);
      },
      r: In,
      s: function (t, e) {
        var n = Pn(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1],
          a = i - (Rn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
          ? r + new Array(a - o + 1).join("0")
          : a > 0
          ? r.slice(0, a) + "." + r.slice(a)
          : "0." +
            new Array(1 - a).join("0") +
            Pn(t, Math.max(0, e + a - 1))[0];
      },
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    };
    function On(t) {
      return t;
    }
    var Fn,
      jn,
      Un,
      Bn = Array.prototype.map,
      Xn = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function Wn(t) {
      var e,
        n,
        r =
          void 0 === t.grouping || void 0 === t.thousands
            ? On
            : ((e = Bn.call(t.grouping, Number)),
              (n = t.thousands + ""),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, u = e[0], l = 0;
                  i > 0 &&
                  u > 0 &&
                  (l + u + 1 > r && (u = Math.max(1, r - l)),
                  a.push(t.substring((i -= u), i + u)),
                  !((l += u + 1) > r));

                )
                  u = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        a = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "",
        u =
          void 0 === t.numerals
            ? On
            : (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(Bn.call(t.numerals, String)),
        l = void 0 === t.percent ? "%" : t.percent + "",
        s = void 0 === t.minus ? "-" : t.minus + "",
        c = void 0 === t.nan ? "NaN" : t.nan + "";
      function f(t) {
        var e = (t = qn(t)).fill,
          n = t.align,
          f = t.sign,
          h = t.symbol,
          d = t.zero,
          p = t.width,
          v = t.comma,
          g = t.precision,
          y = t.trim,
          m = t.type;
        "n" === m
          ? ((v = !0), (m = "g"))
          : Dn[m] || (void 0 === g && (g = 12), (y = !0), (m = "g")),
          (d || ("0" === e && "=" === n)) && ((d = !0), (e = "0"), (n = "="));
        var b =
            "$" === h
              ? i
              : "#" === h && /[boxX]/.test(m)
              ? "0" + m.toLowerCase()
              : "",
          _ = "$" === h ? a : /[%p]/.test(m) ? l : "",
          w = Dn[m],
          x = /[defgprs%]/.test(m);
        function M(t) {
          var i,
            a,
            l,
            h = b,
            M = _;
          if ("c" === m) (M = w(t) + M), (t = "");
          else {
            var A = (t = +t) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? c : w(Math.abs(t), g)),
              y &&
                (t = (function (t) {
                  t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                    switch (t[r]) {
                      case ".":
                        i = e = r;
                        break;
                      case "0":
                        0 === i && (i = r), (e = r);
                        break;
                      default:
                        if (!+t[r]) break t;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                })(t)),
              A && 0 === +t && "+" !== f && (A = !1),
              (h =
                (A ? ("(" === f ? f : s) : "-" === f || "(" === f ? "" : f) +
                h),
              (M =
                ("s" === m ? Xn[8 + Rn / 3] : "") +
                M +
                (A && "(" === f ? ")" : "")),
              x)
            )
              for (i = -1, a = t.length; ++i < a; )
                if (48 > (l = t.charCodeAt(i)) || l > 57) {
                  (M = (46 === l ? o + t.slice(i + 1) : t.slice(i)) + M),
                    (t = t.slice(0, i));
                  break;
                }
          }
          v && !d && (t = r(t, 1 / 0));
          var k = h.length + t.length + M.length,
            N = k < p ? new Array(p - k + 1).join(e) : "";
          switch (
            (v &&
              d &&
              ((t = r(N + t, N.length ? p - M.length : 1 / 0)), (N = "")),
            n)
          ) {
            case "<":
              t = h + t + M + N;
              break;
            case "=":
              t = h + N + t + M;
              break;
            case "^":
              t = N.slice(0, (k = N.length >> 1)) + h + t + M + N.slice(k);
              break;
            default:
              t = N + h + t + M;
          }
          return u(t);
        }
        return (
          (g =
            void 0 === g
              ? 6
              : /[gprs]/.test(m)
              ? Math.max(1, Math.min(21, g))
              : Math.max(0, Math.min(20, g))),
          (M.toString = function () {
            return t + "";
          }),
          M
        );
      }
      return {
        format: f,
        formatPrefix: function (t, e) {
          var n = f((((t = qn(t)).type = "f"), t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(Ln(e) / 3))),
            i = Math.pow(10, -r),
            a = Xn[8 + r / 3];
          return function (t) {
            return n(i * t) + a;
          };
        },
      };
    }
    function $n() {
      return Math.random();
    }
    (Fn = Wn({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-",
    })),
      (jn = Fn.format),
      (Un = Fn.formatPrefix);
    (function t(e) {
      function n(t, n) {
        return (
          (t = null == t ? 0 : +t),
          (n = null == n ? 1 : +n),
          1 === arguments.length ? ((n = t), (t = 0)) : (n -= t),
          function () {
            return e() * n + t;
          }
        );
      }
      return (n.source = t), n;
    })($n);
    const Hn = (function t(e) {
        function n(t, n) {
          var r, i;
          return (
            (t = null == t ? 0 : +t),
            (n = null == n ? 1 : +n),
            function () {
              var a;
              if (null != r) (a = r), (r = null);
              else
                do {
                  (r = 2 * e() - 1), (a = 2 * e() - 1), (i = r * r + a * a);
                } while (!i || i > 1);
              return t + n * a * Math.sqrt((-2 * Math.log(i)) / i);
            }
          );
        }
        return (n.source = t), n;
      })($n),
      Vn =
        ((function t(e) {
          function n() {
            var t = Hn.source(e).apply(this, arguments);
            return function () {
              return Math.exp(t());
            };
          }
          return (n.source = t), n;
        })($n),
        (function t(e) {
          function n(t) {
            return function () {
              for (var n = 0, r = 0; r < t; ++r) n += e();
              return n;
            };
          }
          return (n.source = t), n;
        })($n));
    (function t(e) {
      function n(t) {
        var n = Vn.source(e)(t);
        return function () {
          return n() / t;
        };
      }
      return (n.source = t), n;
    })($n),
      (function t(e) {
        function n(t) {
          return function () {
            return -Math.log(1 - e()) / t;
          };
        }
        return (n.source = t), n;
      })($n);
    var Yn = Array.prototype,
      Zn = Yn.map,
      Gn = Yn.slice;
    function Jn(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t);
      }
      return this;
    }
    var Kn = { name: "implicit" };
    function Qn() {
      var t = Nn(),
        e = [],
        n = [],
        r = Kn;
      function i(i) {
        var a = i + "",
          o = t.get(a);
        if (!o) {
          if (r !== Kn) return r;
          t.set(a, (o = e.push(i)));
        }
        return n[(o - 1) % n.length];
      }
      return (
        (i.domain = function (n) {
          if (!arguments.length) return e.slice();
          (e = []), (t = Nn());
          for (var r, a, o = -1, u = n.length; ++o < u; )
            t.has((a = (r = n[o]) + "")) || t.set(a, e.push(r));
          return i;
        }),
        (i.range = function (t) {
          return arguments.length ? ((n = Gn.call(t)), i) : n.slice();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((r = t), i) : r;
        }),
        (i.copy = function () {
          return Qn(e, n).unknown(r);
        }),
        Jn.apply(i, arguments),
        i
      );
    }
    function tr(t, e) {
      var n,
        r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(i),
        o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = ir(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o;
      };
    }
    function er(t, e) {
      var n = new Date();
      return (
        (t = +t),
        (e = +e),
        function (r) {
          return n.setTime(t * (1 - r) + e * r), n;
        }
      );
    }
    function nr(t, e) {
      var n,
        r = {},
        i = {};
      for (n in ((null !== t && "object" == typeof t) || (t = {}),
      (null !== e && "object" == typeof e) || (e = {}),
      e))
        n in t ? (r[n] = ir(t[n], e[n])) : (i[n] = e[n]);
      return function (t) {
        for (n in r) i[n] = r[n](t);
        return i;
      };
    }
    function rr(t, e) {
      e || (e = []);
      var n,
        r = t ? Math.min(e.length, t.length) : 0,
        i = e.slice();
      return function (a) {
        for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
        return i;
      };
    }
    function ir(t, e) {
      var n,
        r = typeof e;
      return null == e || "boolean" === r
        ? Xe(e)
        : ("number" === r
            ? Jt
            : "string" === r
            ? (n = Ee(e))
              ? ((e = n), Ve)
              : Je
            : e instanceof Ee
            ? Ve
            : e instanceof Date
            ? er
            : (function (t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView);
              })(e)
            ? rr
            : Array.isArray(e)
            ? tr
            : ("function" != typeof e.valueOf &&
                "function" != typeof e.toString) ||
              isNaN(e)
            ? nr
            : Jt)(t, e);
    }
    function ar(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return Math.round(t * (1 - n) + e * n);
        }
      );
    }
    function or(t) {
      return +t;
    }
    var ur = [0, 1];
    function lr(t) {
      return t;
    }
    function sr(t, e) {
      return (e -= t = +t)
        ? function (n) {
            return (n - t) / e;
          }
        : (function (t) {
            return function () {
              return t;
            };
          })(isNaN(e) ? NaN : 0.5);
    }
    function cr(t) {
      var e,
        n = t[0],
        r = t[t.length - 1];
      return (
        n > r && ((e = n), (n = r), (r = e)),
        function (t) {
          return Math.max(n, Math.min(r, t));
        }
      );
    }
    function fr(t, e, n) {
      var r = t[0],
        i = t[1],
        a = e[0],
        o = e[1];
      return (
        i < r
          ? ((r = sr(i, r)), (a = n(o, a)))
          : ((r = sr(r, i)), (a = n(a, o))),
        function (t) {
          return a(r(t));
        }
      );
    }
    function hr(t, e, n) {
      var r = Math.min(t.length, e.length) - 1,
        a = new Array(r),
        o = new Array(r),
        u = -1;
      for (
        t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++u < r;

      )
        (a[u] = sr(t[u], t[u + 1])), (o[u] = n(e[u], e[u + 1]));
      return function (e) {
        var n = i(t, e, 1, r) - 1;
        return o[n](a[n](e));
      };
    }
    function dr(t, e) {
      return (function () {
        var t,
          e,
          n,
          r,
          i,
          a,
          o = ur,
          u = ur,
          l = ir,
          s = lr;
        function c() {
          return (
            (r = Math.min(o.length, u.length) > 2 ? hr : fr), (i = a = null), f
          );
        }
        function f(e) {
          return isNaN((e = +e)) ? n : (i || (i = r(o.map(t), u, l)))(t(s(e)));
        }
        return (
          (f.invert = function (n) {
            return s(e((a || (a = r(u, o.map(t), Jt)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((o = Zn.call(t, or)), s === lr || (s = cr(o)), c())
              : o.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Gn.call(t)), c()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Gn.call(t)), (l = ar), c();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((s = t ? cr(o) : lr), f) : s !== lr;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((l = t), c()) : l;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), c();
          }
        );
      })()(t, e);
    }
    function pr(t, e, n, r) {
      var i,
        a = (function (t, e, n) {
          var r = Math.abs(e - t) / Math.max(0, n),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / i;
          return (
            a >= o ? (i *= 10) : a >= u ? (i *= 5) : a >= l && (i *= 2),
            e < t ? -i : i
          );
        })(t, e, n);
      switch ((r = qn(r ?? ",f")).type) {
        case "s":
          var s = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(Ln(e) / 3))) -
                      Ln(Math.abs(t))
                  );
                })(a, s))
              ) ||
              (r.precision = i),
            Un(r, s)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != r.precision ||
            isNaN(
              (i = (function (t, e) {
                return (
                  (t = Math.abs(t)),
                  (e = Math.abs(e) - t),
                  Math.max(0, Ln(e) - Ln(t)) + 1
                );
              })(a, Math.max(Math.abs(t), Math.abs(e))))
            ) ||
            (r.precision = i - ("e" === r.type));
          break;
        case "f":
        case "%":
          null != r.precision ||
            isNaN(
              (i = (function (t) {
                return Math.max(0, -Ln(Math.abs(t)));
              })(a))
            ) ||
            (r.precision = i - 2 * ("%" === r.type));
      }
      return jn(r);
    }
    function vr(t) {
      var e = t.domain;
      return (
        (t.ticks = function (t) {
          var n = e();
          return (function (t, e, n) {
            var r,
              i,
              a,
              o,
              u = -1;
            if (((n = +n), (t = +t) === (e = +e) && n > 0)) return [t];
            if (
              ((r = e < t) && ((i = t), (t = e), (e = i)),
              0 === (o = s(t, e, n)) || !isFinite(o))
            )
              return [];
            if (o > 0)
              for (
                t = Math.ceil(t / o),
                  e = Math.floor(e / o),
                  a = new Array((i = Math.ceil(e - t + 1)));
                ++u < i;

              )
                a[u] = (t + u) * o;
            else
              for (
                t = Math.floor(t * o),
                  e = Math.ceil(e * o),
                  a = new Array((i = Math.ceil(t - e + 1)));
                ++u < i;

              )
                a[u] = (t - u) / o;
            return r && a.reverse(), a;
          })(n[0], n[n.length - 1], t ?? 10);
        }),
        (t.tickFormat = function (t, n) {
          var r = e();
          return pr(r[0], r[r.length - 1], t ?? 10, n);
        }),
        (t.nice = function (n) {
          null == n && (n = 10);
          var r,
            i = e(),
            a = 0,
            o = i.length - 1,
            u = i[a],
            l = i[o];
          return (
            l < u && ((r = u), (u = l), (l = r), (r = a), (a = o), (o = r)),
            (r = s(u, l, n)) > 0
              ? (r = s(
                  (u = Math.floor(u / r) * r),
                  (l = Math.ceil(l / r) * r),
                  n
                ))
              : r < 0 &&
                (r = s(
                  (u = Math.ceil(u * r) / r),
                  (l = Math.floor(l * r) / r),
                  n
                )),
            r > 0
              ? ((i[a] = Math.floor(u / r) * r),
                (i[o] = Math.ceil(l / r) * r),
                e(i))
              : r < 0 &&
                ((i[a] = Math.ceil(u * r) / r),
                (i[o] = Math.floor(l * r) / r),
                e(i)),
            t
          );
        }),
        t
      );
    }
    function gr() {
      var t = dr(lr, lr);
      return (
        (t.copy = function () {
          return (
            (e = t),
            gr()
              .domain(e.domain())
              .range(e.range())
              .interpolate(e.interpolate())
              .clamp(e.clamp())
              .unknown(e.unknown())
          );
          var e;
        }),
        Jn.apply(t, arguments),
        vr(t)
      );
    }
    const yr = (function (t) {
      for (var e = (t.length / 6) | 0, n = new Array(e), r = 0; r < e; )
        n[r] = "#" + t.slice(6 * r, 6 * ++r);
      return n;
    })("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    function mr(t) {
      return "string" == typeof t
        ? new mt([[document.querySelector(t)]], [document.documentElement])
        : new mt([[t]], yt);
    }
    function br(t) {
      return "string" == typeof t
        ? new mt([document.querySelectorAll(t)], [document.documentElement])
        : new mt([t ?? []], yt);
    }
    function _r(t) {
      this._context = t;
    }
    function wr(t) {
      return new _r(t);
    }
    _r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, e);
        }
      },
    };
    var xr = Ar(wr);
    function Mr(t) {
      this._curve = t;
    }
    function Ar(t) {
      function e(e) {
        return new Mr(t(e));
      }
      return (e._curve = t), e;
    }
    Mr.prototype = {
      areaStart: function () {
        this._curve.areaStart();
      },
      areaEnd: function () {
        this._curve.areaEnd();
      },
      lineStart: function () {
        this._curve.lineStart();
      },
      lineEnd: function () {
        this._curve.lineEnd();
      },
      point: function (t, e) {
        this._curve.point(e * Math.sin(t), e * -Math.cos(t));
      },
    };
    var kr = Math.PI,
      Nr = 2 * kr,
      Cr = 1e-6,
      Sr = Nr - Cr;
    function Er() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function Pr() {
      return new Er();
    }
    Er.prototype = Pr.prototype = {
      constructor: Er,
      moveTo: function (t, e) {
        this._ +=
          "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
      },
      closePath: function () {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function (t, e) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
      },
      quadraticCurveTo: function (t, e, n, r) {
        this._ +=
          "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
      },
      bezierCurveTo: function (t, e, n, r, i, a) {
        this._ +=
          "C" +
          +t +
          "," +
          +e +
          "," +
          +n +
          "," +
          +r +
          "," +
          (this._x1 = +i) +
          "," +
          (this._y1 = +a);
      },
      arcTo: function (t, e, n, r, i) {
        (t = +t), (e = +e), (n = +n), (r = +r), (i = +i);
        var a = this._x1,
          o = this._y1,
          u = n - t,
          l = r - e,
          s = a - t,
          c = o - e,
          f = s * s + c * c;
        if (i < 0) throw new Error("negative radius: " + i);
        if (null === this._x1)
          this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
        else if (f > Cr)
          if (Math.abs(c * u - l * s) > Cr && i) {
            var h = n - a,
              d = r - o,
              p = u * u + l * l,
              v = h * h + d * d,
              g = Math.sqrt(p),
              y = Math.sqrt(f),
              m = i * Math.tan((kr - Math.acos((p + f - v) / (2 * g * y))) / 2),
              b = m / y,
              _ = m / g;
            Math.abs(b - 1) > Cr &&
              (this._ += "L" + (t + b * s) + "," + (e + b * c)),
              (this._ +=
                "A" +
                i +
                "," +
                i +
                ",0,0," +
                +(c * h > s * d) +
                "," +
                (this._x1 = t + _ * u) +
                "," +
                (this._y1 = e + _ * l));
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
        else;
      },
      arc: function (t, e, n, r, i, a) {
        (t = +t), (e = +e), (a = !!a);
        var o = (n = +n) * Math.cos(r),
          u = n * Math.sin(r),
          l = t + o,
          s = e + u,
          c = 1 ^ a,
          f = a ? r - i : i - r;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1
          ? (this._ += "M" + l + "," + s)
          : (Math.abs(this._x1 - l) > Cr || Math.abs(this._y1 - s) > Cr) &&
            (this._ += "L" + l + "," + s),
          n &&
            (f < 0 && (f = (f % Nr) + Nr),
            f > Sr
              ? (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  c +
                  "," +
                  (t - o) +
                  "," +
                  (e - u) +
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  c +
                  "," +
                  (this._x1 = l) +
                  "," +
                  (this._y1 = s))
              : f > Cr &&
                (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0," +
                  +(f >= kr) +
                  "," +
                  c +
                  "," +
                  (this._x1 = t + n * Math.cos(i)) +
                  "," +
                  (this._y1 = e + n * Math.sin(i))));
      },
      rect: function (t, e, n, r) {
        this._ +=
          "M" +
          (this._x0 = this._x1 = +t) +
          "," +
          (this._y0 = this._y1 = +e) +
          "h" +
          +n +
          "v" +
          +r +
          "h" +
          -n +
          "Z";
      },
      toString: function () {
        return this._;
      },
    };
    const Lr = Pr;
    function Rr(t) {
      return function () {
        return t;
      };
    }
    function Tr(t) {
      return t[0];
    }
    function qr(t) {
      return t[1];
    }
    function zr() {
      return (
        (t = (function () {
          var t = Tr,
            e = qr,
            n = Rr(!0),
            r = null,
            i = wr,
            a = null;
          function o(o) {
            var u,
              l,
              s,
              c = o.length,
              f = !1;
            for (null == r && (a = i((s = Lr()))), u = 0; u <= c; ++u)
              !(u < c && n((l = o[u]), u, o)) === f &&
                ((f = !f) ? a.lineStart() : a.lineEnd()),
                f && a.point(+t(l, u, o), +e(l, u, o));
            if (s) return (a = null), s + "" || null;
          }
          return (
            (o.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : Rr(+e)), o)
                : t;
            }),
            (o.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : Rr(+t)), o)
                : e;
            }),
            (o.defined = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : Rr(!!t)), o)
                : n;
            }),
            (o.curve = function (t) {
              return arguments.length
                ? ((i = t), null != r && (a = i(r)), o)
                : i;
            }),
            (o.context = function (t) {
              return arguments.length
                ? (null == t ? (r = a = null) : (a = i((r = t))), o)
                : r;
            }),
            o
          );
        })().curve(xr)),
        (e = t.curve),
        (t.angle = t.x),
        delete t.x,
        (t.radius = t.y),
        delete t.y,
        (t.curve = function (t) {
          return arguments.length ? e(Ar(t)) : e()._curve;
        }),
        t
      );
      var t, e;
    }
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var Ir = Math.PI,
      Dr = 2 * Ir;
    const Or = {
      draw: function (t, e) {
        var n = Math.sqrt(e / Ir);
        t.moveTo(n, 0), t.arc(0, 0, n, 0, Dr);
      },
    };
    function Fr() {}
    function jr(t, e, n) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - e),
        t._y2 + t._k * (t._y1 - n),
        t._x2,
        t._y2
      );
    }
    function Ur(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    Ur.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            jr(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = e);
            break;
          case 2:
            this._point = 3;
          default:
            jr(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      },
    };
    (function t(e) {
      function n(t) {
        return new Ur(t, e);
      }
      return (
        (n.tension = function (e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function Br(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    Br.prototype = {
      areaStart: Fr,
      areaEnd: Fr,
      lineStart: function () {
        (this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._x5 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
          this._y5 =
            NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = e);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = e));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = e);
            break;
          default:
            jr(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      },
    };
    const Xr = (function t(e) {
      function n(t) {
        return new Br(t, e);
      }
      return (
        (n.tension = function (e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function Wr() {
      this._ = null;
    }
    function $r(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function Hr(t, e) {
      var n = e,
        r = e.R,
        i = n.U;
      i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (n.U = r),
        (n.R = r.L),
        n.R && (n.R.U = n),
        (r.L = n);
    }
    function Vr(t, e) {
      var n = e,
        r = e.L,
        i = n.U;
      i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (n.U = r),
        (n.L = r.R),
        n.L && (n.L.U = n),
        (r.R = n);
    }
    function Yr(t) {
      for (; t.L; ) t = t.L;
      return t;
    }
    Wr.prototype = {
      constructor: Wr,
      insert: function (t, e) {
        var n, r, i;
        if (t) {
          if (((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)) {
            for (t = t.R; t.L; ) t = t.L;
            t.L = e;
          } else t.R = e;
          n = t;
        } else
          this._
            ? ((t = Yr(this._)),
              (e.P = null),
              (e.N = t),
              (t.P = t.L = e),
              (n = t))
            : ((e.P = e.N = null), (this._ = e), (n = null));
        for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C; )
          n === (r = n.U).L
            ? (i = r.R) && i.C
              ? ((n.C = i.C = !1), (r.C = !0), (t = r))
              : (t === n.R && (Hr(this, n), (n = (t = n).U)),
                (n.C = !1),
                (r.C = !0),
                Vr(this, r))
            : (i = r.L) && i.C
            ? ((n.C = i.C = !1), (r.C = !0), (t = r))
            : (t === n.L && (Vr(this, n), (n = (t = n).U)),
              (n.C = !1),
              (r.C = !0),
              Hr(this, r)),
            (n = t.U);
        this._.C = !1;
      },
      remove: function (t) {
        t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
        var e,
          n,
          r,
          i = t.U,
          a = t.L,
          o = t.R;
        if (
          ((n = a ? (o ? Yr(o) : a) : o),
          i ? (i.L === t ? (i.L = n) : (i.R = n)) : (this._ = n),
          a && o
            ? ((r = n.C),
              (n.C = t.C),
              (n.L = a),
              (a.U = n),
              n !== o
                ? ((i = n.U),
                  (n.U = t.U),
                  (t = n.R),
                  (i.L = t),
                  (n.R = o),
                  (o.U = n))
                : ((n.U = i), (i = n), (t = n.R)))
            : ((r = t.C), (t = n)),
          t && (t.U = i),
          !r)
        )
          if (t && t.C) t.C = !1;
          else {
            do {
              if (t === this._) break;
              if (t === i.L) {
                if (
                  ((e = i.R).C &&
                    ((e.C = !1), (i.C = !0), Hr(this, i), (e = i.R)),
                  (e.L && e.L.C) || (e.R && e.R.C))
                ) {
                  (e.R && e.R.C) ||
                    ((e.L.C = !1), (e.C = !0), Vr(this, e), (e = i.R)),
                    (e.C = i.C),
                    (i.C = e.R.C = !1),
                    Hr(this, i),
                    (t = this._);
                  break;
                }
              } else if (
                ((e = i.L).C &&
                  ((e.C = !1), (i.C = !0), Vr(this, i), (e = i.L)),
                (e.L && e.L.C) || (e.R && e.R.C))
              ) {
                (e.L && e.L.C) ||
                  ((e.R.C = !1), (e.C = !0), Hr(this, e), (e = i.L)),
                  (e.C = i.C),
                  (i.C = e.L.C = !1),
                  Vr(this, i),
                  (t = this._);
                break;
              }
              (e.C = !0), (t = i), (i = i.U);
            } while (!t.C);
            t && (t.C = !1);
          }
      },
    };
    const Zr = Wr;
    function Gr(t, e, n, r) {
      var i = [null, null],
        a = _i.push(i) - 1;
      return (
        (i.left = t),
        (i.right = e),
        n && Kr(i, t, e, n),
        r && Kr(i, e, t, r),
        mi[t.index].halfedges.push(a),
        mi[e.index].halfedges.push(a),
        i
      );
    }
    function Jr(t, e, n) {
      var r = [e, n];
      return (r.left = t), r;
    }
    function Kr(t, e, n, r) {
      t[0] || t[1]
        ? t.left === n
          ? (t[1] = r)
          : (t[0] = r)
        : ((t[0] = r), (t.left = e), (t.right = n));
    }
    function Qr(t, e, n, r, i) {
      var a,
        o = t[0],
        u = t[1],
        l = o[0],
        s = o[1],
        c = 0,
        f = 1,
        h = u[0] - l,
        d = u[1] - s;
      if (((a = e - l), h || !(a > 0))) {
        if (((a /= h), h < 0)) {
          if (a < c) return;
          a < f && (f = a);
        } else if (h > 0) {
          if (a > f) return;
          a > c && (c = a);
        }
        if (((a = r - l), h || !(a < 0))) {
          if (((a /= h), h < 0)) {
            if (a > f) return;
            a > c && (c = a);
          } else if (h > 0) {
            if (a < c) return;
            a < f && (f = a);
          }
          if (((a = n - s), d || !(a > 0))) {
            if (((a /= d), d < 0)) {
              if (a < c) return;
              a < f && (f = a);
            } else if (d > 0) {
              if (a > f) return;
              a > c && (c = a);
            }
            if (((a = i - s), d || !(a < 0))) {
              if (((a /= d), d < 0)) {
                if (a > f) return;
                a > c && (c = a);
              } else if (d > 0) {
                if (a < c) return;
                a < f && (f = a);
              }
              return (
                !(c > 0 || f < 1) ||
                (c > 0 && (t[0] = [l + c * h, s + c * d]),
                f < 1 && (t[1] = [l + f * h, s + f * d]),
                !0)
              );
            }
          }
        }
      }
    }
    function ti(t, e, n, r, i) {
      var a = t[1];
      if (a) return !0;
      var o,
        u,
        l = t[0],
        s = t.left,
        c = t.right,
        f = s[0],
        h = s[1],
        d = c[0],
        p = c[1],
        v = (f + d) / 2,
        g = (h + p) / 2;
      if (p === h) {
        if (v < e || v >= r) return;
        if (f > d) {
          if (l) {
            if (l[1] >= i) return;
          } else l = [v, n];
          a = [v, i];
        } else {
          if (l) {
            if (l[1] < n) return;
          } else l = [v, i];
          a = [v, n];
        }
      } else if (((u = g - (o = (f - d) / (p - h)) * v), o < -1 || o > 1))
        if (f > d) {
          if (l) {
            if (l[1] >= i) return;
          } else l = [(n - u) / o, n];
          a = [(i - u) / o, i];
        } else {
          if (l) {
            if (l[1] < n) return;
          } else l = [(i - u) / o, i];
          a = [(n - u) / o, n];
        }
      else if (h < p) {
        if (l) {
          if (l[0] >= r) return;
        } else l = [e, o * e + u];
        a = [r, o * r + u];
      } else {
        if (l) {
          if (l[0] < e) return;
        } else l = [r, o * r + u];
        a = [e, o * e + u];
      }
      return (t[0] = l), (t[1] = a), !0;
    }
    function ei(t, e) {
      var n = t.site,
        r = e.left,
        i = e.right;
      return (
        n === i && ((i = r), (r = n)),
        i
          ? Math.atan2(i[1] - r[1], i[0] - r[0])
          : (n === r ? ((r = e[1]), (i = e[0])) : ((r = e[0]), (i = e[1])),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
      );
    }
    function ni(t, e) {
      return e[+(e.left !== t.site)];
    }
    function ri(t, e) {
      return e[+(e.left === t.site)];
    }
    var ii,
      ai = [];
    function oi() {
      $r(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function ui(t) {
      var e = t.P,
        n = t.N;
      if (e && n) {
        var r = e.site,
          i = t.site,
          a = n.site;
        if (r !== a) {
          var o = i[0],
            u = i[1],
            l = r[0] - o,
            s = r[1] - u,
            c = a[0] - o,
            f = a[1] - u,
            h = 2 * (l * f - s * c);
          if (!(h >= -xi)) {
            var d = l * l + s * s,
              p = c * c + f * f,
              v = (f * d - s * p) / h,
              g = (l * p - c * d) / h,
              y = ai.pop() || new oi();
            (y.arc = t),
              (y.site = i),
              (y.x = v + o),
              (y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g)),
              (t.circle = y);
            for (var m = null, b = bi._; b; )
              if (y.y < b.y || (y.y === b.y && y.x <= b.x)) {
                if (!b.L) {
                  m = b.P;
                  break;
                }
                b = b.L;
              } else {
                if (!b.R) {
                  m = b;
                  break;
                }
                b = b.R;
              }
            bi.insert(m, y), m || (ii = y);
          }
        }
      }
    }
    function li(t) {
      var e = t.circle;
      e &&
        (e.P || (ii = e.N), bi.remove(e), ai.push(e), $r(e), (t.circle = null));
    }
    var si = [];
    function ci() {
      $r(this), (this.edge = this.site = this.circle = null);
    }
    function fi(t) {
      var e = si.pop() || new ci();
      return (e.site = t), e;
    }
    function hi(t) {
      li(t), yi.remove(t), si.push(t), $r(t);
    }
    function di(t) {
      var e = t.circle,
        n = e.x,
        r = e.cy,
        i = [n, r],
        a = t.P,
        o = t.N,
        u = [t];
      hi(t);
      for (
        var l = a;
        l.circle &&
        Math.abs(n - l.circle.x) < wi &&
        Math.abs(r - l.circle.cy) < wi;

      )
        (a = l.P), u.unshift(l), hi(l), (l = a);
      u.unshift(l), li(l);
      for (
        var s = o;
        s.circle &&
        Math.abs(n - s.circle.x) < wi &&
        Math.abs(r - s.circle.cy) < wi;

      )
        (o = s.N), u.push(s), hi(s), (s = o);
      u.push(s), li(s);
      var c,
        f = u.length;
      for (c = 1; c < f; ++c)
        (s = u[c]), (l = u[c - 1]), Kr(s.edge, l.site, s.site, i);
      (l = u[0]),
        ((s = u[f - 1]).edge = Gr(l.site, s.site, null, i)),
        ui(l),
        ui(s);
    }
    function pi(t) {
      for (var e, n, r, i, a = t[0], o = t[1], u = yi._; u; )
        if ((r = vi(u, o) - a) > wi) u = u.L;
        else {
          if (!((i = a - gi(u, o)) > wi)) {
            r > -wi
              ? ((e = u.P), (n = u))
              : i > -wi
              ? ((e = u), (n = u.N))
              : (e = n = u);
            break;
          }
          if (!u.R) {
            e = u;
            break;
          }
          u = u.R;
        }
      !(function (t) {
        mi[t.index] = { site: t, halfedges: [] };
      })(t);
      var l = fi(t);
      if ((yi.insert(e, l), e || n)) {
        if (e === n)
          return (
            li(e),
            (n = fi(e.site)),
            yi.insert(l, n),
            (l.edge = n.edge = Gr(e.site, l.site)),
            ui(e),
            void ui(n)
          );
        if (n) {
          li(e), li(n);
          var s = e.site,
            c = s[0],
            f = s[1],
            h = t[0] - c,
            d = t[1] - f,
            p = n.site,
            v = p[0] - c,
            g = p[1] - f,
            y = 2 * (h * g - d * v),
            m = h * h + d * d,
            b = v * v + g * g,
            _ = [(g * m - d * b) / y + c, (h * b - v * m) / y + f];
          Kr(n.edge, s, p, _),
            (l.edge = Gr(s, t, null, _)),
            (n.edge = Gr(t, p, null, _)),
            ui(e),
            ui(n);
        } else l.edge = Gr(e.site, l.site);
      }
    }
    function vi(t, e) {
      var n = t.site,
        r = n[0],
        i = n[1],
        a = i - e;
      if (!a) return r;
      var o = t.P;
      if (!o) return -1 / 0;
      var u = (n = o.site)[0],
        l = n[1],
        s = l - e;
      if (!s) return u;
      var c = u - r,
        f = 1 / a - 1 / s,
        h = c / s;
      return f
        ? (-h +
            Math.sqrt(
              h * h - 2 * f * ((c * c) / (-2 * s) - l + s / 2 + i - a / 2)
            )) /
            f +
            r
        : (r + u) / 2;
    }
    function gi(t, e) {
      var n = t.N;
      if (n) return vi(n, e);
      var r = t.site;
      return r[1] === e ? r[0] : 1 / 0;
    }
    var yi,
      mi,
      bi,
      _i,
      wi = 1e-6,
      xi = 1e-12;
    function Mi(t, e, n) {
      return (t[0] - n[0]) * (e[1] - t[1]) - (t[0] - e[0]) * (n[1] - t[1]);
    }
    function Ai(t, e) {
      return e[1] - t[1] || e[0] - t[0];
    }
    function ki(t, e) {
      var n,
        r,
        i,
        a = t.sort(Ai).pop();
      for (_i = [], mi = new Array(t.length), yi = new Zr(), bi = new Zr(); ; )
        if (((i = ii), a && (!i || a[1] < i.y || (a[1] === i.y && a[0] < i.x))))
          (a[0] === n && a[1] === r) || (pi(a), (n = a[0]), (r = a[1])),
            (a = t.pop());
        else {
          if (!i) break;
          di(i.arc);
        }
      if (
        ((function () {
          for (var t, e, n, r, i = 0, a = mi.length; i < a; ++i)
            if ((t = mi[i]) && (r = (e = t.halfedges).length)) {
              var o = new Array(r),
                u = new Array(r);
              for (n = 0; n < r; ++n) (o[n] = n), (u[n] = ei(t, _i[e[n]]));
              for (
                o.sort(function (t, e) {
                  return u[e] - u[t];
                }),
                  n = 0;
                n < r;
                ++n
              )
                u[n] = e[o[n]];
              for (n = 0; n < r; ++n) e[n] = u[n];
            }
        })(),
        e)
      ) {
        var o = +e[0][0],
          u = +e[0][1],
          l = +e[1][0],
          s = +e[1][1];
        !(function (t, e, n, r) {
          for (var i, a = _i.length; a--; )
            (ti((i = _i[a]), t, e, n, r) &&
              Qr(i, t, e, n, r) &&
              (Math.abs(i[0][0] - i[1][0]) > wi ||
                Math.abs(i[0][1] - i[1][1]) > wi)) ||
              delete _i[a];
        })(o, u, l, s),
          (function (t, e, n, r) {
            var i,
              a,
              o,
              u,
              l,
              s,
              c,
              f,
              h,
              d,
              p,
              v,
              g = mi.length,
              y = !0;
            for (i = 0; i < g; ++i)
              if ((a = mi[i])) {
                for (o = a.site, u = (l = a.halfedges).length; u--; )
                  _i[l[u]] || l.splice(u, 1);
                for (u = 0, s = l.length; u < s; )
                  (p = (d = ri(a, _i[l[u]]))[0]),
                    (v = d[1]),
                    (f = (c = ni(a, _i[l[++u % s]]))[0]),
                    (h = c[1]),
                    (Math.abs(p - f) > wi || Math.abs(v - h) > wi) &&
                      (l.splice(
                        u,
                        0,
                        _i.push(
                          Jr(
                            o,
                            d,
                            Math.abs(p - t) < wi && r - v > wi
                              ? [t, Math.abs(f - t) < wi ? h : r]
                              : Math.abs(v - r) < wi && n - p > wi
                              ? [Math.abs(h - r) < wi ? f : n, r]
                              : Math.abs(p - n) < wi && v - e > wi
                              ? [n, Math.abs(f - n) < wi ? h : e]
                              : Math.abs(v - e) < wi && p - t > wi
                              ? [Math.abs(h - e) < wi ? f : t, e]
                              : null
                          )
                        ) - 1
                      ),
                      ++s);
                s && (y = !1);
              }
            if (y) {
              var m,
                b,
                _,
                w = 1 / 0;
              for (i = 0, y = null; i < g; ++i)
                (a = mi[i]) &&
                  (_ = (m = (o = a.site)[0] - t) * m + (b = o[1] - e) * b) <
                    w &&
                  ((w = _), (y = a));
              if (y) {
                var x = [t, e],
                  M = [t, r],
                  A = [n, r],
                  k = [n, e];
                y.halfedges.push(
                  _i.push(Jr((o = y.site), x, M)) - 1,
                  _i.push(Jr(o, M, A)) - 1,
                  _i.push(Jr(o, A, k)) - 1,
                  _i.push(Jr(o, k, x)) - 1
                );
              }
            }
            for (i = 0; i < g; ++i)
              (a = mi[i]) && (a.halfedges.length || delete mi[i]);
          })(o, u, l, s);
      }
      (this.edges = _i), (this.cells = mi), (yi = bi = _i = mi = null);
    }
    function Ni(t, e, n) {
      (this.k = t), (this.x = e), (this.y = n);
    }
    (ki.prototype = {
      constructor: ki,
      polygons: function () {
        var t = this.edges;
        return this.cells.map(function (e) {
          var n = e.halfedges.map(function (n) {
            return ni(e, t[n]);
          });
          return (n.data = e.site.data), n;
        });
      },
      triangles: function () {
        var t = [],
          e = this.edges;
        return (
          this.cells.forEach(function (n, r) {
            if ((a = (i = n.halfedges).length))
              for (
                var i,
                  a,
                  o,
                  u = n.site,
                  l = -1,
                  s = e[i[a - 1]],
                  c = s.left === u ? s.right : s.left;
                ++l < a;

              )
                (o = c),
                  (c = (s = e[i[l]]).left === u ? s.right : s.left),
                  o &&
                    c &&
                    r < o.index &&
                    r < c.index &&
                    Mi(u, o, c) < 0 &&
                    t.push([u.data, o.data, c.data]);
          }),
          t
        );
      },
      links: function () {
        return this.edges
          .filter(function (t) {
            return t.right;
          })
          .map(function (t) {
            return { source: t.left.data, target: t.right.data };
          });
      },
      find: function (t, e, n) {
        for (
          var r, i, a = this, o = a._found || 0, u = a.cells.length;
          !(i = a.cells[o]);

        )
          if (++o >= u) return null;
        var l = t - i.site[0],
          s = e - i.site[1],
          c = l * l + s * s;
        do {
          (i = a.cells[(r = o)]),
            (o = null),
            i.halfedges.forEach(function (n) {
              var r = a.edges[n],
                u = r.left;
              if ((u !== i.site && u) || (u = r.right)) {
                var l = t - u[0],
                  s = e - u[1],
                  f = l * l + s * s;
                f < c && ((c = f), (o = u.index));
              }
            });
        } while (null !== o);
        return (a._found = r), null == n || c <= n * n ? i.site : null;
      },
    }),
      (Ni.prototype = {
        constructor: Ni,
        scale: function (t) {
          return 1 === t ? this : new Ni(this.k * t, this.x, this.y);
        },
        translate: function (t, e) {
          return (0 === t) & (0 === e)
            ? this
            : new Ni(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      });
    new Ni(1, 0, 0);
    Ni.prototype;
    var Ci = 0;
    function Si() {
      this._ = "@" + (++Ci).toString(36);
    }
    Si.prototype = function () {
      return new Si();
    }.prototype = {
      constructor: Si,
      get: function (t) {
        for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
        return t[e];
      },
      set: function (t, e) {
        return (t[this._] = e);
      },
      remove: function (t) {
        return this._ in t && delete t[this._];
      },
      toString: function () {
        return this._;
      },
    };
    var Ei = function (t) {
      return function () {
        return this.matches(t);
      };
    };
    if ("undefined" != typeof document) {
      var Pi = document.documentElement;
      if (!Pi.matches) {
        var Li =
          Pi.webkitMatchesSelector ||
          Pi.msMatchesSelector ||
          Pi.mozMatchesSelector ||
          Pi.oMatchesSelector;
        Ei = function (t) {
          return function () {
            return Li.call(this, t);
          };
        };
      }
    }
    const Ri = Ei;
    var Ti = {},
      qi = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement ||
        (Ti = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function zi(t, e, n) {
      return (
        (t = Ii(t, e, n)),
        function (e) {
          var n = e.relatedTarget;
          (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
            t.call(this, e);
        }
      );
    }
    function Ii(t, e, n) {
      return function (r) {
        var i = qi;
        qi = r;
        try {
          t.call(this, this.__data__, e, n);
        } finally {
          qi = i;
        }
      };
    }
    function Di(t) {
      return function () {
        var e = this.__on;
        if (e) {
          for (var n, r = 0, i = -1, a = e.length; r < a; ++r)
            (n = e[r]),
              (t.type && n.type !== t.type) || n.name !== t.name
                ? (e[++i] = n)
                : this.removeEventListener(n.type, n.listener, n.capture);
          ++i ? (e.length = i) : delete this.__on;
        }
      };
    }
    function Oi(t, e, n) {
      var r = Ti.hasOwnProperty(t.type) ? zi : Ii;
      return function (i, a, o) {
        var u,
          l = this.__on,
          s = r(e, a, o);
        if (l)
          for (var c = 0, f = l.length; c < f; ++c)
            if ((u = l[c]).type === t.type && u.name === t.name)
              return (
                this.removeEventListener(u.type, u.listener, u.capture),
                this.addEventListener(
                  u.type,
                  (u.listener = s),
                  (u.capture = n)
                ),
                void (u.value = e)
              );
        this.addEventListener(t.type, s, n),
          (u = {
            type: t.type,
            name: t.name,
            value: e,
            listener: s,
            capture: n,
          }),
          l ? l.push(u) : (this.__on = [u]);
      };
    }
    function Fi() {}
    function ji(t) {
      return null == t
        ? Fi
        : function () {
            return this.querySelector(t);
          };
    }
    function Ui() {
      return [];
    }
    function Bi(t) {
      return new Array(t.length);
    }
    function Xi(t, e) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
    }
    Xi.prototype = {
      constructor: Xi,
      appendChild: function (t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function (t, e) {
        return this._parent.insertBefore(t, e);
      },
      querySelector: function (t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t);
      },
    };
    function Wi(t, e, n, r, i, a) {
      for (var o, u = 0, l = e.length, s = a.length; u < s; ++u)
        (o = e[u])
          ? ((o.__data__ = a[u]), (r[u] = o))
          : (n[u] = new Xi(t, a[u]));
      for (; u < l; ++u) (o = e[u]) && (i[u] = o);
    }
    function $i(t, e, n, r, i, a, o) {
      var u,
        l,
        s,
        c = {},
        f = e.length,
        h = a.length,
        d = new Array(f);
      for (u = 0; u < f; ++u)
        (l = e[u]) &&
          ((d[u] = s = "$" + o.call(l, l.__data__, u, e)),
          s in c ? (i[u] = l) : (c[s] = l));
      for (u = 0; u < h; ++u)
        (l = c[(s = "$" + o.call(t, a[u], u, a))])
          ? ((r[u] = l), (l.__data__ = a[u]), (c[s] = null))
          : (n[u] = new Xi(t, a[u]));
      for (u = 0; u < f; ++u) (l = e[u]) && c[d[u]] === l && (i[u] = l);
    }
    function Hi(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var Vi = "http://www.w3.org/1999/xhtml";
    const Yi = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: Vi,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
    function Zi(t) {
      var e = (t += ""),
        n = e.indexOf(":");
      return (
        n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        Yi.hasOwnProperty(e) ? { space: Yi[e], local: t } : t
      );
    }
    function Gi(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function Ji(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function Ki(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }
    function Qi(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }
    function ta(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }
    function ea(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, n);
      };
    }
    function na(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    }
    function ra(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function ia(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n);
      };
    }
    function aa(t, e, n) {
      return function () {
        var r = e.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, n);
      };
    }
    function oa(t) {
      return function () {
        delete this[t];
      };
    }
    function ua(t, e) {
      return function () {
        this[t] = e;
      };
    }
    function la(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : (this[t] = n);
      };
    }
    function sa(t) {
      return t.trim().split(/^|\s+/);
    }
    function ca(t) {
      return t.classList || new fa(t);
    }
    function fa(t) {
      (this._node = t), (this._names = sa(t.getAttribute("class") || ""));
    }
    function ha(t, e) {
      for (var n = ca(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
    }
    function da(t, e) {
      for (var n = ca(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
    }
    function pa(t) {
      return function () {
        ha(this, t);
      };
    }
    function va(t) {
      return function () {
        da(this, t);
      };
    }
    function ga(t, e) {
      return function () {
        (e.apply(this, arguments) ? ha : da)(this, t);
      };
    }
    function ya() {
      this.textContent = "";
    }
    function ma(t) {
      return function () {
        this.textContent = t;
      };
    }
    function ba(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
      };
    }
    function _a() {
      this.innerHTML = "";
    }
    function wa(t) {
      return function () {
        this.innerHTML = t;
      };
    }
    function xa(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.innerHTML = e ?? "";
      };
    }
    function Ma() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function Aa() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function ka(t) {
      return function () {
        var e = this.ownerDocument,
          n = this.namespaceURI;
        return n === Vi && e.documentElement.namespaceURI === Vi
          ? e.createElement(t)
          : e.createElementNS(n, t);
      };
    }
    function Na(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    }
    function Ca(t) {
      var e = Zi(t);
      return (e.local ? Na : ka)(e);
    }
    function Sa() {
      return null;
    }
    function Ea() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function Pa(t, e, n) {
      var r = na(t),
        i = r.CustomEvent;
      i
        ? (i = new i(e, n))
        : ((i = r.document.createEvent("Event")),
          n
            ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
            : i.initEvent(e, !1, !1)),
        t.dispatchEvent(i);
    }
    function La(t, e) {
      return function () {
        return Pa(this, t, e);
      };
    }
    function Ra(t, e) {
      return function () {
        return Pa(this, t, e.apply(this, arguments));
      };
    }
    fa.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var e = this._names.indexOf(t);
        e >= 0 &&
          (this._names.splice(e, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    var Ta = [null];
    function qa(t, e) {
      (this._groups = t), (this._parents = e);
    }
    function za() {
      return new qa([[document.documentElement]], Ta);
    }
    qa.prototype = za.prototype = {
      constructor: qa,
      select: function (t) {
        "function" != typeof t && (t = ji(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o, u = e[i], l = u.length, s = (r[i] = new Array(l)), c = 0;
            c < l;
            ++c
          )
            (a = u[c]) &&
              (o = t.call(a, a.__data__, c, u)) &&
              ("__data__" in a && (o.__data__ = a.__data__), (s[c] = o));
        return new qa(r, this._parents);
      },
      selectAll: function (t) {
        "function" != typeof t &&
          (t = (function (t) {
            return null == t
              ? Ui
              : function () {
                  return this.querySelectorAll(t);
                };
          })(t));
        for (
          var e = this._groups, n = e.length, r = [], i = [], a = 0;
          a < n;
          ++a
        )
          for (var o, u = e[a], l = u.length, s = 0; s < l; ++s)
            (o = u[s]) && (r.push(t.call(o, o.__data__, s, u)), i.push(o));
        return new qa(r, i);
      },
      filter: function (t) {
        "function" != typeof t && (t = Ri(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], u = o.length, l = (r[i] = []), s = 0;
            s < u;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
        return new qa(r, this._parents);
      },
      data: function (t, e) {
        if (!t)
          return (
            (d = new Array(this.size())),
            (s = -1),
            this.each(function (t) {
              d[++s] = t;
            }),
            d
          );
        var n = e ? $i : Wi,
          r = this._parents,
          i = this._groups;
        "function" != typeof t &&
          (t = (function (t) {
            return function () {
              return t;
            };
          })(t));
        for (
          var a = i.length,
            o = new Array(a),
            u = new Array(a),
            l = new Array(a),
            s = 0;
          s < a;
          ++s
        ) {
          var c = r[s],
            f = i[s],
            h = f.length,
            d = t.call(c, c && c.__data__, s, r),
            p = d.length,
            v = (u[s] = new Array(p)),
            g = (o[s] = new Array(p));
          n(c, f, v, g, (l[s] = new Array(h)), d, e);
          for (var y, m, b = 0, _ = 0; b < p; ++b)
            if ((y = v[b])) {
              for (b >= _ && (_ = b + 1); !(m = g[_]) && ++_ < p; );
              y._next = m || null;
            }
        }
        return ((o = new qa(o, r))._enter = u), (o._exit = l), o;
      },
      enter: function () {
        return new qa(this._enter || this._groups.map(Bi), this._parents);
      },
      exit: function () {
        return new qa(this._exit || this._groups.map(Bi), this._parents);
      },
      merge: function (t) {
        for (
          var e = this._groups,
            n = t._groups,
            r = e.length,
            i = n.length,
            a = Math.min(r, i),
            o = new Array(r),
            u = 0;
          u < a;
          ++u
        )
          for (
            var l,
              s = e[u],
              c = n[u],
              f = s.length,
              h = (o[u] = new Array(f)),
              d = 0;
            d < f;
            ++d
          )
            (l = s[d] || c[d]) && (h[d] = l);
        for (; u < r; ++u) o[u] = e[u];
        return new qa(o, this._parents);
      },
      order: function () {
        for (var t = this._groups, e = -1, n = t.length; ++e < n; )
          for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0; )
            (r = i[a]) &&
              (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o),
              (o = r));
        return this;
      },
      sort: function (t) {
        function e(e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n;
        }
        t || (t = Hi);
        for (
          var n = this._groups, r = n.length, i = new Array(r), a = 0;
          a < r;
          ++a
        ) {
          for (
            var o, u = n[a], l = u.length, s = (i[a] = new Array(l)), c = 0;
            c < l;
            ++c
          )
            (o = u[c]) && (s[c] = o);
          s.sort(e);
        }
        return new qa(i, this._parents).order();
      },
      call: function () {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function () {
        var t = new Array(this.size()),
          e = -1;
        return (
          this.each(function () {
            t[++e] = this;
          }),
          t
        );
      },
      node: function () {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
          for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
            var o = r[i];
            if (o) return o;
          }
        return null;
      },
      size: function () {
        var t = 0;
        return (
          this.each(function () {
            ++t;
          }),
          t
        );
      },
      empty: function () {
        return !this.node();
      },
      each: function (t) {
        for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
          for (var i, a = e[n], o = 0, u = a.length; o < u; ++o)
            (i = a[o]) && t.call(i, i.__data__, o, a);
        return this;
      },
      attr: function (t, e) {
        var n = Zi(t);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local
            ? r.getAttributeNS(n.space, n.local)
            : r.getAttribute(n);
        }
        return this.each(
          (null == e
            ? n.local
              ? Ji
              : Gi
            : "function" == typeof e
            ? n.local
              ? ea
              : ta
            : n.local
            ? Qi
            : Ki)(n, e)
        );
      },
      style: function (t, e, n) {
        var r;
        return arguments.length > 1
          ? this.each(
              (null == e ? ra : "function" == typeof e ? aa : ia)(t, e, n ?? "")
            )
          : na((r = this.node()))
              .getComputedStyle(r, null)
              .getPropertyValue(t);
      },
      property: function (t, e) {
        return arguments.length > 1
          ? this.each((null == e ? oa : "function" == typeof e ? la : ua)(t, e))
          : this.node()[t];
      },
      classed: function (t, e) {
        var n = sa(t + "");
        if (arguments.length < 2) {
          for (var r = ca(this.node()), i = -1, a = n.length; ++i < a; )
            if (!r.contains(n[i])) return !1;
          return !0;
        }
        return this.each(("function" == typeof e ? ga : e ? pa : va)(n, e));
      },
      text: function (t) {
        return arguments.length
          ? this.each(null == t ? ya : ("function" == typeof t ? ba : ma)(t))
          : this.node().textContent;
      },
      html: function (t) {
        return arguments.length
          ? this.each(null == t ? _a : ("function" == typeof t ? xa : wa)(t))
          : this.node().innerHTML;
      },
      raise: function () {
        return this.each(Ma);
      },
      lower: function () {
        return this.each(Aa);
      },
      append: function (t) {
        var e = "function" == typeof t ? t : Ca(t);
        return this.select(function () {
          return this.appendChild(e.apply(this, arguments));
        });
      },
      insert: function (t, e) {
        var n = "function" == typeof t ? t : Ca(t),
          r = null == e ? Sa : "function" == typeof e ? e : ji(e);
        return this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function () {
        return this.each(Ea);
      },
      datum: function (t) {
        return arguments.length
          ? this.property("__data__", t)
          : this.node().__data__;
      },
      on: function (t, e, n) {
        var r,
          i,
          a = (function (t) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var e = "",
                  n = t.indexOf(".");
                return (
                  n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  { type: t, name: e }
                );
              });
          })(t + ""),
          o = a.length;
        if (!(arguments.length < 2)) {
          for (u = e ? Oi : Di, null == n && (n = !1), r = 0; r < o; ++r)
            this.each(u(a[r], e, n));
          return this;
        }
        var u = this.node().__on;
        if (u)
          for (var l, s = 0, c = u.length; s < c; ++s)
            for (r = 0, l = u[s]; r < o; ++r)
              if ((i = a[r]).type === l.type && i.name === l.name)
                return l.value;
      },
      dispatch: function (t, e) {
        return this.each(("function" == typeof e ? Ra : La)(t, e));
      },
    };
    var Ia;
    function Da(t, e) {
      if (
        (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
          "e"
        )) < 0
      )
        return null;
      var n,
        r = t.slice(0, n);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
    }
    function Oa(t) {
      return (t = Da(Math.abs(t))) ? t[1] : NaN;
    }
    function Fa(t, e) {
      var n = Da(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    }
    const ja = {
      "": function (t, e) {
        t: for (
          var n, r = (t = t.toPrecision(e)).length, i = 1, a = -1;
          i < r;
          ++i
        )
          switch (t[i]) {
            case ".":
              a = n = i;
              break;
            case "0":
              0 === a && (a = i), (n = i);
              break;
            case "e":
              break t;
            default:
              a > 0 && (a = 0);
          }
        return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t;
      },
      "%": function (t, e) {
        return (100 * t).toFixed(e);
      },
      b: function (t) {
        return Math.round(t).toString(2);
      },
      c: function (t) {
        return t + "";
      },
      d: function (t) {
        return Math.round(t).toString(10);
      },
      e: function (t, e) {
        return t.toExponential(e);
      },
      f: function (t, e) {
        return t.toFixed(e);
      },
      g: function (t, e) {
        return t.toPrecision(e);
      },
      o: function (t) {
        return Math.round(t).toString(8);
      },
      p: function (t, e) {
        return Fa(100 * t, e);
      },
      r: Fa,
      s: function (t, e) {
        var n = Da(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1],
          a = i - (Ia = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
          ? r + new Array(a - o + 1).join("0")
          : a > 0
          ? r.slice(0, a) + "." + r.slice(a)
          : "0." +
            new Array(1 - a).join("0") +
            Da(t, Math.max(0, e + a - 1))[0];
      },
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    };
    var Ua =
      /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    function Ba(t) {
      return new Xa(t);
    }
    function Xa(t) {
      if (!(e = Ua.exec(t))) throw new Error("invalid format: " + t);
      var e,
        n = e[1] || " ",
        r = e[2] || ">",
        i = e[3] || "-",
        a = e[4] || "",
        o = !!e[5],
        u = e[6] && +e[6],
        l = !!e[7],
        s = e[8] && +e[8].slice(1),
        c = e[9] || "";
      "n" === c ? ((l = !0), (c = "g")) : ja[c] || (c = ""),
        (o || ("0" === n && "=" === r)) && ((o = !0), (n = "0"), (r = "=")),
        (this.fill = n),
        (this.align = r),
        (this.sign = i),
        (this.symbol = a),
        (this.zero = o),
        (this.width = u),
        (this.comma = l),
        (this.precision = s),
        (this.type = c);
    }
    Xa.prototype.toString = function () {
      return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (null == this.width ? "" : Math.max(1, 0 | this.width)) +
        (this.comma ? "," : "") +
        (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
        this.type
      );
    };
    var Wa,
      $a,
      Ha,
      Va = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function Ya(t) {
      return t;
    }
    function Za(t) {
      var e,
        n,
        r =
          t.grouping && t.thousands
            ? ((e = t.grouping),
              (n = t.thousands),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, u = e[0], l = 0;
                  i > 0 &&
                  u > 0 &&
                  (l + u + 1 > r && (u = Math.max(1, r - l)),
                  a.push(t.substring((i -= u), i + u)),
                  !((l += u + 1) > r));

                )
                  u = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              })
            : Ya,
        i = t.currency,
        a = t.decimal;
      function o(t) {
        var e = (t = Ba(t)).fill,
          n = t.align,
          o = t.sign,
          u = t.symbol,
          l = t.zero,
          s = t.width,
          c = t.comma,
          f = t.precision,
          h = t.type,
          d =
            "$" === u
              ? i[0]
              : "#" === u && /[boxX]/.test(h)
              ? "0" + h.toLowerCase()
              : "",
          p = "$" === u ? i[1] : /[%p]/.test(h) ? "%" : "",
          v = ja[h],
          g = !h || /[defgprs%]/.test(h);
        function y(t) {
          var i,
            u,
            y,
            m = d,
            b = p;
          if ("c" === h) (b = v(t) + b), (t = "");
          else {
            var _ = ((t = +t) < 0 || 1 / t < 0) && ((t *= -1), !0);
            if (((t = v(t, f)), _))
              for (i = -1, u = t.length, _ = !1; ++i < u; )
                if (
                  (48 < (y = t.charCodeAt(i)) && y < 58) ||
                  ("x" === h && 96 < y && y < 103) ||
                  ("X" === h && 64 < y && y < 71)
                ) {
                  _ = !0;
                  break;
                }
            if (
              ((m =
                (_ ? ("(" === o ? o : "-") : "-" === o || "(" === o ? "" : o) +
                m),
              (b =
                b +
                ("s" === h ? Va[8 + Ia / 3] : "") +
                (_ && "(" === o ? ")" : "")),
              g)
            )
              for (i = -1, u = t.length; ++i < u; )
                if (48 > (y = t.charCodeAt(i)) || y > 57) {
                  (b = (46 === y ? a + t.slice(i + 1) : t.slice(i)) + b),
                    (t = t.slice(0, i));
                  break;
                }
          }
          c && !l && (t = r(t, 1 / 0));
          var w = m.length + t.length + b.length,
            x = w < s ? new Array(s - w + 1).join(e) : "";
          switch (
            (c &&
              l &&
              ((t = r(x + t, x.length ? s - b.length : 1 / 0)), (x = "")),
            n)
          ) {
            case "<":
              return m + t + b + x;
            case "=":
              return m + x + t + b;
            case "^":
              return x.slice(0, (w = x.length >> 1)) + m + t + b + x.slice(w);
          }
          return x + m + t + b;
        }
        return (
          (f =
            null == f
              ? h
                ? 6
                : 12
              : /[gprs]/.test(h)
              ? Math.max(1, Math.min(21, f))
              : Math.max(0, Math.min(20, f))),
          (y.toString = function () {
            return t + "";
          }),
          y
        );
      }
      return {
        format: o,
        formatPrefix: function (t, e) {
          var n = o((((t = Ba(t)).type = "f"), t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(Oa(e) / 3))),
            i = Math.pow(10, -r),
            a = Va[8 + r / 3];
          return function (t) {
            return n(i * t) + a;
          };
        },
      };
    }
    !(function (t) {
      (Wa = Za(t)), ($a = Wa.format), (Ha = Wa.formatPrefix);
    })({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
    var Ga = { value: function () {} };
    function Ja() {
      for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in r)
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new Ka(r);
    }
    function Ka(t) {
      this._ = t;
    }
    function Qa(t, e) {
      for (var n, r = 0, i = t.length; r < i; ++r)
        if ((n = t[r]).name === e) return n.value;
    }
    function to(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === e) {
          (t[r] = Ga), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != n && t.push({ name: e, value: n }), t;
    }
    Ka.prototype = Ja.prototype = {
      constructor: Ka,
      on: function (t, e) {
        var n,
          r,
          i = this._,
          a =
            ((r = i),
            (t + "")
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var e = "",
                  n = t.indexOf(".");
                if (
                  (n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  t && !r.hasOwnProperty(t))
                )
                  throw new Error("unknown type: " + t);
                return { type: t, name: e };
              })),
          o = -1,
          u = a.length;
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e)
            throw new Error("invalid callback: " + e);
          for (; ++o < u; )
            if ((n = (t = a[o]).type)) i[n] = to(i[n], t.name, e);
            else if (null == e) for (n in i) i[n] = to(i[n], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((n = (t = a[o]).type) && (n = Qa(i[n], t.name))) return n;
      },
      copy: function () {
        var t = {},
          e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new Ka(t);
      },
      call: function (t, e) {
        if ((n = arguments.length - 2) > 0)
          for (var n, r, i = new Array(n), a = 0; a < n; ++a)
            i[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (a = 0, n = (r = this._[t]).length; a < n; ++a)
          r[a].value.apply(e, i);
      },
      apply: function (t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
          r[i].value.apply(e, n);
      },
    };
    const eo = Ja;
    function no(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var ro = (function (t) {
        return (
          1 === t.length &&
            (t = (function (t) {
              return function (e, n) {
                return no(t(e), n);
              };
            })(t)),
          {
            left: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var a = (r + i) >>> 1;
                t(e[a], n) < 0 ? (r = a + 1) : (i = a);
              }
              return r;
            },
            right: function (e, n, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                var a = (r + i) >>> 1;
                t(e[a], n) > 0 ? (i = a) : (r = a + 1);
              }
              return r;
            },
          }
        );
      })(no),
      io = ro.right;
    ro.left;
    const ao = io;
    var oo = Array.prototype;
    oo.slice, oo.map;
    var uo = Math.sqrt(50),
      lo = Math.sqrt(10),
      so = Math.sqrt(2);
    function co(t, e, n) {
      var r = fo(t, e, n);
      return (function (t, e, n) {
        (t = +t),
          (e = +e),
          (n =
            (i = arguments.length) < 2
              ? ((e = t), (t = 0), 1)
              : i < 3
              ? 1
              : +n);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((e - t) / n)),
            a = new Array(i);
          ++r < i;

        )
          a[r] = t + r * n;
        return a;
      })(Math.ceil(t / r) * r, Math.floor(e / r) * r + r / 2, r);
    }
    function fo(t, e, n) {
      var r = Math.abs(e - t) / Math.max(0, n),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
      return (
        a >= uo ? (i *= 10) : a >= lo ? (i *= 5) : a >= so && (i *= 2),
        e < t ? -i : i
      );
    }
    var ho = Array.prototype,
      po = ho.map,
      vo = ho.slice;
    function go(t) {
      return +t;
    }
    var yo = [0, 1];
    function mo(t, e) {
      return (e -= t = +t)
        ? function (n) {
            return (n - t) / e;
          }
        : (function (t) {
            return function () {
              return t;
            };
          })(e);
    }
    function bo(t, e, n, r) {
      var i = t[0],
        a = t[1],
        o = e[0],
        u = e[1];
      return (
        a < i ? ((i = n(a, i)), (o = r(u, o))) : ((i = n(i, a)), (o = r(o, u))),
        function (t) {
          return o(i(t));
        }
      );
    }
    function _o(t, e, n, r) {
      var i = Math.min(t.length, e.length) - 1,
        a = new Array(i),
        o = new Array(i),
        u = -1;
      for (
        t[i] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++u < i;

      )
        (a[u] = n(t[u], t[u + 1])), (o[u] = r(e[u], e[u + 1]));
      return function (e) {
        var n = ao(t, e, 1, i) - 1;
        return o[n](a[n](e));
      };
    }
    function wo(t, e, n) {
      var r,
        i = t[0],
        a = t[t.length - 1],
        o = fo(i, a, e ?? 10);
      switch ((n = Ba(n ?? ",f")).type) {
        case "s":
          var u = Math.max(Math.abs(i), Math.abs(a));
          return (
            null != n.precision ||
              isNaN(
                (r = (function (t, e) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(Oa(e) / 3))) -
                      Oa(Math.abs(t))
                  );
                })(o, u))
              ) ||
              (n.precision = r),
            Ha(n, u)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (r = (function (t, e) {
                return (
                  (t = Math.abs(t)),
                  (e = Math.abs(e) - t),
                  Math.max(0, Oa(e) - Oa(t)) + 1
                );
              })(o, Math.max(Math.abs(i), Math.abs(a))))
            ) ||
            (n.precision = r - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN(
              (r = (function (t) {
                return Math.max(0, -Oa(Math.abs(t)));
              })(o))
            ) ||
            (n.precision = r - 2 * ("%" === n.type));
      }
      return $a(n);
    }
    function xo() {
      var t = (function (t, e) {
        var n,
          r,
          i,
          a = yo,
          o = yo,
          u = ir,
          l = !1;
        function s() {
          return (
            (n = Math.min(a.length, o.length) > 2 ? _o : bo), (r = i = null), c
          );
        }
        function c(e) {
          return (
            r ||
            (r = n(
              a,
              o,
              l
                ? (function (t) {
                    return function (e, n) {
                      var r = t((e = +e), (n = +n));
                      return function (t) {
                        return t <= e ? 0 : t >= n ? 1 : r(t);
                      };
                    };
                  })(t)
                : t,
              u
            ))
          )(+e);
        }
        return (
          (c.invert = function (t) {
            return (
              i ||
              (i = n(
                o,
                a,
                mo,
                l
                  ? (function (t) {
                      return function (e, n) {
                        var r = t((e = +e), (n = +n));
                        return function (t) {
                          return t <= 0 ? e : t >= 1 ? n : r(t);
                        };
                      };
                    })(e)
                  : e
              ))
            )(+t);
          }),
          (c.domain = function (t) {
            return arguments.length ? ((a = po.call(t, go)), s()) : a.slice();
          }),
          (c.range = function (t) {
            return arguments.length ? ((o = vo.call(t)), s()) : o.slice();
          }),
          (c.rangeRound = function (t) {
            return (o = vo.call(t)), (u = ar), s();
          }),
          (c.clamp = function (t) {
            return arguments.length ? ((l = !!t), s()) : l;
          }),
          (c.interpolate = function (t) {
            return arguments.length ? ((u = t), s()) : u;
          }),
          s()
        );
      })(mo, Jt);
      return (
        (t.copy = function () {
          return (
            (e = t),
            xo()
              .domain(e.domain())
              .range(e.range())
              .interpolate(e.interpolate())
              .clamp(e.clamp())
          );
          var e;
        }),
        (function (t) {
          var e = t.domain;
          return (
            (t.ticks = function (t) {
              var n = e();
              return co(n[0], n[n.length - 1], t ?? 10);
            }),
            (t.tickFormat = function (t, n) {
              return wo(e(), t, n);
            }),
            (t.nice = function (n) {
              var r = e(),
                i = r.length - 1,
                a = n ?? 10,
                o = r[0],
                u = r[i],
                l = fo(o, u, a);
              return (
                l &&
                  ((l = fo(Math.floor(o / l) * l, Math.ceil(u / l) * l, a)),
                  (r[0] = Math.floor(o / l) * l),
                  (r[i] = Math.ceil(u / l) * l),
                  e(r)),
                t
              );
            }),
            t
          );
        })(t)
      );
    }
    function Mo(t) {
      return t.match(/.{6}/g).map(function (t) {
        return "#" + t;
      });
    }
    Mo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      Mo(
        "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
      ),
      Mo(
        "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
      ),
      Mo(
        "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
      );
    var Ao = Math.PI / 180,
      ko = 180 / Math.PI,
      No = -0.14861,
      Co = 1.78277,
      So = -0.29227,
      Eo = -0.90649,
      Po = 1.97294,
      Lo = Po * Eo,
      Ro = Po * Co,
      To = Co * So - Eo * No;
    function qo(t, e, n, r) {
      return 1 === arguments.length
        ? (function (t) {
            if (t instanceof zo) return new zo(t.h, t.s, t.l, t.opacity);
            t instanceof qe || (t = Re(t));
            var e = t.r / 255,
              n = t.g / 255,
              r = t.b / 255,
              i = (To * r + Lo * e - Ro * n) / (To + Lo - Ro),
              a = r - i,
              o = (Po * (n - i) - So * a) / Eo,
              u = Math.sqrt(o * o + a * a) / (Po * i * (1 - i)),
              l = u ? Math.atan2(o, a) * ko - 120 : NaN;
            return new zo(l < 0 ? l + 360 : l, u, i, t.opacity);
          })(t)
        : new zo(t, e, n, r ?? 1);
    }
    function zo(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function Io(t) {
      return (function e(n) {
        function r(e, r) {
          var i = t((e = qo(e)).h, (r = qo(r)).h),
            a = He(e.s, r.s),
            o = He(e.l, r.l),
            u = He(e.opacity, r.opacity);
          return function (t) {
            return (
              (e.h = i(t)),
              (e.s = a(t)),
              (e.l = o(Math.pow(t, n))),
              (e.opacity = u(t)),
              e + ""
            );
          };
        }
        return (n = +n), (r.gamma = e), r;
      })(1);
    }
    fe(
      zo,
      qo,
      he(de, {
        brighter: function (t) {
          return (
            (t = null == t ? ve : Math.pow(ve, t)),
            new zo(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? pe : Math.pow(pe, t)),
            new zo(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * Ao,
            e = +this.l,
            n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
            r = Math.cos(t),
            i = Math.sin(t);
          return new qe(
            255 * (e + n * (No * r + Co * i)),
            255 * (e + n * (So * r + Eo * i)),
            255 * (e + n * (Po * r)),
            this.opacity
          );
        },
      })
    );
    Io(function (t, e) {
      var n = e - t;
      return n
        ? We(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
        : Xe(isNaN(t) ? e : t);
    });
    var Do = Io(He);
    Do(qo(300, 0.5, 0), qo(-240, 0.5, 1));
    Do(qo(-100, 0.75, 0.35), qo(80, 1.5, 0.8)),
      Do(qo(260, 0.75, 0.35), qo(80, 1.5, 0.8)),
      qo();
    function Oo(t) {
      var e = t.length;
      return function (n) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
      };
    }
    Oo(
      Mo(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    );
    Oo(
      Mo(
        "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
      )
    ),
      Oo(
        Mo(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      Oo(
        Mo(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
    var Fo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      jo = function (t) {
        return t;
      },
      Uo = function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) e[n] = t[r - n - 1];
        return e;
      },
      Bo = function (t, e) {
        t.each(function () {
          for (
            var t,
              n = (function (t) {
                return "string" == typeof t
                  ? new qa(
                      [[document.querySelector(t)]],
                      [document.documentElement]
                    )
                  : new qa([[t]], Ta);
              })(this),
              r = n.text().split(/\s+/).reverse(),
              i = [],
              a = (n.attr("y"), parseFloat(n.attr("dy")) || 0),
              o = n
                .text(null)
                .append("tspan")
                .attr("x", 0)
                .attr("dy", a + "em");
            (t = r.pop());

          )
            i.push(t),
              o.text(i.join(" ")),
              o.node().getComputedTextLength() > e &&
                i.length > 1 &&
                (i.pop(),
                o.text(i.join(" ")),
                (i = [t]),
                (o = n
                  .append("tspan")
                  .attr("x", 0)
                  .attr("dy", 1.2 + a + "em")
                  .text(t)));
        });
      },
      Xo = {
        d3_drawShapes: function (t, e, n, r, i, a) {
          "rect" === t
            ? e.attr("height", n).attr("width", r)
            : "circle" === t
            ? e.attr("r", i)
            : "line" === t
            ? e.attr("x1", 0).attr("x2", r).attr("y1", 0).attr("y2", 0)
            : "path" === t && e.attr("d", a);
        },
        d3_addText: function (t, e, n, r, i) {
          e.append("text").attr("class", r + "label");
          var a = t
            .selectAll("g." + r + "cell text." + r + "label")
            .data(n)
            .text(jo);
          return (
            i && t.selectAll("g." + r + "cell text." + r + "label").call(Bo, i),
            a
          );
        },
        d3_calcType: function (t, e, n, r, i, a) {
          var o = t.invertExtent
              ? (function (t, e, n) {
                  var r = t.range().map(function (r) {
                    var i = t.invertExtent(r);
                    return e(i[0]) + " " + n + " " + e(i[1]);
                  });
                  return { data: t.range(), labels: r, feature: jo };
                })(t, i, a)
              : t.ticks
              ? (function (t, e, n) {
                  var r = [];
                  if (e.length > 1) r = e;
                  else
                    for (
                      var i = t.domain(),
                        a = (i[i.length - 1] - i[0]) / (e - 1),
                        o = 0;
                      o < e;
                      o++
                    )
                      r.push(i[0] + o * a);
                  var u = r.map(n);
                  return {
                    data: r,
                    labels: u,
                    feature: function (e) {
                      return t(e);
                    },
                  };
                })(t, n, i)
              : (function (t) {
                  return {
                    data: t.domain(),
                    labels: t.domain(),
                    feature: function (e) {
                      return t(e);
                    },
                  };
                })(t),
            u = (t.range && t.range()) || t.domain();
          return (
            (o.labels = (function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                e = arguments[1],
                n = arguments[2],
                r = arguments[3],
                i = arguments[4];
              if ("object" === (void 0 === e ? "undefined" : Fo(e))) {
                if (0 === e.length) return t;
                for (var a = e.length; a < t.length; a++) e.push(t[a]);
                return e;
              }
              if ("function" == typeof e) {
                for (var o = [], u = t.length, l = 0; l < u; l++)
                  o.push(
                    e({
                      i: l,
                      genLength: u,
                      generatedLabels: t,
                      domain: n,
                      range: r,
                      labelDelimiter: i,
                    })
                  );
                return o;
              }
              return t;
            })(o.labels, r, t.domain(), u, a)),
            e && ((o.labels = Uo(o.labels)), (o.data = Uo(o.data))),
            o
          );
        },
        d3_filterCells: function (t, e) {
          var n = t.data
              .map(function (e, n) {
                return { data: e, label: t.labels[n] };
              })
              .filter(e),
            r = n.map(function (t) {
              return t.data;
            }),
            i = n.map(function (t) {
              return t.label;
            });
          return (
            (t.data = t.data.filter(function (t) {
              return -1 !== r.indexOf(t);
            })),
            (t.labels = t.labels.filter(function (t) {
              return -1 !== i.indexOf(t);
            })),
            t
          );
        },
        d3_placement: function (t, e, n, r, i, a) {
          e.attr("transform", n),
            r.attr("transform", i),
            "horizontal" === t && r.style("text-anchor", a);
        },
        d3_addEvents: function (t, e) {
          t.on("mouseover.legend", function (t) {
            !(function (t, e, n) {
              t.call("cellover", n, e);
            })(e, t, this);
          })
            .on("mouseout.legend", function (t) {
              !(function (t, e, n) {
                t.call("cellout", n, e);
              })(e, t, this);
            })
            .on("click.legend", function (t) {
              !(function (t, e, n) {
                t.call("cellclick", n, e);
              })(e, t, this);
            });
        },
        d3_title: function (t, e, n, r) {
          if ("" !== e) {
            t
              .selectAll("text." + n + "legendTitle")
              .data([e])
              .enter()
              .append("text")
              .attr("class", n + "legendTitle"),
              t.selectAll("text." + n + "legendTitle").text(e),
              r && t.selectAll("text." + n + "legendTitle").call(Bo, r);
            var i = t.select("." + n + "legendCells"),
              a = t
                .select("." + n + "legendTitle")
                .nodes()
                .map(function (t) {
                  return t.getBBox().height;
                })[0],
              o = -i.nodes().map(function (t) {
                return t.getBBox().x;
              })[0];
            i.attr("transform", "translate(" + o + "," + a + ")");
          }
        },
        d3_defaultLocale: { format: $a, formatPrefix: Ha },
        d3_defaultFormatSpecifier: ".01f",
        d3_defaultDelimiter: "to",
      };
    function Wo() {
      var t = xo(),
        e = "rect",
        n = 15,
        r = 15,
        i = 10,
        a = 2,
        o = [5],
        u = void 0,
        l = [],
        s = "",
        c = !1,
        f = "",
        h = Xo.d3_defaultLocale,
        d = Xo.d3_defaultFormatSpecifier,
        p = 10,
        v = "middle",
        g = Xo.d3_defaultDelimiter,
        y = void 0,
        m = "vertical",
        b = !1,
        _ = void 0,
        w = void 0,
        x = eo("cellover", "cellout", "cellclick");
      function M(M) {
        var A = Xo.d3_calcType(t, b, o, l, h.format(d), g);
        M.selectAll("g")
          .data([t])
          .enter()
          .append("g")
          .attr("class", s + "legendCells"),
          u && Xo.d3_filterCells(A, u);
        var k = M.select("." + s + "legendCells")
            .selectAll("." + s + "cell")
            .data(A.data),
          N = k
            .enter()
            .append("g")
            .attr("class", s + "cell");
        N.append(e).attr("class", s + "swatch");
        var C = M.selectAll("g." + s + "cell " + e + "." + s + "swatch").data(
          A.data
        );
        Xo.d3_addEvents(N, x),
          k.exit().transition().style("opacity", 0).remove(),
          C.exit().transition().style("opacity", 0).remove(),
          (C = C.merge(C)),
          Xo.d3_drawShapes(e, C, r, n, i, _);
        var S = Xo.d3_addText(M, N, A.labels, s, y);
        k = N.merge(k);
        var E = S.nodes().map(function (t) {
            return t.getBBox();
          }),
          P = C.nodes().map(function (t) {
            return t.getBBox();
          });
        c
          ? C.attr("class", function (t) {
              return s + "swatch " + A.feature(t);
            })
          : "line" == e
          ? C.style("stroke", A.feature)
          : C.style("fill", A.feature);
        var L,
          R = void 0,
          T = void 0,
          q = "start" == v ? 0 : "middle" == v ? 0.5 : 1;
        "vertical" === m
          ? ((L = E.map(function (t, e) {
              return Math.max(t.height, P[e].height);
            })),
            (R = function (t, e) {
              var n = (function (t, e) {
                var n,
                  r = 0,
                  i = t.length,
                  a = -1;
                if (null == e) for (; ++a < i; ) (n = +t[a]) && (r += n);
                else for (; ++a < i; ) (n = +e(t[a], a, t)) && (r += n);
                return r;
              })(L.slice(0, e));
              return "translate(0, " + (n + e * a) + ")";
            }),
            (T = function (t, e) {
              return (
                "translate( " +
                (P[e].width + P[e].x + p) +
                ", " +
                (P[e].y + P[e].height / 2 + 5) +
                ")"
              );
            }))
          : "horizontal" === m &&
            ((R = function (t, e) {
              return "translate(" + e * (P[e].width + a) + ",0)";
            }),
            (T = function (t, e) {
              return (
                "translate(" +
                (P[e].width * q + P[e].x) +
                ",\n          " +
                (P[e].height + P[e].y + p + 8) +
                ")"
              );
            })),
          Xo.d3_placement(m, k, R, S, T, v),
          Xo.d3_title(M, f, s, w),
          k.transition().style("opacity", 1);
      }
      return (
        (M.scale = function (e) {
          return arguments.length ? ((t = e), M) : t;
        }),
        (M.cells = function (t) {
          return arguments.length
            ? ((t.length > 1 || t >= 2) && (o = t), M)
            : o;
        }),
        (M.cellFilter = function (t) {
          return arguments.length ? ((u = t), M) : u;
        }),
        (M.shape = function (t, n) {
          return arguments.length
            ? (("rect" == t ||
                "circle" == t ||
                "line" == t ||
                ("path" == t && "string" == typeof n)) &&
                ((e = t), (_ = n)),
              M)
            : e;
        }),
        (M.shapeWidth = function (t) {
          return arguments.length ? ((n = +t), M) : n;
        }),
        (M.shapeHeight = function (t) {
          return arguments.length ? ((r = +t), M) : r;
        }),
        (M.shapeRadius = function (t) {
          return arguments.length ? ((i = +t), M) : i;
        }),
        (M.shapePadding = function (t) {
          return arguments.length ? ((a = +t), M) : a;
        }),
        (M.labels = function (t) {
          return arguments.length ? ((l = t), M) : l;
        }),
        (M.labelAlign = function (t) {
          return arguments.length
            ? (("start" != t && "end" != t && "middle" != t) || (v = t), M)
            : v;
        }),
        (M.locale = function (t) {
          return arguments.length ? ((h = Za(t)), M) : h;
        }),
        (M.labelFormat = function (t) {
          return arguments.length ? ((d = Ba(t)), M) : M.locale().format(d);
        }),
        (M.labelOffset = function (t) {
          return arguments.length ? ((p = +t), M) : p;
        }),
        (M.labelDelimiter = function (t) {
          return arguments.length ? ((g = t), M) : g;
        }),
        (M.labelWrap = function (t) {
          return arguments.length ? ((y = t), M) : y;
        }),
        (M.useClass = function (t) {
          return arguments.length ? ((!0 !== t && !1 !== t) || (c = t), M) : c;
        }),
        (M.orient = function (t) {
          return arguments.length
            ? (("horizontal" != (t = t.toLowerCase()) && "vertical" != t) ||
                (m = t),
              M)
            : m;
        }),
        (M.ascending = function (t) {
          return arguments.length ? ((b = !!t), M) : b;
        }),
        (M.classPrefix = function (t) {
          return arguments.length ? ((s = t), M) : s;
        }),
        (M.title = function (t) {
          return arguments.length ? ((f = t), M) : f;
        }),
        (M.titleWidth = function (t) {
          return arguments.length ? ((w = t), M) : w;
        }),
        (M.textWrap = function (t) {
          return arguments.length ? ((textWrap = t), M) : textWrap;
        }),
        (M.on = function () {
          var t = x.on.apply(x, arguments);
          return t === x ? M : t;
        }),
        M
      );
    }
    function $o(t, e, n, r, i, a, o, u) {
      let l = {
        w: 600,
        h: 600,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        levels: 3,
        maxValue: 0,
        labelFactor: 1.325,
        wrapWidth: 60,
        opacityArea: 0.15,
        dotRadius: 5,
        opacityCircles: 0.15,
        strokeWidth: 2,
        roundStrokes: !0,
        color: Qn(yr),
        legendSide: "left",
        glow: 2,
        negatives: !0,
        axisColor: "#CDCDCD",
        backgroundColor: "#CDCDCD",
        negativeR: 0.81,
        independent: !0,
        axisFont: 2,
        scaleFont: 1,
        legendPad: 10,
        legendFont: 0.8,
        domainMax: null,
        labelScale: !0,
        labelFine: 1.2,
      };
      if (void 0 !== n) for (let t in n) void 0 !== n[t] && (l[t] = n[t]);
      let s = l.domainMax
          ? Math.max(
              l.domainMax,
              c(e, function (t) {
                return c(
                  t.map(function (t) {
                    return t.value;
                  })
                );
              })
            )
          : c(e, function (t) {
              return c(
                t.map(function (t) {
                  return t.value;
                })
              );
            }),
        h = Math.min(l.w, l.h),
        d = e[0].map(function (t, e) {
          return t.axis;
        }),
        p = d.length,
        v = Math.min(0.35 * h, "center" === l.legendSide ? 0.3 * h : 0.45 * h),
        g = jn(",.0f"),
        y = (2 * Math.PI) / p,
        m = [],
        b = [];
      if (l.independent)
        e.forEach(function (t) {
          t.forEach(function (t) {
            t.axis in b
              ? Math.abs(t.value) > b[t.axis] && (b[t.axis] = Math.abs(t.value))
              : (b[t.axis] = Math.abs(t.value));
          });
        }),
          d.map(function (t) {
            m.push(gr().range([0, v]).domain([0, b[t]]));
          }),
          (s = []),
          d.map(function (t) {
            s.push(b[t]);
          });
      else {
        let t = l.domainMax
          ? Math.max(
              l.domainMax,
              c(e, function (t) {
                return c(
                  t.map(function (t) {
                    return t.value;
                  })
                );
              })
            )
          : c(e, function (t) {
              return c(
                t.map(function (t) {
                  return t.value;
                })
              );
            });
        d.map(function (t) {
          m.push(gr().range([0, v]).domain([0, s]));
        }),
          (s = []),
          d.map(function (e) {
            s.push(t);
          });
      }
      mr(t).select("svg").remove();
      let _ = mr(t)
          .append("svg")
          .attr(
            "font-family",
            '"Open Sans", "Noto Sans JP", "Noto Sans CJK KR", sans-serif'
          )
          .attr("width", l.w)
          .attr("height", l.h + l.margin.bottom)
          .attr("class", "radar" + t),
        w =
          "center" === l.legendSide
            ? l.h / 2 - l.margin.top
            : l.h / 2 + l.margin.top,
        x = _.append("g").attr(
          "transform",
          "translate(" + l.w / 2 + "," + w + ")"
        ),
        M = x.append("defs").append("filter").attr("id", "glow"),
        A =
          (M.append("feGaussianBlur")
            .attr("stdDeviation", "".concat(l.glow))
            .attr("result", "coloredBlur"),
          M.append("feMerge")),
        k =
          (A.append("feMergeNode").attr("in", "coloredBlur"),
          A.append("feMergeNode").attr("in", "SourceGraphic"),
          x.append("g").attr("class", "axisWrapper"));
      l.independent
        ? d.forEach(function (t, e) {
            f(1, l.levels + 1)
              .reverse()
              .forEach(function (t, n) {
                k.append("text")
                  .attr("class", "axisLabel")
                  .attr("x", (t / l.levels) * v * Math.cos(y * e - Math.PI / 2))
                  .attr("y", (t / l.levels) * v * Math.sin(y * e - Math.PI / 2))
                  .attr("dy", "0.35em")
                  .attr("dy", "0.35em")
                  .style(
                    "font-size",
                    "".concat(l.labelScale ? l.scaleFont : 0, "px")
                  )
                  .style("font-weight", "900")
                  .style("z-index", 10)
                  .attr("fill", l.axisColor)
                  .text(g((s[e] * t) / l.levels));
              });
          })
        : k
            .selectAll(".axisLabel")
            .data(f(1, l.levels + 1).reverse())
            .enter()
            .append("text")
            .attr("class", "axisLabel")
            .attr("x", 4)
            .attr("y", function (t) {
              return (-t * v) / l.levels;
            })
            .attr("dy", "0.4em")
            .style("font-size", "".concat(l.labelScale ? l.scaleFont : 0, "px"))
            .style("font-weight", "900")
            .style("z-index", 10)
            .attr("fill", l.axisColor)
            .text(function (t) {
              return g((s[0] * t) / l.levels);
            });
      let N = 1;
      l.roundStrokes
        ? (N = 1)
        : 3 == p
        ? (N = 0.5)
        : 5 == p
        ? (N = 0.81)
        : 7 == p
        ? (N = 0.9)
        : 9 == p
        ? (N = 0.94)
        : 11 == p && (N = 0.96);
      let C = k
        .selectAll(".axis")
        .data(d)
        .enter()
        .append("g")
        .attr("class", "axis");
      C.append("line")
        .attr("x1", function (t, e) {
          return l.roundStrokes
            ? l.negatives
              ? m[e](-1 * s[e]) * Math.cos(y * e - Math.PI / 2)
              : 0
            : l.negatives
            ? m[e](s[e] * -N) * Math.cos(y * e - Math.PI / 2)
            : 0;
        })
        .attr("y1", function (t, e) {
          return l.roundStrokes
            ? l.negatives
              ? m[e](-1 * s[e]) * Math.sin(y * e - Math.PI / 2)
              : 0
            : l.negatives
            ? m[e](s[e] * -N) * Math.sin(y * e - Math.PI / 2)
            : 0;
        })
        .attr("x2", function (t, e) {
          return m[e](1 * s[e]) * Math.cos(y * e - Math.PI / 2);
        })
        .attr("y2", function (t, e) {
          return m[e](1 * s[e]) * Math.sin(y * e - Math.PI / 2);
        })
        .attr("class", "line")
        .style("stroke", function (t, e) {
          return l.axisColor;
        })
        .style("stroke-width", "2px"),
        C.append("text")
          .attr("class", "legend")
          .style("font-size", "".concat(l.axisFont, "px"))
          .style("font-weight", "549")
          .attr("text-anchor", "middle")
          .style("fill", "rgb(102, 102, 102)")
          .attr("dy", "1em")
          .attr("x", function (t, e) {
            return m[e](s[e] * l.labelFactor) * Math.cos(y * e - Math.PI / 2);
          })
          .attr("y", function (t, e) {
            return (
              m[e](s[e] * l.labelFactor) * Math.sin(y * e - Math.PI / 2) -
              l.labelFine
            );
          })
          .text(function (t) {
            return t;
          })
          .call(function (t, e) {
            t.each(function () {
              let t,
                n = mr(this),
                r = n.text().split(/\s+/).reverse(),
                i = [],
                a = 0,
                o = n.attr("y"),
                u = n.attr("x"),
                l = parseFloat(n.attr("dy")),
                s = n
                  .text(null)
                  .append("tspan")
                  .attr("x", u)
                  .attr("y", o)
                  .attr("dy", l + "em");
              for (; (t = r.pop()); )
                i.push(t),
                  s.text(i.join(" ")),
                  s.node().getComputedTextLength() > e &&
                    (i.pop(),
                    s.text(i.join(" ")),
                    (i = [t]),
                    (s = n
                      .append("tspan")
                      .attr("x", u)
                      .attr("y", o)
                      .attr("dy", 1.4 * ++a + l + "em")
                      .text(t)));
            });
          }, l.wrapWidth);
      let S = [];
      if (l.roundStrokes)
        k.selectAll(".levels")
          .data(f(1, l.levels + 1).reverse())
          .enter()
          .append("circle")
          .attr("class", "gridCircle")
          .attr("r", function (t, e) {
            return (v / l.levels) * t;
          })
          .style("fill", function (t, e) {
            return l.backgroundColor;
          })
          .style("stroke", function (t, e) {
            return l.axisColor;
          })
          .style("fill-opacity", l.opacityCircles)
          .style("filter", "url(#glow)");
      else {
        S = [];
        let t = k.selectAll(".axisLabel").nodes();
        const e = (t) => {
          let e = [];
          for (let n = 0; n < p; n++) {
            let r = t * Math.cos(y * n - (3 * Math.PI) / 2),
              i = t * Math.sin(y * n - (3 * Math.PI) / 2);
            e.push({ x: r, y: i });
          }
          return e;
        };
        (l.independent ? t.slice(0, t.length / p) : t).forEach(function (t) {
          let n = parseInt(t.getAttribute("y"), 10);
          S.push(e(n));
        }),
          k
            .selectAll(".gridCircle.level-polygon")
            .data(S)
            .enter()
            .append("polygon")
            .attr("class", "gridCircle level-polygon")
            .attr("points", function (t) {
              return t
                .map(function (t) {
                  return [t.x, t.y].join(",");
                })
                .join(" ");
            })
            .style("fill", function (t, e) {
              return l.backgroundColor;
            })
            .style("stroke", function (t, e) {
              return l.axisColor;
            })
            .style("fill-opacity", l.opacityCircles)
            .style("filter", "url(#glow)");
      }
      let E = zr()
        .angle(function (t, e) {
          return e * y;
        })
        .radius(function (t, e) {
          return m[e](
            l.negatives
              ? t.value < 0
                ? 0.8 * t.value
                : t.value
              : t.value < 0
              ? 0
              : t.value
          );
        });
      l.roundStrokes && E.curve(Xr);
      let P = x
        .selectAll(".radarWrapper")
        .data(e)
        .enter()
        .append("g")
        .attr("class", "radarWrapper")
        .attr("id", function (t, e) {
          return "v" + r[e].label.replace(/[^A-Z0-9]+/gi, "");
        });
      P.append("path")
        .attr("class", "radarArea")
        .attr("id", function (t, e) {
          return "v" + r[e].label.replace(/[^A-Z0-9]+/gi, "");
        })
        .attr("d", function (t, n) {
          return E(e[n]);
        })
        .style("fill", function (t, e) {
          return l.color(e);
        })
        .style("fill-opacity", l.opacityArea)
        .on("mouseover", function (t, e) {
          br(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", 0.1),
            mr(this).transition().duration(200).style("fill-opacity", 0.7);
        })
        .on("mouseout", function () {
          br(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", l.opacityArea);
        }),
        P.append("path")
          .attr("class", "radarStroke")
          .attr("d", function (t, n) {
            return E(e[n]);
          })
          .style("stroke-width", l.strokeWidth + "px")
          .style("stroke", function (t, e) {
            return l.color(e);
          })
          .style("fill", "none")
          .style("filter", "url(#glow)"),
        P.selectAll(".radarCircle")
          .data(function (t, e) {
            return t;
          })
          .enter()
          .append("circle")
          .attr("class", "radarCircle")
          .attr("r", l.dotRadius)
          .attr("cx", function (t, e) {
            return (
              m[e](
                l.negatives
                  ? t.value < 0
                    ? t.value * l.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.cos(y * e - Math.PI / 2)
            );
          })
          .attr("cy", function (t, e) {
            return (
              m[e](
                l.negatives
                  ? t.value < 0
                    ? t.value * l.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.sin(y * e - Math.PI / 2)
            );
          })
          .style("fill", function (t, e, n) {
            return l.color(n);
          })
          .style("fill-opacity", 1),
        x
          .selectAll(".radarCircleWrapper")
          .data(e)
          .enter()
          .append("g")
          .attr("class", "radarCircleWrapper")
          .attr("child_id", function (t, e) {
            return "v" + r[e].label.replace(/[^A-Z0-9]+/gi, "");
          })
          .selectAll(".radarInvisibleCircle")
          .data(function (t, e) {
            return t;
          })
          .enter()
          .append("circle")
          .attr("class", "radarInvisibleCircle")
          .attr("series_id", function (t, e) {
            return this.parentNode.getAttribute("child_id");
          })
          .attr("r", 3 * l.dotRadius)
          .attr("cx", function (t, e) {
            return (
              m[e](
                l.negatives
                  ? t.value < 0
                    ? t.value * l.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.cos(y * e - Math.PI / 2)
            );
          })
          .attr("cy", function (t, e) {
            return (
              m[e](
                l.negatives
                  ? t.value < 0
                    ? t.value * l.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.sin(y * e - Math.PI / 2)
            );
          })
          .style("fill", "none")
          .style("pointer-events", "all")
          .on("mouseover", function (t, e) {
            let n = parseFloat(mr(this).attr("cx")) - 10,
              r = parseFloat(mr(this).attr("cy")) - 10;
            br(".radarArea")
              .transition()
              .duration(200)
              .style("fill-opacity", 0.1),
              mr(".radarArea#" + this.parentNode.getAttribute("child_id"))
                .transition()
                .duration(200)
                .style("fill-opacity", 0.7);
            let i = { value: t.rendered };
            L.attr("x", n)
              .attr("y", r)
              .text(LookerCharts.Utils.textForCell(i))
              .transition()
              .duration(200)
              .style("pointer-events", "none")
              .style("opacity", 1);
          })
          .on("click", function (t, e) {
            LookerCharts.Utils.openDrillMenu({ links: t.links, event: st });
          })
          .on("mouseout", function () {
            L.transition().duration(200).style("opacity", 0),
              br(".radarArea")
                .transition()
                .duration(200)
                .style("fill-opacity", l.opacityArea);
          });
      let L = x.append("text").attr("class", "tooltip").style("opacity", 0),
        R = document.createElement("style");
      (R.type = "text/css"),
        (R.innerHTML =
          "g.radarWrapper.hidden { opacity: 0.0; } .legendCells .hidden { opacity: 0.2;text-align:center }");
      let T,
        q,
        z,
        I,
        D = Qn()
          .domain(r.map((t) => t.label))
          .range(r.map((t, e) => l.color(e)));
      (_ = mr("svg")),
        "left" === l.legendSide
          ? ((T = 20), (q = 10), (z = "vertical"), (I = l.legendPad + 0))
          : "right" === l.legendSide
          ? ((T = 1.25 * l.w),
            (q = 20),
            (z = "vertical"),
            (I = l.legendPad + 0))
          : "center" === l.legendSide
          ? ((q = window.innerHeight - 60),
            (z = "horizontal"),
            (I = l.legendPad + 50))
          : "none" === l.legendSide &&
            ((T = -100), (q = -150), (z = "vertical"), (I = l.legendPad + 70)),
        _.append("g")
          .attr("class", "legendOrdinal")
          .style("font-size", "".concat(l.legendFont, "px"))
          .style("fill", "rgb(102, 102, 102)");
      let O,
        F = Wo()
          .shape(
            "path",
            (function () {
              var t = Rr(Or),
                e = Rr(64),
                n = null;
              function r() {
                var r;
                if (
                  (n || (n = r = Lr()),
                  t.apply(this, arguments).draw(n, +e.apply(this, arguments)),
                  r)
                )
                  return (n = null), r + "" || null;
              }
              return (
                (r.type = function (e) {
                  return arguments.length
                    ? ((t = "function" == typeof e ? e : Rr(e)), r)
                    : t;
                }),
                (r.size = function (t) {
                  return arguments.length
                    ? ((e = "function" == typeof t ? t : Rr(+t)), r)
                    : e;
                }),
                (r.context = function (t) {
                  return arguments.length ? ((n = t ?? null), r) : n;
                }),
                r
              );
            })()
              .type(Or)
              .size(120)
          )
          .shapePadding(I)
          .scale(D)
          .orient(z)
          .on("cellclick", function (t) {
            let e = t.replace(/[^A-Z0-9]+/gi, "");
            br("#v".concat(e)).classed("hidden", function () {
              return !mr(this).classed("hidden");
            });
            const n = mr(this);
            n.classed("hidden", !n.classed("hidden")),
              mr("#v" + e).classed("hidden")
                ? (mr("#v".concat(e))
                    .style("opacity", "0")
                    .style("pointer-events", "none"),
                  br("[child_id=v".concat(e, "]")).style(
                    "pointer-events",
                    "none"
                  ),
                  br("[series_id=v".concat(e, "]")).style(
                    "pointer-events",
                    "none"
                  ))
                : (mr("#v".concat(e))
                    .style("opacity", "1")
                    .style("pointer-events", null),
                  br("[child_id=v".concat(e, "]")).style(
                    "pointer-events",
                    "all"
                  ),
                  br("[series_id=v".concat(e, "]")).style(
                    "pointer-events",
                    "all"
                  )),
              n.classed("hidden")
                ? mr(this).style("opacity", ".2")
                : mr(this).style("opacity", "1");
          });
      _.select(".legendOrdinal").call(F),
        "center" == l.legendSide
          ? ((O =
              window.innerWidth / 2 -
              mr(".legendCells").node().getBBox().width / 2 +
              l.margin.left),
            mr(".legendOrdinal").attr("transform", function (t) {
              return "translate(".concat(O, ",").concat(q, ")");
            }))
          : "right" == l.legendSide
          ? ((O =
              window.innerWidth -
              1.25 * mr(".legendCells").node().getBBox().width),
            mr(".legendOrdinal").attr("transform", function (t) {
              return "translate(".concat(O, ",").concat(q, ")");
            }))
          : mr(".legendOrdinal").attr("transform", function (t) {
              return "translate(".concat(T, ",").concat(q, ")");
            }),
        u();
    }
    const Ho = {
      levels: { type: "number", label: "Levels", default: 4, section: "Plot" },
      label_factor: {
        type: "number",
        label: "Axis Label Padding",
        default: 85,
        section: "Plot - Advanced",
        display: "range",
        order: 4,
      },
      label_fine: {
        type: "number",
        label: "Axis Label Positioning",
        default: 6,
        section: "Plot - Advanced",
        display: "range",
        order: 5,
      },
      levels: {
        type: "number",
        label: "Plot Levels",
        default: 3,
        section: "Plot",
      },
      domain_max: {
        type: "number",
        label: "Axis Max Override",
        section: "Plot",
      },
      rounded_strokes: {
        type: "string",
        label: "Rounded Strokes?",
        display: "select",
        values: [{ true: !0 }, { false: !1 }],
        default: !0,
        section: "Plot",
      },
      independent: {
        type: "string",
        label: "Normalize Axes?",
        display: "select",
        values: [{ true: !0 }, { false: !1 }],
        default: !1,
        section: "Plot",
      },
      labelScale: {
        type: "string",
        label: "Label Scale?",
        display: "select",
        values: [{ true: !0 }, { false: !1 }],
        default: !0,
        section: "Plot",
      },
      negatives: {
        type: "string",
        label: "Allow Negatives?",
        display: "select",
        values: [{ true: !0 }, { false: !1 }],
        default: !1,
        section: "Plot",
      },
      wrap_width: {
        type: "number",
        label: "Axis Label Wrapping",
        default: 100,
        section: "Plot - Advanced",
        order: 6,
      },
      opacity_area: {
        type: "number",
        label: "Area Darkness",
        display: "range",
        default: 15,
        section: "Series",
        order: 0,
      },
      dot_radius: {
        type: "number",
        label: "Point Radius",
        default: 30,
        display: "range",
        section: "Series",
        order: 1,
      },
      opacity_circles: {
        type: "number",
        label: "Background Darkness",
        display: "range",
        default: 15,
        section: "Plot - Advanced",
        order: 2,
      },
      backgroundColor: {
        type: "string",
        label: "Background Color",
        display: "color",
        section: "Plot - Advanced",
        default: "#CDCDCD",
        order: 1,
      },
      axisColor: {
        type: "string",
        label: "Axis Color",
        display: "color",
        section: "Plot - Advanced",
        default: "#CDCDCD",
        order: 0,
      },
      stroke_width: {
        type: "number",
        label: "Stroke Width",
        default: 15,
        display: "range",
        section: "Series",
        order: 2,
      },
      glow: {
        type: "number",
        label: "Glow Range",
        default: 2,
        display: "range",
        section: "Plot - Advanced",
      },
      axis_label_font: {
        type: "number",
        label: "Axis Label Font Size (px)",
        default: 12,
        section: "Plot - Advanced",
      },
      axis_scale_font: {
        type: "number",
        label: "Scale Font Size (px)",
        default: 12,
        section: "Plot - Advanced",
      },
      legend_font: {
        type: "number",
        label: "Legend Font Size (px)",
        default: 12,
        section: "Plot - Advanced",
      },
      legend_padding: {
        type: "number",
        label: "Legend Item Padding",
        default: 20,
        display: "range",
        section: "Plot - Advanced",
      },
      legend_side: {
        type: "string",
        label: "Legend",
        display: "select",
        values: [
          { none: "none" },
          { left: "left" },
          { right: "right" },
          { center: "center" },
        ],
        default: "left",
        section: "Plot",
      },
    };
    const Vo = {
      create: function (t, e) {
        t.innerHTML =
          '<div id=\'viz\' style=\'font-family: "Open Sans", "Noto Sans JP", "Noto Sans", "Noto Sans CJK KR", Helvetica, Arial, sans-serif;\'/>';
      },
      updateAsync: function (t, e, n, r, i, a) {
        if ((this.clearErrors(), t.length < 1))
          return (
            this.addError({ title: "No results.", message: "" }),
            mr("#vis").text("No Results"),
            void a()
          );
        const o = function (t, e) {
            let n = parseInt(t, 16) + e,
              r = n > 255 ? 255 : n;
            return (
              (r =
                r.toString(16).length > 1
                  ? r.toString(16)
                  : "0".concat(r.toString(16))),
              r
            );
          },
          u = (t, e) => (
            (t = t.indexOf("#") >= 0 ? t.substring(1, t.length) : t),
            (e = parseInt((255 * e) / 100)),
            "#"
              .concat(o(t.substring(0, 2), e))
              .concat(o(t.substring(2, 4), e))
              .concat(o(t.substring(4, 6), e))
          );
        let l = { top: 20, right: 20, bottom: 20, left: 20 },
          s = e.clientWidth,
          c = e.clientHeight;
        e.innerHTML = "";
        mr("#vis")
          .append("svg")
          .attr("width", s)
          .attr("height", c)
          .append("g")
          .attr("transform", "translate(" + l.left + "," + l.top + ")");
        let f = [
            "#4A80BC",
            "#615894",
            "#F0C733",
            "#D13452",
            "#E48522",
            "#B977A9",
            "#7bc739",
            "#92b3d7",
            "#e38597",
          ],
          h = [],
          d = [],
          p = [],
          v = [];
        try {
          if (r.pivots) {
            if (!(r.fields.measure_like.length % 2) && n.negatives)
              return (
                this.addError({
                  title: "Can't display negatives with symmetric axes.",
                  message:
                    "Negatives can only be plotted on odd number of axes.",
                }),
                void a()
              );
            if (r.fields.measure_like.length < 3)
              return (
                this.addError({
                  title: "Multiple measures only.",
                  message: "This chart requires at least 3 measures.",
                }),
                void a()
              );
            if (r.fields.dimensions.length > 0)
              return (
                this.addError({
                  title: "Single dimension only.",
                  message:
                    "This chart accepts only 1, pivoted or unpivoted dimension.",
                }),
                void a()
              );
            r.pivots.forEach(function (t) {
              v.push(t.key);
            }),
              r.fields.measure_like.forEach(function (t) {
                d.push({ name: t.name, label: t.label_short.trim() });
              }),
              v.forEach(function (e, n) {
                let r = [];
                d.forEach(function (n) {
                  r.push({
                    axis: n.label,
                    name: n.name,
                    value: t[0][n.name][e].value,
                    rendered: t[0][n.name][e].rendered
                      ? t[0][n.name][e].rendered
                      : t[0][n.name][e].value,
                    links: t[0][n.name][e].links,
                  });
                });
                let i = [];
                (p = []),
                  r.forEach(function (t) {
                    i.push(t);
                  }),
                  p.push({
                    label: e,
                    data: i,
                    color: n < 9 ? f[n] : u("#D13452", 1.7 * n),
                  }),
                  h.push(i);
              });
          } else {
            if (!(r.fields.measure_like.length % 2) && n.negatives)
              return (
                console.log("troof"),
                this.addError({
                  title: "Can't display negatives with symmetric axes.",
                  message:
                    "Negatives can only be plotted on odd number of axes.",
                }),
                void a()
              );
            if (r.fields.measure_like.length < 3)
              return (
                this.addError({
                  title: "Multiple measures only.",
                  message: "This chart requires at least 3 measures.",
                }),
                void a()
              );
            if (r.fields.dimension_like.length > 1)
              return (
                this.addError({
                  title: "Single dimension only.",
                  message:
                    "This chart accepts only 1, pivoted or unpivoted dimension.",
                }),
                void a()
              );
            let e = r.fields.dimensions;
            if (!e || 0 === e.length)
              return (
                this.addError({
                  title: "Dimension required.",
                  message: "This chart requires exactly 1 dimension.",
                }),
                void a()
              );
            let i = e[0].name;
            (d = []),
              r.fields.measure_like.forEach(function (t) {
                d.push({
                  name: t.name,
                  label: t.label_short ? t.label_short.trim() : t.label.trim(),
                });
              }),
              (p = []),
              t.forEach(function (t, e) {
                let n = [];
                d.forEach(function (e) {
                  n.push({
                    axis: e.label,
                    name: e.name,
                    value: t[e.name].value,
                    rendered: t[e.name].rendered
                      ? t[e.name].rendered
                      : t[e.name].value,
                    links: t[e.name].links,
                  });
                });
                let r = [];
                n.forEach(function (t) {
                  r.push(t);
                }),
                  p.push({
                    label: String(t[i].value),
                    data: r,
                    color: e < 9 ? f[e] : u("#D13452", 1.7 * e),
                  }),
                  h.push(r);
              }),
              (v = p.map((t) => t.label));
          }
          let e = Object.assign({}, Ho);
          p.forEach(function (t, n) {
            e["".concat(t.label, "_color")] = {
              type: "string",
              label: "".concat(t.label, " - Color"),
              display: "color",
              section: "Series",
              default: "".concat(t.color),
            };
          }),
            this.trigger("registerOptions", e);
          let i = Qn().range(
              p.map(function (t) {
                return n["".concat(t.label, "_color")] || t.color;
              })
            ),
            o = {};
          n.levels
            ? ((o = {
                w: s,
                h: c,
                margin: l,
                maxValue: 0.5,
                levels: n.levels,
                roundStrokes: n.rounded_strokes,
                color: i,
                axisFont: n.axis_label_font,
                scaleFont: n.axis_scale_font,
                labelFactor: (1.5 * n.label_factor) / 100,
                labelFine: 1.2 * n.label_fine,
                wrapWidth: n.wrap_width,
                opacityArea: n.opacity_area / 100,
                dotRadius: n.dot_radius / 5,
                opacityCircles: n.opacity_circles / 200,
                backgroundColor: n.backgroundColor,
                axisColor: n.axis_color,
                strokeWidth: n.stroke_width / 5,
                legendSide: n.legend_side,
                glow: n.glow / 20,
                negatives: n.negatives,
                axisColor: n.axisColor,
                negativeR: n.negative_r,
                independent: n.independent,
                legendPad: n.legend_padding,
                legendFont: n.legend_font,
                domainMax: n.domain_max,
                labelScale: n.labelScale,
              }),
              $o("#vis", h, o, p, 0, 0, 0, a))
            : a();
        } catch (t) {
          console.error("Spider Viz Rendering Error:", t),
            this.addError({
              title: "Visualization Error",
              message:
                "An unexpected error occurred while rendering the spider chart. Please check your data layout or options.",
            }),
            a();
        }
      },
    };
    return looker.plugins.visualizations.add(Vo), {};
  })()
);
