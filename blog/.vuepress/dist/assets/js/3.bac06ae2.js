(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{546:function(t,e,n){},547:function(t,e,n){},548:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(46),n(119),n(121),n(311);var i=/#.*$/,r=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function a(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(i),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(r,"")}(t);return o.test(s)?t:s+".html"+n}function f(t,e,n){if(!t)return n;for(var i,r=e;(r=r.$parent)&&!i;)i=r.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},549:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,r,o){var s=r.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},s.utc=function(e){var n=o(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=s.utcOffset;s.utcOffset=function(i,r){var o=this.$utils().u;if(o(i))return this.$u?0:o(this.$offset)?u.call(this):this.$offset;if("string"==typeof i&&null===(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var r=(""+i[0]).match(n)||["-",0,0],o=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===o?s:-s}(i)))return this;var s=Math.abs(i)<=16?60*i:i,a=this;if(r)return a.$offset=s,a.$u=0===i,a;if(0!==i){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+c,t)).$offset=s,a.$x.$localOffset=c}else a=this.utc();return a};var l=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var f=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var i=this.local(),r=o(t).local();return h.call(i,r,e,n)}}}()},550:function(t,e,n){"use strict";n(546)},551:function(t,e,n){"use strict";n(547)},552:function(t,e,n){"use strict";var i=n(12),r=n(2),o=n(3),s=n(183),a=n(36),c=n(19),u=n(184),l=n(55),f=n(120),h=n(300),p=n(5),d=n(69).f,v=n(56).f,g=n(16).f,m=n(553),$=n(310).trim,_=r.Number,b=_.prototype,y=r.TypeError,x=o("".slice),S=o("".charCodeAt),k=function(t){var e=h(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,n,i,r,o,s,a,c,u=h(t,"number");if(f(u))throw y("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=$(u),43===(e=S(u,0))||45===e){if(88===(n=S(u,2))||120===n)return NaN}else if(48===e){switch(S(u,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(s=(o=x(u,2)).length,a=0;a<s;a++)if((c=S(o,a))<48||c>r)return NaN;return parseInt(o,i)}return+u};if(s("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var T,C=function(t){var e=arguments.length<1?0:_(k(t)),n=this;return l(b,n)&&p((function(){m(n)}))?u(Object(e),n,C):e},O=i?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;O.length>E;E++)c(_,T=O[E])&&!c(C,T)&&g(C,T,v(_,T));C.prototype=b,b.constructor=C,a(r,"Number",C)}},553:function(t,e,n){var i=n(3);t.exports=i(1..valueOf)},554:function(t,e,n){var i=n(308),r=n(301),o=n(555),s=n(559);t.exports=function(t,e){if(null==t)return{};var n=i(s(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},555:function(t,e,n){var i=n(189),r=n(556),o=n(182);t.exports=function(t,e,n){for(var s=-1,a=e.length,c={};++s<a;){var u=e[s],l=i(t,u);n(l,u)&&r(c,o(u,t),l)}return c}},556:function(t,e,n){var i=n(557),r=n(182),o=n(187),s=n(118),a=n(87);t.exports=function(t,e,n,c){if(!s(t))return t;for(var u=-1,l=(e=r(e,t)).length,f=l-1,h=t;null!=h&&++u<l;){var p=a(e[u]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(u!=f){var v=h[p];void 0===(d=c?c(v,p,h):void 0)&&(d=s(v)?v:o(e[u+1])?[]:{})}i(h,p,d),h=h[p]}return t}},557:function(t,e,n){var i=n(558),r=n(186),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&r(s,n)&&(void 0!==n||e in t)||i(t,e,n)}},558:function(t,e,n){var i=n(309);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},559:function(t,e,n){var i=n(302),r=n(560),o=n(562);t.exports=function(t){return i(t,o,r)}},560:function(t,e,n){var i=n(185),r=n(561),o=n(303),s=n(304),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:s;t.exports=a},561:function(t,e,n){var i=n(307)(Object.getPrototypeOf,Object);t.exports=i},562:function(t,e,n){var i=n(305),r=n(563),o=n(188);t.exports=function(t){return o(t)?i(t,!0):r(t)}},563:function(t,e,n){var i=n(118),r=n(306),o=n(564),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},564:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},565:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return h}));n(7),n(27),n(35);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,598,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(550),n(18)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(551),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(552),n(122)),c=n.n(a),u=n(554),l=n.n(u),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,c.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},566:function(t,e,n){},567:function(t,e,n){},568:function(t,e,n){},569:function(t,e,n){},570:function(t,e,n){},578:function(t,e,n){"use strict";var i=n(4),r=n(70).findIndex,o=n(192),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},579:function(t,e,n){"use strict";n(566)},580:function(t,e,n){"use strict";n(567)},581:function(t,e,n){"use strict";n(568)},582:function(t,e,n){"use strict";n(569)},583:function(t,e,n){"use strict";n(570)},599:function(t,e,n){"use strict";n.r(e);n(7),n(27),n(35),n(313),n(578);var i,r=n(548),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(r.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),i=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-i-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},s=(n(579),n(18));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var c={components:{Sticker:Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var i=e&&document.getElementById(e);i&&window.scrollTo(0,a(i)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===i&&(i=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],r=0,o=function(e){t.activeIndex=e};r<n.length;r++){if(!(a(document.getElementById(n[r].slug))-50<e)){r||o(r);break}o(r)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},u=(n(580),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,i){return n("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===i}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(86),n(190)),f=n.n(l),h=n(549),p=n.n(h),d=n(11),v={name:"PostTag",props:{tag:{type:String,required:!0}}},g=(n(581),Object(s.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports);f.a.extend(p.a);var m={name:"PostMeta",components:{NavigationIcon:d.n,ClockIcon:d.a,PostTag:g},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return f.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},$=(n(582),{components:{Toc:u,PostMeta:Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(565).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,600))}}}),_=(n(583),Object(s.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=_.exports}}]);