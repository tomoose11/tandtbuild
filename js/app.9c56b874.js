(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1fee934d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tandtbuild/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"08b5":function(e,t,a){"use strict";a("dfb4")},"14a7":function(e,t,a){"use strict";a("83f8")},"2dfe":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._v(" Welcome to TandTs Sandbox ")])},n=[]},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("5c0b"),a("2877")),s={},c=Object(o["a"])(s,n,i,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=a("bb51"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about",on:{click:e.closeMenu}},[e.chosenPlayer==e.activePlayer||e.showPlayerSelect?e._e():a("div",{staticClass:"cover position-absolute h-100 w-100 text-right"},[a("div",[e._v("player "+e._s(1==e.chosenPlayer?2:1)+" is moving, please wait...")])]),a("div",{staticClass:"reset position-absolute p-3 text-left"},[a("button",{on:{click:e.resetGrid}},[e._v("Reset Grid")]),a("div",{class:"active-player pt-3 "+(e.vibrate?"vibrate":"")},[e._v(e._s(e.playerStatusMessage))])]),e.showPlayerSelect?a("div",{staticClass:"player-select-cover position-absolute h-100 w-100 d-flex justify-content-center align-items-center"},[a("div",{staticClass:"player-select"},[a("div",[e._v(e._s(e.playersInfo))]),"Sorry, This room is already full! You're welcome to spectate"!=e.playersInfo?a("ul",{staticClass:"player-hex d-flex justify-content-center"},e._l(e.playersArray,(function(t,r){return a("li",{key:r},[t?e._e():a("div",{class:"d-flex align-items-center justify-content-center hexagon hex-background-p"+(r+1),on:{click:function(){return e.selectPlayer(r)}}},[e._v(" player"+e._s(r+1)+" ")])])})),0):e._e()])]):e._e(),a("SlideOutMenu"),a("button",{staticClass:"mb-4",on:{click:e.endTurn}},[e._v("End turn")]),a("div",{staticClass:"game-wrapper d-flex justify-content-between align-items-center"},[a("Player",{attrs:{playerNumber:1}}),a("Board"),a("Player",{attrs:{playerNumber:2}})],1)],1)},f=[],v=a("5530"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"board-wrapper d-flex justify-content-center",on:{click:e.closeMenu}},[a("ul",{staticClass:"clear",attrs:{id:"grid"}},e._l(e.grid,(function(t,r){return a("li",{key:r},[a("div",{class:"hexagon hex-background-p"+t.owner+" d-flex justify-content-center align-items-center",on:{click:function(){return e.openMenu(t)}}},[a("div",{staticClass:"hex-details-wrapper position-relative d-flex justify-content-center align-items-center"},[e.activeHex.index==r?a("div",{staticClass:"position-absolute active-marker"}):e._e(),t.owner?a("div",{class:"hex-details black position-absolute"},[a("i",{class:t.icon}),a("div",{staticClass:"em-0-8"},[e._v("res: "+e._s(t.residential))]),a("div",{staticClass:"em-0-8"},[e._v("com: "+e._s(t.commercial))])]):e._e()])])])})),0)])},y=[],h={name:"Board",data:function(){return{read:"readit"}},methods:{openMenu:function(e){this.$store.commit("setActiveHex",e),this.$store.commit("setShowSlideOutMenu",!0)},closeMenu:function(e){e.target.classList.contains("hexagon")||this.$store.commit("setShowSlideOutMenu",!1)}},computed:{grid:function(){return this.$store.getters.grid},activeHex:function(){return this.$store.getters.activeHex}},props:{}},b=h,g=(a("14a7"),Object(o["a"])(b,m,y,!1,null,"51331e12",null)),x=g.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"position-absolute slide-out-wrapper"},[a("div",{class:"slide-out "+(e.showSlideOutMenu&&e.chosenPlayer==e.activePlayer?"slide":"")},[a("h4",{staticClass:"pt-4"},[e._v("District: "+e._s(e.activeHex.name))]),a("p",[e._v("Type: "+e._s(e.activeHex.type))]),a("p",[e._v("Income: "+e._s(e.activeHex.income))]),a("p",[e._v("Commercial value: "+e._s(e.activeHex.commercial))]),a("p",[e._v("Population: "+e._s(e.activeHex.population))]),a("p",[e._v("Residential value: "+e._s(e.activeHex.residential))]),a("div",{staticClass:"d-flex flex-column align-items-center"},[a("HexButton",{attrs:{data:{type:"residential",icon:"fa fa-home",price:3}}}),a("HexButton",{attrs:{data:{type:"industrial",icon:"fa fa-industry",price:3}}}),a("HexButton",{attrs:{data:{type:"park",icon:"fa fa-tree",price:6}}}),a("HexButton",{attrs:{data:{type:"commercial",icon:"fa fa-dollar-sign",price:8}}})],1)])])},w=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"border-hex-button"},[a("div",{staticClass:"border-hex-button-inner"},[a("div",{staticClass:"hex-button"},[a("div",{staticClass:"hex-button-inner",on:{click:function(){return e.updateGrid(e.data.type)}}},[a("i",{class:e.data.icon+" pr-2"}),e._v(" "+e._s(e.data.price)+" ")])])])])},H=[],O=a("359c");function S(e){for(var t={},a=0;a<e*e;a++)t[a]={name:O.address.streetName(),type:"empty",index:a,commercial:0,residential:0,owner:0,icon:"",income:0,population:0};return t}function $(e,t){return{topleft:e-9+t,topRight:e-8+t,left:e-1,right:e+1,bottomLeft:e+7+t,bottomRight:e+8+t}}function C(e,t,a,r,n,i,o,s,c){return{type:e,cost:t,commercialValue:a,residentialValue:r,neighbourCommercialValue:n,neighbourResidentialValue:i,icon:o,income:s,population:c}}var M={industrial:C("industrial",3,0,0,1,-1,"fa fa-industry",1,0),park:C("park",6,0,0,0,1,"fa fa-tree",-1,0),residential:C("residential",3,0,1,1,1,"fa fa-home",0,0),commercial:C("commercial",8,0,0,0,0,"fas fa-dollar-sign",0,0)},j={name:"HexButton",props:{data:Object},methods:{updateGrid:function(e){var t=Math.floor(this.activeHex.index/this.rows)%2==0?0:1,a=$(this.activeHex.index,t);this.$store.commit("setGridAfterHexBuild",{index:this.activeHex.index,neighbouringHexIndexes:a,type:M[e]})}},computed:{activeHex:function(){return this.$store.getters.activeHex},rows:function(){return this.$store.getters.rows}}},k=j,A=Object(o["a"])(k,P,H,!1,null,null,null),T=A.exports,E={components:{HexButton:T},name:"SlideOutMenu",computed:{showSlideOutMenu:function(){return this.$store.getters.showSlideOutMenu},activeHex:function(){return this.$store.getters.activeHex},grid:function(){return this.$store.getters.grid},activePlayer:function(){return this.$store.getters.activePlayer},chosenPlayer:function(){return this.$store.getters.chosenPlayer}}},G=E,N=(a("ac4a"),Object(o["a"])(G,_,w,!1,null,"37ea4b0f",null)),B=N.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"p"+(1==e.playerNumber?"l":"r")+"-5"},[e.activePlayer==e.playerNumber?a("i",{staticClass:"fa fa-caret-down em-2-5 "}):e._e(),a("div",{class:"p"+e.playerNumber},[e._v("Player "+e._s(e.playerNumber))]),a("div",{class:""},[e._v("Population "+e._s(e.playerData[e.playerNumber].population))]),a("div",{class:""},[e._v("Wealth "+e._s(e.playerData[e.playerNumber].wealth))]),a("div",{class:""},[e._v("Income "+e._s(e.playerData[e.playerNumber].income))])])},D=[],L=(a("a9e3"),{name:"Player",props:{playerNumber:Number},computed:{playerData:function(){return this.$store.getters.players},activePlayer:function(){return this.$store.getters.activePlayer}}}),R=L,V=(a("edf7"),Object(o["a"])(R,I,D,!1,null,"0e7ea01c",null)),U=V.exports,Y=a("2591"),J={grid:S(8),chosenPlayer:null,showSlideOutMenu:!1,activeHex:{name:"initial",type:"empty",index:0,commercial:0,residential:0,owner:0,icon:"",income:0,population:0},rows:8,activePlayer:1,players:{1:{population:0,wealth:20,income:0},2:{population:0,wealth:20,income:0}}},W={name:"Hexaboard",components:{Board:x,SlideOutMenu:B,Player:U},computed:{chosenPlayer:function(){return this.$store.getters.chosenPlayer},playerStatusMessage:function(){return this.activePlayer==this.chosenPlayer?"Your Move":"Player ".concat(this.activePlayer," to move")},activePlayer:function(){return this.$store.getters.activePlayer},playersInfo:function(){var e=[];for(var t in this.playersArray)this.playersArray[t]||e.push(t);return 0==e.length?"Sorry, This room is already full! You're welcome to spectate":1==e.length?"1 player remaining":"Please choose a player"}},data:function(){return{connected_users:0,stop:0,playersArray:[],showPlayerSelect:!0,vibrate:!1}},mounted:function(){var e=this,t=Y["a"].database().ref("players_list");t.on("value",(function(a){a.val()?e.playersArray=a.val():t.set({0:!1,1:!1})}));var a=Y["a"].database().ref("updateGame");a.on("value",(function(t){var a=t.val();e.$store.replaceState(Object(v["a"])(Object(v["a"])({},a.state),{},{chosenPlayer:e.chosenPlayer})),e.$store.commit("setShowSlideOutMenu",!1),e.vibrate=!0,setTimeout((function(){e.vibrate=!1}),520)}))},methods:{resetGrid:function(){Y["a"].database().ref("updateGame").set({state:J})},selectPlayer:function(e){var t=Y["a"].database().ref("players_list/".concat(e));t.set(!0),this.$store.commit("setChosenPlayer",e+1),this.showPlayerSelect=!1,t.onDisconnect().set(!1)},closeMenu:function(e){(e.target.classList.contains("about")||e.target.classList.contains("game-wrapper"))&&this.$store.commit("setShowSlideOutMenu",!1)},writeUserData:function(){Y["a"].database().ref("updateGame").set({state:this.$store.state})},endTurn:function(){this.$store.commit("setGameAtTurnEnd"),this.writeUserData()}}},q=W,z=(a("08b5"),Object(o["a"])(q,p,f,!1,null,"6b5a9dad",null)),F=z.exports;r["a"].use(u["a"]);var K=[{path:"/",name:"Home",component:d["default"]},{path:"/hexaboard",name:"Hexaboard",component:F},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Q=new u["a"]({routes:K}),X=Q,Z=a("2f62");r["a"].use(Z["a"]);var ee=new Z["a"].Store({state:J,mutations:{setChosenPlayer:function(e,t){e.chosenPlayer=t},setActivePlayer:function(e){e.activePlayer=1==e.activePlayer?2:1},setShowSlideOutMenu:function(e,t){e.showSlideOutMenu=t},setActiveHex:function(e,t){e.activeHex=t},setGridAfterHexBuild:function(e,t){var a=e.players[e.activePlayer],r=e.grid[t.index];if(a.wealth>=t.type.cost&&"empty"==r.type)for(var n in r.icon=t.type.icon,r.owner=e.activePlayer,r.type=t.type.type,r.residential+=t.type.residentialValue,a.wealth-=t.type.cost,t.neighbouringHexIndexes)e.grid[t.neighbouringHexIndexes[n]]&&(e.grid[t.neighbouringHexIndexes[n]].residential+=t.type.neighbourResidentialValue,e.grid[t.neighbouringHexIndexes[n]].commercial+=t.type.neighbourCommercialValue)},setGameAtTurnEnd:function(e){var t=0;for(var a in e.grid)e.grid[a].owner==e.activePlayer&&("residential"==e.grid[a].type&&(e.grid[a].residential>e.grid[a].population&&(e.grid[a].population+=1),e.players[e.activePlayer].population+=e.grid[a].population),"commercial"==e.grid[a].type&&e.grid[a].commercial>e.grid[a].income&&(e.grid[a].income=e.grid[a].commercial),t+=e.grid[a].income);e.players[e.activePlayer].income=t,e.players[e.activePlayer].wealth+=e.players[e.activePlayer].income,e.activePlayer=1==e.activePlayer?2:1}},actions:{},modules:{},getters:{chosenPlayer:function(e){return e.chosenPlayer},grid:function(e){return e.grid},showSlideOutMenu:function(e){return e.showSlideOutMenu},activeHex:function(e){return e.activeHex},rows:function(e){return e.rows},players:function(e){return e.players},activePlayer:function(e){return e.activePlayer}}}),te=a("260b"),ae=(a("66ce"),{authDomain:"hexgame-7506f.firebaseapp.com",databaseURL:"https://hexgame-7506f-default-rtdb.europe-west1.firebasedatabase.app/"});te["a"].initializeApp(ae);var re=te["a"].database();r["a"].config.productionTip=!1,new r["a"]({router:X,store:ee,database:re,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"7ad4":function(e,t,a){"use strict";var r=a("9cae"),n=a.n(r);t["default"]=n.a},"83f8":function(e,t,a){},"9c0c":function(e,t,a){},"9c1b":function(e,t,a){},"9cae":function(e,t){},ac4a:function(e,t,a){"use strict";a("9c1b")},bb51:function(e,t,a){"use strict";var r=a("2dfe"),n=a("7ad4"),i=a("2877"),o=Object(i["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},c900:function(e,t,a){},dfb4:function(e,t,a){},edf7:function(e,t,a){"use strict";a("c900")}});
//# sourceMappingURL=app.9c56b874.js.map