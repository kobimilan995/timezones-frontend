(function(t){function e(e){for(var a,r,o=e[0],u=e[1],l=e[2],m=0,d=[];m<o.length;m++)r=o[m],n[r]&&d.push(n[r][0]),n[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var u=s[o];0!==n[u]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},3120:function(t,e,s){},"3f40":function(t,e,s){"use strict";var a=s("9be1"),n=s.n(a);n.a},"42d9":function(t,e,s){},"433c":function(t,e,s){"use strict";var a=s("5e4e"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navigation-component"),s("br"),s("div",{staticClass:"container"},[s("router-view")],1),s("notifications",{attrs:{group:"notify",position:"bottom left"}})],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:" navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)]),t.token?s("ul",{staticClass:"navbar-nav my-lg-0"},[s("li",{staticClass:"nav-item",staticStyle:{"padding-top":"8px"}},[s("h5",{staticClass:"mr-4"},[t._v(t._s(t.authUser.first_name)+" "+t._s(t.authUser.last_name)+" - ("+t._s(t.authUser.role_name)+")")])]),"Admin"==t.authUser.role_name?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin_dashboard"}}},[t._v("Admin dashboard")])],1):t._e(),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])]):s("ul",{staticClass:"navbar-nav my-lg-0"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])])},o=[],u={data:function(){return{}},computed:{token:function(){return this.$store.state.auth.token},authUser:function(){return this.$store.state.auth.user}},methods:{logout:function(){this.removeToken(),this.$notify({group:"notify",title:"Success",text:"Sucesfully logged out!",type:"success"})},removeToken:function(){localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),this.$store.commit("auth/SET_TOKEN",""),this.$store.commit("auth/SET_USER",{}),axios.defaults.headers.common["Authorization"]="Bearer ",this.$router.push({name:"login"})}}},l=u,c=s("2877"),m=Object(c["a"])(l,r,o,!1,null,null,null);m.options.__file="Navigation.vue";var d=m.exports,f={name:"app",components:{"navigation-component":d},created:function(){var t=this;this.$store.state.auth.token?axios.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.auth.token:axios.defaults.headers.common["Authorization"]="Bearer ",axios.interceptors.response.use(function(t){return t},function(e){return 401==e.response.status?(localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),t.$store.commit("auth/SET_TOKEN",""),t.$store.commit("auth/SET_USER",{}),axios.defaults.headers.common["Authorization"]="Bearer ",t.$router.push({name:"login"})):403==e.response.status?t.$router.push({name:"show_timezones"}):404==e.response.status&&t.$router.push({name:"not_found"}),Promise.reject(e)})},mounted:function(){var t=this;axios.get(window.api_url+"/api/gmdate").then(function(e){t.$store.commit("gmt/SET_GMT",moment(e.data.gmdate));var s=t;function a(){s.$store.commit("gmt/INCREMENT_GMT")}setInterval(a,1e3)}).catch(function(t){})},computed:{gmdate:function(){return this.$store.state.gmt.gmt?this.$store.state.gmt.gmt.moment("MMMM Do YYYY, h:mm:ss a"):""}}},p=f,_=Object(c["a"])(p,n,i,!1,null,null,null);_.options.__file="App.vue";var h=_.exports,v=s("8c4f"),g=s("2f62"),b=s("bc3a"),y=s.n(b),j=s("c1df"),w=s.n(j),C=s("ee98"),z=s.n(C),x=s("03a5"),$=s.n(x),k=(s("ab8b"),s("c5c5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 offset-md-3"},[s("h4",[t._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitLoginRequest(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}),S=[],E=(s("ac6a"),s("456d"),{data:function(){return{credentials:{email:"",password:""}}},methods:{submitLoginRequest:function(){var t=this;axios.post(window.api_url+"/api/login",this.credentials).then(function(e){var s=e.data.token,a=e.data.user;localStorage.setItem("auth-token",s),localStorage.setItem("auth-user",JSON.stringify(a)),t.$store.commit("auth/SET_TOKEN",s),t.$store.commit("auth/SET_USER",e.data.user),axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("auth-token"),t.$router.push({name:"show_timezones"}),t.$notify({group:"notify",title:"Success",text:e.data.message,type:"success"})}).catch(function(e){if(e.response.status){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})}})}},computed:{token:function(){return this.$store.state.auth.token}}}),T=E,Z=Object(c["a"])(T,k,S,!1,null,null,null);Z.options.__file="Login.vue";var P=Z.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("h4",{staticClass:"col-md-4 offset-md-3"},[t._v("Registration")]),s("form",{staticClass:" col-md-6 offset-md-3",on:{submit:function(e){return e.preventDefault(),t.submitRegisterRequest(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"first_name"}},[t._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"form-control",attrs:{type:"first_name",id:"first_name","aria-describedby":"first_name",placeholder:"First name",required:""},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"last_name"}},[t._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"last_name",id:"last_name","aria-describedby":"last_name",placeholder:"Last name",required:""},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_confirmation"}},[t._v("Password Confirmation")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Password confirmation",required:""},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[s("router-link",{attrs:{to:"/login"}},[t._v("Already have an account?")])],1)])])},O=[],M={data:function(){return{user:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}},methods:{submitRegisterRequest:function(){var t=this;axios.post(window.api_url+"/api/register",this.user).then(function(e){var s=e.data;t.$notify({group:"notify",title:"Success",text:s.message,type:"success"}),t.$router.push({name:"login"})}).catch(function(e){if(400==e.response.status){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})}})}}},U=M,N=Object(c["a"])(U,q,O,!1,null,null,null);N.options.__file="Register.vue";var I=N.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"nav nav-tabs mb-4"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"show_timezones"==t.route||"timezone_show"==t.route},attrs:{to:{name:"show_timezones"}}},[t._v("Time Zones")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"timezone_create"==t.route},attrs:{to:{name:"timezone_create"}}},[t._v("Create new Time Zone")])],1)]),s("router-view")],1)},Y=[],D=(s("7f7f"),{computed:{gmdate:function(){return this.$store.state.gmt.gmtHuman?this.$store.state.gmt.gmtHuman:""},route:function(){return this.$route.name}}}),R=D,A=Object(c["a"])(R,L,Y,!1,null,null,null);A.options.__file="Home.vue";var F=A.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"nav nav-tabs"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"admin_dashboard"==t.route},attrs:{to:{name:"admin_dashboard"}}},[t._v("Dashboard")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"admin_users"==t.route||"show_user"==t.route},attrs:{to:{name:"admin_users"}}},[t._v("Users")])],1)]),s("br"),s("router-view")],1)},H=[],B={created:function(){},computed:{route:function(){return this.$route.name}}},J=B,K=(s("e374"),Object(c["a"])(J,G,H,!1,null,null,null));K.options.__file="AdminPanel.vue";var V=K.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_query,expression:"search_query"}],staticClass:"form-control col-md-4 offset-md-4",attrs:{type:"text",placeholder:"Filter users"},domProps:{value:t.search_query},on:{input:function(e){e.target.composing||(t.search_query=e.target.value)}}}),t.loading?s("div",{staticStyle:{"align-content":"center"}},[s("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"48px"}})]):s("div",[s("br"),s("div",{staticClass:"row"},t._l(t.users,function(t,e){return s("div",{staticClass:"card col-md-3"},[s("user-component",{key:e,attrs:{user:t,loop_index:e}})],1)}))]),s("pagination",{staticClass:"mt-4",attrs:{records:t.usersCount,"per-page":t.perPage},on:{paginate:t.paginateUsers},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},Q=[],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name)+" ("+t._s(t.user.id)+")")]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.user.email)+" - ("+t._s(t.user.role_name)+")")]),s("br"),s("router-link",{staticClass:"btn btn-primary btn-sm mr-2",attrs:{to:{name:"admin_show_user",params:{user_id:t.user.id}}}},[t._v("View more")])],1)},tt=[],et={props:{user:{required:!0},loop_index:{required:!0}},methods:{}},st=et,at=Object(c["a"])(st,X,tt,!1,null,null,null);at.options.__file="User.vue";var nt=at.exports,it=s("ef30"),rt=s.n(it),ot={data:function(){return{users:[],search_query:"",loading:!1,currentPage:1,usersCount:0,lastPage:0,perPage:12}},components:{"user-component":nt,Pagination:rt.a},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;this.loading=!0,axios.get(window.api_url+"/api/admin/users?query="+this.search_query+"&current_page="+this.currentPage+"&per_page="+this.perPage).then(function(e){t.usersCount=e.data.count.count,t.lastPage=Math.ceil(t.usersCount/t.perPage),t.users=e.data.users,t.loading=!1}).catch(function(t){console.log(t)})},paginateUsers:function(t){t!=this.lastPage+1&&0!=t&&(this.currentPage=t,this.fetchUsers())}},watch:{search_query:function(){this.currentPage=1,this.fetchUsers()}}},ut=ot,lt=(s("c3d8"),Object(c["a"])(ut,W,Q,!1,null,null,null));lt.options.__file="Users.vue";var ct=lt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",[t._v("\n        Welcome to admin panel!\n    ")])])}],ft={},pt=ft,_t=Object(c["a"])(pt,mt,dt,!1,null,null,null);_t.options.__file="Dashboard.vue";var ht=_t.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[t._v("Time Zones")])},gt=[],bt={},yt=bt,jt=Object(c["a"])(yt,vt,gt,!1,null,null,null);jt.options.__file="TimeZones.vue";var wt=jt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticStyle:{"align-content":"center"}},[s("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"48px"}})]):s("div",[s("hr"),s("div",{staticClass:" col-md-6 offset-md-3"},[s("router-link",{staticClass:"btn btn-primary float-right",attrs:{to:{name:"admin_users"}}},[t._v("All users")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"first_name"}},[t._v("First Name:")]),t.editing?s("input",{ref:"first_name",staticClass:"form-control",attrs:{type:"first_name",id:"first_name","aria-describedby":"first_name",placeholder:"First name",required:""},domProps:{value:t.user.first_name}}):s("h5",[t._v(t._s(t.user.first_name))])]),s("hr"),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"last_name"}},[t._v("Last name:")]),t.editing?s("input",{ref:"last_name",staticClass:"form-control",attrs:{type:"last_name",id:"last_name","aria-describedby":"last_name",placeholder:"Last name",required:""},domProps:{value:t.user.last_name}}):s("h5",[t._v(t._s(t.user.last_name))])]),s("hr"),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address:")]),t.editing?s("input",{ref:"email",staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.user.email}}):s("h5",[t._v(t._s(t.user.email))])]),s("hr"),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"sel1"}},[t._v("Users role:")]),t.editing?s("select",{ref:"new_user_role",staticClass:"form-control",attrs:{id:"sel1"}},t._l(t.roles,function(e,a){return s("option",{domProps:{value:e.role_id,selected:t.user.role_id==e.role_id}},[t._v(t._s(e.role_name))])})):s("h5",[t._v(t._s(t.user.role_name))])]),t.editing?t._e():s("button",{staticClass:"btn btn-info",on:{click:function(e){t.editing=!0}}},[t._v("Edit")]),t.editing?t._e():s("button",{staticClass:"btn btn-danger float-right",attrs:{disabled:t.disableSubmitting},on:{click:t.deleteUser}},[t._v("Delete")]),t.editing?s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.disableSubmitting},on:{click:t.submitUpdateRequest}},[t._v("Save changes")]):t._e(),t.editing?s("button",{staticClass:"btn btn-info float-right",attrs:{type:"submit"},on:{click:function(e){t.editing=!1}}},[t._v("Cancel")]):t._e()],1)])},zt=[],xt={data:function(){return{user:{id:0,first_name:"",last_name:"",email:"",role_id:""},newUser:{id:0,first_name:"",last_name:"",email:"",role_id:""},editing:!1,roles:[],loading:!0,disableSubmitting:!1}},methods:{submitUpdateRequest:function(){var t=this;this.disableSubmitting=!0;var e=this.$refs["new_user_role"];this.newUser.role_id=e.options[e.selectedIndex].value,this.newUser.first_name=this.$refs["first_name"].value,this.newUser.last_name=this.$refs["last_name"].value,this.newUser.email=this.$refs["email"].value,this.newUser.id=this.user.id,axios.put(window.api_url+"/api/admin/users/"+this.user.id,this.newUser).then(function(e){e.data.updated?(t.$notify({group:"notify",title:"Success",text:"User sucessfully updated!",type:"success"}),t.$router.push({name:"admin_users"})):t.$notify({group:"notify",title:"Error",text:"You have to change some field!",type:"error"}),t.disableSubmitting=!1}).catch(function(e){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"}),t.disableSubmitting=!1})},deleteUser:function(){var t=this;this.$dialog.confirm("You are about to ban "+this.user.first_name+" "+this.user.last_name+". Are you sure?").then(function(e){axios.delete(window.api_url+"/api/admin/users/"+t.user.id).then(function(e){t.$notify({group:"notify",title:"Success",text:e.data.message,type:"success"}),t.$router.push({name:"admin_users"})}).catch(function(e){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})})})}},created:function(){var t=this;axios.get(window.api_url+"/api/admin/users/"+this.$route.params.user_id).then(function(e){t.user=e.data.user,t.roles=e.data.roles,t.loading=!1}).catch(function(t){})}},$t=xt,kt=Object(c["a"])($t,Ct,zt,!1,null,null,null);kt.options.__file="EditUser.vue";var St=kt.exports,Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",{staticClass:"fas fa-exclamation-triangle mr-4"}),t._v(" Oops, the requested resource could not be found!")])}],Zt={},Pt=Zt,qt=(s("433c"),Object(c["a"])(Pt,Et,Tt,!1,null,null,null));qt.options.__file="NotFound.vue";var Ot=qt.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("h4",{staticClass:"col-md-4 offset-md-3"},[t._v("Create new time zone")]),s("form",{staticClass:" col-md-6 offset-md-3",on:{submit:function(e){return e.preventDefault(),t.createTimeZone(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"tz_name"}},[t._v("Time Zone Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.timezone.name,expression:"timezone.name"}],staticClass:"form-control",attrs:{type:"text",id:"tz_name","aria-describedby":"tz_name",placeholder:"Time zone name",required:""},domProps:{value:t.timezone.name},on:{input:function(e){e.target.composing||t.$set(t.timezone,"name",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"tz_city"}},[t._v("Time Zone City")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.timezone.city,expression:"timezone.city"}],staticClass:"form-control",attrs:{type:"text",id:"tz_city","aria-describedby":"tz_city",placeholder:"Time zone city",required:""},domProps:{value:t.timezone.city},on:{input:function(e){e.target.composing||t.$set(t.timezone,"city",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"tz_gmt_diff"}},[t._v("GMT Differance")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.gmt_diff,expression:"gmt_diff"}],staticClass:"form-control",attrs:{type:"number",id:"tz_gmt_diff","aria-describedby":"tz_gmt_diff",placeholder:"Time zone GMT differance",required:""},domProps:{value:t.gmt_diff},on:{input:function(e){e.target.composing||(t.gmt_diff=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.loading}},[t._v("Submit "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])])},Ut=[],Nt={data:function(){return{timezone:{name:"",city:"",gmt_differance:0},gmt_diff:0,loading:!1}},methods:{createTimeZone:function(){var t=this;this.loading=!0,this.timezone.gmt_differance=this.gmt_diff,axios.post(window.api_url+"/api/time_zones",this.timezone).then(function(e){var s=e.data.completed;s&&(t.$notify({group:"notify",title:"Success",text:"Time zone succesfully added!",type:"success"}),t.$router.push({name:"show_timezones"})),t.loading=!1}).catch(function(e){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"}),t.loading=!1})}},watch:{gmt_diff:function(t){parseInt(t)>12?this.gmt_diff=12:parseInt(t)<-12&&(this.gmt_diff=-12)}}},It=Nt,Lt=(s("5845"),Object(c["a"])(It,Mt,Ut,!1,null,null,null));Lt.options.__file="CreateTimeZone.vue";var Yt=Lt.exports,Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticStyle:{"align-content":"center"}},[s("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"48px"}})]):s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-3"},[s("div",{staticClass:"card",staticStyle:{width:"auto"}},[s("div",{staticClass:"card-body"},[t.editing?s("input",{ref:"tz_name",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.timeZone.tz_name}}):s("h5",{staticClass:"card-title"},[t._v(t._s(t.timeZone.tz_name))]),t.editing?t._e():s("p",{staticClass:"card-text"},[s("small",[t._v(t._s(t.gmdate))])])]),s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item"},[t.editing?s("input",{ref:"tz_city",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.timeZone.tz_city}}):s("span",[t._v("City: "+t._s(t.timeZone.tz_city))])]),s("li",{staticClass:"list-group-item"},[t.editing?s("input",{ref:"tz_gmt_diff",staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.timeZone.tz_gmt_diff}}):s("span",[t._v("GMT: "+t._s(this.timeZone.tz_gmt_diff>=0?"+"+this.timeZone.tz_gmt_diff:this.timeZone.tz_gmt_diff))])])]),t.editing?s("div",{staticClass:"card-body"},[s("button",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#",disabled:t.submitLoading},on:{click:function(e){return e.preventDefault(),t.saveChanges(e)}}},[t._v("Save changes "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.submitLoading,expression:"submitLoading"}],staticClass:"fa fa-spinner fa-spin"})]),s("a",{staticClass:"btn btn-info btn-sm float-right",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.editing=!1}}},[t._v("Cancel")])]):s("div",{staticClass:"card-body"},[s("a",{staticClass:"btn btn-info mr-2 btn-sm",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.editing=!0}}},[t._v("Edit "),s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"btn btn-danger btn-sm",attrs:{href:"#",disabled:t.submitLoading},on:{click:function(e){return e.preventDefault(),t.deleteTimeZone(e)}}},[t._v("Delete "),t.submitLoading?s("i",{staticClass:"fa fa-spinner fa-spin"}):s("i",{staticClass:"fas fa-times"})])])])])])},Rt=[],At={data:function(){return{timeZone:{},newTimeZone:{name:"",city:"",gmt_differance:0},loading:!0,submitLoading:!1,editing:!1}},created:function(){var t=this;axios.get(window.api_url+"/api/time_zones/"+this.$route.params.timezone_id).then(function(e){t.timeZone=e.data.time_zone,t.loading=!1}).catch(function(e){403!=e.response.status&&400!=e.response.data||(t.$notify({group:"notify",title:"Error",text:"Forbidden!",type:"error"}),t.$router.push({name:"show_timezones"}))})},methods:{saveChanges:function(){var t=this;this.submitLoading=!0,this.newTimeZone.city=this.$refs["tz_city"].value,this.newTimeZone.name=this.$refs["tz_name"].value,this.newTimeZone.gmt_differance=this.$refs["tz_gmt_diff"].value,axios.put(window.api_url+"/api/time_zones/"+this.$route.params.timezone_id,this.newTimeZone).then(function(e){var s=e.data.completed;s?(t.$notify({group:"notify",title:"Success",text:"You have succesfully updated your timezone!",type:"success"}),t.timeZone.tz_name=t.newTimeZone.name,t.timeZone.tz_city=t.newTimeZone.city,t.timeZone.tz_gmt_diff=t.newTimeZone.gmt_differance,t.submitLoading=!1,t.editing=!1):(t.$notify({group:"notify",title:"Error",text:"You need to change some field in order to edit time zone.",type:"error"}),t.submitLoading=!1)}).catch(function(e){if(403==e.response.status&&(t.$notify({group:"notify",title:"Error",text:"Forbidden!",type:"error"}),t.$router.push({name:"show_timezones"})),400==e.response.status){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"}),t.submitLoading=!1}})},deleteTimeZone:function(){var t=this;this.$dialog.confirm("You are about to delete "+this.timeZone.tz_city+" time zone. Are you sure?").then(function(e){t.submitLoading=!0,axios.delete(window.api_url+"/api/time_zones/"+t.$route.params.timezone_id).then(function(e){t.$notify({group:"notify",title:"Success",text:e.data.message,type:"success"}),t.submitLoading=!1,t.$router.push({name:"show_timezones"})}).catch(function(e){var s=e.response.data.data;t.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"}),t.submitLoading=!1})})}},computed:{gmdate:function(){var t=this.$store.state.gmt.gmt;return moment(t).add(this.timeZone.tz_gmt_diff,"hours").format("MMMM Do YYYY, h:mm:ss a")}}},Ft=At,Gt=(s("7778"),Object(c["a"])(Ft,Dt,Rt,!1,null,null,null));Gt.options.__file="ShowTimeZone.vue";var Ht=Gt.exports,Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_query,expression:"search_query"}],staticClass:"form-control col-md-4 offset-md-4",attrs:{type:"text",placeholder:"Filter time zones"},domProps:{value:t.search_query},on:{input:function(e){e.target.composing||(t.search_query=e.target.value)}}}),s("br"),s("h5",{staticClass:"col-md-6 offset-md-3",staticStyle:{"text-align":"center"}},[t._v("GMT date: "+t._s(t.gmdate))]),t.loading||0!=t.timeZones.length?t._e():s("div",[t._v("\n        You don't have any time zones added yet. Go add a new one!\n    ")]),t.loading?s("div",{staticStyle:{"align-content":"center"}},[s("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"48px"}})]):s("div",[s("br"),s("div",{staticClass:"row"},t._l(t.timeZones,function(t,e){return s("div",{staticClass:"card col-md-3"},[s("TimeZone",{attrs:{timeZone:t,loop_index:e,author:t.first_name?t.first_name+" "+t.last_name:""}})],1)}))]),s("pagination",{staticClass:"mt-4",attrs:{records:t.timeZonesCount,"per-page":t.perPage},on:{paginate:t.paginateTimeZones},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},Jt=[],Kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-body"},[s("h4",[s("router-link",{attrs:{to:{name:t.timeZoneRoute,params:{timezone_id:t.timeZone.tz_id}}}},[t._v(t._s(t.timeZone.tz_name))])],1),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.timeZone.tz_city))]),s("p",[t._v("GMT: "+t._s(this.timeZone.tz_gmt_diff>=0?"+"+this.timeZone.tz_gmt_diff:this.timeZone.tz_gmt_diff))]),s("br"),s("p",[t._v(t._s(t.gmdate))]),t.author?s("p",[t._v("Author: "),s("router-link",{attrs:{to:{name:"admin_show_user",params:{user_id:this.timeZone.tz_user_id}}}},[t._v(t._s(t.author))])],1):t._e()])},Vt=[],Wt={props:{timeZone:{required:!0},loop_index:{required:!0},author:{required:!1}},computed:{gmdate:function(){var t=this.$store.state.gmt.gmt;return moment(t).add(this.timeZone.tz_gmt_diff,"hours").format("MMMM Do YYYY, h:mm:ss a")},timeZoneRoute:function(){if("show_timezones"===this.$route.name)return"timezone_show"}}},Qt=Wt,Xt=(s("3f40"),Object(c["a"])(Qt,Kt,Vt,!1,null,null,null));Xt.options.__file="TimeZone.vue";var te=Xt.exports,ee={components:{TimeZone:te,Pagination:rt.a},data:function(){return{timeZones:[],search_query:"",loading:!1,currentPage:1,timeZonesCount:0,lastPage:0,perPage:12}},created:function(){this.fetchTimeZones()},computed:{gmdate:function(){var t=this.$store.state.gmt.gmt;return moment(t).format("MMMM Do YYYY, h:mm:ss a")}},methods:{fetchTimeZones:function(){var t=this;this.loading=!0,axios.get(window.api_url+"/api/time_zones?search_query="+this.search_query+"&current_page="+this.currentPage+"&per_page="+this.perPage).then(function(e){t.timeZonesCount=e.data.count.count,t.lastPage=Math.ceil(t.timeZonesCount/t.perPage),t.timeZones=e.data.time_zones,t.loading=!1}).catch(function(e){t.loading=!1})},paginateTimeZones:function(t){t!=this.lastPage+1&&0!=t&&(this.currentPage=t,this.fetchTimeZones())}},watch:{search_query:function(){this.currentPage=1,this.fetchTimeZones()}}},se=ee,ae=Object(c["a"])(se,Bt,Jt,!1,null,null,null);ae.options.__file="TimeZones.vue";var ne=ae.exports,ie=[{path:"/resource/not_found",component:Ot,name:"not_found"},{path:"/",component:F,meta:{requiresAuth:!0},children:[{path:"/timezone/create",name:"timezone_create",component:Yt},{path:"/timezone/:timezone_id",name:"timezone_show",component:Ht},{path:"/",name:"show_timezones",component:ne,meta:{showAll:!1}}]},{path:"/login",component:P,name:"login",meta:{guest:!1}},{path:"/register",component:I,name:"register",meta:{guest:!0}},{path:"/admin",component:V,name:"admin",meta:{admin:!0},children:[{path:"users",component:ct,name:"admin_users"},{path:"dashboard",component:ht,name:"admin_dashboard"},{path:"time_zones",component:wt,name:"admin_time_zones"},{path:"user/:user_id",component:St,name:"admin_show_user"}]}],re=ie,oe={namespaced:!0,state:{token:localStorage.getItem("auth-token")?localStorage.getItem("auth-token"):"",user:localStorage.getItem("auth-user")?JSON.parse(localStorage.getItem("auth-user")):{}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e}},actions:{}},ue={namespaced:!0,state:{gmt:""},mutations:{SET_GMT:function(t,e){t.gmt=e},INCREMENT_GMT:function(t){t.gmt=moment(t.gmt).add(1,"seconds").format()}},actions:{}},le={modules:{auth:oe,gmt:ue}},ce=le;window.moment=w.a,a["default"].use(v["a"]),a["default"].use(g["a"]),a["default"].use(z.a),a["default"].use($.a),a["default"].config.productionTip=!1,window.api_url="https://gentle-atoll-38274.herokuapp.com";var me=new v["a"]({routes:re});me.beforeEach(function(t,e,s){if(t.matched.some(function(t){return t.meta.requiresAuth}))null==localStorage.getItem("auth-token")?s({path:"/login"}):s();else if(t.matched.some(function(t){return t.meta.guest}))null==localStorage.getItem("auth-token")?s():s("/");else if(t.matched.some(function(t){return t.meta.admin})){var a=JSON.parse(localStorage.getItem("auth-user"));"Admin"!=a.role_name?s({name:"show_timezones"}):s()}else s()});var de=new g["a"].Store(ce);window.axios=y.a,new a["default"]({router:me,store:de,render:function(t){return t(h)}}).$mount("#app")},5845:function(t,e,s){"use strict";var a=s("3120"),n=s.n(a);n.a},"5e4e":function(t,e,s){},7778:function(t,e,s){"use strict";var a=s("fe7e"),n=s.n(a);n.a},"9be1":function(t,e,s){},c2f7:function(t,e,s){},c3d8:function(t,e,s){"use strict";var a=s("c2f7"),n=s.n(a);n.a},e374:function(t,e,s){"use strict";var a=s("42d9"),n=s.n(a);n.a},fe7e:function(t,e,s){}});
//# sourceMappingURL=app.2dbba1ee.js.map