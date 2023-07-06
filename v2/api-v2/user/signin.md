---
sidebarDepth: 2
title: 签到
---


# 签到

## 签到天数配置


```
GET /api/v2/sign/signView
```

响应：

```
{
	"signDay": 1, // 当前连续签到天数
	"signList": [
		{
			"day": 2,// 当前表示的天
			"get_integral": 3, // 该天增加了多少积分
			"is_sign": false, // 该天是否已经签到过了
			"today": false, // 当前天数是否是今天
		},
	]

}
```

## 签到


```
POST /api/v2/sign/add
```

响应：

```
Status: 200 OK
```
```json5
{
   "day": 1, // 连续签到天数
   "get_integral": 1 // 本次签到获得积分
}
```

## 检查今日是否签到


```
GET /api/v2/sign/daySign
```

响应：

```
Status: 200 OK
```
```json5
{
   "is_sign": true // 检查今天是否已经签过到了
}
```

