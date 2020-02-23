const base = 964                    // 基本時給 (9:00 ~ 18:00)
// const A = (930 + (base - 910)) / 4  // 9:00 以前
// const B = (1010 + (base - 910)) / 4 // 18:00 ~ 19:00
// const C = (1040 + (base - 910)) / 4 // 19:00 ~ 20:00
// const D = (1080 + (base - 910)) / 4 // 20:00 以降

module.exports = class {
  /** @example
   * new Salary([
   *  {
   *    start: 12,
   *    end: 20.5,
   *    count: 4
   *  }
   * ]) */
  constructor(data) {
    if (!data instanceof Array && !data.filter(v => v instanceof Object).length >= 1) {
      throw new TypeError("引数が無効です。")
    }

    this.base = 964                    // 基本時給 (9:00 ~ 18:00)
    this.A = (930 + (base - 910)) / 4  // 9:00 以前
    this.B = (1010 + (base - 910)) / 4 // 18:00 ~ 19:00
    this.C = (1040 + (base - 910)) / 4 // 19:00 ~ 20:00
    this.D = (1080 + (base - 910)) / 4 // 20:00 以降

    this.data = data
    this._res = 0
    this.hours = 0
    this.days = 0
  }

  /** 
   * コンストラクタの引数をもとに支給額合計を計算します。
   * @returns {Number}
  */
  calc() {
    for (const day of this.data) {
      const { start, end, count } = day
      this.days += count

      for (var n = 0; n < count; n++) {
        this.hours += end - start

        for (var i = start; i < end; i += 0.25) {
          if (i <= 17.75) this._res += this.base / 4
          if (i >= 18 && i <= 18.75) this._res += this.B
          if (i >= 19 && i <= 19.75) this._res += this.C
          if (i >= 20) this._res += this.D
        }
      }
    }

    return this._res
  }

  /**
   * 基礎時給を計算します。
   * @returns {Number}
  */
  get kisojikyuu() {
    return base*this.hours
  }
  
  /**
   * 調整給を計算します。
   * @returns {Number}
  */
  get tyouseikyuu() {
    return this._res - this.kisojikyuu
  }

  /**
   * 通勤手当を計算します。
   * @returns {Number}
  */
  get tuukinteate() {
    if (this.days > 16) return 1000
    return Math.round((1000 / 16.99) * this.days)
  }

  /**
   * <Number> を日本円へフォーマットします。
   * @param {Number} n
   * @returns {String}
   */
  static toJAPANESE_YEN(n = 0) {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY"
    }).format(n)
  }
} 
