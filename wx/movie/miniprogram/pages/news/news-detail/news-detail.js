var newsData = require("../../data/newsdata.js");
Page({
    data: {
        // detailData: []
    },
    onLoad: function(options) {
        // console.log(newsData.initData[options.newsid]);
        this.setData(newsData.initData[options.newsid])
            // this.setData({
            //     detailData: newsData.initData[options.newsid]
            // })
    }
})