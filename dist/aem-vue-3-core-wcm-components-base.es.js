import { defineComponent as O, useAttrs as te, computed as v, openBlock as o, createElementBlock as u, mergeProps as Y, unref as G, renderSlot as he, inject as L, normalizeClass as p, createElementVNode as T, Fragment as R, renderList as ae, createBlock as $, resolveDynamicComponent as D, h as w, withCtx as U, createCommentVNode as C, toDisplayString as S, createTextVNode as J, onMounted as oe, onUpdated as ye, normalizeStyle as ve, ref as X, onUnmounted as De, watch as be, normalizeProps as me, guardReactiveProps as Oe, createVNode as Pe } from "vue";
import { AuthoringUtils as x } from "@adobe/aem-spa-page-model-manager";
import { componentProperties as P, componentClassNames as N, ComponentMapping as ge } from "aem-vue-3-editable-components";
import { useRoute as Ce, useRouter as Ee } from "vue-router";
import le from "dompurify";
const wt = {
  emptyLabel: "Breadcrumb",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, xt = {
  emptyLabel: "Button",
  isEmpty(t) {
    return t.text == null || t.text.length === 0;
  }
}, Tt = {
  emptyLabel: "Download",
  isEmpty(t) {
    return (typeof t.url > "u" || t.url === null || t.url.length === 0) && (typeof t.handleOnClick > "u" || t.handleOnClick === null);
  }
}, Lt = {
  emptyLabel: "Embed",
  isEmpty(t) {
    var s, n;
    let e = !1;
    return t.type === "URL" ? e = typeof t.url < "u" && typeof t.result < "u" && typeof ((s = t.result) == null ? void 0 : s.processor) < "u" : t.type === "EMBEDDABLE" ? e = typeof t.youTubeProps < "u" && typeof ((n = t.youTubeProps) == null ? void 0 : n.youtubeVideoId) < "u" : t.type === "HTML" && (e = !!t.html), !t || !e;
  }
}, Dt = {
  emptyLabel: "Image",
  isEmpty(t) {
    return !t || !t.src || t.src.trim().length < 1;
  }
}, Ot = {
  emptyLabel: "Language Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, Pt = {
  emptyLabel: "List",
  isEmpty(t) {
    return t.items === null || t.items.length === 0;
  }
}, Nt = {
  emptyLabel: "Navigation",
  isEmpty(t) {
    return t.items == null || t.items.length === 0;
  }
}, At = {
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
}, It = {
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
    const e = t, s = te(), n = Ce(), r = Ee(), i = v(() => {
      const a = [e.class, e.baseCssClass];
      return n.path && typeof n.path < "u" && n.path === e.href && a.push("cmp-link--active"), a;
    }), l = (a) => {
      const d = r.getRoutes().map((c) => c.path);
      !x.isEditMode() && !x.isPreviewMode() && e.target !== "_blank" && d.includes(e.href) && (a.preventDefault(), r.push({
        path: e.href
      }));
    };
    return (a, d) => e.navigable ? (o(), u("a", Y({
      key: 0,
      class: i.value,
      href: e.href,
      target: e.target
    }, { ...G(s) }, { onClick: l }), [
      he(a.$slots, "default")
    ], 16, Ne)) : (o(), u("span", Ae, [
      he(a.$slots, "default")
    ]));
  }
}), Re = ["id", "aria-label"], zt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    ), r = (i) => {
      const l = (c, f = !1) => {
        const b = {
          itemProp: "name"
        };
        return f && (b["aria-current"] = "page"), w("span", b, c);
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
      ))(i);
      return i.active && (d = l(i.title, !0)), w(
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
    return (i, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.ariaLabel,
      class: p(n.value)
    }, [
      T("ol", {
        class: p(`${e.baseCssClass}__list`),
        itemScope: "true",
        itemType: "http://schema.org/BreadcrumbList"
      }, [
        (o(!0), u(R, null, ae(e.items, (a) => (o(), $(D(r(a)), {
          key: a.toString()
        }))), 128))
      ], 2)
    ], 10, Re));
  }
}), Ie = ["type"], Me = /* @__PURE__ */ O({
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
    const e = t, s = te(), n = L("isInEditor", x.isInEditor()), r = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), i = (l) => {
      e.handleOnClick && typeof e.handleOnClick == "function" && e.handleOnClick(l);
    };
    return (l, a) => e.text ? (o(), u(R, { key: 0 }, [
      e.link ? (o(), $(H, Y({
        key: 0,
        "aria-label": e.ariaLabel,
        class: r.value.join(" "),
        href: e.link
      }, G(s), { onClick: i }), {
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
        class: r.value,
        type: e.type
      }, G(s), { onClick: i }), [
        e.icon ? (o(), u("span", {
          key: 0,
          class: p(`${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`)
        }, null, 2)) : C("", !0),
        T("span", {
          class: p(`${e.baseCssClass}__text`)
        }, S(e.text), 3)
      ], 16, Ie))
    ], 64)) : C("", !0);
  }
}), ze = ["id"], He = ["innerHTML"], Ht = /* @__PURE__ */ O({
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
    ...P("cmp-download")
  },
  setup(t) {
    const e = t, s = L("isInEditor", x.isInEditor()), n = L("componentMapping", new ge()), r = v(() => {
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
    return (d, c) => i.value ? C("", !0) : (o(), u("div", {
      key: 0,
      id: e.id,
      class: p(r.value)
    }, [
      e.title ? (o(), $(D(e.titleType), {
        key: 0,
        class: p(`${e.baseCssClass}__title`)
      }, {
        default: U(() => [
          e.url || e.handleOnClick ? (o(), $(H, {
            key: 0,
            class: p(`${e.baseCssClass}__title-link`),
            href: e.url || "#",
            onClick: a
          }, {
            default: U(() => [
              J(S(e.title), 1)
            ]),
            _: 1
          }, 8, ["class", "href"])) : (o(), u(R, { key: 1 }, [
            J(S(e.title), 1)
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
      (o(), $(D(l.value)))
    ], 10, ze));
  }
}), Be = ["id"], qe = ["innerHTML"], Ue = ["href"], Fe = ["href"], Ye = ["innerHTML"], Bt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = (m, _ = !0, h = "text/javascript") => new Promise((g, k) => {
      try {
        const E = document.createElement("script");
        E.type = h, E.async = _, E.src = m, E.addEventListener("load", () => {
          g({ status: !0 });
        }), E.addEventListener("error", () => {
          k({
            status: !1,
            message: "Failed to load the script ＄{FILE_URL}"
          });
        }), document.body.appendChild(E);
      } catch (E) {
        k(E);
      }
    }), r = (m) => le.sanitize(m), i = v(() => {
      const m = N(
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
      var B, ne, ue, de, pe, fe;
      const m = (B = e.youTubeProps) == null ? void 0 : B.youtubeVideoId, _ = (ne = e.youTubeProps) == null ? void 0 : ne.youtubeAutoPlay, h = (ue = e.youTubeProps) == null ? void 0 : ue.youtubeLoop, g = (de = e.youTubeProps) == null ? void 0 : de.youtubeMute, k = (pe = e.youTubeProps) == null ? void 0 : pe.youtubePlaysInline, E = (fe = e.youTubeProps) == null ? void 0 : fe.youtubeRel, I = `https://www.youtube.com/embed/${m}`, z = {
        mute: `${+g}`,
        autoplay: `${+_}`,
        loop: `${+h}`,
        playlist: `${m}`,
        rel: `${+E}`,
        playsinline: `${+k}`
      }, W = new URLSearchParams(z).toString();
      return `${I}?${W}`;
    }, a = v(
      () => {
        var m, _, h, g, k;
        return w("iFrame", {
          type: "text/html",
          width: ((m = e.youTubeProps) == null ? void 0 : m.layout) === "responsive" ? "100%" : (_ = e.youTubeProps) == null ? void 0 : _.youtubeWidth,
          height: ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? "100%" : (g = e.youTubeProps) == null ? void 0 : g.youtubeHeight,
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
    }), b = v(() => {
      if (e.result && e.result.options && e.result.options.response)
        return e.result.options.response.title;
    }), A = v(() => {
      if (e.result && e.result.options && e.result.options.response) {
        const { response: m } = e.result.options;
        return m.html;
      }
    }), F = () => {
      var g, k, E, I;
      const m = ((g = e.result) == null ? void 0 : g.processor) === "oembed" && ((E = (k = e.result) == null ? void 0 : k.options) == null ? void 0 : E.provider) === "Twitter";
      let _ = "//assets.pinterest.com/js/pinit.js";
      m && (_ = "//platform.twitter.com/widgets.js");
      let h = document.querySelector(`script[src="${_}"]`);
      h ? h.dataset.loaded === "true" ? typeof ((I = window.PinUtils) == null ? void 0 : I.build) == "function" && window.PinUtils.build() : h.addEventListener("load", () => {
        var z;
        typeof ((z = window.PinUtils) == null ? void 0 : z.build) == "function" && window.PinUtils.build();
      }) : n(_).then(() => {
        var z;
        typeof ((z = window.PinUtils) == null ? void 0 : z.build) == "function" && window.PinUtils.build(), h = document.querySelector(`script[src="${_}"]`), h.dataset.loaded = "true";
      }).catch((z) => {
        console.error(z);
      });
    };
    return oe(() => {
      F();
    }), ye(() => {
      F();
    }), (m, _) => {
      var h, g, k, E, I;
      return o(), u("div", {
        id: e.id,
        class: p(i.value)
      }, [
        e.type === "HTML" ? (o(), u("div", {
          key: 0,
          innerHTML: `${r(e.html)}`
        }, null, 8, qe)) : e.type === "EMBEDDABLE" ? (o(), u(R, { key: 1 }, [
          ((h = e.youTubeProps) == null ? void 0 : h.layout) === "responsive" ? (o(), u("div", {
            key: 0,
            class: p(`${m.baseCssClass}__embeddable-wrapper`),
            style: ve({
              "padding-bottom": ((g = e.youTubeProps) == null ? void 0 : g.layout) === "responsive" ? `${(k = t.youTubeProps) == null ? void 0 : k.youtubeAspectRatio}%` : 0
            })
          }, [
            (o(), $(D(a.value)))
          ], 6)) : (o(), $(D(a.value), { key: 1 }))
        ], 64)) : e.type === "URL" ? (o(), u(R, { key: 2 }, [
          ((E = e.result) == null ? void 0 : E.processor) === "pinterest" ? (o(), u("a", {
            key: 0,
            href: e.url,
            "data-pin-build": "doBuild",
            "data-pin-do": "embedPin"
          }, S(e.url), 9, Ue)) : ((I = e.result) == null ? void 0 : I.processor) === "oembed" ? (o(), u(R, { key: 1 }, [
            c.value === "photo" ? (o(), $(D(d.value), { key: 0 })) : c.value === "link" ? (o(), u("a", {
              key: 1,
              href: f.value
            }, S(b.value), 9, Fe)) : c.value === "video" || c.value === "rich" ? (o(), u("div", {
              key: 2,
              innerHTML: A.value
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
}(), re = typeof window < "u" && typeof document < "u" && window.document === document, Q = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), je = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Q) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), We = 2;
function Ve(t, e) {
  var s = !1, n = !1, r = 0;
  function i() {
    s && (s = !1, t()), n && a();
  }
  function l() {
    je(i);
  }
  function a() {
    var d = Date.now();
    if (s) {
      if (d - r < We)
        return;
      n = !0;
    } else
      s = !0, n = !1, setTimeout(l, e);
    r = d;
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
      !re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Je ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var s = e.propertyName, n = s === void 0 ? "" : s, r = Ge.some(function(i) {
        return !!~n.indexOf(i);
      });
      r && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), $e = function(t, e) {
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
  return e || Q;
}, Se = se(0, 0, 0, 0);
function K(t) {
  return parseFloat(t) || 0;
}
function _e(t) {
  for (var e = [], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  return e.reduce(function(n, r) {
    var i = t["border-" + r + "-width"];
    return n + K(i);
  }, 0);
}
function Qe(t) {
  for (var e = ["top", "right", "bottom", "left"], s = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n], l = t["padding-" + i];
    s[i] = K(l);
  }
  return s;
}
function Ke(t) {
  var e = t.getBBox();
  return se(0, 0, e.width, e.height);
}
function et(t) {
  var e = t.clientWidth, s = t.clientHeight;
  if (!e && !s)
    return Se;
  var n = j(t).getComputedStyle(t), r = Qe(n), i = r.left + r.right, l = r.top + r.bottom, a = K(n.width), d = K(n.height);
  if (n.boxSizing === "border-box" && (Math.round(a + i) !== e && (a -= _e(n, "left", "right") + i), Math.round(d + l) !== s && (d -= _e(n, "top", "bottom") + l)), !st(t)) {
    var c = Math.round(a + i) - e, f = Math.round(d + l) - s;
    Math.abs(c) !== 1 && (a -= c), Math.abs(f) !== 1 && (d -= f);
  }
  return se(r.left, r.top, a, d);
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
  return re ? tt(t) ? Ke(t) : et(t) : Se;
}
function rt(t) {
  var e = t.x, s = t.y, n = t.width, r = t.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(i.prototype);
  return $e(l, {
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
function se(t, e, s, n) {
  return { x: t, y: e, width: s, height: n };
}
var it = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = se(0, 0, 0, 0), this.target = e;
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
  return typeof Q.ResizeObserver < "u" ? Q.ResizeObserver : xe;
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
    ...P("cmp-image")
  },
  setup(t) {
    const e = t, s = te(), n = L("isInEditor", x.isInEditor()), r = X(null), i = X(e.src);
    let l = {};
    e.smartCropRendition && s.srcset && (i.value = s.srcset);
    const a = v(() => {
      let _;
      if (e.width) {
        const { width: h } = e;
        let g = "px";
        /^(\d+|(\.\d+))(\.\d+)?%$/.test(h) && (g = ""), _ = {
          "--asset-max-inline-size": `${h}${g}`
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
      const _ = w(
        "figcaption",
        {
          class: `${e.baseCssClass}__title`,
          itemProp: "caption"
        },
        e.title
      ), h = w("meta", {
        content: e.title,
        itemProp: "caption"
      }), g = [
        w("img", {
          alt: e.alt,
          src: i.value,
          class: [
            `${e.baseCssClass}__image`,
            { "cmp-asset": typeof e.width < "u" }
          ]
        })
      ];
      return e.title && (g.push(_), e.displayPopupTitle && g.push(h)), () => g;
    });
    let f;
    const b = (_) => {
      let h;
      const { clientWidth: g } = r.value.parentNode;
      return _.reverse(), _.forEach((k) => {
        parseInt(k, 10) > g && (h = k);
      }), h;
    }, A = () => {
      const _ = {};
      if (e.src) {
        const h = new XMLHttpRequest(), g = `${e.src.split("?")[0]}?req=set,json`;
        h.open("GET", g, !1), h.onload = () => {
          var k;
          if (h.status >= 200 && h.status < 400) {
            let E;
            const { responseText: I } = h, W = /^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(I);
            if (W && W.length >= 2) {
              const B = W[2];
              /^{[\s\S]*}$/gim.test(B) && (E = JSON.parse(B));
            }
            E && ((k = E.set) != null && k.relation) && Array.isArray(E.set.relation) && E.set.relation.forEach(
              (B) => {
                _[parseInt(B.userdata.SmartCropWidth, 10)] = `:${B.userdata.SmartCropDef}`;
              }
            );
          }
        }, h.send();
      }
      return _;
    }, F = () => {
      Object.keys(l).length === 0 && (l = A());
      const _ = b(Object.keys(l));
      if (_) {
        const h = e.src.replace(
          "?",
          `${l[_]}?`
        );
        i.value = h.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
      } else
        i.value = e.src.replace(
          "{dpr}",
          (window.devicePixelRatio || 1).toString()
        );
    }, m = () => {
      e.smartCropRendition ? e.smartCropRendition === "SmartCrop:Auto" && s.srcset ? (i.value = s.srcset, F()) : i.value = e.src.replace(
        "{dpr}",
        (window.devicePixelRatio || 1).toString()
      ) : i.value = e.src;
    };
    return oe(() => {
      const _ = (h) => {
        window.requestAnimationFrame(() => {
          e.smartCropRendition === "SmartCrop:Auto" && s.srcset && r.value && Array.isArray(h) && h.length && h.forEach(() => {
            F();
          });
        });
      };
      f = new lt(_), f.observe(r.value), m();
    }), De(() => {
      r.value && f.unobserve(r.value);
    }), be(
      () => e.src,
      async (_, h) => {
        _ !== h && m();
      }
    ), (_, h) => {
      var g;
      return o(), u("div", {
        id: e.id,
        ref_key: "image",
        ref: r,
        class: p(d.value),
        style: ve(a.value)
      }, [
        i.value ? (o(), u(R, { key: 0 }, [
          (g = e.imageLink) != null && g.url ? (o(), $(H, Y({
            key: 0,
            class: `${e.baseCssClass}__link`,
            href: e.imageLink.url
          }, e.imageLink.attributes), {
            default: U(() => [
              (o(), $(D(c.value), { key: i.value }))
            ]),
            _: 1
          }, 16, ["class", "href"])) : (o(), $(D(c.value), { key: i.value }))
        ], 64)) : C("", !0)
      ], 14, ct);
    };
  }
}), dt = ["id", "aria-label"], qt = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
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
            r(a.children)
          ]
        );
      });
      return w(
        "ul",
        { class: `${e.baseCssClass}__group` },
        l
      );
    };
    return (i, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Language Navigation",
      class: p(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), $(D(r(e.items))))
    ], 10, dt));
  }
});
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */
var ie = {}, V = {}, Z = "en", ce = {
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
    for (var s = -1, n = 0, r = 0, i = t.length, l; r < i; r++)
      l = t[r], !e.indexOf(l) && l.length > n && (s = r, n = l.length);
    return { value: s, length: n };
  },
  pre: function(t) {
    return t;
  },
  res: ce
}, q = function(t, e, s, n) {
  var r = {}, i;
  for (i in t)
    r[i] = t[i];
  for (i in e || {})
    !!s ^ !!r[i] || (r[i] = e[i]);
  return n && (r.res = n), r;
}, M = {
  _formatter: Te,
  _parser: Le
}, ee, y;
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
  for (var c = 1, f = r.length, b; c < f; c++)
    b = r[c], d += a[b] ? a.post(a[b](l, r[0])) : b.replace(/\[(.*)]/, "$1");
  return d;
};
M.preparse = function(t, e) {
  var s = this || y, n = typeof e == "string" ? s.compile(e) : e, r = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, i = /\[(.*)]/, l = s._parser, a = 0;
  t = l.pre(t);
  for (var d = 1, c = n.length, f, b; d < c; d++)
    if (f = n[d], l[f]) {
      if (b = l[f](t.slice(a), n[0]), !b.length)
        break;
      a += b.length, r[b.token || f.charAt(0)] = b.value, r._match++;
    } else if (f === t.charAt(a) || f === " ")
      a++;
    else if (i.test(f) && !t.slice(a).indexOf(i.exec(f)[1]))
      a += f.length - 2;
    else if (f === "...") {
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
  ie[t] || (ie[t] = e);
};
M.plugin = function(t, e) {
  V[t] || (V[t] = e);
};
ee = q(M);
y = q(M);
y.locale = function(t) {
  var e = typeof t == "function" ? t : y.locale[t];
  if (!e)
    return Z;
  Z = e(M);
  var s = ie[Z] || {}, n = q(ce, s.res, !0), r = q(Te, s.formatter, !0, n), i = q(Le, s.parser, !0, n);
  y._formatter = ee._formatter = r, y._parser = ee._parser = i;
  for (var l in V)
    y.extend(V[l]);
  return Z;
};
y.extend = function(t) {
  var e = q(y._parser.res, t.res), s = t.extender || {};
  y._formatter = q(y._formatter, t.formatter, !1, e), y._parser = q(y._parser, t.parser, !1, e);
  for (var n in s)
    y[n] || (y[n] = s[n]);
};
y.plugin = function(t) {
  var e = typeof t == "function" ? t : y.plugin[t];
  e && y.extend(V[e(M, ee)] || {});
};
var pt = y;
const ft = ["id"], Ut = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
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
        return pt.format(a, l.toUpperCase());
      }
      return "";
    };
    return (i, l) => e.items && e.items.length ? (o(), u("ul", {
      key: 0,
      id: e.id,
      class: p(n.value)
    }, [
      (o(!0), u(R, null, ae(e.items, (a, d) => {
        var c;
        return o(), u("li", {
          key: d,
          class: p(`${e.baseCssClass}__item`)
        }, [
          T("article", null, [
            e.linkItems && ((c = a.link) != null && c.url) ? (o(), $(H, {
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
                }, S(r(a, e.dateFormatString)), 3)) : C("", !0)
              ]),
              _: 2
            }, 1032, ["class", "href"])) : (o(), u(R, { key: 1 }, [
              T("span", {
                class: p(`${e.baseCssClass}__item-title`)
              }, S(a.title), 3),
              e.showModificationDate ? (o(), u("span", {
                key: 0,
                class: p(`${e.baseCssClass}__item-date`)
              }, S(r(a, e.dateFormatString)), 3)) : C("", !0)
            ], 64)),
            e.showDescription ? (o(), u("span", {
              key: 2,
              class: p(`${e.baseCssClass}__item-description`)
            }, S(a.description), 3)) : C("", !0)
          ])
        ], 2);
      }), 128))
    ], 10, ft)) : C("", !0);
  }
}), ht = ["id", "aria-label"], Ft = /* @__PURE__ */ O({
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
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
            r(a.children)
          ]
        )
      );
      return w("ul", { class: `${e.baseCssClass}__group` }, l);
    };
    return (i, l) => (o(), u("nav", {
      id: e.id,
      "aria-label": e.accessibilityLabel.length ? e.accessibilityLabel : "Navigation",
      class: p(n.value),
      itemScope: "",
      itemType: "http://schema.org/SiteNavigationElement",
      role: "navigation"
    }, [
      (o(), $(D(r(e.items))))
    ], 10, ht));
  }
}), mt = ["id"], Yt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreSeparator",
  props: {
    ...P("cmp-separator")
  },
  setup(t) {
    const e = t, s = L("isInEditor", x.isInEditor()), n = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      )
    );
    return (r, i) => (o(), u("div", {
      id: e.id,
      class: p(n.value)
    }, [
      T("hr", {
        class: p(`${e.baseCssClass}__horizontal-rule`)
      }, null, 2)
    ], 10, mt));
  }
}), _t = ["id"], yt = /* @__PURE__ */ O({
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
    const e = t, s = te(), n = Ce(), r = L("isInEditor", x.isInEditor()), i = v(() => {
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
    }), l = X((s == null ? void 0 : s.linkDisabled) !== !0), a = v(() => e.isNested ? "-" : "__"), d = v(() => n.path && typeof n.path < "u" ? n.path : null);
    return be(
      () => s == null ? void 0 : s.linkDisabled,
      async (c, f) => {
        c !== f && (l.value = c !== !0);
      }
    ), (c, f) => (o(), u("div", {
      id: e.id,
      class: p(i.value)
    }, [
      (o(), $(D(e.type), {
        class: p(`${c.baseCssClass}${a.value}text`)
      }, {
        default: U(() => {
          var b, A;
          return [
            l.value ? (o(), $(H, Y({
              key: 0,
              class: `${c.baseCssClass}${a.value}link`,
              href: ((b = e.link) == null ? void 0 : b.url) || d.value
            }, (A = e.link) == null ? void 0 : A.attributes), {
              default: U(() => [
                J(S(t.text), 1)
              ]),
              _: 1
            }, 16, ["class", "href"])) : (o(), u(R, { key: 1 }, [
              J(S(t.text), 1)
            ], 64))
          ];
        }),
        _: 1
      }, 8, ["class"]))
    ], 10, _t));
  }
}), vt = ["id"], bt = ["innerHTML"], jt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CoreTeaser",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    actions: {
      type: Array
    },
    // eslint-disable-next-line vue/require-default-prop
    cqType: {
      type: String
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
    const e = t, s = L("isInEditor", x.isInEditor()), n = L("componentMapping", new ge()), r = v(() => {
      const c = N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        s,
        e.aemNoDecoration
      );
      return c.push({
        "cq-dd-teaser": s
      }), c;
    }), i = (c) => {
      var b;
      let f = Me;
      return (b = e.cqType) != null && b.endsWith("/teaser") && (f = n.get(
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
      class: p(r.value)
    }, [
      (o(), $(D(e.link ? H : "section"), me(Oe(e.link ? l.value : !1)), {
        default: U(() => [
          e.pretitle || e.title || e.description ? (o(), u("div", {
            key: 0,
            class: p(`${e.baseCssClass}__content`)
          }, [
            e.pretitle ? (o(), u("p", {
              key: 0,
              class: p(`${e.baseCssClass}__pretitle`)
            }, S(e.pretitle), 3)) : C("", !0),
            e.title ? (o(), $(yt, me(Y({ key: 1 }, a.value)), null, 16)) : C("", !0),
            e.description ? (o(), u("div", {
              key: 2,
              class: p(`${e.baseCssClass}__description`),
              innerHTML: `${d(e.description)}`
            }, null, 10, bt)) : C("", !0),
            e.actions && e.actions.length > 0 ? (o(), u("div", {
              key: 3,
              class: p(`${e.baseCssClass}__action-container`)
            }, [
              (o(!0), u(R, null, ae(e.actions, (b, A) => (o(), $(D(i(b)), {
                key: `link-${A}`
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
    ], 10, vt));
  }
}), gt = ["id", "innerHTML"], Ct = ["id"], Wt = /* @__PURE__ */ O({
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
    const e = t, s = Ee(), n = L("isInEditor", x.isInEditor()), r = v(
      () => N(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), i = X(null), l = (c) => le.sanitize(c), a = v(() => {
      const c = e.cqPath ? e.cqPath.substring(e.cqPath.lastIndexOf("/") + 1) : "";
      return e.id ? e.id : c;
    }), d = () => {
      if (i.value) {
        const c = s.getRoutes().map((f) => f.path);
        !x.isEditMode() && !x.isPreviewMode() && i.value.querySelectorAll("a").forEach((f) => {
          f.classList.add("cmp-link");
          const b = f.getAttribute("target") || "_self", A = f.getAttribute("href") || "#";
          f.onclick = (F) => {
            b !== "_blank" && c.includes(A) && (F.preventDefault(), s.push(A));
          };
        });
      }
    };
    return oe(() => {
      d();
    }), ye(() => {
      d();
    }), (c, f) => e.richText ? (o(), u("div", {
      key: 0,
      id: a.value,
      ref_key: "richTextElement",
      ref: i,
      class: p(r.value),
      "data-rte-editelement": "",
      innerHTML: `${l(e.text)}`
    }, null, 10, gt)) : (o(), u("div", {
      key: 1,
      id: a.value,
      class: p(r.value)
    }, [
      T("p", {
        class: p(`${e.baseCssClass}__paragraph`)
      }, S(e.text), 3)
    ], 10, Ct));
  }
});
export {
  wt as BreadcrumbEditConfig,
  xt as ButtonEditConfig,
  zt as CoreBreadcrumb,
  Me as CoreButton,
  Ht as CoreDownload,
  Bt as CoreEmbed,
  ut as CoreImage,
  qt as CoreLanguageNavigation,
  H as CoreLink,
  Ut as CoreList,
  Ft as CoreNavigation,
  Yt as CoreSeparator,
  jt as CoreTeaser,
  Wt as CoreText,
  yt as CoreTitle,
  Tt as DownloadEditConfig,
  Lt as EmbedEditConfig,
  Dt as ImageEditConfig,
  Ot as LanguageNavigationEditConfig,
  Pt as ListEditConfig,
  Nt as NavigationEditConfig,
  At as TeaserEditConfig,
  It as TextEditConfig,
  Rt as TitleEditConfig
};
