var __defProp = Object.defineProperty;
var __name = (target2, value) => __defProp(target2, "name", { value, configurable: true });

// node_modules/preact/dist/preact.module.js
var n, l, u, t, i, r, o, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n3, l4) {
  for (var u4 in l4) n3[u4] = l4[u4];
  return n3;
}
__name(w, "w");
function _(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
__name(_, "_");
function g(l4, u4, t4) {
  var i4, r3, o4, e3 = {};
  for (o4 in u4) "key" == o4 ? i4 = u4[o4] : "ref" == o4 ? r3 = u4[o4] : e3[o4] = u4[o4];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o4 in l4.defaultProps) void 0 === e3[o4] && (e3[o4] = l4.defaultProps[o4]);
  return m(l4, e3, i4, r3, null);
}
__name(g, "g");
function m(n3, t4, i4, r3, o4) {
  var e3 = { type: n3, props: t4, key: i4, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
  return null == o4 && null != l.vnode && l.vnode(e3), e3;
}
__name(m, "m");
function b() {
  return { current: null };
}
__name(b, "b");
function k(n3) {
  return n3.children;
}
__name(k, "k");
function x(n3, l4) {
  this.props = n3, this.context = l4;
}
__name(x, "x");
function C(n3, l4) {
  if (null == l4) return n3.__ ? C(n3.__, n3.__i + 1) : null;
  for (var u4; l4 < n3.__k.length; l4++) if (null != (u4 = n3.__k[l4]) && null != u4.__e) return u4.__e;
  return "function" == typeof n3.type ? C(n3) : null;
}
__name(C, "C");
function S(n3) {
  var l4, u4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++) if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
      n3.__e = n3.__c.base = u4.__e;
      break;
    }
    return S(n3);
  }
}
__name(S, "S");
function M(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !P.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(P);
}
__name(M, "M");
function P() {
  var n3, u4, t4, r3, o4, f4, c4, s4;
  for (i.sort(e); n3 = i.shift(); ) n3.__d && (u4 = i.length, r3 = void 0, f4 = (o4 = (t4 = n3).__v).__e, c4 = [], s4 = [], t4.__P && ((r3 = w({}, o4)).__v = o4.__v + 1, l.vnode && l.vnode(r3), j(t4.__P, r3, o4, t4.__n, t4.__P.namespaceURI, 32 & o4.__u ? [f4] : null, c4, null == f4 ? C(o4) : f4, !!(32 & o4.__u), s4), r3.__v = o4.__v, r3.__.__k[r3.__i] = r3, z(c4, r3, s4), r3.__e != f4 && S(r3)), i.length > u4 && i.sort(e));
  P.__r = 0;
}
__name(P, "P");
function $(n3, l4, u4, t4, i4, r3, o4, e3, f4, c4, s4) {
  var a4, h3, y3, d3, w4, _3, g4 = t4 && t4.__k || v, m3 = l4.length;
  for (f4 = I(u4, l4, g4, f4, m3), a4 = 0; a4 < m3; a4++) null != (y3 = u4.__k[a4]) && (h3 = -1 === y3.__i ? p : g4[y3.__i] || p, y3.__i = a4, _3 = j(n3, y3, h3, i4, r3, o4, e3, f4, c4, s4), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && V(h3.ref, null, y3), s4.push(y3.ref, y3.__c || d3, y3)), null == w4 && null != d3 && (w4 = d3), 4 & y3.__u || h3.__k === y3.__k ? f4 = A(y3, f4, n3) : "function" == typeof y3.type && void 0 !== _3 ? f4 = _3 : d3 && (f4 = d3.nextSibling), y3.__u &= -7);
  return u4.__e = w4, f4;
}
__name($, "$");
function I(n3, l4, u4, t4, i4) {
  var r3, o4, e3, f4, c4, s4 = u4.length, a4 = s4, h3 = 0;
  for (n3.__k = new Array(i4), r3 = 0; r3 < i4; r3++) null != (o4 = l4[r3]) && "boolean" != typeof o4 && "function" != typeof o4 ? (f4 = r3 + h3, (o4 = n3.__k[r3] = "string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? m(null, o4, null, null, null) : d(o4) ? m(k, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : o4).__ = n3, o4.__b = n3.__b + 1, e3 = null, -1 !== (c4 = o4.__i = L(o4, u4, f4, a4)) && (a4--, (e3 = u4[c4]) && (e3.__u |= 2)), null == e3 || null === e3.__v ? (-1 == c4 && h3--, "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f4 && (c4 == f4 - 1 ? h3-- : c4 == f4 + 1 ? h3++ : (c4 > f4 ? h3-- : h3++, o4.__u |= 4))) : n3.__k[r3] = null;
  if (a4) for (r3 = 0; r3 < s4; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t4 && (t4 = C(e3)), q(e3, e3));
  return t4;
}
__name(I, "I");
function A(n3, l4, u4) {
  var t4, i4;
  if ("function" == typeof n3.type) {
    for (t4 = n3.__k, i4 = 0; t4 && i4 < t4.length; i4++) t4[i4] && (t4[i4].__ = n3, l4 = A(t4[i4], l4, u4));
    return l4;
  }
  n3.__e != l4 && (l4 && n3.type && !u4.contains(l4) && (l4 = C(n3)), u4.insertBefore(n3.__e, l4 || null), l4 = n3.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 == l4.nodeType);
  return l4;
}
__name(A, "A");
function H(n3, l4) {
  return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (d(n3) ? n3.some(function(n4) {
    H(n4, l4);
  }) : l4.push(n3)), l4;
}
__name(H, "H");
function L(n3, l4, u4, t4) {
  var i4, r3, o4 = n3.key, e3 = n3.type, f4 = l4[u4];
  if (null === f4 || f4 && o4 == f4.key && e3 === f4.type && 0 == (2 & f4.__u)) return u4;
  if (t4 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = u4 - 1, r3 = u4 + 1; i4 >= 0 || r3 < l4.length; ) {
    if (i4 >= 0) {
      if ((f4 = l4[i4]) && 0 == (2 & f4.__u) && o4 == f4.key && e3 === f4.type) return i4;
      i4--;
    }
    if (r3 < l4.length) {
      if ((f4 = l4[r3]) && 0 == (2 & f4.__u) && o4 == f4.key && e3 === f4.type) return r3;
      r3++;
    }
  }
  return -1;
}
__name(L, "L");
function T(n3, l4, u4) {
  "-" == l4[0] ? n3.setProperty(l4, null == u4 ? "" : u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || y.test(l4) ? u4 : u4 + "px";
}
__name(T, "T");
function F(n3, l4, u4, t4, i4) {
  var r3;
  n: if ("style" == l4) if ("string" == typeof u4) n3.style.cssText = u4;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l4 in t4) u4 && l4 in u4 || T(n3.style, l4, "");
    if (u4) for (l4 in u4) t4 && u4[l4] === t4[l4] || T(n3.style, l4, u4[l4]);
  }
  else if ("o" == l4[0] && "n" == l4[1]) r3 = l4 != (l4 = l4.replace(f, "$1")), l4 = l4.toLowerCase() in n3 || "onFocusOut" == l4 || "onFocusIn" == l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r3] = u4, u4 ? t4 ? u4.u = t4.u : (u4.u = c, n3.addEventListener(l4, r3 ? a : s, r3)) : n3.removeEventListener(l4, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3) try {
      n3[l4] = null == u4 ? "" : u4;
      break n;
    } catch (n4) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u4 ? "" : u4));
  }
}
__name(F, "F");
function O(n3) {
  return function(u4) {
    if (this.l) {
      var t4 = this.l[u4.type + n3];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t4.u) return;
      return t4(l.event ? l.event(u4) : u4);
    }
  };
}
__name(O, "O");
function j(n3, u4, t4, i4, r3, o4, e3, f4, c4, s4) {
  var a4, h3, p4, v3, y3, g4, m3, b3, C4, S2, M3, P4, I3, A4, H3, L3, T4, F4 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f4 = u4.__e = t4.__e]), (a4 = l.__b) && a4(u4);
  n: if ("function" == typeof F4) try {
    if (b3 = u4.props, C4 = "prototype" in F4 && F4.prototype.render, S2 = (a4 = F4.contextType) && i4[a4.__c], M3 = a4 ? S2 ? S2.props.value : a4.__ : i4, t4.__c ? m3 = (h3 = u4.__c = t4.__c).__ = h3.__E : (C4 ? u4.__c = h3 = new F4(b3, M3) : (u4.__c = h3 = new x(b3, M3), h3.constructor = F4, h3.render = B), S2 && S2.sub(h3), h3.props = b3, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i4, p4 = h3.__d = true, h3.__h = [], h3._sb = []), C4 && null == h3.__s && (h3.__s = h3.state), C4 && null != F4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, F4.getDerivedStateFromProps(b3, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p4) C4 && null == F4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C4 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (C4 && null == F4.getDerivedStateFromProps && b3 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b3, M3), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b3, h3.__s, M3) || u4.__v == t4.__v)) {
        for (u4.__v != t4.__v && (h3.props = b3, h3.state = h3.__s, h3.__d = false), u4.__e = t4.__e, u4.__k = t4.__k, u4.__k.some(function(n4) {
          n4 && (n4.__ = u4);
        }), P4 = 0; P4 < h3._sb.length; P4++) h3.__h.push(h3._sb[P4]);
        h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b3, h3.__s, M3), C4 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, g4);
      });
    }
    if (h3.context = M3, h3.props = b3, h3.__P = n3, h3.__e = false, I3 = l.__r, A4 = 0, C4) {
      for (h3.state = h3.__s, h3.__d = false, I3 && I3(u4), a4 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
      h3._sb = [];
    } else do {
      h3.__d = false, I3 && I3(u4), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A4 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), C4 && !p4 && null != h3.getSnapshotBeforeUpdate && (g4 = h3.getSnapshotBeforeUpdate(v3, y3)), f4 = $(n3, d(L3 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? L3 : [L3], u4, t4, i4, r3, o4, e3, f4, c4, s4), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n4) {
    if (u4.__v = null, c4 || null != o4) if (n4.then) {
      for (u4.__u |= c4 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o4[o4.indexOf(f4)] = null, u4.__e = f4;
    } else for (T4 = o4.length; T4--; ) _(o4[T4]);
    else u4.__e = t4.__e, u4.__k = t4.__k;
    l.__e(n4, u4, t4);
  }
  else null == o4 && u4.__v == t4.__v ? (u4.__k = t4.__k, u4.__e = t4.__e) : f4 = u4.__e = N(t4.__e, u4, t4, i4, r3, o4, e3, c4, s4);
  return (a4 = l.diffed) && a4(u4), 128 & u4.__u ? void 0 : f4;
}
__name(j, "j");
function z(n3, u4, t4) {
  for (var i4 = 0; i4 < t4.length; i4++) V(t4[i4], t4[++i4], t4[++i4]);
  l.__c && l.__c(u4, n3), n3.some(function(u5) {
    try {
      n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
        n4.call(u5);
      });
    } catch (n4) {
      l.__e(n4, u5.__v);
    }
  });
}
__name(z, "z");
function N(u4, t4, i4, r3, o4, e3, f4, c4, s4) {
  var a4, h3, v3, y3, w4, g4, m3, b3 = i4.props, k4 = t4.props, x4 = t4.type;
  if ("svg" == x4 ? o4 = "http://www.w3.org/2000/svg" : "math" == x4 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a4 = 0; a4 < e3.length; a4++) if ((w4 = e3[a4]) && "setAttribute" in w4 == !!x4 && (x4 ? w4.localName == x4 : 3 == w4.nodeType)) {
      u4 = w4, e3[a4] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x4) return document.createTextNode(k4);
    u4 = document.createElementNS(o4, x4, k4.is && k4), c4 && (l.__m && l.__m(t4, e3), c4 = false), e3 = null;
  }
  if (null === x4) b3 === k4 || c4 && u4.data === k4 || (u4.data = k4);
  else {
    if (e3 = e3 && n.call(u4.childNodes), b3 = i4.props || p, !c4 && null != e3) for (b3 = {}, a4 = 0; a4 < u4.attributes.length; a4++) b3[(w4 = u4.attributes[a4]).name] = w4.value;
    for (a4 in b3) if (w4 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v3 = w4;
    else if (!(a4 in k4)) {
      if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4) continue;
      F(u4, a4, null, w4, o4);
    }
    for (a4 in k4) w4 = k4[a4], "children" == a4 ? y3 = w4 : "dangerouslySetInnerHTML" == a4 ? h3 = w4 : "value" == a4 ? g4 = w4 : "checked" == a4 ? m3 = w4 : c4 && "function" != typeof w4 || b3[a4] === w4 || F(u4, a4, w4, b3[a4], o4);
    if (h3) c4 || v3 && (h3.__html === v3.__html || h3.__html === u4.innerHTML) || (u4.innerHTML = h3.__html), t4.__k = [];
    else if (v3 && (u4.innerHTML = ""), $(u4, d(y3) ? y3 : [y3], t4, i4, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o4, e3, f4, e3 ? e3[0] : i4.__k && C(i4, 0), c4, s4), null != e3) for (a4 = e3.length; a4--; ) _(e3[a4]);
    c4 || (a4 = "value", "progress" == x4 && null == g4 ? u4.removeAttribute("value") : void 0 !== g4 && (g4 !== u4[a4] || "progress" == x4 && !g4 || "option" == x4 && g4 !== b3[a4]) && F(u4, a4, g4, b3[a4], o4), a4 = "checked", void 0 !== m3 && m3 !== u4[a4] && F(u4, a4, m3, b3[a4], o4));
  }
  return u4;
}
__name(N, "N");
function V(n3, u4, t4) {
  try {
    if ("function" == typeof n3) {
      var i4 = "function" == typeof n3.__u;
      i4 && n3.__u(), i4 && null == u4 || (n3.__u = n3(u4));
    } else n3.current = u4;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
__name(V, "V");
function q(n3, u4, t4) {
  var i4, r3;
  if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current !== n3.__e || V(i4, null, u4)), null != (i4 = n3.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n3.__k) for (r3 = 0; r3 < i4.length; r3++) i4[r3] && q(i4[r3], u4, t4 || "function" != typeof n3.type);
  t4 || _(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
__name(q, "q");
function B(n3, l4, u4) {
  return this.constructor(n3, u4);
}
__name(B, "B");
function D(u4, t4, i4) {
  var r3, o4, e3, f4;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u4, t4), o4 = (r3 = "function" == typeof i4) ? null : i4 && i4.__k || t4.__k, e3 = [], f4 = [], j(t4, u4 = (!r3 && i4 || t4).__k = g(k, null, [u4]), o4 || p, p, t4.namespaceURI, !r3 && i4 ? [i4] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e3, !r3 && i4 ? i4 : o4 ? o4.__e : t4.firstChild, r3, f4), z(e3, u4, f4);
}
__name(D, "D");
function E(n3, l4) {
  D(n3, l4, E);
}
__name(E, "E");
function G(l4, u4, t4) {
  var i4, r3, o4, e3, f4 = w({}, l4.props);
  for (o4 in l4.type && l4.type.defaultProps && (e3 = l4.type.defaultProps), u4) "key" == o4 ? i4 = u4[o4] : "ref" == o4 ? r3 = u4[o4] : f4[o4] = void 0 === u4[o4] && void 0 !== e3 ? e3[o4] : u4[o4];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), m(l4.type, f4, i4 || l4.key, r3 || l4.ref, null);
}
__name(G, "G");
function J(n3, l4) {
  var u4 = { __c: l4 = "__cC" + h++, __: n3, Consumer: /* @__PURE__ */ __name(function(n4, l5) {
    return n4.children(l5);
  }, "Consumer"), Provider: /* @__PURE__ */ __name(function(n4) {
    var u5, t4;
    return this.getChildContext || (u5 = /* @__PURE__ */ new Set(), (t4 = {})[l4] = this, this.getChildContext = function() {
      return t4;
    }, this.componentWillUnmount = function() {
      u5 = null;
    }, this.shouldComponentUpdate = function(n5) {
      this.props.value !== n5.value && u5.forEach(function(n6) {
        n6.__e = true, M(n6);
      });
    }, this.sub = function(n5) {
      u5.add(n5);
      var l5 = n5.componentWillUnmount;
      n5.componentWillUnmount = function() {
        u5 && u5.delete(n5), l5 && l5.call(n5);
      };
    }), n4.children;
  }, "Provider") };
  return u4.Provider.__ = u4.Consumer.contextType = u4;
}
__name(J, "J");
n = v.slice, l = { __e: /* @__PURE__ */ __name(function(n3, l4, u4, t4) {
  for (var i4, r3, o4; l4 = l4.__; ) if ((i4 = l4.__c) && !i4.__) try {
    if ((r3 = i4.constructor) && null != r3.getDerivedStateFromError && (i4.setState(r3.getDerivedStateFromError(n3)), o4 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t4 || {}), o4 = i4.__d), o4) return i4.__E = i4;
  } catch (l5) {
    n3 = l5;
  }
  throw n3;
}, "__e") }, u = 0, t = /* @__PURE__ */ __name(function(n3) {
  return null != n3 && null == n3.constructor;
}, "t"), x.prototype.setState = function(n3, l4) {
  var u4;
  u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n3 && (n3 = n3(w({}, u4), this.props)), n3 && w(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), M(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = /* @__PURE__ */ __name(function(n3, l4) {
  return n3.__v.__b - l4.__v.__b;
}, "e"), P.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var t2 = /["&<]/;
function n2(r3) {
  if (0 === r3.length || false === t2.test(r3)) return r3;
  for (var e3 = 0, n3 = 0, o4 = "", f4 = ""; n3 < r3.length; n3++) {
    switch (r3.charCodeAt(n3)) {
      case 34:
        f4 = "&quot;";
        break;
      case 38:
        f4 = "&amp;";
        break;
      case 60:
        f4 = "&lt;";
        break;
      default:
        continue;
    }
    n3 !== e3 && (o4 += r3.slice(e3, n3)), o4 += f4, e3 = n3 + 1;
  }
  return n3 !== e3 && (o4 += r3.slice(e3, n3)), o4;
}
__name(n2, "n");
var o2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, f2 = 0, i2 = Array.isArray;
function u2(e3, t4, n3, o4, i4, u4) {
  t4 || (t4 = {});
  var a4, c4, p4 = t4;
  if ("ref" in p4) for (c4 in p4 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p4[c4] = t4[c4];
  var l4 = { type: e3, props: p4, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e3 && (a4 = e3.defaultProps)) for (c4 in a4) void 0 === p4[c4] && (p4[c4] = a4[c4]);
  return l.vnode && l.vnode(l4), l4;
}
__name(u2, "u");
function a2(r3) {
  var t4 = u2(k, { tpl: r3, exprs: [].slice.call(arguments, 1) });
  return t4.key = t4.__v, t4;
}
__name(a2, "a");
var c2 = {}, p2 = /[A-Z]/g;
function l2(e3, t4) {
  if (l.attr) {
    var f4 = l.attr(e3, t4);
    if ("string" == typeof f4) return f4;
  }
  if ("ref" === e3 || "key" === e3) return "";
  if ("style" === e3 && "object" == typeof t4) {
    var i4 = "";
    for (var u4 in t4) {
      var a4 = t4[u4];
      if (null != a4 && "" !== a4) {
        var l4 = "-" == u4[0] ? u4 : c2[u4] || (c2[u4] = u4.replace(p2, "-$&").toLowerCase()), s4 = ";";
        "number" != typeof a4 || l4.startsWith("--") || o2.test(l4) || (s4 = "px;"), i4 = i4 + l4 + ":" + a4 + s4;
      }
    }
    return e3 + '="' + i4 + '"';
  }
  return null == t4 || false === t4 || "function" == typeof t4 || "object" == typeof t4 ? "" : true === t4 ? e3 : e3 + '="' + n2(t4) + '"';
}
__name(l2, "l");
function s2(r3) {
  if (null == r3 || "boolean" == typeof r3 || "function" == typeof r3) return null;
  if ("object" == typeof r3) {
    if (void 0 === r3.constructor) return r3;
    if (i2(r3)) {
      for (var e3 = 0; e3 < r3.length; e3++) r3[e3] = s2(r3[e3]);
      return r3;
    }
  }
  return n2("" + r3);
}
__name(s2, "s");

// node_modules/preact/hooks/dist/hooks.module.js
var t3, r2, u3, i3, o3 = 0, f3 = [], c3 = l, e2 = c3.__b, a3 = c3.__r, v2 = c3.diffed, l3 = c3.__c, m2 = c3.unmount, s3 = c3.__;
function d2(n3, t4) {
  c3.__h && c3.__h(r2, n3, o3 || t4), o3 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u4.__.length && u4.__.push({}), u4.__[n3];
}
__name(d2, "d");
function h2(n3) {
  return o3 = 1, p3(D2, n3);
}
__name(h2, "h");
function p3(n3, u4, i4) {
  var o4 = d2(t3++, 2);
  if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n4) {
    var t4 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t4, n4);
    t4 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.u)) {
    var f4 = /* @__PURE__ */ __name(function(n4, t4, r3) {
      if (!o4.__c.__H) return true;
      var u5 = o4.__c.__H.__.filter(function(n5) {
        return !!n5.__c;
      });
      if (u5.every(function(n5) {
        return !n5.__N;
      })) return !c4 || c4.call(this, n4, t4, r3);
      var i5 = o4.__c.props !== n4;
      return u5.forEach(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
        }
      }), c4 && c4.call(this, n4, t4, r3) || i5;
    }, "f");
    r2.u = true;
    var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r3) {
      if (this.__e) {
        var u5 = c4;
        c4 = void 0, f4(n4, t4, r3), c4 = u5;
      }
      e3 && e3.call(this, n4, t4, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o4.__N || o4.__;
}
__name(p3, "p");
function y2(n3, u4) {
  var i4 = d2(t3++, 3);
  !c3.__s && C2(i4.__H, u4) && (i4.__ = n3, i4.i = u4, r2.__H.__h.push(i4));
}
__name(y2, "y");
function _2(n3, u4) {
  var i4 = d2(t3++, 4);
  !c3.__s && C2(i4.__H, u4) && (i4.__ = n3, i4.i = u4, r2.__h.push(i4));
}
__name(_2, "_");
function A2(n3) {
  return o3 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
__name(A2, "A");
function F2(n3, t4, r3) {
  o3 = 6, _2(function() {
    return "function" == typeof n3 ? (n3(t4()), function() {
      return n3(null);
    }) : n3 ? (n3.current = t4(), function() {
      return n3.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n3));
}
__name(F2, "F");
function T2(n3, r3) {
  var u4 = d2(t3++, 7);
  return C2(u4.__H, r3) && (u4.__ = n3(), u4.__H = r3, u4.__h = n3), u4.__;
}
__name(T2, "T");
function q2(n3, t4) {
  return o3 = 8, T2(function() {
    return n3;
  }, t4);
}
__name(q2, "q");
function x2(n3) {
  var u4 = r2.context[n3.__c], i4 = d2(t3++, 9);
  return i4.c = n3, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n3.__;
}
__name(x2, "x");
function P2(n3, t4) {
  c3.useDebugValue && c3.useDebugValue(t4 ? t4(n3) : n3);
}
__name(P2, "P");
function b2(n3) {
  var u4 = d2(t3++, 10), i4 = h2();
  return u4.__ = n3, r2.componentDidCatch || (r2.componentDidCatch = function(n4, t4) {
    u4.__ && u4.__(n4, t4), i4[1](n4);
  }), [i4[0], function() {
    i4[1](void 0);
  }];
}
__name(b2, "b");
function g2() {
  var n3 = d2(t3++, 11);
  if (!n3.__) {
    for (var u4 = r2.__v; null !== u4 && !u4.__m && null !== u4.__; ) u4 = u4.__;
    var i4 = u4.__m || (u4.__m = [0, 0]);
    n3.__ = "P" + i4[0] + "-" + i4[1]++;
  }
  return n3.__;
}
__name(g2, "g");
function j2() {
  for (var n3; n3 = f3.shift(); ) if (n3.__P && n3.__H) try {
    n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
  } catch (t4) {
    n3.__H.__h = [], c3.__e(t4, n3.__v);
  }
}
__name(j2, "j");
c3.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c3.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s3 && s3(n3, t4);
}, c3.__r = function(n3) {
  a3 && a3(n3), t3 = 0;
  var i4 = (r2 = n3.__c).__H;
  i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.i = n4.__N = void 0;
  })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t3 = 0)), u3 = r2;
}, c3.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === c3.requestAnimationFrame || ((i3 = c3.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
    n4.i && (n4.__H = n4.i), n4.i = void 0;
  })), u3 = r2 = null;
}, c3.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r3) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c3.__e(r3, n4.__v);
    }
  }), l3 && l3(n3, t4);
}, c3.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r3 = n3.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r3.__H = void 0, t4 && c3.__e(t4, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r3 = /* @__PURE__ */ __name(function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, "r"), u4 = setTimeout(r3, 100);
  k2 && (t4 = requestAnimationFrame(r3));
}
__name(w2, "w");
function z2(n3) {
  var t4 = r2, u4 = n3.__c;
  "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t4;
}
__name(z2, "z");
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
__name(B2, "B");
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r3) {
    return t5 !== n3[r3];
  });
}
__name(C2, "C");
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}
__name(D2, "D");

// node_modules/preact/compat/dist/compat.module.js
function g3(n3, t4) {
  for (var e3 in t4) n3[e3] = t4[e3];
  return n3;
}
__name(g3, "g");
function E2(n3, t4) {
  for (var e3 in n3) if ("__source" !== e3 && !(e3 in t4)) return true;
  for (var r3 in t4) if ("__source" !== r3 && n3[r3] !== t4[r3]) return true;
  return false;
}
__name(E2, "E");
function C3(n3, t4) {
  var e3 = t4(), r3 = h2({ t: { __: e3, u: t4 } }), u4 = r3[0].t, o4 = r3[1];
  return _2(function() {
    u4.__ = e3, u4.u = t4, x3(u4) && o4({ t: u4 });
  }, [n3, e3, t4]), y2(function() {
    return x3(u4) && o4({ t: u4 }), n3(function() {
      x3(u4) && o4({ t: u4 });
    });
  }, [n3]), e3;
}
__name(C3, "C");
function x3(n3) {
  var t4, e3, r3 = n3.u, u4 = n3.__;
  try {
    var o4 = r3();
    return !((t4 = u4) === (e3 = o4) && (0 !== t4 || 1 / t4 == 1 / e3) || t4 != t4 && e3 != e3);
  } catch (n4) {
    return true;
  }
}
__name(x3, "x");
function R(n3) {
  n3();
}
__name(R, "R");
function w3(n3) {
  return n3;
}
__name(w3, "w");
function k3() {
  return [false, R];
}
__name(k3, "k");
var I2 = _2;
function N2(n3, t4) {
  this.props = n3, this.context = t4;
}
__name(N2, "N");
function M2(n3, e3) {
  function r3(n4) {
    var t4 = this.props.ref, r4 = t4 == n4.ref;
    return !r4 && t4 && (t4.call ? t4(null) : t4.current = null), e3 ? !e3(this.props, n4) || !r4 : E2(this.props, n4);
  }
  __name(r3, "r");
  function u4(e4) {
    return this.shouldComponentUpdate = r3, g(n3, e4);
  }
  __name(u4, "u");
  return u4.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
}
__name(M2, "M");
(N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n3, t4) {
  return E2(this.props, n3) || E2(this.state, t4);
};
var T3 = l.__b;
l.__b = function(n3) {
  n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), T3 && T3(n3);
};
var A3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D3(n3) {
  function t4(t5) {
    var e3 = g3({}, t5);
    return delete e3.ref, n3(e3, t5.ref || null);
  }
  __name(t4, "t");
  return t4.$$typeof = A3, t4.render = t4, t4.prototype.isReactComponent = t4.__f = true, t4.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t4;
}
__name(D3, "D");
var L2 = /* @__PURE__ */ __name(function(n3, t4) {
  return null == n3 ? null : H(H(n3).map(t4));
}, "L"), O2 = { map: L2, forEach: L2, count: /* @__PURE__ */ __name(function(n3) {
  return n3 ? H(n3).length : 0;
}, "count"), only: /* @__PURE__ */ __name(function(n3) {
  var t4 = H(n3);
  if (1 !== t4.length) throw "Children.only";
  return t4[0];
}, "only"), toArray: H }, F3 = l.__e;
l.__e = function(n3, t4, e3, r3) {
  if (n3.then) {
    for (var u4, o4 = t4; o4 = o4.__; ) if ((u4 = o4.__c) && u4.__c) return null == t4.__e && (t4.__e = e3.__e, t4.__k = e3.__k), u4.__c(n3, t4);
  }
  F3(n3, t4, e3, r3);
};
var U = l.unmount;
function V2(n3, t4, e3) {
  return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
    "function" == typeof n4.__c && n4.__c();
  }), n3.__c.__H = null), null != (n3 = g3({}, n3)).__c && (n3.__c.__P === e3 && (n3.__c.__P = t4), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
    return V2(n4, t4, e3);
  })), n3;
}
__name(V2, "V");
function W(n3, t4, e3) {
  return n3 && e3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
    return W(n4, t4, e3);
  }), n3.__c && n3.__c.__P === t4 && (n3.__e && e3.appendChild(n3.__e), n3.__c.__e = true, n3.__c.__P = e3)), n3;
}
__name(W, "W");
function P3() {
  this.__u = 0, this.o = null, this.__b = null;
}
__name(P3, "P");
function j3(n3) {
  var t4 = n3.__.__c;
  return t4 && t4.__a && t4.__a(n3);
}
__name(j3, "j");
function z3(n3) {
  var e3, r3, u4;
  function o4(o5) {
    if (e3 || (e3 = n3()).then(function(n4) {
      r3 = n4.default || n4;
    }, function(n4) {
      u4 = n4;
    }), u4) throw u4;
    if (!r3) throw e3;
    return g(r3, o5);
  }
  __name(o4, "o");
  return o4.displayName = "Lazy", o4.__f = true, o4;
}
__name(z3, "z");
function B3() {
  this.i = null, this.l = null;
}
__name(B3, "B");
l.unmount = function(n3) {
  var t4 = n3.__c;
  t4 && t4.__R && t4.__R(), t4 && 32 & n3.__u && (n3.type = null), U && U(n3);
}, (P3.prototype = new x()).__c = function(n3, t4) {
  var e3 = t4.__c, r3 = this;
  null == r3.o && (r3.o = []), r3.o.push(e3);
  var u4 = j3(r3.__v), o4 = false, i4 = /* @__PURE__ */ __name(function() {
    o4 || (o4 = true, e3.__R = null, u4 ? u4(c4) : c4());
  }, "i");
  e3.__R = i4;
  var c4 = /* @__PURE__ */ __name(function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n4 = r3.state.__a;
        r3.__v.__k[0] = W(n4, n4.__c.__P, n4.__c.__O);
      }
      var t5;
      for (r3.setState({ __a: r3.__b = null }); t5 = r3.o.pop(); ) t5.forceUpdate();
    }
  }, "c");
  r3.__u++ || 32 & t4.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n3.then(i4, i4);
}, P3.prototype.componentWillUnmount = function() {
  this.o = [];
}, P3.prototype.render = function(n3, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
      this.__v.__k[0] = V2(this.__b, r3, o4.__O = o4.__P);
    }
    this.__b = null;
  }
  var i4 = e3.__a && g(k, null, n3.fallback);
  return i4 && (i4.__u &= -33), [g(k, null, e3.__a ? null : n3.children), i4];
};
var H2 = /* @__PURE__ */ __name(function(n3, t4, e3) {
  if (++e3[1] === e3[0] && n3.l.delete(t4), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.l.size)) for (e3 = n3.i; e3; ) {
    for (; e3.length > 3; ) e3.pop()();
    if (e3[1] < e3[0]) break;
    n3.i = e3 = e3[2];
  }
}, "H");
function Z(n3) {
  return this.getChildContext = function() {
    return n3.context;
  }, n3.children;
}
__name(Z, "Z");
function Y(n3) {
  var e3 = this, r3 = n3.h;
  e3.componentWillUnmount = function() {
    D(null, e3.v), e3.v = null, e3.h = null;
  }, e3.h && e3.h !== r3 && e3.componentWillUnmount(), e3.v || (e3.h = r3, e3.v = { nodeType: 1, parentNode: r3, childNodes: [], contains: /* @__PURE__ */ __name(function() {
    return true;
  }, "contains"), appendChild: /* @__PURE__ */ __name(function(n4) {
    this.childNodes.push(n4), e3.h.appendChild(n4);
  }, "appendChild"), insertBefore: /* @__PURE__ */ __name(function(n4, t4) {
    this.childNodes.push(n4), e3.h.insertBefore(n4, t4);
  }, "insertBefore"), removeChild: /* @__PURE__ */ __name(function(n4) {
    this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.h.removeChild(n4);
  }, "removeChild") }), D(g(Z, { context: e3.context }, n3.__v), e3.v);
}
__name(Y, "Y");
function $2(n3, e3) {
  var r3 = g(Y, { __v: n3, h: e3 });
  return r3.containerInfo = e3, r3;
}
__name($2, "$");
(B3.prototype = new x()).__a = function(n3) {
  var t4 = this, e3 = j3(t4.__v), r3 = t4.l.get(n3);
  return r3[0]++, function(u4) {
    var o4 = /* @__PURE__ */ __name(function() {
      t4.props.revealOrder ? (r3.push(u4), H2(t4, n3, r3)) : u4();
    }, "o");
    e3 ? e3(o4) : o4();
  };
}, B3.prototype.render = function(n3) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t4 = H(n3.children);
  n3.revealOrder && "b" === n3.revealOrder[0] && t4.reverse();
  for (var e3 = t4.length; e3--; ) this.l.set(t4[e3], this.i = [1, 0, this.i]);
  return n3.children;
}, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
  var n3 = this;
  this.l.forEach(function(t4, e3) {
    H2(n3, e3, t4);
  });
};
var q3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X = /* @__PURE__ */ __name(function(n3) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
}, "X");
function nn(n3, t4, e3) {
  return null == t4.__k && (t4.textContent = ""), D(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
__name(nn, "nn");
function tn(n3, t4, e3) {
  return E(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
__name(tn, "tn");
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t4) {
  Object.defineProperty(x.prototype, t4, { configurable: true, get: /* @__PURE__ */ __name(function() {
    return this["UNSAFE_" + t4];
  }, "get"), set: /* @__PURE__ */ __name(function(n3) {
    Object.defineProperty(this, t4, { configurable: true, writable: true, value: n3 });
  }, "set") });
});
var en = l.event;
function rn() {
}
__name(rn, "rn");
function un() {
  return this.cancelBubble;
}
__name(un, "un");
function on() {
  return this.defaultPrevented;
}
__name(on, "on");
l.event = function(n3) {
  return en && (n3 = en(n3)), n3.persist = rn, n3.isPropagationStopped = un, n3.isDefaultPrevented = on, n3.nativeEvent = n3;
};
var cn, ln = { enumerable: false, configurable: true, get: /* @__PURE__ */ __name(function() {
  return this.class;
}, "get") }, fn = l.vnode;
l.vnode = function(n3) {
  "string" == typeof n3.type && function(n4) {
    var t4 = n4.props, e3 = n4.type, u4 = {}, o4 = -1 === e3.indexOf("-");
    for (var i4 in t4) {
      var c4 = t4[i4];
      if (!("value" === i4 && "defaultValue" in t4 && null == c4 || Q && "children" === i4 && "noscript" === e3 || "class" === i4 || "className" === i4)) {
        var l4 = i4.toLowerCase();
        "defaultValue" === i4 && "value" in t4 && null == t4.value ? i4 = "value" : "download" === i4 && true === c4 ? c4 = "" : "translate" === l4 && "no" === c4 ? c4 = false : "o" === l4[0] && "n" === l4[1] ? "ondoubleclick" === l4 ? i4 = "ondblclick" : "onchange" !== l4 || "input" !== e3 && "textarea" !== e3 || X(t4.type) ? "onfocus" === l4 ? i4 = "onfocusin" : "onblur" === l4 ? i4 = "onfocusout" : J2.test(i4) && (i4 = l4) : l4 = i4 = "oninput" : o4 && G2.test(i4) ? i4 = i4.replace(K, "-$&").toLowerCase() : null === c4 && (c4 = void 0), "oninput" === l4 && u4[i4 = l4] && (i4 = "oninputCapture"), u4[i4] = c4;
      }
    }
    "select" == e3 && u4.multiple && Array.isArray(u4.value) && (u4.value = H(t4.children).forEach(function(n5) {
      n5.props.selected = -1 != u4.value.indexOf(n5.props.value);
    })), "select" == e3 && null != u4.defaultValue && (u4.value = H(t4.children).forEach(function(n5) {
      n5.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n5.props.value) : u4.defaultValue == n5.props.value;
    })), t4.class && !t4.className ? (u4.class = t4.class, Object.defineProperty(u4, "className", ln)) : (t4.className && !t4.class || t4.class && t4.className) && (u4.class = u4.className = t4.className), n4.props = u4;
  }(n3), n3.$$typeof = q3, fn && fn(n3);
};
var an = l.__r;
l.__r = function(n3) {
  an && an(n3), cn = n3.__c;
};
var sn = l.diffed;
l.diffed = function(n3) {
  sn && sn(n3);
  var t4 = n3.props, e3 = n3.__e;
  null != e3 && "textarea" === n3.type && "value" in t4 && t4.value !== e3.value && (e3.value = null == t4.value ? "" : t4.value), cn = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: /* @__PURE__ */ __name(function(n3) {
  return cn.__n[n3.__c].props.value;
}, "readContext"), useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: p3, useRef: A2, useState: h2, useSyncExternalStore: C3, useTransition: k3 } } }, vn = "18.3.1";
function dn(n3) {
  return g.bind(null, n3);
}
__name(dn, "dn");
function pn(n3) {
  return !!n3 && n3.$$typeof === q3;
}
__name(pn, "pn");
function mn(n3) {
  return pn(n3) && n3.type === k;
}
__name(mn, "mn");
function yn(n3) {
  return !!n3 && !!n3.displayName && ("string" == typeof n3.displayName || n3.displayName instanceof String) && n3.displayName.startsWith("Memo(");
}
__name(yn, "yn");
function _n(n3) {
  return pn(n3) ? G.apply(null, arguments) : n3;
}
__name(_n, "_n");
function bn(n3) {
  return !!n3.__k && (D(null, n3), true);
}
__name(bn, "bn");
function Sn(n3) {
  return n3 && (n3.base || 1 === n3.nodeType && n3) || null;
}
__name(Sn, "Sn");
var gn = /* @__PURE__ */ __name(function(n3, t4) {
  return n3(t4);
}, "gn"), En = /* @__PURE__ */ __name(function(n3, t4) {
  return n3(t4);
}, "En"), Cn = k, xn = pn, Rn = { useState: h2, useId: g2, useReducer: p3, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: R, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: g, createContext: J, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: pn, isElement: xn, isFragment: mn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };

// lib/create-component.js
function createClass(spec) {
  const { initialState, getInitialState, onMount, onUpdate, refs, ...methods } = spec;
  const klass = class extends x {
    static {
      __name(this, "klass");
    }
    constructor(props) {
      super(props);
      this.state = initialState ?? (getInitialState && getInitialState.call(this)) ?? {};
      for (const [name, method] of Object.entries(methods)) {
        this[name] = method.bind(this);
      }
      if (refs) {
        this.refs = {};
        for (const refName of refs) {
          this.refs[refName] = b(null);
        }
      }
    }
    componentDidMount(...args) {
      if (onMount) {
        onMount.call(this, ...args);
      }
    }
    componentDidUpdate(...args) {
      if (onUpdate) {
        onUpdate.call(this, ...args);
      }
    }
  };
  return klass;
}
__name(createClass, "createClass");

// lib/utils.js
var utils_default = {
  /**
   * Clean up a title so that it'll look good as a vanity URL.
   */
  titleReplace(title2) {
    return title2.replace(/[\s\:;,_.'"#!?\u2010-\u2015]+/g, "-").replace(/-+/g, "-").replace(/^-/, "").replace(/-$/, "").replaceAll(`<`, "").replaceAll(`>`, "").toLowerCase();
  }
};

// lib/weblogsettings.js
var { pathname, host } = location;
var suffix = pathname.lastIndexOf("/") === pathname.length - 1 ? pathname : "/";
var loc = host + suffix;
var settingsName = `gh-weblog-settings-${loc}`;
function ghFromIO(ioURL) {
  if (!ioURL.includes(`github.io`)) {
    throw new Error(
      `Not hosted on github.io, and no data-site provided in #gh-weblog element`
    );
  }
  const [, user, repo] = uiURL.match(/:..([^.]+).github.io\/([\w-]+)/);
  return `https://github.com/${user}/${repo}`;
}
__name(ghFromIO, "ghFromIO");
var domNode = document.getElementById(`gh-weblog`);
var title = document.title;
var {
  base = location.toString(),
  site = ghFromIO(base),
  path = `gh-weblog`,
  description
} = domNode.dataset;
var WebLogSettings = {
  getSettings() {
    const settings2 = localStorage[settingsName];
    if (!settings2) {
      this.saveSettings({});
      return this.getSettings();
    }
    return JSON.parse(settings2);
  },
  saveSettings(settings2) {
    Object.assign(settings2, { base, description, path, site, title });
    localStorage[settingsName] = JSON.stringify(settings2);
  },
  clearSettings() {
    localStorage.removeItem(settingsName);
  }
};
var weblogsettings_default = WebLogSettings;

// components/Admin.jsx
function stopPropagation(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}
__name(stopPropagation, "stopPropagation");
var Admin_default = createClass({
  getInitialState() {
    return {
      hidden: true,
      user: ``,
      repo: ``,
      branch: ``,
      path: `gh-weblog`,
      token: ``
    };
  },
  componentDidMount() {
    const settings2 = weblogsettings_default.getSettings();
    if (settings2) {
      settings2.hidden = this.props.hidden;
      this.setState(settings2);
    }
  },
  render() {
    return /* @__PURE__ */ u2("div", { className: "underlay", hidden: this.state.hidden, onClick: this.close, children: /* @__PURE__ */ u2("div", { className: "overlay", onClick: stopPropagation, children: [
      /* @__PURE__ */ u2("button", { className: "logout", onClick: this.reset, children: "Log out" }),
      /* @__PURE__ */ u2("h1", { children: "Weblog administration settings" }),
      /* @__PURE__ */ u2("table", { children: [
        /* @__PURE__ */ u2("tr", { children: [
          /* @__PURE__ */ u2("td", { children: "Your github username:" }),
          /* @__PURE__ */ u2("td", { children: /* @__PURE__ */ u2(
            "input",
            {
              type: "text",
              placeholder: "yourname",
              value: this.state.user,
              onInput: (evt) => this.update(`user`, evt)
            }
          ) })
        ] }),
        /* @__PURE__ */ u2("tr", { children: [
          /* @__PURE__ */ u2("td", { children: "github repository:" }),
          /* @__PURE__ */ u2("td", { children: /* @__PURE__ */ u2(
            "input",
            {
              type: "text",
              placeholder: "yourname.github.io",
              value: this.state.repo,
              onInput: (evt) => this.update(`repo`, evt)
            }
          ) })
        ] }),
        /* @__PURE__ */ u2("tr", { children: [
          /* @__PURE__ */ u2("td", { children: "repository branch:" }),
          /* @__PURE__ */ u2("td", { children: /* @__PURE__ */ u2(
            "input",
            {
              type: "text",
              placeholder: "master",
              value: this.state.branch,
              onInput: (evt) => this.update(`branch`, evt)
            }
          ) })
        ] }),
        /* @__PURE__ */ u2("tr", { children: [
          /* @__PURE__ */ u2("td", { children: "path to weblog:" }),
          /* @__PURE__ */ u2("td", { children: /* @__PURE__ */ u2(
            "input",
            {
              type: "text",
              value: this.state.path,
              onInput: (evt) => this.update(`path`, evt)
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ u2("h1", { children: [
        "Github",
        " ",
        /* @__PURE__ */ u2("a", { href: "https://github.com/settings/applications", children: "Personal Access Token" })
      ] }),
      /* @__PURE__ */ u2(
        "input",
        {
          type: "text",
          className: "token",
          value: this.state.token,
          onInput: (evt) => this.update(`token`, evt)
        }
      ),
      /* @__PURE__ */ u2("p", { children: "Don't give this token more permissions than necessary! gh-weblog only needs repo access!" })
    ] }) });
  },
  reset() {
    weblogsettings_default.clearSettings();
    this.setState(this.getInitialState());
    this.props.onLogout();
  },
  show() {
    this.setState({ hidden: false });
  },
  close() {
    this.setState({ hidden: true }, () => this.props.onClose(this.state));
  },
  update(propName, evt) {
    this.setState({ [propName]: evt.target.value }, () => {
      this.updateSettings();
    });
  },
  updateSettings() {
    const { hidden, ...settings2 } = this.state;
    weblogsettings_default.saveSettings(settings2);
  }
});

// lib/vendor/marked/marked.js
var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};
block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
block.list = replace(block.list)(/bull/g, block.bullet)(
  "hr",
  "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))"
)("def", "\\n+(?=" + block.def.source + ")")();
block.blockquote = replace(block.blockquote)("def", block.def)();
block._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)(
  "closed",
  /<(tag)[\s\S]+?<\/\1>/
)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
block.paragraph = replace(block.paragraph)("hr", block.hr)(
  "heading",
  block.heading
)("lheading", block.lheading)("blockquote", block.blockquote)(
  "tag",
  "<" + block._tag
)("def", block.def)();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});
block.gfm.paragraph = replace(block.paragraph)(
  "(?!",
  "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|"
)();
block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});
function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;
  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}
__name(Lexer, "Lexer");
Lexer.rules = block;
Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};
Lexer.prototype.lex = function(src) {
  src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
  return this.token(src, true);
};
Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, ""), next, loose, cap, bull, b3, item, space, i4, l4;
  while (src) {
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: "space"
        });
      }
    }
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, "");
      this.tokens.push({
        type: "code",
        text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap
      });
      continue;
    }
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "code",
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "heading",
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: "table",
        header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        cells: cap[3].replace(/\n$/, "").split("\n")
      };
      for (i4 = 0; i4 < item.align.length; i4++) {
        if (/^ *-+: *$/.test(item.align[i4])) {
          item.align[i4] = "right";
        } else if (/^ *:-+: *$/.test(item.align[i4])) {
          item.align[i4] = "center";
        } else if (/^ *:-+ *$/.test(item.align[i4])) {
          item.align[i4] = "left";
        } else {
          item.align[i4] = null;
        }
      }
      for (i4 = 0; i4 < item.cells.length; i4++) {
        item.cells[i4] = item.cells[i4].split(/ *\| */);
      }
      this.tokens.push(item);
      continue;
    }
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "heading",
        depth: cap[2] === "=" ? 1 : 2,
        text: cap[1]
      });
      continue;
    }
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "hr"
      });
      continue;
    }
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "blockquote_start"
      });
      cap = cap[0].replace(/^ *> ?/gm, "");
      this.token(cap, top, true);
      this.tokens.push({
        type: "blockquote_end"
      });
      continue;
    }
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      this.tokens.push({
        type: "list_start",
        ordered: bull.length > 1
      });
      cap = cap[0].match(this.rules.item);
      next = false;
      l4 = cap.length;
      i4 = 0;
      for (; i4 < l4; i4++) {
        item = cap[i4];
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, "");
        if (~item.indexOf("\n ")) {
          space -= item.length;
          item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "");
        }
        if (this.options.smartLists && i4 !== l4 - 1) {
          b3 = block.bullet.exec(cap[i4 + 1])[0];
          if (bull !== b3 && !(bull.length > 1 && b3.length > 1)) {
            src = cap.slice(i4 + 1).join("\n") + src;
            i4 = l4 - 1;
          }
        }
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i4 !== l4 - 1) {
          next = item.charAt(item.length - 1) === "\n";
          if (!loose) loose = next;
        }
        this.tokens.push({
          type: loose ? "loose_item_start" : "list_item_start"
        });
        this.token(item, false, bq);
        this.tokens.push({
          type: "list_item_end"
        });
      }
      this.tokens.push({
        type: "list_end"
      });
      continue;
    }
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize ? "paragraph" : "html",
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      });
      continue;
    }
    if (!bq && top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: "table",
        header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
      };
      for (i4 = 0; i4 < item.align.length; i4++) {
        if (/^ *-+: *$/.test(item.align[i4])) {
          item.align[i4] = "right";
        } else if (/^ *:-+: *$/.test(item.align[i4])) {
          item.align[i4] = "center";
        } else if (/^ *:-+ *$/.test(item.align[i4])) {
          item.align[i4] = "left";
        } else {
          item.align[i4] = null;
        }
      }
      for (i4 = 0; i4 < item.cells.length; i4++) {
        item.cells[i4] = item.cells[i4].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
      }
      this.tokens.push(item);
      continue;
    }
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "paragraph",
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
      });
      continue;
    }
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: "text",
        text: cap[0]
      });
      continue;
    }
    if (src) {
      throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
    }
  }
  return this.tokens;
};
var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};
inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
inline.link = replace(inline.link)("inside", inline._inside)(
  "href",
  inline._href
)();
inline.reflink = replace(inline.reflink)("inside", inline._inside)();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});
inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)("])", "~|])")(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
});
inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)("{2,}", "*")(),
  text: replace(inline.gfm.text)("{2,}", "*")()
});
function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;
  if (!this.links) {
    throw new Error("Tokens array requires a `links` property.");
  }
  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}
__name(InlineLexer, "InlineLexer");
InlineLexer.rules = inline;
InlineLexer.output = function(src, links, options) {
  var inline2 = new InlineLexer(links, options);
  return inline2.output(src);
};
InlineLexer.prototype.output = function(src) {
  var out = "", link, text, href, cap;
  while (src) {
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === "@") {
        text = cap[1].charAt(6) === ":" ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
        href = this.mangle("mailto:") + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize ? escape(cap[0]) : cap[0];
      continue;
    }
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }
    if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }
    if (src) {
      throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
    }
  }
  return out;
};
InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href), title2 = link.title ? escape(link.title) : null;
  return cap[0].charAt(0) !== "!" ? this.renderer.link(href, title2, this.output(cap[1])) : this.renderer.image(href, title2, escape(cap[1]));
};
InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text.replace(/--/g, "\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
};
InlineLexer.prototype.mangle = function(text) {
  var out = "", l4 = text.length, i4 = 0, ch;
  for (; i4 < l4; i4++) {
    ch = text.charCodeAt(i4);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
};
function Renderer(options) {
  this.options = options || {};
}
__name(Renderer, "Renderer");
Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }
  if (!lang) {
    return "<pre><code>" + (escaped ? code : escape(code, true)) + "\n</code></pre>";
  }
  return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "\n</code></pre>\n";
};
Renderer.prototype.blockquote = function(quote) {
  return "<blockquote>\n" + quote + "</blockquote>\n";
};
Renderer.prototype.html = function(html) {
  return html;
};
Renderer.prototype.heading = function(text, level, raw) {
  return "<h" + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-") + '">' + text + "</h" + level + ">\n";
};
Renderer.prototype.hr = function() {
  return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
};
Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? "ol" : "ul";
  return "<" + type + ">\n" + body + "</" + type + ">\n";
};
Renderer.prototype.listitem = function(text) {
  return "<li>" + text + "</li>\n";
};
Renderer.prototype.paragraph = function(text) {
  return "<p>" + text + "</p>\n";
};
Renderer.prototype.table = function(header, body) {
  return "<table>\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
};
Renderer.prototype.tablerow = function(content) {
  return "<tr>\n" + content + "</tr>\n";
};
Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? "th" : "td";
  var tag = flags.align ? "<" + type + ' style="text-align:' + flags.align + '">' : "<" + type + ">";
  return tag + content + "</" + type + ">\n";
};
Renderer.prototype.strong = function(text) {
  return "<strong>" + text + "</strong>";
};
Renderer.prototype.em = function(text) {
  return "<em>" + text + "</em>";
};
Renderer.prototype.codespan = function(text) {
  return "<code>" + text + "</code>";
};
Renderer.prototype.br = function() {
  return this.options.xhtml ? "<br/>" : "<br>";
};
Renderer.prototype.del = function(text) {
  return "<del>" + text + "</del>";
};
Renderer.prototype.link = function(href, title2, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase();
    } catch (e3) {
      return "";
    }
    if (prot.indexOf("javascript:") === 0) {
      return "";
    }
  }
  var out = '<a href="' + href + '"';
  if (title2) {
    out += ' title="' + title2 + '"';
  }
  out += ">" + text + "</a>";
  return out;
};
Renderer.prototype.image = function(href, title2, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title2) {
    out += ' title="' + title2 + '"';
  }
  out += this.options.xhtml ? "/>" : ">";
  return out;
};
function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}
__name(Parser, "Parser");
Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};
Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();
  var out = "";
  while (this.next()) {
    out += this.tok();
  }
  return out;
};
Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};
Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};
Parser.prototype.parseText = function() {
  var body = this.token.text;
  while (this.peek().type === "text") {
    body += "\n" + this.next().text;
  }
  return this.inline.output(body);
};
Parser.prototype.tok = function() {
  switch (this.token.type) {
    case "space": {
      return "";
    }
    case "hr": {
      return this.renderer.hr();
    }
    case "heading": {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text
      );
    }
    case "code": {
      return this.renderer.code(
        this.token.text,
        this.token.lang,
        this.token.escaped
      );
    }
    case "table": {
      var header = "", body = "", i4, row, cell, flags, j4;
      cell = "";
      for (i4 = 0; i4 < this.token.header.length; i4++) {
        flags = { header: true, align: this.token.align[i4] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i4]),
          { header: true, align: this.token.align[i4] }
        );
      }
      header += this.renderer.tablerow(cell);
      for (i4 = 0; i4 < this.token.cells.length; i4++) {
        row = this.token.cells[i4];
        cell = "";
        for (j4 = 0; j4 < row.length; j4++) {
          cell += this.renderer.tablecell(this.inline.output(row[j4]), {
            header: false,
            align: this.token.align[j4]
          });
        }
        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case "blockquote_start": {
      var body = "";
      while (this.next().type !== "blockquote_end") {
        body += this.tok();
      }
      return this.renderer.blockquote(body);
    }
    case "list_start": {
      var body = "", ordered = this.token.ordered;
      while (this.next().type !== "list_end") {
        body += this.tok();
      }
      return this.renderer.list(body, ordered);
    }
    case "list_item_start": {
      var body = "";
      while (this.next().type !== "list_item_end") {
        body += this.token.type === "text" ? this.parseText() : this.tok();
      }
      return this.renderer.listitem(body);
    }
    case "loose_item_start": {
      var body = "";
      while (this.next().type !== "list_item_end") {
        body += this.tok();
      }
      return this.renderer.listitem(body);
    }
    case "html": {
      var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
      return this.renderer.html(html);
    }
    case "paragraph": {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case "text": {
      return this.renderer.paragraph(this.parseText());
    }
  }
};
function escape(html, encode) {
  return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
__name(escape, "escape");
function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_3, n3) {
    n3 = n3.toLowerCase();
    if (n3 === "colon") return ":";
    if (n3.charAt(0) === "#") {
      return n3.charAt(1) === "x" ? String.fromCharCode(parseInt(n3.substring(2), 16)) : String.fromCharCode(+n3.substring(1));
    }
    return "";
  });
}
__name(unescape, "unescape");
function replace(regex, opt) {
  regex = regex.source;
  opt = opt || "";
  return /* @__PURE__ */ __name(function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, "$1");
    regex = regex.replace(name, val);
    return self;
  }, "self");
}
__name(replace, "replace");
function noop() {
}
__name(noop, "noop");
noop.exec = noop;
function merge(obj) {
  var i4 = 1, target2, key;
  for (; i4 < arguments.length; i4++) {
    target2 = arguments[i4];
    for (key in target2) {
      if (Object.prototype.hasOwnProperty.call(target2, key)) {
        obj[key] = target2[key];
      }
    }
  }
  return obj;
}
__name(merge, "merge");
function marked(src, opt, callback) {
  if (callback || typeof opt === "function") {
    if (!callback) {
      callback = opt;
      opt = null;
    }
    opt = merge({}, marked.defaults, opt || {});
    var highlight = opt.highlight, tokens, pending, i4 = 0;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e3) {
      return callback(e3);
    }
    pending = tokens.length;
    var done = /* @__PURE__ */ __name(function() {
      var out, err;
      try {
        out = Parser.parse(tokens, opt);
      } catch (e3) {
        err = e3;
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    }, "done");
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!pending) return done();
    for (; i4 < tokens.length; i4++) {
      (function(token) {
        if (token.type !== "code") {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i4]);
    }
    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e3) {
    e3.message += "\nPlease report this to https://github.com/chjj/marked.";
    if ((opt || marked.defaults).silent) {
      return "<p>An error occured:</p><pre>" + escape(e3.message + "", true) + "</pre>";
    }
    throw e3;
  }
}
__name(marked, "marked");
marked.options = marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};
marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: "lang-",
  smartypants: false,
  headerPrefix: "",
  renderer: new Renderer(),
  xhtml: false
};
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;
marked.parse = marked;
var marked_default = marked;

// components/PlainView.jsx
var PlainView_default = createClass({
  render() {
    let { text } = this.props;
    text = text.replace(/^#\s+[^\n]+\n+/, ``);
    let html = marked_default(text);
    if (!this.props.editable && !this.props.singleton) {
      if (text.length > 1500) {
        let cut = html.indexOf(`<p>`);
        for (let i4 = 0; i4 < 5; i4++) {
          cut = html.indexOf(`<p>`, cut + 4);
        }
        if (text.length - cut > 500) {
          html = `<details>
  <summary>
${html.substring(0, cut)}
  <div class="shade">&nbsp;</div>
  </summary>
${html.substring(cut)}
</details>`;
        }
      }
    }
    return /* @__PURE__ */ u2(
      "div",
      {
        ref: "post",
        className: "post",
        hidden: this.props.hidden,
        onClick: this.props.onClick,
        dangerouslySetInnerHTML: { __html: html }
      }
    );
  }
});

// components/Editor.jsx
var Editor_default = createClass({
  getInitialState() {
    return { text: "" };
  },
  refs: ["textarea"],
  componentDidMount() {
    this.setState({ text: this.props.text });
  },
  render() {
    return /* @__PURE__ */ u2(
      "textarea",
      {
        ref: this.refs.textarea,
        className: "editor",
        hidden: this.props.hidden,
        value: this.state.text,
        onInput: this.record
      }
    );
  },
  setText(text) {
    const textarea = this.refs.textarea.current;
    this.setState({ text }, () => textarea.focus());
  },
  record(evt) {
    const postData = evt.target.value;
    this.setState({ text: postData });
    const titleMatch = postData.match(/^#\s+([^\n]+)\n+/);
    let title2 = "";
    if (titleMatch) {
      const titleLine = titleMatch[0];
      title2 = titleMatch[1];
      postData.replace(titleLine, ``);
    }
    this.props.update(title2.trim(), postData.trim());
  }
});

// components/Tags.jsx
var Tags_default = createClass({
  render() {
    const tags = this.props.tags.map(function(tag, idx) {
      return /* @__PURE__ */ u2("div", { className: "tag", children: tag }, idx);
    });
    return /* @__PURE__ */ u2("div", { className: "tags", onClick: this.updateTags, children: tags });
  },
  updateTags() {
    if (this.props.disabled) return;
    let tags = this.props.tags.join(", ");
    const newTags = prompt("Edit the post tags", tags);
    if (newTags) {
      tags = newTags.split(",").map((v3) => v3.trim());
      this.props.onChange(tags);
    }
  }
});

// components/Entry.jsx
var Entry_default = createClass({
  initialState: {
    id: -1,
    title: "",
    created: Date.now(),
    published: Date.now(),
    updated: Date.now(),
    tags: [],
    editing: false,
    postData: ""
  },
  refs: ["editor"],
  onMount() {
    const { metaData, postData } = this.props;
    const update = { ...metaData, postData };
    this.setState(update);
    const root = document.querySelector(`:root`);
    root.addEventListener(`click`, (evt) => {
      if (evt.target !== root) return;
      this.switchView();
    });
  },
  render() {
    const { props, state } = this;
    const { singleton, editable } = props;
    const title2 = utils_default.titleReplace(state.title);
    let deleteButton;
    if (props.editable) {
      deleteButton = /* @__PURE__ */ u2("button", { className: "admin delete button", onClick: this.delete, children: "remove entry" });
    }
    const posted = new Date(state.published).toLocaleString();
    const updated = new Date(state.updated).toLocaleString();
    return /* @__PURE__ */ u2("div", { className: "entry", id: `gh-weblog-${state.created}`, children: [
      deleteButton,
      /* @__PURE__ */ u2("header", { children: [
        /* @__PURE__ */ u2("h1", { children: /* @__PURE__ */ u2(
          "a",
          {
            href: `${singleton ? `../../../` : ``}pages/${state.created}/${title2}`,
            children: state.title
          }
        ) }),
        /* @__PURE__ */ u2("h2", { children: [
          "Originally posted on ",
          posted,
          ", last updated on ",
          updated
        ] })
      ] }),
      /* @__PURE__ */ u2(
        PlainView_default,
        {
          hidden: state.editing,
          text: state.postData,
          onClick: this.edit,
          singleton,
          editable
        }
      ),
      /* @__PURE__ */ u2(
        Editor_default,
        {
          ref: this.refs.editor,
          hidden: !state.editing,
          text: state.postData,
          update: this.update,
          delete: this.delete
        }
      ),
      /* @__PURE__ */ u2("a", { className: "comments", href: props.issues, children: "leave a comment on github" }),
      /* @__PURE__ */ u2(
        Tags_default,
        {
          disabled: !props.editable,
          tags: state.tags,
          onChange: this.updateTags
        }
      )
    ] });
  },
  updateTags(tags) {
    this.setState({ tags }, () => this.props.onSave(this));
  },
  getPostData() {
    return this.state.postData;
  },
  getMetaData() {
    const md = JSON.parse(JSON.stringify(this.state));
    delete md.editing;
    delete md.postData;
    return md;
  },
  edit() {
    if (this.props.editable) {
      this.refs.editor.current.setText(this.getPostData());
      this.setState({ editing: true });
    }
  },
  update(title2, postData) {
    this.setState({ title: title2, postData, updated: Date.now() });
  },
  switchView() {
    if (this.state.editing) {
      this.setState({ editing: false });
      this.props.onSave(this);
    }
  },
  delete() {
    this.props.onDelete(this);
  }
});

// node_modules/universal-user-agent/index.js
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof process === "object" && process.version !== void 0) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }
  return "<environment undetectable>";
}
__name(getUserAgent, "getUserAgent");

// node_modules/before-after-hook/lib/register.js
function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }
  if (!options) {
    options = {};
  }
  if (Array.isArray(name)) {
    return name.reverse().reduce((callback, name2) => {
      return register.bind(null, state, name2, callback, options);
    }, method)();
  }
  return Promise.resolve().then(() => {
    if (!state.registry[name]) {
      return method(options);
    }
    return state.registry[name].reduce((method2, registered) => {
      return registered.hook.bind(null, method2, options);
    }, method)();
  });
}
__name(register, "register");

// node_modules/before-after-hook/lib/add.js
function addHook(state, kind, name, hook2) {
  const orig = hook2;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook2 = /* @__PURE__ */ __name((method, options) => {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    }, "hook");
  }
  if (kind === "after") {
    hook2 = /* @__PURE__ */ __name((method, options) => {
      let result;
      return Promise.resolve().then(method.bind(null, options)).then((result_) => {
        result = result_;
        return orig(result, options);
      }).then(() => {
        return result;
      });
    }, "hook");
  }
  if (kind === "error") {
    hook2 = /* @__PURE__ */ __name((method, options) => {
      return Promise.resolve().then(method.bind(null, options)).catch((error) => {
        return orig(error, options);
      });
    }, "hook");
  }
  state.registry[name].push({
    hook: hook2,
    orig
  });
}
__name(addHook, "addHook");

// node_modules/before-after-hook/lib/remove.js
function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }
  const index = state.registry[name].map((registered) => {
    return registered.orig;
  }).indexOf(method);
  if (index === -1) {
    return;
  }
  state.registry[name].splice(index, 1);
}
__name(removeHook, "removeHook");

// node_modules/before-after-hook/index.js
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook2, state, name) {
  const removeHookRef = bindable(removeHook, null).apply(
    null,
    name ? [state, name] : [state]
  );
  hook2.api = { remove: removeHookRef };
  hook2.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach((kind) => {
    const args = name ? [state, kind, name] : [state, kind];
    hook2[kind] = hook2.api[kind] = bindable(addHook, null).apply(null, args);
  });
}
__name(bindApi, "bindApi");
function Singular() {
  const singularHookName = Symbol("Singular");
  const singularHookState = {
    registry: {}
  };
  const singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}
__name(Singular, "Singular");
function Collection() {
  const state = {
    registry: {}
  };
  const hook2 = register.bind(null, state);
  bindApi(hook2, state);
  return hook2;
}
__name(Collection, "Collection");
var before_after_hook_default = { Singular, Collection };

// node_modules/@octokit/endpoint/dist-bundle/index.js
var VERSION = "0.0.0-development";
var userAgent = `octokit-endpoint.js/${VERSION} ${getUserAgent()}`;
var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: ""
  }
};
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}
__name(lowercaseKeys, "lowercaseKeys");
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  if (Object.prototype.toString.call(value) !== "[object Object]")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
__name(isPlainObject, "isPlainObject");
function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach((key) => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults))
        Object.assign(result, { [key]: options[key] });
      else
        result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}
__name(mergeDeep, "mergeDeep");
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
__name(removeUndefinedProperties, "removeUndefinedProperties");
function merge2(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options);
  if (options.url === "/graphql") {
    if (defaults && defaults.mediaType.previews?.length) {
      mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(
        (preview) => !mergedOptions.mediaType.previews.includes(preview)
      ).concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview) => preview.replace(/-preview/, ""));
  }
  return mergedOptions;
}
__name(merge2, "merge");
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}
__name(addQueryParameters, "addQueryParameters");
var urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
__name(removeNonChars, "removeNonChars");
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a4, b3) => a4.concat(b3), []);
}
__name(extractUrlVariableNames, "extractUrlVariableNames");
function omit(object, keysToOmit) {
  const result = { __proto__: null };
  for (const key of Object.keys(object)) {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  }
  return result;
}
__name(omit, "omit");
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
__name(encodeReserved, "encodeReserved");
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c4) {
    return "%" + c4.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(encodeUnreserved, "encodeUnreserved");
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
__name(encodeValue, "encodeValue");
function isDefined(value) {
  return value !== void 0 && value !== null;
}
__name(isDefined, "isDefined");
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
__name(isKeyOperator, "isKeyOperator");
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(
        encodeValue(operator, value, isKeyOperator(operator) ? key : "")
      );
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(
              encodeValue(operator, value2, isKeyOperator(operator) ? key : "")
            );
          });
        } else {
          Object.keys(value).forEach(function(k4) {
            if (isDefined(value[k4])) {
              result.push(encodeValue(operator, value[k4], k4));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k4) {
            if (isDefined(value[k4])) {
              tmp.push(encodeUnreserved(k4));
              tmp.push(encodeValue(operator, value[k4].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
__name(getValues, "getValues");
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
__name(parseUrl, "parseUrl");
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  template = template.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(_3, expression, literal) {
      if (expression) {
        let operator = "";
        const values = [];
        if (operators.indexOf(expression.charAt(0)) !== -1) {
          operator = expression.charAt(0);
          expression = expression.substr(1);
        }
        expression.split(/,/g).forEach(function(variable) {
          var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
          values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
        });
        if (operator && operator !== "+") {
          var separator = ",";
          if (operator === "?") {
            separator = "&";
          } else if (operator !== "#") {
            separator = operator;
          }
          return (values.length !== 0 ? operator : "") + values.join(separator);
        } else {
          return values.join(",");
        }
      } else {
        return encodeReserved(literal);
      }
    }
  );
  if (template === "/") {
    return template;
  } else {
    return template.replace(/\/$/, "");
  }
}
__name(expand, "expand");
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option) => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map(
        (format) => format.replace(
          /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
          `application/vnd$1$2.${options.mediaType.format}`
        )
      ).join(",");
    }
    if (url.endsWith("/graphql")) {
      if (options.mediaType.previews?.length) {
        const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
        headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
          const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
          return `application/vnd.github.${preview}-preview${format}`;
        }).join(",");
      }
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign(
    { method, url, headers },
    typeof body !== "undefined" ? { body } : null,
    options.request ? { request: options.request } : null
  );
}
__name(parse, "parse");
function endpointWithDefaults(defaults, route, options) {
  return parse(merge2(defaults, route, options));
}
__name(endpointWithDefaults, "endpointWithDefaults");
function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge2(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults.bind(null, DEFAULTS2),
    merge: merge2.bind(null, DEFAULTS2),
    parse
  });
}
__name(withDefaults, "withDefaults");
var endpoint = withDefaults(null, DEFAULTS);

// node_modules/@octokit/request-error/dist-src/index.js
var RequestError = class extends Error {
  static {
    __name(this, "RequestError");
  }
  name;
  /**
   * http status code
   */
  status;
  /**
   * Request options that lead to the error.
   */
  request;
  /**
   * Response object if a response was received
   */
  response;
  constructor(message, statusCode, options) {
    super(message);
    this.name = "HttpError";
    this.status = Number.parseInt(statusCode);
    if (Number.isNaN(this.status)) {
      this.status = 0;
    }
    if ("response" in options) {
      this.response = options.response;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(
          / .*$/,
          " [REDACTED]"
        )
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }
};

// node_modules/@octokit/request/dist-bundle/index.js
var VERSION2 = "0.0.0-development";
var defaults_default = {
  headers: {
    "user-agent": `octokit-request.js/${VERSION2} ${getUserAgent()}`
  }
};
function isPlainObject2(value) {
  if (typeof value !== "object" || value === null) return false;
  if (Object.prototype.toString.call(value) !== "[object Object]") return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
__name(isPlainObject2, "isPlainObject");
async function fetchWrapper(requestOptions) {
  const fetch2 = requestOptions.request?.fetch || globalThis.fetch;
  if (!fetch2) {
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  }
  const log = requestOptions.request?.log || console;
  const parseSuccessResponseBody = requestOptions.request?.parseSuccessResponseBody !== false;
  const body = isPlainObject2(requestOptions.body) || Array.isArray(requestOptions.body) ? JSON.stringify(requestOptions.body) : requestOptions.body;
  const requestHeaders = Object.fromEntries(
    Object.entries(requestOptions.headers).map(([name, value]) => [
      name,
      String(value)
    ])
  );
  let fetchResponse;
  try {
    fetchResponse = await fetch2(requestOptions.url, {
      method: requestOptions.method,
      body,
      redirect: requestOptions.request?.redirect,
      headers: requestHeaders,
      signal: requestOptions.request?.signal,
      // duplex must be set if request.body is ReadableStream or Async Iterables.
      // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
      ...requestOptions.body && { duplex: "half" }
    });
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        error.status = 500;
        throw error;
      }
      message = error.message;
      if (error.name === "TypeError" && "cause" in error) {
        if (error.cause instanceof Error) {
          message = error.cause.message;
        } else if (typeof error.cause === "string") {
          message = error.cause;
        }
      }
    }
    const requestError = new RequestError(message, 500, {
      request: requestOptions
    });
    requestError.cause = error;
    throw requestError;
  }
  const status = fetchResponse.status;
  const url = fetchResponse.url;
  const responseHeaders = {};
  for (const [key, value] of fetchResponse.headers) {
    responseHeaders[key] = value;
  }
  const octokitResponse = {
    url,
    status,
    headers: responseHeaders,
    data: ""
  };
  if ("deprecation" in responseHeaders) {
    const matches = responseHeaders.link && responseHeaders.link.match(/<([^>]+)>; rel="deprecation"/);
    const deprecationLink = matches && matches.pop();
    log.warn(
      `[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${responseHeaders.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`
    );
  }
  if (status === 204 || status === 205) {
    return octokitResponse;
  }
  if (requestOptions.method === "HEAD") {
    if (status < 400) {
      return octokitResponse;
    }
    throw new RequestError(fetchResponse.statusText, status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status === 304) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError("Not modified", status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status >= 400) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError(toErrorMessage(octokitResponse.data), status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  octokitResponse.data = parseSuccessResponseBody ? await getResponseData(fetchResponse) : fetchResponse.body;
  return octokitResponse;
}
__name(fetchWrapper, "fetchWrapper");
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (/application\/json/.test(contentType)) {
    return response.json().catch(() => response.text()).catch(() => "");
  }
  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }
  return response.arrayBuffer();
}
__name(getResponseData, "getResponseData");
function toErrorMessage(data) {
  if (typeof data === "string") {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return "Unknown error";
  }
  if ("message" in data) {
    const suffix2 = "documentation_url" in data ? ` - ${data.documentation_url}` : "";
    return Array.isArray(data.errors) ? `${data.message}: ${data.errors.map((v3) => JSON.stringify(v3)).join(", ")}${suffix2}` : `${data.message}${suffix2}`;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}
__name(toErrorMessage, "toErrorMessage");
function withDefaults2(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = /* @__PURE__ */ __name(function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = /* @__PURE__ */ __name((route2, parameters2) => {
      return fetchWrapper(
        endpoint2.parse(endpoint2.merge(route2, parameters2))
      );
    }, "request2");
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults2.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  }, "newApi");
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults2.bind(null, endpoint2)
  });
}
__name(withDefaults2, "withDefaults");
var request = withDefaults2(endpoint, defaults_default);

// node_modules/@octokit/graphql/dist-bundle/index.js
var VERSION3 = "0.0.0-development";
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e3) => ` - ${e3.message}`).join("\n");
}
__name(_buildMessageForResponseErrors, "_buildMessageForResponseErrors");
var GraphqlResponseError = class extends Error {
  static {
    __name(this, "GraphqlResponseError");
  }
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  name = "GraphqlResponseError";
  errors;
  data;
};
var NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(
        new Error(`[@octokit/graphql] "query" cannot be used as variable name`)
      );
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
        continue;
      return Promise.reject(
        new Error(
          `[@octokit/graphql] "${key}" cannot be used as variable name`
        )
      );
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(
    parsedOptions
  ).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(
        requestOptions,
        headers,
        response.data
      );
    }
    return response.data.data;
  });
}
__name(graphql, "graphql");
function withDefaults3(request2, newDefaults) {
  const newRequest = request2.defaults(newDefaults);
  const newApi = /* @__PURE__ */ __name((query, options) => {
    return graphql(newRequest, query, options);
  }, "newApi");
  return Object.assign(newApi, {
    defaults: withDefaults3.bind(null, newRequest),
    endpoint: newRequest.endpoint
  });
}
__name(withDefaults3, "withDefaults");
var graphql2 = withDefaults3(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION3} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults3(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}
__name(withCustomRequest, "withCustomRequest");

// node_modules/@octokit/auth-token/dist-bundle/index.js
var REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
var REGEX_IS_INSTALLATION = /^ghs_/;
var REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
  const isApp = token.split(/\./).length === 3;
  const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
  const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}
__name(auth, "auth");
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}
__name(withAuthorizationPrefix, "withAuthorizationPrefix");
async function hook(token, request2, route, parameters) {
  const endpoint2 = request2.endpoint.merge(
    route,
    parameters
  );
  endpoint2.headers.authorization = withAuthorizationPrefix(token);
  return request2(endpoint2);
}
__name(hook, "hook");
var createTokenAuth = /* @__PURE__ */ __name(function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
}, "createTokenAuth2");

// node_modules/@octokit/core/dist-src/version.js
var VERSION4 = "6.1.2";

// node_modules/@octokit/core/dist-src/index.js
var noop2 = /* @__PURE__ */ __name(() => {
}, "noop");
var consoleWarn = console.warn.bind(console);
var consoleError = console.error.bind(console);
var userAgentTrail = `octokit-core.js/${VERSION4} ${getUserAgent()}`;
var Octokit = class {
  static {
    __name(this, "Octokit");
  }
  static VERSION = VERSION4;
  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      static {
        __name(this, "OctokitWithDefaults");
      }
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }
        super(
          Object.assign(
            {},
            defaults,
            options,
            options.userAgent && defaults.userAgent ? {
              userAgent: `${options.userAgent} ${defaults.userAgent}`
            } : null
          )
        );
      }
    };
    return OctokitWithDefaults;
  }
  static plugins = [];
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin(...newPlugins) {
    const currentPlugins = this.plugins;
    const NewOctokit = class extends this {
      static {
        __name(this, "NewOctokit");
      }
      static plugins = currentPlugins.concat(
        newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
      );
    };
    return NewOctokit;
  }
  constructor(options = {}) {
    const hook2 = new before_after_hook_default.Collection();
    const requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook2.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = options.userAgent ? `${options.userAgent} ${userAgentTrail}` : userAgentTrail;
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign(
      {
        debug: noop2,
        info: noop2,
        warn: consoleWarn,
        error: consoleError
      },
      options.log
    );
    this.hook = hook2;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth2 = createTokenAuth(options.auth);
        hook2.wrap("request", auth2.hook);
        this.auth = auth2;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth2 = authStrategy(
        Object.assign(
          {
            request: this.request,
            log: this.log,
            // we pass the current octokit instance as well as its constructor options
            // to allow for authentication strategies that return a new octokit instance
            // that shares the same internal state as the current one. The original
            // requirement for this was the "event-octokit" authentication strategy
            // of https://github.com/probot/octokit-auth-probot.
            octokit: this,
            octokitOptions: otherOptions
          },
          options.auth
        )
      );
      hook2.wrap("request", auth2.hook);
      this.auth = auth2;
    }
    const classConstructor = this.constructor;
    for (let i4 = 0; i4 < classConstructor.plugins.length; ++i4) {
      Object.assign(this, classConstructor.plugins[i4](this, options));
    }
  }
  // assigned during constructor
  request;
  graphql;
  log;
  hook;
  // TODO: type `octokit.auth` based on passed options.authStrategy
  auth;
};

// node_modules/@octokit/plugin-create-or-update-text-file/dist-bundle/index.js
var isNode = globalThis.process && globalThis.process.release && globalThis.process.release.name;
function nodeUtf8ToBase64(data) {
  return Buffer.from(data, "utf-8").toString("base64");
}
__name(nodeUtf8ToBase64, "nodeUtf8ToBase64");
function nodeBase64ToUtf8(data) {
  return Buffer.from(data, "base64").toString("utf-8");
}
__name(nodeBase64ToUtf8, "nodeBase64ToUtf8");
function browserUtf8ToBase64(data) {
  return btoa(
    encodeURIComponent(data).replace(
      /%([0-9A-F]{2})/g,
      /* @__PURE__ */ __name(function toSolidBytes(_match, p1) {
        return String.fromCharCode("0x" + p1);
      }, "toSolidBytes")
    )
  );
}
__name(browserUtf8ToBase64, "browserUtf8ToBase64");
function browserBase64ToUtf8(data) {
  return decodeURIComponent(
    atob(data).split("").map(function(c4) {
      return "%" + ("00" + c4.charCodeAt(0).toString(16)).slice(-2);
    }).join("")
  );
}
__name(browserBase64ToUtf8, "browserBase64ToUtf8");
var utf8ToBase64 = isNode ? nodeUtf8ToBase64 : browserUtf8ToBase64;
var base64ToUtf8 = isNode ? nodeBase64ToUtf8 : browserBase64ToUtf8;
async function getFileContents(octokit, options) {
  const route = "GET /repos/{owner}/{repo}/contents/{path}";
  const { branch, ...parameters } = options;
  const getContentsParameters = {
    ...parameters,
    ref: branch
  };
  const requestOptions = octokit.request.endpoint(route, getContentsParameters);
  const { data } = await octokit.request(route, getContentsParameters).catch((error) => {
    if (error.status !== 404)
      throw error;
    return {
      data: {
        content: null,
        type: "",
        sha: ""
      }
    };
  });
  if (Array.isArray(data)) {
    throw new RequestError(
      `[@octokit/plugin-create-or-update-text-file] ${requestOptions.url} is a directory`,
      403,
      {
        request: requestOptions
      }
    );
  }
  if (!("sha" in data && "content" in data)) {
    throw new RequestError(
      `[@octokit/plugin-create-or-update-text-file] ${requestOptions.url} is not a file, but a ${data.type}`,
      403,
      {
        request: requestOptions
      }
    );
  }
  if (data.content === null) {
    return {
      content: null
    };
  }
  try {
    return {
      content: base64ToUtf8(data.content),
      sha: data.sha
    };
  } catch (error) {
    if (error.message !== "URI malformed")
      throw error;
    throw new RequestError(
      `[@octokit/plugin-create-or-update-text-file] ${requestOptions.url} is a binary file, only text files are supported`,
      403,
      {
        request: requestOptions
      }
    );
  }
}
__name(getFileContents, "getFileContents");
async function composeCreateOrUpdateTextFile(octokit, options) {
  const {
    content: contentOrFn,
    message,
    committer,
    author,
    ...getOptions
  } = options;
  const currentFile = await getFileContents(octokit, getOptions);
  const content = typeof contentOrFn === "function" ? await contentOrFn({
    exists: currentFile.content !== null,
    content: currentFile.content
  }) : contentOrFn;
  if (content === currentFile.content) {
    return {
      updated: false,
      deleted: false,
      data: {},
      headers: {}
    };
  }
  if (currentFile.sha && content === null) {
    const response2 = await octokit.request(
      "DELETE /repos/{owner}/{repo}/contents/{path}",
      {
        ...getOptions,
        message,
        sha: currentFile.sha
      }
    );
    return {
      ...response2,
      updated: true,
      deleted: true
    };
  }
  const response = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      ...getOptions,
      message,
      ...currentFile,
      content: utf8ToBase64(content)
    }
  );
  return {
    ...response,
    updated: true,
    deleted: false,
    content
  };
}
__name(composeCreateOrUpdateTextFile, "composeCreateOrUpdateTextFile");
var VERSION5 = "0.0.0-development";
function createOrUpdateTextFile(octokit) {
  return {
    createOrUpdateTextFile(options) {
      return composeCreateOrUpdateTextFile(octokit, options);
    }
  };
}
__name(createOrUpdateTextFile, "createOrUpdateTextFile");
createOrUpdateTextFile.VERSION = VERSION5;

// lib/connector.js
var Octokit2 = Octokit.plugin(createOrUpdateTextFile);
var Connector = class {
  static {
    __name(this, "Connector");
  }
  constructor(options) {
    if (options && options.token && options.token.trim()) {
      this.options = options;
      this.setProperties(options);
    } else {
      this.path = `gh-weblog`;
      this.options = {
        path: this.path
      };
    }
  }
  setProperties(options) {
    this.path = options.path;
    this.octokit = new Octokit2({ auth: options.token });
  }
  async get(url) {
    const type = url.endsWith(`.json`) ? `json` : `text`;
    const result = await fetch(`${url}?t=${Date.now()}`);
    if (result.ok) {
      return await result[type]();
    }
    throw new Error(result.status);
  }
  async loadIndex() {
    return await this.get(`${this.path}/content/posts/index.json`);
  }
  async loadMetaData(id2) {
    return this.get(`${this.path}/content/posts/metadata/${id2}.json`);
  }
  async loadPostData(id2) {
    return this.get(`${this.path}/content/posts/markdown/${id2}.md`);
  }
  async waitForDeploy() {
    const { octokit, options } = this;
    const { user, repo } = options;
    return new Promise((resolve) => {
      async function checkDeploy(resolve2) {
        const response = await octokit.request(
          `GET /repos/${user}/${repo}/actions/runs`
        );
        const { status } = response.data.workflow_runs[0];
        if (status === `completed`) return resolve2();
        setTimeout(() => checkDeploy(resolve2), 1e4);
      }
      __name(checkDeploy, "checkDeploy");
      setTimeout(() => checkDeploy(resolve), 3e3);
    });
  }
  // -----------------------------------------------------------
  async getCurrentSha() {
    const { octokit, options } = this;
    const { user, repo, branch } = options;
    return (await octokit.request(`GET /repos/${user}/${repo}/commits/${branch}`)).data.sha;
  }
  async makeBlob(data) {
    const { user, repo } = this.options;
    const blobData = await this.octokit.git.createBlob({
      owner: user,
      repo,
      data,
      encoding: "utf-8"
    });
    return blobData.data;
  }
  async saveEntry({ id: id2, metaData, postData }, index, saved) {
    const { title: title2, created } = metaData;
    const path2 = `${this.path}/content/posts/`;
    const files = [
      {
        message: `Saving post data`,
        path: `${path2}markdown/${id2}.md`,
        content: postData
      },
      {
        message: `Saving metadata`,
        path: `${path2}metadata/${id2}.json`,
        content: JSON.stringify(metaData, false, 2)
      },
      {
        message: `Saving updated index`,
        path: `${path2}index.json`,
        content: JSON.stringify(index, false, 2)
      },
      {
        message: `Saving static redirect page`,
        path: `pages/${created}/${utils_default.titleReplace(title2)}/index.html`,
        content: `<title>${title2}</title><meta http-equiv="refresh" content="0; url=../../../index.html?postid=${created}">`
      }
    ];
    await this.processCommit(files);
    saved?.();
  }
  async deleteEntry(id2, title2, created, index, deleted) {
    const path2 = `${this.path}/content/posts/`;
    const files = [
      {
        message: `Deleting post data`,
        path: `${path2}markdown/${id2}.md`
      },
      {
        message: `Deleting metadata`,
        path: `${path2}metadata/${id2}.json`
      },
      {
        message: `Saving updated index`,
        path: `${path2}index.json`,
        content: JSON.stringify(index, false, 2)
      },
      {
        message: `Deleting static redirect page`,
        path: `pages/${created}/${utils_default.titleReplace(title2)}/index.html`
      }
    ];
    await this.processCommit(files);
    deleted?.();
  }
  async processCommit(files) {
    const { options, octokit } = this;
    const { user: owner, repo, branch } = options;
    for (const { message, path: path2, content = null } of files) {
      const params = { owner, repo, branch, path: path2, content, message };
      await octokit.createOrUpdateTextFile(params);
    }
  }
  async saveRSS(rss, updated) {
    const { options, octokit } = this;
    const { user: owner, repo, branch } = options;
    await octokit.createOrUpdateTextFile({
      owner,
      repo,
      branch,
      path: `${this.path}/rss.xml`,
      content: rss,
      message: `Update to RSS`
    });
    updated?.();
  }
};

// components/WebLog.jsx
function timeToId(timestamp) {
  if (!timestamp) return false;
  var d3 = new Date(parseInt(timestamp, 10));
  var s4 = d3.toISOString();
  var id2 = s4.replace("T", "-").replace(/\..*/, "").replace(/\:/g, "-");
  return id2;
}
__name(timeToId, "timeToId");
var WebLog_default = createClass({
  initialState: {
    singleton: false,
    entries: {},
    entryIds: [],
    index: {},
    slice: { start: 0, end: 10 },
    authenticated: false,
    site: ``,
    issues: ``,
    tags: void 0
  },
  refs: ["admin"],
  getPostId() {
    const params = new URLSearchParams(location.search);
    const id2 = timeToId(params.get(`postid`));
    return id2;
  },
  setIssueTracker() {
    const site2 = document.getElementById(`gh-weblog`).dataset.site;
    this.setState({ site: site2, issues: `${site2}/issues` });
  },
  async onMount() {
    this.loadSettings();
    const id2 = this.getPostId();
    const index = await this.connector.loadIndex();
    const tags = /* @__PURE__ */ new Set();
    Object.values(index).forEach(
      (e3) => e3.tags?.forEach((tag) => tags.add(tag))
    );
    if (id2) {
      document.querySelector(`a.home-link`).href = "../..";
    }
    this.setState(
      {
        entryIds: Object.keys(index).sort().reverse(),
        index,
        singleton: id2,
        tags: [...tags]
      },
      () => {
        this.props.onTags?.(this.state.tags);
        this.loadEntries(id2);
        this.setIssueTracker();
      }
    );
  },
  onUpdate() {
    this.props.onIndex(this.state.index);
    document.querySelector(`html`).classList.toggle(`deploying`, !!this.state.deploying);
  },
  render() {
    const { state } = this;
    if (!!state.singleton) {
      return this.renderContent();
    }
    const postButton = state.authenticated ? /* @__PURE__ */ u2("button", { className: "admin post button", onClick: this.createEntry, children: "new entry" }) : false;
    const adminButton = /* @__PURE__ */ u2(
      "button",
      {
        className: "authenticate",
        onClick: this.showSettings,
        onClose: this.bindSettings,
        children: "admin"
      }
    );
    const moreButton = /* @__PURE__ */ u2("button", { className: "more-posts", onClick: this.more, children: "Load more posts" });
    return this.renderContent(adminButton, postButton, moreButton);
  },
  renderContent(adminButton, postButton, moreButton) {
    let entry = false;
    const id2 = this.state.singleton;
    if (id2) {
      entry = this.state.entries[id2];
      if (!entry) return null;
      const title2 = utils_default.titleReplace(entry.metaData.title);
      const vanityURL = `pages/${entry.metaData.created}/${title2}`;
      history.replaceState({}, title2, vanityURL);
    }
    return /* @__PURE__ */ u2("div", { className: "gh-weblog", children: [
      this.state.pending ? /* @__PURE__ */ u2("div", { className: "pending", children: "pending..." }) : null,
      this.generateToC(),
      this.generateTagList(),
      /* @__PURE__ */ u2(
        Admin_default,
        {
          ref: this.refs.admin,
          hidden: "true",
          onClose: this.bindSettings,
          onLogout: this.onLogOut
        }
      ),
      adminButton,
      postButton,
      this.generateEntries(entry),
      moreButton
    ] });
  },
  generateToC() {
    const { singleton } = this.state;
    return /* @__PURE__ */ u2("nav", { className: "toc", children: /* @__PURE__ */ u2("table", { children: Object.values(this.state.index).reverse().map(({ title: title2, created, tags }) => {
      const date = new Date(created);
      let when = date.toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric"
      });
      when = when.split(` `)[1] + " " + when.split(` `)[0];
      return /* @__PURE__ */ u2("tr", { children: [
        /* @__PURE__ */ u2("td", { className: "year", children: date.getFullYear() }),
        /* @__PURE__ */ u2("td", { className: "when", children: when }),
        /* @__PURE__ */ u2("td", { children: /* @__PURE__ */ u2(
          "a",
          {
            href: `${singleton ? `../../` : ``}pages/${created}/${utils_default.titleReplace(title2)}`,
            children: title2
          }
        ) })
      ] });
    }) }) });
  },
  generateTagList() {
    return null;
    const { tags } = this.state;
    if (!tags) return;
    return /* @__PURE__ */ u2("div", { className: "taglist", children: tags.sort().map((tag) => /* @__PURE__ */ u2("span", { children: tag.toLowerCase() })) });
  },
  getSlice() {
    const { state } = this;
    var start = state.slice.start;
    var end = state.slice.end;
    var ids = state.entryIds.slice(start, end);
    return ids.map((id2) => state.entries[id2]).filter(Boolean);
  },
  generateEntries(entry) {
    const entries = entry ? [entry] : this.getSlice();
    if (!entries.length) return;
    const { issues, singleton, authenticated } = this.state;
    return /* @__PURE__ */ u2("main", { children: entries.map((entry2) => {
      return entry2.metaData.draft && !authenticated ? null : /* @__PURE__ */ u2(
        Entry_default,
        {
          id: entry2.metaData.id,
          ref: entry2.metaData.id,
          issues,
          metaData: entry2.metaData,
          postData: entry2.postData,
          singleton,
          editable: !singleton && authenticated,
          onSave: this.saveEntry,
          onDelete: this.deleteEntry
        },
        entry2.metaData.id
      );
    }) });
  },
  // ------------------------------------------------------------
  loadSettings() {
    const settings2 = weblogsettings_default.getSettings();
    this.connector = new Connector(settings2);
    if (settings2 && settings2.token) {
      this.setState({ authenticated: true });
    }
  },
  showSettings() {
    this.refs.admin.current.show();
  },
  bindSettings(settings2) {
    this.connector.setProperties(settings2);
    if (settings2.token.trim()) {
      this.setState({ authenticated: true });
    }
  },
  // ------------------------------------------------------------
  onLogOut() {
    this.setState({ authenticated: false });
  },
  more() {
    document.querySelector(`.more-posts`).disabled = true;
    document.querySelector(`.more-posts`).style.opacity = 0.1;
    const { start, end } = this.state.slice;
    const slice = { start, end: end + 10 };
    this.setState({ slice }, async () => {
      await this.loadEntries();
      document.querySelector(`.more-posts`).disabled = false;
      document.querySelector(`.more-posts`).style.opacity = 1;
    });
  },
  // ------------------------------------------------------------
  loadEntries(id2) {
    const { updateEntry, connector, state } = this;
    const { entries } = state;
    const start = state.slice.start;
    const end = state.slice.end;
    const slice = id2 ? [id2] : state.entryIds.slice(start, end);
    return new Promise((resolve) => {
      (/* @__PURE__ */ __name(async function next(list) {
        if (!list.length) return resolve();
        const id3 = list.shift();
        if (!entries[id3]) {
          const metaData = await connector.loadMetaData(id3);
          const postData = await connector.loadPostData(id3);
          await updateEntry(id3, metaData, postData);
        }
        next(list);
      }, "next"))(slice);
    });
  },
  createEntry() {
    const timestamp = Date.now();
    const metaData = {
      title: "New Entry",
      created: timestamp,
      published: timestamp,
      updated: timestamp,
      tags: [],
      draft: void 0
    };
    const postData = "...click here to start editing your post...";
    const id2 = metaData.id = timeToId(timestamp);
    this.updateEntry(id2, metaData, postData);
  },
  updateEntry(id2, metaData, postData) {
    const { entries, index } = this.state;
    entries[id2] = { metaData, postData };
    const { title: title2, created, tags, draft } = metaData;
    index[id2] = { title: title2, created, tags, draft };
    const entryIds = Object.keys(index).sort().reverse();
    return new Promise(
      (resolve) => this.setState({ entryIds, entries, index }, resolve)
    );
  },
  async saveEntry(entry) {
    const { connector } = this;
    this.setState({ pending: true });
    const metaData = entry.getMetaData();
    const id2 = metaData.id;
    const postData = entry.getPostData();
    await this.updateEntry(id2, metaData, postData);
    connector.saveEntry(
      { id: id2, metaData, postData },
      this.state.index,
      async () => {
        console.log("save handled");
        await this.saveRSS();
        this.setState({ pending: false, deploying: true }, async () => {
          await connector.waitForDeploy();
          this.setState({ deploying: false });
        });
      }
    );
  },
  async deleteEntry(entry) {
    const { connector } = this;
    if (confirm("really delete post?")) {
      this.setState({ pending: true }, () => {
        const { entryIds, entries, index } = this.state;
        const { id: id2, created, title: title2 } = entry.state;
        const pos = entryIds.indexOf(id2);
        entryIds.splice(pos, 1);
        delete entries[id2];
        delete index[id2];
        this.setState({ entryIds, entries, index }, () => {
          const { index: index2 } = this.state;
          connector.deleteEntry(id2, title2, created, index2, async () => {
            console.log("delete handled");
            await this.loadEntries();
            this.saveRSS();
            this.setState({ pending: false, deploying: true }, async () => {
              await connector.waitForDeploy();
              this.setState({ deploying: false });
            });
          });
        });
      });
    }
  },
  // ------------------------------------------------------------
  saveRSS() {
    var connector = this.connector;
    console.log(`Updating RSS...`);
    connector.saveRSS(this.toRSS(), () => {
      console.log(`updated.`);
    });
  },
  toRSS() {
    const { singleton, slice, entries, entryIds, index } = this.state;
    if (singleton) return;
    if (slice.start >= 10) return;
    const { base: base2 } = this.props;
    const html = document.getElementById(`gh-weblog`);
    const { description: description2 } = html.dataset;
    var rssHeading = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="${base2}/${this.props.path}/rss.xml" rel="self" type="application/rss+xml" />
<title>${document.title}</title>
<description>${description2}</description>
<link>${location.toString()}</link>
<lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
<pubDate>${(/* @__PURE__ */ new Date()).toUTCString()}</pubDate>
<ttl>1440</ttl>`;
    console.log(`toRSS`, { entryIds, entries, index });
    var entriesRSS = entryIds.slice(0, 10).map((id2) => {
      console.log(`toRSS: processing ${id2}`);
      return this.entryToRSS(entries[id2]);
    }).filter((v3) => !!v3).join("\n");
    var rssTail = `</channel></rss>`;
    return rssHeading + entriesRSS + rssTail;
  },
  entryToRSS(entry) {
    const { metaData, postData } = entry;
    const { created, published, title: title2, tags } = metaData;
    const html = marked_default(postData);
    const { base: base2 } = weblogsettings_default.getSettings();
    return `<item>
<title>${title2}</title>
<description><![CDATA[${html}]]></description>
${tags.map((tag) => `<category>${tag}</category>`).join(`
`)}
<link>${base2}?postid=${created}</link>
<guid>${base2}?postid=${created}</guid>
<pubDate>${new Date(published).toUTCString()}</pubDate>
</item>`;
  }
});

// components/index.jsx
var settings = weblogsettings_default.getSettings();
var id = settings.target || "gh-weblog";
var target = document.getElementById(id);
async function handleTags(tags) {
}
__name(handleTags, "handleTags");
async function handleIndex(index) {
}
__name(handleIndex, "handleIndex");
if (!target) {
  const msg = `no target element with id '${id}' found to inject gh-weblog into.`;
  console.error(msg);
} else {
  D(
    g(WebLog_default, {
      ...settings,
      onTags: handleTags,
      onIndex: handleIndex
    }),
    target
  );
}
