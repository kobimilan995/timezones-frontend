(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],m=0,d=[];m<i.length;m++)o=i[m],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"42d9":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("navigation-component"),s("br"),s("div",{staticClass:"container"},[s("router-view")],1),s("notifications",{attrs:{group:"notify",position:"bottom left"}})],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:" navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")])],1)]),e.token?s("ul",{staticClass:"navbar-nav my-lg-0"},[s("li",{staticClass:"nav-item",staticStyle:{"padding-top":"8px"}},[s("h5",{staticClass:"mr-4"},[e._v(e._s(e.authUser.first_name)+" "+e._s(e.authUser.last_name)+" - ("+e._s(e.authUser.role_name)+")")])]),"Admin"==e.authUser.role_name?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin_dashboard"}}},[e._v("Admin dashboard")])],1):e._e(),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")])])]):s("ul",{staticClass:"navbar-nav my-lg-0"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("Register")])],1)])])])},i=[],l={data:function(){return{}},computed:{token:function(){return this.$store.state.auth.token},authUser:function(){return this.$store.state.auth.user}},methods:{logout:function(){this.removeToken(),this.$notify({group:"notify",title:"Success",text:"Sucesfully logged out!",type:"success"})},removeToken:function(){localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),this.$store.commit("auth/SET_TOKEN",""),this.$store.commit("auth/SET_USER",{}),this.$router.push({name:"login"})}}},u=l,c=s("2877"),m=Object(c["a"])(u,o,i,!1,null,null,null);m.options.__file="Navigation.vue";var d=m.exports,f={name:"app",components:{"navigation-component":d},created:function(){var e=this;this.$store.state.auth.token?axios.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.auth.token:axios.defaults.headers.common["Authorization"]="Bearer ",axios.interceptors.response.use(function(e){return e},function(t){return 401==t.response.status?(localStorage.removeItem("auth-token"),localStorage.removeItem("auth-user"),e.$store.commit("auth/SET_TOKEN",""),e.$store.commit("auth/SET_USER",{}),axios.defaults.headers.common["Authorization"]="Bearer ",e.$router.push({name:"login"})):403==t.response.status&&e.$router.push({name:"home"}),Promise.reject(t)})},mounted:function(){var e=this;axios.get(window.api_url+"/api/gmdate").then(function(t){e.$store.commit("gmt/SET_GMT",moment(t.data.gmdate));var s=e;function a(){s.$store.commit("gmt/INCREMENT_GMT")}setInterval(a,1e3)}).catch(function(e){console.log(e)})},computed:{gmdate:function(){return this.$store.state.gmt.gmt?this.$store.state.gmt.gmt.moment("MMMM Do YYYY, h:mm:ss a"):""}}},p=f,v=Object(c["a"])(p,r,n,!1,null,null,null);v.options.__file="App.vue";var h=v.exports,b=s("8c4f"),g=s("2f62"),_=s("bc3a"),j=s.n(_),y=s("c1df"),w=s.n(y),k=s("ee98"),x=s.n(k),C=s("03a5"),$=s.n(C),S=(s("ab8b"),s("c5c5"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-6 offset-md-3"},[s("h4",[e._v("Login")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.submitLoginRequest(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])}),E=[],O=(s("ac6a"),s("456d"),{data:function(){return{credentials:{email:"",password:""}}},methods:{submitLoginRequest:function(){var e=this;axios.post(window.api_url+"/api/login",this.credentials).then(function(t){var s=t.data.token;console.log(t);var a=t.data.user;localStorage.setItem("auth-token",s),localStorage.setItem("auth-user",JSON.stringify(a)),e.$store.commit("auth/SET_TOKEN",s),e.$store.commit("auth/SET_USER",t.data.user),axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("auth-token"),e.$router.push({name:"home"}),e.$notify({group:"notify",title:"Success",text:t.data.message,type:"success"})}).catch(function(t){if(console.log(t),t.response.status){var s=t.response.data.data;e.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})}})}},computed:{token:function(){return this.$store.state.auth.token}}}),z=O,T=Object(c["a"])(z,S,E,!1,null,null,null);T.options.__file="Login.vue";var q=T.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("h4",{staticClass:"col-md-4 offset-md-3"},[e._v("Registration")]),s("form",{staticClass:" col-md-6 offset-md-3",on:{submit:function(t){return t.preventDefault(),e.submitRegisterRequest(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"first_name"}},[e._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.first_name,expression:"user.first_name"}],staticClass:"form-control",attrs:{type:"first_name",id:"first_name","aria-describedby":"first_name",placeholder:"First name",required:""},domProps:{value:e.user.first_name},on:{input:function(t){t.target.composing||e.$set(e.user,"first_name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"last_name"}},[e._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"last_name",id:"last_name","aria-describedby":"last_name",placeholder:"Last name",required:""},domProps:{value:e.user.last_name},on:{input:function(t){t.target.composing||e.$set(e.user,"last_name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_confirmation"}},[e._v("Password Confirmation")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Password confirmation",required:""},domProps:{value:e.user.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.user,"password_confirmation",t.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[s("router-link",{attrs:{to:"/login"}},[e._v("Already have an account?")])],1)])])},M=[],P={data:function(){return{user:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}},methods:{submitRegisterRequest:function(){var e=this;axios.post(window.api_url+"/api/register",this.user).then(function(t){var s=t.data;e.$notify({group:"notify",title:"Success",text:s.message,type:"success"}),e.$router.push({name:"login"})}).catch(function(t){if(400==t.response.status){var s=t.response.data.data;e.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})}})}}},I=P,U=Object(c["a"])(I,N,M,!1,null,null,null);U.options.__file="Register.vue";var R=U.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Home")]),s("p",[e._v(e._s(e.gmdate))])])},Y=[],D={computed:{gmdate:function(){return this.$store.state.gmt.gmtHuman?this.$store.state.gmt.gmtHuman:""}},created:function(){axios.get(window.api_url+"/api/test").then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},H=D,L=Object(c["a"])(H,A,Y,!1,null,null,null);L.options.__file="Home.vue";var B=L.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{staticClass:"nav nav-tabs"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"admin_dashboard"==e.route},attrs:{to:{name:"admin_dashboard"}}},[e._v("Dashboard")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"admin_users"==e.route},attrs:{to:{name:"admin_users"}}},[e._v("Users")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{active:"admin_time_zones"==e.route},attrs:{to:{name:"admin_time_zones"}}},[e._v("Time Zones")])],1)]),s("br"),s("router-view")],1)},F=[],G=(s("7f7f"),{created:function(){},computed:{route:function(){return this.$route.name}}}),K=G,Z=(s("e374"),Object(c["a"])(K,J,F,!1,null,null,null));Z.options.__file="AdminPanel.vue";var W=Z.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search_query,expression:"search_query"}],staticClass:"form-control col-md-4 offset-md-4",attrs:{type:"text",placeholder:"Filter users"},domProps:{value:e.search_query},on:{input:function(t){t.target.composing||(e.search_query=t.target.value)}}}),e.loading?s("div",{staticStyle:{"align-content":"center"}},[s("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"48px"}})]):s("div",[s("br"),s("div",{staticClass:"row"},e._l(e.users,function(t,a){return s("div",{staticClass:"card col-md-3"},[s("user-component",{key:a,attrs:{user:t,loop_index:a},on:{userDeleted:e.removeUser}})],1)}))])])},V=[],X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v(e._s(e.user.first_name)+" "+e._s(e.user.last_name)+" ("+e._s(e.user.id)+")")]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.user.email)+" - ("+e._s(e.user.role_name)+")")]),s("br"),s("a",{staticClass:"btn btn-danger btn-sm",staticStyle:{color:"white"},on:{click:e.deleteUser}},[e._v("Ban "),s("i",{staticClass:"fas fa-times"})])])},ee=[],te={props:{user:{required:!0},loop_index:{required:!0}},methods:{deleteUser:function(){var e=this;this.$dialog.confirm("You are about to ban "+this.user.first_name+" "+this.user.last_name+". Are you sure?").then(function(t){axios.delete(window.api_url+"/api/admin/users/"+e.user.id).then(function(t){e.$notify({group:"notify",title:"Success",text:t.data.message,type:"success"}),e.$emit("userDeleted",e.loop_index)}).catch(function(t){var s=t.response.data.data;e.$notify({group:"notify",title:"Error",text:s[Object.keys(s)[0]][0],type:"error"})})})}}},se=te,ae=Object(c["a"])(se,X,ee,!1,null,null,null);ae.options.__file="User.vue";var re=ae.exports,ne={data:function(){return{users:[],search_query:"",loading:!1}},components:{"user-component":re},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;this.loading=!0,axios.get(window.api_url+"/api/admin/users?query="+this.search_query).then(function(t){e.users=t.data.users,e.loading=!1}).catch(function(e){console.log(e)})},removeUser:function(e){this.users.splice(e,1)}},watch:{search_query:function(){this.fetchUsers()}}},oe=ne,ie=Object(c["a"])(oe,Q,V,!1,null,null,null);ie.options.__file="Users.vue";var le=ie.exports,ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("i",[e._v("\n        Welcome to admin panel!\n    ")])])}],me={},de=me,fe=Object(c["a"])(de,ue,ce,!1,null,null,null);fe.options.__file="Dashboard.vue";var pe=fe.exports,ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[e._v("Time Zones")])},he=[],be={},ge=be,_e=Object(c["a"])(ge,ve,he,!1,null,null,null);_e.options.__file="TimeZones.vue";var je=_e.exports,ye=[{path:"/",component:B,name:"home",meta:{requiresAuth:!0}},{path:"/login",component:q,name:"login",meta:{guest:!1}},{path:"/register",component:R,name:"register",meta:{guest:!0}},{path:"/admin",component:W,name:"admin",meta:{admin:!0},children:[{path:"users",component:le,name:"admin_users"},{path:"dashboard",component:pe,name:"admin_dashboard"},{path:"time_zones",component:je,name:"admin_time_zones"}]}],we=ye,ke={namespaced:!0,state:{token:localStorage.getItem("auth-token")?localStorage.getItem("auth-token"):"",user:localStorage.getItem("auth-user")?JSON.parse(localStorage.getItem("auth-user")):{}},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USER:function(e,t){e.user=t}},actions:{}},xe={namespaced:!0,state:{gmt:"",gmtHuman:""},mutations:{SET_GMT:function(e,t){e.gmt=t,e.gmtHuman=e.gmt.format("MMMM Do YYYY, h:mm:ss a")},INCREMENT_GMT:function(e){e.gmt=e.gmt.add(1,"seconds"),e.gmtHuman=e.gmt.format("MMMM Do YYYY, h:mm:ss a")}},actions:{}},Ce={modules:{auth:ke,gmt:xe}},$e=Ce;window.moment=w.a,a["default"].use(b["a"]),a["default"].use(g["a"]),a["default"].use(x.a),a["default"].use($.a),a["default"].config.productionTip=!1,window.api_url="https://gentle-atoll-38274.herokuapp.com";var Se=new b["a"]({routes:we});Se.beforeEach(function(e,t,s){if(e.matched.some(function(e){return e.meta.requiresAuth}))null==localStorage.getItem("auth-token")?s({path:"/login"}):s();else if(e.matched.some(function(e){return e.meta.guest}))null==localStorage.getItem("auth-token")?s():s("/");else if(e.matched.some(function(e){return e.meta.admin})){var a=JSON.parse(localStorage.getItem("auth-user"));"Admin"!=a.role_name?s({name:"home"}):s()}else s()});var Ee=new g["a"].Store($e);window.axios=j.a,new a["default"]({router:Se,store:Ee,render:function(e){return e(h)}}).$mount("#app")},e374:function(e,t,s){"use strict";var a=s("42d9"),r=s.n(a);r.a}});
//# sourceMappingURL=app.f4ed53ab.js.map