import { defineComponent as O, useAttrs as se, computed as v, openBlock as o, createElementBlock as u, mergeProps as Y, unref as G, renderSlot as he, inject as L, normalizeClass as p, createElementVNode as T, Fragment as P, renderList as J, createBlock as k, resolveDynamicComponent as D, h as w, withCtx as U, createCommentVNode as C, toDisplayString as S, createTextVNode as X, onMounted as oe, onUpdated as _e, normalizeStyle as ve, ref as Q, onUnmounted as De, watch as be, normalizeProps as me, guardReactiveProps as Oe, createVNode as Pe } from "vue";
import { AuthoringUtils as x } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as N, componentClassNames as A, ComponentMapping as ge } from "aem-vue-3-editable-components";
import { useRoute as Ce, useRouter as Ee } from "vue-router";
import le from "dompurify";
const xt = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Tt = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, Lt = {
  emptyLabel: "Download",
  isEmpty(t) {
    return (typeof t.url > "u" || t.url === null || t.url.length === 0) && (typeof t.handleOnClick > "u" || t.handleOnClick === null);
  }
}, Dt = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, Ot = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, Pt = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Nt = {
  emptyLabel: "List",
  isEmpty(t) {
    return t.items === null || t.items.length === 0;
  }
}, At = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, It = {
  emptyLabel: "Teaser",
  isEmpty(t) {
    const e = (s) => (Array.isArray(s) ? s.length : s.trim().length) === 0;
    return (!t.imagePath || e(t.imagePath)) && (!t.pretitle || e(t.pretitle)) && (!t.title || e(t.title)) && (!t.description || e(t.description)) && (!t.actions || e(t.actions));
  }
}, Rt = {
  emptyLabel: "Title",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, zt = {
  emptyLabel: "Text",
  isEmpty(t) {
    return !t || !t.text || t.text.trim().length < 1;
  }
}, Ne = ["href", "target"], Ae = {
  key: 1,
  class: "cmp-span"
}, H = /* @__PURE__ */ O({
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
    const e = t, s = se(), n = Ce(), i = Ee(), r = v(() => {
      const a = [e.class, e.baseCssClass];
      return n.path && typeof n.path < "u" && n.path === e.href && a.push("cmp-link--active"), a;
    }), l = (a) => {
      const d = i.getRoutes().map((c) => c.path);
      !x.isEditMode() && !x.isPreviewMode() && e.target !== "_blank" && d.includes(e.href) && (a.preventDefault(), i.push({
        path: e.href
      }));
    };
    return (a, d) => e.navigable ? (o(), u("a", Y({
      key: 0,
      class: r.value,
      href: e.href,
      target: e.target
    }, { ...G(s) }, { onClick: l }), [
      he(a.$slots, "default")
    ], 16, Ne)) : (o(), u("span", Ae, [
      he(a.$slots, "default")
    ]));
  }
}), Ie = ["id", "aria-label"], Ht = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), i = (r) => {
      const l = (c, f = !1) => {
        const g = {
          itemProp: "name"
        };
        return f && (g["aria-current"] = "page"), w("span", g, c);
      };
      let d = ((c) => w(
        H,
        {
          href: c.link.url,
          class: `${e.baseCssClass}__item-link`,
          itemProp: "item",
          navigable: c.navigable
        },
        () => l(c.title)
      ))(r);
      return r.active && (d = l(r.title, !0)), w(
        "li",
        {
          class: [
            `${e.baseCssClass}__item`,
            {
              [`${e.baseCssClass}__item--active`]: r.active
            }
          ],
          itemProp: "itemListElement",
          itemScope: !0,
          itemType: "http://schema.org/ListItem"
        },
        d
      );
    };
    return (r, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: p(n.value)
    }, [
      T("ol", {
        class: p(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), u(P, null, J(e.items, (a) => (o(), k(D(i(a)), {
          key: a.toString()
        }))), 128))
      ], 2)
    ], 10, Ie));
  }
}), Re = ["type"], Me = /* @__PURE__ */ O({
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
    const e = t, s = se(), n = L("isInEditor", x.isInEditor()), i = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), r = (l) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(l);
    };
    return (l, a) => e.text ? (o(), u(P, { key: 0 }, [
      e.link ? (o(), k(H, Y({
        key: 0,
        "aria-label": e.ariaLabel,
        class: i.value.join(" "),
        href: e.link
      }, G(s), { onClick: r }), {
        default: U(() => [
          e.icon ? (o(), u("span", {
            key: 0,
            class: p(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
          }, null, 2)) : C("", !0),
          T("span", {
            class: p(`${e.baseCssClass}__text`)
          }, S(e.text), 3)
        ]),
        _: 1
      }, 16, ["aria-label", "class", "href"])) : (o(), u("button", Y({
        key: 1,
        class: i.value,
        type: e.type
      }, G(s), { onClick: r }), [
        e.icon ? (o(), u("span", {
          key: 0,
          class: p(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : C("", !0),
        T("span", {
          class: p(`${e.baseCssClass}__text`)
        }, S(e.text), 3)
      ], 16, Re))
    ], 64)) : C("", !0);
  }
}), ze = ["id"], He = ["innerHTML"], Bt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreDownload",
  props: {
    actionText: {
      type: String,
      default: "Download"
    },
    // eslint-disable-next-line vue/require-default-prop
    cqType: {
      type: String
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = L("componentMapping", new ge()), i = v(() => {
      const d = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return s && d.push("cq-dd-file"), d;
    }), r = v(
      () => !(e.url && e.url.length > 0 || e.handleOnClick && typeof e.handleOnClick == "function")
    ), l = v(() => {
      var c;
      let d = Me;
      return (c = e.cqType) != null && c.endsWith("/download") && (d = n.get(
        e.cqType.replace("/download", "/button")
      )), w(d, {
        class: `${e.baseCssClass}__action`,
        link: e.url || "#",
        handleOnClick: e.handleOnClick,
        text: e.actionText
      });
    }), a = (d) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(d);
    };
    return (d, c) => r.value ? C("", !0) : (o(), u("div", {
      key: 0,
      id: e.id,
      class: p(i.value)
    }, [
      e.title ? (o(), k(D(e.titleType), {
        key: 0,
        class: p(`${e.baseCssClass}__title`)
      }, {
        default: U(() => [
          e.url || e.handleOnClick ? (o(), k(H, {
            key: 0,
            class: p(`${e.baseCssClass}__title-link`),
            href: e.url || "#",
            onClick: a
          }, {
            default: U(() => [
              X(S(e.title), 1)
            ]),
            _: 1
          }, 8, ["class", "href"])) : (o(), u(P, { key: 1 }, [
            X(S(e.title), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])) : C("", !0),
      e.description ? (o(), u("div", {
        key: 1,
        class: p(`${e.baseCssClass}__description`),
        innerHTML: e.description
      }, null, 10, He)) : C("", !0),
      e.filename || e.size || e.format ? (o(), u("dl", {
        key: 2,
        class: p(`${e.baseCssClass}__properties`)
      }, [
        e.filename ? (o(), u("div", {
          key: 0,
          class: p([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--filename`
          ])
        }, [
          T("dt", {
            class: p(`${e.baseCssClass}__property-label`)
          }, "Filename", 2),
          T("dd", {
            class: p(`${e.baseCssClass}__property-content`)
          }, S(e.filename), 3)
        ], 2)) : C("", !0),
        e.size ? (o(), u("div", {
          key: 1,
          class: p([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--size`
          ])
        }, [
          T("dt", {
            class: p(`${e.baseCssClass}__property-label`)
          }, "Size", 2),
          T("dd", {
            class: p(`${e.baseCssClass}__property-content`)
          }, S(e.size), 3)
        ], 2)) : C("", !0),
        e.format ? (o(), u("div", {
          key: 2,
          class: p([
            `${e.baseCssClass}__property`,
            `${e.baseCssClass}__property--format`
          ])
        }, [
          T("dt", {
            class: p(`${e.baseCssClass}__property-label`)
          }, "Format", 2),
          T("dd", {
            class: p(`${e.baseCssClass}__property-content`)
          }, S(e.format), 3)
        ], 2)) : C("", !0)
      ], 2)) : C("", !0),
      (o(), k(D(l.value)))
    ], 10, ze));
  }
}), Be = ["id"], qe = ["innerHTML"], Ue = ["href"], Fe = ["href"], Ye = ["innerHTML"], qt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = (m, y = !0, h = "text/javascript") => new Promise((b, $) => {
      try {
        const E = document.createElement("script");
        E.type = h, E.async = y, E.src = m, E.addEventListener("load", () => {
          b({ status: !0 });
        }), E.addEventListener("error", () => {
          $({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(E);
      } catch (E) {
        $(E);
      }
    }), i = (m) => le.sanitize(m), r = v(() => {
      const m = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return m.push({
        "cq-dd-embed": s || !1
      }), m;
    }), l = () => {
      var B, re, ue, de, pe, fe;
      const m = (B = e.youTubeProps) == null ? void 0 : B.youtubeVideoId, y = (re = e.youTubeProps) == null ? void 0 : re.youtubeAutoPlay, h = (ue = e.youTubeProps) == null ? void 0 : ue.youtubeLoop, b = (de = e.youTubeProps) == null ? void 0 : de.youtubeMute, $ = (pe = e.youTubeProps) == null ? void 0 : pe.youtubePlaysInline, E = (fe = e.youTubeProps) == null ? void 0 : fe.youtubeRel, R = `https://www.youtube.com/embed/${m}`, z = {
        mute: `${+b}`,
        autoplay: `${+y}`,
        loop: `${+h}`,
        playlist: `${m}`,
        rel: `${+E}`,
        playsinline: `${+$}`
      }, W = new URLSearchParams(z).toString();
      return `${R}?${W}`;
    }, a = v(
      () => {
        var m, y, h, b, $;
        return w("iFrame", {
          type: "text/html",
          width: ((m = e.youTubeProps) == null ? void 0 : m.layout) === "responsive" ? "100%" : (y = e.youTubeProps) == null ? void 0 : y.youtubeWidth,
          height: ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? "100%" : (b = e.youTubeProps) == null ? void 0 : b.youtubeHeight,
          src: l(),
          frameborder: 0,
          class: `${e.baseCssClass}__embeddable-iframe`,
          allowfullscreen: !0,
          allow: ($ = e.youTubeProps) != null && $.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
          title: "YouTube Video",
          ariaLabel: "YouTube Video"
        });
      }
    ), d = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: m } = e.result.options;
        return w("img", {
          title: m == null ? void 0 : m.title,
          width: m == null ? void 0 : m.width,
          height: m == null ? void 0 : m.height,
          src: m == null ? void 0 : m.url
        });
      }
      return w("img");
    }), c = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: m } = e.result.options;
        return m.type;
      }
    }), f = v(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.url;
    }), g = v(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), I = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: m } = e.result.options;
        return m.html;
      }
    }), F = () => {
      var b, $, E, R;
      const m = ((b = e.result) == null ? void 0 : b.processor) === "oembed" && ((E = ($ = e.result) == null ? void 0 : $.options) == null ? void 0 : E.provider) === "Twitter";
      let y = "//assets.pinterest.com/js/pinit.js";
      m && (y = "//platform.twitter.com/widgets.js");
      let h = document.querySelector(`script[src="${y}"]`);
      h ? h.dataset.loaded === "true" ? typeof ((R = window.PinUtils) == null ? void 0 : R.build) == "function" && window.PinUtils.build() : h.addEventListener("load", () => {
        var z;
        typeof ((z = window.PinUtils) == null ? void 0 : z.build) == "function" && window.PinUtils.build();
      }) : n(y).then(() => {
        var z;
        typeof ((z = window.PinUtils) == null ? void 0 : z.build) == "function" && window.PinUtils.build(), h = document.querySelector(`script[src="${y}"]`), h.dataset.loaded = "true";
      }).catch((z) => {
        console.error(z);
      });
    };
    return oe(() => {
      F();
    }), _e(() => {
      F();
    }), (m, y) => {
      var h, b, $, E, R;
      return o(), u("div", {
        id: e.id,
        class: p(r.value)
      }, [
        e.type === "HTML" ? (o(), u("div", {
          key: 0,
          innerHTML: `${i(e.html)}`
        }, null, 8, qe)) : e.type === "EMBEDDABLE" ? (o(), u(P, { key: 1 }, [
          ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? (o(), u("div", {
            key: 0,
            class: p(`${m.baseCssClass}__embeddable-wrapper`),
            style: ve({
              "padding-bottom": ((b = e.youTubeProps) == null ? void 0 : b.layout) === "responsive" ? `${($ = t.youTubeProps) == null ? void 0 : $.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), k(D(a.value)))
          ], 6)) : (o(), k(D(a.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), u(P, { key: 2 }, [
          ((E = e.result) == null ? void 0 : E.processor) === "pinterest" ? (o(), u("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, S(e.url), 9, Ue)) : ((R = e.result) == null ? void 0 : R.processor) === "oembed" ? (o(), u(P, { key: 1 }, [
            c.value === "photo" ? (o(), k(D(d.value), { key: 0 })) : c.value === "link" ? (o(), u("a", {
              key: 1,
              href: f.value
            }, S(g.value), 9, Fe)) : c.value === "video" || c.value === "rich" ? (o(), u("div", {
              key: 2,
              innerHTML: I.value
            }, null, 8, Ye)) : C("", !0)
          ], 64)) : C("", !0)
        ], 64)) : C("", !0)
      ], 10, Be);
    };
  }
});
var ke = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, s) {
    var n = -1;
    return e.some(function(i, r) {
      return i[0] === s ? (n = r, !0) : !1;
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
        var n = t(this.__entries__, s), i = this.__entries__[n];
        return i && i[1];
      }, e.prototype.set = function(s, n) {
        var i = t(this.__entries__, s);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([s, n]);
      }, e.prototype.delete = function(s) {
        var n = this.__entries__, i = t(n, s);
        ~i && n.splice(i, 1);
      }, e.prototype.has = function(s) {
        return !!~t(this.__entries__, s);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(s, n) {
        n === void 0 && (n = null);
        for (var i = 0, r = this.__entries__; i < r.length; i++) {
          var l = r[i];
          s.call(n, l[1], l[0]);
        }
      }, e;
    }()
  );
}(), ie = typeof window < "u" && typeof document < "u" && window.document === document, K = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), je = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(K) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), We = 2;
function Ve(t, e) {
  var s = !1, n = !1, i = 0;
  function r() {
    s && (s = !1, t()), n && a();
  }
  function l() {
    je(r);
  }
  function a() {
    var d = Date.now();
    if (s) {
      if (d - i < We)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    i = d;
  }
  return a;
}
var Ze = 20, Ge = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Je = typeof MutationObserver < "u", Xe = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ve(this.refresh.bind(this), Ze);
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
      !ie || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Je ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !ie || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, i = Ge.some(function(r) {
        return !!~n.indexOf(r);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), $e = function(t, e) {
  for (var s = 0, n = Object.keys(e); s < n.length; s++) {
    var i = n[s];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, j = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || K;
}, Se = ne(0, 0, 0, 0);
function ee(t) {
  return parseFloat(t) || 0;
}
function ye(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, i) {
    var r = t["border-" + i + "-width"];
    return n + ee(r);
  }, 0);
}
function Qe(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n], l = t["padding-" + r];
    s[r] = ee(l);
  }
  return s;
}
function Ke(t) {
  var e = t.getBBox();
  return ne(0, 0, e.width, e.height);
}
function et(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return Se;
  var n = j(t).getComputedStyle(t), i = Qe(n), r = i.left + i.right, l = i.top + i.bottom, a = ee(n.width), d = ee(n.height);
  if (n.boxSizing === "border-box" && (Math.round(a + r) !== e && (a -= ye(n, "left", "right") + r), Math.round(d + l) !== s && (d -= ye(n, "top", "bottom") + l)), !st(t)) {
    var c = Math.round(a + r) - e, f = Math.round(d + l) - s;
    Math.abs(c) !== 1 && (a -= c), Math.abs(f) !== 1 && (d -= f);
  }
  return ne(i.left, i.top, a, d);
}
var tt = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof j(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof j(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function st(t) {
  return t === j(t).document.documentElement;
}
function nt(t) {
  return ie ? tt(t) ? Ke(t) : et(t) : Se;
}
function rt(t) {
  var e = t.x, s = t.y, n = t.width, i = t.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(r.prototype);
  return $e(l, {
    x: e,
    y: s,
    width: n,
    height: i,
    top: s,
    right: e + n,
    bottom: i + s,
    left: e
  }), l;
}
function ne(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var it = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ne(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = nt(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), at = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, s) {
      var n = rt(s);
      $e(this, { target: e, contentRect: n });
    }
    return t;
  }()
), ot = (
  /** @class */
  function() {
    function t(e, s, n) {
      if (this.activeObservations_ = [], this.observations_ = new ke(), typeof e != "function")
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
        s.has(e) || (s.set(e, new it(e)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new at(n.target, n.broadcastRect());
        });
        this.callback_.call(e, s, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), we = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ke(), xe = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = Xe.getInstance(), n = new ot(e, s, this);
      we.set(this, n);
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
    return (e = we.get(this))[t].apply(e, arguments);
  };
});
var lt = function() {
  return typeof K.ResizeObserver < "u" ? K.ResizeObserver : xe;
}();
const ct = ["id"], ut = /* @__PURE__ */ O({
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
    const e = t, s = se(), n = L("isInEditor", x.isInEditor()), i = Q(null), r = Q(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (r.value = s.srcset);
    const a = v(() => {
      let y;
      if (e.width) {
        const { width: h } = e;
        let b = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(h) && (b = ""), y = {
          "--asset-max-inline-size": `${h}${b}`
        };
      }
      return y;
    }), d = v(() => {
      const y = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      );
      return y.push({
        "cq-dd-image": n || !1
      }), y;
    }), c = v(() => {
      const y = w(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), h = w("meta", {
        content: e.title,
        itemProp: "caption"
      }), b = [
        w("img", {
          alt: e.alt,
          src: r.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (b.push(y), e.displayPopupTitle && b.push(h)), () => b;
    });
    let f;
    const g = (y) => {
      let h;
      const { clientWidth: b } = i.value.parentNode;
      return y.reverse(), y.forEach(($) => {
        parseInt($, 10) > b && (h = $);
      }), h;
    }, I = () => {
      const y = {};
      if (e.src) {
        const h = new XMLHttpRequest(), b = `${e.src.split("?")[0]}?req=set,json`;
        h.open("GET", b, !1), h.onload = () => {
          var $;
          if (h.status >= 200 && h.status < 400) {
            let E;
            const { responseText: R } = h, W = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(R);
            if (W && W.length >= 2) {
              const B = W[2];
              /^{[\s\S]*}$/gim.test(B) && (E = JSON.parse(B));
            }
            E && (($ = E.set) != null && $.relation) && Array.isArray(E.set.relation) && E.set.relation.forEach(
              (B) => {
                y[parseInt(B.userdata.SmartCropWidth, 10)] = `:${B.userdata.SmartCropDef}`;
              }
            );
          }
        }, h.send();
      }
      return y;
    }, F = () => {
      Object.keys(l).length === 0 && (l = I());
      const y = g(Object.keys(l));
      if (y) {
        const h = e.src.replace(
          "?",
          `${l[y]}?`
        );
        r.value = h.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        r.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, m = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (r.value = s.srcset, F()) : r.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : r.value = e.src;
    };
    return oe(() => {
      const y = (h) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && i.value && Array.isArray(h) && h.length && h.forEach(() => {
            F();
          });
        });
      };
      f = new lt(y), f.observe(i.value), m();
    }), De(() => {
      i.value && f.unobserve(i.value);
    }), be(
      () => e.src,
      async (y, h) => {
        y !== h && m();
      }
    ), (y, h) => {
      var b;
      return o(), u("div", {
        id: e.id,
        ref_key: "image",
        ref: i,
        class: p(d.value),
        style: ve(a.value)
      }, [
        r.value ? (o(), u(P, { key: 0 }, [
          (b = e.imageLink) != null && b.url ? (o(), k(H, Y({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: U(() => [
              (o(), k(D(c.value), { key: r.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), k(D(c.value), { key: r.value }))
        ], 64)) : C("", !0)
      ], 14, ct);
    };
  }
}), dt = ["id", "aria-label"], Ut = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), i = (r) => {
      if ((r || []).length === 0 || typeof r > "u")
        return;
      const l = r.map((a) => {
        let d = w(
          "span",
          {
            class: `${e.baseCssClass}__item-title`,
            lang: a.language
          },
          [a.title]
        );
        return a.level > 0 && (d = w(
          H,
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
        )), w(
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
            i(a.children)
          ]
        );
      });
      return w(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (r, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: p(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), k(D(i(e.items))))
    ], 10, dt));
  }
});
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */
var ae = {}, V = {}, Z = "en", ce = {
  MMMM: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dddd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  A: ["AM", "PM"]
}, Te = {
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
  res: ce
}, Le = {
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
    for (var s = -1, n = 0, i = 0, r = t.length, l; i < r; i++)
      l = t[i], !e.indexOf(l) && l.length > n && (s = i, n = l.length);
    return { value: s, length: n };
  },
  pre: function(t) {
    return t;
  },
  res: ce
}, q = function(t, e, s, n) {
  var i = {}, r;
  for (r in t)
    i[r] = t[r];
  for (r in e || {})
    !!s ^ !!i[r] || (i[r] = e[r]);
  return n && (i.res = n), i;
}, M = {
  _formatter: Te,
  _parser: Le
}, te, _;
M.compile = function(t) {
  for (var e = /\[([^[\]]|\[[^[\]]*])*]|([A-Za-z])\2+|\.{3}|./g, s, n = [t]; s = e.exec(t); )
    n[n.length] = s[0];
  return n;
};
M.format = function(t, e, s) {
  var n = this || _, i = typeof e == "string" ? n.compile(e) : e, r = t.getTimezoneOffset(), l = n.addMinutes(t, s ? r : 0), a = n._formatter, d = "";
  l.getTimezoneOffset = function() {
    return s ? 0 : r;
  };
  for (var c = 1, f = i.length, g; c < f; c++)
    g = i[c], d += a[g] ? a.post(a[g](l, i[0])) : g.replace(/\[(.*)]/, "$1");
  return d;
};
M.preparse = function(t, e) {
  var s = this || _, n = typeof e == "string" ? s.compile(e) : e, i = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, r = /\[(.*)]/, l = s._parser, a = 0;
  t = l.pre(t);
  for (var d = 1, c = n.length, f, g; d < c; d++)
    if (f = n[d], l[f]) {
      if (g = l[f](t.slice(a), n[0]), !g.length)
        break;
      a += g.length, i[g.token || f.charAt(0)] = g.value, i._match++;
    } else if (f === t.charAt(a) || f === " ")
      a++;
    else if (r.test(f) && !t.slice(a).indexOf(r.exec(f)[1]))
      a += f.length - 2;
    else if (f === "...") {
      a = t.length;
      break;
    } else
      break;
  return i.H = i.H || l.h12(i.h, i.A), i._index = a, i._length = t.length, i;
};
M.parse = function(t, e, s) {
  var n = this || _, i = typeof e == "string" ? n.compile(e) : e, r = n.preparse(t, i);
  return n.isValid(r) ? (r.M -= r.Y < 100 ? 22801 : 1, s || ~n._parser.find(i, "ZZ").value ? new Date(Date.UTC(r.Y, r.M, r.D, r.H, r.m + r.Z, r.s, r.S)) : new Date(r.Y, r.M, r.D, r.H, r.m, r.s, r.S)) : /* @__PURE__ */ new Date(NaN);
};
M.isValid = function(t, e) {
  var s = this || _, n = typeof t == "string" ? s.preparse(t, e) : t, i = [31, 28 + s.isLeapYear(n.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n.M - 1];
  return !(n._index < 1 || n._length < 1 || n._index - n._length || n._match < 1 || n.Y < 1 || n.Y > 9999 || n.M < 1 || n.M > 12 || n.D < 1 || n.D > i || n.H < 0 || n.H > 23 || n.m < 0 || n.m > 59 || n.s < 0 || n.s > 59 || n.S < 0 || n.S > 999 || n.Z < -840 || n.Z > 720);
};
M.transform = function(t, e, s, n) {
  const i = this || _;
  return i.format(i.parse(t, e), s, n);
};
M.addYears = function(t, e, s) {
  return (this || _).addMonths(t, e * 12, s);
};
M.addMonths = function(t, e, s) {
  var n = new Date(t.getTime());
  if (s) {
    if (n.setUTCMonth(n.getUTCMonth() + e), n.getUTCDate() < t.getUTCDate())
      return (this || _).addDays(n, -n.getUTCDate(), s);
  } else if (n.setMonth(n.getMonth() + e), n.getDate() < t.getDate())
    return (this || _).addDays(n, -n.getDate(), s);
  return n;
};
M.addDays = function(t, e, s) {
  return (this || _).addHours(t, e * 24, s);
};
M.addHours = function(t, e, s) {
  return (this || _).addMinutes(t, e * 60, s);
};
M.addMinutes = function(t, e, s) {
  return (this || _).addSeconds(t, e * 60, s);
};
M.addSeconds = function(t, e, s) {
  return (this || _).addMilliseconds(t, e * 1e3, s);
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
  ae[t] || (ae[t] = e);
};
M.plugin = function(t, e) {
  V[t] || (V[t] = e);
};
te = q(M);
_ = q(M);
_.locale = function(t) {
  var e = typeof t == "function" ? t : _.locale[t];
  if (!e)
    return Z;
  Z = e(M);
  var s = ae[Z] || {}, n = q(ce, s.res, !0), i = q(Te, s.formatter, !0, n), r = q(Le, s.parser, !0, n);
  _._formatter = te._formatter = i, _._parser = te._parser = r;
  for (var l in V)
    _.extend(V[l]);
  return Z;
};
_.extend = function(t) {
  var e = q(_._parser.res, t.res), s = t.extender || {};
  _._formatter = q(_._formatter, t.formatter, !1, e), _._parser = q(_._parser, t.parser, !1, e);
  for (var n in s)
    _[n] || (_[n] = s[n]);
};
_.plugin = function(t) {
  var e = typeof t == "function" ? t : _.plugin[t];
  e && _.extend(V[e(M, te)] || {});
};
var pt = _;
const ft = ["id"], ht = /* @__PURE__ */ O({
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
    const e = t, s = se(), n = Ce(), i = L("isInEditor", x.isInEditor()), r = v(() => {
      const c = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        i,
        e.aemNoDecoration
      );
      return c.push({
        "cq-dd-title": i
      }), c;
    }), l = Q((s == null ? void 0 : s.linkDisabled) !== !0), a = v(() => e.isNested ? "-" : "__"), d = v(() => n.path && typeof n.path < "u" ? n.path : null);
    return be(
      () => s == null ? void 0 : s.linkDisabled,
      async (c, f) => {
        c !== f && (l.value = c !== !0);
      }
    ), (c, f) => (o(), u("div", {
      id: e.id,
      class: p(r.value)
    }, [
      (o(), k(D(e.type), {
        class: p(`${c.baseCssClass}${a.value}text`)
      }, {
        default: U(() => {
          var g, I;
          return [
            l.value ? (o(), k(H, Y({
              key: 0,
              class: `${c.baseCssClass}${a.value}link`,
              href: ((g = e.link) == null ? void 0 : g.url) || d.value
            }, (I = e.link) == null ? void 0 : I.attributes), {
              default: U(() => [
                X(S(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), u(P, { key: 1 }, [
              X(S(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, ft));
  }
}), mt = ["id"], yt = ["innerHTML"], _t = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreTeaser",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    actions: {
      type: Array
    },
    cqType: {
      type: String,
      default: ""
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = L("componentMapping", new ge()), i = v(() => {
      const c = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return c.push({
        "cq-dd-teaser": s
      }), c.push({
        [`${e.baseCssClass}--with-image`]: typeof e.imagePath < "u"
      }), c;
    }), r = (c) => {
      let f = Me;
      return e.cqType.endsWith("/teaser") && (f = n.get(
        e.cqType.replace("/teaser", "/button")
      )), w(f, {
        class: `${e.baseCssClass}__action-link`,
        "aria-label": c.title,
        link: c.link.url,
        text: c.title,
        id: c.id,
        ...c.link.attributes
      });
    }, l = v(() => {
      var c, f;
      return {
        class: `${e.baseCssClass}__link`,
        href: (c = e.link) == null ? void 0 : c.url,
        ...(f = e.link) == null ? void 0 : f.attributes
      };
    }), a = v(() => ({
      baseCssClass: `${e.baseCssClass}__title`,
      isInEditor: s,
      isNested: !0,
      link: e.link,
      linkDisabled: !e.link,
      text: e.title,
      type: e.titleType
    })), d = (c) => le.sanitize(c);
    return (c, f) => (o(), u("div", {
      id: e.id,
      class: p(i.value)
    }, [
      (o(), k(D(e.link ? H : "section"), me(Oe(e.link ? l.value : !1)), {
        default: U(() => [
          e.pretitle || e.title || e.description ? (o(), u("div", {
            key: 0,
            class: p(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), u("p", {
              key: 0,
              class: p(`${e.baseCssClass}__pretitle`)
            }, S(e.pretitle), 3)) : C("", !0),
            e.title ? (o(), k(ht, me(Y({ key: 1 }, a.value)), null, 16)) : C("", !0),
            e.description ? (o(), u("div", {
              key: 2,
              class: p(`${e.baseCssClass}__description`),
              innerHTML: `${d(e.description)}`
            }, null, 10, yt)) : C("", !0),
            e.actions && e.actions.length > 0 ? (o(), u("div", {
              key: 3,
              class: p(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), u(P, null, J(e.actions, (g, I) => (o(), k(D(r(g)), {
                key: `link-${I}`
              }))), 128))
            ], 2)) : C("", !0)
          ], 2)) : C("", !0),
          e.imagePath ? (o(), u("div", {
            key: 1,
            class: p(`${e.baseCssClass}__image`)
          }, [
            Pe(ut, {
              alt: e.imageAlt,
              "is-in-editor": G(s),
              src: e.imagePath,
              width: "100%"
            }, null, 8, ["alt", "is-in-editor", "src"])
          ], 2)) : C("", !0)
        ]),
        _: 1
      }, 16))
    ], 10, mt));
  }
}), vt = ["id"], Ft = /* @__PURE__ */ O({
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
    displayItemAsTeaser: {
      type: Boolean
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
    ...N("cmp-list")
  },
  setup(t) {
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(() => {
      const r = A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return e.displayItemAsTeaser === !0 && r.push(`${e.baseCssClass}--as-teasers`), r;
    }), i = (r, l) => {
      if (r.lastModifiedFormatted)
        return r.lastModifiedFormatted;
      if (r.lastModified && l) {
        const a = new Date(r.lastModified);
        return pt.format(a, l.toUpperCase());
      }
      return "";
    };
    return (r, l) => e.items && e.items.length && e.displayItemAsTeaser !== !0 ? (o(), u("ul", {
      key: 0,
      id: e.id,
      class: p(n.value)
    }, [
      (o(!0), u(P, null, J(e.items, (a, d) => {
        var c;
        return o(), u("li", {
          key: d,
          class: p(`${e.baseCssClass}__item`)
        }, [
          T("article", null, [
            e.linkItems && ((c = a.link) != null && c.url) ? (o(), k(H, {
              key: 0,
              class: p(`${e.baseCssClass}__item-link`),
              href: a.link.url
            }, {
              default: U(() => [
                T("span", {
                  class: p(`${e.baseCssClass}__item-title`)
                }, S(a.title), 3),
                e.showModificationDate ? (o(), u("span", {
                  key: 0,
                  class: p(`${e.baseCssClass}__item-date`)
                }, S(i(a, e.dateFormatString)), 3)) : C("", !0)
              ]),
              _: 2
            }, 1032, ["class", "href"])) : (o(), u(P, { key: 1 }, [
              T("span", {
                class: p(`${e.baseCssClass}__item-title`)
              }, S(a.title), 3),
              e.showModificationDate ? (o(), u("span", {
                key: 0,
                class: p(`${e.baseCssClass}__item-date`)
              }, S(i(a, e.dateFormatString)), 3)) : C("", !0)
            ], 64)),
            e.showDescription ? (o(), u("span", {
              key: 2,
              class: p(`${e.baseCssClass}__item-description`)
            }, S(a.description), 3)) : C("", !0)
          ])
        ], 2);
      }), 128))
    ], 10, vt)) : e.items && e.items.length ? (o(), u("div", {
      key: 1,
      class: p(n.value)
    }, [
      (o(!0), u(P, null, J(e.items, (a, d) => (o(), k(_t, {
        key: d,
        description: a.description,
        link: a.link,
        title: a.title
      }, null, 8, ["description", "link", "title"]))), 128))
    ], 2)) : C("", !0);
  }
}), bt = ["id", "aria-label"], Yt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), i = (r) => {
      if ((r || []).length === 0 || typeof r > "u")
        return;
      const l = r.map(
        (a) => w(
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
            w(
              H,
              {
                "aria-current": `${a.active ? "page" : !1}`,
                class: `${e.baseCssClass}__item-link`,
                href: a.link.url,
                title: a.title,
                navigable: a == null ? void 0 : a.navigable
              },
              () => a.title
            ),
            i(a.children)
          ]
        )
      );
      return w("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (r, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: p(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), k(D(i(e.items))))
    ], 10, bt));
  }
}), gt = ["id"], jt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...N("cmp-separator")
  },
  setup(t) {
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (i, r) => (o(), u("div", {
      id: e.id,
      class: p(n.value)
    }, [
      T("hr", {
        class: p(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, gt));
  }
}), Ct = ["id", "innerHTML"], Et = ["id"], Wt = /* @__PURE__ */ O({
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
    const e = t, s = Ee(), n = L("isInEditor", x.isInEditor()), i = v(
      () => A(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), r = Q(null), l = (c) => le.sanitize(c), a = v(() => {
      const c = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : c;
    }), d = () => {
      if (r.value) {
        const c = s.getRoutes().map((f) => f.path);
        !x.isEditMode() && !x.isPreviewMode() && r.value.querySelectorAll("a").forEach((f) => {
          f.classList.add("cmp-link");
          const g = f.getAttribute("target") || "_self", I = f.getAttribute("href") || "#";
          f.onclick = (F) => {
            g !== "_blank" && c.includes(I) && (F.preventDefault(), s.push(I));
          };
        });
      }
    };
    return oe(() => {
      d();
    }), _e(() => {
      d();
    }), (c, f) => e.richText ? (o(), u("div", {
      key: 0,
      id: a.value,
      ref_key: "richTextElement",
      ref: r,
      class: p(i.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, Ct)) : (o(), u("div", {
      key: 1,
      id: a.value,
      class: p(i.value)
    }, [
      T("p", {
        class: p(`${e.baseCssClass}__paragraph`)
      }, S(e.text), 3)
    ], 10, Et));
  }
});
export {
  xt as BreadcrumbEditConfig,
  Tt as ButtonEditConfig,
  Ht as CoreBreadcrumb,
  Me as CoreButton,
  Bt as CoreDownload,
  qt as CoreEmbed,
  ut as CoreImage,
  Ut as CoreLanguageNavigation,
  H as CoreLink,
  Ft as CoreList,
  Yt as CoreNavigation,
  jt as CoreSeparator,
  _t as CoreTeaser,
  Wt as CoreText,
  ht as CoreTitle,
  Lt as DownloadEditConfig,
  Dt as EmbedEditConfig,
  Ot as ImageEditConfig,
  Pt as LanguageNavigationEditConfig,
  Nt as ListEditConfig,
  At as NavigationEditConfig,
  It as TeaserEditConfig,
  zt as TextEditConfig,
  Rt as TitleEditConfig
};
