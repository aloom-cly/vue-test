(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"18f0":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-link",use:"icon-link-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-link"><path d="M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z" /><path d="M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z" /><path d="M127.893 37.982h-12.375V12.375H88.706V0h39.187z" /></symbol>'});c.a.add(s);n["default"]=s},"2a3d":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-password",use:"icon-password-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-password"><path d="M108.8 44.322H89.6v-5.36c0-9.04-3.308-24.163-25.6-24.163-23.145 0-25.6 16.881-25.6 24.162v5.361H19.2v-5.36C19.2 15.281 36.798 0 64 0c27.202 0 44.8 15.281 44.8 38.961v5.361zm-32 39.356c0-5.44-5.763-9.832-12.8-9.832-7.037 0-12.8 4.392-12.8 9.832 0 3.682 2.567 6.808 6.407 8.477v11.205c0 2.718 2.875 4.962 6.4 4.962 3.524 0 6.4-2.244 6.4-4.962V92.155c3.833-1.669 6.393-4.795 6.393-8.477zM128 64v49.201c0 8.158-8.645 14.799-19.2 14.799H19.2C8.651 128 0 121.359 0 113.201V64c0-8.153 8.645-14.799 19.2-14.799h89.6c10.555 0 19.2 6.646 19.2 14.799z" /></symbol>'});c.a.add(s);n["default"]=s},"30c3":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-example",use:"icon-example-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-example"><path d="M96.258 57.462h31.421C124.794 27.323 100.426 2.956 70.287.07v31.422a32.856 32.856 0 0 1 25.971 25.97zm-38.796-25.97V.07C27.323 2.956 2.956 27.323.07 57.462h31.422a32.856 32.856 0 0 1 25.97-25.97zm12.825 64.766v31.421c30.46-2.885 54.507-27.253 57.713-57.712H96.579c-2.886 13.466-13.146 23.726-26.292 26.291zM31.492 70.287H.07c2.886 30.46 27.253 54.507 57.713 57.713V96.579c-13.466-2.886-23.726-13.146-26.291-26.292z" /></symbol>'});c.a.add(s);n["default"]=s},"331a":function(e,n){var t={admin:{token:"admin-token"},editor:{token:"editor-token"}},o={"admin-token":{roles:["admin"],introduction:"I am a super administrator",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"admin",password:"admin"},"editor-token":{roles:["editor"],introduction:"I am an editor",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"Normal Editor"}};e.exports=[{url:"/vue-test/user/login",type:"post",response:function(e){var n=e.body.username,o=t[n];return o?{code:2e4,data:o}:{code:60204,message:"Account and password are incorrect."}}},{url:"/vue-test/user/info.*",type:"get",response:function(e){var n=e.query.token,t=o[n];return t?{code:2e4,data:t}:{code:50008,message:"Login failed, unable to get user details."}}},{url:"/vue-test/user/logout",type:"post",response:function(e){return{code:2e4,data:"success"}}}]},"47f1":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-table",use:"icon-table-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-table"><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /></symbol>'});c.a.add(s);n["default"]=s},"4b0f":function(e,n,t){var o=t("6374").default,a=t("448a").default;t("4d63"),t("ac1f"),t("25f0");var r=t("96eb"),c=t("8a60"),s=c.param2Obj,i=t("331a"),u=a(i);function d(){function e(e){return function(n){var t=null;if(e instanceof Function){var o=n.body,a=n.type,c=n.url;t=e({method:a,body:JSON.parse(o),query:s(c)})}else t=e;return r.mock(t)}}r.XHR.prototype.proxy_send=r.XHR.prototype.send,r.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send.apply(this,arguments)};var n,t=o(u);try{for(t.s();!(n=t.n()).done;){var a=n.value;r.mock(new RegExp(a.url),a.type||"get",e(a.response))}}catch(c){t.e(c)}finally{t.f()}}e.exports={mocks:u,mockXHR:d}},"4df5":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-eye",use:"icon-eye-usage",viewBox:"0 0 128 64",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 64" id="icon-eye"><path d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z" /></symbol>'});c.a.add(s);n["default"]=s},"51ff":function(e,n,t){var o={"./dashboard.svg":"f782","./example.svg":"30c3","./eye-open.svg":"d7ec","./eye.svg":"4df5","./form.svg":"eb1b","./link.svg":"18f0","./nested.svg":"dcf8","./password.svg":"2a3d","./table.svg":"47f1","./tree.svg":"93cd","./user.svg":"b3b5"};function a(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="51ff"},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("1da1"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("96cf"),t("b0c0"),t("2b0e")),r=(t("f5df1"),t("5c96")),c=t.n(r),s=(t("0fae"),t("b2d6")),i=t.n(s),u=(t("b20f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),d=[],f={name:"App"},l=f,v=t("2877"),m=Object(v["a"])(l,u,d,!1,null,null,null),h=m.exports,p=t("2f62"),g={token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name}},w=g,b=(t("d3b7"),t("498a"),t("bc3a")),x=t.n(b),y=t("5f87"),k=x.a.create({baseURL:"/prod-api",timeout:5e3});k.interceptors.request.use((function(e){return I.getters.token&&(e.headers["X-Token"]=Object(y["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),k.interceptors.response.use((function(e){var n=e.data;return 2e4!==n.code?(Object(r["Message"])({message:n.message||"Error",type:"error",duration:5e3}),50008!==n.code&&50012!==n.code&&50014!==n.code||r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){I.dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(n.message||"Error"))):n}),(function(e){return console.log("err"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var z=k;function T(e){return z({url:"/vue-test/user/login",method:"post",data:e})}function H(e){return z({url:"/vue-test/user/info",method:"get",params:{token:e}})}function M(){return z({url:"/vue-test/user/logout",method:"post"})}t("3ca3"),t("ddb0");var E=t("8c4f");a["default"].use(E["a"]);var V=[{path:"/login",component:function(){return t.e("chunk-d4014fd6").then(t.bind(null,"9ed6"))},hidden:!0},{path:"/404",component:function(){return t.e("chunk-bfa1d298").then(t.bind(null,"8cdb"))},hidden:!0},{path:"/error",component:function(){return t.e("chunk-2d0a43df").then(t.bind(null,"0636"))},hidden:!0},{path:"/",component:function(){return t.e("chunk-ce5051ea").then(t.bind(null,"2c8d"))},redirect:"/index",children:[{path:"/index",name:"index",component:function(){return t.e("chunk-40493bb6").then(t.bind(null,"7abe"))}}]}],B=function(){return new E["a"]({scrollBehavior:function(){return{y:0}},routes:V})},C=B(),O=E["a"].prototype.push;function _(){var e=B();C.matcher=e.matcher}E["a"].prototype.push=function(e,n,t){return n||t?O.call(this,e,n,t):O.call(this,e).catch((function(e){return e}))};var S=C,j=function(){return{token:Object(y["a"])(),name:"",avatar:""}},A=j(),R={RESET_STATE:function(e){Object.assign(e,j())},SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n},SET_AVATAR:function(e,n){e.avatar=n}},q={login:function(e,n){var t=e.commit,o=n.username,a=n.password;return new Promise((function(e,n){T({username:o.trim(),password:a}).then((function(n){var o=n.data;t("SET_TOKEN",o.token),Object(y["c"])(o.token),e()})).catch((function(e){n(e)}))}))},getInfo:function(e){var n=e.commit,t=e.state;return new Promise((function(e,o){H(t.token).then((function(t){var a=t.data;if(!a)return o("Verification failed, please Login again.");var r=a.name,c=a.avatar;n("SET_NAME",r),n("SET_AVATAR",c),e(a)})).catch((function(e){o(e)}))}))},logout:function(e){var n=e.commit,t=e.state;return new Promise((function(e,o){M(t.token).then((function(){Object(y["b"])(),_(),n("RESET_STATE"),e()})).catch((function(e){o(e)}))}))},resetToken:function(e){var n=e.commit;return new Promise((function(e){Object(y["b"])(),n("RESET_STATE"),e()}))}},N={namespaced:!0,state:A,mutations:R,actions:q};a["default"].use(p["a"]);var L=new p["a"].Store({modules:{user:N},getters:w}),I=L,P=(t("d81d"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isExternal?t("div",e._g({staticClass:"svg-external-icon svg-icon",style:e.styleExternalIcon},e.$listeners)):t("svg",e._g({class:e.svgClass,attrs:{"aria-hidden":"true"}},e.$listeners),[t("use",{attrs:{"xlink:href":e.iconName}})])}),X=[];function U(e){return/^(https?:|mailto:|tel:)/.test(e)}var $={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{isExternal:function(){return U(this.iconClass)},iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"},styleExternalIcon:function(){return{mask:"url(".concat(this.iconClass,") no-repeat 50% 50%"),"-webkit-mask":"url(".concat(this.iconClass,") no-repeat 50% 50%")}}}},J=$,D=(t("68fa"),Object(v["a"])(J,P,X,!1,null,"f9f7fefc",null)),F=D.exports;a["default"].component("svg-icon",F);var K=t("51ff"),W=function(e){return e.keys().map(e)};W(K);var Y=t("323e"),G=t.n(Y);t("a5d8");G.a.configure({showSpinner:!1}),S.beforeEach(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,t,o){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(y["a"])(),!a){e.next=27;break}if("/login"!==n.path){e.next=7;break}o({path:"/"}),G.a.done(),e.next=25;break;case 7:if(c=I.getters.name,!c){e.next=12;break}o(),e.next=25;break;case 12:return e.prev=12,e.next=15,I.dispatch("user/getInfo");case 15:o(),e.next=25;break;case 18:return e.prev=18,e.t0=e["catch"](12),e.next=22,I.dispatch("user/resetToken");case 22:r["Message"].error(e.t0||"Has Error"),o("/login?redirect=".concat(n.path)),G.a.done();case 25:e.next=28;break;case 27:"/login"===n.path||"/error"===n.path?o():(o("/login?redirect=".concat(n.path)),G.a.done());case 28:case"end":return e.stop()}}),e,null,[[12,18]])})));return function(n,t,o){return e.apply(this,arguments)}}()),S.afterEach((function(){G.a.done()}));var Q=t("4b0f"),Z=Q.mockXHR;Z(),a["default"].use(c.a,{locale:i.a}),a["default"].prototype.$axios=x.a,a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:S,store:I,render:function(e){return e(h)}})},"5f87":function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return i}));var o=t("a78e"),a=t.n(o),r="vue_admin_template_token";function c(){return a.a.get(r)}function s(e){return a.a.set(r,e)}function i(){return a.a.remove(r)}},"68fa":function(e,n,t){"use strict";t("e53f")},"8a60":function(e,n,t){function o(e){var n=decodeURIComponent(e.split("?")[1]).replace(/\+/g," ");if(!n)return{};var t={},o=n.split("&");return o.forEach((function(e){var n=e.indexOf("=");if(-1!==n){var o=e.substring(0,n),a=e.substring(n+1,e.length);t[o]=a}})),t}t("ac1f"),t("5319"),t("1276"),t("159b"),e.exports={param2Obj:o}},"93cd":function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-tree",use:"icon-tree-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tree"><path d="M126.713 90.023c.858.985 1.287 2.134 1.287 3.447v29.553c0 1.423-.429 2.6-1.287 3.53-.858.93-1.907 1.395-3.146 1.395H97.824c-1.145 0-2.146-.465-3.004-1.395-.858-.93-1.287-2.107-1.287-3.53V93.47c0-.875.19-1.696.572-2.462.382-.766.906-1.368 1.573-1.806a3.84 3.84 0 0 1 2.146-.657h9.725V69.007a3.84 3.84 0 0 0-.43-1.806 3.569 3.569 0 0 0-1.143-1.313 2.714 2.714 0 0 0-1.573-.492h-36.47v23.149h9.725c1.144 0 2.145.492 3.004 1.478.858.985 1.287 2.134 1.287 3.447v29.553c0 .876-.191 1.696-.573 2.463-.38.766-.905 1.368-1.573 1.806a3.84 3.84 0 0 1-2.145.656H51.915a3.84 3.84 0 0 1-2.145-.656c-.668-.438-1.216-1.04-1.645-1.806a4.96 4.96 0 0 1-.644-2.463V93.47c0-1.313.43-2.462 1.288-3.447.858-.986 1.907-1.478 3.146-1.478h9.582v-23.15h-37.9c-.953 0-1.74.356-2.359 1.068-.62.711-.93 1.56-.93 2.544v19.538h9.726c1.239 0 2.264.492 3.074 1.478.81.985 1.216 2.134 1.216 3.447v29.553c0 1.423-.405 2.6-1.216 3.53-.81.93-1.835 1.395-3.074 1.395H4.29c-.476 0-.93-.082-1.358-.246a4.1 4.1 0 0 1-1.144-.657 4.658 4.658 0 0 1-.93-1.067 5.186 5.186 0 0 1-.643-1.395 5.566 5.566 0 0 1-.215-1.56V93.47c0-.437.048-.875.143-1.313a3.95 3.95 0 0 1 .429-1.15c.19-.328.429-.656.715-.984.286-.329.572-.602.858-.821.286-.22.62-.383 1.001-.493.382-.11.763-.164 1.144-.164h9.726V61.619c0-.985.31-1.833.93-2.544.619-.712 1.358-1.068 2.216-1.068h44.335V39.62h-9.582c-1.24 0-2.288-.492-3.146-1.477a5.09 5.09 0 0 1-1.287-3.448V5.14c0-1.423.429-2.627 1.287-3.612.858-.985 1.907-1.477 3.146-1.477h25.743c.763 0 1.478.246 2.145.739a5.17 5.17 0 0 1 1.573 1.888c.382.766.573 1.587.573 2.462v29.553c0 1.313-.43 2.463-1.287 3.448-.859.985-1.86 1.477-3.004 1.477h-9.725v18.389h42.762c.954 0 1.74.355 2.36 1.067.62.711.93 1.56.93 2.545v26.925h9.582c1.239 0 2.288.492 3.146 1.478z" /></symbol>'});c.a.add(s);n["default"]=s},b20f:function(e,n,t){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},b3b5:function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-user",use:"icon-user-usage",viewBox:"0 0 130 130",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>'});c.a.add(s);n["default"]=s},d7ec:function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-eye-open",use:"icon-eye-open-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-eye-open"><defs><style></style></defs><path d="M512 128q69.675 0 135.51 21.163t115.498 54.997 93.483 74.837 73.685 82.006 51.67 74.837 32.17 54.827L1024 512q-2.347 4.992-6.315 13.483T998.87 560.17t-31.658 51.669-44.331 59.99-56.832 64.34-69.504 60.16-82.347 51.5-94.848 34.687T512 896q-69.675 0-135.51-21.163t-115.498-54.826-93.483-74.326-73.685-81.493-51.67-74.496-32.17-54.997L0 513.707q2.347-4.992 6.315-13.483t18.816-34.816 31.658-51.84 44.331-60.33 56.832-64.683 69.504-60.331 82.347-51.84 94.848-34.816T512 128.085zm0 85.333q-46.677 0-91.648 12.331t-81.152 31.83-70.656 47.146-59.648 54.485-48.853 57.686-37.675 52.821-26.325 43.99q12.33 21.674 26.325 43.52t37.675 52.351 48.853 57.003 59.648 53.845T339.2 767.02t81.152 31.488T512 810.667t91.648-12.331 81.152-31.659 70.656-46.848 59.648-54.186 48.853-57.344 37.675-52.651T927.957 512q-12.33-21.675-26.325-43.648t-37.675-52.65-48.853-57.345-59.648-54.186-70.656-46.848-81.152-31.659T512 213.334zm0 128q70.656 0 120.661 50.006T682.667 512 632.66 632.661 512 682.667 391.339 632.66 341.333 512t50.006-120.661T512 341.333zm0 85.334q-35.328 0-60.33 25.002T426.666 512t25.002 60.33T512 597.334t60.33-25.002T597.334 512t-25.002-60.33T512 426.666z" /></symbol>'});c.a.add(s);n["default"]=s},dcf8:function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-nested",use:"icon-nested-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-nested"><path d="M.002 9.2c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-5.043-3.58-9.132-7.997-9.132S.002 4.157.002 9.2zM31.997.066h95.981V18.33H31.997V.066zm0 45.669c0 5.044 3.58 9.132 7.998 9.132 4.417 0 7.997-4.088 7.997-9.132 0-3.263-1.524-6.278-3.998-7.91-2.475-1.63-5.524-1.63-7.998 0-2.475 1.632-4 4.647-4 7.91zM63.992 36.6h63.986v18.265H63.992V36.6zm-31.995 82.2c0 5.043 3.58 9.132 7.998 9.132 4.417 0 7.997-4.089 7.997-9.132 0-5.044-3.58-9.133-7.997-9.133s-7.998 4.089-7.998 9.133zm31.995-9.131h63.986v18.265H63.992V109.67zm0-27.404c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-3.263-1.524-6.277-3.998-7.909-2.475-1.631-5.524-1.631-7.998 0-2.475 1.632-4 4.646-4 7.91zm31.995-9.13h31.991V91.4H95.987V73.135z" /></symbol>'});c.a.add(s);n["default"]=s},e53f:function(e,n,t){},eb1b:function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-form",use:"icon-form-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-form"><path d="M84.068 23.784c-1.02 0-1.877-.32-2.572-.96a8.588 8.588 0 0 1-1.738-2.237 11.524 11.524 0 0 1-1.042-2.621c-.232-.895-.348-1.641-.348-2.238V0h.278c.834 0 1.622.085 2.363.256.742.17 1.645.575 2.711 1.214 1.066.64 2.363 1.535 3.892 2.686 1.53 1.15 3.453 2.664 5.77 4.54 2.502 2.045 4.494 3.771 5.977 5.178 1.483 1.406 2.618 2.6 3.406 3.58.787.98 1.274 1.812 1.46 2.494.185.682.277 1.278.277 1.79v2.046H84.068zM127.3 84.01c.278.682.464 1.535.556 2.558.093 1.023-.37 2.003-1.39 2.94-.463.427-.88.832-1.25 1.215-.372.384-.696.704-.974.96a6.69 6.69 0 0 1-.973.767l-11.816-10.741a44.331 44.331 0 0 0 1.877-1.535 31.028 31.028 0 0 1 1.737-1.406c1.112-.938 2.317-1.343 3.615-1.215 1.297.128 2.363.405 3.197.83.927.427 1.923 1.173 2.989 2.239 1.065 1.065 1.876 2.195 2.432 3.388zM78.23 95.902c2.038 0 3.752-.511 5.143-1.534l-26.969 25.83H18.037c-1.761 0-3.684-.47-5.77-1.407a24.549 24.549 0 0 1-5.838-3.709 21.373 21.373 0 0 1-4.518-5.306c-1.204-2.003-1.807-4.07-1.807-6.202V16.495c0-1.79.44-3.665 1.32-5.626A18.41 18.41 0 0 1 5.04 5.562a21.798 21.798 0 0 1 5.213-3.964C12.198.533 14.237 0 16.37 0h53.24v15.984c0 1.62.278 3.367.834 5.242a16.704 16.704 0 0 0 2.572 5.179c1.159 1.577 2.665 2.898 4.518 3.964 1.853 1.066 4.078 1.598 6.673 1.598h20.295v42.325L85.458 92.45c1.02-1.364 1.529-2.856 1.529-4.476 0-2.216-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1c-2.409 0-4.448.789-6.116 2.366-1.668 1.577-2.502 3.474-2.502 5.69 0 2.217.834 4.092 2.502 5.626 1.668 1.535 3.707 2.302 6.117 2.302h52.13zM26.1 47.951c-2.41 0-4.449.789-6.117 2.366-1.668 1.577-2.502 3.473-2.502 5.69 0 2.216.834 4.092 2.502 5.626 1.668 1.534 3.707 2.302 6.117 2.302h52.13c2.409 0 4.47-.768 6.185-2.302 1.715-1.534 2.572-3.41 2.572-5.626 0-2.217-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1zm52.407 64.063l1.807-1.663 3.476-3.196a479.75 479.75 0 0 0 4.587-4.284 500.757 500.757 0 0 1 5.004-4.667c3.985-3.666 8.48-7.758 13.485-12.276l11.677 10.741-13.485 12.404-5.004 4.603-4.587 4.22a179.46 179.46 0 0 0-3.267 3.068c-.88.853-1.367 1.322-1.46 1.407-.463.341-.973.703-1.529 1.087-.556.383-1.112.703-1.668.959-.556.256-1.413.575-2.572.959a83.5 83.5 0 0 1-3.545 1.087 72.2 72.2 0 0 1-3.475.895c-1.112.256-1.946.426-2.502.511-1.112.17-1.854.043-2.224-.383-.371-.426-.464-1.151-.278-2.174.092-.511.278-1.279.556-2.302.278-1.023.602-2.067.973-3.132l1.042-3.005c.325-.938.58-1.577.765-1.918a10.157 10.157 0 0 1 2.224-2.941z" /></symbol>'});c.a.add(s);n["default"]=s},f782:function(e,n,t){"use strict";t.r(n);var o=t("e017"),a=t.n(o),r=t("21a1"),c=t.n(r),s=new a.a({id:"icon-dashboard",use:"icon-dashboard-usage",viewBox:"0 0 128 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'});c.a.add(s);n["default"]=s}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);