var newsData = require("../data/newsdata.js");
Page({
    data: {
        indicatorDots: true,
        autoPlay: true,
        interval: 2000,
        circular: true,
        useData: ""
    },
    onLoad: function(options) { //页面周期函数
        //页面初始化  options为页面跳转所带来的参数
        // console.log(newData);
        this.setData({ //this.setData可以让view重绘
            useData: newsData.initData
        })
    }
})