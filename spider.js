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
      let n;
      if (void 0 === e)
        for (const e of t)
          null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
      else {
        let r = -1;
        for (let i of t)
          null != (i = e(i, ++r, t)) &&
            (n < i || (void 0 === n && i >= i)) &&
            (n = i);
      }
      return n;
    }
    function e(t, e, n) {
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
    function n() {}
    function r(t) {
      return null == t
        ? n
        : function () {
            return this.querySelector(t);
          };
    }
    function i(t) {
      return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
    }
    function a() {
      return [];
    }
    function o(t) {
      return null == t
        ? a
        : function () {
            return this.querySelectorAll(t);
          };
    }
    function u(t) {
      return function () {
        return this.matches(t);
      };
    }
    function s(t) {
      return function (e) {
        return e.matches(t);
      };
    }
    var l = Array.prototype.find;
    function c() {
      return this.firstElementChild;
    }
    var f = Array.prototype.filter;
    function h() {
      return Array.from(this.children);
    }
    function d(t) {
      return new Array(t.length);
    }
    function p(t, e) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
    }
    function g(t, e, n, r, i, a) {
      for (var o, u = 0, s = e.length, l = a.length; u < l; ++u)
        (o = e[u])
          ? ((o.__data__ = a[u]), (r[u] = o))
          : (n[u] = new p(t, a[u]));
      for (; u < s; ++u) (o = e[u]) && (i[u] = o);
    }
    function y(t, e, n, r, i, a, o) {
      var u,
        s,
        l,
        c = new Map(),
        f = e.length,
        h = a.length,
        d = new Array(f);
      for (u = 0; u < f; ++u)
        (s = e[u]) &&
          ((d[u] = l = o.call(s, s.__data__, u, e) + ""),
          c.has(l) ? (i[u] = s) : c.set(l, s));
      for (u = 0; u < h; ++u)
        (l = o.call(t, a[u], u, a) + ""),
          (s = c.get(l))
            ? ((r[u] = s), (s.__data__ = a[u]), c.delete(l))
            : (n[u] = new p(t, a[u]));
      for (u = 0; u < f; ++u) (s = e[u]) && c.get(d[u]) === s && (i[u] = s);
    }
    function v(t) {
      return t.__data__;
    }
    function m(t) {
      return "object" == typeof t && "length" in t ? t : Array.from(t);
    }
    function b(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    p.prototype = {
      constructor: p,
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
    var _ = "http://www.w3.org/1999/xhtml";
    const w = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: _,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
    function x(t) {
      var e = (t += ""),
        n = e.indexOf(":");
      return (
        n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        w.hasOwnProperty(e) ? { space: w[e], local: t } : t
      );
    }
    function M(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function k(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function A(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }
    function N(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }
    function S(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }
    function E(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, n);
      };
    }
    function $(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    }
    function C(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function P(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n);
      };
    }
    function T(t, e, n) {
      return function () {
        var r = e.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, n);
      };
    }
    function L(t, e) {
      return (
        t.style.getPropertyValue(e) ||
        $(t).getComputedStyle(t, null).getPropertyValue(e)
      );
    }
    function q(t) {
      return function () {
        delete this[t];
      };
    }
    function j(t, e) {
      return function () {
        this[t] = e;
      };
    }
    function z(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : (this[t] = n);
      };
    }
    function O(t) {
      return t.trim().split(/^|\s+/);
    }
    function R(t) {
      return t.classList || new D(t);
    }
    function D(t) {
      (this._node = t), (this._names = O(t.getAttribute("class") || ""));
    }
    function I(t, e) {
      for (var n = R(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
    }
    function F(t, e) {
      for (var n = R(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
    }
    function B(t) {
      return function () {
        I(this, t);
      };
    }
    function H(t) {
      return function () {
        F(this, t);
      };
    }
    function X(t, e) {
      return function () {
        (e.apply(this, arguments) ? I : F)(this, t);
      };
    }
    function W() {
      this.textContent = "";
    }
    function V(t) {
      return function () {
        this.textContent = t;
      };
    }
    function Y(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
      };
    }
    function U() {
      this.innerHTML = "";
    }
    function Z(t) {
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
    function G() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function J() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function Q(t) {
      return function () {
        var e = this.ownerDocument,
          n = this.namespaceURI;
        return n === _ && e.documentElement.namespaceURI === _
          ? e.createElement(t)
          : e.createElementNS(n, t);
      };
    }
    function tt(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    }
    function et(t) {
      var e = x(t);
      return (e.local ? tt : Q)(e);
    }
    function nt() {
      return null;
    }
    function rt() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function it() {
      var t = this.cloneNode(!1),
        e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function at() {
      var t = this.cloneNode(!0),
        e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function ot(t) {
      return function () {
        var e = this.__on;
        if (e) {
          for (var n, r = 0, i = -1, a = e.length; r < a; ++r)
            (n = e[r]),
              (t.type && n.type !== t.type) || n.name !== t.name
                ? (e[++i] = n)
                : this.removeEventListener(n.type, n.listener, n.options);
          ++i ? (e.length = i) : delete this.__on;
        }
      };
    }
    function ut(t, e, n) {
      return function () {
        var r,
          i = this.__on,
          a = (function (t) {
            return function (e) {
              t.call(this, e, this.__data__);
            };
          })(e);
        if (i)
          for (var o = 0, u = i.length; o < u; ++o)
            if ((r = i[o]).type === t.type && r.name === t.name)
              return (
                this.removeEventListener(r.type, r.listener, r.options),
                this.addEventListener(
                  r.type,
                  (r.listener = a),
                  (r.options = n)
                ),
                void (r.value = e)
              );
        this.addEventListener(t.type, a, n),
          (r = {
            type: t.type,
            name: t.name,
            value: e,
            listener: a,
            options: n,
          }),
          i ? i.push(r) : (this.__on = [r]);
      };
    }
    function st(t, e, n) {
      var r = $(t),
        i = r.CustomEvent;
      "function" == typeof i
        ? (i = new i(e, n))
        : ((i = r.document.createEvent("Event")),
          n
            ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
            : i.initEvent(e, !1, !1)),
        t.dispatchEvent(i);
    }
    function lt(t, e) {
      return function () {
        return st(this, t, e);
      };
    }
    function ct(t, e) {
      return function () {
        return st(this, t, e.apply(this, arguments));
      };
    }
    D.prototype = {
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
    var ft = [null];
    function ht(t, e) {
      (this._groups = t), (this._parents = e);
    }
    function dt() {
      return new ht([[document.documentElement]], ft);
    }
    ht.prototype = dt.prototype = {
      constructor: ht,
      select: function (t) {
        "function" != typeof t && (t = r(t));
        for (
          var e = this._groups, n = e.length, i = new Array(n), a = 0;
          a < n;
          ++a
        )
          for (
            var o, u, s = e[a], l = s.length, c = (i[a] = new Array(l)), f = 0;
            f < l;
            ++f
          )
            (o = s[f]) &&
              (u = t.call(o, o.__data__, f, s)) &&
              ("__data__" in o && (u.__data__ = o.__data__), (c[f] = u));
        return new ht(i, this._parents);
      },
      selectAll: function (t) {
        t =
          "function" == typeof t
            ? (function (t) {
                return function () {
                  return i(t.apply(this, arguments));
                };
              })(t)
            : o(t);
        for (
          var e = this._groups, n = e.length, r = [], a = [], u = 0;
          u < n;
          ++u
        )
          for (var s, l = e[u], c = l.length, f = 0; f < c; ++f)
            (s = l[f]) && (r.push(t.call(s, s.__data__, f, l)), a.push(s));
        return new ht(r, a);
      },
      selectChild: function (t) {
        return this.select(
          null == t
            ? c
            : (function (t) {
                return function () {
                  return l.call(this.children, t);
                };
              })("function" == typeof t ? t : s(t))
        );
      },
      selectChildren: function (t) {
        return this.selectAll(
          null == t
            ? h
            : (function (t) {
                return function () {
                  return f.call(this.children, t);
                };
              })("function" == typeof t ? t : s(t))
        );
      },
      filter: function (t) {
        "function" != typeof t && (t = u(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], s = o.length, l = (r[i] = []), c = 0;
            c < s;
            ++c
          )
            (a = o[c]) && t.call(a, a.__data__, c, o) && l.push(a);
        return new ht(r, this._parents);
      },
      data: function (t, e) {
        if (!arguments.length) return Array.from(this, v);
        var n,
          r = e ? y : g,
          i = this._parents,
          a = this._groups;
        "function" != typeof t &&
          ((n = t),
          (t = function () {
            return n;
          }));
        for (
          var o = a.length,
            u = new Array(o),
            s = new Array(o),
            l = new Array(o),
            c = 0;
          c < o;
          ++c
        ) {
          var f = i[c],
            h = a[c],
            d = h.length,
            p = m(t.call(f, f && f.__data__, c, i)),
            b = p.length,
            _ = (s[c] = new Array(b)),
            w = (u[c] = new Array(b));
          r(f, h, _, w, (l[c] = new Array(d)), p, e);
          for (var x, M, k = 0, A = 0; k < b; ++k)
            if ((x = _[k])) {
              for (k >= A && (A = k + 1); !(M = w[A]) && ++A < b; );
              x._next = M || null;
            }
        }
        return ((u = new ht(u, i))._enter = s), (u._exit = l), u;
      },
      enter: function () {
        return new ht(this._enter || this._groups.map(d), this._parents);
      },
      exit: function () {
        return new ht(this._exit || this._groups.map(d), this._parents);
      },
      join: function (t, e, n) {
        var r = this.enter(),
          i = this,
          a = this.exit();
        return (
          "function" == typeof t
            ? (r = t(r)) && (r = r.selection())
            : (r = r.append(t + "")),
          null != e && (i = e(i)) && (i = i.selection()),
          null == n ? a.remove() : n(a),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function (t) {
        for (
          var e = t.selection ? t.selection() : t,
            n = this._groups,
            r = e._groups,
            i = n.length,
            a = r.length,
            o = Math.min(i, a),
            u = new Array(i),
            s = 0;
          s < o;
          ++s
        )
          for (
            var l,
              c = n[s],
              f = r[s],
              h = c.length,
              d = (u[s] = new Array(h)),
              p = 0;
            p < h;
            ++p
          )
            (l = c[p] || f[p]) && (d[p] = l);
        for (; s < i; ++s) u[s] = n[s];
        return new ht(u, this._parents);
      },
      selection: function () {
        return this;
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
        t || (t = b);
        for (
          var n = this._groups, r = n.length, i = new Array(r), a = 0;
          a < r;
          ++a
        ) {
          for (
            var o, u = n[a], s = u.length, l = (i[a] = new Array(s)), c = 0;
            c < s;
            ++c
          )
            (o = u[c]) && (l[c] = o);
          l.sort(e);
        }
        return new ht(i, this._parents).order();
      },
      call: function () {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function () {
        return Array.from(this);
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
        let t = 0;
        for (const e of this) ++t;
        return t;
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
        var n = x(t);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local
            ? r.getAttributeNS(n.space, n.local)
            : r.getAttribute(n);
        }
        return this.each(
          (null == e
            ? n.local
              ? k
              : M
            : "function" == typeof e
            ? n.local
              ? E
              : S
            : n.local
            ? N
            : A)(n, e)
        );
      },
      style: function (t, e, n) {
        return arguments.length > 1
          ? this.each(
              (null == e ? C : "function" == typeof e ? T : P)(t, e, n ?? "")
            )
          : L(this.node(), t);
      },
      property: function (t, e) {
        return arguments.length > 1
          ? this.each((null == e ? q : "function" == typeof e ? z : j)(t, e))
          : this.node()[t];
      },
      classed: function (t, e) {
        var n = O(t + "");
        if (arguments.length < 2) {
          for (var r = R(this.node()), i = -1, a = n.length; ++i < a; )
            if (!r.contains(n[i])) return !1;
          return !0;
        }
        return this.each(("function" == typeof e ? X : e ? B : H)(n, e));
      },
      text: function (t) {
        return arguments.length
          ? this.each(null == t ? W : ("function" == typeof t ? Y : V)(t))
          : this.node().textContent;
      },
      html: function (t) {
        return arguments.length
          ? this.each(null == t ? U : ("function" == typeof t ? K : Z)(t))
          : this.node().innerHTML;
      },
      raise: function () {
        return this.each(G);
      },
      lower: function () {
        return this.each(J);
      },
      append: function (t) {
        var e = "function" == typeof t ? t : et(t);
        return this.select(function () {
          return this.appendChild(e.apply(this, arguments));
        });
      },
      insert: function (t, e) {
        var n = "function" == typeof t ? t : et(t),
          i = null == e ? nt : "function" == typeof e ? e : r(e);
        return this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            i.apply(this, arguments) || null
          );
        });
      },
      remove: function () {
        return this.each(rt);
      },
      clone: function (t) {
        return this.select(t ? at : it);
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
          for (u = e ? ut : ot, r = 0; r < o; ++r) this.each(u(a[r], e, n));
          return this;
        }
        var u = this.node().__on;
        if (u)
          for (var s, l = 0, c = u.length; l < c; ++l)
            for (r = 0, s = u[l]; r < o; ++r)
              if ((i = a[r]).type === s.type && i.name === s.name)
                return s.value;
      },
      dispatch: function (t, e) {
        return this.each(("function" == typeof e ? ct : lt)(t, e));
      },
      [Symbol.iterator]: function* () {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
          for (var r, i = t[e], a = 0, o = i.length; a < o; ++a)
            (r = i[a]) && (yield r);
      },
    };
    const pt = dt;
    var gt = { value: () => {} };
    function yt() {
      for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new vt(r);
    }
    function vt(t) {
      this._ = t;
    }
    function mt(t, e) {
      for (var n, r = 0, i = t.length; r < i; ++r)
        if ((n = t[r]).name === e) return n.value;
    }
    function bt(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === e) {
          (t[r] = gt), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != n && t.push({ name: e, value: n }), t;
    }
    vt.prototype = yt.prototype = {
      constructor: vt,
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
            if ((n = (t = a[o]).type)) i[n] = bt(i[n], t.name, e);
            else if (null == e) for (n in i) i[n] = bt(i[n], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((n = (t = a[o]).type) && (n = mt(i[n], t.name))) return n;
      },
      copy: function () {
        var t = {},
          e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new vt(t);
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
    const _t = yt;
    var wt,
      xt,
      Mt = 0,
      kt = 0,
      At = 0,
      Nt = 0,
      St = 0,
      Et = 0,
      $t =
        "object" == typeof performance && performance.now ? performance : Date,
      Ct =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
    function Pt() {
      return St || (Ct(Tt), (St = $t.now() + Et));
    }
    function Tt() {
      St = 0;
    }
    function Lt() {
      this._call = this._time = this._next = null;
    }
    function qt(t, e, n) {
      var r = new Lt();
      return r.restart(t, e, n), r;
    }
    function jt() {
      (St = (Nt = $t.now()) + Et), (Mt = kt = 0);
      try {
        !(function () {
          Pt(), ++Mt;
          for (var t, e = wt; e; )
            (t = St - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
          --Mt;
        })();
      } finally {
        (Mt = 0),
          (function () {
            var t,
              e,
              n = wt,
              r = 1 / 0;
            for (; n; )
              n._call
                ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                : ((e = n._next),
                  (n._next = null),
                  (n = t ? (t._next = e) : (wt = e)));
            (xt = t), Ot(r);
          })(),
          (St = 0);
      }
    }
    function zt() {
      var t = $t.now(),
        e = t - Nt;
      e > 1e3 && ((Et -= e), (Nt = t));
    }
    function Ot(t) {
      Mt ||
        (kt && (kt = clearTimeout(kt)),
        t - St > 24
          ? (t < 1 / 0 && (kt = setTimeout(jt, t - $t.now() - Et)),
            At && (At = clearInterval(At)))
          : (At || ((Nt = $t.now()), (At = setInterval(zt, 1e3))),
            (Mt = 1),
            Ct(jt)));
    }
    function Rt(t, e, n) {
      var r = new Lt();
      return (
        (e = null == e ? 0 : +e),
        r.restart(
          (n) => {
            r.stop(), t(n + e);
          },
          e,
          n
        ),
        r
      );
    }
    Lt.prototype = qt.prototype = {
      constructor: Lt,
      restart: function (t, e, n) {
        if ("function" != typeof t)
          throw new TypeError("callback is not a function");
        (n = (null == n ? Pt() : +n) + (null == e ? 0 : +e)),
          this._next ||
            xt === this ||
            (xt ? (xt._next = this) : (wt = this), (xt = this)),
          (this._call = t),
          (this._time = n),
          Ot();
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), Ot());
      },
    };
    var Dt = _t("start", "end", "cancel", "interrupt"),
      It = [];
    function Ft(t, e, n, r, i, a) {
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
          var l, c, f, h;
          if (1 !== n.state) return s();
          for (l in i)
            if ((h = i[l]).name === n.name) {
              if (3 === h.state) return Rt(o);
              4 === h.state
                ? ((h.state = 6),
                  h.timer.stop(),
                  h.on.call("interrupt", t, t.__data__, h.index, h.group),
                  delete i[l])
                : +l < e &&
                  ((h.state = 6),
                  h.timer.stop(),
                  h.on.call("cancel", t, t.__data__, h.index, h.group),
                  delete i[l]);
            }
          if (
            (Rt(function () {
              3 === n.state &&
                ((n.state = 4), n.timer.restart(u, n.delay, n.time), u(a));
            }),
            (n.state = 2),
            n.on.call("start", t, t.__data__, n.index, n.group),
            2 === n.state)
          ) {
            for (
              n.state = 3, r = new Array((f = n.tween.length)), l = 0, c = -1;
              l < f;
              ++l
            )
              (h = n.tween[l].value.call(t, t.__data__, n.index, n.group)) &&
                (r[++c] = h);
            r.length = c + 1;
          }
        }
        function u(e) {
          for (
            var i =
                e < n.duration
                  ? n.ease.call(null, e / n.duration)
                  : (n.timer.restart(s), (n.state = 5), 1),
              a = -1,
              o = r.length;
            ++a < o;

          )
            r[a].call(t, i);
          5 === n.state &&
            (n.on.call("end", t, t.__data__, n.index, n.group), s());
        }
        function s() {
          for (var r in ((n.state = 6), n.timer.stop(), delete i[e], i)) return;
          delete t.__transition;
        }
        (i[e] = n), (n.timer = qt(a, 0, n.time));
      })(t, n, {
        name: e,
        index: r,
        group: i,
        on: Dt,
        tween: It,
        time: a.time,
        delay: a.delay,
        duration: a.duration,
        ease: a.ease,
        timer: null,
        state: 0,
      });
    }
    function Bt(t, e) {
      var n = Xt(t, e);
      if (n.state > 0) throw new Error("too late; already scheduled");
      return n;
    }
    function Ht(t, e) {
      var n = Xt(t, e);
      if (n.state > 3) throw new Error("too late; already running");
      return n;
    }
    function Xt(t, e) {
      var n = t.__transition;
      if (!n || !(n = n[e])) throw new Error("transition not found");
      return n;
    }
    function Wt(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return t * (1 - n) + e * n;
        }
      );
    }
    var Vt,
      Yt = 180 / Math.PI,
      Ut = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      };
    function Zt(t, e, n, r, i, a) {
      var o, u, s;
      return (
        (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
        (s = t * n + e * r) && ((n -= t * s), (r -= e * s)),
        (u = Math.sqrt(n * n + r * r)) && ((n /= u), (r /= u), (s /= u)),
        t * r < e * n && ((t = -t), (e = -e), (s = -s), (o = -o)),
        {
          translateX: i,
          translateY: a,
          rotate: Math.atan2(e, t) * Yt,
          skewX: Math.atan(s) * Yt,
          scaleX: o,
          scaleY: u,
        }
      );
    }
    function Kt(t, e, n, r) {
      function i(t) {
        return t.length ? t.pop() + " " : "";
      }
      return function (a, o) {
        var u = [],
          s = [];
        return (
          (a = t(a)),
          (o = t(o)),
          (function (t, r, i, a, o, u) {
            if (t !== i || r !== a) {
              var s = o.push("translate(", null, e, null, n);
              u.push({ i: s - 4, x: Wt(t, i) }, { i: s - 2, x: Wt(r, a) });
            } else (i || a) && o.push("translate(" + i + e + a + n);
          })(a.translateX, a.translateY, o.translateX, o.translateY, u, s),
          (function (t, e, n, a) {
            t !== e
              ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                a.push({
                  i: n.push(i(n) + "rotate(", null, r) - 2,
                  x: Wt(t, e),
                }))
              : e && n.push(i(n) + "rotate(" + e + r);
          })(a.rotate, o.rotate, u, s),
          (function (t, e, n, a) {
            t !== e
              ? a.push({ i: n.push(i(n) + "skewX(", null, r) - 2, x: Wt(t, e) })
              : e && n.push(i(n) + "skewX(" + e + r);
          })(a.skewX, o.skewX, u, s),
          (function (t, e, n, r, a, o) {
            if (t !== n || e !== r) {
              var u = a.push(i(a) + "scale(", null, ",", null, ")");
              o.push({ i: u - 4, x: Wt(t, n) }, { i: u - 2, x: Wt(e, r) });
            } else
              (1 === n && 1 === r) ||
                a.push(i(a) + "scale(" + n + "," + r + ")");
          })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, u, s),
          (a = o = null),
          function (t) {
            for (var e, n = -1, r = s.length; ++n < r; )
              u[(e = s[n]).i] = e.x(t);
            return u.join("");
          }
        );
      };
    }
    var Gt = Kt(
        function (t) {
          const e = new (
            "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
          )(t + "");
          return e.isIdentity ? Ut : Zt(e.a, e.b, e.c, e.d, e.e, e.f);
        },
        "px, ",
        "px)",
        "deg)"
      ),
      Jt = Kt(
        function (t) {
          return null == t
            ? Ut
            : (Vt ||
                (Vt = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )),
              Vt.setAttribute("transform", t),
              (t = Vt.transform.baseVal.consolidate())
                ? Zt((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                : Ut);
        },
        ", ",
        ")",
        ")"
      );
    function Qt(t, e) {
      var n, r;
      return function () {
        var i = Ht(this, t),
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
    function te(t, e, n) {
      var r, i;
      if ("function" != typeof n) throw new Error();
      return function () {
        var a = Ht(this, t),
          o = a.tween;
        if (o !== r) {
          i = (r = o).slice();
          for (var u = { name: e, value: n }, s = 0, l = i.length; s < l; ++s)
            if (i[s].name === e) {
              i[s] = u;
              break;
            }
          s === l && i.push(u);
        }
        a.tween = i;
      };
    }
    function ee(t, e, n) {
      var r = t._id;
      return (
        t.each(function () {
          var t = Ht(this, r);
          (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }),
        function (t) {
          return Xt(t, r).value[e];
        }
      );
    }
    function ne(t, e, n) {
      (t.prototype = e.prototype = n), (n.constructor = t);
    }
    function re(t, e) {
      var n = Object.create(t.prototype);
      for (var r in e) n[r] = e[r];
      return n;
    }
    function ie() {}
    var ae = 0.7,
      oe = 1 / ae,
      ue = "\\s*([+-]?\\d+)\\s*",
      se = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      ce = /^#([0-9a-f]{3,8})$/,
      fe = new RegExp(`^rgb\\(${ue},${ue},${ue}\\)$`),
      he = new RegExp(`^rgb\\(${le},${le},${le}\\)$`),
      de = new RegExp(`^rgba\\(${ue},${ue},${ue},${se}\\)$`),
      pe = new RegExp(`^rgba\\(${le},${le},${le},${se}\\)$`),
      ge = new RegExp(`^hsl\\(${se},${le},${le}\\)$`),
      ye = new RegExp(`^hsla\\(${se},${le},${le},${se}\\)$`),
      ve = {
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
    function me() {
      return this.rgb().formatHex();
    }
    function be() {
      return this.rgb().formatRgb();
    }
    function _e(t) {
      var e, n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = ce.exec(t))
          ? ((n = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === n
              ? we(e)
              : 3 === n
              ? new ke(
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  ((15 & e) << 4) | (15 & e),
                  1
                )
              : 8 === n
              ? xe(
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  (255 & e) / 255
                )
              : 4 === n
              ? xe(
                  ((e >> 12) & 15) | ((e >> 8) & 240),
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  (((15 & e) << 4) | (15 & e)) / 255
                )
              : null)
          : (e = fe.exec(t))
          ? new ke(e[1], e[2], e[3], 1)
          : (e = he.exec(t))
          ? new ke(
              (255 * e[1]) / 100,
              (255 * e[2]) / 100,
              (255 * e[3]) / 100,
              1
            )
          : (e = de.exec(t))
          ? xe(e[1], e[2], e[3], e[4])
          : (e = pe.exec(t))
          ? xe((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
          : (e = ge.exec(t))
          ? Ce(e[1], e[2] / 100, e[3] / 100, 1)
          : (e = ye.exec(t))
          ? Ce(e[1], e[2] / 100, e[3] / 100, e[4])
          : ve.hasOwnProperty(t)
          ? we(ve[t])
          : "transparent" === t
          ? new ke(NaN, NaN, NaN, 0)
          : null
      );
    }
    function we(t) {
      return new ke((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function xe(t, e, n, r) {
      return r <= 0 && (t = e = n = NaN), new ke(t, e, n, r);
    }
    function Me(t, e, n, r) {
      return 1 === arguments.length
        ? ((i = t) instanceof ie || (i = _e(i)),
          i ? new ke((i = i.rgb()).r, i.g, i.b, i.opacity) : new ke())
        : new ke(t, e, n, r ?? 1);
      var i;
    }
    function ke(t, e, n, r) {
      (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
    }
    function Ae() {
      return `#${$e(this.r)}${$e(this.g)}${$e(this.b)}`;
    }
    function Ne() {
      const t = Se(this.opacity);
      return `${1 === t ? "rgb(" : "rgba("}${Ee(this.r)}, ${Ee(this.g)}, ${Ee(
        this.b
      )}${1 === t ? ")" : `, ${t})`}`;
    }
    function Se(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function Ee(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function $e(t) {
      return ((t = Ee(t)) < 16 ? "0" : "") + t.toString(16);
    }
    function Ce(t, e, n, r) {
      return (
        r <= 0
          ? (t = e = n = NaN)
          : n <= 0 || n >= 1
          ? (t = e = NaN)
          : e <= 0 && (t = NaN),
        new Te(t, e, n, r)
      );
    }
    function Pe(t) {
      if (t instanceof Te) return new Te(t.h, t.s, t.l, t.opacity);
      if ((t instanceof ie || (t = _e(t)), !t)) return new Te();
      if (t instanceof Te) return t;
      var e = (t = t.rgb()).r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = Math.min(e, n, r),
        a = Math.max(e, n, r),
        o = NaN,
        u = a - i,
        s = (a + i) / 2;
      return (
        u
          ? ((o =
              e === a
                ? (n - r) / u + 6 * (n < r)
                : n === a
                ? (r - e) / u + 2
                : (e - n) / u + 4),
            (u /= s < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (u = s > 0 && s < 1 ? 0 : o),
        new Te(o, u, s, t.opacity)
      );
    }
    function Te(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function Le(t) {
      return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function qe(t) {
      return Math.max(0, Math.min(1, t || 0));
    }
    function je(t, e, n) {
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
    function ze(t, e, n, r, i) {
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
    ne(ie, _e, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: me,
      formatHex: me,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return Pe(this).formatHsl();
      },
      formatRgb: be,
      toString: be,
    }),
      ne(
        ke,
        Me,
        re(ie, {
          brighter(t) {
            return (
              (t = null == t ? oe : Math.pow(oe, t)),
              new ke(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? ae : Math.pow(ae, t)),
              new ke(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new ke(Ee(this.r), Ee(this.g), Ee(this.b), Se(this.opacity));
          },
          displayable() {
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
          hex: Ae,
          formatHex: Ae,
          formatHex8: function () {
            return `#${$e(this.r)}${$e(this.g)}${$e(this.b)}${$e(
              255 * (isNaN(this.opacity) ? 1 : this.opacity)
            )}`;
          },
          formatRgb: Ne,
          toString: Ne,
        })
      ),
      ne(
        Te,
        function (t, e, n, r) {
          return 1 === arguments.length ? Pe(t) : new Te(t, e, n, r ?? 1);
        },
        re(ie, {
          brighter(t) {
            return (
              (t = null == t ? oe : Math.pow(oe, t)),
              new Te(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? ae : Math.pow(ae, t)),
              new Te(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb() {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * e,
              i = 2 * n - r;
            return new ke(
              je(t >= 240 ? t - 240 : t + 120, i, r),
              je(t, i, r),
              je(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          clamp() {
            return new Te(Le(this.h), qe(this.s), qe(this.l), Se(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            const t = Se(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${Le(this.h)}, ${
              100 * qe(this.s)
            }%, ${100 * qe(this.l)}%${1 === t ? ")" : `, ${t})`}`;
          },
        })
      );
    const Oe = (t) => () => t;
    function Re(t, e) {
      return function (n) {
        return t + n * e;
      };
    }
    function De(t) {
      return 1 === (t = +t)
        ? Ie
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
              : Oe(isNaN(e) ? n : e);
          };
    }
    function Ie(t, e) {
      var n = e - t;
      return n ? Re(t, n) : Oe(isNaN(t) ? e : t);
    }
    const Fe = (function t(e) {
      var n = De(e);
      function r(t, e) {
        var r = n((t = Me(t)).r, (e = Me(e)).r),
          i = n(t.g, e.g),
          a = n(t.b, e.b),
          o = Ie(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)), (t.g = i(e)), (t.b = a(e)), (t.opacity = o(e)), t + ""
          );
        };
      }
      return (r.gamma = t), r;
    })(1);
    function Be(t) {
      return function (e) {
        var n,
          r,
          i = e.length,
          a = new Array(i),
          o = new Array(i),
          u = new Array(i);
        for (n = 0; n < i; ++n)
          (r = Me(e[n])),
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
    Be(function (t) {
      var e = t.length - 1;
      return function (n) {
        var r =
            n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
          i = t[r],
          a = t[r + 1],
          o = r > 0 ? t[r - 1] : 2 * i - a,
          u = r < e - 1 ? t[r + 2] : 2 * a - i;
        return ze((n - r / e) * e, o, i, a, u);
      };
    }),
      Be(function (t) {
        var e = t.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
            i = t[(r + e - 1) % e],
            a = t[r % e],
            o = t[(r + 1) % e],
            u = t[(r + 2) % e];
          return ze((n - r / e) * e, i, a, o, u);
        };
      });
    var He = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Xe = new RegExp(He.source, "g");
    function We(t, e) {
      var n,
        r,
        i,
        a = (He.lastIndex = Xe.lastIndex = 0),
        o = -1,
        u = [],
        s = [];
      for (t += "", e += ""; (n = He.exec(t)) && (r = Xe.exec(e)); )
        (i = r.index) > a &&
          ((i = e.slice(a, i)), u[o] ? (u[o] += i) : (u[++o] = i)),
          (n = n[0]) === (r = r[0])
            ? u[o]
              ? (u[o] += r)
              : (u[++o] = r)
            : ((u[++o] = null), s.push({ i: o, x: Wt(n, r) })),
          (a = Xe.lastIndex);
      return (
        a < e.length && ((i = e.slice(a)), u[o] ? (u[o] += i) : (u[++o] = i)),
        u.length < 2
          ? s[0]
            ? (function (t) {
                return function (e) {
                  return t(e) + "";
                };
              })(s[0].x)
            : (function (t) {
                return function () {
                  return t;
                };
              })(e)
          : ((e = s.length),
            function (t) {
              for (var n, r = 0; r < e; ++r) u[(n = s[r]).i] = n.x(t);
              return u.join("");
            })
      );
    }
    function Ve(t, e) {
      var n;
      return (
        "number" == typeof e
          ? Wt
          : e instanceof _e
          ? Fe
          : (n = _e(e))
          ? ((e = n), Fe)
          : We
      )(t, e);
    }
    function Ye(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function Ue(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function Ze(t, e, n) {
      var r,
        i,
        a = n + "";
      return function () {
        var o = this.getAttribute(t);
        return o === a ? null : o === r ? i : (i = e((r = o), n));
      };
    }
    function Ke(t, e, n) {
      var r,
        i,
        a = n + "";
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === a ? null : o === r ? i : (i = e((r = o), n));
      };
    }
    function Ge(t, e, n) {
      var r, i, a;
      return function () {
        var o,
          u,
          s = n(this);
        if (null != s)
          return (o = this.getAttribute(t)) === (u = s + "")
            ? null
            : o === r && u === i
            ? a
            : ((i = u), (a = e((r = o), s)));
        this.removeAttribute(t);
      };
    }
    function Je(t, e, n) {
      var r, i, a;
      return function () {
        var o,
          u,
          s = n(this);
        if (null != s)
          return (o = this.getAttributeNS(t.space, t.local)) === (u = s + "")
            ? null
            : o === r && u === i
            ? a
            : ((i = u), (a = e((r = o), s)));
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function Qe(t, e) {
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
    function tn(t, e) {
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
    function en(t, e) {
      return function () {
        Bt(this, t).delay = +e.apply(this, arguments);
      };
    }
    function nn(t, e) {
      return (
        (e = +e),
        function () {
          Bt(this, t).delay = e;
        }
      );
    }
    function rn(t, e) {
      return function () {
        Ht(this, t).duration = +e.apply(this, arguments);
      };
    }
    function an(t, e) {
      return (
        (e = +e),
        function () {
          Ht(this, t).duration = e;
        }
      );
    }
    var on = pt.prototype.constructor;
    function un(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    var sn = 0;
    function ln(t, e, n, r) {
      (this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
    }
    function cn() {
      return ++sn;
    }
    var fn = pt.prototype;
    ln.prototype = function (t) {
      return pt().transition(t);
    }.prototype = {
      constructor: ln,
      select: function (t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = r(t));
        for (
          var i = this._groups, a = i.length, o = new Array(a), u = 0;
          u < a;
          ++u
        )
          for (
            var s, l, c = i[u], f = c.length, h = (o[u] = new Array(f)), d = 0;
            d < f;
            ++d
          )
            (s = c[d]) &&
              (l = t.call(s, s.__data__, d, c)) &&
              ("__data__" in s && (l.__data__ = s.__data__),
              (h[d] = l),
              Ft(h[d], e, n, d, h, Xt(s, n)));
        return new ln(o, this._parents, e, n);
      },
      selectAll: function (t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = o(t));
        for (
          var r = this._groups, i = r.length, a = [], u = [], s = 0;
          s < i;
          ++s
        )
          for (var l, c = r[s], f = c.length, h = 0; h < f; ++h)
            if ((l = c[h])) {
              for (
                var d,
                  p = t.call(l, l.__data__, h, c),
                  g = Xt(l, n),
                  y = 0,
                  v = p.length;
                y < v;
                ++y
              )
                (d = p[y]) && Ft(d, e, n, y, p, g);
              a.push(p), u.push(l);
            }
        return new ln(a, u, e, n);
      },
      selectChild: fn.selectChild,
      selectChildren: fn.selectChildren,
      filter: function (t) {
        "function" != typeof t && (t = u(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], s = o.length, l = (r[i] = []), c = 0;
            c < s;
            ++c
          )
            (a = o[c]) && t.call(a, a.__data__, c, o) && l.push(a);
        return new ln(r, this._parents, this._name, this._id);
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
            var s,
              l = e[u],
              c = n[u],
              f = l.length,
              h = (o[u] = new Array(f)),
              d = 0;
            d < f;
            ++d
          )
            (s = l[d] || c[d]) && (h[d] = s);
        for (; u < r; ++u) o[u] = e[u];
        return new ln(o, this._parents, this._name, this._id);
      },
      selection: function () {
        return new on(this._groups, this._parents);
      },
      transition: function () {
        for (
          var t = this._name,
            e = this._id,
            n = cn(),
            r = this._groups,
            i = r.length,
            a = 0;
          a < i;
          ++a
        )
          for (var o, u = r[a], s = u.length, l = 0; l < s; ++l)
            if ((o = u[l])) {
              var c = Xt(o, e);
              Ft(o, t, n, l, u, {
                time: c.time + c.delay + c.duration,
                delay: 0,
                duration: c.duration,
                ease: c.ease,
              });
            }
        return new ln(r, this._parents, t, n);
      },
      call: fn.call,
      nodes: fn.nodes,
      node: fn.node,
      size: fn.size,
      empty: fn.empty,
      each: fn.each,
      on: function (t, e) {
        var n = this._id;
        return arguments.length < 2
          ? Xt(this.node(), n).on.on(t)
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
                    ? Bt
                    : Ht;
                return function () {
                  var o = a(this, t),
                    u = o.on;
                  u !== r && (i = (r = u).copy()).on(e, n), (o.on = i);
                };
              })(n, t, e)
            );
      },
      attr: function (t, e) {
        var n = x(t),
          r = "transform" === n ? Jt : Ve;
        return this.attrTween(
          t,
          "function" == typeof e
            ? (n.local ? Je : Ge)(n, r, ee(this, "attr." + t, e))
            : null == e
            ? (n.local ? Ue : Ye)(n)
            : (n.local ? Ke : Ze)(n, r, e)
        );
      },
      attrTween: function (t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error();
        var r = x(t);
        return this.tween(n, (r.local ? Qe : tn)(r, e));
      },
      style: function (t, e, n) {
        var r = "transform" == (t += "") ? Gt : Ve;
        return null == e
          ? this.styleTween(
              t,
              (function (t, e) {
                var n, r, i;
                return function () {
                  var a = L(this, t),
                    o = (this.style.removeProperty(t), L(this, t));
                  return a === o
                    ? null
                    : a === n && o === r
                    ? i
                    : (i = e((n = a), (r = o)));
                };
              })(t, r)
            ).on("end.style." + t, un(t))
          : "function" == typeof e
          ? this.styleTween(
              t,
              (function (t, e, n) {
                var r, i, a;
                return function () {
                  var o = L(this, t),
                    u = n(this),
                    s = u + "";
                  return (
                    null == u &&
                      (this.style.removeProperty(t), (s = u = L(this, t))),
                    o === s
                      ? null
                      : o === r && s === i
                      ? a
                      : ((i = s), (a = e((r = o), u)))
                  );
                };
              })(t, r, ee(this, "style." + t, e))
            ).each(
              (function (t, e) {
                var n,
                  r,
                  i,
                  a,
                  o = "style." + e,
                  u = "end." + o;
                return function () {
                  var s = Ht(this, t),
                    l = s.on,
                    c = null == s.value[o] ? a || (a = un(e)) : void 0;
                  (l === n && i === c) || (r = (n = l).copy()).on(u, (i = c)),
                    (s.on = r);
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
                  var o = L(this, t);
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
              })(ee(this, "text", t))
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
            var r, i = Xt(this.node(), n).tween, a = 0, o = i.length;
            a < o;
            ++a
          )
            if ((r = i[a]).name === t) return r.value;
          return null;
        }
        return this.each((null == e ? Qt : te)(n, t, e));
      },
      delay: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" == typeof t ? en : nn)(e, t))
          : Xt(this.node(), e).delay;
      },
      duration: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" == typeof t ? rn : an)(e, t))
          : Xt(this.node(), e).duration;
      },
      ease: function (t) {
        var e = this._id;
        return arguments.length
          ? this.each(
              (function (t, e) {
                if ("function" != typeof e) throw new Error();
                return function () {
                  Ht(this, t).ease = e;
                };
              })(e, t)
            )
          : Xt(this.node(), e).ease;
      },
      easeVarying: function (t) {
        if ("function" != typeof t) throw new Error();
        return this.each(
          (function (t, e) {
            return function () {
              var n = e.apply(this, arguments);
              if ("function" != typeof n) throw new Error();
              Ht(this, t).ease = n;
            };
          })(this._id, t)
        );
      },
      end: function () {
        var t,
          e,
          n = this,
          r = n._id,
          i = n.size();
        return new Promise(function (a, o) {
          var u = { value: o },
            s = {
              value: function () {
                0 === --i && a();
              },
            };
          n.each(function () {
            var n = Ht(this, r),
              i = n.on;
            i !== t &&
              ((e = (t = i).copy())._.cancel.push(u),
              e._.interrupt.push(u),
              e._.end.push(s)),
              (n.on = e);
          }),
            0 === i && a();
        });
      },
      [Symbol.iterator]: fn[Symbol.iterator],
    };
    var hn = {
      time: null,
      delay: 0,
      duration: 250,
      ease: function (t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      },
    };
    function dn(t, e) {
      for (var n; !(n = t.__transition) || !(n = n[e]); )
        if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
      return n;
    }
    (pt.prototype.interrupt = function (t) {
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
      (pt.prototype.transition = function (t) {
        var e, n;
        t instanceof ln
          ? ((e = t._id), (t = t._name))
          : ((e = cn()),
            ((n = hn).time = Pt()),
            (t = null == t ? null : t + ""));
        for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
          for (var o, u = r[a], s = u.length, l = 0; l < s; ++l)
            (o = u[l]) && Ft(o, t, e, l, u, n || dn(o, e));
        return new ln(r, this._parents, t, e);
      });
    const { abs: pn, max: gn, min: yn } = Math;
    function vn(t) {
      return [+t[0], +t[1]];
    }
    function mn(t) {
      return [vn(t[0]), vn(t[1])];
    }
    ["w", "e"].map(bn),
      ["n", "s"].map(bn),
      ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(bn);
    function bn(t) {
      return { type: t };
    }
    function _n(t, e) {
      if (!isFinite(t) || 0 === t) return null;
      var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"),
        r = t.slice(0, n);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
    }
    function wn(t) {
      return (t = _n(Math.abs(t))) ? t[1] : NaN;
    }
    var xn,
      Mn =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function kn(t) {
      if (!(e = Mn.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new An({
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
    function An(t) {
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
    function Nn(t, e) {
      var n = _n(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    }
    (kn.prototype = An.prototype),
      (An.prototype.toString = function () {
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
    const Sn = {
      "%": (t, e) => (100 * t).toFixed(e),
      b: (t) => Math.round(t).toString(2),
      c: (t) => t + "",
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString("en").replace(/,/g, "")
          : t.toString(10);
      },
      e: (t, e) => t.toExponential(e),
      f: (t, e) => t.toFixed(e),
      g: (t, e) => t.toPrecision(e),
      o: (t) => Math.round(t).toString(8),
      p: (t, e) => Nn(100 * t, e),
      r: Nn,
      s: function (t, e) {
        var n = _n(t, e);
        if (!n) return (xn = void 0), t.toPrecision(e);
        var r = n[0],
          i = n[1],
          a = i - (xn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
          ? r + new Array(a - o + 1).join("0")
          : a > 0
          ? r.slice(0, a) + "." + r.slice(a)
          : "0." +
            new Array(1 - a).join("0") +
            _n(t, Math.max(0, e + a - 1))[0];
      },
      X: (t) => Math.round(t).toString(16).toUpperCase(),
      x: (t) => Math.round(t).toString(16),
    };
    function En(t) {
      return t;
    }
    var $n,
      Cn,
      Pn,
      Tn = Array.prototype.map,
      Ln = [
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
    function qn(t) {
      var e,
        n,
        r =
          void 0 === t.grouping || void 0 === t.thousands
            ? En
            : ((e = Tn.call(t.grouping, Number)),
              (n = t.thousands + ""),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, u = e[0], s = 0;
                  i > 0 &&
                  u > 0 &&
                  (s + u + 1 > r && (u = Math.max(1, r - s)),
                  a.push(t.substring((i -= u), i + u)),
                  !((s += u + 1) > r));

                )
                  u = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        a = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "",
        u =
          void 0 === t.numerals
            ? En
            : (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(Tn.call(t.numerals, String)),
        s = void 0 === t.percent ? "%" : t.percent + "",
        l = void 0 === t.minus ? "−" : t.minus + "",
        c = void 0 === t.nan ? "NaN" : t.nan + "";
      function f(t, e) {
        var n = (t = kn(t)).fill,
          f = t.align,
          h = t.sign,
          d = t.symbol,
          p = t.zero,
          g = t.width,
          y = t.comma,
          v = t.precision,
          m = t.trim,
          b = t.type;
        "n" === b
          ? ((y = !0), (b = "g"))
          : Sn[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
          (p || ("0" === n && "=" === f)) && ((p = !0), (n = "0"), (f = "="));
        var _ =
            (e && void 0 !== e.prefix ? e.prefix : "") +
            ("$" === d
              ? i
              : "#" === d && /[boxX]/.test(b)
              ? "0" + b.toLowerCase()
              : ""),
          w =
            ("$" === d ? a : /[%p]/.test(b) ? s : "") +
            (e && void 0 !== e.suffix ? e.suffix : ""),
          x = Sn[b],
          M = /[defgprs%]/.test(b);
        function k(t) {
          var e,
            i,
            a,
            s = _,
            d = w;
          if ("c" === b) (d = x(t) + d), (t = "");
          else {
            var k = (t = +t) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? c : x(Math.abs(t), v)),
              m &&
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
              k && 0 === +t && "+" !== h && (k = !1),
              (s =
                (k ? ("(" === h ? h : l) : "-" === h || "(" === h ? "" : h) +
                s),
              (d =
                ("s" !== b || isNaN(t) || void 0 === xn ? "" : Ln[8 + xn / 3]) +
                d +
                (k && "(" === h ? ")" : "")),
              M)
            )
              for (e = -1, i = t.length; ++e < i; )
                if (48 > (a = t.charCodeAt(e)) || a > 57) {
                  (d = (46 === a ? o + t.slice(e + 1) : t.slice(e)) + d),
                    (t = t.slice(0, e));
                  break;
                }
          }
          y && !p && (t = r(t, 1 / 0));
          var A = s.length + t.length + d.length,
            N = A < g ? new Array(g - A + 1).join(n) : "";
          switch (
            (y &&
              p &&
              ((t = r(N + t, N.length ? g - d.length : 1 / 0)), (N = "")),
            f)
          ) {
            case "<":
              t = s + t + d + N;
              break;
            case "=":
              t = s + N + t + d;
              break;
            case "^":
              t = N.slice(0, (A = N.length >> 1)) + s + t + d + N.slice(A);
              break;
            default:
              t = N + s + t + d;
          }
          return u(t);
        }
        return (
          (v =
            void 0 === v
              ? 6
              : /[gprs]/.test(b)
              ? Math.max(1, Math.min(21, v))
              : Math.max(0, Math.min(20, v))),
          (k.toString = function () {
            return t + "";
          }),
          k
        );
      }
      return {
        format: f,
        formatPrefix: function (t, e) {
          var n = 3 * Math.max(-8, Math.min(8, Math.floor(wn(e) / 3))),
            r = Math.pow(10, -n),
            i = f((((t = kn(t)).type = "f"), t), { suffix: Ln[8 + n / 3] });
          return function (t) {
            return i(r * t);
          };
        },
      };
    }
    ($n = qn({ thousands: ",", grouping: [3], currency: ["$", ""] })),
      (Cn = $n.format),
      (Pn = $n.formatPrefix);
    const jn = Math.sqrt(50),
      zn = Math.sqrt(10),
      On = Math.sqrt(2);
    function Rn(t, e, n) {
      const r = (e - t) / Math.max(0, n),
        i = Math.floor(Math.log10(r)),
        a = r / Math.pow(10, i),
        o = a >= jn ? 10 : a >= zn ? 5 : a >= On ? 2 : 1;
      let u, s, l;
      return (
        i < 0
          ? ((l = Math.pow(10, -i) / o),
            (u = Math.round(t * l)),
            (s = Math.round(e * l)),
            u / l < t && ++u,
            s / l > e && --s,
            (l = -l))
          : ((l = Math.pow(10, i) * o),
            (u = Math.round(t / l)),
            (s = Math.round(e / l)),
            u * l < t && ++u,
            s * l > e && --s),
        s < u && 0.5 <= n && n < 2 ? Rn(t, e, 2 * n) : [u, s, l]
      );
    }
    function Dn(t, e, n) {
      return Rn((t = +t), (e = +e), (n = +n))[2];
    }
    function In(t, e) {
      return null == t || null == e
        ? NaN
        : t < e
        ? -1
        : t > e
        ? 1
        : t >= e
        ? 0
        : NaN;
    }
    function Fn(t, e) {
      return null == t || null == e
        ? NaN
        : e < t
        ? -1
        : e > t
        ? 1
        : e >= t
        ? 0
        : NaN;
    }
    function Bn(t) {
      let e, n, r;
      function i(t, r, i = 0, a = t.length) {
        if (i < a) {
          if (0 !== e(r, r)) return a;
          do {
            const e = (i + a) >>> 1;
            n(t[e], r) < 0 ? (i = e + 1) : (a = e);
          } while (i < a);
        }
        return i;
      }
      return (
        2 !== t.length
          ? ((e = In), (n = (e, n) => In(t(e), n)), (r = (e, n) => t(e) - n))
          : ((e = t === In || t === Fn ? t : Hn), (n = t), (r = t)),
        {
          left: i,
          center: function (t, e, n = 0, a = t.length) {
            const o = i(t, e, n, a - 1);
            return o > n && r(t[o - 1], e) > -r(t[o], e) ? o - 1 : o;
          },
          right: function (t, r, i = 0, a = t.length) {
            if (i < a) {
              if (0 !== e(r, r)) return a;
              do {
                const e = (i + a) >>> 1;
                n(t[e], r) <= 0 ? (i = e + 1) : (a = e);
              } while (i < a);
            }
            return i;
          },
        }
      );
    }
    function Hn() {
      return 0;
    }
    const Xn = Bn(In),
      Wn = Xn.right,
      Vn =
        (Xn.left,
        Bn(function (t) {
          return null === t ? NaN : +t;
        }).center,
        Wn);
    function Yn(t, e) {
      var n,
        r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(i),
        o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = Gn(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o;
      };
    }
    function Un(t, e) {
      var n = new Date();
      return (
        (t = +t),
        (e = +e),
        function (r) {
          return n.setTime(t * (1 - r) + e * r), n;
        }
      );
    }
    function Zn(t, e) {
      var n,
        r = {},
        i = {};
      for (n in ((null !== t && "object" == typeof t) || (t = {}),
      (null !== e && "object" == typeof e) || (e = {}),
      e))
        n in t ? (r[n] = Gn(t[n], e[n])) : (i[n] = e[n]);
      return function (t) {
        for (n in r) i[n] = r[n](t);
        return i;
      };
    }
    function Kn(t, e) {
      e || (e = []);
      var n,
        r = t ? Math.min(e.length, t.length) : 0,
        i = e.slice();
      return function (a) {
        for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
        return i;
      };
    }
    function Gn(t, e) {
      var n,
        r,
        i = typeof e;
      return null == e || "boolean" === i
        ? Oe(e)
        : ("number" === i
            ? Wt
            : "string" === i
            ? (n = _e(e))
              ? ((e = n), Fe)
              : We
            : e instanceof _e
            ? Fe
            : e instanceof Date
            ? Un
            : ((r = e),
              !ArrayBuffer.isView(r) || r instanceof DataView
                ? Array.isArray(e)
                  ? Yn
                  : ("function" != typeof e.valueOf &&
                      "function" != typeof e.toString) ||
                    isNaN(e)
                  ? Zn
                  : Wt
                : Kn))(t, e);
    }
    function Jn(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return Math.round(t * (1 - n) + e * n);
        }
      );
    }
    function Qn(t) {
      return +t;
    }
    var tr = [0, 1];
    function er(t) {
      return t;
    }
    function nr(t, e) {
      return (e -= t = +t)
        ? function (n) {
            return (n - t) / e;
          }
        : ((n = isNaN(e) ? NaN : 0.5),
          function () {
            return n;
          });
      var n;
    }
    function rr(t, e, n) {
      var r = t[0],
        i = t[1],
        a = e[0],
        o = e[1];
      return (
        i < r
          ? ((r = nr(i, r)), (a = n(o, a)))
          : ((r = nr(r, i)), (a = n(a, o))),
        function (t) {
          return a(r(t));
        }
      );
    }
    function ir(t, e, n) {
      var r = Math.min(t.length, e.length) - 1,
        i = new Array(r),
        a = new Array(r),
        o = -1;
      for (
        t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++o < r;

      )
        (i[o] = nr(t[o], t[o + 1])), (a[o] = n(e[o], e[o + 1]));
      return function (e) {
        var n = Vn(t, e, 1, r) - 1;
        return a[n](i[n](e));
      };
    }
    function ar() {
      var t,
        e,
        n,
        r,
        i,
        a,
        o = tr,
        u = tr,
        s = Gn,
        l = er;
      function c() {
        var t,
          e,
          n,
          s = Math.min(o.length, u.length);
        return (
          l !== er &&
            ((t = o[0]),
            (e = o[s - 1]),
            t > e && ((n = t), (t = e), (e = n)),
            (l = function (n) {
              return Math.max(t, Math.min(e, n));
            })),
          (r = s > 2 ? ir : rr),
          (i = a = null),
          f
        );
      }
      function f(e) {
        return null == e || isNaN((e = +e))
          ? n
          : (i || (i = r(o.map(t), u, s)))(t(l(e)));
      }
      return (
        (f.invert = function (n) {
          return l(e((a || (a = r(u, o.map(t), Wt)))(n)));
        }),
        (f.domain = function (t) {
          return arguments.length ? ((o = Array.from(t, Qn)), c()) : o.slice();
        }),
        (f.range = function (t) {
          return arguments.length ? ((u = Array.from(t)), c()) : u.slice();
        }),
        (f.rangeRound = function (t) {
          return (u = Array.from(t)), (s = Jn), c();
        }),
        (f.clamp = function (t) {
          return arguments.length ? ((l = !!t || er), c()) : l !== er;
        }),
        (f.interpolate = function (t) {
          return arguments.length ? ((s = t), c()) : s;
        }),
        (f.unknown = function (t) {
          return arguments.length ? ((n = t), f) : n;
        }),
        function (n, r) {
          return (t = n), (e = r), c();
        }
      );
    }
    function or(t, e) {
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
    function ur(t, e, n, r) {
      var i,
        a = (function (t, e, n) {
          n = +n;
          const r = (e = +e) < (t = +t),
            i = r ? Dn(e, t, n) : Dn(t, e, n);
          return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
        })(t, e, n);
      switch ((r = kn(r ?? ",f")).type) {
        case "s":
          var o = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(wn(e) / 3))) -
                      wn(Math.abs(t))
                  );
                })(a, o))
              ) ||
              (r.precision = i),
            Pn(r, o)
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
                  Math.max(0, wn(e) - wn(t)) + 1
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
                return Math.max(0, -wn(Math.abs(t)));
              })(a))
            ) ||
            (r.precision = i - 2 * ("%" === r.type));
      }
      return Cn(r);
    }
    function sr(t) {
      var e = t.domain;
      return (
        (t.ticks = function (t) {
          var n = e();
          return (function (t, e, n) {
            if (!((n = +n) > 0)) return [];
            if ((t = +t) === (e = +e)) return [t];
            const r = e < t,
              [i, a, o] = r ? Rn(e, t, n) : Rn(t, e, n);
            if (!(a >= i)) return [];
            const u = a - i + 1,
              s = new Array(u);
            if (r)
              if (o < 0) for (let t = 0; t < u; ++t) s[t] = (a - t) / -o;
              else for (let t = 0; t < u; ++t) s[t] = (a - t) * o;
            else if (o < 0) for (let t = 0; t < u; ++t) s[t] = (i + t) / -o;
            else for (let t = 0; t < u; ++t) s[t] = (i + t) * o;
            return s;
          })(n[0], n[n.length - 1], t ?? 10);
        }),
        (t.tickFormat = function (t, n) {
          var r = e();
          return ur(r[0], r[r.length - 1], t ?? 10, n);
        }),
        (t.nice = function (n) {
          null == n && (n = 10);
          var r,
            i,
            a = e(),
            o = 0,
            u = a.length - 1,
            s = a[o],
            l = a[u],
            c = 10;
          for (
            l < s && ((i = s), (s = l), (l = i), (i = o), (o = u), (u = i));
            c-- > 0;

          ) {
            if ((i = Dn(s, l, n)) === r) return (a[o] = s), (a[u] = l), e(a);
            if (i > 0) (s = Math.floor(s / i) * i), (l = Math.ceil(l / i) * i);
            else {
              if (!(i < 0)) break;
              (s = Math.ceil(s * i) / i), (l = Math.floor(l * i) / i);
            }
            r = i;
          }
          return t;
        }),
        t
      );
    }
    function lr() {
      var t = ar()(er, er);
      return (
        (t.copy = function () {
          return (
            (e = t),
            lr()
              .domain(e.domain())
              .range(e.range())
              .interpolate(e.interpolate())
              .clamp(e.clamp())
              .unknown(e.unknown())
          );
          var e;
        }),
        or.apply(t, arguments),
        sr(t)
      );
    }
    class cr extends Map {
      constructor(t, e = pr) {
        if (
          (super(),
          Object.defineProperties(this, {
            _intern: { value: new Map() },
            _key: { value: e },
          }),
          null != t)
        )
          for (const [e, n] of t) this.set(e, n);
      }
      get(t) {
        return super.get(fr(this, t));
      }
      has(t) {
        return super.has(fr(this, t));
      }
      set(t, e) {
        return super.set(hr(this, t), e);
      }
      delete(t) {
        return super.delete(dr(this, t));
      }
    }
    Set;
    function fr({ _intern: t, _key: e }, n) {
      const r = e(n);
      return t.has(r) ? t.get(r) : n;
    }
    function hr({ _intern: t, _key: e }, n) {
      const r = e(n);
      return t.has(r) ? t.get(r) : (t.set(r, n), n);
    }
    function dr({ _intern: t, _key: e }, n) {
      const r = e(n);
      return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
    }
    function pr(t) {
      return null !== t && "object" == typeof t ? t.valueOf() : t;
    }
    const gr = Symbol("implicit");
    function yr() {
      var t = new cr(),
        e = [],
        n = [],
        r = gr;
      function i(i) {
        let a = t.get(i);
        if (void 0 === a) {
          if (r !== gr) return r;
          t.set(i, (a = e.push(i) - 1));
        }
        return n[a % n.length];
      }
      return (
        (i.domain = function (n) {
          if (!arguments.length) return e.slice();
          (e = []), (t = new cr());
          for (const r of n) t.has(r) || t.set(r, e.push(r) - 1);
          return i;
        }),
        (i.range = function (t) {
          return arguments.length ? ((n = Array.from(t)), i) : n.slice();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((r = t), i) : r;
        }),
        (i.copy = function () {
          return yr(e, n).unknown(r);
        }),
        or.apply(i, arguments),
        i
      );
    }
    const vr = (function (t) {
      for (var e = (t.length / 6) | 0, n = new Array(e), r = 0; r < e; )
        n[r] = "#" + t.slice(6 * r, 6 * ++r);
      return n;
    })("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    function mr(t) {
      return "string" == typeof t
        ? new ht([[document.querySelector(t)]], [document.documentElement])
        : new ht([[t]], ft);
    }
    function br(t) {
      return "string" == typeof t
        ? new ht([document.querySelectorAll(t)], [document.documentElement])
        : new ht([i(t)], ft);
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
    var xr = kr(wr);
    function Mr(t) {
      this._curve = t;
    }
    function kr(t) {
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
    Array.prototype.slice;
    function Ar(t) {
      return function () {
        return t;
      };
    }
    const Nr = Math.PI,
      Sr = 2 * Nr,
      Er = 1e-6,
      $r = Sr - Er;
    function Cr(t) {
      this._ += t[0];
      for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
    }
    class Pr {
      constructor(t) {
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == t
              ? Cr
              : (function (t) {
                  let e = Math.floor(t);
                  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                  if (e > 15) return Cr;
                  const n = 10 ** e;
                  return function (t) {
                    this._ += t[0];
                    for (let e = 1, r = t.length; e < r; ++e)
                      this._ += Math.round(arguments[e] * n) / n + t[e];
                  };
                })(t));
      }
      moveTo(t, e) {
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}`;
      }
      closePath() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(t, e) {
        this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
      }
      quadraticCurveTo(t, e, n, r) {
        this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +r)}`;
      }
      bezierCurveTo(t, e, n, r, i, a) {
        this._append`C${+t},${+e},${+n},${+r},${(this._x1 = +i)},${(this._y1 =
          +a)}`;
      }
      arcTo(t, e, n, r, i) {
        if (((t = +t), (e = +e), (n = +n), (r = +r), (i = +i) < 0))
          throw new Error(`negative radius: ${i}`);
        let a = this._x1,
          o = this._y1,
          u = n - t,
          s = r - e,
          l = a - t,
          c = o - e,
          f = l * l + c * c;
        if (null === this._x1)
          this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
        else if (f > Er)
          if (Math.abs(c * u - s * l) > Er && i) {
            let h = n - a,
              d = r - o,
              p = u * u + s * s,
              g = h * h + d * d,
              y = Math.sqrt(p),
              v = Math.sqrt(f),
              m = i * Math.tan((Nr - Math.acos((p + f - g) / (2 * y * v))) / 2),
              b = m / v,
              _ = m / y;
            Math.abs(b - 1) > Er && this._append`L${t + b * l},${e + b * c}`,
              this._append`A${i},${i},0,0,${+(c * h > l * d)},${(this._x1 =
                t + _ * u)},${(this._y1 = e + _ * s)}`;
          } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
        else;
      }
      arc(t, e, n, r, i, a) {
        if (((t = +t), (e = +e), (a = !!a), (n = +n) < 0))
          throw new Error(`negative radius: ${n}`);
        let o = n * Math.cos(r),
          u = n * Math.sin(r),
          s = t + o,
          l = e + u,
          c = 1 ^ a,
          f = a ? r - i : i - r;
        null === this._x1
          ? this._append`M${s},${l}`
          : (Math.abs(this._x1 - s) > Er || Math.abs(this._y1 - l) > Er) &&
            this._append`L${s},${l}`,
          n &&
            (f < 0 && (f = (f % Sr) + Sr),
            f > $r
              ? this._append`A${n},${n},0,1,${c},${t - o},${
                  e - u
                }A${n},${n},0,1,${c},${(this._x1 = s)},${(this._y1 = l)}`
              : f > Er &&
                this._append`A${n},${n},0,${+(f >= Nr)},${c},${(this._x1 =
                  t + n * Math.cos(i))},${(this._y1 = e + n * Math.sin(i))}`);
      }
      rect(t, e, n, r) {
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}h${(n = +n)}v${+r}h${-n}Z`;
      }
      toString() {
        return this._;
      }
    }
    function Tr(t) {
      let e = 3;
      return (
        (t.digits = function (n) {
          if (!arguments.length) return e;
          if (null == n) e = null;
          else {
            const t = Math.floor(n);
            if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
            e = t;
          }
          return t;
        }),
        () => new Pr(e)
      );
    }
    function Lr(t) {
      return t[0];
    }
    function qr(t) {
      return t[1];
    }
    function jr(t, e) {
      var n = Ar(!0),
        r = null,
        i = wr,
        a = null,
        o = Tr(u);
      function u(u) {
        var s,
          l,
          c,
          f = (u = (function (t) {
            return "object" == typeof t && "length" in t ? t : Array.from(t);
          })(u)).length,
          h = !1;
        for (null == r && (a = i((c = o()))), s = 0; s <= f; ++s)
          !(s < f && n((l = u[s]), s, u)) === h &&
            ((h = !h) ? a.lineStart() : a.lineEnd()),
            h && a.point(+t(l, s, u), +e(l, s, u));
        if (c) return (a = null), c + "" || null;
      }
      return (
        (t = "function" == typeof t ? t : void 0 === t ? Lr : Ar(t)),
        (e = "function" == typeof e ? e : void 0 === e ? qr : Ar(e)),
        (u.x = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : Ar(+e)), u)
            : t;
        }),
        (u.y = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : Ar(+t)), u)
            : e;
        }),
        (u.defined = function (t) {
          return arguments.length
            ? ((n = "function" == typeof t ? t : Ar(!!t)), u)
            : n;
        }),
        (u.curve = function (t) {
          return arguments.length ? ((i = t), null != r && (a = i(r)), u) : i;
        }),
        (u.context = function (t) {
          return arguments.length
            ? (null == t ? (r = a = null) : (a = i((r = t))), u)
            : r;
        }),
        u
      );
    }
    function zr() {
      return (
        (t = jr().curve(xr)),
        (e = t.curve),
        (t.angle = t.x),
        delete t.x,
        (t.radius = t.y),
        delete t.y,
        (t.curve = function (t) {
          return arguments.length ? e(kr(t)) : e()._curve;
        }),
        t
      );
      var t, e;
    }
    Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin;
    const Or = Math.sqrt,
      Rr = Math.PI,
      Dr = 2 * Rr;
    const Ir = {
      draw(t, e) {
        const n = Or(e / Rr);
        t.moveTo(n, 0), t.arc(0, 0, n, 0, Dr);
      },
    };
    function Fr() {}
    function Br(t, e, n) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - e),
        t._y2 + t._k * (t._y1 - n),
        t._x2,
        t._y2
      );
    }
    function Hr(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    Hr.prototype = {
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
            Br(this, this._x1, this._y1);
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
            Br(this, t, e);
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
        return new Hr(t, e);
      }
      return (
        (n.tension = function (e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function Xr(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    Xr.prototype = {
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
            Br(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      },
    };
    const Wr = (function t(e) {
      function n(t) {
        return new Xr(t, e);
      }
      return (
        (n.tension = function (e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function Vr(t, e, n) {
      (this.k = t), (this.x = e), (this.y = n);
    }
    Vr.prototype = {
      constructor: Vr,
      scale: function (t) {
        return 1 === t ? this : new Vr(this.k * t, this.x, this.y);
      },
      translate: function (t, e) {
        return (0 === t) & (0 === e)
          ? this
          : new Vr(this.k, this.x + this.k * t, this.y + this.k * e);
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
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      },
    };
    new Vr(1, 0, 0);
    Vr.prototype;
    var Yr = 0;
    function Ur() {
      this._ = "@" + (++Yr).toString(36);
    }
    Ur.prototype = function () {
      return new Ur();
    }.prototype = {
      constructor: Ur,
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
    var Zr = function (t) {
      return function () {
        return this.matches(t);
      };
    };
    if ("undefined" != typeof document) {
      var Kr = document.documentElement;
      if (!Kr.matches) {
        var Gr =
          Kr.webkitMatchesSelector ||
          Kr.msMatchesSelector ||
          Kr.mozMatchesSelector ||
          Kr.oMatchesSelector;
        Zr = function (t) {
          return function () {
            return Gr.call(this, t);
          };
        };
      }
    }
    const Jr = Zr;
    var Qr = {},
      ti = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement ||
        (Qr = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function ei(t, e, n) {
      return (
        (t = ni(t, e, n)),
        function (e) {
          var n = e.relatedTarget;
          (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
            t.call(this, e);
        }
      );
    }
    function ni(t, e, n) {
      return function (r) {
        var i = ti;
        ti = r;
        try {
          t.call(this, this.__data__, e, n);
        } finally {
          ti = i;
        }
      };
    }
    function ri(t) {
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
    function ii(t, e, n) {
      var r = Qr.hasOwnProperty(t.type) ? ei : ni;
      return function (i, a, o) {
        var u,
          s = this.__on,
          l = r(e, a, o);
        if (s)
          for (var c = 0, f = s.length; c < f; ++c)
            if ((u = s[c]).type === t.type && u.name === t.name)
              return (
                this.removeEventListener(u.type, u.listener, u.capture),
                this.addEventListener(
                  u.type,
                  (u.listener = l),
                  (u.capture = n)
                ),
                void (u.value = e)
              );
        this.addEventListener(t.type, l, n),
          (u = {
            type: t.type,
            name: t.name,
            value: e,
            listener: l,
            capture: n,
          }),
          s ? s.push(u) : (this.__on = [u]);
      };
    }
    function ai() {}
    function oi(t) {
      return null == t
        ? ai
        : function () {
            return this.querySelector(t);
          };
    }
    function ui() {
      return [];
    }
    function si(t) {
      return new Array(t.length);
    }
    function li(t, e) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
    }
    li.prototype = {
      constructor: li,
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
    function ci(t, e, n, r, i, a) {
      for (var o, u = 0, s = e.length, l = a.length; u < l; ++u)
        (o = e[u])
          ? ((o.__data__ = a[u]), (r[u] = o))
          : (n[u] = new li(t, a[u]));
      for (; u < s; ++u) (o = e[u]) && (i[u] = o);
    }
    function fi(t, e, n, r, i, a, o) {
      var u,
        s,
        l,
        c = {},
        f = e.length,
        h = a.length,
        d = new Array(f);
      for (u = 0; u < f; ++u)
        (s = e[u]) &&
          ((d[u] = l = "$" + o.call(s, s.__data__, u, e)),
          l in c ? (i[u] = s) : (c[l] = s));
      for (u = 0; u < h; ++u)
        (s = c[(l = "$" + o.call(t, a[u], u, a))])
          ? ((r[u] = s), (s.__data__ = a[u]), (c[l] = null))
          : (n[u] = new li(t, a[u]));
      for (u = 0; u < f; ++u) (s = e[u]) && c[d[u]] === s && (i[u] = s);
    }
    function hi(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var di = "http://www.w3.org/1999/xhtml";
    const pi = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: di,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
    function gi(t) {
      var e = (t += ""),
        n = e.indexOf(":");
      return (
        n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
        pi.hasOwnProperty(e) ? { space: pi[e], local: t } : t
      );
    }
    function yi(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function vi(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function mi(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }
    function bi(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }
    function _i(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }
    function wi(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, n);
      };
    }
    function xi(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    }
    function Mi(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function ki(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n);
      };
    }
    function Ai(t, e, n) {
      return function () {
        var r = e.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, n);
      };
    }
    function Ni(t) {
      return function () {
        delete this[t];
      };
    }
    function Si(t, e) {
      return function () {
        this[t] = e;
      };
    }
    function Ei(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : (this[t] = n);
      };
    }
    function $i(t) {
      return t.trim().split(/^|\s+/);
    }
    function Ci(t) {
      return t.classList || new Pi(t);
    }
    function Pi(t) {
      (this._node = t), (this._names = $i(t.getAttribute("class") || ""));
    }
    function Ti(t, e) {
      for (var n = Ci(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
    }
    function Li(t, e) {
      for (var n = Ci(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
    }
    function qi(t) {
      return function () {
        Ti(this, t);
      };
    }
    function ji(t) {
      return function () {
        Li(this, t);
      };
    }
    function zi(t, e) {
      return function () {
        (e.apply(this, arguments) ? Ti : Li)(this, t);
      };
    }
    function Oi() {
      this.textContent = "";
    }
    function Ri(t) {
      return function () {
        this.textContent = t;
      };
    }
    function Di(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = e ?? "";
      };
    }
    function Ii() {
      this.innerHTML = "";
    }
    function Fi(t) {
      return function () {
        this.innerHTML = t;
      };
    }
    function Bi(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.innerHTML = e ?? "";
      };
    }
    function Hi() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function Xi() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function Wi(t) {
      return function () {
        var e = this.ownerDocument,
          n = this.namespaceURI;
        return n === di && e.documentElement.namespaceURI === di
          ? e.createElement(t)
          : e.createElementNS(n, t);
      };
    }
    function Vi(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    }
    function Yi(t) {
      var e = gi(t);
      return (e.local ? Vi : Wi)(e);
    }
    function Ui() {
      return null;
    }
    function Zi() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function Ki(t, e, n) {
      var r = xi(t),
        i = r.CustomEvent;
      i
        ? (i = new i(e, n))
        : ((i = r.document.createEvent("Event")),
          n
            ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
            : i.initEvent(e, !1, !1)),
        t.dispatchEvent(i);
    }
    function Gi(t, e) {
      return function () {
        return Ki(this, t, e);
      };
    }
    function Ji(t, e) {
      return function () {
        return Ki(this, t, e.apply(this, arguments));
      };
    }
    Pi.prototype = {
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
    var Qi = [null];
    function ta(t, e) {
      (this._groups = t), (this._parents = e);
    }
    function ea() {
      return new ta([[document.documentElement]], Qi);
    }
    ta.prototype = ea.prototype = {
      constructor: ta,
      select: function (t) {
        "function" != typeof t && (t = oi(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o, u = e[i], s = u.length, l = (r[i] = new Array(s)), c = 0;
            c < s;
            ++c
          )
            (a = u[c]) &&
              (o = t.call(a, a.__data__, c, u)) &&
              ("__data__" in a && (o.__data__ = a.__data__), (l[c] = o));
        return new ta(r, this._parents);
      },
      selectAll: function (t) {
        "function" != typeof t &&
          (t = (function (t) {
            return null == t
              ? ui
              : function () {
                  return this.querySelectorAll(t);
                };
          })(t));
        for (
          var e = this._groups, n = e.length, r = [], i = [], a = 0;
          a < n;
          ++a
        )
          for (var o, u = e[a], s = u.length, l = 0; l < s; ++l)
            (o = u[l]) && (r.push(t.call(o, o.__data__, l, u)), i.push(o));
        return new ta(r, i);
      },
      filter: function (t) {
        "function" != typeof t && (t = Jr(t));
        for (
          var e = this._groups, n = e.length, r = new Array(n), i = 0;
          i < n;
          ++i
        )
          for (
            var a, o = e[i], u = o.length, s = (r[i] = []), l = 0;
            l < u;
            ++l
          )
            (a = o[l]) && t.call(a, a.__data__, l, o) && s.push(a);
        return new ta(r, this._parents);
      },
      data: function (t, e) {
        if (!t)
          return (
            (p = new Array(this.size())),
            (c = -1),
            this.each(function (t) {
              p[++c] = t;
            }),
            p
          );
        var n,
          r = e ? fi : ci,
          i = this._parents,
          a = this._groups;
        "function" != typeof t &&
          ((n = t),
          (t = function () {
            return n;
          }));
        for (
          var o = a.length,
            u = new Array(o),
            s = new Array(o),
            l = new Array(o),
            c = 0;
          c < o;
          ++c
        ) {
          var f = i[c],
            h = a[c],
            d = h.length,
            p = t.call(f, f && f.__data__, c, i),
            g = p.length,
            y = (s[c] = new Array(g)),
            v = (u[c] = new Array(g));
          r(f, h, y, v, (l[c] = new Array(d)), p, e);
          for (var m, b, _ = 0, w = 0; _ < g; ++_)
            if ((m = y[_])) {
              for (_ >= w && (w = _ + 1); !(b = v[w]) && ++w < g; );
              m._next = b || null;
            }
        }
        return ((u = new ta(u, i))._enter = s), (u._exit = l), u;
      },
      enter: function () {
        return new ta(this._enter || this._groups.map(si), this._parents);
      },
      exit: function () {
        return new ta(this._exit || this._groups.map(si), this._parents);
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
            var s,
              l = e[u],
              c = n[u],
              f = l.length,
              h = (o[u] = new Array(f)),
              d = 0;
            d < f;
            ++d
          )
            (s = l[d] || c[d]) && (h[d] = s);
        for (; u < r; ++u) o[u] = e[u];
        return new ta(o, this._parents);
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
        t || (t = hi);
        for (
          var n = this._groups, r = n.length, i = new Array(r), a = 0;
          a < r;
          ++a
        ) {
          for (
            var o, u = n[a], s = u.length, l = (i[a] = new Array(s)), c = 0;
            c < s;
            ++c
          )
            (o = u[c]) && (l[c] = o);
          l.sort(e);
        }
        return new ta(i, this._parents).order();
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
        var n = gi(t);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local
            ? r.getAttributeNS(n.space, n.local)
            : r.getAttribute(n);
        }
        return this.each(
          (null == e
            ? n.local
              ? vi
              : yi
            : "function" == typeof e
            ? n.local
              ? wi
              : _i
            : n.local
            ? bi
            : mi)(n, e)
        );
      },
      style: function (t, e, n) {
        var r;
        return arguments.length > 1
          ? this.each(
              (null == e ? Mi : "function" == typeof e ? Ai : ki)(t, e, n ?? "")
            )
          : xi((r = this.node()))
              .getComputedStyle(r, null)
              .getPropertyValue(t);
      },
      property: function (t, e) {
        return arguments.length > 1
          ? this.each((null == e ? Ni : "function" == typeof e ? Ei : Si)(t, e))
          : this.node()[t];
      },
      classed: function (t, e) {
        var n = $i(t + "");
        if (arguments.length < 2) {
          for (var r = Ci(this.node()), i = -1, a = n.length; ++i < a; )
            if (!r.contains(n[i])) return !1;
          return !0;
        }
        return this.each(("function" == typeof e ? zi : e ? qi : ji)(n, e));
      },
      text: function (t) {
        return arguments.length
          ? this.each(null == t ? Oi : ("function" == typeof t ? Di : Ri)(t))
          : this.node().textContent;
      },
      html: function (t) {
        return arguments.length
          ? this.each(null == t ? Ii : ("function" == typeof t ? Bi : Fi)(t))
          : this.node().innerHTML;
      },
      raise: function () {
        return this.each(Hi);
      },
      lower: function () {
        return this.each(Xi);
      },
      append: function (t) {
        var e = "function" == typeof t ? t : Yi(t);
        return this.select(function () {
          return this.appendChild(e.apply(this, arguments));
        });
      },
      insert: function (t, e) {
        var n = "function" == typeof t ? t : Yi(t),
          r = null == e ? Ui : "function" == typeof e ? e : oi(e);
        return this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function () {
        return this.each(Zi);
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
          for (u = e ? ii : ri, null == n && (n = !1), r = 0; r < o; ++r)
            this.each(u(a[r], e, n));
          return this;
        }
        var u = this.node().__on;
        if (u)
          for (var s, l = 0, c = u.length; l < c; ++l)
            for (r = 0, s = u[l]; r < o; ++r)
              if ((i = a[r]).type === s.type && i.name === s.name)
                return s.value;
      },
      dispatch: function (t, e) {
        return this.each(("function" == typeof e ? Ji : Gi)(t, e));
      },
    };
    var na;
    function ra(t, e) {
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
    function ia(t, e) {
      var n = ra(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    }
    const aa = {
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
        return ia(100 * t, e);
      },
      r: ia,
      s: function (t, e) {
        var n = ra(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1],
          a = i - (na = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
          ? r + new Array(a - o + 1).join("0")
          : a > 0
          ? r.slice(0, a) + "." + r.slice(a)
          : "0." +
            new Array(1 - a).join("0") +
            ra(t, Math.max(0, e + a - 1))[0];
      },
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    };
    var oa =
      /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    function ua(t) {
      return new sa(t);
    }
    function sa(t) {
      if (!(e = oa.exec(t))) throw new Error("invalid format: " + t);
      var e,
        n = e[1] || " ",
        r = e[2] || ">",
        i = e[3] || "-",
        a = e[4] || "",
        o = !!e[5],
        u = e[6] && +e[6],
        s = !!e[7],
        l = e[8] && +e[8].slice(1),
        c = e[9] || "";
      "n" === c ? ((s = !0), (c = "g")) : aa[c] || (c = ""),
        (o || ("0" === n && "=" === r)) && ((o = !0), (n = "0"), (r = "=")),
        (this.fill = n),
        (this.align = r),
        (this.sign = i),
        (this.symbol = a),
        (this.zero = o),
        (this.width = u),
        (this.comma = s),
        (this.precision = l),
        (this.type = c);
    }
    sa.prototype.toString = function () {
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
    var la,
      ca,
      fa,
      ha = [
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
    function da(t) {
      return t;
    }
    function pa(t) {
      var e,
        n,
        r =
          t.grouping && t.thousands
            ? ((e = t.grouping),
              (n = t.thousands),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, u = e[0], s = 0;
                  i > 0 &&
                  u > 0 &&
                  (s + u + 1 > r && (u = Math.max(1, r - s)),
                  a.push(t.substring((i -= u), i + u)),
                  !((s += u + 1) > r));

                )
                  u = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              })
            : da,
        i = t.currency,
        a = t.decimal;
      function o(t) {
        var e = (t = ua(t)).fill,
          n = t.align,
          o = t.sign,
          u = t.symbol,
          s = t.zero,
          l = t.width,
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
          g = aa[h],
          y = !h || /[defgprs%]/.test(h);
        function v(t) {
          var i,
            u,
            v,
            m = d,
            b = p;
          if ("c" === h) (b = g(t) + b), (t = "");
          else {
            var _ = ((t = +t) < 0 || 1 / t < 0) && ((t *= -1), !0);
            if (((t = g(t, f)), _))
              for (i = -1, u = t.length, _ = !1; ++i < u; )
                if (
                  (48 < (v = t.charCodeAt(i)) && v < 58) ||
                  ("x" === h && 96 < v && v < 103) ||
                  ("X" === h && 64 < v && v < 71)
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
                ("s" === h ? ha[8 + na / 3] : "") +
                (_ && "(" === o ? ")" : "")),
              y)
            )
              for (i = -1, u = t.length; ++i < u; )
                if (48 > (v = t.charCodeAt(i)) || v > 57) {
                  (b = (46 === v ? a + t.slice(i + 1) : t.slice(i)) + b),
                    (t = t.slice(0, i));
                  break;
                }
          }
          c && !s && (t = r(t, 1 / 0));
          var w = m.length + t.length + b.length,
            x = w < l ? new Array(l - w + 1).join(e) : "";
          switch (
            (c &&
              s &&
              ((t = r(x + t, x.length ? l - b.length : 1 / 0)), (x = "")),
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
          (v.toString = function () {
            return t + "";
          }),
          v
        );
      }
      return {
        format: o,
        formatPrefix: function (t, e) {
          var n,
            r = o((((t = ua(t)).type = "f"), t)),
            i =
              3 *
              Math.max(
                -8,
                Math.min(
                  8,
                  Math.floor(
                    ((n = e), ((n = ra(Math.abs(n))) ? n[1] : NaN) / 3)
                  )
                )
              ),
            a = Math.pow(10, -i),
            u = ha[8 + i / 3];
          return function (t) {
            return r(a * t) + u;
          };
        },
      };
    }
    !(function (t) {
      (la = pa(t)), (ca = la.format), (fa = la.formatPrefix);
    })({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
    var ga = { value: function () {} };
    function ya() {
      for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in r)
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new va(r);
    }
    function va(t) {
      this._ = t;
    }
    function ma(t, e) {
      for (var n, r = 0, i = t.length; r < i; ++r)
        if ((n = t[r]).name === e) return n.value;
    }
    function ba(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === e) {
          (t[r] = ga), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != n && t.push({ name: e, value: n }), t;
    }
    va.prototype = ya.prototype = {
      constructor: va,
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
            if ((n = (t = a[o]).type)) i[n] = ba(i[n], t.name, e);
            else if (null == e) for (n in i) i[n] = ba(i[n], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((n = (t = a[o]).type) && (n = ma(i[n], t.name))) return n;
      },
      copy: function () {
        var t = {},
          e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new va(t);
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
    const _a = ya;
    function wa(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var xa,
      Ma,
      ka =
        (1 === (xa = wa).length &&
          ((Ma = xa),
          (xa = function (t, e) {
            return wa(Ma(t), e);
          })),
        {
          left: function (t, e, n, r) {
            for (null == n && (n = 0), null == r && (r = t.length); n < r; ) {
              var i = (n + r) >>> 1;
              xa(t[i], e) < 0 ? (n = i + 1) : (r = i);
            }
            return n;
          },
          right: function (t, e, n, r) {
            for (null == n && (n = 0), null == r && (r = t.length); n < r; ) {
              var i = (n + r) >>> 1;
              xa(t[i], e) > 0 ? (r = i) : (n = i + 1);
            }
            return n;
          },
        });
    const Aa = ka.right;
    var Na = Array.prototype,
      Sa = (Na.slice, Na.map, Math.sqrt(50)),
      Ea = Math.sqrt(10),
      $a = Math.sqrt(2);
    function Ca(t, e, n) {
      var r,
        i,
        a,
        o,
        u = -1;
      if (((n = +n), (t = +t) === (e = +e) && n > 0)) return [t];
      if (
        ((r = e < t) && ((i = t), (t = e), (e = i)),
        0 ===
          (o = (function (t, e, n) {
            var r = (e - t) / Math.max(0, n),
              i = Math.floor(Math.log(r) / Math.LN10),
              a = r / Math.pow(10, i);
            return i >= 0
              ? (a >= Sa ? 10 : a >= Ea ? 5 : a >= $a ? 2 : 1) * Math.pow(10, i)
              : -Math.pow(10, -i) /
                  (a >= Sa ? 10 : a >= Ea ? 5 : a >= $a ? 2 : 1);
          })(t, e, n)) || !isFinite(o))
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
    }
    function Pa(t, e, n) {
      var r = Math.abs(e - t) / Math.max(0, n),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
      return (
        a >= Sa ? (i *= 10) : a >= Ea ? (i *= 5) : a >= $a && (i *= 2),
        e < t ? -i : i
      );
    }
    var Ta = "$";
    function La() {}
    function qa(t, e) {
      var n = new La();
      if (t instanceof La)
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
    La.prototype = qa.prototype = {
      constructor: La,
      has: function (t) {
        return Ta + t in this;
      },
      get: function (t) {
        return this[Ta + t];
      },
      set: function (t, e) {
        return (this[Ta + t] = e), this;
      },
      remove: function (t) {
        var e = Ta + t;
        return e in this && delete this[e];
      },
      clear: function () {
        for (var t in this) t[0] === Ta && delete this[t];
      },
      keys: function () {
        var t = [];
        for (var e in this) e[0] === Ta && t.push(e.slice(1));
        return t;
      },
      values: function () {
        var t = [];
        for (var e in this) e[0] === Ta && t.push(this[e]);
        return t;
      },
      entries: function () {
        var t = [];
        for (var e in this)
          e[0] === Ta && t.push({ key: e.slice(1), value: this[e] });
        return t;
      },
      size: function () {
        var t = 0;
        for (var e in this) e[0] === Ta && ++t;
        return t;
      },
      empty: function () {
        for (var t in this) if (t[0] === Ta) return !1;
        return !0;
      },
      each: function (t) {
        for (var e in this) e[0] === Ta && t(this[e], e.slice(1), this);
      },
    };
    function ja() {}
    var za = qa.prototype;
    function Oa(t, e) {
      var n = new ja();
      if (t instanceof ja)
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
    ja.prototype = Oa.prototype = {
      constructor: ja,
      has: za.has,
      add: function (t) {
        return (this[Ta + (t += "")] = t), this;
      },
      remove: za.remove,
      clear: za.clear,
      values: za.keys,
      size: za.size,
      empty: za.empty,
      each: za.each,
    };
    var Ra = Array.prototype,
      Da = Ra.map,
      Ia = Ra.slice;
    function Fa(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return t * (1 - n) + e * n;
        }
      );
    }
    function Ba(t, e, n) {
      (t.prototype = e.prototype = n), (n.constructor = t);
    }
    function Ha(t, e) {
      var n = Object.create(t.prototype);
      for (var r in e) n[r] = e[r];
      return n;
    }
    function Xa() {}
    var Wa = 0.7,
      Va = 1 / Wa,
      Ya = "\\s*([+-]?\\d+)\\s*",
      Ua = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Za = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Ka = /^#([0-9a-f]{3,8})$/,
      Ga = new RegExp("^rgb\\(" + [Ya, Ya, Ya] + "\\)$"),
      Ja = new RegExp("^rgb\\(" + [Za, Za, Za] + "\\)$"),
      Qa = new RegExp("^rgba\\(" + [Ya, Ya, Ya, Ua] + "\\)$"),
      to = new RegExp("^rgba\\(" + [Za, Za, Za, Ua] + "\\)$"),
      eo = new RegExp("^hsl\\(" + [Ua, Za, Za] + "\\)$"),
      no = new RegExp("^hsla\\(" + [Ua, Za, Za, Ua] + "\\)$"),
      ro = {
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
    function io() {
      return this.rgb().formatHex();
    }
    function ao() {
      return this.rgb().formatRgb();
    }
    function oo(t) {
      var e, n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = Ka.exec(t))
          ? ((n = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === n
              ? uo(e)
              : 3 === n
              ? new fo(
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  ((15 & e) << 4) | (15 & e),
                  1
                )
              : 8 === n
              ? so(
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  (255 & e) / 255
                )
              : 4 === n
              ? so(
                  ((e >> 12) & 15) | ((e >> 8) & 240),
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  (((15 & e) << 4) | (15 & e)) / 255
                )
              : null)
          : (e = Ga.exec(t))
          ? new fo(e[1], e[2], e[3], 1)
          : (e = Ja.exec(t))
          ? new fo(
              (255 * e[1]) / 100,
              (255 * e[2]) / 100,
              (255 * e[3]) / 100,
              1
            )
          : (e = Qa.exec(t))
          ? so(e[1], e[2], e[3], e[4])
          : (e = to.exec(t))
          ? so((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
          : (e = eo.exec(t))
          ? yo(e[1], e[2] / 100, e[3] / 100, 1)
          : (e = no.exec(t))
          ? yo(e[1], e[2] / 100, e[3] / 100, e[4])
          : ro.hasOwnProperty(t)
          ? uo(ro[t])
          : "transparent" === t
          ? new fo(NaN, NaN, NaN, 0)
          : null
      );
    }
    function uo(t) {
      return new fo((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function so(t, e, n, r) {
      return r <= 0 && (t = e = n = NaN), new fo(t, e, n, r);
    }
    function lo(t) {
      return (
        t instanceof Xa || (t = oo(t)),
        t ? new fo((t = t.rgb()).r, t.g, t.b, t.opacity) : new fo()
      );
    }
    function co(t, e, n, r) {
      return 1 === arguments.length ? lo(t) : new fo(t, e, n, r ?? 1);
    }
    function fo(t, e, n, r) {
      (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
    }
    function ho() {
      return "#" + go(this.r) + go(this.g) + go(this.b);
    }
    function po() {
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
    function go(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
        t.toString(16)
      );
    }
    function yo(t, e, n, r) {
      return (
        r <= 0
          ? (t = e = n = NaN)
          : n <= 0 || n >= 1
          ? (t = e = NaN)
          : e <= 0 && (t = NaN),
        new mo(t, e, n, r)
      );
    }
    function vo(t) {
      if (t instanceof mo) return new mo(t.h, t.s, t.l, t.opacity);
      if ((t instanceof Xa || (t = oo(t)), !t)) return new mo();
      if (t instanceof mo) return t;
      var e = (t = t.rgb()).r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = Math.min(e, n, r),
        a = Math.max(e, n, r),
        o = NaN,
        u = a - i,
        s = (a + i) / 2;
      return (
        u
          ? ((o =
              e === a
                ? (n - r) / u + 6 * (n < r)
                : n === a
                ? (r - e) / u + 2
                : (e - n) / u + 4),
            (u /= s < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (u = s > 0 && s < 1 ? 0 : o),
        new mo(o, u, s, t.opacity)
      );
    }
    function mo(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function bo(t, e, n) {
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
    function _o(t, e, n, r, i) {
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
    function wo(t) {
      return function () {
        return t;
      };
    }
    function xo(t, e) {
      return function (n) {
        return t + n * e;
      };
    }
    function Mo(t) {
      return 1 === (t = +t)
        ? ko
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
              : wo(isNaN(e) ? n : e);
          };
    }
    function ko(t, e) {
      var n = e - t;
      return n ? xo(t, n) : wo(isNaN(t) ? e : t);
    }
    Ba(Xa, oo, {
      copy: function (t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable: function () {
        return this.rgb().displayable();
      },
      hex: io,
      formatHex: io,
      formatHsl: function () {
        return vo(this).formatHsl();
      },
      formatRgb: ao,
      toString: ao,
    }),
      Ba(
        fo,
        co,
        Ha(Xa, {
          brighter: function (t) {
            return (
              (t = null == t ? Va : Math.pow(Va, t)),
              new fo(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? Wa : Math.pow(Wa, t)),
              new fo(this.r * t, this.g * t, this.b * t, this.opacity)
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
          hex: ho,
          formatHex: ho,
          formatRgb: po,
          toString: po,
        })
      ),
      Ba(
        mo,
        function (t, e, n, r) {
          return 1 === arguments.length ? vo(t) : new mo(t, e, n, r ?? 1);
        },
        Ha(Xa, {
          brighter: function (t) {
            return (
              (t = null == t ? Va : Math.pow(Va, t)),
              new mo(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? Wa : Math.pow(Wa, t)),
              new mo(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * e,
              i = 2 * n - r;
            return new fo(
              bo(t >= 240 ? t - 240 : t + 120, i, r),
              bo(t, i, r),
              bo(t < 120 ? t + 240 : t - 120, i, r),
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
    const Ao = (function t(e) {
      var n = Mo(e);
      function r(t, e) {
        var r = n((t = co(t)).r, (e = co(e)).r),
          i = n(t.g, e.g),
          a = n(t.b, e.b),
          o = ko(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)), (t.g = i(e)), (t.b = a(e)), (t.opacity = o(e)), t + ""
          );
        };
      }
      return (r.gamma = t), r;
    })(1);
    function No(t) {
      return function (e) {
        var n,
          r,
          i = e.length,
          a = new Array(i),
          o = new Array(i),
          u = new Array(i);
        for (n = 0; n < i; ++n)
          (r = co(e[n])),
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
    No(function (t) {
      var e = t.length - 1;
      return function (n) {
        var r =
            n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
          i = t[r],
          a = t[r + 1],
          o = r > 0 ? t[r - 1] : 2 * i - a,
          u = r < e - 1 ? t[r + 2] : 2 * a - i;
        return _o((n - r / e) * e, o, i, a, u);
      };
    }),
      No(function (t) {
        var e = t.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
            i = t[(r + e - 1) % e],
            a = t[r % e],
            o = t[(r + 1) % e],
            u = t[(r + 2) % e];
          return _o((n - r / e) * e, i, a, o, u);
        };
      });
    function So(t, e) {
      var n,
        r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(i),
        o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = qo(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o;
      };
    }
    function Eo(t, e) {
      var n = new Date();
      return (
        (t = +t),
        (e = +e),
        function (r) {
          return n.setTime(t * (1 - r) + e * r), n;
        }
      );
    }
    function $o(t, e) {
      var n,
        r = {},
        i = {};
      for (n in ((null !== t && "object" == typeof t) || (t = {}),
      (null !== e && "object" == typeof e) || (e = {}),
      e))
        n in t ? (r[n] = qo(t[n], e[n])) : (i[n] = e[n]);
      return function (t) {
        for (n in r) i[n] = r[n](t);
        return i;
      };
    }
    var Co = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Po = new RegExp(Co.source, "g");
    function To(t, e) {
      var n,
        r,
        i,
        a = (Co.lastIndex = Po.lastIndex = 0),
        o = -1,
        u = [],
        s = [];
      for (t += "", e += ""; (n = Co.exec(t)) && (r = Po.exec(e)); )
        (i = r.index) > a &&
          ((i = e.slice(a, i)), u[o] ? (u[o] += i) : (u[++o] = i)),
          (n = n[0]) === (r = r[0])
            ? u[o]
              ? (u[o] += r)
              : (u[++o] = r)
            : ((u[++o] = null), s.push({ i: o, x: Fa(n, r) })),
          (a = Po.lastIndex);
      return (
        a < e.length && ((i = e.slice(a)), u[o] ? (u[o] += i) : (u[++o] = i)),
        u.length < 2
          ? s[0]
            ? (function (t) {
                return function (e) {
                  return t(e) + "";
                };
              })(s[0].x)
            : (function (t) {
                return function () {
                  return t;
                };
              })(e)
          : ((e = s.length),
            function (t) {
              for (var n, r = 0; r < e; ++r) u[(n = s[r]).i] = n.x(t);
              return u.join("");
            })
      );
    }
    function Lo(t, e) {
      e || (e = []);
      var n,
        r = t ? Math.min(e.length, t.length) : 0,
        i = e.slice();
      return function (a) {
        for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
        return i;
      };
    }
    function qo(t, e) {
      var n,
        r,
        i = typeof e;
      return null == e || "boolean" === i
        ? wo(e)
        : ("number" === i
            ? Fa
            : "string" === i
            ? (n = oo(e))
              ? ((e = n), Ao)
              : To
            : e instanceof oo
            ? Ao
            : e instanceof Date
            ? Eo
            : ((r = e),
              !ArrayBuffer.isView(r) || r instanceof DataView
                ? Array.isArray(e)
                  ? So
                  : ("function" != typeof e.valueOf &&
                      "function" != typeof e.toString) ||
                    isNaN(e)
                  ? $o
                  : Fa
                : Lo))(t, e);
    }
    function jo(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return Math.round(t * (1 - n) + e * n);
        }
      );
    }
    function zo(t) {
      return +t;
    }
    var Oo = [0, 1];
    function Ro(t, e) {
      return (e -= t = +t)
        ? function (n) {
            return (n - t) / e;
          }
        : ((n = e),
          function () {
            return n;
          });
      var n;
    }
    function Do(t, e, n, r) {
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
    function Io(t, e, n, r) {
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
        var n = Aa(t, e, 1, i) - 1;
        return o[n](a[n](e));
      };
    }
    var Fo,
      Bo =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function Ho(t) {
      if (!(e = Bo.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new Xo({
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
    function Xo(t) {
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
    function Wo(t, e) {
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
    function Vo(t) {
      return (t = Wo(Math.abs(t))) ? t[1] : NaN;
    }
    function Yo(t, e) {
      var n = Wo(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    }
    (Ho.prototype = Xo.prototype),
      (Xo.prototype.toString = function () {
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
    const Uo = {
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
        return Yo(100 * t, e);
      },
      r: Yo,
      s: function (t, e) {
        var n = Wo(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1],
          a = i - (Fo = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
          ? r + new Array(a - o + 1).join("0")
          : a > 0
          ? r.slice(0, a) + "." + r.slice(a)
          : "0." +
            new Array(1 - a).join("0") +
            Wo(t, Math.max(0, e + a - 1))[0];
      },
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    };
    function Zo(t) {
      return t;
    }
    var Ko,
      Go,
      Jo,
      Qo = Array.prototype.map,
      tu = [
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
    function eu(t) {
      var e,
        n,
        r =
          void 0 === t.grouping || void 0 === t.thousands
            ? Zo
            : ((e = Qo.call(t.grouping, Number)),
              (n = t.thousands + ""),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, u = e[0], s = 0;
                  i > 0 &&
                  u > 0 &&
                  (s + u + 1 > r && (u = Math.max(1, r - s)),
                  a.push(t.substring((i -= u), i + u)),
                  !((s += u + 1) > r));

                )
                  u = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        a = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "",
        u =
          void 0 === t.numerals
            ? Zo
            : (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(Qo.call(t.numerals, String)),
        s = void 0 === t.percent ? "%" : t.percent + "",
        l = void 0 === t.minus ? "-" : t.minus + "",
        c = void 0 === t.nan ? "NaN" : t.nan + "";
      function f(t) {
        var e = (t = Ho(t)).fill,
          n = t.align,
          f = t.sign,
          h = t.symbol,
          d = t.zero,
          p = t.width,
          g = t.comma,
          y = t.precision,
          v = t.trim,
          m = t.type;
        "n" === m
          ? ((g = !0), (m = "g"))
          : Uo[m] || (void 0 === y && (y = 12), (v = !0), (m = "g")),
          (d || ("0" === e && "=" === n)) && ((d = !0), (e = "0"), (n = "="));
        var b =
            "$" === h
              ? i
              : "#" === h && /[boxX]/.test(m)
              ? "0" + m.toLowerCase()
              : "",
          _ = "$" === h ? a : /[%p]/.test(m) ? s : "",
          w = Uo[m],
          x = /[defgprs%]/.test(m);
        function M(t) {
          var i,
            a,
            s,
            h = b,
            M = _;
          if ("c" === m) (M = w(t) + M), (t = "");
          else {
            var k = (t = +t) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? c : w(Math.abs(t), y)),
              v &&
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
              k && 0 === +t && "+" !== f && (k = !1),
              (h =
                (k ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                h),
              (M =
                ("s" === m ? tu[8 + Fo / 3] : "") +
                M +
                (k && "(" === f ? ")" : "")),
              x)
            )
              for (i = -1, a = t.length; ++i < a; )
                if (48 > (s = t.charCodeAt(i)) || s > 57) {
                  (M = (46 === s ? o + t.slice(i + 1) : t.slice(i)) + M),
                    (t = t.slice(0, i));
                  break;
                }
          }
          g && !d && (t = r(t, 1 / 0));
          var A = h.length + t.length + M.length,
            N = A < p ? new Array(p - A + 1).join(e) : "";
          switch (
            (g &&
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
              t = N.slice(0, (A = N.length >> 1)) + h + t + M + N.slice(A);
              break;
            default:
              t = N + h + t + M;
          }
          return u(t);
        }
        return (
          (y =
            void 0 === y
              ? 6
              : /[gprs]/.test(m)
              ? Math.max(1, Math.min(21, y))
              : Math.max(0, Math.min(20, y))),
          (M.toString = function () {
            return t + "";
          }),
          M
        );
      }
      return {
        format: f,
        formatPrefix: function (t, e) {
          var n = f((((t = Ho(t)).type = "f"), t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(Vo(e) / 3))),
            i = Math.pow(10, -r),
            a = tu[8 + r / 3];
          return function (t) {
            return n(i * t) + a;
          };
        },
      };
    }
    function nu(t, e, n) {
      var r,
        i = t[0],
        a = t[t.length - 1],
        o = Pa(i, a, e ?? 10);
      switch ((n = Ho(n ?? ",f")).type) {
        case "s":
          var u = Math.max(Math.abs(i), Math.abs(a));
          return (
            null != n.precision ||
              isNaN(
                (r = (function (t, e) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(Vo(e) / 3))) -
                      Vo(Math.abs(t))
                  );
                })(o, u))
              ) ||
              (n.precision = r),
            Jo(n, u)
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
                  Math.max(0, Vo(e) - Vo(t)) + 1
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
                return Math.max(0, -Vo(Math.abs(t)));
              })(o))
            ) ||
            (n.precision = r - 2 * ("%" === n.type));
      }
      return Go(n);
    }
    function ru() {
      var t = (function (t, e) {
        var n,
          r,
          i,
          a = Oo,
          o = Oo,
          u = qo,
          s = !1;
        function l() {
          return (
            (n = Math.min(a.length, o.length) > 2 ? Io : Do), (r = i = null), c
          );
        }
        function c(e) {
          return (
            r ||
            (r = n(
              a,
              o,
              s
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
                Ro,
                s
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
            return arguments.length ? ((a = Da.call(t, zo)), l()) : a.slice();
          }),
          (c.range = function (t) {
            return arguments.length ? ((o = Ia.call(t)), l()) : o.slice();
          }),
          (c.rangeRound = function (t) {
            return (o = Ia.call(t)), (u = jo), l();
          }),
          (c.clamp = function (t) {
            return arguments.length ? ((s = !!t), l()) : s;
          }),
          (c.interpolate = function (t) {
            return arguments.length ? ((u = t), l()) : u;
          }),
          l()
        );
      })(Ro, Fa);
      return (
        (t.copy = function () {
          return (
            (e = t),
            ru()
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
              return Ca(n[0], n[n.length - 1], t ?? 10);
            }),
            (t.tickFormat = function (t, n) {
              return nu(e(), t, n);
            }),
            (t.nice = function (n) {
              var r = e(),
                i = r.length - 1,
                a = n ?? 10,
                o = r[0],
                u = r[i],
                s = Pa(o, u, a);
              return (
                s &&
                  ((s = Pa(Math.floor(o / s) * s, Math.ceil(u / s) * s, a)),
                  (r[0] = Math.floor(o / s) * s),
                  (r[i] = Math.ceil(u / s) * s),
                  e(r)),
                t
              );
            }),
            t
          );
        })(t)
      );
    }
    !(function (t) {
      (Ko = eu(t)), (Go = Ko.format), (Jo = Ko.formatPrefix);
    })({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-",
    });
    function iu(t) {
      return t.match(/.{6}/g).map(function (t) {
        return "#" + t;
      });
    }
    iu("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      iu(
        "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
      ),
      iu(
        "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
      ),
      iu(
        "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
      );
    var au = Math.PI / 180,
      ou = 180 / Math.PI,
      uu = -0.14861,
      su = 1.78277,
      lu = -0.29227,
      cu = -0.90649,
      fu = 1.97294,
      hu = fu * cu,
      du = fu * su,
      pu = su * lu - cu * uu;
    function gu(t, e, n, r) {
      return 1 === arguments.length
        ? (function (t) {
            if (t instanceof yu) return new yu(t.h, t.s, t.l, t.opacity);
            t instanceof fo || (t = lo(t));
            var e = t.r / 255,
              n = t.g / 255,
              r = t.b / 255,
              i = (pu * r + hu * e - du * n) / (pu + hu - du),
              a = r - i,
              o = (fu * (n - i) - lu * a) / cu,
              u = Math.sqrt(o * o + a * a) / (fu * i * (1 - i)),
              s = u ? Math.atan2(o, a) * ou - 120 : NaN;
            return new yu(s < 0 ? s + 360 : s, u, i, t.opacity);
          })(t)
        : new yu(t, e, n, r ?? 1);
    }
    function yu(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function vu(t) {
      return (function e(n) {
        function r(e, r) {
          var i = t((e = gu(e)).h, (r = gu(r)).h),
            a = ko(e.s, r.s),
            o = ko(e.l, r.l),
            u = ko(e.opacity, r.opacity);
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
    Ba(
      yu,
      gu,
      Ha(Xa, {
        brighter: function (t) {
          return (
            (t = null == t ? Va : Math.pow(Va, t)),
            new yu(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? Wa : Math.pow(Wa, t)),
            new yu(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * au,
            e = +this.l,
            n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
            r = Math.cos(t),
            i = Math.sin(t);
          return new fo(
            255 * (e + n * (uu * r + su * i)),
            255 * (e + n * (lu * r + cu * i)),
            255 * (e + n * (fu * r)),
            this.opacity
          );
        },
      })
    );
    vu(function (t, e) {
      var n = e - t;
      return n
        ? xo(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
        : wo(isNaN(t) ? e : t);
    });
    var mu = vu(ko);
    mu(gu(300, 0.5, 0), gu(-240, 0.5, 1));
    mu(gu(-100, 0.75, 0.35), gu(80, 1.5, 0.8)),
      mu(gu(260, 0.75, 0.35), gu(80, 1.5, 0.8)),
      gu();
    function bu(t) {
      var e = t.length;
      return function (n) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
      };
    }
    bu(
      iu(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    );
    bu(
      iu(
        "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
      )
    ),
      bu(
        iu(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      bu(
        iu(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
    function _u(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var wu = (function (t) {
      return (
        1 === t.length &&
          (t = (function (t) {
            return function (e, n) {
              return _u(t(e), n);
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
    })(_u);
    wu.right, wu.left;
    var xu = Array.prototype;
    xu.slice, xu.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var Mu =
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
      ku = function (t) {
        return t;
      },
      Au = function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) e[n] = t[r - n - 1];
        return e;
      },
      Nu = function (t, e) {
        t.each(function () {
          for (
            var t,
              n = (function (t) {
                return "string" == typeof t
                  ? new ta(
                      [[document.querySelector(t)]],
                      [document.documentElement]
                    )
                  : new ta([[t]], Qi);
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
      Su = {
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
            .text(ku);
          return (
            i && t.selectAll("g." + r + "cell text." + r + "label").call(Nu, i),
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
                  return { data: t.range(), labels: r, feature: ku };
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
              if ("object" === (void 0 === e ? "undefined" : Mu(e))) {
                if (0 === e.length) return t;
                for (var a = e.length; a < t.length; a++) e.push(t[a]);
                return e;
              }
              if ("function" == typeof e) {
                for (var o = [], u = t.length, s = 0; s < u; s++)
                  o.push(
                    e({
                      i: s,
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
            e && ((o.labels = Au(o.labels)), (o.data = Au(o.data))),
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
              r && t.selectAll("text." + n + "legendTitle").call(Nu, r);
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
        d3_defaultLocale: { format: ca, formatPrefix: fa },
        d3_defaultFormatSpecifier: ".01f",
        d3_defaultDelimiter: "to",
      };
    function Eu() {
      var t = ru(),
        e = "rect",
        n = 15,
        r = 15,
        i = 10,
        a = 2,
        o = [5],
        u = void 0,
        s = [],
        l = "",
        c = !1,
        f = "",
        h = Su.d3_defaultLocale,
        d = Su.d3_defaultFormatSpecifier,
        p = 10,
        g = "middle",
        y = Su.d3_defaultDelimiter,
        v = void 0,
        m = "vertical",
        b = !1,
        _ = void 0,
        w = void 0,
        x = _a("cellover", "cellout", "cellclick");
      function M(M) {
        var k = Su.d3_calcType(t, b, o, s, h.format(d), y);
        M.selectAll("g")
          .data([t])
          .enter()
          .append("g")
          .attr("class", l + "legendCells"),
          u && Su.d3_filterCells(k, u);
        var A = M.select("." + l + "legendCells")
            .selectAll("." + l + "cell")
            .data(k.data),
          N = A.enter()
            .append("g")
            .attr("class", l + "cell");
        N.append(e).attr("class", l + "swatch");
        var S = M.selectAll("g." + l + "cell " + e + "." + l + "swatch").data(
          k.data
        );
        Su.d3_addEvents(N, x),
          A.exit().transition().style("opacity", 0).remove(),
          S.exit().transition().style("opacity", 0).remove(),
          (S = S.merge(S)),
          Su.d3_drawShapes(e, S, r, n, i, _);
        var E = Su.d3_addText(M, N, k.labels, l, v);
        A = N.merge(A);
        var $ = E.nodes().map(function (t) {
            return t.getBBox();
          }),
          C = S.nodes().map(function (t) {
            return t.getBBox();
          });
        c
          ? S.attr("class", function (t) {
              return l + "swatch " + k.feature(t);
            })
          : "line" == e
          ? S.style("stroke", k.feature)
          : S.style("fill", k.feature);
        var P,
          T = void 0,
          L = void 0,
          q = "start" == g ? 0 : "middle" == g ? 0.5 : 1;
        "vertical" === m
          ? ((P = $.map(function (t, e) {
              return Math.max(t.height, C[e].height);
            })),
            (T = function (t, e) {
              var n = (function (t, e) {
                var n,
                  r = 0,
                  i = t.length,
                  a = -1;
                if (null == e) for (; ++a < i; ) (n = +t[a]) && (r += n);
                else for (; ++a < i; ) (n = +e(t[a], a, t)) && (r += n);
                return r;
              })(P.slice(0, e));
              return "translate(0, " + (n + e * a) + ")";
            }),
            (L = function (t, e) {
              return (
                "translate( " +
                (C[e].width + C[e].x + p) +
                ", " +
                (C[e].y + C[e].height / 2 + 5) +
                ")"
              );
            }))
          : "horizontal" === m &&
            ((T = function (t, e) {
              return "translate(" + e * (C[e].width + a) + ",0)";
            }),
            (L = function (t, e) {
              return (
                "translate(" +
                (C[e].width * q + C[e].x) +
                ",\n          " +
                (C[e].height + C[e].y + p + 8) +
                ")"
              );
            })),
          Su.d3_placement(m, A, T, E, L, g),
          Su.d3_title(M, f, l, w),
          A.transition().style("opacity", 1);
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
          return arguments.length ? ((s = t), M) : s;
        }),
        (M.labelAlign = function (t) {
          return arguments.length
            ? (("start" != t && "end" != t && "middle" != t) || (g = t), M)
            : g;
        }),
        (M.locale = function (t) {
          return arguments.length ? ((h = pa(t)), M) : h;
        }),
        (M.labelFormat = function (t) {
          return arguments.length ? ((d = ua(t)), M) : M.locale().format(d);
        }),
        (M.labelOffset = function (t) {
          return arguments.length ? ((p = +t), M) : p;
        }),
        (M.labelDelimiter = function (t) {
          return arguments.length ? ((y = t), M) : y;
        }),
        (M.labelWrap = function (t) {
          return arguments.length ? ((v = t), M) : v;
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
          return arguments.length ? ((l = t), M) : l;
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
    function $u(n, r, i, a, o, u, s, l) {
      let c = {
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
        color: yr(vr),
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
      if (void 0 !== i) for (let t in i) void 0 !== i[t] && (c[t] = i[t]);
      let f = c.domainMax
          ? Math.max(
              c.domainMax,
              t(r, function (e) {
                return t(
                  e.map(function (t) {
                    return t.value;
                  })
                );
              })
            )
          : t(r, function (e) {
              return t(
                e.map(function (t) {
                  return t.value;
                })
              );
            }),
        h = Math.min(c.w, c.h),
        d = r[0].map(function (t, e) {
          return t.axis;
        }),
        p = d.length,
        g = Math.min(0.35 * h, "center" === c.legendSide ? 0.3 * h : 0.45 * h),
        y = Cn(",.0f"),
        v = (2 * Math.PI) / p,
        m = [],
        b = [];
      if (c.independent)
        r.forEach(function (t) {
          t.forEach(function (t) {
            t.axis in b
              ? Math.abs(t.value) > b[t.axis] && (b[t.axis] = Math.abs(t.value))
              : (b[t.axis] = Math.abs(t.value));
          });
        }),
          d.map(function (t) {
            m.push(lr().range([0, g]).domain([0, b[t]]));
          }),
          (f = []),
          d.map(function (t) {
            f.push(b[t]);
          });
      else {
        let e = c.domainMax
          ? Math.max(
              c.domainMax,
              t(r, function (e) {
                return t(
                  e.map(function (t) {
                    return t.value;
                  })
                );
              })
            )
          : t(r, function (e) {
              return t(
                e.map(function (t) {
                  return t.value;
                })
              );
            });
        d.map(function (t) {
          m.push(lr().range([0, g]).domain([0, f]));
        }),
          (f = []),
          d.map(function (t) {
            f.push(e);
          });
      }
      mr(n).select("svg").remove();
      let _ = mr(n)
          .append("svg")
          .attr(
            "font-family",
            '"Open Sans", "Noto Sans JP", "Noto Sans CJK KR", sans-serif'
          )
          .attr("width", c.w)
          .attr("height", c.h + c.margin.bottom)
          .attr("class", "radar" + n),
        w =
          "center" === c.legendSide
            ? c.h / 2 - c.margin.top
            : c.h / 2 + c.margin.top,
        x = _.append("g").attr(
          "transform",
          "translate(" + c.w / 2 + "," + w + ")"
        ),
        M = x.append("defs").append("filter").attr("id", "glow"),
        k =
          (M.append("feGaussianBlur")
            .attr("stdDeviation", "".concat(c.glow))
            .attr("result", "coloredBlur"),
          M.append("feMerge")),
        A =
          (k.append("feMergeNode").attr("in", "coloredBlur"),
          k.append("feMergeNode").attr("in", "SourceGraphic"),
          x.append("g").attr("class", "axisWrapper"));
      if (c.independent) {
        let t = [];
        d.forEach(function (n, r) {
          e(1, c.levels + 1)
            .reverse()
            .forEach(function (e, i) {
              t.push({ d: n, i: r, dd: e, ii: i });
            });
        }),
          A.selectAll(".axisLabel.independent")
            .data(t)
            .enter()
            .append("text")
            .attr("class", "axisLabel independent")
            .attr("x", function (t) {
              return (t.dd / c.levels) * g * Math.cos(v * t.i - Math.PI / 2);
            })
            .attr("y", function (t) {
              return (t.dd / c.levels) * g * Math.sin(v * t.i - Math.PI / 2);
            })
            .attr("dy", "0.35em")
            .style("font-size", "".concat(c.labelScale ? c.scaleFont : 0, "px"))
            .style("font-weight", "900")
            .style("z-index", 10)
            .attr("fill", c.axisColor)
            .text(function (t) {
              return y((f[t.i] * t.dd) / c.levels);
            });
      } else
        A.selectAll(".axisLabel")
          .data(e(1, c.levels + 1).reverse())
          .enter()
          .append("text")
          .attr("class", "axisLabel")
          .attr("x", 4)
          .attr("y", function (t) {
            return (-t * g) / c.levels;
          })
          .attr("dy", "0.4em")
          .style("font-size", "".concat(c.labelScale ? c.scaleFont : 0, "px"))
          .style("font-weight", "900")
          .style("z-index", 10)
          .attr("fill", c.axisColor)
          .text(function (t) {
            return y((f[0] * t) / c.levels);
          });
      let N = 1;
      c.roundStrokes
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
      let S = A.selectAll(".axis")
        .data(d)
        .enter()
        .append("g")
        .attr("class", "axis");
      S.append("line")
        .attr("x1", function (t, e) {
          return c.roundStrokes
            ? c.negatives
              ? m[e](-1 * f[e]) * Math.cos(v * e - Math.PI / 2)
              : 0
            : c.negatives
            ? m[e](f[e] * -N) * Math.cos(v * e - Math.PI / 2)
            : 0;
        })
        .attr("y1", function (t, e) {
          return c.roundStrokes
            ? c.negatives
              ? m[e](-1 * f[e]) * Math.sin(v * e - Math.PI / 2)
              : 0
            : c.negatives
            ? m[e](f[e] * -N) * Math.sin(v * e - Math.PI / 2)
            : 0;
        })
        .attr("x2", function (t, e) {
          return m[e](1 * f[e]) * Math.cos(v * e - Math.PI / 2);
        })
        .attr("y2", function (t, e) {
          return m[e](1 * f[e]) * Math.sin(v * e - Math.PI / 2);
        })
        .attr("class", "line")
        .style("stroke", function (t, e) {
          return c.axisColor;
        })
        .style("stroke-width", "2px"),
        S.append("text")
          .attr("class", "legend")
          .style("font-size", "".concat(c.axisFont, "px"))
          .style("font-weight", "549")
          .attr("text-anchor", "middle")
          .style("fill", "rgb(102, 102, 102)")
          .attr("dy", "1em")
          .attr("x", function (t, e) {
            return m[e](f[e] * c.labelFactor) * Math.cos(v * e - Math.PI / 2);
          })
          .attr("y", function (t, e) {
            return (
              m[e](f[e] * c.labelFactor) * Math.sin(v * e - Math.PI / 2) -
              c.labelFine
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
                s = parseFloat(n.attr("dy")),
                l = n
                  .text(null)
                  .append("tspan")
                  .attr("x", u)
                  .attr("y", o)
                  .attr("dy", s + "em");
              for (; (t = r.pop()); ) {
                i.push(t), l.text(i.join(" "));
                let r = 0;
                if (
                  l.node() &&
                  "function" == typeof l.node().getComputedTextLength
                )
                  try {
                    r = l.node().getComputedTextLength();
                  } catch (t) {
                    r = 0;
                  }
                r > e &&
                  (i.pop(),
                  l.text(i.join(" ")),
                  (i = [t]),
                  (l = n
                    .append("tspan")
                    .attr("x", u)
                    .attr("y", o)
                    .attr("dy", 1.4 * ++a + s + "em")
                    .text(t)));
              }
            });
          }, c.wrapWidth);
      let E = [];
      if (c.roundStrokes)
        A.selectAll(".levels")
          .data(e(1, c.levels + 1).reverse())
          .enter()
          .append("circle")
          .attr("class", "gridCircle")
          .attr("r", function (t, e) {
            return (g / c.levels) * t;
          })
          .style("fill", function (t, e) {
            return c.backgroundColor;
          })
          .style("stroke", function (t, e) {
            return c.axisColor;
          })
          .style("fill-opacity", c.opacityCircles)
          .style("filter", "url(#glow)");
      else {
        E = [];
        let t = A.selectAll(".axisLabel").nodes();
        const e = (t) => {
          let e = [];
          for (let n = 0; n < p; n++) {
            let r = t * Math.cos(v * n - (3 * Math.PI) / 2),
              i = t * Math.sin(v * n - (3 * Math.PI) / 2);
            e.push({ x: r, y: i });
          }
          return e;
        };
        (c.independent ? t.slice(0, t.length / p) : t).forEach(function (t) {
          let n = parseInt(t.getAttribute("y"), 10);
          E.push(e(n));
        }),
          A.selectAll(".gridCircle.level-polygon")
            .data(E)
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
              return c.backgroundColor;
            })
            .style("stroke", function (t, e) {
              return c.axisColor;
            })
            .style("fill-opacity", c.opacityCircles)
            .style("filter", "url(#glow)");
      }
      let $ = zr()
        .angle(function (t, e) {
          return e * v;
        })
        .radius(function (t, e) {
          return m[e](
            c.negatives
              ? t.value < 0
                ? 0.8 * t.value
                : t.value
              : t.value < 0
              ? 0
              : t.value
          );
        });
      c.roundStrokes && $.curve(Wr);
      let C = x
        .selectAll(".radarWrapper")
        .data(r)
        .enter()
        .append("g")
        .attr("class", "radarWrapper")
        .attr("id", function (t, e) {
          return "v" + String(a[e].label).replace(/[^A-Z0-9]+/gi, "");
        });
      C.append("path")
        .attr("class", "radarArea")
        .attr("id", function (t, e) {
          return "v" + String(a[e].label).replace(/[^A-Z0-9]+/gi, "");
        })
        .attr("d", function (t, e) {
          return $(r[e]);
        })
        .style("fill", function (t, e) {
          return c.color(e);
        })
        .style("fill-opacity", c.opacityArea)
        .on("mouseover", function (t, e) {
          br(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", 0.1),
            mr(this).transition().duration(200).style("fill-opacity", 0.7);
        })
        .on("mouseout", function (t, e) {
          br(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", c.opacityArea);
        }),
        C.append("path")
          .attr("class", "radarStroke")
          .attr("d", function (t, e) {
            return $(r[e]);
          })
          .style("stroke-width", c.strokeWidth + "px")
          .style("stroke", function (t, e) {
            return c.color(e);
          })
          .style("fill", "none")
          .style("filter", "url(#glow)"),
        C.selectAll(".radarCircle")
          .data(function (t, e) {
            return t;
          })
          .enter()
          .append("circle")
          .attr("class", "radarCircle")
          .attr("r", c.dotRadius)
          .attr("cx", function (t, e) {
            return (
              m[e](
                c.negatives
                  ? t.value < 0
                    ? t.value * c.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.cos(v * e - Math.PI / 2)
            );
          })
          .attr("cy", function (t, e) {
            return (
              m[e](
                c.negatives
                  ? t.value < 0
                    ? t.value * c.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.sin(v * e - Math.PI / 2)
            );
          })
          .style("fill", function (t, e, n) {
            return c.color(n);
          })
          .style("fill-opacity", 1),
        x
          .selectAll(".radarCircleWrapper")
          .data(r)
          .enter()
          .append("g")
          .attr("class", "radarCircleWrapper")
          .attr("child_id", function (t, e) {
            return "v" + String(a[e].label).replace(/[^A-Z0-9]+/gi, "");
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
          .attr("r", 3 * c.dotRadius)
          .attr("cx", function (t, e) {
            return (
              m[e](
                c.negatives
                  ? t.value < 0
                    ? t.value * c.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.cos(v * e - Math.PI / 2)
            );
          })
          .attr("cy", function (t, e) {
            return (
              m[e](
                c.negatives
                  ? t.value < 0
                    ? t.value * c.negativeR
                    : t.value
                  : t.value < 0
                  ? 0
                  : t.value
              ) * Math.sin(v * e - Math.PI / 2)
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
            let i = { value: e.rendered };
            P.attr("x", n)
              .attr("y", r)
              .text(LookerCharts.Utils.textForCell(i))
              .transition()
              .duration(200)
              .style("pointer-events", "none")
              .style("opacity", 1);
          })
          .on("click", function (t, e) {
            LookerCharts.Utils.openDrillMenu({ links: e.links, event: t });
          })
          .on("mouseout", function (t, e) {
            P.transition().duration(200).style("opacity", 0),
              br(".radarArea")
                .transition()
                .duration(200)
                .style("fill-opacity", c.opacityArea);
          });
      let P = x.append("text").attr("class", "tooltip").style("opacity", 0),
        T = document.createElement("style");
      (T.type = "text/css"),
        (T.innerHTML =
          "g.radarWrapper.hidden { opacity: 0.0; } .legendCells .hidden { opacity: 0.2;text-align:center }");
      let L,
        q,
        j,
        z,
        O = yr()
          .domain(a.map((t) => t.label))
          .range(a.map((t, e) => c.color(e)));
      (_ = mr("svg")),
        "left" === c.legendSide
          ? ((L = 20), (q = 10), (j = "vertical"), (z = c.legendPad + 0))
          : "right" === c.legendSide
          ? ((L = Math.max(0, c.w - 120)),
            (q = 20),
            (j = "vertical"),
            (z = c.legendPad + 0))
          : "center" === c.legendSide
          ? ((q = Math.max(0, c.h - 40)),
            (j = "horizontal"),
            (z = c.legendPad + 50))
          : "none" === c.legendSide &&
            ((L = -100), (q = -150), (j = "vertical"), (z = c.legendPad + 70)),
        _.append("g")
          .attr("class", "legendOrdinal")
          .style("font-size", "".concat(c.legendFont, "px"))
          .style("fill", "rgb(102, 102, 102)");
      let R = Eu()
        .shape(
          "path",
          (function (t, e) {
            let n = null,
              r = Tr(i);
            function i() {
              let i;
              if (
                (n || (n = i = r()),
                t.apply(this, arguments).draw(n, +e.apply(this, arguments)),
                i)
              )
                return (n = null), i + "" || null;
            }
            return (
              (t = "function" == typeof t ? t : Ar(t || Ir)),
              (e = "function" == typeof e ? e : Ar(void 0 === e ? 64 : +e)),
              (i.type = function (e) {
                return arguments.length
                  ? ((t = "function" == typeof e ? e : Ar(e)), i)
                  : t;
              }),
              (i.size = function (t) {
                return arguments.length
                  ? ((e = "function" == typeof t ? t : Ar(+t)), i)
                  : e;
              }),
              (i.context = function (t) {
                return arguments.length ? ((n = t ?? null), i) : n;
              }),
              i
            );
          })()
            .type(Ir)
            .size(120)
        )
        .shapePadding(z)
        .scale(O)
        .orient(j)
        .on("cellclick", function (t, e) {
          let n =
              "string" == typeof e
                ? e
                : e && "object" == typeof e && e.data
                ? e.data
                : String(e || ""),
            r = String(n).replace(/[^A-Z0-9]+/gi, "");
          br("#v".concat(r)).classed("hidden", function () {
            return !mr(this).classed("hidden");
          });
          const i = mr(this);
          i.classed("hidden", !i.classed("hidden")),
            mr("#v" + r).classed("hidden")
              ? (mr("#v".concat(r))
                  .style("opacity", "0")
                  .style("pointer-events", "none"),
                br("[child_id=v".concat(r, "]")).style(
                  "pointer-events",
                  "none"
                ),
                br("[series_id=v".concat(r, "]")).style(
                  "pointer-events",
                  "none"
                ))
              : (mr("#v".concat(r))
                  .style("opacity", "1")
                  .style("pointer-events", null),
                br("[child_id=v".concat(r, "]")).style("pointer-events", "all"),
                br("[series_id=v".concat(r, "]")).style(
                  "pointer-events",
                  "all"
                )),
            i.classed("hidden")
              ? mr(this).style("opacity", ".2")
              : mr(this).style("opacity", "1");
        });
      _.select(".legendOrdinal").call(R);
      let D,
        I = mr(".legendCells").node(),
        F = 0;
      if (I && "function" == typeof I.getBBox)
        try {
          F = I.getBBox().width;
        } catch (t) {
          F = 0;
        }
      "center" == c.legendSide
        ? ((D = Math.max(0, c.w / 2 - F / 2 + c.margin.left)),
          mr(".legendOrdinal").attr("transform", function (t) {
            return "translate(".concat(D, ",").concat(q, ")");
          }))
        : "right" == c.legendSide
        ? ((D = Math.max(0, c.w - 1.1 * F)),
          mr(".legendOrdinal").attr("transform", function (t) {
            return "translate(".concat(D, ",").concat(q, ")");
          }))
        : mr(".legendOrdinal").attr("transform", function (t) {
            return "translate(".concat(L, ",").concat(q, ")");
          }),
        l();
    }
    const Cu = {
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
      },
      Pu = {
        create: function (t, e) {
          t.innerHTML =
            '<div id=\'vis\' style=\'width: 100%; height: 100%; font-family: "Open Sans", "Noto Sans JP", "Noto Sans", "Noto Sans CJK KR", Helvetica, Arial, sans-serif;\'></div>';
        },
        updateAsync: function (t, e, n, r, i, a) {
          if ((this.clearErrors(), !t || t.length < 1))
            return (
              this.addError({ title: "No results.", message: "" }),
              (e.innerHTML =
                "<div id='vis' style='font-family: \"Open Sans\", sans-serif;'>No Results</div>"),
              void a()
            );
          e.innerHTML =
            '<div id=\'vis\' style=\'width: 100%; height: 100%; font-family: "Open Sans", "Noto Sans JP", "Noto Sans", "Noto Sans CJK KR", Helvetica, Arial, sans-serif;\'></div>';
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
          let s = { top: 20, right: 20, bottom: 20, left: 20 },
            l = e.clientWidth || 600,
            c = e.clientHeight || 600,
            f = [
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
            g = [];
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
                g.push(t.key);
              }),
                r.fields.measure_like.forEach(function (t) {
                  d.push({ name: t.name, label: t.label_short.trim() });
                }),
                g.forEach(function (e, n) {
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
                    label: t.label_short
                      ? t.label_short.trim()
                      : t.label.trim(),
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
                (g = p.map((t) => t.label));
            }
            let e = Object.assign({}, Cu);
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
            let i = yr().range(
                p.map(function (t) {
                  return n["".concat(t.label, "_color")] || t.color;
                })
              ),
              o = {};
            n.levels
              ? ((o = {
                  w: l,
                  h: c,
                  margin: s,
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
                  axisColor: n.axisColor || n.axis_color,
                  strokeWidth: n.stroke_width / 5,
                  legendSide: n.legend_side,
                  glow: n.glow / 20,
                  negatives: n.negatives,
                  negativeR: n.negative_r || 0.81,
                  independent: n.independent,
                  legendPad: n.legend_padding,
                  legendFont: n.legend_font,
                  domainMax: n.domain_max,
                  labelScale: n.labelScale,
                }),
                $u("#vis", h, o, p, 0, 0, 0, a))
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
    return looker.plugins.visualizations.add(Pu), {};
  })()
);
