(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{802:function(t,e,n){"use strict";n.r(e);var o=n(25),r=n(26),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(77),n(14));function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},v=Object(h.namespace)("main"),m=function(t){Object(l.a)(n,t);var e=w(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"hasClient",get:function(){return null===this.$chain.client}},{key:"logoutConfirm",get:function(){return this.$t("pages.how_to_stake_cro.logout_confirm")}},{key:"logout",value:function(){confirm(this.logoutConfirm)&&(this.resetStore(),sessionStorage.removeItem("lion_encrypted_wallet"),sessionStorage.removeItem("lion_encrypted_pin"),sessionStorage.removeItem("lion_account_address"))}}]),n}(h.Vue);_([v.Action],m.prototype,"resetStore",void 0);var x=m=_([h.Component],m),y=n(23),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-red-600 mb-32 text-gray-200 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out",attrs:{hidden:t.hasClient},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[n("span",{staticClass:"text-xl"},[t._v("\n    "+t._s(t.$t("pages.how_to_stake_cro.logout_button"))+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},819:function(t,e,n){"use strict";n.r(e);var o=n(26),r=n(25),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(77),n(14));function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},v=Object(h.namespace)("main"),m=function(t){Object(l.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n)}(h.Vue);_([v.Getter],m.prototype,"walletStep",void 0),_([v.Getter],m.prototype,"walletLastHash",void 0),_([v.Mutation],m.prototype,"set",void 0);var x=m=_([h.Component],m),y=n(23),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},["final"===t.walletStep?n("div",{staticClass:"container px-8 flex flex-col w-full flex-wrap justify-start items-start text-left"},[n("h1",{staticClass:"my-10 text-5xl w-full font-bold text-green-700 leading-tight"},[t._v("\n      "+t._s(t.$t("pages.how_to_stake_cro.steps.final.title"))+"\n    ")]),t._v(" "),n("h3",{staticClass:"mb-4"},[t._v("\n      "+t._s(t.$t("pages.how_to_stake_cro.steps.final.desc"))+"\n    ")]),t._v(" "),n("div",{staticClass:"w-full pt-6 pb-6 flex flex-row"},[n("a",{staticClass:"rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",attrs:{href:"https://twitter.com/CryptoLionVal",title:t.$t("pages.how_to_stake_cro.steps.final.buttons.twitter"),target:"_blank"}},[n("svg",{staticClass:"text-gray-700 stroke-2 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48"}},[n("path",{attrs:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}})]),t._v(" "),n("span",{staticClass:"text-l md:text-3xl"},[t._v("\n          "+t._s(t.$t("pages.how_to_stake_cro.steps.final.buttons.twitter"))+"\n        ")])]),t._v(" "),n("a",{staticClass:"rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",attrs:{href:"https://t.me/CryptoLionValidator",title:t.$t("pages.how_to_stake_cro.steps.final.buttons.telegram"),target:"_blank"}},[n("svg",{staticClass:"text-gray-700 stroke-2 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48",height:"48"}},[n("path",{attrs:{id:"telegram-1",d:"M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"}})]),t._v(" "),n("span",{staticClass:"text-l md:text-3xl"},[t._v("\n          "+t._s(t.$t("pages.how_to_stake_cro.steps.final.buttons.telegram"))+"\n        ")])])]),t._v(" "),n("a",{staticClass:"text-gray-500 text-xxs mx-4 md:mx-0 font-bold md:m-8 break-all underline",attrs:{href:t.$chain.config("EXPLORER")+"/tx/"+t.walletLastHash,target:"_blank"}},[t._v("TX: "+t._s(t.walletLastHash))]),t._v(" "),n("div",{staticClass:"flex w-full justify-start"},[n("a",{staticClass:"rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-white mr-2 mb-32 text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out",on:{click:function(e){return e.preventDefault(),t.set({name:"step",value:"wallet"})}}},[n("svg",{staticClass:"text-gray-800 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32",height:"32"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"}})]),t._v(" "),n("span",{staticClass:"text-xl"},[t._v("\n          "+t._s(t.$t("pages.how_to_stake_cro.back_button"))+"\n        ")])]),t._v(" "),n("button-logout")],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonLogout:n(802).default})}}]);