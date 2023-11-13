import { defineComponent as O, useAttrs as Q, computed as y, openBlock as o, createElementBlock as d, mergeProps as W, unref as oe, renderSlot as ie, inject as L, normalizeClass as u, createElementVNode as P, Fragment as B, renderList as le, createBlock as E, resolveDynamicComponent as x, h as k, withCtx as j, createCommentVNode as v, toDisplayString as S, createTextVNode as F, onMounted as Z, onUpdated as ce, normalizeStyle as ue, ref as U, onUnmounted as ve, watch as de, normalizeProps as re, guardReactiveProps as ge, createVNode as Ce } from "vue";
import { AuthoringUtils as w } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as N, componentClassNames as R, ComponentMapping as Ee } from "aem-vue-3-editable-components";
import { useRoute as pe, useRouter as fe } from "vue-router";
import K from "dompurify";
const ht = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, mt = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, _t = {
  emptyLabel: "Download",
  isEmpty(t) {
    return (typeof t.url > "u" || t.url === null || t.url.length === 0) && (typeof t.handleOnClick > "u" || t.handleOnClick === null);
  }
}, yt = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, bt = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, vt = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, gt = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Ct = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, Et = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, kt = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, ke = ["href", "target"], $e = {
  key: 1,
  class: "cmp-span"
}, D = /* @__PURE__ */ O({
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
    const e = t, s = Q(), n = pe(), r = fe(), a = y(() => {
      const i = [e.class, e.baseCssClass];
      return n.path && typeof n.path < "u" && n.path === e.href && i.push("cmp-link--active"), i;
    }), l = (i) => {
      const p = r.getRoutes().map((c) => c.path);
      !w.isEditMode() && !w.isPreviewMode() && e.target !== "_blank" && p.includes(e.href) && (i.preventDefault(), r.push({
        path: e.href
      }));
    };
    return (i, p) => e.navigable ? (o(), d("a", W({
      key: 0,
      class: a.value,
      href: e.href,
      target: e.target
    }, { ...oe(s) }, { onClick: l }), [
      ie(i.$slots, "default")
    ], 16, ke)) : (o(), d("span", $e, [
      ie(i.$slots, "default")
    ]));
  }
}), we = ["id", "aria-label"], $t = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(
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
        return b && (T["aria-current"] = "page"), k("span", T, c);
      };
      let p = ((c) => k(
        D,
        {
          href: c.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: c.navigable
        },
        () => l(c.title)
      ))(a);
      return a.active && (p = l(a.title, !0)), k(
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
        p
      );
    };
    return (a, l) => (o(), d("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: u(n.value)
    }, [
      P("ol", {
        class: u(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), d(B, null, le(e.items, (i) => (o(), E(x(r(i)), {
          key: i.toString()
        }))), 128))
      ], 2)
    ], 10, we));
  }
});
const Se = ["type"], wt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(
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
    return (a, l) => e.text ? (o(), d(B, { key: 0 }, [
      e.link ? (o(), E(D, {
        key: 0,
        "aria-label": e.ariaLabel,
        class: u(n.value.join(" ")),
        href: e.link,
        onClick: r
      }, {
        default: j(() => [
          e.icon ? (o(), d("span", {
            key: 0,
            class: u(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
          }, null, 2)) : v("", !0),
          P("span", {
            class: u(`${e.baseCssClass}__text`)
          }, S(e.text), 3)
        ]),
        _: 1
      }, 8, ["aria-label", "class", "href"])) : (o(), d("button", {
        key: 1,
        class: u(n.value),
        type: e.type,
        onClick: r
      }, [
        e.icon ? (o(), d("span", {
          key: 0,
          class: u(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : v("", !0),
        P("span", {
          class: u(`${e.baseCssClass}__text`)
        }, S(e.text), 3)
      ], 10, Se))
    ], 64)) : v("", !0);
  }
});
const xe = ["id"], Le = ["innerHTML"], St = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = L("componentMapping", new Ee()), r = y(() => {
      const p = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return s && p.push("cq-dd-file"), p;
    }), a = y(
      () => !(e.url && e.url.length > 0 || e.handleOnClick && typeof e.handleOnClick == "function")
    ), l = y(() => {
      const p = n.get(
        "stanley/components/button"
      );
      return k(p, {
        class: `${e.baseCssClass}__action`,
        link: e.url || "#",
        handleOnClick: e.handleOnClick,
        text: e.actionText
      });
    }), i = (p) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(p);
    };
    return (p, c) => a.value ? v("", !0) : (o(), d("div", {
      key: 0,
      id: e.id,
      class: u(r.value)
    }, [
      e.title ? (o(), E(x(e.titleType), {
        key: 0,
        class: u(`${e.baseCssClass}__title`)
      }, {
        default: j(() => [
          e.url || e.handleOnClick ? (o(), E(D, {
            key: 0,
            class: u(`${e.baseCssClass}__title-link`),
            href: e.url || "#",
            onClick: i
          }, {
            default: j(() => [
              F(S(e.title), 1)
            ]),
            _: 1
          }, 8, ["class", "href"])) : (o(), d(B, { key: 1 }, [
            F(S(e.title), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])) : v("", !0),
      e.description ? (o(), d("div", {
        key: 1,
        class: u(`${e.baseCssClass}__description`),
        innerHTML: e.description
      }, null, 10, Le)) : v("", !0),
      e.filename || e.size || e.format ? (o(), d("dl", {
        key: 2,
        class: u(`${e.baseCssClass}__properties`)
      }, [
        e.filename ? (o(), d("div", {
          key: 0,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--filename`
          ])
        }, [
          P("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Filename", 2),
          P("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, S(e.filename), 3)
        ], 2)) : v("", !0),
        e.size ? (o(), d("div", {
          key: 1,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--size`
          ])
        }, [
          P("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Size", 2),
          P("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, S(e.size), 3)
        ], 2)) : v("", !0),
        e.format ? (o(), d("div", {
          key: 2,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--format`
          ])
        }, [
          P("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Format", 2),
          P("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, S(e.format), 3)
        ], 2)) : v("", !0)
      ], 2)) : v("", !0),
      (o(), E(x(l.value)))
    ], 10, xe));
  }
});
const Oe = ["id"], Te = ["innerHTML"], Pe = ["href"], Ne = ["href"], Re = ["innerHTML"], xt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = (f, m, h = !0, _ = "text/javascript") => new Promise((C, $) => {
      try {
        const g = document.createElement("script");
        g.type = _, g.async = h, g.src = f, m && Object.keys(m).forEach((M) => {
          g.dataset[M] = m[M];
        }), g.addEventListener("load", () => {
          C({ status: !0 });
        }), g.addEventListener("error", () => {
          $({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(g);
      } catch (g) {
        $(g);
      }
    }), r = (f) => K.sanitize(f), a = y(() => {
      const f = R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return f.push({
        "cq-dd-embed": s || !1
      }), f;
    }), l = () => {
      var A, J, ee, te, se, ne;
      const f = (A = e.youTubeProps) == null ? void 0 : A.youtubeVideoId, m = (J = e.youTubeProps) == null ? void 0 : J.youtubeAutoPlay, h = (ee = e.youTubeProps) == null ? void 0 : ee.youtubeLoop, _ = (te = e.youTubeProps) == null ? void 0 : te.youtubeMute, C = (se = e.youTubeProps) == null ? void 0 : se.youtubePlaysInline, $ = (ne = e.youTubeProps) == null ? void 0 : ne.youtubeRel, g = `https://www.youtube.com/embed/${f}`, M = {
        mute: `${+_}`,
        autoplay: `${+m}`,
        loop: `${+h}`,
        playlist: `${f}`,
        rel: `${+$}`,
        playsinline: `${+C}`
      }, z = new URLSearchParams(M).toString();
      return `${g}?${z}`;
    }, i = y(
      () => {
        var f, m, h, _, C;
        return k("iFrame", {
          type: "text/html",
          width: ((f = e.youTubeProps) == null ? void 0 : f.layout) === "responsive" ? "100%" : (m = e.youTubeProps) == null ? void 0 : m.youtubeWidth,
          height: ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? "100%" : (_ = e.youTubeProps) == null ? void 0 : _.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: (C = e.youTubeProps) != null && C.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), p = y(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: f } = e.result.options;
        return k("img", {
          title: f == null ? void 0 : f.title,
          width: f == null ? void 0 : f.width,
          height: f == null ? void 0 : f.height,
          src: f == null ? void 0 : f.url
        });
      }
      return k("img");
    }), c = y(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: f } = e.result.options;
        return f.type;
      }
    }), b = y(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), T = y(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), I = y(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: f } = e.result.options;
        return f.html;
      }
    }), q = () => {
      var $, g, M, z;
      const f = (($ = e.result) == null ? void 0 : $.processor) === "pinterest", m = ((g = e.result) == null ? void 0 : g.processor) === "oembed" && ((z = (M = e.result) == null ? void 0 : M.options) == null ? void 0 : z.provider) === "Twitter";
      let h = "//assets.pinterest.com/js/pinit.js";
      m && (h = "//platform.twitter.com/widgets.js");
      let _ = document.querySelector(`script[src="${h}"]`), C = {};
      f && (C = {
        pinBuild: "doBuild"
      }), _ ? _.dataset.loaded === "true" ? (console.debug("Processor Script found!  Running doBuild"), typeof window.doBuild == "function" && window.doBuild()) : (console.debug("Processor Script loading!  Loading and running doBuild"), _.addEventListener("load", () => {
        typeof window.doBuild == "function" && window.doBuild();
      })) : (console.debug("Processor Script not found!  Running loadScript"), n(h, C).then(() => {
        console.debug("Processor Script loaded!  Running doBuild"), typeof window.doBuild == "function" && window.doBuild(), _ = document.querySelector(`script[src="${h}"]`), _.dataset.loaded = (!0).toString();
      }).catch((A) => {
        console.error(A);
      }));
    };
    return Z(() => {
      q();
    }), ce(() => {
      q();
    }), (f, m) => {
      var h, _, C, $, g;
      return o(), d("div", {
        id: e.id,
        class: u(a.value)
      }, [
        e.type === "HTML" ? (o(), d("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, Te)) : e.type === "EMBEDDABLE" ? (o(), d(B, { key: 1 }, [
          ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? (o(), d("div", {
            key: 0,
            class: u(`${f.baseCssClass}__embeddable-wrapper`),
            style: ue({
              "padding-bottom": ((_ = e.youTubeProps) == null ? void 0 : _.layout) === "responsive" ? `${(C = t.youTubeProps) == null ? void 0 : C.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), E(x(i.value)))
          ], 6)) : (o(), E(x(i.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), d(B, { key: 2 }, [
          (($ = e.result) == null ? void 0 : $.processor) === "pinterest" ? (o(), d("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, S(e.url), 9, Pe)) : ((g = e.result) == null ? void 0 : g.processor) === "oembed" ? (o(), d(B, { key: 1 }, [
            c.value === "photo" ? (o(), E(x(p.value), { key: 0 })) : c.value === "link" ? (o(), d("a", {
              key: 1,
              href: b.value
            }, S(T.value), 9, Ne)) : c.value === "video" || c.value === "rich" ? (o(), d("div", {
              key: 2,
              innerHTML: I.value
            }, null, 8, Re)) : v("", !0)
          ], 64)) : v("", !0)
        ], 64)) : v("", !0)
      ], 10, Oe);
    };
  }
});
var he = function() {
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
}(), Ae = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(G) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Ie = 2;
function Me(t, e) {
  var s = !1, n = !1, r = 0;
  function a() {
    s && (s = !1, t()), n && i();
  }
  function l() {
    Ae(a);
  }
  function i() {
    var p = Date.now();
    if (s) {
      if (p - r < Ie)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = p;
  }
  return i;
}
var Be = 20, De = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ze = typeof MutationObserver < "u", je = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Me(this.refresh.bind(this), Be);
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
      !X || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ze ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !X || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = De.some(function(a) {
        return !!~n.indexOf(a);
      });
      r && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), me = function(t, e) {
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
}, H = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || G;
}, _e = Y(0, 0, 0, 0);
function V(t) {
  return parseFloat(t) || 0;
}
function ae(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var a = t["border-" + r + "-width"];
    return n + V(a);
  }, 0);
}
function qe(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var a = r[n], l = t["padding-" + a];
    s[a] = V(l);
  }
  return s;
}
function He(t) {
  var e = t.getBBox();
  return Y(0, 0, e.width, e.height);
}
function We(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return _e;
  var n = H(t).getComputedStyle(t), r = qe(n), a = r.left + r.right, l = r.top + r.bottom, i = V(n.width), p = V(n.height);
  if (n.boxSizing === "border-box" && (Math.round(i + a) !== e && (i -= ae(n, "left", "right") + a), Math.round(p + l) !== s && (p -= ae(n, "top", "bottom") + l)), !Ue(t)) {
    var c = Math.round(i + a) - e, b = Math.round(p + l) - s;
    Math.abs(c) !== 1 && (i -= c), Math.abs(b) !== 1 && (p -= b);
  }
  return Y(r.left, r.top, i, p);
}
var Fe = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof H(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof H(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function Ue(t) {
  return t === H(t).document.documentElement;
}
function Ge(t) {
  return X ? Fe(t) ? He(t) : We(t) : _e;
}
function Ve(t) {
  var e = t.x, s = t.y, n = t.width, r = t.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(a.prototype);
  return me(l, {
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
var Ye = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Y(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = Ge(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Je = (
  /** @class */
  function() {
    function t(e, s) {
      var n = Ve(s);
      me(this, { target: e, contentRect: n });
    }
    return t;
  }()
), Xe = (
  /** @class */
  function() {
    function t(e, s, n) {
      if (this.activeObservations_ = [], this.observations_ = new he(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = s, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof H(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(e) || (s.set(e, new Ye(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof H(e).Element))
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
          return new Je(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), ye = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new he(), be = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = je.getInstance(), n = new Xe(e, s, this);
      ye.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  be.prototype[t] = function() {
    var e;
    return (e = ye.get(this))[t].apply(e, arguments);
  };
});
var Qe = function() {
  return typeof G.ResizeObserver < "u" ? G.ResizeObserver : be;
}();
const Ze = ["id"], Ke = /* @__PURE__ */ O({
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
    const e = t, s = Q(), n = L("isInEditor", w.isInEditor()), r = U(null), a = U(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (a.value = s.srcset);
    const i = y(() => {
      let m;
      if (e.width) {
        const { width: h } = e;
        let _ = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(h) && (_ = ""), m = {
          "--asset-max-inline-size": `${h}${_}`
        };
      }
      return m;
    }), p = y(() => {
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
    }), c = y(() => {
      const m = k(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), h = k("meta", {
        content: e.title,
        itemProp: "caption"
      }), _ = [
        k("img", {
          alt: e.alt,
          src: a.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (_.push(m), e.displayPopupTitle && _.push(h)), () => _;
    });
    let b;
    const T = (m) => {
      let h;
      const { clientWidth: _ } = r.value.parentNode;
      return m.reverse(), m.forEach((C) => {
        parseInt(C, 10) > _ && (h = C);
      }), h;
    }, I = () => {
      const m = {};
      if (e.src) {
        const h = new XMLHttpRequest(), _ = `${e.src.split("?")[0]}?req=set,json`;
        h.open("GET", _, !1), h.onload = () => {
          var C;
          if (h.status >= 200 && h.status < 400) {
            let $;
            const { responseText: g } = h, z = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(g);
            if (z && z.length >= 2) {
              const A = z[2];
              /^{[\s\S]*}$/gim.test(A) && ($ = JSON.parse(A));
            }
            $ && ((C = $.set) != null && C.relation) && Array.isArray($.set.relation) && $.set.relation.forEach(
              (A) => {
                m[parseInt(A.userdata.SmartCropWidth, 10)] = `:${A.userdata.SmartCropDef}`;
              }
            );
          }
        }, h.send();
      }
      return m;
    }, q = () => {
      Object.keys(l).length === 0 && (l = I());
      const m = T(Object.keys(l));
      if (m) {
        const h = e.src.replace(
          "?",
          `${l[m]}?`
        );
        a.value = h.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        a.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, f = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (a.value = s.srcset, q()) : a.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : a.value = e.src;
    };
    return Z(() => {
      const m = (h) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(h) && h.length && h.forEach(() => {
            q();
          });
        });
      };
      b = new Qe(m), b.observe(r.value), f();
    }), ve(() => {
      r.value && b.unobserve(r.value);
    }), de(
      () => e.src,
      async (m, h) => {
        m !== h && f();
      }
    ), (m, h) => {
      var _;
      return o(), d("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: u(p.value),
        style: ue(i.value)
      }, [
        a.value ? (o(), d(B, { key: 0 }, [
          (_ = e.imageLink) != null && _.url ? (o(), E(D, W({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: j(() => [
              (o(), E(x(c.value), { key: a.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), E(x(c.value), { key: a.value }))
        ], 64)) : v("", !0)
      ], 14, Ze);
    };
  }
});
const et = ["id", "aria-label"], Lt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(
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
        let p = k(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: i.language
          },
          [i.title]
        );
        return i.level > 0 && (p = k(
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
        )), k(
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
            p,
            r(i.children)
          ]
        );
      });
      return k(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (a, l) => (o(), d("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: u(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), E(x(r(e.items))))
    ], 10, et));
  }
}), tt = ["id", "aria-label"], Ot = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(
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
        (i) => k(
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
            k(
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
      return k("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (a, l) => (o(), d("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: u(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), E(x(r(e.items))))
    ], 10, tt));
  }
}), st = ["id"], Tt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...N("cmp-separator")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, a) => (o(), d("div", {
      id: e.id,
      class: u(n.value)
    }, [
      P("hr", {
        class: u(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, st));
  }
}), nt = ["id"], it = /* @__PURE__ */ O({
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
    const e = t, s = Q(), n = pe(), r = L("isInEditor", w.isInEditor()), a = y(() => {
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
    }), l = U((s == null ? void 0 : s.linkDisabled) !== !0), i = y(() => e.isNested ? "-" : "__"), p = y(() => n.path && typeof n.path < "u" ? n.path : null);
    return de(
      () => s == null ? void 0 : s.linkDisabled,
      async (c, b) => {
        c !== b && (l.value = c !== !0);
      }
    ), (c, b) => (o(), d("div", {
      id: e.id,
      class: u(a.value)
    }, [
      (o(), E(x(e.type), {
        class: u(`${c.baseCssClass}${i.value}text`)
      }, {
        default: j(() => {
          var T, I;
          return [
            l.value ? (o(), E(D, W({
              key: 0,
              class: `${c.baseCssClass}${i.value}link`,
              href: ((T = e.link) == null ? void 0 : T.url) || p.value
            }, (I = e.link) == null ? void 0 : I.attributes), {
              default: j(() => [
                F(S(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), d(B, { key: 1 }, [
              F(S(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, nt));
  }
}), rt = ["id"], at = ["innerHTML"], Pt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", w.isInEditor()), n = y(() => {
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
    }), r = y(() => {
      var i, p;
      return {
        class: `${e.baseCssClass}__link`,
        href: (i = e.link) == null ? void 0 : i.url,
        ...(p = e.link) == null ? void 0 : p.attributes
      };
    }), a = y(() => ({
      baseCssClass: `${e.baseCssClass}__title`,
      isInEditor: s,
      isNested: !0,
      link: e.link,
      linkDisabled: !e.link,
      text: e.title,
      type: e.titleType
    })), l = (i) => K.sanitize(i);
    return (i, p) => (o(), d("div", {
      id: e.id,
      class: u(n.value)
    }, [
      (o(), E(x(e.link ? D : "section"), re(ge(e.link ? r.value : !1)), {
        default: j(() => [
          e.pretitle || e.title || e.description ? (o(), d("div", {
            key: 0,
            class: u(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), d("p", {
              key: 0,
              class: u(`${e.baseCssClass}__pretitle`)
            }, S(e.pretitle), 3)) : v("", !0),
            e.title ? (o(), E(it, re(W({ key: 1 }, a.value)), null, 16)) : v("", !0),
            e.description ? (o(), d("div", {
              key: 2,
              class: u(`${e.baseCssClass}__description`),
              innerHTML: `${l(e.description)}`
            }, null, 10, at)) : v("", !0),
            e.actions && e.actions.length > 0 ? (o(), d("div", {
              key: 3,
              class: u(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), d(B, null, le(e.actions, (c, b) => (o(), E(D, W({
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
            ], 2)) : v("", !0)
          ], 2)) : v("", !0),
          e.imagePath ? (o(), d("div", {
            key: 1,
            class: u(`${e.baseCssClass}__image`)
          }, [
            Ce(Ke, {
              alt: e.imageAlt,
              "is-in-editor": oe(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : v("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, rt));
  }
});
const ot = ["id", "innerHTML"], lt = ["id"], Nt = /* @__PURE__ */ O({
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
    const e = t, s = fe(), n = L("isInEditor", w.isInEditor()), r = y(
      () => R(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), a = U(null), l = (c) => K.sanitize(c), i = y(() => {
      const c = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : c;
    }), p = () => {
      if (a.value) {
        const c = s.getRoutes().map((b) => b.path);
        !w.isEditMode() && !w.isPreviewMode() && a.value.querySelectorAll("a").forEach((b) => {
          b.classList.add("cmp-link");
          const T = b.getAttribute("target") || "_self", I = b.getAttribute("href") || "#";
          b.onclick = (q) => {
            T !== "_blank" && c.includes(I) && (q.preventDefault(), s.push(I));
          };
        });
      }
    };
    return Z(() => {
      p();
    }), ce(() => {
      p();
    }), (c, b) => e.richText ? (o(), d("div", {
      key: 0,
      id: i.value,
      ref_key: "richTextElement",
      ref: a,
      class: u(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, ot)) : (o(), d("div", {
      key: 1,
      id: i.value,
      class: u(r.value)
    }, [
      P("p", {
        class: u(`${e.baseCssClass}__paragraph`)
      }, S(e.text), 3)
    ], 10, lt));
  }
});
export {
  ht as BreadcrumbEditConfig,
  mt as ButtonEditConfig,
  $t as CoreBreadcrumb,
  wt as CoreButton,
  St as CoreDownload,
  xt as CoreEmbed,
  Ke as CoreImage,
  Lt as CoreLanguageNavigation,
  D as CoreLink,
  Ot as CoreNavigation,
  Tt as CoreSeparator,
  Pt as CoreTeaser,
  Nt as CoreText,
  it as CoreTitle,
  _t as DownloadEditConfig,
  yt as EmbedEditConfig,
  bt as ImageEditConfig,
  vt as LanguageNavigationEditConfig,
  gt as NavigationEditConfig,
  Ct as TeaserEditConfig,
  kt as TextEditConfig,
  Et as TitleEditConfig
};
