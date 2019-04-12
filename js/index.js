$(function(){
    //轮播图
    // new BannerPic({
    //     "boxDom":$(".banner")[0],//轮播图的容器
    //     "imgs":["img/index/banner01.jpg","img/index/banner02.jpg","img/index/banner03.jpg","img/index/banner04.jpg","img/index/banner05.jpg","img/index/banner06.jpg"],
    //     "doudouDirection":"下"
    // });
    //返回顶部
    mapHref();

    //轮播图
    var swiper = new Swiper('.banner', {
      effect : 'slide',
      loop : true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    var mySwiper = new Swiper('.swiper1',{
        freeMode : true,
    })

    // special_goodslist
    var swiper = new Swiper('.special_goodslist', {
      slidesPerView :'auto'
    });
})

function mapHref(){
    $(".content")[0].addEventListener('touchmove',function(e){
        if($(".hot_sell").offset().top<0){
            $(".back_top").css({"display":"block"});
        }else if($(".hot_sell").offset().top>0){
            $(".back_top").css({"display":"none"});
        } 
    })
    $('.back_top').on('touchend',function(){
        var t = $('.content').scrollTop();
        console.log(t)
        var mytimer = setInterval(function(){
            if(t < 0){
                clearInterval(mytimer);
            }else{
                t -= 50;
                $('.content').scrollTop(t);
            }
        },13);
    })
}
