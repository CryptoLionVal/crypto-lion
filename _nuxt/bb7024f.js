(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,9,10],{798:function(t,e,n){var content=n(800);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("ee1b797c",content,!0,{sourceMap:!1})},799:function(t,e,n){"use strict";n(798)},800:function(t,e,n){var r=n(113)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.separator{\n  height:.06rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},804:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n(26),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(77),n(14));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).opened=!1,t}return Object(o.a)(n,[{key:"mounted",value:function(){this.opened=this.readable}}]),n}(h.Vue);m([Object(h.Prop)({default:!1})],w.prototype,"separate",void 0),m([Object(h.Prop)({default:!1})],w.prototype,"readable",void 0),m([Object(h.Prop)({default:""})],w.prototype,"title",void 0),m([Object(h.Prop)({default:""})],w.prototype,"description",void 0);var x=w=m([h.Component],w),y=(n(799),n(23)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-full flex flex-row align-middle font-bold text-xl text-gray-800 px-6 py-2 cursor-pointer",on:{click:function(e){t.opened=!t.opened}}},[n("span",{staticClass:"w-11/12"},[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"w-1/12 text-xl"},[n("svg",{class:{"transform rotate-180":t.opened},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{d:"M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"}})])])]),t._v(" "),t.opened?n("p",{staticClass:"text-gray-800 text-base px-6 mb-5",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.separate?n("div",{staticClass:"separator w-full gradient my-0 mx-6"}):t._e()])}),[],!1,null,null,null);e.default=component.exports},805:function(t,e,n){"use strict";n.r(e);n(77);var r=n(25),o=n(26),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(49),n(266),n(65),n(83),n(91),n(14));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).search="",t}return Object(o.a)(n,[{key:"questions",get:function(){var t=this;return this.$t("sections.f_a_qs.items").filter((function(e){return e.title.includes(t.search)||e.desc.includes(t.search)}))}}]),n}(h.Vue),x=w=m([h.Component],w),y=n(23),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-white py-10",attrs:{id:t.$t("sections.f_a_qs.id")}},[n("div",{staticClass:"container mx-auto px-0 md:px-2 pt-4 pb-12 text-gray-800"},[n("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"},[t._v("\n      "+t._s(t.$t("sections.f_a_qs.title"))+"\n    ")]),t._v(" "),n("div",{staticClass:"w-full pt-2 flex justify-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"border border-primary w-1/2 bg-white appearance-none block rounded-full py-3 px-4 focus:border-blue-500 focus:outline-none",attrs:{placeholder:t.$t("sections.f_a_qs.search_placeholder"),type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex flex-col justify-center pb-4 px-2 md:px-12 my-12"},t._l(t.questions,(function(t,i){return n("card-f-a-q",{key:t.title,attrs:{title:t.title,readable:0===i,separate:t.separate,description:t.desc}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardFAQ:n(804).default})},806:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(25),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(77),n(14));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=Object(h.namespace)("main"),x=function(t){Object(l.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n)}(h.Vue);m([w.Getter],x.prototype,"walletStep",void 0),m([w.Mutation],x.prototype,"set",void 0);var y=x=m([h.Component],x),C=n(23),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{staticClass:"wave-top",attrs:{viewBox:"0 0 1439 147",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(-1.000000, -14.000000)","fill-rule":"nonzero"}},[n("g",{staticClass:"wave",attrs:{fill:"#f8fafc"}},[n("path",{attrs:{d:"M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"}})]),t._v(" "),n("g",{attrs:{transform:"translate(1.000000, 15.000000)",fill:"#FFFFFF"}},[n("g",{attrs:{transform:"translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "}},[n("path",{attrs:{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}}),t._v(" "),n("path",{attrs:{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}}),t._v(" "),n("path",{attrs:{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",opacity:"0.200000003"}})])])])])]),t._v(" "),n("section",{staticClass:"container mx-auto text-center py-6 mb-12"},[n("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center text-white"},[t._v("\n      "+t._s(t.$t("sections.action.title"))+"\n    ")]),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"my-8 text-3xl leading-tight"},[t._v("\n      "+t._s(t.$t("sections.action.subtitle"))+"\n    ")]),t._v(" "),n("a",{staticClass:"mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-8 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",attrs:{hidden:["wallet","final"].includes(t.walletStep),title:t.$t("stake_now.title"),href:"https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495",target:"_blank"}},[t._v("\n      "+t._s(t.$t("stake_now.name"))+"!\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"})])}],!1,null,null,null);e.default=component.exports},813:function(t,e,n){var content=n(824);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("4874bc85",content,!0,{sourceMap:!1})},823:function(t,e,n){"use strict";n(813)},824:function(t,e,n){var r=n(113),o=n(825),l=n(826),c=r((function(i){return i[1]})),f=o(l);c.push([t.i,"/*purgecss start ignore*/\n@-webkit-keyframes side-effect-data-v-7f5f6a6e{\n0%{\n    transform:translateY(0)\n}\n25%{\n    transform:translateX(-60px)\n}\n50%{\n    transform:translateY(-60px)\n}\n75%{\n    transform:translateX(-60px)\n}\nto{\n    transform:translateY(0)\n}\n}\n@keyframes side-effect-data-v-7f5f6a6e{\n0%{\n    transform:translateY(0)\n}\n25%{\n    transform:translateX(-60px)\n}\n50%{\n    transform:translateY(-60px)\n}\n75%{\n    transform:translateX(-60px)\n}\nto{\n    transform:translateY(0)\n}\n}\n.left[data-v-7f5f6a6e]{\n  background-size:cover;\n  background:url("+f+") no-repeat 50%\n}\n.banner-price[data-v-7f5f6a6e]{\n  width:100px;\n  height:100px;\n  border-radius:100%;\n  text-align:center;\n  right:5%;\n  top:100px;\n  z-index:1;\n  -webkit-animation:side-effect-data-v-7f5f6a6e 20s linear infinite;\n          animation:side-effect-data-v-7f5f6a6e 20s linear infinite\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},826:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7YAAAMaAQMAAACI6khOAAAABlBMVEUAAACWlpZijmZgAAAAAnRSTlMAM8lDrC4AAAD6SURBVHja7dSxCQBADAMxk/r3nyejZYO0T0DCE7i49MuPVQBY6TOAPuszgD4D6LM+A+gzgD7rM4A+A6DPAPqszwD6DKDP+gygzwD6rM8A+qzPAPoMoM/6DKDPAPqszwD6DIA+A+izPgPoM4A+6zOAPgPosz4D6LPnAfQZQJ/1GUCfAfRZnwH0GQB9BtBnfQbQZwB91mcAfQbQZ30G0GcA9BlAn/UZQJ8B9FmfAfQZAH0G0Gd9BtBnAH3WZwB9BtBnfQbQZwD0GUCf9RlAnwH0WZ8B9BlAn/UZQJ/1GUCfAfRZnwH0GUCf9RlAnwHQZwB91mcAfQbQ57N9HqrIWJ83w2GnAAAAAElFTkSuQmCC"},836:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n(26),l=n(32),c=n(33),f=n(17),d=n(12),h=(n(37),n(15),n(77),n(14)),v=n(822);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},x=Object(h.namespace)("main"),y=function(t){Object(l.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"head",value:function(){return{title:this.$t("pages.home.title"),meta:[{hid:"description",name:"description",content:this.$t("pages.home.meta_description")}]}}},{key:"created",value:function(){console.log(this.$chain)}}]),n}(h.Vue);w([x.Mutation],y.prototype,"set",void 0);var C=y=w([Object(h.Component)({components:{Carousel:v.Carousel,Slide:v.Slide},layout:"main"})],y),_=(n(823),n(23)),component=Object(_.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"bg-gradient-to-b from-white to-blue-200 flex w-full h-screen hero-section"},[n("div",{staticClass:"w-1/2 h-full left text-theme-primary py-16 grid grid-cols-1 place-items-center"},[n("div",{staticClass:"text-left relative w-9/12"},[t._m(0),t._v(" "),n("h2",{staticClass:"text-5xl leading-tight"},[t._v("Staking Cryptocurrencies")]),t._v(" "),n("h3",{staticClass:"text-5xl leading-tight"},[t._v("No skills?")]),t._v(" "),n("h4",{staticClass:"text-6xl font-semibold leading-tight text-theme-secondary"},[t._v("\n          No Problem!\n        ")]),t._v(" "),n("ul",[n("li",{staticClass:"leading-tight"},[n("svg",{staticClass:"h-5 w-5 float-left text-secondary",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}})]),t._v("\n            Secure & reliable info-structure\n          ")]),t._v(" "),n("li",{staticClass:"leading-tight"},[n("svg",{staticClass:"h-5 w-5 float-left text-secondary",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}})]),t._v("\n            Hundreds of customers\n          ")]),t._v(" "),n("li",{staticClass:"leading-tight"},[n("svg",{staticClass:"h-5 w-5 float-left text-secondary",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}})]),t._v("\n            Several blockchains\n          ")]),t._v(" "),n("li",{staticClass:"leading-tight"},[n("svg",{staticClass:"h-5 w-5 float-left text-secondary",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}})]),t._v("\n            Community driven\n          ")])]),t._v(" "),n("div",{staticClass:"mt-3 grid grid-cols-4"},[n("a",{staticClass:"mx-auto lg:mx-0 font-bold bg-gradient-to-b from-theme-primary to-theme-secondary text-white rounded-full my-2 w-min whitespace-nowrap py-2 text-center px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex flex-row items-center text-sm",attrs:{title:t.$t("stake_now.title"),href:"https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495",target:"_blank"}},[t._v("\n            "+t._s(t.$t("stake_now.name"))+"\n          ")]),t._v(" "),n("div",{staticClass:"ml-2"},[n("NuxtLink",{staticClass:"mx-auto lg:mx-0 font-bold text-theme-secondary rounded-full my-2 w-min whitespace-nowrap py-2 text-center px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex flex-row items-center text-sm",attrs:{to:t.localePath("how-to-stake-cro")}},[n("svg",{staticClass:"h-10 w-10 mr-2 text-theme-primary",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}}),t._v(" "),n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v("\n              Overview "),n("b",{staticClass:"ml-1"},[t._v("03:44 min")])])],1)])])]),t._v(" "),n("div",{staticClass:"bg-green-100 w-1/2 h-full"},[n("carousel",{attrs:{"center-mode":"","adjustable-height":"","per-page":1,"pagination-enabled":!1}},[n("slide",[n("img",{staticClass:"h-screen",attrs:{src:"https://hub.cosmos.network/main/assets/img/cosmos-hub-image.37c9b2c3.jpg",alt:""}})])],1)],1)]),t._v(" "),n("section-f-a-qs"),t._v(" "),n("section-action")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-price absolute bg-gradient-to-b p-4 from-theme-primary to-theme-secondary text-white"},[n("p",{staticClass:"mb-0 pt-1"},[t._v("Up to")]),t._v(" "),n("span",{staticClass:"text-xl font-bold"},[t._v("15%"),n("sup",{staticClass:"text-sm"},[t._v("P.A.")])])])}],!1,null,"7f5f6a6e",null);e.default=component.exports;installComponents(component,{SectionFAQs:n(805).default,SectionAction:n(806).default})}}]);