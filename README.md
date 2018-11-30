# ex-20181130

## Part 1


## Part 2

### /GET /products
取得產品列表
```
// response
{
  message: 'OK' // or error messages
  data: [
    {
      id: '123', // 產品編號
      name: '產品名稱',
      price: 90, // 單價,
    }
  ]
}
```

### /POST /order
傳送訂單 (需登入)
```
// parameters
[
  {
    id: '123', // 產品編號
    count: 2, // 數量
    noticement: '去冰' // 備註
  },
]
// response
{
  message: 'OK' // or error messages,
}
```

### /GET /orderList
查詢訂單 (需登入)
```
// response
{
  message: 'OK' // or error messages,
  data: [
    {
      orderId: '123',
      date: '2018/11/30 14:57', // 訂購時間
      status: '已送出', // 訂單狀況(收到訂單, 已出貨, ...)
      list: [
        {
          id: '123', // 產品編號
          name: '產品名稱',
          price: 90, // 單價,
          count: 2, // 數量,
          noticement: '去冰' // 備註 
        },
      ]
    },
  ]
}
```