import { defineComponent as P, useAttrs as X, computed as _, openBlock as o, createElementBlock as h, mergeProps as q, unref as ae, renderSlot as ne, inject as O, normalizeClass as y, createElementVNode as Q, Fragment as M, renderList as oe, createBlock as w, resolveDynamicComponent as T, h as C, onMounted as Z, normalizeStyle as le, toDisplayString as D, createCommentVNode as L, ref as W, onUnmounted as ve, watch as ce, withCtx as H, createTextVNode as Y, normalizeProps as ie, guardReactiveProps as be, createVNode as _e, onUpdated as ye } from "vue";
import { AuthoringUtils as k } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as N, componentClassNames as R } from "aem-vue-3-editable-components";
import { useRouter as ue, useRoute as ge } from "vue-router";
import K from "dompurify";
const ct = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, ut = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, dt = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, pt = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, ft = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, ht = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, mt = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, vt = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Ce = ["href", "target"], Ee = {
  key: 1,
  class: "cmp-span"
}, B = /* @__PURE__ */ P({
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
    const e = t, s = X(), n = ue(), r = _(() => [e.class, e.baseCssClass]), a = (l) => {
      const i = n.getRoutes().map((f) => f.path);
      !k.isEditMode() && !k.isPreviewMode() && e.target !== "_blank" && i.includes(e.href) && (l.preventDefault(), n.push({
        path: e.href
      }));
    };
    return (l, i) => e.navigable ? (o(), h("a", q({
      key: 0,
      class: r.value,
      href: e.href,
      target: e.target
    }, { ...ae(s) }, { onClick: a }), [
      ne(l.$slots, "default")
    ], 16, Ce)) : (o(), h("span", Ee, [
      ne(l.$slots, "default")
    ]));
  }
}), we = ["id", "aria-label"], bt = /* @__PURE__ */ P({
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
    ...N("cmp-breadcrumb")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = _(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      const l = (d, v = !1) => {
        const $ = {
          itemProp: "name"
        };
        return v && ($["aria-current"] = "page"), C("span", $, d);
      };
      let f = ((d) => C(
        B,
        {
          href: d.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: d.navigable
        },
        () => l(d.title)
      ))(a);
      return a.active && (f = l(a.title, !0)), C(
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
        f
      );
    };
    return (a, l) => (o(), h("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: y(n.value)
    }, [
      Q("ol", {
        class: y(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), h(M, null, oe(e.items, (i) => (o(), w(T(r(i)), {
          key: i.toString()
        }))), 128))
      ], 2)
    ], 10, we));
  }
});
const ke = ["id"], $e = ["innerHTML"], Se = ["href"], Le = ["href"], Te = ["innerHTML"], _t = /* @__PURE__ */ P({
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
    ...N("cmp-embed")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = (c, E, p = !0, u = "text/javascript") => new Promise((m, g) => {
      try {
        const b = document.createElement("script");
        b.type = u, b.async = p, b.src = c, E && Object.keys(E).forEach((S) => {
          b.dataset[S] = E[S];
        }), b.addEventListener("load", () => {
          m({ status: !0 });
        }), b.addEventListener("error", () => {
          g({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(b);
      } catch (b) {
        g(b);
      }
    }), r = (c) => K.sanitize(c), a = _(() => {
      const c = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return c.push({
        "cq-dd-embed": s || !1
      }), c;
    }), l = () => {
      var A, I, V, ee, te, se;
      const c = (A = e.youTubeProps) == null ? void 0 : A.youtubeVideoId, E = (I = e.youTubeProps) == null ? void 0 : I.youtubeAutoPlay, p = (V = e.youTubeProps) == null ? void 0 : V.youtubeLoop, u = (ee = e.youTubeProps) == null ? void 0 : ee.youtubeMute, m = (te = e.youTubeProps) == null ? void 0 : te.youtubePlaysInline, g = (se = e.youTubeProps) == null ? void 0 : se.youtubeRel, b = `https://www.youtube.com/embed/${c}`, S = {
        mute: `${+u}`,
        autoplay: `${+E}`,
        loop: `${+p}`,
        playlist: `${c}`,
        rel: `${+g}`,
        playsinline: `${+m}`
      }, j = new URLSearchParams(S).toString();
      return `${b}?${j}`;
    }, i = _(
      () => {
        var c, E, p, u, m;
        return C("iFrame", {
          type: "text/html",
          width: ((c = e.youTubeProps) == null ? void 0 : c.layout) === "responsive" ? "100%" : (E = e.youTubeProps) == null ? void 0 : E.youtubeWidth,
          height: ((p = e.youTubeProps) == null ? void 0 : p.layout) === "responsive" ? "100%" : (u = e.youTubeProps) == null ? void 0 : u.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: (m = e.youTubeProps) != null && m.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), f = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: c } = e.result.options;
        return C("img", {
          title: c == null ? void 0 : c.title,
          width: c == null ? void 0 : c.width,
          height: c == null ? void 0 : c.height,
          src: c == null ? void 0 : c.url
        });
      }
      return C("img");
    }), d = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: c } = e.result.options;
        return c.type;
      }
    }), v = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), $ = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), x = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: c } = e.result.options;
        return c.html;
      }
    });
    return Z(() => {
      var g, b, S, j;
      const c = ((g = e.result) == null ? void 0 : g.processor) === "pinterest", E = ((b = e.result) == null ? void 0 : b.processor) === "oembed" && ((j = (S = e.result) == null ? void 0 : S.options) == null ? void 0 : j.provider) === "Twitter";
      let p = "//assets.pinterest.com/js/pinit.js";
      E && (p = "//platform.twitter.com/widgets.js");
      let u = document.querySelector(`script[src="${p}"]`), m = {};
      c && (m = {
        pinBuild: "doBuild"
      }), u ? u.dataset.loaded === "true" ? typeof window.doBuild == "function" && window.doBuild() : u.addEventListener("load", () => {
        typeof window.doBuild == "function" && window.doBuild();
      }) : n(p, m).then(() => {
        typeof window.doBuild == "function" && window.doBuild(), u = document.querySelector(`script[src="${p}"]`), u.dataset.loaded = (!0).toString();
      }).catch((A) => {
        console.error(A);
      });
    }), (c, E) => {
      var p, u, m, g, b;
      return o(), h("div", {
        id: e.id,
        class: y(a.value)
      }, [
        e.type === "HTML" ? (o(), h("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, $e)) : e.type === "EMBEDDABLE" ? (o(), h(M, { key: 1 }, [
          ((p = e.youTubeProps) == null ? void 0 : p.layout) === "responsive" ? (o(), h("div", {
            key: 0,
            class: y(`${c.baseCssClass}__embeddable-wrapper`),
            style: le({
              "padding-bottom": ((u = e.youTubeProps) == null ? void 0 : u.layout) === "responsive" ? `${(m = t.youTubeProps) == null ? void 0 : m.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), w(T(i.value)))
          ], 6)) : (o(), w(T(i.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), h(M, { key: 2 }, [
          ((g = e.result) == null ? void 0 : g.processor) === "pinterest" ? (o(), h("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, D(e.url), 9, Se)) : ((b = e.result) == null ? void 0 : b.processor) === "oembed" ? (o(), h(M, { key: 1 }, [
            d.value === "photo" ? (o(), w(T(f.value), { key: 0 })) : d.value === "link" ? (o(), h("a", {
              key: 1,
              href: v.value
            }, D($.value), 9, Le)) : d.value === "video" || d.value === "rich" ? (o(), h("div", {
              key: 2,
              innerHTML: x.value
            }, null, 8, Te)) : L("", !0)
          ], 64)) : L("", !0)
        ], 64)) : L("", !0)
      ], 10, ke);
    };
  }
});
var de = function() {
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
}(), J = typeof window < "u" && typeof document < "u" && window.document === document, U = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Pe = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(U) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), xe = 2;
function Oe(t, e) {
  var s = !1, n = !1, r = 0;
  function a() {
    s && (s = !1, t()), n && i();
  }
  function l() {
    Pe(a);
  }
  function i() {
    var f = Date.now();
    if (s) {
      if (f - r < xe)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = f;
  }
  return i;
}
var Ne = 20, Re = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ae = typeof MutationObserver < "u", Ie = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Oe(this.refresh.bind(this), Ne);
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
      !J || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ae ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !J || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = Re.some(function(a) {
        return !!~n.indexOf(a);
      });
      r && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), pe = function(t, e) {
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
}, z = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || U;
}, fe = G(0, 0, 0, 0);
function F(t) {
  return parseFloat(t) || 0;
}
function re(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var a = t["border-" + r + "-width"];
    return n + F(a);
  }, 0);
}
function Me(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var a = r[n], l = t["padding-" + a];
    s[a] = F(l);
  }
  return s;
}
function De(t) {
  var e = t.getBBox();
  return G(0, 0, e.width, e.height);
}
function Be(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return fe;
  var n = z(t).getComputedStyle(t), r = Me(n), a = r.left + r.right, l = r.top + r.bottom, i = F(n.width), f = F(n.height);
  if (n.boxSizing === "border-box" && (Math.round(i + a) !== e && (i -= re(n, "left", "right") + a), Math.round(f + l) !== s && (f -= re(n, "top", "bottom") + l)), !je(t)) {
    var d = Math.round(i + a) - e, v = Math.round(f + l) - s;
    Math.abs(d) !== 1 && (i -= d), Math.abs(v) !== 1 && (f -= v);
  }
  return G(r.left, r.top, i, f);
}
var ze = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof z(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof z(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function je(t) {
  return t === z(t).document.documentElement;
}
function qe(t) {
  return J ? ze(t) ? De(t) : Be(t) : fe;
}
function He(t) {
  var e = t.x, s = t.y, n = t.width, r = t.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(a.prototype);
  return pe(l, {
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
function G(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var We = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = G(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = qe(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Ue = (
  /** @class */
  function() {
    function t(e, s) {
      var n = He(s);
      pe(this, { target: e, contentRect: n });
    }
    return t;
  }()
), Fe = (
  /** @class */
  function() {
    function t(e, s, n) {
      if (this.activeObservations_ = [], this.observations_ = new de(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = s, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof z(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(e) || (s.set(e, new We(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof z(e).Element))
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
          return new Ue(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), he = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new de(), me = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = Ie.getInstance(), n = new Fe(e, s, this);
      he.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  me.prototype[t] = function() {
    var e;
    return (e = he.get(this))[t].apply(e, arguments);
  };
});
var Ge = function() {
  return typeof U.ResizeObserver < "u" ? U.ResizeObserver : me;
}();
const Ve = ["id"], Ye = /* @__PURE__ */ P({
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
    ...N("cmp-image")
  },
  setup(t) {
    const e = t, s = X(), n = O("isInEditor", k.isInEditor()), r = W(null), a = W(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (a.value = s.srcset);
    const i = _(() => {
      let p;
      if (e.width) {
        const { width: u } = e;
        let m = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(u) && (m = ""), p = {
          "--asset-max-inline-size": `${u}${m}`
        };
      }
      return p;
    }), f = _(() => {
      const p = R(
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
    }), d = _(() => {
      const p = C(
        "p",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), u = C("meta", {
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
      return e.title && (m.push(p), e.displayPopupTitle && m.push(u)), () => m;
    });
    let v;
    const $ = (p) => {
      let u;
      const { clientWidth: m } = r.value.parentNode;
      return p.reverse(), p.forEach((g) => {
        parseInt(g, 10) > m && (u = g);
      }), u;
    }, x = () => {
      const p = {};
      if (e.src) {
        const u = new XMLHttpRequest(), m = `${e.src.split("?")[0]}?req=set,json`;
        u.open("GET", m, !1), u.onload = () => {
          var g;
          if (u.status >= 200 && u.status < 400) {
            let b;
            const { responseText: S } = u, A = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(S);
            if (A && A.length >= 2) {
              const I = A[2];
              /^{[\s\S]*}$/gim.test(I) && (b = JSON.parse(I));
            }
            b && ((g = b.set) != null && g.relation) && Array.isArray(b.set.relation) && b.set.relation.forEach(
              (I) => {
                p[parseInt(I.userdata.SmartCropWidth, 10)] = `:${I.userdata.SmartCropDef}`;
              }
            );
          }
        }, u.send();
      }
      return p;
    }, c = () => {
      Object.keys(l).length === 0 && (l = x());
      const p = $(Object.keys(l));
      if (p) {
        const u = e.src.replace(
          "?",
          `${l[p]}?`
        );
        a.value = u.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        a.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, E = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (a.value = s.srcset, c()) : a.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : a.value = e.src;
    };
    return Z(() => {
      const p = (u) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(u) && u.length && u.forEach(() => {
            c();
          });
        });
      };
      v = new Ge(p), v.observe(r.value), E();
    }), ve(() => {
      r.value && v.unobserve(r.value);
    }), ce(
      () => e.src,
      async (p, u) => {
        p !== u && E();
      }
    ), (p, u) => {
      var m;
      return o(), h("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: y(f.value),
        style: le(i.value)
      }, [
        a.value ? (o(), h(M, { key: 0 }, [
          (m = e.imageLink) != null && m.url ? (o(), w(B, q({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: H(() => [
              (o(), w(T(d.value), { key: a.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), w(T(d.value), { key: a.value }))
        ], 64)) : L("", !0)
      ], 14, Ve);
    };
  }
});
const Je = ["id", "aria-label"], yt = /* @__PURE__ */ P({
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
    ...N("cmp-languagenavigation")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = _(
      () => R(
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
        let f = C(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: i.language
          },
          [i.title]
        );
        return i.level > 0 && (f = C(
          B,
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
            f,
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
    return (a, l) => (o(), h("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: y(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), w(T(r(e.items))))
    ], 10, Je));
  }
}), Xe = ["id", "aria-label"], gt = /* @__PURE__ */ P({
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
    ...N("cmp-navigation")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = _(
      () => R(
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
              B,
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
    return (a, l) => (o(), h("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: y(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), w(T(r(e.items))))
    ], 10, Xe));
  }
}), Qe = ["id"], Ct = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...N("cmp-separator")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = _(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, a) => (o(), h("div", {
      id: e.id,
      class: y(n.value)
    }, [
      Q("hr", {
        class: y(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, Qe));
  }
}), Ze = ["id"], Ke = /* @__PURE__ */ P({
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
      default: "h3"
    },
    ...N("cmp-title")
  },
  setup(t) {
    const e = t, s = X(), n = ge(), r = O("isInEditor", k.isInEditor()), a = _(() => {
      const d = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        r,
        e.aemNoDecoration
      );
      return d.push({
        "cq-dd-title": r
      }), d;
    }), l = W((s == null ? void 0 : s.linkDisabled) !== !0), i = _(() => e.isNested ? "-" : "__"), f = _(() => n.path && typeof n.path < "u" ? n.path : null);
    return ce(
      () => s == null ? void 0 : s.linkDisabled,
      async (d, v) => {
        d !== v && (l.value = d !== !0);
      }
    ), (d, v) => (o(), h("div", {
      id: e.id,
      class: y(a.value)
    }, [
      (o(), w(T(e.type), {
        class: y(`${d.baseCssClass}${i.value}text`)
      }, {
        default: H(() => {
          var $, x;
          return [
            l.value ? (o(), w(B, q({
              key: 0,
              class: `${d.baseCssClass}${i.value}link`,
              href: (($ = e.link) == null ? void 0 : $.url) || f.value
            }, (x = e.link) == null ? void 0 : x.attributes), {
              default: H(() => [
                Y(D(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), h(M, { key: 1 }, [
              Y(D(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, Ze));
  }
}), et = ["id"], tt = ["innerHTML"], Et = /* @__PURE__ */ P({
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
    ...N("cmp-teaser")
  },
  setup(t) {
    const e = t, s = O("isInEditor", k.isInEditor()), n = _(() => {
      const i = R(
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
      var i, f;
      return {
        class: `${e.baseCssClass}__link`,
        href: (i = e.link) == null ? void 0 : i.url,
        ...(f = e.link) == null ? void 0 : f.attributes
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
    return (i, f) => (o(), h("div", {
      id: e.id,
      class: y(n.value)
    }, [
      (o(), w(T(e.link ? B : "section"), ie(be(e.link ? r.value : !1)), {
        default: H(() => [
          e.pretitle || e.title || e.description ? (o(), h("div", {
            key: 0,
            class: y(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), h("p", {
              key: 0,
              class: y(`${e.baseCssClass}__pretitle`)
            }, D(e.pretitle), 3)) : L("", !0),
            e.title ? (o(), w(Ke, ie(q({ key: 1 }, a.value)), null, 16)) : L("", !0),
            e.description ? (o(), h("div", {
              key: 2,
              class: y(`${e.baseCssClass}__description`),
              innerHTML: `${l(e.description)}`
            }, null, 10, tt)) : L("", !0),
            e.actions && e.actions.length > 0 ? (o(), h("div", {
              key: 3,
              class: y(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), h(M, null, oe(e.actions, (d, v) => (o(), w(B, q({
                id: d.id,
                key: `link-${v}`,
                class: `${e.baseCssClass}__action-link`,
                href: d.link.url,
                title: d.title
              }, d.link.attributes), {
                default: H(() => [
                  Y(D(d.title), 1)
                ]),
                _: 2
              }, 1040, ["id", "class", "href", "title"]))), 128))
            ], 2)) : L("", !0)
          ], 2)) : L("", !0),
          e.imagePath ? (o(), h("div", {
            key: 1,
            class: y(`${e.baseCssClass}__image`)
          }, [
            _e(Ye, {
              alt: e.imageAlt,
              "is-in-editor": ae(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : L("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, et));
  }
});
const st = ["id", "innerHTML"], nt = ["id"], wt = /* @__PURE__ */ P({
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
    ...N("cmp-text")
  },
  setup(t) {
    const e = t, s = ue(), n = O("isInEditor", k.isInEditor()), r = _(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), a = W(null), l = (d) => K.sanitize(d), i = _(() => {
      const d = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : d;
    }), f = () => {
      if (a.value) {
        const d = s.getRoutes().map((v) => v.path);
        !k.isEditMode() && !k.isPreviewMode() && a.value.querySelectorAll("a").forEach((v) => {
          v.classList.add("cmp-link");
          const $ = v.getAttribute("target") || "_self", x = v.getAttribute("href") || "#";
          v.onclick = (c) => {
            $ !== "_blank" && d.includes(x) && (c.preventDefault(), s.push(x));
          };
        });
      }
    };
    return Z(() => {
      f();
    }), ye(() => {
      f();
    }), (d, v) => e.richText ? (o(), h("div", {
      key: 0,
      id: i.value,
      ref_key: "richTextElement",
      ref: a,
      class: y(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, st)) : (o(), h("div", {
      key: 1,
      id: i.value,
      class: y(r.value)
    }, [
      Q("p", {
        class: y(`${e.baseCssClass}__paragraph`)
      }, D(e.text), 3)
    ], 10, nt));
  }
});
export {
  ct as BreadcrumbEditConfig,
  bt as CoreBreadcrumb,
  _t as CoreEmbed,
  Ye as CoreImage,
  yt as CoreLanguageNavigation,
  B as CoreLink,
  gt as CoreNavigation,
  Ct as CoreSeparator,
  Et as CoreTeaser,
  wt as CoreText,
  Ke as CoreTitle,
  ut as EmbedEditConfig,
  dt as ImageEditConfig,
  pt as LanguageNavigationEditConfig,
  ft as NavigationEditConfig,
  ht as TeaserEditConfig,
  vt as TextEditConfig,
  mt as TitleEditConfig
};
