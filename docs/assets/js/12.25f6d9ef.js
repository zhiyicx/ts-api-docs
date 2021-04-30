(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(t,s,e){"use strict";e.r(s);var r=e(42),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"后端常见问题集锦"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端常见问题集锦"}},[t._v("#")]),t._v(" 后端常见问题集锦")]),t._v(" "),e("h2",{attrs:{id:"存储相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储相关"}},[t._v("#")]),t._v(" 存储相关")]),t._v(" "),e("h3",{attrs:{id:"_1-使用本地存储创建上传任务时-出现401-403错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用本地存储创建上传任务时-出现401-403错误"}},[t._v("#")]),t._v(" 1. 使用本地存储创建上传任务时，出现401/403错误？")]),t._v(" "),e("blockquote",[e("p",[t._v("http状态码中，401表示请求没有通过认证，所以此问题的终极原因就是请求没有通过认证")])]),t._v(" "),e("blockquote",[e("p",[t._v("403表示无权操作")])]),t._v(" "),e("h4",{attrs:{id:"问题排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题排查"}},[t._v("#")]),t._v(" 问题排查")]),t._v(" "),e("h5",{attrs:{id:"_403状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_403状态码"}},[t._v("#")]),t._v(" 403状态码")]),t._v(" "),e("p",[t._v("表示发起当前请求的用户没有上传附件的权限，请在后台管理中")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/assets/img/Q&A/storage/roles.png")}}),t._v(" "),e("img",{attrs:{src:t.$withBase("/assets/img/Q&A/storage/storage-ability.png")}}),t._v("\n勾选**上传附件**权限\n"),e("blockquote",[e("p",[t._v("上面的图示中，我们默认发送当前请求的用户所在的用户组为"),e("code",[t._v("创始人")]),t._v("，你需要根据实际情况来处理")])]),t._v(" "),e("h5",{attrs:{id:"_401状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_401状态码"}},[t._v("#")]),t._v(" 401状态码")]),t._v(" "),e("p",[t._v("由于创建上传任务时使用 "),e("code",[t._v("URL::temporarySignedRoute")]),t._v("创建了用于上传的临时url")]),t._v(" "),e("p",[t._v("此url包含了上传文件时所需要的参数，加密值以及时间限制")]),t._v(" "),e("p",[t._v("而验证加密值时，临时url和上传请求必须拥有的协议，即"),e("code",[t._v("http")]),t._v(" 或者 "),e("code",[t._v("https")]),t._v(",")]),t._v(" "),e("p",[t._v("所以需要设置 "),e("code",[t._v("storage/configure/plus.yml")]),t._v("中的 "),e("code",[t._v("app.url")]),t._v(" 和  "),e("code",[t._v("filesystem.disks.public.url")]),t._v("使用相同的协议")]),t._v(" "),e("blockquote",[e("p",[t._v("如果使用"),e("code",[t._v("https")]),t._v(",需要提前设置好nginx的站点配置使用ssl监听请求")])]),t._v(" "),e("h3",{attrs:{id:"_2-oss-相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-oss-相关"}},[t._v("#")]),t._v(" 2. OSS 相关")]),t._v(" "),e("h4",{attrs:{id:"oss-配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oss-配置说明"}},[t._v("#")]),t._v(" OSS 配置说明")]),t._v(" "),e("p",[e("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/slimkit/thinksns-plus-guide/issues/46",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看说明"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"oss-镜像回源规则怎么填写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oss-镜像回源规则怎么填写"}},[t._v("#")]),t._v(" OSS 镜像回源规则怎么填写？")]),t._v(" "),e("p",[e("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/slimkit/thinksns-plus-guide/issues/45",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看说明"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_3-客户端访问-服务端-返回-unauthenticated-怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端访问-服务端-返回-unauthenticated-怎么解决"}},[t._v("#")]),t._v(" 3. 客户端访问 服务端 返回 Unauthenticated , 怎么解决？")]),t._v(" "),e("p",[t._v("解决方案：")]),t._v(" "),e("p",[t._v("项目根目录下运行")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("php artisan jwt:secret --force\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-提示-too-many-attempts-怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-提示-too-many-attempts-怎么办"}},[t._v("#")]),t._v(" 4. 提示 Too Many Attempts. 怎么办？")]),t._v(" "),e("p",[e("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/slimkit/thinksns-plus-guide/issues/37",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看解决方案"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);