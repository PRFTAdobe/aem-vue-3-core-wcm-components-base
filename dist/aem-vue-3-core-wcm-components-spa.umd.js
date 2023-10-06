(function(m,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-page-model-manager"),require("aem-vue-3-editable-components"),require("vue-router"),require("dompurify")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-page-model-manager","aem-vue-3-editable-components","vue-router","dompurify"],t):(m=typeof globalThis<"u"?globalThis:m||self,t(m.aemVueCoreWcmComponentsSpa={},m.Vue,m.AemSpaPageModelManager,m.AemVueEditableComponents,m.VueRouter,m.DOMPurify))})(this,function(m,t,k,b,O,R){"use strict";const Y={emptyLabel:"Breadcrumb",isEmpty(n){return n.items==null||n.items.length===0}},J={emptyLabel:"Embed",isEmpty(n){var s,r;let e=!1;return n.type==="URL"?e=typeof n.url<"u"&&typeof n.result<"u"&&typeof((s=n.result)==null?void 0:s.processor)<"u":n.type==="EMBEDDABLE"?e=typeof n.youTubeProps<"u"&&typeof((r=n.youTubeProps)==null?void 0:r.youtubeVideoId)<"u":n.type==="HTML"&&(e=!!n.html),!n||!e}},X={emptyLabel:"Image",isEmpty(n){return!n||!n.src||n.src.trim().length<1}},Q={emptyLabel:"Language Navigation",isEmpty(n){return n.items==null||n.items.length===0}},Z={emptyLabel:"Navigation",isEmpty(n){return n.items==null||n.items.length===0}},K={emptyLabel:"Teaser",isEmpty(n){const e=s=>(Array.isArray(s)?s.length:s.trim().length)===0;return(!n.imagePath||e(n.imagePath))&&(!n.pretitle||e(n.pretitle))&&(!n.title||e(n.title))&&(!n.description||e(n.description))&&(!n.actions||e(n.actions))}},ee={emptyLabel:"Title",isEmpty(n){return!n||!n.text||n.text.trim().length<1}},te={emptyLabel:"Text",isEmpty(n){return!n||!n.text||n.text.trim().length<1}},ne=["href","target"],se={key:1,class:"cmp-span"},$=t.defineComponent({inheritAttrs:!1,__name:"CoreLink",props:{baseCssClass:{type:String,default:"cmp-link"},class:{type:String},href:{type:String,required:!0},navigable:{type:Boolean,default:!0},target:{type:String,default:"_self",validator:n=>["_self","_blank","_parent","_top"].includes(n)}},setup(n){const e=n,s=t.useAttrs(),r=O.useRouter(),o=t.computed(()=>[e.class,e.baseCssClass]),a=l=>{const i=r.getRoutes().map(f=>f.path);!k.AuthoringUtils.isEditMode()&&!k.AuthoringUtils.isPreviewMode()&&e.target!=="_blank"&&i.includes(e.href)&&(l.preventDefault(),r.push({path:e.href}))};return(l,i)=>e.navigable?(t.openBlock(),t.createElementBlock("a",t.mergeProps({key:0,class:o.value,href:e.href,target:e.target},{...t.unref(s)},{onClick:a}),[t.renderSlot(l.$slots,"default")],16,ne)):(t.openBlock(),t.createElementBlock("span",se,[t.renderSlot(l.$slots,"default")]))}}),re=["id","aria-label"],ie=t.defineComponent({inheritAttrs:!1,__name:"CoreBreadcrumb",props:{ariaLabel:{type:String},items:{type:Array},...b.componentProperties("cmp-breadcrumb")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s)),o=a=>{const l=(p,y=!1)=>{const E={itemProp:"name"};return y&&(E["aria-current"]="page"),t.h("span",E,p)};let f=(p=>t.h($,{href:p.link.url,class:`${e.baseCssClass}__item-link`,itemProp:"item",navigable:p.navigable},()=>l(p.title)))(a);return a.active&&(f=l(a.title,!0)),t.h("li",{class:[`${e.baseCssClass}__item`,{[`${e.baseCssClass}__item--active`]:a.active}],itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem"},f)};return(a,l)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.ariaLabel,class:t.normalizeClass(r.value)},[t.createElementVNode("ol",{class:t.normalizeClass(`${e.baseCssClass}__list`),itemScope:"true",itemType:"http://schema.org/BreadcrumbList"},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.items,i=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(i)),{key:i.toString()}))),128))],2)],10,re))}}),Fe="",oe=["id"],ae=["innerHTML"],le=["href"],ce=["href"],de=["innerHTML"],pe=t.defineComponent({inheritAttrs:!1,__name:"CoreEmbed",props:{type:{type:String,default:"URL",validator:n=>["URL","HTML","EMBEDDABLE"].includes(n)},result:{type:Object},url:{type:String,default:""},html:{type:String},youTubeProps:{type:Object,default:()=>({})},...b.componentProperties("cmp-embed")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=(c,C,u=!0,d="text/javascript")=>new Promise((h,g)=>{try{const _=document.createElement("script");_.type=d,_.async=u,_.src=c,C&&Object.keys(C).forEach(B=>{_.dataset[B]=C[B]}),_.addEventListener("load",()=>{h({status:!0})}),_.addEventListener("error",()=>{g({status:!1,message:"Failed to load the script ＄{FILE_URL}"})}),document.body.appendChild(_)}catch(_){g(_)}}),o=c=>R.sanitize(c),a=t.computed(()=>{const c=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s);return c.push({"cq-dd-embed":s||!1}),c}),l=()=>{var T,v,I,W,G,V;const c=(T=e.youTubeProps)==null?void 0:T.youtubeVideoId,C=(v=e.youTubeProps)==null?void 0:v.youtubeAutoPlay,u=(I=e.youTubeProps)==null?void 0:I.youtubeLoop,d=(W=e.youTubeProps)==null?void 0:W.youtubeMute,h=(G=e.youTubeProps)==null?void 0:G.youtubePlaysInline,g=(V=e.youTubeProps)==null?void 0:V.youtubeRel,_=`https://www.youtube.com/embed/${c}`,B={mute:`${+d}`,autoplay:`${+C}`,loop:`${+u}`,playlist:`${c}`,rel:`${+g}`,playsinline:`${+h}`},S=new URLSearchParams(B).toString();return`${_}?${S}`},i=t.computed(()=>{var c,C,u,d,h;return t.h("iFrame",{type:"text/html",width:((c=e.youTubeProps)==null?void 0:c.layout)==="responsive"?"100%":(C=e.youTubeProps)==null?void 0:C.youtubeWidth,height:((u=e.youTubeProps)==null?void 0:u.layout)==="responsive"?"100%":(d=e.youTubeProps)==null?void 0:d.youtubeHeight,src:l(),frameborder:0,class:`${e.baseCssClass}__embeddable-iframe`,allowfullscreen:!0,allow:(h=e.youTubeProps)!=null&&h.youtubeAutoPlay?"autoplay; fullscreen;":"fullscreen;",title:"YouTube Video",ariaLabel:"YouTube Video"})}),f=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return t.h("img",{title:c==null?void 0:c.title,width:c==null?void 0:c.width,height:c==null?void 0:c.height,src:c==null?void 0:c.url})}return t.h("img")}),p=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return c.type}}),y=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response)return e.result.options.response.url}),E=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response)return e.result.options.response.title}),w=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return c.html}});return t.onMounted(()=>{var g,_,B,S;const c=((g=e.result)==null?void 0:g.processor)==="pinterest",C=((_=e.result)==null?void 0:_.processor)==="oembed"&&((S=(B=e.result)==null?void 0:B.options)==null?void 0:S.provider)==="Twitter";let u="//assets.pinterest.com/js/pinit.js";C&&(u="//platform.twitter.com/widgets.js");let d=document.querySelector(`script[src="${u}"]`),h={};c&&(h={pinBuild:"doBuild"}),d?d.dataset.loaded==="true"?typeof window.doBuild=="function"&&window.doBuild():d.addEventListener("load",()=>{typeof window.doBuild=="function"&&window.doBuild()}):r(u,h).then(()=>{typeof window.doBuild=="function"&&window.doBuild(),d=document.querySelector(`script[src="${u}"]`),d.dataset.loaded=(!0).toString()}).catch(T=>{console.error(T)})}),(c,C)=>{var u,d,h,g,_;return t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(a.value)},[e.type==="HTML"?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:`${o(e.html)}`},null,8,ae)):e.type==="EMBEDDABLE"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[((u=e.youTubeProps)==null?void 0:u.layout)==="responsive"?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${c.baseCssClass}__embeddable-wrapper`),style:t.normalizeStyle({"padding-bottom":((d=e.youTubeProps)==null?void 0:d.layout)==="responsive"?`${(h=n.youTubeProps)==null?void 0:h.youtubeAspectRatio}%`:0})},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(i.value)))],6)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(i.value),{key:1}))],64)):e.type==="URL"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:2},[((g=e.result)==null?void 0:g.processor)==="pinterest"?(t.openBlock(),t.createElementBlock("a",{key:0,href:e.url,"data-pin-build":"doBuild","data-pin-do":"embedPin"},t.toDisplayString(e.url),9,le)):((_=e.result)==null?void 0:_.processor)==="oembed"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[p.value==="photo"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent(f.value),{key:0})):p.value==="link"?(t.openBlock(),t.createElementBlock("a",{key:1,href:y.value},t.toDisplayString(E.value),9,ce)):p.value==="video"||p.value==="rich"?(t.openBlock(),t.createElementBlock("div",{key:2,innerHTML:w.value},null,8,de)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],10,oe)}}}),We="";var z=function(){if(typeof Map<"u")return Map;function n(e,s){var r=-1;return e.some(function(o,a){return o[0]===s?(r=a,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(s){var r=n(this.__entries__,s),o=this.__entries__[r];return o&&o[1]},e.prototype.set=function(s,r){var o=n(this.__entries__,s);~o?this.__entries__[o][1]=r:this.__entries__.push([s,r])},e.prototype.delete=function(s){var r=this.__entries__,o=n(r,s);~o&&r.splice(o,1)},e.prototype.has=function(s){return!!~n(this.__entries__,s)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(s,r){r===void 0&&(r=null);for(var o=0,a=this.__entries__;o<a.length;o++){var l=a[o];s.call(r,l[1],l[0])}},e}()}(),x=typeof window<"u"&&typeof document<"u"&&window.document===document,P=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ue=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(P):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),fe=2;function me(n,e){var s=!1,r=!1,o=0;function a(){s&&(s=!1,n()),r&&i()}function l(){ue(a)}function i(){var f=Date.now();if(s){if(f-o<fe)return;r=!0}else s=!0,r=!1,setTimeout(l,e);o=f}return i}var he=20,ye=["top","right","bottom","left","width","height","size","weight"],_e=typeof MutationObserver<"u",be=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=me(this.refresh.bind(this),he)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var s=this.observers_,r=s.indexOf(e);~r&&s.splice(r,1),!s.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(s){return s.gatherActive(),s.hasActive()});return e.forEach(function(s){return s.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!x||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_e?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!x||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var s=e.propertyName,r=s===void 0?"":s,o=ye.some(function(a){return!!~r.indexOf(a)});o&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),D=function(n,e){for(var s=0,r=Object.keys(e);s<r.length;s++){var o=r[s];Object.defineProperty(n,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return n},L=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||P},j=N(0,0,0,0);function A(n){return parseFloat(n)||0}function q(n){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];return e.reduce(function(r,o){var a=n["border-"+o+"-width"];return r+A(a)},0)}function ge(n){for(var e=["top","right","bottom","left"],s={},r=0,o=e;r<o.length;r++){var a=o[r],l=n["padding-"+a];s[a]=A(l)}return s}function Ce(n){var e=n.getBBox();return N(0,0,e.width,e.height)}function ke(n){var e=n.clientWidth,s=n.clientHeight;if(!e&&!s)return j;var r=L(n).getComputedStyle(n),o=ge(r),a=o.left+o.right,l=o.top+o.bottom,i=A(r.width),f=A(r.height);if(r.boxSizing==="border-box"&&(Math.round(i+a)!==e&&(i-=q(r,"left","right")+a),Math.round(f+l)!==s&&(f-=q(r,"top","bottom")+l)),!Be(n)){var p=Math.round(i+a)-e,y=Math.round(f+l)-s;Math.abs(p)!==1&&(i-=p),Math.abs(y)!==1&&(f-=y)}return N(o.left,o.top,i,f)}var Ee=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof L(n).SVGGraphicsElement}:function(n){return n instanceof L(n).SVGElement&&typeof n.getBBox=="function"}}();function Be(n){return n===L(n).document.documentElement}function we(n){return x?Ee(n)?Ce(n):ke(n):j}function $e(n){var e=n.x,s=n.y,r=n.width,o=n.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(a.prototype);return D(l,{x:e,y:s,width:r,height:o,top:s,right:e+r,bottom:o+s,left:e}),l}function N(n,e,s,r){return{x:n,y:e,width:s,height:r}}var Te=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=N(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=we(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),ve=function(){function n(e,s){var r=$e(s);D(this,{target:e,contentRect:r})}return n}(),Le=function(){function n(e,s,r){if(this.activeObservations_=[],this.observations_=new z,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=s,this.callbackCtx_=r}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof L(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var s=this.observations_;s.has(e)||(s.set(e,new Te(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof L(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var s=this.observations_;s.has(e)&&(s.delete(e),s.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(s){s.isActive()&&e.activeObservations_.push(s)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,s=this.activeObservations_.map(function(r){return new ve(r.target,r.broadcastRect())});this.callback_.call(e,s,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),M=typeof WeakMap<"u"?new WeakMap:new z,U=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var s=be.getInstance(),r=new Le(e,s,this);M.set(this,r)}return n}();["observe","unobserve","disconnect"].forEach(function(n){U.prototype[n]=function(){var e;return(e=M.get(this))[n].apply(e,arguments)}});var Se=function(){return typeof P.ResizeObserver<"u"?P.ResizeObserver:U}();const Pe=["id"],H=t.defineComponent({inheritAttrs:!1,__name:"CoreImage",props:{alt:{type:String,required:!0},displayPopupTitle:{type:Boolean,default:!1},imageLink:{type:Object,default:()=>({valid:!1,attributes:{}})},src:{type:String,required:!0},smartCropRendition:{type:String},title:{type:String},width:{type:String},...b.componentProperties("cmp-image")},setup(n){const e=n,s=t.useAttrs(),r=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),o=t.ref(null),a=t.ref(e.src);let l={};e.smartCropRendition&&s.srcset&&(a.value=s.srcset);const i=t.computed(()=>{let u;if(e.width){const{width:d}=e;let h="px";/^(\d+|(\.\d+))(\.\d+)?%$/.test(d)&&(h=""),u={"--asset-max-inline-size":`${d}${h}`}}return u}),f=t.computed(()=>{const u=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,r);return u.push({"cq-dd-image":r||!1}),u}),p=t.computed(()=>{const u=t.h("p",{class:`${e.baseCssClass}__title`,itemProp:"caption"},e.title),d=t.h("meta",{content:e.title,itemProp:"caption"}),h=[t.h("img",{alt:e.alt,src:a.value,class:[`${e.baseCssClass}__image`,{"cmp-asset":typeof e.width<"u"}]})];return e.title&&(h.push(u),e.displayPopupTitle&&h.push(d)),()=>h});let y;const E=u=>{let d;const{clientWidth:h}=o.value.parentNode;return u.reverse(),u.forEach(g=>{parseInt(g,10)>h&&(d=g)}),d},w=()=>{const u={};if(e.src){const d=new XMLHttpRequest,h=`${e.src.split("?")[0]}?req=set,json`;d.open("GET",h,!1),d.onload=()=>{var g;if(d.status>=200&&d.status<400){let _;const{responseText:B}=d,T=/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(B);if(T&&T.length>=2){const v=T[2];/^{[\s\S]*}$/gim.test(v)&&(_=JSON.parse(v))}_&&((g=_.set)!=null&&g.relation)&&Array.isArray(_.set.relation)&&_.set.relation.forEach(v=>{u[parseInt(v.userdata.SmartCropWidth,10)]=`:${v.userdata.SmartCropDef}`})}},d.send()}return u},c=()=>{Object.keys(l).length===0&&(l=w());const u=E(Object.keys(l));if(u){const d=e.src.replace("?",`${l[u]}?`);a.value=d.replace("{dpr}",(window.devicePixelRatio||1).toString())}else a.value=e.src.replace("{dpr}",(window.devicePixelRatio||1).toString())},C=()=>{e.smartCropRendition?e.smartCropRendition==="SmartCrop:Auto"&&s.srcset?(a.value=s.srcset,c()):a.value=e.src.replace("{dpr}",(window.devicePixelRatio||1).toString()):a.value=e.src};return t.onMounted(()=>{const u=d=>{window.requestAnimationFrame(()=>{e.smartCropRendition==="SmartCrop:Auto"&&s.srcset&&o.value&&Array.isArray(d)&&d.length&&d.forEach(()=>{c()})})};y=new Se(u),y.observe(o.value),C()}),t.onUnmounted(()=>{o.value&&y.unobserve(o.value)}),t.watch(()=>e.src,async(u,d)=>{u!==d&&C()}),(u,d)=>{var h;return t.openBlock(),t.createElementBlock("div",{id:e.id,ref_key:"image",ref:o,class:t.normalizeClass(f.value),style:t.normalizeStyle(i.value)},[a.value?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[(h=e.imageLink)!=null&&h.url?(t.openBlock(),t.createBlock($,t.mergeProps({key:0,class:`${e.baseCssClass}__link`,href:e.imageLink.url},e.imageLink.attributes),{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(p.value),{key:a.value}))]),_:1},16,["class","href"])):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(p.value),{key:a.value}))],64)):t.createCommentVNode("",!0)],14,Pe)}}}),Ge="",Ae=["id","aria-label"],Ne=t.defineComponent({inheritAttrs:!1,__name:"CoreLanguageNavigation",props:{items:{type:Array,default:()=>[]},accessibilityLabel:{type:String,default:""},...b.componentProperties("cmp-languagenavigation")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s)),o=a=>{if((a||[]).length===0||typeof a>"u")return;const l=a.map(i=>{let f=t.h("span",{class:`${e.baseCssClass}__item-title`,lang:i.language},[i.title]);return i.level>0&&(f=t.h($,{"aria-current":`${i.active?"page":!1}`,class:`${e.baseCssClass}__item-link`,href:i.link.url,title:i.title,hrefLang:i.language,lang:i.language,rel:"alternate"},()=>i.title)),t.h("li",{class:[`${e.baseCssClass}__item`,`${e.baseCssClass}__item--level-${i==null?void 0:i.level}`,`${e.baseCssClass}__item--countrycode-${i.country}`,`${e.baseCssClass}__item--langcode-${i.language}`,{[`${e.baseCssClass}__item--active`]:i==null?void 0:i.active}]},[f,o(i.children)])});return t.h("ul",{class:`${e.baseCssClass}__group`},l)};return(a,l)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.accessibilityLabel.length?e.accessibilityLabel:"Language Navigation",class:t.normalizeClass(r.value),itemScope:"",itemType:"http://schema.org/SiteNavigationElement",role:"navigation"},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(e.items))))],10,Ae))}}),Oe=["id","aria-label"],Re=t.defineComponent({inheritAttrs:!1,__name:"CoreNavigation",props:{items:{type:Array,default:()=>[]},accessibilityLabel:{type:String,default:""},...b.componentProperties("cmp-navigation")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s)),o=a=>{if((a||[]).length===0||typeof a>"u")return;const l=a.map(i=>t.h("li",{class:[`${e.baseCssClass}__item`,`${e.baseCssClass}__item--level-${i==null?void 0:i.level}`,{[`${e.baseCssClass}__item--active`]:i==null?void 0:i.active}]},[t.h($,{"aria-current":`${i.active?"page":!1}`,class:`${e.baseCssClass}__item-link`,href:i.link.url,title:i.title,navigable:i==null?void 0:i.navigable},()=>i.title),o(i.children)]));return t.h("ul",{class:`${e.baseCssClass}__group`},l)};return(a,l)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.accessibilityLabel.length?e.accessibilityLabel:"Navigation",class:t.normalizeClass(r.value),itemScope:"",itemType:"http://schema.org/SiteNavigationElement",role:"navigation"},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(e.items))))],10,Oe))}}),xe=["id"],Ie=t.defineComponent({inheritAttrs:!1,__name:"CoreSeparator",props:{...b.componentProperties("cmp-separator")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s));return(o,a)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(r.value)},[t.createElementVNode("hr",{class:t.normalizeClass(`${e.baseCssClass}__horizontal-rule`)},null,2)],10,xe))}}),ze=["id"],F=t.defineComponent({inheritAttrs:!1,__name:"CoreTitle",props:{isNested:{type:Boolean,default:!1},link:{type:Object,default:()=>({valid:!0,attributes:{}})},text:{type:String,default:""},type:{type:String,default:"h3"},...b.componentProperties("cmp-title")},setup(n){const e=n,s=t.useAttrs(),r=O.useRoute(),o=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),a=t.computed(()=>{const p=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,o);return p.push({"cq-dd-title":o}),p}),l=t.ref((s==null?void 0:s.linkDisabled)!==!0),i=t.computed(()=>e.isNested?"-":"__"),f=t.computed(()=>r.path&&typeof r.path<"u"?r.path:null);return t.watch(()=>s==null?void 0:s.linkDisabled,async(p,y)=>{p!==y&&(l.value=p!==!0)}),(p,y)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(a.value)},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.type),{class:t.normalizeClass(`${p.baseCssClass}${i.value}text`)},{default:t.withCtx(()=>{var E,w;return[l.value?(t.openBlock(),t.createBlock($,t.mergeProps({key:0,class:`${p.baseCssClass}${i.value}link`,href:((E=e.link)==null?void 0:E.url)||f.value},(w=e.link)==null?void 0:w.attributes),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(n.text),1)]),_:1},16,["class","href"])):(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.createTextVNode(t.toDisplayString(n.text),1)],64))]}),_:1},8,["class"]))],10,ze))}}),De=["id"],je=["innerHTML"],qe=t.defineComponent({inheritAttrs:!1,__name:"CoreTeaser",props:{actions:{type:Array},description:{type:String},imageAlt:{type:String,default:""},imagePath:{type:String},link:{type:Object},pretitle:{type:String},title:{type:String},titleType:{type:String,default:"h2"},...b.componentProperties("cmp-teaser")},setup(n){const e=n,s=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),r=t.computed(()=>{const i=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,s);return i.push({"cq-dd-teaser":s}),i}),o=t.computed(()=>{var i,f;return{class:`${e.baseCssClass}__link`,href:(i=e.link)==null?void 0:i.url,...(f=e.link)==null?void 0:f.attributes}}),a=t.computed(()=>({baseCssClass:`${e.baseCssClass}__title`,isInEditor:s,isNested:!0,link:e.link,linkDisabled:!e.link,text:e.title,type:e.titleType})),l=i=>R.sanitize(i);return(i,f)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(r.value)},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.link?$:"section"),t.normalizeProps(t.guardReactiveProps(e.link?o.value:!1)),{default:t.withCtx(()=>[e.pretitle||e.title||e.description?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${e.baseCssClass}__content`)},[e.pretitle?(t.openBlock(),t.createElementBlock("p",{key:0,class:t.normalizeClass(`${e.baseCssClass}__pretitle`)},t.toDisplayString(e.pretitle),3)):t.createCommentVNode("",!0),e.title?(t.openBlock(),t.createBlock(F,t.normalizeProps(t.mergeProps({key:1},a.value)),null,16)):t.createCommentVNode("",!0),e.description?(t.openBlock(),t.createElementBlock("div",{key:2,class:t.normalizeClass(`${e.baseCssClass}__description`),innerHTML:`${l(e.description)}`},null,10,je)):t.createCommentVNode("",!0),e.actions&&e.actions.length>0?(t.openBlock(),t.createElementBlock("div",{key:3,class:t.normalizeClass(`${e.baseCssClass}__action-container`)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.actions,(p,y)=>(t.openBlock(),t.createBlock($,t.mergeProps({id:p.id,key:`link-${y}`,class:`${e.baseCssClass}__action-link`,href:p.link.url,title:p.title},p.link.attributes),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(p.title),1)]),_:2},1040,["id","class","href","title"]))),128))],2)):t.createCommentVNode("",!0)],2)):t.createCommentVNode("",!0),e.imagePath?(t.openBlock(),t.createElementBlock("div",{key:1,class:t.normalizeClass(`${e.baseCssClass}__image`)},[t.createVNode(H,{alt:e.imageAlt,"is-in-editor":t.unref(s),src:e.imagePath,width:"100%"},null,8,["alt","is-in-editor","src"])],2)):t.createCommentVNode("",!0)]),_:1},16))],10,De))}}),Ve="",Me=["id","innerHTML"],Ue=["id"],He=t.defineComponent({inheritAttrs:!1,__name:"CoreText",props:{cqPath:{type:String,default:""},richText:{type:Boolean,default:!1},text:{type:String},...b.componentProperties("cmp-text")},setup(n){const e=n,s=O.useRouter(),r=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),o=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.containerProps,r)),a=t.ref(null),l=p=>R.sanitize(p),i=t.computed(()=>{const p=e.cqPath?e.cqPath.substring(e.cqPath.lastIndexOf("/")+1):"";return e.id?e.id:p}),f=()=>{if(a.value){const p=s.getRoutes().map(y=>y.path);!k.AuthoringUtils.isEditMode()&&!k.AuthoringUtils.isPreviewMode()&&a.value.querySelectorAll("a").forEach(y=>{y.classList.add("cmp-link");const E=y.getAttribute("target")||"_self",w=y.getAttribute("href")||"#";y.onclick=c=>{E!=="_blank"&&p.includes(w)&&(c.preventDefault(),s.push(w))}})}};return t.onMounted(()=>{f()}),t.onUpdated(()=>{f()}),(p,y)=>e.richText?(t.openBlock(),t.createElementBlock("div",{key:0,id:i.value,ref_key:"richTextElement",ref:a,class:t.normalizeClass(o.value),"data-rte-editelement":"",innerHTML:`${l(e.text)}`},null,10,Me)):(t.openBlock(),t.createElementBlock("div",{key:1,id:i.value,class:t.normalizeClass(o.value)},[t.createElementVNode("p",{class:t.normalizeClass(`${e.baseCssClass}__paragraph`)},t.toDisplayString(e.text),3)],10,Ue))}});m.BreadcrumbEditConfig=Y,m.CoreBreadcrumb=ie,m.CoreEmbed=pe,m.CoreImage=H,m.CoreLanguageNavigation=Ne,m.CoreLink=$,m.CoreNavigation=Re,m.CoreSeparator=Ie,m.CoreTeaser=qe,m.CoreText=He,m.CoreTitle=F,m.EmbedEditConfig=J,m.ImageEditConfig=X,m.LanguageNavigationEditConfig=Q,m.NavigationEditConfig=Z,m.TeaserEditConfig=K,m.TextEditConfig=te,m.TitleEditConfig=ee,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
