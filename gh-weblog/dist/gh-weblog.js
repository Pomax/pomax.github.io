var __defProp = Object.defineProperty;
var __name = (target2, value) => __defProp(target2, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// lib/vendor/react/react.0.12.min.js
var react_0_12_min_default = function() {
  return (/* @__PURE__ */ __name(function e(t, n, r) {
    function o(i2, s) {
      if (!n[i2]) {
        if (!t[i2]) {
          var u = "function" == typeof __require && __require;
          if (!s && u) return u(i2, true);
          if (a) return a(i2, true);
          var c = new Error("Cannot find module '" + i2 + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        var l = n[i2] = { exports: {} };
        t[i2][0].call(
          l.exports,
          function(e2) {
            var n2 = t[i2][1][e2];
            return o(n2 ? n2 : e2);
          },
          l,
          l.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[i2].exports;
    }
    __name(o, "o");
    for (var a = "function" == typeof __require && __require, i = 0; i < r.length; i++)
      o(r[i]);
    return o;
  }, "e"))(
    {
      1: [
        function(e, t) {
          "use strict";
          var n = e("./DOMPropertyOperations"), r = e("./EventPluginUtils"), o = e("./ReactChildren"), a = e("./ReactComponent"), i = e("./ReactCompositeComponent"), s = e("./ReactContext"), u = e("./ReactCurrentOwner"), c = e("./ReactElement"), l = (e("./ReactElementValidator"), e("./ReactDOM")), p = e("./ReactDOMComponent"), d = e("./ReactDefaultInjection"), f = e("./ReactInstanceHandles"), h = e("./ReactLegacyElement"), m = e("./ReactMount"), v = e("./ReactMultiChild"), g = e("./ReactPerf"), y = e("./ReactPropTypes"), E = e("./ReactServerRendering"), C = e("./ReactTextComponent"), R = e("./Object.assign"), M = e("./deprecated"), b = e("./onlyChild");
          d.inject();
          var O = c.createElement, D = c.createFactory;
          O = h.wrapCreateElement(O), D = h.wrapCreateFactory(D);
          var x = g.measure("React", "render", m.render), P = {
            Children: {
              map: o.map,
              forEach: o.forEach,
              count: o.count,
              only: b
            },
            DOM: l,
            PropTypes: y,
            initializeTouchEvents: /* @__PURE__ */ __name(function(e2) {
              r.useTouchEvents = e2;
            }, "initializeTouchEvents"),
            createClass: i.createClass,
            createElement: O,
            createFactory: D,
            constructAndRenderComponent: m.constructAndRenderComponent,
            constructAndRenderComponentByID: m.constructAndRenderComponentByID,
            render: x,
            renderToString: E.renderToString,
            renderToStaticMarkup: E.renderToStaticMarkup,
            unmountComponentAtNode: m.unmountComponentAtNode,
            isValidClass: h.isValidClass,
            isValidElement: c.isValidElement,
            withContext: s.withContext,
            __spread: R,
            renderComponent: M("React", "renderComponent", "render", this, x),
            renderComponentToString: M(
              "React",
              "renderComponentToString",
              "renderToString",
              this,
              E.renderToString
            ),
            renderComponentToStaticMarkup: M(
              "React",
              "renderComponentToStaticMarkup",
              "renderToStaticMarkup",
              this,
              E.renderToStaticMarkup
            ),
            isValidComponent: M(
              "React",
              "isValidComponent",
              "isValidElement",
              this,
              c.isValidElement
            )
          };
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            Component: a,
            CurrentOwner: u,
            DOMComponent: p,
            DOMPropertyOperations: n,
            InstanceHandles: f,
            Mount: m,
            MultiChild: v,
            TextComponent: C
          });
          P.version = "0.12.2", t.exports = P;
        },
        {
          "./DOMPropertyOperations": 12,
          "./EventPluginUtils": 20,
          "./Object.assign": 27,
          "./ReactChildren": 31,
          "./ReactComponent": 32,
          "./ReactCompositeComponent": 34,
          "./ReactContext": 35,
          "./ReactCurrentOwner": 36,
          "./ReactDOM": 37,
          "./ReactDOMComponent": 39,
          "./ReactDefaultInjection": 49,
          "./ReactElement": 50,
          "./ReactElementValidator": 51,
          "./ReactInstanceHandles": 58,
          "./ReactLegacyElement": 59,
          "./ReactMount": 61,
          "./ReactMultiChild": 62,
          "./ReactPerf": 66,
          "./ReactPropTypes": 70,
          "./ReactServerRendering": 74,
          "./ReactTextComponent": 76,
          "./deprecated": 104,
          "./onlyChild": 135
        }
      ],
      2: [
        function(e, t) {
          "use strict";
          var n = e("./focusNode"), r = {
            componentDidMount: /* @__PURE__ */ __name(function() {
              this.props.autoFocus && n(this.getDOMNode());
            }, "componentDidMount")
          };
          t.exports = r;
        },
        { "./focusNode": 109 }
      ],
      3: [
        function(e, t) {
          "use strict";
          function n() {
            var e2 = window.opera;
            return "object" == typeof e2 && "function" == typeof e2.version && parseInt(e2.version(), 10) <= 12;
          }
          __name(n, "n");
          function r(e2) {
            return (e2.ctrlKey || e2.altKey || e2.metaKey) && !(e2.ctrlKey && e2.altKey);
          }
          __name(r, "r");
          var o = e("./EventConstants"), a = e("./EventPropagators"), i = e("./ExecutionEnvironment"), s = e("./SyntheticInputEvent"), u = e("./keyOf"), c = i.canUseDOM && "TextEvent" in window && !("documentMode" in document || n()), l = 32, p = String.fromCharCode(l), d = o.topLevelTypes, f = {
            beforeInput: {
              phasedRegistrationNames: {
                bubbled: u({ onBeforeInput: null }),
                captured: u({ onBeforeInputCapture: null })
              },
              dependencies: [
                d.topCompositionEnd,
                d.topKeyPress,
                d.topTextInput,
                d.topPaste
              ]
            }
          }, h = null, m = false, v = {
            eventTypes: f,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, n2, o2) {
              var i2;
              if (c)
                switch (e2) {
                  case d.topKeyPress:
                    var u2 = o2.which;
                    if (u2 !== l) return;
                    m = true, i2 = p;
                    break;
                  case d.topTextInput:
                    if (i2 = o2.data, i2 === p && m) return;
                    break;
                  default:
                    return;
                }
              else {
                switch (e2) {
                  case d.topPaste:
                    h = null;
                    break;
                  case d.topKeyPress:
                    o2.which && !r(o2) && (h = String.fromCharCode(o2.which));
                    break;
                  case d.topCompositionEnd:
                    h = o2.data;
                }
                if (null === h) return;
                i2 = h;
              }
              if (i2) {
                var v2 = s.getPooled(f.beforeInput, n2, o2);
                return v2.data = i2, h = null, a.accumulateTwoPhaseDispatches(v2), v2;
              }
            }, "extractEvents")
          };
          t.exports = v;
        },
        {
          "./EventConstants": 16,
          "./EventPropagators": 21,
          "./ExecutionEnvironment": 22,
          "./SyntheticInputEvent": 87,
          "./keyOf": 131
        }
      ],
      4: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            return e2 + t2.charAt(0).toUpperCase() + t2.substring(1);
          }
          __name(n, "n");
          var r = {
            columnCount: true,
            flex: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineClamp: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true,
            fillOpacity: true,
            strokeOpacity: true
          }, o = ["Webkit", "ms", "Moz", "O"];
          Object.keys(r).forEach(function(e2) {
            o.forEach(function(t2) {
              r[n(t2, e2)] = r[e2];
            });
          });
          var a = {
            background: {
              backgroundImage: true,
              backgroundPosition: true,
              backgroundRepeat: true,
              backgroundColor: true
            },
            border: { borderWidth: true, borderStyle: true, borderColor: true },
            borderBottom: {
              borderBottomWidth: true,
              borderBottomStyle: true,
              borderBottomColor: true
            },
            borderLeft: {
              borderLeftWidth: true,
              borderLeftStyle: true,
              borderLeftColor: true
            },
            borderRight: {
              borderRightWidth: true,
              borderRightStyle: true,
              borderRightColor: true
            },
            borderTop: {
              borderTopWidth: true,
              borderTopStyle: true,
              borderTopColor: true
            },
            font: {
              fontStyle: true,
              fontVariant: true,
              fontWeight: true,
              fontSize: true,
              lineHeight: true,
              fontFamily: true
            }
          }, i = { isUnitlessNumber: r, shorthandPropertyExpansions: a };
          t.exports = i;
        },
        {}
      ],
      5: [
        function(e, t) {
          "use strict";
          var n = e("./CSSProperty"), r = e("./ExecutionEnvironment"), o = (e("./camelizeStyleName"), e("./dangerousStyleValue")), a = e("./hyphenateStyleName"), i = e("./memoizeStringOnly"), s = (e("./warning"), i(function(e2) {
            return a(e2);
          })), u = "cssFloat";
          r.canUseDOM && void 0 === document.documentElement.style.cssFloat && (u = "styleFloat");
          var c = {
            createMarkupForStyles: /* @__PURE__ */ __name(function(e2) {
              var t2 = "";
              for (var n2 in e2)
                if (e2.hasOwnProperty(n2)) {
                  var r2 = e2[n2];
                  null != r2 && (t2 += s(n2) + ":", t2 += o(n2, r2) + ";");
                }
              return t2 || null;
            }, "createMarkupForStyles"),
            setValueForStyles: /* @__PURE__ */ __name(function(e2, t2) {
              var r2 = e2.style;
              for (var a2 in t2)
                if (t2.hasOwnProperty(a2)) {
                  var i2 = o(a2, t2[a2]);
                  if ("float" === a2 && (a2 = u), i2) r2[a2] = i2;
                  else {
                    var s2 = n.shorthandPropertyExpansions[a2];
                    if (s2) for (var c2 in s2) r2[c2] = "";
                    else r2[a2] = "";
                  }
                }
            }, "setValueForStyles")
          };
          t.exports = c;
        },
        {
          "./CSSProperty": 4,
          "./ExecutionEnvironment": 22,
          "./camelizeStyleName": 98,
          "./dangerousStyleValue": 103,
          "./hyphenateStyleName": 122,
          "./memoizeStringOnly": 133,
          "./warning": 141
        }
      ],
      6: [
        function(e, t) {
          "use strict";
          function n() {
            this._callbacks = null, this._contexts = null;
          }
          __name(n, "n");
          var r = e("./PooledClass"), o = e("./Object.assign"), a = e("./invariant");
          o(n.prototype, {
            enqueue: /* @__PURE__ */ __name(function(e2, t2) {
              this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e2), this._contexts.push(t2);
            }, "enqueue"),
            notifyAll: /* @__PURE__ */ __name(function() {
              var e2 = this._callbacks, t2 = this._contexts;
              if (e2) {
                a(e2.length === t2.length), this._callbacks = null, this._contexts = null;
                for (var n2 = 0, r2 = e2.length; r2 > n2; n2++) e2[n2].call(t2[n2]);
                e2.length = 0, t2.length = 0;
              }
            }, "notifyAll"),
            reset: /* @__PURE__ */ __name(function() {
              this._callbacks = null, this._contexts = null;
            }, "reset"),
            destructor: /* @__PURE__ */ __name(function() {
              this.reset();
            }, "destructor")
          }), r.addPoolingTo(n), t.exports = n;
        },
        { "./Object.assign": 27, "./PooledClass": 28, "./invariant": 124 }
      ],
      7: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return "SELECT" === e2.nodeName || "INPUT" === e2.nodeName && "file" === e2.type;
          }
          __name(n, "n");
          function r(e2) {
            var t2 = M.getPooled(P.change, w, e2);
            E.accumulateTwoPhaseDispatches(t2), R.batchedUpdates(o, t2);
          }
          __name(r, "r");
          function o(e2) {
            y.enqueueEvents(e2), y.processEventQueue();
          }
          __name(o, "o");
          function a(e2, t2) {
            _ = e2, w = t2, _.attachEvent("onchange", r);
          }
          __name(a, "a");
          function i() {
            _ && (_.detachEvent("onchange", r), _ = null, w = null);
          }
          __name(i, "i");
          function s(e2, t2, n2) {
            return e2 === x.topChange ? n2 : void 0;
          }
          __name(s, "s");
          function u(e2, t2, n2) {
            e2 === x.topFocus ? (i(), a(t2, n2)) : e2 === x.topBlur && i();
          }
          __name(u, "u");
          function c(e2, t2) {
            _ = e2, w = t2, T = e2.value, N = Object.getOwnPropertyDescriptor(
              e2.constructor.prototype,
              "value"
            ), Object.defineProperty(_, "value", k), _.attachEvent("onpropertychange", p);
          }
          __name(c, "c");
          function l() {
            _ && (delete _.value, _.detachEvent("onpropertychange", p), _ = null, w = null, T = null, N = null);
          }
          __name(l, "l");
          function p(e2) {
            if ("value" === e2.propertyName) {
              var t2 = e2.srcElement.value;
              t2 !== T && (T = t2, r(e2));
            }
          }
          __name(p, "p");
          function d(e2, t2, n2) {
            return e2 === x.topInput ? n2 : void 0;
          }
          __name(d, "d");
          function f(e2, t2, n2) {
            e2 === x.topFocus ? (l(), c(t2, n2)) : e2 === x.topBlur && l();
          }
          __name(f, "f");
          function h(e2) {
            return e2 !== x.topSelectionChange && e2 !== x.topKeyUp && e2 !== x.topKeyDown || !_ || _.value === T ? void 0 : (T = _.value, w);
          }
          __name(h, "h");
          function m(e2) {
            return "INPUT" === e2.nodeName && ("checkbox" === e2.type || "radio" === e2.type);
          }
          __name(m, "m");
          function v(e2, t2, n2) {
            return e2 === x.topClick ? n2 : void 0;
          }
          __name(v, "v");
          var g = e("./EventConstants"), y = e("./EventPluginHub"), E = e("./EventPropagators"), C = e("./ExecutionEnvironment"), R = e("./ReactUpdates"), M = e("./SyntheticEvent"), b = e("./isEventSupported"), O = e("./isTextInputElement"), D = e("./keyOf"), x = g.topLevelTypes, P = {
            change: {
              phasedRegistrationNames: {
                bubbled: D({ onChange: null }),
                captured: D({ onChangeCapture: null })
              },
              dependencies: [
                x.topBlur,
                x.topChange,
                x.topClick,
                x.topFocus,
                x.topInput,
                x.topKeyDown,
                x.topKeyUp,
                x.topSelectionChange
              ]
            }
          }, _ = null, w = null, T = null, N = null, I = false;
          C.canUseDOM && (I = b("change") && (!("documentMode" in document) || document.documentMode > 8));
          var S = false;
          C.canUseDOM && (S = b("input") && (!("documentMode" in document) || document.documentMode > 9));
          var k = {
            get: /* @__PURE__ */ __name(function() {
              return N.get.call(this);
            }, "get"),
            set: /* @__PURE__ */ __name(function(e2) {
              T = "" + e2, N.set.call(this, e2);
            }, "set")
          }, A = {
            eventTypes: P,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, r2, o2) {
              var a2, i2;
              if (n(t2) ? I ? a2 = s : i2 = u : O(t2) ? S ? a2 = d : (a2 = h, i2 = f) : m(t2) && (a2 = v), a2) {
                var c2 = a2(e2, t2, r2);
                if (c2) {
                  var l2 = M.getPooled(P.change, c2, o2);
                  return E.accumulateTwoPhaseDispatches(l2), l2;
                }
              }
              i2 && i2(e2, t2, r2);
            }, "extractEvents")
          };
          t.exports = A;
        },
        {
          "./EventConstants": 16,
          "./EventPluginHub": 18,
          "./EventPropagators": 21,
          "./ExecutionEnvironment": 22,
          "./ReactUpdates": 77,
          "./SyntheticEvent": 85,
          "./isEventSupported": 125,
          "./isTextInputElement": 127,
          "./keyOf": 131
        }
      ],
      8: [
        function(e, t) {
          "use strict";
          var n = 0, r = {
            createReactRootIndex: /* @__PURE__ */ __name(function() {
              return n++;
            }, "createReactRootIndex")
          };
          t.exports = r;
        },
        {}
      ],
      9: [
        function(e, t) {
          "use strict";
          function n(e2) {
            switch (e2) {
              case g.topCompositionStart:
                return E.compositionStart;
              case g.topCompositionEnd:
                return E.compositionEnd;
              case g.topCompositionUpdate:
                return E.compositionUpdate;
            }
          }
          __name(n, "n");
          function r(e2, t2) {
            return e2 === g.topKeyDown && t2.keyCode === h;
          }
          __name(r, "r");
          function o(e2, t2) {
            switch (e2) {
              case g.topKeyUp:
                return -1 !== f.indexOf(t2.keyCode);
              case g.topKeyDown:
                return t2.keyCode !== h;
              case g.topKeyPress:
              case g.topMouseDown:
              case g.topBlur:
                return true;
              default:
                return false;
            }
          }
          __name(o, "o");
          function a(e2) {
            this.root = e2, this.startSelection = c.getSelection(e2), this.startValue = this.getText();
          }
          __name(a, "a");
          var i = e("./EventConstants"), s = e("./EventPropagators"), u = e("./ExecutionEnvironment"), c = e("./ReactInputSelection"), l = e("./SyntheticCompositionEvent"), p = e("./getTextContentAccessor"), d = e("./keyOf"), f = [9, 13, 27, 32], h = 229, m = u.canUseDOM && "CompositionEvent" in window, v = !m || "documentMode" in document && document.documentMode > 8 && document.documentMode <= 11, g = i.topLevelTypes, y = null, E = {
            compositionEnd: {
              phasedRegistrationNames: {
                bubbled: d({ onCompositionEnd: null }),
                captured: d({ onCompositionEndCapture: null })
              },
              dependencies: [
                g.topBlur,
                g.topCompositionEnd,
                g.topKeyDown,
                g.topKeyPress,
                g.topKeyUp,
                g.topMouseDown
              ]
            },
            compositionStart: {
              phasedRegistrationNames: {
                bubbled: d({ onCompositionStart: null }),
                captured: d({ onCompositionStartCapture: null })
              },
              dependencies: [
                g.topBlur,
                g.topCompositionStart,
                g.topKeyDown,
                g.topKeyPress,
                g.topKeyUp,
                g.topMouseDown
              ]
            },
            compositionUpdate: {
              phasedRegistrationNames: {
                bubbled: d({ onCompositionUpdate: null }),
                captured: d({ onCompositionUpdateCapture: null })
              },
              dependencies: [
                g.topBlur,
                g.topCompositionUpdate,
                g.topKeyDown,
                g.topKeyPress,
                g.topKeyUp,
                g.topMouseDown
              ]
            }
          };
          a.prototype.getText = function() {
            return this.root.value || this.root[p()];
          }, a.prototype.getData = function() {
            var e2 = this.getText(), t2 = this.startSelection.start, n2 = this.startValue.length - this.startSelection.end;
            return e2.substr(t2, e2.length - n2 - t2);
          };
          var C = {
            eventTypes: E,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, i2, u2) {
              var c2, p2;
              if (m ? c2 = n(e2) : y ? o(e2, u2) && (c2 = E.compositionEnd) : r(e2, u2) && (c2 = E.compositionStart), v && (y || c2 !== E.compositionStart ? c2 === E.compositionEnd && y && (p2 = y.getData(), y = null) : y = new a(t2)), c2) {
                var d2 = l.getPooled(c2, i2, u2);
                return p2 && (d2.data = p2), s.accumulateTwoPhaseDispatches(d2), d2;
              }
            }, "extractEvents")
          };
          t.exports = C;
        },
        {
          "./EventConstants": 16,
          "./EventPropagators": 21,
          "./ExecutionEnvironment": 22,
          "./ReactInputSelection": 57,
          "./SyntheticCompositionEvent": 83,
          "./getTextContentAccessor": 119,
          "./keyOf": 131
        }
      ],
      10: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            e2.insertBefore(t2, e2.childNodes[n2] || null);
          }
          __name(n, "n");
          var r, o = e("./Danger"), a = e("./ReactMultiChildUpdateTypes"), i = e("./getTextContentAccessor"), s = e("./invariant"), u = i();
          r = "textContent" === u ? function(e2, t2) {
            e2.textContent = t2;
          } : function(e2, t2) {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            if (t2) {
              var n2 = e2.ownerDocument || document;
              e2.appendChild(n2.createTextNode(t2));
            }
          };
          var c = {
            dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
            updateTextContent: r,
            processUpdates: /* @__PURE__ */ __name(function(e2, t2) {
              for (var i2, u2 = null, c2 = null, l = 0; i2 = e2[l]; l++)
                if (i2.type === a.MOVE_EXISTING || i2.type === a.REMOVE_NODE) {
                  var p = i2.fromIndex, d = i2.parentNode.childNodes[p], f = i2.parentID;
                  s(d), u2 = u2 || {}, u2[f] = u2[f] || [], u2[f][p] = d, c2 = c2 || [], c2.push(d);
                }
              var h = o.dangerouslyRenderMarkup(t2);
              if (c2)
                for (var m = 0; m < c2.length; m++)
                  c2[m].parentNode.removeChild(c2[m]);
              for (var v = 0; i2 = e2[v]; v++)
                switch (i2.type) {
                  case a.INSERT_MARKUP:
                    n(i2.parentNode, h[i2.markupIndex], i2.toIndex);
                    break;
                  case a.MOVE_EXISTING:
                    n(i2.parentNode, u2[i2.parentID][i2.fromIndex], i2.toIndex);
                    break;
                  case a.TEXT_CONTENT:
                    r(i2.parentNode, i2.textContent);
                    break;
                  case a.REMOVE_NODE:
                }
            }, "processUpdates")
          };
          t.exports = c;
        },
        {
          "./Danger": 13,
          "./ReactMultiChildUpdateTypes": 63,
          "./getTextContentAccessor": 119,
          "./invariant": 124
        }
      ],
      11: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            return (e2 & t2) === t2;
          }
          __name(n, "n");
          var r = e("./invariant"), o = {
            MUST_USE_ATTRIBUTE: 1,
            MUST_USE_PROPERTY: 2,
            HAS_SIDE_EFFECTS: 4,
            HAS_BOOLEAN_VALUE: 8,
            HAS_NUMERIC_VALUE: 16,
            HAS_POSITIVE_NUMERIC_VALUE: 48,
            HAS_OVERLOADED_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: /* @__PURE__ */ __name(function(e2) {
              var t2 = e2.Properties || {}, a2 = e2.DOMAttributeNames || {}, s = e2.DOMPropertyNames || {}, u = e2.DOMMutationMethods || {};
              e2.isCustomAttribute && i._isCustomAttributeFunctions.push(e2.isCustomAttribute);
              for (var c in t2) {
                r(!i.isStandardName.hasOwnProperty(c)), i.isStandardName[c] = true;
                var l = c.toLowerCase();
                if (i.getPossibleStandardName[l] = c, a2.hasOwnProperty(c)) {
                  var p = a2[c];
                  i.getPossibleStandardName[p] = c, i.getAttributeName[c] = p;
                } else i.getAttributeName[c] = l;
                i.getPropertyName[c] = s.hasOwnProperty(c) ? s[c] : c, i.getMutationMethod[c] = u.hasOwnProperty(c) ? u[c] : null;
                var d = t2[c];
                i.mustUseAttribute[c] = n(d, o.MUST_USE_ATTRIBUTE), i.mustUseProperty[c] = n(d, o.MUST_USE_PROPERTY), i.hasSideEffects[c] = n(d, o.HAS_SIDE_EFFECTS), i.hasBooleanValue[c] = n(d, o.HAS_BOOLEAN_VALUE), i.hasNumericValue[c] = n(d, o.HAS_NUMERIC_VALUE), i.hasPositiveNumericValue[c] = n(
                  d,
                  o.HAS_POSITIVE_NUMERIC_VALUE
                ), i.hasOverloadedBooleanValue[c] = n(
                  d,
                  o.HAS_OVERLOADED_BOOLEAN_VALUE
                ), r(!i.mustUseAttribute[c] || !i.mustUseProperty[c]), r(i.mustUseProperty[c] || !i.hasSideEffects[c]), r(
                  !!i.hasBooleanValue[c] + !!i.hasNumericValue[c] + !!i.hasOverloadedBooleanValue[c] <= 1
                );
              }
            }, "injectDOMPropertyConfig")
          }, a = {}, i = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            isStandardName: {},
            getPossibleStandardName: {},
            getAttributeName: {},
            getPropertyName: {},
            getMutationMethod: {},
            mustUseAttribute: {},
            mustUseProperty: {},
            hasSideEffects: {},
            hasBooleanValue: {},
            hasNumericValue: {},
            hasPositiveNumericValue: {},
            hasOverloadedBooleanValue: {},
            _isCustomAttributeFunctions: [],
            isCustomAttribute: /* @__PURE__ */ __name(function(e2) {
              for (var t2 = 0; t2 < i._isCustomAttributeFunctions.length; t2++) {
                var n2 = i._isCustomAttributeFunctions[t2];
                if (n2(e2)) return true;
              }
              return false;
            }, "isCustomAttribute"),
            getDefaultValueForProperty: /* @__PURE__ */ __name(function(e2, t2) {
              var n2, r2 = a[e2];
              return r2 || (a[e2] = r2 = {}), t2 in r2 || (n2 = document.createElement(e2), r2[t2] = n2[t2]), r2[t2];
            }, "getDefaultValueForProperty"),
            injection: o
          };
          t.exports = i;
        },
        { "./invariant": 124 }
      ],
      12: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            return null == t2 || r.hasBooleanValue[e2] && !t2 || r.hasNumericValue[e2] && isNaN(t2) || r.hasPositiveNumericValue[e2] && 1 > t2 || r.hasOverloadedBooleanValue[e2] && t2 === false;
          }
          __name(n, "n");
          var r = e("./DOMProperty"), o = e("./escapeTextForBrowser"), a = e("./memoizeStringOnly"), i = (e("./warning"), a(function(e2) {
            return o(e2) + '="';
          })), s = {
            createMarkupForID: /* @__PURE__ */ __name(function(e2) {
              return i(r.ID_ATTRIBUTE_NAME) + o(e2) + '"';
            }, "createMarkupForID"),
            createMarkupForProperty: /* @__PURE__ */ __name(function(e2, t2) {
              if (r.isStandardName.hasOwnProperty(e2) && r.isStandardName[e2]) {
                if (n(e2, t2)) return "";
                var a2 = r.getAttributeName[e2];
                return r.hasBooleanValue[e2] || r.hasOverloadedBooleanValue[e2] && t2 === true ? o(a2) : i(a2) + o(t2) + '"';
              }
              return r.isCustomAttribute(e2) ? null == t2 ? "" : i(e2) + o(t2) + '"' : null;
            }, "createMarkupForProperty"),
            setValueForProperty: /* @__PURE__ */ __name(function(e2, t2, o2) {
              if (r.isStandardName.hasOwnProperty(t2) && r.isStandardName[t2]) {
                var a2 = r.getMutationMethod[t2];
                if (a2) a2(e2, o2);
                else if (n(t2, o2)) this.deleteValueForProperty(e2, t2);
                else if (r.mustUseAttribute[t2])
                  e2.setAttribute(r.getAttributeName[t2], "" + o2);
                else {
                  var i2 = r.getPropertyName[t2];
                  r.hasSideEffects[t2] && "" + e2[i2] == "" + o2 || (e2[i2] = o2);
                }
              } else
                r.isCustomAttribute(t2) && (null == o2 ? e2.removeAttribute(t2) : e2.setAttribute(t2, "" + o2));
            }, "setValueForProperty"),
            deleteValueForProperty: /* @__PURE__ */ __name(function(e2, t2) {
              if (r.isStandardName.hasOwnProperty(t2) && r.isStandardName[t2]) {
                var n2 = r.getMutationMethod[t2];
                if (n2) n2(e2, void 0);
                else if (r.mustUseAttribute[t2])
                  e2.removeAttribute(r.getAttributeName[t2]);
                else {
                  var o2 = r.getPropertyName[t2], a2 = r.getDefaultValueForProperty(e2.nodeName, o2);
                  r.hasSideEffects[t2] && "" + e2[o2] === a2 || (e2[o2] = a2);
                }
              } else r.isCustomAttribute(t2) && e2.removeAttribute(t2);
            }, "deleteValueForProperty")
          };
          t.exports = s;
        },
        {
          "./DOMProperty": 11,
          "./escapeTextForBrowser": 107,
          "./memoizeStringOnly": 133,
          "./warning": 141
        }
      ],
      13: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return e2.substring(1, e2.indexOf(" "));
          }
          __name(n, "n");
          var r = e("./ExecutionEnvironment"), o = e("./createNodesFromMarkup"), a = e("./emptyFunction"), i = e("./getMarkupWrap"), s = e("./invariant"), u = /^(<[^ \/>]+)/, c = "data-danger-index", l = {
            dangerouslyRenderMarkup: /* @__PURE__ */ __name(function(e2) {
              s(r.canUseDOM);
              for (var t2, l2 = {}, p = 0; p < e2.length; p++)
                s(e2[p]), t2 = n(e2[p]), t2 = i(t2) ? t2 : "*", l2[t2] = l2[t2] || [], l2[t2][p] = e2[p];
              var d = [], f = 0;
              for (t2 in l2)
                if (l2.hasOwnProperty(t2)) {
                  var h = l2[t2];
                  for (var m in h)
                    if (h.hasOwnProperty(m)) {
                      var v = h[m];
                      h[m] = v.replace(u, "$1 " + c + '="' + m + '" ');
                    }
                  var g = o(h.join(""), a);
                  for (p = 0; p < g.length; ++p) {
                    var y = g[p];
                    y.hasAttribute && y.hasAttribute(c) && (m = +y.getAttribute(c), y.removeAttribute(c), s(!d.hasOwnProperty(m)), d[m] = y, f += 1);
                  }
                }
              return s(f === d.length), s(d.length === e2.length), d;
            }, "dangerouslyRenderMarkup"),
            dangerouslyReplaceNodeWithMarkup: /* @__PURE__ */ __name(function(e2, t2) {
              s(r.canUseDOM), s(t2), s("html" !== e2.tagName.toLowerCase());
              var n2 = o(t2, a)[0];
              e2.parentNode.replaceChild(n2, e2);
            }, "dangerouslyReplaceNodeWithMarkup")
          };
          t.exports = l;
        },
        {
          "./ExecutionEnvironment": 22,
          "./createNodesFromMarkup": 102,
          "./emptyFunction": 105,
          "./getMarkupWrap": 116,
          "./invariant": 124
        }
      ],
      14: [
        function(e, t) {
          "use strict";
          var n = e("./keyOf"), r = [
            n({ ResponderEventPlugin: null }),
            n({ SimpleEventPlugin: null }),
            n({ TapEventPlugin: null }),
            n({ EnterLeaveEventPlugin: null }),
            n({ ChangeEventPlugin: null }),
            n({ SelectEventPlugin: null }),
            n({ CompositionEventPlugin: null }),
            n({ BeforeInputEventPlugin: null }),
            n({ AnalyticsEventPlugin: null }),
            n({ MobileSafariClickEventPlugin: null })
          ];
          t.exports = r;
        },
        { "./keyOf": 131 }
      ],
      15: [
        function(e, t) {
          "use strict";
          var n = e("./EventConstants"), r = e("./EventPropagators"), o = e("./SyntheticMouseEvent"), a = e("./ReactMount"), i = e("./keyOf"), s = n.topLevelTypes, u = a.getFirstReactDOM, c = {
            mouseEnter: {
              registrationName: i({ onMouseEnter: null }),
              dependencies: [s.topMouseOut, s.topMouseOver]
            },
            mouseLeave: {
              registrationName: i({ onMouseLeave: null }),
              dependencies: [s.topMouseOut, s.topMouseOver]
            }
          }, l = [null, null], p = {
            eventTypes: c,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, n2, i2) {
              if (e2 === s.topMouseOver && (i2.relatedTarget || i2.fromElement))
                return null;
              if (e2 !== s.topMouseOut && e2 !== s.topMouseOver) return null;
              var p2;
              if (t2.window === t2) p2 = t2;
              else {
                var d = t2.ownerDocument;
                p2 = d ? d.defaultView || d.parentWindow : window;
              }
              var f, h;
              if (e2 === s.topMouseOut ? (f = t2, h = u(i2.relatedTarget || i2.toElement) || p2) : (f = p2, h = t2), f === h)
                return null;
              var m = f ? a.getID(f) : "", v = h ? a.getID(h) : "", g = o.getPooled(c.mouseLeave, m, i2);
              g.type = "mouseleave", g.target = f, g.relatedTarget = h;
              var y = o.getPooled(c.mouseEnter, v, i2);
              return y.type = "mouseenter", y.target = h, y.relatedTarget = f, r.accumulateEnterLeaveDispatches(g, y, m, v), l[0] = g, l[1] = y, l;
            }, "extractEvents")
          };
          t.exports = p;
        },
        {
          "./EventConstants": 16,
          "./EventPropagators": 21,
          "./ReactMount": 61,
          "./SyntheticMouseEvent": 89,
          "./keyOf": 131
        }
      ],
      16: [
        function(e, t) {
          "use strict";
          var n = e("./keyMirror"), r = n({ bubbled: null, captured: null }), o = n({
            topBlur: null,
            topChange: null,
            topClick: null,
            topCompositionEnd: null,
            topCompositionStart: null,
            topCompositionUpdate: null,
            topContextMenu: null,
            topCopy: null,
            topCut: null,
            topDoubleClick: null,
            topDrag: null,
            topDragEnd: null,
            topDragEnter: null,
            topDragExit: null,
            topDragLeave: null,
            topDragOver: null,
            topDragStart: null,
            topDrop: null,
            topError: null,
            topFocus: null,
            topInput: null,
            topKeyDown: null,
            topKeyPress: null,
            topKeyUp: null,
            topLoad: null,
            topMouseDown: null,
            topMouseMove: null,
            topMouseOut: null,
            topMouseOver: null,
            topMouseUp: null,
            topPaste: null,
            topReset: null,
            topScroll: null,
            topSelectionChange: null,
            topSubmit: null,
            topTextInput: null,
            topTouchCancel: null,
            topTouchEnd: null,
            topTouchMove: null,
            topTouchStart: null,
            topWheel: null
          }), a = { topLevelTypes: o, PropagationPhases: r };
          t.exports = a;
        },
        { "./keyMirror": 130 }
      ],
      17: [
        function(e, t) {
          var n = e("./emptyFunction"), r = {
            listen: /* @__PURE__ */ __name(function(e2, t2, n2) {
              return e2.addEventListener ? (e2.addEventListener(t2, n2, false), {
                remove: /* @__PURE__ */ __name(function() {
                  e2.removeEventListener(t2, n2, false);
                }, "remove")
              }) : e2.attachEvent ? (e2.attachEvent("on" + t2, n2), {
                remove: /* @__PURE__ */ __name(function() {
                  e2.detachEvent("on" + t2, n2);
                }, "remove")
              }) : void 0;
            }, "listen"),
            capture: /* @__PURE__ */ __name(function(e2, t2, r2) {
              return e2.addEventListener ? (e2.addEventListener(t2, r2, true), {
                remove: /* @__PURE__ */ __name(function() {
                  e2.removeEventListener(t2, r2, true);
                }, "remove")
              }) : { remove: n };
            }, "capture"),
            registerDefault: /* @__PURE__ */ __name(function() {
            }, "registerDefault")
          };
          t.exports = r;
        },
        { "./emptyFunction": 105 }
      ],
      18: [
        function(e, t) {
          "use strict";
          var n = e("./EventPluginRegistry"), r = e("./EventPluginUtils"), o = e("./accumulateInto"), a = e("./forEachAccumulated"), i = e("./invariant"), s = {}, u = null, c = /* @__PURE__ */ __name(function(e2) {
            if (e2) {
              var t2 = r.executeDispatch, o2 = n.getPluginModuleForEvent(e2);
              o2 && o2.executeDispatch && (t2 = o2.executeDispatch), r.executeDispatchesInOrder(e2, t2), e2.isPersistent() || e2.constructor.release(e2);
            }
          }, "c"), l = null, p = {
            injection: {
              injectMount: r.injection.injectMount,
              injectInstanceHandle: /* @__PURE__ */ __name(function(e2) {
                l = e2;
              }, "injectInstanceHandle"),
              getInstanceHandle: /* @__PURE__ */ __name(function() {
                return l;
              }, "getInstanceHandle"),
              injectEventPluginOrder: n.injectEventPluginOrder,
              injectEventPluginsByName: n.injectEventPluginsByName
            },
            eventNameDispatchConfigs: n.eventNameDispatchConfigs,
            registrationNameModules: n.registrationNameModules,
            putListener: /* @__PURE__ */ __name(function(e2, t2, n2) {
              i(!n2 || "function" == typeof n2);
              var r2 = s[t2] || (s[t2] = {});
              r2[e2] = n2;
            }, "putListener"),
            getListener: /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = s[t2];
              return n2 && n2[e2];
            }, "getListener"),
            deleteListener: /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = s[t2];
              n2 && delete n2[e2];
            }, "deleteListener"),
            deleteAllListeners: /* @__PURE__ */ __name(function(e2) {
              for (var t2 in s) delete s[t2][e2];
            }, "deleteAllListeners"),
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, r2, a2) {
              for (var i2, s2 = n.plugins, u2 = 0, c2 = s2.length; c2 > u2; u2++) {
                var l2 = s2[u2];
                if (l2) {
                  var p2 = l2.extractEvents(e2, t2, r2, a2);
                  p2 && (i2 = o(i2, p2));
                }
              }
              return i2;
            }, "extractEvents"),
            enqueueEvents: /* @__PURE__ */ __name(function(e2) {
              e2 && (u = o(u, e2));
            }, "enqueueEvents"),
            processEventQueue: /* @__PURE__ */ __name(function() {
              var e2 = u;
              u = null, a(e2, c), i(!u);
            }, "processEventQueue"),
            __purge: /* @__PURE__ */ __name(function() {
              s = {};
            }, "__purge"),
            __getListenerBank: /* @__PURE__ */ __name(function() {
              return s;
            }, "__getListenerBank")
          };
          t.exports = p;
        },
        {
          "./EventPluginRegistry": 19,
          "./EventPluginUtils": 20,
          "./accumulateInto": 95,
          "./forEachAccumulated": 110,
          "./invariant": 124
        }
      ],
      19: [
        function(e, t) {
          "use strict";
          function n() {
            if (i)
              for (var e2 in s) {
                var t2 = s[e2], n2 = i.indexOf(e2);
                if (a(n2 > -1), !u.plugins[n2]) {
                  a(t2.extractEvents), u.plugins[n2] = t2;
                  var o2 = t2.eventTypes;
                  for (var c in o2) a(r(o2[c], t2, c));
                }
              }
          }
          __name(n, "n");
          function r(e2, t2, n2) {
            a(!u.eventNameDispatchConfigs.hasOwnProperty(n2)), u.eventNameDispatchConfigs[n2] = e2;
            var r2 = e2.phasedRegistrationNames;
            if (r2) {
              for (var i2 in r2)
                if (r2.hasOwnProperty(i2)) {
                  var s2 = r2[i2];
                  o(s2, t2, n2);
                }
              return true;
            }
            return e2.registrationName ? (o(e2.registrationName, t2, n2), true) : false;
          }
          __name(r, "r");
          function o(e2, t2, n2) {
            a(!u.registrationNameModules[e2]), u.registrationNameModules[e2] = t2, u.registrationNameDependencies[e2] = t2.eventTypes[n2].dependencies;
          }
          __name(o, "o");
          var a = e("./invariant"), i = null, s = {}, u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            injectEventPluginOrder: /* @__PURE__ */ __name(function(e2) {
              a(!i), i = Array.prototype.slice.call(e2), n();
            }, "injectEventPluginOrder"),
            injectEventPluginsByName: /* @__PURE__ */ __name(function(e2) {
              var t2 = false;
              for (var r2 in e2)
                if (e2.hasOwnProperty(r2)) {
                  var o2 = e2[r2];
                  s.hasOwnProperty(r2) && s[r2] === o2 || (a(!s[r2]), s[r2] = o2, t2 = true);
                }
              t2 && n();
            }, "injectEventPluginsByName"),
            getPluginModuleForEvent: /* @__PURE__ */ __name(function(e2) {
              var t2 = e2.dispatchConfig;
              if (t2.registrationName)
                return u.registrationNameModules[t2.registrationName] || null;
              for (var n2 in t2.phasedRegistrationNames)
                if (t2.phasedRegistrationNames.hasOwnProperty(n2)) {
                  var r2 = u.registrationNameModules[t2.phasedRegistrationNames[n2]];
                  if (r2) return r2;
                }
              return null;
            }, "getPluginModuleForEvent"),
            _resetEventPlugins: /* @__PURE__ */ __name(function() {
              i = null;
              for (var e2 in s) s.hasOwnProperty(e2) && delete s[e2];
              u.plugins.length = 0;
              var t2 = u.eventNameDispatchConfigs;
              for (var n2 in t2) t2.hasOwnProperty(n2) && delete t2[n2];
              var r2 = u.registrationNameModules;
              for (var o2 in r2) r2.hasOwnProperty(o2) && delete r2[o2];
            }, "_resetEventPlugins")
          };
          t.exports = u;
        },
        { "./invariant": 124 }
      ],
      20: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return e2 === m.topMouseUp || e2 === m.topTouchEnd || e2 === m.topTouchCancel;
          }
          __name(n, "n");
          function r(e2) {
            return e2 === m.topMouseMove || e2 === m.topTouchMove;
          }
          __name(r, "r");
          function o(e2) {
            return e2 === m.topMouseDown || e2 === m.topTouchStart;
          }
          __name(o, "o");
          function a(e2, t2) {
            var n2 = e2._dispatchListeners, r2 = e2._dispatchIDs;
            if (Array.isArray(n2))
              for (var o2 = 0; o2 < n2.length && !e2.isPropagationStopped(); o2++)
                t2(e2, n2[o2], r2[o2]);
            else n2 && t2(e2, n2, r2);
          }
          __name(a, "a");
          function i(e2, t2, n2) {
            e2.currentTarget = h.Mount.getNode(n2);
            var r2 = t2(e2, n2);
            return e2.currentTarget = null, r2;
          }
          __name(i, "i");
          function s(e2, t2) {
            a(e2, t2), e2._dispatchListeners = null, e2._dispatchIDs = null;
          }
          __name(s, "s");
          function u(e2) {
            var t2 = e2._dispatchListeners, n2 = e2._dispatchIDs;
            if (Array.isArray(t2)) {
              for (var r2 = 0; r2 < t2.length && !e2.isPropagationStopped(); r2++)
                if (t2[r2](e2, n2[r2])) return n2[r2];
            } else if (t2 && t2(e2, n2)) return n2;
            return null;
          }
          __name(u, "u");
          function c(e2) {
            var t2 = u(e2);
            return e2._dispatchIDs = null, e2._dispatchListeners = null, t2;
          }
          __name(c, "c");
          function l(e2) {
            var t2 = e2._dispatchListeners, n2 = e2._dispatchIDs;
            f(!Array.isArray(t2));
            var r2 = t2 ? t2(e2, n2) : null;
            return e2._dispatchListeners = null, e2._dispatchIDs = null, r2;
          }
          __name(l, "l");
          function p(e2) {
            return !!e2._dispatchListeners;
          }
          __name(p, "p");
          var d = e("./EventConstants"), f = e("./invariant"), h = {
            Mount: null,
            injectMount: /* @__PURE__ */ __name(function(e2) {
              h.Mount = e2;
            }, "injectMount")
          }, m = d.topLevelTypes, v = {
            isEndish: n,
            isMoveish: r,
            isStartish: o,
            executeDirectDispatch: l,
            executeDispatch: i,
            executeDispatchesInOrder: s,
            executeDispatchesInOrderStopAtTrue: c,
            hasDispatches: p,
            injection: h,
            useTouchEvents: false
          };
          t.exports = v;
        },
        { "./EventConstants": 16, "./invariant": 124 }
      ],
      21: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            var r2 = t2.dispatchConfig.phasedRegistrationNames[n2];
            return m(e2, r2);
          }
          __name(n, "n");
          function r(e2, t2, r2) {
            var o2 = t2 ? h.bubbled : h.captured, a2 = n(e2, r2, o2);
            a2 && (r2._dispatchListeners = d(r2._dispatchListeners, a2), r2._dispatchIDs = d(r2._dispatchIDs, e2));
          }
          __name(r, "r");
          function o(e2) {
            e2 && e2.dispatchConfig.phasedRegistrationNames && p.injection.getInstanceHandle().traverseTwoPhase(e2.dispatchMarker, r, e2);
          }
          __name(o, "o");
          function a(e2, t2, n2) {
            if (n2 && n2.dispatchConfig.registrationName) {
              var r2 = n2.dispatchConfig.registrationName, o2 = m(e2, r2);
              o2 && (n2._dispatchListeners = d(n2._dispatchListeners, o2), n2._dispatchIDs = d(n2._dispatchIDs, e2));
            }
          }
          __name(a, "a");
          function i(e2) {
            e2 && e2.dispatchConfig.registrationName && a(e2.dispatchMarker, null, e2);
          }
          __name(i, "i");
          function s(e2) {
            f(e2, o);
          }
          __name(s, "s");
          function u(e2, t2, n2, r2) {
            p.injection.getInstanceHandle().traverseEnterLeave(n2, r2, a, e2, t2);
          }
          __name(u, "u");
          function c(e2) {
            f(e2, i);
          }
          __name(c, "c");
          var l = e("./EventConstants"), p = e("./EventPluginHub"), d = e("./accumulateInto"), f = e("./forEachAccumulated"), h = l.PropagationPhases, m = p.getListener, v = {
            accumulateTwoPhaseDispatches: s,
            accumulateDirectDispatches: c,
            accumulateEnterLeaveDispatches: u
          };
          t.exports = v;
        },
        {
          "./EventConstants": 16,
          "./EventPluginHub": 18,
          "./accumulateInto": 95,
          "./forEachAccumulated": 110
        }
      ],
      22: [
        function(e, t) {
          "use strict";
          var n = !("undefined" == typeof window || !window.document || !window.document.createElement), r = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
          };
          t.exports = r;
        },
        {}
      ],
      23: [
        function(e, t) {
          "use strict";
          var n, r = e("./DOMProperty"), o = e("./ExecutionEnvironment"), a = r.injection.MUST_USE_ATTRIBUTE, i = r.injection.MUST_USE_PROPERTY, s = r.injection.HAS_BOOLEAN_VALUE, u = r.injection.HAS_SIDE_EFFECTS, c = r.injection.HAS_NUMERIC_VALUE, l = r.injection.HAS_POSITIVE_NUMERIC_VALUE, p = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
          if (o.canUseDOM) {
            var d = document.implementation;
            n = d && d.hasFeature && d.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            );
          }
          var f = {
            isCustomAttribute: RegExp.prototype.test.bind(
              /^(data|aria)-[a-z_][a-z\d_.\-]*$/
            ),
            Properties: {
              accept: null,
              acceptCharset: null,
              accessKey: null,
              action: null,
              allowFullScreen: a | s,
              allowTransparency: a,
              alt: null,
              async: s,
              autoComplete: null,
              autoPlay: s,
              cellPadding: null,
              cellSpacing: null,
              charSet: a,
              checked: i | s,
              classID: a,
              className: n ? a : i,
              cols: a | l,
              colSpan: null,
              content: null,
              contentEditable: null,
              contextMenu: a,
              controls: i | s,
              coords: null,
              crossOrigin: null,
              data: null,
              dateTime: a,
              defer: s,
              dir: null,
              disabled: a | s,
              download: p,
              draggable: null,
              encType: null,
              form: a,
              formAction: a,
              formEncType: a,
              formMethod: a,
              formNoValidate: s,
              formTarget: a,
              frameBorder: a,
              height: a,
              hidden: a | s,
              href: null,
              hrefLang: null,
              htmlFor: null,
              httpEquiv: null,
              icon: null,
              id: i,
              label: null,
              lang: null,
              list: a,
              loop: i | s,
              manifest: a,
              marginHeight: null,
              marginWidth: null,
              max: null,
              maxLength: a,
              media: a,
              mediaGroup: null,
              method: null,
              min: null,
              multiple: i | s,
              muted: i | s,
              name: null,
              noValidate: s,
              open: null,
              pattern: null,
              placeholder: null,
              poster: null,
              preload: null,
              radioGroup: null,
              readOnly: i | s,
              rel: null,
              required: s,
              role: a,
              rows: a | l,
              rowSpan: null,
              sandbox: null,
              scope: null,
              scrolling: null,
              seamless: a | s,
              selected: i | s,
              shape: null,
              size: a | l,
              sizes: a,
              span: l,
              spellCheck: null,
              src: null,
              srcDoc: i,
              srcSet: a,
              start: c,
              step: null,
              style: null,
              tabIndex: null,
              target: null,
              title: null,
              type: null,
              useMap: null,
              value: i | u,
              width: a,
              wmode: a,
              autoCapitalize: null,
              autoCorrect: null,
              itemProp: a,
              itemScope: a | s,
              itemType: a,
              property: null
            },
            DOMAttributeNames: {
              acceptCharset: "accept-charset",
              className: "class",
              htmlFor: "for",
              httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {
              autoCapitalize: "autocapitalize",
              autoComplete: "autocomplete",
              autoCorrect: "autocorrect",
              autoFocus: "autofocus",
              autoPlay: "autoplay",
              encType: "enctype",
              hrefLang: "hreflang",
              radioGroup: "radiogroup",
              spellCheck: "spellcheck",
              srcDoc: "srcdoc",
              srcSet: "srcset"
            }
          };
          t.exports = f;
        },
        { "./DOMProperty": 11, "./ExecutionEnvironment": 22 }
      ],
      24: [
        function(e, t) {
          "use strict";
          function n(e2) {
            u(null == e2.props.checkedLink || null == e2.props.valueLink);
          }
          __name(n, "n");
          function r(e2) {
            n(e2), u(null == e2.props.value && null == e2.props.onChange);
          }
          __name(r, "r");
          function o(e2) {
            n(e2), u(null == e2.props.checked && null == e2.props.onChange);
          }
          __name(o, "o");
          function a(e2) {
            this.props.valueLink.requestChange(e2.target.value);
          }
          __name(a, "a");
          function i(e2) {
            this.props.checkedLink.requestChange(e2.target.checked);
          }
          __name(i, "i");
          var s = e("./ReactPropTypes"), u = e("./invariant"), c = {
            button: true,
            checkbox: true,
            image: true,
            hidden: true,
            radio: true,
            reset: true,
            submit: true
          }, l = {
            Mixin: {
              propTypes: {
                value: /* @__PURE__ */ __name(function(e2, t2) {
                  return !e2[t2] || c[e2.type] || e2.onChange || e2.readOnly || e2.disabled ? void 0 : new Error(
                    "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
                  );
                }, "value"),
                checked: /* @__PURE__ */ __name(function(e2, t2) {
                  return !e2[t2] || e2.onChange || e2.readOnly || e2.disabled ? void 0 : new Error(
                    "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
                  );
                }, "checked"),
                onChange: s.func
              }
            },
            getValue: /* @__PURE__ */ __name(function(e2) {
              return e2.props.valueLink ? (r(e2), e2.props.valueLink.value) : e2.props.value;
            }, "getValue"),
            getChecked: /* @__PURE__ */ __name(function(e2) {
              return e2.props.checkedLink ? (o(e2), e2.props.checkedLink.value) : e2.props.checked;
            }, "getChecked"),
            getOnChange: /* @__PURE__ */ __name(function(e2) {
              return e2.props.valueLink ? (r(e2), a) : e2.props.checkedLink ? (o(e2), i) : e2.props.onChange;
            }, "getOnChange")
          };
          t.exports = l;
        },
        { "./ReactPropTypes": 70, "./invariant": 124 }
      ],
      25: [
        function(e, t) {
          "use strict";
          function n(e2) {
            e2.remove();
          }
          __name(n, "n");
          var r = e("./ReactBrowserEventEmitter"), o = e("./accumulateInto"), a = e("./forEachAccumulated"), i = e("./invariant"), s = {
            trapBubbledEvent: /* @__PURE__ */ __name(function(e2, t2) {
              i(this.isMounted());
              var n2 = r.trapBubbledEvent(e2, t2, this.getDOMNode());
              this._localEventListeners = o(this._localEventListeners, n2);
            }, "trapBubbledEvent"),
            componentWillUnmount: /* @__PURE__ */ __name(function() {
              this._localEventListeners && a(this._localEventListeners, n);
            }, "componentWillUnmount")
          };
          t.exports = s;
        },
        {
          "./ReactBrowserEventEmitter": 30,
          "./accumulateInto": 95,
          "./forEachAccumulated": 110,
          "./invariant": 124
        }
      ],
      26: [
        function(e, t) {
          "use strict";
          var n = e("./EventConstants"), r = e("./emptyFunction"), o = n.topLevelTypes, a = {
            eventTypes: null,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, n2, a2) {
              if (e2 === o.topTouchStart) {
                var i = a2.target;
                i && !i.onclick && (i.onclick = r);
              }
            }, "extractEvents")
          };
          t.exports = a;
        },
        { "./EventConstants": 16, "./emptyFunction": 105 }
      ],
      27: [
        function(e, t) {
          function n(e2) {
            if (null == e2)
              throw new TypeError(
                "Object.assign target cannot be null or undefined"
              );
            for (var t2 = Object(e2), n2 = Object.prototype.hasOwnProperty, r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              if (null != o) {
                var a = Object(o);
                for (var i in a) n2.call(a, i) && (t2[i] = a[i]);
              }
            }
            return t2;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      28: [
        function(e, t) {
          "use strict";
          var n = e("./invariant"), r = /* @__PURE__ */ __name(function(e2) {
            var t2 = this;
            if (t2.instancePool.length) {
              var n2 = t2.instancePool.pop();
              return t2.call(n2, e2), n2;
            }
            return new t2(e2);
          }, "r"), o = /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this;
            if (n2.instancePool.length) {
              var r2 = n2.instancePool.pop();
              return n2.call(r2, e2, t2), r2;
            }
            return new n2(e2, t2);
          }, "o"), a = /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this;
            if (r2.instancePool.length) {
              var o2 = r2.instancePool.pop();
              return r2.call(o2, e2, t2, n2), o2;
            }
            return new r2(e2, t2, n2);
          }, "a"), i = /* @__PURE__ */ __name(function(e2, t2, n2, r2, o2) {
            var a2 = this;
            if (a2.instancePool.length) {
              var i2 = a2.instancePool.pop();
              return a2.call(i2, e2, t2, n2, r2, o2), i2;
            }
            return new a2(e2, t2, n2, r2, o2);
          }, "i"), s = /* @__PURE__ */ __name(function(e2) {
            var t2 = this;
            n(e2 instanceof t2), e2.destructor && e2.destructor(), t2.instancePool.length < t2.poolSize && t2.instancePool.push(e2);
          }, "s"), u = 10, c = r, l = /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = e2;
            return n2.instancePool = [], n2.getPooled = t2 || c, n2.poolSize || (n2.poolSize = u), n2.release = s, n2;
          }, "l"), p = {
            addPoolingTo: l,
            oneArgumentPooler: r,
            twoArgumentPooler: o,
            threeArgumentPooler: a,
            fiveArgumentPooler: i
          };
          t.exports = p;
        },
        { "./invariant": 124 }
      ],
      29: [
        function(e, t) {
          "use strict";
          var n = e("./ReactEmptyComponent"), r = e("./ReactMount"), o = e("./invariant"), a = {
            getDOMNode: /* @__PURE__ */ __name(function() {
              return o(this.isMounted()), n.isNullComponentID(this._rootNodeID) ? null : r.getNode(this._rootNodeID);
            }, "getDOMNode")
          };
          t.exports = a;
        },
        { "./ReactEmptyComponent": 52, "./ReactMount": 61, "./invariant": 124 }
      ],
      30: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return Object.prototype.hasOwnProperty.call(e2, h) || (e2[h] = d++, l[e2[h]] = {}), l[e2[h]];
          }
          __name(n, "n");
          var r = e("./EventConstants"), o = e("./EventPluginHub"), a = e("./EventPluginRegistry"), i = e("./ReactEventEmitterMixin"), s = e("./ViewportMetrics"), u = e("./Object.assign"), c = e("./isEventSupported"), l = {}, p = false, d = 0, f = {
            topBlur: "blur",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topScroll: "scroll",
            topSelectionChange: "selectionchange",
            topTextInput: "textInput",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topWheel: "wheel"
          }, h = "_reactListenersID" + String(Math.random()).slice(2), m = u({}, i, {
            ReactEventListener: null,
            injection: {
              injectReactEventListener: /* @__PURE__ */ __name(function(e2) {
                e2.setHandleTopLevel(m.handleTopLevel), m.ReactEventListener = e2;
              }, "injectReactEventListener")
            },
            setEnabled: /* @__PURE__ */ __name(function(e2) {
              m.ReactEventListener && m.ReactEventListener.setEnabled(e2);
            }, "setEnabled"),
            isEnabled: /* @__PURE__ */ __name(function() {
              return !(!m.ReactEventListener || !m.ReactEventListener.isEnabled());
            }, "isEnabled"),
            listenTo: /* @__PURE__ */ __name(function(e2, t2) {
              for (var o2 = t2, i2 = n(o2), s2 = a.registrationNameDependencies[e2], u2 = r.topLevelTypes, l2 = 0, p2 = s2.length; p2 > l2; l2++) {
                var d2 = s2[l2];
                i2.hasOwnProperty(d2) && i2[d2] || (d2 === u2.topWheel ? c("wheel") ? m.ReactEventListener.trapBubbledEvent(
                  u2.topWheel,
                  "wheel",
                  o2
                ) : c("mousewheel") ? m.ReactEventListener.trapBubbledEvent(
                  u2.topWheel,
                  "mousewheel",
                  o2
                ) : m.ReactEventListener.trapBubbledEvent(
                  u2.topWheel,
                  "DOMMouseScroll",
                  o2
                ) : d2 === u2.topScroll ? c("scroll", true) ? m.ReactEventListener.trapCapturedEvent(
                  u2.topScroll,
                  "scroll",
                  o2
                ) : m.ReactEventListener.trapBubbledEvent(
                  u2.topScroll,
                  "scroll",
                  m.ReactEventListener.WINDOW_HANDLE
                ) : d2 === u2.topFocus || d2 === u2.topBlur ? (c("focus", true) ? (m.ReactEventListener.trapCapturedEvent(
                  u2.topFocus,
                  "focus",
                  o2
                ), m.ReactEventListener.trapCapturedEvent(
                  u2.topBlur,
                  "blur",
                  o2
                )) : c("focusin") && (m.ReactEventListener.trapBubbledEvent(
                  u2.topFocus,
                  "focusin",
                  o2
                ), m.ReactEventListener.trapBubbledEvent(
                  u2.topBlur,
                  "focusout",
                  o2
                )), i2[u2.topBlur] = true, i2[u2.topFocus] = true) : f.hasOwnProperty(d2) && m.ReactEventListener.trapBubbledEvent(d2, f[d2], o2), i2[d2] = true);
              }
            }, "listenTo"),
            trapBubbledEvent: /* @__PURE__ */ __name(function(e2, t2, n2) {
              return m.ReactEventListener.trapBubbledEvent(e2, t2, n2);
            }, "trapBubbledEvent"),
            trapCapturedEvent: /* @__PURE__ */ __name(function(e2, t2, n2) {
              return m.ReactEventListener.trapCapturedEvent(e2, t2, n2);
            }, "trapCapturedEvent"),
            ensureScrollValueMonitoring: /* @__PURE__ */ __name(function() {
              if (!p) {
                var e2 = s.refreshScrollValues;
                m.ReactEventListener.monitorScrollValue(e2), p = true;
              }
            }, "ensureScrollValueMonitoring"),
            eventNameDispatchConfigs: o.eventNameDispatchConfigs,
            registrationNameModules: o.registrationNameModules,
            putListener: o.putListener,
            getListener: o.getListener,
            deleteListener: o.deleteListener,
            deleteAllListeners: o.deleteAllListeners
          });
          t.exports = m;
        },
        {
          "./EventConstants": 16,
          "./EventPluginHub": 18,
          "./EventPluginRegistry": 19,
          "./Object.assign": 27,
          "./ReactEventEmitterMixin": 54,
          "./ViewportMetrics": 94,
          "./isEventSupported": 125
        }
      ],
      31: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            this.forEachFunction = e2, this.forEachContext = t2;
          }
          __name(n, "n");
          function r(e2, t2, n2, r2) {
            var o2 = e2;
            o2.forEachFunction.call(o2.forEachContext, t2, r2);
          }
          __name(r, "r");
          function o(e2, t2, o2) {
            if (null == e2) return e2;
            var a2 = n.getPooled(t2, o2);
            p(e2, r, a2), n.release(a2);
          }
          __name(o, "o");
          function a(e2, t2, n2) {
            this.mapResult = e2, this.mapFunction = t2, this.mapContext = n2;
          }
          __name(a, "a");
          function i(e2, t2, n2, r2) {
            var o2 = e2, a2 = o2.mapResult, i2 = !a2.hasOwnProperty(n2);
            if (i2) {
              var s2 = o2.mapFunction.call(o2.mapContext, t2, r2);
              a2[n2] = s2;
            }
          }
          __name(i, "i");
          function s(e2, t2, n2) {
            if (null == e2) return e2;
            var r2 = {}, o2 = a.getPooled(r2, t2, n2);
            return p(e2, i, o2), a.release(o2), r2;
          }
          __name(s, "s");
          function u() {
            return null;
          }
          __name(u, "u");
          function c(e2) {
            return p(e2, u, null);
          }
          __name(c, "c");
          var l = e("./PooledClass"), p = e("./traverseAllChildren"), d = (e("./warning"), l.twoArgumentPooler), f = l.threeArgumentPooler;
          l.addPoolingTo(n, d), l.addPoolingTo(a, f);
          var h = { forEach: o, map: s, count: c };
          t.exports = h;
        },
        { "./PooledClass": 28, "./traverseAllChildren": 140, "./warning": 141 }
      ],
      32: [
        function(e, t) {
          "use strict";
          var n = e("./ReactElement"), r = e("./ReactOwner"), o = e("./ReactUpdates"), a = e("./Object.assign"), i = e("./invariant"), s = e("./keyMirror"), u = s({ MOUNTED: null, UNMOUNTED: null }), c = false, l = null, p = null, d = {
            injection: {
              injectEnvironment: /* @__PURE__ */ __name(function(e2) {
                i(!c), p = e2.mountImageIntoNode, l = e2.unmountIDFromEnvironment, d.BackendIDOperations = e2.BackendIDOperations, c = true;
              }, "injectEnvironment")
            },
            LifeCycle: u,
            BackendIDOperations: null,
            Mixin: {
              isMounted: /* @__PURE__ */ __name(function() {
                return this._lifeCycleState === u.MOUNTED;
              }, "isMounted"),
              setProps: /* @__PURE__ */ __name(function(e2, t2) {
                var n2 = this._pendingElement || this._currentElement;
                this.replaceProps(a({}, n2.props, e2), t2);
              }, "setProps"),
              replaceProps: /* @__PURE__ */ __name(function(e2, t2) {
                i(this.isMounted()), i(0 === this._mountDepth), this._pendingElement = n.cloneAndReplaceProps(
                  this._pendingElement || this._currentElement,
                  e2
                ), o.enqueueUpdate(this, t2);
              }, "replaceProps"),
              _setPropsInternal: /* @__PURE__ */ __name(function(e2, t2) {
                var r2 = this._pendingElement || this._currentElement;
                this._pendingElement = n.cloneAndReplaceProps(
                  r2,
                  a({}, r2.props, e2)
                ), o.enqueueUpdate(this, t2);
              }, "_setPropsInternal"),
              construct: /* @__PURE__ */ __name(function(e2) {
                this.props = e2.props, this._owner = e2._owner, this._lifeCycleState = u.UNMOUNTED, this._pendingCallbacks = null, this._currentElement = e2, this._pendingElement = null;
              }, "construct"),
              mountComponent: /* @__PURE__ */ __name(function(e2, t2, n2) {
                i(!this.isMounted());
                var o2 = this._currentElement.ref;
                if (null != o2) {
                  var a2 = this._currentElement._owner;
                  r.addComponentAsRefTo(this, o2, a2);
                }
                this._rootNodeID = e2, this._lifeCycleState = u.MOUNTED, this._mountDepth = n2;
              }, "mountComponent"),
              unmountComponent: /* @__PURE__ */ __name(function() {
                i(this.isMounted());
                var e2 = this._currentElement.ref;
                null != e2 && r.removeComponentAsRefFrom(this, e2, this._owner), l(this._rootNodeID), this._rootNodeID = null, this._lifeCycleState = u.UNMOUNTED;
              }, "unmountComponent"),
              receiveComponent: /* @__PURE__ */ __name(function(e2, t2) {
                i(this.isMounted()), this._pendingElement = e2, this.performUpdateIfNecessary(t2);
              }, "receiveComponent"),
              performUpdateIfNecessary: /* @__PURE__ */ __name(function(e2) {
                if (null != this._pendingElement) {
                  var t2 = this._currentElement, n2 = this._pendingElement;
                  this._currentElement = n2, this.props = n2.props, this._owner = n2._owner, this._pendingElement = null, this.updateComponent(e2, t2);
                }
              }, "performUpdateIfNecessary"),
              updateComponent: /* @__PURE__ */ __name(function(e2, t2) {
                var n2 = this._currentElement;
                (n2._owner !== t2._owner || n2.ref !== t2.ref) && (null != t2.ref && r.removeComponentAsRefFrom(this, t2.ref, t2._owner), null != n2.ref && r.addComponentAsRefTo(this, n2.ref, n2._owner));
              }, "updateComponent"),
              mountComponentIntoNode: /* @__PURE__ */ __name(function(e2, t2, n2) {
                var r2 = o.ReactReconcileTransaction.getPooled();
                r2.perform(this._mountComponentIntoNode, this, e2, t2, r2, n2), o.ReactReconcileTransaction.release(r2);
              }, "mountComponentIntoNode"),
              _mountComponentIntoNode: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
                var o2 = this.mountComponent(e2, n2, 0);
                p(o2, t2, r2);
              }, "_mountComponentIntoNode"),
              isOwnedBy: /* @__PURE__ */ __name(function(e2) {
                return this._owner === e2;
              }, "isOwnedBy"),
              getSiblingByRef: /* @__PURE__ */ __name(function(e2) {
                var t2 = this._owner;
                return t2 && t2.refs ? t2.refs[e2] : null;
              }, "getSiblingByRef")
            }
          };
          t.exports = d;
        },
        {
          "./Object.assign": 27,
          "./ReactElement": 50,
          "./ReactOwner": 65,
          "./ReactUpdates": 77,
          "./invariant": 124,
          "./keyMirror": 130
        }
      ],
      33: [
        function(e, t) {
          "use strict";
          var n = e("./ReactDOMIDOperations"), r = e("./ReactMarkupChecksum"), o = e("./ReactMount"), a = e("./ReactPerf"), i = e("./ReactReconcileTransaction"), s = e("./getReactRootElementInContainer"), u = e("./invariant"), c = e("./setInnerHTML"), l = 1, p = 9, d = {
            ReactReconcileTransaction: i,
            BackendIDOperations: n,
            unmountIDFromEnvironment: /* @__PURE__ */ __name(function(e2) {
              o.purgeID(e2);
            }, "unmountIDFromEnvironment"),
            mountImageIntoNode: a.measure(
              "ReactComponentBrowserEnvironment",
              "mountImageIntoNode",
              function(e2, t2, n2) {
                if (u(t2 && (t2.nodeType === l || t2.nodeType === p)), n2) {
                  if (r.canReuseMarkup(e2, s(t2))) return;
                  u(t2.nodeType !== p);
                }
                u(t2.nodeType !== p), c(t2, e2);
              }
            )
          };
          t.exports = d;
        },
        {
          "./ReactDOMIDOperations": 41,
          "./ReactMarkupChecksum": 60,
          "./ReactMount": 61,
          "./ReactPerf": 66,
          "./ReactReconcileTransaction": 72,
          "./getReactRootElementInContainer": 118,
          "./invariant": 124,
          "./setInnerHTML": 136
        }
      ],
      34: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = e2._owner || null;
            return t2 && t2.constructor && t2.constructor.displayName ? " Check the render method of `" + t2.constructor.displayName + "`." : "";
          }
          __name(n, "n");
          function r(e2, t2) {
            for (var n2 in t2)
              t2.hasOwnProperty(n2) && D("function" == typeof t2[n2]);
          }
          __name(r, "r");
          function o(e2, t2) {
            var n2 = S.hasOwnProperty(t2) ? S[t2] : null;
            L.hasOwnProperty(t2) && D(n2 === N.OVERRIDE_BASE), e2.hasOwnProperty(t2) && D(n2 === N.DEFINE_MANY || n2 === N.DEFINE_MANY_MERGED);
          }
          __name(o, "o");
          function a(e2) {
            var t2 = e2._compositeLifeCycleState;
            D(e2.isMounted() || t2 === A.MOUNTING), D(null == f.current), D(t2 !== A.UNMOUNTING);
          }
          __name(a, "a");
          function i(e2, t2) {
            if (t2) {
              D(!g.isValidFactory(t2)), D(!h.isValidElement(t2));
              var n2 = e2.prototype;
              t2.hasOwnProperty(T) && k.mixins(e2, t2.mixins);
              for (var r2 in t2)
                if (t2.hasOwnProperty(r2) && r2 !== T) {
                  var a2 = t2[r2];
                  if (o(n2, r2), k.hasOwnProperty(r2)) k[r2](e2, a2);
                  else {
                    var i2 = S.hasOwnProperty(r2), s2 = n2.hasOwnProperty(r2), u2 = a2 && a2.__reactDontBind, p2 = "function" == typeof a2, d2 = p2 && !i2 && !s2 && !u2;
                    if (d2)
                      n2.__reactAutoBindMap || (n2.__reactAutoBindMap = {}), n2.__reactAutoBindMap[r2] = a2, n2[r2] = a2;
                    else if (s2) {
                      var f2 = S[r2];
                      D(
                        i2 && (f2 === N.DEFINE_MANY_MERGED || f2 === N.DEFINE_MANY)
                      ), f2 === N.DEFINE_MANY_MERGED ? n2[r2] = c(n2[r2], a2) : f2 === N.DEFINE_MANY && (n2[r2] = l(n2[r2], a2));
                    } else n2[r2] = a2;
                  }
                }
            }
          }
          __name(i, "i");
          function s(e2, t2) {
            if (t2)
              for (var n2 in t2) {
                var r2 = t2[n2];
                if (t2.hasOwnProperty(n2)) {
                  var o2 = n2 in k;
                  D(!o2);
                  var a2 = n2 in e2;
                  D(!a2), e2[n2] = r2;
                }
              }
          }
          __name(s, "s");
          function u(e2, t2) {
            return D(e2 && t2 && "object" == typeof e2 && "object" == typeof t2), _(t2, function(t3, n2) {
              D(void 0 === e2[n2]), e2[n2] = t3;
            }), e2;
          }
          __name(u, "u");
          function c(e2, t2) {
            return function() {
              var n2 = e2.apply(this, arguments), r2 = t2.apply(this, arguments);
              return null == n2 ? r2 : null == r2 ? n2 : u(n2, r2);
            };
          }
          __name(c, "c");
          function l(e2, t2) {
            return function() {
              e2.apply(this, arguments), t2.apply(this, arguments);
            };
          }
          __name(l, "l");
          var p = e("./ReactComponent"), d = e("./ReactContext"), f = e("./ReactCurrentOwner"), h = e("./ReactElement"), m = (e("./ReactElementValidator"), e("./ReactEmptyComponent")), v = e("./ReactErrorUtils"), g = e("./ReactLegacyElement"), y = e("./ReactOwner"), E = e("./ReactPerf"), C = e("./ReactPropTransferer"), R = e("./ReactPropTypeLocations"), M = (e("./ReactPropTypeLocationNames"), e("./ReactUpdates")), b = e("./Object.assign"), O = e("./instantiateReactComponent"), D = e("./invariant"), x = e("./keyMirror"), P = e("./keyOf"), _ = (e("./monitorCodeUse"), e("./mapObject")), w = e("./shouldUpdateReactComponent"), T = (e("./warning"), P({ mixins: null })), N = x({
            DEFINE_ONCE: null,
            DEFINE_MANY: null,
            OVERRIDE_BASE: null,
            DEFINE_MANY_MERGED: null
          }), I = [], S = {
            mixins: N.DEFINE_MANY,
            statics: N.DEFINE_MANY,
            propTypes: N.DEFINE_MANY,
            contextTypes: N.DEFINE_MANY,
            childContextTypes: N.DEFINE_MANY,
            getDefaultProps: N.DEFINE_MANY_MERGED,
            getInitialState: N.DEFINE_MANY_MERGED,
            getChildContext: N.DEFINE_MANY_MERGED,
            render: N.DEFINE_ONCE,
            componentWillMount: N.DEFINE_MANY,
            componentDidMount: N.DEFINE_MANY,
            componentWillReceiveProps: N.DEFINE_MANY,
            shouldComponentUpdate: N.DEFINE_ONCE,
            componentWillUpdate: N.DEFINE_MANY,
            componentDidUpdate: N.DEFINE_MANY,
            componentWillUnmount: N.DEFINE_MANY,
            updateComponent: N.OVERRIDE_BASE
          }, k = {
            displayName: /* @__PURE__ */ __name(function(e2, t2) {
              e2.displayName = t2;
            }, "displayName"),
            mixins: /* @__PURE__ */ __name(function(e2, t2) {
              if (t2) for (var n2 = 0; n2 < t2.length; n2++) i(e2, t2[n2]);
            }, "mixins"),
            childContextTypes: /* @__PURE__ */ __name(function(e2, t2) {
              r(e2, t2, R.childContext), e2.childContextTypes = b({}, e2.childContextTypes, t2);
            }, "childContextTypes"),
            contextTypes: /* @__PURE__ */ __name(function(e2, t2) {
              r(e2, t2, R.context), e2.contextTypes = b({}, e2.contextTypes, t2);
            }, "contextTypes"),
            getDefaultProps: /* @__PURE__ */ __name(function(e2, t2) {
              e2.getDefaultProps = e2.getDefaultProps ? c(e2.getDefaultProps, t2) : t2;
            }, "getDefaultProps"),
            propTypes: /* @__PURE__ */ __name(function(e2, t2) {
              r(e2, t2, R.prop), e2.propTypes = b({}, e2.propTypes, t2);
            }, "propTypes"),
            statics: /* @__PURE__ */ __name(function(e2, t2) {
              s(e2, t2);
            }, "statics")
          }, A = x({ MOUNTING: null, UNMOUNTING: null, RECEIVING_PROPS: null }), L = {
            construct: /* @__PURE__ */ __name(function() {
              p.Mixin.construct.apply(this, arguments), y.Mixin.construct.apply(this, arguments), this.state = null, this._pendingState = null, this.context = null, this._compositeLifeCycleState = null;
            }, "construct"),
            isMounted: /* @__PURE__ */ __name(function() {
              return p.Mixin.isMounted.call(this) && this._compositeLifeCycleState !== A.MOUNTING;
            }, "isMounted"),
            mountComponent: E.measure(
              "ReactCompositeComponent",
              "mountComponent",
              function(e2, t2, n2) {
                p.Mixin.mountComponent.call(this, e2, t2, n2), this._compositeLifeCycleState = A.MOUNTING, this.__reactAutoBindMap && this._bindAutoBindMethods(), this.context = this._processContext(
                  this._currentElement._context
                ), this.props = this._processProps(this.props), this.state = this.getInitialState ? this.getInitialState() : null, D(
                  "object" == typeof this.state && !Array.isArray(this.state)
                ), this._pendingState = null, this._pendingForceUpdate = false, this.componentWillMount && (this.componentWillMount(), this._pendingState && (this.state = this._pendingState, this._pendingState = null)), this._renderedComponent = O(
                  this._renderValidatedComponent(),
                  this._currentElement.type
                ), this._compositeLifeCycleState = null;
                var r2 = this._renderedComponent.mountComponent(e2, t2, n2 + 1);
                return this.componentDidMount && t2.getReactMountReady().enqueue(this.componentDidMount, this), r2;
              }
            ),
            unmountComponent: /* @__PURE__ */ __name(function() {
              this._compositeLifeCycleState = A.UNMOUNTING, this.componentWillUnmount && this.componentWillUnmount(), this._compositeLifeCycleState = null, this._renderedComponent.unmountComponent(), this._renderedComponent = null, p.Mixin.unmountComponent.call(this);
            }, "unmountComponent"),
            setState: /* @__PURE__ */ __name(function(e2, t2) {
              D("object" == typeof e2 || null == e2), this.replaceState(
                b({}, this._pendingState || this.state, e2),
                t2
              );
            }, "setState"),
            replaceState: /* @__PURE__ */ __name(function(e2, t2) {
              a(this), this._pendingState = e2, this._compositeLifeCycleState !== A.MOUNTING && M.enqueueUpdate(this, t2);
            }, "replaceState"),
            _processContext: /* @__PURE__ */ __name(function(e2) {
              var t2 = null, n2 = this.constructor.contextTypes;
              if (n2) {
                t2 = {};
                for (var r2 in n2) t2[r2] = e2[r2];
              }
              return t2;
            }, "_processContext"),
            _processChildContext: /* @__PURE__ */ __name(function(e2) {
              var t2 = this.getChildContext && this.getChildContext();
              if (this.constructor.displayName || "ReactCompositeComponent", t2) {
                D("object" == typeof this.constructor.childContextTypes);
                for (var n2 in t2) D(n2 in this.constructor.childContextTypes);
                return b({}, e2, t2);
              }
              return e2;
            }, "_processChildContext"),
            _processProps: /* @__PURE__ */ __name(function(e2) {
              return e2;
            }, "_processProps"),
            _checkPropTypes: /* @__PURE__ */ __name(function(e2, t2, r2) {
              var o2 = this.constructor.displayName;
              for (var a2 in e2)
                if (e2.hasOwnProperty(a2)) {
                  var i2 = e2[a2](t2, a2, o2, r2);
                  i2 instanceof Error && n(this);
                }
            }, "_checkPropTypes"),
            performUpdateIfNecessary: /* @__PURE__ */ __name(function(e2) {
              var t2 = this._compositeLifeCycleState;
              if (t2 !== A.MOUNTING && t2 !== A.RECEIVING_PROPS && (null != this._pendingElement || null != this._pendingState || this._pendingForceUpdate)) {
                var n2 = this.context, r2 = this.props, o2 = this._currentElement;
                null != this._pendingElement && (o2 = this._pendingElement, n2 = this._processContext(o2._context), r2 = this._processProps(o2.props), this._pendingElement = null, this._compositeLifeCycleState = A.RECEIVING_PROPS, this.componentWillReceiveProps && this.componentWillReceiveProps(r2, n2)), this._compositeLifeCycleState = null;
                var a2 = this._pendingState || this.state;
                this._pendingState = null;
                var i2 = this._pendingForceUpdate || !this.shouldComponentUpdate || this.shouldComponentUpdate(r2, a2, n2);
                i2 ? (this._pendingForceUpdate = false, this._performComponentUpdate(o2, r2, a2, n2, e2)) : (this._currentElement = o2, this.props = r2, this.state = a2, this.context = n2, this._owner = o2._owner);
              }
            }, "performUpdateIfNecessary"),
            _performComponentUpdate: /* @__PURE__ */ __name(function(e2, t2, n2, r2, o2) {
              var a2 = this._currentElement, i2 = this.props, s2 = this.state, u2 = this.context;
              this.componentWillUpdate && this.componentWillUpdate(t2, n2, r2), this._currentElement = e2, this.props = t2, this.state = n2, this.context = r2, this._owner = e2._owner, this.updateComponent(o2, a2), this.componentDidUpdate && o2.getReactMountReady().enqueue(
                this.componentDidUpdate.bind(this, i2, s2, u2),
                this
              );
            }, "_performComponentUpdate"),
            receiveComponent: /* @__PURE__ */ __name(function(e2, t2) {
              (e2 !== this._currentElement || null == e2._owner) && p.Mixin.receiveComponent.call(this, e2, t2);
            }, "receiveComponent"),
            updateComponent: E.measure(
              "ReactCompositeComponent",
              "updateComponent",
              function(e2, t2) {
                p.Mixin.updateComponent.call(this, e2, t2);
                var n2 = this._renderedComponent, r2 = n2._currentElement, o2 = this._renderValidatedComponent();
                if (w(r2, o2)) n2.receiveComponent(o2, e2);
                else {
                  var a2 = this._rootNodeID, i2 = n2._rootNodeID;
                  n2.unmountComponent(), this._renderedComponent = O(
                    o2,
                    this._currentElement.type
                  );
                  var s2 = this._renderedComponent.mountComponent(
                    a2,
                    e2,
                    this._mountDepth + 1
                  );
                  p.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(
                    i2,
                    s2
                  );
                }
              }
            ),
            forceUpdate: /* @__PURE__ */ __name(function(e2) {
              var t2 = this._compositeLifeCycleState;
              D(this.isMounted() || t2 === A.MOUNTING), D(t2 !== A.UNMOUNTING && null == f.current), this._pendingForceUpdate = true, M.enqueueUpdate(this, e2);
            }, "forceUpdate"),
            _renderValidatedComponent: E.measure(
              "ReactCompositeComponent",
              "_renderValidatedComponent",
              function() {
                var e2, t2 = d.current;
                d.current = this._processChildContext(
                  this._currentElement._context
                ), f.current = this;
                try {
                  e2 = this.render(), null === e2 || e2 === false ? (e2 = m.getEmptyComponent(), m.registerNullComponentID(this._rootNodeID)) : m.deregisterNullComponentID(this._rootNodeID);
                } finally {
                  d.current = t2, f.current = null;
                }
                return D(h.isValidElement(e2)), e2;
              }
            ),
            _bindAutoBindMethods: /* @__PURE__ */ __name(function() {
              for (var e2 in this.__reactAutoBindMap)
                if (this.__reactAutoBindMap.hasOwnProperty(e2)) {
                  var t2 = this.__reactAutoBindMap[e2];
                  this[e2] = this._bindAutoBindMethod(
                    v.guard(t2, this.constructor.displayName + "." + e2)
                  );
                }
            }, "_bindAutoBindMethods"),
            _bindAutoBindMethod: /* @__PURE__ */ __name(function(e2) {
              var t2 = this, n2 = e2.bind(t2);
              return n2;
            }, "_bindAutoBindMethod")
          }, U = /* @__PURE__ */ __name(function() {
          }, "U");
          b(U.prototype, p.Mixin, y.Mixin, C.Mixin, L);
          var F = {
            LifeCycle: A,
            Base: U,
            createClass: /* @__PURE__ */ __name(function(e2) {
              var t2 = /* @__PURE__ */ __name(function() {
              }, "t");
              t2.prototype = new U(), t2.prototype.constructor = t2, I.forEach(i.bind(null, t2)), i(t2, e2), t2.getDefaultProps && (t2.defaultProps = t2.getDefaultProps()), D(t2.prototype.render);
              for (var n2 in S) t2.prototype[n2] || (t2.prototype[n2] = null);
              return g.wrapFactory(h.createFactory(t2));
            }, "createClass"),
            injection: {
              injectMixin: /* @__PURE__ */ __name(function(e2) {
                I.push(e2);
              }, "injectMixin")
            }
          };
          t.exports = F;
        },
        {
          "./Object.assign": 27,
          "./ReactComponent": 32,
          "./ReactContext": 35,
          "./ReactCurrentOwner": 36,
          "./ReactElement": 50,
          "./ReactElementValidator": 51,
          "./ReactEmptyComponent": 52,
          "./ReactErrorUtils": 53,
          "./ReactLegacyElement": 59,
          "./ReactOwner": 65,
          "./ReactPerf": 66,
          "./ReactPropTransferer": 67,
          "./ReactPropTypeLocationNames": 68,
          "./ReactPropTypeLocations": 69,
          "./ReactUpdates": 77,
          "./instantiateReactComponent": 123,
          "./invariant": 124,
          "./keyMirror": 130,
          "./keyOf": 131,
          "./mapObject": 132,
          "./monitorCodeUse": 134,
          "./shouldUpdateReactComponent": 138,
          "./warning": 141
        }
      ],
      35: [
        function(e, t) {
          "use strict";
          var n = e("./Object.assign"), r = {
            current: {},
            withContext: /* @__PURE__ */ __name(function(e2, t2) {
              var o, a = r.current;
              r.current = n({}, a, e2);
              try {
                o = t2();
              } finally {
                r.current = a;
              }
              return o;
            }, "withContext")
          };
          t.exports = r;
        },
        { "./Object.assign": 27 }
      ],
      36: [
        function(e, t) {
          "use strict";
          var n = { current: null };
          t.exports = n;
        },
        {}
      ],
      37: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return o.markNonLegacyFactory(r.createFactory(e2));
          }
          __name(n, "n");
          var r = e("./ReactElement"), o = (e("./ReactElementValidator"), e("./ReactLegacyElement")), a = e("./mapObject"), i = a(
            {
              a: "a",
              abbr: "abbr",
              address: "address",
              area: "area",
              article: "article",
              aside: "aside",
              audio: "audio",
              b: "b",
              base: "base",
              bdi: "bdi",
              bdo: "bdo",
              big: "big",
              blockquote: "blockquote",
              body: "body",
              br: "br",
              button: "button",
              canvas: "canvas",
              caption: "caption",
              cite: "cite",
              code: "code",
              col: "col",
              colgroup: "colgroup",
              data: "data",
              datalist: "datalist",
              dd: "dd",
              del: "del",
              details: "details",
              dfn: "dfn",
              dialog: "dialog",
              div: "div",
              dl: "dl",
              dt: "dt",
              em: "em",
              embed: "embed",
              fieldset: "fieldset",
              figcaption: "figcaption",
              figure: "figure",
              footer: "footer",
              form: "form",
              h1: "h1",
              h2: "h2",
              h3: "h3",
              h4: "h4",
              h5: "h5",
              h6: "h6",
              head: "head",
              header: "header",
              hr: "hr",
              html: "html",
              i: "i",
              iframe: "iframe",
              img: "img",
              input: "input",
              ins: "ins",
              kbd: "kbd",
              keygen: "keygen",
              label: "label",
              legend: "legend",
              li: "li",
              link: "link",
              main: "main",
              map: "map",
              mark: "mark",
              menu: "menu",
              menuitem: "menuitem",
              meta: "meta",
              meter: "meter",
              nav: "nav",
              noscript: "noscript",
              object: "object",
              ol: "ol",
              optgroup: "optgroup",
              option: "option",
              output: "output",
              p: "p",
              param: "param",
              picture: "picture",
              pre: "pre",
              progress: "progress",
              q: "q",
              rp: "rp",
              rt: "rt",
              ruby: "ruby",
              s: "s",
              samp: "samp",
              script: "script",
              section: "section",
              select: "select",
              small: "small",
              source: "source",
              span: "span",
              strong: "strong",
              style: "style",
              sub: "sub",
              summary: "summary",
              sup: "sup",
              table: "table",
              tbody: "tbody",
              td: "td",
              textarea: "textarea",
              tfoot: "tfoot",
              th: "th",
              thead: "thead",
              time: "time",
              title: "title",
              tr: "tr",
              track: "track",
              u: "u",
              ul: "ul",
              var: "var",
              video: "video",
              wbr: "wbr",
              circle: "circle",
              defs: "defs",
              ellipse: "ellipse",
              g: "g",
              line: "line",
              linearGradient: "linearGradient",
              mask: "mask",
              path: "path",
              pattern: "pattern",
              polygon: "polygon",
              polyline: "polyline",
              radialGradient: "radialGradient",
              rect: "rect",
              stop: "stop",
              svg: "svg",
              text: "text",
              tspan: "tspan"
            },
            n
          );
          t.exports = i;
        },
        {
          "./ReactElement": 50,
          "./ReactElementValidator": 51,
          "./ReactLegacyElement": 59,
          "./mapObject": 132
        }
      ],
      38: [
        function(e, t) {
          "use strict";
          var n = e("./AutoFocusMixin"), r = e("./ReactBrowserComponentMixin"), o = e("./ReactCompositeComponent"), a = e("./ReactElement"), i = e("./ReactDOM"), s = e("./keyMirror"), u = a.createFactory(i.button.type), c = s({
            onClick: true,
            onDoubleClick: true,
            onMouseDown: true,
            onMouseMove: true,
            onMouseUp: true,
            onClickCapture: true,
            onDoubleClickCapture: true,
            onMouseDownCapture: true,
            onMouseMoveCapture: true,
            onMouseUpCapture: true
          }), l = o.createClass({
            displayName: "ReactDOMButton",
            mixins: [n, r],
            render: /* @__PURE__ */ __name(function() {
              var e2 = {};
              for (var t2 in this.props)
                !this.props.hasOwnProperty(t2) || this.props.disabled && c[t2] || (e2[t2] = this.props[t2]);
              return u(e2, this.props.children);
            }, "render")
          });
          t.exports = l;
        },
        {
          "./AutoFocusMixin": 2,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50,
          "./keyMirror": 130
        }
      ],
      39: [
        function(e, t) {
          "use strict";
          function n(e2) {
            e2 && (g(null == e2.children || null == e2.dangerouslySetInnerHTML), g(null == e2.style || "object" == typeof e2.style));
          }
          __name(n, "n");
          function r(e2, t2, n2, r2) {
            var o2 = d.findReactContainerForID(e2);
            if (o2) {
              var a2 = o2.nodeType === O ? o2.ownerDocument : o2;
              C(t2, a2);
            }
            r2.getPutListenerQueue().enqueuePutListener(e2, t2, n2);
          }
          __name(r, "r");
          function o(e2) {
            _.call(P, e2) || (g(x.test(e2)), P[e2] = true);
          }
          __name(o, "o");
          function a(e2) {
            o(e2), this._tag = e2, this.tagName = e2.toUpperCase();
          }
          __name(a, "a");
          var i = e("./CSSPropertyOperations"), s = e("./DOMProperty"), u = e("./DOMPropertyOperations"), c = e("./ReactBrowserComponentMixin"), l = e("./ReactComponent"), p = e("./ReactBrowserEventEmitter"), d = e("./ReactMount"), f = e("./ReactMultiChild"), h = e("./ReactPerf"), m = e("./Object.assign"), v = e("./escapeTextForBrowser"), g = e("./invariant"), y = (e("./isEventSupported"), e("./keyOf")), E = (e("./monitorCodeUse"), p.deleteListener), C = p.listenTo, R = p.registrationNameModules, M = { string: true, number: true }, b = y({ style: null }), O = 1, D = {
            area: true,
            base: true,
            br: true,
            col: true,
            embed: true,
            hr: true,
            img: true,
            input: true,
            keygen: true,
            link: true,
            meta: true,
            param: true,
            source: true,
            track: true,
            wbr: true
          }, x = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, P = {}, _ = {}.hasOwnProperty;
          a.displayName = "ReactDOMComponent", a.Mixin = {
            mountComponent: h.measure(
              "ReactDOMComponent",
              "mountComponent",
              function(e2, t2, r2) {
                l.Mixin.mountComponent.call(this, e2, t2, r2), n(this.props);
                var o2 = D[this._tag] ? "" : "</" + this._tag + ">";
                return this._createOpenTagMarkupAndPutListeners(t2) + this._createContentMarkup(t2) + o2;
              }
            ),
            _createOpenTagMarkupAndPutListeners: /* @__PURE__ */ __name(function(e2) {
              var t2 = this.props, n2 = "<" + this._tag;
              for (var o2 in t2)
                if (t2.hasOwnProperty(o2)) {
                  var a2 = t2[o2];
                  if (null != a2)
                    if (R.hasOwnProperty(o2)) r(this._rootNodeID, o2, a2, e2);
                    else {
                      o2 === b && (a2 && (a2 = t2.style = m({}, t2.style)), a2 = i.createMarkupForStyles(a2));
                      var s2 = u.createMarkupForProperty(o2, a2);
                      s2 && (n2 += " " + s2);
                    }
                }
              if (e2.renderToStaticMarkup) return n2 + ">";
              var c2 = u.createMarkupForID(this._rootNodeID);
              return n2 + " " + c2 + ">";
            }, "_createOpenTagMarkupAndPutListeners"),
            _createContentMarkup: /* @__PURE__ */ __name(function(e2) {
              var t2 = this.props.dangerouslySetInnerHTML;
              if (null != t2) {
                if (null != t2.__html) return t2.__html;
              } else {
                var n2 = M[typeof this.props.children] ? this.props.children : null, r2 = null != n2 ? null : this.props.children;
                if (null != n2) return v(n2);
                if (null != r2) {
                  var o2 = this.mountChildren(r2, e2);
                  return o2.join("");
                }
              }
              return "";
            }, "_createContentMarkup"),
            receiveComponent: /* @__PURE__ */ __name(function(e2, t2) {
              (e2 !== this._currentElement || null == e2._owner) && l.Mixin.receiveComponent.call(this, e2, t2);
            }, "receiveComponent"),
            updateComponent: h.measure(
              "ReactDOMComponent",
              "updateComponent",
              function(e2, t2) {
                n(this._currentElement.props), l.Mixin.updateComponent.call(this, e2, t2), this._updateDOMProperties(t2.props, e2), this._updateDOMChildren(t2.props, e2);
              }
            ),
            _updateDOMProperties: /* @__PURE__ */ __name(function(e2, t2) {
              var n2, o2, a2, i2 = this.props;
              for (n2 in e2)
                if (!i2.hasOwnProperty(n2) && e2.hasOwnProperty(n2))
                  if (n2 === b) {
                    var u2 = e2[n2];
                    for (o2 in u2)
                      u2.hasOwnProperty(o2) && (a2 = a2 || {}, a2[o2] = "");
                  } else
                    R.hasOwnProperty(n2) ? E(this._rootNodeID, n2) : (s.isStandardName[n2] || s.isCustomAttribute(n2)) && l.BackendIDOperations.deletePropertyByID(
                      this._rootNodeID,
                      n2
                    );
              for (n2 in i2) {
                var c2 = i2[n2], p2 = e2[n2];
                if (i2.hasOwnProperty(n2) && c2 !== p2)
                  if (n2 === b)
                    if (c2 && (c2 = i2.style = m({}, c2)), p2) {
                      for (o2 in p2)
                        !p2.hasOwnProperty(o2) || c2 && c2.hasOwnProperty(o2) || (a2 = a2 || {}, a2[o2] = "");
                      for (o2 in c2)
                        c2.hasOwnProperty(o2) && p2[o2] !== c2[o2] && (a2 = a2 || {}, a2[o2] = c2[o2]);
                    } else a2 = c2;
                  else
                    R.hasOwnProperty(n2) ? r(this._rootNodeID, n2, c2, t2) : (s.isStandardName[n2] || s.isCustomAttribute(n2)) && l.BackendIDOperations.updatePropertyByID(
                      this._rootNodeID,
                      n2,
                      c2
                    );
              }
              a2 && l.BackendIDOperations.updateStylesByID(this._rootNodeID, a2);
            }, "_updateDOMProperties"),
            _updateDOMChildren: /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = this.props, r2 = M[typeof e2.children] ? e2.children : null, o2 = M[typeof n2.children] ? n2.children : null, a2 = e2.dangerouslySetInnerHTML && e2.dangerouslySetInnerHTML.__html, i2 = n2.dangerouslySetInnerHTML && n2.dangerouslySetInnerHTML.__html, s2 = null != r2 ? null : e2.children, u2 = null != o2 ? null : n2.children, c2 = null != r2 || null != a2, p2 = null != o2 || null != i2;
              null != s2 && null == u2 ? this.updateChildren(null, t2) : c2 && !p2 && this.updateTextContent(""), null != o2 ? r2 !== o2 && this.updateTextContent("" + o2) : null != i2 ? a2 !== i2 && l.BackendIDOperations.updateInnerHTMLByID(
                this._rootNodeID,
                i2
              ) : null != u2 && this.updateChildren(u2, t2);
            }, "_updateDOMChildren"),
            unmountComponent: /* @__PURE__ */ __name(function() {
              this.unmountChildren(), p.deleteAllListeners(this._rootNodeID), l.Mixin.unmountComponent.call(this);
            }, "unmountComponent")
          }, m(a.prototype, l.Mixin, a.Mixin, f.Mixin, c), t.exports = a;
        },
        {
          "./CSSPropertyOperations": 5,
          "./DOMProperty": 11,
          "./DOMPropertyOperations": 12,
          "./Object.assign": 27,
          "./ReactBrowserComponentMixin": 29,
          "./ReactBrowserEventEmitter": 30,
          "./ReactComponent": 32,
          "./ReactMount": 61,
          "./ReactMultiChild": 62,
          "./ReactPerf": 66,
          "./escapeTextForBrowser": 107,
          "./invariant": 124,
          "./isEventSupported": 125,
          "./keyOf": 131,
          "./monitorCodeUse": 134
        }
      ],
      40: [
        function(e, t) {
          "use strict";
          var n = e("./EventConstants"), r = e("./LocalEventTrapMixin"), o = e("./ReactBrowserComponentMixin"), a = e("./ReactCompositeComponent"), i = e("./ReactElement"), s = e("./ReactDOM"), u = i.createFactory(s.form.type), c = a.createClass({
            displayName: "ReactDOMForm",
            mixins: [o, r],
            render: /* @__PURE__ */ __name(function() {
              return u(this.props);
            }, "render"),
            componentDidMount: /* @__PURE__ */ __name(function() {
              this.trapBubbledEvent(n.topLevelTypes.topReset, "reset"), this.trapBubbledEvent(n.topLevelTypes.topSubmit, "submit");
            }, "componentDidMount")
          });
          t.exports = c;
        },
        {
          "./EventConstants": 16,
          "./LocalEventTrapMixin": 25,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50
        }
      ],
      41: [
        function(e, t) {
          "use strict";
          var n = e("./CSSPropertyOperations"), r = e("./DOMChildrenOperations"), o = e("./DOMPropertyOperations"), a = e("./ReactMount"), i = e("./ReactPerf"), s = e("./invariant"), u = e("./setInnerHTML"), c = {
            dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
            style: "`style` must be set using `updateStylesByID()`."
          }, l = {
            updatePropertyByID: i.measure(
              "ReactDOMIDOperations",
              "updatePropertyByID",
              function(e2, t2, n2) {
                var r2 = a.getNode(e2);
                s(!c.hasOwnProperty(t2)), null != n2 ? o.setValueForProperty(r2, t2, n2) : o.deleteValueForProperty(r2, t2);
              }
            ),
            deletePropertyByID: i.measure(
              "ReactDOMIDOperations",
              "deletePropertyByID",
              function(e2, t2, n2) {
                var r2 = a.getNode(e2);
                s(!c.hasOwnProperty(t2)), o.deleteValueForProperty(r2, t2, n2);
              }
            ),
            updateStylesByID: i.measure(
              "ReactDOMIDOperations",
              "updateStylesByID",
              function(e2, t2) {
                var r2 = a.getNode(e2);
                n.setValueForStyles(r2, t2);
              }
            ),
            updateInnerHTMLByID: i.measure(
              "ReactDOMIDOperations",
              "updateInnerHTMLByID",
              function(e2, t2) {
                var n2 = a.getNode(e2);
                u(n2, t2);
              }
            ),
            updateTextContentByID: i.measure(
              "ReactDOMIDOperations",
              "updateTextContentByID",
              function(e2, t2) {
                var n2 = a.getNode(e2);
                r.updateTextContent(n2, t2);
              }
            ),
            dangerouslyReplaceNodeWithMarkupByID: i.measure(
              "ReactDOMIDOperations",
              "dangerouslyReplaceNodeWithMarkupByID",
              function(e2, t2) {
                var n2 = a.getNode(e2);
                r.dangerouslyReplaceNodeWithMarkup(n2, t2);
              }
            ),
            dangerouslyProcessChildrenUpdates: i.measure(
              "ReactDOMIDOperations",
              "dangerouslyProcessChildrenUpdates",
              function(e2, t2) {
                for (var n2 = 0; n2 < e2.length; n2++)
                  e2[n2].parentNode = a.getNode(e2[n2].parentID);
                r.processUpdates(e2, t2);
              }
            )
          };
          t.exports = l;
        },
        {
          "./CSSPropertyOperations": 5,
          "./DOMChildrenOperations": 10,
          "./DOMPropertyOperations": 12,
          "./ReactMount": 61,
          "./ReactPerf": 66,
          "./invariant": 124,
          "./setInnerHTML": 136
        }
      ],
      42: [
        function(e, t) {
          "use strict";
          var n = e("./EventConstants"), r = e("./LocalEventTrapMixin"), o = e("./ReactBrowserComponentMixin"), a = e("./ReactCompositeComponent"), i = e("./ReactElement"), s = e("./ReactDOM"), u = i.createFactory(s.img.type), c = a.createClass({
            displayName: "ReactDOMImg",
            tagName: "IMG",
            mixins: [o, r],
            render: /* @__PURE__ */ __name(function() {
              return u(this.props);
            }, "render"),
            componentDidMount: /* @__PURE__ */ __name(function() {
              this.trapBubbledEvent(n.topLevelTypes.topLoad, "load"), this.trapBubbledEvent(n.topLevelTypes.topError, "error");
            }, "componentDidMount")
          });
          t.exports = c;
        },
        {
          "./EventConstants": 16,
          "./LocalEventTrapMixin": 25,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50
        }
      ],
      43: [
        function(e, t) {
          "use strict";
          function n() {
            this.isMounted() && this.forceUpdate();
          }
          __name(n, "n");
          var r = e("./AutoFocusMixin"), o = e("./DOMPropertyOperations"), a = e("./LinkedValueUtils"), i = e("./ReactBrowserComponentMixin"), s = e("./ReactCompositeComponent"), u = e("./ReactElement"), c = e("./ReactDOM"), l = e("./ReactMount"), p = e("./ReactUpdates"), d = e("./Object.assign"), f = e("./invariant"), h = u.createFactory(c.input.type), m = {}, v = s.createClass({
            displayName: "ReactDOMInput",
            mixins: [r, a.Mixin, i],
            getInitialState: /* @__PURE__ */ __name(function() {
              var e2 = this.props.defaultValue;
              return {
                initialChecked: this.props.defaultChecked || false,
                initialValue: null != e2 ? e2 : null
              };
            }, "getInitialState"),
            render: /* @__PURE__ */ __name(function() {
              var e2 = d({}, this.props);
              e2.defaultChecked = null, e2.defaultValue = null;
              var t2 = a.getValue(this);
              e2.value = null != t2 ? t2 : this.state.initialValue;
              var n2 = a.getChecked(this);
              return e2.checked = null != n2 ? n2 : this.state.initialChecked, e2.onChange = this._handleChange, h(e2, this.props.children);
            }, "render"),
            componentDidMount: /* @__PURE__ */ __name(function() {
              var e2 = l.getID(this.getDOMNode());
              m[e2] = this;
            }, "componentDidMount"),
            componentWillUnmount: /* @__PURE__ */ __name(function() {
              var e2 = this.getDOMNode(), t2 = l.getID(e2);
              delete m[t2];
            }, "componentWillUnmount"),
            componentDidUpdate: /* @__PURE__ */ __name(function() {
              var e2 = this.getDOMNode();
              null != this.props.checked && o.setValueForProperty(e2, "checked", this.props.checked || false);
              var t2 = a.getValue(this);
              null != t2 && o.setValueForProperty(e2, "value", "" + t2);
            }, "componentDidUpdate"),
            _handleChange: /* @__PURE__ */ __name(function(e2) {
              var t2, r2 = a.getOnChange(this);
              r2 && (t2 = r2.call(this, e2)), p.asap(n, this);
              var o2 = this.props.name;
              if ("radio" === this.props.type && null != o2) {
                for (var i2 = this.getDOMNode(), s2 = i2; s2.parentNode; )
                  s2 = s2.parentNode;
                for (var u2 = s2.querySelectorAll(
                  "input[name=" + JSON.stringify("" + o2) + '][type="radio"]'
                ), c2 = 0, d2 = u2.length; d2 > c2; c2++) {
                  var h2 = u2[c2];
                  if (h2 !== i2 && h2.form === i2.form) {
                    var v2 = l.getID(h2);
                    f(v2);
                    var g = m[v2];
                    f(g), p.asap(n, g);
                  }
                }
              }
              return t2;
            }, "_handleChange")
          });
          t.exports = v;
        },
        {
          "./AutoFocusMixin": 2,
          "./DOMPropertyOperations": 12,
          "./LinkedValueUtils": 24,
          "./Object.assign": 27,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50,
          "./ReactMount": 61,
          "./ReactUpdates": 77,
          "./invariant": 124
        }
      ],
      44: [
        function(e, t) {
          "use strict";
          var n = e("./ReactBrowserComponentMixin"), r = e("./ReactCompositeComponent"), o = e("./ReactElement"), a = e("./ReactDOM"), i = (e("./warning"), o.createFactory(a.option.type)), s = r.createClass({
            displayName: "ReactDOMOption",
            mixins: [n],
            componentWillMount: /* @__PURE__ */ __name(function() {
            }, "componentWillMount"),
            render: /* @__PURE__ */ __name(function() {
              return i(this.props, this.props.children);
            }, "render")
          });
          t.exports = s;
        },
        {
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50,
          "./warning": 141
        }
      ],
      45: [
        function(e, t) {
          "use strict";
          function n() {
            this.isMounted() && (this.setState({ value: this._pendingValue }), this._pendingValue = 0);
          }
          __name(n, "n");
          function r(e2, t2) {
            if (null != e2[t2]) {
              if (e2.multiple) {
                if (!Array.isArray(e2[t2]))
                  return new Error(
                    "The `" + t2 + "` prop supplied to <select> must be an array if `multiple` is true."
                  );
              } else if (Array.isArray(e2[t2]))
                return new Error(
                  "The `" + t2 + "` prop supplied to <select> must be a scalar value if `multiple` is false."
                );
            }
          }
          __name(r, "r");
          function o(e2, t2) {
            var n2, r2, o2, a2 = e2.props.multiple, i2 = null != t2 ? t2 : e2.state.value, s2 = e2.getDOMNode().options;
            if (a2)
              for (n2 = {}, r2 = 0, o2 = i2.length; o2 > r2; ++r2) n2["" + i2[r2]] = true;
            else n2 = "" + i2;
            for (r2 = 0, o2 = s2.length; o2 > r2; r2++) {
              var u2 = a2 ? n2.hasOwnProperty(s2[r2].value) : s2[r2].value === n2;
              u2 !== s2[r2].selected && (s2[r2].selected = u2);
            }
          }
          __name(o, "o");
          var a = e("./AutoFocusMixin"), i = e("./LinkedValueUtils"), s = e("./ReactBrowserComponentMixin"), u = e("./ReactCompositeComponent"), c = e("./ReactElement"), l = e("./ReactDOM"), p = e("./ReactUpdates"), d = e("./Object.assign"), f = c.createFactory(l.select.type), h = u.createClass({
            displayName: "ReactDOMSelect",
            mixins: [a, i.Mixin, s],
            propTypes: { defaultValue: r, value: r },
            getInitialState: /* @__PURE__ */ __name(function() {
              return {
                value: this.props.defaultValue || (this.props.multiple ? [] : "")
              };
            }, "getInitialState"),
            componentWillMount: /* @__PURE__ */ __name(function() {
              this._pendingValue = null;
            }, "componentWillMount"),
            componentWillReceiveProps: /* @__PURE__ */ __name(function(e2) {
              !this.props.multiple && e2.multiple ? this.setState({ value: [this.state.value] }) : this.props.multiple && !e2.multiple && this.setState({ value: this.state.value[0] });
            }, "componentWillReceiveProps"),
            render: /* @__PURE__ */ __name(function() {
              var e2 = d({}, this.props);
              return e2.onChange = this._handleChange, e2.value = null, f(e2, this.props.children);
            }, "render"),
            componentDidMount: /* @__PURE__ */ __name(function() {
              o(this, i.getValue(this));
            }, "componentDidMount"),
            componentDidUpdate: /* @__PURE__ */ __name(function(e2) {
              var t2 = i.getValue(this), n2 = !!e2.multiple, r2 = !!this.props.multiple;
              (null != t2 || n2 !== r2) && o(this, t2);
            }, "componentDidUpdate"),
            _handleChange: /* @__PURE__ */ __name(function(e2) {
              var t2, r2 = i.getOnChange(this);
              r2 && (t2 = r2.call(this, e2));
              var o2;
              if (this.props.multiple) {
                o2 = [];
                for (var a2 = e2.target.options, s2 = 0, u2 = a2.length; u2 > s2; s2++)
                  a2[s2].selected && o2.push(a2[s2].value);
              } else o2 = e2.target.value;
              return this._pendingValue = o2, p.asap(n, this), t2;
            }, "_handleChange")
          });
          t.exports = h;
        },
        {
          "./AutoFocusMixin": 2,
          "./LinkedValueUtils": 24,
          "./Object.assign": 27,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50,
          "./ReactUpdates": 77
        }
      ],
      46: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2, r2) {
            return e2 === n2 && t2 === r2;
          }
          __name(n, "n");
          function r(e2) {
            var t2 = document.selection, n2 = t2.createRange(), r2 = n2.text.length, o2 = n2.duplicate();
            o2.moveToElementText(e2), o2.setEndPoint("EndToStart", n2);
            var a2 = o2.text.length, i2 = a2 + r2;
            return { start: a2, end: i2 };
          }
          __name(r, "r");
          function o(e2) {
            var t2 = window.getSelection && window.getSelection();
            if (!t2 || 0 === t2.rangeCount) return null;
            var r2 = t2.anchorNode, o2 = t2.anchorOffset, a2 = t2.focusNode, i2 = t2.focusOffset, s2 = t2.getRangeAt(0), u2 = n(t2.anchorNode, t2.anchorOffset, t2.focusNode, t2.focusOffset), c2 = u2 ? 0 : s2.toString().length, l2 = s2.cloneRange();
            l2.selectNodeContents(e2), l2.setEnd(s2.startContainer, s2.startOffset);
            var p2 = n(
              l2.startContainer,
              l2.startOffset,
              l2.endContainer,
              l2.endOffset
            ), d = p2 ? 0 : l2.toString().length, f = d + c2, h = document.createRange();
            h.setStart(r2, o2), h.setEnd(a2, i2);
            var m = h.collapsed;
            return { start: m ? f : d, end: m ? d : f };
          }
          __name(o, "o");
          function a(e2, t2) {
            var n2, r2, o2 = document.selection.createRange().duplicate();
            "undefined" == typeof t2.end ? (n2 = t2.start, r2 = n2) : t2.start > t2.end ? (n2 = t2.end, r2 = t2.start) : (n2 = t2.start, r2 = t2.end), o2.moveToElementText(e2), o2.moveStart("character", n2), o2.setEndPoint("EndToStart", o2), o2.moveEnd("character", r2 - n2), o2.select();
          }
          __name(a, "a");
          function i(e2, t2) {
            if (window.getSelection) {
              var n2 = window.getSelection(), r2 = e2[c()].length, o2 = Math.min(t2.start, r2), a2 = "undefined" == typeof t2.end ? o2 : Math.min(t2.end, r2);
              if (!n2.extend && o2 > a2) {
                var i2 = a2;
                a2 = o2, o2 = i2;
              }
              var s2 = u(e2, o2), l2 = u(e2, a2);
              if (s2 && l2) {
                var p2 = document.createRange();
                p2.setStart(s2.node, s2.offset), n2.removeAllRanges(), o2 > a2 ? (n2.addRange(p2), n2.extend(l2.node, l2.offset)) : (p2.setEnd(l2.node, l2.offset), n2.addRange(p2));
              }
            }
          }
          __name(i, "i");
          var s = e("./ExecutionEnvironment"), u = e("./getNodeForCharacterOffset"), c = e("./getTextContentAccessor"), l = s.canUseDOM && document.selection, p = { getOffsets: l ? r : o, setOffsets: l ? a : i };
          t.exports = p;
        },
        {
          "./ExecutionEnvironment": 22,
          "./getNodeForCharacterOffset": 117,
          "./getTextContentAccessor": 119
        }
      ],
      47: [
        function(e, t) {
          "use strict";
          function n() {
            this.isMounted() && this.forceUpdate();
          }
          __name(n, "n");
          var r = e("./AutoFocusMixin"), o = e("./DOMPropertyOperations"), a = e("./LinkedValueUtils"), i = e("./ReactBrowserComponentMixin"), s = e("./ReactCompositeComponent"), u = e("./ReactElement"), c = e("./ReactDOM"), l = e("./ReactUpdates"), p = e("./Object.assign"), d = e("./invariant"), f = (e("./warning"), u.createFactory(c.textarea.type)), h = s.createClass({
            displayName: "ReactDOMTextarea",
            mixins: [r, a.Mixin, i],
            getInitialState: /* @__PURE__ */ __name(function() {
              var e2 = this.props.defaultValue, t2 = this.props.children;
              null != t2 && (d(null == e2), Array.isArray(t2) && (d(t2.length <= 1), t2 = t2[0]), e2 = "" + t2), null == e2 && (e2 = "");
              var n2 = a.getValue(this);
              return { initialValue: "" + (null != n2 ? n2 : e2) };
            }, "getInitialState"),
            render: /* @__PURE__ */ __name(function() {
              var e2 = p({}, this.props);
              return d(null == e2.dangerouslySetInnerHTML), e2.defaultValue = null, e2.value = null, e2.onChange = this._handleChange, f(e2, this.state.initialValue);
            }, "render"),
            componentDidUpdate: /* @__PURE__ */ __name(function() {
              var e2 = a.getValue(this);
              if (null != e2) {
                var t2 = this.getDOMNode();
                o.setValueForProperty(t2, "value", "" + e2);
              }
            }, "componentDidUpdate"),
            _handleChange: /* @__PURE__ */ __name(function(e2) {
              var t2, r2 = a.getOnChange(this);
              return r2 && (t2 = r2.call(this, e2)), l.asap(n, this), t2;
            }, "_handleChange")
          });
          t.exports = h;
        },
        {
          "./AutoFocusMixin": 2,
          "./DOMPropertyOperations": 12,
          "./LinkedValueUtils": 24,
          "./Object.assign": 27,
          "./ReactBrowserComponentMixin": 29,
          "./ReactCompositeComponent": 34,
          "./ReactDOM": 37,
          "./ReactElement": 50,
          "./ReactUpdates": 77,
          "./invariant": 124,
          "./warning": 141
        }
      ],
      48: [
        function(e, t) {
          "use strict";
          function n() {
            this.reinitializeTransaction();
          }
          __name(n, "n");
          var r = e("./ReactUpdates"), o = e("./Transaction"), a = e("./Object.assign"), i = e("./emptyFunction"), s = {
            initialize: i,
            close: /* @__PURE__ */ __name(function() {
              p.isBatchingUpdates = false;
            }, "close")
          }, u = { initialize: i, close: r.flushBatchedUpdates.bind(r) }, c = [u, s];
          a(n.prototype, o.Mixin, {
            getTransactionWrappers: /* @__PURE__ */ __name(function() {
              return c;
            }, "getTransactionWrappers")
          });
          var l = new n(), p = {
            isBatchingUpdates: false,
            batchedUpdates: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var r2 = p.isBatchingUpdates;
              p.isBatchingUpdates = true, r2 ? e2(t2, n2) : l.perform(e2, null, t2, n2);
            }, "batchedUpdates")
          };
          t.exports = p;
        },
        {
          "./Object.assign": 27,
          "./ReactUpdates": 77,
          "./Transaction": 93,
          "./emptyFunction": 105
        }
      ],
      49: [
        function(e, t) {
          "use strict";
          function n() {
            O.EventEmitter.injectReactEventListener(b), O.EventPluginHub.injectEventPluginOrder(s), O.EventPluginHub.injectInstanceHandle(D), O.EventPluginHub.injectMount(x), O.EventPluginHub.injectEventPluginsByName({
              SimpleEventPlugin: w,
              EnterLeaveEventPlugin: u,
              ChangeEventPlugin: o,
              CompositionEventPlugin: i,
              MobileSafariClickEventPlugin: p,
              SelectEventPlugin: P,
              BeforeInputEventPlugin: r
            }), O.NativeComponent.injectGenericComponentClass(m), O.NativeComponent.injectComponentClasses({
              button: v,
              form: g,
              img: y,
              input: E,
              option: C,
              select: R,
              textarea: M,
              html: N("html"),
              head: N("head"),
              body: N("body")
            }), O.CompositeComponent.injectMixin(d), O.DOMProperty.injectDOMPropertyConfig(l), O.DOMProperty.injectDOMPropertyConfig(T), O.EmptyComponent.injectEmptyComponent("noscript"), O.Updates.injectReconcileTransaction(f.ReactReconcileTransaction), O.Updates.injectBatchingStrategy(h), O.RootIndex.injectCreateReactRootIndex(
              c.canUseDOM ? a.createReactRootIndex : _.createReactRootIndex
            ), O.Component.injectEnvironment(f);
          }
          __name(n, "n");
          var r = e("./BeforeInputEventPlugin"), o = e("./ChangeEventPlugin"), a = e("./ClientReactRootIndex"), i = e("./CompositionEventPlugin"), s = e("./DefaultEventPluginOrder"), u = e("./EnterLeaveEventPlugin"), c = e("./ExecutionEnvironment"), l = e("./HTMLDOMPropertyConfig"), p = e("./MobileSafariClickEventPlugin"), d = e("./ReactBrowserComponentMixin"), f = e("./ReactComponentBrowserEnvironment"), h = e("./ReactDefaultBatchingStrategy"), m = e("./ReactDOMComponent"), v = e("./ReactDOMButton"), g = e("./ReactDOMForm"), y = e("./ReactDOMImg"), E = e("./ReactDOMInput"), C = e("./ReactDOMOption"), R = e("./ReactDOMSelect"), M = e("./ReactDOMTextarea"), b = e("./ReactEventListener"), O = e("./ReactInjection"), D = e("./ReactInstanceHandles"), x = e("./ReactMount"), P = e("./SelectEventPlugin"), _ = e("./ServerReactRootIndex"), w = e("./SimpleEventPlugin"), T = e("./SVGDOMPropertyConfig"), N = e("./createFullPageComponent");
          t.exports = { inject: n };
        },
        {
          "./BeforeInputEventPlugin": 3,
          "./ChangeEventPlugin": 7,
          "./ClientReactRootIndex": 8,
          "./CompositionEventPlugin": 9,
          "./DefaultEventPluginOrder": 14,
          "./EnterLeaveEventPlugin": 15,
          "./ExecutionEnvironment": 22,
          "./HTMLDOMPropertyConfig": 23,
          "./MobileSafariClickEventPlugin": 26,
          "./ReactBrowserComponentMixin": 29,
          "./ReactComponentBrowserEnvironment": 33,
          "./ReactDOMButton": 38,
          "./ReactDOMComponent": 39,
          "./ReactDOMForm": 40,
          "./ReactDOMImg": 42,
          "./ReactDOMInput": 43,
          "./ReactDOMOption": 44,
          "./ReactDOMSelect": 45,
          "./ReactDOMTextarea": 47,
          "./ReactDefaultBatchingStrategy": 48,
          "./ReactEventListener": 55,
          "./ReactInjection": 56,
          "./ReactInstanceHandles": 58,
          "./ReactMount": 61,
          "./SVGDOMPropertyConfig": 78,
          "./SelectEventPlugin": 79,
          "./ServerReactRootIndex": 80,
          "./SimpleEventPlugin": 81,
          "./createFullPageComponent": 101
        }
      ],
      50: [
        function(e, t) {
          "use strict";
          var n = e("./ReactContext"), r = e("./ReactCurrentOwner"), o = (e("./warning"), { key: true, ref: true }), a = /* @__PURE__ */ __name(function(e2, t2, n2, r2, o2, a2) {
            this.type = e2, this.key = t2, this.ref = n2, this._owner = r2, this._context = o2, this.props = a2;
          }, "a");
          a.prototype = { _isReactElement: true }, a.createElement = function(e2, t2, i) {
            var s, u = {}, c = null, l = null;
            if (null != t2) {
              l = void 0 === t2.ref ? null : t2.ref, c = null == t2.key ? null : "" + t2.key;
              for (s in t2)
                t2.hasOwnProperty(s) && !o.hasOwnProperty(s) && (u[s] = t2[s]);
            }
            var p = arguments.length - 2;
            if (1 === p) u.children = i;
            else if (p > 1) {
              for (var d = Array(p), f = 0; p > f; f++)
                d[f] = arguments[f + 2];
              u.children = d;
            }
            if (e2 && e2.defaultProps) {
              var h = e2.defaultProps;
              for (s in h) "undefined" == typeof u[s] && (u[s] = h[s]);
            }
            return new a(e2, c, l, r.current, n.current, u);
          }, a.createFactory = function(e2) {
            var t2 = a.createElement.bind(null, e2);
            return t2.type = e2, t2;
          }, a.cloneAndReplaceProps = function(e2, t2) {
            var n2 = new a(e2.type, e2.key, e2.ref, e2._owner, e2._context, t2);
            return n2;
          }, a.isValidElement = function(e2) {
            var t2 = !(!e2 || !e2._isReactElement);
            return t2;
          }, t.exports = a;
        },
        { "./ReactContext": 35, "./ReactCurrentOwner": 36, "./warning": 141 }
      ],
      51: [
        function(e, t) {
          "use strict";
          function n() {
            var e2 = p.current;
            return e2 && e2.constructor.displayName || void 0;
          }
          __name(n, "n");
          function r(e2, t2) {
            e2._store.validated || null != e2.key || (e2._store.validated = true, a(
              "react_key_warning",
              'Each child in an array should have a unique "key" prop.',
              e2,
              t2
            ));
          }
          __name(r, "r");
          function o(e2, t2, n2) {
            v.test(e2) && a(
              "react_numeric_key_warning",
              "Child objects should have non-numeric keys so ordering is preserved.",
              t2,
              n2
            );
          }
          __name(o, "o");
          function a(e2, t2, r2, o2) {
            var a2 = n(), i2 = o2.displayName, s2 = a2 || i2, u2 = f[e2];
            if (!u2.hasOwnProperty(s2)) {
              u2[s2] = true, t2 += a2 ? " Check the render method of " + a2 + "." : " Check the renderComponent call using <" + i2 + ">.";
              var c2 = null;
              r2._owner && r2._owner !== p.current && (c2 = r2._owner.constructor.displayName, t2 += " It was passed a child from " + c2 + "."), t2 += " See http://fb.me/react-warning-keys for more information.", d(e2, { component: s2, componentOwner: c2 }), console.warn(t2);
            }
          }
          __name(a, "a");
          function i() {
            var e2 = n() || "";
            h.hasOwnProperty(e2) || (h[e2] = true, d("react_object_map_children"));
          }
          __name(i, "i");
          function s(e2, t2) {
            if (Array.isArray(e2))
              for (var n2 = 0; n2 < e2.length; n2++) {
                var a2 = e2[n2];
                c.isValidElement(a2) && r(a2, t2);
              }
            else if (c.isValidElement(e2)) e2._store.validated = true;
            else if (e2 && "object" == typeof e2) {
              i();
              for (var s2 in e2) o(s2, e2[s2], t2);
            }
          }
          __name(s, "s");
          function u(e2, t2, n2, r2) {
            for (var o2 in t2)
              if (t2.hasOwnProperty(o2)) {
                var a2;
                try {
                  a2 = t2[o2](n2, o2, e2, r2);
                } catch (i2) {
                  a2 = i2;
                }
                a2 instanceof Error && !(a2.message in m) && (m[a2.message] = true, d("react_failed_descriptor_type_check", {
                  message: a2.message
                }));
              }
          }
          __name(u, "u");
          var c = e("./ReactElement"), l = e("./ReactPropTypeLocations"), p = e("./ReactCurrentOwner"), d = e("./monitorCodeUse"), f = (e("./warning"), { react_key_warning: {}, react_numeric_key_warning: {} }), h = {}, m = {}, v = /^\d+$/, g = {
            createElement: /* @__PURE__ */ __name(function(e2) {
              var t2 = c.createElement.apply(this, arguments);
              if (null == t2) return t2;
              for (var n2 = 2; n2 < arguments.length; n2++) s(arguments[n2], e2);
              if (e2) {
                var r2 = e2.displayName;
                e2.propTypes && u(r2, e2.propTypes, t2.props, l.prop), e2.contextTypes && u(r2, e2.contextTypes, t2._context, l.context);
              }
              return t2;
            }, "createElement"),
            createFactory: /* @__PURE__ */ __name(function(e2) {
              var t2 = g.createElement.bind(null, e2);
              return t2.type = e2, t2;
            }, "createFactory")
          };
          t.exports = g;
        },
        {
          "./ReactCurrentOwner": 36,
          "./ReactElement": 50,
          "./ReactPropTypeLocations": 69,
          "./monitorCodeUse": 134,
          "./warning": 141
        }
      ],
      52: [
        function(e, t) {
          "use strict";
          function n() {
            return u(i), i();
          }
          __name(n, "n");
          function r(e2) {
            c[e2] = true;
          }
          __name(r, "r");
          function o(e2) {
            delete c[e2];
          }
          __name(o, "o");
          function a(e2) {
            return c[e2];
          }
          __name(a, "a");
          var i, s = e("./ReactElement"), u = e("./invariant"), c = {}, l = {
            injectEmptyComponent: /* @__PURE__ */ __name(function(e2) {
              i = s.createFactory(e2);
            }, "injectEmptyComponent")
          }, p = {
            deregisterNullComponentID: o,
            getEmptyComponent: n,
            injection: l,
            isNullComponentID: a,
            registerNullComponentID: r
          };
          t.exports = p;
        },
        { "./ReactElement": 50, "./invariant": 124 }
      ],
      53: [
        function(e, t) {
          "use strict";
          var n = {
            guard: /* @__PURE__ */ __name(function(e2) {
              return e2;
            }, "guard")
          };
          t.exports = n;
        },
        {}
      ],
      54: [
        function(e, t) {
          "use strict";
          function n(e2) {
            r.enqueueEvents(e2), r.processEventQueue();
          }
          __name(n, "n");
          var r = e("./EventPluginHub"), o = {
            handleTopLevel: /* @__PURE__ */ __name(function(e2, t2, o2, a) {
              var i = r.extractEvents(e2, t2, o2, a);
              n(i);
            }, "handleTopLevel")
          };
          t.exports = o;
        },
        { "./EventPluginHub": 18 }
      ],
      55: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = l.getID(e2), n2 = c.getReactRootIDFromNodeID(t2), r2 = l.findReactContainerForID(n2), o2 = l.getFirstReactDOM(r2);
            return o2;
          }
          __name(n, "n");
          function r(e2, t2) {
            this.topLevelType = e2, this.nativeEvent = t2, this.ancestors = [];
          }
          __name(r, "r");
          function o(e2) {
            for (var t2 = l.getFirstReactDOM(f(e2.nativeEvent)) || window, r2 = t2; r2; )
              e2.ancestors.push(r2), r2 = n(r2);
            for (var o2 = 0, a2 = e2.ancestors.length; a2 > o2; o2++) {
              t2 = e2.ancestors[o2];
              var i2 = l.getID(t2) || "";
              m._handleTopLevel(e2.topLevelType, t2, i2, e2.nativeEvent);
            }
          }
          __name(o, "o");
          function a(e2) {
            var t2 = h(window);
            e2(t2);
          }
          __name(a, "a");
          var i = e("./EventListener"), s = e("./ExecutionEnvironment"), u = e("./PooledClass"), c = e("./ReactInstanceHandles"), l = e("./ReactMount"), p = e("./ReactUpdates"), d = e("./Object.assign"), f = e("./getEventTarget"), h = e("./getUnboundedScrollPosition");
          d(r.prototype, {
            destructor: /* @__PURE__ */ __name(function() {
              this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0;
            }, "destructor")
          }), u.addPoolingTo(r, u.twoArgumentPooler);
          var m = {
            _enabled: true,
            _handleTopLevel: null,
            WINDOW_HANDLE: s.canUseDOM ? window : null,
            setHandleTopLevel: /* @__PURE__ */ __name(function(e2) {
              m._handleTopLevel = e2;
            }, "setHandleTopLevel"),
            setEnabled: /* @__PURE__ */ __name(function(e2) {
              m._enabled = !!e2;
            }, "setEnabled"),
            isEnabled: /* @__PURE__ */ __name(function() {
              return m._enabled;
            }, "isEnabled"),
            trapBubbledEvent: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var r2 = n2;
              return r2 ? i.listen(r2, t2, m.dispatchEvent.bind(null, e2)) : void 0;
            }, "trapBubbledEvent"),
            trapCapturedEvent: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var r2 = n2;
              return r2 ? i.capture(r2, t2, m.dispatchEvent.bind(null, e2)) : void 0;
            }, "trapCapturedEvent"),
            monitorScrollValue: /* @__PURE__ */ __name(function(e2) {
              var t2 = a.bind(null, e2);
              i.listen(window, "scroll", t2), i.listen(window, "resize", t2);
            }, "monitorScrollValue"),
            dispatchEvent: /* @__PURE__ */ __name(function(e2, t2) {
              if (m._enabled) {
                var n2 = r.getPooled(e2, t2);
                try {
                  p.batchedUpdates(o, n2);
                } finally {
                  r.release(n2);
                }
              }
            }, "dispatchEvent")
          };
          t.exports = m;
        },
        {
          "./EventListener": 17,
          "./ExecutionEnvironment": 22,
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./ReactInstanceHandles": 58,
          "./ReactMount": 61,
          "./ReactUpdates": 77,
          "./getEventTarget": 115,
          "./getUnboundedScrollPosition": 120
        }
      ],
      56: [
        function(e, t) {
          "use strict";
          var n = e("./DOMProperty"), r = e("./EventPluginHub"), o = e("./ReactComponent"), a = e("./ReactCompositeComponent"), i = e("./ReactEmptyComponent"), s = e("./ReactBrowserEventEmitter"), u = e("./ReactNativeComponent"), c = e("./ReactPerf"), l = e("./ReactRootIndex"), p = e("./ReactUpdates"), d = {
            Component: o.injection,
            CompositeComponent: a.injection,
            DOMProperty: n.injection,
            EmptyComponent: i.injection,
            EventPluginHub: r.injection,
            EventEmitter: s.injection,
            NativeComponent: u.injection,
            Perf: c.injection,
            RootIndex: l.injection,
            Updates: p.injection
          };
          t.exports = d;
        },
        {
          "./DOMProperty": 11,
          "./EventPluginHub": 18,
          "./ReactBrowserEventEmitter": 30,
          "./ReactComponent": 32,
          "./ReactCompositeComponent": 34,
          "./ReactEmptyComponent": 52,
          "./ReactNativeComponent": 64,
          "./ReactPerf": 66,
          "./ReactRootIndex": 73,
          "./ReactUpdates": 77
        }
      ],
      57: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return o(document.documentElement, e2);
          }
          __name(n, "n");
          var r = e("./ReactDOMSelection"), o = e("./containsNode"), a = e("./focusNode"), i = e("./getActiveElement"), s = {
            hasSelectionCapabilities: /* @__PURE__ */ __name(function(e2) {
              return e2 && ("INPUT" === e2.nodeName && "text" === e2.type || "TEXTAREA" === e2.nodeName || "true" === e2.contentEditable);
            }, "hasSelectionCapabilities"),
            getSelectionInformation: /* @__PURE__ */ __name(function() {
              var e2 = i();
              return {
                focusedElem: e2,
                selectionRange: s.hasSelectionCapabilities(e2) ? s.getSelection(e2) : null
              };
            }, "getSelectionInformation"),
            restoreSelection: /* @__PURE__ */ __name(function(e2) {
              var t2 = i(), r2 = e2.focusedElem, o2 = e2.selectionRange;
              t2 !== r2 && n(r2) && (s.hasSelectionCapabilities(r2) && s.setSelection(r2, o2), a(r2));
            }, "restoreSelection"),
            getSelection: /* @__PURE__ */ __name(function(e2) {
              var t2;
              if ("selectionStart" in e2)
                t2 = { start: e2.selectionStart, end: e2.selectionEnd };
              else if (document.selection && "INPUT" === e2.nodeName) {
                var n2 = document.selection.createRange();
                n2.parentElement() === e2 && (t2 = {
                  start: -n2.moveStart("character", -e2.value.length),
                  end: -n2.moveEnd("character", -e2.value.length)
                });
              } else t2 = r.getOffsets(e2);
              return t2 || { start: 0, end: 0 };
            }, "getSelection"),
            setSelection: /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = t2.start, o2 = t2.end;
              if ("undefined" == typeof o2 && (o2 = n2), "selectionStart" in e2)
                e2.selectionStart = n2, e2.selectionEnd = Math.min(o2, e2.value.length);
              else if (document.selection && "INPUT" === e2.nodeName) {
                var a2 = e2.createTextRange();
                a2.collapse(true), a2.moveStart("character", n2), a2.moveEnd("character", o2 - n2), a2.select();
              } else r.setOffsets(e2, t2);
            }, "setSelection")
          };
          t.exports = s;
        },
        {
          "./ReactDOMSelection": 46,
          "./containsNode": 99,
          "./focusNode": 109,
          "./getActiveElement": 111
        }
      ],
      58: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return d + e2.toString(36);
          }
          __name(n, "n");
          function r(e2, t2) {
            return e2.charAt(t2) === d || t2 === e2.length;
          }
          __name(r, "r");
          function o(e2) {
            return "" === e2 || e2.charAt(0) === d && e2.charAt(e2.length - 1) !== d;
          }
          __name(o, "o");
          function a(e2, t2) {
            return 0 === t2.indexOf(e2) && r(t2, e2.length);
          }
          __name(a, "a");
          function i(e2) {
            return e2 ? e2.substr(0, e2.lastIndexOf(d)) : "";
          }
          __name(i, "i");
          function s(e2, t2) {
            if (p(o(e2) && o(t2)), p(a(e2, t2)), e2 === t2) return e2;
            for (var n2 = e2.length + f, i2 = n2; i2 < t2.length && !r(t2, i2); i2++) ;
            return t2.substr(0, i2);
          }
          __name(s, "s");
          function u(e2, t2) {
            var n2 = Math.min(e2.length, t2.length);
            if (0 === n2) return "";
            for (var a2 = 0, i2 = 0; n2 >= i2; i2++)
              if (r(e2, i2) && r(t2, i2)) a2 = i2;
              else if (e2.charAt(i2) !== t2.charAt(i2)) break;
            var s2 = e2.substr(0, a2);
            return p(o(s2)), s2;
          }
          __name(u, "u");
          function c(e2, t2, n2, r2, o2, u2) {
            e2 = e2 || "", t2 = t2 || "", p(e2 !== t2);
            var c2 = a(t2, e2);
            p(c2 || a(e2, t2));
            for (var l2 = 0, d2 = c2 ? i : s, f2 = e2; ; f2 = d2(f2, t2)) {
              var m2;
              if (o2 && f2 === e2 || u2 && f2 === t2 || (m2 = n2(f2, c2, r2)), m2 === false || f2 === t2)
                break;
              p(l2++ < h);
            }
          }
          __name(c, "c");
          var l = e("./ReactRootIndex"), p = e("./invariant"), d = ".", f = d.length, h = 100, m = {
            createReactRootID: /* @__PURE__ */ __name(function() {
              return n(l.createReactRootIndex());
            }, "createReactRootID"),
            createReactID: /* @__PURE__ */ __name(function(e2, t2) {
              return e2 + t2;
            }, "createReactID"),
            getReactRootIDFromNodeID: /* @__PURE__ */ __name(function(e2) {
              if (e2 && e2.charAt(0) === d && e2.length > 1) {
                var t2 = e2.indexOf(d, 1);
                return t2 > -1 ? e2.substr(0, t2) : e2;
              }
              return null;
            }, "getReactRootIDFromNodeID"),
            traverseEnterLeave: /* @__PURE__ */ __name(function(e2, t2, n2, r2, o2) {
              var a2 = u(e2, t2);
              a2 !== e2 && c(e2, a2, n2, r2, false, true), a2 !== t2 && c(a2, t2, n2, o2, true, false);
            }, "traverseEnterLeave"),
            traverseTwoPhase: /* @__PURE__ */ __name(function(e2, t2, n2) {
              e2 && (c("", e2, t2, n2, true, false), c(e2, "", t2, n2, false, true));
            }, "traverseTwoPhase"),
            traverseAncestors: /* @__PURE__ */ __name(function(e2, t2, n2) {
              c("", e2, t2, n2, true, false);
            }, "traverseAncestors"),
            _getFirstCommonAncestorID: u,
            _getNextDescendantID: s,
            isAncestorIDOf: a,
            SEPARATOR: d
          };
          t.exports = m;
        },
        { "./ReactRootIndex": 73, "./invariant": 124 }
      ],
      59: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            if ("function" == typeof t2) {
              for (var n2 in t2)
                if (t2.hasOwnProperty(n2)) {
                  var r2 = t2[n2];
                  if ("function" == typeof r2) {
                    var o2 = r2.bind(t2);
                    for (var a2 in r2) r2.hasOwnProperty(a2) && (o2[a2] = r2[a2]);
                    e2[n2] = o2;
                  } else e2[n2] = r2;
                }
            }
          }
          __name(n, "n");
          var r = (e("./ReactCurrentOwner"), e("./invariant")), o = (e("./monitorCodeUse"), e("./warning"), {}), a = {}, i = {};
          i.wrapCreateFactory = function(e2) {
            var t2 = /* @__PURE__ */ __name(function(t3) {
              return "function" != typeof t3 ? e2(t3) : t3.isReactNonLegacyFactory ? e2(t3.type) : t3.isReactLegacyFactory ? e2(t3.type) : t3;
            }, "t");
            return t2;
          }, i.wrapCreateElement = function(e2) {
            var t2 = /* @__PURE__ */ __name(function(t3) {
              if ("function" != typeof t3) return e2.apply(this, arguments);
              var n2;
              return t3.isReactNonLegacyFactory ? (n2 = Array.prototype.slice.call(arguments, 0), n2[0] = t3.type, e2.apply(this, n2)) : t3.isReactLegacyFactory ? (t3._isMockFunction && (t3.type._mockedReactClassConstructor = t3), n2 = Array.prototype.slice.call(arguments, 0), n2[0] = t3.type, e2.apply(this, n2)) : t3.apply(null, Array.prototype.slice.call(arguments, 1));
            }, "t");
            return t2;
          }, i.wrapFactory = function(e2) {
            r("function" == typeof e2);
            var t2 = /* @__PURE__ */ __name(function() {
              return e2.apply(this, arguments);
            }, "t");
            return n(t2, e2.type), t2.isReactLegacyFactory = o, t2.type = e2.type, t2;
          }, i.markNonLegacyFactory = function(e2) {
            return e2.isReactNonLegacyFactory = a, e2;
          }, i.isValidFactory = function(e2) {
            return "function" == typeof e2 && e2.isReactLegacyFactory === o;
          }, i.isValidClass = function(e2) {
            return i.isValidFactory(e2);
          }, i._isLegacyCallWarningEnabled = true, t.exports = i;
        },
        {
          "./ReactCurrentOwner": 36,
          "./invariant": 124,
          "./monitorCodeUse": 134,
          "./warning": 141
        }
      ],
      60: [
        function(e, t) {
          "use strict";
          var n = e("./adler32"), r = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: /* @__PURE__ */ __name(function(e2) {
              var t2 = n(e2);
              return e2.replace(
                ">",
                " " + r.CHECKSUM_ATTR_NAME + '="' + t2 + '">'
              );
            }, "addChecksumToMarkup"),
            canReuseMarkup: /* @__PURE__ */ __name(function(e2, t2) {
              var o = t2.getAttribute(r.CHECKSUM_ATTR_NAME);
              o = o && parseInt(o, 10);
              var a = n(e2);
              return a === o;
            }, "canReuseMarkup")
          };
          t.exports = r;
        },
        { "./adler32": 96 }
      ],
      61: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = E(e2);
            return t2 && S.getID(t2);
          }
          __name(n, "n");
          function r(e2) {
            var t2 = o(e2);
            if (t2)
              if (x.hasOwnProperty(t2)) {
                var n2 = x[t2];
                n2 !== e2 && (R(!s(n2, t2)), x[t2] = e2);
              } else x[t2] = e2;
            return t2;
          }
          __name(r, "r");
          function o(e2) {
            return e2 && e2.getAttribute && e2.getAttribute(D) || "";
          }
          __name(o, "o");
          function a(e2, t2) {
            var n2 = o(e2);
            n2 !== t2 && delete x[n2], e2.setAttribute(D, t2), x[t2] = e2;
          }
          __name(a, "a");
          function i(e2) {
            return x.hasOwnProperty(e2) && s(x[e2], e2) || (x[e2] = S.findReactNodeByID(e2)), x[e2];
          }
          __name(i, "i");
          function s(e2, t2) {
            if (e2) {
              R(o(e2) === t2);
              var n2 = S.findReactContainerForID(t2);
              if (n2 && g(n2, e2)) return true;
            }
            return false;
          }
          __name(s, "s");
          function u(e2) {
            delete x[e2];
          }
          __name(u, "u");
          function c(e2) {
            var t2 = x[e2];
            return t2 && s(t2, e2) ? void (I = t2) : false;
          }
          __name(c, "c");
          function l(e2) {
            I = null, m.traverseAncestors(e2, c);
            var t2 = I;
            return I = null, t2;
          }
          __name(l, "l");
          var p = e("./DOMProperty"), d = e("./ReactBrowserEventEmitter"), f = (e("./ReactCurrentOwner"), e("./ReactElement")), h = e("./ReactLegacyElement"), m = e("./ReactInstanceHandles"), v = e("./ReactPerf"), g = e("./containsNode"), y = e("./deprecated"), E = e("./getReactRootElementInContainer"), C = e("./instantiateReactComponent"), R = e("./invariant"), M = e("./shouldUpdateReactComponent"), b = (e("./warning"), h.wrapCreateElement(f.createElement)), O = m.SEPARATOR, D = p.ID_ATTRIBUTE_NAME, x = {}, P = 1, _ = 9, w = {}, T = {}, N = [], I = null, S = {
            _instancesByReactRootID: w,
            scrollMonitor: /* @__PURE__ */ __name(function(e2, t2) {
              t2();
            }, "scrollMonitor"),
            _updateRootComponent: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
              var o2 = t2.props;
              return S.scrollMonitor(n2, function() {
                e2.replaceProps(o2, r2);
              }), e2;
            }, "_updateRootComponent"),
            _registerComponent: /* @__PURE__ */ __name(function(e2, t2) {
              R(t2 && (t2.nodeType === P || t2.nodeType === _)), d.ensureScrollValueMonitoring();
              var n2 = S.registerContainer(t2);
              return w[n2] = e2, n2;
            }, "_registerComponent"),
            _renderNewRootComponent: v.measure(
              "ReactMount",
              "_renderNewRootComponent",
              function(e2, t2, n2) {
                var r2 = C(e2, null), o2 = S._registerComponent(r2, t2);
                return r2.mountComponentIntoNode(o2, t2, n2), r2;
              }
            ),
            render: /* @__PURE__ */ __name(function(e2, t2, r2) {
              R(f.isValidElement(e2));
              var o2 = w[n(t2)];
              if (o2) {
                var a2 = o2._currentElement;
                if (M(a2, e2)) return S._updateRootComponent(o2, e2, t2, r2);
                S.unmountComponentAtNode(t2);
              }
              var i2 = E(t2), s2 = i2 && S.isRenderedByReact(i2), u2 = s2 && !o2, c2 = S._renderNewRootComponent(e2, t2, u2);
              return r2 && r2.call(c2), c2;
            }, "render"),
            constructAndRenderComponent: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var r2 = b(e2, t2);
              return S.render(r2, n2);
            }, "constructAndRenderComponent"),
            constructAndRenderComponentByID: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var r2 = document.getElementById(n2);
              return R(r2), S.constructAndRenderComponent(e2, t2, r2);
            }, "constructAndRenderComponentByID"),
            registerContainer: /* @__PURE__ */ __name(function(e2) {
              var t2 = n(e2);
              return t2 && (t2 = m.getReactRootIDFromNodeID(t2)), t2 || (t2 = m.createReactRootID()), T[t2] = e2, t2;
            }, "registerContainer"),
            unmountComponentAtNode: /* @__PURE__ */ __name(function(e2) {
              var t2 = n(e2), r2 = w[t2];
              return r2 ? (S.unmountComponentFromNode(r2, e2), delete w[t2], delete T[t2], true) : false;
            }, "unmountComponentAtNode"),
            unmountComponentFromNode: /* @__PURE__ */ __name(function(e2, t2) {
              for (e2.unmountComponent(), t2.nodeType === _ && (t2 = t2.documentElement); t2.lastChild; )
                t2.removeChild(t2.lastChild);
            }, "unmountComponentFromNode"),
            findReactContainerForID: /* @__PURE__ */ __name(function(e2) {
              var t2 = m.getReactRootIDFromNodeID(e2), n2 = T[t2];
              return n2;
            }, "findReactContainerForID"),
            findReactNodeByID: /* @__PURE__ */ __name(function(e2) {
              var t2 = S.findReactContainerForID(e2);
              return S.findComponentRoot(t2, e2);
            }, "findReactNodeByID"),
            isRenderedByReact: /* @__PURE__ */ __name(function(e2) {
              if (1 !== e2.nodeType) return false;
              var t2 = S.getID(e2);
              return t2 ? t2.charAt(0) === O : false;
            }, "isRenderedByReact"),
            getFirstReactDOM: /* @__PURE__ */ __name(function(e2) {
              for (var t2 = e2; t2 && t2.parentNode !== t2; ) {
                if (S.isRenderedByReact(t2)) return t2;
                t2 = t2.parentNode;
              }
              return null;
            }, "getFirstReactDOM"),
            findComponentRoot: /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = N, r2 = 0, o2 = l(t2) || e2;
              for (n2[0] = o2.firstChild, n2.length = 1; r2 < n2.length; ) {
                for (var a2, i2 = n2[r2++]; i2; ) {
                  var s2 = S.getID(i2);
                  s2 ? t2 === s2 ? a2 = i2 : m.isAncestorIDOf(s2, t2) && (n2.length = r2 = 0, n2.push(i2.firstChild)) : n2.push(i2.firstChild), i2 = i2.nextSibling;
                }
                if (a2) return n2.length = 0, a2;
              }
              n2.length = 0, R(false);
            }, "findComponentRoot"),
            getReactRootID: n,
            getID: r,
            setID: a,
            getNode: i,
            purgeID: u
          };
          S.renderComponent = y(
            "ReactMount",
            "renderComponent",
            "render",
            this,
            S.render
          ), t.exports = S;
        },
        {
          "./DOMProperty": 11,
          "./ReactBrowserEventEmitter": 30,
          "./ReactCurrentOwner": 36,
          "./ReactElement": 50,
          "./ReactInstanceHandles": 58,
          "./ReactLegacyElement": 59,
          "./ReactPerf": 66,
          "./containsNode": 99,
          "./deprecated": 104,
          "./getReactRootElementInContainer": 118,
          "./instantiateReactComponent": 123,
          "./invariant": 124,
          "./shouldUpdateReactComponent": 138,
          "./warning": 141
        }
      ],
      62: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            h.push({
              parentID: e2,
              parentNode: null,
              type: c.INSERT_MARKUP,
              markupIndex: m.push(t2) - 1,
              textContent: null,
              fromIndex: null,
              toIndex: n2
            });
          }
          __name(n, "n");
          function r(e2, t2, n2) {
            h.push({
              parentID: e2,
              parentNode: null,
              type: c.MOVE_EXISTING,
              markupIndex: null,
              textContent: null,
              fromIndex: t2,
              toIndex: n2
            });
          }
          __name(r, "r");
          function o(e2, t2) {
            h.push({
              parentID: e2,
              parentNode: null,
              type: c.REMOVE_NODE,
              markupIndex: null,
              textContent: null,
              fromIndex: t2,
              toIndex: null
            });
          }
          __name(o, "o");
          function a(e2, t2) {
            h.push({
              parentID: e2,
              parentNode: null,
              type: c.TEXT_CONTENT,
              markupIndex: null,
              textContent: t2,
              fromIndex: null,
              toIndex: null
            });
          }
          __name(a, "a");
          function i() {
            h.length && (u.BackendIDOperations.dangerouslyProcessChildrenUpdates(h, m), s());
          }
          __name(i, "i");
          function s() {
            h.length = 0, m.length = 0;
          }
          __name(s, "s");
          var u = e("./ReactComponent"), c = e("./ReactMultiChildUpdateTypes"), l = e("./flattenChildren"), p = e("./instantiateReactComponent"), d = e("./shouldUpdateReactComponent"), f = 0, h = [], m = [], v = {
            Mixin: {
              mountChildren: /* @__PURE__ */ __name(function(e2, t2) {
                var n2 = l(e2), r2 = [], o2 = 0;
                this._renderedChildren = n2;
                for (var a2 in n2) {
                  var i2 = n2[a2];
                  if (n2.hasOwnProperty(a2)) {
                    var s2 = p(i2, null);
                    n2[a2] = s2;
                    var u2 = this._rootNodeID + a2, c2 = s2.mountComponent(u2, t2, this._mountDepth + 1);
                    s2._mountIndex = o2, r2.push(c2), o2++;
                  }
                }
                return r2;
              }, "mountChildren"),
              updateTextContent: /* @__PURE__ */ __name(function(e2) {
                f++;
                var t2 = true;
                try {
                  var n2 = this._renderedChildren;
                  for (var r2 in n2)
                    n2.hasOwnProperty(r2) && this._unmountChildByName(n2[r2], r2);
                  this.setTextContent(e2), t2 = false;
                } finally {
                  f--, f || (t2 ? s() : i());
                }
              }, "updateTextContent"),
              updateChildren: /* @__PURE__ */ __name(function(e2, t2) {
                f++;
                var n2 = true;
                try {
                  this._updateChildren(e2, t2), n2 = false;
                } finally {
                  f--, f || (n2 ? s() : i());
                }
              }, "updateChildren"),
              _updateChildren: /* @__PURE__ */ __name(function(e2, t2) {
                var n2 = l(e2), r2 = this._renderedChildren;
                if (n2 || r2) {
                  var o2, a2 = 0, i2 = 0;
                  for (o2 in n2)
                    if (n2.hasOwnProperty(o2)) {
                      var s2 = r2 && r2[o2], u2 = s2 && s2._currentElement, c2 = n2[o2];
                      if (d(u2, c2))
                        this.moveChild(s2, i2, a2), a2 = Math.max(s2._mountIndex, a2), s2.receiveComponent(c2, t2), s2._mountIndex = i2;
                      else {
                        s2 && (a2 = Math.max(s2._mountIndex, a2), this._unmountChildByName(s2, o2));
                        var f2 = p(c2, null);
                        this._mountChildByNameAtIndex(f2, o2, i2, t2);
                      }
                      i2++;
                    }
                  for (o2 in r2)
                    !r2.hasOwnProperty(o2) || n2 && n2[o2] || this._unmountChildByName(r2[o2], o2);
                }
              }, "_updateChildren"),
              unmountChildren: /* @__PURE__ */ __name(function() {
                var e2 = this._renderedChildren;
                for (var t2 in e2) {
                  var n2 = e2[t2];
                  n2.unmountComponent && n2.unmountComponent();
                }
                this._renderedChildren = null;
              }, "unmountChildren"),
              moveChild: /* @__PURE__ */ __name(function(e2, t2, n2) {
                e2._mountIndex < n2 && r(this._rootNodeID, e2._mountIndex, t2);
              }, "moveChild"),
              createChild: /* @__PURE__ */ __name(function(e2, t2) {
                n(this._rootNodeID, t2, e2._mountIndex);
              }, "createChild"),
              removeChild: /* @__PURE__ */ __name(function(e2) {
                o(this._rootNodeID, e2._mountIndex);
              }, "removeChild"),
              setTextContent: /* @__PURE__ */ __name(function(e2) {
                a(this._rootNodeID, e2);
              }, "setTextContent"),
              _mountChildByNameAtIndex: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
                var o2 = this._rootNodeID + t2, a2 = e2.mountComponent(o2, r2, this._mountDepth + 1);
                e2._mountIndex = n2, this.createChild(e2, a2), this._renderedChildren = this._renderedChildren || {}, this._renderedChildren[t2] = e2;
              }, "_mountChildByNameAtIndex"),
              _unmountChildByName: /* @__PURE__ */ __name(function(e2, t2) {
                this.removeChild(e2), e2._mountIndex = null, e2.unmountComponent(), delete this._renderedChildren[t2];
              }, "_unmountChildByName")
            }
          };
          t.exports = v;
        },
        {
          "./ReactComponent": 32,
          "./ReactMultiChildUpdateTypes": 63,
          "./flattenChildren": 108,
          "./instantiateReactComponent": 123,
          "./shouldUpdateReactComponent": 138
        }
      ],
      63: [
        function(e, t) {
          "use strict";
          var n = e("./keyMirror"), r = n({
            INSERT_MARKUP: null,
            MOVE_EXISTING: null,
            REMOVE_NODE: null,
            TEXT_CONTENT: null
          });
          t.exports = r;
        },
        { "./keyMirror": 130 }
      ],
      64: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            var r2 = i[e2];
            return null == r2 ? (o(a), new a(e2, t2)) : n2 === e2 ? (o(a), new a(e2, t2)) : new r2.type(t2);
          }
          __name(n, "n");
          var r = e("./Object.assign"), o = e("./invariant"), a = null, i = {}, s = {
            injectGenericComponentClass: /* @__PURE__ */ __name(function(e2) {
              a = e2;
            }, "injectGenericComponentClass"),
            injectComponentClasses: /* @__PURE__ */ __name(function(e2) {
              r(i, e2);
            }, "injectComponentClasses")
          }, u = { createInstanceForTag: n, injection: s };
          t.exports = u;
        },
        { "./Object.assign": 27, "./invariant": 124 }
      ],
      65: [
        function(e, t) {
          "use strict";
          var n = e("./emptyObject"), r = e("./invariant"), o = {
            isValidOwner: /* @__PURE__ */ __name(function(e2) {
              return !(!e2 || "function" != typeof e2.attachRef || "function" != typeof e2.detachRef);
            }, "isValidOwner"),
            addComponentAsRefTo: /* @__PURE__ */ __name(function(e2, t2, n2) {
              r(o.isValidOwner(n2)), n2.attachRef(t2, e2);
            }, "addComponentAsRefTo"),
            removeComponentAsRefFrom: /* @__PURE__ */ __name(function(e2, t2, n2) {
              r(o.isValidOwner(n2)), n2.refs[t2] === e2 && n2.detachRef(t2);
            }, "removeComponentAsRefFrom"),
            Mixin: {
              construct: /* @__PURE__ */ __name(function() {
                this.refs = n;
              }, "construct"),
              attachRef: /* @__PURE__ */ __name(function(e2, t2) {
                r(t2.isOwnedBy(this));
                var o2 = this.refs === n ? this.refs = {} : this.refs;
                o2[e2] = t2;
              }, "attachRef"),
              detachRef: /* @__PURE__ */ __name(function(e2) {
                delete this.refs[e2];
              }, "detachRef")
            }
          };
          t.exports = o;
        },
        { "./emptyObject": 106, "./invariant": 124 }
      ],
      66: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            return n2;
          }
          __name(n, "n");
          var r = {
            enableMeasure: false,
            storedMeasure: n,
            measure: /* @__PURE__ */ __name(function(e2, t2, n2) {
              return n2;
            }, "measure"),
            injection: {
              injectMeasure: /* @__PURE__ */ __name(function(e2) {
                r.storedMeasure = e2;
              }, "injectMeasure")
            }
          };
          t.exports = r;
        },
        {}
      ],
      67: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return function(t2, n2, r2) {
              t2[n2] = t2.hasOwnProperty(n2) ? e2(t2[n2], r2) : r2;
            };
          }
          __name(n, "n");
          function r(e2, t2) {
            for (var n2 in t2)
              if (t2.hasOwnProperty(n2)) {
                var r2 = c[n2];
                r2 && c.hasOwnProperty(n2) ? r2(e2, n2, t2[n2]) : e2.hasOwnProperty(n2) || (e2[n2] = t2[n2]);
              }
            return e2;
          }
          __name(r, "r");
          var o = e("./Object.assign"), a = e("./emptyFunction"), i = e("./invariant"), s = e("./joinClasses"), u = (e("./warning"), n(function(e2, t2) {
            return o({}, t2, e2);
          })), c = { children: a, className: n(s), style: u }, l = {
            TransferStrategies: c,
            mergeProps: /* @__PURE__ */ __name(function(e2, t2) {
              return r(o({}, e2), t2);
            }, "mergeProps"),
            Mixin: {
              transferPropsTo: /* @__PURE__ */ __name(function(e2) {
                return i(e2._owner === this), r(e2.props, this.props), e2;
              }, "transferPropsTo")
            }
          };
          t.exports = l;
        },
        {
          "./Object.assign": 27,
          "./emptyFunction": 105,
          "./invariant": 124,
          "./joinClasses": 129,
          "./warning": 141
        }
      ],
      68: [
        function(e, t) {
          "use strict";
          var n = {};
          t.exports = n;
        },
        {}
      ],
      69: [
        function(e, t) {
          "use strict";
          var n = e("./keyMirror"), r = n({ prop: null, context: null, childContext: null });
          t.exports = r;
        },
        { "./keyMirror": 130 }
      ],
      70: [
        function(e, t) {
          "use strict";
          function n(e2) {
            function t2(t3, n3, r2, o2, a2) {
              if (o2 = o2 || C, null != n3[r2]) return e2(n3, r2, o2, a2);
              var i2 = g[a2];
              return t3 ? new Error(
                "Required " + i2 + " `" + r2 + "` was not specified in " + ("`" + o2 + "`.")
              ) : void 0;
            }
            __name(t2, "t");
            var n2 = t2.bind(null, false);
            return n2.isRequired = t2.bind(null, true), n2;
          }
          __name(n, "n");
          function r(e2) {
            function t2(t3, n2, r2, o2) {
              var a2 = t3[n2], i2 = h(a2);
              if (i2 !== e2) {
                var s2 = g[o2], u2 = m(a2);
                return new Error(
                  "Invalid " + s2 + " `" + n2 + "` of type `" + u2 + "` " + ("supplied to `" + r2 + "`, expected `" + e2 + "`.")
                );
              }
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(r, "r");
          function o() {
            return n(E.thatReturns());
          }
          __name(o, "o");
          function a(e2) {
            function t2(t3, n2, r2, o2) {
              var a2 = t3[n2];
              if (!Array.isArray(a2)) {
                var i2 = g[o2], s2 = h(a2);
                return new Error(
                  "Invalid " + i2 + " `" + n2 + "` of type " + ("`" + s2 + "` supplied to `" + r2 + "`, expected an array.")
                );
              }
              for (var u2 = 0; u2 < a2.length; u2++) {
                var c2 = e2(a2, u2, r2, o2);
                if (c2 instanceof Error) return c2;
              }
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(a, "a");
          function i() {
            function e2(e3, t2, n2, r2) {
              if (!v.isValidElement(e3[t2])) {
                var o2 = g[r2];
                return new Error(
                  "Invalid " + o2 + " `" + t2 + "` supplied to " + ("`" + n2 + "`, expected a ReactElement.")
                );
              }
            }
            __name(e2, "e");
            return n(e2);
          }
          __name(i, "i");
          function s(e2) {
            function t2(t3, n2, r2, o2) {
              if (!(t3[n2] instanceof e2)) {
                var a2 = g[o2], i2 = e2.name || C;
                return new Error(
                  "Invalid " + a2 + " `" + n2 + "` supplied to " + ("`" + r2 + "`, expected instance of `" + i2 + "`.")
                );
              }
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(s, "s");
          function u(e2) {
            function t2(t3, n2, r2, o2) {
              for (var a2 = t3[n2], i2 = 0; i2 < e2.length; i2++)
                if (a2 === e2[i2]) return;
              var s2 = g[o2], u2 = JSON.stringify(e2);
              return new Error(
                "Invalid " + s2 + " `" + n2 + "` of value `" + a2 + "` " + ("supplied to `" + r2 + "`, expected one of " + u2 + ".")
              );
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(u, "u");
          function c(e2) {
            function t2(t3, n2, r2, o2) {
              var a2 = t3[n2], i2 = h(a2);
              if ("object" !== i2) {
                var s2 = g[o2];
                return new Error(
                  "Invalid " + s2 + " `" + n2 + "` of type " + ("`" + i2 + "` supplied to `" + r2 + "`, expected an object.")
                );
              }
              for (var u2 in a2)
                if (a2.hasOwnProperty(u2)) {
                  var c2 = e2(a2, u2, r2, o2);
                  if (c2 instanceof Error) return c2;
                }
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(c, "c");
          function l(e2) {
            function t2(t3, n2, r2, o2) {
              for (var a2 = 0; a2 < e2.length; a2++) {
                var i2 = e2[a2];
                if (null == i2(t3, n2, r2, o2)) return;
              }
              var s2 = g[o2];
              return new Error(
                "Invalid " + s2 + " `" + n2 + "` supplied to " + ("`" + r2 + "`.")
              );
            }
            __name(t2, "t");
            return n(t2);
          }
          __name(l, "l");
          function p() {
            function e2(e3, t2, n2, r2) {
              if (!f(e3[t2])) {
                var o2 = g[r2];
                return new Error(
                  "Invalid " + o2 + " `" + t2 + "` supplied to " + ("`" + n2 + "`, expected a ReactNode.")
                );
              }
            }
            __name(e2, "e");
            return n(e2);
          }
          __name(p, "p");
          function d(e2) {
            function t2(t3, n2, r2, o2) {
              var a2 = t3[n2], i2 = h(a2);
              if ("object" !== i2) {
                var s2 = g[o2];
                return new Error(
                  "Invalid " + s2 + " `" + n2 + "` of type `" + i2 + "` " + ("supplied to `" + r2 + "`, expected `object`.")
                );
              }
              for (var u2 in e2) {
                var c2 = e2[u2];
                if (c2) {
                  var l2 = c2(a2, u2, r2, o2);
                  if (l2) return l2;
                }
              }
            }
            __name(t2, "t");
            return n(t2, "expected `object`");
          }
          __name(d, "d");
          function f(e2) {
            switch (typeof e2) {
              case "number":
              case "string":
                return true;
              case "boolean":
                return !e2;
              case "object":
                if (Array.isArray(e2)) return e2.every(f);
                if (v.isValidElement(e2)) return true;
                for (var t2 in e2) if (!f(e2[t2])) return false;
                return true;
              default:
                return false;
            }
          }
          __name(f, "f");
          function h(e2) {
            var t2 = typeof e2;
            return Array.isArray(e2) ? "array" : e2 instanceof RegExp ? "object" : t2;
          }
          __name(h, "h");
          function m(e2) {
            var t2 = h(e2);
            if ("object" === t2) {
              if (e2 instanceof Date) return "date";
              if (e2 instanceof RegExp) return "regexp";
            }
            return t2;
          }
          __name(m, "m");
          var v = e("./ReactElement"), g = e("./ReactPropTypeLocationNames"), y = e("./deprecated"), E = e("./emptyFunction"), C = "<<anonymous>>", R = i(), M = p(), b = {
            array: r("array"),
            bool: r("boolean"),
            func: r("function"),
            number: r("number"),
            object: r("object"),
            string: r("string"),
            any: o(),
            arrayOf: a,
            element: R,
            instanceOf: s,
            node: M,
            objectOf: c,
            oneOf: u,
            oneOfType: l,
            shape: d,
            component: y("React.PropTypes", "component", "element", this, R),
            renderable: y("React.PropTypes", "renderable", "node", this, M)
          };
          t.exports = b;
        },
        {
          "./ReactElement": 50,
          "./ReactPropTypeLocationNames": 68,
          "./deprecated": 104,
          "./emptyFunction": 105
        }
      ],
      71: [
        function(e, t) {
          "use strict";
          function n() {
            this.listenersToPut = [];
          }
          __name(n, "n");
          var r = e("./PooledClass"), o = e("./ReactBrowserEventEmitter"), a = e("./Object.assign");
          a(n.prototype, {
            enqueuePutListener: /* @__PURE__ */ __name(function(e2, t2, n2) {
              this.listenersToPut.push({
                rootNodeID: e2,
                propKey: t2,
                propValue: n2
              });
            }, "enqueuePutListener"),
            putListeners: /* @__PURE__ */ __name(function() {
              for (var e2 = 0; e2 < this.listenersToPut.length; e2++) {
                var t2 = this.listenersToPut[e2];
                o.putListener(t2.rootNodeID, t2.propKey, t2.propValue);
              }
            }, "putListeners"),
            reset: /* @__PURE__ */ __name(function() {
              this.listenersToPut.length = 0;
            }, "reset"),
            destructor: /* @__PURE__ */ __name(function() {
              this.reset();
            }, "destructor")
          }), r.addPoolingTo(n), t.exports = n;
        },
        {
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./ReactBrowserEventEmitter": 30
        }
      ],
      72: [
        function(e, t) {
          "use strict";
          function n() {
            this.reinitializeTransaction(), this.renderToStaticMarkup = false, this.reactMountReady = r.getPooled(null), this.putListenerQueue = s.getPooled();
          }
          __name(n, "n");
          var r = e("./CallbackQueue"), o = e("./PooledClass"), a = e("./ReactBrowserEventEmitter"), i = e("./ReactInputSelection"), s = e("./ReactPutListenerQueue"), u = e("./Transaction"), c = e("./Object.assign"), l = {
            initialize: i.getSelectionInformation,
            close: i.restoreSelection
          }, p = {
            initialize: /* @__PURE__ */ __name(function() {
              var e2 = a.isEnabled();
              return a.setEnabled(false), e2;
            }, "initialize"),
            close: /* @__PURE__ */ __name(function(e2) {
              a.setEnabled(e2);
            }, "close")
          }, d = {
            initialize: /* @__PURE__ */ __name(function() {
              this.reactMountReady.reset();
            }, "initialize"),
            close: /* @__PURE__ */ __name(function() {
              this.reactMountReady.notifyAll();
            }, "close")
          }, f = {
            initialize: /* @__PURE__ */ __name(function() {
              this.putListenerQueue.reset();
            }, "initialize"),
            close: /* @__PURE__ */ __name(function() {
              this.putListenerQueue.putListeners();
            }, "close")
          }, h = [f, l, p, d], m = {
            getTransactionWrappers: /* @__PURE__ */ __name(function() {
              return h;
            }, "getTransactionWrappers"),
            getReactMountReady: /* @__PURE__ */ __name(function() {
              return this.reactMountReady;
            }, "getReactMountReady"),
            getPutListenerQueue: /* @__PURE__ */ __name(function() {
              return this.putListenerQueue;
            }, "getPutListenerQueue"),
            destructor: /* @__PURE__ */ __name(function() {
              r.release(this.reactMountReady), this.reactMountReady = null, s.release(this.putListenerQueue), this.putListenerQueue = null;
            }, "destructor")
          };
          c(n.prototype, u.Mixin, m), o.addPoolingTo(n), t.exports = n;
        },
        {
          "./CallbackQueue": 6,
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./ReactBrowserEventEmitter": 30,
          "./ReactInputSelection": 57,
          "./ReactPutListenerQueue": 71,
          "./Transaction": 93
        }
      ],
      73: [
        function(e, t) {
          "use strict";
          var n = {
            injectCreateReactRootIndex: /* @__PURE__ */ __name(function(e2) {
              r.createReactRootIndex = e2;
            }, "injectCreateReactRootIndex")
          }, r = { createReactRootIndex: null, injection: n };
          t.exports = r;
        },
        {}
      ],
      74: [
        function(e, t) {
          "use strict";
          function n(e2) {
            c(o.isValidElement(e2));
            var t2;
            try {
              var n2 = a.createReactRootID();
              return t2 = s.getPooled(false), t2.perform(function() {
                var r2 = u(e2, null), o2 = r2.mountComponent(n2, t2, 0);
                return i.addChecksumToMarkup(o2);
              }, null);
            } finally {
              s.release(t2);
            }
          }
          __name(n, "n");
          function r(e2) {
            c(o.isValidElement(e2));
            var t2;
            try {
              var n2 = a.createReactRootID();
              return t2 = s.getPooled(true), t2.perform(function() {
                var r2 = u(e2, null);
                return r2.mountComponent(n2, t2, 0);
              }, null);
            } finally {
              s.release(t2);
            }
          }
          __name(r, "r");
          var o = e("./ReactElement"), a = e("./ReactInstanceHandles"), i = e("./ReactMarkupChecksum"), s = e("./ReactServerRenderingTransaction"), u = e("./instantiateReactComponent"), c = e("./invariant");
          t.exports = { renderToString: n, renderToStaticMarkup: r };
        },
        {
          "./ReactElement": 50,
          "./ReactInstanceHandles": 58,
          "./ReactMarkupChecksum": 60,
          "./ReactServerRenderingTransaction": 75,
          "./instantiateReactComponent": 123,
          "./invariant": 124
        }
      ],
      75: [
        function(e, t) {
          "use strict";
          function n(e2) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = e2, this.reactMountReady = o.getPooled(null), this.putListenerQueue = a.getPooled();
          }
          __name(n, "n");
          var r = e("./PooledClass"), o = e("./CallbackQueue"), a = e("./ReactPutListenerQueue"), i = e("./Transaction"), s = e("./Object.assign"), u = e("./emptyFunction"), c = {
            initialize: /* @__PURE__ */ __name(function() {
              this.reactMountReady.reset();
            }, "initialize"),
            close: u
          }, l = {
            initialize: /* @__PURE__ */ __name(function() {
              this.putListenerQueue.reset();
            }, "initialize"),
            close: u
          }, p = [l, c], d = {
            getTransactionWrappers: /* @__PURE__ */ __name(function() {
              return p;
            }, "getTransactionWrappers"),
            getReactMountReady: /* @__PURE__ */ __name(function() {
              return this.reactMountReady;
            }, "getReactMountReady"),
            getPutListenerQueue: /* @__PURE__ */ __name(function() {
              return this.putListenerQueue;
            }, "getPutListenerQueue"),
            destructor: /* @__PURE__ */ __name(function() {
              o.release(this.reactMountReady), this.reactMountReady = null, a.release(this.putListenerQueue), this.putListenerQueue = null;
            }, "destructor")
          };
          s(n.prototype, i.Mixin, d), r.addPoolingTo(n), t.exports = n;
        },
        {
          "./CallbackQueue": 6,
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./ReactPutListenerQueue": 71,
          "./Transaction": 93,
          "./emptyFunction": 105
        }
      ],
      76: [
        function(e, t) {
          "use strict";
          var n = e("./DOMPropertyOperations"), r = e("./ReactComponent"), o = e("./ReactElement"), a = e("./Object.assign"), i = e("./escapeTextForBrowser"), s = /* @__PURE__ */ __name(function() {
          }, "s");
          a(s.prototype, r.Mixin, {
            mountComponent: /* @__PURE__ */ __name(function(e2, t2, o2) {
              r.Mixin.mountComponent.call(this, e2, t2, o2);
              var a2 = i(this.props);
              return t2.renderToStaticMarkup ? a2 : "<span " + n.createMarkupForID(e2) + ">" + a2 + "</span>";
            }, "mountComponent"),
            receiveComponent: /* @__PURE__ */ __name(function(e2) {
              var t2 = e2.props;
              t2 !== this.props && (this.props = t2, r.BackendIDOperations.updateTextContentByID(
                this._rootNodeID,
                t2
              ));
            }, "receiveComponent")
          });
          var u = /* @__PURE__ */ __name(function(e2) {
            return new o(s, null, null, null, null, e2);
          }, "u");
          u.type = s, t.exports = u;
        },
        {
          "./DOMPropertyOperations": 12,
          "./Object.assign": 27,
          "./ReactComponent": 32,
          "./ReactElement": 50,
          "./escapeTextForBrowser": 107
        }
      ],
      77: [
        function(e, t) {
          "use strict";
          function n() {
            h(O.ReactReconcileTransaction && y);
          }
          __name(n, "n");
          function r() {
            this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = c.getPooled(), this.reconcileTransaction = O.ReactReconcileTransaction.getPooled();
          }
          __name(r, "r");
          function o(e2, t2, r2) {
            n(), y.batchedUpdates(e2, t2, r2);
          }
          __name(o, "o");
          function a(e2, t2) {
            return e2._mountDepth - t2._mountDepth;
          }
          __name(a, "a");
          function i(e2) {
            var t2 = e2.dirtyComponentsLength;
            h(t2 === m.length), m.sort(a);
            for (var n2 = 0; t2 > n2; n2++) {
              var r2 = m[n2];
              if (r2.isMounted()) {
                var o2 = r2._pendingCallbacks;
                if (r2._pendingCallbacks = null, r2.performUpdateIfNecessary(e2.reconcileTransaction), o2)
                  for (var i2 = 0; i2 < o2.length; i2++)
                    e2.callbackQueue.enqueue(o2[i2], r2);
              }
            }
          }
          __name(i, "i");
          function s(e2, t2) {
            return h(!t2 || "function" == typeof t2), n(), y.isBatchingUpdates ? (m.push(e2), void (t2 && (e2._pendingCallbacks ? e2._pendingCallbacks.push(t2) : e2._pendingCallbacks = [t2]))) : void y.batchedUpdates(s, e2, t2);
          }
          __name(s, "s");
          function u(e2, t2) {
            h(y.isBatchingUpdates), v.enqueue(e2, t2), g = true;
          }
          __name(u, "u");
          var c = e("./CallbackQueue"), l = e("./PooledClass"), p = (e("./ReactCurrentOwner"), e("./ReactPerf")), d = e("./Transaction"), f = e("./Object.assign"), h = e("./invariant"), m = (e("./warning"), []), v = c.getPooled(), g = false, y = null, E = {
            initialize: /* @__PURE__ */ __name(function() {
              this.dirtyComponentsLength = m.length;
            }, "initialize"),
            close: /* @__PURE__ */ __name(function() {
              this.dirtyComponentsLength !== m.length ? (m.splice(0, this.dirtyComponentsLength), M()) : m.length = 0;
            }, "close")
          }, C = {
            initialize: /* @__PURE__ */ __name(function() {
              this.callbackQueue.reset();
            }, "initialize"),
            close: /* @__PURE__ */ __name(function() {
              this.callbackQueue.notifyAll();
            }, "close")
          }, R = [E, C];
          f(r.prototype, d.Mixin, {
            getTransactionWrappers: /* @__PURE__ */ __name(function() {
              return R;
            }, "getTransactionWrappers"),
            destructor: /* @__PURE__ */ __name(function() {
              this.dirtyComponentsLength = null, c.release(this.callbackQueue), this.callbackQueue = null, O.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null;
            }, "destructor"),
            perform: /* @__PURE__ */ __name(function(e2, t2, n2) {
              return d.Mixin.perform.call(
                this,
                this.reconcileTransaction.perform,
                this.reconcileTransaction,
                e2,
                t2,
                n2
              );
            }, "perform")
          }), l.addPoolingTo(r);
          var M = p.measure("ReactUpdates", "flushBatchedUpdates", function() {
            for (; m.length || g; ) {
              if (m.length) {
                var e2 = r.getPooled();
                e2.perform(i, null, e2), r.release(e2);
              }
              if (g) {
                g = false;
                var t2 = v;
                v = c.getPooled(), t2.notifyAll(), c.release(t2);
              }
            }
          }), b = {
            injectReconcileTransaction: /* @__PURE__ */ __name(function(e2) {
              h(e2), O.ReactReconcileTransaction = e2;
            }, "injectReconcileTransaction"),
            injectBatchingStrategy: /* @__PURE__ */ __name(function(e2) {
              h(e2), h("function" == typeof e2.batchedUpdates), h("boolean" == typeof e2.isBatchingUpdates), y = e2;
            }, "injectBatchingStrategy")
          }, O = {
            ReactReconcileTransaction: null,
            batchedUpdates: o,
            enqueueUpdate: s,
            flushBatchedUpdates: M,
            injection: b,
            asap: u
          };
          t.exports = O;
        },
        {
          "./CallbackQueue": 6,
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./ReactCurrentOwner": 36,
          "./ReactPerf": 66,
          "./Transaction": 93,
          "./invariant": 124,
          "./warning": 141
        }
      ],
      78: [
        function(e, t) {
          "use strict";
          var n = e("./DOMProperty"), r = n.injection.MUST_USE_ATTRIBUTE, o = {
            Properties: {
              cx: r,
              cy: r,
              d: r,
              dx: r,
              dy: r,
              fill: r,
              fillOpacity: r,
              fontFamily: r,
              fontSize: r,
              fx: r,
              fy: r,
              gradientTransform: r,
              gradientUnits: r,
              markerEnd: r,
              markerMid: r,
              markerStart: r,
              offset: r,
              opacity: r,
              patternContentUnits: r,
              patternUnits: r,
              points: r,
              preserveAspectRatio: r,
              r,
              rx: r,
              ry: r,
              spreadMethod: r,
              stopColor: r,
              stopOpacity: r,
              stroke: r,
              strokeDasharray: r,
              strokeLinecap: r,
              strokeOpacity: r,
              strokeWidth: r,
              textAnchor: r,
              transform: r,
              version: r,
              viewBox: r,
              x1: r,
              x2: r,
              x: r,
              y1: r,
              y2: r,
              y: r
            },
            DOMAttributeNames: {
              fillOpacity: "fill-opacity",
              fontFamily: "font-family",
              fontSize: "font-size",
              gradientTransform: "gradientTransform",
              gradientUnits: "gradientUnits",
              markerEnd: "marker-end",
              markerMid: "marker-mid",
              markerStart: "marker-start",
              patternContentUnits: "patternContentUnits",
              patternUnits: "patternUnits",
              preserveAspectRatio: "preserveAspectRatio",
              spreadMethod: "spreadMethod",
              stopColor: "stop-color",
              stopOpacity: "stop-opacity",
              strokeDasharray: "stroke-dasharray",
              strokeLinecap: "stroke-linecap",
              strokeOpacity: "stroke-opacity",
              strokeWidth: "stroke-width",
              textAnchor: "text-anchor",
              viewBox: "viewBox"
            }
          };
          t.exports = o;
        },
        { "./DOMProperty": 11 }
      ],
      79: [
        function(e, t) {
          "use strict";
          function n(e2) {
            if ("selectionStart" in e2 && i.hasSelectionCapabilities(e2))
              return { start: e2.selectionStart, end: e2.selectionEnd };
            if (window.getSelection) {
              var t2 = window.getSelection();
              return {
                anchorNode: t2.anchorNode,
                anchorOffset: t2.anchorOffset,
                focusNode: t2.focusNode,
                focusOffset: t2.focusOffset
              };
            }
            if (document.selection) {
              var n2 = document.selection.createRange();
              return {
                parentElement: n2.parentElement(),
                text: n2.text,
                top: n2.boundingTop,
                left: n2.boundingLeft
              };
            }
          }
          __name(n, "n");
          function r(e2) {
            if (!g && null != h && h == u()) {
              var t2 = n(h);
              if (!v || !p(v, t2)) {
                v = t2;
                var r2 = s.getPooled(f.select, m, e2);
                return r2.type = "select", r2.target = h, a.accumulateTwoPhaseDispatches(r2), r2;
              }
            }
          }
          __name(r, "r");
          var o = e("./EventConstants"), a = e("./EventPropagators"), i = e("./ReactInputSelection"), s = e("./SyntheticEvent"), u = e("./getActiveElement"), c = e("./isTextInputElement"), l = e("./keyOf"), p = e("./shallowEqual"), d = o.topLevelTypes, f = {
            select: {
              phasedRegistrationNames: {
                bubbled: l({ onSelect: null }),
                captured: l({ onSelectCapture: null })
              },
              dependencies: [
                d.topBlur,
                d.topContextMenu,
                d.topFocus,
                d.topKeyDown,
                d.topMouseDown,
                d.topMouseUp,
                d.topSelectionChange
              ]
            }
          }, h = null, m = null, v = null, g = false, y = {
            eventTypes: f,
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, n2, o2) {
              switch (e2) {
                case d.topFocus:
                  (c(t2) || "true" === t2.contentEditable) && (h = t2, m = n2, v = null);
                  break;
                case d.topBlur:
                  h = null, m = null, v = null;
                  break;
                case d.topMouseDown:
                  g = true;
                  break;
                case d.topContextMenu:
                case d.topMouseUp:
                  return g = false, r(o2);
                case d.topSelectionChange:
                case d.topKeyDown:
                case d.topKeyUp:
                  return r(o2);
              }
            }, "extractEvents")
          };
          t.exports = y;
        },
        {
          "./EventConstants": 16,
          "./EventPropagators": 21,
          "./ReactInputSelection": 57,
          "./SyntheticEvent": 85,
          "./getActiveElement": 111,
          "./isTextInputElement": 127,
          "./keyOf": 131,
          "./shallowEqual": 137
        }
      ],
      80: [
        function(e, t) {
          "use strict";
          var n = Math.pow(2, 53), r = {
            createReactRootIndex: /* @__PURE__ */ __name(function() {
              return Math.ceil(Math.random() * n);
            }, "createReactRootIndex")
          };
          t.exports = r;
        },
        {}
      ],
      81: [
        function(e, t) {
          "use strict";
          var n = e("./EventConstants"), r = e("./EventPluginUtils"), o = e("./EventPropagators"), a = e("./SyntheticClipboardEvent"), i = e("./SyntheticEvent"), s = e("./SyntheticFocusEvent"), u = e("./SyntheticKeyboardEvent"), c = e("./SyntheticMouseEvent"), l = e("./SyntheticDragEvent"), p = e("./SyntheticTouchEvent"), d = e("./SyntheticUIEvent"), f = e("./SyntheticWheelEvent"), h = e("./getEventCharCode"), m = e("./invariant"), v = e("./keyOf"), g = (e("./warning"), n.topLevelTypes), y = {
            blur: {
              phasedRegistrationNames: {
                bubbled: v({ onBlur: true }),
                captured: v({ onBlurCapture: true })
              }
            },
            click: {
              phasedRegistrationNames: {
                bubbled: v({ onClick: true }),
                captured: v({ onClickCapture: true })
              }
            },
            contextMenu: {
              phasedRegistrationNames: {
                bubbled: v({ onContextMenu: true }),
                captured: v({ onContextMenuCapture: true })
              }
            },
            copy: {
              phasedRegistrationNames: {
                bubbled: v({ onCopy: true }),
                captured: v({ onCopyCapture: true })
              }
            },
            cut: {
              phasedRegistrationNames: {
                bubbled: v({ onCut: true }),
                captured: v({ onCutCapture: true })
              }
            },
            doubleClick: {
              phasedRegistrationNames: {
                bubbled: v({ onDoubleClick: true }),
                captured: v({ onDoubleClickCapture: true })
              }
            },
            drag: {
              phasedRegistrationNames: {
                bubbled: v({ onDrag: true }),
                captured: v({ onDragCapture: true })
              }
            },
            dragEnd: {
              phasedRegistrationNames: {
                bubbled: v({ onDragEnd: true }),
                captured: v({ onDragEndCapture: true })
              }
            },
            dragEnter: {
              phasedRegistrationNames: {
                bubbled: v({ onDragEnter: true }),
                captured: v({ onDragEnterCapture: true })
              }
            },
            dragExit: {
              phasedRegistrationNames: {
                bubbled: v({ onDragExit: true }),
                captured: v({ onDragExitCapture: true })
              }
            },
            dragLeave: {
              phasedRegistrationNames: {
                bubbled: v({ onDragLeave: true }),
                captured: v({ onDragLeaveCapture: true })
              }
            },
            dragOver: {
              phasedRegistrationNames: {
                bubbled: v({ onDragOver: true }),
                captured: v({ onDragOverCapture: true })
              }
            },
            dragStart: {
              phasedRegistrationNames: {
                bubbled: v({ onDragStart: true }),
                captured: v({ onDragStartCapture: true })
              }
            },
            drop: {
              phasedRegistrationNames: {
                bubbled: v({ onDrop: true }),
                captured: v({ onDropCapture: true })
              }
            },
            focus: {
              phasedRegistrationNames: {
                bubbled: v({ onFocus: true }),
                captured: v({ onFocusCapture: true })
              }
            },
            input: {
              phasedRegistrationNames: {
                bubbled: v({ onInput: true }),
                captured: v({ onInputCapture: true })
              }
            },
            keyDown: {
              phasedRegistrationNames: {
                bubbled: v({ onKeyDown: true }),
                captured: v({ onKeyDownCapture: true })
              }
            },
            keyPress: {
              phasedRegistrationNames: {
                bubbled: v({ onKeyPress: true }),
                captured: v({ onKeyPressCapture: true })
              }
            },
            keyUp: {
              phasedRegistrationNames: {
                bubbled: v({ onKeyUp: true }),
                captured: v({ onKeyUpCapture: true })
              }
            },
            load: {
              phasedRegistrationNames: {
                bubbled: v({ onLoad: true }),
                captured: v({ onLoadCapture: true })
              }
            },
            error: {
              phasedRegistrationNames: {
                bubbled: v({ onError: true }),
                captured: v({ onErrorCapture: true })
              }
            },
            mouseDown: {
              phasedRegistrationNames: {
                bubbled: v({ onMouseDown: true }),
                captured: v({ onMouseDownCapture: true })
              }
            },
            mouseMove: {
              phasedRegistrationNames: {
                bubbled: v({ onMouseMove: true }),
                captured: v({ onMouseMoveCapture: true })
              }
            },
            mouseOut: {
              phasedRegistrationNames: {
                bubbled: v({ onMouseOut: true }),
                captured: v({ onMouseOutCapture: true })
              }
            },
            mouseOver: {
              phasedRegistrationNames: {
                bubbled: v({ onMouseOver: true }),
                captured: v({ onMouseOverCapture: true })
              }
            },
            mouseUp: {
              phasedRegistrationNames: {
                bubbled: v({ onMouseUp: true }),
                captured: v({ onMouseUpCapture: true })
              }
            },
            paste: {
              phasedRegistrationNames: {
                bubbled: v({ onPaste: true }),
                captured: v({ onPasteCapture: true })
              }
            },
            reset: {
              phasedRegistrationNames: {
                bubbled: v({ onReset: true }),
                captured: v({ onResetCapture: true })
              }
            },
            scroll: {
              phasedRegistrationNames: {
                bubbled: v({ onScroll: true }),
                captured: v({ onScrollCapture: true })
              }
            },
            submit: {
              phasedRegistrationNames: {
                bubbled: v({ onSubmit: true }),
                captured: v({ onSubmitCapture: true })
              }
            },
            touchCancel: {
              phasedRegistrationNames: {
                bubbled: v({ onTouchCancel: true }),
                captured: v({ onTouchCancelCapture: true })
              }
            },
            touchEnd: {
              phasedRegistrationNames: {
                bubbled: v({ onTouchEnd: true }),
                captured: v({ onTouchEndCapture: true })
              }
            },
            touchMove: {
              phasedRegistrationNames: {
                bubbled: v({ onTouchMove: true }),
                captured: v({ onTouchMoveCapture: true })
              }
            },
            touchStart: {
              phasedRegistrationNames: {
                bubbled: v({ onTouchStart: true }),
                captured: v({ onTouchStartCapture: true })
              }
            },
            wheel: {
              phasedRegistrationNames: {
                bubbled: v({ onWheel: true }),
                captured: v({ onWheelCapture: true })
              }
            }
          }, E = {
            topBlur: y.blur,
            topClick: y.click,
            topContextMenu: y.contextMenu,
            topCopy: y.copy,
            topCut: y.cut,
            topDoubleClick: y.doubleClick,
            topDrag: y.drag,
            topDragEnd: y.dragEnd,
            topDragEnter: y.dragEnter,
            topDragExit: y.dragExit,
            topDragLeave: y.dragLeave,
            topDragOver: y.dragOver,
            topDragStart: y.dragStart,
            topDrop: y.drop,
            topError: y.error,
            topFocus: y.focus,
            topInput: y.input,
            topKeyDown: y.keyDown,
            topKeyPress: y.keyPress,
            topKeyUp: y.keyUp,
            topLoad: y.load,
            topMouseDown: y.mouseDown,
            topMouseMove: y.mouseMove,
            topMouseOut: y.mouseOut,
            topMouseOver: y.mouseOver,
            topMouseUp: y.mouseUp,
            topPaste: y.paste,
            topReset: y.reset,
            topScroll: y.scroll,
            topSubmit: y.submit,
            topTouchCancel: y.touchCancel,
            topTouchEnd: y.touchEnd,
            topTouchMove: y.touchMove,
            topTouchStart: y.touchStart,
            topWheel: y.wheel
          };
          for (var C in E) E[C].dependencies = [C];
          var R = {
            eventTypes: y,
            executeDispatch: /* @__PURE__ */ __name(function(e2, t2, n2) {
              var o2 = r.executeDispatch(e2, t2, n2);
              o2 === false && (e2.stopPropagation(), e2.preventDefault());
            }, "executeDispatch"),
            extractEvents: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
              var v2 = E[e2];
              if (!v2) return null;
              var y2;
              switch (e2) {
                case g.topInput:
                case g.topLoad:
                case g.topError:
                case g.topReset:
                case g.topSubmit:
                  y2 = i;
                  break;
                case g.topKeyPress:
                  if (0 === h(r2)) return null;
                case g.topKeyDown:
                case g.topKeyUp:
                  y2 = u;
                  break;
                case g.topBlur:
                case g.topFocus:
                  y2 = s;
                  break;
                case g.topClick:
                  if (2 === r2.button) return null;
                case g.topContextMenu:
                case g.topDoubleClick:
                case g.topMouseDown:
                case g.topMouseMove:
                case g.topMouseOut:
                case g.topMouseOver:
                case g.topMouseUp:
                  y2 = c;
                  break;
                case g.topDrag:
                case g.topDragEnd:
                case g.topDragEnter:
                case g.topDragExit:
                case g.topDragLeave:
                case g.topDragOver:
                case g.topDragStart:
                case g.topDrop:
                  y2 = l;
                  break;
                case g.topTouchCancel:
                case g.topTouchEnd:
                case g.topTouchMove:
                case g.topTouchStart:
                  y2 = p;
                  break;
                case g.topScroll:
                  y2 = d;
                  break;
                case g.topWheel:
                  y2 = f;
                  break;
                case g.topCopy:
                case g.topCut:
                case g.topPaste:
                  y2 = a;
              }
              m(y2);
              var C2 = y2.getPooled(v2, n2, r2);
              return o.accumulateTwoPhaseDispatches(C2), C2;
            }, "extractEvents")
          };
          t.exports = R;
        },
        {
          "./EventConstants": 16,
          "./EventPluginUtils": 20,
          "./EventPropagators": 21,
          "./SyntheticClipboardEvent": 82,
          "./SyntheticDragEvent": 84,
          "./SyntheticEvent": 85,
          "./SyntheticFocusEvent": 86,
          "./SyntheticKeyboardEvent": 88,
          "./SyntheticMouseEvent": 89,
          "./SyntheticTouchEvent": 90,
          "./SyntheticUIEvent": 91,
          "./SyntheticWheelEvent": 92,
          "./getEventCharCode": 112,
          "./invariant": 124,
          "./keyOf": 131,
          "./warning": 141
        }
      ],
      82: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticEvent"), o = {
            clipboardData: /* @__PURE__ */ __name(function(e2) {
              return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
            }, "clipboardData")
          };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticEvent": 85 }
      ],
      83: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticEvent"), o = { data: null };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticEvent": 85 }
      ],
      84: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticMouseEvent"), o = { dataTransfer: null };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticMouseEvent": 89 }
      ],
      85: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            this.dispatchConfig = e2, this.dispatchMarker = t2, this.nativeEvent = n2;
            var r2 = this.constructor.Interface;
            for (var o2 in r2)
              if (r2.hasOwnProperty(o2)) {
                var i2 = r2[o2];
                this[o2] = i2 ? i2(n2) : n2[o2];
              }
            var s2 = null != n2.defaultPrevented ? n2.defaultPrevented : n2.returnValue === false;
            this.isDefaultPrevented = s2 ? a.thatReturnsTrue : a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse;
          }
          __name(n, "n");
          var r = e("./PooledClass"), o = e("./Object.assign"), a = e("./emptyFunction"), i = e("./getEventTarget"), s = {
            type: null,
            target: i,
            currentTarget: a.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: /* @__PURE__ */ __name(function(e2) {
              return e2.timeStamp || Date.now();
            }, "timeStamp"),
            defaultPrevented: null,
            isTrusted: null
          };
          o(n.prototype, {
            preventDefault: /* @__PURE__ */ __name(function() {
              this.defaultPrevented = true;
              var e2 = this.nativeEvent;
              e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, this.isDefaultPrevented = a.thatReturnsTrue;
            }, "preventDefault"),
            stopPropagation: /* @__PURE__ */ __name(function() {
              var e2 = this.nativeEvent;
              e2.stopPropagation ? e2.stopPropagation() : e2.cancelBubble = true, this.isPropagationStopped = a.thatReturnsTrue;
            }, "stopPropagation"),
            persist: /* @__PURE__ */ __name(function() {
              this.isPersistent = a.thatReturnsTrue;
            }, "persist"),
            isPersistent: a.thatReturnsFalse,
            destructor: /* @__PURE__ */ __name(function() {
              var e2 = this.constructor.Interface;
              for (var t2 in e2) this[t2] = null;
              this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null;
            }, "destructor")
          }), n.Interface = s, n.augmentClass = function(e2, t2) {
            var n2 = this, a2 = Object.create(n2.prototype);
            o(a2, e2.prototype), e2.prototype = a2, e2.prototype.constructor = e2, e2.Interface = o({}, n2.Interface, t2), e2.augmentClass = n2.augmentClass, r.addPoolingTo(e2, r.threeArgumentPooler);
          }, r.addPoolingTo(n, r.threeArgumentPooler), t.exports = n;
        },
        {
          "./Object.assign": 27,
          "./PooledClass": 28,
          "./emptyFunction": 105,
          "./getEventTarget": 115
        }
      ],
      86: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticUIEvent"), o = { relatedTarget: null };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticUIEvent": 91 }
      ],
      87: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticEvent"), o = { data: null };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticEvent": 85 }
      ],
      88: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticUIEvent"), o = e("./getEventCharCode"), a = e("./getEventKey"), i = e("./getEventModifierState"), s = {
            key: a,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: i,
            charCode: /* @__PURE__ */ __name(function(e2) {
              return "keypress" === e2.type ? o(e2) : 0;
            }, "charCode"),
            keyCode: /* @__PURE__ */ __name(function(e2) {
              return "keydown" === e2.type || "keyup" === e2.type ? e2.keyCode : 0;
            }, "keyCode"),
            which: /* @__PURE__ */ __name(function(e2) {
              return "keypress" === e2.type ? o(e2) : "keydown" === e2.type || "keyup" === e2.type ? e2.keyCode : 0;
            }, "which")
          };
          r.augmentClass(n, s), t.exports = n;
        },
        {
          "./SyntheticUIEvent": 91,
          "./getEventCharCode": 112,
          "./getEventKey": 113,
          "./getEventModifierState": 114
        }
      ],
      89: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticUIEvent"), o = e("./ViewportMetrics"), a = e("./getEventModifierState"), i = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: a,
            button: /* @__PURE__ */ __name(function(e2) {
              var t2 = e2.button;
              return "which" in e2 ? t2 : 2 === t2 ? 2 : 4 === t2 ? 1 : 0;
            }, "button"),
            buttons: null,
            relatedTarget: /* @__PURE__ */ __name(function(e2) {
              return e2.relatedTarget || (e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement);
            }, "relatedTarget"),
            pageX: /* @__PURE__ */ __name(function(e2) {
              return "pageX" in e2 ? e2.pageX : e2.clientX + o.currentScrollLeft;
            }, "pageX"),
            pageY: /* @__PURE__ */ __name(function(e2) {
              return "pageY" in e2 ? e2.pageY : e2.clientY + o.currentScrollTop;
            }, "pageY")
          };
          r.augmentClass(n, i), t.exports = n;
        },
        {
          "./SyntheticUIEvent": 91,
          "./ViewportMetrics": 94,
          "./getEventModifierState": 114
        }
      ],
      90: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticUIEvent"), o = e("./getEventModifierState"), a = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: o
          };
          r.augmentClass(n, a), t.exports = n;
        },
        { "./SyntheticUIEvent": 91, "./getEventModifierState": 114 }
      ],
      91: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticEvent"), o = e("./getEventTarget"), a = {
            view: /* @__PURE__ */ __name(function(e2) {
              if (e2.view) return e2.view;
              var t2 = o(e2);
              if (null != t2 && t2.window === t2) return t2;
              var n2 = t2.ownerDocument;
              return n2 ? n2.defaultView || n2.parentWindow : window;
            }, "view"),
            detail: /* @__PURE__ */ __name(function(e2) {
              return e2.detail || 0;
            }, "detail")
          };
          r.augmentClass(n, a), t.exports = n;
        },
        { "./SyntheticEvent": 85, "./getEventTarget": 115 }
      ],
      92: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            r.call(this, e2, t2, n2);
          }
          __name(n, "n");
          var r = e("./SyntheticMouseEvent"), o = {
            deltaX: /* @__PURE__ */ __name(function(e2) {
              return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
            }, "deltaX"),
            deltaY: /* @__PURE__ */ __name(function(e2) {
              return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
            }, "deltaY"),
            deltaZ: null,
            deltaMode: null
          };
          r.augmentClass(n, o), t.exports = n;
        },
        { "./SyntheticMouseEvent": 89 }
      ],
      93: [
        function(e, t) {
          "use strict";
          var n = e("./invariant"), r = {
            reinitializeTransaction: /* @__PURE__ */ __name(function() {
              this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = false;
            }, "reinitializeTransaction"),
            _isInTransaction: false,
            getTransactionWrappers: null,
            isInTransaction: /* @__PURE__ */ __name(function() {
              return !!this._isInTransaction;
            }, "isInTransaction"),
            perform: /* @__PURE__ */ __name(function(e2, t2, r2, o2, a, i, s, u) {
              n(!this.isInTransaction());
              var c, l;
              try {
                this._isInTransaction = true, c = true, this.initializeAll(0), l = e2.call(t2, r2, o2, a, i, s, u), c = false;
              } finally {
                try {
                  if (c)
                    try {
                      this.closeAll(0);
                    } catch (p) {
                    }
                  else this.closeAll(0);
                } finally {
                  this._isInTransaction = false;
                }
              }
              return l;
            }, "perform"),
            initializeAll: /* @__PURE__ */ __name(function(e2) {
              for (var t2 = this.transactionWrappers, n2 = e2; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                try {
                  this.wrapperInitData[n2] = o.OBSERVED_ERROR, this.wrapperInitData[n2] = r2.initialize ? r2.initialize.call(this) : null;
                } finally {
                  if (this.wrapperInitData[n2] === o.OBSERVED_ERROR)
                    try {
                      this.initializeAll(n2 + 1);
                    } catch (a) {
                    }
                }
              }
            }, "initializeAll"),
            closeAll: /* @__PURE__ */ __name(function(e2) {
              n(this.isInTransaction());
              for (var t2 = this.transactionWrappers, r2 = e2; r2 < t2.length; r2++) {
                var a, i = t2[r2], s = this.wrapperInitData[r2];
                try {
                  a = true, s !== o.OBSERVED_ERROR && i.close && i.close.call(this, s), a = false;
                } finally {
                  if (a)
                    try {
                      this.closeAll(r2 + 1);
                    } catch (u) {
                    }
                }
              }
              this.wrapperInitData.length = 0;
            }, "closeAll")
          }, o = { Mixin: r, OBSERVED_ERROR: {} };
          t.exports = o;
        },
        { "./invariant": 124 }
      ],
      94: [
        function(e, t) {
          "use strict";
          var n = e("./getUnboundedScrollPosition"), r = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: /* @__PURE__ */ __name(function() {
              var e2 = n(window);
              r.currentScrollLeft = e2.x, r.currentScrollTop = e2.y;
            }, "refreshScrollValues")
          };
          t.exports = r;
        },
        { "./getUnboundedScrollPosition": 120 }
      ],
      95: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            if (r(null != t2), null == e2) return t2;
            var n2 = Array.isArray(e2), o = Array.isArray(t2);
            return n2 && o ? (e2.push.apply(e2, t2), e2) : n2 ? (e2.push(t2), e2) : o ? [e2].concat(t2) : [e2, t2];
          }
          __name(n, "n");
          var r = e("./invariant");
          t.exports = n;
        },
        { "./invariant": 124 }
      ],
      96: [
        function(e, t) {
          "use strict";
          function n(e2) {
            for (var t2 = 1, n2 = 0, o = 0; o < e2.length; o++)
              t2 = (t2 + e2.charCodeAt(o)) % r, n2 = (n2 + t2) % r;
            return t2 | n2 << 16;
          }
          __name(n, "n");
          var r = 65521;
          t.exports = n;
        },
        {}
      ],
      97: [
        function(e, t) {
          function n(e2) {
            return e2.replace(r, function(e3, t2) {
              return t2.toUpperCase();
            });
          }
          __name(n, "n");
          var r = /-(.)/g;
          t.exports = n;
        },
        {}
      ],
      98: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return r(e2.replace(o, "ms-"));
          }
          __name(n, "n");
          var r = e("./camelize"), o = /^-ms-/;
          t.exports = n;
        },
        { "./camelize": 97 }
      ],
      99: [
        function(e, t) {
          function n(e2, t2) {
            return e2 && t2 ? e2 === t2 ? true : r(e2) ? false : r(t2) ? n(e2, t2.parentNode) : e2.contains ? e2.contains(t2) : e2.compareDocumentPosition ? !!(16 & e2.compareDocumentPosition(t2)) : false : false;
          }
          __name(n, "n");
          var r = e("./isTextNode");
          t.exports = n;
        },
        { "./isTextNode": 128 }
      ],
      100: [
        function(e, t) {
          function n(e2) {
            return !!e2 && ("object" == typeof e2 || "function" == typeof e2) && "length" in e2 && !("setInterval" in e2) && "number" != typeof e2.nodeType && (Array.isArray(e2) || "callee" in e2 || "item" in e2);
          }
          __name(n, "n");
          function r(e2) {
            return n(e2) ? Array.isArray(e2) ? e2.slice() : o(e2) : [e2];
          }
          __name(r, "r");
          var o = e("./toArray");
          t.exports = r;
        },
        { "./toArray": 139 }
      ],
      101: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = o.createFactory(e2), n2 = r.createClass({
              displayName: "ReactFullPageComponent" + e2,
              componentWillUnmount: /* @__PURE__ */ __name(function() {
                a(false);
              }, "componentWillUnmount"),
              render: /* @__PURE__ */ __name(function() {
                return t2(this.props);
              }, "render")
            });
            return n2;
          }
          __name(n, "n");
          var r = e("./ReactCompositeComponent"), o = e("./ReactElement"), a = e("./invariant");
          t.exports = n;
        },
        {
          "./ReactCompositeComponent": 34,
          "./ReactElement": 50,
          "./invariant": 124
        }
      ],
      102: [
        function(e, t) {
          function n(e2) {
            var t2 = e2.match(c);
            return t2 && t2[1].toLowerCase();
          }
          __name(n, "n");
          function r(e2, t2) {
            var r2 = u;
            s(!!u);
            var o2 = n(e2), c2 = o2 && i(o2);
            if (c2) {
              r2.innerHTML = c2[1] + e2 + c2[2];
              for (var l = c2[0]; l--; ) r2 = r2.lastChild;
            } else r2.innerHTML = e2;
            var p = r2.getElementsByTagName("script");
            p.length && (s(t2), a(p).forEach(t2));
            for (var d = a(r2.childNodes); r2.lastChild; )
              r2.removeChild(r2.lastChild);
            return d;
          }
          __name(r, "r");
          var o = e("./ExecutionEnvironment"), a = e("./createArrayFrom"), i = e("./getMarkupWrap"), s = e("./invariant"), u = o.canUseDOM ? document.createElement("div") : null, c = /^\s*<(\w+)/;
          t.exports = r;
        },
        {
          "./ExecutionEnvironment": 22,
          "./createArrayFrom": 100,
          "./getMarkupWrap": 116,
          "./invariant": 124
        }
      ],
      103: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            var n2 = null == t2 || "boolean" == typeof t2 || "" === t2;
            if (n2) return "";
            var r2 = isNaN(t2);
            return r2 || 0 === t2 || o.hasOwnProperty(e2) && o[e2] ? "" + t2 : ("string" == typeof t2 && (t2 = t2.trim()), t2 + "px");
          }
          __name(n, "n");
          var r = e("./CSSProperty"), o = r.isUnitlessNumber;
          t.exports = n;
        },
        { "./CSSProperty": 4 }
      ],
      104: [
        function(e, t) {
          function n(e2, t2, n2, r, o) {
            return o;
          }
          __name(n, "n");
          e("./Object.assign"), e("./warning");
          t.exports = n;
        },
        { "./Object.assign": 27, "./warning": 141 }
      ],
      105: [
        function(e, t) {
          function n(e2) {
            return function() {
              return e2;
            };
          }
          __name(n, "n");
          function r() {
          }
          __name(r, "r");
          r.thatReturns = n, r.thatReturnsFalse = n(false), r.thatReturnsTrue = n(true), r.thatReturnsNull = n(null), r.thatReturnsThis = function() {
            return this;
          }, r.thatReturnsArgument = function(e2) {
            return e2;
          }, t.exports = r;
        },
        {}
      ],
      106: [
        function(e, t) {
          "use strict";
          var n = {};
          t.exports = n;
        },
        {}
      ],
      107: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return o[e2];
          }
          __name(n, "n");
          function r(e2) {
            return ("" + e2).replace(a, n);
          }
          __name(r, "r");
          var o = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
          }, a = /[&><"']/g;
          t.exports = r;
        },
        {}
      ],
      108: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            var r2 = e2, a2 = !r2.hasOwnProperty(n2);
            if (a2 && null != t2) {
              var i, s = typeof t2;
              i = "string" === s ? o(t2) : "number" === s ? o("" + t2) : t2, r2[n2] = i;
            }
          }
          __name(n, "n");
          function r(e2) {
            if (null == e2) return e2;
            var t2 = {};
            return a(e2, n, t2), t2;
          }
          __name(r, "r");
          {
            var o = e("./ReactTextComponent"), a = e("./traverseAllChildren");
            e("./warning");
          }
          t.exports = r;
        },
        {
          "./ReactTextComponent": 76,
          "./traverseAllChildren": 140,
          "./warning": 141
        }
      ],
      109: [
        function(e, t) {
          "use strict";
          function n(e2) {
            try {
              e2.focus();
            } catch (t2) {
            }
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      110: [
        function(e, t) {
          "use strict";
          var n = /* @__PURE__ */ __name(function(e2, t2, n2) {
            Array.isArray(e2) ? e2.forEach(t2, n2) : e2 && t2.call(n2, e2);
          }, "n");
          t.exports = n;
        },
        {}
      ],
      111: [
        function(e, t) {
          function n() {
            try {
              return document.activeElement || document.body;
            } catch (e2) {
              return document.body;
            }
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      112: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2, n2 = e2.keyCode;
            return "charCode" in e2 ? (t2 = e2.charCode, 0 === t2 && 13 === n2 && (t2 = 13)) : t2 = n2, t2 >= 32 || 13 === t2 ? t2 : 0;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      113: [
        function(e, t) {
          "use strict";
          function n(e2) {
            if (e2.key) {
              var t2 = o[e2.key] || e2.key;
              if ("Unidentified" !== t2) return t2;
            }
            if ("keypress" === e2.type) {
              var n2 = r(e2);
              return 13 === n2 ? "Enter" : String.fromCharCode(n2);
            }
            return "keydown" === e2.type || "keyup" === e2.type ? a[e2.keyCode] || "Unidentified" : "";
          }
          __name(n, "n");
          var r = e("./getEventCharCode"), o = {
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
            MozPrintableKey: "Unidentified"
          }, a = {
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
            224: "Meta"
          };
          t.exports = n;
        },
        { "./getEventCharCode": 112 }
      ],
      114: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = this, n2 = t2.nativeEvent;
            if (n2.getModifierState) return n2.getModifierState(e2);
            var r2 = o[e2];
            return r2 ? !!n2[r2] : false;
          }
          __name(n, "n");
          function r() {
            return n;
          }
          __name(r, "r");
          var o = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
          };
          t.exports = r;
        },
        {}
      ],
      115: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = e2.target || e2.srcElement || window;
            return 3 === t2.nodeType ? t2.parentNode : t2;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      116: [
        function(e, t) {
          function n(e2) {
            return o(!!a), p.hasOwnProperty(e2) || (e2 = "*"), i.hasOwnProperty(e2) || (a.innerHTML = "*" === e2 ? "<link />" : "<" + e2 + "></" + e2 + ">", i[e2] = !a.firstChild), i[e2] ? p[e2] : null;
          }
          __name(n, "n");
          var r = e("./ExecutionEnvironment"), o = e("./invariant"), a = r.canUseDOM ? document.createElement("div") : null, i = {
            circle: true,
            defs: true,
            ellipse: true,
            g: true,
            line: true,
            linearGradient: true,
            path: true,
            polygon: true,
            polyline: true,
            radialGradient: true,
            rect: true,
            stop: true,
            text: true
          }, s = [1, '<select multiple="true">', "</select>"], u = [1, "<table>", "</table>"], c = [3, "<table><tbody><tr>", "</tr></tbody></table>"], l = [1, "<svg>", "</svg>"], p = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [
              2,
              "<table><tbody></tbody><colgroup>",
              "</colgroup></table>"
            ],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: s,
            option: s,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: c,
            th: c,
            circle: l,
            defs: l,
            ellipse: l,
            g: l,
            line: l,
            linearGradient: l,
            path: l,
            polygon: l,
            polyline: l,
            radialGradient: l,
            rect: l,
            stop: l,
            text: l
          };
          t.exports = n;
        },
        { "./ExecutionEnvironment": 22, "./invariant": 124 }
      ],
      117: [
        function(e, t) {
          "use strict";
          function n(e2) {
            for (; e2 && e2.firstChild; ) e2 = e2.firstChild;
            return e2;
          }
          __name(n, "n");
          function r(e2) {
            for (; e2; ) {
              if (e2.nextSibling) return e2.nextSibling;
              e2 = e2.parentNode;
            }
          }
          __name(r, "r");
          function o(e2, t2) {
            for (var o2 = n(e2), a = 0, i = 0; o2; ) {
              if (3 == o2.nodeType) {
                if (i = a + o2.textContent.length, t2 >= a && i >= t2)
                  return { node: o2, offset: t2 - a };
                a = i;
              }
              o2 = n(r(o2));
            }
          }
          __name(o, "o");
          t.exports = o;
        },
        {}
      ],
      118: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return e2 ? e2.nodeType === r ? e2.documentElement : e2.firstChild : null;
          }
          __name(n, "n");
          var r = 9;
          t.exports = n;
        },
        {}
      ],
      119: [
        function(e, t) {
          "use strict";
          function n() {
            return !o && r.canUseDOM && (o = "textContent" in document.documentElement ? "textContent" : "innerText"), o;
          }
          __name(n, "n");
          var r = e("./ExecutionEnvironment"), o = null;
          t.exports = n;
        },
        { "./ExecutionEnvironment": 22 }
      ],
      120: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return e2 === window ? {
              x: window.pageXOffset || document.documentElement.scrollLeft,
              y: window.pageYOffset || document.documentElement.scrollTop
            } : { x: e2.scrollLeft, y: e2.scrollTop };
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      121: [
        function(e, t) {
          function n(e2) {
            return e2.replace(r, "-$1").toLowerCase();
          }
          __name(n, "n");
          var r = /([A-Z])/g;
          t.exports = n;
        },
        {}
      ],
      122: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return r(e2).replace(o, "-ms-");
          }
          __name(n, "n");
          var r = e("./hyphenate"), o = /^ms-/;
          t.exports = n;
        },
        { "./hyphenate": 121 }
      ],
      123: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            var n2;
            return n2 = "string" == typeof e2.type ? r.createInstanceForTag(e2.type, e2.props, t2) : new e2.type(e2.props), n2.construct(e2), n2;
          }
          __name(n, "n");
          {
            var r = (e("./warning"), e("./ReactElement"), e("./ReactLegacyElement"), e("./ReactNativeComponent"));
            e("./ReactEmptyComponent");
          }
          t.exports = n;
        },
        {
          "./ReactElement": 50,
          "./ReactEmptyComponent": 52,
          "./ReactLegacyElement": 59,
          "./ReactNativeComponent": 64,
          "./warning": 141
        }
      ],
      124: [
        function(e, t) {
          "use strict";
          var n = /* @__PURE__ */ __name(function(e2, t2, n2, r, o, a, i, s) {
            if (!e2) {
              var u;
              if (void 0 === t2)
                u = new Error(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                );
              else {
                var c = [n2, r, o, a, i, s], l = 0;
                u = new Error(
                  "Invariant Violation: " + t2.replace(/%s/g, function() {
                    return c[l++];
                  })
                );
              }
              throw u.framesToPop = 1, u;
            }
          }, "n");
          t.exports = n;
        },
        {}
      ],
      125: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            if (!o.canUseDOM || t2 && !("addEventListener" in document))
              return false;
            var n2 = "on" + e2, a = n2 in document;
            if (!a) {
              var i = document.createElement("div");
              i.setAttribute(n2, "return;"), a = "function" == typeof i[n2];
            }
            return !a && r && "wheel" === e2 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
          }
          __name(n, "n");
          var r, o = e("./ExecutionEnvironment");
          o.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true), t.exports = n;
        },
        { "./ExecutionEnvironment": 22 }
      ],
      126: [
        function(e, t) {
          function n(e2) {
            return !(!e2 || !("function" == typeof Node ? e2 instanceof Node : "object" == typeof e2 && "number" == typeof e2.nodeType && "string" == typeof e2.nodeName));
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      127: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return e2 && ("INPUT" === e2.nodeName && r[e2.type] || "TEXTAREA" === e2.nodeName);
          }
          __name(n, "n");
          var r = {
            color: true,
            date: true,
            datetime: true,
            "datetime-local": true,
            email: true,
            month: true,
            number: true,
            password: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true
          };
          t.exports = n;
        },
        {}
      ],
      128: [
        function(e, t) {
          function n(e2) {
            return r(e2) && 3 == e2.nodeType;
          }
          __name(n, "n");
          var r = e("./isNode");
          t.exports = n;
        },
        { "./isNode": 126 }
      ],
      129: [
        function(e, t) {
          "use strict";
          function n(e2) {
            e2 || (e2 = "");
            var t2, n2 = arguments.length;
            if (n2 > 1)
              for (var r = 1; n2 > r; r++)
                t2 = arguments[r], t2 && (e2 = (e2 ? e2 + " " : "") + t2);
            return e2;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      130: [
        function(e, t) {
          "use strict";
          var n = e("./invariant"), r = /* @__PURE__ */ __name(function(e2) {
            var t2, r2 = {};
            n(e2 instanceof Object && !Array.isArray(e2));
            for (t2 in e2) e2.hasOwnProperty(t2) && (r2[t2] = t2);
            return r2;
          }, "r");
          t.exports = r;
        },
        { "./invariant": 124 }
      ],
      131: [
        function(e, t) {
          var n = /* @__PURE__ */ __name(function(e2) {
            var t2;
            for (t2 in e2) if (e2.hasOwnProperty(t2)) return t2;
            return null;
          }, "n");
          t.exports = n;
        },
        {}
      ],
      132: [
        function(e, t) {
          "use strict";
          function n(e2, t2, n2) {
            if (!e2) return null;
            var o = {};
            for (var a in e2) r.call(e2, a) && (o[a] = t2.call(n2, e2[a], a, e2));
            return o;
          }
          __name(n, "n");
          var r = Object.prototype.hasOwnProperty;
          t.exports = n;
        },
        {}
      ],
      133: [
        function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = {};
            return function(n2) {
              return t2.hasOwnProperty(n2) ? t2[n2] : t2[n2] = e2.call(this, n2);
            };
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      134: [
        function(e, t) {
          "use strict";
          function n(e2) {
            r(e2 && !/[^a-z0-9_]/.test(e2));
          }
          __name(n, "n");
          var r = e("./invariant");
          t.exports = n;
        },
        { "./invariant": 124 }
      ],
      135: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return o(r.isValidElement(e2)), e2;
          }
          __name(n, "n");
          var r = e("./ReactElement"), o = e("./invariant");
          t.exports = n;
        },
        { "./ReactElement": 50, "./invariant": 124 }
      ],
      136: [
        function(e, t) {
          "use strict";
          var n = e("./ExecutionEnvironment"), r = /^[ \r\n\t\f]/, o = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/, a = /* @__PURE__ */ __name(function(e2, t2) {
            e2.innerHTML = t2;
          }, "a");
          if (n.canUseDOM) {
            var i = document.createElement("div");
            i.innerHTML = " ", "" === i.innerHTML && (a = /* @__PURE__ */ __name(function(e2, t2) {
              if (e2.parentNode && e2.parentNode.replaceChild(e2, e2), r.test(t2) || "<" === t2[0] && o.test(t2)) {
                e2.innerHTML = "" + t2;
                var n2 = e2.firstChild;
                1 === n2.data.length ? e2.removeChild(n2) : n2.deleteData(0, 1);
              } else e2.innerHTML = t2;
            }, "a"));
          }
          t.exports = a;
        },
        { "./ExecutionEnvironment": 22 }
      ],
      137: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            if (e2 === t2) return true;
            var n2;
            for (n2 in e2)
              if (e2.hasOwnProperty(n2) && (!t2.hasOwnProperty(n2) || e2[n2] !== t2[n2]))
                return false;
            for (n2 in t2)
              if (t2.hasOwnProperty(n2) && !e2.hasOwnProperty(n2)) return false;
            return true;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      138: [
        function(e, t) {
          "use strict";
          function n(e2, t2) {
            return e2 && t2 && e2.type === t2.type && e2.key === t2.key && e2._owner === t2._owner ? true : false;
          }
          __name(n, "n");
          t.exports = n;
        },
        {}
      ],
      139: [
        function(e, t) {
          function n(e2) {
            var t2 = e2.length;
            if (r(
              !Array.isArray(e2) && ("object" == typeof e2 || "function" == typeof e2)
            ), r("number" == typeof t2), r(0 === t2 || t2 - 1 in e2), e2.hasOwnProperty)
              try {
                return Array.prototype.slice.call(e2);
              } catch (n2) {
              }
            for (var o = Array(t2), a = 0; t2 > a; a++) o[a] = e2[a];
            return o;
          }
          __name(n, "n");
          var r = e("./invariant");
          t.exports = n;
        },
        { "./invariant": 124 }
      ],
      140: [
        function(e, t) {
          "use strict";
          function n(e2) {
            return d[e2];
          }
          __name(n, "n");
          function r(e2, t2) {
            return e2 && null != e2.key ? a(e2.key) : t2.toString(36);
          }
          __name(r, "r");
          function o(e2) {
            return ("" + e2).replace(f, n);
          }
          __name(o, "o");
          function a(e2) {
            return "$" + o(e2);
          }
          __name(a, "a");
          function i(e2, t2, n2) {
            return null == e2 ? 0 : h(e2, "", 0, t2, n2);
          }
          __name(i, "i");
          var s = e("./ReactElement"), u = e("./ReactInstanceHandles"), c = e("./invariant"), l = u.SEPARATOR, p = ":", d = { "=": "=0", ".": "=1", ":": "=2" }, f = /[=.:]/g, h = /* @__PURE__ */ __name(function(e2, t2, n2, o2, i2) {
            var u2, d2, f2 = 0;
            if (Array.isArray(e2))
              for (var m = 0; m < e2.length; m++) {
                var v = e2[m];
                u2 = t2 + (t2 ? p : l) + r(v, m), d2 = n2 + f2, f2 += h(v, u2, d2, o2, i2);
              }
            else {
              var g = typeof e2, y = "" === t2, E = y ? l + r(e2, 0) : t2;
              if (null == e2 || "boolean" === g) o2(i2, null, E, n2), f2 = 1;
              else if ("string" === g || "number" === g || s.isValidElement(e2))
                o2(i2, e2, E, n2), f2 = 1;
              else if ("object" === g) {
                c(!e2 || 1 !== e2.nodeType);
                for (var C in e2)
                  e2.hasOwnProperty(C) && (u2 = t2 + (t2 ? p : l) + a(C) + p + r(e2[C], 0), d2 = n2 + f2, f2 += h(e2[C], u2, d2, o2, i2));
              }
            }
            return f2;
          }, "h");
          t.exports = i;
        },
        {
          "./ReactElement": 50,
          "./ReactInstanceHandles": 58,
          "./invariant": 124
        }
      ],
      141: [
        function(e, t) {
          "use strict";
          var n = e("./emptyFunction"), r = n;
          t.exports = r;
        },
        { "./emptyFunction": 105 }
      ]
    },
    {},
    [1]
  )(1);
}();

// lib/create-component.js
function createClass(spec) {
  const { initialState = {} } = spec;
  spec.getInitialState = () => initialState;
  spec.onMount && (spec.componentDidMount = function(...args) {
    this.onMount(...args);
  });
  spec.onUpdate && (spec.componentDidUpdate = function(...args) {
    this.onUpdate(...args);
  });
  return react_0_12_min_default.createClass(spec);
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
var Admin_default = react_0_12_min_default.createClass({
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
    return /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "underlay", hidden: this.state.hidden, onClick: this.close }, /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "overlay", onClick: stopPropagation }, /* @__PURE__ */ react_0_12_min_default.createElement("button", { className: "logout", onClick: this.reset }, "Log out"), /* @__PURE__ */ react_0_12_min_default.createElement("h1", null, "Weblog administration settings"), /* @__PURE__ */ react_0_12_min_default.createElement("table", null, /* @__PURE__ */ react_0_12_min_default.createElement("tr", null, /* @__PURE__ */ react_0_12_min_default.createElement("td", null, "Your github username:"), /* @__PURE__ */ react_0_12_min_default.createElement("td", null, /* @__PURE__ */ react_0_12_min_default.createElement(
      "input",
      {
        type: "text",
        placeholder: "yourname",
        value: this.state.user,
        onChange: (evt) => this.update(`user`, evt)
      }
    ))), /* @__PURE__ */ react_0_12_min_default.createElement("tr", null, /* @__PURE__ */ react_0_12_min_default.createElement("td", null, "github repository:"), /* @__PURE__ */ react_0_12_min_default.createElement("td", null, /* @__PURE__ */ react_0_12_min_default.createElement(
      "input",
      {
        type: "text",
        placeholder: "yourname.github.io",
        value: this.state.repo,
        onChange: (evt) => this.update(`repo`, evt)
      }
    ))), /* @__PURE__ */ react_0_12_min_default.createElement("tr", null, /* @__PURE__ */ react_0_12_min_default.createElement("td", null, "repository branch:"), /* @__PURE__ */ react_0_12_min_default.createElement("td", null, /* @__PURE__ */ react_0_12_min_default.createElement(
      "input",
      {
        type: "text",
        placeholder: "master",
        value: this.state.branch,
        onChange: (evt) => this.update(`branch`, evt)
      }
    ))), /* @__PURE__ */ react_0_12_min_default.createElement("tr", null, /* @__PURE__ */ react_0_12_min_default.createElement("td", null, "path to weblog:"), /* @__PURE__ */ react_0_12_min_default.createElement("td", null, /* @__PURE__ */ react_0_12_min_default.createElement(
      "input",
      {
        type: "text",
        value: this.state.path,
        onChange: (evt) => this.update(`path`, evt)
      }
    )))), /* @__PURE__ */ react_0_12_min_default.createElement("h1", null, "Github", " ", /* @__PURE__ */ react_0_12_min_default.createElement("a", { href: "https://github.com/settings/applications" }, "Personal Access Token")), /* @__PURE__ */ react_0_12_min_default.createElement(
      "input",
      {
        type: "text",
        className: "token",
        value: this.state.token,
        onChange: (evt) => this.update(`token`, evt)
      }
    ), /* @__PURE__ */ react_0_12_min_default.createElement("p", null, "Don't give this token more permissions than necessary! gh-weblog only needs repo access!")));
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
  var src = src.replace(/^ +$/gm, ""), next, loose, cap, bull, b, item, space, i, l;
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
      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = "right";
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = "center";
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = "left";
        } else {
          item.align[i] = null;
        }
      }
      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
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
      l = cap.length;
      i = 0;
      for (; i < l; i++) {
        item = cap[i];
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, "");
        if (~item.indexOf("\n ")) {
          space -= item.length;
          item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "");
        }
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join("\n") + src;
            i = l - 1;
          }
        }
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
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
      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = "right";
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = "center";
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = "left";
        } else {
          item.align[i] = null;
        }
      }
      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
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
  var out = "", l = text.length, i = 0, ch;
  for (; i < l; i++) {
    ch = text.charCodeAt(i);
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
    } catch (e) {
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
      var header = "", body = "", i, row, cell, flags, j;
      cell = "";
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);
      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];
        cell = "";
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(this.inline.output(row[j]), {
            header: false,
            align: this.token.align[j]
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
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
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
  var i = 1, target2, key;
  for (; i < arguments.length; i++) {
    target2 = arguments[i];
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
    var highlight = opt.highlight, tokens, pending, i = 0;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }
    pending = tokens.length;
    var done = /* @__PURE__ */ __name(function() {
      var out, err;
      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    }, "done");
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!pending) return done();
    for (; i < tokens.length; i++) {
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
      })(tokens[i]);
    }
    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/chjj/marked.";
    if ((opt || marked.defaults).silent) {
      return "<p>An error occured:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
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

// components/MarkDown.jsx
var MarkDown_default = react_0_12_min_default.createClass({
  render() {
    let { text } = this.props;
    text = text.replace(/^#\s+[^\n]+\n+/, ``);
    let html = marked_default(text);
    if (!this.props.editable && !this.props.singleton) {
      if (text.length > 1500) {
        let cut = html.indexOf(`<p>`);
        for (let i = 0; i < 5; i++) {
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
    return /* @__PURE__ */ react_0_12_min_default.createElement(
      "div",
      {
        ref: "post",
        className: "post",
        hidden: this.props.hidden,
        onClick: this.props.onClick,
        dangerouslySetInnerHTML: { __html: html }
      }
    );
  },
  getHTML() {
    return this.refs.post.getDOMNode().innerHTML;
  }
});

// components/Editor.jsx
var Editor_default = react_0_12_min_default.createClass({
  getInitialState() {
    return { text: "" };
  },
  componentDidMount() {
    this.setState({ text: this.props.text });
  },
  render() {
    return /* @__PURE__ */ react_0_12_min_default.createElement(
      "textarea",
      {
        ref: "textarea",
        className: "editor",
        hidden: this.props.hidden,
        value: this.state.text,
        onChange: this.record
      }
    );
  },
  setText(text) {
    const textarea = this.refs.textarea.getDOMNode();
    this.setState({ text }, () => textarea.focus());
  },
  record(evt) {
    this.setState({ text: evt.target.value });
    this.props.update(evt);
  }
});

// components/Tags.jsx
var Tags_default = react_0_12_min_default.createClass({
  render() {
    const tags = this.props.tags.map(function(tag, idx) {
      return /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "tag", key: idx }, tag);
    });
    return /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "tags", onClick: this.updateTags }, tags);
  },
  updateTags() {
    if (this.props.disabled) return;
    let tags = this.props.tags.join(", ");
    const newTags = prompt("Edit the post tags", tags);
    if (newTags) {
      tags = newTags.split(",").map((v) => v.trim());
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
  onMount() {
    const { metaData, postData } = this.props;
    const update = { ...metaData, postData };
    this.setState(update);
    const root = document.querySelector(`:root`);
    root.addEventListener(`click`, (evt) => {
      if (evt.target !== root) return;
      this.view();
    });
  },
  render() {
    const { props, state } = this;
    const { singleton, editable } = props;
    const title2 = utils_default.titleReplace(state.title);
    let deleteButton;
    if (props.editable) {
      deleteButton = /* @__PURE__ */ react_0_12_min_default.createElement("button", { className: "admin delete button", onClick: this.delete }, "remove entry");
    }
    const posted = new Date(state.published).toLocaleString();
    const updated = new Date(state.updated).toLocaleString();
    return /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "entry", id: `gh-weblog-${state.created}` }, deleteButton, /* @__PURE__ */ react_0_12_min_default.createElement("header", null, /* @__PURE__ */ react_0_12_min_default.createElement("h1", null, /* @__PURE__ */ react_0_12_min_default.createElement(
      "a",
      {
        href: `${singleton ? `../../../` : ``}pages/${state.created}/${title2}`
      },
      state.title
    )), /* @__PURE__ */ react_0_12_min_default.createElement("h2", null, "Originally posted on ", posted, ", last updated on ", updated)), /* @__PURE__ */ react_0_12_min_default.createElement(
      MarkDown_default,
      {
        ref: "markdown",
        hidden: state.editing,
        text: state.postData,
        onClick: this.edit,
        singleton,
        editable
      }
    ), /* @__PURE__ */ react_0_12_min_default.createElement(
      Editor_default,
      {
        ref: "editor",
        hidden: !state.editing,
        text: this.getPostData(),
        update: this.update,
        view: this.view,
        delete: this.delete
      }
    ), /* @__PURE__ */ react_0_12_min_default.createElement("a", { className: "comments", href: props.issues }, "leave a comment on github"), /* @__PURE__ */ react_0_12_min_default.createElement(
      Tags_default,
      {
        disabled: !props.editable,
        tags: state.tags,
        onChange: this.updateTags
      }
    ));
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
  getHTMLData() {
    return this.refs.markdown.getHTML();
  },
  edit(evt) {
    if (this.props.editable) {
      this.refs.editor.setText(this.getPostData());
      this.setState({ editing: true });
    }
  },
  update(evt) {
    const lines = evt.target.value.split("\n");
    const title2 = lines.splice(0, 1)[0].replace(/^# */, "").trim();
    const postData = lines.join("\n").trim();
    this.setState({ title: title2, postData, updated: Date.now() });
  },
  view() {
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
  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
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
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
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
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
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
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
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
    function(_, expression, literal) {
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
    return Array.isArray(data.errors) ? `${data.message}: ${data.errors.map((v) => JSON.stringify(v)).join(", ")}${suffix2}` : `${data.message}${suffix2}`;
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
` + data.errors.map((e) => ` - ${e.message}`).join("\n");
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
    for (let i = 0; i < classConstructor.plugins.length; ++i) {
      Object.assign(this, classConstructor.plugins[i](this, options));
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
    atob(data).split("").map(function(c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
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
      (/* @__PURE__ */ __name(async function checkDeploy(resolve2) {
        const { status } = (await octokit.request(`GET /repos/${user}/${repo}/actions/runs`)).data.workflow_runs[0];
        if (status === `completed`) return resolve2();
        setTimeout(() => checkDeploy(resolve2), 1e4);
      }, "checkDeploy"))(resolve);
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
        content: `<meta http-equiv="refresh" content="0; url=../../../index.html?postid=${created}">`
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
  var d = new Date(parseInt(timestamp, 10));
  var s = d.toISOString();
  var id2 = s.replace("T", "-").replace(/\..*/, "").replace(/\:/g, "-");
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
      (e) => e.tags?.forEach((tag) => tags.add(tag))
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
  },
  render() {
    const { state } = this;
    if (!!state.singleton) {
      return this.renderContent();
    }
    const postButton = state.authenticated ? /* @__PURE__ */ react_0_12_min_default.createElement("button", { className: "admin post button", onClick: this.createEntry }, "new entry") : false;
    const adminButton = /* @__PURE__ */ react_0_12_min_default.createElement(
      "button",
      {
        className: `authenticate ${state.deploying ? `deploying` : ``}`,
        onClick: this.showSettings,
        onClose: this.bindSettings
      },
      "admin"
    );
    const moreButton = /* @__PURE__ */ react_0_12_min_default.createElement("button", { className: "more-posts", onClick: this.more }, "Load more posts");
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
    return /* @__PURE__ */ react_0_12_min_default.createElement("div", { ref: "weblog", className: "gh-weblog" }, this.state.pending ? /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "pending" }, "pending...") : null, this.generateToC(), this.generateTagList(), /* @__PURE__ */ react_0_12_min_default.createElement(
      Admin_default,
      {
        ref: "admin",
        hidden: "true",
        onClose: this.bindSettings,
        onLogout: this.onLogOut
      }
    ), adminButton, postButton, this.generateEntries(entry), moreButton);
  },
  generateToC() {
    const { singleton } = this.state;
    return /* @__PURE__ */ react_0_12_min_default.createElement("nav", { className: "toc" }, /* @__PURE__ */ react_0_12_min_default.createElement("table", null, Object.values(this.state.index).reverse().map(({ title: title2, created, tags }) => {
      const date = new Date(created);
      let when = date.toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric"
      });
      when = when.split(` `)[1] + " " + when.split(` `)[0];
      return /* @__PURE__ */ react_0_12_min_default.createElement("tr", null, /* @__PURE__ */ react_0_12_min_default.createElement("td", { className: "year" }, date.getFullYear()), /* @__PURE__ */ react_0_12_min_default.createElement("td", { className: "when" }, when), /* @__PURE__ */ react_0_12_min_default.createElement("td", null, /* @__PURE__ */ react_0_12_min_default.createElement(
        "a",
        {
          href: `${singleton ? `../../` : ``}pages/${created}/${utils_default.titleReplace(title2)}`
        },
        title2
      )));
    })));
  },
  generateTagList() {
    return null;
    const { tags } = this.state;
    if (!tags) return;
    return /* @__PURE__ */ react_0_12_min_default.createElement("div", { className: "taglist" }, tags.sort().map((tag) => /* @__PURE__ */ react_0_12_min_default.createElement("span", null, tag.toLowerCase())));
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
    return /* @__PURE__ */ react_0_12_min_default.createElement("main", null, entries.map((entry2) => {
      return entry2.metaData.draft && !authenticated ? null : /* @__PURE__ */ react_0_12_min_default.createElement(
        Entry_default,
        {
          key: entry2.metaData.id,
          id: entry2.metaData.id,
          ref: entry2.metaData.id,
          issues,
          metaData: entry2.metaData,
          postData: entry2.postData,
          singleton,
          editable: !singleton && authenticated,
          onSave: this.saveEntry,
          onDelete: this.deleteEntry
        }
      );
    }));
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
    this.refs.admin.show();
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
    this.setState({ pending: true, deploying: true });
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
        this.setState({ pending: false }, async () => {
          await connector.waitForDeploy();
          this.setState({ deploying: false });
        });
      }
    );
  },
  async deleteEntry(entry) {
    const { connector } = this;
    if (confirm("really delete post?")) {
      this.setState({ pending: true, deploying: true }, () => {
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
            this.setState({ pending: false }, async () => {
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
    }).filter((v) => !!v).join("\n");
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
  react_0_12_min_default.render(
    react_0_12_min_default.createElement(WebLog_default, {
      ...settings,
      onTags: handleTags,
      onIndex: handleIndex
    }),
    target
  );
}
