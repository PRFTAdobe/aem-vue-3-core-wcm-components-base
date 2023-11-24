import { defineComponent as D, useAttrs as re, computed as v, openBlock as o, createElementBlock as p, mergeProps as W, unref as _e, renderSlot as fe, inject as L, normalizeClass as u, createElementVNode as T, Fragment as A, renderList as ie, createBlock as x, resolveDynamicComponent as O, h as S, withCtx as B, createCommentVNode as g, toDisplayString as $, createTextVNode as V, onMounted as ae, onUpdated as ye, normalizeStyle as ve, ref as J, onUnmounted as Te, watch as be, normalizeProps as he, guardReactiveProps as Le, createVNode as De } from "vue";
import { AuthoringUtils as w } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as P, componentClassNames as N, ComponentMapping as Oe } from "aem-vue-3-editable-components";
import { useRoute as ge, useRouter as Ce } from "vue-router";
import oe from "dompurify";
const xt = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, St = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, wt = {
  emptyLabel: "Download",
  isEmpty(t) {
    return (typeof t.url > "u" || t.url === null || t.url.length === 0) && (typeof t.handleOnClick > "u" || t.handleOnClick === null);
  }
}, Tt = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, Lt = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, Dt = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Ot = {
  emptyLabel: "List",
  isEmpty(t) {
    return t.items === null || t.items.length === 0;
  }
}, Pt = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Nt = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, At = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, It = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Pe = ["href", "target"], Ne = {
  key: 1,
  class: "cmp-span"
}, z = /* @__PURE__ */ D({
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
    const e = t, s = re(), n = ge(), r = Ce(), i = v(() => {
      const a = [e.class, e.baseCssClass];
      return n.path && typeof n.path < "u" && n.path === e.href && a.push("cmp-link--active"), a;
    }), l = (a) => {
      const d = r.getRoutes().map((c) => c.path);
      !w.isEditMode() && !w.isPreviewMode() && e.target !== "_blank" && d.includes(e.href) && (a.preventDefault(), r.push({
        path: e.href
      }));
    };
    return (a, d) => e.navigable ? (o(), p("a", W({
      key: 0,
      class: i.value,
      href: e.href,
      target: e.target
    }, { ..._e(s) }, { onClick: l }), [
      fe(a.$slots, "default")
    ], 16, Pe)) : (o(), p("span", Ne, [
      fe(a.$slots, "default")
    ]));
  }
}), Ae = ["id", "aria-label"], Rt = /* @__PURE__ */ D({
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
    ...P("cmp-breadcrumb")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i) => {
      const l = (c, m = !1) => {
        const C = {
          itemProp: "name"
        };
        return m && (C["aria-current"] = "page"), S("span", C, c);
      };
      let d = ((c) => S(
        z,
        {
          href: c.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: c.navigable
        },
        () => l(c.title)
      ))(i);
      return i.active && (d = l(i.title, !0)), S(
        "li",
        {
          class: [
            `${e.baseCssClass}__item`,
            {
              [`${e.baseCssClass}__item--active`]: i.active
            }
          ],
          itemProp: "itemListElement",
          itemScope: !0,
          itemType: "http://schema.org/ListItem"
        },
        d
      );
    };
    return (i, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: u(n.value)
    }, [
      T("ol", {
        class: u(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), p(A, null, ie(e.items, (a) => (o(), x(O(r(a)), {
          key: a.toString()
        }))), 128))
      ], 2)
    ], 10, Ae));
  }
});
const Ie = ["type"], zt = /* @__PURE__ */ D({
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
    ...P("cmp-button")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(i);
    };
    return (i, l) => e.text ? (o(), p(A, { key: 0 }, [
      e.link ? (o(), x(z, {
        key: 0,
        "aria-label": e.ariaLabel,
        class: u(n.value.join(" ")),
        href: e.link,
        onClick: r
      }, {
        default: B(() => [
          e.icon ? (o(), p("span", {
            key: 0,
            class: u(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
          }, null, 2)) : g("", !0),
          T("span", {
            class: u(`${e.baseCssClass}__text`)
          }, $(e.text), 3)
        ]),
        _: 1
      }, 8, ["aria-label", "class", "href"])) : (o(), p("button", {
        key: 1,
        class: u(n.value),
        type: e.type,
        onClick: r
      }, [
        e.icon ? (o(), p("span", {
          key: 0,
          class: u(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : g("", !0),
        T("span", {
          class: u(`${e.baseCssClass}__text`)
        }, $(e.text), 3)
      ], 10, Ie))
    ], 64)) : g("", !0);
  }
});
const Re = ["id"], ze = ["innerHTML"], Ht = /* @__PURE__ */ D({
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
    ...P("cmp-download")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = L("componentMapping", new Oe()), r = v(() => {
      const d = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return s && d.push("cq-dd-file"), d;
    }), i = v(
      () => !(e.url && e.url.length > 0 || e.handleOnClick && typeof e.handleOnClick == "function")
    ), l = v(() => {
      const d = n.get(
        "stanley/components/button"
      );
      return S(d, {
        class: `${e.baseCssClass}__action`,
        link: e.url || "#",
        handleOnClick: e.handleOnClick,
        text: e.actionText
      });
    }), a = (d) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(d);
    };
    return (d, c) => i.value ? g("", !0) : (o(), p("div", {
      key: 0,
      id: e.id,
      class: u(r.value)
    }, [
      e.title ? (o(), x(O(e.titleType), {
        key: 0,
        class: u(`${e.baseCssClass}__title`)
      }, {
        default: B(() => [
          e.url || e.handleOnClick ? (o(), x(z, {
            key: 0,
            class: u(`${e.baseCssClass}__title-link`),
            href: e.url || "#",
            onClick: a
          }, {
            default: B(() => [
              V($(e.title), 1)
            ]),
            _: 1
          }, 8, ["class", "href"])) : (o(), p(A, { key: 1 }, [
            V($(e.title), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])) : g("", !0),
      e.description ? (o(), p("div", {
        key: 1,
        class: u(`${e.baseCssClass}__description`),
        innerHTML: e.description
      }, null, 10, ze)) : g("", !0),
      e.filename || e.size || e.format ? (o(), p("dl", {
        key: 2,
        class: u(`${e.baseCssClass}__properties`)
      }, [
        e.filename ? (o(), p("div", {
          key: 0,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--filename`
          ])
        }, [
          T("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Filename", 2),
          T("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, $(e.filename), 3)
        ], 2)) : g("", !0),
        e.size ? (o(), p("div", {
          key: 1,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--size`
          ])
        }, [
          T("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Size", 2),
          T("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, $(e.size), 3)
        ], 2)) : g("", !0),
        e.format ? (o(), p("div", {
          key: 2,
          class: u([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--format`
          ])
        }, [
          T("dt", {
            class: u(`${e.baseCssClass}__property-label`)
          }, "Format", 2),
          T("dd", {
            class: u(`${e.baseCssClass}__property-content`)
          }, $(e.format), 3)
        ], 2)) : g("", !0)
      ], 2)) : g("", !0),
      (o(), x(O(l.value)))
    ], 10, Re));
  }
});
const He = ["id"], Be = ["innerHTML"], Ue = ["href"], Fe = ["href"], Ye = ["innerHTML"], Bt = /* @__PURE__ */ D({
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
    ...P("cmp-embed")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = (h, _ = !0, f = "text/javascript") => new Promise((b, k) => {
      try {
        const E = document.createElement("script");
        E.type = f, E.async = _, E.src = h, E.addEventListener("load", () => {
          b({ status: !0 });
        }), E.addEventListener("error", () => {
          k({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(E);
      } catch (E) {
        k(E);
      }
    }), r = (h) => oe.sanitize(h), i = v(() => {
      const h = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return h.push({
        "cq-dd-embed": s || !1
      }), h;
    }), l = () => {
      var U, te, ce, ue, de, pe;
      const h = (U = e.youTubeProps) == null ? void 0 : U.youtubeVideoId, _ = (te = e.youTubeProps) == null ? void 0 : te.youtubeAutoPlay, f = (ce = e.youTubeProps) == null ? void 0 : ce.youtubeLoop, b = (ue = e.youTubeProps) == null ? void 0 : ue.youtubeMute, k = (de = e.youTubeProps) == null ? void 0 : de.youtubePlaysInline, E = (pe = e.youTubeProps) == null ? void 0 : pe.youtubeRel, I = `https://www.youtube.com/embed/${h}`, R = {
        mute: `${+b}`,
        autoplay: `${+_}`,
        loop: `${+f}`,
        playlist: `${h}`,
        rel: `${+E}`,
        playsinline: `${+k}`
      }, j = new URLSearchParams(R).toString();
      return `${I}?${j}`;
    }, a = v(
      () => {
        var h, _, f, b, k;
        return S("iFrame", {
          type: "text/html",
          width: ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? "100%" : (_ = e.youTubeProps) == null ? void 0 : _.youtubeWidth,
          height: ((f = e.youTubeProps) == null ? void 0 : f.layout) === "responsive" ? "100%" : (b = e.youTubeProps) == null ? void 0 : b.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: (k = e.youTubeProps) != null && k.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), d = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: h } = e.result.options;
        return S("img", {
          title: h == null ? void 0 : h.title,
          width: h == null ? void 0 : h.width,
          height: h == null ? void 0 : h.height,
          src: h == null ? void 0 : h.url
        });
      }
      return S("img");
    }), c = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: h } = e.result.options;
        return h.type;
      }
    }), m = v(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), C = v(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), H = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: h } = e.result.options;
        return h.html;
      }
    }), Y = () => {
      var b, k, E, I;
      const h = ((b = e.result) == null ? void 0 : b.processor) === "oembed" && ((E = (k = e.result) == null ? void 0 : k.options) == null ? void 0 : E.provider) === "Twitter";
      let _ = "//assets.pinterest.com/js/pinit.js";
      h && (_ = "//platform.twitter.com/widgets.js");
      let f = document.querySelector(`script[src="${_}"]`);
      f ? f.dataset.loaded === "true" ? typeof ((I = window.PinUtils) == null ? void 0 : I.build) == "function" && window.PinUtils.build() : f.addEventListener("load", () => {
        var R;
        typeof ((R = window.PinUtils) == null ? void 0 : R.build) == "function" && window.PinUtils.build();
      }) : n(_).then(() => {
        var R;
        typeof ((R = window.PinUtils) == null ? void 0 : R.build) == "function" && window.PinUtils.build(), f = document.querySelector(`script[src="${_}"]`), f.dataset.loaded = (!0).toString();
      }).catch((R) => {
        console.error(R);
      });
    };
    return ae(() => {
      Y();
    }), ye(() => {
      Y();
    }), (h, _) => {
      var f, b, k, E, I;
      return o(), p("div", {
        id: e.id,
        class: u(i.value)
      }, [
        e.type === "HTML" ? (o(), p("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, Be)) : e.type === "EMBEDDABLE" ? (o(), p(A, { key: 1 }, [
          ((f = e.youTubeProps) == null ? void 0 : f.layout) === "responsive" ? (o(), p("div", {
            key: 0,
            class: u(`${h.baseCssClass}__embeddable-wrapper`),
            style: ve({
              "padding-bottom": ((b = e.youTubeProps) == null ? void 0 : b.layout) === "responsive" ? `${(k = t.youTubeProps) == null ? void 0 : k.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), x(O(a.value)))
          ], 6)) : (o(), x(O(a.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), p(A, { key: 2 }, [
          ((E = e.result) == null ? void 0 : E.processor) === "pinterest" ? (o(), p("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, $(e.url), 9, Ue)) : ((I = e.result) == null ? void 0 : I.processor) === "oembed" ? (o(), p(A, { key: 1 }, [
            c.value === "photo" ? (o(), x(O(d.value), { key: 0 })) : c.value === "link" ? (o(), p("a", {
              key: 1,
              href: m.value
            }, $(C.value), 9, Fe)) : c.value === "video" || c.value === "rich" ? (o(), p("div", {
              key: 2,
              innerHTML: H.value
            }, null, 8, Ye)) : g("", !0)
          ], 64)) : g("", !0)
        ], 64)) : g("", !0)
      ], 10, He);
    };
  }
});
var Ee = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, s) {
    var n = -1;
    return e.some(function(r, i) {
      return r[0] === s ? (n = i, !0) : !1;
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
        for (var r = 0, i = this.__entries__; r < i.length; r++) {
          var l = i[r];
          s.call(n, l[1], l[0]);
        }
      }, e;
    }()
  );
}(), se = typeof window < "u" && typeof document < "u" && window.document === document, X = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), qe = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(X) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), je = 2;
function We(t, e) {
  var s = !1, n = !1, r = 0;
  function i() {
    s && (s = !1, t()), n && a();
  }
  function l() {
    qe(i);
  }
  function a() {
    var d = Date.now();
    if (s) {
      if (d - r < je)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = d;
  }
  return a;
}
var Ve = 20, Ze = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ge = typeof MutationObserver < "u", Je = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = We(this.refresh.bind(this), Ve);
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
      !se || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ge ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !se || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = Ze.some(function(i) {
        return !!~n.indexOf(i);
      });
      r && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), Me = function(t, e) {
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
  return e || X;
}, ke = ee(0, 0, 0, 0);
function Q(t) {
  return parseFloat(t) || 0;
}
function me(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var i = t["border-" + r + "-width"];
    return n + Q(i);
  }, 0);
}
function Xe(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n], l = t["padding-" + i];
    s[i] = Q(l);
  }
  return s;
}
function Qe(t) {
  var e = t.getBBox();
  return ee(0, 0, e.width, e.height);
}
function Ke(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return ke;
  var n = q(t).getComputedStyle(t), r = Xe(n), i = r.left + r.right, l = r.top + r.bottom, a = Q(n.width), d = Q(n.height);
  if (n.boxSizing === "border-box" && (Math.round(a + i) !== e && (a -= me(n, "left", "right") + i), Math.round(d + l) !== s && (d -= me(n, "top", "bottom") + l)), !tt(t)) {
    var c = Math.round(a + i) - e, m = Math.round(d + l) - s;
    Math.abs(c) !== 1 && (a -= c), Math.abs(m) !== 1 && (d -= m);
  }
  return ee(r.left, r.top, a, d);
}
var et = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof q(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof q(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function tt(t) {
  return t === q(t).document.documentElement;
}
function st(t) {
  return se ? et(t) ? Qe(t) : Ke(t) : ke;
}
function nt(t) {
  var e = t.x, s = t.y, n = t.width, r = t.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(i.prototype);
  return Me(l, {
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
function ee(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var rt = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ee(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = st(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), it = (
  /** @class */
  function() {
    function t(e, s) {
      var n = nt(s);
      Me(this, { target: e, contentRect: n });
    }
    return t;
  }()
), at = (
  /** @class */
  function() {
    function t(e, s, n) {
      if (this.activeObservations_ = [], this.observations_ = new Ee(), typeof e != "function")
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
        s.has(e) || (s.set(e, new rt(e)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new it(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), $e = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ee(), xe = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = Je.getInstance(), n = new at(e, s, this);
      $e.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  xe.prototype[t] = function() {
    var e;
    return (e = $e.get(this))[t].apply(e, arguments);
  };
});
var ot = function() {
  return typeof X.ResizeObserver < "u" ? X.ResizeObserver : xe;
}();
const lt = ["id"], ct = /* @__PURE__ */ D({
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
    ...P("cmp-image")
  },
  setup(t) {
    const e = t, s = re(), n = L("isInEditor", w.isInEditor()), r = J(null), i = J(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (i.value = s.srcset);
    const a = v(() => {
      let _;
      if (e.width) {
        const { width: f } = e;
        let b = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(f) && (b = ""), _ = {
          "--asset-max-inline-size": `${f}${b}`
        };
      }
      return _;
    }), d = v(() => {
      const _ = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      );
      return _.push({
        "cq-dd-image": n || !1
      }), _;
    }), c = v(() => {
      const _ = S(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), f = S("meta", {
        content: e.title,
        itemProp: "caption"
      }), b = [
        S("img", {
          alt: e.alt,
          src: i.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (b.push(_), e.displayPopupTitle && b.push(f)), () => b;
    });
    let m;
    const C = (_) => {
      let f;
      const { clientWidth: b } = r.value.parentNode;
      return _.reverse(), _.forEach((k) => {
        parseInt(k, 10) > b && (f = k);
      }), f;
    }, H = () => {
      const _ = {};
      if (e.src) {
        const f = new XMLHttpRequest(), b = `${e.src.split("?")[0]}?req=set,json`;
        f.open("GET", b, !1), f.onload = () => {
          var k;
          if (f.status >= 200 && f.status < 400) {
            let E;
            const { responseText: I } = f, j = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(I);
            if (j && j.length >= 2) {
              const U = j[2];
              /^{[\s\S]*}$/gim.test(U) && (E = JSON.parse(U));
            }
            E && ((k = E.set) != null && k.relation) && Array.isArray(E.set.relation) && E.set.relation.forEach(
              (U) => {
                _[parseInt(U.userdata.SmartCropWidth, 10)] = `:${U.userdata.SmartCropDef}`;
              }
            );
          }
        }, f.send();
      }
      return _;
    }, Y = () => {
      Object.keys(l).length === 0 && (l = H());
      const _ = C(Object.keys(l));
      if (_) {
        const f = e.src.replace(
          "?",
          `${l[_]}?`
        );
        i.value = f.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        i.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, h = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (i.value = s.srcset, Y()) : i.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : i.value = e.src;
    };
    return ae(() => {
      const _ = (f) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(f) && f.length && f.forEach(() => {
            Y();
          });
        });
      };
      m = new ot(_), m.observe(r.value), h();
    }), Te(() => {
      r.value && m.unobserve(r.value);
    }), be(
      () => e.src,
      async (_, f) => {
        _ !== f && h();
      }
    ), (_, f) => {
      var b;
      return o(), p("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: u(d.value),
        style: ve(a.value)
      }, [
        i.value ? (o(), p(A, { key: 0 }, [
          (b = e.imageLink) != null && b.url ? (o(), x(z, W({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: B(() => [
              (o(), x(O(c.value), { key: i.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), x(O(c.value), { key: i.value }))
        ], 64)) : g("", !0)
      ], 14, lt);
    };
  }
});
const ut = ["id", "aria-label"], Ut = /* @__PURE__ */ D({
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
    ...P("cmp-languagenavigation")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i) => {
      if ((i || []).length === 0 || typeof i > "u")
        return;
      const l = i.map((a) => {
        let d = S(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: a.language
          },
          [a.title]
        );
        return a.level > 0 && (d = S(
          z,
          {
            "aria-current": `${a.active ? "page" : !1}`,
            class: `${e.baseCssClass}__item-link`,
            href: a.link.url,
            title: a.title,
            hrefLang: a.language,
            lang: a.language,
            rel: "alternate"
          },
          () => a.title
        )), S(
          "li",
          {
            class: [
              `${e.baseCssClass}__item`,
              `${e.baseCssClass}__item--level-${a == null ? void 0 : a.level}`,
              `${e.baseCssClass}__item--countrycode-${a.country}`,
              `${e.baseCssClass}__item--langcode-${a.language}`,
              {
                [`${e.baseCssClass}__item--active`]: a == null ? void 0 : a.active
              }
            ]
          },
          [
            d,
            r(a.children)
          ]
        );
      });
      return S(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (i, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: u(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), x(O(r(e.items))))
    ], 10, ut));
  }
});
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */
var ne = {}, Z = {}, G = "en", le = {
  MMMM: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dddd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  A: ["AM", "PM"]
}, Se = {
  YYYY: function(t) {
    return ("000" + t.getFullYear()).slice(-4);
  },
  YY: function(t) {
    return ("0" + t.getFullYear()).slice(-2);
  },
  Y: function(t) {
    return "" + t.getFullYear();
  },
  MMMM: function(t) {
    return this.res.MMMM[t.getMonth()];
  },
  MMM: function(t) {
    return this.res.MMM[t.getMonth()];
  },
  MM: function(t) {
    return ("0" + (t.getMonth() + 1)).slice(-2);
  },
  M: function(t) {
    return "" + (t.getMonth() + 1);
  },
  DD: function(t) {
    return ("0" + t.getDate()).slice(-2);
  },
  D: function(t) {
    return "" + t.getDate();
  },
  HH: function(t) {
    return ("0" + t.getHours()).slice(-2);
  },
  H: function(t) {
    return "" + t.getHours();
  },
  A: function(t) {
    return this.res.A[t.getHours() > 11 | 0];
  },
  hh: function(t) {
    return ("0" + (t.getHours() % 12 || 12)).slice(-2);
  },
  h: function(t) {
    return "" + (t.getHours() % 12 || 12);
  },
  mm: function(t) {
    return ("0" + t.getMinutes()).slice(-2);
  },
  m: function(t) {
    return "" + t.getMinutes();
  },
  ss: function(t) {
    return ("0" + t.getSeconds()).slice(-2);
  },
  s: function(t) {
    return "" + t.getSeconds();
  },
  SSS: function(t) {
    return ("00" + t.getMilliseconds()).slice(-3);
  },
  SS: function(t) {
    return ("0" + (t.getMilliseconds() / 10 | 0)).slice(-2);
  },
  S: function(t) {
    return "" + (t.getMilliseconds() / 100 | 0);
  },
  dddd: function(t) {
    return this.res.dddd[t.getDay()];
  },
  ddd: function(t) {
    return this.res.ddd[t.getDay()];
  },
  dd: function(t) {
    return this.res.dd[t.getDay()];
  },
  Z: function(t) {
    var e = t.getTimezoneOffset() / 0.6 | 0;
    return (e > 0 ? "-" : "+") + ("000" + Math.abs(e - (e % 100 * 0.4 | 0))).slice(-4);
  },
  ZZ: function(t) {
    var e = t.getTimezoneOffset(), s = Math.abs(e);
    return (e > 0 ? "-" : "+") + ("0" + (s / 60 | 0)).slice(-2) + ":" + ("0" + s % 60).slice(-2);
  },
  post: function(t) {
    return t;
  },
  res: le
}, we = {
  YYYY: function(t) {
    return this.exec(/^\d{4}/, t);
  },
  Y: function(t) {
    return this.exec(/^\d{1,4}/, t);
  },
  MMMM: function(t) {
    var e = this.find(this.res.MMMM, t);
    return e.value++, e;
  },
  MMM: function(t) {
    var e = this.find(this.res.MMM, t);
    return e.value++, e;
  },
  MM: function(t) {
    return this.exec(/^\d\d/, t);
  },
  M: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  DD: function(t) {
    return this.exec(/^\d\d/, t);
  },
  D: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  HH: function(t) {
    return this.exec(/^\d\d/, t);
  },
  H: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  A: function(t) {
    return this.find(this.res.A, t);
  },
  hh: function(t) {
    return this.exec(/^\d\d/, t);
  },
  h: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  mm: function(t) {
    return this.exec(/^\d\d/, t);
  },
  m: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  ss: function(t) {
    return this.exec(/^\d\d/, t);
  },
  s: function(t) {
    return this.exec(/^\d\d?/, t);
  },
  SSS: function(t) {
    return this.exec(/^\d{1,3}/, t);
  },
  SS: function(t) {
    var e = this.exec(/^\d\d?/, t);
    return e.value *= 10, e;
  },
  S: function(t) {
    var e = this.exec(/^\d/, t);
    return e.value *= 100, e;
  },
  Z: function(t) {
    var e = this.exec(/^[+-]\d{2}[0-5]\d/, t);
    return e.value = (e.value / 100 | 0) * -60 - e.value % 100, e;
  },
  ZZ: function(t) {
    var e = /^([+-])(\d{2}):([0-5]\d)/.exec(t) || ["", "", "", ""];
    return { value: 0 - ((e[1] + e[2] | 0) * 60 + (e[1] + e[3] | 0)), length: e[0].length };
  },
  h12: function(t, e) {
    return (t === 12 ? 0 : t) + e * 12;
  },
  exec: function(t, e) {
    var s = (t.exec(e) || [""])[0];
    return { value: s | 0, length: s.length };
  },
  find: function(t, e) {
    for (var s = -1, n = 0, r = 0, i = t.length, l; r < i; r++)
      l = t[r], !e.indexOf(l) && l.length > n && (s = r, n = l.length);
    return { value: s, length: n };
  },
  pre: function(t) {
    return t;
  },
  res: le
}, F = function(t, e, s, n) {
  var r = {}, i;
  for (i in t)
    r[i] = t[i];
  for (i in e || {})
    !!s ^ !!r[i] || (r[i] = e[i]);
  return n && (r.res = n), r;
}, M = {
  _formatter: Se,
  _parser: we
}, K, y;
M.compile = function(t) {
  for (var e = /\[([^[\]]|\[[^[\]]*])*]|([A-Za-z])\2+|\.{3}|./g, s, n = [t]; s = e.exec(t); )
    n[n.length] = s[0];
  return n;
};
M.format = function(t, e, s) {
  var n = this || y, r = typeof e == "string" ? n.compile(e) : e, i = t.getTimezoneOffset(), l = n.addMinutes(t, s ? i : 0), a = n._formatter, d = "";
  l.getTimezoneOffset = function() {
    return s ? 0 : i;
  };
  for (var c = 1, m = r.length, C; c < m; c++)
    C = r[c], d += a[C] ? a.post(a[C](l, r[0])) : C.replace(/\[(.*)]/, "$1");
  return d;
};
M.preparse = function(t, e) {
  var s = this || y, n = typeof e == "string" ? s.compile(e) : e, r = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, i = /\[(.*)]/, l = s._parser, a = 0;
  t = l.pre(t);
  for (var d = 1, c = n.length, m, C; d < c; d++)
    if (m = n[d], l[m]) {
      if (C = l[m](t.slice(a), n[0]), !C.length)
        break;
      a += C.length, r[C.token || m.charAt(0)] = C.value, r._match++;
    } else if (m === t.charAt(a) || m === " ")
      a++;
    else if (i.test(m) && !t.slice(a).indexOf(i.exec(m)[1]))
      a += m.length - 2;
    else if (m === "...") {
      a = t.length;
      break;
    } else
      break;
  return r.H = r.H || l.h12(r.h, r.A), r._index = a, r._length = t.length, r;
};
M.parse = function(t, e, s) {
  var n = this || y, r = typeof e == "string" ? n.compile(e) : e, i = n.preparse(t, r);
  return n.isValid(i) ? (i.M -= i.Y < 100 ? 22801 : 1, s || ~n._parser.find(r, "ZZ").value ? new Date(Date.UTC(i.Y, i.M, i.D, i.H, i.m + i.Z, i.s, i.S)) : new Date(i.Y, i.M, i.D, i.H, i.m, i.s, i.S)) : /* @__PURE__ */ new Date(NaN);
};
M.isValid = function(t, e) {
  var s = this || y, n = typeof t == "string" ? s.preparse(t, e) : t, r = [31, 28 + s.isLeapYear(n.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n.M - 1];
  return !(n._index < 1 || n._length < 1 || n._index - n._length || n._match < 1 || n.Y < 1 || n.Y > 9999 || n.M < 1 || n.M > 12 || n.D < 1 || n.D > r || n.H < 0 || n.H > 23 || n.m < 0 || n.m > 59 || n.s < 0 || n.s > 59 || n.S < 0 || n.S > 999 || n.Z < -840 || n.Z > 720);
};
M.transform = function(t, e, s, n) {
  const r = this || y;
  return r.format(r.parse(t, e), s, n);
};
M.addYears = function(t, e, s) {
  return (this || y).addMonths(t, e * 12, s);
};
M.addMonths = function(t, e, s) {
  var n = new Date(t.getTime());
  if (s) {
    if (n.setUTCMonth(n.getUTCMonth() + e), n.getUTCDate() < t.getUTCDate())
      return (this || y).addDays(n, -n.getUTCDate(), s);
  } else if (n.setMonth(n.getMonth() + e), n.getDate() < t.getDate())
    return (this || y).addDays(n, -n.getDate(), s);
  return n;
};
M.addDays = function(t, e, s) {
  return (this || y).addHours(t, e * 24, s);
};
M.addHours = function(t, e, s) {
  return (this || y).addMinutes(t, e * 60, s);
};
M.addMinutes = function(t, e, s) {
  return (this || y).addSeconds(t, e * 60, s);
};
M.addSeconds = function(t, e, s) {
  return (this || y).addMilliseconds(t, e * 1e3, s);
};
M.addMilliseconds = function(t, e, s) {
  var n = new Date(t.getTime());
  return s ? n.setUTCMilliseconds(n.getUTCMilliseconds() + e) : n.setMilliseconds(n.getMilliseconds() + e), n;
};
M.subtract = function(t, e) {
  var s = t.getTime() - e.getTime();
  return {
    toMilliseconds: function() {
      return s;
    },
    toSeconds: function() {
      return s / 1e3;
    },
    toMinutes: function() {
      return s / 6e4;
    },
    toHours: function() {
      return s / 36e5;
    },
    toDays: function() {
      return s / 864e5;
    }
  };
};
M.isLeapYear = function(t) {
  return !(t % 4) && !!(t % 100) || !(t % 400);
};
M.isSameDay = function(t, e) {
  return t.toDateString() === e.toDateString();
};
M.locale = function(t, e) {
  ne[t] || (ne[t] = e);
};
M.plugin = function(t, e) {
  Z[t] || (Z[t] = e);
};
K = F(M);
y = F(M);
y.locale = function(t) {
  var e = typeof t == "function" ? t : y.locale[t];
  if (!e)
    return G;
  G = e(M);
  var s = ne[G] || {}, n = F(le, s.res, !0), r = F(Se, s.formatter, !0, n), i = F(we, s.parser, !0, n);
  y._formatter = K._formatter = r, y._parser = K._parser = i;
  for (var l in Z)
    y.extend(Z[l]);
  return G;
};
y.extend = function(t) {
  var e = F(y._parser.res, t.res), s = t.extender || {};
  y._formatter = F(y._formatter, t.formatter, !1, e), y._parser = F(y._parser, t.parser, !1, e);
  for (var n in s)
    y[n] || (y[n] = s[n]);
};
y.plugin = function(t) {
  var e = typeof t == "function" ? t : y.plugin[t];
  e && y.extend(Z[e(M, K)] || {});
};
var dt = y;
const pt = ["id"], Ft = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "CoreList",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Array
    },
    // eslint-disable-next-line vue/require-default-prop
    dateFormatString: {
      type: String
    },
    showDescription: {
      type: Boolean
    },
    showModificationDate: {
      type: Boolean
    },
    linkItems: {
      type: Boolean
    },
    ...P("cmp-list")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i, l) => {
      if (i.lastModifiedFormatted)
        return i.lastModifiedFormatted;
      if (i.lastModified && l) {
        const a = new Date(i.lastModified);
        return dt.format(a, l.toUpperCase());
      }
      return "";
    };
    return (i, l) => e.items && e.items.length ? (o(), p("ul", {
      key: 0,
      id: e.id,
      class: u(n.value)
    }, [
      (o(!0), p(A, null, ie(e.items, (a, d) => {
        var c;
        return o(), p("li", {
          key: d,
          class: u(`${e.baseCssClass}__item`)
        }, [
          T("article", null, [
            e.linkItems && ((c = a.link) != null && c.url) ? (o(), x(z, {
              key: 0,
              class: u(`${e.baseCssClass}__item-link`),
              href: a.link.url
            }, {
              default: B(() => [
                T("span", {
                  class: u(`${e.baseCssClass}__item-title`)
                }, $(a.title), 3),
                e.showModificationDate ? (o(), p("span", {
                  key: 0,
                  class: u(`${e.baseCssClass}__item-date`)
                }, $(r(a, e.dateFormatString)), 3)) : g("", !0)
              ]),
              _: 2
            }, 1032, ["class", "href"])) : (o(), p(A, { key: 1 }, [
              T("span", {
                class: u(`${e.baseCssClass}__item-title`)
              }, $(a.title), 3),
              e.showModificationDate ? (o(), p("span", {
                key: 0,
                class: u(`${e.baseCssClass}__item-date`)
              }, $(r(a, e.dateFormatString)), 3)) : g("", !0)
            ], 64)),
            e.showDescription ? (o(), p("span", {
              key: 2,
              class: u(`${e.baseCssClass}__item-description`)
            }, $(a.description), 3)) : g("", !0)
          ])
        ], 2);
      }), 128))
    ], 10, pt)) : g("", !0);
  }
});
const ft = ["id", "aria-label"], Yt = /* @__PURE__ */ D({
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
    ...P("cmp-navigation")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i) => {
      if ((i || []).length === 0 || typeof i > "u")
        return;
      const l = i.map(
        (a) => S(
          "li",
          {
            class: [
              `${e.baseCssClass}__item`,
              `${e.baseCssClass}__item--level-${a == null ? void 0 : a.level}`,
              {
                [`${e.baseCssClass}__item--active`]: a == null ? void 0 : a.active
              }
            ]
          },
          [
            S(
              z,
              {
                "aria-current": `${a.active ? "page" : !1}`,
                class: `${e.baseCssClass}__item-link`,
                href: a.link.url,
                title: a.title,
                navigable: a == null ? void 0 : a.navigable
              },
              () => a.title
            ),
            r(a.children)
          ]
        )
      );
      return S("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (i, l) => (o(), p("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: u(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), x(O(r(e.items))))
    ], 10, ft));
  }
}), ht = ["id"], qt = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...P("cmp-separator")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, i) => (o(), p("div", {
      id: e.id,
      class: u(n.value)
    }, [
      T("hr", {
        class: u(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, ht));
  }
}), mt = ["id"], _t = /* @__PURE__ */ D({
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
    ...P("cmp-title")
  },
  setup(t) {
    const e = t, s = re(), n = ge(), r = L("isInEditor", w.isInEditor()), i = v(() => {
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
    }), l = J((s == null ? void 0 : s.linkDisabled) !== !0), a = v(() => e.isNested ? "-" : "__"), d = v(() => n.path && typeof n.path < "u" ? n.path : null);
    return be(
      () => s == null ? void 0 : s.linkDisabled,
      async (c, m) => {
        c !== m && (l.value = c !== !0);
      }
    ), (c, m) => (o(), p("div", {
      id: e.id,
      class: u(i.value)
    }, [
      (o(), x(O(e.type), {
        class: u(`${c.baseCssClass}${a.value}text`)
      }, {
        default: B(() => {
          var C, H;
          return [
            l.value ? (o(), x(z, W({
              key: 0,
              class: `${c.baseCssClass}${a.value}link`,
              href: ((C = e.link) == null ? void 0 : C.url) || d.value
            }, (H = e.link) == null ? void 0 : H.attributes), {
              default: B(() => [
                V($(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), p(A, { key: 1 }, [
              V($(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, mt));
  }
}), yt = ["id"], vt = ["innerHTML"], jt = /* @__PURE__ */ D({
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
    ...P("cmp-teaser")
  },
  setup(t) {
    const e = t, s = L("isInEditor", w.isInEditor()), n = v(() => {
      const a = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return a.push({
        "cq-dd-teaser": s
      }), a;
    }), r = v(() => {
      var a, d;
      return {
        class: `${e.baseCssClass}__link`,
        href: (a = e.link) == null ? void 0 : a.url,
        ...(d = e.link) == null ? void 0 : d.attributes
      };
    }), i = v(() => ({
      baseCssClass: `${e.baseCssClass}__title`,
      isInEditor: s,
      isNested: !0,
      link: e.link,
      linkDisabled: !e.link,
      text: e.title,
      type: e.titleType
    })), l = (a) => oe.sanitize(a);
    return (a, d) => (o(), p("div", {
      id: e.id,
      class: u(n.value)
    }, [
      (o(), x(O(e.link ? z : "section"), he(Le(e.link ? r.value : !1)), {
        default: B(() => [
          e.pretitle || e.title || e.description ? (o(), p("div", {
            key: 0,
            class: u(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), p("p", {
              key: 0,
              class: u(`${e.baseCssClass}__pretitle`)
            }, $(e.pretitle), 3)) : g("", !0),
            e.title ? (o(), x(_t, he(W({ key: 1 }, i.value)), null, 16)) : g("", !0),
            e.description ? (o(), p("div", {
              key: 2,
              class: u(`${e.baseCssClass}__description`),
              innerHTML: `${l(e.description)}`
            }, null, 10, vt)) : g("", !0),
            e.actions && e.actions.length > 0 ? (o(), p("div", {
              key: 3,
              class: u(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), p(A, null, ie(e.actions, (c, m) => (o(), x(z, W({
                id: c.id,
                key: `link-${m}`,
                class: `${e.baseCssClass}__action-link`,
                href: c.link.url,
                title: c.title
              }, c.link.attributes), {
                default: B(() => [
                  V($(c.title), 1)
                ]),
                _: 2
              }, 1040, ["id", "class", "href", "title"]))), 128))
            ], 2)) : g("", !0)
          ], 2)) : g("", !0),
          e.imagePath ? (o(), p("div", {
            key: 1,
            class: u(`${e.baseCssClass}__image`)
          }, [
            De(ct, {
              alt: e.imageAlt,
              "is-in-editor": _e(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : g("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, yt));
  }
});
const bt = ["id", "innerHTML"], gt = ["id"], Wt = /* @__PURE__ */ D({
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
    ...P("cmp-text")
  },
  setup(t) {
    const e = t, s = Ce(), n = L("isInEditor", w.isInEditor()), r = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), i = J(null), l = (c) => oe.sanitize(c), a = v(() => {
      const c = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : c;
    }), d = () => {
      if (i.value) {
        const c = s.getRoutes().map((m) => m.path);
        !w.isEditMode() && !w.isPreviewMode() && i.value.querySelectorAll("a").forEach((m) => {
          m.classList.add("cmp-link");
          const C = m.getAttribute("target") || "_self", H = m.getAttribute("href") || "#";
          m.onclick = (Y) => {
            C !== "_blank" && c.includes(H) && (Y.preventDefault(), s.push(H));
          };
        });
      }
    };
    return ae(() => {
      d();
    }), ye(() => {
      d();
    }), (c, m) => e.richText ? (o(), p("div", {
      key: 0,
      id: a.value,
      ref_key: "richTextElement",
      ref: i,
      class: u(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, bt)) : (o(), p("div", {
      key: 1,
      id: a.value,
      class: u(r.value)
    }, [
      T("p", {
        class: u(`${e.baseCssClass}__paragraph`)
      }, $(e.text), 3)
    ], 10, gt));
  }
});
export {
  xt as BreadcrumbEditConfig,
  St as ButtonEditConfig,
  Rt as CoreBreadcrumb,
  zt as CoreButton,
  Ht as CoreDownload,
  Bt as CoreEmbed,
  ct as CoreImage,
  Ut as CoreLanguageNavigation,
  z as CoreLink,
  Ft as CoreList,
  Yt as CoreNavigation,
  qt as CoreSeparator,
  jt as CoreTeaser,
  Wt as CoreText,
  _t as CoreTitle,
  wt as DownloadEditConfig,
  Tt as EmbedEditConfig,
  Lt as ImageEditConfig,
  Dt as LanguageNavigationEditConfig,
  Ot as ListEditConfig,
  Pt as NavigationEditConfig,
  Nt as TeaserEditConfig,
  It as TextEditConfig,
  At as TitleEditConfig
};
