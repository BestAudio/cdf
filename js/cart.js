
 //总价
function totals(){
    var sum=0;
    var counts=0;
    $.each($('.check .pay_price'),function(i,item){
        let count = parseInt($(item).parents(".shopping_price").next().children().eq(0).children(".cases").val())
        price = $(item).html().substring(1);
        let total = count*price;
        sum += total;
        counts +=count;
    });
    $('.sum_price').html("￥"+sum.toFixed(2));
    let discout_price = $('.discount_price').html().substring(2);
    $('.amount_pay').html("￥"+(sum-discout_price).toFixed(2));
    $('.sum_price_dis').html($('.sum_price').html());
    $('.sum_discount').html($('.discount_price').html());
    $('.sum_prices').html($('.amount_pay').html());
    $('#sum').html(counts);
}

//加减功能
function addAndsub(){
    $(".num_btn").on("click",function(){
        let symbol = $(this).html();
        var number = $(this).parent().children().eq(1).val();
        symbol == "-"?number--:number++;
        if(number>0 && number < 13){
            $(this).parent().children().css({"backgroundColor":"#fff"});
            $(this).parent().children().eq(1).val(number);
        }else{
            if(number<0){
                $(this).css({"backgroundColor":"#ccc"});
            }else{
                $(this).css({"backgroundColor":"#ccc"});
            }
        } 
        totals()
    })
    
}
$(function(){
    //总价
    totals()
    //加减计算功能
    addAndsub()
   
    //选中计算功能
    $(".check_icon").on('click',function(){
        if($(this).prev().attr('checked') == "checked"){
            $(this).prev().attr('checked',false);
            $(this).css({"color":"#ccc"});
            $(this).parents(".shopping_item").appendTo($(".uncheck"));
        }else{
            $(this).prev().attr('checked',true);
            $(this).css({"color":"#000"});
            $(this).parents(".shopping_item").appendTo($(".check"));
        }
        totals()
    });

    //全选反选
    $(".all_icon").on('click',function(){
        if($(this).prev().attr('checked') == "checked"){
            $(this).prev().attr('checked',false);
            $(this).css({"color":"#ccc"});
            $(".shopping_item").appendTo($(".uncheck"));
            $.each($('.check_goods'),function(i,item){
                $(item).attr('checked',false);
                $(item).next().css({"color":"#ccc"});
            }) 
            totals()
        }else{
            $(this).prev().attr('checked',true);
            $(this).css({"color":"#000"});
            $(".shopping_item").appendTo($(".check"));
            $.each($('.check_goods'),function(i,item){
                $(item).attr('checked',true);
                $(item).next().css({"color":"#000"});
            })
            totals()
        }
    })
    $(".all_letter").on('click',function(){
        if($(this).prev().prev().attr('checked') == "checked"){
            $(this).prev().css({"color":"#ccc"});
            $(".shopping_item").appendTo($(".uncheck"));
            $.each($('.check_goods'),function(i,item){
                $(item).attr('checked',false);
                $(item).next().css({"color":"#ccc"});
            }) 
            totals()
        }else{
            $(this).prev().css({"color":"#000"});
            $(".shopping_item").appendTo($(".check"));
            $.each($('.check_goods'),function(i,item){
                $(item).attr('checked',true);
                $(item).next().css({"color":"#000"});
            }) 
            totals()
        }
    })
    //删除功能
})
