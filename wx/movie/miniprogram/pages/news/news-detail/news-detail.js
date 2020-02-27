var newsData = require("../../data/newsdata.js");
Page({
    data: {
        // detailData: []
    },
    onLoad: function(options) {
        // console.log(newsData.initData[options.newsid]);
        this.setData(newsData.initData[options.newsid])
        this.setData({
                newsid: options.newsid
            })
            // this.setData({
            //     detailData: newsData.initData[options.newsid]
            // })
            //测试本地存储
            // wx.setStorageSync('key', 'value')
            // console.log(wx.getStorageSync('key'));
            // wx.removeStorageSync('key');
            // wx.clearStorageSync('key');
            //收藏存储数据格式
            /*

             var newsCollect={
                 0:true
                 1.false
                 2.true
             }
             */
            //第一次进入的时候判断是否存在本地存储以及是否收藏
        var newsCollect = wx.getStorageSync('newsCollect');
        // console.log(newsCollect);
        //如果newsCollect存在，则代表以前收藏过或者取消过收藏
        if (newsCollect) {
            var newCollect = newsCollect[options.newsid];
            this.setData({
                collected: newCollect
            })
        } else {
            //第一次进入，根本不存在数据
            var newsCollect = {};
            //把当前唯一Id扔到newsCollect对象中，然后默认指定false
            newsCollect[options.newsid] = false;
            //扔到本地存储中
            wx.setStorageSync('newsCollect', newsCollect);
        }
    },
    collectTap: function(event) {
        //注意：newsCollect 所有数据的集合
        var newsCollect = wx.getStorageSync('newsCollect');
        //注意：newCollect是当前一条数据
        var newCollect = newsCollect[this.data.newsid]
            //点击的时候，如果收藏则取消，如果未收藏则收藏
        newCollect = !newCollect; //当前
        //更新到本地存储
        newsCollect[this.data.newsid] = newCollect
        wx.getStorageSync('newsCollect', newsCollect);
        //更新视图
        this.setData({
            collected: newsCollect[this.data.newsid]
        })
        wx.showToast({
            title: newsCollect[this.data.newsid] ? '收藏成功' : '取消收藏',
            icon: 'success',
            duration: 800,
            mask: true
        })
    }
})