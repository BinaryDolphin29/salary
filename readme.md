自分専用のバイトの給与計算ライブラリです。  

# Exsample
```javascript
const Calc = require("./calc")
const salary = new Calc([
    {
        start: 12.5,
        end: 20.5,
        count: 4
    },
    {
        start: 8,
        end: 14,
        count: 2
    }
])

const res = salary.Calc()
console.log(Calc.ToJAPANESE_YEN(res))
```

# 環境
* [Node.js](https://nodejs.org/ja/) `(v15.9.0)`
* Windows 10 Home `(21H1)`
