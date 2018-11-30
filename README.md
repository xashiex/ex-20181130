# ex-20181130

## Part 1

- Timer

      /timer
- Ajax

      /ajax

- Multiples of 3 and 5

      /sumOf3and5

      function sumOf3and5(target) {
        const t = target - 1;
        const n3 = Math.floor(t / 3);
        const n5 = Math.floor(t / 5);
        const n15 = Math.floor(t / 15);

        function sumX(mul, n) {
          return mul * 0.5 * n * (n + 1);
        }

        return sumX(3, n3) + sumX(5, n5) - sumX(15, n15);
      }

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