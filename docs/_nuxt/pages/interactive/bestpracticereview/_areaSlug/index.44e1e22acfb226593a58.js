webpackJsonp([5],{"0J6S":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container-fluid"},[a("div",{staticClass:"row pt-header pb-2",staticStyle:{cursor:"pointer"},style:{backgroundColor:t.area.data.color_dark},on:{click:function(e){t.$router.push({name:"interactive-bestpracticereview"})}}},[a("div",{staticClass:"col-6 d-flex flex-row justify-content-start align-items-center",staticStyle:{overflow:"hidden"}},[a("span",{staticClass:"display-3 text-white"},[t._v(t._s(t.area.data.heading.en))]),a("img",{staticClass:"px-2 py-2 ml-auto",staticStyle:{width:"80px",height:"80px",opacity:".5"},attrs:{src:"images/"+t.area.data.image}})]),a("div",{staticClass:"col-6 d-flex flex-row justify-content-start align-items-center",staticStyle:{overflow:"hidden"}},[a("span",{staticClass:"display-3 text-white"},[t._v(t._s(t.area.data.heading.es))]),a("img",{staticClass:"px-2 py-2 ml-auto",staticStyle:{width:"80px",height:"80px",opacity:".5"},attrs:{src:"images/"+t.area.data.image}})])]),t._l(t.area.data.sections,function(e){return a("div",{staticClass:"row",staticStyle:{cursor:"pointer"},on:{click:function(a){t.$router.push({name:"interactive-bestpracticereview-areaSlug-sectionSlug",params:{areaSlug:t.area.data.slug,sectionSlug:e.slug}})}}},[a("div",{staticClass:"col-6 py-2",staticStyle:{overflow:"hidden"},style:{borderBottom:"2px solid "+t.area.data.color_dark}},[a("h1",{staticClass:"pt-1"},[t._v(t._s(e.heading.en))])]),a("div",{staticClass:"col-6 py-2",staticStyle:{overflow:"hidden"},style:{borderBottom:"2px solid "+t.area.data.color_dark}},[a("h1",{staticClass:"pt-1"},[t._v(t._s(e.heading.es))])])])}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 pt-4 text-center"},[a("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.previous}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}})]),a("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.next}},[a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])])])],2)},i=[],r={render:s,staticRenderFns:i};e.a=r},Q0Jq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("fgBL"),i=a("0J6S"),r=a("VU/8"),n=r(s.a,i.a,!1,null,null,null);e.default=n.exports},fgBL:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),r=a("NYxO");e.a={mounted:function(){document.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){document.removeEventListener("keydown",this.onKeyDown)},computed:i()({},Object(r.mapGetters)(["bestPractices"]),{area:function(){var t=this,e=this.bestPractices,a=e.areas,s=a.findIndex(function(e){return e.slug===t.$route.params.areaSlug});return{data:a[s],index:s}}}),methods:{onKeyDown:function(t){console.log(t),"ArrowRight"!==t.key||t.altKey||t.ctrlKey||t.shiftKey?"ArrowLeft"!==t.key||t.altKey||t.ctrlKey||t.shiftKey||this.previous():this.next()},previous:function(){var t=this.bestPractices,e=this.area,a=e.index-1;a>-1?this.$router.push({name:"interactive-bestpracticereview-areaSlug",params:{areaSlug:t.areas[a].slug}}):this.$router.push({name:"interactive-bestpracticereview"})},next:function(){var t=this.bestPractices,e=this.area,a=e.index+1;a<t.areas.length?this.$router.push({name:"interactive-bestpracticereview-areaSlug",params:{areaSlug:t.areas[a].slug}}):this.$router.push({name:"interactive-bestpracticereview"})}}}}});
//# sourceMappingURL=index.44e1e22acfb226593a58.js.map