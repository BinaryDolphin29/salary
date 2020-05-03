バイトの給与の計算ライブラリ？です。  

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
* [Node.js](https://nodejs.org/ja/) `(v13.6.0)`
* Windows 10 `(v1909)`
