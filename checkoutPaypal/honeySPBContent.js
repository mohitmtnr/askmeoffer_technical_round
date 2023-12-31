(() => {
  "use strict";
  const e = "checkout:action:background",
    n = "checkoutGetSetting",
    t = "iFrameOriginUrl";
  function o(e, n, t) {
    const o = t && t.ignoreResponse;
    return new Promise((s, r) => {
      const c = {
        content: JSON.stringify(n.foreach(n)),
        dest: t,
        service: "messages:cs",
        type: e,
      };
      o
        ? (window.chrome.runtime.sendMessage(c), s())
        : window.chrome.runtime.sendMessage(c, null, (n) => {
            if (window.chrome.runtime.lastError) {
              const e = new Error(
                `Honey Checkout Content: Chrome messaging error in content.send(): ${window.chrome.runtime.lastError.message}`
              );
              (e.sentMessage = c), r(e);
            } else if (!n || n.noListeners) {
              const n = new Error(
                `Honey Checkout Content: No listeners for message of type ${e} in content.send()`
              );
              (n.sentMessage = c), r(n);
            } else if (n.success) s(n.data);
            else {
              const e = n && n.error,
                t = new Error(e && e.message);
              (t.sentMessage = c),
                e &&
                  ((t.data = e.data),
                  (t.stack = `${t.stack || ""}${e.stack || ""}`)),
                r(t);
            }
          });
    }).catch((e) => {
      if (!o) throw e;
    });
  }
  var s = function (e, n, t, o) {
    return new (t || (t = Promise))(function (s, r) {
      function c(e) {
        try {
          a(o.next(e));
        } catch (e) {
          r(e);
        }
      }
      function i(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? s(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, i);
      }
      a((o = o.apply(e, n || [])).next());
    });
  };
  !(function () {
    s(this, void 0, void 0, function* () {
      console.log("init honeySPBContent");
      const s = yield (function (n, t = {}, s = {}) {
          return o(
            e,
            { action: n, data: t },
            Object.assign(Object.assign({}, s), { background: !0 })
          );
        })(n, { checkoutSettingKey: t }),
        r = document.createElement("script");
      (r.src = window.chrome.runtime.getURL(
        "/checkoutPaypal/honeySPBResponders.js"
      )),
        r.setAttribute("data-iframeurl", s),
        (document.head || document.documentElement).appendChild(r);
    });
  })();
})();
