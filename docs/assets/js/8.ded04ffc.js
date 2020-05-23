(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[e("a",{attrs:{href:"#%E6%94%B6%E8%97%8F"}},[t._v("收藏")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%96%E6%B6%88%E6%94%B6%E8%97%8F"}},[t._v("取消收藏")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%94%B6%E8%97%8F%E5%88%97%E8%A1%A8"}},[t._v("收藏列表")])])]),t._v(" "),e("h1",{attrs:{id:"动态收藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态收藏"}},[t._v("#")]),t._v(" 动态收藏")]),t._v(" "),e("h2",{attrs:{id:"收藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#收藏"}},[t._v("#")]),t._v(" 收藏")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /feeds/:feed/collections\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Status: 201 Created\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"收藏成功"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"取消收藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消收藏"}},[t._v("#")]),t._v(" 取消收藏")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DELETE /feeds/:feed/uncollect\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Status: 204 No Centent\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"收藏列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#收藏列表"}},[t._v("#")]),t._v(" 收藏列表")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /feeds/collections\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("limit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Integer")]),t._v(" "),e("td",[t._v("可选，默认值 20 ，获取条数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("offset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Integer")]),t._v(" "),e("td",[t._v("可选，偏移量，用于翻页，传入已请求过的数据总数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("user")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Integer")]),t._v(" "),e("td",[t._v("type = "),e("code",[t._v("users")]),t._v(" 时可选，默认值为当前用户id")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("列表为倒序")])]),t._v(" "),e("p",[t._v("Response")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Status: 200 OK\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language-json5 line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json5"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据参考动态单条内容")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);