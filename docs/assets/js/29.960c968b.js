(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{385:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"登录-注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录-注册"}},[t._v("#")]),t._v(" 登录/注册")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#register"}},[t._v("用户注册")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#login"}},[t._v("用户登录")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#logout"}},[t._v("用户退出")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#refresh"}},[t._v("刷新 Token")])])]),t._v(" "),s("p",[s("a",{attrs:{name:"register"}})]),t._v(" "),s("h2",{attrs:{id:"用户注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户注册"}},[t._v("#")]),t._v(" 用户注册")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST api/v2/users\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("phone")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("Required without email, User China phone bumber.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("email")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("Required withput phone, User E-Mail.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("Required, User registerByPhone name.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("password")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("用户密码，长度最小可无，最大不能超过 64 位4")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("verifiableType")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("Required, Notification serve verification type. "),s("code",[t._v("mail")]),t._v(" "),s("code",[t._v("sms")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("verifiableCode")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("Required, Verification code.")])])])]),t._v(" "),s("h3",{attrs:{id:"响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20160")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("access_token")]),t._v(" "),s("td",[t._v("授权 Token")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("token_type")]),t._v(" "),s("td",[t._v("Token 类型")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("expires_in")]),t._v(" "),s("td",[t._v("过期时间，单位分钟")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("refresh_ttl")]),t._v(" "),s("td",[t._v("刷新过期时间，单位分钟")])])])]),t._v(" "),s("p",[s("a",{attrs:{name:"login"}})]),t._v(" "),s("h2",{attrs:{id:"用户登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户登录"}},[t._v("#")]),t._v(" 用户登录")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST api/v2/auth/login\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"输入-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入-2"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("login")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[s("strong",[t._v("必须")]),t._v("，用户认证字段，可以是 "),s("code",[t._v("name")]),t._v(" 、 "),s("code",[t._v("email")]),t._v(" 和 "),s("code",[t._v("phone")]),t._v(" 。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("verifiable_code")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[s("strong",[t._v("可选")]),t._v("，登录验证码。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("password")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",[s("strong",[t._v("可选")]),t._v("，用户密码。")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("password")]),t._v(" 或者 "),s("code",[t._v("verifiable_code")]),t._v(" 必须选择一个，如果选择 "),s("code",[t._v("verifiable_code")]),t._v(" 进行登录。那么 "),s("code",[t._v("login")]),t._v(" 字段只能是 "),s("code",[t._v("phone")]),t._v(" 或者 "),s("code",[t._v("email")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"响应-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应-2"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20160")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("access_token")]),t._v(" "),s("td",[t._v("授权 Token")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("token_type")]),t._v(" "),s("td",[t._v("Token 类型")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("expires_in")]),t._v(" "),s("td",[t._v("过期时间，单位分钟")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("refresh_ttl")]),t._v(" "),s("td",[t._v("刷新过期时间，单位分钟")])])])]),t._v(" "),s("p",[s("a",{attrs:{name:"logout"}})]),t._v(" "),s("h2",{attrs:{id:"用户退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户退出"}},[t._v("#")]),t._v(" 用户退出")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST|PUT|PATCH|GET   api/v2/auth/logout\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("需要 "),s("code",[t._v("认证")])])]),t._v(" "),s("h3",{attrs:{id:"响应-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应-3"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"退出成功"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"refresh"}})]),t._v(" "),s("h2",{attrs:{id:"刷新-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新-token"}},[t._v("#")]),t._v(" 刷新 Token")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST|PUT|PATCH|GET    api/v2/auth/refresh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("需要 "),s("code",[t._v("认证")])])]),t._v(" "),s("h3",{attrs:{id:"响应-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应-4"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"#login"}},[t._v("用户登录")])])])}),[],!1,null,null,null);e.default=r.exports}}]);