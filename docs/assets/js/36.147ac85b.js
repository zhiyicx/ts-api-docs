(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{382:function(a,t,s){"use strict";s.r(t);var e=s(43),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("本升级指南仅适用于 "),s("code",[a._v("2.1")]),a._v(" 版本升级至 "),s("code",[a._v("2.2")]),a._v(" 版本，如果你并非 2.1 版本，请查看其他升级指南，Plus 程序不允许跨版本升级！")])]),a._v(" "),s("h2",{attrs:{id:"更新代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新代码"}},[a._v("#")]),a._v(" 更新代码")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("1 小时")])]),a._v(" "),s("p",[a._v("这是你自我操作的步骤，确认将你的 2.1 版本代码升级到 2.2 版本，如果你做过一些自定义修改可能会出现代码冲突，你需要解决。")]),a._v(" "),s("h2",{attrs:{id:"升级依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级依赖"}},[a._v("#")]),a._v(" 升级依赖")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("3 分钟")])]),a._v(" "),s("p",[a._v("进入 Plus 程序目录，执行：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer update -vvv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这个过程根据你的网速决定快慢。")]),a._v(" "),s("h2",{attrs:{id:"清理程序缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理程序缓存"}},[a._v("#")]),a._v(" 清理程序缓存")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("1 分钟")])]),a._v(" "),s("p",[a._v("不管你是否使用 Laravel 命令进行过程序优化，我们仍然建议你执行下面的命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan view:clear "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nphp artisan route:clear "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nphp artisan config:clear\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"升级数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级数据库"}},[a._v("#")]),a._v(" 升级数据库")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("5 分钟")])]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("common_configs")]),a._v(" 公用配置")]),a._v(" "),s("p",[a._v("索引："),s("strong",[a._v("删除 "),s("code",[a._v("name")]),a._v(" 和 "),s("code",[a._v("namespace")]),a._v(" 的混合 "),s("code",[a._v("Promary")]),a._v(" 索引")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("字段")]),a._v(" "),s("th",[a._v("可为空")]),a._v(" "),s("th",[a._v("默认值")]),a._v(" "),s("th",[a._v("其他")]),a._v(" "),s("th",[a._v("描述")]),a._v(" "),s("th",[a._v("操作")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("id")])]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[s("code",[a._v("AUTO_INCREMENT")])]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("增加")])])])]),a._v(" "),s("p",[a._v("添加索引：")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("索引字段")]),a._v(" "),s("th",[a._v("索引类型")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("id")])]),a._v(" "),s("td",[s("code",[a._v("promary")])])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("name")]),a._v(", "),s("code",[a._v("namespace")])]),a._v(" "),s("td",[s("code",[a._v("unique")])])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("name")])]),a._v(" "),s("td",[s("code",[a._v("index")])])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("namespace")])]),a._v(" "),s("td",[s("code",[a._v("index")])])])])])])]),a._v(" "),s("h2",{attrs:{id:"执行填充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行填充"}},[a._v("#")]),a._v(" 执行填充")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("1 分钟")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan migrate\nphp artisan db:seed --class"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RoleSeeder"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"清理内容缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理内容缓存"}},[a._v("#")]),a._v(" 清理内容缓存")]),a._v(" "),s("p",[s("strong",[a._v("预计耗时：")]),a._v(" "),s("code",[a._v("1 分钟")])]),a._v(" "),s("p",[a._v("到了这一步，你已经将程序成功升级到 2.0 版本了，现在我们清理下历史数据缓存即可：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("php artisan cache:clear\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=v.exports}}]);