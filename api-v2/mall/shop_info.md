---
sidebarDepth: 3
---

## 卖家信息

### 首次填写
```http request
POST /api/v2/mall/shop-info
```
请求参数
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `qrCode` | `string` | **可选**，二维码 |
| `weChat` | `string` | **可选**，微信号 |
| `phone` | `string` | **可选**，联系电话 |

```
Status: 201 Created
```
````json5
{
  "message": "保存成功"
}
````

### 检测
```http request
GET /api/v2/mall/shop-info-check
```
````json5
{
  "status": true, // 是否有信息
  "is_original": true // status 为true时出现
}
````

### 获取信息
```http request
GET /api/v2/mall/shop-info
```
```json5
{
  "user_id": 4,
      "is_original": null,
      "qrCode": {
          "url": "http://ts.test/storage/public:MjAyMC8wNC8yNi9lOTk4SFdNT2FsbWRVQkNiek1UM2NCSDRnTkppT04xS2lXcWhqZ3VVVWpYemFDNFdXRDRwQ01UWVFKYVVvb1RFLkpQRw==",
          "vendor": "local",
          "mime": "image/jpeg",
          "size": 320452,
          "dimension": {
            "width": 800,
            "height": 800
          },
          "node": "public:2020/04/26/e998HWMOalmdUBCbzMT3cBH4gNJiON1KiWqhjguUUjXzaC4WWD4pCMTYQJaUooTE.JPG"
      },
      "weChat": "2341",
      "phone": "12341"
}
```
