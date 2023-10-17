(function(f,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("@adobe/aem-spa-page-model-manager"),require("aem-vue-3-editable-components"),require("vue-router"),require("dompurify")):typeof define=="function"&&define.amd?define(["exports","vue","@adobe/aem-spa-page-model-manager","aem-vue-3-editable-components","vue-router","dompurify"],t):(f=typeof globalThis<"u"?globalThis:f||self,t(f.aemVueCoreWcmComponentsBase={},f.Vue,f.AemSpaPageModelManager,f.AemVueEditableComponents,f.VueRouter,f.DOMPurify))})(this,function(f,t,k,b,S,R){"use strict";const Y={emptyLabel:"Breadcrumb",isEmpty(s){return s.items==null||s.items.length===0}},J={emptyLabel:"Embed",isEmpty(s){var n,i;let e=!1;return s.type==="URL"?e=typeof s.url<"u"&&typeof s.result<"u"&&typeof((n=s.result)==null?void 0:n.processor)<"u":s.type==="EMBEDDABLE"?e=typeof s.youTubeProps<"u"&&typeof((i=s.youTubeProps)==null?void 0:i.youtubeVideoId)<"u":s.type==="HTML"&&(e=!!s.html),!s||!e}},X={emptyLabel:"Image",isEmpty(s){return!s||!s.src||s.src.trim().length<1}},Q={emptyLabel:"Language Navigation",isEmpty(s){return s.items==null||s.items.length===0}},Z={emptyLabel:"Navigation",isEmpty(s){return s.items==null||s.items.length===0}},K={emptyLabel:"Teaser",isEmpty(s){const e=n=>(Array.isArray(n)?n.length:n.trim().length)===0;return(!s.imagePath||e(s.imagePath))&&(!s.pretitle||e(s.pretitle))&&(!s.title||e(s.title))&&(!s.description||e(s.description))&&(!s.actions||e(s.actions))}},ee={emptyLabel:"Title",isEmpty(s){return!s||!s.text||s.text.trim().length<1}},te={emptyLabel:"Text",isEmpty(s){return!s||!s.text||s.text.trim().length<1}},se=["href","target"],ne={key:1,class:"cmp-span"},$=t.defineComponent({inheritAttrs:!1,__name:"CoreLink",props:{baseCssClass:{type:String,default:"cmp-link"},class:{type:String},href:{type:String,required:!0},navigable:{type:Boolean,default:!0},target:{type:String,default:"_self",validator:s=>["_self","_blank","_parent","_top"].includes(s)}},setup(s){const e=s,n=t.useAttrs(),i=S.useRoute(),o=S.useRouter(),a=t.computed(()=>{const r=[e.class,e.baseCssClass];return i.path&&typeof i.path<"u"&&i.path===e.href&&r.push("cmp-link--active"),r}),d=r=>{const m=o.getRoutes().map(l=>l.path);!k.AuthoringUtils.isEditMode()&&!k.AuthoringUtils.isPreviewMode()&&e.target!=="_blank"&&m.includes(e.href)&&(r.preventDefault(),o.push({path:e.href}))};return(r,m)=>e.navigable?(t.openBlock(),t.createElementBlock("a",t.mergeProps({key:0,class:a.value,href:e.href,target:e.target},{...t.unref(n)},{onClick:d}),[t.renderSlot(r.$slots,"default")],16,se)):(t.openBlock(),t.createElementBlock("span",ne,[t.renderSlot(r.$slots,"default")]))}}),ie=["id","aria-label"],re=t.defineComponent({inheritAttrs:!1,__name:"CoreBreadcrumb",props:{ariaLabel:{type:String},items:{type:Array},...b.componentProperties("cmp-breadcrumb")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration)),o=a=>{const d=(l,y=!1)=>{const E={itemProp:"name"};return y&&(E["aria-current"]="page"),t.h("span",E,l)};let m=(l=>t.h($,{href:l.link.url,class:`${e.baseCssClass}__item-link`,itemProp:"item",navigable:l.navigable},()=>d(l.title)))(a);return a.active&&(m=d(a.title,!0)),t.h("li",{class:[`${e.baseCssClass}__item`,{[`${e.baseCssClass}__item--active`]:a.active}],itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem"},m)};return(a,d)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.ariaLabel,class:t.normalizeClass(i.value)},[t.createElementVNode("ol",{class:t.normalizeClass(`${e.baseCssClass}__list`),itemScope:"true",itemType:"http://schema.org/BreadcrumbList"},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.items,r=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(r)),{key:r.toString()}))),128))],2)],10,ie))}}),Fe="",oe=["id"],ae=["innerHTML"],le=["href"],ce=["href"],de=["innerHTML"],pe=t.defineComponent({inheritAttrs:!1,__name:"CoreEmbed",props:{type:{type:String,default:"URL",validator:s=>["URL","HTML","EMBEDDABLE"].includes(s)},result:{type:Object},url:{type:String,default:""},html:{type:String},youTubeProps:{type:Object,default:()=>({})},...b.componentProperties("cmp-embed")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=(c,C,u=!0,p="text/javascript")=>new Promise((h,g)=>{try{const _=document.createElement("script");_.type=p,_.async=u,_.src=c,C&&Object.keys(C).forEach(B=>{_.dataset[B]=C[B]}),_.addEventListener("load",()=>{h({status:!0})}),_.addEventListener("error",()=>{g({status:!1,message:"Failed to load the script ＄{FILE_URL}"})}),document.body.appendChild(_)}catch(_){g(_)}}),o=c=>R.sanitize(c),a=t.computed(()=>{const c=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration);return c.push({"cq-dd-embed":n||!1}),c}),d=()=>{var N,T,I,W,G,V;const c=(N=e.youTubeProps)==null?void 0:N.youtubeVideoId,C=(T=e.youTubeProps)==null?void 0:T.youtubeAutoPlay,u=(I=e.youTubeProps)==null?void 0:I.youtubeLoop,p=(W=e.youTubeProps)==null?void 0:W.youtubeMute,h=(G=e.youTubeProps)==null?void 0:G.youtubePlaysInline,g=(V=e.youTubeProps)==null?void 0:V.youtubeRel,_=`https://www.youtube.com/embed/${c}`,B={mute:`${+p}`,autoplay:`${+C}`,loop:`${+u}`,playlist:`${c}`,rel:`${+g}`,playsinline:`${+h}`},L=new URLSearchParams(B).toString();return`${_}?${L}`},r=t.computed(()=>{var c,C,u,p,h;return t.h("iFrame",{type:"text/html",width:((c=e.youTubeProps)==null?void 0:c.layout)==="responsive"?"100%":(C=e.youTubeProps)==null?void 0:C.youtubeWidth,height:((u=e.youTubeProps)==null?void 0:u.layout)==="responsive"?"100%":(p=e.youTubeProps)==null?void 0:p.youtubeHeight,src:d(),frameborder:0,class:`${e.baseCssClass}__embeddable-iframe`,allowfullscreen:!0,allow:(h=e.youTubeProps)!=null&&h.youtubeAutoPlay?"autoplay; fullscreen;":"fullscreen;",title:"YouTube Video",ariaLabel:"YouTube Video"})}),m=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return t.h("img",{title:c==null?void 0:c.title,width:c==null?void 0:c.width,height:c==null?void 0:c.height,src:c==null?void 0:c.url})}return t.h("img")}),l=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return c.type}}),y=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response)return e.result.options.response.url}),E=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response)return e.result.options.response.title}),w=t.computed(()=>{if(e.result&&e.result.options&&e.result.options.response){const{response:c}=e.result.options;return c.html}});return t.onMounted(()=>{var g,_,B,L;const c=((g=e.result)==null?void 0:g.processor)==="pinterest",C=((_=e.result)==null?void 0:_.processor)==="oembed"&&((L=(B=e.result)==null?void 0:B.options)==null?void 0:L.provider)==="Twitter";let u="//assets.pinterest.com/js/pinit.js";C&&(u="//platform.twitter.com/widgets.js");let p=document.querySelector(`script[src="${u}"]`),h={};c&&(h={pinBuild:"doBuild"}),p?p.dataset.loaded==="true"?typeof window.doBuild=="function"&&window.doBuild():p.addEventListener("load",()=>{typeof window.doBuild=="function"&&window.doBuild()}):i(u,h).then(()=>{typeof window.doBuild=="function"&&window.doBuild(),p=document.querySelector(`script[src="${u}"]`),p.dataset.loaded=(!0).toString()}).catch(N=>{console.error(N)})}),(c,C)=>{var u,p,h,g,_;return t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(a.value)},[e.type==="HTML"?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:`${o(e.html)}`},null,8,ae)):e.type==="EMBEDDABLE"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[((u=e.youTubeProps)==null?void 0:u.layout)==="responsive"?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${c.baseCssClass}__embeddable-wrapper`),style:t.normalizeStyle({"padding-bottom":((p=e.youTubeProps)==null?void 0:p.layout)==="responsive"?`${(h=s.youTubeProps)==null?void 0:h.youtubeAspectRatio}%`:0})},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(r.value)))],6)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(r.value),{key:1}))],64)):e.type==="URL"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:2},[((g=e.result)==null?void 0:g.processor)==="pinterest"?(t.openBlock(),t.createElementBlock("a",{key:0,href:e.url,"data-pin-build":"doBuild","data-pin-do":"embedPin"},t.toDisplayString(e.url),9,le)):((_=e.result)==null?void 0:_.processor)==="oembed"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[l.value==="photo"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m.value),{key:0})):l.value==="link"?(t.openBlock(),t.createElementBlock("a",{key:1,href:y.value},t.toDisplayString(E.value),9,ce)):l.value==="video"||l.value==="rich"?(t.openBlock(),t.createElementBlock("div",{key:2,innerHTML:w.value},null,8,de)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],10,oe)}}}),We="";var z=function(){if(typeof Map<"u")return Map;function s(e,n){var i=-1;return e.some(function(o,a){return o[0]===n?(i=a,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=s(this.__entries__,n),o=this.__entries__[i];return o&&o[1]},e.prototype.set=function(n,i){var o=s(this.__entries__,n);~o?this.__entries__[o][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,o=s(i,n);~o&&i.splice(o,1)},e.prototype.has=function(n){return!!~s(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var o=0,a=this.__entries__;o<a.length;o++){var d=a[o];n.call(i,d[1],d[0])}},e}()}(),x=typeof window<"u"&&typeof document<"u"&&window.document===document,P=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ue=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(P):function(s){return setTimeout(function(){return s(Date.now())},1e3/60)}}(),me=2;function fe(s,e){var n=!1,i=!1,o=0;function a(){n&&(n=!1,s()),i&&r()}function d(){ue(a)}function r(){var m=Date.now();if(n){if(m-o<me)return;i=!0}else n=!0,i=!1,setTimeout(d,e);o=m}return r}var he=20,ye=["top","right","bottom","left","width","height","size","weight"],_e=typeof MutationObserver<"u",be=function(){function s(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=fe(this.refresh.bind(this),he)}return s.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},s.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},s.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},s.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},s.prototype.connect_=function(){!x||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_e?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},s.prototype.disconnect_=function(){!x||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},s.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,o=ye.some(function(a){return!!~i.indexOf(a)});o&&this.refresh()},s.getInstance=function(){return this.instance_||(this.instance_=new s),this.instance_},s.instance_=null,s}(),D=function(s,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];Object.defineProperty(s,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return s},v=function(s){var e=s&&s.ownerDocument&&s.ownerDocument.defaultView;return e||P},j=O(0,0,0,0);function A(s){return parseFloat(s)||0}function q(s){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,o){var a=s["border-"+o+"-width"];return i+A(a)},0)}function ge(s){for(var e=["top","right","bottom","left"],n={},i=0,o=e;i<o.length;i++){var a=o[i],d=s["padding-"+a];n[a]=A(d)}return n}function Ce(s){var e=s.getBBox();return O(0,0,e.width,e.height)}function ke(s){var e=s.clientWidth,n=s.clientHeight;if(!e&&!n)return j;var i=v(s).getComputedStyle(s),o=ge(i),a=o.left+o.right,d=o.top+o.bottom,r=A(i.width),m=A(i.height);if(i.boxSizing==="border-box"&&(Math.round(r+a)!==e&&(r-=q(i,"left","right")+a),Math.round(m+d)!==n&&(m-=q(i,"top","bottom")+d)),!Be(s)){var l=Math.round(r+a)-e,y=Math.round(m+d)-n;Math.abs(l)!==1&&(r-=l),Math.abs(y)!==1&&(m-=y)}return O(o.left,o.top,r,m)}var Ee=function(){return typeof SVGGraphicsElement<"u"?function(s){return s instanceof v(s).SVGGraphicsElement}:function(s){return s instanceof v(s).SVGElement&&typeof s.getBBox=="function"}}();function Be(s){return s===v(s).document.documentElement}function we(s){return x?Ee(s)?Ce(s):ke(s):j}function $e(s){var e=s.x,n=s.y,i=s.width,o=s.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,d=Object.create(a.prototype);return D(d,{x:e,y:n,width:i,height:o,top:n,right:e+i,bottom:o+n,left:e}),d}function O(s,e,n,i){return{x:s,y:e,width:n,height:i}}var Ne=function(){function s(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=e}return s.prototype.isActive=function(){var e=we(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},s.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},s}(),Te=function(){function s(e,n){var i=$e(n);D(this,{target:e,contentRect:i})}return s}(),ve=function(){function s(e,n,i){if(this.activeObservations_=[],this.observations_=new z,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return s.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof v(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new Ne(e)),this.controller_.addObserver(this),this.controller_.refresh())}},s.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof v(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},s.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},s.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},s.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new Te(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},s.prototype.clearActive=function(){this.activeObservations_.splice(0)},s.prototype.hasActive=function(){return this.activeObservations_.length>0},s}(),M=typeof WeakMap<"u"?new WeakMap:new z,U=function(){function s(e){if(!(this instanceof s))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=be.getInstance(),i=new ve(e,n,this);M.set(this,i)}return s}();["observe","unobserve","disconnect"].forEach(function(s){U.prototype[s]=function(){var e;return(e=M.get(this))[s].apply(e,arguments)}});var Le=function(){return typeof P.ResizeObserver<"u"?P.ResizeObserver:U}();const Se=["id"],H=t.defineComponent({inheritAttrs:!1,__name:"CoreImage",props:{alt:{type:String,required:!0},displayPopupTitle:{type:Boolean,default:!1},imageLink:{type:Object,default:()=>({valid:!1,attributes:{}})},src:{type:String,required:!0},smartCropRendition:{type:String},title:{type:String},width:{type:String},...b.componentProperties("cmp-image")},setup(s){const e=s,n=t.useAttrs(),i=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),o=t.ref(null),a=t.ref(e.src);let d={};e.smartCropRendition&&n.srcset&&(a.value=n.srcset);const r=t.computed(()=>{let u;if(e.width){const{width:p}=e;let h="px";/^(\d+|(\.\d+))(\.\d+)?%$/.test(p)&&(h=""),u={"--asset-max-inline-size":`${p}${h}`}}return u}),m=t.computed(()=>{const u=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,i,e.aemNoDecoration);return u.push({"cq-dd-image":i||!1}),u}),l=t.computed(()=>{const u=t.h("p",{class:`${e.baseCssClass}__title`,itemProp:"caption"},e.title),p=t.h("meta",{content:e.title,itemProp:"caption"}),h=[t.h("img",{alt:e.alt,src:a.value,class:[`${e.baseCssClass}__image`,{"cmp-asset":typeof e.width<"u"}]})];return e.title&&(h.push(u),e.displayPopupTitle&&h.push(p)),()=>h});let y;const E=u=>{let p;const{clientWidth:h}=o.value.parentNode;return u.reverse(),u.forEach(g=>{parseInt(g,10)>h&&(p=g)}),p},w=()=>{const u={};if(e.src){const p=new XMLHttpRequest,h=`${e.src.split("?")[0]}?req=set,json`;p.open("GET",h,!1),p.onload=()=>{var g;if(p.status>=200&&p.status<400){let _;const{responseText:B}=p,N=/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gim.exec(B);if(N&&N.length>=2){const T=N[2];/^{[\s\S]*}$/gim.test(T)&&(_=JSON.parse(T))}_&&((g=_.set)!=null&&g.relation)&&Array.isArray(_.set.relation)&&_.set.relation.forEach(T=>{u[parseInt(T.userdata.SmartCropWidth,10)]=`:${T.userdata.SmartCropDef}`})}},p.send()}return u},c=()=>{Object.keys(d).length===0&&(d=w());const u=E(Object.keys(d));if(u){const p=e.src.replace("?",`${d[u]}?`);a.value=p.replace("{dpr}",(window.devicePixelRatio||1).toString())}else a.value=e.src.replace("{dpr}",(window.devicePixelRatio||1).toString())},C=()=>{e.smartCropRendition?e.smartCropRendition==="SmartCrop:Auto"&&n.srcset?(a.value=n.srcset,c()):a.value=e.src.replace("{dpr}",(window.devicePixelRatio||1).toString()):a.value=e.src};return t.onMounted(()=>{const u=p=>{window.requestAnimationFrame(()=>{e.smartCropRendition==="SmartCrop:Auto"&&n.srcset&&o.value&&Array.isArray(p)&&p.length&&p.forEach(()=>{c()})})};y=new Le(u),y.observe(o.value),C()}),t.onUnmounted(()=>{o.value&&y.unobserve(o.value)}),t.watch(()=>e.src,async(u,p)=>{u!==p&&C()}),(u,p)=>{var h;return t.openBlock(),t.createElementBlock("div",{id:e.id,ref_key:"image",ref:o,class:t.normalizeClass(m.value),style:t.normalizeStyle(r.value)},[a.value?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[(h=e.imageLink)!=null&&h.url?(t.openBlock(),t.createBlock($,t.mergeProps({key:0,class:`${e.baseCssClass}__link`,href:e.imageLink.url},e.imageLink.attributes),{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(l.value),{key:a.value}))]),_:1},16,["class","href"])):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(l.value),{key:a.value}))],64)):t.createCommentVNode("",!0)],14,Se)}}}),Ge="",Pe=["id","aria-label"],Ae=t.defineComponent({inheritAttrs:!1,__name:"CoreLanguageNavigation",props:{items:{type:Array,default:()=>[]},accessibilityLabel:{type:String,default:""},...b.componentProperties("cmp-languagenavigation")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration)),o=a=>{if((a||[]).length===0||typeof a>"u")return;const d=a.map(r=>{let m=t.h("span",{class:`${e.baseCssClass}__item-title`,lang:r.language},[r.title]);return r.level>0&&(m=t.h($,{"aria-current":`${r.active?"page":!1}`,class:`${e.baseCssClass}__item-link`,href:r.link.url,title:r.title,hrefLang:r.language,lang:r.language,rel:"alternate"},()=>r.title)),t.h("li",{class:[`${e.baseCssClass}__item`,`${e.baseCssClass}__item--level-${r==null?void 0:r.level}`,`${e.baseCssClass}__item--countrycode-${r.country}`,`${e.baseCssClass}__item--langcode-${r.language}`,{[`${e.baseCssClass}__item--active`]:r==null?void 0:r.active}]},[m,o(r.children)])});return t.h("ul",{class:`${e.baseCssClass}__group`},d)};return(a,d)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.accessibilityLabel.length?e.accessibilityLabel:"Language Navigation",class:t.normalizeClass(i.value),itemScope:"",itemType:"http://schema.org/SiteNavigationElement",role:"navigation"},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(e.items))))],10,Pe))}}),Oe=["id","aria-label"],Re=t.defineComponent({inheritAttrs:!1,__name:"CoreNavigation",props:{items:{type:Array,default:()=>[]},accessibilityLabel:{type:String,default:""},...b.componentProperties("cmp-navigation")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration)),o=a=>{if((a||[]).length===0||typeof a>"u")return;const d=a.map(r=>t.h("li",{class:[`${e.baseCssClass}__item`,`${e.baseCssClass}__item--level-${r==null?void 0:r.level}`,{[`${e.baseCssClass}__item--active`]:r==null?void 0:r.active}]},[t.h($,{"aria-current":`${r.active?"page":!1}`,class:`${e.baseCssClass}__item-link`,href:r.link.url,title:r.title,navigable:r==null?void 0:r.navigable},()=>r.title),o(r.children)]));return t.h("ul",{class:`${e.baseCssClass}__group`},d)};return(a,d)=>(t.openBlock(),t.createElementBlock("nav",{id:e.id,"aria-label":e.accessibilityLabel.length?e.accessibilityLabel:"Navigation",class:t.normalizeClass(i.value),itemScope:"",itemType:"http://schema.org/SiteNavigationElement",role:"navigation"},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(o(e.items))))],10,Oe))}}),xe=["id"],Ie=t.defineComponent({inheritAttrs:!1,__name:"CoreSeparator",props:{...b.componentProperties("cmp-separator")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration));return(o,a)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(i.value)},[t.createElementVNode("hr",{class:t.normalizeClass(`${e.baseCssClass}__horizontal-rule`)},null,2)],10,xe))}}),ze=["id"],F=t.defineComponent({inheritAttrs:!1,__name:"CoreTitle",props:{isNested:{type:Boolean,default:!1},link:{type:Object,default:()=>({valid:!0,attributes:{}})},text:{type:String,default:""},type:{type:String,default:"h1"},...b.componentProperties("cmp-title")},setup(s){const e=s,n=t.useAttrs(),i=S.useRoute(),o=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),a=t.computed(()=>{const l=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,o,e.aemNoDecoration);return l.push({"cq-dd-title":o}),l}),d=t.ref((n==null?void 0:n.linkDisabled)!==!0),r=t.computed(()=>e.isNested?"-":"__"),m=t.computed(()=>i.path&&typeof i.path<"u"?i.path:null);return t.watch(()=>n==null?void 0:n.linkDisabled,async(l,y)=>{l!==y&&(d.value=l!==!0)}),(l,y)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(a.value)},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.type),{class:t.normalizeClass(`${l.baseCssClass}${r.value}text`)},{default:t.withCtx(()=>{var E,w;return[d.value?(t.openBlock(),t.createBlock($,t.mergeProps({key:0,class:`${l.baseCssClass}${r.value}link`,href:((E=e.link)==null?void 0:E.url)||m.value},(w=e.link)==null?void 0:w.attributes),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(s.text),1)]),_:1},16,["class","href"])):(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.createTextVNode(t.toDisplayString(s.text),1)],64))]}),_:1},8,["class"]))],10,ze))}}),De=["id"],je=["innerHTML"],qe=t.defineComponent({inheritAttrs:!1,__name:"CoreTeaser",props:{actions:{type:Array},description:{type:String},imageAlt:{type:String,default:""},imagePath:{type:String},link:{type:Object},pretitle:{type:String},title:{type:String},titleType:{type:String,default:"h2"},...b.componentProperties("cmp-teaser")},setup(s){const e=s,n=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),i=t.computed(()=>{const r=b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,n,e.aemNoDecoration);return r.push({"cq-dd-teaser":n}),r}),o=t.computed(()=>{var r,m;return{class:`${e.baseCssClass}__link`,href:(r=e.link)==null?void 0:r.url,...(m=e.link)==null?void 0:m.attributes}}),a=t.computed(()=>({baseCssClass:`${e.baseCssClass}__title`,isInEditor:n,isNested:!0,link:e.link,linkDisabled:!e.link,text:e.title,type:e.titleType})),d=r=>R.sanitize(r);return(r,m)=>(t.openBlock(),t.createElementBlock("div",{id:e.id,class:t.normalizeClass(i.value)},[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.link?$:"section"),t.normalizeProps(t.guardReactiveProps(e.link?o.value:!1)),{default:t.withCtx(()=>[e.pretitle||e.title||e.description?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${e.baseCssClass}__content`)},[e.pretitle?(t.openBlock(),t.createElementBlock("p",{key:0,class:t.normalizeClass(`${e.baseCssClass}__pretitle`)},t.toDisplayString(e.pretitle),3)):t.createCommentVNode("",!0),e.title?(t.openBlock(),t.createBlock(F,t.normalizeProps(t.mergeProps({key:1},a.value)),null,16)):t.createCommentVNode("",!0),e.description?(t.openBlock(),t.createElementBlock("div",{key:2,class:t.normalizeClass(`${e.baseCssClass}__description`),innerHTML:`${d(e.description)}`},null,10,je)):t.createCommentVNode("",!0),e.actions&&e.actions.length>0?(t.openBlock(),t.createElementBlock("div",{key:3,class:t.normalizeClass(`${e.baseCssClass}__action-container`)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.actions,(l,y)=>(t.openBlock(),t.createBlock($,t.mergeProps({id:l.id,key:`link-${y}`,class:`${e.baseCssClass}__action-link`,href:l.link.url,title:l.title},l.link.attributes),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(l.title),1)]),_:2},1040,["id","class","href","title"]))),128))],2)):t.createCommentVNode("",!0)],2)):t.createCommentVNode("",!0),e.imagePath?(t.openBlock(),t.createElementBlock("div",{key:1,class:t.normalizeClass(`${e.baseCssClass}__image`)},[t.createVNode(H,{alt:e.imageAlt,"is-in-editor":t.unref(n),src:e.imagePath,width:"100%"},null,8,["alt","is-in-editor","src"])],2)):t.createCommentVNode("",!0)]),_:1},16))],10,De))}}),Ve="",Me=["id","innerHTML"],Ue=["id"],He=t.defineComponent({inheritAttrs:!1,__name:"CoreText",props:{cqPath:{type:String,default:""},richText:{type:Boolean,default:!1},text:{type:String},...b.componentProperties("cmp-text")},setup(s){const e=s,n=S.useRouter(),i=t.inject("isInEditor",k.AuthoringUtils.isInEditor()),o=t.computed(()=>b.componentClassNames(e.baseCssClass,e.appliedCssClassNames,e.cssClassNames,e.containerProps,i,e.aemNoDecoration)),a=t.ref(null),d=l=>R.sanitize(l),r=t.computed(()=>{const l=e.cqPath?e.cqPath.substring(e.cqPath.lastIndexOf("/")+1):"";return e.id?e.id:l}),m=()=>{if(a.value){const l=n.getRoutes().map(y=>y.path);!k.AuthoringUtils.isEditMode()&&!k.AuthoringUtils.isPreviewMode()&&a.value.querySelectorAll("a").forEach(y=>{y.classList.add("cmp-link");const E=y.getAttribute("target")||"_self",w=y.getAttribute("href")||"#";y.onclick=c=>{E!=="_blank"&&l.includes(w)&&(c.preventDefault(),n.push(w))}})}};return t.onMounted(()=>{m()}),t.onUpdated(()=>{m()}),(l,y)=>e.richText?(t.openBlock(),t.createElementBlock("div",{key:0,id:r.value,ref_key:"richTextElement",ref:a,class:t.normalizeClass(o.value),"data-rte-editelement":"",innerHTML:`${d(e.text)}`},null,10,Me)):(t.openBlock(),t.createElementBlock("div",{key:1,id:r.value,class:t.normalizeClass(o.value)},[t.createElementVNode("p",{class:t.normalizeClass(`${e.baseCssClass}__paragraph`)},t.toDisplayString(e.text),3)],10,Ue))}});f.BreadcrumbEditConfig=Y,f.CoreBreadcrumb=re,f.CoreEmbed=pe,f.CoreImage=H,f.CoreLanguageNavigation=Ae,f.CoreLink=$,f.CoreNavigation=Re,f.CoreSeparator=Ie,f.CoreTeaser=qe,f.CoreText=He,f.CoreTitle=F,f.EmbedEditConfig=J,f.ImageEditConfig=X,f.LanguageNavigationEditConfig=Q,f.NavigationEditConfig=Z,f.TeaserEditConfig=K,f.TextEditConfig=te,f.TitleEditConfig=ee,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
