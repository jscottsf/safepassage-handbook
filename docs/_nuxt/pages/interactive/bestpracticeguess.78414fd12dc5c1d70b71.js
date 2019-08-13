webpackJsonp([1],{"+66z":function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},"+wUK":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("1OCL"),o=e("YpWe"),i=e("VU/8")(r.a,o.a,!1,null,null,null);i.options.__file="pages/interactive/bestpracticeguess.vue",n.default=i.exports},"1OCL":function(t,n,e){"use strict";var r=e("lHA8"),o=e.n(r),i=e("Gu7T"),s=e.n(i),a=e("c/Tr"),u=e.n(a),c=e("d7EF"),l=e.n(c),f=e("W3Iv"),d=e.n(f),p=e("XPuf"),v=e.n(p);n.a={data:function(){return{items:[{translations:{en:"Be safe",es:"Estar a salvo"}},{translations:{en:"Strive to model safe behavior",es:"Esforzarse de tener una conducta y modelo de seguridad"}},{translations:{en:"Individual safety is our top priority",es:"Seguridad Individual es nuestra mayor prioridad"}},{translations:{en:"Use peripheral vision",es:"Use visión periférica"}},{translations:{en:"Look out for your partner",es:"Cuide a su compañero"}},{translations:{en:"No headphones",es:"No audífonos"}},{translations:{en:"Courteous",es:"Cortes"}},{translations:{en:"Professional",es:"Profesional"}},{translations:{en:"Clear and concise",es:"Claro y conciso"}},{translations:{en:"Positive engagement",es:"Compromiso positivo"}},{translations:{en:"Confident posture",es:"Postura confiada"}},{translations:{en:"Acknowledge people and drivers",es:"Ponga atención a la gente y conductores"}},{translations:{en:"De-escalate",es:"De-escala"}},{translations:{en:"Think first, pause",es:"Piense primero, haga una pausa"}},{translations:{en:"Balanced footing",es:"Equilibrio de pie"}},{translations:{en:"Stay out of reach",es:"Quédese fuera de alcance"}},{translations:{en:"Be ready to move",es:"Este preparado para moverse"}},{translations:{en:"Step back",es:"Retroceda"}},{translations:{en:"Keep one hand available",es:"Mantenga una mano disponible"}},{translations:{en:"Safety stance",es:"Postura de seguridad"}},{translations:{en:"Don’t overreact",es:"So sobre reaccione"}},{translations:{en:"Respectful confidence",es:"Confianza controlada"}},{translations:{en:"Calm and relaxed",es:"Tranquilo y relajado"}},{translations:{en:"Be a brand ambassador",es:"Sea un embajador distinguido"}},{translations:{en:"Follow traffic signals",es:"Siga las señales de trafico"}},{translations:{en:"Stay within designated crossing areas",es:"Manténgase dentro de las áreas de cruce asignadas"}},{translations:{en:"Do not block crosswalk",es:"No obstruya el cruce de peatones"}},{translations:{en:"Do not step off corner early",es:"No se quite de la esquina antes de tiempo"}},{translations:{en:"Use caution if cars are in crosswalk",es:"Use precaución si hay carros en el cruce de peatones"}},{translations:{en:"Strive for consistency",es:"Esfuérzate para la consistencia"}},{translations:{en:"Do not “pop” or jerk while clicking",es:"No haga movimientos bruscos, repentinos o jalonea el dispositivo cuando lo esté presionando"}},{translations:{en:"Do not swing or point signs",es:"No gire o apunte con los letreros"}},{translations:{en:"Press the talk button, pause, then speak",es:"Presione el botón de hablar, pause, luego hable"}},{translations:{en:"Split your attention",es:"Divide tu atención"}}],current:{},hidden:[],texts:[]}},mounted:function(){this.next()},computed:{cardClass:function(){return this.hidden.length>0?"":"card-inverse card-info"}},methods:{updateTexts:function(){var t=this;this.texts=d()(this.current.translations).map(function(n){var e=l()(n,2),r=(e[0],e[1]);return u()(r).map(function(n){return t.hidden.includes(n)?"_":n}).join("").split(" ")})},next:function(){var t=this.items.filter(function(t){return!t.isDone});t&&0!==t.length?(this.current=t[v()(0,t.length-1)],this.current.isDone=!0,this.hidden=[].concat(s()(new o.a(d()(this.current.translations).reduce(function(t,n){var e=l()(n,2),r=(e[0],e[1]);return t.concat(u()(r))},[])))).filter(function(t){return!" -,’“”".includes(t)}),this.updateTexts()):this.current=this.texts=null},reveal:function(){this.hidden[v()(0,this.hidden.length-1)]=null,this.hidden=this.hidden.filter(function(t){return t>""}),this.updateTexts()},revealAll:function(){this.hidden=[],this.updateTexts()}}}},"22B7":function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},"4WTo":function(t,n,e){var r=e("NWt+");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},"5PlU":function(t,n,e){var r=e("RY/4"),o=e("dSzd")("iterator"),i=e("/bQp");t.exports=e("FeBl").isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(r(n))}},"5zde":function(t,n,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},"6MiT":function(t,n,e){var r=e("aCM0"),o=e("UnEC"),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},"7Doy":function(t,n,e){var r=e("EqjI"),o=e("7UMu"),i=e("dSzd")("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},"7Mjc":function(t,n){var e=Math.floor,r=Math.random;t.exports=function(t,n){return t+e(r()*(n-t+1))}},"9Bbf":function(t,n,e){"use strict";var r=e("kM2E");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},"9C8M":function(t,n,e){"use strict";var r=e("evD5").f,o=e("Yobk"),i=e("xH/j"),s=e("+ZMJ"),a=e("2KxR"),u=e("NWt+"),c=e("vIB/"),l=e("EGZi"),f=e("bRrM"),d=e("+E39"),p=e("06OY").fastKey,v=e("LIJb"),h=d?"_s":"size",y=function(t,n){var e,r=p(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var l=t(function(t,r){a(t,l,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&u(r,e,t[c],t)});return i(l.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var e=v(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[h]--}return!!r},forEach:function(t){v(this,n);for(var e,r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(v(this,n),t)}}),d&&r(l.prototype,"size",{get:function(){return v(this,n)[h]}}),l},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=p(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){c(t,n,function(t,e){this._t=v(t,n),this._k=e,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,l(1))},e?"entries":"values",!e,!0),f(n)}}},ALrJ:function(t,n,e){var r=e("+ZMJ"),o=e("MU5D"),i=e("sB3e"),s=e("QRG4"),a=e("oeOm");t.exports=function(t,n){var e=1==t,u=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f,p=n||a;return function(n,a,v){for(var h,y,b=i(n),x=o(b),g=r(a,v,3),_=s(x.length),m=0,C=e?p(n,_):u?p(n,0):void 0;_>m;m++)if((d||m in x)&&(y=g(h=x[m],m,b),t))if(e)C[m]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:C.push(h)}else if(l)return!1;return f?-1:c||l?l:C}}},BDhv:function(t,n,e){var r=e("kM2E");r(r.P+r.R,"Set",{toJSON:e("m9gC")("Set")})},Gu7T:function(t,n,e){"use strict";n.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(e("c/Tr"));n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,r.default)(t)}},HpRW:function(t,n,e){"use strict";var r=e("kM2E"),o=e("lOnJ"),i=e("+ZMJ"),s=e("NWt+");t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,a,u=arguments[1];return o(this),(n=void 0!==u)&&o(u),void 0==t?new this:(e=[],n?(r=0,a=i(u,arguments[2],2),s(t,!1,function(t){e.push(a(t,r++))})):s(t,!1,e.push,e),new this(e))}})}},LIJb:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},NkRn:function(t,n,e){var r=e("TQ3y").Symbol;t.exports=r},Rh28:function(t,n){var e=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}},TQ3y:function(t,n,e){var r=e("blYT"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},UnEC:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},W3Iv:function(t,n,e){t.exports={default:e("wEtr"),__esModule:!0}},XPuf:function(t,n,e){var r=e("7Mjc"),o=e("zBOP"),i=e("sBat"),s=parseFloat,a=Math.min,u=Math.random;t.exports=function(t,n,e){if(e&&"boolean"!=typeof e&&o(t,n,e)&&(n=e=void 0),void 0===e&&("boolean"==typeof n?(e=n,n=void 0):"boolean"==typeof t&&(e=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=i(t),void 0===n?(n=t,t=0):n=i(n)),t>n){var c=t;t=n,n=c}if(e||t%1||n%1){var l=u();return a(t+l*(n-t+s("1e-"+((l+"").length-1))),n)}return r(t,n)}},Xd32:function(t,n,e){e("+tPU"),e("zQR9"),t.exports=e("5PlU")},YpWe:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container-fluid pt-header"},[t.texts?e("div",{staticClass:"row"},[t._l(t.texts,function(n){return e("div",{staticClass:"col-12 pt-4 text-center"},[e("div",{staticClass:"card",class:t.cardClass},[e("div",{staticClass:"card-block"},[e("samp",{staticClass:"card-title display-3",staticStyle:{"letter-spacing":"0.1em"}},t._l(n,function(n){return e("mark",{staticClass:"d-inline-block mx-2 my-2"},[t._v("\n              "+t._s(n)+"\n            ")])}),0)])])])}),e("div",{staticClass:"col-12 pt-4 text-center"},[e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.reveal}},[e("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.revealAll}},[e("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),e("button",{staticClass:"btn btn-secondary btn-lg mx-1",attrs:{type:"button"},on:{click:t.next}},[e("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])])],2):e("div",{staticClass:"row"},[t._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-12 pt-4 text-center"},[n("h1",[this._v("No more!")])])}]};n.a=o},ZGh9:function(t,n){var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}},aCM0:function(t,n,e){var r=e("NkRn"),o=e("uLhX"),i=e("+66z"),s="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:u&&u in Object(t)?o(t):i(t)}},bGc4:function(t,n,e){var r=e("gGqR"),o=e("Rh28");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},blYT:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e("DuR2"))},"c/Tr":function(t,n,e){t.exports={default:e("5zde"),__esModule:!0}},d7EF:function(t,n,e){"use strict";n.__esModule=!0;var r=i(e("us/S")),o=i(e("BO1k"));function i(t){return t&&t.__esModule?t:{default:t}}n.default=function(){return function(t,n){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,n){var e=[],r=!0,i=!1,s=void 0;try{for(var a,u=(0,o.default)(t);!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){i=!0,s=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw s}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},fBQ2:function(t,n,e){"use strict";var r=e("evD5"),o=e("X8DO");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},gGqR:function(t,n,e){var r=e("aCM0"),o=e("yCNF"),i="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var n=r(t);return n==s||n==a||n==i||n==u}},gSvA:function(t,n,e){var r=e("kM2E"),o=e("mbce")(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},ioQ5:function(t,n,e){e("HpRW")("Set")},kxzG:function(t,n,e){var r=e("yCNF"),o=e("6MiT"),i=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var e=u.test(t);return e||c.test(t)?l(t.slice(2),e?2:8):a.test(t)?i:+t}},lHA8:function(t,n,e){t.exports={default:e("pPW7"),__esModule:!0}},m9gC:function(t,n,e){var r=e("RY/4"),o=e("4WTo");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},mbce:function(t,n,e){var r=e("+E39"),o=e("lktj"),i=e("TcQ7"),s=e("NpIQ").f;t.exports=function(t){return function(n){for(var e,a=i(n),u=o(a),c=u.length,l=0,f=[];c>l;)e=u[l++],r&&!s.call(a,e)||f.push(t?[e,a[e]]:a[e]);return f}}},oNmr:function(t,n,e){e("9Bbf")("Set")},oeOm:function(t,n,e){var r=e("7Doy");t.exports=function(t,n){return new(r(t))(n)}},pPW7:function(t,n,e){e("M6a0"),e("zQR9"),e("+tPU"),e("ttyz"),e("BDhv"),e("oNmr"),e("ioQ5"),t.exports=e("FeBl").Set},qo66:function(t,n,e){"use strict";var r=e("7KvD"),o=e("kM2E"),i=e("06OY"),s=e("S82l"),a=e("hJx8"),u=e("xH/j"),c=e("NWt+"),l=e("2KxR"),f=e("EqjI"),d=e("e6n0"),p=e("evD5").f,v=e("ALrJ")(0),h=e("+E39");t.exports=function(t,n,e,y,b,x){var g=r[t],_=g,m=b?"set":"add",C=_&&_.prototype,k={};return h&&"function"==typeof _&&(x||C.forEach&&!s(function(){(new _).entries().next()}))?(_=n(function(n,e){l(n,_,t,"_c"),n._c=new g,void 0!=e&&c(e,b,n[m],n)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in C&&(!x||"clear"!=t)&&a(_.prototype,t,function(e,r){if(l(this,_,t),!n&&x&&!f(e))return"get"==t&&void 0;var o=this._c[t](0===e?0:e,r);return n?this:o})}),x||p(_.prototype,"size",{get:function(){return this._c.size}})):(_=y.getConstructor(n,t,b,m),u(_.prototype,e),i.NEED=!0),d(_,t),k[t]=_,o(o.G+o.W+o.F,k),x||y.setStrong(_,t,b),_}},qyJz:function(t,n,e){"use strict";var r=e("+ZMJ"),o=e("kM2E"),i=e("sB3e"),s=e("msXi"),a=e("Mhyx"),u=e("QRG4"),c=e("fBQ2"),l=e("3fs2");o(o.S+o.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,f,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,b=0,x=l(d);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==x||p==Array&&a(x))for(e=new p(n=u(d.length));n>b;b++)c(e,b,y?h(d[b],b):d[b]);else for(f=x.call(d),e=new p;!(o=f.next()).done;b++)c(e,b,y?s(f,h,[o.value,b],!0):o.value);return e.length=b,e}})},sBat:function(t,n,e){var r=e("kxzG"),o=1/0,i=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},ttyz:function(t,n,e){"use strict";var r=e("9C8M"),o=e("LIJb");t.exports=e("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},uLhX:function(t,n,e){var r=e("NkRn"),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(n?t[a]=e:delete t[a]),o}},"us/S":function(t,n,e){t.exports={default:e("Xd32"),__esModule:!0}},wEtr:function(t,n,e){e("gSvA"),t.exports=e("FeBl").Object.entries},yCNF:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},zBOP:function(t,n,e){var r=e("22B7"),o=e("bGc4"),i=e("ZGh9"),s=e("yCNF");t.exports=function(t,n,e){if(!s(e))return!1;var a=typeof n;return!!("number"==a?o(e)&&i(n,e.length):"string"==a&&n in e)&&r(e[n],t)}}});