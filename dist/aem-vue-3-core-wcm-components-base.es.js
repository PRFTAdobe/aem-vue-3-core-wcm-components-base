import { defineComponent as L, useAttrs as Q, computed as _, openBlock as o, createElementBlock as f, mergeProps as H, unref as ae, renderSlot as ne, inject as P, normalizeClass as v, createElementVNode as W, Fragment as B, renderList as oe, createBlock as E, resolveDynamicComponent as T, h as C, withCtx as z, createCommentVNode as $, toDisplayString as A, onMounted as Z, normalizeStyle as le, ref as U, onUnmounted as _e, watch as ce, createTextVNode as J, normalizeProps as ie, guardReactiveProps as be, createVNode as ye, onUpdated as ge } from "vue";
import { AuthoringUtils as w } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as O, componentClassNames as N } from "aem-vue-3-editable-components";
import { useRoute as ue, useRouter as de } from "vue-router";
import K from "dompurify";
const ut = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, dt = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, pt = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, ft = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, ht = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, mt = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, vt = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, _t = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, bt = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Ce = ["href", "target"], Ee = {
  key: 1,
  class: "cmp-span"
}, D = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreLink",
  props: {
    baseCssClass: {
      type: String,
      default: "cmp-link"
    },
    // eslint-disable-next-line vue/require-default-prop
    class: {
      type: String
    },
    href: {
      type: String,
      required: !0
    },
    navigable: {
      type: Boolean,
      default: !0
    },
    target: {
      type: String,
      default: "_self",
      validator: (t) => ["_self", "_blank", "_parent", "_top"].includes(t)
    }
  },
  setup(t) {
    const e = t, s = Q(), n = ue(), r = de(), a = _(() => {
      const i = [e.class, e.baseCssClass];
      return n.path && typeof n.path < "u" && n.path === e.href && i.push("cmp-link--active"), i;
    }), l = (i) => {
      const h = r.getRoutes().map((c) => c.path);
      !w.isEditMode() && !w.isPreviewMode() && e.target !== "_blank" && h.includes(e.href) && (i.preventDefault(), r.push({
        path: e.href
      }));
    };
    return (i, h) => e.navigable ? (o(), f("a", H({
      key: 0,
      class: a.value,
      href: e.href,
      target: e.target
    }, { ...ae(s) }, { onClick: l }), [
      ne(i.$slots, "default")
    ], 16, Ce)) : (o(), f("span", Ee, [
      ne(i.$slots, "default")
    ]));
  }
}), ke = ["id", "aria-label"], yt = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreBreadcrumb",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    ariaLabel: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Array
    },
    ...O("cmp-breadcrumb")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      const l = (c, b = !1) => {
        const S = {
          itemProp: "name"
        };
        return b && (S["aria-current"] = "page"), C("span", S, c);
      };
      let h = ((c) => C(
        D,
        {
          href: c.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: c.navigable
        },
        () => l(c.title)
      ))(a);
      return a.active && (h = l(a.title, !0)), C(
        "li",
        {
          class: [
            `${e.baseCssClass}__item`,
            {
              [`${e.baseCssClass}__item--active`]: a.active
            }
          ],
          itemProp: "itemListElement",
          itemScope: !0,
          itemType: "http://schema.org/ListItem"
        },
        h
      );
    };
    return (a, l) => (o(), f("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: v(n.value)
    }, [
      W("ol", {
        class: v(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), f(B, null, oe(e.items, (i) => (o(), E(T(r(i)), {
          key: i.toString()
        }))), 128))
      ], 2)
    ], 10, ke));
  }
});
const we = ["type"], gt = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreButton",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    ariaLabel: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    handleOnClick: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    icon: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    link: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String
    },
    type: {
      type: String,
      default: "button",
      validator(t) {
        return ["submit", "reset", "button"].includes(t);
      }
    },
    ...O("cmp-button")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(a);
    };
    return (a, l) => e.text ? (o(), f(B, { key: 0 }, [
      e.link ? (o(), E(D, {
        key: 0,
        "aria-label": e.ariaLabel,
        class: v(n.value.join(" ")),
        href: e.link,
        onClick: r
      }, {
        default: z(() => [
          e.icon ? (o(), f("span", {
            key: 0,
            class: v(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
          }, null, 2)) : $("", !0),
          W("span", {
            class: v(`${e.baseCssClass}__text`)
          }, A(e.text), 3)
        ]),
        _: 1
      }, 8, ["aria-label", "class", "href"])) : (o(), f("button", {
        key: 1,
        class: v(n.value),
        type: e.type,
        onClick: r
      }, [
        e.icon ? (o(), f("span", {
          key: 0,
          class: v(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : $("", !0),
        W("span", {
          class: v(`${e.baseCssClass}__text`)
        }, A(e.text), 3)
      ], 10, we))
    ], 64)) : $("", !0);
  }
});
const $e = ["id"], Se = ["innerHTML"], Le = ["href"], xe = ["href"], Te = ["innerHTML"], Ct = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreEmbed",
  props: {
    type: {
      type: String,
      default: "URL",
      validator: (t) => ["URL", "HTML", "EMBEDDABLE"].includes(t)
    },
    // eslint-disable-next-line vue/require-default-prop
    result: {
      type: Object
    },
    url: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    html: {
      type: String
    },
    youTubeProps: {
      type: Object,
      default: () => ({})
    },
    ...O("cmp-embed")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = (u, k, p = !0, d = "text/javascript") => new Promise((m, g) => {
      try {
        const y = document.createElement("script");
        y.type = d, y.async = p, y.src = u, k && Object.keys(k).forEach((x) => {
          y.dataset[x] = k[x];
        }), y.addEventListener("load", () => {
          m({ status: !0 });
        }), y.addEventListener("error", () => {
          g({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(y);
      } catch (y) {
        g(y);
      }
    }), r = (u) => K.sanitize(u), a = _(() => {
      const u = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return u.push({
        "cq-dd-embed": s || !1
      }), u;
    }), l = () => {
      var I, M, Y, ee, te, se;
      const u = (I = e.youTubeProps) == null ? void 0 : I.youtubeVideoId, k = (M = e.youTubeProps) == null ? void 0 : M.youtubeAutoPlay, p = (Y = e.youTubeProps) == null ? void 0 : Y.youtubeLoop, d = (ee = e.youTubeProps) == null ? void 0 : ee.youtubeMute, m = (te = e.youTubeProps) == null ? void 0 : te.youtubePlaysInline, g = (se = e.youTubeProps) == null ? void 0 : se.youtubeRel, y = `https://www.youtube.com/embed/${u}`, x = {
        mute: `${+d}`,
        autoplay: `${+k}`,
        loop: `${+p}`,
        playlist: `${u}`,
        rel: `${+g}`,
        playsinline: `${+m}`
      }, q = new URLSearchParams(x).toString();
      return `${y}?${q}`;
    }, i = _(
      () => {
        var u, k, p, d, m;
        return C("iFrame", {
          type: "text/html",
          width: ((u = e.youTubeProps) == null ? void 0 : u.layout) === "responsive" ? "100%" : (k = e.youTubeProps) == null ? void 0 : k.youtubeWidth,
          height: ((p = e.youTubeProps) == null ? void 0 : p.layout) === "responsive" ? "100%" : (d = e.youTubeProps) == null ? void 0 : d.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: (m = e.youTubeProps) != null && m.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), h = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return C("img", {
          title: u == null ? void 0 : u.title,
          width: u == null ? void 0 : u.width,
          height: u == null ? void 0 : u.height,
          src: u == null ? void 0 : u.url
        });
      }
      return C("img");
    }), c = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return u.type;
      }
    }), b = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), S = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), R = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return u.html;
      }
    });
    return Z(() => {
      var g, y, x, q;
      const u = ((g = e.result) == null ? void 0 : g.processor) === "pinterest", k = ((y = e.result) == null ? void 0 : y.processor) === "oembed" && ((q = (x = e.result) == null ? void 0 : x.options) == null ? void 0 : q.provider) === "Twitter";
      let p = "//assets.pinterest.com/js/pinit.js";
      k && (p = "//platform.twitter.com/widgets.js");
      let d = document.querySelector(`script[src="${p}"]`), m = {};
      u && (m = {
        pinBuild: "doBuild"
      }), d ? d.dataset.loaded === "true" ? typeof window.doBuild == "function" && window.doBuild() : d.addEventListener("load", () => {
        typeof window.doBuild == "function" && window.doBuild();
      }) : n(p, m).then(() => {
        typeof window.doBuild == "function" && window.doBuild(), d = document.querySelector(`script[src="${p}"]`), d.dataset.loaded = (!0).toString();
      }).catch((I) => {
        console.error(I);
      });
    }), (u, k) => {
      var p, d, m, g, y;
      return o(), f("div", {
        id: e.id,
        class: v(a.value)
      }, [
        e.type === "HTML" ? (o(), f("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, Se)) : e.type === "EMBEDDABLE" ? (o(), f(B, { key: 1 }, [
          ((p = e.youTubeProps) == null ? void 0 : p.layout) === "responsive" ? (o(), f("div", {
            key: 0,
            class: v(`${u.baseCssClass}__embeddable-wrapper`),
            style: le({
              "padding-bottom": ((d = e.youTubeProps) == null ? void 0 : d.layout) === "responsive" ? `${(m = t.youTubeProps) == null ? void 0 : m.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), E(T(i.value)))
          ], 6)) : (o(), E(T(i.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), f(B, { key: 2 }, [
          ((g = e.result) == null ? void 0 : g.processor) === "pinterest" ? (o(), f("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, A(e.url), 9, Le)) : ((y = e.result) == null ? void 0 : y.processor) === "oembed" ? (o(), f(B, { key: 1 }, [
            c.value === "photo" ? (o(), E(T(h.value), { key: 0 })) : c.value === "link" ? (o(), f("a", {
              key: 1,
              href: b.value
            }, A(S.value), 9, xe)) : c.value === "video" || c.value === "rich" ? (o(), f("div", {
              key: 2,
              innerHTML: R.value
            }, null, 8, Te)) : $("", !0)
          ], 64)) : $("", !0)
        ], 64)) : $("", !0)
      ], 10, $e);
    };
  }
});
var pe = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, s) {
    var n = -1;
    return e.some(function(r, a) {
      return r[0] === s ? (n = a, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(s) {
        var n = t(this.__entries__, s), r = this.__entries__[n];
        return r && r[1];
      }, e.prototype.set = function(s, n) {
        var r = t(this.__entries__, s);
        ~r ? this.__entries__[r][1] = n : this.__entries__.push([s, n]);
      }, e.prototype.delete = function(s) {
        var n = this.__entries__, r = t(n, s);
        ~r && n.splice(r, 1);
      }, e.prototype.has = function(s) {
        return !!~t(this.__entries__, s);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(s, n) {
        n === void 0 && (n = null);
        for (var r = 0, a = this.__entries__; r < a.length; r++) {
          var l = a[r];
          s.call(n, l[1], l[0]);
        }
      }, e;
    }()
  );
}(), X = typeof window < "u" && typeof document < "u" && window.document === document, F = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Pe = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(F) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Oe = 2;
function Ne(t, e) {
  var s = !1, n = !1, r = 0;
  function a() {
    s && (s = !1, t()), n && i();
  }
  function l() {
    Pe(a);
  }
  function i() {
    var h = Date.now();
    if (s) {
      if (h - r < Oe)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = h;
  }
  return i;
}
var Re = 20, Ae = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ie = typeof MutationObserver < "u", Me = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ne(this.refresh.bind(this), Re);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var s = this.observers_, n = s.indexOf(e);
      ~n && s.splice(n, 1), !s.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(s) {
        return s.gatherActive(), s.hasActive();
      });
      return e.forEach(function(s) {
        return s.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !X || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ie ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !X || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = Ae.some(function(a) {
        return !!~n.indexOf(a);
      });
      r && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), fe = function(t, e) {
  for (var s = 0, n = Object.keys(e); s < n.length; s++) {
    var r = n[s];
    Object.defineProperty(t, r, {
      value: e[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, j = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || F;
}, he = V(0, 0, 0, 0);
function G(t) {
  return parseFloat(t) || 0;
}
function re(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var a = t["border-" + r + "-width"];
    return n + G(a);
  }, 0);
}
function Be(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var a = r[n], l = t["padding-" + a];
    s[a] = G(l);
  }
  return s;
}
function De(t) {
  var e = t.getBBox();
  return V(0, 0, e.width, e.height);
}
function ze(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return he;
  var n = j(t).getComputedStyle(t), r = Be(n), a = r.left + r.right, l = r.top + r.bottom, i = G(n.width), h = G(n.height);
  if (n.boxSizing === "border-box" && (Math.round(i + a) !== e && (i -= re(n, "left", "right") + a), Math.round(h + l) !== s && (h -= re(n, "top", "bottom") + l)), !qe(t)) {
    var c = Math.round(i + a) - e, b = Math.round(h + l) - s;
    Math.abs(c) !== 1 && (i -= c), Math.abs(b) !== 1 && (h -= b);
  }
  return V(r.left, r.top, i, h);
}
var je = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof j(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof j(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function qe(t) {
  return t === j(t).document.documentElement;
}
function He(t) {
  return X ? je(t) ? De(t) : ze(t) : he;
}
function We(t) {
  var e = t.x, s = t.y, n = t.width, r = t.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(a.prototype);
  return fe(l, {
    x: e,
    y: s,
    width: n,
    height: r,
    top: s,
    right: e + n,
    bottom: r + s,
    left: e
  }), l;
}
function V(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var Ue = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = V(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = He(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Fe = (
  /** @class */
  function() {
    function t(e, s) {
      var n = We(s);
      fe(this, { target: e, contentRect: n });
    }
    return t;
  }()
), Ge = (
  /** @class */
  function() {
    function t(e, s, n) {
      if (this.activeObservations_ = [], this.observations_ = new pe(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = s, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof j(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(e) || (s.set(e, new Ue(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof j(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(e) && (s.delete(e), s.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(s) {
        s.isActive() && e.activeObservations_.push(s);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, s = this.activeObservations_.map(function(n) {
          return new Fe(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), me = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new pe(), ve = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = Me.getInstance(), n = new Ge(e, s, this);
      me.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  ve.prototype[t] = function() {
    var e;
    return (e = me.get(this))[t].apply(e, arguments);
  };
});
var Ve = function() {
  return typeof F.ResizeObserver < "u" ? F.ResizeObserver : ve;
}();
const Ye = ["id"], Je = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreImage",
  props: {
    alt: {
      type: String,
      required: !0
    },
    displayPopupTitle: {
      type: Boolean,
      default: !1
    },
    imageLink: {
      type: Object,
      default: () => ({
        valid: !1,
        attributes: {}
      })
    },
    src: {
      type: String,
      required: !0
    },
    // eslint-disable-next-line vue/require-default-prop
    smartCropRendition: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    width: {
      type: String
    },
    ...O("cmp-image")
  },
  setup(t) {
    const e = t, s = Q(), n = P("isInEditor", w.isInEditor()), r = U(null), a = U(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (a.value = s.srcset);
    const i = _(() => {
      let p;
      if (e.width) {
        const { width: d } = e;
        let m = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(d) && (m = ""), p = {
          "--asset-max-inline-size": `${d}${m}`
        };
      }
      return p;
    }), h = _(() => {
      const p = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      );
      return p.push({
        "cq-dd-image": n || !1
      }), p;
    }), c = _(() => {
      const p = C(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), d = C("meta", {
        content: e.title,
        itemProp: "caption"
      }), m = [
        C("img", {
          alt: e.alt,
          src: a.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (m.push(p), e.displayPopupTitle && m.push(d)), () => m;
    });
    let b;
    const S = (p) => {
      let d;
      const { clientWidth: m } = r.value.parentNode;
      return p.reverse(), p.forEach((g) => {
        parseInt(g, 10) > m && (d = g);
      }), d;
    }, R = () => {
      const p = {};
      if (e.src) {
        const d = new XMLHttpRequest(), m = `${e.src.split("?")[0]}?req=set,json`;
        d.open("GET", m, !1), d.onload = () => {
          var g;
          if (d.status >= 200 && d.status < 400) {
            let y;
            const { responseText: x } = d, I = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(x);
            if (I && I.length >= 2) {
              const M = I[2];
              /^{[\s\S]*}$/gim.test(M) && (y = JSON.parse(M));
            }
            y && ((g = y.set) != null && g.relation) && Array.isArray(y.set.relation) && y.set.relation.forEach(
              (M) => {
                p[parseInt(M.userdata.SmartCropWidth, 10)] = `:${M.userdata.SmartCropDef}`;
              }
            );
          }
        }, d.send();
      }
      return p;
    }, u = () => {
      Object.keys(l).length === 0 && (l = R());
      const p = S(Object.keys(l));
      if (p) {
        const d = e.src.replace(
          "?",
          `${l[p]}?`
        );
        a.value = d.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        a.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, k = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (a.value = s.srcset, u()) : a.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : a.value = e.src;
    };
    return Z(() => {
      const p = (d) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(d) && d.length && d.forEach(() => {
            u();
          });
        });
      };
      b = new Ve(p), b.observe(r.value), k();
    }), _e(() => {
      r.value && b.unobserve(r.value);
    }), ce(
      () => e.src,
      async (p, d) => {
        p !== d && k();
      }
    ), (p, d) => {
      var m;
      return o(), f("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: v(h.value),
        style: le(i.value)
      }, [
        a.value ? (o(), f(B, { key: 0 }, [
          (m = e.imageLink) != null && m.url ? (o(), E(D, H({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: z(() => [
              (o(), E(T(c.value), { key: a.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), E(T(c.value), { key: a.value }))
        ], 64)) : $("", !0)
      ], 14, Ye);
    };
  }
});
const Xe = ["id", "aria-label"], Et = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreLanguageNavigation",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    accessibilityLabel: {
      type: String,
      default: ""
    },
    ...O("cmp-languagenavigation")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      if ((a || []).length === 0 || typeof a > "u")
        return;
      const l = a.map((i) => {
        let h = C(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: i.language
          },
          [i.title]
        );
        return i.level > 0 && (h = C(
          D,
          {
            "aria-current": `${i.active ? "page" : !1}`,
            class: `${e.baseCssClass}__item-link`,
            href: i.link.url,
            title: i.title,
            hrefLang: i.language,
            lang: i.language,
            rel: "alternate"
          },
          () => i.title
        )), C(
          "li",
          {
            class: [
              `${e.baseCssClass}__item`,
              `${e.baseCssClass}__item--level-${i == null ? void 0 : i.level}`,
              `${e.baseCssClass}__item--countrycode-${i.country}`,
              `${e.baseCssClass}__item--langcode-${i.language}`,
              {
                [`${e.baseCssClass}__item--active`]: i == null ? void 0 : i.active
              }
            ]
          },
          [
            h,
            r(i.children)
          ]
        );
      });
      return C(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (a, l) => (o(), f("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: v(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), E(T(r(e.items))))
    ], 10, Xe));
  }
}), Qe = ["id", "aria-label"], kt = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreNavigation",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    accessibilityLabel: {
      type: String,
      default: ""
    },
    ...O("cmp-navigation")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      if ((a || []).length === 0 || typeof a > "u")
        return;
      const l = a.map(
        (i) => C(
          "li",
          {
            class: [
              `${e.baseCssClass}__item`,
              `${e.baseCssClass}__item--level-${i == null ? void 0 : i.level}`,
              {
                [`${e.baseCssClass}__item--active`]: i == null ? void 0 : i.active
              }
            ]
          },
          [
            C(
              D,
              {
                "aria-current": `${i.active ? "page" : !1}`,
                class: `${e.baseCssClass}__item-link`,
                href: i.link.url,
                title: i.title,
                navigable: i == null ? void 0 : i.navigable
              },
              () => i.title
            ),
            r(i.children)
          ]
        )
      );
      return C("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (a, l) => (o(), f("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: v(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), E(T(r(e.items))))
    ], 10, Qe));
  }
}), Ze = ["id"], wt = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...O("cmp-separator")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, a) => (o(), f("div", {
      id: e.id,
      class: v(n.value)
    }, [
      W("hr", {
        class: v(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, Ze));
  }
}), Ke = ["id"], et = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreTitle",
  props: {
    isNested: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Object,
      default: () => ({
        valid: !0,
        attributes: {}
      })
    },
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "h1"
    },
    ...O("cmp-title")
  },
  setup(t) {
    const e = t, s = Q(), n = ue(), r = P("isInEditor", w.isInEditor()), a = _(() => {
      const c = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        r,
        e.aemNoDecoration
      );
      return c.push({
        "cq-dd-title": r
      }), c;
    }), l = U((s == null ? void 0 : s.linkDisabled) !== !0), i = _(() => e.isNested ? "-" : "__"), h = _(() => n.path && typeof n.path < "u" ? n.path : null);
    return ce(
      () => s == null ? void 0 : s.linkDisabled,
      async (c, b) => {
        c !== b && (l.value = c !== !0);
      }
    ), (c, b) => (o(), f("div", {
      id: e.id,
      class: v(a.value)
    }, [
      (o(), E(T(e.type), {
        class: v(`${c.baseCssClass}${i.value}text`)
      }, {
        default: z(() => {
          var S, R;
          return [
            l.value ? (o(), E(D, H({
              key: 0,
              class: `${c.baseCssClass}${i.value}link`,
              href: ((S = e.link) == null ? void 0 : S.url) || h.value
            }, (R = e.link) == null ? void 0 : R.attributes), {
              default: z(() => [
                J(A(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), f(B, { key: 1 }, [
              J(A(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, Ke));
  }
}), tt = ["id"], st = ["innerHTML"], $t = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreTeaser",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    actions: {
      type: Array
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String
    },
    imageAlt: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    imagePath: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    link: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    pretitle: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    titleType: {
      type: String,
      default: "h2"
    },
    ...O("cmp-teaser")
  },
  setup(t) {
    const e = t, s = P("isInEditor", w.isInEditor()), n = _(() => {
      const i = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return i.push({
        "cq-dd-teaser": s
      }), i;
    }), r = _(() => {
      var i, h;
      return {
        class: `${e.baseCssClass}__link`,
        href: (i = e.link) == null ? void 0 : i.url,
        ...(h = e.link) == null ? void 0 : h.attributes
      };
    }), a = _(() => ({
      baseCssClass: `${e.baseCssClass}__title`,
      isInEditor: s,
      isNested: !0,
      link: e.link,
      linkDisabled: !e.link,
      text: e.title,
      type: e.titleType
    })), l = (i) => K.sanitize(i);
    return (i, h) => (o(), f("div", {
      id: e.id,
      class: v(n.value)
    }, [
      (o(), E(T(e.link ? D : "section"), ie(be(e.link ? r.value : !1)), {
        default: z(() => [
          e.pretitle || e.title || e.description ? (o(), f("div", {
            key: 0,
            class: v(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), f("p", {
              key: 0,
              class: v(`${e.baseCssClass}__pretitle`)
            }, A(e.pretitle), 3)) : $("", !0),
            e.title ? (o(), E(et, ie(H({ key: 1 }, a.value)), null, 16)) : $("", !0),
            e.description ? (o(), f("div", {
              key: 2,
              class: v(`${e.baseCssClass}__description`),
              innerHTML: `${l(e.description)}`
            }, null, 10, st)) : $("", !0),
            e.actions && e.actions.length > 0 ? (o(), f("div", {
              key: 3,
              class: v(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), f(B, null, oe(e.actions, (c, b) => (o(), E(D, H({
                id: c.id,
                key: `link-${b}`,
                class: `${e.baseCssClass}__action-link`,
                href: c.link.url,
                title: c.title
              }, c.link.attributes), {
                default: z(() => [
                  J(A(c.title), 1)
                ]),
                _: 2
              }, 1040, ["id", "class", "href", "title"]))), 128))
            ], 2)) : $("", !0)
          ], 2)) : $("", !0),
          e.imagePath ? (o(), f("div", {
            key: 1,
            class: v(`${e.baseCssClass}__image`)
          }, [
            ye(Je, {
              alt: e.imageAlt,
              "is-in-editor": ae(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : $("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, tt));
  }
});
const nt = ["id", "innerHTML"], it = ["id"], St = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CoreText",
  props: {
    cqPath: {
      type: String,
      default: ""
    },
    richText: {
      type: Boolean,
      default: !1
    },
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String
    },
    ...O("cmp-text")
  },
  setup(t) {
    const e = t, s = de(), n = P("isInEditor", w.isInEditor()), r = _(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), a = U(null), l = (c) => K.sanitize(c), i = _(() => {
      const c = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : c;
    }), h = () => {
      if (a.value) {
        const c = s.getRoutes().map((b) => b.path);
        !w.isEditMode() && !w.isPreviewMode() && a.value.querySelectorAll("a").forEach((b) => {
          b.classList.add("cmp-link");
          const S = b.getAttribute("target") || "_self", R = b.getAttribute("href") || "#";
          b.onclick = (u) => {
            S !== "_blank" && c.includes(R) && (u.preventDefault(), s.push(R));
          };
        });
      }
    };
    return Z(() => {
      h();
    }), ge(() => {
      h();
    }), (c, b) => e.richText ? (o(), f("div", {
      key: 0,
      id: i.value,
      ref_key: "richTextElement",
      ref: a,
      class: v(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, nt)) : (o(), f("div", {
      key: 1,
      id: i.value,
      class: v(r.value)
    }, [
      W("p", {
        class: v(`${e.baseCssClass}__paragraph`)
      }, A(e.text), 3)
    ], 10, it));
  }
});
export {
  ut as BreadcrumbEditConfig,
  dt as ButtonEditConfig,
  yt as CoreBreadcrumb,
  gt as CoreButton,
  Ct as CoreEmbed,
  Je as CoreImage,
  Et as CoreLanguageNavigation,
  D as CoreLink,
  kt as CoreNavigation,
  wt as CoreSeparator,
  $t as CoreTeaser,
  St as CoreText,
  et as CoreTitle,
  pt as EmbedEditConfig,
  ft as ImageEditConfig,
  ht as LanguageNavigationEditConfig,
  mt as NavigationEditConfig,
  vt as TeaserEditConfig,
  bt as TextEditConfig,
  _t as TitleEditConfig
};
