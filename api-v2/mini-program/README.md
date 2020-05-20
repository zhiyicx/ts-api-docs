---
sidebarDepth: 2
---

# 微信小程序 APIs 接口

## 配置消息推送

**URL(服务器地址)** `(http|https)://domain/api/v2/wechat/mini-program/check-push`

**Token(令牌)** 根据小程序信息计算：`MD5("appid" + ":" + "appsecret")`

**EncodingAESKey(消息加密密钥)** 设置为空

**消息加密方式** 选择`明文模式`

**数据格式** 选择`JSON`


## 获取小程序配置

> 小程序配置在启动接口`/api/v2/bootstrappers`中返回`wechat_mini_program`，配置详情如下：

```json5
{
    "ugc": false,       // 是否开启评论功能
    "video": false,     // 是否开启视频播放
    "reward": false,    // 是否开启打赏功能
    "download": false,  // 是否开启APP下载引导
    "secCheck": true, // 是否开启内容检测
}
```

## 获取小程序二维码（getwxacodeunlimit）

```
GET /api/v2/wechat/mini-program/wxacodeunlimit
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `params` | `string` | **必须**，要传给小程序的参数 |

示例：
> /api/v2/wechat/mini-program/wxacodeunlimit?params={"scene":"1"}

> 参数细节和返回值参考： [小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)
