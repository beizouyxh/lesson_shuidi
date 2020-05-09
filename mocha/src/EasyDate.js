class EasyDate {
    constructor() {
      this.base = new Date();
    }
    toDate () {
      return this.base;
    }
    static isLeapYear(year) {
      if (year % 100 === 0) {
        return year % 400 === 0; 
      }
      return year % 4 === 0;
    }
    static toDouble(number) {
      return number > 9 ? number.toString(): ('0' + number);
    }
  }
  
  module.exports = EasyDate;