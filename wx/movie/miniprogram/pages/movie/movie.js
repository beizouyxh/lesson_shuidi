// pages/movie/movie.js
Page({
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.request({
            url: 'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10',
            header: {
                'content-type': 'application/xml'
            },
            success: function(res) {
                console.log(res.data)
            }
        })

    }

})