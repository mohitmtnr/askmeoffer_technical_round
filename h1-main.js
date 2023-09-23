!(function (e) {
  function t(t) {
    for (
      var r, u, i = t[0], s = t[1], c = t[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (u = i[d]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && f.push(o[u][0]),
        (o[u] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (l && l(t); f.length; ) f.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== o[s] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 3: 0 },
    a = [];
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.m = e),
    (u.c = r),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "");
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var l = s;
  a.push([2011, 0, 1]), n();
})({
  1549: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(19),
      u = (r = a) && r.__esModule ? r : { default: r },
      i = n(10),
      s = n(33),
      c = n(421),
      l = n(124),
      d = n(40),
      f = n(68),
      p = n(48),
      v = n(3105),
      g = n(134);
    var m = (0, o.createSelector)(
        i.storesSelectors.selectCurrentStore(),
        c.sessionSelectors.selectCurrentStoreSession(),
        function (e, t) {
          return u.default.isBlockingCDNLogic(e, t);
        }
      ),
      y = (0, o.createSelector)(
        i.storesSelectors.selectCurrentStore(),
        function (e) {
          return (
            e.tips &&
            e.tips.configuration &&
            e.tips.configuration.blacklistDefaultLaunchpadPathnameByStoreId
          );
        },
        function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = e && t.includes(e.id);
          return n;
        }
      ),
      h = (0, o.createSelector)(
        function (e) {
          return i.storesSelectors.selectCurrentStore()(e);
        },
        function (e) {
          return !!(e && e.tipsConfig && e.tipsConfig.isLaunchpadDisabled);
        }
      ),
      _ = (0, o.createSelector)(
        function (e) {
          return i.storesSelectors.selectCurrentStore()(e);
        },
        function (e) {
          return !!(e && e.tipsConfig && e.tipsConfig.isPdpDisabled);
        }
      ),
      b = (0, o.createSelector)(
        i.storesSelectors.selectCurrentStore(),
        function (e) {
          return (
            e.tips &&
            e.tips.configuration &&
            e.tips.configuration.blacklistedDynamicUrlsByStoreId
          );
        },
        function (e, t) {
          var n = (e || {}).id;
          if (t && t[n]) {
            var r = window && window.location && window.location.href;
            if (
              (t[n] || []).some(function (e) {
                return r.startsWith(e);
              })
            )
              return !0;
          }
          return !1;
        }
      ),
      S = (0, o.createSelector)(
        i.storesSelectors.selectCurrentStore(),
        function (e) {
          return (
            e.tips &&
            e.tips.configuration &&
            e.tips.configuration.blacklistedStaticUrlsByStoreId
          );
        },
        function (e, t) {
          var n = (e || {}).id;
          if (t && t[n]) {
            var r = window && window.location && window.location.href;
            if ((t[n] || []).includes(r)) return !0;
          }
          return !1;
        }
      ),
      P = (0, o.createSelector)(
        i.storesSelectors.selectCurrentStore(),
        function (e) {
          return (
            e.tips &&
            e.tips.configuration &&
            e.tips.configuration.allowlistDynamicUrlsByStoreId
          );
        },
        function (e) {
          return (
            e.tips &&
            e.tips.configuration &&
            e.tips.configuration.allowlistStaticUrlsByStoreId
          );
        },
        function (e, t, n) {
          var r = e && e.id,
            o = !1,
            a = window && window.location && window.location.href;
          if (t && t[r]) {
            if (
              (t[r] || []).some(function (e) {
                return a.startsWith(e);
              })
            )
              return !0;
            o = !0;
          }
          if (n && n[r]) {
            if ((n[r] || []).includes(a)) return !0;
            o = !0;
          }
          return !o;
        }
      ),
      w = (0, o.createSelector)(
        l.deviceSelectors.selectDeviceSetting("tipsLoggedOutDisabled"),
        s.userSelectors.selectSetting("tipsEnabled"),
        s.userSelectors.selectUser(),
        function (e, t, n) {
          return n && n.isLoggedIn
            ? !!t
              ? { tipsEnabledByUser: !0 }
              : void 0 === t
              ? { tipsEnabledByUser: !1, reason: "tips_enabled_undefined" }
              : { tipsEnabledByUser: !1, reason: "tips_enabled_false" }
            : e
            ? { tipsEnabledByUser: !1, reason: "tips_logged_out_disabled" }
            : { tipsEnabledByUser: !0 };
        }
      ),
      x = (0, o.createSelector)(
        function (e) {
          return f.experimentSelectors.selectVariant(
            p.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP
          )(e);
        },
        function (e) {
          return "control" === e;
        }
      ),
      E = (0, o.createSelector)(
        d.pageSelectors.selectIsHomePage,
        d.pageSelectors.selectIsProductPage,
        m,
        y,
        h,
        b,
        S,
        l.deviceSelectors.selectIsFirstPageAfterInstall(),
        i.storesSelectors.selectCurrentStoreStandDown,
        P,
        _,
        x,
        w,
        v.selectShouldSuppressTips,
        function (e, t, n, r, o, a, u, i, s, c, l, d, f, p) {
          var v = s.standDown,
            m = f.tipsEnabledByUser,
            y = f.reason,
            h = p.suppressed,
            _ = p.reason,
            b = [];
          return (
            n && b.push(g.HIDE_TIPS_REASONS.BLOCKING_CDN),
            ["nopopup", "suspend"].includes(v) &&
              b.push(g.HIDE_TIPS_REASONS.STAND_DOWN),
            e || t || b.push(g.HIDE_TIPS_REASONS.INVALID_PAGE_TYPE),
            d && b.push(g.HIDE_TIPS_REASONS.HOLDOUT_GROUP),
            m || b.push(g.HIDE_TIPS_REASONS.DISABLED_BY_USER),
            h && b.push(g.HIDE_TIPS_REASONS.SUPPRESSED),
            a && b.push(g.HIDE_TIPS_REASONS.DYNAMIC_URL_BLACKLISTED),
            u && b.push(g.HIDE_TIPS_REASONS.STATIC_URL_BLACKLISTED),
            e &&
              (r &&
                b.push(g.HIDE_TIPS_REASONS.DEFAULT_LAUNCHPAD_PATH_BLACKLISTED),
              o && b.push(g.HIDE_TIPS_REASONS.STORE_LAUNCHPAD_DISABLED),
              i && b.push(g.HIDE_TIPS_REASONS.FIRST_PAGE_AFTER_INSTALL),
              c ||
                b.push(
                  g.HIDE_TIPS_REASONS.CANT_SHOW_LAUNCHPAD_WITH_ALLOW_LIST
                )),
            t && l && b.push(g.HIDE_TIPS_REASONS.STORE_PDP_DISABLED),
            {
              canRunTips: 0 === b.length,
              hideReasons: b,
              suppressionReason: _,
              disabledByUserReason: y,
            }
          );
        }
      );
    t.default = { selectCanRunTips: E };
  },
  1550: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(1461),
      u = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return (0, u.default)(
        e,
        o.tipsSelectors.selectAutopopDisabledCategoriesForCurrentStore(e)
      );
    };
  },
  1551: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = n(0),
      a = d(o),
      u = d(n(1)),
      i = n(6),
      s = d(n(15)),
      c = n(305),
      l = n(134);
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var v = (function (e) {
      function t() {
        var e, n, r;
        f(this, t);
        for (var o = arguments.length, a = Array(o), u = 0; u < o; u++)
          a[u] = arguments[u];
        return (
          (n = r =
            p(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
          (r.state = { error: null }),
          p(r, n)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, e),
        r(
          t,
          [
            {
              key: "componentDidCatch",
              value: function (e) {
                var t = this.props,
                  n = t.sendSdataEvent,
                  r = t.sdataAction;
                n(
                  e,
                  void 0 === r ? l.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR : r
                ),
                  s.default.error(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.children;
                return this.state.error
                  ? a.default.createElement(o.Fragment, null)
                  : e;
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromError",
              value: function (e) {
                return { error: e };
              },
            },
          ]
        ),
        t
      );
    })(a.default.Component);
    (v.propTypes = {
      sendSdataEvent: u.default.func.isRequired,
      sdataAction: u.default.string.isRequired,
      children: u.default.oneOfType([
        u.default.node,
        u.default.arrayOf(u.default.node),
      ]),
    }),
      (v.defaultProps = { children: null }),
      (t.default = (0, i.connect)(null, function (e) {
        return {
          sendSdataEvent: function (t, n) {
            return e(
              (0, c.sdataTipsBadgeEvent)({
                action: n,
                event: "error",
                errorMessage: t.message,
              })
            );
          },
        };
      })(v));
  },
  1552: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.addClassName = p),
      (t.addEvent = function (e, t, n, r) {
        if (!e) return;
        var o = s({ capture: !0 }, r);
        e.addEventListener
          ? e.addEventListener(t, n, o)
          : e.attachEvent
          ? e.attachEvent("on" + t, n)
          : (e["on" + t] = n);
      }),
      (t.addUserSelectStyles = function (e) {
        if (!e) return;
        var t = e.getElementById("react-draggable-style-el");
        t ||
          (((t = e.createElement("style")).type = "text/css"),
          (t.id = "react-draggable-style-el"),
          (t.innerHTML =
            ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
          (t.innerHTML +=
            ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
          e.getElementsByTagName("head")[0].appendChild(t));
        e.body && p(e.body, "react-draggable-transparent-selection");
      }),
      (t.createCSSTransform = function (e, t) {
        var n = f(e, t, "px");
        return c({}, (0, a.browserPrefixToKey)("transform", a.default), n);
      }),
      (t.createSVGTransform = function (e, t) {
        return f(e, t, "");
      }),
      (t.getTouch = function (e, t) {
        return (
          (e.targetTouches &&
            (0, o.findInArray)(e.targetTouches, function (e) {
              return t === e.identifier;
            })) ||
          (e.changedTouches &&
            (0, o.findInArray)(e.changedTouches, function (e) {
              return t === e.identifier;
            }))
        );
      }),
      (t.getTouchIdentifier = function (e) {
        if (e.targetTouches && e.targetTouches[0])
          return e.targetTouches[0].identifier;
        if (e.changedTouches && e.changedTouches[0])
          return e.changedTouches[0].identifier;
      }),
      (t.getTranslation = f),
      (t.innerHeight = function (e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (
          (t -= (0, o.int)(n.paddingTop)), (t -= (0, o.int)(n.paddingBottom))
        );
      }),
      (t.innerWidth = function (e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (
          (t -= (0, o.int)(n.paddingLeft)), (t -= (0, o.int)(n.paddingRight))
        );
      }),
      (t.matchesSelector = d),
      (t.matchesSelectorAndParentsTo = function (e, t, n) {
        var r = e;
        do {
          if (d(r, t)) return !0;
          if (r === n) return !1;
          r = r.parentNode;
        } while (r);
        return !1;
      }),
      (t.offsetXYFromParent = function (e, t, n) {
        var r =
            t === t.ownerDocument.body
              ? { left: 0, top: 0 }
              : t.getBoundingClientRect(),
          o = (e.clientX + t.scrollLeft - r.left) / n,
          a = (e.clientY + t.scrollTop - r.top) / n;
        return { x: o, y: a };
      }),
      (t.outerHeight = function (e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (
          (t += (0, o.int)(n.borderTopWidth)),
          (t += (0, o.int)(n.borderBottomWidth))
        );
      }),
      (t.outerWidth = function (e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (
          (t += (0, o.int)(n.borderLeftWidth)),
          (t += (0, o.int)(n.borderRightWidth))
        );
      }),
      (t.removeClassName = v),
      (t.removeEvent = function (e, t, n, r) {
        if (!e) return;
        var o = s({ capture: !0 }, r);
        e.removeEventListener
          ? e.removeEventListener(t, n, o)
          : e.detachEvent
          ? e.detachEvent("on" + t, n)
          : (e["on" + t] = null);
      }),
      (t.removeUserSelectStyles = function (e) {
        if (!e) return;
        try {
          if (
            (e.body && v(e.body, "react-draggable-transparent-selection"),
            e.selection)
          )
            e.selection.empty();
          else {
            var t = (e.defaultView || window).getSelection();
            t && "Caret" !== t.type && t.removeAllRanges();
          }
        } catch (e) {}
      });
    var o = n(791),
      a = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(o, i, s)
              : (o[i] = e[i]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(3149));
    function u(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (u = function (e) {
        return e ? n : t;
      })(e);
    }
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function c(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var l = "";
    function d(e, t) {
      return (
        l ||
          (l = (0, o.findInArray)(
            [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ],
            function (t) {
              return (0, o.isFunction)(e[t]);
            }
          )),
        !!(0, o.isFunction)(e[l]) && e[l](t)
      );
    }
    function f(e, t, n) {
      var r = e.x,
        o = e.y,
        a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
      if (t) {
        var u = "".concat("string" == typeof t.x ? t.x : t.x + n),
          i = "".concat("string" == typeof t.y ? t.y : t.y + n);
        a = "translate(".concat(u, ", ").concat(i, ")") + a;
      }
      return a;
    }
    function p(e, t) {
      e.classList
        ? e.classList.add(t)
        : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
          (e.className += " ".concat(t));
    }
    function v(e, t) {
      e.classList
        ? e.classList.remove(t)
        : (e.className = e.className.replace(
            new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
            ""
          ));
    }
  },
  1553: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(747),
      a = (r = o) && r.__esModule ? r : { default: r },
      u = n(40),
      i = n(28),
      s = n(459);
    t.default = function () {
      return function (e, t) {
        var n = u.pageSelectors.selectMostRecentPageId()(t()),
          r = (0, a.default)();
        e(i.tipsActions.loadContainer({ containerId: r })),
          e(u.pageActions.setContainerId({ pageId: n, containerId: r })),
          e((0, s.sdataTipsContainerEvent)({ event: "pre-init" })),
          e((0, s.sdataTipsContainerEvent)({ event: "init" }));
      };
    };
  },
  1554: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(40),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      var t = ((0, u.default)(e) || {}).id;
      if (!t) return !1;
      var n = o.pageSelectors.selectMostRecentPageId()(e);
      return t === (o.pageSelectors.selectPageByPageId(n)(e) || {}).containerId;
    };
  },
  1555: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(40),
      o = d(n(1553)),
      a = n(28),
      u = d(n(792)),
      i = n(57),
      s = d(n(1948)),
      c = d(n(1554)),
      l = d(n(3177));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, d) {
          var f, p, v;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e && !(0, l.default)(e)(d())) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (
                      (f = r.pageSelectors.selectCurrentPageId()(d())),
                      ((0, i.selectScrapedProductByPageId)(f)(d()) || {})
                        .parentId === e.parentId || (0, c.default)(d())
                        ? ((p = r.pageSelectors.selectContainerIdByPageId(f)(
                            d()
                          )),
                          (v = r.pageSelectors.selectMostRecentPageId()(d())),
                          n(a.tipsActions.setLoading({ containerId: p })),
                          n(
                            r.pageActions.setContainerId({
                              containerId: p,
                              pageId: v,
                            })
                          ))
                        : n((0, o.default)()),
                      n(r.pageActions.updateCurrentPage()),
                      (t.next = 8),
                      n((0, s.default)(e))
                    );
                  case 8:
                    n((0, u.default)());
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  1928: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a,
      u,
      i = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      s =
        ((r = k(
          regeneratorRuntime.mark(function e(t) {
            var n,
              r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e3;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        h.default.waitForElement(t, { timeout: o })
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        (r = j(n.text())),
                        e.abrupt("return", h.default.cleanPrice(r))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return r.apply(this, arguments);
        }),
      c =
        ((o = k(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o,
              a,
              u,
              i = this;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (void 0 !== window.MutationObserver) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (o = new MutationObserver(
                          k(
                            regeneratorRuntime.mark(function e() {
                              var n, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), L(t);
                                      case 2:
                                        return (
                                          (n = e.sent),
                                          (e.next = 5),
                                          T.default.getFeatureFlag(
                                            "gift_cards_use_remote_iframe"
                                          )
                                        );
                                      case 5:
                                        if (!e.sent) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (o = P.default.getCurrent()),
                                          (e.next = 10),
                                          A.default.request(
                                            C.gcMessageNames
                                              .giftCardsCartPriceChange,
                                            {
                                              cartPrice: n,
                                              tabId: o.id,
                                              prioritized: r,
                                              storeId: t.id,
                                              storeName: t.name,
                                            }
                                          )
                                        );
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                i
                              );
                            })
                          )
                        )),
                        (e.next = 5),
                        h.default.waitForElement(n, { timeout: 3e3 })
                      );
                    case 5:
                      return (
                        (e.prev = 5),
                        (e.next = 8),
                        T.default.getFeatureFlag(
                          "gift_card_deals_observe_body_for_total"
                        )
                      );
                    case 8:
                      (a = e.sent),
                        (u = a ? document.body : document.querySelector(n)),
                        o.observe(u, {
                          characterData: !0,
                          attributes: !1,
                          childList: !0,
                          subtree: !0,
                        }),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(5)),
                        m.default.error(
                          "Error attaching mutation observer for store " +
                            t.id +
                            " with selector " +
                            n
                        );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[5, 13]]
            );
          })
        )),
        function (e, t, n) {
          return o.apply(this, arguments);
        }),
      l =
        ((a = k(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o, a, u;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Promise.all([
                          O.default.getReminder(t),
                          y.default.get(
                            "honey-pay-now:gift-card-deal-reminder:" + t
                          ),
                        ])
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        (r = i(n, 2)),
                        (o = r[0]),
                        (a = r[1]),
                        (u = null),
                        a && (u = a.isGiftcardTipEngaged),
                        e.abrupt("return", !(!o && !u))
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return a.apply(this, arguments);
        }),
      d =
        ((u = k(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = P.default.getCurrent()), (e.next = 3), l(t.id)
                      );
                    case 3:
                      return (
                        (o = e.sent),
                        (e.next = 6),
                        A.default.request(
                          C.gcMessageNames.giftCardsFindSavingsClosed,
                          {
                            cartPrice: n,
                            tabId: r.id,
                            prioritized: !0,
                            storeId: t.id,
                            storeName: t.name,
                            isReminderSet: o,
                          }
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e, t) {
          return u.apply(this, arguments);
        });
    t.getCartPrice = L;
    var f = M(n(0)),
      p = M(n(49)),
      v = M(n(322)),
      g = M(n(12)),
      m = M(n(15)),
      y = M(n(38)),
      h = M(n(22)),
      _ = M(n(26)),
      b = M(n(24)),
      S = M(n(19)),
      P = M(n(32)),
      w = M(n(59)),
      x = M(n(4)),
      E = M(n(3092)),
      O = M(n(1923)),
      I = n(760),
      T = M(n(101)),
      C = n(1929),
      A = M(C),
      R = M(n(3093));
    function M(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function k(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var N,
      D = /[\d+][,.\d+]+/;
    function j(e) {
      var t = e && e.match(D);
      if (t) return t[0];
    }
    function L(e) {
      return s(e.metadata.honeyPayCartPriceSelector);
    }
    function U(e) {
      [].forEach(function (t) {
        return g.default.send(
          "honey-pay-now:action:" + t,
          {
            action: I.HONEY_PAY_NOW_MESSAGES.SET_CART_PRICE,
            data: { cartPrice: e },
          },
          { background: !0 }
        );
      });
    }
    function B(e) {
      var t = (function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "body",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = document.querySelector("#" + e);
        if (!r) {
          ((r = document.createElement("div")).id = e), (r.style.cssText = n);
          var o = document.querySelector(t);
          o.appendChild(r);
        }
        return r;
      })("honeyPayNowContainer");
      p.default.render(f.default.createElement(R.default, { data: e }), t);
    }
    function F(e) {
      var t = e.allPageTypes;
      return E.default.isPaymentsViewPrioritized(t);
    }
    g.default.addListener(
      "current:product",
      ((N = k(
        regeneratorRuntime.mark(function e(t, n) {
          var r, o, a, u, i, s, c, l;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = n.data), (e.next = 3), P.default.getCurrent();
                  case 3:
                    (o = e.sent),
                      (a = o.id),
                      (u = r.partialObservation),
                      (i = u.price),
                      (s = u.url),
                      (c = r.productId),
                      (l = (0, v.default)(i).value()),
                      y.default.set("honey-pay-now:product:" + s + ":" + a, {
                        productPrice: l,
                        productId: c,
                      });
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function (e, t) {
        return N.apply(this, arguments);
      })
    ),
      g.default.addListener("honey-pay-now:action:ui", function (e, t) {
        switch (t && t.action) {
          case I.HONEY_PAY_NOW_MESSAGES.SET_PAY_NOW_CARD_VISIBILITY:
            return _.default.open({
              pathname: "/honey-pay-now-card",
              query: {},
              state: { cardData: t.data.cardData },
              force: !0,
              feature: "honey-pay-now-card",
              surface: "popup",
            });
          case I.HONEY_PAY_NOW_MESSAGES.OPEN_PAY_NOW_AUTOPOP:
            return _.default.open({
              pathname: "/honey-pay-now-autopop",
              query: {},
              state: t.data,
              force: !0,
              feature: "honey-pay-now-autopop",
              surface: "popup",
            });
          default:
            throw new InvalidParametersError("Invalid action");
        }
      }),
      (function () {
        var e = this;
        Promise.all([
          new Promise(function (e) {
            g.default.addListener("gift-cards-app:ready", function () {
              return e();
            });
          }),
          new Promise(function (e) {
            g.default.addListener("find-savings:closed", function () {
              return e();
            });
          }),
        ])
          .then(
            k(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), S.default.getCurrent();
                        case 2:
                          if ((n = e.sent).id) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          return (e.next = 7), L(n);
                        case 7:
                          if ((r = e.sent)) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          return (
                            (e.next = 12),
                            T.default.getFeatureFlag(
                              "gift_cards_use_remote_iframe"
                            )
                          );
                        case 12:
                          if (!e.sent) {
                            e.next = 16;
                            break;
                          }
                          return (e.next = 16), d(n, r);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  e
                );
              })
            )
          )
          .catch(function () {
            return "";
          });
      })(),
      (function () {
        var e = this;
        g.default.addListener(
          "find-savings:complete",
          k(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), S.default.getCurrent();
                      case 2:
                        if ((n = e.sent).id) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        return (e.next = 7), L(n);
                      case 7:
                        if ((r = e.sent)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");
                      case 10:
                        return (
                          (e.next = 12),
                          T.default.getFeatureFlag(
                            "gift_cards_use_remote_iframe"
                          )
                        );
                      case 12:
                        if (!e.sent) {
                          e.next = 16;
                          break;
                        }
                        return (e.next = 16), d(n, r);
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                e
              );
            })
          )
        );
      })();
    var G,
      H = 0;
    g.default.addListener(
      "pageDetected:PAYMENTS",
      ((G = k(
        regeneratorRuntime.mark(function e(t, n) {
          var r,
            o,
            a,
            u,
            i,
            s,
            d,
            f,
            p,
            v = n.data;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!((r = Date.now()) - H < 5e3)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    H = r;
                  case 6:
                    return (e.next = 8), S.default.getCurrent();
                  case 8:
                    if ((o = e.sent).id) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("return");
                  case 11:
                    return (e.next = 13), L(o);
                  case 13:
                    if ((a = e.sent)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return");
                  case 16:
                    return (
                      (e.next = 18),
                      T.default.getFeatureFlag("gift_cards_use_remote_iframe")
                    );
                  case 18:
                    if (!e.sent) {
                      e.next = 41;
                      break;
                    }
                    return (e.next = 22), F(v);
                  case 22:
                    return (u = e.sent), (e.next = 25), w.default.getDeviceId();
                  case 25:
                    return (i = e.sent), (e.next = 28), l(o.id);
                  case 28:
                    return (
                      (s = e.sent), (e.next = 31), x.default.getCountryCode()
                    );
                  case 31:
                    return (
                      (d = e.sent), (e.next = 34), x.default.getUILanguage()
                    );
                  case 34:
                    return (f = e.sent), (e.next = 37), b.default.getInfo();
                  case 37:
                    (p = e.sent),
                      U(a),
                      c(o, o.metadata.honeyPayCartPriceSelector, u);
                    try {
                      B({
                        storeId: o.id,
                        deviceId: i,
                        browser: "ch",
                        extVersion: "16.2.5",
                        cartPrice: a,
                        prioritized: u,
                        isReminderSet: s,
                        language: f,
                        country: d,
                        user: p,
                      });
                    } catch (e) {
                      m.default.error("Error loading Honey Pay iframe: " + e);
                    }
                  case 41:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function (e, t) {
        return G.apply(this, arguments);
      })
    ),
      (t.default = {});
  },
  1929: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.gcMessageNames = void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(1850);
    var a = {
        extensionAuth: "extensionAuth",
        extensionRemoveIFrame: "extensionRemoveIFrame",
        extensionSendSDataEvent: "extensionSendSDataEvent",
        extensionUpdateStyles: "extensionUpdateStyles",
        extensionExperimentsGetVariant: "extensionExperimentsGetVariant",
        extensionExperimentsTrackImpression:
          "extensionExperimentsTrackImpression",
        extensionGetUserABGroup: "extensionGetUserABGroup",
        extensionGetI18nCountryCode: "extensionGetI18nCountryCode",
        extensionGetI18nMessage: "extensionGetI18nMessage",
        extensionSetGiftCardsEnabledForUser:
          "extensionSetGiftCardsEnabledForUser",
        extensionOpenLoginPrompt: "extensionOpenLoginPrompt",
        extensionHideContentUI: "extensionHideContentUI",
        extensionGetCartPrice: "extensionGetCartPrice",
        extensionSetIFrameAttribute: "extensionSetIFrameAttribute",
        extensionRemoveIFrameAttribute: "extensionRemoveIFrameAttribute",
        extensionSetHoneyStorageItem: "extensionSetHoneyStorageItem",
        extensionGetHoneyStorageItem: "extensionGetHoneyStorageItem",
        extensionRemoveHoneyStorageItem: "extensionRemoveHoneyStorageItem",
        extensionSetWindowLocalStorageItem:
          "extensionSetWindowLocalStorageItem",
        extensionGetWindowLocalStorageItem:
          "extensionGetWindowLocalStorageItem",
        extensionRemoveWindowLocalStorageItem:
          "extensionRemoveWindowLocalStorageItem",
        extensionGQLQuery: "extensionGQLQuery",
        extensionGQLMutation: "extensionGQLMutation",
        extensionOpenGiftCardDealModal: "extensionOpenGiftCardDealModal",
        giftCardsInit: "giftCardsInit",
        giftCardsReady: "giftCardsReady",
        giftCardsUserUpdate: "giftCardsUserUpdate",
        giftCardsCartPriceChange: "giftCardsCartPriceChange",
        giftCardsUserLoggedIn: "giftCardsUserLoggedIn",
        giftCardsFindSavingsClosed: "giftCardsFindSavingsClosed",
        extensionSetIsMinimized: "extensionSetIsMinimized",
        giftCardsSetIsMinimized: "giftCardsSetIsMinimized",
      },
      u = Object.keys(a).reduce(function (e, t) {
        return r(
          {},
          e,
          (function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          })({}, t, t)
        );
      }, {}),
      i =
        ((t.gcMessageNames = new Proxy(u, {
          get: function (e, t, n) {
            var r = Reflect.get(e, t, n);
            if (void 0 === r)
              throw new Error("checkout message name not found: " + t);
            return r;
          },
        })),
        new o.PostMessenger({
          types: a,
          enableLogging: !1,
          clientName: "extension",
          useEncryption: !1,
        }));
    t.default = i;
  },
  1933: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.LOGGED_OUT_SUPPRESSION_KEY =
      "honeyTips:suppression:all:loggedOut:expirationDate"),
      (t.SNOOZE_ALL_TEMPORARY = "honeyTips:suppression:all:expirationDate");
  },
  1934: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.convertDaysToExpirationDateInMs = t.getStoreKey = void 0);
    var r,
      o = n(35),
      a = (r = o) && r.__esModule ? r : { default: r };
    (t.getStoreKey = function (e) {
      return "honeyTips:suppression:store:" + e + ":expirationDate";
    }),
      (t.convertDaysToExpirationDateInMs = function (e) {
        return 1e3 * (0, a.default)().add(e, "day").unix();
      });
  },
  1935: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.cancelHideTipsAfterTimeout = t.hideTipsAfterTimeout = void 0);
    var r = s(n(15)),
      o = n(40),
      a = n(1936),
      u = n(305),
      i = s(n(188));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = null;
    (t.hideTipsAfterTimeout = function () {
      return function (e, t) {
        clearTimeout(c),
          (c = setTimeout(function () {
            var n = (0, i.default)(t()),
              s = o.pageSelectors.selectMostRecentPageId()(t());
            n.length ||
              (r.default.debug(
                "honeyTips:events: canRunTips but no tips appeared after timeout of " +
                  a.WAIT_FOR_TIPS_TIMEOUT +
                  "ms"
              ),
              e(o.pageActions.setTipsTimedOut({ pageId: s, tipsTimedOut: !0 })),
              e((0, u.sdataTipsBadgeEvent)({ event: "hide", action: null })));
          }, a.WAIT_FOR_TIPS_TIMEOUT));
      };
    }),
      (t.cancelHideTipsAfterTimeout = function () {
        return function () {
          return clearTimeout(c);
        };
      });
  },
  1936: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.WAIT_FOR_TIPS_TIMEOUT = 3e4;
  },
  1937: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = { 1: { orientation: "topRight", top: 160 } },
      o = (t.getDefaultBadgeSettingsByStoreId = function (e) {
        return r[e];
      });
    t.shouldUseStoreBadgeSettings = function (e) {
      return !!o(e);
    };
  },
  1938: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.unmountApp = t.hasCurrentContainerState = t.mountApp = void 0);
    var r = u(n(0)),
      o = u(n(3108)),
      a = u(n(3173));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var s,
      c,
      l = void 0,
      d = !1;
    (t.mountApp =
      ((s = i(
        regeneratorRuntime.mark(function e() {
          var t, n, u;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (l || d) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (d = !0),
                      (e.next = 4),
                      (0, a.default)(r.default.createElement(o.default, null))
                    );
                  case 4:
                    (t = e.sent),
                      (n = t.container),
                      (u = t.unmountApp),
                      (l = { container: n, unmountApp: u }),
                      (d = !1);
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function () {
        return s.apply(this, arguments);
      })),
      (t.hasCurrentContainerState = function () {
        return !!l;
      }),
      (t.unmountApp =
        ((c = i(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      l && l.unmountApp(), (l = null);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function () {
          return c.apply(this, arguments);
        }));
  },
  1939: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(459),
      u = n(55),
      i = (r = u) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, i.default)(t()).id;
        e(
          o.tipsActions.updateShowTopTipOnly({
            containerId: n,
            showTopTipOnly: !1,
          })
        ),
          e(
            (0, a.sdataTipsContainerEvent)({
              event: "action",
              action: "expand_container",
            })
          );
      };
    };
  },
  1940: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = null;
    t.default = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return function (t, n) {
        return (
          clearTimeout(i),
          (i = setTimeout(function () {
            var e = (0, u.default)(n()) || {},
              r = e.id,
              a = e.isAutopop,
              i = e.isHoveringOverBadge,
              s = e.isHoveringOverContainer;
            a ||
              i ||
              s ||
              t(
                o.tipsActions.closeContainer({
                  containerId: r,
                  resetTipsShown: !1,
                })
              );
          }, e))
        );
      };
    };
  },
  1941: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.canDragX = function (e) {
        return "both" === e.props.axis || "x" === e.props.axis;
      }),
      (t.canDragY = function (e) {
        return "both" === e.props.axis || "y" === e.props.axis;
      }),
      (t.createCoreData = function (e, t, n) {
        var o = e.state,
          u = !(0, r.isNum)(o.lastX),
          i = a(e);
        return u
          ? { node: i, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
          : {
              node: i,
              deltaX: t - o.lastX,
              deltaY: n - o.lastY,
              lastX: o.lastX,
              lastY: o.lastY,
              x: t,
              y: n,
            };
      }),
      (t.createDraggableData = function (e, t) {
        var n = e.props.scale;
        return {
          node: t.node,
          x: e.state.x + t.deltaX / n,
          y: e.state.y + t.deltaY / n,
          deltaX: t.deltaX / n,
          deltaY: t.deltaY / n,
          lastX: e.state.x,
          lastY: e.state.y,
        };
      }),
      (t.getBoundPosition = function (e, t, n) {
        if (!e.props.bounds) return [t, n];
        var u = e.props.bounds;
        u =
          "string" == typeof u
            ? u
            : (function (e) {
                return {
                  left: e.left,
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                };
              })(u);
        var i = a(e);
        if ("string" == typeof u) {
          var s,
            c = i.ownerDocument,
            l = c.defaultView;
          if (
            !(
              (s =
                "parent" === u ? i.parentNode : c.querySelector(u)) instanceof
              l.HTMLElement
            )
          )
            throw new Error(
              'Bounds selector "' + u + '" could not find an element.'
            );
          var d = s,
            f = l.getComputedStyle(i),
            p = l.getComputedStyle(d);
          u = {
            left:
              -i.offsetLeft +
              (0, r.int)(p.paddingLeft) +
              (0, r.int)(f.marginLeft),
            top:
              -i.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(f.marginTop),
            right:
              (0, o.innerWidth)(d) -
              (0, o.outerWidth)(i) -
              i.offsetLeft +
              (0, r.int)(p.paddingRight) -
              (0, r.int)(f.marginRight),
            bottom:
              (0, o.innerHeight)(d) -
              (0, o.outerHeight)(i) -
              i.offsetTop +
              (0, r.int)(p.paddingBottom) -
              (0, r.int)(f.marginBottom),
          };
        }
        (0, r.isNum)(u.right) && (t = Math.min(t, u.right));
        (0, r.isNum)(u.bottom) && (n = Math.min(n, u.bottom));
        (0, r.isNum)(u.left) && (t = Math.max(t, u.left));
        (0, r.isNum)(u.top) && (n = Math.max(n, u.top));
        return [t, n];
      }),
      (t.getControlPosition = function (e, t, n) {
        var r = "number" == typeof t ? (0, o.getTouch)(e, t) : null;
        if ("number" == typeof t && !r) return null;
        var u = a(n),
          i = n.props.offsetParent || u.offsetParent || u.ownerDocument.body;
        return (0, o.offsetXYFromParent)(r || e, i, n.props.scale);
      }),
      (t.snapToGrid = function (e, t, n) {
        var r = Math.round(t / e[0]) * e[0],
          o = Math.round(n / e[1]) * e[1];
        return [r, o];
      });
    var r = n(791),
      o = n(1552);
    function a(e) {
      var t = e.findDOMNode();
      if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
      return t;
    }
  },
  1942: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        void 0;
      });
  },
  1943: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(28),
      o = i(n(450)),
      a = i(n(664)),
      u = i(n(1461));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      var t =
          r.tipsSelectors.selectBadgeCtaDisabledCategoriesForCurrentStore(e),
        n = (0, u.default)(e, t) || {},
        i = n.id,
        s = n.categoryId,
        c = (((0, o.default)(i) || {}).badge || {}).notificationText,
        l = (0, a.default)(i)(e) || {},
        d = ("function" == typeof c ? c(l) : c) || null;
      return { text: d, tipId: d ? i : null, categoryId: d ? s : null };
    };
  },
  1944: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(48),
      o = n(124),
      a = n(68),
      u = n(773),
      i = n(40),
      s = n(421),
      c = n(10),
      l = n(28),
      d = n(33);
    function f(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var p = [
        r.TIPS_BUCKETED_FEATURES.STANDALONE_OFFERS,
        r.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP,
      ],
      v = {};
    t.default = function () {
      return (
        (e = f(
          regeneratorRuntime.mark(function e(t, n) {
            var r, g, m, y, h, _;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = i.pageSelectors.selectMostRecentPageId()(n())),
                        !v[r])
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", v[r]);
                    case 3:
                      return (
                        (g = t(c.storesActions.load())),
                        (m = (function () {
                          var e = f(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), g;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          t(s.sessionActions.loadStoreSession())
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (y = m()),
                        (h = (function () {
                          var e = f(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          Promise.allSettled([g, y])
                                        );
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          t(u.launchpadActions.load())
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (_ = Promise.allSettled([
                          t(o.deviceActions.loadDeviceSettings()),
                          t(o.deviceActions.loadIsFirstPageAfterInstall()),
                          t(a.experimentsActions.loadVariants(p)),
                          t(d.userActions.load()),
                          t(d.userActions.loadSettings()),
                          t(l.tipsActions.loadConfiguration()),
                          g,
                          y,
                          h(),
                        ])),
                        (v[r] = _),
                        e.abrupt("return", _)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (t, n) {
          return e.apply(this, arguments);
        }
      );
      var e;
    };
  },
  1945: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (t.isProductPageType = function (e) {
        return [
          "PRODUCT",
          "SHOPIFY_PRODUCT_PAGE",
          "SHOPIFY_WHERE_AM_I",
          "WHERE_AM_I",
        ].includes(e);
      }),
      o = (t.isHomePageType = function (e) {
        return ["HOMEPAGE"].includes(e);
      });
    t.default = { isProductPageType: r, isHomePageType: o };
  },
  1946: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(48),
      o = x(n(70)),
      a = n(251),
      u = n(316),
      i = n(232),
      s = n(68),
      c = n(253),
      l = n(323),
      d = n(74),
      f = n(446),
      p = n(766),
      v = n(421),
      g = n(759),
      m = n(666),
      y = n(10),
      h = n(28),
      _ = x(n(1490)),
      b = n(324),
      S = n(33),
      P = n(111),
      w = x(n(3175));
    function x(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function E(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var O = [
        P.CURRENT_TIPS_CONTAINER_EXPERIMENT,
        r.TIPS_BUCKETED_FEATURES.STANDALONE_OFFERS,
        r.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP,
        a.OFFERS_CTA_EXPERIMENT,
        a.DROPLIST_OCS_COLLECTIONS_POPUP,
        a.TIPS_FETCH_FALLBACK_PRODUCT,
        a.PERSONALIZED_UNAUTH_EXPERIMENT,
        a.SHIPPING_IN_COMPARISON_SHOPPING_EXPERIMENT,
        a.EXT_TOP_PICK_SAVINGS_DOLLAR,
        a.EXT_ATLAS_MISMATCH,
      ],
      I = [
        "ext_paypal_tip_enabled",
        "tips_is_autopop_suppression_respected",
        "offers_show_gold_value",
        "tips_main_tip_pay_in_four_enabled",
      ];
    t.default = function (e) {
      return (
        (t = E(
          regeneratorRuntime.mark(function t(n, r) {
            var a, P, x, T, C, A, R, M, k, N, D, j, L, U;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = n(y.storesActions.load())),
                        (P = n(c.featuresActions.loadFeatures(I))),
                        (x = n(S.userActions.load())),
                        (T = n(v.sessionActions.loadGlobalSessionId())),
                        (C = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          n(
                                            s.experimentsActions.loadVariants(O)
                                          )
                                        );
                                      case 2:
                                        O.forEach(function (e) {
                                          return o.default.trackImpression(e);
                                        });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (A = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              var t, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), x;
                                      case 2:
                                        return (
                                          (t = S.userSelectors.selectUser()(
                                            r()
                                          )),
                                          (o = t.id),
                                          (e.next = 5),
                                          n(S.userActions.getUserFollow(o))
                                        );
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (R = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              var t, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), Promise.all([a, x])
                                        );
                                      case 2:
                                        if (
                                          ((t =
                                            y.storesSelectors.selectCurrentStore()(
                                              r()
                                            ) || {}),
                                          !(
                                            (o =
                                              S.userSelectors.selectUser()(
                                                r()
                                              ) || {}).isLoggedIn &&
                                            o.id &&
                                            t.storeId &&
                                            t.isDoubleGold
                                          ))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (e.next = 7),
                                          n(
                                            S.userActions.getDoubleGoldActivationsByUserId(
                                              o.id
                                            )
                                          )
                                        );
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (M = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n(
                                            S.userActions.loadSessionCountForCurrentStore()
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (k = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), T;
                                      case 2:
                                        return (
                                          (e.next = 4), n((0, _.default)())
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (N = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        n(h.tipsActions.loadTipsShown());
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (D = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n(
                                            m.storeInsightsActions.loadStoreInsights()
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (j = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n(i.couponsActions.loadStats())
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (L = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), P;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n(f.payInFourActions.load())
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (U = (function () {
                          var t = E(
                            regeneratorRuntime.mark(function t() {
                              var o, u, i, s;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (e) {
                                          t.next = 2;
                                          break;
                                        }
                                        return t.abrupt("return");
                                      case 2:
                                        return (
                                          (o = (function () {
                                            var e = E(
                                              regeneratorRuntime.mark(
                                                function e() {
                                                  return regeneratorRuntime.wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (e.next = 2), x
                                                            );
                                                          case 2:
                                                            return (
                                                              (e.next = 4),
                                                              n(
                                                                d.offersActions.loadEligibility()
                                                              )
                                                            );
                                                          case 4:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e,
                                                    void 0
                                                  );
                                                }
                                              )
                                            );
                                            return function () {
                                              return e.apply(this, arguments);
                                            };
                                          })()),
                                          (u = o()),
                                          (i = (function () {
                                            var e = E(
                                              regeneratorRuntime.mark(
                                                function e() {
                                                  return regeneratorRuntime.wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (e.next = 2), u
                                                            );
                                                          case 2:
                                                            n(
                                                              d.offersActions.loadStoreOffer()
                                                            );
                                                          case 3:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e,
                                                    void 0
                                                  );
                                                }
                                              )
                                            );
                                            return function () {
                                              return e.apply(this, arguments);
                                            };
                                          })()),
                                          (t.next = 7),
                                          Promise.allSettled([a, x])
                                        );
                                      case 7:
                                        return (
                                          (s =
                                            y.storesSelectors.selectCurrentStoreId()(
                                              r()
                                            )),
                                          (t.next = 10),
                                          Promise.allSettled([
                                            n(
                                              d.offersActions.loadLaunchpadOffersConfiguration()
                                            ),
                                            i(),
                                            n(
                                              p.saleAlertsActions.loadSaleAlert()
                                            ),
                                            L(),
                                            n(
                                              g.storeDealsActions.loadStoreDeals()
                                            ),
                                            n(
                                              l.honeyPayNowActions.loadByProduct(
                                                {
                                                  product: { storeId: s },
                                                  subSrc: "tips",
                                                }
                                              )
                                            ),
                                          ])
                                        );
                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 16),
                        Promise.allSettled([
                          a,
                          x,
                          C(),
                          P,
                          n(u.adblockActions.checkForAdblock()),
                          T,
                          n(b.uiActions.loadLanguage()),
                          n(h.tipsActions.loadDeprioritization()),
                          n(h.tipsActions.loadTipsAndCategories()),
                          n((0, w.default)()),
                          A(),
                          R(),
                          M(),
                          k(),
                          N(),
                          D(),
                          j(),
                          U(),
                        ])
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1947: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(111),
      o = c(n(15)),
      a = n(68),
      u = n(40),
      i = n(661),
      s = c(n(1555));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var d = function () {
      return (
        (e = l(
          regeneratorRuntime.mark(function e(t, n) {
            var o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t(
                          a.experimentsActions.loadVariant(
                            r.CURRENT_TIPS_CONTAINER_EXPERIMENT
                          )
                        )
                      );
                    case 2:
                      return (
                        (o = a.experimentSelectors.selectVariant(
                          r.CURRENT_TIPS_CONTAINER_EXPERIMENT
                        )(n())),
                        e.abrupt(
                          "return",
                          o ===
                            r.TIPS_CONTAINER_VARIANTS.WAI_ENABLED_PF_DISABLED
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (t, n) {
          return e.apply(this, arguments);
        }
      );
      var e;
    };
    t.default = function (e) {
      return (
        (t = l(
          regeneratorRuntime.mark(function t(n, r) {
            var a;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), n(d());
                    case 2:
                      if (!t.sent) {
                        t.next = 5;
                        break;
                      }
                      return (
                        o.default.debug(
                          "honeyTips:handleVimProduct: VIM fetcher handling is disabled."
                        ),
                        t.abrupt("return")
                      );
                    case 5:
                      return (
                        (a = u.pageSelectors.selectMostRecentPageId()(r())),
                        n(
                          i.productFetcherActions.productFetched({
                            pageId: a,
                            product: e,
                          })
                        ),
                        (t.next = 9),
                        n((0, s.default)(e))
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1948: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(145),
      o = n(320),
      a = n(135),
      u = n(323),
      i = n(74),
      s = n(446),
      c = n(667),
      l = n(303),
      d = n(68),
      f = n(251),
      p = n(111),
      v = y(n(767)),
      g = n(1949),
      m = y(n(792));
    function y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function h(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    t.default = function (e) {
      return (
        (t = h(
          regeneratorRuntime.mark(function t(n, y) {
            var _, b, S, P, w, x;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (_ = e.parentId),
                        (b = e.productId),
                        (S = (function () {
                          var t = h(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2),
                                          n(i.offersActions.loadProductOffer(e))
                                        );
                                      case 2:
                                        i.offersSelectors.selectCurrentProductOffer(
                                          y()
                                        ) && n((0, m.default)());
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (P = n(
                          r.catalogProductsActions.loadProductByProductId(b)
                        )),
                        (w = (function () {
                          var e = h(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), P;
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n(
                                            c.priceTrendProductActions.loadProductByProductId(
                                              b
                                            )
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (x = (function () {
                          var t = h(
                            regeneratorRuntime.mark(function t() {
                              var a, u;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), P;
                                      case 2:
                                        if (
                                          ((a =
                                            r.catalogProductsSelectors.selectByProductId(
                                              e.productId
                                            )(y()) || {}),
                                          (u =
                                            d.experimentSelectors.selectVariant(
                                              p.CURRENT_TIPS_CONTAINER_EXPERIMENT
                                            )(y())),
                                          !(0, v.default)(u))
                                        ) {
                                          t.next = 7;
                                          break;
                                        }
                                        return (
                                          (t.next = 7),
                                          n(
                                            o.comparisonShoppingActions.loadCanonicalProducts(
                                              { product: e, catalogProduct: a }
                                            )
                                          )
                                        );
                                      case 7:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 9),
                        Promise.allSettled([
                          S(),
                          P,
                          w(),
                          x(),
                          n(g.loadTopProductCoupon),
                          n(
                            o.comparisonShoppingActions.loadWebPriceComparisonViewed(
                              { parentId: _ }
                            )
                          ),
                          n(
                            a.droplistActions.loadDroplistAndCollectionsByVimProduct(
                              e
                            )
                          ),
                          n(
                            u.honeyPayNowActions.loadByProduct({
                              product: e,
                              subSrc: "tips",
                            })
                          ),
                          n(l.teamDealsActions.load(e)),
                          n(s.payInFourActions.load()),
                          n(
                            d.experimentsActions.loadVariant(
                              f.TIPS_FETCH_FALLBACK_PRODUCT
                            )
                          ),
                        ])
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1949: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadTopProductCoupon = void 0);
    var r = n(232),
      o = n(299),
      a = n(1478),
      u = n(57);
    var i,
      s,
      c = (t.loadTopProductCoupon =
        ((i = regeneratorRuntime.mark(function e(t, n) {
          var i, s, c, l, d;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = (0, u.selectCurrentScrapedProduct)(n()) || {}),
                      (s = i.parentId),
                      (e.t0 = s),
                      !e.t0)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 5),
                      t(r.couponsActions.loadTopProductCoupon({ parentId: s }))
                    );
                  case 5:
                    (c = (0, a.selectProductCouponsCategoryData)(n())),
                      (l = c.coupon),
                      (d = (0, a.selectIsProductCouponInvalid)(n())),
                      l &&
                        d &&
                        t(
                          (0, o.sdataTipsDebugEvent)({
                            debugEvent: "invalid_coupon_stats",
                            action: "invalid_coupon_stats",
                            metadata_json: JSON.stringify({
                              source: "extension",
                              couponStats: l,
                              referrerUrl:
                                "" +
                                window.location.origin +
                                window.location.pathname,
                            }),
                          })
                        );
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (s = function () {
          var e = i.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return s.apply(this, arguments);
        }));
    t.default = c;
  },
  1950: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(459),
      u = n(55),
      i = (r = u) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, i.default)(t()).id;
        e(o.tipsActions.refreshContainer({ containerId: n })),
          e((0, a.sdataTipsContainerEvent)({ event: "update" }));
      };
    };
  },
  1951: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(135),
      o = n(323);
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n) {
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (
                      (t.next = 4),
                      Promise.allSettled([
                        n(
                          r.droplistActions.loadDroplistAndCollectionsByGenericProduct(
                            e
                          )
                        ),
                        n(
                          o.honeyPayNowActions.loadByProduct({
                            product: e,
                            subSrc: "tips",
                          })
                        ),
                      ])
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  2011: function (e, t, n) {
    n(707), (e.exports = n(2012));
  },
  2012: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        ((r = regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    w.default
                      .send(
                        "page:load",
                        {
                          url: t,
                          hasServiceWorkers: !!(
                            (navigator || {}).serviceWorker || {}
                          ).controller,
                        },
                        { allTabs: !0, background: !0, ignoreResponse: !0 }
                      )
                      .reflect(),
                      P.default.debug(
                        "Honey 16.2.5 content script is ready. Environment is production"
                      ),
                      (e.next = 8);
                    break;
                  case 5:
                    (n = e.sent),
                      (r = void 0),
                      ((r = document.createElement("script")).text =
                        "\n        (function setSdata() {\n          window.sdata = " +
                        JSON.stringify(n) +
                        ";\n        })();\n      "),
                      document.documentElement.appendChild(r);
                  case 8:
                  case "end":
                    return e.stop();
                }
              var r;
            },
            e,
            this
          );
        })),
        (o = function () {
          var e = r.apply(this, arguments);
          return new u.default(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  s = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return u.default.resolve(s).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(s);
            })("next");
          });
        }),
        function (e) {
          return o.apply(this, arguments);
        });
    n(1566),
      n(1614),
      n(1619),
      n(1622),
      n(1623),
      n(1629),
      n(1634),
      n(1635),
      n(1637),
      n(1639),
      n(1640),
      n(1641),
      n(1643),
      n(1644),
      n(1646),
      n(1647),
      n(1649),
      n(1650),
      n(127);
    var u = Q(n(23)),
      i = Q(n(8)),
      s = Q(n(22)),
      c = Q(n(1417)),
      l = Q(n(1520)),
      d = Q(n(411)),
      f = Q(n(233)),
      p = Q(n(1927)),
      v = Q(n(3090)),
      g = Q(n(1427)),
      m = Q(n(659)),
      y = Q(n(59)),
      h = Q(n(70)),
      _ = Q(n(732)),
      b = Q(n(4)),
      S = Q(n(1685)),
      P = Q(n(15)),
      w = Q(n(12)),
      x = Q(n(3091)),
      E = Q(n(203)),
      O = Q(n(1521)),
      I = Q(n(1928)),
      T = Q(n(298)),
      C = Q(n(200)),
      A = Q(n(1930)),
      R = Q(n(142)),
      M = Q(n(3099)),
      k = Q(n(62)),
      N = Q(n(1932)),
      D = Q(n(13)),
      j = Q(n(164)),
      L = Q(n(19)),
      U = Q(n(32)),
      B = Q(n(3100)),
      F = Q(n(26)),
      G = Q(n(24)),
      H = Q(n(1843)),
      V = Q(n(1700)),
      W = Q(n(3191)),
      Y = Q(n(414)),
      z = Q(n(315)),
      X = Q(n(1548)),
      q = Q(n(412)),
      K = Q(n(144)),
      J = Q(n(1952));
    function Q(e) {
      return e && e.__esModule ? e : { default: e };
    }
    u.default.onPossiblyUnhandledRejection(function (e) {
      return P.default.error(e);
    }),
      a(window.location.href),
      setTimeout(function () {
        if ("www.joinhoney.com" === window.location.hostname) {
          var e = document.querySelector("#messagingEventHandler");
          if (e)
            if (e.getAttribute("si_ext"))
              w.default.send(
                "si:on",
                { si_ext: e.getAttribute("si_ext") },
                { ignoreResponse: !0, background: !0 }
              );
            else
              new MutationObserver(function () {
                e.getAttribute("si_ext") &&
                  w.default.send(
                    "si:on",
                    { si_ext: e.getAttribute("si_ext") },
                    { ignoreResponse: !0, background: !0 }
                  );
              }).observe(e, { attributes: !0 });
        }
      });
    var $ = {
      $: i.default,
      acorns: c.default,
      adbBp: q.default,
      ajax: l.default,
      button: d.default,
      cartPageFetcher: V.default,
      checkoutPlatform: v.default,
      clipboard: f.default,
      config: p.default,
      confirmation: g.default,
      cookies: m.default,
      device: y.default,
      experiments: h.default,
      extensionReview: _.default,
      i18n: b.default,
      imageLoader: S.default,
      honeyPayNow: I.default,
      honeyPayPal: T.default,
      launchpad: K.default,
      logger: P.default,
      messages: w.default,
      mseUpsell: x.default,
      offers: E.default,
      optimus: O.default,
      pageDetector: R.default,
      popover: C.default,
      productFetcher: A.default,
      runtime: M.default,
      savingsController: k.default,
      search: J.default,
      seleniumComm: N.default,
      stats: D.default,
      storage: j.default,
      stores: L.default,
      tabs: U.default,
      tips: B.default,
      ui: F.default,
      user: G.default,
      userSavingsStats: H.default,
      util: s.default,
      vims: Y.default,
      websiteComm: z.default,
      whereAmI: W.default,
      yelp: X.default,
    };
    w.default.addListener("debug:change", function (e, t) {
      try {
        t.active ? (window.honey = $) : delete window.honey;
      } catch (e) {}
    }),
      (t.default = $);
  },
  305: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sdataTipsBadgeEvent = void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = i(n(15)),
      a = i(n(13)),
      u = i(n(3106));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.sdataTipsBadgeEvent = function (e) {
      return function (t, n) {
        var i = (0, u.default)(n()),
          s = r({}, i, e);
        a.default.sendEvent("tip004034", s),
          o.default.debug("TIPS_BADGE:" + s.event, s);
      };
    };
  },
  3090: function (e, t, n) {
    "use strict";
    var r,
      o,
      a = n(685),
      u = (r = a) && r.__esModule ? r : { default: r };
    ((o = regeneratorRuntime.mark(function e() {
      return regeneratorRuntime.wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                u.default.start();
              case 1:
              case "end":
                return e.stop();
            }
        },
        e,
        void 0
      );
    })),
    function () {
      var e = o.apply(this, arguments);
      return new Promise(function (t, n) {
        return (function r(o, a) {
          try {
            var u = e[o](a),
              i = u.value;
          } catch (e) {
            return void n(e);
          }
          if (!u.done)
            return Promise.resolve(i).then(
              function (e) {
                r("next", e);
              },
              function (e) {
                r("throw", e);
              }
            );
          t(i);
        })("next");
      });
    })();
  },
  3091: function (e, t, n) {
    "use strict";
    var r = a(n(12)),
      o = a(n(26));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r.default.addListener("mseupsell:action", function (e, t) {
      var n = t && t.flow ? t.flow : "default";
      switch (t && t.action) {
        case "showMSEPrompt":
          o.default.open({
            pathname: "/msePrompt",
            query: { flow: n },
            force: !0,
            feature: "qr-code-prompt",
            surface: "popup",
          });
          break;
        case "showQrCode":
          o.default.open({
            pathname: "/qrCode",
            query: { flow: n },
            force: !0,
            feature: "qr-code-scan",
            surface: "popup",
          });
          break;
        default:
          throw new InvalidParametersError(
            "No mseupsell:action listener for " + t.action
          );
      }
    });
  },
  3092: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        ((r = regeneratorRuntime.mark(function e(t, n, r) {
          var o, a, u;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = n), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), c.default.getCurrent();
                  case 4:
                    e.t0 = e.sent;
                  case 5:
                    if (
                      ((o = e.t0),
                      s.default.getCtaType(o) !== i.FIND_SAVINGS_TYPES.NONE)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", !0);
                  case 10:
                    return (
                      (a = [d, f, p]),
                      r && (a = r),
                      (e.next = 14),
                      Promise.all(
                        a.map(function (e) {
                          return e(t, o);
                        })
                      )
                    );
                  case 14:
                    return (
                      (u = e.sent),
                      e.abrupt(
                        "return",
                        u.some(function (e) {
                          return e;
                        }) && v(o)
                      )
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })),
        (o = function () {
          var e = r.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t, n) {
          return o.apply(this, arguments);
        }),
      u = l(n(35)),
      i = n(48),
      s = l(n(62)),
      c = l(n(19));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = function (e, t) {
        return e.GOLD_REWARDS && (!t.gold || (t.gold && t.gold.activated));
      },
      f = function (e, t) {
        return (
          e &&
          (e.FIND_SAVINGS || e.GOLD_REWARDS) &&
          u.default
            .unix(t.applyCodesComplete)
            .isAfter((0, u.default)().subtract(2, "hours"))
        );
      },
      p = function (e) {
        return e && !e.FIND_SAVINGS;
      },
      v = function (e) {
        return !e.standDown;
      };
    t.default = {
      isFsOrGoldAndMoreThanTwoHrs: f,
      isNotOnFs: p,
      isOnGoldRewardsOrActivated: d,
      isPaymentsViewPrioritized: a,
    };
  },
  3093: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      u = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i =
        ((r = A(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        crypto.subtle.generateKey(
                          { name: "AES-CBC", length: 256 },
                          !0,
                          ["encrypt", "decrypt"]
                        )
                      );
                    case 2:
                      (k = e.sent),
                        (N = crypto.getRandomValues(new Uint8Array(16))),
                        (D = { name: "AES-CBC", iv: N });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function () {
          return r.apply(this, arguments);
        }),
      s =
        ((o = A(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o, a;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = M(t)), (e.next = 3), crypto.subtle.decrypt(D, k, n)
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        (o = new TextDecoder()),
                        (a = o.decode(r)),
                        e.abrupt("return", a)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return o.apply(this, arguments);
        }),
      c = n(0),
      l = O(c),
      d = O(n(1)),
      f = O(n(12)),
      p = O(n(13)),
      v = O(n(164)),
      g = n(760),
      m = O(n(70)),
      y = O(n(4)),
      h = O(n(101)),
      _ = O(n(24)),
      b = O(n(26)),
      S = O(n(19)),
      P = n(1928),
      w = O(n(3094)),
      x = n(1929),
      E = O(x);
    function O(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function I(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function T(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function C(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function A(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var R = "https://cdn.joinhoney.com/gift-cards/index.html";
    function M(e) {
      for (
        var t = new ArrayBuffer(2 * e.length),
          n = new Uint16Array(t),
          r = 0,
          o = e.length;
        r < o;
        r += 1
      )
        n[r] = e.charCodeAt(r);
      return t;
    }
    var k = void 0,
      N = void 0,
      D = void 0;
    function j(e) {
      var t,
        n = this,
        r =
          ((t = A(
            regeneratorRuntime.mark(function e() {
              var t,
                n,
                r,
                u = this;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), i();
                      case 2:
                        return (
                          E.default.setTarget(O.current.contentWindow, R),
                          E.default.beginListening(function (e) {
                            return R.match(new RegExp("^(" + e + ")"));
                          }),
                          (M.current = E.default.bindResponders(
                            (T(
                              (t = {}),
                              x.gcMessageNames.giftCardsReady,
                              function () {
                                f.default.send("gift-cards-app:ready", {});
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionSendSDataEvent,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.eventName),
                                                (r = C(t, ["eventName"])),
                                                (e.next = 3),
                                                p.default.sendEvent(n, r)
                                              );
                                            case 3:
                                              return e.abrupt("return", !0);
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(t, x.gcMessageNames.extensionRemoveIFrame, ne),
                            T(t, x.gcMessageNames.extensionUpdateStyles, re),
                            T(
                              t,
                              x.gcMessageNames.extensionExperimentsGetVariant,
                              function (e) {
                                return m.default.getVariant(e.variantName);
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGetI18nMessage,
                              function (e) {
                                return y.default.getMessage(e.messageName);
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionSetIFrameAttribute,
                              function (e) {
                                return (
                                  O.current.setAttribute(
                                    e.attributeName,
                                    e.value
                                  ),
                                  !0
                                );
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionRemoveIFrameAttribute,
                              function (e) {
                                return (
                                  O.current.removeAttribute(e.attributeName), !0
                                );
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames
                                .extensionSetGiftCardsEnabledForUser,
                              function (e) {
                                return _.default.updateSetting(
                                  "honeyWallet",
                                  e.enabled ? 1 : 0
                                );
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionOpenLoginPrompt,
                              function () {
                                return b.default.open({
                                  pathname: "/gift-cards-auth",
                                  query: {},
                                  state: {},
                                  force: !0,
                                  feature: "gift-cards-auth",
                                  surface: "popup",
                                });
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionHideContentUI,
                              function () {
                                return b.default.hide();
                              }
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGetCartPrice,
                              A(
                                regeneratorRuntime.mark(function e() {
                                  var t, n;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              S.default.getCurrent()
                                            );
                                          case 2:
                                            return (
                                              (t = e.sent),
                                              (e.next = 5),
                                              (0, P.getCartPrice)(t)
                                            );
                                          case 5:
                                            return (
                                              (n = e.sent),
                                              e.abrupt("return", n)
                                            );
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    u
                                  );
                                })
                              )
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionSetHoneyStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (r = t.value),
                                                (e.next = 3),
                                                v.default.local.set(n, r)
                                              );
                                            case 3:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGetHoneyStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                v.default.local
                                                  .get(n)
                                                  .catch(function () {
                                                    return null;
                                                  })
                                              );
                                            case 3:
                                              return (
                                                (r = e.sent),
                                                e.abrupt("return", r)
                                              );
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionRemoveHoneyStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                v.default.local
                                                  .del(n)
                                                  .catch(function () {
                                                    return null;
                                                  })
                                              );
                                            case 3:
                                              return (
                                                (r = e.sent),
                                                e.abrupt("return", r)
                                              );
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames
                                .extensionSetWindowLocalStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (r = t.value),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  {
                                                    action:
                                                      g.HONEY_PAY_NOW_MESSAGES
                                                        .SET_LOCAL_STORAGE_ITEM,
                                                    data: { key: n, value: r },
                                                  },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames
                                .extensionGetWindowLocalStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  {
                                                    action:
                                                      g.HONEY_PAY_NOW_MESSAGES
                                                        .GET_LOCAL_STORAGE_ITEM,
                                                    data: { key: n },
                                                  },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                              return (
                                                (r = e.sent),
                                                e.abrupt("return", r)
                                              );
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames
                                .extensionRemoveWindowLocalStorageItem,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  {
                                                    action:
                                                      g.HONEY_PAY_NOW_MESSAGES
                                                        .REMOVE_LOCAL_STORAGE_ITEM,
                                                    data: { key: n },
                                                  },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                              return (
                                                (r = e.sent),
                                                e.abrupt("return", r)
                                              );
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGQLQuery,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((n = t.requestData),
                                                !t.encrypted)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (
                                                (e.next = 4), s(t.requestData)
                                              );
                                            case 4:
                                              (r = e.sent), (n = JSON.parse(r));
                                            case 6:
                                              return (
                                                (e.next = 8),
                                                f.default.send(
                                                  "honey-pay-now:action:gql-query",
                                                  {
                                                    action:
                                                      g.HONEY_PAY_NOW_MESSAGES
                                                        .GQL_QUERY,
                                                    data: n,
                                                  },
                                                  { background: !0 }
                                                )
                                              );
                                            case 8:
                                              return (
                                                (o = e.sent),
                                                e.abrupt("return", o)
                                              );
                                            case 10:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGQLMutation,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((n = t.requestData),
                                                !t.encrypted)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (
                                                (e.next = 4), s(t.requestData)
                                              );
                                            case 4:
                                              (r = e.sent), (n = JSON.parse(r));
                                            case 6:
                                              return (
                                                (e.next = 8),
                                                f.default.send(
                                                  "honey-pay-now:action:gql-query",
                                                  {
                                                    action:
                                                      g.HONEY_PAY_NOW_MESSAGES
                                                        .GQL_MUTATION,
                                                    data: n,
                                                  },
                                                  { background: !0 }
                                                )
                                              );
                                            case 8:
                                              return (
                                                (o = e.sent),
                                                e.abrupt("return", o)
                                              );
                                            case 10:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionAuth,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o, a;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              (n = t.authProvider),
                                                (r = t.isLoginMode),
                                                (o = t.isOptOut),
                                                (e.t0 = n),
                                                (e.next =
                                                  "google" === e.t0
                                                    ? 4
                                                    : "apple" === e.t0
                                                    ? 6
                                                    : "paypal" === e.t0
                                                    ? 8
                                                    : "facebook" === e.t0
                                                    ? 10
                                                    : (e.t0, 12));
                                              break;
                                            case 4:
                                              return (
                                                r
                                                  ? _.default.loginGoogle()
                                                  : _.default.registerGoogle(o),
                                                e.abrupt("break", 14)
                                              );
                                            case 6:
                                              return (
                                                r
                                                  ? _.default.loginApple()
                                                  : _.default.registerApple(o),
                                                e.abrupt("break", 14)
                                              );
                                            case 8:
                                              return (
                                                r
                                                  ? _.default.loginPaypal()
                                                  : _.default.registerPaypal(o),
                                                e.abrupt("break", 14)
                                              );
                                            case 10:
                                              return (
                                                r
                                                  ? _.default.loginFacebook()
                                                  : _.default.registerFacebook(
                                                      o
                                                    ),
                                                e.abrupt("break", 14)
                                              );
                                            case 12:
                                              (a = r ? "login" : "join"),
                                                _.default.openEmailAuth(
                                                  a,
                                                  "ext",
                                                  !1,
                                                  !1
                                                );
                                            case 14:
                                              return e.abrupt("return", null);
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGetUserABGroup,
                              A(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              _.default.getUserABGroup("auth")
                                            );
                                          case 2:
                                            return (
                                              (t = e.sent),
                                              e.abrupt("return", t)
                                            );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    u
                                  );
                                })
                              )
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionGetI18nCountryCode,
                              A(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = y.default.getCountryCode()),
                                              e.abrupt("return", t)
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    u
                                  );
                                })
                              )
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionSetIsMinimized,
                              (function () {
                                var e = A(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n = t.isMinimized,
                                      r = t.savings,
                                      o = t.goldAward,
                                      a = t.autoPopType;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              te(a), r && X(r), o && Q(o), V(n);
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      u
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            T(
                              t,
                              x.gcMessageNames.extensionOpenGiftCardDealModal,
                              A(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              S.default.getCurrent()
                                            );
                                          case 2:
                                            (t = e.sent),
                                              S.default.tag(
                                                t.id,
                                                "extension_links",
                                                null,
                                                {
                                                  forceHidden: !0,
                                                  src: "GiftCardDealOpenModal",
                                                }
                                              );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    u
                                  );
                                })
                              )
                            ),
                            t)
                          )),
                          (e.next = 7),
                          crypto.subtle.exportKey("jwk", k)
                        );
                      case 7:
                        return (
                          (n = e.sent),
                          (e.next = 10),
                          E.default.request(
                            x.gcMessageNames.giftCardsInit,
                            a({}, o, {
                              jsonRequestKey: n,
                              requestIV: [].concat(I(N)),
                              parentOrigin: window.location.origin,
                            })
                          )
                        );
                      case 10:
                        (r = e.sent), (d.current = r);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function () {
            return t.apply(this, arguments);
          }),
        o = e.data,
        d = (0, c.useRef)(!1),
        O = (0, c.useRef)(),
        M = (0, c.useRef)(function () {}),
        D = (0, c.useRef)(document.querySelector("body")),
        j = (0, c.useState)(null),
        L = u(j, 2),
        U = L[0],
        B = L[1],
        F = (0, c.useState)(!1),
        G = u(F, 2),
        H = G[0],
        V = G[1],
        W = (0, c.useState)(null),
        Y = u(W, 2),
        z = Y[0],
        X = Y[1],
        q = (0, c.useState)(null),
        K = u(q, 2),
        J = K[0],
        Q = K[1],
        $ = (0, c.useState)(null),
        Z = u($, 2),
        ee = Z[0],
        te = Z[1];
      function ne() {
        M.current(), E.default.stopListening(), O.current.remove();
      }
      function re(e) {
        var t = e.visible,
          n = e.lockScrolling,
          r = e.bodyStyle,
          o = void 0 === r ? {} : r,
          u = e.iframeStyle,
          i = void 0 === u ? {} : u;
        return (
          Object.assign(
            D.current.style,
            a({ overflow: n ? "hidden" : "auto" }, o)
          ),
          Object.assign(
            O.current.style,
            a({ visibility: t ? "visible" : "hidden" }, i)
          ),
          !0
        );
      }
      (0, c.useEffect)(function () {
        A(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        h.default.getFeatureFlag("gift_cards_use_remote_iframe")
                      );
                    case 2:
                      (t = e.sent), B(t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              n
            );
          })
        )();
      }, []),
        (0, c.useEffect)(function () {
          return function () {
            return ne();
          };
        }, []),
        (0, c.useEffect)(function () {
          var e,
            t =
              ((e = A(
                regeneratorRuntime.mark(function e(t) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (e.t0 = n && n.action),
                              (e.next =
                                e.t0 ===
                                g.HONEY_PAY_NOW_MESSAGES
                                  .SET_PAY_NOW_MODAL_VISIBILITY
                                  ? 3
                                  : e.t0 ===
                                    g.HONEY_PAY_NOW_MESSAGES
                                      .REMOVE_PAY_NOW_IFRAME
                                  ? 5
                                  : 7);
                            break;
                          case 3:
                            return (
                              re({
                                visible: n.data.isVisible,
                                lockScrolling: n.data.isVisible,
                              }),
                              e.abrupt("break", 8)
                            );
                          case 5:
                            return ne(), e.abrupt("break", 8);
                          case 7:
                            return e.abrupt("break", 8);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (t) {
                return e.apply(this, arguments);
              });
          function n(e, t) {
            var n = t.user;
            E.default.request(x.gcMessageNames.giftCardsUserUpdate, n);
          }
          return (
            f.default.addListener("honey-pay-now:action:ui", t),
            f.default.addListener("user:current:update", n),
            function () {
              f.default.removeListener("honey-pay-now:action:ui", t),
                f.default.removeListener("user:current:update", n);
            }
          );
        }, []);
      return null === U
        ? null
        : l.default.createElement(
            c.Fragment,
            null,
            H &&
              l.default.createElement(w.default, {
                autoPopType: ee,
                handleUnMinimize: function () {
                  E.default.request(
                    x.gcMessageNames.giftCardsSetIsMinimized,
                    !1
                  ),
                    V(!1, ee);
                },
                goldAward: J,
                savings: z,
              }),
            l.default.createElement("iframe", {
              ref: O,
              id: "giftcardsIFrame",
              title: "Honey Pay Now",
              src: R,
              className: null,
              style: { visibility: "hidden" },
              onLoad: r,
              scrolling: "no",
            })
          );
    }
    (j.propTypes = { data: d.default.object }),
      (j.defaultProps = { data: {} }),
      (t.default = j);
  },
  3094: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = d(o),
      u = d(n(1)),
      i = n(2),
      s = n(3),
      c = n(146),
      l = d(n(4));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = {
        root: {
          display: "flex",
          position: "fixed",
          right: "0px",
          top: "80px",
          zIndex: 2147483647,
        },
        container: {
          backgroundColor: s.Colors.white,
          width: "280px",
          right: function (e) {
            return e.isExpanded ? "0px" : "-202px";
          },
          transition: "all 400ms ease-in-out",
          height: "56px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "5px 0px 0px 5px",
          position: "relative",
          boxShadow: "0px 2px 35px rgba(0, 0, 0, 0.25)",
        },
        icon: {
          cursor: "pointer",
          width: "18px",
          height: "18px",
          marginLeft: "9px",
        },
        dotsContainer: {
          alignItems: "center",
          cursor: "move",
          display: "flex",
          height: "100%",
          paddingRight: "9px",
        },
        dots: {
          display: "flex",
          flexDirection: "column",
          height: "17px",
          width: "10px",
          justifyContent: "space-between",
          marginLeft: "16px",
        },
        dotRow: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
        dot: {
          height: "3px",
          width: "3px",
          display: "inline-block",
          borderRadius: "50%",
          backgroundColor: s.Colors.grey600,
        },
        content: {
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        },
        savingsText: { marginLeft: "18px" },
        giftCardInfo: { fontSize: "12px" },
        title: { color: s.Colors.grey900, fontSize: "12px", fontWeight: "600" },
        savings: { color: s.Colors.green500, fontWeight: "700" },
        goldAward: { color: s.Colors.gold900, fontWeight: "700" },
        seeSavings: { color: s.Colors.grey800, composes: "link1" },
      },
      p = (0, i.createUseStyles)(f),
      v = function (e) {
        var t = e.handleUnMinimize,
          n = e.savings,
          u = e.goldAward,
          i = e.autoPopType,
          s = (0, o.useState)(!1),
          d = r(s, 2),
          f = d[0],
          v = d[1],
          g = p({ isExpanded: f }),
          m = (0, o.createRef)(),
          y = function (e) {
            return function () {
              v(e);
            };
          },
          h = function (e) {
            var t =
              (e.changedTouches && e.changedTouches[0].clientY) || e.clientY;
            (t < 0 || t > window.innerHeight - 56) &&
              (t = t < 0 ? 0 : window.innerHeight - 56),
              (m.current.style.top = t + "px");
          };
        function _() {
          window.removeEventListener("mousemove", h),
            window.removeEventListener("mouseup", _);
        }
        var b = function () {
            return n && !u;
          },
          S = Number(u).toLocaleString(),
          P = "$" + u / 100,
          w = function () {
            return !n && u
              ? l.default.getMessageAndReplace(
                  "Get_GOLDINCURRENCY_GOLDPOINTS",
                  {
                    GOLDINCURRENCY: a.default.createElement(
                      "span",
                      { className: g.goldAward },
                      P
                    ),
                    GOLDPOINTS: a.default.createElement("span", null, S),
                  }
                )
              : b()
              ? l.default.getMessageAndReplace(
                  "Save_SAVINGS_with_a_gift_card",
                  {
                    SAVINGS: a.default.createElement(
                      "span",
                      { className: g.savings },
                      (0, c.formatDollars)(n)
                    ),
                  }
                )
              : l.default.getMessageAndReplace("Save_SAVINGS_and_get_Gold", {
                  SAVINGS: a.default.createElement(
                    "span",
                    { className: g.savings },
                    (0, c.formatDollars)(n)
                  ),
                });
          };
        return a.default.createElement(
          "div",
          { ref: m, className: g.root },
          a.default.createElement(
            "div",
            { className: g.container },
            a.default.createElement(
              "div",
              {
                className: g.dotsContainer,
                onMouseDown: function () {
                  window.addEventListener("mousemove", h),
                    window.addEventListener("mouseup", _);
                },
                onMouseUp: _,
                onTouchMove: h,
              },
              a.default.createElement(
                "div",
                { className: g.dots },
                a.default.createElement(
                  "div",
                  { className: g.dotRow },
                  a.default.createElement("div", { className: g.dot }),
                  a.default.createElement("div", { className: g.dot })
                ),
                a.default.createElement(
                  "div",
                  { className: g.dotRow },
                  a.default.createElement("div", { className: g.dot }),
                  a.default.createElement("div", { className: g.dot })
                ),
                a.default.createElement(
                  "div",
                  { className: g.dotRow },
                  a.default.createElement("div", { className: g.dot }),
                  a.default.createElement("div", { className: g.dot })
                )
              )
            ),
            a.default.createElement(
              "div",
              {
                className: g.content,
                onClick: t,
                onMouseEnter: y(!0),
                onMouseLeave: y(!1),
              },
              a.default.createElement("img", {
                className: g.icon,
                src: "https://cdn.honey.io/images/finance/honey-icon-orange.svg",
                alt: "Open Honey",
              }),
              a.default.createElement(
                "div",
                { className: g.savingsText },
                "HOOK" === i
                  ? a.default.createElement(
                      o.Fragment,
                      null,
                      a.default.createElement(
                        "div",
                        { className: g.title },
                        w()
                      ),
                      a.default.createElement(
                        "div",
                        { className: g.seeSavings },
                        b()
                          ? l.default.getMessage("Click_to_see_savings")
                          : l.default.getMessage("Click_to_see_Gift_Card_Deal")
                      )
                    )
                  : a.default.createElement(
                      "div",
                      { className: g.giftCardInfo },
                      l.default.getMessage("Click_for_gift_card_info")
                    )
              )
            )
          )
        );
      };
    (v.propTypes = {
      handleUnMinimize: u.default.func.isRequired,
      savings: u.default.number.isRequired,
      goldAward: u.default.number.isRequired,
      autoPopType: u.default.string.isRequired,
    }),
      (t.default = v);
  },
  3099: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(1667),
      a = (r = o) && r.__esModule ? r : { default: r };
    t.default = {
      getExtensionID: function () {
        return a.default.getExtensionID();
      },
      connect: function (e, t) {
        return a.default.connect(e, t);
      },
      addOnConnectListener: function (e) {
        return a.default.addOnConnectListener(e);
      },
      removeOnConnnectListener: function (e) {
        return a.default.removeOnConnnectListener(e);
      },
    };
  },
  3100: function (e, t, n) {
    "use strict";
    n(3101);
  },
  3101: function (e, t, n) {
    "use strict";
    var r,
      o,
      a = c(n(113)),
      u = c(n(3102)),
      i = c(n(3188)),
      s = c(n(3190));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ((r = regeneratorRuntime.mark(function e() {
      var t, n, r, o, c, l, d, f;
      return regeneratorRuntime.wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), a.default.dispatch((0, s.default)());
              case 2:
                (t = u.default.pageDetectionListener),
                  (n = u.default.v4FetcherListener),
                  (r = u.default.v5FetcherListener),
                  (o = u.default.userListener),
                  (c = u.default.genericFetcherListener),
                  (l = u.default.productCouponsListener),
                  (d = u.default.uiActionsListener),
                  (f = u.default.optimusProductListener),
                  t(),
                  n(),
                  r(),
                  o(),
                  c(),
                  l(),
                  d(),
                  (0, i.default)(),
                  f();
              case 12:
              case "end":
                return e.stop();
            }
        },
        e,
        void 0
      );
    })),
    (o = function () {
      var e = r.apply(this, arguments);
      return new Promise(function (t, n) {
        return (function r(o, a) {
          try {
            var u = e[o](a),
              i = u.value;
          } catch (e) {
            return void n(e);
          }
          if (!u.done)
            return Promise.resolve(i).then(
              function (e) {
                r("next", e);
              },
              function (e) {
                r("throw", e);
              }
            );
          t(i);
        })("next");
      });
    }),
    function () {
      return o.apply(this, arguments);
    })();
  },
  3102: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = d(n(3103)),
      o = d(n(3176)),
      a = d(n(3178)),
      u = d(n(3179)),
      i = d(n(3181)),
      s = d(n(3183)),
      c = d(n(3185)),
      l = d(n(3186));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = {
      pageDetectionListener: r.default,
      v4FetcherListener: o.default,
      v5FetcherListener: a.default,
      userListener: u.default,
      genericFetcherListener: i.default,
      productCouponsListener: s.default,
      uiActionsListener: c.default,
      optimusProductListener: l.default,
    };
  },
  3103: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(113)),
      o = i(n(12)),
      a = n(134),
      u = i(n(3104));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      a.PAGE_TYPES.map(function (e) {
        return o.default.addListener("pageDetected:" + e, function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = n.data,
            a = "GENERIC" === o;
          r.default.dispatch((0, u.default)({ pageType: e, isGeneric: a }));
        });
      });
    };
  },
  3104: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = g(n(15)),
      o = g(n(1549)),
      a = n(40),
      u = n(1935),
      i = n(1938),
      s = g(n(1553)),
      c = n(3174),
      l = g(n(792)),
      d = g(n(1944)),
      f = n(1945),
      p = g(n(1554)),
      v = g(n(1946));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      var t,
        n,
        g = e.pageType,
        m = e.isGeneric;
      return (
        (t = regeneratorRuntime.mark(function e(t, n) {
          var y, h, _, b, S, P, w, x, E, O, I, T, C, A, R;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (t((0, u.cancelHideTipsAfterTimeout)()),
                      (y = a.pageSelectors.selectMostRecentPageId()(n())),
                      t(a.pageActions.addPageType({ pageType: g, pageId: y })),
                      t(
                        a.pageActions.setIsGeneric({ isGeneric: m, pageId: y })
                      ),
                      (h =
                        a.pageSelectors.selectPageTypesByPageId(y)(n()) || []),
                      (_ = h.some(f.isHomePageType)),
                      (b = h.some(f.isProductPageType)),
                      !_ && !b)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 10), t((0, d.default)());
                  case 10:
                    if (
                      ((S = o.default.selectCanRunTips(n())),
                      (P = S.canRunTips),
                      (w = S.hideReasons),
                      (x = S.disabledByUserReason),
                      (E = S.suppressionReason),
                      t(
                        (0, c.sendTipsVisibilitySdata)({
                          canRunTips: P,
                          hideReasons: w,
                          disabledByUserReason: x,
                          suppressionReason: E,
                        })
                      ),
                      P)
                    ) {
                      e.next = 18;
                      break;
                    }
                    return (
                      t(a.pageActions.updateCurrentPage()),
                      (O = (w || []).join(", ")),
                      r.default.debug(
                        "honeyTips:events:cantRunTips reasons: " + O
                      ),
                      (0, i.unmountApp)(),
                      e.abrupt("return")
                    );
                  case 18:
                    if (
                      ((I = a.pageSelectors.selectCurrentPageId()(n())),
                      (T = a.pageSelectors.selectPendingPageId()(n())),
                      (C =
                        a.pageSelectors.selectPageTypesByPageId(I)(n()) || []),
                      (A = C.some(f.isProductPageType)),
                      (R = (b && (!A || !T)) || _),
                      (e.t0 = R),
                      !e.t0)
                    ) {
                      e.next = 27;
                      break;
                    }
                    return (e.next = 27), t(a.pageActions.updateCurrentPage());
                  case 27:
                    if ((0, i.hasCurrentContainerState)()) {
                      e.next = 33;
                      break;
                    }
                    return (
                      (0, p.default)(n()) || t((0, s.default)()),
                      (0, i.mountApp)(),
                      (e.next = 32),
                      t((0, v.default)(_))
                    );
                  case 32:
                    _ && t((0, l.default)());
                  case 33:
                    t((0, u.hideTipsAfterTimeout)());
                  case 34:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
    };
  },
  3105: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.selectShouldSuppressTips =
        t.selectTipsEnabledByUser =
        t.selectStoreLevelSuppressionExpirationDate =
          void 0);
    var r = n(124),
      o = n(10),
      a = n(33),
      u = n(1933),
      i = n(1934),
      s = (t.selectStoreLevelSuppressionExpirationDate = function (e) {
        return function (t) {
          if (!e) return null;
          var n = (0, i.getStoreKey)(e);
          return r.deviceSelectors.selectDeviceSetting(n)(t);
        };
      }),
      c = (t.selectTipsEnabledByUser = function (e) {
        var t = a.userSelectors.selectUser()(e);
        if (!t || !t.isLoggedIn)
          return r.deviceSelectors.selectDeviceSetting("tipsLoggedOutDisabled")(
            e
          )
            ? { tipsEnabledByUser: !1, reason: "tips_logged_out_disabled" }
            : { tipsEnabledByUser: !0 };
        var n = a.userSelectors.selectSetting("tipsEnabled"),
          o = !!n,
          u = void 0;
        return (
          o ||
            (u =
              void 0 === n ? "tips_enabled_undefined" : "tips_enabled_false"),
          { tipsEnabledByUser: o, reason: u }
        );
      });
    t.selectShouldSuppressTips = function (e) {
      var t = (o.storesSelectors.selectCurrentStore()(e) || {}).id,
        n = Date.now(),
        a = s(t)(e),
        i = a && n < a,
        l =
          n <
          (r.deviceSelectors.selectDeviceSetting(u.LOGGED_OUT_SUPPRESSION_KEY)(
            e
          ) || !1),
        d =
          n <
          (r.deviceSelectors.selectDeviceSetting(u.SNOOZE_ALL_TEMPORARY)(e) ||
            !1),
        f = c(e),
        p = f.tipsEnabledByUser,
        v = f.reason;
      return {
        suppressed: i || l || d || !p,
        reason: d
          ? "snoozed_for_day"
          : i
          ? "snoozed_for_store"
          : l
          ? "snoozed_for_all"
          : p
          ? ""
          : v,
      };
    };
  },
  3106: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(11),
      a = s(n(790)),
      u = s(n(3107)),
      i = s(n(748));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, o.createSelector)(
      function (e) {
        return (0, i.default)()(e);
      },
      function (e) {
        return (0, a.default)(e);
      },
      function (e) {
        return (0, u.default)(e);
      },
      function (e, t, n) {
        return r({}, e, { badgeLocationCurrent: t, isCurrentUserNew: n });
      }
    );
    t.default = c;
  },
  3107: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(124),
      a = n(33),
      u = n(134),
      i = (0, r.createSelector)(
        function (e) {
          return a.userSelectors.selectUser()(e);
        },
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(
            u.DEVICE_SETTINGS.TIPS_BUCKET_DATE
          )(e);
        },
        function (e, t) {
          var n = e && e.isLoggedIn ? e.created : t,
            r = parseInt(n, 10);
          if (!Number.isNaN(r)) return Date.now() < r + 2592e6;
        }
      );
    t.default = i;
  },
  3108: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = y(r),
      a = n(6),
      u = y(n(15)),
      i = n(40),
      s = y(n(3109)),
      c = y(n(3145)),
      l = y(n(3168)),
      d = n(3169),
      f = y(d),
      p = y(n(1551)),
      v = n(134),
      g = n(1936),
      m = y(n(3170));
    function y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      (0, m.default)();
      var e = (0, r.useCallback)(
          i.pageSelectors.selectIsCurrentPageLaunchpad(),
          []
        ),
        t = (0, a.useSelector)(e),
        n = (0, a.useSelector)(f.default),
        y = (0, a.useSelector)(i.pageSelectors.selectHasTipsTimedOut);
      return t && !n
        ? (u.default.debug(
            "honeyTips:container: No valid tip categories for launchpad (" +
              []
                .concat(
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(d.VALID_LAUNCHPAD_TIPS)
                )
                .join(", ") +
              ") found. Not showing badge or container"
          ),
          null)
        : y
        ? (u.default.debug(
            "honeyTips:container: Tips timed out after " +
              g.WAIT_FOR_TIPS_TIMEOUT +
              "ms. Not showing badge or container"
          ),
          null)
        : o.default.createElement(
            p.default,
            { sdataAction: v.TIPS_BADGE_EVENT_ERRORS.BADGE_INJECTION_ERROR },
            o.default.createElement(
              l.default,
              null,
              o.default.createElement(
                "slot",
                null,
                o.default.createElement(c.default, null),
                o.default.createElement(s.default, null)
              )
            )
          );
    };
  },
  3109: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = k(r),
      a = n(6),
      u = n(65),
      i = k(n(1456)),
      s = k(n(1763)),
      c = n(453),
      l = k(n(1550)),
      d = k(n(3110)),
      f = k(n(3111)),
      p = k(n(3112)),
      v = k(n(55)),
      g = k(n(3117)),
      m = k(n(114)),
      y = k(n(3125)),
      h = k(n(1837)),
      _ = k(n(3126)),
      b = k(n(3127)),
      S = k(n(668)),
      P = k(n(3131)),
      w = k(n(1551)),
      x = k(n(751)),
      E = n(134),
      O = k(n(3132)),
      I = k(n(3133)),
      T = n(3139),
      C = k(n(3142)),
      A = k(n(3143)),
      R = k(n(1449)),
      M = k(n(3144));
    function k(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, a.useSelector)(v.default) || {},
        t = e.open,
        n = e.scrollToCategoryId,
        k = e.showLoader,
        N = (0, a.useSelector)(R.default) || [],
        D = (0, a.useSelector)(S.default),
        j = (0, a.useSelector)(l.default),
        L = (0, x.default)(),
        U = (0, r.useRef)(),
        B = (0, O.default)({ containerRef: U }).top,
        F = (0, A.default)(),
        G = F.handleMouseOver,
        H = F.handleMouseLeave,
        V = (0, C.default)(),
        W = (0, r.useMemo)(
          function () {
            return D && j ? [j] : N;
          },
          [N, j, D]
        ),
        Y = (0, y.default)(),
        z = Y.addTipCategoryRef,
        X = Y.scrollToCategory,
        q = (0, r.useMemo)(
          function () {
            return { scrollToCategory: X };
          },
          [X]
        );
      (0, r.useEffect)(
        function () {
          var e = void 0;
          return (
            t &&
              n &&
              X &&
              (e = setTimeout(function () {
                return X(n);
              }, 500)),
            function () {
              return clearTimeout(e);
            }
          );
        },
        [t, X, n]
      );
      var K =
          !k &&
          W.map(function (e, t) {
            var n = e.id,
              r = e.categoryId;
            return o.default.createElement(
              I.default,
              { key: n, tipId: n },
              o.default.createElement(
                _.default,
                {
                  ref: function (e) {
                    return z(r, e);
                  },
                  isLastTip: t === W.length - 1,
                },
                o.default.createElement(
                  w.default,
                  { sdataAction: E.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR },
                  o.default.createElement(m.default, {
                    tipId: n,
                    templateType: "card",
                    isSecondary: t > 0,
                  })
                )
              )
            );
          }),
        J = o.default.createElement(c.Header, {
          leftContainer: o.default.createElement(i.default, null),
          rightContainer: o.default.createElement(p.default, null),
          style: V.header,
        }),
        Q = !!L && o.default.createElement(b.default, null),
        $ =
          (k || !W.length) && o.default.createElement(T.ContainerLoader, null);
      return t
        ? o.default.createElement(
            h.default.Provider,
            { value: q },
            o.default.createElement(
              d.default,
              { ref: U, top: B, onMouseOver: G, onMouseLeave: H },
              o.default.createElement(
                s.default,
                null,
                o.default.createElement(
                  u.UniversalContainerLayout,
                  { header: J, footer: Q, styles: V.container },
                  o.default.createElement(M.default, null),
                  o.default.createElement(f.default, null),
                  o.default.createElement(P.default, null),
                  K,
                  $,
                  o.default.createElement(g.default, null)
                )
              )
            )
          )
        : null;
    };
  },
  3110: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = a(n(0)),
      o = a(n(1));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = (0, n(2).createUseStyles)({
        layout: {
          position: "fixed",
          top: function (e) {
            return e.top;
          },
          right: 16,
          zIndex: 2147483647,
        },
      }),
      i = r.default.forwardRef(function (e, t) {
        var n = e.children,
          o = e.top,
          a = e.onMouseOver,
          i = e.onMouseLeave,
          s = u({ top: o });
        return r.default.createElement(
          "div",
          { className: s.layout, ref: t, onMouseOver: a, onMouseLeave: i },
          n
        );
      });
    (i.propTypes = {
      children: o.default.node,
      top: o.default.number,
      onMouseOver: o.default.func,
      onMouseLeave: o.default.func,
    }),
      (i.defaultProps = {
        children: void 0,
        top: 16,
        onMouseOver: function () {},
        onMouseLeave: function () {},
      }),
      (t.default = i);
  },
  3111: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = n(3),
      u = n(28),
      i = s(n(55));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)(),
        t = (0, o.useSelector)(i.default) || {},
        n = t.id,
        s = t.notificationBanner,
        c = void 0 === s ? {} : s,
        l = c.showBanner,
        d = void 0 !== l && l,
        f = c.copy,
        p = c.color,
        v = c.ctaAction,
        g = c.ctaCopy;
      return r.default.createElement(a.NotificationBanner, {
        show: d,
        copy: f,
        color: p,
        ctaAction: v,
        ctaCopy: g,
        src: "UniversalContainer",
        short: !0,
        stackAbove: !0,
        zIndex: 3,
        onClose: function () {
          return e(u.tipsActions.resetNotificationBanner({ containerId: n }));
        },
      });
    };
  },
  3112: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = P(o),
      u = n(6),
      i = n(3),
      s = P(n(4)),
      c = n(28),
      l = n(33),
      d = n(10),
      f = P(n(3113)),
      p = P(n(3114)),
      v = n(305),
      g = n(1938),
      m = n(459),
      y = n(3115),
      h = P(n(3116)),
      _ = P(n(209)),
      b = n(55),
      S = n(57);
    function P(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var w = function (e, t) {
        var n = (0, b.selectCurrentUniversalContainerId)(t());
        e(c.tipsActions.snoozeContainer({ containerId: n })),
          (0, g.unmountApp)(),
          e(
            (0, v.sdataTipsBadgeEvent)({
              event: "action",
              action: "snooze_page",
            })
          ),
          e(
            (0, m.sdataTipsContainerEvent)({
              event: "action",
              action: "snooze",
            })
          );
      },
      x = function (e) {
        e(
          (0, m.sdataTipsContainerEvent)({
            event: "action",
            action: "click_settings",
          })
        );
      };
    t.default = function () {
      var e = (0, u.useDispatch)(),
        t = ((0, u.useSelector)(l.userSelectors.selectUser()) || {}).isLoggedIn,
        n = (0, u.useSelector)(d.storesSelectors.selectCurrentStoreId()),
        m = ((0, u.useSelector)(S.selectCurrentScrapedProduct) || {}).productId,
        b = (0, u.useSelector)(h.default),
        P = (0, u.useSelector)(c.tipsSelectors.selectConfiguration),
        E = P.links,
        O = void 0 === E ? {} : E,
        I = P.hasExtraSnoozeSettings,
        T = void 0 !== I && I,
        C =
          O.featureSettings ||
          "https://www.joinhoney.com/settings/feature-settings",
        A =
          O.debugProduct ||
          "https://dash.joinhoney.com/product-catalog/product?productId={PRODUCT_ID}",
        R = (0, o.useState)(!1),
        M = r(R, 2),
        k = M[0],
        N = M[1],
        D = [
          {
            copy: s.default.getMessage("Hide_on_this_page"),
            key: "snooze_page",
            onClick: function () {
              e(w);
            },
          },
          {
            copy: s.default.getMessage("Snooze_for_24_hours"),
            key: "snooze_24",
            onClick: function () {
              e((0, y.suppressAllTips)(1)),
                N(!1),
                e(
                  (0, v.sdataTipsBadgeEvent)({
                    event: "action",
                    action: "snooze_24",
                  })
                ),
                (0, g.unmountApp)();
            },
          },
        ],
        j = t
          ? {
              copy: s.default.getMessage("Go_to_settings"),
              key: "go_to_settings",
              onClick: function () {
                N(!k), window.open(C);
              },
            }
          : {
              copy: s.default.getMessage("Snooze_on_all_sites"),
              key: "snooze_all",
              onClick: function () {
                e((0, y.suppressAllTips)(30)),
                  N(!k),
                  e(
                    (0, v.sdataTipsBadgeEvent)({
                      event: "action",
                      action: "snooze_all",
                    })
                  ),
                  (0, g.unmountApp)();
              },
            };
      return (
        T &&
          D.push(
            {
              copy: s.default.getMessage("Snooze_on_this_site"),
              key: "snooze_store",
              onClick: function () {
                e((0, y.suppressStore)(n, 30)),
                  N(!k),
                  e(
                    (0, v.sdataTipsBadgeEvent)({
                      event: "action",
                      action: "snooze_store",
                    })
                  ),
                  (0, g.unmountApp)();
              },
            },
            j
          ),
        b &&
          D.push({
            copy: s.default.getMessage("Debug_product"),
            key: "debug_product",
            onClick: function () {
              return (
                (t = A.replace("{PRODUCT_ID}", m)),
                window.open(t, "_blank"),
                void e(
                  (0, v.sdataTipsBadgeEvent)({
                    event: "action",
                    action: "click_debug_product",
                  })
                )
              );
              var t;
            },
            icon: a.default.createElement(i.Icon, {
              name: "bug",
              type: "stroke",
              color: i.Colors.grey800,
              style: { marginRight: "5px" },
            }),
          }),
        a.default.createElement(
          o.Fragment,
          null,
          a.default.createElement(f.default, {
            open: k,
            onClick: function () {
              N(!k), e(x);
            },
            options: D,
          }),
          a.default.createElement(p.default, {
            onClick: function () {
              e((0, _.default)());
            },
          })
        )
      );
    };
  },
  3113: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = c(r),
      a = c(n(1)),
      u = n(3),
      i = n(2),
      s = c(n(1455));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = (0, i.createUseStyles)({
        settingButton: {
          alignItems: "center",
          background: "none",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          display: "flex",
          height: "32px",
          justifyContent: "center",
          transition: "0.2s",
          width: "32px",
          "&:hover": { backgroundColor: u.Colors.black03 },
          "&:active": { backgroundColor: u.Colors.black08 },
        },
      }),
      d = function (e) {
        var t = e.open,
          n = e.onClick,
          a = e.options,
          i = l();
        return o.default.createElement(
          r.Fragment,
          null,
          o.default.createElement(u.Button, {
            "aria-expanded": t,
            "aria-label": "Honey Settings",
            buttonType: "unstyled",
            className: i.settingButton,
            copy: o.default.createElement(u.Icon, {
              color: u.Colors.grey600,
              name: "setting",
              type: "stroke",
            }),
            onClick: n,
          }),
          t &&
            o.default.createElement(s.default, {
              expanded: t,
              classes: {
                main: {
                  alignSelf: "end",
                  whiteSpace: "nowrap",
                  marginTop: "40px",
                  right: "47px",
                  width: "unset",
                  position: "absolute",
                  top: "0px",
                },
              },
              options: a,
            })
        );
      };
    (d.propTypes = {
      onClick: a.default.func,
      options: a.default.array,
      open: a.default.bool,
    }),
      (d.defaultProps = { onClick: null, open: !1, options: [] }),
      (t.default = d);
  },
  3114: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = s(n(1)),
      a = n(3),
      u = n(2),
      i = s(n(4));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, u.createUseStyles)({
        closeButton: {
          height: "32px",
          marginRight: "-8px",
          position: "initial",
          width: "32px",
        },
      }),
      l = function (e) {
        var t = e.onClick,
          n = c();
        return r.default.createElement(a.CloseButton, {
          "aria-label": i.default.getMessage("Close_Honey"),
          className: n.closeButton,
          onClick: t,
        });
      };
    (l.propTypes = { onClick: o.default.func }),
      (l.defaultProps = { onClick: null }),
      (t.default = l);
  },
  3115: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.suppressAllTipsForLoggedOut =
        t.suppressAllTips =
        t.suppressStore =
          void 0);
    var r,
      o = n(35),
      a = (r = o) && r.__esModule ? r : { default: r },
      u = n(124),
      i = n(33),
      s = n(1934),
      c = n(1933);
    function l(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    function d(e) {
      var t = (0, s.convertDaysToExpirationDateInMs)(e);
      (0, a.default)().add(1, "minute").unix();
      return t;
    }
    (t.suppressStore = function (e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30;
      return (
        (t = l(
          regeneratorRuntime.mark(function t(r) {
            var o, a;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 2:
                      return (
                        (o = (0, s.getStoreKey)(e)),
                        (a = d(n)),
                        t.abrupt(
                          "return",
                          r(
                            u.deviceActions.updateDeviceSetting({
                              key: o,
                              value: a,
                            })
                          )
                        )
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e) {
          return t.apply(this, arguments);
        }
      );
    }),
      (t.suppressAllTips = function (e) {
        return (
          (t = l(
            regeneratorRuntime.mark(function t(n) {
              var r;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", null);
                      case 2:
                        return (
                          (r = d(e)),
                          t.abrupt(
                            "return",
                            n(
                              u.deviceActions.updateDeviceSetting({
                                key: c.SNOOZE_ALL_TEMPORARY,
                                value: r,
                              })
                            )
                          )
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                void 0
              );
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          }
        );
        var t;
      }),
      (t.suppressAllTipsForLoggedOut = function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        return (
          (e = l(
            regeneratorRuntime.mark(function e(n, r) {
              var o, a, s;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = i.userSelectors.selectUser()(r())),
                          (a = !o || !o.isLoggedIn),
                          (s = d(t)),
                          !a)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          n(
                            u.deviceActions.updateDeviceSetting({
                              key: c.LOGGED_OUT_SUPPRESSION_KEY,
                              value: s,
                            })
                          )
                        );
                      case 7:
                        return e.abrupt(
                          "return",
                          n(i.userActions.updateSetting("tipsEnabled", 0))
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      });
  },
  3116: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(33),
      o = n(57);
    t.default = function (e) {
      var t = r.userSelectors.selectUser()(e).isInternalUser,
        n = (0, o.selectCurrentScrapedProduct)(e);
      return !(!t || !n);
    };
  },
  3117: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = m(r),
      a = n(6),
      u = m(n(1761)),
      i = m(n(3118)),
      s = m(n(3119)),
      c = m(n(3120)),
      l = m(n(3124)),
      d = m(n(114)),
      f = n(208),
      p = m(f),
      v = m(n(1551)),
      g = n(134);
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var y = function () {
      var e = (0, a.useSelector)(s.default),
        t = (0, a.useSelector)(l.default);
      return o.default.createElement(
        o.default.Fragment,
        null,
        t &&
          o.default.createElement(d.default, {
            tipId: t,
            templateType: "bottomSheet",
          }),
        e && o.default.createElement(c.default, null)
      );
    };
    t.default = function () {
      var e = (0, a.useDispatch)(),
        t = (0, a.useSelector)(i.default),
        n = (0, r.useCallback)(
          function () {
            e((0, p.default)());
          },
          [e]
        ),
        s = (0, r.useCallback)(
          function () {
            t || e((0, f.resetBottomSheet)());
          },
          [e, t]
        );
      return o.default.createElement(
        v.default,
        { sdataAction: g.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR },
        o.default.createElement(
          u.default,
          { id: "bottom-sheet-1", open: t, onClose: n, onTransitionEnd: s },
          o.default.createElement(y, null)
        )
      );
    };
  },
  3118: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = (0, o.createSelector)(u.default, function (e) {
      return !!(e && e.bottomSheet && e.bottomSheet.isOpen);
    });
    t.default = i;
  },
  3119: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = (0, o.createSelector)(u.default, function (e) {
      return !!(e && e.feedbackForm && e.feedbackForm.open);
    });
    t.default = i;
  },
  3120: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = _(r),
      a = n(6),
      u = n(3),
      i = _(n(4)),
      s = n(28),
      c = n(40),
      l = _(n(205)),
      d = _(n(206)),
      f = _(n(454)),
      p = _(n(207)),
      v = _(n(1860)),
      g = n(665),
      m = _(n(3121)),
      y = _(n(55)),
      h = _(n(208));
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, a.useDispatch)(),
        t = (0, a.useSelector)(c.pageSelectors.selectIsCurrentPageLaunchpad()),
        n = (0, a.useSelector)(y.default),
        _ = n.id,
        b = n.feedbackForm,
        S = void 0 === b ? {} : b,
        P = S.feedbackComment,
        w = S.feedbackOption,
        x = S.feedbackStatus,
        E = S.feedbackValidation,
        O = (0, r.useCallback)(
          function (t) {
            e(
              s.tipsActions.setFeedbackFormComment({
                containerId: _,
                feedbackComment: t,
              })
            ),
              e(
                s.tipsActions.setFeedbackFormStatus({
                  containerId: _,
                  feedbackStatus: "",
                })
              );
          },
          [e, _]
        ),
        I = (0, r.useCallback)(
          function (t) {
            e(
              s.tipsActions.setFeedbackFormOption({
                containerId: _,
                feedbackOption: t,
              })
            ),
              e(
                s.tipsActions.setFeedbackFormStatus({
                  containerId: _,
                  feedbackStatus: "",
                })
              );
          },
          [e, _]
        ),
        T = (0, r.useCallback)(
          function () {
            e(m.default);
          },
          [e]
        ),
        C = (0, r.useCallback)(
          function () {
            e((0, h.default)());
          },
          [e]
        ),
        A = g.BUTTON_COPY_STATUS[x] || i.default.getMessage("Send"),
        R = g.BUTTON_STATUS[x] || "",
        M = (0, v.default)(t).map(function (e) {
          var t = e.value,
            n = e.copy;
          return o.default.createElement(u.RadioButton, {
            key: "".concat("radio-", t),
            value: t,
            copy: n,
          });
        }),
        k = "failed" === x,
        N = o.default.createElement(d.default, {
          onClose: C,
          closeButtonCopy: i.default.getMessage("Close"),
          title: i.default.getMessage("What_are_your_thoughts_Q"),
        }),
        D = o.default.createElement(f.default, {
          ctaCopy: A,
          ctaStatus: R,
          ctaType: "primary",
          handleCta: T,
        });
      return o.default.createElement(
        p.default,
        { header: N, footer: D },
        k &&
          o.default.createElement(
            l.default,
            {
              component: "div",
              variant: "body2",
              style: { color: u.Colors.red600, marginBottom: "8px" },
            },
            E
          ),
        o.default.createElement(
          u.RadioGroup,
          { onChange: I, group: "paymentAmount", selectedValue: w },
          M
        ),
        o.default.createElement(
          "div",
          { style: { marginTop: "14px" } },
          o.default.createElement(u.FormInput, {
            size: 88,
            id: "forminput",
            label: i.default.getMessage("Comments_or_suggestions"),
            value: P,
            onChange: O,
          })
        )
      );
    };
  },
  3121: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(4)),
      o = n(28),
      a = c(n(3122)),
      u = c(n(55)),
      i = c(n(3123)),
      s = n(665);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e, t) {
      var n = (0, u.default)(t()),
        c = n.id,
        l = n.feedbackForm,
        d = void 0 === l ? {} : l,
        f = (0, i.default)(t()),
        p = (o.tipsSelectors.selectTipById(f)(t()) || {}).categoryId,
        v = d.feedbackComment,
        g = d.feedbackOption;
      if (
        g ||
        (e(
          o.tipsActions.setFeedbackFormValidation({
            containerId: c,
            feedbackValidation: r.default.getMessage("Please_select_an_option"),
          })
        ),
        e(
          o.tipsActions.setFeedbackFormStatus({
            containerId: c,
            feedbackStatus: "failed",
          })
        ),
        0)
      )
        try {
          e(
            (0, a.default)({ tipId: f, feedbackComment: v, feedbackOption: g })
          ),
            e(
              o.tipsActions.setFeedbackThumbsState({
                containerId: c,
                feedbackThumbsState: s.FEEDBACK_STATE.negativeFormSubmitted,
                categoryId: p,
              })
            ),
            e(
              o.tipsActions.setFeedbackFormStatus({
                containerId: c,
                feedbackStatus: "success",
              })
            );
        } catch (t) {
          e(
            o.tipsActions.setFeedbackFormStatus({
              containerId: c,
              feedbackStatus: "failed",
            })
          );
        }
    };
  },
  3122: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(189);
    t.default = function (e) {
      var t = e.tipId,
        n = void 0 === t ? "" : t,
        o = e.feedbackOption,
        a = e.feedbackComment;
      return function (e) {
        var t = {
          action: "feedback_detail",
          event: "action",
          feedbackOption: o,
          feedbackComment: a,
          feedback: "thumbs_down_detail",
          tipId: n,
        };
        e((0, r.sdataTipsTipEvent)(t));
      };
    };
  },
  3123: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = (0, o.createSelector)(u.default, function (e) {
      return e && e.bottomSheet && e.bottomSheet.tipId;
    });
    t.default = i;
  },
  3124: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(55),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = (0, o.createSelector)(u.default, function (e) {
      return e && e.bottomSheet && e.bottomSheet.tipId;
    });
    t.default = i;
  },
  3125: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(0),
      a = n(15),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = { behavior: "smooth", block: "center" };
    t.default = function () {
      var e = (0, o.useRef)({ tipsRefs: {} }),
        t = (0, o.useCallback)(function (t, n) {
          e.current.tipsRefs[t] = n;
        }, []),
        n = (0, o.useCallback)(function (t) {
          var n = e.current.tipsRefs[t];
          n
            ? n.scrollIntoView(i)
            : u.default.debug(
                "honeyTips:hooks:useScrollToCategory: scrollToCategory: Category '" +
                  t +
                  "' not found."
              );
        }, []);
      return (0, o.useMemo)(
        function () {
          return { addTipCategoryRef: t, scrollToCategory: n };
        },
        [t, n]
      );
    };
  },
  3126: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = i(n(1)),
      a = n(2),
      u = i(n(751));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        layout: function (e) {
          var t = e.footer,
            n = e.isLastTip;
          return { marginBottom: t && n ? "1px" : "8px" };
        },
      }),
      c = r.default.forwardRef(function (e, t) {
        var n = e.children,
          o = e.isLastTip,
          a = (0, u.default)(),
          i = s({ footer: a, isLastTip: o });
        return r.default.createElement(
          "div",
          { className: i.layout, ref: t },
          n
        );
      });
    (c.propTypes = { children: o.default.node, isLastTip: o.default.bool }),
      (c.defaultProps = { children: void 0, isLastTip: !1 }),
      (t.default = c);
  },
  3127: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(0)),
      o = c(n(1460)),
      a = c(n(3128)),
      u = c(n(3129)),
      i = n(751),
      s = c(i);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      switch ((0, s.default)()) {
        case i.CONTAINER_FOOTER_TYPES.POWERED_BY:
          return r.default.createElement(o.default, null);
        case i.CONTAINER_FOOTER_TYPES.SEE_MORE_TIPS:
          return r.default.createElement(a.default, null);
        case i.CONTAINER_FOOTER_TYPES.SEE_DEAL_SUMMARY:
          return r.default.createElement(u.default, null);
        default:
          return null;
      }
    };
  },
  3128: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = s(n(1747)),
      u = s(n(4)),
      i = s(n(1939));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)();
      return r.default.createElement(a.default, {
        body: u.default.getMessage("View_More_Tips"),
        "aria-label": u.default.getMessage("View_More_Tips"),
        onClick: function () {
          e((0, i.default)());
        },
      });
    };
  },
  3129: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = s(n(3130)),
      u = s(n(4)),
      i = s(n(1939));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)(),
        t = u.default.getMessage("See_Deal_Summary");
      return r.default.createElement(a.default, {
        text: t,
        "aria-label": t,
        icon: "right-line-16",
        onClick: function () {
          e((0, i.default)());
        },
      });
    };
  },
  3130: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = t.NavigationButton = void 0);
    var r = i(n(0)),
      o = i(n(1)),
      a = n(2),
      u = i(n(51));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function c(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(n), !0).forEach(function (t) {
              f(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function f(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var p = (0, a.createUseStyles)({
        root: function (e) {
          var t = e.background,
            n = e.classes;
          return d(
            {
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border: "none",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              flexDirection: "row",
            },
            (void 0 === n ? {} : n).root || {},
            { background: t }
          );
        },
        text: function (e) {
          var t = e.classes;
          return d(
            { composes: "title1", paddingRight: 6 },
            (void 0 === t ? {} : t).text || {},
            { verticalAlign: "middle" }
          );
        },
      }),
      v = function (e) {
        var t,
          n = e.text,
          o = (e.classes, e.icon),
          a = e.children,
          i = c(e, ["text", "classes", "icon", "children"]),
          l = p(e);
        t = a
          ? "string" == typeof a
            ? r.default.createElement("div", { className: l.text }, " ", a, " ")
            : a
          : "string" == typeof n
          ? r.default.createElement("div", { className: l.text }, " ", n, " ")
          : n;
        var d =
          "string" == typeof o
            ? r.default.createElement(u.default, { icon: o })
            : o;
        return r.default.createElement(
          "button",
          s(
            {
              tabIndex: 0,
              "aria-label": "honey-tips-navigation-button",
              className: l.root,
            },
            i
          ),
          t,
          d
        );
      };
    (t.NavigationButton = v),
      (v.propTypes = {
        text: o.default.oneOfType([o.default.string, o.default.node]),
        icon: o.default.oneOfType([o.default.string, o.default.node]),
        background: o.default.string,
        classes: o.default.object,
        children: o.default.oneOfType([o.default.string, o.default.node]),
      }),
      (v.defaultProps = {
        text: null,
        icon: null,
        background: "white",
        classes: {},
        children: null,
      });
    var g = v;
    t.default = g;
  },
  3131: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = f(r),
      a = n(6),
      u = f(n(24)),
      i = n(776),
      s = f(n(1502)),
      c = n(33),
      l = n(40),
      d = n(10);
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e,
        t,
        n = (0, a.useDispatch)(),
        f = (0, a.useSelector)(c.userSelectors.selectUser()),
        p = (0, a.useSelector)(d.storesSelectors.selectCurrentStore()),
        v = (0, a.useSelector)(c.userSelectors.selectUserFollowsCurrentStore),
        g = (0, a.useSelector)(
          c.userSelectors.selectSessionCountForCurrentStore
        ),
        m = (0, a.useSelector)(l.pageSelectors.selectIsCurrentPageLaunchpad()),
        y = (0, r.useCallback)(
          ((e = regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (f && f.isLoggedIn) ||
                        u.default.openEmailAuth("login", "launchpad-ext", !0),
                        n(c.userActions.updateUserFollow(t));
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })),
          (t = function () {
            var t = e.apply(this, arguments);
            return new Promise(function (e, n) {
              return (function r(o, a) {
                try {
                  var u = t[o](a),
                    i = u.value;
                } catch (e) {
                  return void n(e);
                }
                if (!u.done)
                  return Promise.resolve(i).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                e(i);
              })("next");
            });
          }),
          function (e) {
            return t.apply(this, arguments);
          }),
          [n, f]
        );
      return m && p && f
        ? o.default.createElement(i.StoreFollowUI, {
            inPopover: !1,
            store: p,
            storeFollowButton: o.default.createElement(
              "div",
              null,
              o.default.createElement(s.default, {
                allowTooltip: !1,
                isFollowing: v,
                isHeaderButton: !0,
                store: { storeId: p.id, storeName: p.name },
                storeSessionCount: g,
                subSrc: "launchpad",
                updateUserFollow: y,
                user: f,
              })
            ),
          })
        : null;
    };
  },
  3132: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = n(6),
      u = f(n(1855)),
      i = n(324),
      s = n(134),
      c = f(n(790)),
      l = f(n(55)),
      d = f(n(417));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var p = function (e) {
      var t = e.badgeTop,
        n = e.badgeHeight,
        r = e.containerRef;
      if (e.isAutopop) return 15;
      var o,
        a,
        u = ((o = r) && o.current && o.current.offsetHeight) || 0,
        i =
          (a = { badgeTop: t, badgeHeight: n }).badgeTop + a.badgeHeight / 2 <
          window.innerHeight / 2
            ? t + n + 15
            : t - 15 - u;
      return (
        i -
        (function (e) {
          var t = e.containerTop,
            n = e.containerHeight;
          if (t < 15) return t - 15;
          var r = window.innerHeight - 15,
            o = t + n;
          return o > r ? o - r : 0;
        })({ containerTop: i, containerHeight: u })
      );
    };
    t.default = function (e) {
      var t = e.containerRef,
        n = ((0, a.useSelector)(c.default) || {}).top,
        f = void 0 === n ? s.DEFAULT_BADGE_TOP : n,
        v = (0, a.useSelector)(i.uiSelectors.selectBadgeHeight),
        g = ((0, a.useSelector)(l.default) || {}).open,
        m = (0, d.default)(),
        y = (0, o.useState)(s.DEFAULT_CONTAINER_TOP),
        h = r(y, 2),
        _ = h[0],
        b = h[1],
        S = (0, u.default)({
          action: "show",
          sub_src: "tips_container",
          variant: "tips_moved",
        }).topMargin;
      return (
        (0, o.useEffect)(
          function () {
            var e = p({
              badgeTop: f,
              badgeHeight: v,
              containerRef: t,
              isAutopop: m,
            });
            b(e < S ? S : e);
          },
          [v, f, t, m, g, S]
        ),
        (0, o.useMemo)(
          function () {
            return { top: _ };
          },
          [_]
        )
      );
    };
  },
  3133: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = l(o),
      u = n(6),
      i = l(n(1)),
      s = n(182),
      c = l(n(3134));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = function (e) {
      var t = e.tipId,
        n = e.children,
        i = (0, u.useDispatch)(),
        l = (0, o.useState)(null),
        d = r(l, 2),
        f = d[0],
        p = d[1],
        v = (0, s.useInView)({ threshold: 0.4 }),
        g = v.ref,
        m = v.inView,
        y = (0, o.useCallback)(
          function () {
            i((0, c.default)(t));
          },
          [i, t]
        );
      return (
        (0, o.useEffect)(
          function () {
            if (m && !f) {
              var e = setTimeout(y, 1e3);
              p(e);
            } else
              !m &&
                f &&
                p(function (e) {
                  return clearTimeout(e), null;
                });
            return function () {
              clearTimeout(f);
            };
          },
          [y, m, f]
        ),
        a.default.createElement("div", { ref: g }, n)
      );
    };
    (d.propTypes = {
      tipId: i.default.string.isRequired,
      children: i.default.oneOfType([
        i.default.node,
        i.default.arrayOf(i.default.node),
      ]),
    }),
      (d.defaultProps = { children: null }),
      (t.default = d);
  },
  3134: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(28),
      o = v(n(12)),
      a = v(n(64)),
      u = n(10),
      i = v(n(55)),
      s = n(189),
      c = v(n(3135)),
      l = v(n(3136)),
      d = v(n(3137)),
      f = v(n(3138)),
      p = n(57);
    function v(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var m = function (e) {
      return function (t, n) {
        switch ((r.tipsSelectors.selectTipById(e)(n()) || {}).categoryId) {
          case "Offers":
            t((0, c.default)(e));
            break;
          case "PayInFour":
            t((0, l.default)(e));
            break;
          case "CheckoutWithGiftCards":
            t((0, d.default)(e));
            break;
          case "TeamDeals":
            t((0, f.default)(e));
        }
      };
    };
    t.default = function (e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (
        (t = g(
          regeneratorRuntime.mark(function t(c, l) {
            var d, f, v, g, y, h, _, b, S;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((d = r.tipsSelectors.selectTipById(e)(l()) || {}),
                        (f = d.categoryId),
                        (v = u.storesSelectors.selectCurrentStore()(l()) || {}),
                        (g = v.storeId),
                        (y = (0, p.selectCurrentScrapedProduct)(l()) || {}),
                        (h = y.productId),
                        (_ = (0, i.default)(l()) || {}),
                        (b = _.id),
                        (S = _.open),
                        _.tipsShown[e] || (!S && !n))
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.next = 8),
                        o.default.send(
                          "honeyTips:tips",
                          {
                            action: a.default.INCREMENT_TIP_SHOWN,
                            storeId: g,
                            categoryId: f,
                            tipId: e,
                            productId: h,
                          },
                          { background: !0 }
                        )
                      );
                    case 8:
                      c(
                        r.tipsActions.setTipShown({ containerId: b, tipId: e })
                      ),
                        c(
                          (0, s.sdataTipsTipEvent)({ tipId: e, event: "show" })
                        ),
                        c(m(e));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
    };
  },
  3135: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(74),
      o = n(674);
    t.default = function (e) {
      return function (t, n) {
        var a = r.offersSelectors.selectCurrentProductOffer(n());
        t((0, o.sdataOfferEvent)({ tipId: e, actionType: "view", offer: a }));
      };
    };
  },
  3136: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(298)),
      o = n(10),
      a = n(28),
      u = s(n(769)),
      i = n(1491);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return function (t, n) {
        var s = (a.tipsSelectors.selectTipById(e)(n()) || {}).categoryId,
          c = (o.storesSelectors.selectCurrentStore()(n()) || {}).storeId,
          l = (0, u.default)(n()).impressionUrl;
        r.default.fireTracker(l), t((0, i.deprioritize)(s, c));
      };
    };
  },
  3137: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      o = n(28),
      a = n(1491);
    t.default = function (e) {
      return function (t, n) {
        var u = r.storesSelectors.selectCurrentStoreId()(n()),
          i = (o.tipsSelectors.selectTipById(e)(n()) || {}).categoryId;
        t((0, a.deprioritize)(i, u));
      };
    };
  },
  3138: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(171),
      a = n(419),
      u = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return function (t, n) {
        var r = (0, u.default)(n()).hasActiveTeam;
        t(
          (0, o.sdataTeamDealsTeamPDPInteraction)({
            tipId: e,
            actionType: "view",
            subSrc: r
              ? o.TEAM_DEAL_SUB_SRC.inviteSent
              : o.TEAM_DEAL_SUB_SRC.preTeamCreation,
          })
        );
      };
    };
  },
  3139: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ContainerLoader = void 0);
    var r = s(n(0)),
      o = n(2),
      a = n(3),
      u = n(65),
      i = s(n(3140));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, o.createUseStyles)({
        containerLoader: {
          paddingTop: "60px",
          backgroundColor: a.Colors.white,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        container: { lineHeight: "2rem" },
      }),
      l = (t.ContainerLoader = function () {
        var e = c(),
          t = (0, i.default)().map(function (t) {
            return r.default.createElement(
              "div",
              { className: e.container },
              t
            );
          });
        return r.default.createElement(
          "div",
          { className: e.containerLoader },
          r.default.createElement(u.ContainerLoader, {
            loadingImage:
              "https://cdn.honey.io/images/tips/coiny_happy_scientist_beakers_transparent.gif",
            loadingPhrases: t,
            marqueeDelay: 2e3,
          })
        );
      });
    t.default = l;
  },
  3140: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        u ||
          (u = o.default.loadingPhrases.map(function (e) {
            return r.default.getMessage(e);
          }));
        return u;
      });
    var r = a(n(4)),
      o = a(n(3141));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = void 0;
  },
  3141: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = {
      loadingPhrases: [
        "Stand_by_for_some_serious_deal_science",
        "Cooking_up_coupons_rewards_and_tips",
        "Dropping_some_savings_knowledge_in_3_2_1",
        "Channeling_our_savings_superpowers",
        "Our_secret_formula_of_deals_rewards_and_tips_coming_up",
        "Were_whipping_up_todays_deals_and_tips",
        "Were_working_our_deal_finding_magic",
        "Finding_deals_is_a_science",
        "Todays_batch_of_store_deals_and_tips_coming_up",
        "Coiny_is_working_some_shopping_genius",
        "Adding_our_secret_deal_finding_ingredients",
        "Coiny_says_an_informed_shopper_is_a_smart_shopper",
        "Were_working_our_deal_searching_magic",
        "Doing_what_we_do_best_whipping_up_deals_and_tips",
        "Whos_ready_to_save_Q_Stand_by_for_deals",
        "Shopping_wisdom_is_worth_waiting_for",
        "Searching_every_corner_of_the_internet_for_deals",
        "Good_deals_come_to_those_who_wait",
        "Doing_what_we_do_best_finding_you-deals_and_tips",
        "Warming_up_our_shopping_muscles",
        "Were_consulting_our_crystal_ball_for deals",
        "Making_you_a_savings_mixtape",
        "Stick_with_us_P_Were_a_magnet_for_deals",
        "You_find_the_cool_stuff_well_find_the_savings",
      ],
    };
  },
  3142: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(40),
      u = n(0),
      i = n(6),
      s = n(668),
      c = (r = s) && r.__esModule ? r : { default: r };
    t.default = function () {
      var e = (0, u.useCallback)(
          a.pageSelectors.selectIsCurrentPageLaunchpad(),
          []
        ),
        t = (0, i.useSelector)(c.default),
        n = (0, i.useSelector)(e),
        r = t || n;
      return (0, u.useMemo)(
        function () {
          return {
            header: o({}, r && { root: { height: "48px" } }),
            container: o({}, r && { header: { flexBasis: "48px" } }),
          };
        },
        [r]
      );
    };
  },
  3143: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(28),
      a = n(0),
      u = n(6),
      i = c(n(55)),
      s = c(n(1940));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, u.useDispatch)(),
        t = (0, a.useState)(!1),
        n = r(t, 2),
        c = n[0],
        l = n[1],
        d = (0, u.useSelector)(i.default) || {},
        f = d.id,
        p = d.open,
        v = (0, a.useCallback)(
          function () {
            c ||
              (l(!0),
              e(
                o.tipsActions.setIsHoveringOverContainer({
                  containerId: f,
                  isHovering: !0,
                })
              ));
          },
          [f, e, c]
        ),
        g = (0, a.useCallback)(
          function () {
            l(!1),
              e(
                o.tipsActions.setIsHoveringOverContainer({
                  containerId: f,
                  isHovering: !1,
                })
              ),
              e((0, s.default)(1e3));
          },
          [f, e]
        );
      return (
        (0, a.useEffect)(
          function () {
            !p && l(!1);
          },
          [p]
        ),
        (0, a.useMemo)(
          function () {
            return { handleMouseOver: v, handleMouseLeave: g };
          },
          [g, v]
        )
      );
    };
  },
  3144: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = l(o),
      u = n(3),
      i = n(2),
      s = l(n(4)),
      c = l(n(59));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (0, i.createUseStyles)({
      payPalRewardsInfoBanner: {
        alignItems: "center",
        backgroundColor: u.Colors.gold100,
        display: "flex",
        flexDirection: "column",
        marginBottom: "11px",
      },
      coinyWave: { height: "auto", marginTop: "30px", width: "150px" },
      bannerTitle: {
        color: u.Colors.black,
        composes: "h3",
        fontWeight: "500",
        margin: "auto 48px 12px",
        textAlign: "center",
      },
      bannerCopy: {
        color: u.Colors.grey800,
        composes: "body3",
        fontWeight: "400",
        margin: "auto 26px 19px",
      },
      termsAndConditionsCopy: {
        color: u.Colors.grey700,
        composes: "body1",
        marginBottom: "36px",
      },
      termsAndConditionsLink: { color: u.Colors.grey700, composes: "link1" },
    });
    t.default = (0, o.memo)(function () {
      var e = d(),
        t = (0, o.useState)(!0),
        n = r(t, 2),
        u = n[0],
        i = n[1];
      return (
        (0, o.useEffect)(function () {
          c.default
            .getSetting("paypal-rewards-banner-shown")
            .then(function (e) {
              i(e),
                e || c.default.updateSetting("paypal-rewards-banner-shown", !0);
            });
        }, []),
        u
          ? null
          : a.default.createElement(
              "div",
              { className: e.payPalRewardsInfoBanner },
              a.default.createElement("img", {
                className: e.coinyWave,
                src: "https://storage.googleapis.com/honey-cdn/images/paypal/coiny-paypal-wave.png",
                alt: "",
              }),
              a.default.createElement(
                "h3",
                { className: e.bannerTitle },
                s.default.getMessage("Honey_Gold_is_now_PayPal_Rewards")
              ),
              a.default.createElement(
                "p",
                { className: e.bannerCopy },
                s.default.getMessage(
                  "That_means_even_more_ways_to_earn_and_redeem"
                )
              ),
              a.default.createElement(
                "p",
                { className: e.termsAndConditionsCopy },
                a.default.createElement(
                  "a",
                  {
                    className: e.termsAndConditionsLink,
                    href: "https://help.joinhoney.com/article/34-what-are-paypal-rewards",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                  s.default.getMessage("Learn_more")
                ),
                ".",
                " ",
                a.default.createElement(
                  "a",
                  {
                    className: e.termsAndConditionsLink,
                    href: "https://www.paypal.com/us/webapps/mpp/ua/pp-rewards-program-tnc",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                  s.default.getMessage("PayPal_Rewards_Terms")
                ),
                " ",
                s.default.getMessage("Apply"),
                "."
              )
            )
      );
    });
  },
  3145: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = _(o),
      u = n(6),
      i = _(n(3146)),
      s = n(28),
      c = _(n(3151)),
      l = _(n(3152)),
      d = _(n(3157)),
      f = _(n(3160)),
      p = _(n(3162)),
      v = _(n(1940)),
      g = _(n(3163)),
      m = _(n(3166)),
      y = _(n(3167)),
      h = _(n(1943));
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, u.useDispatch)(),
        t = (0, o.useRef)(),
        n = (0, o.useState)(!1),
        _ = r(n, 2),
        b = _[0],
        S = _[1],
        P = (0, o.useState)(!1),
        w = r(P, 2),
        x = w[0],
        E = w[1],
        O = ((0, u.useSelector)(h.default) || {}).categoryId;
      (0, o.useEffect)(
        function () {
          e(m.default);
        },
        [e]
      );
      var I = (0, g.default)({ badgeRef: t }),
        T = I.isDragging,
        C = I.initialBadgeTop,
        A = I.badgeBounds,
        R = I.badgePosition,
        M = I.handleDragStart,
        k = I.handleDragEnd,
        N =
          (0, u.useSelector)(s.tipsSelectors.selectRecentlyClosedContainer()) ||
          !1,
        D = (0, o.useCallback)(
          function () {
            var t = null;
            O && !x && (E(!0), (t = O)),
              e((0, p.default)({ scrollToCategoryId: t }));
          },
          [e, x, O]
        ),
        j = (0, o.useCallback)(
          function () {
            b ||
              (S(!0),
              T ||
                N ||
                (e((0, y.default)(!0)),
                setTimeout(function () {
                  D();
                }, 300)));
          },
          [e, T, b, D, N]
        ),
        L = (0, o.useCallback)(
          function () {
            S(!1), e((0, y.default)(!1)), e((0, v.default)(2e3));
          },
          [e]
        ),
        U = (0, u.useSelector)(d.default);
      return (
        (0, o.useEffect)(
          function () {
            U && e((0, f.default)());
          },
          [e, U]
        ),
        a.default.createElement(
          c.default,
          { top: C },
          a.default.createElement(
            i.default,
            { onStart: M, onStop: k, bounds: A, axis: "y", position: R },
            a.default.createElement(
              "div",
              { ref: t, onMouseOver: j, onMouseLeave: L, onTouchEndCapture: D },
              a.default.createElement(l.default, null)
            )
          )
        )
      );
    };
  },
  3146: function (e, t, n) {
    "use strict";
    var r = n(3147),
      o = r.default,
      a = r.DraggableCore;
    (e.exports = o), (e.exports.default = o), (e.exports.DraggableCore = a);
  },
  3147: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "DraggableCore", {
        enumerable: !0,
        get: function () {
          return d.default;
        },
      }),
      (t.default = void 0);
    var o = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var n = g(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(o, u, i)
              : (o[u] = e[u]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(0)),
      a = v(n(1)),
      u = v(n(49)),
      i = v(n(3148)),
      s = n(1552),
      c = n(1941),
      l = n(791),
      d = v(n(3150)),
      f = v(n(1942)),
      p = [
        "axis",
        "bounds",
        "children",
        "defaultPosition",
        "defaultClassName",
        "defaultClassNameDragging",
        "defaultClassNameDragged",
        "position",
        "positionOffset",
        "scale",
      ];
    function v(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (g = function (e) {
        return e ? n : t;
      })(e);
    }
    function m() {
      return (m =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function y(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    function h(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? h(Object(n), !0).forEach(function (t) {
              T(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : h(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function b(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            o,
            a = [],
            u = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(u = (r = n.next()).done) &&
              (a.push(r.value), !t || a.length !== t);
              u = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              u || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return a;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return S(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function w(e, t) {
      return (w =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function x(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = I(e);
        if (t) {
          var o = I(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return E(this, n);
      };
    }
    function E(e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return O(e);
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function I(e) {
      return (I = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function T(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var C = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && w(e, t);
      })(l, e);
      var t,
        n,
        r,
        a = x(l);
      function l(e) {
        var t;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          T(O((t = a.call(this, e))), "onDragStart", function (e, n) {
            if (
              ((0, f.default)("Draggable: onDragStart: %j", n),
              !1 === t.props.onStart(e, (0, c.createDraggableData)(O(t), n)))
            )
              return !1;
            t.setState({ dragging: !0, dragged: !0 });
          }),
          T(O(t), "onDrag", function (e, n) {
            if (!t.state.dragging) return !1;
            (0, f.default)("Draggable: onDrag: %j", n);
            var r = (0, c.createDraggableData)(O(t), n),
              o = { x: r.x, y: r.y };
            if (t.props.bounds) {
              var a = o.x,
                u = o.y;
              (o.x += t.state.slackX), (o.y += t.state.slackY);
              var i = b((0, c.getBoundPosition)(O(t), o.x, o.y), 2),
                s = i[0],
                l = i[1];
              (o.x = s),
                (o.y = l),
                (o.slackX = t.state.slackX + (a - o.x)),
                (o.slackY = t.state.slackY + (u - o.y)),
                (r.x = o.x),
                (r.y = o.y),
                (r.deltaX = o.x - t.state.x),
                (r.deltaY = o.y - t.state.y);
            }
            if (!1 === t.props.onDrag(e, r)) return !1;
            t.setState(o);
          }),
          T(O(t), "onDragStop", function (e, n) {
            if (!t.state.dragging) return !1;
            if (!1 === t.props.onStop(e, (0, c.createDraggableData)(O(t), n)))
              return !1;
            (0, f.default)("Draggable: onDragStop: %j", n);
            var r = { dragging: !1, slackX: 0, slackY: 0 };
            if (Boolean(t.props.position)) {
              var o = t.props.position,
                a = o.x,
                u = o.y;
              (r.x = a), (r.y = u);
            }
            t.setState(r);
          }),
          (t.state = {
            dragging: !1,
            dragged: !1,
            x: e.position ? e.position.x : e.defaultPosition.x,
            y: e.position ? e.position.y : e.defaultPosition.y,
            prevPropsPosition: _({}, e.position),
            slackX: 0,
            slackY: 0,
            isElementSVG: !1,
          }),
          !e.position ||
            e.onDrag ||
            e.onStop ||
            console.warn(
              "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
            ),
          t
        );
      }
      return (
        (t = l),
        (r = [
          {
            key: "getDerivedStateFromProps",
            value: function (e, t) {
              var n = e.position,
                r = t.prevPropsPosition;
              return !n || (r && n.x === r.x && n.y === r.y)
                ? null
                : ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
                    position: n,
                    prevPropsPosition: r,
                  }),
                  { x: n.x, y: n.y, prevPropsPosition: _({}, n) });
            },
          },
        ]),
        (n = [
          {
            key: "componentDidMount",
            value: function () {
              void 0 !== window.SVGElement &&
                this.findDOMNode() instanceof window.SVGElement &&
                this.setState({ isElementSVG: !0 });
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.setState({ dragging: !1 });
            },
          },
          {
            key: "findDOMNode",
            value: function () {
              var e, t, n;
              return null !==
                (e =
                  null === (t = this.props) ||
                  void 0 === t ||
                  null === (n = t.nodeRef) ||
                  void 0 === n
                    ? void 0
                    : n.current) && void 0 !== e
                ? e
                : u.default.findDOMNode(this);
            },
          },
          {
            key: "render",
            value: function () {
              var e,
                t = this.props,
                n = (t.axis, t.bounds, t.children),
                r = t.defaultPosition,
                a = t.defaultClassName,
                u = t.defaultClassNameDragging,
                l = t.defaultClassNameDragged,
                f = t.position,
                v = t.positionOffset,
                g = (t.scale, y(t, p)),
                h = {},
                b = null,
                S = !Boolean(f) || this.state.dragging,
                P = f || r,
                w = {
                  x: (0, c.canDragX)(this) && S ? this.state.x : P.x,
                  y: (0, c.canDragY)(this) && S ? this.state.y : P.y,
                };
              this.state.isElementSVG
                ? (b = (0, s.createSVGTransform)(w, v))
                : (h = (0, s.createCSSTransform)(w, v));
              var x = (0, i.default)(
                n.props.className || "",
                a,
                (T((e = {}), u, this.state.dragging),
                T(e, l, this.state.dragged),
                e)
              );
              return o.createElement(
                d.default,
                m({}, g, {
                  onStart: this.onDragStart,
                  onDrag: this.onDrag,
                  onStop: this.onDragStop,
                }),
                o.cloneElement(o.Children.only(n), {
                  className: x,
                  style: _(_({}, n.props.style), h),
                  transform: b,
                })
              );
            },
          },
        ]) && P(t.prototype, n),
        r && P(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        l
      );
    })(o.Component);
    (t.default = C),
      T(C, "displayName", "Draggable"),
      T(
        C,
        "propTypes",
        _(
          _({}, d.default.propTypes),
          {},
          {
            axis: a.default.oneOf(["both", "x", "y", "none"]),
            bounds: a.default.oneOfType([
              a.default.shape({
                left: a.default.number,
                right: a.default.number,
                top: a.default.number,
                bottom: a.default.number,
              }),
              a.default.string,
              a.default.oneOf([!1]),
            ]),
            defaultClassName: a.default.string,
            defaultClassNameDragging: a.default.string,
            defaultClassNameDragged: a.default.string,
            defaultPosition: a.default.shape({
              x: a.default.number,
              y: a.default.number,
            }),
            positionOffset: a.default.shape({
              x: a.default.oneOfType([a.default.number, a.default.string]),
              y: a.default.oneOfType([a.default.number, a.default.string]),
            }),
            position: a.default.shape({
              x: a.default.number,
              y: a.default.number,
            }),
            className: l.dontSetMe,
            style: l.dontSetMe,
            transform: l.dontSetMe,
          }
        )
      ),
      T(
        C,
        "defaultProps",
        _(
          _({}, d.default.defaultProps),
          {},
          {
            axis: "both",
            bounds: !1,
            defaultClassName: "react-draggable",
            defaultClassNameDragging: "react-draggable-dragging",
            defaultClassNameDragged: "react-draggable-dragged",
            defaultPosition: { x: 0, y: 0 },
            scale: 1,
          }
        )
      );
  },
  3148: function (e, t, n) {
    "use strict";
    function r(e) {
      var t,
        n,
        o = "";
      if ("string" == typeof e || "number" == typeof e) o += e;
      else if ("object" == typeof e)
        if (Array.isArray(e))
          for (t = 0; t < e.length; t++)
            e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
        else for (t in e) e[t] && (o && (o += " "), (o += t));
      return o;
    }
    function o() {
      for (var e, t, n = 0, o = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
      return o;
    }
    n.r(t),
      n.d(t, "clsx", function () {
        return o;
      }),
      (t.default = o);
  },
  3149: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.browserPrefixToKey = a),
      (t.browserPrefixToStyle = function (e, t) {
        return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
      }),
      (t.default = void 0),
      (t.getPrefix = o);
    var r = ["Moz", "Webkit", "O", "ms"];
    function o() {
      var e,
        t,
        n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "transform";
      if ("undefined" == typeof window) return "";
      var o =
        null === (e = window.document) ||
        void 0 === e ||
        null === (t = e.documentElement) ||
        void 0 === t
          ? void 0
          : t.style;
      if (!o) return "";
      if (n in o) return "";
      for (var u = 0; u < r.length; u++) if (a(n, r[u]) in o) return r[u];
      return "";
    }
    function a(e, t) {
      return t
        ? "".concat(t).concat(
            (function (e) {
              for (var t = "", n = !0, r = 0; r < e.length; r++)
                n
                  ? ((t += e[r].toUpperCase()), (n = !1))
                  : "-" === e[r]
                  ? (n = !0)
                  : (t += e[r]);
              return t;
            })(e)
          )
        : e;
    }
    var u = o();
    t.default = u;
  },
  3150: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var o = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var n = f(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(o, u, i)
              : (o[u] = e[u]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(0)),
      a = d(n(1)),
      u = d(n(49)),
      i = n(1552),
      s = n(1941),
      c = n(791),
      l = d(n(1942));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (f = function (e) {
        return e ? n : t;
      })(e);
    }
    function p(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            o,
            a = [],
            u = !0,
            i = !1;
          try {
            for (
              n = n.call(e);
              !(u = (r = n.next()).done) &&
              (a.push(r.value), !t || a.length !== t);
              u = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              u || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          }
          return a;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return v(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return v(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function y(e, t) {
      return (y =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function h(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = S(e);
        if (t) {
          var o = S(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return _(this, n);
      };
    }
    function _(e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return b(e);
    }
    function b(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function S(e) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function P(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var w = { start: "touchstart", move: "touchmove", stop: "touchend" },
      x = { start: "mousedown", move: "mousemove", stop: "mouseup" },
      E = x,
      O = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && y(e, t);
        })(c, e);
        var t,
          n,
          r,
          a = h(c);
        function c() {
          var e;
          g(this, c);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            P(b((e = a.call.apply(a, [this].concat(n)))), "state", {
              dragging: !1,
              lastX: NaN,
              lastY: NaN,
              touchIdentifier: null,
            }),
            P(b(e), "mounted", !1),
            P(b(e), "handleDragStart", function (t) {
              if (
                (e.props.onMouseDown(t),
                !e.props.allowAnyClick &&
                  "number" == typeof t.button &&
                  0 !== t.button)
              )
                return !1;
              var n = e.findDOMNode();
              if (!n || !n.ownerDocument || !n.ownerDocument.body)
                throw new Error("<DraggableCore> not mounted on DragStart!");
              var r = n.ownerDocument;
              if (
                !(
                  e.props.disabled ||
                  !(t.target instanceof r.defaultView.Node) ||
                  (e.props.handle &&
                    !(0, i.matchesSelectorAndParentsTo)(
                      t.target,
                      e.props.handle,
                      n
                    )) ||
                  (e.props.cancel &&
                    (0, i.matchesSelectorAndParentsTo)(
                      t.target,
                      e.props.cancel,
                      n
                    ))
                )
              ) {
                "touchstart" === t.type && t.preventDefault();
                var o = (0, i.getTouchIdentifier)(t);
                e.setState({ touchIdentifier: o });
                var a = (0, s.getControlPosition)(t, o, b(e));
                if (null != a) {
                  var u = a.x,
                    c = a.y,
                    d = (0, s.createCoreData)(b(e), u, c);
                  (0, l.default)("DraggableCore: handleDragStart: %j", d),
                    (0, l.default)("calling", e.props.onStart),
                    !1 !== e.props.onStart(t, d) &&
                      !1 !== e.mounted &&
                      (e.props.enableUserSelectHack &&
                        (0, i.addUserSelectStyles)(r),
                      e.setState({ dragging: !0, lastX: u, lastY: c }),
                      (0, i.addEvent)(r, E.move, e.handleDrag),
                      (0, i.addEvent)(r, E.stop, e.handleDragStop));
                }
              }
            }),
            P(b(e), "handleDrag", function (t) {
              var n = (0, s.getControlPosition)(
                t,
                e.state.touchIdentifier,
                b(e)
              );
              if (null != n) {
                var r = n.x,
                  o = n.y;
                if (Array.isArray(e.props.grid)) {
                  var a = r - e.state.lastX,
                    u = o - e.state.lastY,
                    i = p((0, s.snapToGrid)(e.props.grid, a, u), 2);
                  if (((a = i[0]), (u = i[1]), !a && !u)) return;
                  (r = e.state.lastX + a), (o = e.state.lastY + u);
                }
                var c = (0, s.createCoreData)(b(e), r, o);
                if (
                  ((0, l.default)("DraggableCore: handleDrag: %j", c),
                  !1 !== e.props.onDrag(t, c) && !1 !== e.mounted)
                )
                  e.setState({ lastX: r, lastY: o });
                else
                  try {
                    e.handleDragStop(new MouseEvent("mouseup"));
                  } catch (t) {
                    var d = document.createEvent("MouseEvents");
                    d.initMouseEvent(
                      "mouseup",
                      !0,
                      !0,
                      window,
                      0,
                      0,
                      0,
                      0,
                      0,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      e.handleDragStop(d);
                  }
              }
            }),
            P(b(e), "handleDragStop", function (t) {
              if (e.state.dragging) {
                var n = (0, s.getControlPosition)(
                  t,
                  e.state.touchIdentifier,
                  b(e)
                );
                if (null != n) {
                  var r = n.x,
                    o = n.y;
                  if (Array.isArray(e.props.grid)) {
                    var a = r - e.state.lastX || 0,
                      u = o - e.state.lastY || 0,
                      c = p((0, s.snapToGrid)(e.props.grid, a, u), 2);
                    (a = c[0]),
                      (u = c[1]),
                      (r = e.state.lastX + a),
                      (o = e.state.lastY + u);
                  }
                  var d = (0, s.createCoreData)(b(e), r, o);
                  if (!1 === e.props.onStop(t, d) || !1 === e.mounted)
                    return !1;
                  var f = e.findDOMNode();
                  f &&
                    e.props.enableUserSelectHack &&
                    (0, i.removeUserSelectStyles)(f.ownerDocument),
                    (0, l.default)("DraggableCore: handleDragStop: %j", d),
                    e.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                    f &&
                      ((0, l.default)("DraggableCore: Removing handlers"),
                      (0, i.removeEvent)(f.ownerDocument, E.move, e.handleDrag),
                      (0, i.removeEvent)(
                        f.ownerDocument,
                        E.stop,
                        e.handleDragStop
                      ));
                }
              }
            }),
            P(b(e), "onMouseDown", function (t) {
              return (E = x), e.handleDragStart(t);
            }),
            P(b(e), "onMouseUp", function (t) {
              return (E = x), e.handleDragStop(t);
            }),
            P(b(e), "onTouchStart", function (t) {
              return (E = w), e.handleDragStart(t);
            }),
            P(b(e), "onTouchEnd", function (t) {
              return (E = w), e.handleDragStop(t);
            }),
            e
          );
        }
        return (
          (t = c),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
                var e = this.findDOMNode();
                e &&
                  (0, i.addEvent)(e, w.start, this.onTouchStart, {
                    passive: !1,
                  });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var e = this.findDOMNode();
                if (e) {
                  var t = e.ownerDocument;
                  (0, i.removeEvent)(t, x.move, this.handleDrag),
                    (0, i.removeEvent)(t, w.move, this.handleDrag),
                    (0, i.removeEvent)(t, x.stop, this.handleDragStop),
                    (0, i.removeEvent)(t, w.stop, this.handleDragStop),
                    (0, i.removeEvent)(e, w.start, this.onTouchStart, {
                      passive: !1,
                    }),
                    this.props.enableUserSelectHack &&
                      (0, i.removeUserSelectStyles)(t);
                }
              },
            },
            {
              key: "findDOMNode",
              value: function () {
                var e, t, n;
                return null !== (e = this.props) && void 0 !== e && e.nodeRef
                  ? null === (t = this.props) ||
                    void 0 === t ||
                    null === (n = t.nodeRef) ||
                    void 0 === n
                    ? void 0
                    : n.current
                  : u.default.findDOMNode(this);
              },
            },
            {
              key: "render",
              value: function () {
                return o.cloneElement(o.Children.only(this.props.children), {
                  onMouseDown: this.onMouseDown,
                  onMouseUp: this.onMouseUp,
                  onTouchEnd: this.onTouchEnd,
                });
              },
            },
          ]) && m(t.prototype, n),
          r && m(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(o.Component);
    (t.default = O),
      P(O, "displayName", "DraggableCore"),
      P(O, "propTypes", {
        allowAnyClick: a.default.bool,
        disabled: a.default.bool,
        enableUserSelectHack: a.default.bool,
        offsetParent: function (e, t) {
          if (e[t] && 1 !== e[t].nodeType)
            throw new Error("Draggable's offsetParent must be a DOM Node.");
        },
        grid: a.default.arrayOf(a.default.number),
        handle: a.default.string,
        cancel: a.default.string,
        nodeRef: a.default.object,
        onStart: a.default.func,
        onDrag: a.default.func,
        onStop: a.default.func,
        onMouseDown: a.default.func,
        scale: a.default.number,
        className: c.dontSetMe,
        style: c.dontSetMe,
        transform: c.dontSetMe,
      }),
      P(O, "defaultProps", {
        allowAnyClick: !1,
        disabled: !1,
        enableUserSelectHack: !0,
        onStart: function () {},
        onDrag: function () {},
        onStop: function () {},
        onMouseDown: function () {},
        scale: 1,
      });
  },
  3151: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = i(n(1)),
      a = n(2),
      u = n(134);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        layout: {
          position: "fixed",
          top: function (e) {
            return e.top;
          },
          right: 0,
          zIndex: 2147483647,
          display: "flex",
        },
      }),
      c = function (e) {
        var t = e.children,
          n = e.top,
          o = s({ top: n });
        return r.default.createElement("div", { className: o.layout }, t);
      };
    (c.propTypes = { children: o.default.node, top: o.default.number }),
      (c.defaultProps = { children: void 0, top: u.DEFAULT_BADGE_TOP }),
      (t.default = c);
  },
  3152: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = g(o),
      u = n(2),
      i = n(6),
      s = g(n(3153)),
      c = g(n(3154)),
      l = g(n(1943)),
      d = g(n(55)),
      f = n(305),
      p = g(n(3155)),
      v = g(n(3156));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = (0, u.createUseStyles)({
      "@keyframes pulsing": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(0.5)" },
        "100%": { transform: "scale(1)" },
      },
      "@keyframes shake": {
        "0%": { transform: "translate(0, 1px)" },
        "10%": { transform: "translate(0, -2px)" },
        "20%": { transform: "translate(0, 3px)" },
        "30%": { transform: "translate(0, -2px)" },
        "40%": { transform: "translate(0, 1px)" },
        "50%": { transform: "translate(0, -2px)" },
        "60%": { transform: "translate(0, 1px)" },
        "70%": { transform: "translate(0, -1px)" },
        "80%": { transform: "translate(0, 1px)" },
        "90%": { transform: "translate(0, -2px)" },
        "100%": { transform: "translate(0, 2px)" },
      },
      root: { display: "flex", cursor: "move" },
      teaserAnimateIn: function (e) {
        return {
          right: "1px",
          marginRight: e.animateTeaserIn ? "0" : "-200px",
          transition: "margin-right 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          textAlign: "left",
        };
      },
      logoAnimation: function (e) {
        var t = e.hasNotification;
        return {
          height: e.isReady && t ? "28px" : "64px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexGrow: 1,
          transition:
            "height 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        };
      },
      loadAnimation: function (e) {
        var t = e.hasNotification,
          n = e.isReady;
        return {
          height: "164px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: n ? "none" : "$pulsing 1s infinite",
          transform: n && t ? "scale(66.65%)" : "scale(100%)",
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        };
      },
      shake: function (e) {
        var t = e.doNotBump,
          n = e.hasBumpAnimation,
          r = e.hasNotification;
        return { animation: n && r && !t ? "$shake 0.82s forwards" : "none" };
      },
    });
    t.default = function () {
      var e = (0, i.useDispatch)(),
        t = (0, o.useState)(!1),
        n = r(t, 2),
        u = n[0],
        g = n[1],
        y = (0, o.useState)(!1),
        h = r(y, 2),
        _ = h[0],
        b = h[1],
        S = (0, o.useState)(),
        P = r(S, 2),
        w = P[0],
        x = P[1],
        E = (0, o.useState)(!1),
        O = r(E, 2),
        I = O[0],
        T = O[1],
        C = (0, o.useState)(!1),
        A = r(C, 2),
        R = A[0],
        M = A[1],
        k = (0, i.useSelector)(d.default) || {},
        N = k.ready,
        D = k.open,
        j = k.hasAutopopped,
        L = ((0, i.useSelector)(l.default) || {}).text;
      (0, o.useEffect)(function () {
        var e = setTimeout(function () {
          return M(!0);
        }, 0);
        return function () {
          clearTimeout(e);
        };
      }, []),
        (0, o.useEffect)(
          function () {
            return (
              (D && N) || j
                ? T(!0)
                : N &&
                  !w &&
                  x(
                    setTimeout(function () {
                      return b(!0);
                    }, 15e3)
                  ),
              function () {
                clearTimeout(w);
              }
            );
          },
          [w, j, N, D]
        ),
        (0, o.useEffect)(
          function () {
            L &&
              N &&
              e(
                (0, f.sdataTipsBadgeEvent)({
                  event: "teaser_show",
                  notification: L,
                })
              );
          },
          [e, N, L]
        );
      var U = (0, o.useCallback)(
          function () {
            u || (g(!0), clearTimeout(w));
          },
          [u, w]
        ),
        B = (0, o.useCallback)(
          function () {
            g(!1);
          },
          [g]
        ),
        F = {
          animateTeaserIn: R,
          hasBumpAnimation: _,
          hasNotification: !!L,
          isReady: N,
          doNotBump: I,
        },
        G = m(F);
      return a.default.createElement(
        "div",
        { className: G.shake },
        a.default.createElement(
          "div",
          { className: G.teaserAnimateIn },
          a.default.createElement(
            "div",
            { className: G.root, onMouseOver: U, onMouseLeave: B },
            a.default.createElement(
              s.default,
              null,
              a.default.createElement(
                "div",
                { className: G.logoAnimation },
                a.default.createElement(
                  "div",
                  { className: G.loadAnimation },
                  a.default.createElement(v.default, { styleVars: F })
                )
              ),
              N && L && a.default.createElement(p.default, { text: L })
            ),
            u && a.default.createElement(c.default, null)
          )
        )
      );
    };
  },
  3153: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = u(n(0)),
      o = n(2),
      a = u(n(1));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = {
        children: a.default.node,
        topLeftContainer: a.default.node,
        topMiddleContainer: a.default.node,
        topRightContainer: a.default.node,
      },
      s = (0, o.createUseStyles)({
        root: {
          width: "80px",
          minHeight: "64px",
          borderRadius: "6px 0px 0px 6px",
          boxShadow: "0px 2px 35px rgba(0, 0, 0, 0.25);",
          position: "relative",
          background: "linear-gradient(180deg, #F26C25 0%, #CC4B06 100%);",
        },
        topRow: {
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }),
      c = function (e) {
        var t = e.children,
          n = e.topLeftContainer,
          o = e.topMiddleContainer,
          a = e.topRightContainer,
          u = s();
        return r.default.createElement(
          "div",
          { className: u.root },
          r.default.createElement(
            "div",
            { className: u.topRow },
            r.default.createElement("div", null, n),
            r.default.createElement("div", null, o),
            r.default.createElement("div", null, a)
          ),
          t
        );
      };
    (c.propTypes = i),
      (c.defaultProps = {
        children: null,
        topLeftContainer: null,
        topMiddleContainer: null,
        topRightContainer: null,
      });
    var l = c;
    t.default = l;
  },
  3154: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = s(n(0)),
      o = n(2),
      a = s(n(1)),
      u = n(3),
      i = s(n(1454));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = { onMouseDown: a.default.func, onMouseUp: a.default.func },
      l = {
        root: { display: "flex" },
        container: {
          width: "27px",
          height: "100%",
          backgroundColor: u.Colors.main600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      d = (0, o.createUseStyles)(l),
      f = function (e) {
        var t = e.onMouseDown,
          n = e.onMouseUp,
          o = d();
        return r.default.createElement(
          "div",
          {
            className: o.root,
            onMouseDown: t,
            onMouseUp: n,
            role: "button",
            tabIndex: "0",
          },
          r.default.createElement(
            "div",
            { className: o.container },
            r.default.createElement(i.default, { color: u.Colors.white })
          )
        );
      };
    (f.propTypes = c),
      (f.defaultProps = {
        onMouseDown: function () {},
        onMouseUp: function () {},
      });
    var p = f;
    t.default = p;
  },
  3155: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = n(2),
      a = i(n(1)),
      u = n(3);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = { text: a.default.string },
      c = {
        "@keyframes fade": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        bottomText: {
          composes: "price2",
          textAlign: "center",
          padding: "8px 2px",
          color: u.Colors.white,
          animation: "$fade 1s forwards",
        },
      },
      l = (0, o.createUseStyles)(c),
      d = function (e) {
        var t = e.text,
          n = l();
        return r.default.createElement("div", { className: n.bottomText }, t);
      };
    (d.propTypes = s), (d.defaultProps = { text: null }), (t.default = d);
  },
  3156: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = i(n(1)),
      a = n(2),
      u = n(3);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        root: function (e) {
          var t = e.hasNotification;
          return {
            paddingTop: e.isReady && t ? "8px" : "0px",
            transition: "paddingTop 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          };
        },
      }),
      c = function (e) {
        var t = e.styleVars,
          n = s(t);
        return r.default.createElement(
          "div",
          { className: n.root },
          r.default.createElement(u.Logo, {
            clickable: !1,
            color: u.Colors.white,
            size: 30,
            h: !0,
          })
        );
      };
    (c.propTypes = {
      styleVars: o.default.shape({
        isReady: o.default.bool,
        hasNotification: o.default.bool,
      }),
    }),
      (c.defaultProps = { styleVars: {} }),
      (t.default = c);
  },
  3157: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.LAUNCHPAD_AUTOPOP_TIPS_BLACKLIST = void 0);
    var r = n(11),
      o = S(n(449)),
      a = S(n(15)),
      u = n(124),
      i = n(68),
      s = n(253),
      c = n(773),
      l = n(74),
      d = n(40),
      f = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(3158)),
      p = n(324),
      v = n(111),
      g = n(28),
      m = S(n(55)),
      y = S(n(188)),
      h = n(57),
      _ = S(n(1450)),
      b = S(n(1550));
    function S(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var P = (t.LAUNCHPAD_AUTOPOP_TIPS_BLACKLIST = new Set([
        "savings-verylow",
        "savings-low",
        "savings-medium",
        "savings-high",
        "savings-veryhigh",
      ])),
      w = "honeyTips:canAutoPop: ",
      x = (0, r.createSelector)(
        function (e) {
          return u.deviceSelectors.selectDeviceSetting("autopopsDisabled")(e);
        },
        function (e) {
          return s.featureSelectors.selectFeatureByName(
            "tips_is_autopop_suppression_respected"
          )(e);
        },
        function (e, t) {
          return e && t;
        }
      ),
      E = (0, r.createSelector)(
        function (e) {
          return x(e);
        },
        function (e) {
          return (0, b.default)(e);
        },
        function (e) {
          return c.launchpadSelectors.selectAutoPopCountForCurrentStore(e);
        },
        function (e, t, n) {
          var r = (t || {}).id;
          return !e && !P.has(r) && !n;
        }
      ),
      O = (0, r.createSelector)(
        function (e) {
          return i.experimentSelectors.selectIsStandaloneOffer(e);
        },
        function (e) {
          return l.offersSelectors.selectCurrentProductOffer(e);
        },
        function (e, t) {
          return !(!e || !t);
        }
      ),
      I = (0, r.createSelector)(
        function (e) {
          return (0, y.default)(e);
        },
        function (e) {
          return g.tipsSelectors.selectAutopopDisabledCategoriesForCurrentStore(
            e
          );
        },
        function (e, t) {
          return (e || [])
            .filter(function (e) {
              var n = e.categoryId;
              return !(t || []).includes(n);
            })
            .some(function (e) {
              return e.score >= 10;
            });
        }
      ),
      T = (0, r.createSelector)(
        function (e) {
          return (0, m.default)(e);
        },
        function (e) {
          return !!(e || {}).open;
        }
      ),
      C = function (e) {
        if (
          (function (e) {
            var t = (0, b.default)(e) || {};
            if ((0, _.default)(t)) {
              var n = i.experimentSelectors.selectVariant(
                v.CURRENT_TIPS_CONTAINER_EXPERIMENT
              )(e);
              if (n === v.TIPS_CONTAINER_VARIANTS.CCP_POP_ALL) return !0;
              if (
                n === v.TIPS_CONTAINER_VARIANTS.CCP_POP_ALL_NON_TOP_PICK &&
                "CCP-Non-Top-Pick-Organic" === t.id
              )
                return !0;
            }
            return !1;
          })(e)
        )
          return !0;
        var t = ((0, b.default)(e) || {}).categoryId,
          n = (o.default.categories[t] || {}).maxAutopopPerStoreThreshold,
          r = void 0 === n ? Number.POSITIVE_INFINITY : n;
        return (
          (f.selectPdpAutopopCountForCurrentStoreByCategoryId(t)(e) || 0) < r
        );
      },
      A = (0, r.createSelector)(
        function (e) {
          return f.selectPdpAutopopCountForCurrentProduct()(e);
        },
        function (e) {
          return e < 1;
        }
      ),
      R = (0, r.createSelector)(
        function (e) {
          return O(e);
        },
        function (e) {
          return T(e);
        },
        function (e) {
          return I(e);
        },
        function (e) {
          return C(e);
        },
        function (e) {
          return (function (e) {
            if (!(0, h.selectCurrentScrapedProduct)(e)) return !1;
            var t = (0, b.default)(e) || {},
              n = t.categoryId,
              r = t.maxAutopopOverrideThreshhold;
            return (
              f.selectPdpAutopopCountForCurrentProductByCategoryId(n)(e) < r
            );
          })(e);
        },
        function (e) {
          return A(e);
        },
        function (e, t, n, r, o, u) {
          return e
            ? (a.default.debug(
                w +
                  "don't show autopop because standalone offer autopop is open"
              ),
              !1)
            : t
            ? (a.default.debug(
                w + "don't show autopop because container already open"
              ),
              !1)
            : n
            ? r
              ? o
                ? (a.default.debug(
                    w + "show autopop because allow by tip configuration"
                  ),
                  !0)
                : u
                ? (a.default.debug(w + "show autopop"), !0)
                : (a.default.debug(
                    w +
                      "don't show autopop because above max autopop per product threshold"
                  ),
                  !1)
              : (a.default.debug(
                  w +
                    "don't show autopop because above max autopop threshold for store and tip category"
                ),
                !1)
            : (a.default.debug(
                w + "don't show autopop because no tips have min autopop score"
              ),
              !1);
        }
      ),
      M = (0, r.createSelector)(
        function (e) {
          return (0, m.default)(e);
        },
        function (e) {
          return d.pageSelectors.selectIsCurrentPageLaunchpad()(e);
        },
        function (e) {
          return p.uiSelectors.selectHasPreOpened(e);
        },
        function (e) {
          return e;
        },
        function (e, t, n, r) {
          var o = e || {},
            u = o.ready,
            i = o.hasClosed;
          return u
            ? i
              ? (a.default.debug(
                  w + "don't show autopop because container was closed"
                ),
                !1)
              : !n && (t ? E(r) : R(r))
            : (a.default.debug(
                w + "don't show autopop because container isn't ready"
              ),
              !1);
        }
      );
    t.default = M;
  },
  3158: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.selectPdpAutopopCountForCurrentProductByCategoryId =
        t.selectPdpAutopopCountForCurrentProduct =
        t.selectPdpAutopopCountForCurrentStoreByCategoryId =
        t.selectPdpAutopopCountForCurrentStore =
          void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(11),
      a = n(3159),
      u = n(57),
      i = n(10),
      s = function (e) {
        return (e && e.tips && e.tips.pdpAutopopCounts) || {};
      },
      c = (0, o.createSelector)(
        function (e) {
          return i.storesSelectors.selectCurrentStoreId()(e);
        },
        function (e) {
          return (0, u.selectCurrentScrapedProduct)(e) || {};
        },
        function (e, t) {
          return { storeId: e, parentId: t.parentId };
        }
      );
    (t.selectPdpAutopopCountForCurrentStore = function () {
      return function (e) {
        var t = (0, a.getStoreKey)(c(e));
        return (s(e).countPerStore || {})[t] || 0;
      };
    }),
      (t.selectPdpAutopopCountForCurrentStoreByCategoryId = function (e) {
        return function (t) {
          var n = (0, a.getStoreCategoryKey)(r({}, c(t), { categoryId: e }));
          return (s(t).countPerStoreAndCategory || {})[n] || 0;
        };
      }),
      (t.selectPdpAutopopCountForCurrentProduct = function () {
        return function (e) {
          var t = (0, a.getProductKey)(c(e));
          return (s(e).countPerProduct || {})[t] || 0;
        };
      }),
      (t.selectPdpAutopopCountForCurrentProductByCategoryId = function (e) {
        return function (t) {
          var n = (0, a.getProductCategoryKey)(r({}, c(t), { categoryId: e }));
          return (s(t).countPerProductAndCategory || {})[n] || 0;
        };
      });
  },
  3159: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (t.getStoreKey = function (e) {
        return "" + e.storeId;
      }),
      o =
        ((t.getStoreCategoryKey = function (e) {
          var t = e.storeId,
            n = e.categoryId;
          return r({ storeId: t }) + ":" + n;
        }),
        (t.getProductKey = function (e) {
          return e.storeId + ":" + e.parentId;
        }));
    t.getProductCategoryKey = function (e) {
      var t = e.storeId,
        n = e.parentId,
        r = e.categoryId;
      return o({ storeId: t, parentId: n }) + ":" + r;
    };
  },
  3160: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(773),
      a = n(40),
      u = n(28),
      i = n(305),
      s = l(n(55)),
      c = l(n(3161));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d,
      f,
      p = function (e, t) {
        var n = (0, s.default)(t()).id;
        return e(
          u.tipsActions.openContainer({ containerId: n, isAutopop: !0 })
        );
      },
      v = function (e) {
        return function (t, n) {
          var r = (0, s.default)(n()).id;
          t(
            u.tipsActions.updateShowTopTipOnly({
              containerId: r,
              showTopTipOnly: e,
            })
          );
        };
      },
      g = (0, r.createAsyncThunk)(
        "tips/initContainer",
        ((d = regeneratorRuntime.mark(function e(t, n) {
          var r,
            u = n.dispatch,
            s = n.getState;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = a.pageSelectors.selectIsCurrentPageLaunchpad()(
                        s()
                      )) || u(v(!0)),
                      u(p),
                      u(
                        (0, i.sdataTipsBadgeEvent)({ event: "implicit_hover" })
                      ),
                      e.abrupt(
                        "return",
                        u(
                          r
                            ? o.launchpadActions.incrementAutoPopCount()
                            : (0, c.default)()
                        )
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (f = function () {
          var e = d.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return f.apply(this, arguments);
        })
      );
    t.default = g;
  },
  3161: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = l(n(64)),
      o = l(n(1550)),
      a = l(n(12)),
      u = n(421),
      i = n(10),
      s = l(n(1490)),
      c = n(57);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var l, d, f, p, v, g, m;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (l = u.sessionSelectors.selectCurrentGlobalSessionId()(
                        n()
                      )),
                      (d = i.storesSelectors.selectCurrentStoreId()(n())),
                      (f = (0, c.selectCurrentScrapedProduct)(n()) || {}),
                      (p = f.parentId),
                      (v = (0, o.default)(n()) || {}),
                      (g = v.categoryId),
                      (m = {
                        action: r.default.TIPS_INCREMENT_PDP_AUTOPOP_COUNT,
                        sessionId: l,
                        storeId: d,
                        parentId: p,
                        categoryId: g,
                      }),
                      (e.next = 7),
                      a.default.send("honeyTips:tips", m, { background: !0 })
                    );
                  case 7:
                    return e.abrupt("return", t((0, s.default)()));
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3162: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(15)),
      o = i(n(26)),
      a = n(28),
      u = i(n(55));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.scrollToCategoryId;
      return function (e, n) {
        if (o.default._visible)
          r.default.debug(
            "honeyTips:openCurrentContainer: Not opening container because UI already visible."
          );
        else {
          var i = (0, u.default)(n()) || {},
            s = i.id;
          i.open ||
            e(
              a.tipsActions.openContainer({
                containerId: s,
                scrollToCategoryId: t,
              })
            );
        }
      };
    };
  },
  3163: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(0),
      a = n(6),
      u = f(n(3164)),
      i = f(n(3165)),
      s = n(134),
      c = f(n(790)),
      l = f(n(209)),
      d = n(324);
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var p = function (e, t) {
        return {
          top: -Math.max(0, e - 15),
          bottom: Math.max(0, window.innerHeight - e - t - 15),
        };
      },
      v = function (e, t) {
        return e + t > window.innerHeight - 15 || e < 0;
      };
    t.default = function (e) {
      var t,
        n = e.badgeRef,
        f = (0, a.useDispatch)(),
        g = (0, o.useState)(!1),
        m = r(g, 2),
        y = m[0],
        h = m[1],
        _ = (0, o.useState)({}),
        b = r(_, 2),
        S = b[0],
        P = b[1],
        w = (0, o.useState)(null),
        x = r(w, 2),
        E = x[0],
        O = x[1],
        I = (0, o.useState)(),
        T = r(I, 2),
        C = T[0],
        A = T[1],
        R = (0, o.useState)(!0),
        M = r(R, 2),
        k = M[0],
        N = M[1],
        D =
          ((t = n) && t.current && t.current.offsetHeight) ||
          s.DEFAULT_BADGE_HEIGHT,
        j = ((0, a.useSelector)(c.default) || {}).top,
        L = void 0 === j ? s.DEFAULT_BADGE_TOP : j,
        U = (0, o.useCallback)(
          function () {
            var e = (function (e) {
              return window.innerHeight - 15 - e;
            })(D);
            f((0, i.default)({ top: e })),
              O(e),
              P(p(e, D)),
              A({ x: 0, y: 0 }),
              setTimeout(function () {
                return A(void 0);
              }, 0);
          },
          [D, f]
        ),
        B = (0, o.useCallback)(
          function () {
            v(L, D) ? U() : P(p(E, D));
          },
          [D, L, E, U]
        );
      (0, o.useEffect)(
        function () {
          "number" != typeof E &&
            "number" == typeof L &&
            (O(L), P(p(L, D)), v(L, D) && U());
        },
        [D, n, L, E, U]
      ),
        (0, o.useEffect)(
          function () {
            var e = (0, u.default)(B, 100);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          },
          [B]
        ),
        (0, o.useEffect)(
          function () {
            f(d.uiActions.badgeHeightUpdated(D));
          },
          [D, f]
        ),
        (0, o.useEffect)(
          function () {
            k && v(L, D) && f((0, i.default)({ top: s.DEFAULT_BADGE_TOP })),
              N(!1);
          },
          [D, L, f, k]
        );
      var F = (0, o.useCallback)(
          function () {
            A(void 0), f((0, l.default)({ resetTipsShown: !1 })), h(!0);
          },
          [f]
        ),
        G = (0, o.useCallback)(
          function (e, t) {
            var n = t.y;
            h(!1);
            var r = E + n,
              o = r !== L;
            f((0, i.default)({ top: r, sendSdata: o }));
          },
          [L, f, E]
        );
      return {
        isDragging: y,
        initialBadgeTop: E,
        badgeBounds: S,
        badgePosition: C,
        handleDragStart: F,
        handleDragEnd: G,
      };
    };
  },
  3164: function (e, t, n) {
    var r = n(1546),
      o = n(103);
    e.exports = function (e, t, n) {
      var a = !0,
        u = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        o(n) &&
          ((a = "leading" in n ? !!n.leading : a),
          (u = "trailing" in n ? !!n.trailing : u)),
        r(e, t, { leading: a, maxWait: t, trailing: u })
      );
    };
  },
  3165: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(124),
      u = n(10),
      i = n(134),
      s = n(305),
      c = n(790),
      l = (r = c) && r.__esModule ? r : { default: r },
      d = n(1937);
    t.default = function (e) {
      var t,
        n,
        r = e.top,
        c = e.sendSdata,
        f = void 0 !== c && c;
      return (
        (t = regeneratorRuntime.mark(function e(t, n) {
          var c, p, v, g;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      f &&
                        ((c = (0, l.default)(n())),
                        (p = o({}, c, { top: r })),
                        t(
                          (0, s.sdataTipsBadgeEvent)({
                            event: "action",
                            action: "move",
                            badgeLocationNew: p,
                          })
                        )),
                      (v = u.storesSelectors.selectCurrentStoreId()(n())),
                      (g = (0, d.shouldUseStoreBadgeSettings)(v)
                        ? i.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS_BY_STORE
                        : i.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS),
                      (e.next = 5),
                      t(
                        a.deviceActions.updateDeviceSetting({
                          key: g,
                          value: { orientation: "topRight", top: r },
                        })
                      )
                    );
                  case 5:
                    return e.abrupt(
                      "return",
                      t(a.deviceActions.loadDeviceSettings())
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
    };
  },
  3166: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(305);
    t.default = function (e) {
      e((0, r.sdataTipsBadgeEvent)({ event: "show" }));
    };
  },
  3167: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(305),
      u = n(55),
      i = (r = u) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return function (t, n) {
        var r = (0, i.default)(n()).id;
        t(o.tipsActions.setBadgeHoverState({ containerId: r, isHovering: e })),
          e &&
            t((0, a.sdataTipsBadgeEvent)({ event: "action", action: "hover" }));
      };
    };
  },
  3168: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = i(n(1)),
      a = n(2),
      u = n(3);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        resetCss: {
          textTransform: "none",
          lineHeight: "normal",
          fontWeight: "normal",
          color: u.Colors.grey900,
        },
      }),
      c = function (e) {
        var t = e.children,
          n = s();
        return r.default.createElement("div", { className: n.resetCss }, t);
      };
    (c.propTypes = { children: o.default.node }),
      (c.defaultProps = { children: void 0 }),
      (t.default = c);
  },
  3169: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.VALID_LAUNCHPAD_TIPS = void 0);
    var r,
      o = n(11),
      a = n(188),
      u = (r = a) && r.__esModule ? r : { default: r };
    var i = (t.VALID_LAUNCHPAD_TIPS = new Set([
        "StoreSavings",
        "MerchantPromotions",
      ])),
      s = (0, o.createSelector)(
        function (e) {
          return (0, u.default)(e);
        },
        function (e) {
          return (e || [])
            .map(function (e) {
              return e.categoryId;
            })
            .some(function (e) {
              return i.has(e);
            });
        }
      );
    t.default = s;
  },
  3170: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      a = n(774),
      u = d(n(671)),
      i = n(10),
      s = d(n(55)),
      c = d(n(3171)),
      l = d(n(3172));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = ((0, o.useSelector)(s.default) || {}).ready,
        t = (0, o.useSelector)(i.storesSelectors.selectCurrentStore()),
        n = (0, o.useSelector)(c.default),
        d = (0, o.useSelector)(l.default);
      (0, r.useEffect)(
        function () {
          e &&
            (n &&
              u.default.trackFeature(
                a.Feature.Offers,
                t.storeId,
                "LaunchpadOffers",
                !t.featureMonitorOffersHidden
              ),
            d &&
              u.default.trackFeature(
                a.Feature.Offers,
                t.storeId,
                "ProductOffer",
                !t.featureMonitorOffersHidden
              ));
        },
        [d, n, e, t]
      );
    };
  },
  3171: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(74),
      u = n(1789),
      i = (r = u) && r.__esModule ? r : { default: r };
    var s = (0, o.createSelector)(
      function (e) {
        return (0, i.default)(e);
      },
      function (e) {
        return a.offersSelectors.selectCurrentStoreProductOffersIgnoringFeatureMonitor(
          e
        );
      },
      function (e, t) {
        return !!e && !!(t || {}).showOffers;
      }
    );
    t.default = s;
  },
  3172: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(74),
      u = n(1787),
      i = (r = u) && r.__esModule ? r : { default: r };
    var s = (0, o.createSelector)(
      function (e) {
        return (0, i.default)(e);
      },
      function (e) {
        return a.offersSelectors.selectCurrentProductOfferIgnoringFeatureMonitor(
          e
        );
      },
      function (e, t) {
        return !!e && !!t;
      }
    );
    t.default = s;
  },
  3173: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = g(n(0)),
      o = n(49),
      a = n(39),
      u = n(2),
      i = g(n(168)),
      s = n(6),
      c = g(n(747)),
      l = g(n(15)),
      d = n(134),
      f = g(n(296)),
      p = n(1689),
      v = g(n(113));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m,
      y,
      h = "z-index: 2147483647 !important; display:block !important;",
      _ = function (e) {
        var t = new MutationObserver(function (n) {
          var r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, i = n[Symbol.iterator]();
              !(r = (u = i.next()).done);
              r = !0
            ) {
              var s = u.value;
              "attributes" === s.type &&
                "style" === s.attributeName &&
                (t.disconnect(), (e.style = h));
            }
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              !r && i.return && i.return();
            } finally {
              if (o) throw a;
            }
          }
        });
        return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), t;
      },
      b = function (e) {
        var t = (0, c.default)();
        e.setAttribute("id", t),
          l.default.debug(
            "honeyTips:mountApp: Setting id = '" + t + "' on root element"
          );
      },
      S = function (e, t, n, r, o) {
        var a = new MutationObserver(function (e) {
          var u = !0,
            i = !1,
            s = void 0;
          try {
            for (
              var c, l = e[Symbol.iterator]();
              !(u = (c = l.next()).done);
              u = !0
            ) {
              var d = c.value;
              if (d.removedNodes.length) {
                var f = !0,
                  p = !1,
                  v = void 0;
                try {
                  for (
                    var g, m = d.removedNodes[Symbol.iterator]();
                    !(f = (g = m.next()).done);
                    f = !0
                  ) {
                    if (g.value.contains(t)) {
                      if ((a.disconnect(), r(), o > 4)) return;
                      P(n, o + 1);
                    }
                  }
                } catch (e) {
                  (p = !0), (v = e);
                } finally {
                  try {
                    !f && m.return && m.return();
                  } finally {
                    if (p) throw v;
                  }
                }
              }
            }
          } catch (e) {
            (i = !0), (s = e);
          } finally {
            try {
              !u && l.return && l.return();
            } finally {
              if (i) throw s;
            }
          }
        });
        return a.observe(e, { childList: !0, characterData: !0 }), a;
      },
      P =
        ((m = regeneratorRuntime.mark(function e(t) {
          var n,
            c,
            l,
            g,
            m,
            y,
            P,
            w,
            x,
            E,
            O,
            I =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = d.INLINE_STYLE_BLOCKLIST.includes(
                        window.location.host
                      )),
                      (c = (0, i.default)()),
                      (l = c.plugins),
                      (g = document.createElement("div")),
                      b(g),
                      document.body.appendChild(g),
                      (m = _(g)),
                      (y = "closed"),
                      (e.next = 10),
                      (0, f.default)(g, null, { mode: y, dontInjectFonts: !0 })
                    );
                  case 10:
                    return (
                      (P = e.sent),
                      (w = new u.SheetsRegistry()),
                      (x = (0, a.create)()).setup({
                        plugins: l,
                        insertionPoint: P.getElementById("honey"),
                      }),
                      n ? (P.getElementById("honey").style = h) : (g.style = h),
                      (E = r.default.createElement(
                        s.Provider,
                        { store: v.default },
                        r.default.createElement(
                          u.JssProvider,
                          { registry: w, jss: x },
                          r.default.createElement(
                            p.Provider,
                            { value: { shadowContainer: g } },
                            t
                          )
                        )
                      )),
                      (e.next = 18),
                      (0, f.default)(g, E, {
                        mode: y,
                        dontInjectFonts: !0,
                        feature: "honey-tips-new",
                        surface: "badge",
                      })
                    );
                  case 18:
                    return (
                      (O = function () {
                        m.disconnect(), (0, o.unmountComponentAtNode)(P);
                      }),
                      S(document.body, g, t, O, I),
                      e.abrupt("return", { container: P, unmountApp: O })
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (y = function () {
          var e = m.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e) {
          return y.apply(this, arguments);
        });
    t.default = P;
  },
  3174: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sendTipsVisibilitySdata = void 0);
    var r,
      o = n(134),
      a = n(15),
      u = (r = a) && r.__esModule ? r : { default: r },
      i = n(68),
      s = n(74),
      c = n(40),
      l = n(324),
      d = n(57),
      f = n(305),
      p = n(299);
    var v = new Set(Object.values(o.HIDE_TIPS_FOR_ALL_USERS_REASONS)),
      g = new Set(),
      m = function (e) {
        return e.every(function (e) {
          return !v.has(e);
        });
      },
      y = function () {
        return function (e) {
          e(
            (0, p.sdataTipsDebugEvent)({
              debugEvent: "funnel",
              action: "not_shown",
            })
          );
        };
      },
      h = function (e) {
        return function (t, n) {
          var r = s.offersSelectors.selectCurrentProductOffer(n());
          if (r) {
            var o = (0, d.selectCurrentScrapedProduct)(n()),
              a = JSON.stringify({ product: o, offer: r });
            t(
              (0, p.sdataTipsDebugEvent)({
                debugEvent: "offers_miss_rate",
                action: e,
                metadataJson: a,
              })
            );
          }
        };
      };
    t.sendTipsVisibilitySdata = function (e) {
      var t = e.canRunTips,
        n = e.hideReasons,
        r = void 0 === n ? [] : n,
        a = e.disabledByUserReason,
        s = e.suppressionReason;
      return function (e, n) {
        var d = "honeyTips:sendTipsVisibilitySdata: ",
          v = c.pageSelectors.selectCurrentPageId()(n());
        if (!g.has(v)) {
          g.add(v);
          var _ = i.experimentSelectors.selectCurrentTipsContainerVariant(n()),
            b = c.pageSelectors.selectIsCurrentPageLaunchpad()(n()) && m(r);
          if (m(r)) {
            var S = JSON.stringify({ funnelForLaunchpad: b });
            e(
              (0, p.sdataTipsDebugEvent)({
                debugEvent: "funnel",
                action: "should_show_container",
                metadataJson: S,
              })
            );
          }
          if (t)
            e(function (e, t) {
              var n = c.pageSelectors.selectIsCurrentPageLaunchpad()(t()),
                r = l.uiSelectors.selectHasPreOpened(t());
              if (n && r) {
                var o = l.uiSelectors.selectPreOpenPathname(t());
                e(
                  (0, f.sdataTipsBadgeEvent)({
                    event: "hide_collision",
                    collisionPathname: o,
                  })
                );
              }
            });
          else {
            if (
              (function (e) {
                return m(e) && e.includes(o.HIDE_TIPS_REASONS.HOLDOUT_GROUP);
              })(r)
            )
              return (
                u.default.debug(
                  d + "Hiding tips because user is in holdout group."
                ),
                e((0, f.sdataTipsBadgeEvent)({ event: "hide_holdout" })),
                e(h("tips_available_holdout")),
                void e(y())
              );
            if (
              (function (e) {
                return m(e) && e.includes(o.HIDE_TIPS_REASONS.DISABLED_BY_USER);
              })(r)
            )
              return (
                u.default.debug(d + "Tips disabled by user."),
                e(
                  (0, f.sdataTipsBadgeEvent)({
                    event: a ? "hide_disable:" + a : "hide_disable",
                    group: "launch_v:" + _,
                  })
                ),
                e(h("tips_available_disable")),
                void e(y())
              );
            if (
              (function (e) {
                return m(e) && e.includes(o.HIDE_TIPS_REASONS.SUPPRESSED);
              })(r)
            )
              return (
                u.default.debug(d + "Tips suppressed by user."),
                e(
                  (0, f.sdataTipsBadgeEvent)({
                    event: s ? "hide_snooze:" + s : "hide_snooze",
                    group: "launch_v:" + _,
                  })
                ),
                e(h("tips_available_suppress")),
                void e(y())
              );
            e(
              (0, p.sdataTipsDebugEvent)({
                debugEvent: "funnel",
                action: "should_not_show_container",
                metadataJson: JSON.stringify({ isValidLaunchpadPage: b }),
              })
            );
            var P = c.pageSelectors.selectIsProductPage(n()),
              w = i.experimentSelectors.selectIsStandaloneOffer(n());
            P &&
              w &&
              e(
                (0, f.sdataTipsBadgeEvent)({
                  event: "hide",
                  group: "autopop_displayed",
                })
              );
          }
        }
      };
    };
  },
  3175: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(133),
      a = n(685),
      u = n(170),
      i = n(256),
      s = n(234),
      c = h(n(1822)),
      l = n(57),
      d = h(n(15)),
      f = n(68),
      p = n(253),
      v = n(663),
      g = n(254),
      m = n(10),
      y = n(33);
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var _ = "honeyTips:loadPL2GoTipData: ";
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var h, b, S, P, w, x, E, O, I, T, C, A, R, M, k, N, D, j, L, U;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t(v.pl2goActions.reset()),
                      (h =
                        g.genericFetcherSelectors.selectCurrentGenericPageProduct(
                          n()
                        )),
                      (b = (0, l.selectCurrentScrapedProduct)(n())),
                      (S = m.storesSelectors.selectCurrentStore()(n())),
                      (P = (b || h || {}).lastPrice),
                      (x = (w = S || {}).currencyCode),
                      (E = w.id),
                      (e.next = 8),
                      (0, u.getHoneyCheckoutEligibilityState)()
                    );
                  case 8:
                    (O = e.sent),
                      t(v.pl2goActions.setCheckoutEligibilityState(O)),
                      (I = P && P > 0 ? (P / 100).toFixed(2) : void 0),
                      (T = (0, c.default)(n())),
                      (e.next = 16);
                    break;
                  case 16:
                    if (!I) {
                      e.next = 21;
                      break;
                    }
                    if (!(P < 3e3 || P > 15e4)) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction:
                            P < 3e3
                              ? s.SUB_ACTION.AMOUNT_TOO_LOW
                              : s.SUB_ACTION.AMOUNT_TOO_HIGH,
                        })
                      ),
                      d.default.debug(_ + "Out of required price range"),
                      e.abrupt("return")
                    );
                  case 21:
                    return (
                      (e.next = 23),
                      t(
                        p.featuresActions.loadFeatures([
                          "honey_checkout_paypal_vcc_pdp_enabled",
                          "honey_checkout_paypal_vcc_enabled",
                        ])
                      )
                    );
                  case 23:
                    if (
                      ((C = p.featureSelectors.selectFeatureByName(
                        "honey_checkout_paypal_vcc_pdp_enabled"
                      )(n())),
                      (A = p.featureSelectors.selectFeatureByName(
                        "honey_checkout_paypal_vcc_enabled"
                      )(n())),
                      ![C, A].some(function (e) {
                        return !e;
                      }))
                    ) {
                      e.next = 31;
                      break;
                    }
                    return (
                      (R = s.SUB_ACTION.VCC_PDP_DISABLED),
                      A || (R = s.SUB_ACTION.VCC_DISABLED),
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction: R,
                        })
                      ),
                      d.default.debug(_ + "Required feature flag not met"),
                      e.abrupt("return")
                    );
                  case 31:
                    if (((M = !1), (e.prev = 32), !E)) {
                      e.next = 41;
                      break;
                    }
                    return (
                      (e.next = 36),
                      (0, u.getCheckoutSetting)(
                        o.checkoutSettingKeys.devToolsEnabled
                      )
                    );
                  case 36:
                    return (
                      (k = e.sent), (e.next = 39), (0, a.getStoreConfig)(E, k)
                    );
                  case 39:
                    (N = e.sent),
                      (M =
                        N &&
                        (N.checkoutTypes || []).includes(o.CheckoutTypes.VCC) &&
                        N.pl2goPdp);
                  case 41:
                    e.next = 46;
                    break;
                  case 43:
                    (e.prev = 43),
                      (e.t0 = e.catch(32)),
                      d.default.error(
                        "PL2Go PDP - store config error: " + e.t0
                      );
                  case 46:
                    if (M) {
                      e.next = 50;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction: s.SUB_ACTION.MERCHANT_DISABLED,
                        })
                      ),
                      d.default.debug(_ + "Required store config not met"),
                      e.abrupt("return")
                    );
                  case 50:
                    return (
                      (e.next = 52),
                      t(
                        f.experimentsActions.loadVariant(
                          i.PL2GO_EXPERIMENTS.PL2GO_RAMP
                        )
                      )
                    );
                  case 52:
                    if (
                      "on" ===
                      f.experimentSelectors.selectVariant(
                        i.PL2GO_EXPERIMENTS.PL2GO_RAMP
                      )(n())
                    ) {
                      e.next = 57;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction:
                            s.SUB_ACTION.USER_IN_EXPERIMENT_CONTROL_GROUP,
                        })
                      ),
                      d.default.debug(_ + "User in experiment control group"),
                      e.abrupt("return")
                    );
                  case 57:
                    return (
                      (e.next = 59),
                      (0, i.getPL2GOPromo)({
                        amountValue: I,
                        currencyCode: x,
                        timeout: 3e3,
                      })
                    );
                  case 59:
                    if (
                      ((D = e.sent),
                      (j = (0, i.validatePL2GOResponse)(D)),
                      (L = j.invalidReason),
                      j.isValid)
                    ) {
                      e.next = 66;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction: s.SUB_ACTION.PRESENTMENT_UNAVAILABLE,
                        })
                      ),
                      d.default.debug("" + _ + L),
                      e.abrupt("return")
                    );
                  case 66:
                    (U = y.userSelectors.selectUser()(n())),
                      (0, s.sendPL2GoSdata)(
                        r({}, T, {
                          action: s.ACTION.USER_ELIGIBLE,
                          subAction: (0, s.getEligibleSubAction)(U, I),
                        })
                      ),
                      t(v.pl2goActions.setValidatedPL2GoResponse(j));
                  case 69:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0,
            [[32, 43]]
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3176: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(113)),
      o = n(440),
      a = s(n(12)),
      u = n(10),
      i = s(n(1947));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "droplist:update",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l,
            d =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = d.type),
                      (a = d.product),
                      (s = void 0 === a ? {} : a),
                      "productFetcher" !== n || !0 !== s.imprint)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (c = u.storesSelectors.selectCurrentStoreId()(
                        r.default.getState()
                      )),
                      (l = (0, o.formatInitialProduct)(s, c)),
                      (e.next = 6),
                      r.default.dispatch((0, i.default)(l))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3177: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(145),
      o = n(40),
      a = n(28);
    t.default = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function (t) {
        var n = o.pageSelectors.selectMostRecentPageId()(t),
          u = r.catalogProductsSelectors.selectCurrentCatalogProduct(t) || {},
          i = o.pageSelectors.selectContainerIdByPageId(n)(t),
          s = a.tipsSelectors.selectContainerByContainerId(i)(t) || {},
          c = e.productId === u.productId,
          l = !!s.ready;
        return c && l;
      };
    };
  },
  3178: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(113)),
      o = n(440),
      a = s(n(12)),
      u = n(10),
      i = s(n(1947));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "current:product",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = l.data),
                      (a = void 0 === n ? {} : n),
                      (s = u.storesSelectors.selectCurrentStoreId()(
                        r.default.getState()
                      )),
                      (c = (0, o.formatInitialProductV5)(a, s)),
                      r.default.dispatch((0, i.default)(c));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3179: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(113)),
      o = s(n(15)),
      a = s(n(12)),
      u = n(33),
      i = s(n(3180));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "user:current:update",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l,
            d =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = d.user),
                      (a = void 0 === n ? {} : n),
                      (s = r.default.getState()),
                      (c = u.userSelectors.selectUser()(s)),
                      (l =
                        c &&
                        a &&
                        c.isLoggedIn === a.isLoggedIn &&
                        c.id === a.id),
                      o.default.debug(
                        "honeyTips:userListener should update:" + !l + " "
                      ),
                      (e.t0 = !l),
                      !e.t0)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 9), r.default.dispatch((0, i.default)());
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3180: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = p(n(1549)),
      o = n(40),
      a = n(254),
      u = n(57),
      i = n(1945),
      s = p(n(1950)),
      c = p(n(1946)),
      l = p(n(1948)),
      d = p(n(1951)),
      f = p(n(55));
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var p, v, g, m, y, h, _, b;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.default.selectCanRunTips(n()).canRunTips) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (p = o.pageSelectors.selectCurrentPageId()(n())),
                      (v =
                        o.pageSelectors.selectPageTypesByPageId(p)(n()) || []),
                      (g = v.some(i.isHomePageType)),
                      (m = v.some(i.isProductPageType)),
                      (y = [t((0, c.default)(g))]),
                      (h = o.pageSelectors.selectIsGenericByPageId(p)(n())),
                      m && !h
                        ? (_ = (0, u.selectScrapedProductByPageId)(p)(n())) &&
                          y.push(t((0, l.default)(_)))
                        : h &&
                          (b =
                            a.genericFetcherSelectors.selectGenericProductByPageId(
                              p
                            )(n())) &&
                          y.push(t((0, d.default)(b))),
                      (e.next = 12),
                      Promise.allSettled(y)
                    );
                  case 12:
                    ((0, f.default)(n()) || {}).ready && t((0, s.default)());
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3181: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(113)),
      o = s(n(12)),
      a = n(10),
      u = n(440),
      i = s(n(3182));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      o.default.addListener(
        "current:product:generic",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            o,
            s,
            c,
            l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = l.data),
                      (o = void 0 === n ? {} : n),
                      (s = a.storesSelectors.selectCurrentStoreId()(
                        r.default.getState()
                      )),
                      (c = (0, u.formatInitialProductGeneric)(o, s)),
                      r.default.dispatch((0, i.default)(c));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3182: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = d(n(1549)),
      o = n(40),
      a = n(254),
      u = d(n(1553)),
      i = d(n(792)),
      s = d(n(1554)),
      c = d(n(1951)),
      l = d(n(1944));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, d) {
          var f, p, v, g, m;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n((0, l.default)());
                  case 2:
                    if (r.default.selectCanRunTips(d()).canRunTips) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return");
                  case 5:
                    if (
                      ((f = o.pageSelectors.selectMostRecentPageId()(d())),
                      (p = o.pageSelectors.selectIsGenericPage(d())),
                      (v = p && !(0, s.default)(d())),
                      p)
                    ) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt("return");
                  case 10:
                    return (
                      n(
                        a.genericFetcherActions.productFetched({
                          pageId: f,
                          product: e,
                        })
                      ),
                      v
                        ? n((0, u.default)())
                        : ((g = o.pageSelectors.selectCurrentPageId()(d())),
                          (m = o.pageSelectors.selectContainerIdByPageId(g)(
                            d()
                          )),
                          n(
                            o.pageActions.setContainerId({
                              containerId: m,
                              pageId: f,
                            })
                          )),
                      n(o.pageActions.updateCurrentPage()),
                      (t.next = 15),
                      n((0, c.default)(e))
                    );
                  case 15:
                    n((0, i.default)());
                  case 16:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  3183: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(113)),
      o = u(n(12)),
      a = u(n(3184));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e;
      o.default.addListener(
        "honeyTips:pdpCoupons:honeyProductCoupons:init",
        ((e = regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r.default.dispatch((0, a.default)());
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        })
      );
    };
  },
  3184: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(55)),
      o = u(n(1950)),
      a = n(1949);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t(a.loadTopProductCoupon);
                  case 2:
                    ((0, r.default)(n()) || {}).ready && t((0, o.default)());
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3185: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(113)),
      o = u(n(12)),
      a = n(324);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      o.default.addListener("ui:action", function (e, t) {
        r.default.dispatch(a.uiActions.addAction(t));
      });
    };
  },
  3186: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(113)),
      o = n(440),
      a = s(n(12)),
      u = n(10),
      i = s(n(3187));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "optimus:productDetected",
        ((e = regeneratorRuntime.mark(function e(t, n) {
          var a, s, c, l;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = (n || {}).data),
                      (s = void 0 === a ? {} : a),
                      (c = u.storesSelectors.selectCurrentStoreId()(
                        r.default.getState()
                      )),
                      (l = (0, o.formatInitialProductOptimus)(s, c)),
                      r.default.dispatch((0, i.default)(l));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3187: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(15)),
      o = n(253),
      a = n(730),
      u = n(40),
      i = n(661),
      s = c(n(1555));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, c) {
          var l;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      n(
                        o.featuresActions.loadFeatures([
                          "tips_use_optimus_product",
                        ])
                      )
                    );
                  case 2:
                    if (
                      o.featureSelectors.selectFeatureByName(
                        "tips_use_optimus_product"
                      )(c())
                    ) {
                      t.next = 6;
                      break;
                    }
                    return (
                      r.default.debug(
                        "honeyTips:handleOptimusProduct: Feature 'tips_use_optimus_product' is disabled. Returning early."
                      ),
                      t.abrupt("return")
                    );
                  case 6:
                    if (
                      ((l = u.pageSelectors.selectMostRecentPageId()(c())),
                      n(
                        a.optimusActions.loadProductByPageId({
                          pageId: l,
                          product: e,
                        })
                      ),
                      !i.productFetcherSelectors.selectProductByPageId(l)(c()))
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (
                      r.default.debug(
                        "honeyTips:handleOptimusProduct: VIM product is available, which is more likely to be accurate. Returning early."
                      ),
                      t.abrupt("return")
                    );
                  case 12:
                    return (t.next = 14), n((0, s.default)(e));
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  3188: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(113)),
      o = n(142),
      a = u(n(3189));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i,
      s,
      c =
        ((i = regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 3), (0, o.waitForUrlChange)();
                  case 3:
                    r.default.dispatch((0, a.default)()), (e.next = 0);
                    break;
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (s = function () {
          var e = i.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(i);
            })("next");
          });
        }),
        function () {
          return s.apply(this, arguments);
        });
    t.default = c;
  },
  3189: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(40),
      o = n(1935);
    t.default = function () {
      return function (e) {
        e((0, o.cancelHideTipsAfterTimeout)()), e(r.pageActions.pageInit());
      };
    };
  },
  3190: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(68),
      o = n(40),
      a = n(10),
      u = n(124),
      i = n(111),
      s = n(28),
      c = n(253),
      l = n(299);
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t(o.pageActions.pageInit()),
                      (e.next = 3),
                      Promise.all([
                        t(a.storesActions.load()),
                        t(
                          r.experimentsActions.loadVariant(
                            i.CURRENT_TIPS_CONTAINER_EXPERIMENT
                          )
                        ),
                        t(u.deviceActions.loadScreenviewId()),
                        t(s.tipsActions.loadSendTipsDebugEventsFlag()),
                        t(
                          c.featuresActions.loadFeatures(
                            Object.values(i.DISABLE_TIPS_DEBUG_EVENT_FEATURES)
                          )
                        ),
                      ])
                    );
                  case 3:
                    t(
                      (0, l.sdataTipsDebugEvent)({
                        action: "init",
                        debugEvent: "funnel",
                      })
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var u = t[o](a),
                  i = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(i).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(i);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3191: function (e, t, n) {
    "use strict";
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a =
        ((r = m(
          regeneratorRuntime.mark(function e(t, n) {
            var r, a, l, p, g, m;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.data), (e.next = 3), c.default.getCurrent();
                    case 3:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      e.t0 = {};
                    case 6:
                      if (((a = e.t0), (l = a.id), r)) {
                        e.next = 11;
                        break;
                      }
                      return (
                        d.default.error(
                          "WhereAmI was handed undefined product info"
                        ),
                        e.abrupt("return")
                      );
                    case 11:
                      if (
                        ((p = o({ store_id: l }, r)),
                        (g = (0, u.default)(p)) === y)
                      ) {
                        e.next = 21;
                        break;
                      }
                      return (
                        (y = g),
                        (e.next = 17),
                        s.default
                          .send(
                            "stores:action",
                            { action: "getAtlas", data: { atlasPayload: p } },
                            { background: !0 }
                          )
                          .catch(function (e) {
                            d.default.error(
                              "Error while getting atlas: " + (e || e.message)
                            );
                          })
                      );
                    case 17:
                      (m = e.sent),
                        i.default.dispatch(
                          (0, v.default)({
                            whereAmIPayload: n,
                            atlasProducts: m,
                          })
                        ),
                        f.default.sendEvent("ext009009", {
                          where_am_i: r,
                          is_initial_observation: h,
                          products: m,
                        }),
                        (h = !1);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e, t) {
          return r.apply(this, arguments);
        }),
      u = g(n(3192)),
      i = g(n(113)),
      s = g(n(12)),
      c = g(n(19)),
      l = g(n(414)),
      d = g(n(15)),
      f = g(n(13)),
      p = g(n(101)),
      v = g(n(3196));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function m(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var y = "",
      h = !0;
    s.default.addListener("vims:reportWhereAmI", a),
      s.default.addListener("pageDetected:WHERE_AM_I", function (e, t) {
        var n,
          r = t.frameworkId;
        p.default.getFeatureFlag("ext_run_wai_vim").then(
          ((n = m(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", {});
                      case 2:
                        return e.abrupt(
                          "return",
                          c.default.getCurrent().then(
                            (function () {
                              var e = m(
                                regeneratorRuntime.mark(function e(t) {
                                  var n = t.id;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              l.default.getAndRunV5Vim(
                                                n,
                                                "wai",
                                                r
                                              )
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    void 0
                                  );
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (e) {
            return n.apply(this, arguments);
          })
        );
      });
  },
  3192: function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof JSON ? JSON : n(3193),
      o =
        Array.isArray ||
        function (e) {
          return "[object Array]" === {}.toString.call(e);
        },
      a =
        Object.keys ||
        function (e) {
          var t =
              Object.prototype.hasOwnProperty ||
              function () {
                return !0;
              },
            n = [];
          for (var r in e) t.call(e, r) && n.push(r);
          return n;
        };
    e.exports = function (e, t) {
      t || (t = {}), "function" == typeof t && (t = { cmp: t });
      var n = t.space || "";
      "number" == typeof n && (n = Array(n + 1).join(" "));
      var u,
        i = "boolean" == typeof t.cycles && t.cycles,
        s =
          t.replacer ||
          function (e, t) {
            return t;
          },
        c =
          t.cmp &&
          ((u = t.cmp),
          function (e) {
            return function (t, n) {
              var r = { key: t, value: e[t] },
                o = { key: n, value: e[n] };
              return u(r, o);
            };
          }),
        l = [];
      return (function e(t, u, d, f) {
        var p = n ? "\n" + new Array(f + 1).join(n) : "",
          v = n ? ": " : ":";
        if (
          (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()),
          void 0 !== (d = s.call(t, u, d)))
        ) {
          if ("object" != typeof d || null === d) return r.stringify(d);
          if (o(d)) {
            for (var g = [], m = 0; m < d.length; m++) {
              var y = e(d, m, d[m], f + 1) || r.stringify(null);
              g.push(p + n + y);
            }
            return "[" + g.join(",") + p + "]";
          }
          if (-1 !== l.indexOf(d)) {
            if (i) return r.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          l.push(d);
          var h = a(d).sort(c && c(d));
          for (g = [], m = 0; m < h.length; m++) {
            var _ = e(d, (u = h[m]), d[u], f + 1);
            if (_) {
              var b = r.stringify(u) + v + _;
              g.push(p + n + b);
            }
          }
          return l.splice(l.indexOf(d), 1), "{" + g.join(",") + p + "}";
        }
      })({ "": e }, "", e, 0);
    };
  },
  3193: function (e, t, n) {
    "use strict";
    (t.parse = n(3194)), (t.stringify = n(3195));
  },
  3194: function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      u = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t",
      };
    function i(e) {
      throw { name: "SyntaxError", message: e, at: r, text: a };
    }
    function s(e) {
      return (
        e && e !== o && i("Expected '" + e + "' instead of '" + o + "'"),
        (o = a.charAt(r)),
        (r += 1),
        o
      );
    }
    function c() {
      var e,
        t = "";
      for ("-" === o && ((t = "-"), s("-")); o >= "0" && o <= "9"; )
        (t += o), s();
      if ("." === o) for (t += "."; s() && o >= "0" && o <= "9"; ) t += o;
      if ("e" === o || "E" === o)
        for (
          t += o, s(), ("-" !== o && "+" !== o) || ((t += o), s());
          o >= "0" && o <= "9";

        )
          (t += o), s();
      return (e = Number(t)), isFinite(e) || i("Bad number"), e;
    }
    function l() {
      var e,
        t,
        n,
        r = "";
      if ('"' === o)
        for (; s(); ) {
          if ('"' === o) return s(), r;
          if ("\\" === o)
            if ((s(), "u" === o)) {
              for (
                n = 0, t = 0;
                t < 4 && ((e = parseInt(s(), 16)), isFinite(e));
                t += 1
              )
                n = 16 * n + e;
              r += String.fromCharCode(n);
            } else {
              if ("string" != typeof u[o]) break;
              r += u[o];
            }
          else r += o;
        }
      i("Bad string");
    }
    function d() {
      for (; o && o <= " "; ) s();
    }
    function f() {
      switch ((d(), o)) {
        case "{":
          return (function () {
            var e,
              t = {};
            if ("{" === o) {
              if ((s("{"), d(), "}" === o)) return s("}"), t;
              for (; o; ) {
                if (
                  ((e = l()),
                  d(),
                  s(":"),
                  Object.prototype.hasOwnProperty.call(t, e) &&
                    i('Duplicate key "' + e + '"'),
                  (t[e] = f()),
                  d(),
                  "}" === o)
                )
                  return s("}"), t;
                s(","), d();
              }
            }
            i("Bad object");
          })();
        case "[":
          return (function () {
            var e = [];
            if ("[" === o) {
              if ((s("["), d(), "]" === o)) return s("]"), e;
              for (; o; ) {
                if ((e.push(f()), d(), "]" === o)) return s("]"), e;
                s(","), d();
              }
            }
            i("Bad array");
          })();
        case '"':
          return l();
        case "-":
          return c();
        default:
          return o >= "0" && o <= "9"
            ? c()
            : (function () {
                switch (o) {
                  case "t":
                    return s("t"), s("r"), s("u"), s("e"), !0;
                  case "f":
                    return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
                  case "n":
                    return s("n"), s("u"), s("l"), s("l"), null;
                  default:
                    i("Unexpected '" + o + "'");
                }
              })();
      }
    }
    e.exports = function (e, t) {
      var n;
      return (
        (a = e),
        (r = 0),
        (o = " "),
        (n = f()),
        d(),
        o && i("Syntax error"),
        "function" == typeof t
          ? (function e(n, r) {
              var o,
                a,
                u = n[r];
              if (u && "object" == typeof u)
                for (o in f)
                  Object.prototype.hasOwnProperty.call(u, o) &&
                    (void 0 === (a = e(u, o)) ? delete u[o] : (u[o] = a));
              return t.call(n, r, u);
            })({ "": n }, "")
          : n
      );
    };
  },
  3195: function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      u =
        /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      i = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      };
    function s(e) {
      return (
        (u.lastIndex = 0),
        u.test(e)
          ? '"' +
            e.replace(u, function (e) {
              var t = i[e];
              return "string" == typeof t
                ? t
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    e.exports = function (e, t, n) {
      var u;
      if (((r = ""), (o = ""), "number" == typeof n))
        for (u = 0; u < n; u += 1) o += " ";
      else "string" == typeof n && (o = n);
      if (
        ((a = t),
        t &&
          "function" != typeof t &&
          ("object" != typeof t || "number" != typeof t.length))
      )
        throw new Error("JSON.stringify");
      return (function e(t, n) {
        var u,
          i,
          c,
          l,
          d,
          f = r,
          p = n[t];
        switch (
          (p &&
            "object" == typeof p &&
            "function" == typeof p.toJSON &&
            (p = p.toJSON(t)),
          "function" == typeof a && (p = a.call(n, t, p)),
          typeof p)
        ) {
          case "string":
            return s(p);
          case "number":
            return isFinite(p) ? String(p) : "null";
          case "boolean":
          case "null":
            return String(p);
          case "object":
            if (!p) return "null";
            if (
              ((r += o),
              (d = []),
              "[object Array]" === Object.prototype.toString.apply(p))
            ) {
              for (l = p.length, u = 0; u < l; u += 1) d[u] = e(u, p) || "null";
              return (
                (c =
                  0 === d.length
                    ? "[]"
                    : r
                    ? "[\n" + r + d.join(",\n" + r) + "\n" + f + "]"
                    : "[" + d.join(",") + "]"),
                (r = f),
                c
              );
            }
            if (a && "object" == typeof a)
              for (l = a.length, u = 0; u < l; u += 1)
                "string" == typeof (i = a[u]) &&
                  (c = e(i, p)) &&
                  d.push(s(i) + (r ? ": " : ":") + c);
            else
              for (i in p)
                Object.prototype.hasOwnProperty.call(p, i) &&
                  (c = e(i, p)) &&
                  d.push(s(i) + (r ? ": " : ":") + c);
            return (
              (c =
                0 === d.length
                  ? "{}"
                  : r
                  ? "{\n" + r + d.join(",\n" + r) + "\n" + f + "}"
                  : "{" + d.join(",") + "}"),
              (r = f),
              c
            );
        }
      })("", { "": e });
    };
  },
  3196: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = b(n(1916)),
      a = b(n(64)),
      u = n(111),
      i = n(251),
      s = b(n(22)),
      c = b(n(15)),
      l = b(n(12)),
      d = n(40),
      f = n(1429),
      p = n(10),
      v = n(68),
      g = n(661),
      m = n(730),
      y = n(1931),
      h = n(299),
      _ = b(n(1555));
    function b(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function S(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var u = t[o](a),
                i = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return Promise.resolve(i).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(i);
          })("next");
        });
      };
    }
    var P = "honeyTips:handleWhereAmI: ",
      w = function () {
        return (
          (e = S(
            regeneratorRuntime.mark(function e(t, n) {
              var r;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t(
                            v.experimentsActions.loadVariant(
                              u.CURRENT_TIPS_CONTAINER_EXPERIMENT
                            )
                          )
                        );
                      case 2:
                        return (
                          (r = v.experimentSelectors.selectVariant(
                            u.CURRENT_TIPS_CONTAINER_EXPERIMENT
                          )(n())),
                          e.abrupt(
                            "return",
                            r ===
                              u.TIPS_CONTAINER_VARIANTS.PF_ENABLED_WAI_DISABLED
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
        var e;
      },
      x = function (e) {
        var t = e.parentId,
          n = e.storeId,
          r = e.priceInCents;
        return l.default.send(
          "honeyTips:tips",
          {
            action: a.default.TIPS_GET_BEST_MATCH_INVENTORY_PRODUCT,
            parentId: t,
            storeId: n,
            priceInCents: r,
          },
          { background: !0 }
        );
      };
    function E(e, t) {
      if (!e || !t) return !1;
      var n = e === t,
        r = e.includes(t),
        o = t.includes(e);
      return n || r || o;
    }
    var O = function (e) {
        var t = (0, y.getProdData)().prodData,
          n = t && t.canonical_url,
          r = window && window.location && window.location.href,
          o = e.canonicalUrl,
          a = E(n, o),
          u = E(r, o),
          i = a || u;
        return (
          i ||
            c.default.debug(
              P +
                " canonicalUrl does not match page\n           url=" +
                r +
                ", canonicalUrl=" +
                n +
                ", inventoryProductCanonicalUrl=" +
                o
            ),
          {
            isCanonicalMatch: i,
            pageCanonicalUrl: n,
            catalogCanonicalUrl: o,
            pageUrl: r,
          }
        );
      },
      I = function (e) {
        return function (t, n) {
          return g.productFetcherSelectors.selectProductByPageId(e)(n())
            ? (c.default.debug(
                P +
                  "VIM product is available, which is likely to be more accurate. No need for whereAmI handler to continue."
              ),
              !0)
            : !!m.optimusSelectors.selectProductByPageId(e)(n()) &&
                (c.default.debug(
                  P +
                    "Optimus product is available, which is likely to be more accurate. No need for whereAmI handler to continue."
                ),
                !0);
        };
      },
      T = function (e) {
        if (!e) return null;
        var t = s.default.cleanPrice(e);
        return parseInt((100 * t).toFixed(), 10);
      };
    t.default = function (e) {
      var t,
        n = e.whereAmIPayload,
        a = e.atlasProducts;
      return (
        (t = S(
          regeneratorRuntime.mark(function e(t, u) {
            var s, l, g, m, y, b, S, E, C, A, R, M, k, N, D, j;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t(w());
                    case 2:
                      if (!e.sent) {
                        e.next = 5;
                        break;
                      }
                      return (
                        c.default.debug(P + "whereAmI handling is disabled."),
                        e.abrupt("return")
                      );
                    case 5:
                      if (
                        ((s = d.pageSelectors.selectMostRecentPageId()(u())),
                        (l = p.storesSelectors.selectCurrentStoreId()(u())),
                        (g = (0, o.default)(a || [], "score") || {}),
                        (m = g.parentId))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        c.default.debug(
                          P +
                            "whereAmI did not find a parentId. Returning early."
                        ),
                        e.abrupt("return")
                      );
                    case 11:
                      if (
                        ((y = (n && n.data) || {}),
                        (b = y.price),
                        (S = T(b)),
                        t(
                          f.whereAmIActions.loadByPageId({
                            pageId: s,
                            parentId: m,
                            whereAmIPayload: n,
                            priceInCents: S,
                            storeId: l,
                          })
                        ),
                        !t(I(s)))
                      ) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt("return");
                    case 16:
                      return (
                        (e.next = 18),
                        x({ parentId: m, storeId: l, priceInCents: S })
                      );
                    case 18:
                      if ((E = e.sent)) {
                        e.next = 24;
                        break;
                      }
                      return (
                        c.default.debug(
                          P +
                            "no matching inventory product found for parentId=" +
                            m +
                            ", storeId=" +
                            l +
                            "."
                        ),
                        (C = { parentId: m, storeId: l }),
                        t(
                          (0, h.sdataTipsCatalogDebugEvent)(
                            r({}, C, { action: "atlas_catalog_missing" }),
                            { skipSessionCheck: !0 }
                          )
                        ),
                        e.abrupt("return")
                      );
                    case 24:
                      if (
                        ((A =
                          "on" ===
                          v.experimentSelectors.selectVariant(
                            i.EXT_ATLAS_MISMATCH
                          )(u())),
                        (R = O(E)),
                        (M = R.isCanonicalMatch),
                        (k = R.pageCanonicalUrl),
                        (N = R.pageUrl),
                        M)
                      ) {
                        e.next = 32;
                        break;
                      }
                      if (
                        (c.default.debug(
                          P +
                            " canonicalUrl does not match page parentId=" +
                            m +
                            ", storeId=" +
                            l +
                            ", isAtlasMismatchOn=" +
                            A
                        ),
                        (D = {
                          productId: E.productId,
                          parentId: E.parentId,
                          variantId: E.variantId,
                          storeId: E.storeId,
                          catalogPrice: E.lastPrice,
                          title: E.title,
                          canonicalUrl: E.canonicalUrl,
                          pageCanonicalUrl: k,
                          pageUrl: N,
                          isAtlasMismatchOn: A,
                        }),
                        t(
                          (0, h.sdataTipsCatalogDebugEvent)(
                            r({}, D, { action: "atlas_url_mismatch" }),
                            { skipSessionCheck: !0 }
                          )
                        ),
                        !A)
                      ) {
                        e.next = 32;
                        break;
                      }
                      return e.abrupt("return");
                    case 32:
                      if (
                        (t(
                          f.whereAmIActions.setBestMatchProductForPage({
                            pageId: s,
                            product: E,
                          })
                        ),
                        !t(I(s)))
                      ) {
                        e.next = 35;
                        break;
                      }
                      return e.abrupt("return");
                    case 35:
                      (j = f.whereAmISelectors.selectProductByPageId(s)(u())),
                        t((0, _.default)(j));
                    case 37:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
    };
  },
  790: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(124),
      a = n(10),
      u = n(134),
      i = n(1937),
      s = { orientation: "topRight", top: u.DEFAULT_BADGE_TOP },
      c = (0, r.createSelector)(
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(
            u.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS
          )(e);
        },
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(
            u.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS_BY_STORE
          )(e);
        },
        function (e) {
          return a.storesSelectors.selectCurrentStoreId()(e);
        },
        function (e, t, n) {
          return (0, i.shouldUseStoreBadgeSettings)(n)
            ? (t || {})[n] || (0, i.getDefaultBadgeSettingsByStoreId)(n)
            : e || s;
        }
      );
    t.default = c;
  },
  791: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.dontSetMe = function (e, t, n) {
        if (e[t])
          return new Error(
            "Invalid prop "
              .concat(t, " passed to ")
              .concat(n, " - do not set this, set it on the child.")
          );
      }),
      (t.findInArray = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (t.apply(t, [e[n], n, e])) return e[n];
      }),
      (t.int = function (e) {
        return parseInt(e, 10);
      }),
      (t.isFunction = function (e) {
        return (
          "function" == typeof e ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }),
      (t.isNum = function (e) {
        return "number" == typeof e && !isNaN(e);
      });
  },
  792: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(28),
      a = n(299),
      u = n(1814),
      i = n(320),
      s = n(459),
      c = n(55),
      l = (r = c) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, l.default)(t()),
          r = n.id;
        n.ready
          ? (e(o.tipsActions.refreshContainer({ containerId: r })),
            e((0, s.sdataTipsContainerEvent)({ event: "refresh" })))
          : (e(o.tipsActions.readyContainer({ containerId: r })),
            e((0, s.sdataTipsContainerEvent)({ event: "ready" })));
        var c = (0, u.selectIfTopSavingsLessThanDollar)(t()),
          d = i.comparisonShoppingSelectors.selectCurrentTopPickSavings(t());
        c &&
          e(
            (0, a.sdataTipsCatalogDebugEvent)(
              {
                action: "topSavingsLessThanDollar",
                topPickSavings: d,
                ifTopSavingsLessThanDollarOn: c,
              },
              { skipSessionCheck: !0 }
            )
          );
      };
    };
  },
});
