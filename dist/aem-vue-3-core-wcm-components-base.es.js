import { defineComponent as O, useAttrs as Q, computed as _, openBlock as o, createElementBlock as p, mergeProps as W, unref as ae, renderSlot as ne, inject as L, normalizeClass as d, createElementVNode as P, Fragment as M, renderList as oe, createBlock as C, resolveDynamicComponent as x, h as E, withCtx as j, createCommentVNode as g, toDisplayString as S, createTextVNode as F, onMounted as Z, normalizeStyle as le, ref as U, onUnmounted as ye, watch as ce, normalizeProps as ie, guardReactiveProps as be, createVNode as ve, onUpdated as ge } from "vue";
import { AuthoringUtils as $ } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as N, componentClassNames as R, ComponentMapping as Ce } from "aem-vue-3-editable-components";
import { useRoute as ue, useRouter as de } from "vue-router";
import K from "dompurify";
const ft = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, ht = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, mt = {
  emptyLabel: "Download",
  isEmpty(t) {
    return (typeof t.url > "u" || t.url === null || t.url.length === 0) && (typeof t.handleOnClick > "u" || t.handleOnClick === null);
  }
}, _t = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, yt = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, bt = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, vt = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, gt = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, Ct = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Et = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Ee = ["href", "target"], ke = {
  key: 1,
  class: "cmp-span"
}, B = /* @__PURE__ */ O({
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
      !$.isEditMode() && !$.isPreviewMode() && e.target !== "_blank" && h.includes(e.href) && (i.preventDefault(), r.push({
        path: e.href
      }));
    };
    return (i, h) => e.navigable ? (o(), p("a", W({
      key: 0,
      class: a.value,
      href: e.href,
      target: e.target
    }, { ...ae(s) }, { onClick: l }), [
      ne(i.$slots, "default")
    ], 16, Ee)) : (o(), p("span", ke, [
      ne(i.$slots, "default")
    ]));
  }
}), $e = ["id", "aria-label"], kt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (a) => {
      const l = (c, b = !1) => {
        const T = {
          itemProp: "name"
        };
        return b && (T["aria-current"] = "page"), E("span", T, c);
      };
      let h = ((c) => E(
        B,
        {
          href: c.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: c.navigable
        },
        () => l(c.title)
      ))(a);
      return a.active && (h = l(a.title, !0)), E(
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
    return (a, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: d(n.value)
    }, [
      P("ol", {
        class: d(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), p(M, null, oe(e.items, (i) => (o(), C(x(r(i)), {
          key: i.toString()
        }))), 128))
      ], 2)
    ], 10, $e));
  }
});
const we = ["type"], $t = /* @__PURE__ */ O({
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
    ...N("cmp-button")
  },
  setup(t) {
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(
      () => R(
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
    return (a, l) => e.text ? (o(), p(M, { key: 0 }, [
      e.link ? (o(), C(B, {
        key: 0,
        "aria-label": e.ariaLabel,
        class: d(n.value.join(" ")),
        href: e.link,
        onClick: r
      }, {
        default: j(() => [
          e.icon ? (o(), p("span", {
            key: 0,
            class: d(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
          }, null, 2)) : g("", !0),
          P("span", {
            class: d(`${e.baseCssClass}__text`)
          }, S(e.text), 3)
        ]),
        _: 1
      }, 8, ["aria-label", "class", "href"])) : (o(), p("button", {
        key: 1,
        class: d(n.value),
        type: e.type,
        onClick: r
      }, [
        e.icon ? (o(), p("span", {
          key: 0,
          class: d(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : g("", !0),
        P("span", {
          class: d(`${e.baseCssClass}__text`)
        }, S(e.text), 3)
      ], 10, we))
    ], 64)) : g("", !0);
  }
});
const Se = ["id"], xe = ["innerHTML"], wt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreDownload",
  props: {
    actionText: {
      type: String,
      default: "Download"
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    extension: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    filename: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    format: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    handleOnClick: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    size: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    titleType: {
      type: String,
      default: "h3"
    },
    // eslint-disable-next-line vue/require-default-prop
    url: {
      type: String
    },
    ...N("cmp-download")
  },
  setup(t) {
    const e = t, s = L("isInEditor", $.isInEditor()), n = L("componentMapping", new Ce()), r = _(() => {
      const h = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return s && h.push("cq-dd-file"), h;
    }), a = _(
      () => !(e.url && e.url.length > 0 || e.handleOnClick && typeof e.handleOnClick == "function")
    ), l = _(() => {
      const h = n.get(
        "stanley/components/button"
      );
      return E(h, {
        class: `${e.baseCssClass}__action`,
        link: e.url || "#",
        handleOnClick: e.handleOnClick,
        text: e.actionText
      });
    }), i = (h) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(h);
    };
    return (h, c) => a.value ? g("", !0) : (o(), p("div", {
      key: 0,
      id: e.id,
      class: d(r.value)
    }, [
      e.title ? (o(), C(x(e.titleType), {
        key: 0,
        class: d(`${e.baseCssClass}__title`)
      }, {
        default: j(() => [
          e.url || e.handleOnClick ? (o(), C(B, {
            key: 0,
            class: d(`${e.baseCssClass}__title-link`),
            href: e.url || "#",
            onClick: i
          }, {
            default: j(() => [
              F(S(e.title), 1)
            ]),
            _: 1
          }, 8, ["class", "href"])) : (o(), p(M, { key: 1 }, [
            F(S(e.title), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])) : g("", !0),
      e.description ? (o(), p("div", {
        key: 1,
        class: d(`${e.baseCssClass}__description`),
        innerHTML: e.description
      }, null, 10, xe)) : g("", !0),
      e.filename || e.size || e.format ? (o(), p("dl", {
        key: 2,
        class: d(`${e.baseCssClass}__properties`)
      }, [
        e.filename ? (o(), p("div", {
          key: 0,
          class: d([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--filename`
          ])
        }, [
          P("dt", {
            class: d(`${e.baseCssClass}__property-label`)
          }, "Filename", 2),
          P("dd", {
            class: d(`${e.baseCssClass}__property-content`)
          }, S(e.filename), 3)
        ], 2)) : g("", !0),
        e.size ? (o(), p("div", {
          key: 1,
          class: d([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--size`
          ])
        }, [
          P("dt", {
            class: d(`${e.baseCssClass}__property-label`)
          }, "Size", 2),
          P("dd", {
            class: d(`${e.baseCssClass}__property-content`)
          }, S(e.size), 3)
        ], 2)) : g("", !0),
        e.format ? (o(), p("div", {
          key: 2,
          class: d([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--format`
          ])
        }, [
          P("dt", {
            class: d(`${e.baseCssClass}__property-label`)
          }, "Format", 2),
          P("dd", {
            class: d(`${e.baseCssClass}__property-content`)
          }, S(e.format), 3)
        ], 2)) : g("", !0)
      ], 2)) : g("", !0),
      (o(), C(x(l.value)))
    ], 10, Se));
  }
});
const Le = ["id"], Oe = ["innerHTML"], Te = ["href"], Pe = ["href"], Ne = ["innerHTML"], St = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", $.isInEditor()), n = (u, w, m = !0, f = "text/javascript") => new Promise((y, k) => {
      try {
        const v = document.createElement("script");
        v.type = f, v.async = m, v.src = u, w && Object.keys(w).forEach((A) => {
          v.dataset[A] = w[A];
        }), v.addEventListener("load", () => {
          y({ status: !0 });
        }), v.addEventListener("error", () => {
          k({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(v);
      } catch (v) {
        k(v);
      }
    }), r = (u) => K.sanitize(u), a = _(() => {
      const u = R(
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
      var D, z, J, ee, te, se;
      const u = (D = e.youTubeProps) == null ? void 0 : D.youtubeVideoId, w = (z = e.youTubeProps) == null ? void 0 : z.youtubeAutoPlay, m = (J = e.youTubeProps) == null ? void 0 : J.youtubeLoop, f = (ee = e.youTubeProps) == null ? void 0 : ee.youtubeMute, y = (te = e.youTubeProps) == null ? void 0 : te.youtubePlaysInline, k = (se = e.youTubeProps) == null ? void 0 : se.youtubeRel, v = `https://www.youtube.com/embed/${u}`, A = {
        mute: `${+f}`,
        autoplay: `${+w}`,
        loop: `${+m}`,
        playlist: `${u}`,
        rel: `${+k}`,
        playsinline: `${+y}`
      }, H = new URLSearchParams(A).toString();
      return `${v}?${H}`;
    }, i = _(
      () => {
        var u, w, m, f, y;
        return E("iFrame", {
          type: "text/html",
          width: ((u = e.youTubeProps) == null ? void 0 : u.layout) === "responsive" ? "100%" : (w = e.youTubeProps) == null ? void 0 : w.youtubeWidth,
          height: ((m = e.youTubeProps) == null ? void 0 : m.layout) === "responsive" ? "100%" : (f = e.youTubeProps) == null ? void 0 : f.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: (y = e.youTubeProps) != null && y.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), h = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return E("img", {
          title: u == null ? void 0 : u.title,
          width: u == null ? void 0 : u.width,
          height: u == null ? void 0 : u.height,
          src: u == null ? void 0 : u.url
        });
      }
      return E("img");
    }), c = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return u.type;
      }
    }), b = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), T = _(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), I = _(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: u } = e.result.options;
        return u.html;
      }
    });
    return Z(() => {
      var k, v, A, H;
      const u = ((k = e.result) == null ? void 0 : k.processor) === "pinterest", w = ((v = e.result) == null ? void 0 : v.processor) === "oembed" && ((H = (A = e.result) == null ? void 0 : A.options) == null ? void 0 : H.provider) === "Twitter";
      let m = "//assets.pinterest.com/js/pinit.js";
      w && (m = "//platform.twitter.com/widgets.js");
      let f = document.querySelector(`script[src="${m}"]`), y = {};
      u && (y = {
        pinBuild: "doBuild"
      }), f ? f.dataset.loaded === "true" ? (console.debug("Processor Script found!  Running doBuild"), typeof window.doBuild == "function" && window.doBuild()) : (console.debug("Processor Script loading!  Loading and running doBuild"), f.addEventListener("load", () => {
        typeof window.doBuild == "function" && window.doBuild();
      })) : (console.debug("Processor Script not found!  Running loadScript"), n(m, y).then(() => {
        console.debug("Processor Script loaded!  Running doBuild"), typeof window.doBuild == "function" && window.doBuild(), f = document.querySelector(`script[src="${m}"]`), f.dataset.loaded = (!0).toString();
      }).catch((D) => {
        console.error(D);
      }));
    }), (u, w) => {
      var m, f, y, k, v;
      return o(), p("div", {
        id: e.id,
        class: d(a.value)
      }, [
        e.type === "HTML" ? (o(), p("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, Oe)) : e.type === "EMBEDDABLE" ? (o(), p(M, { key: 1 }, [
          ((m = e.youTubeProps) == null ? void 0 : m.layout) === "responsive" ? (o(), p("div", {
            key: 0,
            class: d(`${u.baseCssClass}__embeddable-wrapper`),
            style: le({
              "padding-bottom": ((f = e.youTubeProps) == null ? void 0 : f.layout) === "responsive" ? `${(y = t.youTubeProps) == null ? void 0 : y.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), C(x(i.value)))
          ], 6)) : (o(), C(x(i.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), p(M, { key: 2 }, [
          ((k = e.result) == null ? void 0 : k.processor) === "pinterest" ? (o(), p("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, S(e.url), 9, Te)) : ((v = e.result) == null ? void 0 : v.processor) === "oembed" ? (o(), p(M, { key: 1 }, [
            c.value === "photo" ? (o(), C(x(h.value), { key: 0 })) : c.value === "link" ? (o(), p("a", {
              key: 1,
              href: b.value
            }, S(T.value), 9, Pe)) : c.value === "video" || c.value === "rich" ? (o(), p("div", {
              key: 2,
              innerHTML: I.value
            }, null, 8, Ne)) : g("", !0)
          ], 64)) : g("", !0)
        ], 64)) : g("", !0)
      ], 10, Le);
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
}(), X = typeof window < "u" && typeof document < "u" && window.document === document, G = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Re = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(G) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Ae = 2;
function Ie(t, e) {
  var s = !1, n = !1, r = 0;
  function a() {
    s && (s = !1, t()), n && i();
  }
  function l() {
    Re(a);
  }
  function i() {
    var h = Date.now();
    if (s) {
      if (h - r < Ae)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = h;
  }
  return i;
}
var Me = 20, Be = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], De = typeof MutationObserver < "u", ze = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ie(this.refresh.bind(this), Me);
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
      !X || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), De ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !X || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = Be.some(function(a) {
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
}, q = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || G;
}, he = Y(0, 0, 0, 0);
function V(t) {
  return parseFloat(t) || 0;
}
function re(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var a = t["border-" + r + "-width"];
    return n + V(a);
  }, 0);
}
function je(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var a = r[n], l = t["padding-" + a];
    s[a] = V(l);
  }
  return s;
}
function qe(t) {
  var e = t.getBBox();
  return Y(0, 0, e.width, e.height);
}
function He(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return he;
  var n = q(t).getComputedStyle(t), r = je(n), a = r.left + r.right, l = r.top + r.bottom, i = V(n.width), h = V(n.height);
  if (n.boxSizing === "border-box" && (Math.round(i + a) !== e && (i -= re(n, "left", "right") + a), Math.round(h + l) !== s && (h -= re(n, "top", "bottom") + l)), !Fe(t)) {
    var c = Math.round(i + a) - e, b = Math.round(h + l) - s;
    Math.abs(c) !== 1 && (i -= c), Math.abs(b) !== 1 && (h -= b);
  }
  return Y(r.left, r.top, i, h);
}
var We = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof q(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof q(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function Fe(t) {
  return t === q(t).document.documentElement;
}
function Ue(t) {
  return X ? We(t) ? qe(t) : He(t) : he;
}
function Ge(t) {
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
function Y(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var Ve = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Y(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = Ue(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Ye = (
  /** @class */
  function() {
    function t(e, s) {
      var n = Ge(s);
      fe(this, { target: e, contentRect: n });
    }
    return t;
  }()
), Je = (
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
        if (!(e instanceof q(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(e) || (s.set(e, new Ve(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof q(e).Element))
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
          return new Ye(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), me = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new pe(), _e = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = ze.getInstance(), n = new Je(e, s, this);
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
  _e.prototype[t] = function() {
    var e;
    return (e = me.get(this))[t].apply(e, arguments);
  };
});
var Xe = function() {
  return typeof G.ResizeObserver < "u" ? G.ResizeObserver : _e;
}();
const Qe = ["id"], Ze = /* @__PURE__ */ O({
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
    const e = t, s = Q(), n = L("isInEditor", $.isInEditor()), r = U(null), a = U(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (a.value = s.srcset);
    const i = _(() => {
      let m;
      if (e.width) {
        const { width: f } = e;
        let y = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(f) && (y = ""), m = {
          "--asset-max-inline-size": `${f}${y}`
        };
      }
      return m;
    }), h = _(() => {
      const m = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      );
      return m.push({
        "cq-dd-image": n || !1
      }), m;
    }), c = _(() => {
      const m = E(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), f = E("meta", {
        content: e.title,
        itemProp: "caption"
      }), y = [
        E("img", {
          alt: e.alt,
          src: a.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (y.push(m), e.displayPopupTitle && y.push(f)), () => y;
    });
    let b;
    const T = (m) => {
      let f;
      const { clientWidth: y } = r.value.parentNode;
      return m.reverse(), m.forEach((k) => {
        parseInt(k, 10) > y && (f = k);
      }), f;
    }, I = () => {
      const m = {};
      if (e.src) {
        const f = new XMLHttpRequest(), y = `${e.src.split("?")[0]}?req=set,json`;
        f.open("GET", y, !1), f.onload = () => {
          var k;
          if (f.status >= 200 && f.status < 400) {
            let v;
            const { responseText: A } = f, D = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(A);
            if (D && D.length >= 2) {
              const z = D[2];
              /^{[\s\S]*}$/gim.test(z) && (v = JSON.parse(z));
            }
            v && ((k = v.set) != null && k.relation) && Array.isArray(v.set.relation) && v.set.relation.forEach(
              (z) => {
                m[parseInt(z.userdata.SmartCropWidth, 10)] = `:${z.userdata.SmartCropDef}`;
              }
            );
          }
        }, f.send();
      }
      return m;
    }, u = () => {
      Object.keys(l).length === 0 && (l = I());
      const m = T(Object.keys(l));
      if (m) {
        const f = e.src.replace(
          "?",
          `${l[m]}?`
        );
        a.value = f.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        a.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, w = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (a.value = s.srcset, u()) : a.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : a.value = e.src;
    };
    return Z(() => {
      const m = (f) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(f) && f.length && f.forEach(() => {
            u();
          });
        });
      };
      b = new Xe(m), b.observe(r.value), w();
    }), ye(() => {
      r.value && b.unobserve(r.value);
    }), ce(
      () => e.src,
      async (m, f) => {
        m !== f && w();
      }
    ), (m, f) => {
      var y;
      return o(), p("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: d(h.value),
        style: le(i.value)
      }, [
        a.value ? (o(), p(M, { key: 0 }, [
          (y = e.imageLink) != null && y.url ? (o(), C(B, W({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: j(() => [
              (o(), C(x(c.value), { key: a.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), C(x(c.value), { key: a.value }))
        ], 64)) : g("", !0)
      ], 14, Qe);
    };
  }
});
const Ke = ["id", "aria-label"], xt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(
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
        let h = E(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: i.language
          },
          [i.title]
        );
        return i.level > 0 && (h = E(
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
        )), E(
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
      return E(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (a, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: d(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), C(x(r(e.items))))
    ], 10, Ke));
  }
}), et = ["id", "aria-label"], Lt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(
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
        (i) => E(
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
            E(
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
      return E("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (a, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: d(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), C(x(r(e.items))))
    ], 10, et));
  }
}), tt = ["id"], Ot = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...N("cmp-separator")
  },
  setup(t) {
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, a) => (o(), p("div", {
      id: e.id,
      class: d(n.value)
    }, [
      P("hr", {
        class: d(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, tt));
  }
}), st = ["id"], nt = /* @__PURE__ */ O({
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
    ...N("cmp-title")
  },
  setup(t) {
    const e = t, s = Q(), n = ue(), r = L("isInEditor", $.isInEditor()), a = _(() => {
      const c = R(
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
    ), (c, b) => (o(), p("div", {
      id: e.id,
      class: d(a.value)
    }, [
      (o(), C(x(e.type), {
        class: d(`${c.baseCssClass}${i.value}text`)
      }, {
        default: j(() => {
          var T, I;
          return [
            l.value ? (o(), C(B, W({
              key: 0,
              class: `${c.baseCssClass}${i.value}link`,
              href: ((T = e.link) == null ? void 0 : T.url) || h.value
            }, (I = e.link) == null ? void 0 : I.attributes), {
              default: j(() => [
                F(S(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), p(M, { key: 1 }, [
              F(S(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, st));
  }
}), it = ["id"], rt = ["innerHTML"], Tt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", $.isInEditor()), n = _(() => {
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
    return (i, h) => (o(), p("div", {
      id: e.id,
      class: d(n.value)
    }, [
      (o(), C(x(e.link ? B : "section"), ie(be(e.link ? r.value : !1)), {
        default: j(() => [
          e.pretitle || e.title || e.description ? (o(), p("div", {
            key: 0,
            class: d(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), p("p", {
              key: 0,
              class: d(`${e.baseCssClass}__pretitle`)
            }, S(e.pretitle), 3)) : g("", !0),
            e.title ? (o(), C(nt, ie(W({ key: 1 }, a.value)), null, 16)) : g("", !0),
            e.description ? (o(), p("div", {
              key: 2,
              class: d(`${e.baseCssClass}__description`),
              innerHTML: `${l(e.description)}`
            }, null, 10, rt)) : g("", !0),
            e.actions && e.actions.length > 0 ? (o(), p("div", {
              key: 3,
              class: d(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), p(M, null, oe(e.actions, (c, b) => (o(), C(B, W({
                id: c.id,
                key: `link-${b}`,
                class: `${e.baseCssClass}__action-link`,
                href: c.link.url,
                title: c.title
              }, c.link.attributes), {
                default: j(() => [
                  F(S(c.title), 1)
                ]),
                _: 2
              }, 1040, ["id", "class", "href", "title"]))), 128))
            ], 2)) : g("", !0)
          ], 2)) : g("", !0),
          e.imagePath ? (o(), p("div", {
            key: 1,
            class: d(`${e.baseCssClass}__image`)
          }, [
            ve(Ze, {
              alt: e.imageAlt,
              "is-in-editor": ae(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : g("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, it));
  }
});
const at = ["id", "innerHTML"], ot = ["id"], Pt = /* @__PURE__ */ O({
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
    const e = t, s = de(), n = L("isInEditor", $.isInEditor()), r = _(
      () => R(
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
        !$.isEditMode() && !$.isPreviewMode() && a.value.querySelectorAll("a").forEach((b) => {
          b.classList.add("cmp-link");
          const T = b.getAttribute("target") || "_self", I = b.getAttribute("href") || "#";
          b.onclick = (u) => {
            T !== "_blank" && c.includes(I) && (u.preventDefault(), s.push(I));
          };
        });
      }
    };
    return Z(() => {
      h();
    }), ge(() => {
      h();
    }), (c, b) => e.richText ? (o(), p("div", {
      key: 0,
      id: i.value,
      ref_key: "richTextElement",
      ref: a,
      class: d(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, at)) : (o(), p("div", {
      key: 1,
      id: i.value,
      class: d(r.value)
    }, [
      P("p", {
        class: d(`${e.baseCssClass}__paragraph`)
      }, S(e.text), 3)
    ], 10, ot));
  }
});
export {
  ft as BreadcrumbEditConfig,
  ht as ButtonEditConfig,
  kt as CoreBreadcrumb,
  $t as CoreButton,
  wt as CoreDownload,
  St as CoreEmbed,
  Ze as CoreImage,
  xt as CoreLanguageNavigation,
  B as CoreLink,
  Lt as CoreNavigation,
  Ot as CoreSeparator,
  Tt as CoreTeaser,
  Pt as CoreText,
  nt as CoreTitle,
  mt as DownloadEditConfig,
  _t as EmbedEditConfig,
  yt as ImageEditConfig,
  bt as LanguageNavigationEditConfig,
  vt as NavigationEditConfig,
  gt as TeaserEditConfig,
  Et as TextEditConfig,
  Ct as TitleEditConfig
};
