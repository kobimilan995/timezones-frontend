(function(t){function e(e){for(var s,n,i=e[0],l=e[1],u=e[2],m=0,d=[];m<i.length;m++)n=i[m],r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return a(e)}function o(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navigation-component"),a("div",{staticClass:"container"},[a("router-view")],1),a("notifications",{attrs:{group:"notify",position:"bottom left"}})],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:" navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)]),t.token?a("ul",{staticClass:"navbar-nav my-lg-0"},[a("li",{staticClass:"nav-item",staticStyle:{"padding-top":"8px"}},[a("h5",{staticClass:"mr-4"},[t._v(t._s(t.authUser.first_name)+" "+t._s(t.authUser.last_name)+" - ("+t._s(t.authUser.role_name)+")")])]),"Admin"==t.authUser.role_name?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("Admin dashboard")])],1):t._e(),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])]):a("ul",{staticClass:"navbar-nav my-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])])},i=[],l=(a("ac6a"),a("456d"),{data:function(){return{}},computed:{token:function(){return this.$store.state.auth.token},authUser:function(){return this.$store.state.auth.user}},methods:{logout:function(){var t=this;axios.delete("http://localhost:8000/api/logout").then(function(e){t.$notify({group:"notify",title:"Success",text:e.data.message,type:"success"}),t.removeToken()}).catch(function(e){var a=e.response.data.data;t.$notify({group:"notify",title:"Success",text:a[Object.keys(a)[0]][0],type:"success"}),t.removeToken()})},removeToken:function(){localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),this.$store.commit("auth/SET_TOKEN",""),this.$store.commit("auth/SET_USER",{}),this.$router.push({name:"login"})}}}),u=l,c=a("2877"),m=Object(c["a"])(u,n,i,!1,null,null,null);m.options.__file="Navigation.vue";var d=m.exports,f={name:"app",components:{"navigation-component":d},created:function(){var t=this;axios.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.auth.token,axios.interceptors.response.use(function(t){return t},function(e){return 401==e.response.status?(localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),t.$store.commit("auth/SET_TOKEN",""),t.$store.commit("auth/SET_USER",{}),t.$router.push({name:"login"})):403==e.response.status&&t.$router.push({name:"home"}),Promise.reject(e)})},mounted:function(){var t=this;axios.get("http://localhost:8000/api/gmdate").then(function(e){t.$store.commit("gmt/SET_GMT",moment(e.data.gmdate));var a=t;function s(){a.$store.commit("gmt/INCREMENT_GMT")}setInterval(s,1e3)}).catch(function(t){console.log(t)})},computed:{gmdate:function(){return this.$store.state.gmt.gmt?this.$store.state.gmt.gmt.moment("MMMM Do YYYY, h:mm:ss a"):""}}},p=f,v=Object(c["a"])(p,r,o,!1,null,null,null);v.options.__file="App.vue";var h=v.exports,b=a("8c4f"),g=a("2f62"),j=a("bc3a"),_=a.n(j),y=a("c1df"),k=a.n(y),w=a("ee98"),x=a.n(w),S=(a("ab8b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 offset-md-3"},[a("h4",[t._v("Login")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitLoginRequest(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}),C=[],E={data:function(){return{credentials:{email:"",password:""}}},methods:{submitLoginRequest:function(){var t=this;axios.post("http://localhost:8000/api/login",this.credentials).then(function(e){var a=e.headers.authorization,s=e.data.user;localStorage.setItem("auth-token",a),localStorage.setItem("auth-user",JSON.stringify(s)),t.$store.commit("auth/SET_TOKEN",a),t.$store.commit("auth/SET_USER",e.data.user),axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("auth-token"),t.$router.push({name:"home"}),t.$notify({group:"notify",title:"Success",text:e.data.message,type:"success"})}).catch(function(e){if(console.log(e),e.response.status){var a=e.response.data.data;t.$notify({group:"notify",title:"Error",text:a[Object.keys(a)[0]][0],type:"error"})}})}},computed:{token:function(){return this.$store.state.auth.token}}},$=E,O=Object(c["a"])($,S,C,!1,null,null,null);O.options.__file="Login.vue";var T=O.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h4",{staticClass:"col-md-4 offset-md-3"},[t._v("Registration")]),a("form",{staticClass:" col-md-6 offset-md-3",on:{submit:function(e){return e.preventDefault(),t.submitRegisterRequest(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"first_name"}},[t._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"form-control",attrs:{type:"first_name",id:"first_name","aria-describedby":"first_name",placeholder:"First name",required:""},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"last_name"}},[t._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"last_name",id:"last_name","aria-describedby":"last_name",placeholder:"Last name",required:""},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password_confirmation"}},[t._v("Password Confirmation")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Password confirmation",required:""},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[a("router-link",{attrs:{to:"/login"}},[t._v("Already have an account?")])],1)])])},M=[],N={data:function(){return{user:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}},methods:{submitRegisterRequest:function(){var t=this;axios.post("http://localhost:8000/api/register",this.user).then(function(e){var a=e.data;t.$notify({group:"notify",title:"Success",text:a.message,type:"success"}),t.$router.push({name:"login"})}).catch(function(e){if(400==e.response.status){var a=e.response.data.data;t.$notify({group:"notify",title:"Error",text:a[Object.keys(a)[0]][0],type:"error"})}})}}},I=N,P=Object(c["a"])(I,z,M,!1,null,null,null);P.options.__file="Register.vue";var q=P.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Home")]),a("p",[t._v(t._s(t.gmdate))])])},Y=[],H={computed:{gmdate:function(){return this.$store.state.gmt.gmtHuman?this.$store.state.gmt.gmtHuman:""}},created:function(){axios.get("http://localhost:8000/api/test").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},U=H,A=Object(c["a"])(U,R,Y,!1,null,null,null);A.options.__file="Home.vue";var D=A.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("admin dashboard")])},J=[],G={created:function(){axios.get("http://localhost:8000/api/admin/test").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},K=G,F=Object(c["a"])(K,L,J,!1,null,null,null);F.options.__file="Dashboard.vue";var B=F.exports,Q=[{path:"/",component:D,name:"home",meta:{requiresAuth:!0}},{path:"/login",component:T,name:"login",meta:{guest:!1}},{path:"/register",component:q,name:"register",meta:{guest:!0}},{path:"/admin",component:B,name:"admin",meta:{admin:!0}}],V=Q,W={namespaced:!0,state:{token:localStorage.getItem("auth-token")?localStorage.getItem("auth-token"):"",user:localStorage.getItem("auth-user")?JSON.parse(localStorage.getItem("auth-user")):{}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e}},actions:{}},X={namespaced:!0,state:{gmt:"",gmtHuman:""},mutations:{SET_GMT:function(t,e){t.gmt=e,t.gmtHuman=t.gmt.format("MMMM Do YYYY, h:mm:ss a")},INCREMENT_GMT:function(t){t.gmt=t.gmt.add(1,"seconds"),t.gmtHuman=t.gmt.format("MMMM Do YYYY, h:mm:ss a")}},actions:{}},Z={modules:{auth:W,gmt:X}},tt=Z;window.moment=k.a,s["default"].use(b["a"]),s["default"].use(g["a"]),s["default"].use(x.a),s["default"].config.productionTip=!1;var et=new b["a"]({routes:V});et.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.requiresAuth}))null==localStorage.getItem("auth-token")?a({path:"/login"}):a();else if(t.matched.some(function(t){return t.meta.guest}))null==localStorage.getItem("auth-token")?a():a("/");else if(t.matched.some(function(t){return t.meta.admin})){var s=JSON.parse(localStorage.getItem("auth-user"));"Admin"!=s.role_name?a({name:"home"}):a()}else a()});var at=new g["a"].Store(tt);window.axios=_.a,new s["default"]({router:et,store:at,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.88b64074.js.map