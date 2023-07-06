---
sidebarDepth: 2
title: 签到
---


## 签到信息

返回当前连续签到信息，以及可连续签到周期


```json
GET  api/v2/sign/signView
```

响应 `200 `

```json

{
    "signDay":1,  // 已连续签到1天
    "signList":[  // 可连续签到7天
        {
            "day":1,
            "get_integral":1,
            "is_sign":true,
            "today":true
        },
        {
            "day":2,
            "get_integral":2,
            "is_sign":false,
            "today":false
        },
        {
            "day":3,
            "get_integral":3,
            "is_sign":false,
            "today":false
        },
        {
            "day":4,
            "get_integral":4,
            "is_sign":false,
            "today":false
        },
        {
            "day":5,
            "get_integral":5,
            "is_sign":false,
            "today":false
        },
        {
            "day":6,
            "get_integral":7,
            "is_sign":false,
            "today":false
        },
        {
            "day":7,
            "get_integral":8,
            "is_sign":false,
            "today":false
        }
    ]
}

```







## 检查今日是否已签到


```json
GET  api/v2/sign/daySign
```

响应 `200 `

```json

{
	"is_sign": false, // true 代表已签到
}

```



## 签到

```json
POST  api/v2/sign/add
```

响应 `201 `

```json

{
	"day": 1,
	"get_integral": 1 // 本次签到获得积分
}

```


