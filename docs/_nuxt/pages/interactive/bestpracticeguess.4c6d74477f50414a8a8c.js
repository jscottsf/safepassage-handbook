webpackJsonp([0],{"+66z":function(t,n){function e(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=e},"+wUK":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("blpl"),o=e("cZC/"),i=e("VU/8"),s=i(r.a,o.a,null,null,null);n.default=s.exports},"22B7":function(t,n){function e(t,n){return t===n||t!==t&&n!==n}t.exports=e},"4WTo":function(t,n,e){var r=e("NWt+");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},"5PlU":function(t,n,e){var r=e("RY/4"),o=e("dSzd")("iterator"),i=e("/bQp");t.exports=e("FeBl").isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(r(n))}},"5zde":function(t,n,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},"6MiT":function(t,n,e){function r(t){return"symbol"==typeof t||i(t)&&o(t)==s}var o=e("aCM0"),i=e("UnEC"),s="[object Symbol]";t.exports=r},"7Doy":function(t,n,e){var r=e("EqjI"),o=e("7UMu"),i=e("dSzd")("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},"7Mjc":function(t,n){function e(t,n){return t+r(o()*(n-t+1))}var r=Math.floor,o=Math.random;t.exports=e},"9Bbf":function(t,n,e){"use strict";var r=e("kM2E");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},"9C8M":function(t,n,e){"use strict";var r=e("evD5").f,o=e("Yobk"),i=e("xH/j"),s=e("+ZMJ"),a=e("2KxR"),u=e("NWt+"),c=e("vIB/"),l=e("EGZi"),f=e("bRrM"),d=e("+E39"),p=e("06OY").fastKey,v=e("LIJb"),h=d?"_s":"size",y=function(t,n){var e,r=p(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var l=t(function(t,r){a(t,l,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&u(r,e,t[c],t)});return i(l.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var e=v(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[h]--}return!!r},forEach:function(t){v(this,n);for(var e,r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(v(this,n),t)}}),d&&r(l.prototype,"size",{get:function(){return v(this,n)[h]}}),l},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=p(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){c(t,n,function(t,e){this._t=v(t,n),this._k=e,this._l=void 0},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?"keys"==n?l(0,e.k):"values"==n?l(0,e.v):l(0,[e.k,e.v]):(t._t=void 0,l(1))},e?"entries":"values",!e,!0),f(n)}}},ALrJ:function(t,n,e){var r=e("+ZMJ"),o=e("MU5D"),i=e("sB3e"),s=e("QRG4"),a=e("oeOm");t.exports=function(t,n){var e=1==t,u=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f,p=n||a;return function(n,a,v){for(var h,y,b=i(n),g=o(b),x=r(a,v,3),_=s(g.length),m=0,C=e?p(n,_):u?p(n,0):void 0;_>m;m++)if((d||m in g)&&(h=g[m],y=x(h,m,b),t))if(e)C[m]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:C.push(h)}else if(l)return!1;return f?-1:c||l?l:C}}},BDhv:function(t,n,e){var r=e("kM2E");r(r.P+r.R,"Set",{toJSON:e("m9gC")("Set")})},Gu7T:function(t,n,e){"use strict";n.__esModule=!0;var r=e("c/Tr"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,o.default)(t)}},HpRW:function(t,n,e){"use strict";var r=e("kM2E"),o=e("lOnJ"),i=e("+ZMJ"),s=e("NWt+");t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,a,u=arguments[1];return o(this),n=void 0!==u,n&&o(u),void 0==t?new this:(e=[],n?(r=0,a=i(u,arguments[2],2),s(t,!1,function(t){e.push(a(t,r++))})):s(t,!1,e.push,e),new this(e))}})}},LIJb:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},NkRn:function(t,n,e){var r=e("TQ3y"),o=r.Symbol;t.exports=o},Rh28:function(t,n){function e(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=e},TQ3y:function(t,n,e){var r=e("blYT"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},UnEC:function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},W3Iv:function(t,n,e){t.exports={default:e("wEtr"),__esModule:!0}},XPuf:function(t,n,e){function r(t,n,e){if(e&&"boolean"!=typeof e&&i(t,n,e)&&(n=e=void 0),void 0===e&&("boolean"==typeof n?(e=n,n=void 0):"boolean"==typeof t&&(e=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=s(t),void 0===n?(n=t,t=0):n=s(n)),t>n){var r=t;t=n,n=r}if(e||t%1||n%1){var l=c();return u(t+l*(n-t+a("1e-"+((l+"").length-1))),n)}return o(t,n)}var o=e("7Mjc"),i=e("zBOP"),s=e("sBat"),a=parseFloat,u=Math.min,c=Math.random;t.exports=r},Xd32:function(t,n,e){e("+tPU"),e("zQR9"),t.exports=e("5PlU")},ZGh9:function(t,n){function e(t,n){return!!(n=null==n?r:n)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<n}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=e},aCM0:function(t,n,e){function r(t){return null==t?void 0===t?u:a:c&&c in Object(t)?i(t):s(t)}var o=e("NkRn"),i=e("uLhX"),s=e("+66z"),a="[object Null]",u="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=r},bGc4:function(t,n,e){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=e("gGqR"),i=e("Rh28");t.exports=r},blYT:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e("DuR2"))},blpl:function(t,n,e){"use strict";var r=e("lHA8"),o=e.n(r),i=e("Gu7T"),s=e.n(i),a=e("c/Tr"),u=e.n(a),c=e("d7EF"),l=e.n(c),f=e("W3Iv"),d=e.n(f),p=e("XPuf"),v=e.n(p);n.a={data:function(){return{items:[{translations:{en:"Be safe",es:"Estar a salvo"}},{translations:{en:"Strive to model safe behavior",es:"Esforzarse de tener una conducta y modelo de seguridad"}},{translations:{en:"Individual safety is our top priority",es:"Seguridad Individual es nuestra mayor prioridad"}},{translations:{en:"Use peripheral vision",es:"Use visión periférica"}},{translations:{en:"Look out for your partner",es:"Cuide a su compañero"}},{translations:{en:"No headphones",es:"No audífonos"}},{translations:{en:"Courteous",es:"Cortes"}},{translations:{en:"Professional",es:"Profesional"}},{translations:{en:"Clear and concise",es:"Claro y conciso"}},{translations:{en:"Positive engagement",es:"Compromiso positivo"}},{translations:{en:"Confident posture",es:"Postura confiada"}},{translations:{en:"Acknowledge people and drivers",es:"Ponga atención a la gente y conductores"}},{translations:{en:"De-escalate",es:"De-escala"}},{translations:{en:"Think first, pause",es:"Piense primero, haga una pausa"}},{translations:{en:"Balanced footing",es:"Equilibrio de pie"}},{translations:{en:"Stay out of reach",es:"Quédese fuera de alcance"}},{translations:{en:"Be ready to move",es:"Este preparado para moverse"}},{translations:{en:"Step back",es:"Retroceda"}},{translations:{en:"Keep one hand available",es:"Mantenga una mano disponible"}},{translations:{en:"Safety stance",es:"Postura de seguridad"}},{translations:{en:"Don’t overreact",es:"So sobre reaccione"}},{translations:{en:"Respectful confidence",es:"Confianza controlada"}},{translations:{en:"Calm and relaxed",es:"Tranquilo y relajado"}},{translations:{en:"Be a brand ambassador",es:"Sea un embajador distinguido"}},{translations:{en:"Follow traffic signals",es:"Siga las señales de trafico"}},{translations:{en:"Stay within designated crossing areas",es:"Manténgase dentro de las áreas de cruce asignadas"}},{translations:{en:"Do not block crosswalk",es:"No obstruya el cruce de peatones"}},{translations:{en:"Do not step off corner early",es:"No se quite de la esquina antes de tiempo"}},{translations:{en:"Use caution if cars are in crosswalk",es:"Use precaución si hay carros en el cruce de peatones"}},{translations:{en:"Strive for consistency",es:"Esfuérzate para la consistencia"}},{translations:{en:"Do not “pop” or jerk while clicking",es:"No haga movimientos bruscos, repentinos o jalonea el dispositivo cuando lo esté presionando"}},{translations:{en:"Do not swing or point signs",es:"No gire o apunte con los letreros"}},{translations:{en:"Press the talk button, pause, then speak",es:"Presione el botón de hablar, pause, luego hable"}},{translations:{en:"Split your attention",es:"Divide tu atención"}}],surprise:{translations:{en:"Kate is pregnant",es:"Kate esta embarazada"}},current:{},hidden:[],texts:[]}},mounted:function(){this.next()},computed:{cardClass:function(){return this.hidden.length>0?"":"card-inverse card-info"}},methods:{updateTexts:function(){var t=this;this.texts=d()(this.current.translations).map(function(n){var e=l()(n,2),r=(e[0],e[1]);return u()(r).map(function(n){return t.hidden.includes(n)?"_":n}).join("").split(" ")})},next:function(){var t=this.items.filter(function(t){return!t.isDone});if(!t||0===t.length)return void(this.current=this.texts=null);this.current=t[v()(0,t.length-1)],this.current.isDone=!0,this.items.length-t.length==7&&(this.current=this.surprise),this.hidden=[].concat(s()(new o.a(d()(this.current.translations).reduce(function(t,n){var e=l()(n,2),r=(e[0],e[1]);return t.concat(u()(r))},[])))).filter(function(t){return!" -,’“”".includes(t)}),this.updateTexts()},reveal:function(){this.hidden[v()(0,this.hidden.length-1)]=null,this.hidden=this.hidden.filter(function(t){return t>""}),this.updateTexts()},revealAll:function(){this.hidden=[],this.updateTexts()}}}},"c/Tr":function(t,n,e){t.exports={default:e("5zde"),__esModule:!0}},"cZC/":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container-fluid pt-header"},[t.texts?e("div",{staticClass:"row"},[t._l(t.texts,function(n){return e("div",{staticClass:"col-12 pt-4 text-center"},[e("div",{staticClass:"card",class:t.cardClass},[e("div",{staticClass:"card-block"},[e("samp",{staticClass:"card-title display-3",staticStyle:{"letter-spacing":"0.1em"}},t._l(n,function(n){return e("mark",{staticClass:"d-inline-block mx-2 my-2"},[t._v("\n              "+t._s(n)+"\n            ")])}))])])])}),e("div",{staticClass:"col-12 pt-4 text-center"},[e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.reveal}},[e("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.revealAll}},[e("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.next}},[e("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])])],2):e("div",{staticClass:"row"},[t._m(0)])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-12 pt-4 text-center"},[e("h1",[t._v("No more!")])])}],i={render:r,staticRenderFns:o};n.a=i},d7EF:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e("us/S"),i=r(o),s=e("BO1k"),a=r(s);n.default=function(){function t(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var s,u=(0,a.default)(t);!(r=(s=u.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},fBQ2:function(t,n,e){"use strict";var r=e("evD5"),o=e("X8DO");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},gGqR:function(t,n,e){function r(t){if(!i(t))return!1;var n=o(t);return n==a||n==u||n==s||n==c}var o=e("aCM0"),i=e("yCNF"),s="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=r},gSvA:function(t,n,e){var r=e("kM2E"),o=e("mbce")(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},ioQ5:function(t,n,e){e("HpRW")("Set")},kxzG:function(t,n,e){function r(t){if("number"==typeof t)return t;if(i(t))return s;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=c.test(t);return e||l.test(t)?f(t.slice(2),e?2:8):u.test(t)?s:+t}var o=e("yCNF"),i=e("6MiT"),s=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=r},lHA8:function(t,n,e){t.exports={default:e("pPW7"),__esModule:!0}},m9gC:function(t,n,e){var r=e("RY/4"),o=e("4WTo");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},mbce:function(t,n,e){var r=e("lktj"),o=e("TcQ7"),i=e("NpIQ").f;t.exports=function(t){return function(n){for(var e,s=o(n),a=r(s),u=a.length,c=0,l=[];u>c;)i.call(s,e=a[c++])&&l.push(t?[e,s[e]]:s[e]);return l}}},oNmr:function(t,n,e){e("9Bbf")("Set")},oeOm:function(t,n,e){var r=e("7Doy");t.exports=function(t,n){return new(r(t))(n)}},pPW7:function(t,n,e){e("M6a0"),e("zQR9"),e("+tPU"),e("ttyz"),e("BDhv"),e("oNmr"),e("ioQ5"),t.exports=e("FeBl").Set},qo66:function(t,n,e){"use strict";var r=e("7KvD"),o=e("kM2E"),i=e("06OY"),s=e("S82l"),a=e("hJx8"),u=e("xH/j"),c=e("NWt+"),l=e("2KxR"),f=e("EqjI"),d=e("e6n0"),p=e("evD5").f,v=e("ALrJ")(0),h=e("+E39");t.exports=function(t,n,e,y,b,g){var x=r[t],_=x,m=b?"set":"add",C=_&&_.prototype,k={};return h&&"function"==typeof _&&(g||C.forEach&&!s(function(){(new _).entries().next()}))?(_=n(function(n,e){l(n,_,t,"_c"),n._c=new x,void 0!=e&&c(e,b,n[m],n)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in C&&(!g||"clear"!=t)&&a(_.prototype,t,function(e,r){if(l(this,_,t),!n&&g&&!f(e))return"get"==t&&void 0;var o=this._c[t](0===e?0:e,r);return n?this:o})}),g||p(_.prototype,"size",{get:function(){return this._c.size}})):(_=y.getConstructor(n,t,b,m),u(_.prototype,e),i.NEED=!0),d(_,t),k[t]=_,o(o.G+o.W+o.F,k),g||y.setStrong(_,t,b),_}},qyJz:function(t,n,e){"use strict";var r=e("+ZMJ"),o=e("kM2E"),i=e("sB3e"),s=e("msXi"),a=e("Mhyx"),u=e("QRG4"),c=e("fBQ2"),l=e("3fs2");o(o.S+o.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,f,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,b=0,g=l(d);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(n=u(d.length),e=new p(n);n>b;b++)c(e,b,y?h(d[b],b):d[b]);else for(f=g.call(d),e=new p;!(o=f.next()).done;b++)c(e,b,y?s(f,h,[o.value,b],!0):o.value);return e.length=b,e}})},sBat:function(t,n,e){function r(t){if(!t)return 0===t?t:0;if((t=o(t))===i||t===-i){return(t<0?-1:1)*s}return t===t?t:0}var o=e("kxzG"),i=1/0,s=1.7976931348623157e308;t.exports=r},ttyz:function(t,n,e){"use strict";var r=e("9C8M"),o=e("LIJb");t.exports=e("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},uLhX:function(t,n,e){function r(t){var n=s.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(n?t[u]=e:delete t[u]),o}var o=e("NkRn"),i=Object.prototype,s=i.hasOwnProperty,a=i.toString,u=o?o.toStringTag:void 0;t.exports=r},"us/S":function(t,n,e){t.exports={default:e("Xd32"),__esModule:!0}},wEtr:function(t,n,e){e("gSvA"),t.exports=e("FeBl").Object.entries},yCNF:function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},zBOP:function(t,n,e){function r(t,n,e){if(!a(e))return!1;var r=typeof n;return!!("number"==r?i(e)&&s(n,e.length):"string"==r&&n in e)&&o(e[n],t)}var o=e("22B7"),i=e("bGc4"),s=e("ZGh9"),a=e("yCNF");t.exports=r}});
//# sourceMappingURL=bestpracticeguess.4c6d74477f50414a8a8c.js.map