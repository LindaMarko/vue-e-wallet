(function(e){function t(t){for(var r,o,s=t[0],c=t[1],d=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-e-wallet/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"26ca":function(e,t,a){e.exports=a.p+"img/bitcoin.59fc62ff.svg"},"2bd7":function(e,t,a){},"31e8":function(e,t,a){var r={"./bitcoin.svg":"26ca","./blockchain.svg":"4fc5","./chip.svg":"9e0a","./evil.svg":"737f","./ninja.svg":"385f","./wifi.svg":"ff6b","./wifi_white.svg":"e29c"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="31e8"},3288:function(e,t,a){},"385f":function(e,t,a){e.exports=a.p+"img/ninja.8ab1d756.svg"},4015:function(e,t,a){},"4fc5":function(e,t,a){e.exports=a.p+"img/blockchain.4669ec5c.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},["home"===e.currentView?a("Home",{attrs:{saved:e.savedCards,active:e.activeCard},on:{changeView:e.changeToAddCard,active:e.activateCard,delete:e.deleteCard}}):"add-card"===e.currentView?a("AddCard",{attrs:{saved:e.savedCards},on:{send:e.addNewCard,back:e.changeToHome}}):e._e()],1)},i=[],o=(a("e9c4"),a("4de4"),a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"home"}},[a("h1",[e._v("E-wallet")]),a("p",[e._v("Active card")]),a("Card",{attrs:{vendorName:e.active.vendor,cardNumber:e.active.cardNumber,cardholder:e.active.cardholder,expireMonth:e.active.expireMonth,expireYear:e.active.expireYear}}),e.saved.length>0?a("p",{staticClass:"active-text"},[e._v(" 👇 Click on a card to make it active. ")]):e._e(),this.saved.length>0?a("p",{staticClass:"all-cards"},[e._v("All cards")]):e._e(),a("CardList",{attrs:{saved:e.saved},on:{active:e.activeCard}}),a("button",{on:{click:function(t){return e.$emit("changeView")}}},[e._v("Add new card")]),a("button",{staticClass:"delete-btn",on:{click:function(t){e.showDialog=!0}}},[e._v(" Delete active card ")]),e.showDialog?a("DeleteCardDialog",{on:{close:function(t){e.showDialog=!1},delete:function(t){return e.$emit("delete")}}}):e._e()],1)}),s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"card-container",class:e.bgColor,style:[{zIndex:e.layerIndex},e.getMargin],on:{click:function(t){return e.$emit("active")}}},[e.vendorName?a("img",{staticClass:"vendor-logo",attrs:{src:e.getVendor,alt:"Vendor logo"}}):a("p",{staticClass:"vendor-logo"},[e._v("Vendor logo")]),e._m(0),e.cardNumber?a("p",{staticClass:"card-number"},[e._v(e._s(e.formatCardNumber))]):a("p",{staticClass:"card-number"},[e._v("XXXX XXXX XXXX XXXX")]),a("div",{staticClass:"info"},[a("div",{staticClass:"name"},[a("p",[e._v("Cardholder name")]),e.cardholder?a("p",[e._v(e._s(e.cardholder))]):a("p",[e._v("Firstname lastname")])]),a("div",{staticClass:"date"},[a("p",[e._v("Valid until")]),a("p",[e._v(e._s(e.expireMonth)+" / "+e._s(e.expireYear))])])])])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icons"},[r("img",{staticClass:"wifi",attrs:{src:a("e29c"),alt:"Wifi logo"}}),r("img",{staticClass:"chip",attrs:{src:a("9e0a"),alt:"Chip"}})])}],l=(a("a9e3"),{props:{vendorName:String,cardNumber:String,cardholder:String,expireMonth:String,expireYear:String,layerIndex:Number,margin:Object},computed:{getVendor:function(){return a("31e8")("./".concat(this.vendorName,".svg"))},bgColor:function(){return"bg-".concat(this.vendorName)},getMargin:function(){return 0===this.layerIndex?0:this.margin},formatCardNumber:function(){var e="";if(this.cardNumber)for(var t=0;t<this.cardNumber.length;t++)t%4===0?e=e+" "+this.cardNumber[t]:e+=this.cardNumber[t];return e}}}),u=l,v=(a("8e23"),a("2877")),p=Object(v["a"])(u,c,d,!1,null,"1fbdbf12",null),f=p.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"card-list"},[a("ul",e._l(e.saved,(function(t){return a("Card",{key:t.cardNumber,attrs:{vendorName:t.vendor,cardNumber:t.cardNumber,cardholder:t.cardholder,expireMonth:t.expireMonth,expireYear:t.expireYear,layerIndex:e.saved.indexOf(t),margin:e.cardMargin},on:{active:function(a){return e.$emit("active",t)}}})})),1)])},h=[],C={components:{Card:f},props:["saved"],data:function(){return{cardMargin:{marginTop:"-11rem"}}}},b=C,_=Object(v["a"])(b,m,h,!1,null,"313b8a85",null),g=_.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"fade-layer",on:{click:e.cancelDelete}}),a("dialog",{attrs:{open:""},on:{click:e.cancelDelete}},[a("h2",[e._v("You are going to delete the active card. Are you sure?")]),a("button",{on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes")]),a("button",{staticClass:"cancel",on:{click:e.cancelDelete}},[e._v("Cancel")])])])},x=[],N={methods:{cancelDelete:function(){this.$emit("close")}}},y=N,D=(a("93b7"),Object(v["a"])(y,w,x,!1,null,"535b0140",null)),$=D.exports,k={components:{Card:f,CardList:g,DeleteCardDialog:$},props:["saved","active"],data:function(){return{showDialog:!1,activeCardData:{}}},methods:{activeCard:function(e){this.activeCardData=e,this.$emit("active",this.activeCardData)}}},O=k,j=(a("83fa"),Object(v["a"])(O,o,s,!1,null,"0d027698",null)),M=j.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"new-card"}},[a("h1",[e._v("Add new card")]),a("p",[e._v("New card")]),a("CardForm",{attrs:{saved:e.saved},on:{send:e.sendData,back:function(t){return e.$emit("back")}}})],1)},X=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("Card",{attrs:{vendorName:this.newCard.vendor,cardNumber:this.newCard.cardNumber,cardholder:this.newCard.cardholder,expireMonth:this.newCard.expireMonth,expireYear:this.newCard.expireYear}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.sendData.apply(null,arguments)}}},[a("div",{staticClass:"input"},[e._m(0),e.isCardNumberInvalid?a("p",{staticClass:"data-invalid"},[e._v(" Card number can contain only numbers. ")]):e._e(),e.isCardNumberDuplicate?a("p",{staticClass:"data-invalid"},[e._v(" This card number is already registered. ")]):e._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCard.cardNumber,expression:"newCard.cardNumber"}],attrs:{type:"text",id:"card-number",name:"card-number",maxlength:"16"},domProps:{value:e.newCard.cardNumber},on:{input:[function(t){t.target.composing||e.$set(e.newCard,"cardNumber",t.target.value)},e.validateCardNumber]}})]),a("div",{staticClass:"input"},[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCard.cardholder,expression:"newCard.cardholder"}],attrs:{type:"text",id:"cardholder",name:"cardholder"},domProps:{value:e.newCard.cardholder},on:{input:function(t){t.target.composing||e.$set(e.newCard,"cardholder",t.target.value)}}})]),a("div",{staticClass:"date"},[a("div",{staticClass:"month"},[e._m(2),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCard.expireMonth,expression:"newCard.expireMonth"}],attrs:{name:"month",id:"month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCard,"expireMonth",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"01"}},[e._v("01")]),a("option",{attrs:{value:"02"}},[e._v("02")]),a("option",{attrs:{value:"03"}},[e._v("03")]),a("option",{attrs:{value:"04"}},[e._v("04")]),a("option",{attrs:{value:"05"}},[e._v("05")]),a("option",{attrs:{value:"06"}},[e._v("06")]),a("option",{attrs:{value:"07"}},[e._v("07")]),a("option",{attrs:{value:"08"}},[e._v("08")]),a("option",{attrs:{value:"09"}},[e._v("09")]),a("option",{attrs:{value:"10"}},[e._v("10")]),a("option",{attrs:{value:"11"}},[e._v("11")]),a("option",{attrs:{value:"12"}},[e._v("12")])])]),a("div",{staticClass:"year"},[e._m(3),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCard.expireYear,expression:"newCard.expireYear"}],attrs:{name:"year",id:"year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCard,"expireYear",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"21"}},[e._v("21")]),a("option",{attrs:{value:"22"}},[e._v("22")]),a("option",{attrs:{value:"23"}},[e._v("23")]),a("option",{attrs:{value:"24"}},[e._v("24")]),a("option",{attrs:{value:"25"}},[e._v("25")])])])]),a("div",{staticClass:"input"},[e._m(4),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.newCard.vendor,expression:"newCard.vendor",modifiers:{trim:!0}}],attrs:{name:"vendor",id:"vendor"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCard,"vendor",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"bitcoin"}},[e._v("Bitcoin Inc")]),a("option",{attrs:{value:"ninja"}},[e._v("Ninja Bank")]),a("option",{attrs:{value:"blockchain"}},[e._v("Block Chain Inc")]),a("option",{attrs:{value:"evil"}},[e._v("Evil Corp")])])]),e.isCardDataInvalid?a("p",{staticClass:"data-invalid"},[e._v(" Please fill out every input field. ")]):e._e(),a("button",[e._v("Add card")])]),a("button",{staticClass:"back-btn",on:{click:function(t){return e.$emit("back")}}},[e._v("Back to cards")])],1)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"card-number"}},[e._v("Card number"),a("span",{staticClass:"star"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"cardholder"}},[e._v("Cardholder name"),a("span",{staticClass:"star"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"month"}},[e._v("Month"),a("span",{staticClass:"star"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"year"}},[e._v("Year"),a("span",{staticClass:"star"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"vendor"}},[e._v("Vendor"),a("span",{staticClass:"star"},[e._v("*")])])}],S=a("5530"),A=(a("7db0"),{components:{Card:f},props:["saved"],data:function(){return{isCardDataInvalid:!1,isCardNumberInvalid:!1,isCardNumberDuplicate:!1,cardData:{},newCard:{vendor:"",cardNumber:"",cardholder:"",expireMonth:"",expireYear:""}}},methods:{sendData:function(){""===this.newCard.vendor||""===this.newCard.cardNumber||""===this.newCard.cardholder||""===this.newCard.expireMonth||""===this.newCard.expireYear?this.isCardDataInvalid=!0:(this.$emit("send",Object(S["a"])({},this.newCard)),console.log(this.newCard))},validateCardNumber:function(){var e=this;this.newCard.cardNumber.length<16?this.isCardNumberDuplicate=!1:this.saved.find((function(t){return t.cardNumber===e.newCard.cardNumber}))&&(this.isCardNumberDuplicate=!0)}}}),V=A,P=(a("71a5"),Object(v["a"])(V,Y,I,!1,null,"3f0fead8",null)),T=P.exports,B={components:{CardForm:T},props:["saved"],data:function(){return{newCardData:{}}},methods:{sendData:function(e){this.newCardData=e,this.$emit("send",this.newCardData)}}},F=B,H=(a("d648"),Object(v["a"])(F,E,X,!1,null,"a2ec8e16",null)),J=H.exports;function L(e){localStorage.setItem("currentCards",JSON.stringify(e))}var U={name:"App",components:{Home:M,AddCard:J},data:function(){return{currentView:"home",savedCards:[],activeCard:{}}},created:function(){var e=localStorage.getItem("currentCards");e&&(this.savedCards=JSON.parse(e))},methods:{addNewCard:function(e){this.savedCards.push(e),this.currentView="home",L(this.savedCards)},deleteCard:function(){var e=this;this.savedCards=this.savedCards.filter((function(t){return t.cardNumber!=e.activeCard.cardNumber})),L(this.savedCards),localStorage.removeItem(this.activeCard),this.activeCard={}},changeToAddCard:function(){this.currentView="add-card"},changeToHome:function(){this.currentView="home"},activateCard:function(e){this.activeCard=e}}},z=U,W=(a("5c0b"),Object(v["a"])(z,n,i,!1,null,null,null)),q=W.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"71a5":function(e,t,a){"use strict";a("2bd7")},"737f":function(e,t,a){e.exports=a.p+"img/evil.df34e604.svg"},"83fa":function(e,t,a){"use strict";a("b382")},8412:function(e,t,a){},"8e23":function(e,t,a){"use strict";a("8412")},"93b7":function(e,t,a){"use strict";a("4015")},"9c0c":function(e,t,a){},"9e0a":function(e,t,a){e.exports=a.p+"img/chip.62635ed3.svg"},b382:function(e,t,a){},d648:function(e,t,a){"use strict";a("3288")},e29c:function(e,t,a){e.exports=a.p+"img/wifi_white.2ec5bf33.svg"},ff6b:function(e,t,a){e.exports=a.p+"img/wifi.7500f66f.svg"}});
//# sourceMappingURL=app.08bc77da.js.map