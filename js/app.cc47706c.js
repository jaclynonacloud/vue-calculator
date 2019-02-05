(function(t){function n(n){for(var a,c,s=n[0],i=n[1],u=n[2],d=0,b=[];d<s.length;d++)c=s[d],o[c]&&b.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(n);while(b.length)b.shift()();return e.push.apply(e,u||[]),r()}function r(){for(var t,n=0;n<e.length;n++){for(var r=e[n],a=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(a=!1)}a&&(e.splice(n--,1),t=c(c.s=r[0]))}return t}var a={},o={app:0},e=[];function c(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,n,r){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)c.d(r,a,function(n){return t[n]}.bind(null,a));return r},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/vue-calculator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=i;e.push([0,"chunk-vendors"]),r()})({0:function(t,n,r){t.exports=r("56d7")},"1d37":function(t,n,r){},"56d7":function(t,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("h4",[t._v("Pocket Calculator!")]),a("Calculator"),a("a",{attrs:{href:"https://github.com/jaclynonacloud/vue-calculator"}},[t._v("View on GitHub!")])],1)},e=[],c=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"calculator"},[r("div",{staticClass:"calculator__display",domProps:{innerHTML:t._s(t.getDisplayTotal())}}),r("div",{staticClass:"calculator__buttons"},[r("button",{staticClass:"button empty"}),r("button",{staticClass:"button",on:{click:t.doClear}},[t._v("C")]),r("button",{staticClass:"button empty"}),r("button",{staticClass:"button",class:{current:t.isCurrentOperator("/")},on:{click:function(n){return t.addOperator("/")}}},[t._v("/")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("7")}}},[t._v("7")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("8")}}},[t._v("8")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("9")}}},[t._v("9")]),r("button",{staticClass:"button",class:{current:t.isCurrentOperator("*")},on:{click:function(n){return t.addOperator("*")}}},[t._v("X")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("4")}}},[t._v("4")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("5")}}},[t._v("5")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("6")}}},[t._v("6")]),r("button",{staticClass:"button",class:{current:t.isCurrentOperator("-")},on:{click:function(n){return t.addOperator("-")}}},[t._v("-")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("1")}}},[t._v("1")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("2")}}},[t._v("2")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("3")}}},[t._v("3")]),r("button",{staticClass:"button",class:{current:t.isCurrentOperator("+")},on:{click:function(n){return t.addOperator("+")}}},[t._v("+")]),r("button",{staticClass:"button empty"}),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw("0")}}},[t._v("0")]),r("button",{staticClass:"button",on:{click:function(n){return t.addToRaw(".")}}},[t._v(".")]),r("button",{staticClass:"button",style:t.totalDiv,on:{click:t.doTotal,mouseover:t.colorChange,mouseout:t.colorReturn}},[t._v("=")])])])},s=[],i=r("59ad"),u=r.n(i),l=(r("f559"),{name:"Calculator",data:function(){return{total:"0",current:"0",activeOperator:"",totalDiv:{backgroundColor:"#1F825E"}}},mounted:function(){var t=this;window.addEventListener("keyup",function(n){var r="";switch(n.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":r=n.key,t.addToRaw(r);break;case"_":r="-",t.addOperator(r);break;case"x":r="*",t.addOperator(r);break;case"+":case"-":case"/":case"*":r=n.key,t.addOperator(r);break;case"Enter":t.doTotal();break;case"c":t.doClear();break}})},methods:{getDisplayTotal:function(){var t=this.total;return"0"!=this.current&&(t=this.current),t.length>17&&(t=t.slice(0,17)),t},addToRaw:function(t){this.current+=t,this.current.length>1&&!this.current.startsWith("0.")&&this.current.startsWith("0")&&(this.current=this.current.slice(1))},addOperator:function(t){switch(""==this.activeOperator&&(this.activeOperator=t),this.total=u()(this.total),this.activeOperator){case"+":this.total+=u()(this.current);break;case"-":0==this.total?this.total=u()(this.current):"0"!=this.current&&(this.total-=u()(this.current));break;case"*":0==this.total?this.total=u()(this.current):"0"!=this.current&&(this.total*=u()(this.current));break;case"/":0==this.total?this.total=u()(this.current):"0"!=this.current&&(this.total/=u()(this.current));break}this.current="0",this.activeOperator=t},doTotal:function(){""!=this.activeOperator&&(this.addOperator(this.activeOperator),this.activeOperator="")},doClear:function(){this.total="0",this.current="0",this.activeOperator=""},isCurrentOperator:function(t){return this.activeOperator==t},colorChange:function(){this.totalDiv.backgroundColor="#2E5578"},colorReturn:function(){this.totalDiv.backgroundColor="#1F825E"}}}),d=l,b=(r("73b5"),r("2877")),p=Object(b["a"])(d,c,s,!1,null,"98ce6dd2",null),f=p.exports,h={name:"app",components:{Calculator:f}},v=h,C=(r("5c0b"),Object(b["a"])(v,o,e,!1,null,null,null)),k=C.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,n,r){"use strict";var a=r("5e27"),o=r.n(a);o.a},"5e27":function(t,n,r){},"73b5":function(t,n,r){"use strict";var a=r("1d37"),o=r.n(a);o.a},cf05:function(t,n,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cc47706c.js.map