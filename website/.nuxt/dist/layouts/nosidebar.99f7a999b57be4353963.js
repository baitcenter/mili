webpackJsonp([25],{"/myT":function(t,e,s){"use strict";var a=s("f9bQ"),n=s("V8bM"),r=s("y8ae"),i=s("b1Yp"),o=s("FN0O"),l=s.n(o);e.a={data:function(){var t=this.$store.state.user,e=[a.a.USER_ROLE_ADMIN,a.a.USER_ROLE_SUPER_ADMIN,a.a.USER_ROLE_CRAWLER_ADMIN],s=!1;return t&&e.indexOf(t.role)>=0&&(s=!0),{q:"",user:t,adminVisible:s,isInputFocus:!1,userMessages:[],messages:this.$store.state.messages,messageCount:this.$store.state.messageCount}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onReadMessage:function(t){n.a.readMessage({params:{id:t.id}}).then(function(){t.readed=!0})},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;n.a.logout().then(function(e){e.errNo===r.a.SUCCESS&&(t.user=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){for(var t=this.messages||[],e=t.slice(0),s=0;s<e.length;s++){if("messageTypeCommentComment"===e[s].type){var a=l()(e[s].data.commentContent,{limit:15,wordBreak:!0,suffix:"...",preserveTags:!1,moreLink:!1}),n=a.html;n=i.a.trimImg(n),e[s].data.commentContent=n}var r=e[s].data.title||"";r.length>15&&(e[s].data.title=r.substr(0,15)+"..."),e[s].readed=!1}this.userMessages=e}}},"2nsu":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-footer"},[s("div",{staticClass:"golang-footer-page-link"},[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[s("div",{staticClass:"golang-footer-github"},[s("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),s("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),s("span",[t._v("  | ")]),s("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/vote"}},[t._v("投票")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/links"}},[t._v("友情链接")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-footer-copyright"},[s("span",[t._v("© 2017 "),s("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" 版权所有")]),s("span",[t._v(" | ")]),s("span",[t._v("京ICP备12045181号-2")])])}],r={render:a,staticRenderFns:n};e.a=r},FN0O:function(t,e){function s(t,e){e=e||{};for(var s,n,r,i,o,l=e.limit||100,c=void 0===e.preserveTags||e.preserveTags,u=void 0!==e.wordBreak&&e.wordBreak,g=e.suffix||"...",m=e.moreLink||"",p=e.moreText||"»",f=e.preserveWhiteSpace||!1,h=t.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),d=0,v=[],_=!1,C=0;C<h.length;C++)if(s=h[C],rowCut=f?s:s.replace(/[ ]+/g," "),s.length){var b=a(rowCut);if("<"!==s[0])if(d>=l)s="";else if(d+b.length>=l){if(n=l-d," "===b[n-1])for(;n&&(n-=1," "===b[n-1]););else r=b.slice(n).indexOf(" "),u||(-1!==r?n+=r:n=s.length);s=b.slice(0,n).join("")+g,m&&(s+='<a href="'+m+'" style="display:inline">'+p+"</a>"),d=l,_=!0}else d+=b.length;else if(c){if(d>=l)if(i=s.match(/[a-zA-Z]+/),o=i?i[0]:"")if("</"!==s.substring(0,2))v.push(o),s="";else{for(;v[v.length-1]!==o&&v.length;)v.pop();v.length&&(s=""),v.pop()}else s=""}else s="";h[C]=s}return{html:h.join("\n").replace(/\n/g,""),more:_}}function a(t){for(var e,s,a,n=[],r=0;r<rowCut.length;r++)e=rowCut.substring(r),s=e.match(/^&[a-z0-9#]+;/),s?(a=s[0],n.push(a),r+=a.length-1):n.push(rowCut[r]);return n}void 0!==t&&t.exports&&(t.exports=s)},"RLH+":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),s("div",{staticClass:"common-body",staticStyle:{"margin-bottom":"20px"}},[s("nuxt")],1),s("app-footer"),s("BackTop")],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},SZoi:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Vwh7"),n=s("RLH+"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.default=i.exports},Vwh7:function(t,e,s){"use strict";var a=s("YXP+"),n=s("yqLL");e.a={data:function(){return{siteConfig:this.$store.state.siteConfig,user:this.$store.state.user,userLoginVisible:!this.$store.state.user,messages:this.$store.state.messages,messageCount:this.$store.state.messageCount}},head:function(){var t=this.siteConfig;return{titleTemplate:"%s - "+t.title,meta:[{hid:"description",name:"description",content:t.description},{name:"keywords",content:t.keywords}]}},middleware:"appData",components:{"app-header":a.a,"app-footer":n.a}}},WGz5:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"",""])},"YXP+":function(t,e,s){"use strict";function a(t){s("ztIN")}var n=s("/myT"),r=s("wfzn"),i=s("VU/8"),o=a,l=i(n.a,r.a,!1,o,null,null);e.a=l.exports},b1Yp:function(t,e,s){"use strict";var a={trimImg:function(t){return t=t.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(t){var e={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},s=/&(lt|gt|nbsp|amp|quot);/gi;return t.replace(s,function(t,s){return e[s]})}};e.a=a},wfzn:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-top-header"},[s("div",{staticClass:"golang-top-box"},[s("div",{staticClass:"golang-top-header-left"},[t._m(0),s("div",{staticClass:"golang-header-search"},[s("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[s("p",{staticStyle:{position:"relative"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",style:{border:t.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(e){e.target.composing||(t.q=e.target.value)}}}),s("span",{staticClass:"search-icon"})])])])]),t._m(1),s("div",{staticClass:"golang-top-header-right"},[s("ul",[t._m(2),t._m(3),t.user?[s("li",{staticClass:"user-message-wrapbox"},[t.userMessages.length?s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}}),s("span",{staticClass:"user-message-tip-count"},[t._v(t._s(t.messageCount))])],1),s("ul",{staticClass:"header-message-list",attrs:{slot:"content"},slot:"content"},t._l(t.userMessages,function(e){return s("li",["messageTypeCommentArticle"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你的话题 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"/topic/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.title))])]):"messageTypeCommentVote"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你的投票 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"/vote/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.title))])]):"messageTypeCommentComment"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"article"===e.sourceName?"/topic/"+e.sourceID+"/#reply-"+e.commentID:"/vote/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.commentContent))])]):t._e()])}))]):s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}})],1)],1),s("li",{staticStyle:{"padding-right":"0"}},[t.user?s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[s("span",{staticClass:"header-avatar"},[s("img",{attrs:{src:t.user.avatarURL,alt:""}})]),s("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),s("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[s("li",[s("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人主页")])]),t.adminVisible?s("li",[s("a",{attrs:{href:"/admin"}},[t._v("后台管理")])]):t._e(),s("li",[s("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),s("li",{on:{click:t.onSignout}},[t._v("退  出")])])]):t._e()],1)]:[s("a",{on:{click:t.onSignin}},[s("li",{staticStyle:{color:"#333"}},[t._v("登录")])]),t._m(4)]],2)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-logo-container"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:"/images/logo.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-top-header-nav"},[s("ul",[s("li",[s("a",{attrs:{href:"/"}},[t._v("话题")])]),s("li",[s("a",{attrs:{href:"/book"}},[t._v("在线图书")])]),s("li",[s("a",{attrs:{href:"/vote"}},[t._v("投票")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/signup"}},[s("li",{staticStyle:{color:"#333"}},[t._v("注册")])])}],r={render:a,staticRenderFns:n};e.a=r},y8ae:function(t,e,s){"use strict";e.a={SUCCESS:0,ERROR:1,LOGIN_TIMEOUT:1001,IN_ACTIVE:1002}},yqLL:function(t,e,s){"use strict";var a=s("2nsu"),n=s("VU/8"),r=n(null,a.a,!1,null,null,null);e.a=r.exports},ztIN:function(t,e,s){var a=s("WGz5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("48fa11cf",a,!0)}});
//# sourceMappingURL=nosidebar.99f7a999b57be4353963.js.map