webpackJsonp([1],{"1uuo":function(t,e){},"7Qmn":function(t,e){},HhDw:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={computed:{username:function(){return this.$store.getters.USER}},methods:{logout:function(){this.$store.dispatch("LOGOUT"),this.$router.replace("/user/login")}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar fixed-top navbar-expand-sm navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"#"}},[a("i",{staticClass:"fas fa-code fa-2x"})]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse",href:"#navbarSupportedContent",role:"button","aria-expanded":"false","aria-controls":"collapseExample",to:"/blogs"}},[t._v("\n        Blogs "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse",href:"#navbarSupportedContent",role:"button","aria-expanded":"false","aria-controls":"collapseExample",to:"/blogs/new"}},[t._v("\n          New Blog\n        ")])],1)]),t._v(" "),a("ul",{staticClass:"navbar-nav"},[t.username?t._e():[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse",href:"#navbarSupportedContent",role:"button","aria-expanded":"false","aria-controls":"collapseExample",to:"/user/login"}},[t._v("\n          Login\n        ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse",href:"#navbarSupportedContent",role:"button","aria-expanded":"false","aria-controls":"collapseExample",to:"/user/signup"}},[t._v("\n          Sign Up\n        ")])],1)],t._v(" "),t.username?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          "+t._s(t.username)+"\n        ")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",on:{click:t.logout}},[t._v("Logout")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]):t._e()],2)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var o={name:"App",components:{appHeader:a("VU/8")(r,n,!1,function(t){a("ZnBf")},"data-v-654c158b",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("app-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("TT5R")},null,null).exports,u=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var d=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},v=a("VU/8")(null,m,!1,null,null,null).exports,p={data:function(){return{interval:null}},computed:{blogs:function(){return this.$store.getters.BLOGS}},created:function(){var t=this;t.$store.dispatch("INIT_BLOGS"),this.interval=setInterval(function(){t.$store.dispatch("INIT_BLOGS")},1e3)},beforeDestroy:function(){clearInterval(this.interval)},filters:{minText:function(t){return t.substring(0,100)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-group row"},t._l(t.blogs,function(e){return a("div",{key:e._id,staticClass:"col-sm-6 col-md-4 flex px-0"},[a("img",{staticClass:"card-img-top",attrs:{src:e.dbLocation+e.image,alt:"Card image cap"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"card-title text-uppercase",staticStyle:{cursor:"pointer"},attrs:{tag:"h5",to:{name:"showBlog",params:{id:e._id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.body.substring(0,100))}})],1),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"showBlog",params:{id:e._id}}}},[t._v("Read More >")]),t._v(" "),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Created: "+t._s(new Date(e.created).toLocaleDateString()))]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("By: "+t._s(e.author.username))])])],1)}))},staticRenderFns:[]};var f,_,h,b,w,C,E=a("VU/8")(p,g,!1,function(t){a("HhDw")},"data-v-2930924e",null).exports,x=a("mtWM"),T=a.n(x),y=a("NYxO"),$=a("Xxa5"),S=a.n($),k=a("exGp"),B=a.n(k),O=a("bOdI"),I=a.n(O),L={state:{blogs:null,blog:null},mutations:(f={},I()(f,"SET_BLOGS",function(t,e){t.blogs=e}),I()(f,"SET_BLOG",function(t,e){t.blog=e}),f),actions:(_={},I()(_,"INIT_BLOGS",function(t){var e=this,a=t.commit;return B()(S.a.mark(function t(){var s,r;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getAllBlogs();case 2:s=t.sent,r=s.data.blogs,a("SET_BLOGS",r);case 5:case"end":return t.stop()}},t,e)}))()}),I()(_,"INIT_BLOG",function(t,e){var a=this,s=t.commit;return B()(S.a.mark(function t(){var r,n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getBlog(e);case 2:r=t.sent,n=r.data.blog,s("SET_BLOG",n);case 5:case"end":return t.stop()}},t,a)}))()}),_),getters:(h={},I()(h,"BLOGS",function(t){return t.blogs}),I()(h,"BLOG",function(t){return t.blog}),h)},U={state:{username:null,token:null,author:null},mutations:(b={},I()(b,"SET_USER",function(t,e){t.username=e}),I()(b,"SET_TOKEN",function(t,e){t.token=e}),I()(b,"SET_AUTHOR",function(t,e){t.author=e}),I()(b,"CLEAR_AUTH",function(t){t.username=null,t.token=null,t.author=null}),b),actions:(w={},I()(w,"SET_AUTH_DATA",function(t,e){var a=t.commit;a("SET_TOKEN",e.token),a("SET_USER",e.username),a("SET_AUTHOR",e.author)}),I()(w,"TRY_OUT_LOGIN",function(t){t.commit;var e=t.dispatch,a=localStorage.getItem("token");a&&e("SET_AUTH_DATA",{token:a,username:localStorage.getItem("username"),author:localStorage.getItem("author")})}),I()(w,"LOGOUT",function(t){(0,t.commit)("CLEAR_AUTH"),localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("author")}),w),getters:(C={},I()(C,"TOKEN",function(t){return t.token}),I()(C,"USER",function(t){return t.username}),I()(C,"AUTHOR",function(t){return t.author}),C)};s.a.use(y.a);var N=new y.a.Store({modules:{blogs:L,auth:U}}),P=function(){return T.a.create({baseURL:"https://frozen-dawn-21965.herokuapp.com",headers:{token:N.getters.TOKEN,user:N.getters.AUTHOR}})},A={getAllBlogs:function(){return P().get("blogs")},newBlog:function(t){return P().post("blogs",t)},getBlog:function(t){return P().get("blogs/"+t)},deleteBlog:function(t){return P().delete("blogs/"+t)},updateBlog:function(t,e){return P().put("blogs/"+t,e)},login:function(t){return P().post("user/login",t)},signup:function(t){return P().post("user",t)},checkToken:function(t){return P().post("user/verify",t)},comment:function(t,e){return P().post("blogs/"+t+"/comments",e)}},R=a("vQJi"),D=a.n(R),F={data:function(){return{newBlog:{},selectedFile:null}},methods:{submit:function(){var t=this,e=new FormData;for(var a in e.append("blogImage",this.selectedFile),e.append("author",this.$store.getters.AUTHOR),this.newBlog)e.append(a,this.newBlog[a]);A.newBlog(e).then(function(e){e.data.status?(t.$store.dispatch("INIT_BLOGS"),D.a.success("Blog has been sucessfully added.","Included!"),t.$router.push("/blogs")):D.a.warning("Error on creating blog.","Error!")}).catch(function(){D.a.warning("Error on creating blog.","Error!")})},onFileChanged:function(t){this.selectedFile=t.target.files[0]}}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h1",[t._v("Create New Blog")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBlog.title,expression:"newBlog.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter title"},domProps:{value:t.newBlog.title},on:{input:function(e){e.target.composing||t.$set(t.newBlog,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("Image")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",id:"image"},on:{change:t.onFileChanged}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"body"}},[t._v("Body")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBlog.body,expression:"newBlog.body"}],staticClass:"form-control",attrs:{id:"body",rows:"3"},domProps:{value:t.newBlog.body},on:{input:function(e){e.target.composing||t.$set(t.newBlog,"body",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("Submit")])])])},staticRenderFns:[]},H=a("VU/8")(F,G,!1,null,null,null).exports,j={data:function(){return{commentText:null,interval:null}},computed:{blog:function(){return this.$store.getters.BLOG}},created:function(){var t=this;t.$store.dispatch("INIT_BLOG",t.$route.params.id),this.interval=setInterval(function(){t.$store.dispatch("INIT_BLOG",t.$route.params.id)},1e3)},beforeDestroy:function(){clearInterval(this.interval)},filters:{date:function(t){var e=new Date(t).toLocaleDateString();return"Date: "+e+" Time: "+new Date(t).toLocaleTimeString()}},methods:{remove:function(){var t=this;A.deleteBlog(this.$route.params.id).then(function(e){e.data.status?(t.$router.push("/blogs"),D.a.success("Blog has been sucessfully removed.","Removed!")):D.a.warning(e.data.message,"Error")}).catch(function(){t.$router.push("/user/login")})},comment:function(){var t={text:this.commentText,author:this.$store.getters.AUTHOR};A.comment(this.$route.params.id,{comment:t}).then(function(t){t.data.status?D.a.success("Commented on post"):D.a.warning("Error on comment post","Error!")}).catch(function(){D.a.warning("Error on comment post","Error!")})}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.blog?a("div",[a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.blog.dbLocation+t.blog.image,alt:"Card image cap"}}),t._v(" "),a("p",[t._v(t._s(t._f("date")(t.blog.created)))]),t._v(" "),a("p",[t._v("Created by: "+t._s(t.blog.author.username))]),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.blog.title))]),t._v(" "),a("p",{staticClass:"card-text text-justify",domProps:{innerHTML:t._s(t.blog.body)}}),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"editBlog"}}},[t._v("EDIT")]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:t.remove}},[t._v("DELETE")])],1)]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"comments form-group text-justify card"},[t._m(1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"form-control",attrs:{id:"body",rows:"3"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-success",on:{click:t.comment}},[t._v("Comment")])]),t._v(" "),0==t.blog.comments.length?a("p",[t._v(" There are not comments on this post")]):a("h5",[t._v(" "+t._s(t.blog.comments.length)+" comments")]),t._v(" "),a("ul",{staticClass:"list-group"},t._l(t.blog.comments,function(e){return a("li",{key:e._id,staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[t._v(t._s(e.author.username))]),t._v(" "),a("small",[t._v("3 days ago")])]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(e.text))])])}))])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"text-justify"},[e("strong",[this._v("Comments "),e("i",{staticClass:"fas fa-comment"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"body"}},[e("strong",[this._v("Write your comment "),e("i",{staticClass:"fas fa-pencil-alt"})])])}]};var q=a("VU/8")(j,V,!1,function(t){a("7Qmn")},"data-v-4597e311",null).exports,K={data:function(){return{selectedFile:null}},computed:{blog:function(){return this.$store.getters.BLOG}},created:function(){this.$store.dispatch("INIT_BLOG",this.$route.params.id)},methods:{submit:function(){var t=this,e=new FormData;for(var a in this.selectedFile&&e.append("blogImage",this.selectedFile),this.blog)e.append(a,this.blog[a]);A.updateBlog(this.$route.params.id,e).then(function(e){e.data.status?(D.a.success("Blog has been modified sucessufully.","EDITED!"),t.$router.push("/blogs/"+t.$route.params.id)):D.a.warning("Error updating blog","Error")}).catch(function(){D.a.warning("Error updating blog","Error")})},onFileChanged:function(t){this.selectedFile=t.target.files[0]}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.blog?a("div",{staticClass:"d-flex justify-content-center"},[a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h1",{attrs:{vonce:""}},[t._v("Edit")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.title,expression:"blog.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.blog.title},on:{input:function(e){e.target.composing||t.$set(t.blog,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("img",{staticClass:"card-img-top",attrs:{src:t.blog.dbLocation+t.blog.image,alt:"Card image cap"}}),t._v(" "),a("label",{attrs:{for:"image"}},[t._v("Image")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",id:"image"},on:{change:t.onFileChanged}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"body"}},[t._v("Body")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.body,expression:"blog.body"}],staticClass:"form-control",attrs:{id:"body",rows:"3"},domProps:{value:t.blog.body},on:{input:function(e){e.target.composing||t.$set(t.blog,"body",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("Submit")])])]):t._e()},staticRenderFns:[]},W=a("VU/8")(K,M,!1,null,null,null).exports,Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]},Q=a("VU/8")(null,Y,!1,null,null,null).exports,z=a("+cKO"),J={data:function(){return{email:null,password:null}},methods:{submit:function(){var t=this,e={email:this.email,password:this.password};A.login(e).then(function(e){var a=e.data.status;if(console.log(e.data),a){var s={token:e.data.token,username:e.data.username,author:e.data.author};localStorage.setItem("token",s.token),localStorage.setItem("username",s.username),localStorage.setItem("author",s.author),t.$store.dispatch("SET_AUTH_DATA",s),window.history.length>1?t.$router.go(-1):t.$router.push("/")}}).catch(function(){D.a.warning("Error on login","Error")})}},validations:{email:{email:z.email,required:z.required}}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h1",[t._v("Login")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{blur:function(e){t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.$v.email.$error?a("div",{staticClass:"alert alert-danger alert-dismissible fade show mt-1",attrs:{role:"alert"}},[a("strong",[t._v("Error")]),t._v(" Please provide a valid email address\n          "),t._m(0)]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success w-100",attrs:{type:"submit"}},[t._v("Submit")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]},X=a("VU/8")(J,Z,!1,null,null,null).exports,tt={data:function(){return{email:null,username:null,password:null,confirmPassword:null}},methods:{submit:function(){var t=this;return B()(S.a.mark(function e(){var a,s,r,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$invalid){e.next=10;break}return a={email:t.email,username:t.username,password:t.password},e.next=4,A.signup(a);case 4:s=e.sent,r=s.data.status,console.log(s.data),r&&(n={token:s.data.token,username:s.data.username},localStorage.setItem("token",n.token),localStorage.setItem("username",n.username),t.$store.dispatch("SET_AUTH_DATA",n)),e.next=11;break;case 10:D.a.error("Please fill up all the fields.","Empty Fields!");case 11:case"end":return e.stop()}},e,t)}))()}},validations:{email:{email:z.email,required:z.required},password:{required:z.required,minLength:Object(z.minLength)(6)},confirmPassword:{sameAs:Object(z.sameAs)("password")}}},et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h1",[t._v("Sign Up")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{blur:function(e){t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.$v.email.$error?a("div",{staticClass:"alert alert-danger alert-dismissible fade show mt-1",attrs:{role:"alert"}},[a("strong",[t._v("Error")]),t._v(" Please provide a valid email address\n                    "),t._m(0)]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"username",id:"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter        password"},domProps:{value:t.password},on:{blur:function(e){t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.$v.password.$error?a("div",{staticClass:"alert alert-danger alert-dismissible fade show mt-1",attrs:{role:"alert"}},[a("strong",[t._v("Error")]),t._v(" Please provide a valid password. (Minimun size equals to "+t._s(t.$v.password.$params.minLength.min)+" )\n                "),t._m(1)]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"confirmPassword"}},[t._v("Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Enter confirmPassword"},domProps:{value:t.confirmPassword},on:{blur:function(e){t.$v.confirmPassword.$touch()},input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t._v(" "),t.$v.confirmPassword.$error?a("div",{staticClass:"alert alert-danger alert-dismissible fade show mt-1",attrs:{role:"alert"}},[a("strong",[t._v("Error")]),t._v(" Password not matching\n                "),t._m(2)]):t._e()]),t._v(" "),a("button",{staticClass:"btn btn-success w-100",attrs:{type:"submit"}},[t._v("Submit")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]},at=a("VU/8")(tt,et,!1,null,null,null).exports;s.a.use(u.a);var st=new u.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/blogs",component:v,children:[{path:"",name:"IndexBlog",component:E},{path:"new",name:"NewBlog",component:H,beforeEnter:function(t,e,a){N.getters.TOKEN?a():a("/user/login")}},{path:":id",name:"showBlog",component:q},{path:":id/edit",name:"editBlog",component:W,beforeEnter:function(t,e,a){var s=N.getters.AUTHOR,r=N.getters.BLOG.author._id;N.getters.TOKEN&&s===r?a():a("/user/login")}}]},{path:"/user",component:Q,children:[{path:"login",name:"login",component:X},{path:"signup",name:"signup",component:at}]}],mode:"history"}),rt=a("ESwS"),nt=a.n(rt);s.a.config.productionTip=!1,s.a.use(nt.a),N.dispatch("TRY_OUT_LOGIN"),new s.a({el:"#app",router:st,store:N,components:{App:l},template:"<App/>"})},TT5R:function(t,e){},ZnBf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7d81e139d6d8b1a375cf.js.map