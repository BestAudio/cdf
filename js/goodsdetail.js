$(function(){
	   // 详情图片
    var swiper = new Swiper('.detail_img_box', {
      effect : 'slide',
      loop:true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    // 颜色
    var mySwiper = new Swiper('.color_choose',{
      slidesPerView :7,
    })

    // 推荐
     var mySwiper = new Swiper('.recommend_list',{
      slidesPerView :'auto',
    })
})