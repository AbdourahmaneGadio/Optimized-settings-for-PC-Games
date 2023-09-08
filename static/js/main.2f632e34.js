(()=>{"use strict";var e={2214:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var n=r(5861),a=r(885),i=r(3426),o=r(5004),s=r(6792),l=r(1054),d=r(9385),u=r(229),c=r(2629),f=s.default.create({container:{justifyContent:"center"},horizontal:{flexDirection:"row",justifyContent:"space-around",padding:10}});const g=function(){return(0,c.jsx)(d.default,{style:[f.container,f.horizontal],children:(0,c.jsx)(u.default,{size:"large"})})};var h=r(7375),x=r(5326),p=r(6434),y=r(3757);function j(e){var t=e.actualGame,r=e.onPress,a=(0,c.jsx)(y.default,{name:"play",size:32,style:m.playButton,onPress:function(){return console.log("video press")}});!function(){var e=(0,n.default)((function*(){yield fetch("https://rawg.io/api/games/3498/movies?key=xxxxxxxxxx").then((function(e){return e.json()})).then((function(e){var t=e.results[0].data[480];setVideo(t)})).catch((function(e){console.log(e)}))}))}();return(0,c.jsx)(d.default,{children:(0,c.jsx)(x.default,{onPress:function(){return r(t.slug)},children:(0,c.jsx)(h.LinearGradient,{colors:["#04803d","#6ea416","#dad600"],style:m.container,children:(0,c.jsxs)(d.default,{children:[(0,c.jsx)(d.default,{style:m.containerTitle,children:(0,c.jsx)(l.default,{children:t.name})}),(0,c.jsx)(d.default,{style:m.imageContainer,children:(0,c.jsx)(p.default,{source:{uri:t.background_image},style:m.imageCover,resizeMode:"cover",children:a})})]})})},t.id)})}var m=s.default.create({container:{backgroundColor:"lightgrey",alignItems:"center",padding:30,justifyContent:"flex-start",borderRadius:30,cursor:"pointer",marginTop:10,marginBottom:10},containerTitle:{padding:10,backgroundColor:"white",borderRadius:18,marginTop:10,marginBottom:10},imageContainer:{width:300,height:200,borderRadius:20,overflow:"hidden"},imageCover:{width:"100%",height:"100%",flex:1,justifyContent:"center",alignItems:"center"},playButton:{backgroundColor:"grey",borderRadius:40,padding:5}});const b=function(e){var t=e.gameResults,r=e.onPress;return(0,c.jsxs)(d.default,{children:[(0,c.jsx)(l.default,{children:"Results : "}),t&&t.map&&t.map((function(e,t){return(0,c.jsx)(j,{actualGame:e,onPress:r},t)}))]})};var v=r(6808),w=r(8294),C=r(6591);const k=function(e){var t=e.onPress,r=e.onChangeText,n=e.searchActive,a=e.onPressReset;return(0,c.jsx)(d.default,{style:O.container,children:(0,c.jsxs)(d.default,{style:n?O.searchBar__clicked:O.searchBar__unclicked,children:[(0,c.jsx)(C.default,{style:n?O.input__clicked:O.input__unclicked,placeholder:"Search the game's title",onChangeText:r}),n&&(0,c.jsx)(v.default,{name:"search",size:20,color:"black",style:{marginLeft:10,marginRight:10},onPress:t}),n&&(0,c.jsx)(w.default,{name:"cross",size:20,color:"black",style:{padding:1,marginLeft:10,marginRight:10},onPress:a})]})})};var O=s.default.create({container:{margin:15,justifyContent:"center",alignItems:"center",flexDirection:"row",width:"80%"},searchBar__unclicked:{padding:10,flexDirection:"row",width:"95%",backgroundColor:"#d9dbda",borderRadius:15,alignItems:"center",borderColor:"yellow",borderWidth:2},searchBar__clicked:{padding:10,flexDirection:"row",width:"80%",backgroundColor:"#d9dbda",borderRadius:15,alignItems:"center",justifyContent:"space-evenly",borderColor:"yellow",borderWidth:2},input__unclicked:{fontSize:20,width:"100%",backgroundColor:"white",borderRadius:15,padding:10},input__clicked:{fontSize:20,width:"70%",backgroundColor:"white",borderRadius:15,padding:10}}),_=r(3693),P=r(112);function S(e){var t=e.gameSelected,r=(0,o.useState)({gameData:[],settingsName:[],settingsOptions:[],isLoading:!1}),i=(0,a.default)(r,2),s=i[0],u=i[1],f=(0,o.useState)(!1),h=(0,a.default)(f,2),x=h[0],p=h[1];return(0,o.useEffect)((function(){u({isLoading:!0});var e=function(){var e=(0,n.default)((function*(){try{var e=yield fetch(`https://raw.githubusercontent.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/master/gamesData/${t}.json`),r=yield e.json(),n=void 0!==(yield r)?r:[],a=function(e){var t=[];return Object.keys(e).map((function(e){t.push(e)})),t}(n),i=function(e){var t=[];return Object.values(e).map((function(e){t.push(e)})),t}(n);u({gameData:n,settingsName:a,settingsOptions:i,isLoading:!1})}catch(o){u({isLoading:!1})}}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.jsxs)(d.default,{children:[s.isLoading&&(0,c.jsx)(g,{}),!s.isLoading&&null!=s.gameData&&(0,c.jsx)(d.default,{children:(0,c.jsx)(P.Table,{style:{flexDirection:"row"},borderStyle:{borderWidth:1},children:(0,c.jsx)(P.TableWrapper,{style:{width:500},children:(0,c.jsxs)(P.TableWrapper,{style:{flexDirection:"row"},children:[(0,c.jsx)(P.Col,{data:s.settingsName,style:T.title,heightArr:[30,30,30,30],textStyle:T.titleText}),(0,c.jsx)(P.Col,{data:s.settingsOptions,style:T.title,heightArr:[30,30,30,30],textStyle:T.titleText})]})})})}),!s.isLoading&&null==s.gameData&&!x&&(0,c.jsxs)(d.default,{children:[(0,c.jsx)(l.default,{children:"No settings found for this game."}),(0,c.jsx)(_.default,{title:"Add settings",onPress:function(){p(!0)}})]})]})}var T=s.default.create({title:{flex:2,backgroundColor:"#f6f8fa"},titleText:{textAlign:"center"}});function R(){var e=(0,o.useState)(""),t=(0,a.default)(e,2),r=t[0],s=t[1],u=(0,o.useState)(!1),f=(0,a.default)(u,2),h=f[0],x=f[1],p=(0,o.useState)(!1),y=(0,a.default)(p,2),j=y[0],m=y[1],v=(0,o.useState)([]),w=(0,a.default)(v,2),C=w[0],O=w[1],_=(0,o.useState)(),P=(0,a.default)(_,2),T=P[0],R=P[1],z=function(){var e=(0,n.default)((function*(e){e.preventDefault(),m(!0);var t=r.split(" ").join("-").toLowerCase();O([]),yield fetch(`https://rawg.io/api/games?search=${t}&key=xxxxxxxxxx`).then((function(e){return e.json()})).then((function(e){var t=e.results;O(void 0===t?[]:t)})).catch((function(){O("error")})),s(""),m(!1)}));return function(t){return e.apply(this,arguments)}}();return(0,c.jsxs)(d.default,{style:D.container,children:[(0,c.jsx)(l.default,{children:"Optimized settings for PC Games"}),(0,c.jsx)(k,{onPress:z,onChangeText:function(e){x(!0),s(e),R()},searchActive:h,onPressReset:function(){x(!1),s(""),O([]),R()}}),j&&h&&(0,c.jsx)(g,{}),h&&C&&"error"==C?(0,c.jsx)(l.default,{children:"Something wrong happened, try later."}):C.length>0&&(0,c.jsx)(b,{gameResults:C,onPress:function(e){R(),x(!1),O([]),R(e)}}),T&&(0,c.jsx)(S,{gameSelected:T}),(0,c.jsx)(i.default,{style:"auto"})]})}var D=s.default.create({container:{flex:1,backgroundColor:"#D2CACA",alignItems:"center",justifyContent:"center"}})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,r.d(i,o),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[o,s,l]=n,d=0;if(o.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var u=l(r)}for(t&&t(n);d<o.length;d++)i=o[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[637],(()=>r(5530)));n=r.O(n)})();
//# sourceMappingURL=main.2f632e34.js.map