Component({
    properties:{
        news:{
            type:Array,
            value:[]
        }
    },
    data: {
        autoplay: true,
        interval: 2000,
        duration: 1000,
    },
    ready:function(){
        this.setData({
            news:this.data.news
        })
    }
})